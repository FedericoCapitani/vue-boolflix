<template>
  <div id="app">
    <Header/>
    <Main/>
  </div>
</template>

<script>
import Main from "@/components/MainComponent.vue"
import Header from "@/components/HeaderComponent.vue"
export default {
  name: 'App',
  components: {
    Header,
    Main
  },
}
</script>

<style lang="scss">
@import '~@/assets/scss/style.scss';
</style>
