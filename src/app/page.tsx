import {
  HomeHero,
  HomeWorkExperienceSection,
  HomeStudyCaseSection,
  HomeArticleSection,
} from "@/components";

const Home = () => {
  return (
    <main>
      <HomeHero />
      <HomeWorkExperienceSection />
      <HomeStudyCaseSection />
      {/* <HomeArticleSection /> */}
    </main>
  );
};

export default Home;
