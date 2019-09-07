<template>

    <div>
        <InputBar></InputBar>
        <ListContainer></ListContainer>
    </div>


</template>


<script>

    import InputBar from "./Inputbar.vue";
    import ListContainer from "../components/ListContainer.vue";

    export default {
        name:"Body",
        components:{
            InputBar,
            ListContainer
        },
    };

</script>