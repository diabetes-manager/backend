# DiabetesManager v1.0.0

Api for Diabetes Manager storing and getting information from the database.

- [Root](#root)
	- [/api](#/api)
	
- [Users](#users)
	- [/api/users/{id}](#/api/users/{id})
	- [/api/users](#/api/users)
	- [/api/users](#/api/users)
	


# Root

## /api



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

## /api/users/{id}



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
## /api/users



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
## /api/users



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

