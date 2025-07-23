globalThis.process ??= {}; globalThis.process.env ??= {};
import { j as decodeKey } from './chunks/astro/server_whYjGy7n.mjs';
import './chunks/astro-designed-error-pages_CTVCDrBJ.mjs';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/noop-middleware_BQ2_DZDW.mjs';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///home/pranavks/pranavks-blog/","cacheDir":"file:///home/pranavks/pranavks-blog/node_modules/.astro/","outDir":"file:///home/pranavks/pranavks-blog/dist/","srcDir":"file:///home/pranavks/pranavks-blog/src/","publicDir":"file:///home/pranavks/pranavks-blog/public/","buildClientDir":"file:///home/pranavks/pranavks-blog/dist/","buildServerDir":"file:///home/pranavks/pranavks-blog/dist/_worker.js/","adapterName":"@astrojs/cloudflare","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"about/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"about%20copy/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/about copy","isIndex":false,"type":"page","pattern":"^\\/about copy\\/?$","segments":[[{"content":"about copy","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about copy.astro","pathname":"/about copy","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"blog/artistic-masculinity/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/blog/artistic-masculinity","isIndex":false,"type":"page","pattern":"^\\/blog\\/artistic-masculinity\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"artistic-masculinity","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/artistic-masculinity.mdx","pathname":"/blog/artistic-masculinity","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"blog/first-blog/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/blog/first-blog","isIndex":false,"type":"page","pattern":"^\\/blog\\/first-blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"first-blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/first-blog.mdx","pathname":"/blog/first-blog","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"blogs/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/blogs","isIndex":false,"type":"page","pattern":"^\\/blogs\\/?$","segments":[[{"content":"blogs","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blogs.astro","pathname":"/blogs","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://example.com","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/home/pranavks/pranavks-blog/src/components/ThemeToggle.astro",{"propagation":"in-tree","containsHead":false}],["/home/pranavks/pranavks-blog/src/layouts/BaseLayout.astro",{"propagation":"in-tree","containsHead":false}],["/home/pranavks/pranavks-blog/src/layouts/BlogLayout.astro",{"propagation":"in-tree","containsHead":false}],["/home/pranavks/pranavks-blog/src/pages/blog/artistic-masculinity.mdx",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog/artistic-masculinity@_@mdx",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["/home/pranavks/pranavks-blog/src/pages/blogs.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blogs@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/pranavks/pranavks-blog/src/pages/blog/first-blog.mdx",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog/first-blog@_@mdx",{"propagation":"in-tree","containsHead":false}],["/home/pranavks/pranavks-blog/src/pages/about copy.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/about copy@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/pranavks/pranavks-blog/src/pages/about.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/about@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/pranavks/pranavks-blog/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000astro-internal:middleware":"_astro-internal_middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/about copy@_@astro":"pages/about copy.astro.mjs","\u0000@astro-page:src/pages/blog/artistic-masculinity@_@mdx":"pages/blog/artistic-masculinity.astro.mjs","\u0000@astro-page:src/pages/blog/first-blog@_@mdx":"pages/blog/first-blog.astro.mjs","\u0000@astro-page:src/pages/blogs@_@astro":"pages/blogs.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"index.js","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_F-1YfM_7.mjs","/home/pranavks/pranavks-blog/node_modules/unstorage/drivers/cloudflare-kv-binding.mjs":"chunks/cloudflare-kv-binding_DMly_2Gl.mjs","/home/pranavks/pranavks-blog/src/pages/about.astro?astro&type=script&index=0&lang.ts":"_astro/about.astro_astro_type_script_index_0_lang.e2XDaX72.js","/home/pranavks/pranavks-blog/src/pages/about.astro?astro&type=script&index=1&lang.ts":"_astro/about.astro_astro_type_script_index_1_lang.UR0nMqlI.js","/home/pranavks/pranavks-blog/src/pages/about copy.astro?astro&type=script&index=0&lang.ts":"_astro/about copy.astro_astro_type_script_index_0_lang.e2XDaX72.js","/home/pranavks/pranavks-blog/src/pages/about copy.astro?astro&type=script&index=1&lang.ts":"_astro/about copy.astro_astro_type_script_index_1_lang.DW3StKP_.js","/home/pranavks/pranavks-blog/src/pages/index.astro?astro&type=script&index=0&lang.ts":"_astro/index.astro_astro_type_script_index_0_lang.DW3StKP_.js","/home/pranavks/pranavks-blog/src/components/ThemeToggle.astro?astro&type=script&index=0&lang.ts":"_astro/ThemeToggle.astro_astro_type_script_index_0_lang.CzzdzEsG.js","/home/pranavks/pranavks-blog/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts":"_astro/ClientRouter.astro_astro_type_script_index_0_lang.D98dxaWf.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/home/pranavks/pranavks-blog/src/pages/about.astro?astro&type=script&index=0&lang.ts","const o=document.querySelectorAll(\".zone\"),r=new IntersectionObserver(e=>{e.forEach(s=>{s.isIntersecting&&s.target.classList.add(\"visible\")})},{threshold:.3});o.forEach(e=>r.observe(e));"],["/home/pranavks/pranavks-blog/src/pages/about.astro?astro&type=script&index=1&lang.ts","const c=document.querySelector(\".typewriter_effect\");function n(t,e,o=0){if(o===0&&(t.textContent=\"\"),t.textContent=e.substring(0,o+1)+\"|\",o===e.length-1){t.textContent=e+\"\";const r=document.createElement(\"span\");r.classList.add(\"blinking-cursor\"),r.textContent=\".\",t.appendChild(r);return}setTimeout(()=>n(t,e,o+1),50)}const d=document.querySelectorAll(\"[data-typing-text]\");d.forEach(t=>{const e=t.getAttribute(\"data-typing-text\");n(t,e)});n(c,text);document.addEventListener(\"DOMContentLoaded\",n);window.addEventListener(\"astro:after-swap\",n);"],["/home/pranavks/pranavks-blog/src/pages/about copy.astro?astro&type=script&index=0&lang.ts","const o=document.querySelectorAll(\".zone\"),r=new IntersectionObserver(e=>{e.forEach(s=>{s.isIntersecting&&s.target.classList.add(\"visible\")})},{threshold:.3});o.forEach(e=>r.observe(e));"],["/home/pranavks/pranavks-blog/src/pages/about copy.astro?astro&type=script&index=1&lang.ts","const r=document.querySelector(\".typewriter_effect\");function c(t,n,e=0){if(e===0&&(t.textContent=\"\"),t.textContent=n.substring(0,e+1)+\"|\",e===n.length-1){t.textContent=n+\"\";const o=document.createElement(\"span\");o.classList.add(\"blinking-cursor\"),o.textContent=\".\",t.appendChild(o);return}setTimeout(()=>c(t,n,e+1),50)}const s=document.querySelectorAll(\"[data-typing-text]\");s.forEach(t=>{const n=t.getAttribute(\"data-typing-text\");c(t,n)});c(r,text);"],["/home/pranavks/pranavks-blog/src/pages/index.astro?astro&type=script&index=0&lang.ts","const r=document.querySelector(\".typewriter_effect\");function c(t,n,e=0){if(e===0&&(t.textContent=\"\"),t.textContent=n.substring(0,e+1)+\"|\",e===n.length-1){t.textContent=n+\"\";const o=document.createElement(\"span\");o.classList.add(\"blinking-cursor\"),o.textContent=\".\",t.appendChild(o);return}setTimeout(()=>c(t,n,e+1),50)}const s=document.querySelectorAll(\"[data-typing-text]\");s.forEach(t=>{const n=t.getAttribute(\"data-typing-text\");c(t,n)});c(r,text);"],["/home/pranavks/pranavks-blog/src/components/ThemeToggle.astro?astro&type=script&index=0&lang.ts","const e=document.getElementById(\"theme-light\");e.checked=localStorage.getItem(\"theme\")===\"light\";e.addEventListener(\"change\",()=>{e.checked?localStorage.setItem(\"theme\",\"light\"):localStorage.removeItem(\"theme\")});"]],"assets":["/_astro/artistic-masculinity.odb8SaN0.css","/favicon.svg","/_astro/ClientRouter.astro_astro_type_script_index_0_lang.D98dxaWf.js","/_worker.js/_@astrojs-ssr-adapter.mjs","/_worker.js/_astro-internal_middleware.mjs","/_worker.js/_noop-actions.mjs","/_worker.js/index.js","/_worker.js/renderers.mjs","/fonts/atkinson-bold.woff","/fonts/atkinson-regular.woff","/_worker.js/_astro/artistic-masculinity.odb8SaN0.css","/_worker.js/chunks/BaseLayout_Cn2Kt6Uj.mjs","/_worker.js/chunks/BlogLayout_Da8hT7Bv.mjs","/_worker.js/chunks/Inquery_DGRnkDw-.mjs","/_worker.js/chunks/_@astrojs-ssr-adapter_BVFCk-_e.mjs","/_worker.js/chunks/artistic-masculinity_DJKksg97.mjs","/_worker.js/chunks/astro-designed-error-pages_CTVCDrBJ.mjs","/_worker.js/chunks/astro_Dcp35TBV.mjs","/_worker.js/chunks/cloudflare-kv-binding_DMly_2Gl.mjs","/_worker.js/chunks/first-blog_C00Lzf3M.mjs","/_worker.js/chunks/index_C96VIzBV.mjs","/_worker.js/chunks/noop-middleware_BQ2_DZDW.mjs","/_worker.js/pages/about copy.astro.mjs","/_worker.js/pages/about.astro.mjs","/_worker.js/pages/blogs.astro.mjs","/_worker.js/pages/index.astro.mjs","/assets/icons/blog.svg","/assets/icons/bluesky.svg","/assets/icons/github.svg","/assets/icons/moon.svg","/assets/icons/sun.svg","/assets/icons/youtube.svg","/_worker.js/chunks/astro/server_whYjGy7n.mjs","/_worker.js/pages/blog/artistic-masculinity.astro.mjs","/_worker.js/pages/blog/first-blog.astro.mjs","/about/index.html","/about%20copy/index.html","/blog/artistic-masculinity/index.html","/blog/first-blog/index.html","/blogs/index.html","/index.html"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"c76ZLsYZzmsxCocKDYsR9VVBGmQUnkR9PU5qDfKpq/8=","sessionConfig":{"driver":"cloudflare-kv-binding","options":{"binding":"SESSION"}}});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = () => import('./chunks/cloudflare-kv-binding_DMly_2Gl.mjs');

export { manifest };
