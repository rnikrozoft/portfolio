import { AppIntro, FadeIn, FadeInStagger, Section } from "@/components";
import { App, loadApps } from "@/lib/mdx";
import Image from "next/image";

export default async function AppsLayout({
  appData,
  children,
}: {
  appData: App;
  children: React.ReactNode;
}) {
  return (
    <div className="w-full overflow-y-auto overflow-x-hidden @container">
      <article>
        <header>
          <Section id="about">
            <FadeInStagger once>
              <FadeIn>
                <AppIntro eyebrow="Case Study" title={appData.title}>
                  <p>{appData.description}</p>
                </AppIntro>
              </FadeIn>
              <FadeIn>
                <div className="mt-3 border-gray-500/20 border-y bg-gray-900/20">
                  <div className="mx-auto max-w-5xl">
                    <dl className="grid grid-cols-1 text-sm text-gray-500 sm:mx-0 sm:grid-cols-3">
                      <div className="px-6 py-4 sm:border-l border-gray-500/20">
                        <dt className="font-semibold text-blue-100">Status</dt>
                        <dd>{appData.release}</dd>
                      </div>
                      <div className="px-6 py-4 sm:border-l border-gray-500/20">
                        <dt className="font-semibold text-blue-100">Youtube</dt>
                        <dd>
                          <a href={appData.youtube} target="_blank">
                            click to watch
                          </a>
                        </dd>
                      </div>
                      <div className="px-6 py-4 sm:border-l border-gray-500/20">
                        <dt className="font-semibold text-blue-100">
                          Visit
                        </dt>
                        {appData.url !== "" ? (
                          <a href={appData.url} target="_blank">
                            click to play
                          </a>
                        ) : "play on mobile"}
                      </div>
                    </dl>
                  </div>
                </div>
                <div className="p-4 @lg:p-12 @3xl:p-24 @6xl:p-32 app-gradient-bg">
                  <Image
                    src={appData.image}
                    alt=""
                    className="m-auto"
                    sizes="(min-width: 1216px) 76rem, 100vw"
                    priority
                  />
                </div>
              </FadeIn>
            </FadeInStagger>
          </Section>
        </header>

        <FadeIn>{children}</FadeIn>
      </article>
    </div>
  );
}
