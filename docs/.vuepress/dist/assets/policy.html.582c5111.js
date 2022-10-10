import{_ as s,o as n,c as a,b as e}from"./app.d1bf96cf.js";const p={},t=e(`<h1 id="\u7B56\u7565" tabindex="-1"><a class="header-anchor" href="#\u7B56\u7565" aria-hidden="true">#</a> \u7B56\u7565</h1><h2 id="\u4F4D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u4F4D\u7F6E" aria-hidden="true">#</a> \u4F4D\u7F6E</h2><p>\u7B56\u7565\u653E\u7F6E\u5728 <code>{module}/src/models/polices</code> \u6587\u4EF6\u5939\u4E2D</p><p>\u7B56\u7565\u6620\u5C04\u653E\u5728 <code>{module}/src/ServiceProvider.php</code> \u6587\u4EF6\u4E2D, \u5982\u4E0B\u5B9A\u4E49</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token keyword">protected</span> <span class="token variable">$policies</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token class-name static-context">PamRole</span><span class="token operator">::</span><span class="token keyword">class</span>    <span class="token operator">=&gt;</span> <span class="token class-name static-context">RolePolicy</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">,</span>
    <span class="token class-name static-context">PamAccount</span><span class="token operator">::</span><span class="token keyword">class</span> <span class="token operator">=&gt;</span> <span class="token class-name static-context">AccountPolicy</span><span class="token operator">::</span><span class="token keyword">class</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u7B56\u7565\u6743\u9650" tabindex="-1"><a class="header-anchor" href="#\u7B56\u7565\u6743\u9650" aria-hidden="true">#</a> \u7B56\u7565\u6743\u9650</h2><p>\u5BF9\u7279\u5B9A\u7528\u6237\uFF0C\u4F60\u53EF\u80FD\u5E0C\u671B\u901A\u8FC7\u6307\u5B9A\u7684\u7B56\u7565\u6388\u6743\u6240\u6709\u52A8\u4F5C\u3002 \u8981\u8FBE\u5230\u8FD9\u4E2A\u76EE\u7684\uFF0C\u53EF\u4EE5\u5728\u7B56\u7565\u4E2D\u5B9A\u4E49\u4E00\u4E2A \xA0<code>before</code>\xA0 \u65B9\u6CD5\u3002<code>before</code>\xA0 \u65B9\u6CD5\u4F1A\u5728\u7B56\u7565\u4E2D\u5176\u5B83\u6240\u6709\u65B9\u6CD5\u4E4B\u524D\u6267\u884C\uFF0C\u8FD9\u6837\u63D0\u4F9B\u4E86\u4E00\u79CD\u65B9\u5F0F\u6765\u6388\u6743\u52A8\u4F5C\u800C\u4E0D\u662F\u6307\u5B9A\u7684\u7B56\u7565\u65B9\u6CD5\u6765\u6267\u884C\u5224\u65AD\u3002</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token keyword">use</span> <span class="token package">PolicyTrait</span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * <span class="token keyword">@var</span> <span class="token class-name"><span class="token keyword">array</span></span> \u6743\u9650\u6620\u5C04
 */</span>
<span class="token keyword">protected</span> <span class="token keyword">static</span> <span class="token variable">$permissionMap</span> <span class="token operator">=</span> <span class="token punctuation">[</span>
    <span class="token comment">// for controller</span>
    <span class="token string single-quoted-string">&#39;establish&#39;</span>  <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;backend:ad.place.establish&#39;</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;global&#39;</span>     <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;backend:ad.place.manage&#39;</span><span class="token punctuation">,</span>
    <span class="token comment">// create \u64CD\u4F5C \u5FC5\u987B\u8981\u6709\u5BF9\u5E94\u7684  &#39;backend:ad.place.establish&#39; \u6743\u9650</span>
    <span class="token string single-quoted-string">&#39;create&#39;</span>     <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;backend:ad.place.establish&#39;</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;edit&#39;</span>       <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;backend:ad.place.establish&#39;</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;delete&#39;</span>     <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;backend:ad.place.delete&#39;</span><span class="token punctuation">,</span>
    <span class="token string single-quoted-string">&#39;permission&#39;</span> <span class="token operator">=&gt;</span> <span class="token string single-quoted-string">&#39;backend:ad.place.permission&#39;</span><span class="token punctuation">,</span>
<span class="token punctuation">]</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5982\u679C\u4F60\u60F3\u62D2\u7EDD\u7528\u6237\u6240\u6709\u7684\u6388\u6743\uFF0C\u4F60\u5E94\u8BE5\u5728 \xA0<code>before</code>\xA0 \u65B9\u6CD5\u4E2D\u8FD4\u56DE \xA0<code>false</code>\u3002\u5982\u679C\u8FD4\u56DE\u7684\u662F \xA0<code>null</code>\uFF0C\u5219\u901A\u8FC7\u5176\u5B83\u7684\u7B56\u7565\u65B9\u6CD5\u6765\u51B3\u5B9A\u6388\u6743\u4E0E\u5426\u3002</p><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token doc-comment comment">/**
 * \u7B56\u7565\u6620\u5C04
 */</span>
<span class="token keyword">trait</span> <span class="token class-name-definition class-name">PolicyTrait</span>
<span class="token punctuation">{</span>

    <span class="token doc-comment comment">/**
     * <span class="token keyword">@param</span> <span class="token class-name">PamAccount</span> <span class="token parameter">$pam</span>     \u8D26\u53F7
     * <span class="token keyword">@param</span> <span class="token class-name"><span class="token keyword">string</span></span>     <span class="token parameter">$ability</span> \u80FD\u529B
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">bool</span><span class="token punctuation">|</span><span class="token keyword">null</span></span>
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">before</span><span class="token punctuation">(</span><span class="token class-name type-declaration">PamAccount</span> <span class="token variable">$pam</span><span class="token punctuation">,</span> <span class="token variable">$ability</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token variable">$permission</span> <span class="token operator">=</span> <span class="token keyword static-context">self</span><span class="token operator">::</span><span class="token variable">$permissionMap</span><span class="token punctuation">[</span><span class="token variable">$ability</span><span class="token punctuation">]</span> <span class="token operator">??</span> <span class="token string single-quoted-string">&#39;&#39;</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token variable">$permission</span> <span class="token operator">?</span> <span class="token variable">$pam</span><span class="token operator">-&gt;</span><span class="token function">capable</span><span class="token punctuation">(</span><span class="token variable">$permission</span><span class="token punctuation">)</span> <span class="token punctuation">:</span> <span class="token class-name return-type">null</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * \u7B56\u7565\u6620\u5C04
     * <span class="token keyword">@return</span> <span class="token class-name"><span class="token keyword">mixed</span></span>#
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">function</span> <span class="token function-definition function">getPermissionMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token keyword static-context">self</span><span class="token operator">::</span><span class="token variable">$permissionMap</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u63A7\u5236\u5668" tabindex="-1"><a class="header-anchor" href="#\u63A7\u5236\u5668" aria-hidden="true">#</a> \u63A7\u5236\u5668</h2><div class="language-php ext-php line-numbers-mode"><pre class="language-php"><code><span class="token doc-comment comment">/**
 * \u5E7F\u544A\u4F4D\u7BA1\u7406
 */</span>
<span class="token keyword">class</span> <span class="token class-name-definition class-name">PlaceController</span> <span class="token keyword">extends</span> <span class="token class-name">InitController</span>
<span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">function</span> <span class="token function-definition function">__construct</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword static-context">parent</span><span class="token operator">::</span><span class="token function">__construct</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword static-context">self</span><span class="token operator">::</span><span class="token variable">$permission</span> <span class="token operator">=</span> <span class="token class-name static-context">AdPlacePolicy</span><span class="token operator">::</span><span class="token function">getPermissionMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u91CC\u5B9A\u4E49\u7684 permission \u6743\u9650\u4F1A\u5728 permission \u4E2D\u6709\u62E6\u622A, \u8BA9\u7528\u6237\u65E0\u6CD5\u901A\u8FC7\u63A7\u5236\u5668\u6765\u8FDB\u5165\u8FD9\u4E2A\u64CD\u4F5C, \u770B\u5230\u76F8\u5173\u7684\u6570\u636E.</p>`,13),c=[t];function o(i,l){return n(),a("div",null,c)}const d=s(p,[["render",o],["__file","policy.html.vue"]]);export{d as default};
