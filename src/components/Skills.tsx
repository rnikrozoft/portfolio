"use client";
import { FadeInStagger } from "@/components";
import { useAnimationControls } from "framer-motion";
import Image from "next/image";
const skillsLogos = [
  { name: "JavaScript", image: "/logos/js-logo.png" },
  { name: "C#", image: "/logos/csharp-logo.png" },
  { name: "HTML5", image: "/logos/html5-logo.png" },
  { name: "CSS3", image: "/logos/css-logo.png" },
  { name: "ReactJS", image: "/logos/react-logo.png" },
  { name: "NextJS", image: "/logos/nextjs-logo.png" },
  { name: "JQuery", image: "/logos/jquery-logo.webp" },
  { name: "Bootstrap", image: "/logos/bootstrap-logo.svg" },
  { name: "MaterialUI", image: "/logos/materialui-logo.png" },
  { name: "MongoDB", image: "/logos/mongodb-logo.webp" },
  { name: "PostgresSql", image: "/logos/postgres-logo.png" },
  { name: "Firebase", image: "/logos/firebase-logo.png" },
  { name: "Git", image: "/logos/git-logo.png" },
  { name: "Github", image: "/logos/github-logo.webp" },
  { name: "Docker", image: "/logos/docker-logo.png" },
  { name: "CodeIgniter3", image: "/logos/codeigniter.png" },
  { name: "Golang", image: "/logos/golang-logo.png" },
  { name: "gRPC", image: "/logos/grpc.png" },
  { name: "Laravel2", image: "/logos/laravel.png" },
  { name: "MySQL", image: "/logos/mysql-logo.png" },
  { name: "PHP", image: "/logos/php-logo.png" },
  { name: "Rust", image: "/logos/rust.png" },
  { name: "WordPress", image: "/logos/wordpress-logo.png" },
  { name: "React-Bootstrap", image: "/logos/react-bootstrap.svg" },
  { name: "K8S", image: "/logos/k8s.png" },
  { name: "AWS", image: "/logos/aws.png" },
  { name: "RestAPI", image: "/logos/restapi.png" },
  { name: "Websocket", image: "/logos/websocket.png" },
  { name: "Fiber", image: "/logos/go-fiber.svg" },
  { name: "Echo", image: "/logos/go-echo.png" },
];

export default function Skills() {
  const controls = useAnimationControls();
  return (
    <div className="@container">
      <FadeInStagger
        animate={controls}
        className="relative z-10 grid grid-cols-3 @lg:grid-cols-4 mt-20 @2xl:grid-cols-5 @3xl:grid-cols-6 @4xl:grid-cols-8"
        faster
      >
        {skillsLogos.map((skill, index) => {
          return (
            <div className="mt-auto" key={index}>
              <Image
                src={skill.image}
                className="object-contain rounded-md m-auto"
                alt=""
                height={64}
                width={64}
                style={{
                  width: 64,
                  height: 64,
                }}
              />
              <h3 className="text-sm font-semibold tracking-tight text-[#525df3] text-center text-white rounded-full w-min px-2 m-2 mx-auto">
                {skill.name}
              </h3>
            </div>
          );
        })}
      </FadeInStagger>
    </div>
  );
}
