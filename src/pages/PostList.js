import React, {Fragment} from "react";

import Post from "../components/Post";

import { FaChevronLeft } from 'react-icons/fa';
import { FaChevronRight } from 'react-icons/fa';

import styled from "styled-components";

export default function PostList(props) {
  return(
    <Wrap>
      <FaChevronLeft size={30} onClick/>
        <Post/>
        <Post/>
        <Post/>
      <FaChevronRight size={30} onClick/>
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
