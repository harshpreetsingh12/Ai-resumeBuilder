import React, { ReactNode } from "react";

type RootLayoutProps = {
  children: ReactNode;
};

const MainLayout = ({ children }: RootLayoutProps) => {
  return <div className="w-screen my-24">{children}</div>;
};

export default MainLayout;
