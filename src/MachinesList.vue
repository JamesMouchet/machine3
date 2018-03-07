<template>
<div>
  <h1>Liste de machine</h1> 
  <machine v-for="machine in machines" v-bind:name="machine.name" v-bind:status="machine.status" v-bind:checkedAt="machine.checkedAt" v-bind:key="machine.id" ></machine>
</div>
</template>

<script>
export default {
  name: 'MachinesList',
  data () {
    return {
         machines: [{
        id: 1,
        name: 'What else ?',
        status: true,
        checkedAt: new Date(),
    }, {
        id: 2,
        name: 'Broken',
        status: false,
        checkedAt: new Date(),
    }]
    }
  }
}
</script>