(async () => {
  //请求数据 将省市区的数据保存在浏览器上
  function getData(url) {
    return new Promise(function (resolve) {
      //处理异步代码的
      const xhr = new XMLHttpRequest();
      //如何利用xhr实例来发送请求呢？接口地址 请求方法
      // 说明利用哪个请求方法向哪个接口地址发送请求
      xhr.open("GET", url);
      //正式发送请求
      xhr.send();
      //通过xhr的一个事件监听来获取请求的响应状态和数据
      xhr.onreadystatechange = function () {
        //从请求到响应需要经历一个过程 这个过程中可以通过一个状态表示过程的进行
        //readyState这个状态会从0逐渐变化到4 如果变到了4说明请求响应成功了
        if (xhr.readyState === 4) {
          // console.log("request success");
          // //如何拿到数据呢?
          // data = JSON.parse(xhr.response);
          // console.log(data, "data");
          //说明请求数据成功了 可以将当前的Promise修改为成功态 并且存储数据
          resolve(xhr.response);
        }
      };
    });
  }
  let res = await getData("http://project.x-zd.net:3001/apis/citylist");
  res = JSON.parse(res);
  //获取相关的dom
  let province = document.querySelector("#selProvince");
  let city = document.querySelector("#selCity");
  let area = document.querySelector("#selArea");
  //定义一下省市区的初始数据
  let ProvinceList = res.data;
  let CityList = [];
  let AreaList = [];
  //实现一个渲染方法 将数据放到Ul中
  function fillSelect(select, list) {
    //1.在填充的时候我要做一个判断 如果list没有数据 那么对应的title需要添加disabled这个类名
    select.className = `select ${list.length > 0 ? "" : "disabled"}`;
    //2.将数据填充到select的ul里面
    const ul = select.querySelector(".options");
    ul.innerHTML = list
      .map((item) => {
        return `<li>${item.label}</li>`;
      })
      .join("");
  }
  //初始化的时候填充数据 只填充省份 其他一开始是空
  fillSelect(province, ProvinceList);
  fillSelect(city, CityList);
  fillSelect(area, AreaList);
  //处理点击事件 => 包括通用逻辑 也包括针对每个下拉框不同的逻辑(如果点击的是省 生产市的数据 点的是市 生产区的数据)
  //2.点击的是ul部分 那么会对初始数据进行修改
  function registerCommonEvent(select) {
    //1.点击的是title部分 点击title部分 其实就是控制ul的显示隐藏
    const title = select.querySelector(".title");
    title.addEventListener("click", function () {
      //禁用状态 不能点击
      if (select.classList.contains("disabled")) {
        console.log("禁用状态 不能点击");
        return;
      }
      // 可以点击的状态
      //获取当前展开的那个Ul
      const expand = document.querySelector(".select.expand");
      // 如果我点击的不是当前展开项 那么展开项收起来 当前点击的展开 如果我点击的是展开项 展开项收起来
      if (expand && expand !== select) {
        expand.classList.remove("expand");
      }
      //toggle方法 如果有 删除 如果没有 加上
      select.classList.toggle("expand");
    });
    //2.给每个li添加一个点击后的样式
    const ul = select.querySelector(".options");
    ul.addEventListener("click", function (e) {
      if (e.target.nodeName !== "LI") {
        return;
      }
      //将之前具有.active类名的li去掉类型 让当前点击的加上
      const prevActive = select.querySelector("li.active");
      if (prevActive) {
        prevActive.classList.remove("active");
      }
      const li = e.target;
      li.classList.add("active");
      //更改对应title的文本
      const span = select.querySelector(".title span");
      span.innerText = li.innerText;
      select.classList.remove("expand");
    });
  }
  //处理省的特殊逻辑 根据你选中的省份 确认那个省份的城市数据
  function registerProvinceEvent() {
    const province_ul = province.querySelector(".options");
    province_ul.addEventListener("click", function (e) {
      if (e.target.nodeName !== "LI") {
        return;
      }
      const li = e.target;
      //获取省名称
      const provinceName = li.innerText;
      //从ProvinceList找到对应省份的城市数据
      const res = ProvinceList.find((item) => {
        return item.label === provinceName;
      });
      CityList = res.children;
      fillSelect(city, res.children);
      fillSelect(area, []);
    });
  }
  //处理城市的特殊逻辑 根据你选中的城市名 确认那个城市的区的数据
  function registerCityEvent() {
    const city_ul = city.querySelector(".options");
    city_ul.addEventListener("click", function (e) {
      if (e.target.nodeName !== "LI") {
        return;
      }
      const li = e.target;
      //获取城市的名称
      const cityName = li.innerText;
      //从CityList找到对应区的数据
      const res = CityList.find((item) => {
        return item.label === cityName;
      });
      AreaList = res.children;
      fillSelect(area, res.children);
    });
  }
  registerCommonEvent(province);
  registerCommonEvent(city);
  registerCommonEvent(area);
  registerProvinceEvent();
  registerCityEvent();
})();
