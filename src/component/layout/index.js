import React from 'react';
import './index.css';

const Layout = props => {
    return(
    <main>
        <div>Toolbar, sidebar</div>
        <main>
            {props.children}
        </main>
    </main>

    )
}

export default Layout;