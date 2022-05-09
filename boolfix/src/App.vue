<template>
  <div id="app">
    <header>
      <input type="text" v-model="searchText">
      <button v-on:click="sendCall">Invia</button>
    </header>
    <main>
      <div class="output">

        <div class="card" v-for="film in films" :key="film.id">
          <div>Titolo: {{film.title}} </div>
          <div>Titolo originale: {{film.original_title}} </div>
          <div>Lingua: {{film.original_language}} </div>
          <div>Rating: {{film.vote_average}} </div>
        </div>

        <h1>SEPARATORE</h1>

        <div class="card" v-for="show in TV_series" :key="show.id">
          <div>Titolo: {{show.name}} </div>
          <div>Titolo originale: {{show.original_name}} </div>
          <div>Lingua: {{show.original_language}} </div>
          <div>Rating: {{show.vote_average}} </div>
        </div>

      </div>
    </main>
  </div>
</template>

<script>
import axios from "axios"
export default {
  name: 'App',
  components: {
    
  },
  data() {
    return{
      searchText: '',
      films: null,
      TV_series: null
    }
  },
  methods: {
    callApi(){
      axios.get("https://api.themoviedb.org/3/search/movie?api_key=629aec4e8c473eea3b4989c3e1430c08&language=en-US&page=1&include_adult=false&query=" + this.searchText).then((response) => {
        console.log(response);
        this.films = response.data.results;
        console.log(this.films);
      })
      .catch((error) => {
        console.error();
        error;
        this.error = `Sorry There is a problem! ${error}`;        
      });
      axios.get("https://api.themoviedb.org/3/search/tv?api_key=629aec4e8c473eea3b4989c3e1430c08&language=en-US&page=1&include_adult=false&query=" + this.searchText).then((response) => {
        console.log(response);
        this.TV_series = response.data.results;
        console.log(this.TV_series);
      }).catch((error) => {
        console.error();
        error;
        this.error = `Sorry There is a problem! ${error}`;
      })
    },
  sendCall(){
    // la chiamata avviene solo se l'utente scrive qualcosa nella searchbar
    if(this.searchText !== '')
    this.callApi()
  }
  },
}
</script>

<style lang="scss">
@import '~@/assets/scss/style.scss';
</style>
