(async ()=>{
    const res = await getJSON("http://project.x-zd.net:3001/apis/herolist");
    console.log(res);
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