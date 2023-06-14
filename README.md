# File Sharing Backend

## In General

This backend project is part of a home assignment.
The backend server uses Multer library for storing images in the server storage.
In order to reduce cpu on the main program process,it uses a separated thread for monitoring the expiration timestamp every 5 seconds and deletes the expired images.
The processes communicates via IPC communication

There are two API's as requested:
1 - POST http://localhost:5000/v1/file
This endpoint will save your image in the server, and should receive an experation_ts header with the expiration date and an image.
2 - GET http://localhost:5000/v1/{file-param}
returns the image if exists

## Installation and run instructions

### 1 - clone the repo from: `https://github.com/neviko/Image-Sharing-Backend`

### 2 - install by running: `npm i`

### 3 - start the backend by running `npm run start:dev`
