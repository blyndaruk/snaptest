<template>
  <nav class="nav">
    <ul class="nav__list">
      <li class="nav__item">
        <nuxt-link to="/" class="nav__link">Home</nuxt-link>
      </li>
      <li class="nav__item">
        <nuxt-link to="/products" class="nav__link">Products</nuxt-link>
      </li>
      <li class="nav__item">
        <nuxt-link to="/company" class="nav__link">Company</nuxt-link>
      </li>
      <li class="nav__item">
        <nuxt-link to="/blog" class="nav__link">Blog</nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {}
</script>

<style lang="scss">
@import "Nav";
</style>
