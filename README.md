# hng-stage2
**Table of Contents**

    .Getting Started
    
    .Prerequisites
    
    .Installation
    
    .Database Configuration
    
    .Usage
    
    .Endpoints
    
    .Validation
    
    .Testing

**Getting Started**

**Prerequisites**

Before you begin, ensure you have the following prerequisites installed on your local machine:
  
    .Node.js and npm
    
    .MongoDB (local or remote)
    
    .Git (optional but recommended)

**Installation**

Clone the Repository

    git clone <repository_url>
    
    cd <project_directory>

**Install Dependencies**

    npm install

**Database Configuration**

**MongoDB Setup**

  .Ensure that MongoDB is installed and running.
  
  .Configure the database connection in src/app.js. Replace MONGODB_URL with your actual MongoDB connection URL.

      mongoose.connect('mongodb://localhost:27017/mydb', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      
  Be sure to update the connection URL to match your MongoDB setup.

  **Usage**
  
**Endpoints**

The API provides the following endpoints for managing users:

**GET /api/users**: Retrieve a list of all users.

**POST /api/users:** Create a new user.

  .Example Request Body:
  
      {
        "name": "John Doe"
      }
      
**PATCH /api/users/:user_id:** Update an existing user by ID.

  .Example Request Body:
  
      {
        "name": "Updated Name"
      }
    
**DELETE /api/users/:user_id:** Delete a user by ID.

**Validation**

Input data is validated using the Joi library. The API expects valid JSON payloads for POST and PATCH requests. Ensure that the name field is a non-empty string.

**Testing**

To run automated tests for the API, use the following command:

    npm test

The test suite covers various scenarios, including user creation, retrieval, update, and deletion.

**Running the Application**

You can run the application in different modes:

**Production Mode:**

    npm start

**Development Mode (No automatic restart):**

    npm run develop

**Development Mode (With nodemon for automatic restart):**

    npm run dev