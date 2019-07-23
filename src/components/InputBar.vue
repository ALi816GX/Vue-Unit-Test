<template>

    <div>
        <input type="text" @keyup.enter="handleClick()" v-model="taskMessage" class="inputText"/>
        <input type="button" @click="handleClick()" value="Add" class="button" />
    </div>


</template>


<script>

    export default {
        name:"InputBar",
        data() {
            return{
                taskMessage:"",
                list:[],
            }
        },
        methods:{
            handleClick(){

            }
        }
    };

</script>


<style>

    .inputText{
        width: 150px;
        margin: 10px;
        color: blue;
    }

    .button{

        background: red;


    }


</style>