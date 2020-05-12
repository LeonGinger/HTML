<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>无标题文档</title>
</head>

<body>
<?php
	$name_arr=array(
	array('-'),
	array('--排名不分前后--','刘一','陈二','张三'),
	array('--排名不分前后--','李四','王五','赵六'),
	array('--排名不分前后--','孙七','周八','吴九','郑十')
	);
	
	

	switch($_POST['select'])
	{
		case 1:
		echo "科室一";
		echo "<br>";
		echo $name_arr[1][$_POST['select2']];

		break;
		case 2:
		echo "科室二";
		break;
		case 3:
		echo "科室三";
		break;
		default:
		echo $_POST['select'];
		echo "<br>";
		echo $_POST['select2'];
		}

echo "<br>";

echo "早餐:".$_POST['morn']."份<br>";
echo "午餐".$_POST['after']."份<br>";
echo "晚餐".$_POST['even']."份<br>";

?>
</body>
</html>