<template>
  <div>
    <input
      type="text"
      @keyup.enter="addItem"
      v-model="itemValue"
      class="inputText"
    />
    <input type="button" @click="addItem" value="Add" class="button" />
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import _ from "lodash";

export default {
  name: "InputField",
  data() {
    return {
      itemValue: "",
      keyUp: ""
    };
  },
  computed: {
    ...mapGetters(["listLength"])
  },
  methods: {
    ...mapActions(["saveTaskToList"]),
    addItem() {
      // write for simple test
      this.keyUp = "test";
      if (!_.isEmpty(_.trim(this.itemValue))) {
        const task = {
          key: this.listLength,
          value: this.itemValue,
          isChecked: false,
          isEditable: false
        };
        this.saveTaskToList(task);
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
