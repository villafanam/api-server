# LAB - Class 04

## Project: api-server

### Author: Marco Villafana

### Problem Domain  

Build a REST API using Express, by creating a proper series of endpoints that perform CRUD operations on a Postgres SQL Database, using the REST standard

### Links and Resources

- [GitHub Actions ci/cd](https://github.com/villafanam/api-server/actions) 
- [GitHub PR](https://github.com/villafanam/api-server/pull/1) 
- [back-end server url](https://api-server-ii04.onrender.com) 


### Setup

#### `.env` requirements (where applicable)

- `PORT=3001`
- `DATABASE_URL=postgres://localhost:5432/api-app`


#### How to initialize/run your application (where applicable)

- e.g. `npm start`

#### How to use your library (where applicable)

#### Features / Routes

- Feature One: Details of feature
  - GET : `/customer` - Get all customers
  - GET : `/customer/:id` - Get one customer
  - POST : `/customer` - Create a customer
  - PUT : `/customer/:id` - Update one customer
  - Delete : `/customer/:id` - Delete one customer

- Feature Two: Details of feature
  - GET : `/food` - Get all food items
  - GET : `/food/:id` - Get one food item
  - POST : `/food` - Create a food item
  - PUT : `/food/:id` - Update one food item
  - Delete : `/food/:id` - Delete one food item

#### Tests

- tests
  - Create a customer/food
  - Get all customers/foods
  - Get one customer/food
  - Update one customer/food (Incomplete)
  - Delete one customer/food
  - handles invalid request route
  - handles invalid request method

#### UML

[Class 04 GitHub Repo](https://github.com/codefellows/seattle-code-javascript-401d51/tree/main/class-03)