const t=JSON.parse(`{"key":"v-072bce1a","path":"/front/vue/10/130.html","title":"收集表单数据","lang":"zh-CN","frontmatter":{"title":"收集表单数据","order":130,"date":"2022-09-07T00:00:00.000Z","permalink":"/front/vue/10/130.html","description":"演示代码 &lt;!DOCTYPE html&gt; &lt;html&gt; \\t&lt;head&gt; \\t\\t&lt;meta charset=\\"UTF-8\\" /&gt; \\t\\t&lt;title&gt;收集表单数据&lt;/title&gt; \\t\\t&lt;script type=\\"text/javascript\\" src=\\"../js/vue.js\\"&gt;&lt;/script&gt; \\t&lt;/head&gt; \\t&lt;body&gt; \\t\\t&lt;div id=\\"root\\"&gt; \\t\\t\\t&lt;form @submit.prevent=\\"demo\\"&gt; \\t\\t\\t\\t账号：&lt;input type=\\"text\\" v-model.trim=\\"userInfo.account\\"&gt; &lt;br/&gt;&lt;br/&gt; \\t\\t\\t\\t密码：&lt;input type=\\"password\\" v-model=\\"userInfo.password\\"&gt; &lt;br/&gt;&lt;br/&gt; \\t\\t\\t\\t年龄：&lt;input type=\\"number\\" v-model.number=\\"userInfo.age\\"&gt; &lt;br/&gt;&lt;br/&gt; \\t\\t\\t\\t性别： \\t\\t\\t\\t男&lt;input type=\\"radio\\" name=\\"sex\\" v-model=\\"userInfo.sex\\" value=\\"male\\"&gt; \\t\\t\\t\\t女&lt;input type=\\"radio\\" name=\\"sex\\" v-model=\\"userInfo.sex\\" value=\\"female\\"&gt; &lt;br/&gt;&lt;br/&gt; \\t\\t\\t\\t爱好： \\t\\t\\t\\t学习&lt;input type=\\"checkbox\\" v-model=\\"userInfo.hobby\\" value=\\"study\\"&gt; \\t\\t\\t\\t打游戏&lt;input type=\\"checkbox\\" v-model=\\"userInfo.hobby\\" value=\\"game\\"&gt; \\t\\t\\t\\t吃饭&lt;input type=\\"checkbox\\" v-model=\\"userInfo.hobby\\" value=\\"eat\\"&gt; \\t\\t\\t\\t&lt;br/&gt;&lt;br/&gt; \\t\\t\\t\\t所属校区： \\t\\t\\t\\t&lt;select v-model=\\"userInfo.city\\"&gt; \\t\\t\\t\\t\\t&lt;option value=\\"\\"&gt;请选择校区&lt;/option&gt; \\t\\t\\t\\t\\t&lt;option value=\\"beijing\\"&gt;北京&lt;/option&gt; \\t\\t\\t\\t\\t&lt;option value=\\"shanghai\\"&gt;上海&lt;/option&gt; \\t\\t\\t\\t\\t&lt;option value=\\"shenzhen\\"&gt;深圳&lt;/option&gt; \\t\\t\\t\\t\\t&lt;option value=\\"wuhan\\"&gt;武汉&lt;/option&gt; \\t\\t\\t\\t&lt;/select&gt; \\t\\t\\t\\t&lt;br/&gt;&lt;br/&gt; \\t\\t\\t\\t其他信息： \\t\\t\\t\\t&lt;textarea v-model.lazy=\\"userInfo.other\\"&gt;&lt;/textarea&gt; &lt;br/&gt;&lt;br/&gt; \\t\\t\\t\\t&lt;input type=\\"checkbox\\" v-model=\\"userInfo.agree\\"&gt;阅读并接受&lt;a href=\\"http://www.atguigu.com\\"&gt;《用户协议》&lt;/a&gt; \\t\\t\\t\\t&lt;button&gt;提交&lt;/button&gt; \\t\\t\\t&lt;/form&gt; \\t\\t&lt;/div&gt; \\t&lt;/body&gt; \\t&lt;script type=\\"text/javascript\\"&gt; \\t\\tVue.config.productionTip = false \\t\\tnew Vue({ \\t\\t\\tel:'#root', \\t\\t\\tdata:{ \\t\\t\\t\\tuserInfo:{ \\t\\t\\t\\t\\taccount:'', \\t\\t\\t\\t\\tpassword:'', \\t\\t\\t\\t\\tage:0, \\t\\t\\t\\t\\tsex:'female', \\t\\t\\t\\t\\thobby:[], \\t\\t\\t\\t\\tcity:'beijing', \\t\\t\\t\\t\\tother:'', \\t\\t\\t\\t\\tagree:'' \\t\\t\\t\\t} \\t\\t\\t}, \\t\\t\\tmethods: { \\t\\t\\t\\tdemo(){ \\t\\t\\t\\t\\tconsole.log(JSON.stringify(this.userInfo)) \\t\\t\\t\\t} \\t\\t\\t} \\t\\t}) \\t&lt;/script&gt; &lt;/html&gt;","head":[["meta",{"property":"og:url","content":"https://notes.819000.xyz/front/vue/10/130.html"}],["meta",{"property":"og:site_name","content":"个人笔记"}],["meta",{"property":"og:title","content":"收集表单数据"}],["meta",{"property":"og:description","content":"演示代码 &lt;!DOCTYPE html&gt; &lt;html&gt; \\t&lt;head&gt; \\t\\t&lt;meta charset=\\"UTF-8\\" /&gt; \\t\\t&lt;title&gt;收集表单数据&lt;/title&gt; \\t\\t&lt;script type=\\"text/javascript\\" src=\\"../js/vue.js\\"&gt;&lt;/script&gt; \\t&lt;/head&gt; \\t&lt;body&gt; \\t\\t&lt;div id=\\"root\\"&gt; \\t\\t\\t&lt;form @submit.prevent=\\"demo\\"&gt; \\t\\t\\t\\t账号：&lt;input type=\\"text\\" v-model.trim=\\"userInfo.account\\"&gt; &lt;br/&gt;&lt;br/&gt; \\t\\t\\t\\t密码：&lt;input type=\\"password\\" v-model=\\"userInfo.password\\"&gt; &lt;br/&gt;&lt;br/&gt; \\t\\t\\t\\t年龄：&lt;input type=\\"number\\" v-model.number=\\"userInfo.age\\"&gt; &lt;br/&gt;&lt;br/&gt; \\t\\t\\t\\t性别： \\t\\t\\t\\t男&lt;input type=\\"radio\\" name=\\"sex\\" v-model=\\"userInfo.sex\\" value=\\"male\\"&gt; \\t\\t\\t\\t女&lt;input type=\\"radio\\" name=\\"sex\\" v-model=\\"userInfo.sex\\" value=\\"female\\"&gt; &lt;br/&gt;&lt;br/&gt; \\t\\t\\t\\t爱好： \\t\\t\\t\\t学习&lt;input type=\\"checkbox\\" v-model=\\"userInfo.hobby\\" value=\\"study\\"&gt; \\t\\t\\t\\t打游戏&lt;input type=\\"checkbox\\" v-model=\\"userInfo.hobby\\" value=\\"game\\"&gt; \\t\\t\\t\\t吃饭&lt;input type=\\"checkbox\\" v-model=\\"userInfo.hobby\\" value=\\"eat\\"&gt; \\t\\t\\t\\t&lt;br/&gt;&lt;br/&gt; \\t\\t\\t\\t所属校区： \\t\\t\\t\\t&lt;select v-model=\\"userInfo.city\\"&gt; \\t\\t\\t\\t\\t&lt;option value=\\"\\"&gt;请选择校区&lt;/option&gt; \\t\\t\\t\\t\\t&lt;option value=\\"beijing\\"&gt;北京&lt;/option&gt; \\t\\t\\t\\t\\t&lt;option value=\\"shanghai\\"&gt;上海&lt;/option&gt; \\t\\t\\t\\t\\t&lt;option value=\\"shenzhen\\"&gt;深圳&lt;/option&gt; \\t\\t\\t\\t\\t&lt;option value=\\"wuhan\\"&gt;武汉&lt;/option&gt; \\t\\t\\t\\t&lt;/select&gt; \\t\\t\\t\\t&lt;br/&gt;&lt;br/&gt; \\t\\t\\t\\t其他信息： \\t\\t\\t\\t&lt;textarea v-model.lazy=\\"userInfo.other\\"&gt;&lt;/textarea&gt; &lt;br/&gt;&lt;br/&gt; \\t\\t\\t\\t&lt;input type=\\"checkbox\\" v-model=\\"userInfo.agree\\"&gt;阅读并接受&lt;a href=\\"http://www.atguigu.com\\"&gt;《用户协议》&lt;/a&gt; \\t\\t\\t\\t&lt;button&gt;提交&lt;/button&gt; \\t\\t\\t&lt;/form&gt; \\t\\t&lt;/div&gt; \\t&lt;/body&gt; \\t&lt;script type=\\"text/javascript\\"&gt; \\t\\tVue.config.productionTip = false \\t\\tnew Vue({ \\t\\t\\tel:'#root', \\t\\t\\tdata:{ \\t\\t\\t\\tuserInfo:{ \\t\\t\\t\\t\\taccount:'', \\t\\t\\t\\t\\tpassword:'', \\t\\t\\t\\t\\tage:0, \\t\\t\\t\\t\\tsex:'female', \\t\\t\\t\\t\\thobby:[], \\t\\t\\t\\t\\tcity:'beijing', \\t\\t\\t\\t\\tother:'', \\t\\t\\t\\t\\tagree:'' \\t\\t\\t\\t} \\t\\t\\t}, \\t\\t\\tmethods: { \\t\\t\\t\\tdemo(){ \\t\\t\\t\\t\\tconsole.log(JSON.stringify(this.userInfo)) \\t\\t\\t\\t} \\t\\t\\t} \\t\\t}) \\t&lt;/script&gt; &lt;/html&gt;"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-02-05T02:37:54.000Z"}],["meta",{"property":"article:author","content":"李广妮"}],["meta",{"property":"article:published_time","content":"2022-09-07T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-02-05T02:37:54.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"收集表单数据\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2022-09-07T00:00:00.000Z\\",\\"dateModified\\":\\"2023-02-05T02:37:54.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"李广妮\\",\\"url\\":\\"https://notes.819000.xyz\\"}]}"]]},"headers":[{"level":2,"title":"演示代码","slug":"演示代码","link":"#演示代码","children":[]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[]},{"level":2,"title":"v-model的三个修饰符：","slug":"v-model的三个修饰符","link":"#v-model的三个修饰符","children":[]}],"git":{"createdTime":1675564674000,"updatedTime":1675564674000,"contributors":[{"name":"liguangni","email":"liguangfenglucky@163.com","commits":1}]},"readingTime":{"minutes":1.45,"words":436},"filePathRelative":"front/vue/10.Vue基础/130.收集表单数据.md","localizedDate":"2022年9月7日","excerpt":"<h2> 演示代码</h2>\\n<div class=\\"language-vue line-numbers-mode\\" data-ext=\\"vue\\"><pre class=\\"language-vue\\"><code><span class=\\"token doctype\\"><span class=\\"token punctuation\\">&lt;!</span><span class=\\"token doctype-tag\\">DOCTYPE</span> <span class=\\"token name\\">html</span><span class=\\"token punctuation\\">&gt;</span></span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>html</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\t<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>head</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\t\\t<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>meta</span> <span class=\\"token attr-name\\">charset</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>UTF-8<span class=\\"token punctuation\\">\\"</span></span> <span class=\\"token punctuation\\">/&gt;</span></span>\\n\\t\\t<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>title</span><span class=\\"token punctuation\\">&gt;</span></span>收集表单数据<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>title</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\t\\t<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>script</span> <span class=\\"token attr-name\\">type</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>text/javascript<span class=\\"token punctuation\\">\\"</span></span> <span class=\\"token attr-name\\">src</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>../js/vue.js<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token script\\"></span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>script</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\t<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>head</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\t<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>body</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\t\\t<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>div</span> <span class=\\"token attr-name\\">id</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>root<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\t\\t\\t<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>form</span> <span class=\\"token attr-name\\">@submit.prevent</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>demo<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\t\\t\\t\\t账号：<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>input</span> <span class=\\"token attr-name\\">type</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>text<span class=\\"token punctuation\\">\\"</span></span> <span class=\\"token attr-name\\">v-model.trim</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>userInfo.account<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span> <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>br</span><span class=\\"token punctuation\\">/&gt;</span></span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>br</span><span class=\\"token punctuation\\">/&gt;</span></span>\\n\\t\\t\\t\\t密码：<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>input</span> <span class=\\"token attr-name\\">type</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>password<span class=\\"token punctuation\\">\\"</span></span> <span class=\\"token attr-name\\">v-model</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>userInfo.password<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span> <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>br</span><span class=\\"token punctuation\\">/&gt;</span></span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>br</span><span class=\\"token punctuation\\">/&gt;</span></span>\\n\\t\\t\\t\\t年龄：<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>input</span> <span class=\\"token attr-name\\">type</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>number<span class=\\"token punctuation\\">\\"</span></span> <span class=\\"token attr-name\\">v-model.number</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>userInfo.age<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span> <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>br</span><span class=\\"token punctuation\\">/&gt;</span></span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>br</span><span class=\\"token punctuation\\">/&gt;</span></span>\\n\\t\\t\\t\\t性别：\\n\\t\\t\\t\\t男<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>input</span> <span class=\\"token attr-name\\">type</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>radio<span class=\\"token punctuation\\">\\"</span></span> <span class=\\"token attr-name\\">name</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>sex<span class=\\"token punctuation\\">\\"</span></span> <span class=\\"token attr-name\\">v-model</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>userInfo.sex<span class=\\"token punctuation\\">\\"</span></span> <span class=\\"token attr-name\\">value</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>male<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\t\\t\\t\\t女<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>input</span> <span class=\\"token attr-name\\">type</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>radio<span class=\\"token punctuation\\">\\"</span></span> <span class=\\"token attr-name\\">name</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>sex<span class=\\"token punctuation\\">\\"</span></span> <span class=\\"token attr-name\\">v-model</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>userInfo.sex<span class=\\"token punctuation\\">\\"</span></span> <span class=\\"token attr-name\\">value</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>female<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span> <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>br</span><span class=\\"token punctuation\\">/&gt;</span></span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>br</span><span class=\\"token punctuation\\">/&gt;</span></span>\\n\\t\\t\\t\\t爱好：\\n\\t\\t\\t\\t学习<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>input</span> <span class=\\"token attr-name\\">type</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>checkbox<span class=\\"token punctuation\\">\\"</span></span> <span class=\\"token attr-name\\">v-model</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>userInfo.hobby<span class=\\"token punctuation\\">\\"</span></span> <span class=\\"token attr-name\\">value</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>study<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\t\\t\\t\\t打游戏<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>input</span> <span class=\\"token attr-name\\">type</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>checkbox<span class=\\"token punctuation\\">\\"</span></span> <span class=\\"token attr-name\\">v-model</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>userInfo.hobby<span class=\\"token punctuation\\">\\"</span></span> <span class=\\"token attr-name\\">value</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>game<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\t\\t\\t\\t吃饭<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>input</span> <span class=\\"token attr-name\\">type</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>checkbox<span class=\\"token punctuation\\">\\"</span></span> <span class=\\"token attr-name\\">v-model</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>userInfo.hobby<span class=\\"token punctuation\\">\\"</span></span> <span class=\\"token attr-name\\">value</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>eat<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\t\\t\\t\\t<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>br</span><span class=\\"token punctuation\\">/&gt;</span></span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>br</span><span class=\\"token punctuation\\">/&gt;</span></span>\\n\\t\\t\\t\\t所属校区：\\n\\t\\t\\t\\t<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>select</span> <span class=\\"token attr-name\\">v-model</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>userInfo.city<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\t\\t\\t\\t\\t<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>option</span> <span class=\\"token attr-name\\">value</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span><span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span>请选择校区<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>option</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\t\\t\\t\\t\\t<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>option</span> <span class=\\"token attr-name\\">value</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>beijing<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span>北京<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>option</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\t\\t\\t\\t\\t<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>option</span> <span class=\\"token attr-name\\">value</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>shanghai<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span>上海<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>option</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\t\\t\\t\\t\\t<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>option</span> <span class=\\"token attr-name\\">value</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>shenzhen<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span>深圳<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>option</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\t\\t\\t\\t\\t<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>option</span> <span class=\\"token attr-name\\">value</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>wuhan<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span>武汉<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>option</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\t\\t\\t\\t<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>select</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\t\\t\\t\\t<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>br</span><span class=\\"token punctuation\\">/&gt;</span></span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>br</span><span class=\\"token punctuation\\">/&gt;</span></span>\\n\\t\\t\\t\\t其他信息：\\n\\t\\t\\t\\t<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>textarea</span> <span class=\\"token attr-name\\">v-model.lazy</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>userInfo.other<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>textarea</span><span class=\\"token punctuation\\">&gt;</span></span> <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>br</span><span class=\\"token punctuation\\">/&gt;</span></span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>br</span><span class=\\"token punctuation\\">/&gt;</span></span>\\n\\t\\t\\t\\t<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>input</span> <span class=\\"token attr-name\\">type</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>checkbox<span class=\\"token punctuation\\">\\"</span></span> <span class=\\"token attr-name\\">v-model</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>userInfo.agree<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span>阅读并接受<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>a</span> <span class=\\"token attr-name\\">href</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>http://www.atguigu.com<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span>《用户协议》<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>a</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\t\\t\\t\\t<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>button</span><span class=\\"token punctuation\\">&gt;</span></span>提交<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>button</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\t\\t\\t<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>form</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\t\\t<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>div</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\t<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>body</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\n\\t<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>script</span> <span class=\\"token attr-name\\">type</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>text/javascript<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token script\\"><span class=\\"token language-javascript\\">\\n\\t\\tVue<span class=\\"token punctuation\\">.</span>config<span class=\\"token punctuation\\">.</span>productionTip <span class=\\"token operator\\">=</span> <span class=\\"token boolean\\">false</span>\\n\\n\\t\\t<span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">Vue</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">{</span>\\n\\t\\t\\t<span class=\\"token literal-property property\\">el</span><span class=\\"token operator\\">:</span><span class=\\"token string\\">'#root'</span><span class=\\"token punctuation\\">,</span>\\n\\t\\t\\t<span class=\\"token literal-property property\\">data</span><span class=\\"token operator\\">:</span><span class=\\"token punctuation\\">{</span>\\n\\t\\t\\t\\t<span class=\\"token literal-property property\\">userInfo</span><span class=\\"token operator\\">:</span><span class=\\"token punctuation\\">{</span>\\n\\t\\t\\t\\t\\t<span class=\\"token literal-property property\\">account</span><span class=\\"token operator\\">:</span><span class=\\"token string\\">''</span><span class=\\"token punctuation\\">,</span>\\n\\t\\t\\t\\t\\t<span class=\\"token literal-property property\\">password</span><span class=\\"token operator\\">:</span><span class=\\"token string\\">''</span><span class=\\"token punctuation\\">,</span>\\n\\t\\t\\t\\t\\t<span class=\\"token literal-property property\\">age</span><span class=\\"token operator\\">:</span><span class=\\"token number\\">0</span><span class=\\"token punctuation\\">,</span>\\n\\t\\t\\t\\t\\t<span class=\\"token literal-property property\\">sex</span><span class=\\"token operator\\">:</span><span class=\\"token string\\">'female'</span><span class=\\"token punctuation\\">,</span>\\n\\t\\t\\t\\t\\t<span class=\\"token literal-property property\\">hobby</span><span class=\\"token operator\\">:</span><span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span><span class=\\"token punctuation\\">,</span>\\n\\t\\t\\t\\t\\t<span class=\\"token literal-property property\\">city</span><span class=\\"token operator\\">:</span><span class=\\"token string\\">'beijing'</span><span class=\\"token punctuation\\">,</span>\\n\\t\\t\\t\\t\\t<span class=\\"token literal-property property\\">other</span><span class=\\"token operator\\">:</span><span class=\\"token string\\">''</span><span class=\\"token punctuation\\">,</span>\\n\\t\\t\\t\\t\\t<span class=\\"token literal-property property\\">agree</span><span class=\\"token operator\\">:</span><span class=\\"token string\\">''</span>\\n\\t\\t\\t\\t<span class=\\"token punctuation\\">}</span>\\n\\t\\t\\t<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n\\t\\t\\t<span class=\\"token literal-property property\\">methods</span><span class=\\"token operator\\">:</span> <span class=\\"token punctuation\\">{</span>\\n\\t\\t\\t\\t<span class=\\"token function\\">demo</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">{</span>\\n\\t\\t\\t\\t\\tconsole<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">log</span><span class=\\"token punctuation\\">(</span><span class=\\"token constant\\">JSON</span><span class=\\"token punctuation\\">.</span><span class=\\"token function\\">stringify</span><span class=\\"token punctuation\\">(</span><span class=\\"token keyword\\">this</span><span class=\\"token punctuation\\">.</span>userInfo<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span>\\n\\t\\t\\t\\t<span class=\\"token punctuation\\">}</span>\\n\\t\\t\\t<span class=\\"token punctuation\\">}</span>\\n\\t\\t<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span>\\n\\t</span></span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>script</span><span class=\\"token punctuation\\">&gt;</span></span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>html</span><span class=\\"token punctuation\\">&gt;</span></span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{t as data};
