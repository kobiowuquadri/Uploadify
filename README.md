# Uploadify

Uploadify is a Node.js application that provides API endpoints for uploading, retrieving, and managing images.

## Table of Contents

- [Overview](#overview)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Setting Up the Project](#setting-up-the-project)
- [API Endpoints](#api-endpoints)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Overview

Uploadify allows users to upload images, retrieve details of a single image, and view details of all uploaded images.

## Technologies Used

- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [Multer](https://www.npmjs.com/package/multer)

## Project Structure

```plaintext
- config/
  - config.ts
- database/
  - db.ts
- middlewares/
  - multerConfig.ts
- models/
  - uploadModel.ts
- routes/
  - uploadRoutes.ts
- controllers/
  - uploadController.ts
- index.ts
- .env


Setting Up the Project
Clone the repository.
Install dependencies: npm install.
Create a .env file with the necessary environment variables (refer to config.ts).
Start the server: npm start.
API Endpoints
1. Upload Image
Endpoint: POST /api/v1/upload
Description: Upload an image.
Request Body: Form data with an image file.
Response:
Success: 200 OK
Failure: 400 Bad Request, 500 Internal Server Error
2. Get Single Image
Endpoint: GET /api/v1/get_image/:imageId
Description: Get details of a single uploaded image.
Response:
Success: 201 Created with image details
Failure: 404 Not Found, 500 Internal Server Error
3. Get All Images
Endpoint: GET /api/v1/get_images
Description: Get details of all uploaded images.
Response:
Success: 201 Created with an array of image details
Failure: 404 Not Found, 500 Internal Server Error
Usage
Use the following examples or code snippets to interact with the API:

# Example 1: Uploading an Image
curl -X POST -F "image=@path/to/image.jpg" http://localhost:1337/api/v1/upload

# Example 2: Get Single Image
curl http://localhost:1337/api/v1/get_image/:imageId

# Example 3: Get All Images
curl http://localhost:1337/api/v1/get_images


Contributing
Feel free to contribute to the project. Check the CONTRIBUTING.md file for guidelines.

License
This project is licensed under the MIT License.


Copy and paste this content into your `README.md` file. Make sure to create a `CONTRIBUTING.md` file for contributing guidelines and an `LICENSE` file with the text of the MIT License. If you have any specific details to include in the contributing guidelines, feel free to modify the template accordingly.
