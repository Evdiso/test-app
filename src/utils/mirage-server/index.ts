import { createServer } from 'miragejs';
import {dataCompanies} from "./companies";

export function makeServer({ environment = 'development' } = {}) {
  return createServer({
    environment,
    logging: false,

    routes() {
      this.namespace = 'api';
      this.logging = false;

      this.get('/companies', () => {
        return dataCompanies;
      });
    },
  });
}
