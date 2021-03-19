import React from "react";
import Page from "./Page";
import Content from "./Content";

type Props = {
  title?: string;
  onBack?: () => any;
  className?: string;
  headerClassName?: string;
  iOS?: boolean;
};

const Layout: React.FC<Props> = ({ children, className, iOS }) => {
  return (
    <Page className={className} iOS={iOS}>
      <Content>{children}</Content>
    </Page>
  );
};

export default Layout;
