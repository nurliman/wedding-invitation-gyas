import React, { DetailedHTMLProps, HTMLAttributes } from "react";
import cn from "classnames";
import styles from "./Spinner.module.scss";

type StandardProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

type Props = StandardProps & { variant?: "primary" | "light" };

const Spinner: React.FC<Props> = ({ className, variant, ...rest }) => {
  className = Boolean(className) ? className : "";
  variant = Boolean(variant) ? variant : "primary";

  return (
    <div
      {...rest}
      className={cn(styles.spinner, styles[variant], className)}
    ></div>
  );
};

export default Spinner;
