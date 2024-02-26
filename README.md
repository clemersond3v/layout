## Description

Home of an e-commerce developed for the selection process.

## Available Scripts

In the project directory, you can run:

### `npm install`

installs the necessary dependencies to run the project.

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## Technologies

In this project, the "REACT JS" framework was used, the "SCSS" css preprocessor was used. Some data files in "JSON" format were also implemented to simulate the consumption of VTEX information.

## Components

### Pop-up

I used the "react-modal" library to implement the popup. Only to optimize development time, as it is a very simple pop-up.

Pop-up viewing is being controlled by the "@newsletterPopUpShown" cookie written to localStorage. To see it again after clicking the "close" button, clear the cookie.

### Sliders

To implement the sliders, I used the "react-slick" library, which works exactly the same as the "slick-slider" library in "jquery".