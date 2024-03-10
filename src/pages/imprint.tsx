import clsx from "clsx";
import { Layout, TitlePage } from "@/components";
import { InternalLinksIds, internalLinks } from "@/models";

const colorPrimary = "bg-emerald-950";
const colorSecondary = "bg-emerald-800";

const pageId = InternalLinksIds.imprint;
const pageData = internalLinks[pageId];

const Imprint = () => {
  return (
    <Layout
      title={pageData.text}
      colorPrimary={colorPrimary}
      colorSecondary={colorSecondary}
    >
      <main className={clsx(colorPrimary, "min-h-[100vh]")}>
        <TitlePage
          emoji={pageData.emoji}
          text={pageData.text}
          color={colorSecondary}
        />
        <div className="mx-custom flex flex-col items-center">
          <div className="text-h5 [&>section>h2]:text-h2 [&>section>h2]:mb-8">
            <p className="mb-10 mt-16 sm:mb-16 sm:mt-28">Ludivine Constanti</p>
            <section>
              <h2>📓 Contact</h2>
              <p>
                📧 E-Mail:{" "}
                <a
                  href="mailto:ludivine-constanti@outlook.com"
                  className="text-link"
                >
                  ludivine-constanti@outlook.com
                </a>
              </p>
              <p>
                📄 Linkedin:{" "}
                <a
                  href="https://www.linkedin.com/in/ludivine-constanti/"
                  className="text-link break-all"
                  target="_blank"
                >
                  https://www.linkedin.com/in/ludivine-constanti/
                </a>
              </p>
            </section>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Imprint;
