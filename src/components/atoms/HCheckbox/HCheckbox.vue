<template>
  <div>
    <input type="checkbox" class="d-none" :checked="checked" />
    <HLabel
      class="d-flex flex-row cursor-pointer align-items-center"
      @click.native="updateStatus()"
    >
      <!-- <IconCheckbox :checked="checked" :partly-checked="partlyChecked" /> -->
      {{ label }}
    </HLabel>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import HLabel from "@/components/atoms/HLabel/HLabel";
export default Vue.extend({
  name: "HCheckbox",
  components: { HLabel },
  props: {
    checked: Boolean,
    partlyChecked: Boolean,
    label: String,
  },
  methods: {
    updateStatus() {
      if (this.checked) {
        this.$emit("update:checked", false);
      } else if (this.partlyChecked) {
        this.$emit("update:checked", true);
        this.$emit("update:partlyChecked", false);
      } else {
        this.$emit("update:checked", true);
      }
    },
  },
});
</script>
