import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import {LocalizationProvider} from "@mui/lab";

ReactDOM.render(

  <>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <App />
      </LocalizationProvider>
  </>,
  document.getElementById('root')
);
