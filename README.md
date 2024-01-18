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

# In the src folder

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

1. Upload Image
