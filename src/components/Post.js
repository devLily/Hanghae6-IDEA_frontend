import React, { useState } from "react";

import { Grid, Image, Text } from "../components/elements";

import { FaUserCircle } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { RiHeartAddLine } from "react-icons/ri";
import { AiTwotoneHeart } from "react-icons/ai";
import { RiShieldUserLine } from "react-icons/ri";

import styled from "styled-components";

export default function Post({ post }) {
  const { title, spec, image, nickname, place } = post;
  const [isWished, setIsWished] = useState(false);
  const checedkWish = () => {
    setIsWished(true);
  };

  const unClickWish = () => {
    setIsWished(false);
  };
  // 거실=1, 침실=2, 주방=3, 화장실=4, 기타=5

  const setPlaceName = () => {
    switch (Number(place)) {
      case 1:
        return "거실";
      case 2:
        return "침실";
      case 3:
        return "주방";
      case 4:
        return "화장실";
      default:
        return "기타";
    }
  };

  return (
    <Wrap>
      <Images src={image} alt="goods" />
      <Heart>
        {isWished ? (
          <AiTwotoneHeart size={20} onClick={unClickWish} />
        ) : (
          <AiOutlineHeart size={20} onClick={checedkWish} />
        )}
      </Heart>
      {/* s */}
      <Grid padding="10px">
        <Text bold>
          <FaUserCircle /> {nickname}
        </Text>
        <Text>{title}</Text>
        <Text>추천공간 {setPlaceName()}</Text>
        <Text>{spec}</Text>
      </Grid>
    </Wrap>
  );
}

const Images = styled.img`
  min-height: 300px;
  width: 100%;
  /* height: 150px; */
  padding: 10px;
  margin: 0 auto;
`;

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 300px;
`;

const Heart = styled.div`
  display: flex;
  margin-left: 150px;
  cursor: pointer;
  &:hover {
    size: 25;
  }
`;
