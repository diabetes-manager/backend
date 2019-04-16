# MyHouse v1.0.0

Api for MyHouse project storing and getting information from the sqlite database.

- [ApiRoot](#apiroot)
	- [Get ApiRoot](#get-apiroot)
	
- [Users](#users)
	- [Get Users](#get-users)
	


# ApiRoot

## Get ApiRoot



	GET /api


### Examples

Request example:

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
### Error Response

Error Example:

```
ERROR XXX
{
    "status": xxx,
    "message": "Some Error Message"
}
```
# Users

## Get Users



	GET /api/users


### Examples

Request example:

```
axios.get('/api/users');
```

### Success Response

Example:

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
### Error Response

Error Example:

```
ERROR XXX
{
    "status": xxx,
    "message": "Some Error Message"
}
```

