<<<<<<< HEAD
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
    dispatch(wishActions.addWishItem());
    //dispatch(wishActions.addWishItem("muzzi1@muzzi.com", _id));
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
=======
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
>>>>>>> 60ac55797b59900453ed884bbf15b5b5ed37b8b0
