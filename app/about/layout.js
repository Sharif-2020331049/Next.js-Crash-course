import Link from "next/link";
import React from "react";

export const metadata = {
  title: "About us",
  description: "This is a blog page about",
};


function AboutLayout({ children }) {
  return (
    <div>
      <nav className="mt-6 mb-6">
        <ul className="flex gap-6">
          <li>
            <Link href="/about/mission">Mission</Link>
          </li>
          <li>
            <Link href="/about/vision">Vission</Link>
          </li>
        </ul>
      </nav>
      {children}
    </div>
  );
}

export default AboutLayout;
