# MERN Project

A full-stack MERN (MongoDB, Express, React, Node.js) application for managing products.

Table of Contents

- Features
- Tech Stack
- Prerequisites
- Installation
- Environment Variables
- Running the App
- API Endpoints
- Frontend Usage
- Folder Structure
- Contributing
- License

Features

- Create, read, update, and delete products
- Form validation on the client
- Search products by name
- Responsive React UI

Tech Stack

- MongoDB
- Express.js
- React
- Node.js
- Axios for HTTP requests
- Tailwind CSS for styling

Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- MongoDB instance (local or Atlas)

Installation

- Clone the repo
  git clone `https://github.com/yourusername/your-repo.git
cd MERN`
- Install server dependencies
  cd server
  `npm install`
- Install client dependencies
  `cd ../client
npm install`

Environment Variables
Create a .env file in the server folder with:
`MONGO_URI=your_mongo_connection_string
PORT=5000`

If you need to customize the React app’s API base URL, create a .env in client:
`REACT_APP_API_URL=http://localhost:5000`

Running the App

- Start the backend
  cd server
  npm run start # or `npm run dev` for nodemon
- Start the frontend
  cd client
  npm start
- Open `http://localhost:3000` in your browser

## 🧩 API Endpoints

| Method | Endpoint         | Description              |
| ------ | ---------------- | ------------------------ |
| GET    | `/product/:name` | Check if product exists  |
| GET    | `/products`      | Get all products         |
| POST   | `/Addproduct`    | Add a new product        |
| DELETE | `/product/:name` | Delete a product by name |

## Frontend Usage

- Product List: displays all products fetched from the API
- Add Product: fill the form and submit to create a product
- Reset/Delete: click “Reset” next to a product to remove it

## 🗂️ Folder Structure – MERN Stack Project

```

MERN/
├── client/                 # Frontend - React App
│   ├── public/             # Static assets (index.html, icons...)
│   └── src/                # Source code
│       ├── components/     # Reusable React components
│       └── App.tsx         # Main React component (entry point)
├── server/                 # Backend - Express API
│   ├── models/             # Mongoose schemas/models
│   ├── routes/             # API route handlers
│   └── index.ts            # Entry point of the Express server



```

## Contributing

- Fork the project
- Create your feature branch (git checkout -b feature-name)
- Commit your changes (git commit -m 'Add feature')
- Push to the branch (git push origin feature-name)
- Open a Pull Request

### License

This project is licensed under the MIT License.
