import Image from "next/image";
import { FunctionComponent } from "react";
import artworks from "@/assets/img/project/art-words.png";

interface ProjectProps {}

const Project: FunctionComponent<ProjectProps> = () => {
  return (
    <section className="container py-5">
      <div className="">
        <span>Ready for every project</span>
      </div>
      <div className="">
        <span>Investment DAO</span>
        <span>Startup DAO</span>
      </div>
      <div className="relative">
        <div className="rounded-2.5xl relative aspect-square w-full overflow-hidden bg-black">
          <div
            className="-rotate-2 absolute-center"
            style={{ width: 869, height: 976 }}
          >
            <Image
              alt="art works"
              src={artworks.src}
              fill
              className="pointer-events-none"
            />
          </div>
        </div>
        <span className="absolute bottom-0 left-1/2 block -translate-x-1/2 translate-y-1/2 whitespace-nowrap rounded-full bg-orange-600 px-3 py-0.5 text-sm font-bold leading-6 text-blue-dark-950">
          1000+ projects launched on Superdao
        </span>
      </div>
    </section>
  );
};

export default Project;
