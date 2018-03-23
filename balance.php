<<?php

$fields = [
'key'=>'689341a981a42dc60c461b119d934d5984d8a5e899c6fb5d56ef43c42fd7cdcf'
];
$curl = curl_init();
curl_setopt($curl, CURLOPT_URL, 'https://cryptobara.com/api/v2/wallet/state/');
curl_setopt($curl, CURLOPT_RETURNTRANSFER,true);
curl_setopt($curl, CURLOPT_POST, true);
curl_setopt($curl, CURLOPT_POSTFIELDS, $fields);
$out = curl_exec($curl);
echo $out;
curl_close($curl);



 ?>
