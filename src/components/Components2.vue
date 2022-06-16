<template>
    <div>
        <div>
            <!-- imported via global -->
            <h2>imported via global</h2>
            <names></names>
        </div>
        <div>
            <!-- imported via local -->
            <h2>imported via local</h2>
            <players></players>
        </div>
    </div>
</template>

<script>
/* Local Import */
import Components from '@/components/Components'

export default{
    data() {
        return {}
    },
    components:{
        'players': Components
    }
}
</script>

<style>

</style>