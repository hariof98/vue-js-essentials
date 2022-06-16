<template>
    <div id="app">
        <h2>{{ title }}</h2>
        <a v-bind:href="webLink">Vue 2 Doc</a><br><br>

        <!-- Short hand binding property -->
        <a :href="website">What is Vue?</a><br><br>

        <input v-bind:type="type" v-bind:value="name" />

        <p>
            {{ web }} <!-- this will just return the data from instance as a string -->
        </p> 
        <p v-html="web"></p>

        <h2>{{ title2 }}</h2>
        <input v-bind:type="type" v-model="enterData"/>
        {{ enterData }}
        <button v-on:click="dataEntry">Submit</button>
    </div>
</template>


<script>
export default{
    data () {
        return {
            title: 'Data Binding',
            webLink: 'https://v2.vuejs.org/v2/guide/',
            website : 'https://v2.vuejs.org/v2/guide/#What-is-Vue-js',
            name: 'Hari',
            type: 'text',
            web: '<a href="https://vuejs.org/">Vue 3</a>',

            title2: 'Two way Data Binding',
            enterData: [],
            dataEntry: () => {
                console.log(this.enterData)
            }
        }
    },
}
</script>
