#Bilibili去广告
# > 哔哩哔哩_繁體CC字幕轉中文簡體
^https?:\/\/i.\.hdslb\.com\/bfs\/subtitle\/.+\.json$ url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Script/bilibili_cc.js
# > 哔哩哔哩_觀影頁面去廣告
^https?:\/\/api\.bilibili\.com\/pgc\/page\/cinema\/tab\? url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Script/bilibili_diy.js
# > 哔哩哔哩_應用開屏去廣告
^https://app.bilibili.com/x/v2/splash/show url reject-dict
# > 哔哩哔哩_應用開屏廣告预加载
^https:\/\/app\.bilibili\.com\/x\/v2\/splash\/list url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Script/bilibili_diy.js
# > 哔哩哔哩_去除統一設置的皮膚
^https?:\/\/app\.bilibili\.com\/x\/resource\/show\/skin\? url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Script/bilibili_diy.js
# > 哔哩哔哩_1080P高码率+4K畫質(番劇和影視除外)
;^https?:\/\/app\.bilibili\.com\/x\/v2\/account\/myinfo\? url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Script/bilibili_diy.js
# > 哔哩哔哩_热搜发现
;^https://app.bilibili.com/x/v2/search/square url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Script/bilibili_diy.js
# > 哔哩哔哩_Defaultword
^https://app.bilibili.com/x/v2/search/defaultwords url reject-dict
# > 哔哩哔哩_Material_Ad
^https?:\/\/api\.bilibili\.com\/x\/vip\/ads\/material\/report url reject-dict
# > 哔哩哔哩_小卡片廣告
^https://api.bilibili.com/pgc/season/player/cards url reject-dict
# > 哔哩哔哩_解除SIM卡地區限制
(^https?:\/\/app\.biliintl.com\/intl\/.+)(&sim_code=\d+)(.+) url 302 $1$3
# > 哔哩哔哩_去除搜索中的大家都在搜
;^https?:\/\/api\.vc\.bilibili\.com\/search_svr\/v\d\/Search\/recommend_words url reject
# > 哔哩哔哩_去除動態中的話題
;^https?:\/\/api\.vc\.bilibili\.com\/topic_svr\/v1\/topic_svr url reject-dict
# > 哔哩哔哩_可能的一些推廣
^https?:\/\/api\.bilibili\.com\/pgc\/season\/app\/related\/recommend\? url reject-dict
# > 哔哩哔哩_漫畫去廣告
^https?:\/\/manga\.bilibili\.com\/twirp\/comic\.v\d\.Comic\/(Flash|ListFlash) url reject-dict
# > 哔哩哔哩_推薦去廣告
^https?:\/\/app\.bilibili\.com\/x\/v2\/feed\/index url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Script/bilibili_diy.js
# > 哔哩哔哩_追番去廣告
^https?:\/\/api\.bilibili\.com\/pgc\/page\/bangumi url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Script/bilibili_diy.js
# > 哔哩哔哩_直播去廣告
^https?:\/\/api\.live\.bilibili\.com\/xlive\/app-room\/v1\/index\/getInfoByRoom url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Script/bilibili_diy.js
# > 哔哩哔哩_動態去廣告
^https?:\/\/api\.vc\.bilibili\.com\/dynamic_svr\/v1\/dynamic_svr\/dynamic_(history|new)\? url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Script/bilibili_diy.js
# > 哔哩哔哩_標籤頁處理
^https?:\/\/app\.bilibili\.com\/x\/resource\/show\/tab url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Script/bilibili_diy.js
# > 哔哩哔哩_我的頁面處理
^https?:\/\/app\.bilibili\.com\/x\/v2\/account\/mine url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Script/bilibili_diy.js
# > 哔哩哔哩_Proto去广告
^https:\/\/app\.bilibili\.com\/bilibili\.app\.(view\.v1\.View\/View|dynamic\.v2\.Dynamic\/DynAll)$ url script-response-body https://raw.githubusercontent.com/app2smile/rules/master/js/bilibili-proto.js
# > 哔哩哔哩_動態廣告
;^https://app\.bilibili\.com/bilibili\.app\.dynamic\.v2\.Dynamic/DynAll$ url script-response-body https://raw.githubusercontent.com/yjqiang/surge_scripts/main/scripts/bilibili/bilibili_dynamic.js