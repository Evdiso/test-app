import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import { QueryClient, QueryClientProvider } from "react-query";
import App from './App';
import {makeServer} from "./utils/mirage-server";

const queryClient = new QueryClient();
makeServer();

ReactDOM.render(
  <React.StrictMode>
      <QueryClientProvider client={queryClient}>
          <App />
      </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
