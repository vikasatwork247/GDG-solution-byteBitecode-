# GridShare - Energy Trading Platform

A React-based web application for energy trading, featuring phone number verification and a comprehensive dashboard.

## Features

- Phone number verification with OTP
- Secure authentication flow
- Dashboard with navigation
- Energy trading interface
- Status monitoring
- Buy and Sell energy functionality

## Project Structure

```
Gridshare/
├── src/
│   ├── components/
│   │   ├── Dashboard/
│   │   │   ├── Layout.js
│   │   │   ├── Navbar.js
│   │   │   └── Sidebar.js
│   │   ├── Home/
│   │   │   └── Home.js
│   │   ├── Status/
│   │   │   └── Status.js
│   │   ├── Buy/
│   │   │   └── Buy.js
│   │   └── Sell/
│   │       └── Sell.js
│   ├── App.js
│   └── index.js
└── package.json
```

## Setup Instructions

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

## Dependencies

- react-router-dom
- react-hot-toast
- react-phone-input-2
- otp-input-react
- react-icons

## Usage

1. Enter your phone number
2. Receive OTP (visible for 1 minute)
3. Enter OTP to verify
4. Access the dashboard
5. Navigate between Home, Status, Buy, and Sell pages

## Development Status

- ✅ Phone verification
- ✅ Dashboard layout
- ✅ Navigation
- ✅ Basic UI components
- ✅ Protected routes

![localhost_3000_ (1)](https://user-images.githubusercontent.com/75136330/212552633-fe138d61-89da-4ece-9497-a6c779e50f33.png)

![localhost_3000_ (2)](https://user-images.githubusercontent.com/75136330/212552636-ad154d82-2358-4de7-b6b5-c6e68c8b918e.png)


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
