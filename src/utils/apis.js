import instance from "../lib/axios";

export const apis = {
  // 게시물 불러오기
  getPost: () => instance.get("/post"),
  // 게시물 작성하기
  createPost: (contents) => instance.post('/posts', contents),
  // 게시물 수정하기
  editPost: (id, content) => instance.put(`/posts/${id}`, content),
  // 게시물 삭제하기
  deletePost: (id) => instance.delete(`/posts/${id}`),
};
