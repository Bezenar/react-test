import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
//STORE
import store from './store/store';
//STYLES
import './index.scss';
// COMPONENTS
import Application from './Application';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <div style={{ height: '100vh', width: '100%' }} className="flex dir--col jc--center ai--center bg--light">
        <header className='flex jc-center p--6-0'>
          <img src="/assets/img/mapon-colour@2x.svg" alt="logo" title="mapon" />
        </header>
        <Application />
      </div>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
