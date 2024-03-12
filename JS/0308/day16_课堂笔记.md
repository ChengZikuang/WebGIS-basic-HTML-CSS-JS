#### 昨日回顾

```
js回顾
	组成
		ECMAScript
		DOM
		BOM
	ECMAScript
		数据类型 
			基本数据类型
			对象类型
			
		变量
			定义及初始化
		
		运算符
			算术
			自增自减
			逻辑
			比较
			赋值
			三元运算符
		
		流程控制
			顺序结构
			选择结构
			循环结构
		数组
			定义及初始化
			增删改查基本操作(索引)
		函数
			定义及调用
			参数及返回值
		面向对象
			概念
			类的定义
			对象的创建
			
		内置对象
			Math
			Date
			Number
			全局对象
			Array
				splice()
				filter
				find
				map
				forEach
				every
			String
				subStr()
				replace()
			json
				概念
					js对象的字符串表示法(将对象转成字符串,方便网络传输)
				和js互转
					js对象->json字符串 JSON.stringify()
					json字符串->js对象 JSON.parse()
					
DOM
	概念
		文档对象模型,在加载html文档的时候,会将整个文档抽成DOM树,根节点是document
	作用
		定义了如何获取和操作元素(标签体,属性,样式)以及节点增删改查的规范
	思想
		把html页面中的所有组成部分(标签,属性,文本,注释)都抽成对象,用属性和方法来操作
		
获取元素
	获取单个
		document.getElementById()
	获取多个
		document.getElementsByClassName()
		document.getElementsByTagName()
	H5方式
		document.querySelector()
		document.querySelectorAll()
操作元素
	操作属性
		获取属性
			元素.属性名
		设置属性
			元素.属性名 = 值
	操作标签体
		获取标签体
			元素.innerHTML
			元素.innerText(纯文本)
		设置标签体
			元素.innerHTML = 值
			元素.innerText = 值(纯文本)
	操作样式
		单独设置
			元素对象.style.样式属性名=属性值
		批量设置
			元素对象.className = class属性值(会覆盖原有样式)
			元素对象.classList.add()
			元素对象.classList.remove()
			元素对象.classList.toggle()
			元素对象.classList.include()
```

#### 节点操作

```
概念
	在 HTML DOM (Document Object Model) 中 , 每一个元素都是 节点:

    文档是一个文档节点。
    所有的HTML元素都是元素节点。
    所有 HTML 属性都是属性节点。
    文本插入到 HTML 元素是文本节点。are text nodes。
    注释是注释节点。
    
操作(以操作元素节点为例进行学习)
	属性
		element.firstChild	返回元素的第一个子节点
		element.lastChild	返回最后一个子节点
		element.children	返回元素的子元素的集合
		element.parentNode	返回元素的父节点
	方法
		创建元素节点(通过document来创建)
			document.createElement()	创建元素节点。
		添加节点
			element.appendChild()	为元素添加一个新的子元素(从后面添加)
			element.insertBefore()	现有的子元素之前插入一个新的子元素
		删除节点
			element.removeChild()	删除一个子元素
```

#### 其他事件

```
点击事件
	onclick
焦点事件
	onfocus	元素获取焦点时触发
	onblur	元素失去焦点时触发
鼠标移入移出事件
	onmouseover	鼠标移到某元素之上。	
	onmouseout	鼠标从某元素移开。
键盘事件
	onkeydown	某个键盘按键被按下。	
    onkeypress	某个键盘按键被按下并松开。	
    onkeyup	某个键盘按键被松开。
```



#### 事件高级

##### H5注册事件方式

```
传统方式注册
	1,使用on开头的事件属性来注册事件,本质就是设置元素属性
	2,同一个元素的同一个事件,只能接受一个处理函数,后面注册的函数会覆盖前面的函数
H5监听注册方式(推荐)
	1,使用addEventListener()来注册事件,本质就是调用方法
	2,同一个元素的同一个事件,可以设置多个处理函数,会按照注册的顺序依次执行
```

##### DOM事件流

```
概念
	事件在发生的时候,会在元素节点间按照指定的顺序传播,这就叫做事件流
	
事件捕获
	网景公司最早提出:事件最开始由DOM最顶层的节点接收,然后逐级向下传播到具体的元素接收

事件冒泡
	IE公司最早提出:事件最开始是由最具体的元素接收,然后逐级向上传播到DOM最顶层节点的过程
	
W3c统一了说法:事件先捕获再冒泡,将DOM事件流分成了3个阶段
	1,捕获阶段(从顶层节点到具体事件源的过程)
	2,到达当前目标阶段(到达具体发生事件的元素)
	3,冒泡阶段(从具体事件源传播到最顶层节点的过程)
	
addEventListener()
	如果第三个参数是false(默认),表明在事件冒泡阶段调用事件处理函数(目标元素到DOM最顶层)
	如果第三个参数是true,表明在事件捕获阶段调用事件处理函数(DOM最顶层到目标元素)
注意
	传统注册事件方式(on开头的绑定),只能得到冒泡阶段
	实际开发中,我们很少使用事件捕获,更关心的是事件冒泡
	有些事件没有冒泡,比如blur,focus,mouseenter,mouseleave等
```

