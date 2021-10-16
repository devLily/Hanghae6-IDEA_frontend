import instance from '../lib/axios';

export const apis = {
  getPosts: () => instance.get('/post'),
  getPostById: (id) => instance.get(`/post/${id}`),
  // 게시물 불러오기
  createPost: (contents) => instance.post('/post', contents),
  // 게시물 작성하기
  editPost: (id, contents) => instance.put(`/post/${id}`, contents),
  // 게시물 수정하기
  deletePost: (id) => instance.delete(`/post/${id}`),
  // 게시물 삭제하기

  getWishs: () => instance.get('/wish'),
  // 위시리스트 불러오기
  addWish: (postId) => instance.post('/wish', { postId }),
  // 위시리스트 등록하기
  deleteWish: (wishId) => instance.delete(`/wish/${wishId}`),
  // 위시리스트 삭제하기
  signUp: (user) => instance.post('/signup', user),
  // 회원가입 요청
  login: (params) => instance.post('/login', params),
  // 코멘트 리스트 불러오기
  getComments: (postId) => instance.get(`/comment/${postId}`),
  // 코멘트 생성
  createComment: (postId, comment, nickname) =>
    instance.post(`/comment/${postId}`, { comment, nickname }),
};
