import { FC, ReactNode } from "react";
import Head from "next/head";
import classNames from "classnames";
import NavBar from "../Modules/NavBar";
type Props = {
  children: ReactNode;
  title: string;
  description: string;
};
const MainLayouts: FC<Props> = ({ children, title, description }) => {
  return (
    <>
      <Head>
        <meta name="description" content={description} />
        <title>{title}</title>
        <meta charSet="utf-8" />
      </Head>
      <div className={classNames(`h-full w-full   bg-white overflow-hidden`)}>
        <NavBar />
        {children}
      </div>
    </>
  );
};

export default MainLayouts;
