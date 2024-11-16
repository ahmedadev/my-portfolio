// components/NavDesktop.tsx
"use client";

import Link from "next/link";
import {usePathname} from "next/navigation";

const DesktopNav = () => {
  const links = ["home", "services", "projects", "contacts", "about"];
  const pathname = usePathname();

  return (
    <nav className={`flex gap-8`}>
      {links.map((link, index) => {
        // Create the href for each link
        const linkPath = link === "home" ? "/" : `/${link}`;
        const isActive = pathname === linkPath; // Check if the current pathname matches the link

        return (
          <Link
            href={linkPath}
            key={index}
            className={`${
              isActive && "text-accent-default border-b-2 border-accent-default"
            } capitalize font-medium hover:text-accent-hover
                  `}
          >
            {link.charAt(0).toUpperCase() + link.slice(1)}
          </Link>
        );
      })}
    </nav>
  );
};

export default DesktopNav;
