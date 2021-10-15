var http = require("http");
var stuInfo = [
    {id:0,name:"电磁炉",img:"img/one.jpg",flag:false},
    {id:1,name:"小米饮水机",img:"img/two.jpg",flag:false},
    {id:2,name:"美的",img:"img/three.jpg",flag:false},
    {id:3,name:"电饭煲",img:"img/four.jpg",flag:false},
    {id:4,name:"微波炉",img:"img/five.jpg",flag:false},
    {id:5,name:"烤瓷炉",img:"img/six.jpg",flag:false}
];
var server = http.createServer((req,res)=>{
    res.statusCode = 200;
res.setHeader("Content-Type","application/json");
res.setHeader("Access-Control-Allow-Origin","*");
req.on("data",function (chunk) {
});
req.on("end",function () {
    res.end(JSON.stringify(stuInfo));
});
}).listen(3000);