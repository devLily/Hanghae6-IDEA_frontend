import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { actionCreators as postActions } from "../redux/modules/post";
import { actionCreators as imageActions } from "../redux/modules/image";
import { Grid, Text, Button, Image, Input } from "../components/elements";
import Upload from "../components/Upload";
import styled from "styled-components";

const PostWrite = (props) => {
  const postId = useParams();
  //const placeList = ["거실", "침실", "주방", "화장실", "기타"];
  const imagePreview = useSelector((state) => state.image.preview);
  const postList = useSelector((state) => state.post.list);
  const image = useSelector((state) => state.image.image_url);
  const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const dispatch = useDispatch();
  const { history } = props;

  const isEdit = postId ? true : false;
  let _post = isEdit
    ? postList.find((p) => p.postId === parseInt(postId))
    : null;
  let _image = _post && isEdit ? _post.image : "";
  // const postList = useSelector((state) => state.post.list.post);
  // console.log(postList);

  const [title, setTitle] = React.useState("");
  const [spec, setSpec] = React.useState("");
  const [place, setPlace] = React.useState("");
  const [desc, setDesc] = React.useState("");
  const [imageURL, setImageURL] = React.useState(_image);

  const changeTitle = (e) => {
    // console.log("제품명 입력");
    setTitle(e.target.value);
  };

  const changeSpec = (e) => {
    // console.log("스펙 입력");
    setSpec(e.target.value);
  };

  // const changePlace = ({ target }) => {
  //   // console.log("추천 공간 입력");
  //   const { name, value } = target;
  //   setPlace({ ...place, [name]: value });
  //   console.log(setPlace);
  // };
  const changePlace = (e) => {
    // console.log("추천 공간 입력");
    setPlace(e.target.value);
  };

  const changeDesc = (e) => {
    // console.log("제품 설명 입력");
    setDesc(e.target.value);
  };

  const changeImage = (e) => {
    setImageURL(e.target.value);
  };

  const addPost = () => {
    dispatch(postActions.createPost(title, spec, place, desc, image));
    history.push("/");
    // window.localStorage.href = "/";
    // 메인페이지로 이동
  };

  const editPost = () => {
    console.log("게시글 수정 버튼 눌림");
    console.log(`제품명: ${title}`);
    console.log(`스펙: ${spec}`);
    console.log(`추천 공간: ${place}`);
    console.log(`제품 설명: ${desc}`);
    console.log(`이미지: ${imageURL}`);
    _post = {
      ..._post,
      title: title,
      spec: spec,
      place: place,
      desc: desc,
      image: imageURL,
    };
    // dispatch(postActions.editPostMW(postId, _post));
    // console.log("editPostMW 실행!")
    // 메인페이지로 이동
    // window.location.href = "/";
    history.push("/");
  };

  useEffect(() => {
    // 포스트 리스트가 없을 경우에만
    // 포스트 리스트 불러오기
    if (postList.length === 0) {
      dispatch(postActions.getPostList());
      dispatch(imageActions.setPreview(imagePreview));
    }

    // 인풋들이 변할 때 _post 정보들을 새로운 상태로 바꿔주기
    setTitle(_post?.title);
    setSpec(_post?.spec);
    setPlace(_post?.place);
    setDesc(_post?.descr);
    setImageURL(_post?.image);
  }, [_post]);

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
              {/* <label for="pet-select">Choose a pet:</label> */}
              {/* 거실=1, 침실=2, 주방=3, 화장실=4, 기타=5 */}
              {/* <Selector name="value" value={place} onChange={changePlace}>
                <option value="">--Please choose place--</option>
                <option value="1">거실</option>
                <option value="2">침실</option>
                <option value="3">주방</option>
                <option value="4">화장실</option>
                <option value="5">기타</option>
              </Selector> */}
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
          {isEdit ? (
            <Button _onClick={editPost}>게시글 수정</Button>
          ) : (
            <Button _onClick={addPost}>게시글 업로드</Button>
          )}
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
            // window.location.href = "/login";
          }}
        >
          로그인 하러가기
        </Button>
      </Grid>
    );
  }
};

export default PostWrite;

const Selector = styled.select`
  width: 100%;
  height: 45px;
  text-align: center;
`;
