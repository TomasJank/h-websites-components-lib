<script>
import Vue from "vue";
// import clickOutside from "@/directives";

import { HButton, HIcon, HInput,HText } from "@/components/atoms";

// Vue.directive("click-outside", clickOutside);
//Used for components development

export default Vue.extend({
  name: "ServeDev",
  components: {
    HButton,
    HIcon,
    HText,
    HInput,
  },
});
</script>

<template>
  <div id="app">
    labas cia pasteink
    <HIcon
      icon="ic-question"
      class="cursor-pointer"
      success
      viewBox="-2 3 20 20"
    />
    <HText>test</HText>

    <HButton primary>la2bas</HButton>
    <HInput help="help" />
  </div>
</template>
