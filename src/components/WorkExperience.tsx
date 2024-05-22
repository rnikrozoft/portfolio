import { Border, FadeIn, FadeInStagger } from "@/components";
import clsx from "clsx";
import { default as Image } from "next/image";

const experience = [
  {
    title: "Varisoft Co.,Ltd. | Backend Developer.",
    date: "May 2022 - present",
    description: [
      `Develop backend for the company's games. using Golang, gRPC, RestAPI, WebSocket, Docker, K8S, PostgreSQL, MySQL, and Firebase.`,
      `Develop recommending games, pre-register websites for the company's games. using HTML, CSS, Bootstrap, jQuery, and Firebase.`,
      `Develop web-application tool for marketing and game-designer team. using HTML, CSS, Bootstrap, jQuery, Golang, MongoDB, and NextJS.`,
    ],
    image: {
      url: "/work/varisoft.png",
      height: 96,
      width: 96,
      className: "rounded-none",
    },
  },
  {
    title: "Biznet | Full Stack Developer.",
    date: `Oct 2019 – Sep 2020, Sep 2021 – May 2022`,
    description: [
      "Developed various web applications as per customer requirements.",
      "Developed web-application tool for organization team used.",
      "Using HTML, CSS, Bootstrap, PHP, Codeigniter, WordPress, MySQL, MongoDB, and jQuery.",
    ],
    image: {},
  },
  {
    title: "Freelancer | Full Stack Developer.",
    date: "Aug 2017 - Oct 2019",
    description: [
      "Giving advice to students from various institutions.",
      "Developed various web-application systems according to customer requests.",
      "Using HTML, CSS, Bootstrap, PHP, Laravel, WordPress, MySQL, and jQuery.",
    ],
    image: {},
  },
];

export default function WorkExperience() {
  return (
    <div className="mt-24 text-gray-500 relative z-10 @container">
      <FadeIn
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        viewportProp={{ once: true }}
      >
        <div className="border-l border-gray-500/30 absolute bottom-0 top-0"></div>
      </FadeIn>
      <FadeInStagger>
        {experience.map((item, index) => (
          <WorkRole
            key={index}
            title={item.title}
            date={item.date}
            image={item.image}
          >
            {item.description.map((desc, index) => (
              <li key={index} className="py-1">
                {desc}
              </li>
            ))}
          </WorkRole>
        ))}
      </FadeInStagger>
    </div>
  );
}

function WorkRole({
  children,
  title,
  date,
  image,
}: {
  children: React.ReactNode;
  title: string;
  date?: string;
  image: { url: string; className: string; height: number; width: number };
}) {
  return (
    <FadeIn className="flex group mt-8 first:mt-0 px-3">
      <div className="hidden @lg:flex @lg:flex-col">
        <p className="px-4 pt-8 group-first:pt-0 text-white text-sm leading-7 min-w-[180px] max-w-[180px] @lg:min-w-[195px] @lg:max-w-[195px] @xl:max-w-[215px] @xl:min-w-[215px] flex-none">
          {date}
        </p>
        <div
          className={clsx(
            "flex-none rounded-md overflow-hidden self-center mx-4 mt-auto mb-auto",
            image.className
          )}
        >
          <Image
            src={image.url}
            alt=""
            height={image.height}
            width={image.width}
            style={{
              width: image.width || "auto",
              height: image.height || "auto",
            }}
          />
        </div>
      </div>
      <Border className="pt-8 group-first:pt-0 group-first:before:hidden group-first:after:hidden">
        <div className="flex mb-4">
          <div
            className={clsx(
              "flex-none rounded-md overflow-hidden self-center ml-2 mr-4 @lg:hidden",
              image.className
            )}
          >
            <Image
              src={image.url}
              alt=""
              height={image.height}
              width={image.width}
              style={{
                width: image.width || "auto",
                height: image.height || "auto",
              }}
            />
          </div>
          <div>
            <p className="font-semibold text-work_experience_orange text-lg">
              {title}
            </p>
            <p className="@lg:hidden mt-2 text-white text-sm">{date}</p>
          </div>
        </div>
        <ul className="list-disc pl-10">{children}</ul>
      </Border>
    </FadeIn>
  );
}
