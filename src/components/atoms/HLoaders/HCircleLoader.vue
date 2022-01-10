<!-- <template>
  <div
    v-if="loading"
    class="circle-loader"
    :class="{ ...classes, ...colorClasses }"
  >
    <svg class="circular">
      <circle
        class="full-circle"
        cx="25"
        cy="25"
        stroke-width="3"
        fill="none"
        r="20"
      />
      <circle
        class="path"
        cx="25"
        cy="25"
        r="20"
        fill="none"
        stroke-width="3"
        stroke-miterlimit="10"
      />
    </svg>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

interface Props {
  loading?: boolean;
  sm?: boolean;
  xs?: boolean;
  centered?: boolean;
  absolute?: boolean;
  success?: boolean;
  info?: boolean;
  warning?: boolean;
  danger?: boolean;
  brand?: boolean;
  gray?: boolean;
  secondary?: boolean;
  primary?: boolean;
  dark?: boolean;
  outline?: boolean;
  text?: boolean;
}
const props = withDefaults(defineProps<Props>(), { loading: true });

export default Vue.extend({
  name: "HCircleLoader",
  props,

  computed: {
    hasColor(){ return {
      props.success ||
      props.info ||
      props.warning ||
      props.danger ||
      props.gray ||
      props.brand ||
      props.secondary ||
      props.primary ||
      props.dark,
    }},
    classes() {
      return {
        "circle-loader--sm": props.sm,
        "circle-loader--xs": props.xs,
        "circle-loader--centered": props.centered,
        "circle-loader--absolute": props.absolute,
      };
    },

    colorClasses() {
      return {
        "circle-loader--light": !props.text && !props.outline && this.hasColor,
        "circle-loader--primary":
          props.primary ||
          !this.hasColor ||
          (props.text && this.hasColor) ||
          (props.outline && this.hasColor),
        "circle-loader--danger":
          (!props.text && props.danger) || (props.outline && props.danger),
        "circle-loader--dark":
          (props.text && props.dark) || (props.outline && props.dark),
        "circle-loader--success":
          (props.text && props.success) || (props.outline && props.success),
      };
    },
  },
});
</script>

<style lang="scss">
.circle-loader {
  .full-circle {
    stroke-dasharray: 200, 200;

    stroke: themed("primary-light");
  }

  .circular {
    animation: rotate 2s linear infinite;
    height: 50px;
    width: 50px;
  }

  .path {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
    animation: dash 1.5s ease-in-out infinite, color 6s ease-in-out infinite;

    stroke: themed("primary");
  }

  @keyframes rotate {
    100% {
      transform: rotate(360deg);
    }
  }
  @keyframes dash {
    0% {
      stroke-dasharray: 1, 200;
      stroke-dashoffset: 0;
    }
    50% {
      stroke-dasharray: 89, 200;
      stroke-dashoffset: -35;
    }
    100% {
      stroke-dasharray: 89, 200;
      stroke-dashoffset: -124;
    }
  }

  @each $color, $value in $theme-colors {
    &--#{$color} {
      .path {
        stroke: themed($color);
      }
    }
  }

  &--absolute {
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -25px !important;
    margin-top: -25px !important;
  }

  &--absolute-right {
    left: auto;
    right: 0;
  }

  &--sm {
    transform: scale(0.7);
  }

  &--xs {
    transform: scale(0.5);
  }

  &--centered {
    margin: auto;
    display: block;
    text-align: center;
  }
}
</style> -->
