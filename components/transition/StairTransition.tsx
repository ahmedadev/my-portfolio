"use client";
import {AnimatePresence, motion} from "framer-motion";
import {usePathname} from "next/navigation";
import Stairs from "../Stairs";

const StairTransition = () => {
  const pathname = usePathname(); // استخدام المسار الحالي

  return (
    <AnimatePresence mode="wait">
      {/* key={pathname} للتأكد من أن الترانزيشن يحدث عند تغيير المسار */}
      <div key={pathname}>
        <div
          className={`h-screen w-screen fixed bg-transparent top-0 left-0 right-0 pointer-events-none z-40 flex`}
        >
          <Stairs />
        </div>
        <motion.div
          className={`h-screen w-screen fixed  top-0 left-0 right-0 pointer-events-none bg-primary`}
          initial={{opacity: 1}}
          animate={{
            opacity: 0,
            transition: {
              duration: 0.4,
              delay: 1,
              ease: "easeInOut",
            },
          }}
          exit={"exit"}
        ></motion.div>
      </div>
    </AnimatePresence>
  );
};

export default StairTransition;
