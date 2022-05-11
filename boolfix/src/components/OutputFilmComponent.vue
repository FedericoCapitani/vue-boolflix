<template>
    
    <div class="card_el">
          <div class="info" :style="{backgroundImage: 'url(https://image.tmdb.org/t/p/w300' + film.poster_path + ')'}">
            <div class="infobox">
              <div>Titolo: {{film.title}} </div>
              <div>Titolo originale: {{film.original_title}} </div>
              <div>
                Lingua: {{film.original_language}} <lang-flag :iso="film.original_language" />
              </div>
              <div v-if="film.vote_average == 0">
                  Rating: 0
                </div>
                <div v-if="film.vote_average == 1" class="rating">
                  Rating: <font-awesome-icon icon="star" style="color: yellow"/>
                </div>
                <div v-if="film.vote_average == 2" class="rating">
                    Rating: <font-awesome-icon icon="star" style="color: yellow"/> <font-awesome-icon icon="star" style="color: yellow"/>
                </div>
                <div v-if="film.vote_average == 3" class="rating">
                    Rating: <font-awesome-icon icon="star" style="color: yellow"/> <font-awesome-icon icon="star" style="color: yellow"/> <font-awesome-icon icon="star" style="color: yellow"/>
                </div>
                <div v-if="film.vote_average == 4" class="rating">
                    Rating: <font-awesome-icon icon="star" style="color: yellow"/> <font-awesome-icon icon="star" style="color: yellow"/> <font-awesome-icon icon="star" style="color: yellow"/> <font-awesome-icon icon="star" style="color: yellow"/>
                </div>
                <div v-if="film.vote_average == 5" class="rating">
                    Rating: <font-awesome-icon icon="star" style="color: yellow"/> <font-awesome-icon icon="star" style="color: yellow"/> <font-awesome-icon icon="star" style="color: yellow"/> <font-awesome-icon icon="star" style="color: yellow"/> <font-awesome-icon icon="star" style="color: yellow"/>
                </div>
                <div>Overview: {{film.overview}}</div>
              </div>
              </div>
        </div>


</template>

<script>
export default {
    nome: 'OutputfilmsComponent',
    props: {
      film: Object
    }
}
</script>
