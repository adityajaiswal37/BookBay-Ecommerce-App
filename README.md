# BookBay

BookBay is a full-stack MERN (MongoDB, Express.js, React.js, Node.js) web application where users can buy and sell books easily. It provides a seamless marketplace experience for book lovers, allowing them to list books for sale and browse available books for purchase.

## Features

- **User Authentication**: Secure login and signup functionality.
- **Buy & Sell Books**: Users can list books for sale and browse books to purchase.
- **Book Details**: Detailed book descriptions including title, author, price, and condition.
- **Search & Filter**: Find books using search and category filters.
- **User Dashboard**: View and manage listed books, purchase history, and profile settings.
- **Responsive Design**: Fully responsive UI for optimal experience on different devices.

## Tech Stack

- **Frontend**: React.js, React Router, React Toastify
- **State Management**: React Context API / Redux
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Styling**: CSS, Tailwind CSS

## Installation & Setup

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/bookbay.git
   ```
2. Navigate to the project directory:
   ```sh
   cd BookBay
   ```
3. Install dependencies for both frontend and backend:
   ```sh
   npm install
   cd backend
   npm install
   ```
4. Start the backend server:
   ```sh
   cd backend
   npm run start
   ```
5. Start the frontend server:
   ```sh
   cd ../
   npm run start
   ```

## Environment Variables

Create a `.env` file in both the root directory and the backend directory, and add the following:

**Frontend (.env):**
```
REACT_APP_API_URL=your_backend_api_url
```

**Backend (.env):**
```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=your_backend_port
```

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## License

This project is licensed under the MIT License.

## Contact

For any inquiries or feedback, reach out to **Aditya Jaiswal** at adijaiswal0011@gmail.com or connect via LinkedIn.

