<template>
<div>
  <br>
<div class="test container">
  <h1>{{name}}</h1>
  <h3 v-bind:class="statut()">Status {{message}}</h3>
  <h5>Last time checked {{checkedAt.toLocaleString()}}</h5>
</div>
</div>
</template>

<script>
export default {
  name: 'Machine',
  props: ['name', 'status', 'checkedAt'],
  data () {
    return {
    red: 'red',
    green: 'green',
    }
  },
  methods: {
    statut: function () {
           if(this.status) {
             this.message = 'OK';
             return 'green';
           } else {
             this.message = 'KO';
             return 'red';
           }
  }

 }
}
</script>

<style>
.test {
  border: solid 1px #000000;
}
.red {
  color: red;
  font-weight: bold;
}
.green {
  color: green;
  font-weight: bold;
}
</style>
