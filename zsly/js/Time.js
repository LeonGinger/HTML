// JavaScript Document
	function nowtime(){
var myDate = new Date();
var year=myDate.getFullYear();
var month=myDate.getMonth()+1;
var day=myDate.getDate();
var hours=myDate.getHours();
var mint=myDate.getMinutes();
var second=myDate.getSeconds();
var nowTime=year+"年"+month+"月"+day+"日"+hours+"时"+mint+"分"+second+"秒";
return nowTime;
	}
 console.log(nowtime());