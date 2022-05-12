import axios from 'axios'

const url = 'http://localhost:5000/card';

export const createPost = (newPost) => axios.post(url, newPost);
