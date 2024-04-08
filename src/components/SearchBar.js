import React from 'react';

const SideBar = () => {
    return (
        <div className="search-bar">
            <input type="text" placeholder="Search books..."/>
            <button type="submit">Search</button>
            <button type="submit">Cart</button>
            <button type="submit">Login</button>
        </div>
    );
};

export default SideBar;
