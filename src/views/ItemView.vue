<template>
    <div>
        <h1>Item</h1>  
        <p>title : {{ itemInfo.title}}</p> 
        <p>user : {{ itemInfo.user}}</p>
        <p>content : {{ itemInfo.content}}</p>

    </div>
</template>

<script>
export default {
    computed: {
        itemInfo(){
            return this.$store.state.item;
        }
    },
    created(){
        const itemID = this.$route.params.id
        this.$store.dispatch('FETCH_ITEM', itemID)
    },
}
</script>

<style>
    
</style>