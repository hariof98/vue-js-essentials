<template>
  <div>
      <button v-on:click="themeColorPick()">Light/Dark</button>
      <!-- <button v-on:click="themeColor='dark'">Light/Dark</button> -->
      <div v-container="themeColor">
          <h2>{{ title }}</h2>
          <div v-rainbow>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem quam accusantium tempore velit reprehenderit accusamus. Labore laborum nesciunt saepe excepturi, in id. Dolor!</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil aut corporis obcaecati temporibus, eaque dolorum vel minima adipisci quis debitis, iure quaerat saepe, eos ab veniam. Labore adipisci fugit sit.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora perferendis amet inventore nisi aliquid ducimus est corrupti? Unde modi maxime ratione accusamus rerum exercitationem aliquid.</p>
          </div>
          <div v-rainbow>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem quam accusantium tempore velit reprehenderit accusamus. Labore laborum nesciunt saepe excepturi, in id. Dolor!</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil aut corporis obcaecati temporibus, eaque dolorum vel minima adipisci quis debitis, iure quaerat saepe, eos ab veniam. Labore adipisci fugit sit.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora perferendis amet inventore nisi aliquid ducimus est corrupti? Unde modi maxime ratione accusamus rerum exercitationem aliquid.</p>
          </div>
          <div v-rainbow>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatem quam accusantium tempore velit reprehenderit accusamus. Labore laborum nesciunt saepe excepturi, in id. Dolor!</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil aut corporis obcaecati temporibus, eaque dolorum vel minima adipisci quis debitis, iure quaerat saepe, eos ab veniam. Labore adipisci fugit sit.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora perferendis amet inventore nisi aliquid ducimus est corrupti? Unde modi maxime ratione accusamus rerum exercitationem aliquid.</p>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return{
            title: 'Custome Directive',
            themeColor: 'light'
        }
    },
    methods: {
        themeColorPick: function(){
            console.log(this.themeColor);
            return this.themeColor= 'dark';
        }
    }
}
</script>

<style>

</style>