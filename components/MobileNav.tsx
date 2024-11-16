"use client";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {CiMenuFries} from "react-icons/ci";
const MobileNav = () => {
  const links = ["home", "services", "projects", "contacts", "about"];
  const pathname = usePathname();
  return (
    <div>
      <Sheet>
        <SheetTrigger className={`flex justify-center items-center`}>
          <CiMenuFries className={`text-[32px] text-accent-default`} />
        </SheetTrigger>
        <SheetContent className={`flex flex-col`}>
          <div className={`mt-32 mb-40 text-2xl text-center`}>
            <Link href="/" className={``}>
              <h1 className={`text-4xl font-semibold `}>
                AhmedADev <span className={`text-accent-default`}>.</span>
              </h1>
            </Link>
          </div>
          <nav className={`flex flex-col justify-center items-center gap-8`}>
            {links.map((link, index) => {
              // Create the href for each link
              const linkPath = link === "home" ? "/" : `/${link}`;
              const isActive = pathname === linkPath; // Check if the current pathname matches the link

              return (
                <Link
                  href={linkPath}
                  key={index}
                  className={`${
                    isActive &&
                    "text-accent-default border-b-2 border-accent-default"
                  } capitalize font-medium hover:text-accent-hover
                  `} // Active and inactive styles
                >
                  {link.charAt(0).toUpperCase() + link.slice(1)}
                </Link>
              );
            })}
          </nav>

          <SheetHeader>
            <SheetTitle></SheetTitle>
            <SheetDescription></SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
};
export default MobileNav;
