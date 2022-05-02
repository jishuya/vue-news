<template>
    <div>
        User
    </div>
</template>

<script>

export default {
    created() {
        const userName = this.$route.params.id;
        this.$store.dispatch('FETCH_USER', userName)
    }
}
</script>

<style>
    
</style>