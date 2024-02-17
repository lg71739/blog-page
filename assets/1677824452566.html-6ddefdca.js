const e=JSON.parse('{"key":"v-3b5396ed","path":"/front/nodejs/30/1677824452566.html","title":"npx 包执行器","lang":"zh-CN","frontmatter":{"title":"npx 包执行器","order":50,"date":"2023-03-03T00:00:00.000Z","permalink":"/front/nodejs/30/1677824452566.html","category":["大前端"],"tag":["大前端"],"description":"npx 是 npm v5.2.0 引入的一条命令（ npx ），是一个 npm 包执行器。我们可以使用 npx 来执行各种命令。 主要有以下特点： 临时安装可执行依赖包，不用全局安装，不用担心长期的污染。 可以执行依赖包中的命令，安装完成自动运行。 自动加载 node_modules 中依赖包，不用指定 $PATH 。 可以指定 node 版本、命令的版本，解决了不同项目使用不同 npx 执行流程如下： 到 node_modules/.bin 路径检查对应的命令是否存在，找到之后执行； 没有找到，就去环境变量 $PATH 里面，检查对应命令是否存在，找到之后执行; 还是没有找到，自动下载一个临时的依赖包最新版本在一个临时目录，然后再运行命令，运行完之后删除，不污染全局环境。","head":[["meta",{"property":"og:url","content":"https://notes.819000.xyz/front/nodejs/30/1677824452566.html"}],["meta",{"property":"og:site_name","content":"个人笔记"}],["meta",{"property":"og:title","content":"npx 包执行器"}],["meta",{"property":"og:description","content":"npx 是 npm v5.2.0 引入的一条命令（ npx ），是一个 npm 包执行器。我们可以使用 npx 来执行各种命令。 主要有以下特点： 临时安装可执行依赖包，不用全局安装，不用担心长期的污染。 可以执行依赖包中的命令，安装完成自动运行。 自动加载 node_modules 中依赖包，不用指定 $PATH 。 可以指定 node 版本、命令的版本，解决了不同项目使用不同 npx 执行流程如下： 到 node_modules/.bin 路径检查对应的命令是否存在，找到之后执行； 没有找到，就去环境变量 $PATH 里面，检查对应命令是否存在，找到之后执行; 还是没有找到，自动下载一个临时的依赖包最新版本在一个临时目录，然后再运行命令，运行完之后删除，不污染全局环境。"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-03-03T06:58:24.000Z"}],["meta",{"property":"article:author","content":"李广妮"}],["meta",{"property":"article:tag","content":"大前端"}],["meta",{"property":"article:published_time","content":"2023-03-03T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-03-03T06:58:24.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"npx 包执行器\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-03-03T00:00:00.000Z\\",\\"dateModified\\":\\"2023-03-03T06:58:24.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"李广妮\\",\\"url\\":\\"https://notes.819000.xyz\\"}]}"]]},"headers":[{"level":3,"title":"npx 使用场景","slug":"npx-使用场景","link":"#npx-使用场景","children":[]}],"git":{"createdTime":1677826704000,"updatedTime":1677826704000,"contributors":[{"name":"liguangni","email":"liguangfenglucky@163.com","commits":1}]},"readingTime":{"minutes":1.61,"words":484},"filePathRelative":"front/nodejs/30.常用插件/50.npx 包执行器.md","localizedDate":"2023年3月3日","excerpt":"<p>npx 是 npm v5.2.0 引入的一条命令（ npx ），是一个 npm 包执行器。我们可以使用 npx 来执行各种命令。</p>\\n<p>主要有以下特点：</p>\\n<ul>\\n<li>临时安装可执行依赖包，不用全局安装，不用担心长期的污染。</li>\\n<li>可以执行依赖包中的命令，安装完成自动运行。</li>\\n<li>自动加载 <code>node_modules</code> 中依赖包，不用指定 <code>$PATH</code> 。</li>\\n<li>可以指定 node 版本、命令的版本，解决了不同项目使用不同</li>\\n</ul>\\n<p>npx 执行流程如下：</p>\\n<ol>\\n<li>到 <code>node_modules/.bin</code> 路径检查对应的命令是否存在，找到之后执行；</li>\\n<li>没有找到，就去环境变量 <code>$PATH</code> 里面，检查对应命令是否存在，找到之后执行;</li>\\n<li>还是没有找到，自动下载一个临时的依赖包最新版本在一个临时目录，然后再运行命令，运行完之后删除，不污染全局环境。</li>\\n</ol>","autoDesc":true}');export{e as data};
