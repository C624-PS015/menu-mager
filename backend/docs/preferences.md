# Preferences API Spec

## Create Preferences

Endpoint : POST /api/preferences

Request Body:

``` json
{
    "header": {
        "Authorization": "Bearer <token>",
        "Content-type": "multipart/form-data"
    },
    "body": {
        "name": "example name"
        "photo": "example.jpg"
    }
}
```

Response Body Success :

``` json
{
    "status": "success",
    "message": "success add data preferences",
    "data": {
        "name": "example name"
        "photo": "example.jpg"
    }
}
```

Response Body Error : 

``` json
{
    "status": "fail",
    "message": "preferences name already exists!",
}
```

## Update Preferences

Endpoint : PUT /api/preferences/:id

Request Body:

``` json
{
    "header": {
        "Authorization": "Bearer <token>",  
        "Content-type": "multipart/form-data"
    },
    "body": {
        "name": "example name"
        "photo": "example.jpg"
    }
}
```

Response Body Success :

``` json
{
    "status": "success",
    "message": "success update data preferences",
    "data": {
        "name": "example name"
        "photo": "example.jpg"
    }
}
```

Response Body Error :

``` json
{
    "status": "fail",
    "message": "no preferences found!",
}
```

## Remove Preferences

Endpoint : DELETE /api/preferences/:id

Request Body:

``` json
{
    "header": {
        "Authorization": "Bearer <token>",
        "Content-type": "multipart/form-data"
    },
    body: {
        "name": "example name"
        "photo": "example.jpg"
    }
}
```

Response Body Success :

``` json
{
    "status": "success",
    "message": "success remove data preferences",
    "data": {
        "name": "example name"
        "photo": "example.jpg"
    }
}
```

Response Body Error :

``` json
{
    "status": "fail",
    "message": "no preferences found!",
}
```

## Get Detail Preferences

Endpoint : GET /api/preferences/:id

Request Body:

``` json
{
    "header": {
        "Authorization": "Bearer <token>",
    }
}
```

Response Body Success :

``` json
{
    "status": "success",
    "message": "success get detail data preferences",
    "data": {
        "name": "example name"
        "photo": "example.jpg"
    }
}
```

Response Body Error :

``` json
{
    "status": "fail",
    "message": "no preferences found!",
}
```
## Get All Preferences

Endpoint : GET /api/preferences

Response Body Success :

``` json
{
    "status": "success",
    "message": "success get all data preferences",
    "data": [
        {
            "name": "example name",
            "photo": "example photo"
        },
        "..."
    ]
}
```


