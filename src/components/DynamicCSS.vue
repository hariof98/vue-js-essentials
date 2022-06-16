<template>
    <div>
        <!-- {{ toggleAvailability }} -->
        <h2>{{ title }}</h2>
        <div v-bind:class="{red: true, blue: false}"> <!-- here red and blue are the classes and it is defined as key-value pairs -->
            <!-- <span>Hello</span> -->
        </div>
        <div v-bind:class="toggleAvailability">  <!-- i.e,  <div v-bind:class="available"> -->
            <span>Hello VUE</span>
        </div><br>
        <button v-on:click="availableStatus(available)" v-bind:style="{cursor: cursorType}">Toggle Availability!</button>
        <!-- available = !available will switch between true and false on click -->
    </div>
</template>

<script>
export default{
    data () {
        return {
            title: 'Dynamic CSS',
            available: true,
            cursorType: 'pointer'
        }
    },
    methods:{
        availableStatus: function(status) {
            //console.log('methods')
            return this.available = !status
        },
    },
    computed:{
        toggleAvailability: function() {
            //console.log('computed')
            return {
                available: this.available
            }
        }
    }
}
</script>

<style scoped>
span{
    background-color: rgb(179, 6, 6);
    padding: 10px;
    color: black;
}

.available span{
    background: rgb(21, 139, 6);
    color: white;
}
</style>
