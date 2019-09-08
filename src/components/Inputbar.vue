<template>

    <div>
        <input type="text" @keyup.enter="handleClick" v-model="itemValue" class="inputText"/>
        <input type="button" @click="handleClick" value="Add" class="button"/>
    </div>


</template>


<script>
    import {mapGetters, mapMutations} from 'vuex'

    export default {
        name: "InputBar",
        data() {
            return {
                itemValue: "",
            }
        },
        computed: {
            ...mapGetters([
                'listLength'
            ])
        },
        methods: {
            ...mapMutations([
                'addTaskToList'
            ]),
            handleClick() {
                if (this.itemValue !== "") {
                    let index = this.listLength;
                    const object = {
                        key: index,
                        value: this.itemValue,
                        isChecked: false,
                        isEditable: false
                    };
                    this.addTaskToList(object);

                }
            }
        }
    };

</script>


<style>

    .inputText {
        width: 150px;
        margin: 10px;
        color: blue;
    }

    .button {

        background: red;


    }


</style>