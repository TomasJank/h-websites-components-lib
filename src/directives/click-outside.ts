// import { Directive } from "@vue/runtime-core";

type AugmentedHTMLElement = HTMLElement & {
  clickOutside: (e: MouseEvent) => void;
};

export const ClickOutside: any = {
  beforeMount(el: AugmentedHTMLElement, binding) {
    el.clickOutside = (e: MouseEvent) => {
      if (
        el === e.target ||
        document.elementsFromPoint(e.clientX, e.clientY).includes(el)
      )
        return;
      binding.value();
    };

    setTimeout(() => {
      document.addEventListener("click", el.clickOutside);
    });
  },
  unmounted(el: AugmentedHTMLElement) {
    document.removeEventListener("click", el.clickOutside);
  }
};

export default ClickOutside;