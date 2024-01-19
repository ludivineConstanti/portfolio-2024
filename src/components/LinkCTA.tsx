const LinkCTA = () => {
  return (
    <a className="flex max-w-fit gap-1 rounded-full border-2 border-solid border-current bg-blue-700 px-3 py-1.5">
      Learn more
      <div className="ml-1 h-3">
        <svg
          className="h-full w-full"
          viewBox="0 0 18 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.863 0.758586C10.4009 1.22072 10.4009 1.97694 10.863 2.43907L13.0392 4.61531L1.26125 4.6153C0.605858 4.6153 0.0765037 5.14466 0.0765037 5.80005C0.0765037 6.45544 0.605857 6.98479 1.26125 6.98479L13.0392 6.98479L10.863 9.16102C10.4009 9.62316 10.4009 10.3794 10.863 10.8415C11.3251 11.3036 12.0814 11.3036 12.5435 10.8415L16.7447 6.64029C17.2069 6.17816 17.2069 5.42194 16.7447 4.9598L12.5435 0.758586C12.0814 0.296452 11.3251 0.296453 10.863 0.758586Z"
            fill="white"
          />
        </svg>
      </div>
    </a>
  );
};

export default LinkCTA;
