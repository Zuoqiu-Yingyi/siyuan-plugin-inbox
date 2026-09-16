/// <reference types="svelte" />
/// <reference types="vite/client" />
/// <reference types="vite-plugin-pwa/vue" />
/// <reference types="@workspace/types/global" />

declare module "*.vue" {
    import type { DefineComponent } from "vue";

    const component: DefineComponent<object, object, unknown>;
    export default component;
}
