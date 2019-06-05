// @flow

import {
  STATIC_PATH,
} from '../shared/config';

const renderApp = (title: string) => `<!doctype html>
<html>
  <head>
    <title>${title}</title>
    <link rel="stylesheet" href="${STATIC_PATH}/css/style.css">
  </head>
  <body>
    <h1>${title}</h1>
    <p>Yeah!!! Maracuyeah</p>
  </body>
</html>
`;

export default renderApp;