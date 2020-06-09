##### Phone Catalogue - React
By Mark Webley

Example of Custom: Architecture with React 16.13.1, Redux, Epics, Rxjs, Services, API end point control, node.js API, React Class example, React Hooks example and more.

__Note:__ _The current lifecycle methods componentWillMount, componentWillReceiveProps, and componentWillUpdate will be deprecated in a future ReactJS 16.x release._

TODO: docker script.

To install execute:
- npm i
- npm i -g nodemon
- npm run build;
- cd node-server
- npm i
- npm run build;

To run node server execute:
- npm run node:server
View API in the browser [http://localhost:3100/api/phones](http://localhost:3100/api/phones).

To run front end execute:
- npm start
View Front End in the browser [http://localhost:3000](http://localhost:3000).

Trouble shooting:
- if are not able to start the node server, make sure you kill existing running processes on port :3100

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify





# Phone Catalogue
Your task is to write a very simple product catalogue app.

1. Write a simple REST API in whatever language you're most comfortable (NodeJS, Rails, Java...) that...
 - Has 1 endpoint `/phones`
 - Returns the attached "phones.json" payload (or a free version of it)
 - The data can all be mocked, no need for a persistence layer
2. Write a React app that displays the phones from the API
- Use redux for state management and Axios (or similar library) for fetching data from the API
- Display an initial list with all phones
- When a phone model is selected from the list, it will render a phone detail view displaying a few more details about that phone
- Display a spinner or placeholder component while the API request is ongoing
- Make it look decent. No need for super sophisticated design, but at a minimum, make it somewhat responsive so that it doesn’t look terrible on a mobile phone. Add images for each device.
3. Push the code to a public github repo with a README.md that explains how to run API & Frontend app

## Bonus points
1. Dockerize the app.
2. Write realistic unit/end-to-end tests.