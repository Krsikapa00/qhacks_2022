import React from "react";

export default (props) => (
  <div
    style={{
      maxWidth: "1400px",
      marginLeft: "auto",
      marginRight: "auto",
      paddingLeft: "145px",
      paddingRight: "145px",
      "@media screen and (maxWidth: 1200px) and (minWidth: 860px)": {
        paddingLeft: "80px",
        paddingRight: "80px"
      },
      "@media screen and (maxWidth: 860px)": {
        paddingLeft: "5%",
        paddingRight: "5%"
      },
      height: "100%"
    }}
  >
    {props.children}
  </div>
);
