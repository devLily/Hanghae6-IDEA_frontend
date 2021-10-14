import instance from "../lib/axios";

export const apis = {
<<<<<<< HEAD
  getPosts: () => instance.get("/post"),
=======
  getPost: () => instance.get("/post"),
>>>>>>> 60ac55797b59900453ed884bbf15b5b5ed37b8b0
  // 게시물 불러오기
  createPost: (contents) => instance.post("/post", contents),
  // 게시물 작성하기
  editPost: (id, contents) => instance.put(`/post/${id}`, contents),
  // 게시물 수정하기
  deletePost: (id) => instance.delete(`/post/${id}`),
  // 게시물 삭제하기
<<<<<<< HEAD

  getWishs: (email) => instance.get("/wish", email),
  // 위시리스트 불러오기
  addWish: (email, postId) => instance.post("/wish", { email, postId }),
  // 위시리스트 등록하기
  deleteWish: (wishId) => instance.delete(`/wish/${wishId}`),
  // 위시리스트 삭제하기
  signUp: (user) => instance.post("/signup", user),
  // 회원가입 요청
  login: (params) => instance.post("/login", params),
  // 로그인 요청
};
=======
  getWish: () => instance.get("/wish"),
  // 위시리스트 불러오기
  addWish: (email, id) => instance.post("/wish", email,id )
  // 위시리스트 등록하기
};
>>>>>>> 60ac55797b59900453ed884bbf15b5b5ed37b8b0
