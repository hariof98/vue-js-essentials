<template>
    <div>
        <div>
            <h2>{{ title }}</h2>
            <p>X: {{ x }}</p>
            <button v-on:click="add()">Add +</button>
        </div><br>
        <div>
            <p>A: {{ a }}</p>
            <p>A + Age: {{ addToA }}</p>
            <button v-on:click="a++">Add A +</button>
            <p>B: {{ b }}</p>
            <p>B + Age: {{ addToB }}</p>
            <button v-on:click="b++">Add B +</button>
        </div>
    </div>
</template>

<script>
export default{
    data () {
        return {
            title: 'ComputedProperties',
            x: 0,
            /* This will also work */
            // add: () => {
            //     this.x++
            // },

            age: 10,
            a: 0,
            b: 0,
        }
    },
    methods: {
        /* This wont work, because we have used arrow function and refered the properties outside of its scope */
        // add: () => {
        //     this.x++
        // },

        add: function() {
            this.x++
        },

        /* Computed Propertries Examples */
       /* addToA: function() {
            console.log('addToA in methods will run even if button is not clicked')
            return this.a + this.age
        },
        addToB: function() {
            console.log('addToB in methods will run even if button is not clicked')
            return this.b + this.age
        }*/
    },
  
    computed: {
        /* Computed Propertries Examples */
        addToA: function() {
            console.log('addToA in computed property will run only if button is not clicked/ any changes or operations is made')
            return this.a + this.age
        },
        addToB: function() {
            console.log('addToB in computed property will run only if button is not clicked/ any changes or operations is made')
            return this.b + this.age
        }
    }
}
</script>
