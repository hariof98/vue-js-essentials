<template>
  <div>
      <!-- Filters is used to change the way we output data to the browser -->
       <div>
          <h2>{{ title | first-filter }}</h2>
          {{ data | shorten-filter}}
      </div>
    <br>
      <div v-filter-and-directive="'test-value'">
            {{ alfredsEngland }}
            <br>
            {{ protogonist }}
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return{
            title: 'vue filters',
            data: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita repudiandae excepturi aliquid voluptate cumque suscipit tempora reiciendis illo commodi voluptatum alias minus quo eveniet debitis ea consectetur eum dolorum quisquam quasi quae corporis, laudantium magni quidem. Deleniti vero excepturi magni neque eveniet tempora non, quasi deserunt aspernatur qui, doloremque voluptatibus?',
            alfredsEngland: 'The Last Kingdom',
            protogonist: 'Uhtred of Bebbanburg'
        }
    }
}
</script>

<style>

</style>