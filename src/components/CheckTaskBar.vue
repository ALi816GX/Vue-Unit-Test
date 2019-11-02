<template>
  <div>
    <input type="checkbox" v-model="task.isChecked" @click="selected" />
    <span
      v-bind:contenteditable="task.isEditable"
      @dblclick="changeValue"
      @keydown.enter.prevent="changeValue"
      >{{ task.value }}</span
    >
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "CheckTaskBar",
  props: ["task"],
  methods: {
    ...mapActions(["saveTaskToList"]),
    selected() {
      this.task["isChecked"] = !this.task.isChecked;
      this.saveTaskToList(this.task);
    },
    changeValue(e) {
      this.task["isEditable"] = !this.task.isEditable;
      this.task["value"] = e.target.innerText;
      this.saveTaskToList(this.task);
    }
  }
};
</script>
