<template>
  <div id="app">
    <Header/>
    <MainComponent/>
  </div>
</template>

<script>
import MainComponent from "@/components/MainComponent.vue"
import Header from "@/components/HeaderComponent.vue"
export default {
  name: 'App',
  components: {
    Header,
    MainComponent
  },
}
</script>

<style lang="scss">
@import '~@/assets/scss/style.scss';
</style>
