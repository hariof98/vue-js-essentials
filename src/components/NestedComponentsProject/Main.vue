<template>
  <div>
      <app-header></app-header>
      <app-body></app-body>
      <app-footer></app-footer>
  </div>
</template>

<script>
import Header from '@/components/NestedComponentsProject/Header'
import Footer from '@/components/NestedComponentsProject/Footer'
import Body from '@/components/NestedComponentsProject/Body'

export default {
    data() {
        return {}
    },

    components:{
        'app-header': Header,
        'app-footer': Footer,
        'app-body'  : Body
    }
}
</script>

<style scoped>
   
</style>