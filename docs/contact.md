# Contact API Spec

## Create Contact API

Enpoint : POST /api/contacts

Headers :

- Authorization : token

Request Body :

```json
{
  "first_name": "muhammad",
  "last_name": "robby",
  "email": "robby@example.com",
  "phone": "12345678"
}
```

Response Body Success :

```json
{
  "data": {
    "id": 1,
    "first_name": "muhammad",
    "last_name": "robby",
    "email": "robby@example.com",
    "phone": "12345678"
  }
}
```

Response Body Error :

```json
{
  "errors": "email is not valid"
}
```

## Update Contact API

Enpoint : PUT /api/contacts/:id

Headers :

- Authorization : token

Request Body :

```json
{
  "first_name": "muhammad",
  "last_name": "robby",
  "email": "robby@example.com",
  "phone": "12345678"
}
```

Response Body Success :

```json
{
  "data": {
    "id": 1,
    "first_name": "muhammad",
    "last_name": "robby",
    "email": "robby@example.com",
    "phone": "12345678"
  }
}
```

Response Body Error :

```json
{
  "errors": "email is not valid"
}
```

## Get Contact API

Enpoint : GET /api/contacts/:id

Headers :

- Authorization : token

Response Body Success :

```json
{
  "data": {
    "id": 1,
    "first_name": "muhammad",
    "last_name": "robby",
    "email": "robby@example.com",
    "phone": "12345678"
  }
}
```

Response Body Error :

```json
{
  "errors": "contact not found"
}
```

## Search Contact API

Enpoint : GET /api/contacts

Headers :

- Authorization : token

Query Params :

- name : Search By first_name or last_name, using like, opsional
- email : Search By email, using like, opsional
- phone : Search By phone, using like, opsional
- page : number of pages default 1,
- size : number of pages default 10

Response Body Success :

```json
{
  "data": [
    {
      "id": 1,
      "first_name": "muhammad",
      "last_name": "robby",
      "email": "robby@example.com",
      "phone": "12345678"
    },
    {
      "id": 2,
      "first_name": "robby",
      "last_name": "lagi",
      "email": "robbylagi@example.com",
      "phone": "12345678"
    }
  ],
  "paging": {
    "page": 1,
    "total_pages": 3,
    "total_items": 30
  }
}
```

Response Body Error :

```json
{
  "errors": "contact not found"
}
```

## Remove Contact API

Enpoint : DELETE /api/contacts/:id

Headers :

- Authorization : token

Response Body Success :

```json
{
  "data": "id"
}
```

Response Body Error :

```json
{
  "errors": "contact not found"
}
```
