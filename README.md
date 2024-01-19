# Uploadify

Uploadify is a Node.js application that provides API endpoints for uploading, retrieving, and managing images.

## Table of Contents

- [Overview](#overview)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Setting Up the Project](#setting-up-the-project)
- [API Endpoints](#api-endpoints)
- [Usage](#usage)
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

##### In the src folder

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
```

## Setting Up the Project

1. Clone or download this repository to your local machine.

```plaintext
 git clone https://github.com/kobiowuquadri/Uploadify.git
 cd uploadify
```

2. Install dependencies:

```plaintext
 npm install
```

3. Create a .env file:
   Create a .env file in the root of your project with the following content:

```plaintext
 MONGODB_USERNAME=your-mongodb-username
 MONGODB_PASSWORD=your-mongodb-password
 PORT= your-port
```

4. Start the server:
   ```plaintext
   nodemon
   ```

## API Endpoints

### 1. Upload Image

    Endpoint-> POST: /upload

##### Description: Upload an image.

##### Request Body: Form data with an image file.

##### Response:

     Success: 201 Created

```
  {
"success": true,
"message": "Image Uploaded Successfully",
"savedImage": {
 "_id": "unique-image-id",
 "path": "uploads/image-1705611999866.png",
 "__v": 0
}
}

```

Failure: 400 Bad Request, 500 Internal Server Error

### 2. Get Single Image

##### Endpoint: GET: /get_image/:imageId

##### Description: Get details of a single uploaded image.
       replace: imageId with the image id

##### Response:

     Success: 200 Ok

```
{
  "success": true,
  "message": "Request Successfully",
  "image": {
    "_id": "unique-image-id",
    "path":"uploads/image-1705611999866.png",
    "__v": 0
  }
}

```

Failure: 404 Not Found, 500 Internal Server Error

### 3. Get All Images

##### Endpoint-> GET: /api/v1/get_images

##### Description: Get details of all uploaded images.

##### Response:

     Success: 200 Ok 

```
 {
  "success": true,
  "message": "View all images successfully",
  "images": [
    {
      "_id": "unique-image-id",
      "path": "uploads/image-1705611999866.png",
      "__v": 0
    },
    {
      "_id": "unique-image-id",
      "path": "uploads/image-1705611999866.png",
      "__v": 0
    },
  ]
}

```

## Usage

Use the following examples or code snippets to interact with the API:

### Example 1: Uploading an Image

curl -X POST -F "image=@path/to/your-image.jpg" ```http://localhost:5000/upload```

### Example 2: Get Single Image

curl ```http://localhost:5000/get_image/unique-image-id```
#### "unique-image-id" : replace with the image id

### Example 3: Get All Images

curl ```http://localhost:5000/get_images```

## Viewing Static Images on the Web
To view static images on the web, use the following pattern:

```
 http://localhost:5000/uploads/your-image-filename.png
```
#### Replace "your-image-filename.png" with the actual filename of the image you want to view. This URL follows the structure of the static file path and allows you to access the image directly through a web browser.

## License
This project is licensed under the MIT License.

### Thank you 😎

