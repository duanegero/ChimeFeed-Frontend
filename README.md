# ChimeFeed Frontend React App

This is a web application built with react. It will allow users to send requests to backend API with GET, POST, PUT and DELETE requests.

- [Features](#features)
- [Installation](#installation)
- [Backend Repository](#backend)
- [API Endpoints](#api-endpoints)
- [License](#license)

## Features

- User-friendly interface for managing data.
- Integration with the ChimeFeed API for seamless data synchronization.
- Real-time updates and responsive design.

## Installation

1. Clone Repository<br>
   `git clone https://github.com/duanegero/ChimeFeed-Frontend.git`
2. Navigate to the Project Directory
3. Install Dependencies:<br>
   `npm install`
4. Start Server<br>
   `npm start`
5. Open app in browser<br>
   `http://localhost:3000`

## Backend

### ChimeFeed API

https://github.com/duanegero/ChimeFeedAPI.git

## API Endpoints

The application intteracts with endpoints hosted by the backend api.

- GET `/posts/:id` - Get all post from user ID
- POST `/users` - Create a new user
- PUT `/posts/:id` - Update an existing post by ID
- DELETE `/friendships` - Delete an existing friendship

Visit the [ChimeFeed API Docs](https://github.com/duanegero/ChimeFeedAPI.git) for more details.

## License

This project is licensed under the MIT License.
