# Address API Spec

## Create Address API

Endpoint : POST /api/contact/:contactId/addresses

Headers :

- Authorization : token

Request Body :

```json
{
  "street": "Al Mubarok",
  "city": "Jakarta",
  "province": "DKI Jakarta",
  "country": "Indonesia",
  "postal_code": "123"
}
```

Response Body Success:

```json
{
  "data": {
    "id": 1,
    "street": "Al Mubarok",
    "city": "Jakarta",
    "province": "DKI Jakarta",
    "country": "Indonesia",
    "postal_code": "123"
  }
}
```

Response Body Error:

```json
{
  "errors": "failed creating address"
}
```

## Update Address API

Endpoint : PUT /api/contact/:contactId/addresses/:addressId

Headers :

- Authorization : token

Request Body :

```json
{
  "street": "Al Mubarok",
  "city": "Jakarta",
  "province": "DKI Jakarta",
  "country": "Indonesia",
  "postal_code": "123"
}
```

Response Body Success:

```json
{
  "data": {
    "id": 1,
    "street": "Al Mubarok",
    "city": "Jakarta",
    "province": "DKI Jakarta",
    "country": "Indonesia",
    "postal_code": "123"
  }
}
```

Response Body Error:

```json
{
  "errors": "failed updating address"
}
```

## Get Address API

Endpoint : GET /api/contact/:contactId/address/:addressId

Headers :

- Authorization : token

Response Body Success:

```json
{
  "data": {
    "id": 1,
    "street": "Al Mubarok",
    "city": "Jakarta",
    "province": "DKI Jakarta",
    "country": "Indonesia",
    "postal_code": "123"
  }
}
```

Response Body Error:

```json
{
  "errors": "address not found"
}
```

## List Address API

Endpoint : GET /api/contact/:contactId/addresses

Headers :

- Authorization : token

Response Body Success:

```json
{
  "data": [
    {
      "id": 1,
      "street": "Al Mubarok",
      "city": "Jakarta",
      "province": "DKI Jakarta",
      "country": "Indonesia",
      "postal_code": "123"
    },
    {
      "id": 2,
      "street": "Al Mubarok",
      "city": "Jakarta",
      "province": "DKI Jakarta",
      "country": "Indonesia",
      "postal_code": "123"
    }
  ]
}
```

Response Body Error:

```json
{
  "errors": "contact not found"
}
```

## Delete Address API

Endpoint : DELETE /api/contact/:contactId/address/:addressId

Headers :

- Authorization : token

Response Body Success:

```json
{
  "data": "ok"
}
```

Response Body Error:

```json
{
  "errors": "contact not found"
}
```
