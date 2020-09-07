<h1 align="center">Pipedrive - Bling Integration RESTFul API</h1>

<p align="center">A High Standard RESTFul API</p>

<hr>

### Endpoints documentation

[![Run in Insomnia}](https://insomnia.rest/images/run.svg)](https://insomnia.rest/run/?label=LinkApi&uri=https%3A%2F%2Fraw.githubusercontent.com%2FGabrielncosta%2Fbling-pipedrive-integration-api-%2Fmaster%2Fexport.json)

<hr>

The objective of the project was to integrate an API with Pipedrive and Bling platforms, saving results in MongoDB.

## Prerequisite

To bring up the RESTFul API in your environment, you must first:

* Have an account with [Pipedrive](https://www.pipedrive.com/)
* Have an account at [Bling](https://bling.com.br/)
* Have an service like [MongoDB](https://www.mongodb.com/cloud/atlas) Atlas
* Clone the repository
   - `git clone https://github.com/Gabrielncosta/bling-pipedrive-integration-api-`
* Install the dependencies
   - `yarn install` or` npm install`
*  Set the environment variables
   - Rename the `.env.example` file to` .env`.
   - Fill in the information

## Running the app

```bash
# development
$ yarn dev

# build for production
$ yarn build
```
