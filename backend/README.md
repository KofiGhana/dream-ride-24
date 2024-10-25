# Dream Ride 24 Backend

## Table of Contents

* Introduction
* Features
* Requirements
* Installation
* Usage
* API Endpoints
* Testing
* Deployment
* Security
* Contributing

## Introduction

Dream Ride 24 Backend is a Node.js and Express.js-based RESTful API designed to provide a seamless car rental experience for users.

## Features

* User authentication and authorization
* Vehicle management (CRUD operations)
* Reservation management (CRUD operations)
* Validation and error handling

## Requirements

* Node.js (14+)
* Express.js (4+)
* MongoDB (4+)
* Mongoose (5+)
* Bcryptjs (2+)
* Jsonwebtoken (8+)

## Installation

1. Clone the repository: git clone https://github.com/KofiGhana/dream-ride-24.git
2. Install dependencies: npm install
3. Create a .env file with MongoDB URI and JWT secret

## Usage

1. Start the server: node app.js
2. Use Postman or cURL to test API endpoints

## API Endpoints

### Auth

* POST /api/auth/register - Register a new user
* POST /api/auth/login - Login an existing user

### Vehicles

* POST /api/vehicles/create - Create a new vehicle
* GET /api/vehicles/getAll - Get all vehicles
* GET /api/vehicles/getById/:id - Get a vehicle by ID
* PUT /api/vehicles/update/:id - Update a vehicle
* DELETE /api/vehicles/delete/:id - Delete a vehicle

### Reservations

* POST /api/reservations/create - Create a new reservation
* GET /api/reservations/getAll - Get all reservations
* GET /api/reservations/getById/:id - Get a reservation by ID
* PUT /api/reservations/update/:id - Update a reservation
* DELETE /api/reservations/delete/:id - Delete a reservation

## Testing

1. Run tests: npm test
2. Test coverage: npm run test:coverage

## Deployment

1. Deploy to a cloud platform 
2. Configure environment variables

## Security

* Authentication with JWT tokens
* Authorization with role-based access control
* Secure password storage with Bcryptjs
* Validation and error handling

## Contributing

1. Fork the repository: git fork https://github.com/KofiGhana/dream-ride-24.git
2. Create a feature branch: git checkout -b feature/your-feature
3. Commit changes: git commit -m "Your commit message"
4. Push changes: git push origin feature/your-feature
5. Open a pull request

