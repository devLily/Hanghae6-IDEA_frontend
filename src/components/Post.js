import React, { useState } from "react";

import {Grid, Image, Text} from "../components/elements";

import { FaUserCircle } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { RiHeartAddLine } from "react-icons/ri";
import { AiTwotoneHeart } from "react-icons/ai";
import { RiShieldUserLine } from "react-icons/ri";

import styled from "styled-components";

export default function Post(props) {
  const { title, spec, image, nickname, place } = props;
  const [ isWished, setIsWished ] = useState(false);
  console.log("props",props);
  const checedkWish = () => {
    setIsWished(true);
  }

  const unClickWish = () => {
    setIsWished(false);
  }

  if (isWished) {
    return (
      <Wrap>
        <Images src={image} alt="goods"/>
        <Heart><AiTwotoneHeart size={20} onClick={unClickWish}/></Heart>
        <Grid padding="10px">
          <Text bold><FaUserCircle />{" "}{nickname}</Text>
          <Text>{title}</Text>
          <Text>추천공간 {place === "1" ? "거실" : "기타"}</Text>
          <Text>{spec}</Text>
        </Grid>
      </Wrap>
    );
  }
  return (
    <Wrap>
      <Images src={image} alt="goods"/>
      <Heart><AiOutlineHeart size={20} onClick={checedkWish}/></Heart>
      {/* s */}
      <Grid padding="10px">
        <Text bold><FaUserCircle />{" "}{nickname}</Text>
        <Text>{title}</Text>
        <Text>추천공간 {place}</Text>
        <Text>{spec}</Text>
      </Grid>
    </Wrap>
  );
}

const Images = styled.img`
  width:200px;
  height: 150px;
  padding: 10px;
  margin: 0 auto;
`;

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 100px;
`;

const Heart = styled.div`
  display: flex;
  margin-left: 150px;
  cursor: pointer;
  &:hover {
    size: 25;
  }
`;
