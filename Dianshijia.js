/***********************************

> 应用名称：电视家
> 软件版本：2.2.5
> 脚本作者：Cuttlefish
> 更新时间：2022-12-10

[rewrite_local]
  
# ～ 电视家 解锁会员权限（2022-12-10）@ddgksf2013
^https?:\/\/123\.56\.125\.184\/api\/v\d\/user\/info url script-response-body https://raw.githubusercontent.com/tkzc11/QX-Rules/main/Dianshijia.js

[mitm] 

hostname=123.56.125.184

***********************************/

var ddgksf2013=JSON.parse($response.body);ddgksf2013.data.equityTime=4e12,ddgksf2013.data.adEquityTime=4e12,ddgksf2013.data.exclusiveTime=4e12,$done({body:JSON.stringify(ddgksf2013)});
