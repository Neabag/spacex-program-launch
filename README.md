Checkout the live app [here](https://spacex-launchs.herokuapp.com)

This project is created using [razzle -cli](https://www.npmjs.com/package/razzle/v/0.5.2), it provides bolier-plate code for react server side rendering applications

## To install all dependencies

run `npm install` in the project folder, this will install all the dependencies used in the project

## Run in development mode
run `npm run dev` to run the app in dev mode

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
If this throw error like port 3000 is busy run on some other port y/n - y

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## deployment

deployment is done using heroku and github, razzle-heroku plugin is also used to handle the environment variables.
app is hosted here - https://spacex-launchs.herokuapp.com/

## dependencies used

1. axios - to fetch data from server
2. razzle - to get bolier plate code for react server-side render application
3. react 
4. express
5. razzle
6. razzle-heroku
7. react-dom
8. react-router-dom

## Approach -

1. react functional component is used throught the appliction to render the components
2. urlSearchParam and history.replaceState APIs are used to update the url without refreshing the broswer page
3. useState and useEffects hooks are used to load data at initial render and to update data on filter selections

## Errors in Json Provided
value of "launch_landing" attribute doesn't exist in the json received from https://api.spaceXdata.com/v3/launches?limit=100 (all urls provided) but filter APIs works fine, I have shown N/A if the value of "launch_landing" attribute is not retrieved from server
