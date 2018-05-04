webpackJsonp([0xa6f6d2d24813],{1964:function(a,e){a.exports={data:{postBySlug:{html:'<a href="https://www.docker.com/" target="_blank">\n  <img alt="graphql logo" src="docker-logo.png" width="80%" style="display:block;margin:auto;"/>\n</a>\n<h3 id="tldr"><a href="#tldr" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>tl;dr</h3>\n<ol>\n<li>Get <a href="https://www.docker.com/community-edition">Docker Community Edtion</a>, it\'s free and awesome  ❤️🐳 </li>\n<li>Get <a href="https://docs.docker.com/compose/install/">Docker Compose</a> which is an awesome tool to manage Docker containers, written in Python</li>\n<li>Open a terminal 💻  and navigate to the <a href="/oracledb-graphql-demo/https:/github.com/unofficialoraclecloudhub/oracledb-graphql-demo/tree/master/Docker">Docker</a> folder</li>\n<li>Run the following commands. Building the images might take a minute</li>\n</ol>\n<div class="gatsby-highlight">\n      <pre class="language-docker"><code class="language-docker">docker<span class="token punctuation">-</span>compose build\ndocker<span class="token punctuation">-</span>compose up</code></pre>\n      </div>\n<p>**Oracle Employees on VPN and others behind HTTP Proxies<br>\nSet the HTTP_PROXY <code class="language-text">env</code> variable &#x26; use the bash script to build your containers</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash"><span class="token function">bash</span> build-images.sh</code></pre>\n      </div>\n<p>For each of the commands below you should see something like the following...</p>\n<h5 id="code-classlanguage-textdocker-compose-buildcode"><a href="#code-classlanguage-textdocker-compose-buildcode" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code class="language-text">docker-compose build</code></h5>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash">sblack4@BATTLESTATION ~/Git/oracledb-graphql-demo/Docker <span class="token punctuation">(</span>master<span class="token punctuation">)</span>\nλ docker-compose build\ndb uses an image, skipping\nBuilding web\nStep 1/9 <span class="token keyword">:</span> FROM store/oracle/database-instantclient:12.2.0.1\n ---<span class="token operator">></span> 916033cf06bf\nStep 2/9 <span class="token keyword">:</span> RUN yum <span class="token function">install</span> -y <span class="token function">wget</span>\n ---<span class="token operator">></span> Using cache\n ---<span class="token operator">></span> 265cd36f6b66\nStep 3/9 <span class="token keyword">:</span> RUN <span class="token function">cd</span> opt\n ---<span class="token operator">></span> Using cache\n ---<span class="token operator">></span> 9546c4cab572\nStep 4/9 <span class="token keyword">:</span> COPY node* <span class="token keyword">.</span>\n ---<span class="token operator">></span> Using cache\n ---<span class="token operator">></span> 7fc8bd6ebd00\nStep 5/9 <span class="token keyword">:</span> RUN yum -y <span class="token function">install</span> tar* gcc* gcc-c++ unzip libaio* <span class="token function">make</span> <span class="token function">curl</span> dos2unix     <span class="token operator">&amp;&amp;</span> <span class="token function">tar</span> -xJf node-v6.11.1-linux-x64.tar.xz -C /usr\n/local --strip-components<span class="token operator">=</span>1 --no-same-owner     <span class="token operator">&amp;&amp;</span> yum clean all\n ---<span class="token operator">></span> Using cache\n ---<span class="token operator">></span> 68ab58615e36\nStep 6/9 <span class="token keyword">:</span> ENV PATH<span class="token operator">=</span>/opt/node-v6.11.1-linux-x64/bin:<span class="token variable">$PATH</span>\n ---<span class="token operator">></span> Using cache\n ---<span class="token operator">></span> 2b69553b2c97\nStep 7/9 <span class="token keyword">:</span> ENV NODE_PATH<span class="token operator">=</span>/opt/node-v6.11.1-linux-x64/lib/node_modules/\n ---<span class="token operator">></span> Using cache\n ---<span class="token operator">></span> 9a8f739c0e0f\nStep 8/9 <span class="token keyword">:</span> ADD entrypoint.sh /entrypoint.sh\n ---<span class="token operator">></span> Using cache\n ---<span class="token operator">></span> 34c14bc52070\nStep 9/9 <span class="token keyword">:</span> EXPOSE 3000\n ---<span class="token operator">></span> Using cache\n ---<span class="token operator">></span> 71106b5fa1a1\nSuccessfully built 71106b5fa1a1\nSuccessfully tagged sblack4/node-oracledb:latest</code></pre>\n      </div>\n<h5 id="code-classlanguage-textdocker-compose-upcode"><a href="#code-classlanguage-textdocker-compose-upcode" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a><code class="language-text">docker-compose up</code></h5>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash">sblack4@BATTLESTATION ~/Git/oracledb-graphql-demo/Docker <span class="token punctuation">(</span>master<span class="token punctuation">)</span>\nλ docker-compose up\nRecreating docker_db_1 <span class="token punctuation">..</span>. <span class="token keyword">done</span>\nRecreating docker_web_1 <span class="token punctuation">..</span>. <span class="token keyword">done</span>\nAttaching to docker_db_1, docker_web_1\ndb_1   <span class="token operator">|</span> Database not initialized. Initializing database.\ndb_1   <span class="token operator">|</span> Starting tnslsnr\nweb_1  <span class="token operator">|</span> --- CD SRC ---\nweb_1  <span class="token operator">|</span> --- NPM INSTALL ---\ndb_1   <span class="token operator">|</span> Copying database files\ndb_1   <span class="token operator">|</span> 1% complete\ndb_1   <span class="token operator">|</span> 3% complete\n<span class="token punctuation">..</span>.\n<span class="token punctuation">..</span>.\n<span class="token punctuation">..</span>.\nSuccessfully built 47e6d21c28b4\nSuccessfully tagged sblack4/node-oracledb:latest\nImage <span class="token keyword">for</span> <span class="token function">service</span> web was built because it did not already exist. To rebuild this image you must use <span class="token variable"><span class="token variable">`</span>docker-compose build<span class="token variable">`</span></span> or <span class="token variable"><span class="token variable">`</span>docker-compose up --build<span class="token variable">`</span></span><span class="token keyword">.</span>\ndocker_db_1 is up-to-date\nCreating docker_web_1 <span class="token punctuation">..</span>. <span class="token keyword">done</span></code></pre>\n      </div>\n<p>Running <code class="language-text">docker ps</code> should show us two containers running </p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code class="language-bash">sblack4@BATTLESTATION ~/Git/oracledb-graphql-demo <span class="token punctuation">(</span>master<span class="token punctuation">)</span>\nλ docker <span class="token function">ps</span>\nCONTAINER ID        IMAGE                   COMMAND                 CREATED             STATUS              PORTS                              NAMES\nfd29290b8123        sblack4/node-oracledb   <span class="token string">"bash /entrypoint.sh"</span>   2 hours ago         Up 2 hours          0.0.0.0:3000-<span class="token operator">></span>3000/tcp             docker_web_1\n124e30988ef1        sath89/oracle-12c       <span class="token string">"bash /entrypoint.sh"</span>   4 hours ago         Up 4 hours          0.0.0.0:1521-<span class="token operator">></span>1521/tcp, 8080/tcp   docker_db_1</code></pre>\n      </div>\n<h3 id="after-youve-got-it-running"><a href="#after-youve-got-it-running" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>After you\'ve got it running</h3>\n<p>You\'re ready! </p>\n<p>Head to <a href="http://localhost:3000/graphql">localhost:3000/graphql</a> to explore compare SQL and GraqhQL!</p>\n<img src="graphisql-oracle-app.png" width="100%" style="display:block;margin:auto;"/>\n<p>Connect <a href="http://www.oracle.com/technetwork/developer-tools/sql-developer/overview/index.html">SQL Developer</a> to\nthe Oracle Database using the below credentials. The password for <code class="language-text">sys</code> and <code class="language-text">graphql</code> is <code class="language-text">oracle</code></p>\n<p><img src="graphql-sql-developer.PNG" alt="graphisql ui"></p>\n<p>Head to <a href="about-graph-ql">About GraphQL</a> to start exploring GraphQL on Oracle Database!</p>',timeToRead:3,excerpt:"tl;dr Get  Docker Community Edtion , it's free and awesome  ❤️🐳  Get  Docker Compose  which is an awesome tool to manage Docker containers…",frontmatter:{title:"Running with Docker"}},tableOfContents:{chapters:[{title:"Overview",entries:[{entry:{childMarkdownRemark:{fields:{slug:"/overview"},frontmatter:{title:"Overview"}}}}]},{title:"Running the Demo",entries:[{entry:{childMarkdownRemark:{fields:{slug:"/running-the-demo"},frontmatter:{title:"Running the Demo"}}}},{entry:{childMarkdownRemark:{fields:{slug:"/running-in-the-cloud"},frontmatter:{title:"Running in the Cloud"}}}},{entry:{childMarkdownRemark:{fields:{slug:"/running-with-docker"},frontmatter:{title:"Running with Docker"}}}}]},{title:"GraphQL & Oracle DB?",entries:[{entry:{childMarkdownRemark:{fields:{slug:"/about-graph-ql"},frontmatter:{title:"About GraphQL"}}}},{entry:{childMarkdownRemark:{fields:{slug:"/about-oracle-db"},frontmatter:{title:"About Oracle DB"}}}},{entry:{childMarkdownRemark:{fields:{slug:"/graph-ql-rest-sql"},frontmatter:{title:"GraphQL REST & SQL"}}}}]},{title:"Learn More",entries:[{entry:{childMarkdownRemark:{fields:{slug:"/learn-more"},frontmatter:{title:"Learn More"}}}}]},{title:"Summary",entries:[{entry:{childMarkdownRemark:{fields:{slug:"/summary"},frontmatter:{title:"Summary"}}}},{entry:{childMarkdownRemark:{fields:{slug:"/references"},frontmatter:{title:"References"}}}}]}]}},pathContext:{slug:"/running-with-docker"}}}});
//# sourceMappingURL=path---running-with-docker-5659dd56c24490634fbb.js.map