import React from "react";
import Header from "../components/Header";
import MenuComponent from "../components/Menu";
import BreadcrumbComponent from "../components/Breadcrumb";

interface IDefaultTemplate {
  children: React.ReactNode;
}

const DefaultTemplate = ({ children }: IDefaultTemplate) => {
  return (
    <main>
      <Header />
      <MenuComponent />
      <BreadcrumbComponent />
      {children}
    </main>
  );
};

export default DefaultTemplate;
