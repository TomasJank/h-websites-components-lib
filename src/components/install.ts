import * as components from "@/components";
import { VueConstructor } from "vue";
const install = (Vue: VueConstructor, options = { prefix: String }) => {
  for (let key in components) {
    let _key = options.prefix ? options.prefix + key : key;
    Vue.component(_key, components[key]);
  }
};

// auto install
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export { install };
