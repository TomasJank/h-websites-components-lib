<template>
  <div class="input-container position-relative" :class="{ disabled }">
    <HLabel class="label" :for="id">{{ label }} </HLabel>
    <div
      v-click-outside="hideText"
      class="icon-holder position-absolute d-flex"
    >
      <HIcon v-if="help" icon="ic-question" />

      <HIcon v-else-if="error" icon="ic-exclamation" danger />
      <!-- This icon need refactoring -->
      <IconEye
        v-else-if="password"
        class="cursor-pointer"
        :crossed="!show"
        :disabled="disabled"
        @click.native="show = !show"
      />
      <HIcon
        v-else-if="dropdown"
        icon="ic-chevron"
        :primary="!disabled"
        :disabled="disabled"
      />
    </div>

    <component
      :is="getInputType"
      class="input"
      :disabled="disabled"
      :show.sync="show"
      :password="password"
      :class="getInputClass"
      :placeholder="placeholder"
      :options="items"
    />
    <HText v-if="error" tag="div" danger class="pl-16 position-absolute">{{
      error
    }}</HText>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import MultilineField from "@/components/atoms/HInput/MultilineField.vue";
import Dropdown from "@/components/atoms/HInput/Dropdown.vue";
import InputField from "@/components/atoms/HInput/InputField.vue";
import HIcon from "@/components/atoms/HIcon";
import HLabel from "@/components/atoms/HLabel";
import HText from "@/components/atoms/HText";

export default Vue.extend({
  name: "HInput",
  components: { MultilineField, Dropdown, InputField, HIcon, HLabel, HText },
  props: {
    id: String,
    placeholder: String,
    label: String,
    help: String,
    error: String,
    textarea: Boolean,
    dropdown: Boolean,
    disabled: Boolean,
    password: Boolean,
    items: Array,
  },
  data: () => ({
    show: false,
  }),
  computed: {
    getInputType() {
      return this.textarea
        ? "MultilineField"
        : this.dropdown
        ? "dropdown"
        : "InputField";
    },
    getInputClass() {
      return {
        input__error: this.error,
        input__disabled: this.disabled,
      };
    },
  },
  methods: {
    hideText() {
      this.show = false;
    },
  },
});
</script>
<style lang="scss">

.input-container {
  margin-top: 12px;
  margin-bottom: 60px;

  .label {
    background-color: white;
    z-index: 10;
    padding-left: 4px;
    padding-right: 4px;
    position: absolute;
    top: -13px;
    left: 13px;
    font-size: 14px;
  }

  .icon-holder {
    right: 0;
    top: 0;
    height: 48px;
    align-items: center;
    padding-right: 14px;
  }

  .input {
    padding: 12px 16px;
    height: 48px;
    border-radius: 4px;
    border: 1px solid get-color("gray-border");
    width: 100%;
    box-sizing: border-box;
    font-size: 16px;

    &__error {
      box-shadow: 0px 0px 4px 0px get-color("danger-dark");
    }

    &__error {
      border: 1px solid get-color("danger-dark");
    }

    &__disabled {
      border: 1px solid get-color("gray-border");
      box-shadow: none;
      color: get-color("gray-border");
      background-color: get-color("white") !important;
    }

    &:focus:not([disabled]):not(.input__disabled) {
      border: 1px solid get-color("primary");
      box-shadow: 0px 0px 4px 0px get-color("primary");
    }

    &.custom-select {
      .selected {
        height: 100%;
        align-items: center;
      }

      .items {
        top: 0;
        left: 0;
        right: 0;
        background: get-color("white");
        color: get-color("dark");
        border-radius: 4px;
        overflow: hidden;
        box-shadow: 0px 0px 8px 0px #00000033;

        .item {
          padding: 12px 16px;
          color: get-color("dark");

          &:hover {
            background: get-color("white");
          }
        }
      }
    }

    &.textarea {
      min-height: 120px;
      resize: none;
    }
  }

  &.disabled {
    .label,
    .input {
      color: get-color("gray-border");
    }
  }

  &:hover:not(.disabled) {
    .label {
      color: get-color("primary");
    }
    .input:not([disabled]) {
      border: 1px solid get-color("primary");
      box-shadow: 0px 0px 4px 0px get-color("primary");
    }
  }
}
</style>
