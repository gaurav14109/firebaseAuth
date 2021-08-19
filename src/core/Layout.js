import React from 'react';
import Navigation from './Navigation'
const Layout = ({className, children}) => {

    return (
        <div>

            <Navigation/>
            <div
                className={className}
                style={{
                    width: '30%',
                    margin: "20px auto"
                }}>
                {children}
            </div>

        </div>
    )

}

export default Layout;
