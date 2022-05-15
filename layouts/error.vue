<template>
  <div v-if="error.statusCode === 404">
    <div class="fluid-error-wrapper">
      <div class="error-404-fluid" style="margin-top: 100px;">
        <div class="error-404-710">
          <div class="error-404-num">
            <h1>404</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: () => ({
        statusCode: false,
      }),
    },
  },
};
</script>
