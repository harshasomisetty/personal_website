import React from "react";
import {Link} from "gatsby";
import Social from "../components/Social.js";
import resume from "../../static/Harsha-Somisetty-Resume.pdf";

const Layout = ({children}) => {
  const linkStyle = `
     Hover:opacity-70
     text-sm
     sm:text-lg
     flex 
     space-x-3
    `;
  // const logoStyle = `
  //   font-rammetto
  //   sm:text-base
  //   text-sm
  //   `;
  return (
    <div>
      <div className="flex flex-row justify-between lg:px-20 sm:px-6 py-8">
        <nav className="flex sm:justify-between justify-around items-center ">
          <ul className={linkStyle}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
            <li>
              <a href="http://notes.harshasomisetty.me">Notes</a>
            </li>
            <li>
              {" "}
              <a href={resume}>Resume</a>
            </li>
          </ul>
        </nav>
        <Social size={30} />
      </div>

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
