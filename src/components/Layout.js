import React from "react";
import {Link} from "gatsby";

const Layout = ({children}) => {
  const linkStyle = `
     Hover:opacity-70
     text-sm
     sm:text-lg
     flex 
     space-x-3
    `;
  const logoStyle = `
    font-rammetto
    sm:text-base
    text-sm
    `;
  return (
    <div>
      <nav className="flex sm:justify-between justify-around items-center lg:px-20 sm:px-6 py-8">
        {/* <h3 className={logoStyle}>HealthRoom</h3> */}
        <ul className={linkStyle}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/blog">Blog</Link>
          </li>
        </ul>
      </nav>

      <main>{children}</main>

      <footer className="text-center py-8">
        <p>
          {/* Copyright 2030 <span className={logoStyle}>HealthRoom</span> */}
        </p>
      </footer>
    </div>
  );
};

export default Layout;
