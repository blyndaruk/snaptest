<template>
  <div class="home-page">
    <div class="container">
      <div class="home-page__inner blog">

        <div class="blog__aside">
          <Aside />
        </div>

        <div class="blog__content">
          <div class="blog__posts">
            <Posts />
          </div>
          <div class="blog__pagination">
            <Pagination />
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="scss">
.home-page {
  padding-top: 30px;
  padding-bottom: 100px;
}
</style>
