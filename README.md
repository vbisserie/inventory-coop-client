# inventory-coop-client

> Client for inventory-coop

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

### Docker Setup
It will use network named 'inventory_coop_frontend' created by inventaire-coop-api

``` bash
# build docker
docker-compose build

# serve with hot reload at localhost:8080
docker-compose up -d
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
