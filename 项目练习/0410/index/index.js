(async () => {
    const jsonres = await getJSON("http://project.x-zd.net:3001/apis/herolist");
    const res = jsonres.data;
    console.log(res.reverse());

    //dom
    const grid = document.querySelector(".grid");
    const opt = document.querySelectorAll(".opt");
    const ipt = document.querySelector(".searchctn>input");

    //初始界面渲染grid视图
    render(res);

    //opt选择事件
    opt.forEach(element => {
        element.addEventListener("click", function () {
            clearopt(opt);
            element.checked = true;
            switch (element.name) {
                case "all":
                    render(res);
                    break;
                case "10":
                case "11":
                    console.log("pay_type");
                    render(res.filter(function (params) {
                        return (params.pay_type === Number(element.name));
                    }))
                    break;
                default:
                    render(res.filter(function (params) {
                        return (params.hero_type === Number(element.name) || params.hero_type2 === Number(element.name));
                    }))
                    break;
            }
            // render(findres(Number(element.name)));
        })
    });
    //清空opt选择
    function clearopt(opt) {
        opt.forEach(element => {
            element.checked = false;
            //清楚搜索框内容
            ipt.value = "";
        });
    }
    //搜索事件
    ipt.addEventListener("input", () => {
        // ipt.placeholder = "";
        let l = res.filter(function (params) {
            return params.cname.includes(ipt.value);
        })
        render(l);
        //替换颜色功能
    })

    function render(arr) {
        let b = "";
        arr.forEach(element => {
            b = b.concat(`<div class="hero">
            <img src="https://game.gtimg.cn/images/yxzj/img201606/heroimg/${element.ename}/${element.ename}.jpg" alt="">
            <div class="name">${element.cname}</div></div>`);
        });
        grid.innerHTML = b;
    }
})();

function getJSON(url) {
    return new Promise((resolve, reject) => {
        const XHR = new XMLHttpRequest();
        XHR.open("GET", url);
        XHR.send();
        XHR.onreadystatechange = function () {
            if (XHR.readyState === 4) {
                console.log("XHR success");
                resolve(JSON.parse(XHR.response));
            }
        };
    });
}


