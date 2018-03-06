# mongodb-crud
CRUD with MongoDB

# Routing
basic routes for this project:

| Route               | HTTP   | Description  |
| --------------      |:------:| ------------:|
| /books/add          | POST   | add a new book |
| /books/library      | GET    | get all books |
| /books/library/:_id | GET    | Get a single book by ID |
| /books/edit/:id     | PUT    | Update a book by ID |
| /books/delete/:id   | DELETE | Delete a book by ID |


# Usage

Setting up
```
npm install
```

Starting with npm
```
npm start
```
or
```
npm run dev
```

#Book schema
```
isbn: string
title: string
author: string
category: string
stock : number
```
Access from localhost:3000/books with postman/insomnia
