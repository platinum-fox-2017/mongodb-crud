# mongodb-crud
CRUD with MongoDB  

##### List of books routes:

|             Route           |  HTTP  |             Description               |
| --------------------------- | ------ | ------------------------------------- |
| /api/books                  | GET    | Get all the books                     |
| /api/books/:id              | GET    | Get a single books                    |
| /api/books/                 | POST   | Create a books                        |
| /api/books/:id              | DELETE | Delete a books                        |
| /api/books/:id              | PUT    | Update a books with new data          |

##### Usage
With only npm:
```
npm install
npm run dev
```

Access API `http://localhost:3000/api/books`
