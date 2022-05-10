<template>
  <div id="app">
    <header>
      <img src="https://image.tmdb.org/t/p/w342/wwemzKWzjKYJFfCeiB57q3r4Bcm.png" alt="">
      <div class="input_box">
        <input type="text" v-model="searchText">
        <button v-on:click="sendCall">Invia</button>
      </div>
    </header>
    <main>
      <div class="output">

        <div class="card_el" v-for="film in films" :key="film.id">
          <div class="info" :style="{backgroundImage: 'url(https://image.tmdb.org/t/p/w300' + film.poster_path + ')'}">
            <div class="infobox">
              <div>Titolo: {{film.title}} </div>
              <div>Titolo originale: {{film.original_title}} </div>
              <div>
                Lingua: <lang-flag :iso="film.original_language" />
              </div>
                <div v-if="film.vote_average == 1" class="rating">
                  Rating: <i class="fa-solid fa-star-sharp"></i> <i class="fa-regular fa-star-sharp"></i> <i class="fa-regular fa-star-sharp"></i> <i class="fa-regular fa-star-sharp"></i> <i class="fa-regular fa-star-sharp"></i>
               </div>
               <div v-if="film.vote_average == 2" class="rating">
                  Rating: <i class="fa-solid fa-star-sharp"></i> <i class="fa-solid fa-star-sharp"></i> <i class="fa-regular fa-star-sharp"></i> <i class="fa-regular fa-star-sharp"></i> <i class="fa-regular fa-star-sharp"></i>
               </div>
               <div v-if="film.vote_average == 3" class="rating">
                  Rating: <i class="fa-solid fa-star-sharp"></i> <i class="fa-solid fa-star-sharp"></i> <i class="fa-solid fa-star-sharp"></i> <i class="fa-regular fa-star-sharp"></i> <i class="fa-regular fa-star-sharp"></i>
               </div>
               <div v-if="film.vote_average == 4" class="rating">
                  Rating: <i class="fa-solid fa-star-sharp"></i> <i class="fa-solid fa-star-sharp"></i> <i class="fa-solid fa-star-sharp"></i> <i class="fa-solid fa-star-sharp"></i> <i class="fa-regular fa-star-sharp"></i>
               </div>
               <div v-if="film.vote_average == 5" class="rating">
                  Rating: <i class="fa-solid fa-star-sharp"></i> <i class="fa-solid fa-star-sharp"></i> <i class="fa-solid fa-star-sharp"></i> <i class="fa-solid fa-star-sharp"></i> <i class="fa-solid fa-star-sharp"></i>
               </div>
                <div>Overview: {{film.overview}}</div>
              </div>
              </div>
        </div>

        <div class="card_el" v-for="show in TV_series" :key="show.id">
          <div class="info" :style="{backgroundImage: 'url(https://image.tmdb.org/t/p/w300' + show.poster_path + ')'}">
            <div class="infobox">
              <div>Titolo: {{show.name}} </div>
              <div>Titolo originale: {{show.original_name}} </div>
              <div>
                Lingua: <lang-flag :iso="show.original_language" />
              </div>
                </div>
                <div v-if="show.vote_average == 1" class="rating">
                  Rating: <i class="fa-solid fa-star-sharp"></i> <i class="fa-regular fa-star-sharp"></i> <i class="fa-regular fa-star-sharp"></i> <i class="fa-regular fa-star-sharp"></i> <i class="fa-regular fa-star-sharp"></i>
                </div>
                <div v-if="show.vote_average == 2" class="rating">
                  Rating: <i class="fa-solid fa-star-sharp"></i> <i class="fa-solid fa-star-sharp"></i> <i class="fa-regular fa-star-sharp"></i> <i class="fa-regular fa-star-sharp"></i> <i class="fa-regular fa-star-sharp"></i>
                </div>
                <div v-if="show.vote_average == 3" class="rating">
                  Rating: <i class="fa-solid fa-star-sharp"></i> <i class="fa-solid fa-star-sharp"></i> <i class="fa-solid fa-star-sharp"></i> <i class="fa-regular fa-star-sharp"></i> <i class="fa-regular fa-star-sharp"></i>
                </div>
                <div v-if="show.vote_average == 4" class="rating">
                  Rating: <i class="fa-solid fa-star-sharp"></i> <i class="fa-solid fa-star-sharp"></i> <i class="fa-solid fa-star-sharp"></i> <i class="fa-solid fa-star-sharp"></i> <i class="fa-regular fa-star-sharp"></i>
                </div>
                <div v-if="show.vote_average == 5" class="rating">
                  Rating: <i class="fa-solid fa-star-sharp"></i> <i class="fa-solid fa-star-sharp"></i> <i class="fa-solid fa-star-sharp"></i> <i class="fa-solid fa-star-sharp"></i> <i class="fa-solid fa-star-sharp"></i>
                </div>
                <div>Overview: {{show.overview}}</div>
          </div>
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
      API_URL_movies: 'https://api.themoviedb.org/3/search/movie?api_key=629aec4e8c473eea3b4989c3e1430c08&language=en-US&page=1&include_adult=false&query=',
      API_URL_tv: 'https://api.themoviedb.org/3/search/tv?api_key=629aec4e8c473eea3b4989c3e1430c08&language=en-US&page=1&include_adult=false&query=',
      searchText: '',
      films: null,
      TV_series: null,
      logo_img: 'https://image.tmdb.org/t/p/w342/wwemzKWzjKYJFfCeiB57q3r4Bcm.png',
      thumb_path: 'https://image.tmdb.org/t/p/w342/'
    }
  },
  methods: {
    callApi(){
      // chiamare l'API e inserire i dati dei film in un array
      axios.get(this.API_URL_movies + this.searchText).then((response) => {
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
      axios.get(this.API_URL_tv + this.searchText).then((response) => {
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
    if(this.searchText !== '')
    this.callApi()
    },
  
  }
}
</script>

<style lang="scss">
@import '~@/assets/scss/style.scss';
</style>
