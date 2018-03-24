<?php



$json = file_get_contents('https://webminepool.com/api/PK_pnjMpRAOnVSN9oPJoe7lx/balance');
$obj = json_decode($json);
$balanceWMC = $obj->balance;
//echo "Balance : ".$balanceWMC;

$json = file_get_contents('https://webminepool.com/api/PK_pnjMpRAOnVSN9oPJoe7lx/wmc_rate/'.$balanceWMC."/");
$obj = json_decode($json);
$balanceSatoshi = $obj->satoshi;
//echo "</br>Balance satoshi: ".$balanceSatoshi;

$stats = array();
$stats["balanceWMC"] = $balanceWMC;
$stats["balanceSatoshi"] = $balanceSatoshi;

echo json_encode($stats); 

?>