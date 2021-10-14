import React, { Fragment } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

import { Grid, Image, Text, Button } from "../components/elements";


export default function Post(props) {
  const dispatch = useDispatch();

  const post = props;

  console.log(post);


  const { nickname, title, spec, image, desc, place } = props;

  return (
    <Grid is_flex>

      <Grid>
        <Grid is_flex>
          {/* 포스팅한 유저 */}
          <Grid>
            <Text
              bold
              color="orange"
            >
              {nickname}
            </Text>
          </Grid>
          {/* 위시리스트 추가 버튼 */}
          <Grid>
            <Button>
              위시리스트에 추가
            </Button>
          </Grid>
        </Grid>
        {/* 제품 이미지 */}
        <Grid>
          <Image shape="rectangle" src={image} />
        </Grid>
      </Grid>

      <Grid margin="10px">
        {/* 제품 타이틀 */}
        <Grid is_flex>
          <Text bold>제품</Text>
          <Text>{title}</Text>
        </Grid>
        {/* 제품 스펙 */}
        <Grid is_flex>
          <Text bold>스펙</Text>
          <Text>{spec}</Text>
        </Grid>
        {/* 제품 추천 공간 */}
        <Grid is_flex>
          <Text bold>추천 공간</Text>
          <Text>{place}</Text>
        </Grid>
        {/* 제품 설명 */}
        <Grid is_flex>
          <Text bold>제품 설명</Text>
          <Text>{desc}</Text>
        </Grid>
      </Grid>
    </Grid>
  );
}

// Post.defaultProps = {
//   nickname: "오늘의집구석",
//   title: "컬러풀 선셋조명 단스탠드/발리 석양 느낌 무드등(국내 인증제품)",
//   spec: "알루미늄, 원형, 숏 스탠드, 6.5W, 220V",
//   image: "https://image.ohou.se/i/bucketplace-v2-development/uploads/productions/161291891574987927.jpg",
//   desc: "따뜻한 석양빛, 짙은 노랑과 오렌지의 컬러 그라데이션",
//   place: "거실",
// };
