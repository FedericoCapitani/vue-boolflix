<template>

    <main>
        <h1 v-bind="films" v-show="films != null">ORIGINALI NETFLIX</h1>
      <div class="output">
        <OutputFilm :film="film" v-for="film in films" :key="film.id" v-show="film.poster_path != null"/>
        <OutputTVseries :show="show" v-for="show in TV_series" :key="show.id" v-show="show.poster_path != null"/>
        
      </div>
    </main>

</template>

<script>
import axios from "axios"
import OutputFilm from "@/components/OutputFilmComponent.vue"
import OutputTVseries from "@/components/OutputTVseriesComponent.vue"
import state from "@/state.js"
export default {
  name: 'MainComponent',
  components: {
    OutputFilm,
    OutputTVseries
  },
  data() {
    return{
      API_URL_movies: 'https://api.themoviedb.org/3/search/movie?api_key=629aec4e8c473eea3b4989c3e1430c08&language=en-US&page=1&include_adult=false&query=',
      API_URL_tv: 'https://api.themoviedb.org/3/search/tv?api_key=629aec4e8c473eea3b4989c3e1430c08&language=en-US&page=1&include_adult=false&query=',
      films: null,
      TV_series: null,
      logo_img: 'https://image.tmdb.org/t/p/w342/wwemzKWzjKYJFfCeiB57q3r4Bcm.png',
      thumb_path: 'https://image.tmdb.org/t/p/w342/'
    }
  },
  methods: {
    callApi(){
      // chiamare l'API e inserire i dati dei film in un array
      axios.get(this.API_URL_movies + state.searchText).then((response) => {
        console.log(response);
        this.films = response.data.results;
        // round rating al numero intero più vicino
        this.films.forEach(element => {
          element.vote_average = Math.round(element.vote_average / 2)
        });
        console.log(this.films);
      })
      .catch((error) => {
        console.error();
        error;
        this.error = `Sorry There is a problem! ${error}`;        
      });
      // chiamare l'APi e inserire in un array i dati delle serie TV
      axios.get(this.API_URL_tv + state.searchText).then((response) => {
        console.log(response);
        this.TV_series = response.data.results;
        // round rating al numero intero più vicino
        this.TV_series.forEach(element => {
          element.vote_average = Math.round(element.vote_average / 2)
        });
        console.log(this.TV_series);
      }).catch((error) => {
        console.error();
        error;
        this.error = `Sorry There is a problem! ${error}`;
      })
    },
    sendCall(){
    // la chiamata avviene solo se l'utente scrive qualcosa nella searchbar
    if(state.searchText !== '')
    this.callApi()
    },
  },
  mounted() {
      this.$root.$on('MainComponent', () =>{
          if(state.searchText !== '')
          this.sendCall()
      })
  }
}
</script>