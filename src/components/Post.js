import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { FaUserCircle } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { RiHeartAddLine } from "react-icons/ri";
import { AiTwotoneHeart } from "react-icons/ai";
import { RiShieldUserLine } from "react-icons/ri";

import { actionCreators as wishActions } from "../redux/modules/wish";

import { Grid, Image, Text } from "../components/elements";

export default function Post({ post }) {
  const { title, spec, image, nickname, place, _id } = post;
  const [isWished, setIsWished] = useState(false);
  const dispatch = useDispatch();

  const toggleWish = useCallback(() => {
    if (isWished) {
      dispatch(wishActions.deleteWishItem());
      setIsWished(false);
      return;
    }
    console.log("toggleWish");
    dispatch(wishActions.addWishItem("muzzi1@muzzi.com", _id));
    setIsWished(true);
    return;
    // try {
    // } catch (err) {
    //   console.error();
    // } finally {
    // }
  }, [dispatch, isWished, _id]);
  // 거실=1, 침실=2, 주방=3, 화장실=4, 기타=5
  // addWishItem
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
          <AiTwotoneHeart size={20} color="red" onClick={toggleWish} />
        ) : (
          <AiOutlineHeart size={20} onClick={toggleWish} />
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

Post.defaultProps = {
  image:
    "http://www.cleandropleon.com/sistema/assets/images/services/default.png",
};

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
