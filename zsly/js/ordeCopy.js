// JavaScript Document
document.write("<script type='text/javascript' src='./js/Time.js'></script>"); 
var class_arr=['--请选择--','科室一','科室二','科室三'];
var name_arr=[
	['-'],
	['--排名不分前后--','刘一','陈二','张三'],
	['--排名不分前后--','李四','王五','赵六'],
	['--排名不分前后--','孙七','周八','吴九','郑十']
	];
window.onload=function(){
	document.getElementById("nameCH").disabled=true;

	loop(class_arr,"classCH");
	
	setInterval("showTime()",1000);
}
 	function showTime() {//时间函数
		var date=new Date();
		document.getElementById("time").innerHTML=date.toLocaleString();
	}
/*--START-CLASS&NAME--*/
	function loop(arr,id){//arr数组,id最后  (循环输出函数)
		var html='';
		for(var i=0;i<arr.length;i++){
			if(i==0 && id!="classCH"){//禁用options 0的选项
				html+= '<option  disabled="disabled" id="'+i+'"  value="'+i+'"/>'+arr[i]+'</option>';
				}else{
			 html+= '<option id="'+i+'"  value="'+i+'"/>'+arr[i]+'</option>';}
			}
			document.getElementById(id).innerHTML=html;
		}

	function choiseClass(){
		/*var class_arr=['--请选择--','科室一','科室二','科室三'];
var name_arr=[
	['-'],
	['--排名不分前后--','刘一','陈二','张三'],
	['--排名不分前后--','李四','王五','赵六'],
	['--排名不分前后--','孙七','周八','吴九','郑十']
	];*/
	var TFname=document.getElementById("nameCH");
	var sel = document.getElementById("classCH");
	var selected_val = sel.options[sel.selectedIndex].value;//获取class select options里的值
	selected_val=parseInt(selected_val);//Sting转为整数形
	//var class_arr=['--请选择--','科室一','科室二','科室三'];
	for(var j=0;j<class_arr.length;j++){
		if(sel.options[0].selected==true){
			loop("","nameCH");//判断options 0 选中“请选择” 则清空
		TFname.disabled=true;
			  printcont("0","Pclass");
			   printcont("0","Pname");
			   
			}else{
		 if(sel.options[j].selected==true){
			  TFname.disabled="";
			  loop(name_arr[j],"nameCH");//不是0  则调用loop函数 循环输出name select options控件和内容			  
			   printcont("classCH","Pclass");
			   printcont("nameCH","Pname");
		  //获取选中的class options 来确定name二位数组的所有内容
		}
			}
	}
		}
				
	function printcont(Pid,Gid){//Pid是select的id,Gid是信息输出的id
								//输出选中的科室 和选中的名字
		var Gid=document.getElementById(Gid);
	if(Pid=="0"){
		Gid.innerHTML="";
		}else{
		var Pid=document.getElementById(Pid);
		var Pch=Pid.selectedIndex;
		var Ptext =Pid.options[Pch].text;
		Gid.innerHTML=Ptext;
		}
	//alert(Pch);
		}
/* --END--*/	
/* --START-dinner--*/	
	 function printp(dinnerid,Ppid){//当number控件发生数值变化  输出信息跟着变化
		 	var val1=document.getElementById(dinnerid).value;
			var val11=val1;
			document.getElementById(Ppid).innerHTML=val11;
		 }
		 		
	 function choisedinner(CHid,dinnerid,Pid,tips){//CHID选中的早中晚，dinnerid是number控件的id,Ppid是提示的文本
		 var nowtime=CHid;
		 var nowdinnew=dinnerid;
		 var CHid=document.getElementById(CHid);
		 var dinnerid=document.getElementById(dinnerid);
		 if(CHid.checked==true){
		//	alert("OK");
		dinnerid.disabled="";
		dinnerTime(nowtime,nowdinnew)//传递获取到的早中晚 到dinnerTime()
			 }else{
		dinnerid.value="0";
		dinnerid.disabled=true;
		printFont(tips,"");
		printFont(Pid,"");
		document.getElementById("Pmoney").innerHTML="-";
				 }
		 }
		
	 function dinnerTime(now,Did){//检查选餐时间
	 //分别子函数-morning() afternoon() evening()
		 //alert(now);
		 var dinner_arr=['morning','afternoon','evening'];
		 var myDate = new Date();
		 var hours=myDate.getHours();//获取小时
		 //alert(hours);
		var i=0;
		while(dinner_arr.length){
			if(dinner_arr[i]==now){
				switch (dinner_arr[i])//switch判断执行早中晚的函数判断时间订餐
				{
					case 'morning':
					morning(Did)
					break;
					case 'afternoon':
					afternoon(Did)
					break;
					case 'evening':
					evening(Did)
					break;
					default:
					}
				break;
				}else{
					i++;
					}
			}
			 
		 function morning(Did){
		 if(hours>=8 &&hours<=19){
			 printFont("tip1","预订第二天的早餐");
	 }else{
		  printFont("tip1","不是时候");
		   OffDisable(Did);    
		 }
		 }
		 
		  function afternoon(){
		 if(hours>=8 &&hours<=9){
			printFont("tip2","预订今天的午餐");
		 }else  if(hours>=14 && hours<=19){
			 printFont("tip2","预订第二天的午餐");	
		 }else{
			printFont("tip2","不是时候");	
			  OffDisable(Did);   
			 }
		  }
		  
		  function evening(){
	     if(hours>=14 &&hours<=15){
			printFont("tip3","预订今天的晚餐");	
		 }else  if(hours>=18 &&hours<=19){
			 printFont("tip3","预订第二天的晚餐");	  
		 }else{
			 printFont("tip3","不是时候");
			   OffDisable(Did);   	  
			 }		  
			  }
			  
	   	function OffDisable(Fid){document.getElementById(Fid).disabled=true;}}
//不是时候则禁用number控件
	
  		function printFont(pID,pcont){document.getElementById(pID).innerHTML=pcont;}//输出内容	
		/*END*/	
		function money(){//总计的发生改变
			var mon=document.getElementById("Pmorn").innerHTML;
			var after=document.getElementById("Pafter").innerHTML;
			var even=document.getElementById("Peven").innerHTML;
			var moneyy=document.getElementById("Pmoney");
			var sum=(mon*4)+(after*10)+(even*10);
			moneyy.innerHTML=sum;
			}
/*-START-order-*/
		function OKorder(){//提交订单检验
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
			if(Cclass=="" && name==""){
				//alert(sum);
				alert("请选择科室和名字");
			
				}else{check(mon,after,even);}
					
			function check(Dmon,Dafter,Deven){
							if(Dmon==0 && Dafter==0 && Deven==0){
								
								}else{
									if(Dmon>=0 && Dmon<=2 && Dafter>=0 && Dafter<=2 && Deven>=0 && Deven<=2){
								alert("科室:"+Cclass+" 名字:"+name+".早餐:"+mon+"份."+"午餐:"+after+"份."+"晚餐:"+even+"份.\n"+"早餐:"+(4*mon)+"元。午餐:"+(10*after)+"元。晚餐:"+(10*even)+"元\n一共:"+sum+"元");
								var from=document.getElementById('form1');
								from.submit();
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
			/*END*/