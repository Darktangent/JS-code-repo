import React from "react";
const Option = props => {
  return (
    <div>
      Option: {props.optiontext}
      <button
        onClick={e => {
          props.handleDeleteOption(props.optiontext);
        }}
      >
        remove
      </button>
    </div>
  );
};
export default Option;
