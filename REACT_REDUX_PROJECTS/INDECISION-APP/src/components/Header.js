import React from "react";
const Header = props => {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.subttile && <h2>{props.subttile}</h2>}
    </div>
  );
};
Header.defaultProps = {
  title: "Indecision"
};
export default Header;
