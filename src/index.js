import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import './index.css';
// import * as serviceWorker from './serviceWorker';
import store from './redux/store';
import UsersViewRedux from './components/users-view/users-view-container';
import Header from './components/Header';
import PopoverProvider from './components/directory-display/popover/popover-provider';
import OverlayProvider from "./components/directory-display/overlay/OverlayProvider";
import OutsideClickProvider from "./components/directory-display/outside-click/OutsideClickProvider";

render(
    <Provider store={store}>
        <OutsideClickProvider>
            <OverlayProvider>
                <PopoverProvider>
                    <Header/>
                    <UsersViewRedux />
                </PopoverProvider>
            </OverlayProvider>
        </OutsideClickProvider>
    </Provider>, document.getElementById('root')); // eslint-disable-line

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
