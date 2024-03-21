import React from 'react';
import ReactDOM from 'react-dom/client';

import App from "./App";

//const root = ReactDOM.createRoot(document.getElementById("root"));
const root = ReactDOM.createRoot(document.getElementById("root") as Element); //когда снова верну в tsx, завменить строку сверху на эту

export let rerenderEntireTree = () => {

    root.render(
        <React.StrictMode>
            <App  />
        </React.StrictMode>

    );

}







