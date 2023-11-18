[rewrite_local]

^https?:\/\/ad\.12306\.cn\/ad\/ser\/getAdList url script-response-body https://raw.githubusercontent.com/kokoryh/Script/master/js/12306.js

[mitm]

hostname = ad.12306.cn
