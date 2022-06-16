<template>
  <div>
      <div>
            <!-- data for ChildProp.vue file -->
            <child-prop v-bind:workDetails="workDetails"></child-prop>
            <child-prop v-bind:userData="userData"></child-prop>
            <child-prop v-bind:eventBus="eventBus"></child-prop>

            <hr />
             <!-- data for PrimandRefer.vue file -->
            <new-prop v-bind:workDetails="workDetails"></new-prop>
            <new-prop v-bind:userData="userData"></new-prop>
            <new-prop v-bind:eventBus="eventBus"></new-prop>
      </div>
  </div>
</template>

<script>
import ChildProp from '@/components/Props/ChildProp'
import PrimandRefer from '@/components/Props/PrimandRefer'

export default {
    components: {
        'child-prop': ChildProp,
        'new-prop': PrimandRefer
    },

    data() {
        return {
            // Reference Type
            userData:
            [
                {name: 'Hari',   age: 23, job: 'Developer'},
                {name: 'Jack',   age: 43, job: 'Developer'},
                {name: 'Jon',    age: 33, job: 'Developer'},
                {name: 'Jamie',  age: 43, job: 'Developer'},
                {name: 'Tywin',  age: 73, job: 'Developer'},
                {name: 'Ned',    age: 63, job: 'Developer'},
                {name: 'Robert', age: 63, job: 'Developer'},
                {name: 'Peter',  age: 33, job: 'Developer'},
                {name: 'Yuva',   age: 23, job: 'Developer'},
                {name: 'Sansa',  age: 23, job: 'Developer'},
                {name: 'Arya',   age: 13, job: 'Developer'},
                {name: 'Cercei', age: 43, job: 'Developer'},
            ],

            // Primitive Type
            workDetails: 'Front End Engineer',

            eventBus: 'I am an Event Bus'
        }
    },
}
</script>

<style scoped>
   
</style>