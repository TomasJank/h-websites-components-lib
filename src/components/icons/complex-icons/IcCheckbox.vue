<template>
  <svg
    width="32"
    height="32"
    viewBox="0 0 32 32"
    xmlns="http://www.w3.org/2000/svg"
    @mouseover="hover = true"
    @mouseleave="hover = false"
  >
    <circle
      v-if="hover"
      cx="16"
      cy="16"
      r="16"
      fill="#673DE6"
      fill-opacity="0.1"
    />
    <template v-if="checked && !partlyChecked">
      <rect x="7" y="7" width="18" height="18" rx="2" fill="#5025D1" />
      <mask
        id="mask0"
        mask-type="alpha"
        maskUnits="userSpaceOnUse"
        x="8"
        y="4"
        width="16"
        height="24"
      >
        <rect x="8" y="4" width="16" height="24" fill="#C4C4C4" />
      </mask>
      <path
        d="M22.0001 12.7581C22.0031 12.9526 21.9244 13.1395 21.7831 13.2731L16.1781 18.7581L15.1251 19.7881C14.9861 19.927 14.7966 20.0036 14.6001 20.0001C14.4029 20.0041 14.2126 19.9276 14.0731 19.7881L13.0201 18.7581L10.2171 16.0151C10.0758 15.8815 9.99705 15.6946 10.0001 15.5001C10.0001 15.2981 10.0721 15.1261 10.2171 14.9851L11.2701 13.9551C11.4092 13.8156 11.5991 13.7387 11.7961 13.7421C12.0031 13.7421 12.1781 13.8131 12.3231 13.9551L14.5991 16.1891L19.6771 11.2121C19.8166 11.0727 20.0069 10.9962 20.2041 11.0001C20.4101 11.0001 20.5861 11.0701 20.7301 11.2121L21.7831 12.2421C21.9247 12.3761 22.0034 12.5633 22.0001 12.7581Z"
        fill="white"
      />
    </template>
    <template v-else-if="!checked && partlyChecked">
      <rect x="7" y="7" width="18" height="18" rx="3" fill="white" />
      <path
        d="M23 7H9C7.9 7 7 7.9 7 9V23C7 24.1 7.9 25 9 25H23C24.1 25 25 24.1 25 23V9C25 7.9 24.1 7 23 7ZM22 16.75C22 17.16 21.66 17.5 21.25 17.5H10.75C10.34 17.5 10 17.16 10 16.75V15.25C10 14.84 10.34 14.5 10.75 14.5H21.25C21.66 14.5 22 14.84 22 15.25V16.75Z"
        fill="#673DE6"
      />
    </template>
    <template v-else>
      <rect x="7" y="7" width="18" height="18" rx="3" fill="white" />
      <path
        d="M7 9.84211C7 8.27245 8.27245 7 9.84211 7H22.1579C23.7275 7 25 8.27245 25 9.84211V22.1579C25 23.7275 23.7275 25 22.1579 25H9.84211C8.27245 25 7 23.7275 7 22.1579V9.84211ZM9.84211 8.89474C9.31889 8.89474 8.89474 9.31889 8.89474 9.84211V22.1579C8.89474 22.6811 9.31889 23.1053 9.84211 23.1053H22.1579C22.6811 23.1053 23.1053 22.6811 23.1053 22.1579V9.84211C23.1053 9.31889 22.6811 8.89474 22.1579 8.89474H9.84211Z"
        fill="#673DE6"
      />
    </template>
  </svg>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    checked: Boolean,
    partlyChecked: Boolean,
  },
  data() {
    return {
      hover: false,
    };
  },
});
</script>
