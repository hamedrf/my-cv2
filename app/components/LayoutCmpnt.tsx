"use client";
import { useEffect, ReactNode } from "react";
import $ from "jquery";
import { Provider } from "react-redux";
import { store } from "../stor";

interface LayoutProps {
  children: ReactNode;
}

const LayoutCmpnt: React.FC<LayoutProps> = ({ children }) => {
  useEffect(() => {
    $(".nav-item-effect").each(function () {
      if ($(this).text !== null && $(this).text !== undefined)
        $(this).attr("title", $(this).text());
    });
  });

  return (
    <>
      <Provider store={store}>{children}</Provider>
    </>
  );
};

export default LayoutCmpnt;
