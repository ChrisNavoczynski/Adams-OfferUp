import axios from 'axios';

// directly taken from Jason's sample repo
export default axios.create({
  baseURL: 'http://localhost:8000',
  headers: {
    'Content-type': 'application/json',
  },
});
