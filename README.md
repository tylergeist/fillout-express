# [Fillout - Form Response Filtering]

This API provides an interface to interact with existing Fillout form responses API. It's built with Node.js and Express and is an example implmentation of a simple express server.


## Start the server:
```npm run dev```


## Get Filtered Responses
Endpoint:

### GET /api/:formId/filteredResponses

**Query Parameters:**

filters (string, required): A URL-encoded JSON string representing the filters to apply.

*Example Query Params as JSON:*
```[ { "id": "fFnyxwWa3KV6nBdfBDCHEA", "condition": "equals", "value": 5 }, { "id": "dSRAe3hygqVwTpPK69p5td", "condition": "greater_than", "value": "2020-02-23T05:01:47.691Z" } ]```

Example Request:

```curl -X GET 'http://localhost:3000/api/cLZojxk94ous/filteredResponses?filters=%5B%7B%22id%22%3A%22nameId%22%2C%22condition%22%3A%22equals%22%2C%22value%22%3A%22Timmy%22%7D%5D'```
