<template>
  <aside class="aside">
    <div class="aside__nav">
      <div v-for="(item, index) in nav" :key="index" class="aside__nav-item" :class="{ 'is-active': index === 0 }">
        <div class="aside__nav-title">
          {{ item.title }}
        </div>
        <div class="aside__nav-content">
          Some Content
        </div>
      </div>
    </div>
  </aside>
</template>

<script>
export default {
  data () {
    return {
      nav: [
        {
          title: 'Item One'
        },
        {
          title: 'Item Two'
        },
        {
          title: 'Item Three'
        },
        {
          title: 'Item Four'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
@import "Aside";
</style>
