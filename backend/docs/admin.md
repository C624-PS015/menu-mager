# Admin API Spec

## Login Admin API

Endpoint :  POST /api/admin

Request Body :

```json
{
  "email": "example@gmail.com",
  "password": "secret123"
}
```

Response Body Success :

```json
{
  "status": "success",
  "message": "login successfully",
  "data": {
    "token": "unique-token"
  }
}
```

Response Body Error :

```json
{
  "status": "fail",
  "message": "Email or password is incorrect!"
}
```