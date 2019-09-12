import React, { Fragment } from 'react';
import { renderRoutes } from 'react-router-config';
import { Switch } from 'react-router-dom';
import routes from './routes';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
        padding: 0;
        margin: 0;
    }
`;

export default () => {
    return <Fragment>
        <GlobalStyle />
        <Switch>
            {renderRoutes(routes)}
        </Switch>
    </Fragment>
};
