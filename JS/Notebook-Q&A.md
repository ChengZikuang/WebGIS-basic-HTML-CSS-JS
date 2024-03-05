## 预习问题

**快捷键汇总：**

向下复制行：

end:

多行快排：

## 学习问题

Q：如何在创建了数组后，新增带名称的元素？参见0220-命名索引.html
A：JavaScript 不支持命名索引的数组。在 JavaScript 中，数组只能使用数字索引。

Q：对象和数组的区别，如何证明创建的是对象还是数组？
A：{命名索引},[数字索引]；
另：数组方法1：Array.isArray(fruits);     // 返回 true
数组方法2：fruits instanceof Array     // 返回 true

~~Q：当存在两个数组时，如何将他们分别进行排序？主要想问，myfunction如何识别要排序哪个数组？~~

~~A：设置有形参的函数呗！~~

Q：比值函数function(a, b){return a-b},原理？

A：[Chrome 的 JS 引擎 V8--快速排序var QuickSort = function QuickSort(a, from, to)、插入排序var InsertionSort = function InsertionSort(a, from, to)]

Q：为什么JS的函数没有说明文档？？？理解不了sort+function的组合

A：别太在意，把它们当作Math.random一样就行。

Q：作业10.1怎么验证显示的值修改了变量本身呢，而不是显示了临时值

A：传入对象属性值，即传入引用型。

Q：自己解释JS中的函数、对象、事件、DOM和BOM

A：

Q：函数能同时返回两个值吗？

A：目前解决方法传入数组中

Q：

A：

## 练习问题

Q：JS中函数的变量的作用域？为什么在函数外的变量，无法传进函数内？？？

A：

Q：

A：