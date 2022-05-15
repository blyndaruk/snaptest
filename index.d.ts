declare module 'vue/types/vue' {
  interface Vue {
    $postsService(key: string): void;
  }
}
