<template>
  <div id="app">
    <img src="http://vuejs.org/images/logo.png">
    <h1>{{ msg }}</h1>
    <button class="button"><router-link :to="{ path: 'machines' }">Consulter la liste des machines</router-link></button> <button class="button"><router-link :to="{ path: 'map' }">Afficher la map</router-link></button>
    <router-view v-bind:machines = "machines" v-bind:loading="loading" v-bind:error="error"></router-view>
  </div>
</template>

<script>
  import axios from 'axios';
export default {
  created() {
    this.getmachine();
  },
  name: 'app',
  data() {
    return {
      machines: [],
      loading: false,
      error: null,
      msg: 'Welcome to Your Vue.js App',
    }
  },
  methods: {
    getmachine: function () {
      this.loading = true;
      axios.get("https://machine-api-campus.herokuapp.com/api/machines")
        .then((response) => {
          this.machines = response.data;
        }, (error) => {
          this.loading = false;
        })
    }
  }
}

</script>

<style scoped>
.button {
background:    #41b883;
background:    -webkit-linear-gradient(#41b883, #41b883);
background:    linear-gradient(#41b883, #41b883);
border-radius: 5px;
padding:       8px 20px;
color:         #ffffff;
display:       inline-block;
font:          normal 600 24px/1 "Terminus", sans-serif;
text-align:    center;
text-shadow:   1px 1px #ffffff;
}

#app {
  font-family: 'Terminus', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

img {
  width: 200px;
  height: 200px;
}

h1, h2 {
  color: #35495E;
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #FFF;
}
</style>
