import { NavLink } from "react-router-dom";
import React from "react";

export const AppHeader = () => {
  return (
    <header className="app-header main-layout">
      <section className="header-container">
        <h3 className="logo"></h3>

        <nav>
          <NavLink to="/">Main-app</NavLink>
        </nav>
      </section>
    </header>
  );
};
