"use client";

import { Provider } from "react-redux";
import store from "@/store";
import { Menu, LinkCTA } from "@/components";

const Page404 = () => {
  return (
    <Provider store={store}>
      <Menu colorPrimary="bg-blue-950" colorSecondary="bg-blue-800" />
      <main className="mx-custom flex min-h-[100vh] flex-col items-center justify-center">
        <div className="relative flex flex-col justify-start sm:top-10">
          <h1 className="text-[7rem] sm:text-[10rem]">404</h1>
          <p className="text-body mb-10">
            Oops! This page seems to have taken a coffee break!
            <br />
            While it’s away, why not explore the other pages of the website?
          </p>
          <LinkCTA
            alignCenter={false}
            href="/"
            text="Home"
            color="bg-blue-950"
          />
        </div>
      </main>
    </Provider>
  );
};

export default Page404;
