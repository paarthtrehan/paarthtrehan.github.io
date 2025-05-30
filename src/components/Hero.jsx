import { HERO_CONTENT } from "../index";

const Hero = () => {
  return (
    <div className="border-b border-neutral-900 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="pb-6 text-5xl font-bold tracking-tight lg:mt-16 lg:text-7xl">
              Demo User
            </h1>
            <span className="text-3xl text-neutral-400">Aspiring Software Developer</span>
            <p className="my-6 max-w-xl font-light tracking-tight">
              {HERO_CONTENT}
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <div className="h-64 w-64 rounded-full bg-neutral-700"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
