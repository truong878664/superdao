import { FunctionComponent } from "react";

interface HeroProps {}

const Hero: FunctionComponent<HeroProps> = () => {
  return (
    <section className="container pb-20 pt-20">
      <div className="relative mx-auto flex flex-col items-center gap-10 before:h-9 before:w-64 before:rounded-circle before:bg-blue-440 before:blur-[400px] before:absolute-center md:max-w-[500px] xl:max-w-[649px]">
        <div className="flex flex-col gap-4 text-center">
          <span className="font-loos-bold text-4xl leading-11 md:text-5.5xl md:leading-15 xl:text-7xl xl:leading-20.5">
            The easiest way to start a DAO
          </span>
          <p className="text-lg">
            An all-in-one platform to start, manage and grow a decentralized
            autonomous organization
          </p>
        </div>
        <button className="rounded-xl bg-yellow-550 px-7 py-2 text-2sm font-bold leading-7.5 text-blue-dark-900 shadow-btn-md shadow-yellow-550/20">
          Get started
        </button>
      </div>
    </section>
  );
};

export default Hero;
