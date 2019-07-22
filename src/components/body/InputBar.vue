<template>

    <div>
        <input type="text" value="" class="inputText"/>
        <input type="button" value="Add" class="button" />
    </div>


</template>


<script>

    export default {
        name:"InputBar",
        data() {
            return{
                value:""
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