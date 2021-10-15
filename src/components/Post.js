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
            <Text bold color="orange">
              {nickname}
            </Text>
          </Grid>
          {/* 위시리스트 추가 버튼 */}
          <Grid>
            <Button>위시리스트에 추가</Button>
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
