import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import Post from "../components/Post";
import { actionCreators as wishActions } from "../redux/modules/wish";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import styled from "styled-components";

export default function WishList(props) {
  const dispatch = useDispatch();
  const wishList = useSelector((state) => state.wish.list);

  useEffect(() => {
    dispatch(wishActions.getWishList());
  }, []);

  const slickSettings = {
    dots: true, // pagination dot
    infinite: true, // 끝이없음.
    autoplay: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  if (!wishList?.length) {
    return (
      <h1>
        등록된 wish Item이 없습니다, <br />
        게시물의 하트를 눌러 마음에 드는 소품을 추가해보세요!
      </h1>
    );
  }

  return (
    <Title>위시리스트</Title>
    // <PostListContainer>
    //   <SliderWrap>
    //     <Slider {...slickSettings}>
    //       {wishList.map((post) => {
    //         return <Post key={post.postId} post={post} />;
    //       })}
    //     </Slider>
    //   </SliderWrap>
    // </PostListContainer>
  );

  // return(
  //   <Wrap>
  //     <IconWrap>
  //       <FaChevronLeft size={30} onClick/>
  //     </IconWrap>
  //       <Post/>
  //       <Post/>
  //       <Post/>
  //     <IconWrap>
  //       <FaChevronRight size={30} onClick/>
  //     </IconWrap>
  //   </Wrap>
  // );
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

const SnackBar = styled.div`
  position: fixed;
  bottom: 10px;
  left: 50%;
  transform: translateX(-50%);

  opacity: 0;
  pointer-events: none;

  transition: bottom 0.5s opacity 0.5s;
`;

const Title = styled.h1`
  font-size: 30px;
`;
