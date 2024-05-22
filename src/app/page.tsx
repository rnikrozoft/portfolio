import {
  AnimatedTitle,
  Container,
  FadeIn,
  GridPattern,
  MyWork,
  Section,
  SectionHeader,
  Skills,
  Socials,
  Stars,
  WorkExperience,
} from "@/components";
import { Archive, BookOpen, BriefCase, Envelope } from "@/icons";
import Image from "next/image";

export const metadata = {
  title: "Jirawat Charoonnet",
  description: "My personal portfolio.",
};

export const sections = [
  { index: 0, title: "About Me", id: "about-me" },
  { index: 1, title: "Work Experience", id: "work-experience" },
  { index: 2, title: "Skills", id: "skills" },
  { index: 3, title: "My Work", id: "my-work" },
];

interface contentSection {
  id: string;
  sectionHeader: {
    icon: React.ReactNode;
    title: string;
    description: React.ReactNode;
  };
  mainContent: React.ReactNode;
}

const content: contentSection[] = [
  {
    id: sections[1].id,
    sectionHeader: {
      icon: (
        <>
          <BriefCase height="28" width="28" />
          <span className="bg-work_experience_orange icon-blur absolute inset-0 -z-10"></span>
        </>
      ),
      title: "Work Experience",
      description: (
        <div>
           Have experience in the{" "}
          <span className="text-green-600">software development industry</span>{" "}
          since 2017
        </div>
      ),
    },
    mainContent: <WorkExperience />,
  },
  {
    id: sections[2].id,
    sectionHeader: {
      icon: (
        <>
          <BookOpen height="28" width="28" />
          <span className="bg-skills_purple icon-blur absolute inset-0 -z-10"></span>
        </>
      ),
      title: "Skills",
      description: (
        <div>
          <span className="text-skills_purple">Full Stack</span> software
          developer with experience in{" "}
          <span className="text-skills_purple">Front-End</span> and{" "}
          <span className="text-skills_purple">Back-End</span> technologies
        </div>
      ),
    },
    mainContent: <Skills />,
  },
  {
    id: sections[3].id,
    sectionHeader: {
      icon: (
        <>
          <Archive height="28" width="28" />
          <span className="bg-my_work_yellow icon-blur absolute inset-0 -z-10"></span>
        </>
      ),
      title: "My Work",
      description: (
        <div>
          Some of <span className="text-my_work_yellow">my work</span> as a full
          stack <span className="text-my_work_yellow">web</span> developer
        </div>
      ),
    },
    mainContent: <MyWork />,
  },
];

export default function Index() {
  return (
    <div className="w-full overflow-y-auto overflow-x-hidden">
      <GridPattern />
      <Section id={sections[0].id}>
        <Container>
          <div className="relative">
            <div className="flex-none mx-auto">
              <Image
                className="rounded-full object-cover"
                src="/me.jpg"
                alt=""
                height={208}
                width={208}
              />
            </div>
            <FadeIn className="max-w-5xl pt-4 2xl:pt-[30vh]">
              <h1 className="font-display text-5xl font-medium tracking-tight [text-wrap:balance] sm:text-6xl">
                Jirawat Charoonnet<span className="wave">👋</span>
              </h1>
              <div className="flex mt-3 mb-1">
                Looking for a job{" "}
                <span className="relative flex h-2 w-2 self-center mx-1">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>{" "}
                / &#8205; <AnimatedTitle />
              </div>
              <p className="max-w-3xl">
                Hello, my name is Jirawat Jaroonnet, or Beer. I have been
                working in programming since the end of 2017, I specialize in
                web programming using technologies such as PHP, Codeigniter,
                Bootstrap, MySQL, Postgres, WordPress, and Golang. Occasionally,
                I also develop Windows applications using C#.NET.
              </p>
            </FadeIn>

            <Socials />
          </div>{" "}
        </Container>
      </Section>

      <div id="stars-container" className="relative">
        <Container>
          <Stars id="stars-container" />
          {content.map((section: contentSection) => (
            <Section key={section.id} id={section.id}>
              <SectionHeader {...section.sectionHeader} />
              {section.mainContent}
            </Section>
          ))}
        </Container>
      </div>
    </div>
  );
}
