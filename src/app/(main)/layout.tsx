import Header from "@/components/layout/Header";
import { FunctionComponent, PropsWithChildren } from "react";

const MainLayout: FunctionComponent<PropsWithChildren> = ({ children }) => {
  return (
    <main className="bg-blue-dark-950 font-medium text-white">
      <Header />
      {children}
    </main>
  );
};

export default MainLayout;
