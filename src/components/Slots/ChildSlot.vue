<template>
  <div>
    <Slots></Slots>
    <Slots>
        <h2>Hello</h2>
    </Slots>
  </div>
</template>

<script>
import Slots from '@/components/Slots/Slots'

export default {   
  components:{
      Slots
  }
}
</script>

<style>

</style>