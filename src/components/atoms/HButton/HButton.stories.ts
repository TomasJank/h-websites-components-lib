// Button.stories.js

import { HButton as Button } from "@/components";

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/vue/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: "Button",
  component: Button,
};

// 👇 We create a “template” of how args map to rendering
// const Template = (args, { argTypes }) => {
//   console.log("button", Button);
//   console.log("argTypes", args, argTypes);
//   return {
//     props: Object.keys(argTypes),
//     components: { Button },
//   };
// };

const Template = (args) => ({
  components: { Button },
  setup() {
    return { args };
  },
  template: '<Button v-bind="args">labas</Button>',
});

//👇 Each story then reuses that template
export const Primary = Template.bind({});

Primary.args = {
  primary: true,
  label: "Button",
};
