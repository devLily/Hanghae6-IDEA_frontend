<<<<<<< HEAD
import React, { useState } from "react";
import styled from "styled-components";

export default function Input(props) {
  const [inputValue, setInputValue] = useState("");

  const changeInput = (event) => {
    setInputValue(event.target.value);
    console.log(event.target.value);
  };

  return (
    <div>
      <input value={inputValue} onChange={changeInput} />
    </div>
=======
import React from "react";
import styled from "styled-components";

import Grid from "./Grid";
import Text from "./Text";

const Input = (props) => {
  const { label, placeholder, _onChange, type, multiLine, value, is_Submit, onSubmit, width } = props;

  if (multiLine) {
    return (
      <Grid>
        {label && <Text margin="0px">{label}</Text>}
        <ElTextarea
          rows={10}
          value={value}
          placeholder={placeholder}
          onChange={_onChange}
          width={width}
        ></ElTextarea>
      </Grid>
    );
  }

  return (
    <React.Fragment>
      <Grid>
        {label && <Text margin="0px">{label}</Text>}
        {/* is_Submit이 있으면 value 컨트롤하기, 없으면 value 컨트롤하지 않기 */}
        {is_Submit ?
          (<ElInput
            type={type}
            placeholder={placeholder}
            onChange={_onChange}
            value={value}
            onKeyPress={(e) => {
              if (e.key == "Enter") {
                onSubmit(e);
              }
            }}
            width={width}
          />)
          :
          (<ElInput
            type={type}
            placeholder={placeholder}
            onChange={_onChange}
            width={width}
          />)}
      </Grid>
    </React.Fragment>
>>>>>>> 60ac55797b59900453ed884bbf15b5b5ed37b8b0
  );
};

Input.defaultProps = {
  multiLine: false,
  label: false,
  placeholder: "텍스트를 입력해주세요.",
  type: "text",
  value: "",
  is_Submit: false,
  onSubmit: () => { },
  _onChange: () => { },
  width: false,
};

const ElTextarea = styled.textarea`
  border: 1px solid #212121;
  width: ${(props) => props.width};
  padding: 12px 4px;
  box-sizing: border-box;
`;


const ElInput = styled.input`
  border: 1px solid #212121;
  width: ${(props) => props.width};
  padding: 12px 4px;
  box-sizing: border-box;
`;

export default Input;