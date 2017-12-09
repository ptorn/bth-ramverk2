[![Build Status](https://travis-ci.org/ptorn/bth-ramverk2.svg?branch=master)](https://travis-ci.org/ptorn/bth-ramverk2)
[![Scrutinizer Code Quality](https://scrutinizer-ci.com/g/ptorn/bth-ramverk2/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/ptorn/bth-ramverk2/?branch=master)
[![Build Status](https://scrutinizer-ci.com/g/ptorn/bth-ramverk2/badges/build.png?b=master)](https://scrutinizer-ci.com/g/ptorn/bth-ramverk2/build-status/master)
[![Code Coverage](https://scrutinizer-ci.com/g/ptorn/bth-ramverk2/badges/coverage.png?b=master)](https://scrutinizer-ci.com/g/ptorn/bth-ramverk2/?branch=master)
[![codecov](https://codecov.io/gh/ptorn/bth-ramverk2/branch/master/graph/badge.svg)](https://codecov.io/gh/ptorn/bth-ramverk2)

BTH-Ramverk2
=====================

This is my presentation for Framework2 (Ramverk2) at BTH.

## Installation

The port for the server to listen to is determined in this order with following environment variables. If no variable is set it will default to port 3000.
process.env.DBWEBB_PORT, process.env.PORT, process.env.LOCAL_DEV_PORT, 3000

1. First clone the repo.
`git clone https://github.com/ptorn/bth-ramverk2.git`

2. After that install the dependencies for server and client. And it will also build the client.
`cd bth-ramverk2`
`npm install`

## Test

Run tests with mocha, eslint and stylelint.
`npm run test`

## Start

Now it's time to start the server.
`npm start`

This starts only the server and NOT the MongoDB server.

## MongoDB

Start the MongoDB using docker-compose.
`docker-compose up mongodb -d`


## Alternative installation method with starting of the node server  and MongoDB server using docker-compose.

If you have docker installed with docker-compose then you could install and start the server and the MongoDB container.

1. First clone the repo.
`git clone https://github.com/ptorn/bth-ramverk2.git`

2. `cd bth-ramverk2`

3. `docker-compose up -d`


That's it now you are all set.

**Enjoy!**
