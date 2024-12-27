import axios from "axios";

// Create an axios instance
const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

// Fetch posts
export const fetchPosts = async (pageNumber) => {
  try {
    const res = await api.get(`/posts?_start=${pageNumber}&_limit=3`);
    return res.status === 200 ? res.data : [];
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
};

//  Fetch IndvPosts

export const fetchInvPost = async (id) => {
  try {
    const res = await api.get(`/posts/${id}`);
    return res.status === 200 ? res.data : [];
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
};

//  DELETE Post

export const deletePost = async (id) => {
  try {
    return api.delete(`/posts/${id}`);
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
};
export const updatePost = async (id) => {
  try {
    return await api.patch(`/posts/${id}`,{title:"I am updated"});
  } catch (error) {
    console.error('Error fetching posts:', error);
    return [];
  }
};
