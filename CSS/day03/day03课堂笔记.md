课堂笔记

padding-border

![player1705833371335](D:\WebGIS\Code\day03\assets\player1705833371335.png)

清除浮动

1.父容器设置高度

2.父容器添加额外标签class=clear，样式中添加clear：both

3.伪元素

```css
.main::after{
            content: '';
            display: block;
            clear: both;
        }
```

4.单独类名

```css
.clearfix::after {
  content: "";
  clear: both;
  display: table;
}
```

5.双伪元素

```css
.clearfix::before,.clearfix::after{
            content: '';
            display: block;
        }
        .clearfix::after {
            clear: both;
        }
```





课堂问题：

- 问：写html时，因为有代码补全，所以自动生成了`;`，那写完后是在分号前，如何，快速另起一行写代码？
- 答：shift+enter
- 如何快速生成多个div里面的a
- 单行文字居中：line-height: 行高px; 多行文字居中只能用padding吗？
- 锚链接为什么是只能跳id？
- 关于clearfix?中添加：before，margin塌陷问题为什么存在，加上before为什么可以解决？clear：table，为什么用table？









- 目前学习模式存疑（仅针对HTML和CSS）？

  首先视频课不能2.5倍播放，其次不好拉进度条

  拖沓，一段重点内容花费较长时间

  没有课后项目练习，~~线下课程资料同步慢~~

- 没时间练习？

  目前学习感觉看不多的w3cschool的开发文档能快速入门，但既不能不看视频中的重点和经验，又不能全看视频，不自己检索，所以？

- 答：是否可以晚上自己写，白天上班听视频？然后来练习他们课堂布置的作业？