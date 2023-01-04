
# NODE-CART-FUNCTIONALITY

This is backend API for a code challange.

## Requirements

For local setup, you will need the following installed on your system :-

- Node.js >= 16.13.2
- NPM 8.1.2
- PostgreSQL 12.12 

### Node

- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
  Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v16.13.2

    $ npm --version
    8.1.2

## Github

Install github in local system

      https://git-scm.com/downloads

      git clone https://github.com/PriyanshiSrivastava/node-cart-functionality.git

## Local setup
Step 1. Clone the application using git clone `https://github.com/PriyanshiSrivastava/node-cart-functionality.git`

Step 2. Run `npm install`

Step 3. Create `.env` file in the root directory and set the following environment variables in `.env` file :
```
PGUSER=
PGPASSWORD=
PGDATABASE=
PGHOST=localhost
PGPORT=5342
PORT=
URL=
CONVERT=

```

Step 4. Run `npx sequelize db:seed:all` to create data of shipping charges table

Step 5. Run `npm start` to start the application locally

## Third Party Services Used
	
- [Axios](https://www.npmjs.com/package/axios)


## Running
 - Refer to postman collection in the codebase with the file under postman_collection folder
 - Refer to env.test for env values

## Contributors
[Priyanshi Srivastava](https://www.linkedin.com/in/priyanshi-srivastava-586b6b143/)
