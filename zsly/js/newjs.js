// JavaScript Document
document.write("<script type='text/javascript' src='../js/Time.js'></script>"); 
 /* cities=[["广州","深圳","中山"],["南宁","桂林","柳州"],["福州","厦门","泉州"]];//二维数组*/
  window.onload=function(){
	  setInterval("showTime()",1000);
	  setInterval("showInfo()",1500);
	  checkTime();  
	  }
  var name_arr=[
	['刘一','陈二','张三'],
	['李四','王五','赵六'],
	['孙七','周八','吴九','郑十']
	];

  function ClassChange(sel){
    if(sel.options[0].selected){    //如果选第一个选项就清空菜单
      var Class=document.getElementById("selectName");
      Class.options.length=1;
    }
    for(var i=1;i<sel.options.length;i++){
  	  if(sel.options[i].selected)        //判断选项是否被选中
  	   addname(i);                       //附加对应的二级菜单
  	  }
  }
  function addname(i){
    var Class=name_arr[i-1];
  	var nameSelect=document.getElementById("selectName");
  	nameSelect.options.length=1;     //清除原来的<option>
  	for(var j=0;j<Class.length;j++){
  	  var optionName=document.createElement("option");
	     //创建<option>标签
		 optionName.value=Class[j];
  	  optionName.innerHTML=Class[j];
  	  nameSelect.appendChild(optionName);    //把<option>加在菜单上
  	}
  }
//------------------------------
	function chooseItem(Cid,Nid) {//选择checkbox   Cidcheckbox的ID  Nidnumber的ID
		var item=document.getElementById(Cid);
		if(item.checked)
			document.getElementById(Nid).disabled=false;
		else{
			document.getElementById(Nid).disabled=true;
			document.getElementById(Nid).value=0;
		}
	}
	function chooseNum(Nid,Pid){//Nid获取早中晚number控件值,传给输出给Pid显示标签
		var num=document.getElementById(Nid).value;
		document.getElementById(Pid).innerHTML=num;	
		money();
		function money(){
			var mon=document.getElementById("Pmorn").innerHTML;
			var after=document.getElementById("Pafter").innerHTML;
			var even=document.getElementById("Peven").innerHTML;
			var moneyy=document.getElementById("Pmoney");
			var sum=(mon*4)+(after*10)+(even*10);
			moneyy.innerHTML=sum;
			}
		
		}
//-----------------------	
  function showInfo(){//显示信息
    var Class=document.getElementById("selectclass").value;
    var name=document.getElementById("selectName").value;
    document.getElementById("Pclass").innerHTML=Class;
	document.getElementById("Pname").innerHTML=name;
  } 
  //-----------
  function showTime() {//时间函数
		var date=new Date();
		document.getElementById("time").innerHTML=date.toLocaleString();		
	}
//----
	function checkTime(){
		var date=new Date();
		var hours=date.getHours();//获取当前系统小时；
	function OffDisable(Fid){document.getElementById(Fid).disabled=true;}//禁用控件
			
		 function morning(){
		 if(hours>=8 &&hours<=19){
			 printFont("tip1","预订第二天的早餐");
	 }else{
		  printFont("tip1","不是时候");
		   OffDisable("morning");    
		 }
		 }
		 
		  function afternoon(){
		 if(hours>=8 &&hours<=10){
			printFont("tip2","预订今天的午餐");
		 }else  if(hours>=14 && hours<=19){
			 printFont("tip2","预订第二天的午餐");	
		 }else{
			printFont("tip2","不是时候");	
			  OffDisable("afternoon");   
			 }
		  }
		    
		  function evening(){
	     if(hours>=14 &&hours<=16){
			printFont("tip3","预订今天的晚餐");	
		 }else  if(hours>=18 &&hours<=19){
			 printFont("tip3","预订第二天的晚餐");	  
		 }else{
			 printFont("tip3","不是时候");
			   OffDisable("evening");   	  
			 }		  
			  }
			  
			  morning();
			  
			  afternoon();
			  
			  evening();
		}
//-----------------
function printFont(pID,pcont){document.getElementById(pID).innerHTML=pcont;}//输出内容
//
function OKorder(){
			/*	  科室:<p id="Pclass"></p>
      名字:<p id="Pname"></p>
      早餐:<p id="Pmorn"></p>
      午餐:<p id="Pafter"></p>
      晚餐:<p id="Peven"></p>*/
			var Cclass=document.getElementById("Pclass").innerHTML;
			var name=document.getElementById("Pname").innerHTML;
			var mon=document.getElementById("Pmorn").innerHTML;
			var after=document.getElementById("Pafter").innerHTML;
			var even=document.getElementById("Peven").innerHTML;
			
			var sum=(mon*4)+(after*10)+(even*10);
			if(Cclass=="请选择科室" || name=="请选择名字"){
				//alert(sum);
				alert("请选择科室和名字");
			
				}else{
						
						check(mon,after,even);
					}
							
				function check(Dmon,Dafter,Deven){
							if(Dmon==0 && Dafter==0 && Deven==0  ){
								
								}else{
									if(Dmon>=0 && Dmon<=2 && Dafter>=0 && Dafter<=2 && Deven>=0 && Deven<=2){
								alert("科室:"+Cclass+" 名字:"+name+".早餐:"+mon+"份."+"午餐:"+after+"份."+"晚餐:"+even+"份.\n"+"早餐:"+(4*mon)+"元。午餐:"+(10*after)+"元。晚餐:"+(10*even)+"元\n一共:"+sum+"元");
								var from=document.getElementById('form1');
								from.submit();
								return true;
								}else{
									mon=0;
									after=0;
									even=0;
									alert("请检查你预定的分量,人/餐/2份");
									return false;
									}
									
								}
							
							}	
			}
			
					