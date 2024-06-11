# User API SPEC

## Register User API

Endpoint : POST /api/users/register

Request Body :

```json
{
  "username": "robby",
  "name": "muhammad robby",
  "password": "123",
  "password2": "123"
}
```

Response Body Success :

```json
{
  "data": {
    "username": "robby",
    "name": "muhammad robby"
  }
}
```

Response Body Error :

```json
{
  "errors": "username already registered"
}
```

## Login User API

Endpoint : POST /api/users/login

Request Body:

```json
{
  "username": "robby",
  "password": "123"
}
```

Response Body Success :

```json
{
  "data": {
    "token": "unique_token"
  }
}
```

Response Body Error :

```json
{
  "errors": "username or password wrong"
}
```

## Update User API

Endpoint : PACTH /api/users/current

Headers :

- Authorization : token

Request Body :

```json
{
  "name": "muhammad robby update", // optional
  "password": "1234" // optional
}
```

Response Body Success :

```json
{
  "data": {
    "username": "robby",
    "name": "muhammad robby update"
  }
}
```

Response Body Error :

```json
{
  "errors": "name max length 100 characters"
}
```

## Get User API

Endpoint : GET /api/users/current

Headers :

- Authorization : token

Response Body Success :

```json
{
  "data": {
    "username": "robby",
    "name": "muhammad robby update"
  }
}
```

Response Body Error :

```json
{
  "errors": "Unauthorized"
}
```

## Logout User API

Enpoint : DELETE /api/users/logout

Response Body Success :

```json
{
  "data": "ok"
}
```

Response Body Error :

```json
{
  "errors": "Unauthorized"
}
```
