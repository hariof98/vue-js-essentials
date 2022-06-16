<template>
  <div>
      <div>
        <h2>{{ title }}</h2>
      </div>
      <div>
          <input type="text" placeholder="Movie Refs in Vue Js" ref="movie">
          <button v-on:click="refMovie()">Submit</button>
          <p>Your favourite movie is: {{ movie }}</p>
      </div>
       <div>
          <input type="text" placeholder="Food Refs in Vue Js" ref="food">
          <button v-on:click="refFood()">Submit</button>
          <p>Your favourite food is: {{ food }}</p>
      </div>
      <div>
          <button v-on:click="refMovie(); refFood()">Submit Both</button>
      </div>
        <div>
            <input type="text" placeholder="v-model" v-model="team" />
            <!-- {{ team }} -->
            <button v-on:click="withoutRefBtn">Submit</button>
            <p>Your favourite team is: {{ team }}</p>
             {{ withoutRefBtn() }}
      </div>
      
  </div>
</template>

<script>
export default {
    data () {
       return {
           title: 'Refs in Vue Js',
           movie: '',
           food: '',
           team: ''
       }
    },

    methods: {
        refMovie: function() {
            console.log(this.$refs.movie.value)
            this.movie = this.$refs.movie.value
        },
        refFood: function() {
            console.log(this.$refs.food.value)
            this.food = this.$refs.food.value
        },
        withoutRefBtn: function() {
            if(this.team !=0 ){
                console.log(this.team)
            }
        }
    },
}
</script>

<style>

</style>