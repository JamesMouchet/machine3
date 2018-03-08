<template>
<div>
  <h1>Carte des machines</h1>
  <br>
  <gmap-map :center="{lat:10, lng:10}" :zoom="6" style="width: 60%; height: 800px; margin: auto">
    <gmap-marker :key="m.id" v-for="m in machines" :position="{lat: m.latitude, lng: m.longitude}"></gmap-marker>
  </gmap-map>

</div>
</template>

<script>
export default {
  name: 'MachinesMap',
  data () {
    return {
      machines: [{
  id: 1,
  latitude: 10,
  longitude: 10,
},
{
  id: 2,
  latitude: 11,
  longitude: 10,
}]
    }
  }
}
</script>
