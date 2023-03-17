import{_ as n,Z as s,$ as a,a4 as e}from"./framework-4a2165a0.js";const t={},p=e(`<h1 id="通用枚举" tabindex="-1"><a class="header-anchor" href="#通用枚举" aria-hidden="true">#</a> 通用枚举</h1><blockquote><p>表中的有些字段值是固定的，例如性别（男或女），此时我们可以使用MyBatis-Plus的通用枚举来实现</p></blockquote><h2 id="环境准备" tabindex="-1"><a class="header-anchor" href="#环境准备" aria-hidden="true">#</a> 环境准备</h2><h3 id="数据库表添加字段sex" tabindex="-1"><a class="header-anchor" href="#数据库表添加字段sex" aria-hidden="true">#</a> 数据库表添加字段<code>sex</code></h3><figure><img src="https://jihulab.com/byzh123/images/-/raw/images/pictures/2023/03/17_11_10_5_image-20220521231317777.png" alt="image-20220521231317777" tabindex="0" loading="lazy"><figcaption>image-20220521231317777</figcaption></figure><h3 id="创建通用枚举类型" tabindex="-1"><a class="header-anchor" href="#创建通用枚举类型" aria-hidden="true">#</a> 创建通用枚举类型</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Getter</span>
<span class="token keyword">public</span> <span class="token keyword">enum</span> <span class="token class-name">SexEnum</span> <span class="token punctuation">{</span>
    <span class="token function">MALE</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&quot;男&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token function">FEMALE</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&quot;女&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token annotation punctuation">@EnumValue</span> <span class="token comment">//将注解所标识的属性的值存储到数据库中</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> sex<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> sexName<span class="token punctuation">;</span>

    <span class="token class-name">SexEnum</span><span class="token punctuation">(</span><span class="token class-name">Integer</span> sex<span class="token punctuation">,</span> <span class="token class-name">String</span> sexName<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>sex <span class="token operator">=</span> sex<span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>sexName <span class="token operator">=</span> sexName<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="user实体类中添加属性sex" tabindex="-1"><a class="header-anchor" href="#user实体类中添加属性sex" aria-hidden="true">#</a> User实体类中添加属性sex</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
    <span class="token keyword">private</span> <span class="token class-name">Long</span> id<span class="token punctuation">;</span>
    <span class="token annotation punctuation">@TableField</span><span class="token punctuation">(</span><span class="token string">&quot;username&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">Integer</span> age<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">String</span> email<span class="token punctuation">;</span>

    <span class="token annotation punctuation">@TableLogic</span>
    <span class="token keyword">private</span> <span class="token keyword">int</span> isDeleted<span class="token punctuation">;</span>  <span class="token comment">//逻辑删除</span>

    <span class="token keyword">private</span> <span class="token class-name">SexEnum</span> sex<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="配置扫描通用枚举" tabindex="-1"><a class="header-anchor" href="#配置扫描通用枚举" aria-hidden="true">#</a> 配置扫描通用枚举</h3><div class="hint-container warning"><p class="hint-container-title">新版本中已不需要配置该项</p></div><div class="language-yaml line-numbers-mode" data-ext="yml"><pre class="language-yaml"><code><span class="token comment">#MyBatis-Plus相关配置</span>
<span class="token key atrule">mybatis-plus</span><span class="token punctuation">:</span>
  <span class="token comment">#指定mapper文件所在的地址</span>
  <span class="token key atrule">mapper-locations</span><span class="token punctuation">:</span> classpath<span class="token punctuation">:</span>mapper/<span class="token important">*.xml</span>
  <span class="token key atrule">configuration</span><span class="token punctuation">:</span>
    <span class="token comment">#配置日志</span>
    <span class="token key atrule">log-impl</span><span class="token punctuation">:</span> org.apache.ibatis.logging.stdout.StdOutImpl
  <span class="token key atrule">global-config</span><span class="token punctuation">:</span>
    <span class="token key atrule">banner</span><span class="token punctuation">:</span> off
    <span class="token key atrule">db-config</span><span class="token punctuation">:</span>
      <span class="token comment">#配置mp的主键策略为自增</span>
      <span class="token key atrule">id-type</span><span class="token punctuation">:</span> auto
      <span class="token comment"># 设置实体类所对应的表的统一前缀</span>
      <span class="token key atrule">table-prefix</span><span class="token punctuation">:</span> t_
  <span class="token comment">#配置类型别名所对应的包</span>
  <span class="token key atrule">type-aliases-package</span><span class="token punctuation">:</span> com.atguigu.mybatisplus.pojo
  <span class="token comment"># 扫描通用枚举的包</span>
  <span class="token key atrule">type-enums-package</span><span class="token punctuation">:</span> com.atguigu.mybatisplus.enums
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="执行测试" tabindex="-1"><a class="header-anchor" href="#执行测试" aria-hidden="true">#</a> 执行测试</h2><p>执行测试方法</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Test</span>
<span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">test</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
    <span class="token class-name">User</span> user <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    user<span class="token punctuation">.</span><span class="token function">setName</span><span class="token punctuation">(</span><span class="token string">&quot;admin&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    user<span class="token punctuation">.</span><span class="token function">setAge</span><span class="token punctuation">(</span><span class="token number">33</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    user<span class="token punctuation">.</span><span class="token function">setSex</span><span class="token punctuation">(</span><span class="token class-name">SexEnum</span><span class="token punctuation">.</span><span class="token constant">MALE</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">int</span> result <span class="token operator">=</span> userMapper<span class="token punctuation">.</span><span class="token function">insert</span><span class="token punctuation">(</span>user<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;result:&quot;</span><span class="token operator">+</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,15),c=[p];function i(l,o){return s(),a("div",null,c)}const d=n(t,[["render",i],["__file","30-1679021915880.html.vue"]]);export{d as default};
