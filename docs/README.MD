# Hello vuePress

| First Header  | Second Header |
| ------------- | ------------- |
| Content Cell  | Content Cell  |
| Content Cell  | Content Cell  |


| Left-aligned | Center-aligned | Right-aligned |
| :---         |     :---:      |          ---: |
| git status   | git status     | git status    |
| git diff     | git diff       | git diff      |



<!-- 相对路径 -->
[首页](../README.md)  
[配置参考](../reference/config.md)  
[快速上手](./getting-started.md)  
<!-- 绝对路径 -->
[指南](/zh/guide/README.md)  
[配置参考 > markdown.links](/zh/reference/config.md#links)  
<!-- URL -->
[GitHub](https://github.com) 


VuePress 2 已经发布 :tada: ！



```ts{1,6-8}
import { defaultTheme, defineUserConfig } from 'vuepress'

export default defineUserConfig({
  title: '你好， VuePress',

  theme: defaultTheme({
    logo: 'https://vuejs.org/images/logo.png',
  }),
})
```

##### 行数范围标记的例子：
- 行数范围： {5-8}
- 多个单行： {4,7,9}
- 组合： {4,7-13,16,23-27,40}


```ts
// 行号默认是启用的
const line2 = 'This is line 2'
const line3 = 'This is line 3'
```
### 行号
```ts:no-line-numbers
// 行号被禁用
const line2 = 'This is line 2'
const line3 = 'This is line 3'
```


### v-pre
v-pre 扩展是由我们的内置插件支持的。

```md
<!-- 默认情况下，这里会被保持原样 -->
1 + 2 + 3 = {{ 1 + 2 + 3 }}
```

```md:no-v-pre
<!-- 这里会被 Vue 编译 -->
1 + 2 + 3 = {{ 1 + 2 + 3 }}
```

```js:no-v-pre
// 由于 JS 代码高亮，这里不会被正确编译
const onePlusTwoPlusThree = {{ 1 + 2 + 3 }}
```


###  导入代码
<!-- 最简单的语法 -->
@[code](../docs//frontmatter.md)
@[code](../docs/![alt](https://))
@[code(1-10)](../docs/README.MD)
@[code js](../docs/)

####  行高亮
<!-- 行高亮 -->
@[code js{2,4-5}](../package.json)

@[code ts{1,3,5}](@vuepress/my-config.ts)

### vue 语法
一加一等于： {{ 1 + 1 }}

<span v-for="i in 3"> span: {{ i }} </span>

::: tip
这是一个提示
:::

::: warning
这是一个警告
:::

::: danger
这是一个危险警告
:::

::: details
这是一个 details 标签
:::

- 代码块
::: danger STOP
危险区域，禁止通行
:::

::: details 点击查看代码
```js
console.log('你好，VuePress！')
```
:::


:::: code-group
::: code-group-item FOO
```js
const foo = 'foo'
```
:::
::: code-group-item BAR
```js
const bar = 'bar'
```
:::
::::

###  静态资源


#### 图片的引入
![](.![alt](file:///C:/Users/rtt/Pictures/Saved%20Pictures/sky.jpg))