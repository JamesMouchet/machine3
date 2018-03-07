<template>
<div>
  <h1>Carte des machines</h1>
  <br>
  <gmap-map
  :center="{lat:45.185696, lng:5.728732}"
  :zoom="6"
  style="width: 60%; height: 800px; margin: auto"
>
</gmap-map>
</div>
</template>

<script>
export default {
  name: 'MachinesMap',
  data () {
    return {
    }
  }
}
</script>