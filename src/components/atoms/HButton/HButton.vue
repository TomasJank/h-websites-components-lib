<template>
  <component
    :is="getButtonType"
    :id="id"
    :to="to"
    :href="href"
    :target="target"
    :class="getButtonClass"
    @click.native="buttonClick"
    @mousedown.native="buttonMouseDown"
    @mouseover.native="buttonMouseOver"
  >
    <div v-if="$slots.icon" class="mr-4">
      <slot name="icon" />
    </div>
    <slot />
    <IconChevron v-if="dropdown" :up="isOpen" class="ml-4" />
  </component>
</template>

<script lang="ts">
import Vue from "vue";
import HButtonSimple from "@/components/partials/button-templates/HButtonSimple";
import HButtonRouterLink from "@/components/partials/button-templates/HButtonRouterLink";
import HButtonLink from "@/components/partials/button-templates/HButtonLink";
import { HButtonProps } from "@/types/props/component-props";

export default Vue.extend({
  components: { HButtonSimple, HButtonRouterLink, HButtonLink },
  props: {
    to: [Object, String],
    href: String,
    target: String,
    id: String,
    primary: Boolean,
    success: Boolean,
    danger: Boolean,
    dark: Boolean,
    white: Boolean,
    bordered: Boolean,
    transparent: Boolean,
    lg: Boolean,
    md: Boolean,
    sm: Boolean,
    inline: Boolean,
    inlineDanger: Boolean,
    inlineDark: Boolean,
    inlineWhite: Boolean,
    dropdown: Boolean,
    isOpen: Boolean,
    link: Boolean,
  },

  computed: {
    getButtonType() {
      return this.to
        ? "h-button-router-link"
        : this.href
        ? "h-button-link"
        : "h-button-simple";
    },
    getButtonClass() {
      return {
        "hb hb--primary": this.primary && !this.$slots.icon,
        "hb hb--success": this.success && !this.$slots.icon,
        "hb hb--danger": this.danger && !this.$slots.icon,
        "hb hb--dark": this.dark && !this.$slots.icon,
        "hb hb--bordered": this.bordered,
        "hb hb--transparent": this.transparent,
        "hb--lg": this.lg,
        "hb--md": this.md,
        "hb--sm": this.sm,
        "hb-inline": this.inline,
        "hb-inline hb-inline--white": this.inlineWhite,
        "hb-inline hb-inline--danger": this.inlineDanger,
        "hb-inline hb-inline--dark": this.inlineDark,
        "hb-link": this.link,
        "hb hb-bordered--dark": this.dark && this.bordered,
        "hb hb-bordered--white": this.white && this.bordered,
        "hb-icon": this.$slots.icon,
        "hb-icon--success": this.success && this.$slots.icon,
        "hb-icon--danger": this.danger && this.$slots.icon,
        "hb-icon--dark": this.dark && this.$slots.icon,
        "hb-icon--white": this.white && this.$slots.icon,
      };
    },
  },
  methods: {
    buttonClick() {
      if (!this.disabled) this.$emit("click");
    },
    buttonMouseDown() {
      if (!this.disabled) this.$emit("mousedown");
    },
    buttonMouseOver() {
      if (!this.disabled) this.$emit("mouseover");
    },
  },
});
</script>

<style lang="scss" scoped>
$_button-colors: "success" get-color("success") get-color("success-dark"),
  "danger" get-color("danger") get-color("danger-dark"),
  "dark" get-color("dark") get-color("primary"),
  "white" get-color("white") get-color("danger"), "transparent" transparent;
/* $_buttonWidths: map-get($var-button, width); */

@mixin generate-button-colors() {
  @each $base, $baseHex, $activeHex in $_button-colors {
    @content ($base, $baseHex, $activeHex);
  }
}

.button-default-props {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 16px;
  font-weight: normal;
  line-height: 1;
  box-sizing: border-box;
  padding: 12px 16px;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  transition: 0.3s ease-in-out;
}

.hb {
  color: get-color("white");
  width: 100%;
  min-height: 48px;
  background-color: get-color("primary");
  @extend .button-default-props;
  &:hover,
  &:active,
  &:focus {
    background-color: get-color("primary-dark");
    color: get-color("white");
  }
  &:disabled {
    cursor: not-allowed;
    color: get-color("white");
    background-color: get-color("gray");
  }
  &:not(.hb--bordered):not(.hb--transparent):not(.hb-inline):not(.hb-inline--danger) {
    box-shadow: 0px 1px 8px rgba(0, 0, 0, 0.16);
  }
  &--bordered {
    color: get-color("primary");
    background: transparent;
    border: 2px solid get-color("primary");
    &:hover,
    &:active,
    &:focus {
      color: get-color("primary");
      border-color: get-color("primary");
      /* background-color: color.adjust(get-color(primary), $alpha: -0.85); */
    }
    &:disabled {
      cursor: not-allowed;
      color: get-color("gray");
      border-color: get-color("gray");
      background: get-color("white");
    }
  }
  &--transparent {
    color: get-color(primary);
    background: transparent;
    border: 2px solid transparent;
    &:hover,
    &:active,
    &:focus {
      color: get-color("primary");
      /* background-color: color.adjust(get-color(primary), $alpha: -0.85); */
    }
    &:disabled {
      cursor: not-allowed;
      color: get-color("gray");
      border-color: get-color("gray");
      background: get-color("white");
    }
  }
}

.hb-inline {
  @extend .button-default-props;
  color: get-color(primary);
  font-weight: 700;
  background: transparent;
  padding: 0;
  &:hover,
  &:active,
  &:focus {
    color: get-color("primary-dark");
    background: transparent;
    outline: none;
    box-shadow: none;
  }
  &--white {
    color: get-color("white");
    &:hover,
    &:active,
    &:focus {
      color: get-color("danger");
    }
  }
  &--danger {
    color: get-color("danger");
    &:hover,
    &:active,
    &:focus {
      color: get-color("dangerDark");
    }
  }
  &--dark {
    color: get-color("dark");
    &:hover,
    &:active,
    &:focus {
      color: get-color("primary");
    }
  }
}
.hb-link {
  font-size: 17px;
  line-height: 140%;
  text-decoration: underline;
  text-underline-offset: 1px;
  color: get-color("meteorite-dark");
  transition: all ease-in-out 0.3s;
  &:hover,
  &:focus,
  &:active {
    color: get-color("primary");
  }
}
.hb-icon {
  @extend .button-default-props;
  font-weight: 700;
  background: transparent;
  padding: 0;
}

@include generate-button-colors() using ($base, $baseHex, $activeHex) {
  .hb--#{$base}:not(.hb--bordered):not(.hb--transparent) {
    background-color: $baseHex;
    &:active,
    &:hover,
    &:focus {
      background-color: $activeHex;
    }
  }
}
@include generate-button-colors() using ($base, $baseHex, $activeHex) {
  .hb-bordered--#{$base} {
    color: $baseHex;
    border-color: $baseHex;
    &:active,
    &:hover,
    &:focus {
      color: $activeHex;
      border-color: $activeHex;
    }
  }
}
@include generate-button-colors() using ($base, $baseHex, $activeHex) {
  .hb-icon--#{$base} {
    color: $baseHex;
    &:active,
    &:hover,
    &:focus {
      color: $activeHex;
    }
  }
}
</style>
