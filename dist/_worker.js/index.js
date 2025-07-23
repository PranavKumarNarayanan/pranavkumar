globalThis.process ??= {}; globalThis.process.env ??= {};
import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_BVFCk-_e.mjs';
import { manifest } from './manifest_F-1YfM_7.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/about.astro.mjs');
const _page1 = () => import('./pages/about copy.astro.mjs');
const _page2 = () => import('./pages/blog/artistic-masculinity.astro.mjs');
const _page3 = () => import('./pages/blog/first-blog.astro.mjs');
const _page4 = () => import('./pages/blogs.astro.mjs');
const _page5 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["src/pages/about.astro", _page0],
    ["src/pages/about copy.astro", _page1],
    ["src/pages/blog/artistic-masculinity.mdx", _page2],
    ["src/pages/blog/first-blog.mdx", _page3],
    ["src/pages/blogs.astro", _page4],
    ["src/pages/index.astro", _page5]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_astro-internal_middleware.mjs')
});
const _args = undefined;
const _exports = createExports(_manifest);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
