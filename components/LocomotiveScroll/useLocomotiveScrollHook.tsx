import { useContext } from "react";
import {
  LocomotiveScrollContext,
  LocomotiveScrollContextValue,
} from "./LocomotiveScrollContext";

export function useLocomotiveScroll(): LocomotiveScrollContextValue {
  return useContext(LocomotiveScrollContext);
}

useLocomotiveScroll.displayName = "useLocomotiveScroll";
