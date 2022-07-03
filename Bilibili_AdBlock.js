#Bilibili去广告
# > 繁体CC字幕转中文简体
^https?:\/\/i.\.hdslb\.com\/bfs\/subtitle\/.+\.json$ url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Script/bilibili_cc.js
# > 观影页面去广告
;^https?:\/\/api\.bilibili\.com\/pgc\/page\/cinema\/tab\? url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Script/bilibili_diy.js
# > 应用开屏去广告
^https://app.bilibili.com/x/v2/splash/show url reject-dict
# > 应用开屏广告预加载
^https:\/\/app\.bilibili\.com\/x\/v2\/splash\/list url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Script/bilibili_diy.js
;# > 去除统一设置的皮肤
^https?:\/\/app\.bilibili\.com\/x\/resource\/show\/skin\? url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Script/bilibili_diy.js
# > 1080P高码率+4K画质(番剧和影视除外)
;^https?:\/\/app\.bilibili\.com\/x\/v2\/account\/myinfo\? url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Script/bilibili_diy.js
# > 热搜发现
;^https://app.bilibili.com/x/v2/search/square url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Script/bilibili_diy.js
# > Defaultword
^https://app.bilibili.com/x/v2/search/defaultwords url reject-dict
# > Material_Ad
^https?:\/\/api\.bilibili\.com\/x\/vip\/ads\/material\/report url reject-dict
# > 小卡片广告
^https://api.bilibili.com/pgc/season/player/cards url reject-dict
# > 解除SIM卡地区限制
(^https?:\/\/app\.biliintl.com\/intl\/.+)(&sim_code=\d+)(.+) url 302 $1$3
# > 去除搜索中的大家都在搜
;^https?:\/\/api\.vc\.bilibili\.com\/search_svr\/v\d\/Search\/recommend_words url reject
# > 去除动态中的话题
;^https?:\/\/api\.vc\.bilibili\.com\/topic_svr\/v1\/topic_svr url reject-dict
# > 可能的一些推广
^https?:\/\/api\.bilibili\.com\/pgc\/season\/app\/related\/recommend\? url reject-dict
# > 漫画去广告
^https?:\/\/manga\.bilibili\.com\/twirp\/comic\.v\d\.Comic\/(Flash|ListFlash) url reject-dict
# > 推荐去广告
^https?:\/\/app\.bilibili\.com\/x\/v2\/feed\/index url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Script/bilibili_diy.js
# > 追番去广告
^https?:\/\/api\.bilibili\.com\/pgc\/page\/bangumi url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Script/bilibili_diy.js
# > 直播去广告
^https?:\/\/api\.live\.bilibili\.com\/xlive\/app-room\/v1\/index\/getInfoByRoom url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Script/bilibili_diy.js
# > 动态去广告
^https?:\/\/api\.vc\.bilibili\.com\/dynamic_svr\/v1\/dynamic_svr\/dynamic_(history|new)\? url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Script/bilibili_diy.js
# > 标签页处理
^https?:\/\/app\.bilibili\.com\/x\/resource\/show\/tab url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Script/bilibili_diy.js
# > 我的页面处理
^https?:\/\/app\.bilibili\.com\/x\/v2\/account\/mine url script-response-body https://raw.githubusercontent.com/ddgksf2013/Cuttlefish/master/Script/bilibili_diy.js
# > Proto去广告
^https:\/\/app\.bilibili\.com\/bilibili\.app\.(view\.v1\.View\/View|dynamic\.v2\.Dynamic\/DynAll)$ url script-response-body https://raw.githubusercontent.com/app2smile/rules/master/js/bilibili-proto.js
# > 动态广告
;^https://app\.bilibili\.com/bilibili\.app\.dynamic\.v2\.Dynamic/DynAll$ url script-response-body https://raw.githubusercontent.com/yjqiang/surge_scripts/main/scripts/bilibili/bilibili_dynamic.js
