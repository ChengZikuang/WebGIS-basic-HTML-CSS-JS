## 预习问题



---------

## 课堂问题
Q：如何在创建了数组后，新增带名称的元素？参见0220-命名索引.html
A：JavaScript 不支持命名索引的数组。在 JavaScript 中，数组只能使用数字索引。

Q：对象和数组的区别，如何证明创建的是对象还是数组？
A：{命名索引},[数字索引]；
证明1：Array.isArray(fruits);     // 返回 true
证明2：fruits instanceof Array     // 返回 true