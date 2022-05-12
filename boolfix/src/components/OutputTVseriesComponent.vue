<template>
    
    <div class="card_el">
          <div class="info" :style="{backgroundImage: 'url(https://image.tmdb.org/t/p/w300' + show.poster_path + ')'}">
            <div class="infobox">
              <div>Titolo: {{show.name}} </div>
              <div>Titolo originale: {{show.original_name}} </div>
              <div>
                Lingua: {{show.original_language}} <lang-flag :iso="show.original_language" />
              </div>
                <div v-if="show.vote_average == 0">
                  Rating: <font-awesome-icon :icon="['far', 'star']" style="color: yellow"/> <font-awesome-icon :icon="['far', 'star']" style="color: yellow"/> <font-awesome-icon :icon="['far', 'star']" style="color: yellow"/> <font-awesome-icon :icon="['far', 'star']" style="color: yellow"/> <font-awesome-icon :icon="['far', 'star']" style="color: yellow"/>
                </div>
                <div v-if="show.vote_average == 1" class="rating">
                  Rating: <font-awesome-icon :icon="['fas', 'star']" style="color: yellow"/> <font-awesome-icon :icon="['far', 'star']" style="color: yellow"/> <font-awesome-icon :icon="['far', 'star']" style="color: yellow"/> <font-awesome-icon :icon="['far', 'star']" style="color: yellow"/> <font-awesome-icon :icon="['far', 'star']" style="color: yellow"/>
                </div>
                <div v-if="show.vote_average == 2" class="rating">
                  Rating: <font-awesome-icon :icon="['fas', 'star']" style="color: yellow"/> <font-awesome-icon :icon="['fas', 'star']" style="color: yellow"/> <font-awesome-icon :icon="['far', 'star']" style="color: yellow"/> <font-awesome-icon :icon="['far', 'star']" style="color: yellow"/> <font-awesome-icon :icon="['far', 'star']" style="color: yellow"/>
                </div>
                <div v-if="show.vote_average == 3" class="rating">
                  Rating: <font-awesome-icon :icon="['fas', 'star']" style="color: yellow"/> <font-awesome-icon :icon="['fas', 'star']" style="color: yellow"/> <font-awesome-icon :icon="['fas', 'star']" style="color: yellow"/> <font-awesome-icon :icon="['far', 'star']" style="color: yellow"/> <font-awesome-icon :icon="['far', 'star']" style="color: yellow"/>
                </div>
                <div v-if="show.vote_average == 4" class="rating">
                  Rating: <font-awesome-icon :icon="['fas', 'star']" style="color: yellow"/> <font-awesome-icon :icon="['fas', 'star']" style="color: yellow"/> <font-awesome-icon :icon="['fas', 'star']" style="color: yellow"/> <font-awesome-icon :icon="['fas', 'star']" style="color: yellow"/> <font-awesome-icon :icon="['far', 'star']" style="color: yellow"/>
                </div>
                <div v-if="show.vote_average == 5" class="rating">
                  Rating: <font-awesome-icon :icon="['fas', 'star']" style="color: yellow"/> <font-awesome-icon :icon="['fas', 'star']" style="color: yellow"/> <font-awesome-icon :icon="['fas', 'star']" style="color: yellow"/> <font-awesome-icon :icon="['fas', 'star']" style="color: yellow"/> <font-awesome-icon :icon="['fas', 'star']" style="color: yellow"/>
                </div>  
              <div>Overview: {{show.overview}}</div>
            </div>
          </div>
        </div>

</template>

<script>
export default {
    nome: 'OutputTVseriesComponent',
    props: {
        show: Object
    }
}
</script>
