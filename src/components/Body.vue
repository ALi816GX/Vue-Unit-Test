<template>
  <div>
    <input-field></input-field>
    <list-container></list-container>
  </div>
</template>

<script>
import ListContainer from "@/components/ListContainer";
import InputField from "@/components/InputField";

export default {
  name: "Body",
  components: {
    InputField,
    ListContainer
  }
};
</script>
