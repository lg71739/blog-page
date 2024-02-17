const e=JSON.parse('{"key":"v-ad6cb436","path":"/backend/orm/mybatisplus/30/10-1678862043480.html","title":"逻辑删除","lang":"zh-CN","frontmatter":{"title":"逻辑删除","order":10,"date":"2023-03-15T00:00:00.000Z","permalink":"/backend/orm/mybatisplus/30/10-1678862043480.html","category":["ORM","MyBatis"],"tag":["ORM","MyBatis"],"description":"逻辑删除 物理删除和逻辑删除 物理删除 真实删除，将对应数据从数据库中删除，之后查询不到此条被删除的数据 逻辑删除 假删除，将对应数据中代表是否被删除字段的状态修改为“被删除状态”，之后在数据库中仍旧能看到此条数据记录 使用场景 可以进行数据恢复 如何使用 数据库设置删除标识位 数据库中创建逻辑删除状态列，设置默认值为0 image-20220520134529809","head":[["meta",{"property":"og:url","content":"https://notes.819000.xyz/backend/orm/mybatisplus/30/10-1678862043480.html"}],["meta",{"property":"og:site_name","content":"个人笔记"}],["meta",{"property":"og:title","content":"逻辑删除"}],["meta",{"property":"og:description","content":"逻辑删除 物理删除和逻辑删除 物理删除 真实删除，将对应数据从数据库中删除，之后查询不到此条被删除的数据 逻辑删除 假删除，将对应数据中代表是否被删除字段的状态修改为“被删除状态”，之后在数据库中仍旧能看到此条数据记录 使用场景 可以进行数据恢复 如何使用 数据库设置删除标识位 数据库中创建逻辑删除状态列，设置默认值为0 image-20220520134529809"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-03-15T09:06:48.000Z"}],["meta",{"property":"article:author","content":"李广妮"}],["meta",{"property":"article:tag","content":"ORM"}],["meta",{"property":"article:tag","content":"MyBatis"}],["meta",{"property":"article:published_time","content":"2023-03-15T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-03-15T09:06:48.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"逻辑删除\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-03-15T00:00:00.000Z\\",\\"dateModified\\":\\"2023-03-15T09:06:48.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"李广妮\\",\\"url\\":\\"https://notes.819000.xyz\\"}]}"]]},"headers":[{"level":2,"title":"物理删除和逻辑删除","slug":"物理删除和逻辑删除","link":"#物理删除和逻辑删除","children":[{"level":3,"title":"物理删除","slug":"物理删除","link":"#物理删除","children":[]},{"level":3,"title":"逻辑删除","slug":"逻辑删除-1","link":"#逻辑删除-1","children":[]}]},{"level":2,"title":"使用场景","slug":"使用场景","link":"#使用场景","children":[]},{"level":2,"title":"如何使用","slug":"如何使用","link":"#如何使用","children":[{"level":3,"title":"数据库设置删除标识位","slug":"数据库设置删除标识位","link":"#数据库设置删除标识位","children":[]},{"level":3,"title":"实体类添加@TableLogic注解","slug":"实体类添加-tablelogic注解","link":"#实体类添加-tablelogic注解","children":[]},{"level":3,"title":"测试","slug":"测试","link":"#测试","children":[]}]}],"git":{"createdTime":1678871208000,"updatedTime":1678871208000,"contributors":[{"name":"liguangni","email":"liguangfenglucky@163.com","commits":1}]},"readingTime":{"minutes":0.91,"words":274},"filePathRelative":"backend/orm/mybatisplus/30.拓展/10.逻辑删除.md","localizedDate":"2023年3月15日","excerpt":"<h1> 逻辑删除</h1>\\n<h2> 物理删除和逻辑删除</h2>\\n<h3> 物理删除</h3>\\n<p>真实删除，将对应数据从数据库中删除，之后查询不到此条被删除的数据</p>\\n<h3> 逻辑删除</h3>\\n<p>假删除，将对应数据中代表是否被删除字段的状态修改为“被删除状态”，之后在数据库中仍旧能看到此条数据记录</p>\\n<h2> 使用场景</h2>\\n<p>可以进行数据恢复</p>\\n<h2> 如何使用</h2>\\n<h3> 数据库设置删除标识位</h3>\\n<p>数据库中创建逻辑删除状态列，设置默认值为0</p>\\n<figure><img src=\\"https://jihulab.com/byzh123/images/-/raw/images/pictures/2023/03/15_15_13_54_15_15_7_56_image-20220520134529809.png\\" alt=\\"image-20220520134529809\\" tabindex=\\"0\\" loading=\\"lazy\\"><figcaption>image-20220520134529809</figcaption></figure>","autoDesc":true}');export{e as data};
