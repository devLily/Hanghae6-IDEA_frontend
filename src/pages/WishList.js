import React, {Fragment} from "react";

import Post from "../components/Post";

import { FaChevronLeft } from 'react-icons/fa';
import { FaChevronRight } from 'react-icons/fa';

import styled from "styled-components";

export default function PostList(props) {
  return(
    <Wrap>
      <IconWrap>
        <FaChevronLeft size={30} onClick/>
      </IconWrap>
        <Post/>
        <Post/>
        <Post/>
      <IconWrap>
        <FaChevronRight size={30} onClick/>
      </IconWrap>
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const IconWrap = styled.div`
  cursor: pointer;
`;
