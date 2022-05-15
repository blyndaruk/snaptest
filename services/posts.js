export default class PostsService {
  constructor ({ axios }) {
    this.axios = axios
  }

  async getPosts () {
    const result = await this.axios.get('https://jsonplaceholder.typicode.com/posts', {
      params: {
        _limit: 12, // set as param for real project :)
      },
    })
    return result?.data || []
  }
}
