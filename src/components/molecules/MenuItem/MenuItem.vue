<template>
  <HText tag="span" meteorite-dark class="menu-item d-flex mb-24">
    <IconMenuItem :route="route" class="icon mt-auto mb-auto" />
    <div class="text d-flex flex-column">
      <HText tag="p" class="pl-8 title">{{ title }}</HText>
      <HText tag="p" class="pl-8 description">{{ description }}</HText>
    </div>
  </HText>
</template>

<script lang='ts'>
  import Vue from 'vue'
export default Vue.extend({
  props: {
    route: {
      type: String,
    },
    title: {
      type: String,
    },
    description: {
      type: String,
    },
  },
})
</script>
<style lang="scss" scoped>
.menu-item {
  .icon {

  }
  .text {
    align-items: flex-start;
    /* .title {
      @include mix-font-props(18px, 24px);
    } */

  
  }
}
</style>
