import React from "react";
export const A: React.FC<{ href: string; scrollTo: string }> = (props) => {
  return (
    <a
      onClick={(event) => {
        event.preventDefault();
        let scrollTo = document.getElementById(props.scrollTo) || null;
        if (scrollTo !== null) {
          scrollTo.scrollIntoView({ behavior: "smooth" });
        }
      }}
      href={props.href}
    >
      {props.children}
    </a>
  );
};
