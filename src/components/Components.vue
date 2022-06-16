<template>
    <div>
        <p v-for="(manUtd, index) in unitedSquad" :key="index">
            {{ manUtd }}
        </p>
    </div>
</template>

<script>
/* Here we are exporting everything by default */
export default{
    data() {
        return {
            unitedSquad: ['Ronaldo', 'DeGea', 'Sancho', 'Varane', 'Rashford', 'Dalot']
        }
    }
}
</script>

<style>

</style>