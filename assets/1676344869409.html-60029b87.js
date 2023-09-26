import{_ as e,o as a,c as s,f as i}from"./app-8745ddab.js";const n={},d=i(`<h2 id="下载镜像文件" tabindex="-1"><a class="header-anchor" href="#下载镜像文件" aria-hidden="true">#</a> 下载镜像文件</h2><p>当前redis稳定版为7.0，为保证配置稳定性，推荐添加上Tags信息，拉取固定版本</p><p>本次我是用的是7.0.8版本</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> pull redis:7.0.8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://jihulab.com/byzh123/images/-/raw/images/pictures/2023/02/15_9_47_23_15_9_47_6_image-20230215094700828.png" alt="下载镜像文件" tabindex="0" loading="lazy"><figcaption>下载镜像文件</figcaption></figure><h2 id="安装redis" tabindex="-1"><a class="header-anchor" href="#安装redis" aria-hidden="true">#</a> 安装Redis</h2><h3 id="创建数据目录" tabindex="-1"><a class="header-anchor" href="#创建数据目录" aria-hidden="true">#</a> 创建数据目录</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /mydata/redis/conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="创建配置文件" tabindex="-1"><a class="header-anchor" href="#创建配置文件" aria-hidden="true">#</a> 创建配置文件</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">vim</span> /mydata/redis/conf/redis.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>并在文件中插入如下内容</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 设置redis持久化</span>
appendonly <span class="token function">yes</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="创建实例" tabindex="-1"><a class="header-anchor" href="#创建实例" aria-hidden="true">#</a> 创建实例</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-p</span> <span class="token number">6379</span>:6379 <span class="token parameter variable">--name</span> redis <span class="token parameter variable">-v</span> /mydata/redis/data:/data <span class="token parameter variable">-v</span> /mydata/redis/conf/redis.conf:/etc/redis/redis.conf <span class="token parameter variable">-d</span> redis:7.0.8 redis-server /etc/redis/redis.conf
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://jihulab.com/byzh123/images/-/raw/images/pictures/2023/02/15_10_8_19_image-20230215100819372.png" alt="创建实例" tabindex="0" loading="lazy"><figcaption>创建实例</figcaption></figure><div class="hint-container info"><p class="hint-container-title">提示:</p><p>运行命令失败的 先通过 <code>docker ps -a</code> redis 的id ,</p><p>然后使用<code>docker rm [id]</code>停掉之后再执行以上的命令</p></div><h3 id="设置随docker自启" tabindex="-1"><a class="header-anchor" href="#设置随docker自启" aria-hidden="true">#</a> 设置随Docker自启</h3><p>执行如下命令</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> update redis <span class="token parameter variable">--restart</span><span class="token operator">=</span>always
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://jihulab.com/byzh123/images/-/raw/images/pictures/2023/02/15_10_21_17_image-20230215102117837.png" alt="自启动" tabindex="0" loading="lazy"><figcaption>自启动</figcaption></figure><h2 id="连接测试" tabindex="-1"><a class="header-anchor" href="#连接测试" aria-hidden="true">#</a> 连接测试</h2><h3 id="查看启动情况" tabindex="-1"><a class="header-anchor" href="#查看启动情况" aria-hidden="true">#</a> 查看启动情况</h3><p>使用<code>docker ps</code> 命令查看启动情况</p><figure><img src="https://jihulab.com/byzh123/images/-/raw/images/pictures/2023/02/15_10_11_54_image-20230215101154132.png" alt="image-20230215101154132" tabindex="0" loading="lazy"><figcaption>image-20230215101154132</figcaption></figure><h3 id="redis-cli-连接" tabindex="-1"><a class="header-anchor" href="#redis-cli-连接" aria-hidden="true">#</a> redis-cli 连接</h3><p>执行如下命令 使用redis-cli 连接</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>docker exec -it redis redis-cli
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果正常执行如下命令表示Redis安装正常</p><figure><img src="https://jihulab.com/byzh123/images/-/raw/images/pictures/2023/02/15_10_17_5_image-20230215101705404.png" alt="连接测试" tabindex="0" loading="lazy"><figcaption>连接测试</figcaption></figure><h2 id="redis的配置" tabindex="-1"><a class="header-anchor" href="#redis的配置" aria-hidden="true">#</a> Redis的配置</h2><h3 id="设置redis密码" tabindex="-1"><a class="header-anchor" href="#设置redis密码" aria-hidden="true">#</a> 设置Redis密码</h3><p>修改配置文件，增加<code>requirepass</code>字段</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code># 设置Redis连接密码
requirepass root
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="设置允许远程连接" tabindex="-1"><a class="header-anchor" href="#设置允许远程连接" aria-hidden="true">#</a> 设置允许远程连接</h3><p>修改配置文件，修改如下内容</p><div class="language-properties line-numbers-mode" data-ext="properties"><pre class="language-properties"><code><span class="token comment">#注释掉或配置成0.0.0.0表示任意IP均可访问。(如果是 windows 系统，则必须显示设置  bind 0.0.0.0，而不能注释)</span>
<span class="token key attr-name">bind</span> <span class="token value attr-value">0.0.0.0  </span>
<span class="token comment">#设置为 no，关闭保护模式</span>
protected-mode：no
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>重启Redis服务</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> restart redis
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,38),r=[d];function c(t,l){return a(),s("div",null,r)}const p=e(n,[["render",c],["__file","1676344869409.html.vue"]]);export{p as default};
