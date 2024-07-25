"use client";
import { useEffect, ReactNode } from "react";
import $ from "jquery";

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

  return <>{children}</>;
};

export default LayoutCmpnt;
