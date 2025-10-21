import React, { Fragment, ReactNode } from "react";
import { cn } from "@/utils/cn";
import Navbar from "@/components/ui/Navbar";
import Footer from "@/components/ui/Footer";

interface PropTypes {
  children: ReactNode;
}

const LandingPageLayout = (props: PropTypes) => {
  const { children } = props;
  return (
    <Fragment>
      <Navbar />
      <div className={cn(`bg-white flex justify-center`)}>
        <div className="w-full flex flex-col relative border-none md:border-x md:border-b md:border-gray-200 rounded-xl ">
          {children}
        </div>
      </div>
      {/* {showBottomNav && <BottomNav />} */}
      <Footer />
    </Fragment>
  );
};

export default LandingPageLayout;
