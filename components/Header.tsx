import Link from "next/link";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";
import {Button} from "./ui/button";

const Header = () => {
  return (
    <header className={`py-8 lg:py-12 text-white `}>
      <div className={`container mx-auto flex justify-between items-center`}>
        <Link href={"/"}>
          <h1 className={`text-4xl font-semibold `}></h1>
          AhmedADev<span className={`text-accent-default`}>.</span>
        </Link>
        <div className={`hidden xl:flex items-center gap-8`}>
          <DesktopNav />
          <Link href={"/contacts"} className={``}>
            <Button type="submit" className={``}>
              Hire Me
            </Button>
          </Link>
        </div>
        <div className={`xl:hidden`}>
          <MobileNav />
        </div>
      </div>
    </header>
  );
};
export default Header;
