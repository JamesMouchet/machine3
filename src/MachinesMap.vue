<template>
<div>
  <h1>Carte des machines</h1>
  <br>
  <gmap-map :center="{lat:10, lng:10}" :zoom="6" style="width: 60%; height: 800px; margin: auto">
    <gmap-marker :key="m.id" v-for="m in machines" :position="{lat: Number(m.latitude), lng: Number(m.longitude)}"></gmap-marker>
  </gmap-map>

</div>
</template>

<script>
  import axios from 'axios';
export default {
  props: ['machines'],
  name: 'MachinesMap',
  data () {
    return {
    }
  }
}
</script>
