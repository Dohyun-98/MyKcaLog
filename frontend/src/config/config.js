const BASE_URL = "http://localhost:8000";

export const API = {
  //   MAIN: `${BASE_URL}/main`,
  //   MYPAGE: `${BASE_URL}/users/private/user`,
  //   USER_PAGE: `${BASE_URL}/users/public/user`,
  //   SIGNUP: `${BASE_URL}/users/signup`,
  //   WRITERDATA: `${BASE_URL}/users/?user_tag_id=`,
  //   TAGDATA: `${BASE_URL}/branch_tags/userTagList`,
  //   DITAILLIST: `${BASE_URL}/postings`,
  //   KEYWORDS: `${BASE_URL}/keywords/list`,
  LOGIN: `${BASE_URL}/auth/login`,
  GETMYPROFILE: `${BASE_URL}/users`,
  SIGNUP: `${BASE_URL}/users`,
  SENDMAIL: `${BASE_URL}/auth/mail`,
  SENDPWMAIL: `${BASE_URL}/auth/pwmail`,
  VRYMAIL: `${BASE_URL}/auth/authentication`,
  GETMAINCATEGORY: `${BASE_URL}/main-category`,
  GETSUBCATEGORY: `${BASE_URL}/sub-category`,
  GETFOODS: `${BASE_URL}/foods`,
  CREATEFOODLOG: `${BASE_URL}/food-log`,
  GETSELECTEDFOOD: `${BASE_URL}/food-log`,
  GETKCAL: `${BASE_URL}/today-kcal`,
  GETGRAPHDATA: `${BASE_URL}/today-kcal`,
  GETCIRCLEDATA: `${BASE_URL}/food-log`,
  CREATEBOARD: `${BASE_URL}/boards`,
  GETBOARDLIST: `${BASE_URL}/boards`,
  GETBOARDDETAIL: `${BASE_URL}/boards`,
  ISMYBOARD: `${BASE_URL}/boards/mine`,
  UPDATEBOARD: `${BASE_URL}/boards`,
  DELETEBOARD: `${BASE_URL}/boards`,
  UPDATENICKNAME: `${BASE_URL}/users`,
  CHANGEPASSWORD: `${BASE_URL}/users/password`,
  DELETEUSER: `${BASE_URL}/users`,
  COMMENT: `${BASE_URL}/comments`,
  GETAVG: `${BASE_URL}/today-kcal/all`,
  //   RELATED: `${BASE_URL}/postings`,
};
