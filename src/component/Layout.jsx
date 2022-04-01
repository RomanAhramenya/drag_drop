import React from "react";

import { NavLink, Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <header>
        <button>
          <NavLink to="/">главная</NavLink>{" "}
        </button>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
