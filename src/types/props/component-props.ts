import { PropType } from "vue";

export const HButtonProps = {
  // to: [Object, String] as PropType<[Object, String]>,
  href: String as PropType<string>,
  target: String as PropType<string>,
  id: String as PropType<string>,
  primary: Boolean as PropType<boolean>,
  success: Boolean as PropType<boolean>,
  danger: Boolean as PropType<boolean>,
  dark: Boolean as PropType<boolean>,
  white: Boolean as PropType<boolean>,
  bordered: Boolean as PropType<boolean>,
  transparent: Boolean as PropType<boolean>,
  lg: Boolean as PropType<boolean>,
  md: Boolean as PropType<boolean>,
  sm: Boolean as PropType<boolean>,
  inline: Boolean as PropType<boolean>,
  inlineDanger: Boolean as PropType<boolean>,
  inlineDark: Boolean as PropType<boolean>,
  inlineWhite: Boolean as PropType<boolean>,
  dropdown: Boolean as PropType<boolean>,
  isOpen: Boolean as PropType<boolean>,
  link: Boolean as PropType<boolean>,
};
