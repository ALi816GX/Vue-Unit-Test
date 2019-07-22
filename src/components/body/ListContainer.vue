<template>

    <div>
        <ol>
            <li>
                <CheckBoxBar></CheckBoxBar>
            </li>
        </ol>
    </div>


</template>


<script>

    import CheckBoxBar from "./listcontaniner/CheckBoxBar.vue";

    export default {
        name:"ListContainer",
        components: {
            CheckBoxBar
        }
    };


</script>