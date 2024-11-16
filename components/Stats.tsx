"use client"
import CountUp from "react-countup";
const stats = [
  {num: 10, text: "Years of experience "},
  {num: 18, text: "Projects completed"},
  {num: 8, text: "Technologies mastered"},
  {num: 500, text: "code commits"},
];
const Stats = () => {
  return (
    <div className="mx-auto container pt-4 pb-12 xl:pb-8 ">
      <div className='flex flex-wrap max-w-[80vw] gap-6 mx-auto xl:max-w-none '> 
        {stats.map((item, index) => {
          return (
            <div className="flex-1 gap-6 flex items-center justify-center xl:justify-start" key={index}>
							<CountUp end={item.num} duration={5} delay={2} className='text-4xl xl:text-6xl font-extrabold' />
							<p className={`${item.text.length<15 ?"max-w-[100px]":"max-w-[150px]"} normal-case leading-snug text-white/80`}>{item.text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Stats;
