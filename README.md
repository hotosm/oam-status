# oam-status
A simple status dashboard for oam-catalog, data is pulled from New Relic as well as oam-catalog itself.

## Install
The necessary requirements can be installed by running

`npm install`

## Configuration
The following variables will need to be set for the app to properly run.

- NEW_RELIC_APP_ID (ID of app to be monitored_
- NEW_RELIC_API_KEY (with access to app)
- NEW_RELIC_LICENSE_KEY (for monitoring the app)

## Running
You can start the application by running

`npm start`