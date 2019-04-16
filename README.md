# Databetes v1.0.0

Databetes API docs

- [Root](#root)
	- [GET /api](#get-/api)
	
- [Users](#users)
	- [GET /api/users/{id}](#get-/api/users/{id})
	- [GET /api/users](#get-/api/users)
	- [POST /api/users](#post-/api/users)
	- [DELETE /api/users/:id](#delete-/api/users/:id)
	


# Root

## GET /api



	GET /api


### Examples

Request Structure

```
axios.get('/api');
```

### Success Response

Example:

```
[
    {
           "message": "Hello!"
       }...
   ]
```
# Users

## GET /api/users/{id}



	GET /api/users/:id


### Examples

Request

```
axios.get('/api/users/{id}');
```

### Success Response

Response

```
[
    {
           "id": 1,
           "username": "tanka",
           "bg_high": 7,
           "bg_low": 3,
           "bg_target_top": 10,
           "bg_target_bottom": 1,
           "height": null,
           "weight": null,
           "age": null,
           "gender": null,
           "carb_insulin": null
       }
   ]
```
## GET /api/users



	GET /api/users


### Examples

Request

```
axios.get('/api/users');
```

### Success Response

Response

```
[
    {
           "id": 1,
           "username": "tanka",
           "bg_high": 7,
           "bg_low": 3,
           "bg_target_top": 10,
           "bg_target_bottom": 1,
           "height": null,
           "weight": null,
           "age": null,
           "gender": null,
           "carb_insulin": null
       }...
   ]
```
## POST /api/users



	POST /api/users


### Examples

Request

```
axios.post('/api/users');
```

### Success Response

Response

```
    HTTP/1.1 201
{
       "message":"Thank you, user has been added"
   }
```
### Error Response

Response

```
HTTP/1.1 400
{
    "message":"Username exists, please choose another"
}
```
## DELETE /api/users/:id



	DELETE /api/users/:id


### Examples

Request

```
axios.delete('/api/users/{id}');
```

### Success Response

Response

```
    HTTP/1.1 200
{
       "message":"{1}, user has been deleted"
   }
```
### Error Response

Response

```
HTTP/1.1 400
{
    "message":"Sorry, user does not exist"
}
```

