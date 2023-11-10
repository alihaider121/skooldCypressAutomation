# Skoold Tutor

This document provides an overview of the project, including its technology stack, architecture, and deployment process.

## Project Overview

This project aims to develop a web application using a combination of back-end and front-end technologies. The back-end is built with Node.js, while the front-end is developed using ReactJS. The application interacts with a PostgreSQL database for data storage. The API documentation is generated using Swagger, and the deployment pipeline is set up using Heroku. The project follows the MERN (MongoDB, Express.js, ReactJS, Node.js) architecture, with PostgreSQL used instead of MongoDB. Continuous integration and deployment are managed through GitHub Actions, which triggers the specifications and deployment processes on Heroku.

## Technology Stack

The project utilizes the following technologies:

- **Back-end + API**: Node.js
- **Front-end**: ReactJS
- **API Documentations**: Swagger
- **DBMS**: PostgreSQL
- **Deployment Pipeline**: Heroku
- **Architecture**: MERN (with PostgreSQL)
- **CI/CD**: GitHub Actions

## Setup Instructions

To set up and run the project locally, follow the instructions below:

1. **Clone the Repository**: Begin by cloning the project repository from GitHub using the following command:

   ```
   git clone <repository-url>
   ```

2. **Install Dependencies**: Navigate to the project directory and install the required dependencies for both the back-end and front-end components. Run the following commands in separate terminal windows:

   For back-end:
   ```
   cd backend/
   npm install
   ```

   For front-end:
   ```
   cd frontend/
   npm install
   ```

3. **Configure Environment Variables**: Create a `.env` file in the `backend/` directory and add the necessary environment variables. This may include database credentials, API keys, etc.

4. **Start the Development Servers**: In separate terminal windows, start the development servers for the back-end and front-end components. Run the following commands:

   For back-end:
   ```
   cd backend/
   npm start
   ```

   For front-end:
   ```
   cd frontend/
   npm start
   ```

5. **Access the Application**: Once the servers have started, you can access the application by navigating to `http://localhost:8080` in your web browser.

## Deployment

The project is deployed using Heroku, following a deployment pipeline triggered by GitHub Actions. The deployment process involves the following steps:

1. Pushing changes to the `main` branch triggers the GitHub Actions workflow.
2. The workflow runs specified tests and checks for code quality.
3. If the tests pass and the code quality is satisfactory, the workflow proceeds to deploy the application to Heroku.
4. Heroku builds the application and sets up the necessary environment variables.
5. The deployed application becomes accessible via the Heroku-generated URL.

## API Documentation

API documentation is generated using Swagger. To access the API documentation, follow these steps:

1. Start the back-end development server by running the following command:

   ```
   cd backend/
   npm start
   ```

2. Navigate to `http://localhost:8080/api-docs` in your web browser to view the Swagger-generated API documentation.
