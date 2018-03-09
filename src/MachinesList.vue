<template>
<div>
  <h1>Liste des machines</h1>
  <machine v-for="machine in machines" v-bind:name="machine.name" v-bind:status="machine.status" v-bind:checkedAt="machine.checkedAt" v-bind:key="machine.id" ></machine>
</div>
</template>

<script>
  import axios from 'axios';
export default {
  props: ['machines', 'loading', 'error'],
  name: 'MachinesList',
  data () {
    return {
    }
  }
}
</script>
