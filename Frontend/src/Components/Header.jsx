import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="bg-gray-700 text-gray-300 px-6 py-2 p-8">
      <div className="container mx-auto flex justify-between item-center">
        <Link to={"/"}>
          <h1 className="text-3xl font-bold">Crud App</h1>
        </Link>

        <nav className="space-x-6 text-2xl font-semibold">
          <Link to={"/add"}>
            {" "}
            <a className="hover:text-white" href="#">
              Add user
            </a>
          </Link>
          <Link to={"/all"}>
            {" "}
            <a className="hover:text-white" href="#">
              ALL user
            </a>
          </Link>
        </nav>
      </div>{" "}
    </div>
  );
}

export default Header;
