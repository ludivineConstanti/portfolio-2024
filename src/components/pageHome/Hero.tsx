const Hero = () => {
  return (
    <section className="mx-custom grid h-screen sm:grid-cols-2 sm:items-center">
      <div className="col-end-[-1] flex justify-center">
        <div>
          <h1 className="text-h4 pointer-events-auto mt-40 font-light sm:mt-0">
            Ludivine Constanti
          </h1>
          <h2 className="text-h2 pointer-events-auto mb-2 leading-none">
            Full Stack Developer 🚀
          </h2>
          <p className="text-body pointer-events-auto max-w-[25rem]">
            Technology enthusiast, life-long learner ✨
            <br />
            Creating digital experiences for award-winning agencies since 2017
            🏆
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
