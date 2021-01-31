import { config } from "./common";

export const environment = Object.assign({
  production: false,
  baseUrl: 'http://localhost:8080/'
}, 
  config
);