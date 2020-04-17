import React, {Fragment} from 'react';
import { BrowserRouter } from 'react-router-dom';

import Routes from './routes';
import Menu from './components/common/menu'

import 'react-bulma-components/dist/react-bulma-components.min.css';
import 'app.scss';


const App = () => {
    return (
        <Fragment>
            <BrowserRouter>
                <Menu />
                <Routes/>
            </BrowserRouter>
        </Fragment>
    )
}

export default App;