#### 昨日回顾

```
Array
	添加和删除 
		push() pop()
		unshift()  shift()
		splice()
	遍历并操作(需要传递匿名函数)
		find()
		filter()
		findIndex() ---找到符合条件的元素的索引  ---自学
		every()
		some()
		map()  --函数有返回值的,会放到一个数组中返回
		forEach() --函数没有返回值的,遍历并操作
		sort()
	合并和拆分
		contact()
		slice()
	反转和转换
		reverse()
		join()
		toString()
	查找和展开
		indexOf()
		lastIndexOf()
		includes()
		...数组名
String
	查找
		indexOf()
		lastIndexOf()
		charAt(索引) 等同于 字符串[索引]
	截取替换
		subStr()
		subString()
		replace()
		replaceAll()
	切割转换
		split()
		toUpperCase()
		toLowerCase()
	判断修剪
		startsWith()
		endsWith()
		trim()
正则
	规则
		单字符
		[] 代表出现范围 [0-9]
		+ 至少一次
		? 0次或者一次
		* 任意次
		{x,y}
		\d \D \w \W
	创建
		new RegExp('字符串')
		/正则表达式/
	使用
		reg.test(需要匹配的字符串)
		字符串里面的方法  match()	查找找到一个或多个正则表达式的匹配。
```

#### Json内置对象

```
概念
	 JavaScript Object Notation(js对象表示法)
	 JSON 是一种轻量级的数据交换格式。
	 JSON 使用 JavaScript 语法，但是 JSON 格式仅仅是一个文本。
	 json使用文本的好处:文本可以被任何编程语言读取及作为数据格式传递
作用
	JSON 是用于存储和传输数据的格式。
	JSON 通常用于服务端向网页传递数据 。
和xml区别
	xml是一个重量级语句(标签占用的体积比较大),现在主要用于后台的配置文件
		<user>
			<username>张三</username>
			<password>张三</password>
		</user>
	json是一个轻量级语言(占用的体积比较小),主要用于网络数据传输
		'{"username":"张三","password":"123"}'
互转
	JSON.parse()	用于将一个 JSON 字符串转换为 JavaScript 对象。
    JSON.stringify()	用于将 JavaScript 值转换为 JSON 字符串。
```



#### DOM概念

```
概念
	Document Object Mode 文档对象模型

文档对象模型
	当html文档被加载的时候,浏览器就会创建页面文档对象模型
	当前html文档会被构造成对象的树(本质就是将页面中所有组成部分都封装成一个个对象)
	DOM树:根据html结构生成的一个树形结构,可以理解为对象组成的树

DOM操作页面元素的思想
	就是将html页面中的所有组成部分(标签,属性,标签体,注释)都抽成对象,用面向对象的方式来操作,
	因为对象中有属性和方法,比单纯操作字符串方便的多
	
DOM作用
	通过 HTML DOM，可访问 JavaScript HTML 文档的所有元素。
	JavaScript 能够改变页面中的所有 HTML 元素
    JavaScript 能够改变页面中的所有 HTML 属性
    JavaScript 能够改变页面中的所有 CSS 样式
    JavaScript 能够对页面中的所有事件做出反应
    
document对象(DOM最顶层的对象)
	当浏览器载入 HTML 文档, 它就会成为 Document 对象。
	Document 对象是 HTML 文档的根节点。
	Document 对象使我们可以从脚本中对 HTML 页面中的所有元素进行访问。
	
HTML DOM 节点
    在 HTML DOM (Document Object Model) 中 , 每一个元素都是 节点:
    文档是一个文档节点。
    所有的HTML元素都是元素节点。
    所有 HTML 属性都是属性节点。
    文本插入到 HTML 元素是文本节点。
    注释是注释节点。
```



#### DOM获取元素

```
获取单个元素
	document.getElementById()	返回对拥有指定 id 的第一个对象的引用
获取多个元素
	document.getElementsByClassName()	返回文档中所有指定类名的元素集合
	document.getElementsByTagName()	返回带有指定标签名的对象集合。
H5方式(推荐)
	document.querySelector()	返回文档中匹配指定的CSS选择器的第一元素
    document.querySelectorAll()	返回文档中匹配的CSS选择器的所有元素节点列表
```

#### 事件入门

```
三要素
	1,事件源(按钮)
	2,事件(其实就是一个动作:点击)
	3,事件处理程序(事件发生之后,需要做的事情.比如弹框)
	
三步骤
	1,写一个事件源
	2,写一个监听器(本质就是一个事件处理函数)
	3,绑定监听器和事件源(通过一个属性,将二者绑定到一块)
	
绑定方式
	行内绑定
	动态绑定
```

#### DOM操作属性

```
原始方式
    element.setAttribute()	设置或者改变指定属性并指定值。
    element.getAttribute()	返回指定元素的属性值

简化方式
    元素对象.属性名 = 属性值     设置或者修改元素属性的值
    元素对象.属性名              获取元素属性的值
    
应用场景
	操作图片的src属性(电灯开关,轮播图)
	操作input标签的value属性(书架案例)
	操作input标签的checked属性(复选框选中属性)
```

#### DOM操作标签体

```
innerHTML
	设置	
		元素对象.innHTML = 新值
	获取
		元素对象.innHTML
		
innerText(只能操作纯文本)
	设置	
		元素对象.innerText = 新值
	获取
		元素对象.innerText
```

#### DOM操作样式

```
单独设置样式
	元素对象.style.样式属性名 = 属性值
批量设置样式
	1,方法一:
		元素对象.className = class属性值 (不推荐,可能会覆盖原有样式)
	2,方式二:使用classList
		add(class1, class2, ...)	在元素中添加一个或多个类名。
        remove(class1, class2, ...)	移除元素中一个或多个类名。
        toggle(class, true|false)	在元素中切换类名。
        contains(class)	返回布尔值，判断指定的类名是否存在。
```



