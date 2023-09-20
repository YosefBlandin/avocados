import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className="border border-bottom-1 border-secondary">
      <nav className="container py-4">
        <ul className="d-flex gap-5 list-unstyled mb-0">
          <li>
            <Link className="fs-5 text-secondary" href="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="fs-5 text-secondary" href="/about">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
