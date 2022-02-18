# Reto Tribal

![Logo](/public/favicon.png)

## Demo

https://tribal-challenge-ts.web.app/#/overview

## Tech Stack

**Client:** React, Redux, Redux-thunk, Craco, Scss, i18n, Storybook,
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`REACT_APP_API_URL`

`REACT_APP_API_KEY`

In Local, the json package has a proxy configured to be able to use the api and not have cors problems. So the variables would be the following

```bash
#.env.development.local
REACT_APP_API_URL=/prod
REACT_APP_API_KEY=
```

However, to be able to deploy to a public URL, a reverse proxy has been used so that API calls can be made. Using it, the following url can be placed in the Url:
```bash
#.env.development.local
REACT_APP_API_URL=https://reto-tribal.dialguiba.workers.dev/
```


## ABEM
Abem was used for the creation of components and naming of classes

## Scoped Sass files
Scoped sass files were used with a craco's plugin. Just because a preference of maintining scoped styles for components

## Alias for Paths 
Aliases for paths were configured for importing components or files in a cleaner way using a craco's plugin

## StoryBook
There are some examples of the use of the components in story book 
Just run it using 
```bash
yarn storybook
```

## Run Locally

Clone the project

```bash
  git clone https://github.com/dialguiba/tribal-challenge-ts.git
```

Go to the project directory

```bash
  cd tribal-frontend-typescript
```

Install dependencies

```bash
  yarn
```

Start the server

```bash
  yarn start
```
