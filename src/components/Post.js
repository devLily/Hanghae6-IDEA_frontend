import React, { useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { FaUserCircle } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";
import { RiHeartAddLine } from "react-icons/ri";
import { AiTwotoneHeart } from "react-icons/ai";
import { RiShieldUserLine } from "react-icons/ri";

import { actionCreators as wishActions } from "../redux/modules/wish";

import { history } from "../redux/configStore";
import { Grid, Image, Text } from "../components/elements";

export default function Post({ post }) {
  const dispatch = useDispatch();
  // const userMail = useSelector((state) => state.user.user.email);

  const { title, spec, image, nickname, place, postId } = post;
  const [isWished, setIsWished] = useState(false);

  const toggleWish = useCallback(() => {
    if (isWished) {
      dispatch(wishActions.deleteWishItem(postId));
      setIsWished(false);
      return;
    }
    console.log("isWished", isWished);
    dispatch(wishActions.addWishItem(postId));
    setIsWished(true);
    return;
  }, [dispatch, isWished, postId]);

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

  // if (user.isLoggedIn) {
  //   return (
  //     <Wrap>
  //       <Images
  //         src={
  //           image
  //             ? image
  //             : "http://www.cleandropleon.com/sistema/assets/images/services/default.png"
  //         }
  //         alt=""
  //         onClick={() => {
  //           history.push(`/post/${postId}`);
  //         }}
  //       />
  //       <Heart>
  //         {isWished ? (
  //           <AiTwotoneHeart size={20} color="red" onClick={toggleWish} />
  //         ) : (
  //           <AiOutlineHeart size={20} onClick={toggleWish} />
  //         )}
  //       </Heart>

  //       <Grid padding="10px">
  //         <Text bold>
  //           <FaUserCircle /> {nickname}
  //         </Text>
  //         <Text>{title}</Text>
  //         <Text>추천공간 {setPlaceName()}</Text>
  //         <Text>{spec}</Text>
  //       </Grid>
  //     </Wrap>
  //   );
  // }
  return (
    <Wrap>
      <Images
        src={
          image
            ? image
            : "http://www.cleandropleon.com/sistema/assets/images/services/default.png"
        }
        alt=""
        onClick={() => {
          history.push(`/post/${postId}`);
        }}
      />
      <Heart>
        {isWished ? (
          <AiTwotoneHeart size={20} color="red" onClick={toggleWish} />
        ) : (
          <AiOutlineHeart size={20} onClick={toggleWish} />
        )}
      </Heart>
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
  cursor: pointer;
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
