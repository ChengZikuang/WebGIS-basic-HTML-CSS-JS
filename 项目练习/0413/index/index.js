(async function () {
    const resjson = await getJson();
    const province = resjson.data;
    const city = [];
    const area = [];
    console.log(province); 

    //dom
    const opt = document.querySelectorAll("div.opt")
    const province_table = document.querySelector(".table")
    console.log(province_table);
    render(province,province_table);

    //显示下拉框事件
    opt.forEach(element => {
        element.addEventListener("click", function () {
            element.parentNode.children[1].classList.toggle("expand");
        })
    });
    //渲染数据
    function render(list,table) {
        let v = list.map((element=>`<li>${element.label}</li>`)).join("");
        province_table.innerHTML = v;
    }
})()

function getJson() {
    return new Promise((resolve, reject) => {
        const XHR = new XMLHttpRequest();
        XHR.open("GET", "http://project.x-zd.net:3001/apis/citylist");
        XHR.send();
        XHR.onreadystatechange = function () {
            if (this.readyState === 4) {
                resolve(JSON.parse(XHR.response));
            }
        }
    })
}