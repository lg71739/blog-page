const n=JSON.parse('{"key":"v-c1b201ea","path":"/backend/orm/mybatis/20-1678263132681.html","title":"入门及环境搭建","lang":"zh-CN","frontmatter":{"title":"入门及环境搭建","order":20,"date":"2023-03-08T00:00:00.000Z","permalink":"/backend/orm/mybatis/20-1678263132681.html","category":["MyBatis","ORM"],"tag":["MyBatis","ORM"],"description":"数据库建库建表 创建数据库 CREATE TABLE `user` ( `id` int NOT NULL AUTO_INCREMENT COMMENT \'ID\' , `name` varchar(20) NULL COMMENT \'姓名\' , `password` varchar(50) NULL COMMENT \'密码\' , `age` int NULL COMMENT \'年龄\' , `sex` char(255) NULL COMMENT \'性别\' , `email` varchar(50) NULL COMMENT \'邮箱\' , PRIMARY KEY (`id`) );","head":[["meta",{"property":"og:url","content":"https://notes.819000.xyz/backend/orm/mybatis/20-1678263132681.html"}],["meta",{"property":"og:site_name","content":"个人笔记"}],["meta",{"property":"og:title","content":"入门及环境搭建"}],["meta",{"property":"og:description","content":"数据库建库建表 创建数据库 CREATE TABLE `user` ( `id` int NOT NULL AUTO_INCREMENT COMMENT \'ID\' , `name` varchar(20) NULL COMMENT \'姓名\' , `password` varchar(50) NULL COMMENT \'密码\' , `age` int NULL COMMENT \'年龄\' , `sex` char(255) NULL COMMENT \'性别\' , `email` varchar(50) NULL COMMENT \'邮箱\' , PRIMARY KEY (`id`) );"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2023-04-01T04:15:41.000Z"}],["meta",{"property":"article:author","content":"李广妮"}],["meta",{"property":"article:tag","content":"MyBatis"}],["meta",{"property":"article:tag","content":"ORM"}],["meta",{"property":"article:published_time","content":"2023-03-08T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-04-01T04:15:41.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"入门及环境搭建\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-03-08T00:00:00.000Z\\",\\"dateModified\\":\\"2023-04-01T04:15:41.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"李广妮\\",\\"url\\":\\"https://notes.819000.xyz\\"}]}"]]},"headers":[{"level":2,"title":"数据库建库建表","slug":"数据库建库建表","link":"#数据库建库建表","children":[{"level":3,"title":"创建数据库","slug":"创建数据库","link":"#创建数据库","children":[]},{"level":3,"title":"测试数据","slug":"测试数据","link":"#测试数据","children":[]}]},{"level":2,"title":"创建项目","slug":"创建项目","link":"#创建项目","children":[{"level":3,"title":"创建SpringBoot工程","slug":"创建springboot工程","link":"#创建springboot工程","children":[]},{"level":3,"title":"创建实体类","slug":"创建实体类","link":"#创建实体类","children":[]},{"level":3,"title":"创建Mapper接口","slug":"创建mapper接口","link":"#创建mapper接口","children":[]},{"level":3,"title":"创建Mapper映射文件","slug":"创建mapper映射文件","link":"#创建mapper映射文件","children":[]},{"level":3,"title":"创建Mybatis核心配置文件","slug":"创建mybatis核心配置文件","link":"#创建mybatis核心配置文件","children":[]}]},{"level":2,"title":"测试","slug":"测试","link":"#测试","children":[{"level":3,"title":"编写测试类","slug":"编写测试类","link":"#编写测试类","children":[]},{"level":3,"title":"执行测试","slug":"执行测试","link":"#执行测试","children":[]}]}],"git":{"createdTime":1678439239000,"updatedTime":1680322541000,"contributors":[{"name":"liguangni","email":"liguangfenglucky@163.com","commits":2}]},"readingTime":{"minutes":11.84,"words":3553},"filePathRelative":"backend/orm/mybatis/20.入门及环境搭建.md","localizedDate":"2023年3月8日","excerpt":"<h2> 数据库建库建表</h2>\\n<h3> 创建数据库</h3>\\n<div class=\\"language-sql line-numbers-mode\\" data-ext=\\"sql\\"><pre class=\\"language-sql\\"><code><span class=\\"token keyword\\">CREATE</span> <span class=\\"token keyword\\">TABLE</span> <span class=\\"token identifier\\"><span class=\\"token punctuation\\">`</span>user<span class=\\"token punctuation\\">`</span></span> <span class=\\"token punctuation\\">(</span>\\n<span class=\\"token identifier\\"><span class=\\"token punctuation\\">`</span>id<span class=\\"token punctuation\\">`</span></span>  <span class=\\"token keyword\\">int</span> <span class=\\"token operator\\">NOT</span> <span class=\\"token boolean\\">NULL</span> <span class=\\"token keyword\\">AUTO_INCREMENT</span> <span class=\\"token keyword\\">COMMENT</span> <span class=\\"token string\\">\'ID\'</span> <span class=\\"token punctuation\\">,</span>\\n<span class=\\"token identifier\\"><span class=\\"token punctuation\\">`</span>name<span class=\\"token punctuation\\">`</span></span>  <span class=\\"token keyword\\">varchar</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">20</span><span class=\\"token punctuation\\">)</span> <span class=\\"token boolean\\">NULL</span> <span class=\\"token keyword\\">COMMENT</span> <span class=\\"token string\\">\'姓名\'</span> <span class=\\"token punctuation\\">,</span>\\n<span class=\\"token identifier\\"><span class=\\"token punctuation\\">`</span>password<span class=\\"token punctuation\\">`</span></span>  <span class=\\"token keyword\\">varchar</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">50</span><span class=\\"token punctuation\\">)</span> <span class=\\"token boolean\\">NULL</span> <span class=\\"token keyword\\">COMMENT</span> <span class=\\"token string\\">\'密码\'</span> <span class=\\"token punctuation\\">,</span>\\n<span class=\\"token identifier\\"><span class=\\"token punctuation\\">`</span>age<span class=\\"token punctuation\\">`</span></span>  <span class=\\"token keyword\\">int</span> <span class=\\"token boolean\\">NULL</span> <span class=\\"token keyword\\">COMMENT</span> <span class=\\"token string\\">\'年龄\'</span> <span class=\\"token punctuation\\">,</span>\\n<span class=\\"token identifier\\"><span class=\\"token punctuation\\">`</span>sex<span class=\\"token punctuation\\">`</span></span>  <span class=\\"token keyword\\">char</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">255</span><span class=\\"token punctuation\\">)</span> <span class=\\"token boolean\\">NULL</span> <span class=\\"token keyword\\">COMMENT</span> <span class=\\"token string\\">\'性别\'</span> <span class=\\"token punctuation\\">,</span>\\n<span class=\\"token identifier\\"><span class=\\"token punctuation\\">`</span>email<span class=\\"token punctuation\\">`</span></span>  <span class=\\"token keyword\\">varchar</span><span class=\\"token punctuation\\">(</span><span class=\\"token number\\">50</span><span class=\\"token punctuation\\">)</span> <span class=\\"token boolean\\">NULL</span> <span class=\\"token keyword\\">COMMENT</span> <span class=\\"token string\\">\'邮箱\'</span> <span class=\\"token punctuation\\">,</span>\\n<span class=\\"token keyword\\">PRIMARY</span> <span class=\\"token keyword\\">KEY</span> <span class=\\"token punctuation\\">(</span><span class=\\"token identifier\\"><span class=\\"token punctuation\\">`</span>id<span class=\\"token punctuation\\">`</span></span><span class=\\"token punctuation\\">)</span>\\n<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">;</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}');export{n as data};
