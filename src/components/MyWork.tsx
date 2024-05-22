"use client";
import { ExpandArrowLink, GlowCard } from "@/components";
import clsx from "clsx";
import Image, { StaticImageData } from "next/image";
import {
  greatzor,
  cannabitia,
  purrsafeclub,
  pakapowm,
  zabbworld,
} from "../../public/projects/";

interface Project {
  href: string;
  name: string;
  description: string;
  full: boolean;
  image: {
    src: StaticImageData;
  };
}

const projects: Project[] = [
  {
    href: "/apps/greatzor",
    name: "Greatzor",
    full: true,
    description:
      " A 2D side-scrolling fighting game where you can choose characters and use up to 6 different skills.",
    image: { src: greatzor },
  },
  {
    href: "/apps/cannabitia",
    name: "Cannabitia",
    full: true,
    description:
      " An online cannabis farming game where you can meet other players, visit gardens, and build good relationships.",
    image: { src: cannabitia },
  },
  {
    href: "/apps/purrsafeclub",
    name: "Purrsafeclub",
    full: true,
    description: " A game play-to-earn with Polygon Blockchain.",
    image: { src: purrsafeclub },
  },
  {
    href: "/apps/pakapowm",
    name: "Pakapow Mobile",
    full: true,
    description: " The casual, role-playing, strategy party game inspired by Dokapon.",
    image: { src: pakapowm },
  },
  {
    href: "/apps/zabbworld",
    name: "Zabbworld",
    full: true,
    description: " A pre-register website connected to Firebase to support game pre-registration, also featuring an in-site top-up system using the Omise library.",
    image: { src: zabbworld },
  },
];

export default function MyWork() {
  return (
    <div className="relative z-10 mt-20 @container">
      <div className="grid grid-cols-1 gap-8 pt-10 @3xl:grid-cols-2">
        {projects.map((project) => (
          <GlowCard
            key={project.name}
            className={clsx(
              "hover:shadow-my_work_yellow/90",
              project.full
                ? "h-[60vh] @2xl:h-[50vh] @3xl:col-span-2"
                : "h-[60vh] @3xl:col-span-1"
            )}
            glowClassName="from-[#ffdc8b] to-[#ffdc8b]"
          >
            <div
              className={clsx(
                "flex-col justify-between h-full",
                project.full && "@2xl:flex"
              )}
            >
              <h3
                className={clsx(
                  "text-xl @2xl:text-3xl text-white dark:text-white/90",
                  project.full && "@4xl:w-[40%]"
                )}
              >
                <span className="text-2xl @2xl:text-4xl text-my_work_yellow">
                  {project.name}
                </span>
                {project.description}
              </h3>
              <ExpandArrowLink
                href={project.href}
                className="before:bg-my_work_yellow "
              />
            </div>
            <Image
              placeholder="blur"
              className={clsx(
                "z-10 my-work-img-shadow absolute w-full",
                project.full
                  ? "@md:w-[80%] @xl:w-[70%] @2xl:w-[55%] @md:rounded-tl-md bottom-0 right-0"
                  : "bottom-0 @xl:right-0 @xl:w-[70%] @3xl:w-full"
              )}
              src={project.image.src}
              alt=""
            />
          </GlowCard>
        ))}
      </div>
    </div>
  );
}
