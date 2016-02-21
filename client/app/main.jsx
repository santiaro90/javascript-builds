import React from 'react';
import ReactDom from 'react-dom';

import Form from './components/form.jsx';

import Cypher from './utils/cypher';

let appContainer = document.querySelector('#app');

let formTitle = Cypher.cypher('My Cool Form');
ReactDom.render(<Form title={formTitle} />, appContainer);
