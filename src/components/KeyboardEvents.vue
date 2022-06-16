<template>
    <div>
        <h2>{{ title }}</h2>
        <p>Name:</p>
        <input v-bind:type="type" placeholder="Enter your name"  v-on:keyup.enter="myName" />
        <p>Age:</p>
        <input v-bind:type="type1" placeholder="Enter your age" v-on:keyup.enter="myAge" />
    </div>
</template>

<script>
export default{
    data () {
        return {
            title: 'keyboard Events',
            type: 'text',
            type1: 'number',
        }
    },
    methods:{
        myName: function() {
            console.log('You are typing your name')
        },
        myAge: function() {
            console.log('You are typing your age')
        },
    }
}

</script>
