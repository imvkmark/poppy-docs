import{_ as t,r as p,o as i,c as o,d as n,e as s,a as c,b as a}from"./app.d1bf96cf.js";const l={},r=a(`<h1 id="\u7CFB\u7EDF" tabindex="-1"><a class="header-anchor" href="#\u7CFB\u7EDF" aria-hidden="true">#</a> \u7CFB\u7EDF</h1><h2 id="\u5B9A\u4E49" tabindex="-1"><a class="header-anchor" href="#\u5B9A\u4E49" aria-hidden="true">#</a> \u5B9A\u4E49</h2><h2 id="\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u64CD\u4F5C" aria-hidden="true">#</a> \u64CD\u4F5C</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># \u9879\u76EE\u521D\u59CB\u5316
$ php artisan py-system:install

# \u7528\u6237\u90E8\u5206
$ php artisan py-system:user {slug}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u7528\u6237" tabindex="-1"><a class="header-anchor" href="#\u7528\u6237" aria-hidden="true">#</a> \u7528\u6237</h2><p>\u672C\u7CFB\u7EDF\u57FA\u4E8E\u89D2\u8272\u7684\u6743\u9650\u8BBF\u95EE\u63A7\u5236\uFF08Role-Based Access Control\uFF09</p><h3 id="\u7528\u6237\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u7528\u6237\u7C7B\u578B" aria-hidden="true">#</a> \u7528\u6237\u7C7B\u578B</h3><p>\u6839\u636E\u4F7F\u7528\u5206\u4E3A\u4E09\u79CD\u7528\u6237\u7C7B\u578B(\u9ED8\u8BA4)</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>user            # \u524D\u53F0\u7528\u6237
develop         # \u5F00\u53D1\u8005\u7528\u6237
backend         # \u540E\u53F0\u7528\u6237
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5BF9\u4E8E\u7528\u6237\u7684\u7C7B\u578B\u533A\u5206\u6211\u4EEC\u4F7F\u7528 Header \u6765\u8FDB\u884C\u533A\u5206, Header \u7684\u540D\u79F0\u662F <code>x-type</code> \u6765\u8FDB\u884C\u533A\u5206, \u533A\u5206\u7684\u5C42\u7EA7\u4E3A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>1. \u4E2D\u95F4\u4EF6\u53C2\u6570 [web, backend, develop, jwt, jwt_backend, jwt_web, jwt_develop]
2. Header\u53C2\u6570 [user/backend/develop]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u53C2\u6570\u7684\u7C7B\u578B\u4FBF\u662F\u7528\u6237\u7684\u7C7B\u578B, \u8FD9\u91CC\u7684\u6570\u636E\u548C guard\u8D77\u5230\u6620\u5C04\u5173\u7CFB, \u4F46\u65E0\u9700\u4E00\u81F4</p><p>\u6839\u636E\u4F7F\u7528\u5230\u7684\u7528\u6237\u7684\u7C7B\u578B\u6211\u4EEC\u5E94\u5F53\u5206\u4E3A\u8FD9\u51E0\u9879</p><p>Guard : web,backend,develop Type : user, backend, develop</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u7528\u6237 - api (jwt) \u9A71\u52A8
\u7528\u6237 - web \u9A71\u52A8
\u5F00\u53D1 - web \u9A71\u52A8
\u540E\u7AEF - web \u9A71\u52A8
\u540E\u7AEF - api (jwt) \u9A71\u52A8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6BCF\u4E00\u79CD\u7528\u6237\u5B9A\u4E49\u7684\u89D2\u8272\u5206\u4E3A\u4E09\u79CD</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>root     : \u540E\u53F0\u8D85\u7EA7\u7BA1\u7406\u5458
user     : \u524D\u53F0\u666E\u901A\u7528\u6237
develop  : \u5F00\u53D1\u8005
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u5BC6\u7801\u52A0\u5BC6\u65B9\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u5BC6\u7801\u52A0\u5BC6\u65B9\u5F0F" aria-hidden="true">#</a> \u5BC6\u7801\u52A0\u5BC6\u65B9\u5F0F</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$password     : \u539F\u59CB\u5BC6\u7801
$reg_datetime : \u6CE8\u518C\u65F6\u95F4(datetime) \u7C7B\u578B
$randomKey    : \u516D\u4F4D\u968F\u673A\u503C
md5(sha1($password . $reg_datetime) . $randomKey);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u901A\u884C\u8BC1\u7EA6\u5B9A" tabindex="-1"><a class="header-anchor" href="#\u901A\u884C\u8BC1\u7EA6\u5B9A" aria-hidden="true">#</a> \u901A\u884C\u8BC1\u7EA6\u5B9A</h3><table><thead><tr><th>id</th><th>int(10)</th><th></th></tr></thead><tbody><tr><td>username</td><td>varchar(45)</td><td>\u5B57\u6BCD\u6570\u5B57\u4E0B\u5212\u7EBF\u4E2D\u6587, \u5192\u53F7(\u82F1\u6587,\u5B50\u7528\u6237\u4F7F\u7528)</td></tr><tr><td>mobile</td><td>varchar(45)</td><td>\u624B\u673A\u53F7, \u683C\u5F0F 86-15555555555, \u56FD\u522B\u624B\u673A\u53F7</td></tr><tr><td>email</td><td>varchar(50)</td><td>\u90AE\u7BB1</td></tr></tbody></table><p>\u56E0\u4E3A\u4EE5\u4E0A\u8FD9\u4E9B\u53EF\u4EE5\u4F5C\u4E3A\u901A\u884C\u8BC1, \u6240\u4EE5\u5FC5\u987B\u662F\u7ECF\u8FC7\u8BA4\u8BC1\u7684\u624D\u53EF\u4EE5\u5199\u5165\u8FD9\u4E2A\u6570\u636E\u8868, \u5426\u5219\u65E0\u6CD5\u8FDB\u884C\u5199\u5165</p><h3 id="\u5E73\u53F0" tabindex="-1"><a class="header-anchor" href="#\u5E73\u53F0" aria-hidden="true">#</a> \u5E73\u53F0</h3><p>\u5E73\u53F0\u9075\u5FAA\u6807\u51C6\u5316, x-id: \u5B9A\u4E49\u4E3A\u8BBE\u5907ID</p><h2 id="\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E" aria-hidden="true">#</a> \u914D\u7F6E</h2><blockquote><p>\u672C\u6A21\u5757\u7684\u914D\u7F6E\u662F\u6CE8\u5165\u5230 <code>poppy.php</code> \u6587\u4EF6\u4E2D, \u4EE5\u4E0B\u7684\u6240\u6709\u914D\u7F6E\u5747\u53EF\u914D\u7F6E key \u662F <code>poppy.system</code></p></blockquote><h3 id="cross-origin" tabindex="-1"><a class="header-anchor" href="#cross-origin" aria-hidden="true">#</a> cross_origin</h3><ul><li>Type : <code>string|array</code></li><li>Default : <code>*</code></li></ul><p>\u63A5\u53E3\u8BF7\u6C42\u7684\u65F6\u5019\u53EF\u4EE5\u5BF9\u6765\u6E90\u8FDB\u884C\u8BBE\u5B9A, \u9632\u6B62 web \u7AEF\u8DE8\u57DF\u8BBF\u95EE\u8D44\u6E90, \u8FD9\u91CC\u7684\u6765\u6E90\u53EF\u4EE5\u4E3A <code>*</code> \u6216\u8005\u6570\u7EC4, \u6570\u7EC4\u4E3A\u7C7B\u4F3C\u4E8E <code>http://poppy.wulicode.com</code> \u8FD9\u79CD\u5F62\u5F0F, \u5982\u679C\u662F\u7F51\u5740\u5219\u53EA\u80FD\u586B\u5199\u4E00\u4E2A\u5B8C\u6574\u5B57\u4E32, \u6216\u8005\u591A\u4E2A\u7F51\u5740, \u4F7F\u7528 \u6570\u7EC4\u8FDB\u884C\u8BBE\u5B9A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&#39;cross_origin&#39;      =&gt; [
    &#39;http://poppy.wulicode.com&#39;
],
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="cross-headers" tabindex="-1"><a class="header-anchor" href="#cross-headers" aria-hidden="true">#</a> cross_headers</h3><ul><li>Type : <code>string</code></li><li>Default : <code>&#39;&#39;</code></li></ul><p>\u5141\u8BB8\u7684 Header, \u53EF\u4EE5\u5141\u8BB8\u8BBE\u5B9A\u524D\u7AEF\u8BBF\u95EE\u7684\u65F6\u5019\u6307\u5B9A\u7684 Header \u53EF\u4EE5\u901A\u8FC7\u6D4F\u89C8\u5668\u8DE8\u57DF\u9A8C\u8BC1, \u591A\u4E2A\u53C2\u6570\u4F7F\u7528 <code>,</code> \u5206\u9694</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>cross_headers =&gt; &#39;X-APP-VERSION&#39;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="demo" tabindex="-1"><a class="header-anchor" href="#demo" aria-hidden="true">#</a> demo</h3><ul><li>Type : <code>bool</code></li><li>Default : <code>false</code></li></ul><p>\u6F14\u793A\u6A21\u5F0F, \u5F00\u542F\u5219\u65E0\u6CD5\u4E0A\u4F20\u6587\u4EF6, \u4FEE\u6539\u5BC6\u7801</p><h3 id="upload-image-district" tabindex="-1"><a class="header-anchor" href="#upload-image-district" aria-hidden="true">#</a> upload_image_district</h3><ul><li>Type : <code>array</code></li><li>Default : <code>[&#39;default&#39; =&gt; 1920,&#39;avatar&#39; =&gt; 300,]</code></li></ul><p>\u4E0A\u4F20\u56FE\u7247\u5927\u5C0F\u9650\u5236, \u6839\u636E\u63A5\u53E3\u4E0A\u4F20\u7684 <code>image_type</code> \u7C7B\u578B\u5BF9\u56FE\u7247\u8FDB\u884C\u538B\u7F29</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>&#39;upload_image_district&#39; =&gt; [
    &#39;default&#39; =&gt; 1920,
    &#39;avatar&#39;  =&gt; 300,
    ...
],
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="csrf-except" tabindex="-1"><a class="header-anchor" href="#csrf-except" aria-hidden="true">#</a> csrf_except</h3><ul><li>Type : <code>array</code></li><li>Default : <code>[]</code></li></ul>`,43),d={href:"https://learnku.com/docs/laravel/6.x/csrf/5137",target:"_blank",rel:"noopener noreferrer"},u=a(`<h3 id="uncrypt-cookies" tabindex="-1"><a class="header-anchor" href="#uncrypt-cookies" aria-hidden="true">#</a> uncrypt_cookies</h3><ul><li>Type : <code>array</code></li><li>Default : <code>[]</code></li></ul><p>\u4F7F\u7528 laravel cookie \u8FDB\u884C\u8BBE\u5B9A\u65F6, \u8BBE\u5B9A\u7684 cookie \u4E0D\u8FDB\u884C\u52A0\u5BC6\u8F93\u51FA, \u65B9\u4FBF js \u8FDB\u884C\u8BFB\u53D6, \u5171\u4EAB\u6570\u636E</p><h3 id="password-provider" tabindex="-1"><a class="header-anchor" href="#password-provider" aria-hidden="true">#</a> password_provider</h3><ul><li>Type : <code>string</code></li><li>Default : <code>&#39;&#39;</code></li></ul><p>\u5BC6\u7801\u52A0\u8F7D\u5668, \u8FD9\u91CC\u8FD9\u91CC\u8BBE\u5B9A\u5BC6\u7801\u7B97\u6CD5, \u4E3A\u4E86\u4FDD\u62A4\u7528\u6237\u6570\u636E\u5B89\u5168, \u7279\u8BBE\u5B9A\u6B64\u65B9\u5F0F\u6765\u4FDD\u62A4\u5BC6\u7801\u8BA1\u7B97 \u9ED8\u8BA4\u662F <code>\\Poppy\\System\\Classes\\Auth\\Password\\DefaultPasswordProvider::class</code> \u66FF\u6362\u8BE5\u5B9E\u73B0\u65B9\u5F0F\u9700\u8981\u5B9E\u73B0 <code>\\Poppy\\System\\Classes\\Contracts\\PasswordContract::class</code> \u7EA6\u5B9A.</p><h3 id="user-location" tabindex="-1"><a class="header-anchor" href="#user-location" aria-hidden="true">#</a> user_location</h3><ul><li>Type : <code>string</code></li><li>Default : <code>&#39;&#39;</code></li></ul><p>\u767B\u5F55\u8DF3\u8F6C\u5730\u5740, \u4F7F\u7528\u9ED8\u8BA4\u7684 <code>web-auth</code> guard \u505A\u9A8C\u8BC1\u5219\u9700\u8981\u8BBE\u5B9A\u6B64\u914D\u7F6E, \u5F53\u9A8C\u8BC1\u5931\u8D25, \u81EA\u52A8\u8DF3\u8F6C\u5230\u6B64\u8DEF\u5F84, \u8FD9\u91CC\u662F\u8DEF\u5F84, \u4E0D\u662F\u8DEF\u7531\u5730\u5740</p><h3 id="route-hide" tabindex="-1"><a class="header-anchor" href="#route-hide" aria-hidden="true">#</a> route_hide</h3><ul><li>Type : <code>array</code></li><li>Default : <code>[]</code></li></ul><p>\u9690\u85CF\u8DEF\u7531, \u540E\u53F0\u53EF\u4EE5\u9690\u85CF\u7684\u8DEF\u7531, \u5199\u5728\u8FD9\u91CC, \u540E\u53F0\u5217\u8868\u4E0D\u4E88\u663E\u793A</p><h3 id="prefix" tabindex="-1"><a class="header-anchor" href="#prefix" aria-hidden="true">#</a> prefix</h3><ul><li>Type : <code>string</code></li><li>Default : <code>mgr-page</code></li></ul><p>\u540E\u53F0\u9ED8\u8BA4\u767B\u9646\u5165\u53E3</p><h3 id="api-enable-sign" tabindex="-1"><a class="header-anchor" href="#api-enable-sign" aria-hidden="true">#</a> api_enable_sign</h3><ul><li>Type : <code>bool</code></li><li>Default : <code>true</code></li></ul><p>\u662F\u5426\u542F\u7528 api \u7B7E\u540D\u9A8C\u8BC1</p><h3 id="api-sign-provider" tabindex="-1"><a class="header-anchor" href="#api-sign-provider" aria-hidden="true">#</a> api_sign_provider</h3><p>\u63A5\u53E3\u7B7E\u540D\u7B97\u6CD5, \u9700\u8981\u5B9E\u73B0 <code>\\Poppy\\System\\Classes\\Contracts\\ApiSignContract:class</code> \u7EA6\u5B9A</p><h3 id="payment-types" tabindex="-1"><a class="header-anchor" href="#payment-types" aria-hidden="true">#</a> (*)payment_types</h3><ul><li>Type : <code>array</code></li><li>Default : <code>[]</code></li></ul><p>[\u5F85\u5B9A]\u652F\u4ED8\u7C7B\u578B</p><h2 id="\u4F7F\u7528-progress-\u65B9\u5F0F\u6570\u636E\u8868\u66F4\u65B0" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528-progress-\u65B9\u5F0F\u6570\u636E\u8868\u66F4\u65B0" aria-hidden="true">#</a> \u4F7F\u7528 Progress \u65B9\u5F0F\u6570\u636E\u8868\u66F4\u65B0</h2><h3 id="\u8BBF\u95EE\u5730\u5740" tabindex="-1"><a class="header-anchor" href="#\u8BBF\u95EE\u5730\u5740" aria-hidden="true">#</a> \u8BBF\u95EE\u5730\u5740</h3><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>http://xxx.com/mgr-page/develop
\u70B9\u51FB \u6570\u636E\u8868\u66F4\u65B0
\u53C2\u6570
[
  &#39;method&#39; =&gt; &#39;\u6A21\u578B\u540D.\u7C7B\u540D&#39;,// \u7C7B\u540D\u591A\u4E2A\u5355\u8BCD\u901A\u8FC7 &#39;_&#39; \u62FC\u63A5
];
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="\u7C7B\u7684\u7F16\u5199" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u7684\u7F16\u5199" aria-hidden="true">#</a> \u7C7B\u7684\u7F16\u5199</h3><p>\u5728\u6BCF\u4E2A\u6A21\u5757\u4E0B progress \u6587\u4EF6\u5939\u4E0B(\u6CA1\u6709\u65B0\u5EFA)\u7F16\u5199</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token comment"># \u7C7B\u547D\u540D\u89C4\u8303 \u6570\u636E\u8868\u540D+\u6539\u52A8(\u81EA\u5B9A\u4E49)+progress</span>
<span class="token keyword">class</span> <span class="token class-name-definition class-name">OrderHunterResultProgress</span> <span class="token keyword">implements</span> <span class="token class-name">Progress</span>
<span class="token punctuation">{</span>
  <span class="token keyword">use</span> <span class="token package">FixTrait</span><span class="token punctuation">;</span>

  <span class="token doc-comment comment">/**
   * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">array</span></span> fix
   */</span>
  <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">handle</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span> <span class="token keyword return-type">array</span>
  <span class="token punctuation">{</span>
    <span class="token comment">// \u521D\u59CB\u5316 fix</span>
    <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token function">fixInit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// \u6307\u5B9A\u6BCF\u6B21\u66F4\u65B0\u7684\u6761\u6570</span>
    <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">fix</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;section&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span>
    <span class="token comment">// \u91CD\u65B0\u6E05\u7406\u6389\u7F13\u5B58</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">fix</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;cached&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">fix</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;cached&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token variable">$Db</span> <span class="token operator">=</span> <span class="token class-name static-context">OrderHunter</span><span class="token operator">::</span><span class="token function">where</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;first_result&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;!=&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">fix</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;total&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">fix</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;total&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token variable">$Db</span><span class="token operator">-&gt;</span><span class="token function">count</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">fix</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;max&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">fix</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;max&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token variable">$Db</span><span class="token operator">-&gt;</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;id&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">fix</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;min&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">fix</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;min&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token variable">$Db</span><span class="token operator">-&gt;</span><span class="token function">min</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;id&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// \u2191\u2191\u2191\u2191\u2191\u2191\u2191\u2191\u2191\u2191\u2191   \u83B7\u53D6\u53C2\u6570</span>

    <span class="token comment">// \u5269\u4F59\u6570</span>
    <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">fix</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;left&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token variable">$Db</span><span class="token operator">-&gt;</span><span class="token function">whereRaw</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;id &gt; ?&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">fix</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;start&#39;</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
      <span class="token operator">-&gt;</span><span class="token function">count</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;id&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">fix</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;lastId&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">fix</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;start&#39;</span><span class="token punctuation">]</span><span class="token punctuation">;</span>

    <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">fix</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;left&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token comment">// \u4E1A\u52A1\u903B\u8F91</span>
      <span class="token variable">$left_items</span> <span class="token operator">=</span> <span class="token class-name static-context">OrderHunter</span><span class="token operator">::</span><span class="token function">whereRaw</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;id &gt;= ?&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">fix</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;start&#39;</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token operator">-&gt;</span><span class="token function">where</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;first_result&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;!=&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;&#39;</span><span class="token punctuation">)</span>
        <span class="token operator">-&gt;</span><span class="token function">take</span><span class="token punctuation">(</span><span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">fix</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;section&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
        <span class="token operator">-&gt;</span><span class="token function">orderBy</span><span class="token punctuation">(</span><span class="token string single-quoted-string">&#39;id&#39;</span><span class="token punctuation">,</span> <span class="token string single-quoted-string">&#39;asc&#39;</span><span class="token punctuation">)</span>
        <span class="token operator">-&gt;</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;id&#39;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token keyword">foreach</span> <span class="token punctuation">(</span><span class="token variable">$left_items</span> <span class="token keyword">as</span> <span class="token variable">$item</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword static-context">self</span><span class="token operator">::</span><span class="token function">normal</span><span class="token punctuation">(</span><span class="token variable">$item</span><span class="token operator">-&gt;</span><span class="token property">id</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">fix</span><span class="token punctuation">[</span><span class="token string single-quoted-string">&#39;lastId&#39;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token variable">$item</span><span class="token operator">-&gt;</span><span class="token property">id</span> <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">return</span> <span class="token variable">$this</span><span class="token operator">-&gt;</span><span class="token property">fix</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4E2D\u95F4\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u4E2D\u95F4\u4EF6" aria-hidden="true">#</a> \u4E2D\u95F4\u4EF6</h2><h3 id="jwtauthenticate" tabindex="-1"><a class="header-anchor" href="#jwtauthenticate" aria-hidden="true">#</a> JwtAuthenticate</h3><p>\u4F5C\u7528</p><ul><li>\u6821\u9A8C token \u662F\u5426\u5408\u6CD5(\u4E0D\u6D89\u53CA\u5230\u6570\u636E\u5E93\u67E5\u8BE2, \u6821\u9A8C Token \u5408\u6CD5\u6027)</li><li>\u6821\u9A8C \u7528\u6237\u5BC6\u7801\u662F\u5426\u7B26\u5408, \u5728\u62FF\u5230\u6388\u6743\u4E4B\u540E, \u5BF9\u6BD4 salt, \u9A8C\u8BC1\u662F\u5426\u5408\u6CD5</li></ul><p>\u6D41\u7A0B\u53C2\u8003</p><p><img src="https://file.wulicode.com/note/2021/11-09/11-46-46495.png" alt=""></p><h3 id="ban" tabindex="-1"><a class="header-anchor" href="#ban" aria-hidden="true">#</a> Ban</h3><p>\u5BF9\u7528\u6237\u8FDB\u884CIP/\u8BBE\u5907\u7684\u5C01\u7981</p><p>\u5982\u679C\u662F\u524D\u53F0\u7528\u6237, \u653E\u5230\u6240\u6709\u8BF7\u6C42\u4E4B\u524D \u5982\u679C\u662F\u540E\u53F0\u7528\u6237, \u653E\u5230\u6240\u6709\u8BF7\u6C42\u4E4B\u540E(\u9700\u8981\u653E\u8FC7\u7BA1\u7406\u5458)</p>`,38);function k(v,h){const e=p("ExternalLinkIcon");return i(),o("div",null,[r,n("p",null,[s("\u652F\u6301 Laravel \u7684\u8DEF\u7531\u8FC7\u6EE4\u7684\u65B9\u5F0F\u6765\u79FB\u9664\u5339\u914D\u7684\u8DEF\u7531\u4E0D\u8FDB\u884C csrf \u9A8C\u8BC1. \u53C2\u8003 : "),n("a",d,[s("CSRF \u4FDD\u62A4"),c(e)])]),u])}const m=t(l,[["render",k],["__file","system.html.vue"]]);export{m as default};
