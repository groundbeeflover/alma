import React from 'react';

const Layout = ({children}: {children: React.ReactNode}) => {
    return (
        <div>
        {children}
        <h1 className='text-3xl'>home</h1>
        </div>
    );
    }

export default Layout;