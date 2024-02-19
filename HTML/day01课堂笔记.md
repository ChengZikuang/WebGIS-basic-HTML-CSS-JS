## **课堂笔记**

**介绍**

HTML(Hypertext Markup Language)

标签；属性

XML(Extensible Markup Language)

标签名扩展性

**字符实体**

&nbsp;不间断空格: `&nbsp;`

大于号`&gt;` 小于号`&lt;` 版权`&copy;` 人民币`&yen;`

**文档相关标签**

```html
<!DOCTYPE html><!-- 文档声明 -->
<html lang="en"><!-- 语言声明 -->
<head>
    <!-- meta  HTML 元素的元信息 (meta-information) -->
    <meta charset="UTF-8"><!-- 字符集声明 -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title><!-- 文档的标题 -->
</head>
<body></body>
</html>
```

**文本相关标签**

front-字体  h1-标题  p-段落

**格式相关标签**

hr -水平线 (border-left:)

粗体 斜体 下划线 标记（黄色高亮）--mark

**列表标签**

ol li ul li

**标签分类**

行级元素

span：分割一行内容，或存放少量数据

块级元素

div：默认没有样式



**图片**

img - src  -alt

路径：

绝对路径-->本地磁盘 file://

相对路径：./img/xxx.jpg

属性：width height alt(图片的替代文本)  title（鼠标经过时的名称显示）



**音频/视频**



**链接标签**

a  href="" target

跳转位置：

站外链接 （http协议，其他协议）

站内链接（./01.html）

锚链接（#id名）



**新的语义元素布局相关**

header、footer、nav等



**表单**

form属性

```html
<form action="action_page.php" method="GET">
```

input属性

```html
<input type="text" name="firstname" value="Mickey">
<br>
Last name:<br>
<input type="text" name="lastname" value="Mouse">
<br><br>
<input type="submit" value="Submit">
```

## 资料

MDN-->[MDN Web Docs (mozilla.org)](https://developer.mozilla.org/zh-CN/)



## **快捷键汇总**	

**vscode**

快捷生成标准html文档 ！

向下复制行  shift+alt+downarrow

注释 行注释 ctrl+/  块注释 ctrl+shfit+/

批量替换 ctrl选中

快速对齐 

快速换行

**emmt**

ul>li*3>lorem1

ol>li{第$项}*3

## 课间问题

1.浏览器是如何识别和渲染HTML文件的?

2.表单post提交给另一个网页后，第二个接受数据的网页如何接受此数据？



