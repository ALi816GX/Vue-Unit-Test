<template>

    <div class="checkbox-bar">
        <input type="checkbox"/>
        <span>a</span>
    </div>


</template>


<script>

    export default {
        name:"CheckBoxBar",
        data() {
            return{
                value:""
            }
        }
    };

</script>


<style>

    .checkbox-bar{
        vertical-align:middle;
    }

</style>