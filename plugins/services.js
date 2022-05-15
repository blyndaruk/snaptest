import PostsService from '~/services/posts'

export default function ({ $axios }, inject) {
  inject('postsService', new PostsService({ axios: $axios }))
}
