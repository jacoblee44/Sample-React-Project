import React from 'react';
import { render } from 'react-dom';

import App from './components/App';

fetch('public/json/data.json')
    .then((response) => {
        if (response.status == 200) {
            return Promise.resolve(response);
        } else {
            return Promise.reject(new Error(response.statusText));
        }
    })
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        render(<App data={data} />, document.getElementById('root'));
    })
    .catch((error) => {
        console.log('Request failed', error);
    });