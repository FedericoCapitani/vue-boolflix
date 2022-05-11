<template>
    <header>
      <img src="https://image.tmdb.org/t/p/w342/wwemzKWzjKYJFfCeiB57q3r4Bcm.png" alt="">
      <div class="input_box">
        <input type="text" v-model="searchText">
        <button v-on:click="sendCall">Invia</button>
      </div>
    </header>
</template>

<script>
export default {
    nome: 'Header',

}
</script>
