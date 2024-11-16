import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import Stats from "@/components/Stats";
import {Button} from "@/components/ui/button";
import {FiDownload} from "react-icons/fi";

const Home = () => {
  return (
    <section className={`h-full `}>
      <div className={`container mx-auto`}>
        <div
          className={`flex flex-col xl:flex-row items-center justify-between xl:pt-6 xl:pb-24px `}
        >
          <div className={`text-center xl:text-left order-2 xl:order-none`}>
            <span>Software Developer</span>
            <h1 className={`h1 mb-6`}>
              Hello I'm <br />
              <span className={`text-accent-default`}>Ahmed Alaa</span>
            </h1>
            <p className={`max-w-[500px] mb-8 text-white/80`}>
              I excel at crafting elegant digital experiences and I am
              profiecient in various of programming languages and technologies.
            </p>
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size={"lg"}
                className="uppercases items-center gap-2"
              >
                <span>Download CV</span>
                <FiDownload className="text-lg" />
              </Button>
              <div className="mb-8 xl:mb-8">
                <Socials
                  ContainerStyles="flex gap-5"
                  IconStyles="h-9 w-9 border border-accent-default rounded-full flex justify-center items-center text-accent-default text-base hover:bg-accent-default hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};
export default Home;
