<html>
<body>
<?php 
	//doc link https://www.plivo.com/docs/api/message/
	$mob=$msg="";
	$msgerr=$moberr="";
	$sndr="9026487321";	//sender phone no
	if($_SERVER["REQUEST_METHOD"]=="POST")
	{
		if(empty($_POST['msg']))
			{
				$msgerr="msg is required";
			}
		
	   
		 if(empty($_POST['mob']))
			{
				$phoneerr="phone is required";
			}
		else
			{
				$phone=test_input($_POST['phone']);
				$justNums = preg_replace("/[^0-9]/", '', $phone);

			//eliminate leading 1 if its there
				if (strlen($justNums) == 11) $justNums = preg_replace("/^1/", '',$justNums);

			//if we have 10 digits left, it's probably valid.
				if (strlen($justNums) == 10) $phone = true;
			}
	}
		function test_input($data)
		{
			$data=trim($data);
			$data=stripslashes($data);
			$data=htmlspecialchars($data);
			return $data;
		}
		$url="https://api.plivo.com/v1/Account/MAMJAZYZK2NJLIYZE5YW/Message/";	//replace the string "MAZTM4YWU4MDC4Z" with one of your auth id
	
	$curl = curl_init();

  curl_setopt_array($curl, array(
  CURLOPT_URL => $url,
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "POST",
  CURLOPT_POSTFIELDS => "-----011000010111000001101001\r\nContent-Disposition: form-data; name=\"src\"\r\n\r\n".$sndr."\r\n-----011000010111000001101001\r\nContent-Disposition: form-data; name=\"dst\"\r\n\r\n".$mob."-\r\n-----011000010111000001101001\r\nContent-Disposition: form-data; name=\"text\"\r\n\r\n".$msg."\r\n-----011000010111000001101001--",
  CURLOPT_HTTPHEADER => array(
    "authorization: Basic ZDM2MDZkMmY0ODU0YTJkMjhmMTYwMjc3Zjk1OWI4==",	//set your auth header with auth token from your id
    "cache-control: no-cache",
    "content-type: multipart/form-data; boundary=---011000010111000001101001",
    "postman-token: 68184b51-b16f-9cbc-22ab-f718c030d023"
  ),
));

$response = curl_exec($curl);
curl_close($curl);

print_r($response);
  
  ?>

<form name="myform" method="post" action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']);?>">
	<table cellspacing="10">
		
		
				<tr><td>Phone Number<span style= color:red>*</span></td>
				<td>(+91)<input type="text" name="mobile"  placeholder="###-###-####" value="<?php echo @$_POST['mobile'];?>"></td><td><span style= color:red >* <?php echo @$moberr;?></span></td>
				</tr>
				<tr><td>Message<span style= color:red>*</span></td>
				<td><textarea  name="msg" rows="10" cols="50" placeholder="BLABLABLABLABL" value="<?php echo @$_POST['msg'];?>"></textarea></td>
				<td><span style= color:red >* <?php echo @$msgerr;?></span></td>
				</tr>
				<tr>
				<td> <input type="submit" value="REGISTER"> </td>
				</tr>
	
	
	</table>
</form>

</body>
</html>