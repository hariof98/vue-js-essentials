<template>
    <div>
        <!-- click events -->
        <div>
            <h2>{{ title }}</h2>
            My age is: {{ age }}
            <button v-on:click="add(1)">Increase</button>
            <button v-on:dblclick="add(10)">Increase by 10</button>

            <!-- we can use v-on:click="" or shorthand property as @click="" -->
            <button @click="sub(1)">Decrease</button>
            <button v-on:dblclick="sub(10)">Decrease by 10</button>
        </div>

        <!-- Mouse events -->
        <div id="mouse" @mousemove="mouseEvent">
            {{ x }} {{ y }}
        </div>
    </div>
</template>

<script>
export default{
    data () {
        return {
            title: 'Events in VUE',
            age: 10,
            x: 0,
            y: 0,
        }
    },
    methods:{
        add: function(value) {
            this.age += value
        },
        sub: function(value) {
            this.age -= value
        },
        mouseEvent: function(event) {
            console.log(event);
            this.x = event.offsetX;
            this.y = event.offsetX;
        }
    }
}
</script>

<style scoped>
    #mouse{
        width: 600px;
        height: 500px;
        padding: 200px, 20px;
        text-align: center;
        border: 1px solid black;
    }
</style>