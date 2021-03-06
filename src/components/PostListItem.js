import React, { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components';
import { FaUserCircle } from 'react-icons/fa';
import { AiOutlineHeart } from 'react-icons/ai';
import { AiTwotoneHeart } from 'react-icons/ai';

import { actionCreators as wishActions } from '../redux/modules/wish';

import { history } from '../redux/configStore';
import { Grid, Text } from '../components/elements';

export default function PostListItem({ post, marginCenter }) {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  const { title, spec, image, nickname, place, postId, isWished, wishId } =
    post;

  // 좋아요 리스트 클릭 시, 액션
  // 1. 삭제하기 or 추가하기
  // 2. 다시 wish API 요청하기
  const toggleWish = useCallback(() => {
    if (isWished) {
      console.log('wishId', wishId);
      dispatch(wishActions.deleteWishItem(wishId));
    } else {
      dispatch(wishActions.addWishItem(postId));
    }
    dispatch(wishActions.getWishList());
  }, [dispatch, isWished, postId, wishId]);

  const setPlaceName = () => {
    switch (Number(place)) {
      case 1:
        return '거실';
      case 2:
        return '침실';
      case 3:
        return '주방';
      case 4:
        return '화장실';
      default:
        return '기타';
    }
  };

  if (!user) {
    return (
      <Wrap>
        <Images
          src={
            image
              ? image
              : 'http://www.cleandropleon.com/sistema/assets/images/services/default.png'
          }
          alt=""
          onClick={() => {
            history.push(`/post/${postId}`);
          }}
        />

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

  return (
    <Wrap marginCenter={marginCenter}>
      <Images
        src={
          image
            ? image
            : 'http://www.cleandropleon.com/sistema/assets/images/services/default.png'
        }
        alt={title}
        onClick={() => {
          history.push(`/post/${postId}`);
        }}
      />
      <DetailContainer>
        <TextWrap>
          <TextDetail bold>
            <FaUserCircle /> {nickname}
          </TextDetail>
          <TextDetail>{title}</TextDetail>
          <Text>추천공간 {setPlaceName()}</Text>
          <TextDetail>{spec}</TextDetail>
        </TextWrap>
        <Heart>
          {isWished ? (
            <AiTwotoneHeart size={20} color="red" onClick={toggleWish} />
          ) : (
            <AiOutlineHeart size={20} onClick={toggleWish} />
          )}
        </Heart>
      </DetailContainer>
    </Wrap>
  );
}

PostListItem.defaultProps = {
  image:
    'http://www.cleandropleon.com/sistema/assets/images/services/default.png',
};

const Images = styled.img`
  cursor: pointer;
  min-height: 300px;
  width: 100%;
  /* height: 150px; */
  margin: 0 auto;
  border: 1px solid #eeeeee;
  border-radius: 6px;
`;

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 300px;
  padding: 10px;
  margin: ${(props) => (props.marginCenter ? '0 auto' : 0)};
`;

const DetailContainer = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  padding: 10px;
`;

const TextWrap = styled.div`
  width: calc(100% - 25px);
`;

const Heart = styled.div`
  flex: 1;
  /* margin-left: 150px; */
  cursor: pointer;
  &:hover {
    size: 25;
  }
`;

const TextDetail = styled.p`
  height: 34px;
  word-break: break-all;
  font-size: 13px;
  font-weight: ${(props) => (props.bold ? 'bold' : 400)};
  line-height: 17px;
  color: #000;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
`;

// router.post("/", authMiddleware, async (req, res) => {
//   try {
//     const { email, postId } = req.body;
//     const isUser = await User.findOne({ email: email });
//     console.log("isUser", isUser);
//     const newWish = await Wish.create({ userId: isUser._id, postId: postId });
//     console.log("newWish", newWish);
//     res.status(200).send({ wish: newWish });
//   } catch (err) {
//     res.status(400).send({ err: err });
//   }
// });
