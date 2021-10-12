import React, {Fragment} from "react";
import { useSelector, useDispatch } from "react-redux";
import Post from "../components/Post";

import { FaChevronLeft } from 'react-icons/fa';
import { FaChevronRight } from 'react-icons/fa';

import styled from "styled-components";

export default function PostList(props) {
  const postList = useSelector((state) => state.post.list);
  console.log("postList", postList);

  return(
    <Wrap>
      <IconWrap>
        <FaChevronLeft size={30} />
      </IconWrap>
       {/* <Post/>
       <Post/>
       <Post/> */}
       {postList.map((post) => {
        //  if(post.nickname === user.nickname)
        return <Post key={post._id} {...post} />
       })}
      <IconWrap>
        <FaChevronRight size={30} />
      </IconWrap>
    </Wrap>
  );
}

const Wrap = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const IconWrap = styled.div`
  cursor: pointer;
`;
