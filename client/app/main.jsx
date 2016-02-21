import React from 'react';
import ReactDom from 'react-dom';

import Form from './components/form.jsx';

let appContainer = document.querySelector('#app');
ReactDom.render(<Form title='My Cool Form' />, appContainer);
