<template>
  <div class="title" :class="classNames">
    <slot />
  </div>
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
    clamp: {
      type: Number,
      default: 0,
    },
  },
  computed: {
    classNames () {
      return {
        [this.classes]: this.classes,
        [`title--${this.variant}`]: this.variant,
        [`is-size-${this.size}`]: this.size,
        [`is-clamp-${this.clamp}`]: this.clamp,
      }
    },
  },
}
</script>

<style lang="scss">
.title {
  color: #000000;
  line-height: 1.4;

  &--primary {
    font-size: 44px;
    font-weight: bold;
  }

  @for $i from 1 through 5 {
    &.is-clamp-#{$i} {
      @include line-clamp($i);
    }
  }
}

</style>
