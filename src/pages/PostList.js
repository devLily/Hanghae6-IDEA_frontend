import React, { Fragment } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import Slider from "react-slick";

import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Post from "../components/Post";

export default function PostList(props) {
  const postList = useSelector((state) => state.post.list);
  const slickSettings = {
    dots: true, // pagination dot
    infinite: true, // 끝이없음.
    autoplay: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  console.log("postList", postList);

  if (!postList?.length) {
    return null;
  }
  // 거실=1, 침실=2, 주방=3, 화장실=4, 기타=5
  return (
    <PostListContainer>
      {/* <IconWrap>
        <FaChevronLeft size={30} />
      </IconWrap> */}
      <SliderWrap>
        <Slider {...slickSettings}>
          {postList.map((post) => {
            return <Post key={post._id} post={post} />;
          })}
        </Slider>
      </SliderWrap>
      {/* <IconWrap>
        <FaChevronRight size={30} />
      </IconWrap> */}
    </PostListContainer>
  );
}

const PostListContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 70px);
`;

const SliderWrap = styled.div`
  max-width: 900px;
  margin: 0 auto;

  .slick-prev,
  .slick-next {
    width: 30px;
    height: 30px;

    &::before {
      color: #0438ae;
      font-size: 30px;
    }
  }
  .slick-dots {
    li {
      button {
        &::before {
          color: #0438ae;
        }
      }
    }
  }
`;

const IconWrap = styled.div`
  cursor: pointer;
`;
