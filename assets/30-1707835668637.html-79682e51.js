import{_ as g,r as t,o as c,c as r,d as i,e as a,b as o,f as n}from"./app-a55ff2b5.js";const p={},s=i("h1",{id:"码云",tabindex:"-1"},[i("a",{class:"header-anchor",href:"#码云","aria-hidden":"true"},"#"),a(" 码云")],-1),d=i("p",null,"众所周知，GitHub 服务器在国外，使用 GitHub 作为项目托管网站，如果网速不好的话，严重影响使用体验，甚至会出现登录不上的情况。针对这个情况，大家也可以使用国内的项目托管网站-码云",-1),m={href:"https://gitee.com/",target:"_blank",rel:"noopener noreferrer"},h=n('<h2 id="创建远程库" tabindex="-1"><a class="header-anchor" href="#创建远程库" aria-hidden="true">#</a> 创建远程库</h2><figure><img src="https://jihulab.com/byzh123/images/-/raw/images/pictures/2024/02/13_23_27_48_202402132327503.png" alt="image-20210919141130444" tabindex="0" loading="lazy"><figcaption>image-20210919141130444</figcaption></figure><p>输入仓库名称，路径会自动与仓库名称保持一致，一般不改。选择开源，点击<code>创建</code>即可</p><figure><img src="https://jihulab.com/byzh123/images/-/raw/images/pictures/2024/02/13_23_27_58_202402132327620.png" alt="image-20210919141934714" tabindex="0" loading="lazy"><figcaption>image-20210919141934714</figcaption></figure><p>创建完毕会自动跳转到该项目界面，复制下列地址以备用</p><figure><img src="https://jihulab.com/byzh123/images/-/raw/images/pictures/2024/02/13_23_28_12_202402132328535.png" alt="image-20210919142145264" tabindex="0" loading="lazy"><figcaption>image-20210919142145264</figcaption></figure><h2 id="删除远程库" tabindex="-1"><a class="header-anchor" href="#删除远程库" aria-hidden="true">#</a> 删除远程库</h2><p>打开项目<code>管理</code>—<code>仓库设置</code>—<code>删除仓库</code>，点击<code>删除仓库</code></p><figure><img src="https://jihulab.com/byzh123/images/-/raw/images/pictures/2024/02/13_23_28_22_202402132328774.png" alt="image-20210919141337765" tabindex="0" loading="lazy"><figcaption>image-20210919141337765</figcaption></figure><p>输入确认信息，点击<code>确认删除</code></p><figure><img src="https://jihulab.com/byzh123/images/-/raw/images/pictures/2024/02/13_23_28_32_202402132328936.png" alt="image-20210919141405164" tabindex="0" loading="lazy"><figcaption>image-20210919141405164</figcaption></figure><p>输入密码，进行二次确认，点击<code>验证</code>，即可删除成功</p><figure><img src="https://jihulab.com/byzh123/images/-/raw/images/pictures/2024/02/13_23_28_41_202402132328127.png" alt="image-20210919141636996" tabindex="0" loading="lazy"><figcaption>image-20210919141636996</figcaption></figure><h2 id="idea-集成码云" tabindex="-1"><a class="header-anchor" href="#idea-集成码云" aria-hidden="true">#</a> IDEA 集成码云</h2><h3 id="安装插件" tabindex="-1"><a class="header-anchor" href="#安装插件" aria-hidden="true">#</a> 安装插件</h3><p>首先安装 Gitee 的插件</p><figure><img src="https://jihulab.com/byzh123/images/-/raw/images/pictures/2024/02/13_23_28_50_202402132328311.png" alt="image-20210919142853337" tabindex="0" loading="lazy"><figcaption>image-20210919142853337</figcaption></figure><p>安装完成之后，点击<code>Apply</code>会刷新<code>Settings</code>选项，打开<code>Version Control</code>，多了一个<code>Gitee</code>选项</p><p>这里同样有两种方式，可以通过账号密码登录，也可以通过<code>Token</code>登录，操作同 IDEA 集成 <code>GitHub</code></p><figure><img src="https://jihulab.com/byzh123/images/-/raw/images/pictures/2024/02/13_23_29_0_202402132329077.png" alt="image-20210919143042585" tabindex="0" loading="lazy"><figcaption>image-20210919143042585</figcaption></figure><p>输入完账号密码，点击<code>Log In</code>即可</p><figure><img src="https://jihulab.com/byzh123/images/-/raw/images/pictures/2024/02/13_23_29_5_202402132329614.png" alt="image-20210919143416998" tabindex="0" loading="lazy"><figcaption>image-20210919143416998</figcaption></figure><p>如果输入无误，便会在界面中展示账号信息，点击<code>OK</code>保存</p><figure><img src="https://jihulab.com/byzh123/images/-/raw/images/pictures/2024/02/13_23_29_14_202402132329590.png" alt="image-20210919143526220" tabindex="0" loading="lazy"><figcaption>image-20210919143526220</figcaption></figure><h3 id="分享工程到-gitee" tabindex="-1"><a class="header-anchor" href="#分享工程到-gitee" aria-hidden="true">#</a> 分享工程到 Gitee</h3><figure><img src="https://jihulab.com/byzh123/images/-/raw/images/pictures/2024/02/13_23_30_49_202402132330300.png" alt="image-20210919143925298" tabindex="0" loading="lazy"><figcaption>image-20210919143925298</figcaption></figure><p>如果远程仓库已存在该名称的项目，则会提示存在同名仓库无法删除，需要先删除刚刚我们创建的<code>git-test</code>仓库</p><figure><img src="https://jihulab.com/byzh123/images/-/raw/images/pictures/2024/02/13_23_30_58_202402132330934.png" alt="image-20210919144324387" tabindex="0" loading="lazy"><figcaption>image-20210919144324387</figcaption></figure><p>提示分享成功</p><figure><img src="https://jihulab.com/byzh123/images/-/raw/images/pictures/2024/02/13_23_31_7_202402132331634.png" alt="image-20210919144509857" tabindex="0" loading="lazy"><figcaption>image-20210919144509857</figcaption></figure><p>查看 Gitee，确认仓库创建成功并且推送成功</p><figure><img src="https://jihulab.com/byzh123/images/-/raw/images/pictures/2024/02/13_23_31_9_202402132331645.png" alt="image-20210919144634126" tabindex="0" loading="lazy"><figcaption>image-20210919144634126</figcaption></figure><h3 id="推送本地分支到远程库" tabindex="-1"><a class="header-anchor" href="#推送本地分支到远程库" aria-hidden="true">#</a> 推送本地分支到远程库</h3><p>修改内容，可以在左侧导航栏<code>Commit</code>直接进行提交并推送</p><figure><img src="https://jihulab.com/byzh123/images/-/raw/images/pictures/2024/02/13_23_31_17_202402132331144.png" alt="image-20210919145056974" tabindex="0" loading="lazy"><figcaption>image-20210919145056974</figcaption></figure><p>同样可以自定义远程地址别名，点击<code>Push</code>进行推送</p><figure><img src="https://jihulab.com/byzh123/images/-/raw/images/pictures/2024/02/13_23_31_26_202402132331027.png" alt="image-20210919145252155" tabindex="0" loading="lazy"><figcaption>image-20210919145252155</figcaption></figure><p>查看 Gitee 仓库历史版本记录，确认推送成功</p><figure><img src="https://jihulab.com/byzh123/images/-/raw/images/pictures/2024/02/13_23_31_34_202402132331968.png" alt="image-20210919145404382" tabindex="0" loading="lazy"><figcaption>image-20210919145404382</figcaption></figure><h3 id="拉取远程库到本地" tabindex="-1"><a class="header-anchor" href="#拉取远程库到本地" aria-hidden="true">#</a> 拉取远程库到本地</h3><p>直接在 Gitee 上修改<code>Test.java</code>内容后，IDEA 中进行<code>Pull</code>即可</p><figure><img src="https://jihulab.com/byzh123/images/-/raw/images/pictures/2024/02/13_23_31_42_202402132331584.png" alt="image-20210919145655337" tabindex="0" loading="lazy"><figcaption>image-20210919145655337</figcaption></figure><p>选择我们指定的别名和分支，点击<code>Pull</code>进行拉取</p><figure><img src="https://jihulab.com/byzh123/images/-/raw/images/pictures/2024/02/13_23_31_50_202402132331699.png" alt="image-20210919145758217" tabindex="0" loading="lazy"><figcaption>image-20210919145758217</figcaption></figure><p>查看<code>Test.java</code>即历史版本发生了变化，说明拉取成功</p><figure><img src="https://jihulab.com/byzh123/images/-/raw/images/pictures/2024/02/13_23_31_57_202402132331373.png" alt="image-20210919145913298" tabindex="0" loading="lazy"><figcaption>image-20210919145913298</figcaption></figure><h3 id="克隆远程库到本地" tabindex="-1"><a class="header-anchor" href="#克隆远程库到本地" aria-hidden="true">#</a> 克隆远程库到本地</h3><figure><img src="https://jihulab.com/byzh123/images/-/raw/images/pictures/2024/02/13_23_32_4_202402132332825.png" alt="image-20210919150610990" tabindex="0" loading="lazy"><figcaption>image-20210919150610990</figcaption></figure><h2 id="码云复制-github-项目" tabindex="-1"><a class="header-anchor" href="#码云复制-github-项目" aria-hidden="true">#</a> 码云复制 GitHub 项目</h2><h3 id="导入仓库" tabindex="-1"><a class="header-anchor" href="#导入仓库" aria-hidden="true">#</a> <strong>导入仓库</strong></h3><p>点击<code>从 GitHub / GitLab 导入仓库</code></p><figure><img src="https://jihulab.com/byzh123/images/-/raw/images/pictures/2024/02/13_23_32_11_202402132332208.png" alt="image-20210919151012524" tabindex="0" loading="lazy"><figcaption>image-20210919151012524</figcaption></figure><p>输入 GitHub 仓库地址，Gitee 会自动帮我们反填仓库名称及路径信息，修改为开源或私有，点击<code>导入</code></p><figure><img src="https://jihulab.com/byzh123/images/-/raw/images/pictures/2024/02/13_23_32_16_202402132332440.png" alt="image-20210919151128894" tabindex="0" loading="lazy"><figcaption>image-20210919151128894</figcaption></figure><p>等待片刻</p><figure><img src="https://jihulab.com/byzh123/images/-/raw/images/pictures/2024/02/13_23_32_25_202402132332576.png" alt="image-20210919151354892" tabindex="0" loading="lazy"><figcaption>image-20210919151354892</figcaption></figure><p>导入成功</p><figure><img src="https://jihulab.com/byzh123/images/-/raw/images/pictures/2024/02/13_23_32_40_202402132332695.png" alt="image-20210919151419992" tabindex="0" loading="lazy"><figcaption>image-20210919151419992</figcaption></figure><h3 id="强制同步" tabindex="-1"><a class="header-anchor" href="#强制同步" aria-hidden="true">#</a> <strong>强制同步</strong></h3><p>如果后续该工程在 GitHub 上进行了修改，可以直接点击，刷新图标进行强制同步</p><figure><img src="https://jihulab.com/byzh123/images/-/raw/images/pictures/2024/02/13_23_32_54_202402132332328.png" alt="image-20210919151705859" tabindex="0" loading="lazy"><figcaption>image-20210919151705859</figcaption></figure><p>需要注意的是强制更新会覆盖当前仓库，这里点击<code>确认</code>即可</p><figure><img src="https://jihulab.com/byzh123/images/-/raw/images/pictures/2024/02/13_23_33_0_202402132333017.png" alt="image-20210919151743598" tabindex="0" loading="lazy"><figcaption>image-20210919151743598</figcaption></figure><p>查看历史版本记录，确认同步成功</p><figure><img src="https://jihulab.com/byzh123/images/-/raw/images/pictures/2024/02/13_23_33_8_202402132333338.png" alt="image-20210919151954815" tabindex="0" loading="lazy"><figcaption>image-20210919151954815</figcaption></figure>',65);function l(u,_){const e=t("ExternalLinkIcon");return c(),r("div",null,[s,d,i("p",null,[a("码云是开源中国推出的基于 Git 的代码托管服务中心，网址是 "),i("a",m,[a("https://gitee.com/"),o(e)]),a("，使用方式跟 GitHub 一样，而且它还是一个中文网站，如果你英文不是很好它是最好的选择")]),h])}const b=g(p,[["render",l],["__file","30-1707835668637.html.vue"]]);export{b as default};
