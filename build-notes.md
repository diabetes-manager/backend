# Express & Postgres via Knex

## Setup


```js
// project's dependencies
yarn add knex pg
```

```js
// project's dev dependencies
yarn add nodemon --dev
```

### DB Setup

```bash
$ psql postgres
```

```sql
postgres > CREATE DATABASE diabetes;
postgres > CREATE DATABASE diabetes_test;
```

## Knex 

### Config

```bash
$ yarn knex init
Created ./knexfile.js
```

Replace contents of `./knexfile.js` with:

```js
module.exports = {
  development: {
    client: 'pg',
    connection:'postgres://localhost/diabetes',
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds/dev'
    },
    useNullAsDefault: true
  },

  test: {
    client: 'pg',
    connection:'postgres://localhost/diabetes_test',
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds/test'
    },
    useNullAsDefault: true
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    migrations: {
      directory: './db/migrations'
    },
    seeds: {
      directory: './db/seeds/production'
    },
    useNullAsDefault: true
  }
}
```

### Migrations

#### Create Table

```bash
$ yarn knex migrate:make create-diabetes-table
```


#### `up` and `down` Functions

Populate those functions in your `migrations` file.
For example:


```js
exports.up = function(knex) {
  let createQuery = `CREATE TABLE diabetes(
    id SERIAL PRIMARY KEY NOT NULL,
    message TEXT,
    created_at TIMESTAMP
  )`
  return knex.raw(createQuery)
}

exports.down = function(knex) {
  let dropQuery = `DROP TABLE diabetes`
  return knex.raw(dropQuery)
}
```


#### Run Migrations

```js
$ yarn knex migrate:latest
```

Add `--env=test` to migrate your test database.


### Seeds

#### Create Seeds

```bash
$ knex seed:make <examples>
```

Replace the function in `seeds/dev/<examples>.js` with your own seeds.d

#### Seed DB

```bash
$ yarn knex seed:run
```

## Requiring Necessary Modules into Express

> The following lines may need their paths adjusted depending on where in the project they're used.

```js
const environment = process.env.NODE_ENV || 'development';    // if something else isn't setting ENV, use development
const configuration = require('../knexfile')[environment];    // require environment's settings from knexfile
const database = require('knex')(configuration);              // connect to DB via knex using env's settings
```

You're ready to get devving!