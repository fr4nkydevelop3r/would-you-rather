import React from "react";
import Nav from "./Nav";
import Menu from "./Menu";

export default function NotFound() {
  return (
    <div>
      <Nav />
      <Menu />
      <div className="not-found"> =( Page not found</div>
    </div>
  );
}
