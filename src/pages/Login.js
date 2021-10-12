import React, {Fragment} from "react";
import styled from "styled-components";
import { Grid, Text, Button, Input } from "../components/elements";
import { getCookie, setCookie, deleteCookie} from "../shared/Cookie"

export default function Login(props) {
  
  const login = () =>{
    
    setCookie("user_id","suin", 3);
    setCookie("user_pwd","1234", 3);
  }

  return (
    <Fragment>
      <Grid>
        <Text size="32px" bold>로그인 페이지</Text>
        <LoginBox>
          <Text>이메일</Text>
          <Input></Input>
          <Text>비밀번호</Text>
          <Input></Input>
          <button onClick={login()}> 로그인 </button>
        </LoginBox>
      </Grid>
    </Fragment>
  );
}

const LoginBox = styled.div`
margin: auto;
padding: 30px;
border: 1px solid black;
width: 250px;
height: 350px;
`;