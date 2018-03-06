import MachinesList from './MachinesList.vue';
import MachinesMap from './MachinesMap.vue';
import Machine from './Machine';

export default [
    { path: '/machine', component: Machine },
    { path: '/machines', component: MachinesList},
    { path: '/map', component: MachinesMap}
]