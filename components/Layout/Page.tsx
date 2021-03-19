import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import styles from "./Layout.module.scss";
import cx from "classnames";

type Props = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & { iOS?: boolean; modal?: boolean };

const Page: React.FC<Props> = ({ className, iOS, modal, ...rest }) => {
  const pageClassName = cx(className, {
    [styles.page]: true,
    [styles.pageModal]: modal,
  });
  return <div {...rest} className={pageClassName} />;
};

export default Page;
