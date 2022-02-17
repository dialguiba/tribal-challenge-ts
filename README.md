# Reto Tribal


This project requires environment variables set for the api url and api key.
In Local, the json package has a proxy configured to be able to use the api and not have cors problems. So the variables would be the following:

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