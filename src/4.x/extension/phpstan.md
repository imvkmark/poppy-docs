# Phpstan

> since 4.1
> 为了在项目中增加 phpstan 的静态检测

## 安装

```
composer require poppy/ext-phpstan 4.2.*
```

`~/phpstan.neon` 中增加

```
includes:
    - vendor/poppy/ext-phpstan/extension.neon
```