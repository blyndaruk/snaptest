<template>
  <div class="post">
    <div v-if="post.title" class="post__title">
      <Title variant="primary" clamp="1">
        {{ post.title }}
      </Title>
    </div>
    <div class="post__main">
      <div class="post__image">
        <img src="https://via.placeholder.com/350x300" :alt="post.title">
      </div>
      <div class="post__content">
        <div v-if="post.body" class="post__text">
          {{ post.body }}
        </div>
        <div class="post__link">
          <Button variant="primary" url="https://google.com">Read more</Button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    // pass post or create separate prop for each post field
    post: {
      type: Object,
      default: () => ({}),
    },
  },
  mounted () {
    console.log(this.post)
  }
}
</script>

<style lang="scss">
@import "Post";
</style>
