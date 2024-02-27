const Hero = () => {
  return (
    <div className="mx-sm mx-xl relative grid h-[100dvh] sm:grid-cols-2 sm:items-center">
      <div className="col-end-[-1] flex justify-center">
        <section className="mt-40 h-fit bg-[rgba(23,37,84,0.75)] p-2 px-8 sm:mt-0 sm:px-2">
          <h1 className="text-h4 pointer-events-auto font-light">
            Ludivine Constanti
          </h1>
          <h2 className="text-h2 pointer-events-auto mb-2 leading-none">
            Full Stack Developer 🚀
          </h2>
          <p className="text-body pointer-events-auto max-w-[25rem]">
            Welcome to my portfolio!
            <br />I am a technology enthusiast, life-long learner ✨ Creating
            digital experiences for award-winning agencies since 2017 🏆
          </p>
        </section>
      </div>
      <div className="text-body absolute bottom-12 left-[50%] flex translate-x-[-50%] animate-bounce flex-col items-center gap-1  rounded-xl bg-blue-950 p-2 sm:bottom-12">
        <p>Scroll Down</p>
        <div className="w-4">
          <svg
            width="100%"
            viewBox="0 0 14 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.09399 0.894592C1.70361 0.504211 1.07031 0.504211 0.679932 0.894592C0.289307 1.28522 0.289307 1.91827 0.679932 2.3089L6.33667 7.96564C6.43433 8.06329 6.54712 8.13654 6.66748 8.18536C6.92041 8.2879 7.20703 8.28278 7.45654 8.16974C7.56445 8.1214 7.66626 8.0545 7.75488 7.96588L13.4119 2.3089C13.8022 1.91852 13.8022 1.28522 13.4119 0.894836C13.0212 0.504211 12.3882 0.504211 11.9976 0.894836L7.0459 5.8465L2.09399 0.894592Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Hero;
