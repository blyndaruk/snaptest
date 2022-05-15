<template>
  <div v-if="posts && posts.length" class="posts">
    <Post v-for="post in posts" :key="post.id" :post="post" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      posts: [],
    }
  },
  async mounted () {
    // just simple request onload without pagination or lazy
    this.posts = await this.$postsService.getPosts()
    console.log(this.posts)
  },
}
</script>

<style lang="scss">
@import "Posts";
</style>
