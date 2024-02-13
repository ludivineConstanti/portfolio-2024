const Hero = () => {
  return (
    <section className="mx-custom grid h-screen items-center sm:grid-cols-2">
      <div className="col-end-[-1]">
        <h1 className="text-h4 pointer-events-auto font-extralight">
          Ludivine Constanti
        </h1>
        <h2 className="text-h2 pointer-events-auto mb-1 mb-2 leading-none">
          Full Stack Developer 🚀
        </h2>
        <p className="text-body pointer-events-auto max-w-[25rem]">
          Technology enthusiast, life-long learner ✨
          <br />
          Creating digital experiences for award-winning agencies since 2017 🏆
        </p>
      </div>
    </section>
  );
};

export default Hero;
