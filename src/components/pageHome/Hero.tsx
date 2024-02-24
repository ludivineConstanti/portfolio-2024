const Hero = () => {
  return (
    <div className="mx-sm mx-xl grid h-screen sm:grid-cols-2 sm:items-center">
      <div className="col-end-[-1] flex justify-center">
        <section className="mt-40 h-fit bg-[rgba(23,37,84,0.75)] p-2 px-8 sm:mt-0 sm:px-2">
          <h1 className="text-h4 pointer-events-auto font-light">
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
        </section>
      </div>
    </div>
  );
};

export default Hero;
