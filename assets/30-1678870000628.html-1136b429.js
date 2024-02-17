const e=JSON.parse('{"key":"v-90ab3108","path":"/backend/orm/mybatisplus/20/30-1678870000628.html","title":"条件构造器","lang":"zh-CN","frontmatter":{"title":"条件构造器","order":30,"date":"2023-03-15T00:00:00.000Z","permalink":"/backend/orm/mybatisplus/20/30-1678870000628.html","category":["ORM","MyBatis"],"tag":["ORM","MyBatis"],"description":"条件构造器 Wapper的定义及分类 image-20220521092812125 Wrapper ： 条件构造抽象类，最顶端父类 AbstractWrapper ： 用于查询条件封装，生成 sql 的 where 条件 QueryWrapper ： 查询条件封装(也可用于更新操作) UpdateWrapper ： Update 条件封装 AbstractLambdaWrapper ： 使用Lambda 语法 LambdaQueryWrapper ：用于Lambda语法使用的查询Wrapper LambdaUpdateWrapper ： Lambda 更新封装Wrapper","head":[["meta",{"property":"og:url","content":"https://notes.819000.xyz/backend/orm/mybatisplus/20/30-1678870000628.html"}],["meta",{"property":"og:site_name","content":"个人笔记"}],["meta",{"property":"og:title","content":"条件构造器"}],["meta",{"property":"og:description","content":"条件构造器 Wapper的定义及分类 image-20220521092812125 Wrapper ： 条件构造抽象类，最顶端父类 AbstractWrapper ： 用于查询条件封装，生成 sql 的 where 条件 QueryWrapper ： 查询条件封装(也可用于更新操作) UpdateWrapper ： Update 条件封装 AbstractLambdaWrapper ： 使用Lambda 语法 LambdaQueryWrapper ：用于Lambda语法使用的查询Wrapper LambdaUpdateWrapper ： Lambda 更新封装Wrapper"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-03-17T03:18:36.000Z"}],["meta",{"property":"article:author","content":"李广妮"}],["meta",{"property":"article:tag","content":"ORM"}],["meta",{"property":"article:tag","content":"MyBatis"}],["meta",{"property":"article:published_time","content":"2023-03-15T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-03-17T03:18:36.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"条件构造器\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-03-15T00:00:00.000Z\\",\\"dateModified\\":\\"2023-03-17T03:18:36.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"李广妮\\",\\"url\\":\\"https://notes.819000.xyz\\"}]}"]]},"headers":[{"level":2,"title":"Wapper的定义及分类","slug":"wapper的定义及分类","link":"#wapper的定义及分类","children":[{"level":3,"title":"AbstractWrapper","slug":"abstractwrapper","link":"#abstractwrapper","children":[]},{"level":3,"title":"QueryWrapper","slug":"querywrapper","link":"#querywrapper","children":[]},{"level":3,"title":"UpdateWrapper","slug":"updatewrapper","link":"#updatewrapper","children":[]}]},{"level":2,"title":"Wrapper的使用","slug":"wrapper的使用","link":"#wrapper的使用","children":[{"level":3,"title":"QueryWrapper","slug":"querywrapper-1","link":"#querywrapper-1","children":[]},{"level":3,"title":"UpdateWrapper","slug":"updatewrapper-1","link":"#updatewrapper-1","children":[]},{"level":3,"title":"condition","slug":"condition","link":"#condition","children":[]},{"level":3,"title":"LambdaQueryWrapper","slug":"lambdaquerywrapper","link":"#lambdaquerywrapper","children":[]},{"level":3,"title":"LambdaUpdateWrapper","slug":"lambdaupdatewrapper","link":"#lambdaupdatewrapper","children":[]}]}],"git":{"createdTime":1678871208000,"updatedTime":1679023116000,"contributors":[{"name":"liguangni","email":"liguangfenglucky@163.com","commits":3}]},"readingTime":{"minutes":4.75,"words":1425},"filePathRelative":"backend/orm/mybatisplus/20.核心功能/30.条件构造器.md","localizedDate":"2023年3月15日","excerpt":"<h1> 条件构造器</h1>\\n<h2> Wapper的定义及分类</h2>\\n<figure><img src=\\"https://jihulab.com/byzh123/images/-/raw/images/pictures/2023/03/15_16_50_47_image-20220521092812125.png\\" alt=\\"image-20220521092812125\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>image-20220521092812125</figcaption></figure>\\n<ul>\\n<li>\\n<p><code>Wrapper</code> ： 条件构造抽象类，最顶端父类</p>\\n<ul>\\n<li>\\n<p><code>AbstractWrapper </code>： 用于查询条件封装，生成 sql 的 where 条件</p>\\n<ul>\\n<li>\\n<p><code>QueryWrapper </code>： 查询条件封装(也可用于更新操作)</p>\\n</li>\\n<li>\\n<p><code>UpdateWrapper </code>： Update 条件封装</p>\\n</li>\\n<li>\\n<p><code>AbstractLambdaWrapper </code>： 使用Lambda 语法</p>\\n<ul>\\n<li><code>LambdaQueryWrapper </code>：用于Lambda语法使用的查询Wrapper</li>\\n<li><code>LambdaUpdateWrapper </code>： Lambda 更新封装Wrapper</li>\\n</ul>\\n</li>\\n</ul>\\n</li>\\n</ul>\\n</li>\\n</ul>","autoDesc":true}');export{e as data};
