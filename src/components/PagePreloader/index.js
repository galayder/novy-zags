import React from "react";
import { Preloader, PreloaderInner } from "./preloader.module.css";

export const PagePreloader = () => {
  return (
    <div className={Preloader}>
      <div className={PreloaderInner}>NZ</div>
    </div>
  );
};
