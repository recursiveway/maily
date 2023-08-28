import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { store } from './app/store'
import { Provider } from 'react-redux'
import { ApiProvider } from '@reduxjs/toolkit/dist/query/react';
import { userApi } from './app/api/userApi';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <Provider store={store}>
      <ApiProvider api={userApi}>

        < App />
      </ApiProvider>

    </Provider>

  </React.StrictMode>




);