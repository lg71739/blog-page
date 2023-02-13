import{_ as e,Z as a,$ as n,a4 as s}from"./framework-c23f4b14.js";const i={},d=s(`<h2 id="卸载旧版本" tabindex="-1"><a class="header-anchor" href="#卸载旧版本" aria-hidden="true">#</a> 卸载旧版本</h2><p>较旧的 Docker 版本称为 docker 或 docker-engine 。如果已安装这些程序，请卸载它们以及相关的依赖项。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum remove <span class="token function">docker</span> <span class="token punctuation">\\</span>
         docker-client <span class="token punctuation">\\</span>
         docker-client-latest <span class="token punctuation">\\</span>
         docker-common <span class="token punctuation">\\</span>
         docker-latest <span class="token punctuation">\\</span>
         docker-latest-logrotate <span class="token punctuation">\\</span>
         docker-logrotate <span class="token punctuation">\\</span>
         docker-engine
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://jihulab.com/byzh123/images/raw/images/pictures/2023/02/13_20_10_47_202302132010281.png" alt="卸载旧版本" tabindex="0" loading="lazy"><figcaption>卸载旧版本</figcaption></figure><h2 id="安装-依赖" tabindex="-1"><a class="header-anchor" href="#安装-依赖" aria-hidden="true">#</a> 安装 依赖</h2><p>安装所需的软件包。yum-utils 提供了 yum-config-manager ，并且 device mapper 存储驱动程序需要 device-mapper-persistent-data 和 lvm2。</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> yum <span class="token function">install</span> <span class="token parameter variable">-y</span> yum-utils <span class="token punctuation">\\</span>
  device-mapper-persistent-data <span class="token punctuation">\\</span>
  lvm2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="https://jihulab.com/byzh123/images/raw/images/pictures/2023/02/13_20_11_48_202302132011971.png" alt="安装依赖" tabindex="0" loading="lazy"><figcaption>安装依赖</figcaption></figure><h2 id="设置仓库安装位置" tabindex="-1"><a class="header-anchor" href="#设置仓库安装位置" aria-hidden="true">#</a> 设置仓库安装位置</h2><p>源地址可以选择官方地址和国内地址，推荐使用国内的地址，速度较快。</p><ul><li><p>使用官方源地址**（比较慢）**</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> yum-config-manager <span class="token punctuation">\\</span>
    --add-repo <span class="token punctuation">\\</span>
    https://download.docker.com/linux/centos/docker-ce.repo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>阿里云</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> yum-config-manager <span class="token punctuation">\\</span>
    --add-repo <span class="token punctuation">\\</span>
    http://mirrors.aliyun.com/docker-ce/linux/centos/docker-ce.repo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li><li><p>清华大学源</p><div class="language-she line-numbers-mode" data-ext="she"><pre class="language-she"><code>sudo yum-config-manager \\
    --add-repo \\
    https://mirrors.tuna.tsinghua.edu.cn/docker-ce/linux/centos/docker-ce.repo
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ul><figure><img src="https://jihulab.com/byzh123/images/raw/images/pictures/2023/02/13_20_16_37_202302132016154.png" alt="设置镜像源地址" tabindex="0" loading="lazy"><figcaption>设置镜像源地址</figcaption></figure><h2 id="安装-docker-engine-community" tabindex="-1"><a class="header-anchor" href="#安装-docker-engine-community" aria-hidden="true">#</a> 安装 Docker Engine-Community</h2><p>安装最新版本的最新版本的 Docker Engine-Community 和 containerd</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> yum <span class="token function">install</span> docker-ce docker-ce-cli containerd.io docker-compose-plugin
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://jihulab.com/byzh123/images/raw/images/pictures/2023/02/13_20_23_31_202302132023426.png" alt="安装 Docker Engine-Community" tabindex="0" loading="lazy"><figcaption>安装 Docker Engine-Community</figcaption></figure><h2 id="启动docker" tabindex="-1"><a class="header-anchor" href="#启动docker" aria-hidden="true">#</a> 启动docker</h2><p>输入如下命令启动docker</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> systemctl start <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><figure><img src="https://jihulab.com/byzh123/images/raw/images/pictures/2023/02/13_20_37_52_202302132037272.png" alt="启动docker" tabindex="0" loading="lazy"><figcaption>启动docker</figcaption></figure><h2 id="设置开机自启" tabindex="-1"><a class="header-anchor" href="#设置开机自启" aria-hidden="true">#</a> 设置开机自启</h2><p>设置开机自启动</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">sudo</span> systemctl start <span class="token function">docker</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="检查安装情况" tabindex="-1"><a class="header-anchor" href="#检查安装情况" aria-hidden="true">#</a> 检查安装情况</h2><p>通过如下两个命令</p><figure><img src="https://jihulab.com/byzh123/images/raw/images/pictures/2023/02/13_20_50_7_202302132050248.png" alt="检查安装情况" tabindex="0" loading="lazy"><figcaption>检查安装情况</figcaption></figure><h2 id="卸载docker" tabindex="-1"><a class="header-anchor" href="#卸载docker" aria-hidden="true">#</a> 卸载Docker</h2><p>删除安装包：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>yum remove docker-ce
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>删除镜像、容器、配置文件等内容：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">rm</span> <span class="token parameter variable">-rf</span> /var/lib/docker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,31),c=[d];function r(l,t){return a(),n("div",null,c)}const u=e(i,[["render",r],["__file","le2v34jm0u55o1i0j9po.html.vue"]]);export{u as default};
