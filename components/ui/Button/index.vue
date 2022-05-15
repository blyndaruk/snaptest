<template>
  <nuxt-link v-if="url" :to="url" class="button" :class="classNames">
    <slot />
  </nuxt-link>
  <button v-else :type="type" class="button" :class="classNames">
    <slot />
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'button',
    },
    variant: {
      type: String,
      default: '',
    },
    size: {
      type: String,
      default: '',
    },
    classes: {
      type: String,
      default: '',
    },
    url: {
      type: String,
      default: '',
    },
  },
  computed: {
    classNames () {
      return {
        [this.classes]: this.classes,
        [`button--${this.variant}`]: this.variant,
        [`is-size-${this.size}`]: this.size,
      }
    },
  },
}
</script>

<style lang="scss">
.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 14px 20px;
  text-align: center;
  font-size: 14px;
  line-height: 1.4;
  font-weight: 800;
  letter-spacing: 0.1em;
  box-shadow: -5px -5px 15px rgba(255, 255, 255, 0.7), 5px 5px 10px #D1D9E6;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
  text-decoration: none;

  &--primary {
    background-color: $primary;
    color: #ffffff;

    &:hover {
      box-shadow: -5px -5px 15px rgb(255, 255, 255, 0.7), 5px 5px 10px #a1a9b7;
      background: $primary;
    }
  }

  &--fluid {
    width: 100%;
  }
}

</style>
