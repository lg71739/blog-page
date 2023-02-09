import{_ as i,Z as a,$ as l,a4 as e}from"./framework-c23f4b14.js";const r={},h=e('<h2 id="何为路由" tabindex="-1"><a class="header-anchor" href="#何为路由" aria-hidden="true">#</a> 何为路由</h2><ul><li>一组路由即一组映射关系（key-value）</li><li>key 为路径，value 可能是 function 或 component</li></ul><h2 id="路由分类" tabindex="-1"><a class="header-anchor" href="#路由分类" aria-hidden="true">#</a> 路由分类</h2><h3 id="后端路由" tabindex="-1"><a class="header-anchor" href="#后端路由" aria-hidden="true">#</a> 后端路由</h3><p>理解：value 是 function，用于处理客户端提交的请求，</p><p>对应关系：指请求方式、请求地址与 <code>function</code> 处理函数之间的对应关系</p><p>工作过程：服务器接收到一个请求时，根据请求路径找到匹配的函数来处理请求，返回响应数据</p><h3 id="前端路由" tabindex="-1"><a class="header-anchor" href="#前端路由" aria-hidden="true">#</a> 前端路由</h3><p>理解：value 是 component，用于展示页面内容。</p><p>对应关系：地址和组件之间的对应关系</p><p>工作过程：当浏览器的路径改变时，对应的组件就会显示</p><blockquote><p>前端路由简易工作方式：</p><ol><li>用户点击了页面上的路由链接</li><li>URL 地址的 Hash 值发生变化</li><li>前端路由监听到 Hash 值的变化</li><li>前端路由渲染 Hash 地址对应的组件</li></ol></blockquote><h2 id="单页面应用程序-spa" tabindex="-1"><a class="header-anchor" href="#单页面应用程序-spa" aria-hidden="true">#</a> 单页面应用程序 SPA</h2><h3 id="理解" tabindex="-1"><a class="header-anchor" href="#理解" aria-hidden="true">#</a> 理解</h3><p>单页面应用程序（single page web application，SPA）将所有的功能局限于一个 web 页面中，仅在该 web 页面初始化时加载相应的资源（ HTML、JavaScript 和 CSS）。 一旦页面加载完成了，SPA 不会因为用户的操作而进行页面的重新加载或跳转。而是利用 JavaScript 动态地变换 HTML 的内容，从而实现页面与用户的交互。</p><ol><li>整个应用只有一个完整的页面</li><li>点击页面中的导航链接不会刷新页面，只会做页面的局部更新</li><li>数据需要通过ajax请求获取</li></ol><h3 id="优缺点" tabindex="-1"><a class="header-anchor" href="#优缺点" aria-hidden="true">#</a> 优缺点</h3><p>SPA 的优点：</p><ul><li>良好的交互体验 <ul><li>内容的改变不需要重新加载整个页面</li><li>数据通过 <code>Ajax</code> 异步获取</li><li>没有页面跳转，不会出现白屏现象</li></ul></li><li>良好的前后盾工作分离模式 <ul><li>后端专注于提供 API 接口，更易实现接口复用</li><li>前端专注页面渲染，更利于前端工程化发展</li></ul></li><li>减轻服务器压力 <ul><li>服务器只提供数据，不负责页面的合成与逻辑处理，吞吐能力会提高</li></ul></li></ul><p>SPA 的缺点：</p><ul><li>首屏加载慢：可使用路由懒加载、代码压缩、CDN 加速、网络传输压缩</li><li>不利于 SEO ：SSR 服务器端渲染</li></ul>',21),d=[h];function c(n,o){return a(),l("div",null,d)}const s=i(r,[["render",c],["__file","ldvoy8ml71yiciu8syr.html.vue"]]);export{s as default};
