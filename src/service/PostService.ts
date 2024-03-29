import axios from "axios";

export const PostService = {
  getPosts() {
    return axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.data);
  },
};
