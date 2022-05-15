<template>
  <ul class="pagination">
    <li v-if="active > 3">
      <nuxt-link to="/" @click.stop.prevent="update(0)">{{ 1 }}</nuxt-link>
    </li>

    <li v-if="active > 3" class="is-disabled">
      <div>...</div>
    </li>

    <li v-for="(num, index) in numbers" :key="index" :class="{'is-active' : num === active - 1}">
      <nuxt-link to="/" @click.stop.prevent="update(num)">{{ num + 1 }}</nuxt-link>
    </li>

    <li v-if="active < length - 4" class="is-disabled">
      <div>...</div>
    </li>

    <li v-if="active < length - 4">
      <nuxt-link to="/" @click.stop.prevent="update(length - 1)">{{ length }}</nuxt-link>
    </li>
  </ul>
</template>

<script>
export default {
  data () {
    return {
      n: 0,
      active: 4,
      itemsLengthMock: 30,
      count: 2,
    }
  },
  computed: {
    length () {
      return Math.ceil(this.itemsLengthMock / this.count)
    },
    min () {
      if (this.active < 4) {
        return 0
      } else if (this.active > this.length - 4) {
        return this.length - 5
      } else {
        return this.active - 2
      }
    },
    max () {
      if (this.length < 6) {
        return this.length
      } else if (this.active < 4) {
        return 6
      } else if (this.active > this.length - 5) {
        return this.length
      } else {
        return this.active + 1
      }
    },
    numbers () {
      const temp = []
      for (let i = this.min; i < this.max; i++) {
        temp.push(i)
      }
      return temp
    },
  },
  methods: {
    update (n) {
      this.active = n
    },
  },
}
</script>

<style lang="scss">
@import "Pagination";
</style>
