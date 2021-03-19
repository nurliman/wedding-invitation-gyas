import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import styles from "./Layout.module.scss";
import cx from "classnames";

type Props = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & { iOS?: boolean };

const Content: React.FC<Props> = ({ className, ...rest }) => {
  return <div className={cx(styles.content, className)} {...rest} />;
};

export default Content;
