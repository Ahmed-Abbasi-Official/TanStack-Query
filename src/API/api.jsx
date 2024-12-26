import axios from "axios";

// Create an axios instance
const api = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

// Fetch posts
export const fetchPosts = async () => {
  try {
    const res = await api.get('/posts');
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
