<h1 align="center">Status Page</h1>

<div align="center">
  <h3>
  <a href="https://docs.openaerialmap.org/ecosystem/getting-started">Ecosystem</a>
  <span> | </span>
  <a href="https://github.com/hotosm/oam-catalog">Catalog API</a>
  <span> | </span>
  <a href="https://github.com/hotosm/openaerialmap.org">OAM Homepage</a>
  </h3>
</div>

The status page shows the status of the [OAM Catalog](https://github.com/hotosm/oam-catalog) and a log of the images indexed.

## Installation and Usage

The steps below will walk you through setting up your own instance of the oam-status.

### Install Project Dependencies
To set up the development environment for this website, you'll need to install the following on your system:

- [Node](http://nodejs.org/) v4 (To manage multiple node versions we recommend [nvm](https://github.com/creationix/nvm))

### Install Application Dependencies

If you use [`nvm`](https://github.com/creationix/nvm), activate the desired Node version:

```
nvm install
```

Install Node modules:

```
npm install
```

### Usage

#### Config
Configuration for this app is done through environment variables:

- `NEW_RELIC_APP_ID` - Newrelic's ID of app to be monitored.
- `NEW_RELIC_API_KEY` - Newrelic's api key (with access to app).
- `NEW_RELIC_LICENSE_KEY` - Newrelic's license key (for monitoring the app).
- `CATALOG_URL` - The [OAM catalog](https://github.com/hotosm/oam-catalog) url (no trailing slash) (defaults to `https://oam-catalog.herokuapp.com`)
- `PORT` - Port on which the app should run (defaults to 3000).

**Newrelic**
Newrelic is specially important in oam-status because it's used to monitor the status of the catalog.
The credentials used here need to be the same as the ones for the [OAM Catalog](https://github.com/hotosm/oam-catalog).
Visit [Newrelic](https://newrelic.com/) if you need to create an account.

#### Starting the app

```
npm start
```

### Endpoints

#### `/` (root)
Renders the status page as html.

#### `/healthcheck`
Returns the status of the system using a color coding format. Example:
```
{
    "health": "green", // can be `green`, `yellow`, `red` or `unknown`
    "lastCheck": "2017-01-25T10:53:17+00:00"
}
```

#### `/ping`
Replies with `pong`.


# Deployment
This app can be run on any server with Node.js 4.7
The deployment instructions are the same as listed above.

## License
Oam Status is licensed under **BSD 3-Clause License**, see the [LICENSE](LICENSE) file for more details.

