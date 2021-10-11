import React, {Fragment} from "react";

import {Grid, Image, Text} from "../components/elements";

import { FaUserCircle } from 'react-icons/fa';
import { RiShieldUserLine } from 'react-icons/ri';
import styled from "styled-components";

export default function Post(props) {
  const { title, spec, image, nickname, place } = props;
  return (
    <Wrap>
      <Images src={image} alt="goods"/>
      <Grid padding="16px">
        <Text bold><FaUserCircle />{" "}{nickname}</Text>
        <Text>{title}</Text>
        <Text>추천공간 {place}</Text>
        <Text>{spec}</Text>
      </Grid>
    </Wrap>
  );
}


Post.defaultProps = {
  postId: "postId",
  title: "인형같지만 진짜 인형춘식",
  spec: "키 10cm x 몸무게 300g",
  image: "https://cfnimage.commutil.kr/phpwas/restmb_allidxmake.php?idx=3&simg=202012170917410759599ebb03838180228147171.jpg",
  nickname: "닉네임",
  place: "침실",
  }

  // Post.defaultProps = {
  //   user_info: {
  //     user_name: "mean0",
  //     user_profile: "https://mean0images.s3.ap-northeast-2.amazonaws.com/4.jpeg",
  //   },
  //   image_url: "https://mean0images.s3.ap-northeast-2.amazonaws.com/4.jpeg",
  //   contents: "고양이네요!",
  //   comment_cnt: 10,
  //   insert_dt: "2021-02-27 10:00:00",
  // };

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
