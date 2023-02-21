/***********************************************

> 应用名称：12306去广告
> 脚本作者：@ddgksf2013
> 更新时间：2023-02-21
> 使用说明：请在本地添加分流 host, ad.12306.cn, direct

[rewrite_local]

^https?:\/\/ad\.12306\.cn\/ad\/ser\/getAdList url script-response-body https://github.com/ddgksf2013/Scripts/raw/master/12306.js

[mitm]

hostname = ad.12306.cn

***********************************************/

const version = 'V1.0.19';

var ddgksf2013=JSON.parse($response.body);ddgksf2013.materialsList=[{billMaterialsId:"6491",filePath:"ddgksf2013",creativeType:1}],ddgksf2013.advertParam={skipTime:1},delete ddgksf2013.message,$done({body:JSON.stringify(ddgksf2013)});
