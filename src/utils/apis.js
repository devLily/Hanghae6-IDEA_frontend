import instance from "../lib/axios";

export const apis = {
  getPost: () => instance.get("/post"),
  // 게시물 불러오기
  createPost: (contents) => instance.post("/post", contents),
  // 게시물 작성하기
  editPost: (id, contents) => instance.put(`/post/${id}`, contents),
  // 게시물 수정하기
  deletePost: (id) => instance.delete(`/post/${id}`),
  // 게시물 삭제하기

  getWish: () => instance.get("/wish"),
  // 위시리스트 불러오기
  addWish: (email, id) => instance.post("/wish", email,id )
  // 위시리스트 등록하기
};
