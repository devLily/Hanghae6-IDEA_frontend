import React, {Fragment} from "react";
import styled from "styled-components";

import { Grid, Text, Input } from "../components/elements";

export default function Signup(props) {
    
  return (
    <Fragment>
      <Grid>
        <Text size="32px" bold>회원가입 페이지</Text>
        <LoginBox>
          <Text>이메일</Text>
          <Input></Input>
          <Text>닉네임</Text>
          <Input></Input>
          <Text>비밀번호</Text>
          <Input></Input>
          <Text>비밀번호 확인</Text>
          <Input></Input>
          <button>회원가입하기</button>
          <button>돌아가기</button>
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