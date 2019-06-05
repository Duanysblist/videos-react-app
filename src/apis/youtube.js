import axios from 'axios';

const KEY = 'AIzaSyBD3ozvaZBolyH6GbNSTJBgsRAV6YipG6U';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});
