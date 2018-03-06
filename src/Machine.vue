<template>
<div>
  <br>
<div class="test container">
  <h1>{{machines.name}}</h1>
  <h3 v-bind:class="statut()">Status {{message}}</h3>
  <h5>Last time checked {{machines.checkedAt.toLocaleString()}}</h5>
</div>
</div>
</template>

<script>
export default {
  name: 'Machine',
  data () {
    return {
    red: 'red',
    green: 'green',
     machines: {
        name: 'What else ?',
        status: false,
        checkedAt: new Date(),
      }
    }
  },
  methods: {
    statut: function () {
           if(this.machines.status) {
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
  border: solid 1px black;
}
.red {
  color: red;
}
.green {
  color: green;
}
</style>