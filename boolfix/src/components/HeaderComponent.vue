<template>
    <header>
      <img src="https://image.tmdb.org/t/p/w342/wwemzKWzjKYJFfCeiB57q3r4Bcm.png" alt="">
      <div class="nav_links">
          <a href="#">Home</a>
          <a href="#">Serie TV</a>
          <a href="#">Film</a>
          <a href="#">Originali</a>
          <a href="#">Aggiunti di recente</a>
          <a href="#">La mia lista</a>
      </div>
      <div class="input_box">
        <input type="text" v-model="searchText">
        <button v-on:click="search">Invia</button>
      </div>
    </header>
</template>

<script>
import state from "@/state.js";
export default {
    nome: 'Header',
    data(){
        return {
            searchText: ''
        }
    },
    methods: {
        search(){
            console.log('searching');
            console.log(this.searchText);
            state.searchText = this.searchText
            console.log(state.searchText);
            this.$root.$emit('MainComponent')
        },
    }
}
</script>
