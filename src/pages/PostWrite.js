import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as postActions } from "../redux/modules/post";

import { Grid, Text, Button, Image, Input } from "../components/elements";
import Upload from "../components/Upload";

const PostWrite = (props) => {
  // 유저 정보 갖고 오기 필요
  // 유저 로그인 상태 확인 필요
  // 유저 닉네임 가져오기 필요

  // let is_login = true;

  const dispatch = useDispatch();
  const { history } = props;

  const imagePreview = useSelector((state) => state.image.preview);
  const image = useSelector((state) => state.image.image_url);
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  // const postList = useSelector((state) => state.post.list.post);
  // console.log(postList);

  const [title, setTitle] = React.useState("");
  const [spec, setSpec] = React.useState("");
  const [place, setPlace] = React.useState("");
  const [desc, setDesc] = React.useState("");

  const changeTitle = (e) => {
    // console.log("제품명 입력");
    setTitle(e.target.value);
  };

  const changeSpec = (e) => {
    // console.log("스펙 입력");
    setSpec(e.target.value);
  };

  const changePlace = (e) => {
    // console.log("추천 공간 입력");
    setPlace(e.target.value);
  };

  const changeDesc = (e) => {
    // console.log("제품 설명 입력");
    setDesc(e.target.value);
  };

  const addPost = () => {
    // console.log("게시글 업로드 버튼 눌림");
    // console.log(`제품명: ${title}`);
    // console.log(`스펙: ${spec}`);
    // console.log(`추천 공간: ${place}`);
    // console.log(`제품 설명: ${desc}`);
    // console.log(`이미지: ${image}`);
    // addPost 미들웨어 실행
    dispatch(postActions.createPost(title, spec, place, desc, image));
    // 메인페이지로 이동
  };

  // 로그인 상태라면
  if (isLoggedIn) {
    return (
      <Grid>
        <Grid is_flex>
          <Grid>
            {/* 제품 이미지 */}
            <Grid margin="10px 0px 10px 0px">
              <Upload />
            </Grid>
            <Grid>
              <Image
                shape="rectangle"
                src={
                  imagePreview
                    ? imagePreview
                    : "https://thesocialstudies.co/wp-content/uploads/2021/06/placeholder-1-1.jpg"
                }
              />
            </Grid>
          </Grid>
          <Grid margin="10px">
            {/* 제품 타이틀 */}
            <Grid is_flex>
              <Text width="100px" bold>
                제품명
              </Text>
              <Input width="100%" _onChange={changeTitle} />
            </Grid>
            {/* 제품 스펙 */}
            <Grid is_flex>
              <Text width="100px" bold>
                스펙
              </Text>
              <Input width="100%" _onChange={changeSpec} />
            </Grid>
            {/* 제품 추천 공간 */}
            <Grid is_flex>
              <Text width="100px" bold>
                추천 공간
              </Text>
              <Input width="100%" _onChange={changePlace} />
            </Grid>
            {/* 제품 설명 */}
            <Grid is_flex>
              <Text width="100px" bold>
                제품 설명
              </Text>
              <Input width="100%" _onChange={changeDesc} />
            </Grid>
          </Grid>
        </Grid>
        {/* 게시글 업로드 버튼 */}
        <Grid margin="10px 0px 0px 0px">
          <Button _onClick={addPost}>게시글 업로드</Button>
        </Grid>
      </Grid>
    );
  }

  // 로그인 상태가 아니라면
  else {
    return (
      <Grid margin="100px 0px" padding="16px" center>
        <Text size="32px" bold>
          앗! 잠깐!
        </Text>
        <Text size="16px">로그인 후에만 글을 쓸 수 있어요!</Text>
        <Button
          _onClick={() => {
            history.replace("/login");
          }}
        >
          로그인 하러가기
        </Button>
      </Grid>
    );
  }
};

export default PostWrite;
