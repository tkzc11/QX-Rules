# ======= 0~9 ======= #
# > 115
^https:\/\/home\.115\.com\/go\?(https?:\/\/)?(.*) url 302 http://$2
# > 12123
^https:\/\/gab\.122\.gov\.cn\/eapp\/m\/sysquery\/adver$ url reject
# > 12306
^https:\/\/ad\.12306\.cn\/ad\/ser\/getAdList$ url script-analyze-echo-response https://raw.githubusercontent.com/tkzc11/Loon/refs/heads/main/Scripts/12306.js
^https:\/\/mobile\.12306\.cn\/otsmobile\/app\/mgs\/mgw\.htm$ url script-response-header https://raw.githubusercontent.com/tkzc11/Loon/refs/heads/main/Scripts/header.js
# > 58同城
^https?:\/\/.+\.58cdn\.com\.cn\/brandads\/ url reject
^https?:\/\/app\.58\.com\/api\/home\/advertising\/ url reject
^https?:\/\/app\.58\.com\/api\/home\/appadv\/ url reject

# ======= A ======= #
# > 阿里巴巴
^https:\/\/acs\.m\.taobao\.com\/gw\/mtop\.alibaba\.advertisementservice\.getadv url reject
^https:\/\/acs\.m\.taobao\.com\/gw\/mtop\.alimama\.etao\.config\.query\/.+?etao_advertise url reject
^https:\/\/acs\.m\.taobao\.com\/gw\/mtop\.alimusic\.common\.mobileservice\.startinit url reject
^https:\/\/acs\.m\.taobao\.com\/gw\/mtop\.etao\.noah\.query\/.+tao_splash url reject
^https:\/\/acs\.m\.taobao\.com\/gw\/mtop\.film\.mtopadvertiseapi\.queryadvertise url reject
^https:\/\/acs\.m\.taobao\.com\/gw\/mtop\.o2o\.ad\.gateway\.get url reject
^https:\/\/acs\.m\.taobao\.com\/gw\/mtop\.taobao\.idle\.home\.welcome url reject
^https:\/\/acs\.m\.taobao\.com\/gw\/mtop\.trip\.activity\.querytmsresources url reject
^https:\/\/gw\.alicdn\.com\/imgextra\/i\d\/[\w!]+-\d-tps-702-758\.png url reject-dict
^https:\/\/(gw|heic)\.alicdn\.com\/imgextra\/i\d\/\d*\/?[\w!]+-\d-(octopus|tps-1125-1602)\.jpg_(1\d{3}|9\d{2})x(1\d{3}|9\d{2})q[59]0 url reject-dict
# > 爱思助手
^https:\/\/list-app-m\.i4\.cn\/getopfstadinfo\.xhtml url reject
# > 澳觅
^https:\/\/interface\.aomiapp\.com\/aomi-ads url reject

# ======= B ======= #
# > 百度翻译
^https?:\/\/mime\.baidu\.com\/v\d\/IosStart\/getStartInfo url reject
^https?:\/\/mime\.baidu\.com\/v\d\/activity\/advertisement url reject
# > 百度跳转(by Fokit)
^https?:\/\/(?!d\.pcs).*(?<!map)\.baidu\.com url request-header (\r\n)User-Agent:.+iPhone.+(\r\n) request-header $1User-Agent: Mozilla/5.0 (iPhone; CPU iPhone OS 13_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1.1 Mobile/15E148 Safari/16C50 Quark/604.1 T7/10.3 SearchCraft/2.6.3 (Baidu; P1 8.0.0)$2
# > 百度文库
^https:\/\/appwk\.baidu\.com\/xpage\/interface\/wknaad url reject-200
# > 北京首汽
^https?:\/\/gateway\.shouqiev\.com\/fsda\/app\/bootImage\.json url reject
# > 不背单词
^https:\/\/cca4app\.beingfine\.cn\/static\/img url reject
^https:\/\/hwimg\.beingfine\.cn\/float_button  url reject
^https:\/\/hwimg\.beingfine\.cn\/card url reject

# ======= C ======= #
# > CSDN
^https:\/\/app-gw\.csdn\.net\/cms-app\/v\d\/home_page\/open_advertisement url reject
# > 曹操出行
^https?:\/\/cap\.caocaokeji\.cn\/advert-bss\/ url reject
^https?:\/\/ptmpcap\.caocaokeji\.cn\/advert-bss\/ url reject-img
^https:\/\/minicap\.caocaokeji\.cn\/advert-bss\/pullAdvert url reject
# > 车来了
^https:\/\/api\.chelaile\.net\.cn\/adpub url reject
^https:\/\/api\.chelaile\.net\.cn\/goocity\/advert url reject
^https:\/\/web\.chelaile\.net\.cn\/api\/adpub url reject

# ======= D ======= #
# > 大众点评
^https?:\/\/img\.meituan\.net\/dpmobile\/.*.(gif|jpg) url reject-200
^https:\/\/img\.meituan\.net\/dpmobile\/.+93241\.png url reject-dict
# > 当当
^https?:\/\/api\.dangdang\.com\/mapi\d\/mobile\/init url reject-200
# > 嘀嗒出行
^https?:\/\/capis(-?\w*)?\.didapinche\.com\/ad\/cx\/startup\? url script-response-body https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/startup/startup.js
^https:\/\/capis(-\d)?\.didapinche\.com\/adbase url reject
# > 滴滴出行/小桔科技
^https:\/\/conf\.diditaxi\.com\.cn\/homepage\/v1\/core url reject
^https:\/\/common\.diditaxi\.com\.cn\/common\/v5 url script-response-body https://raw.githubusercontent.com/tkzc11/QX-Rules/main/didi.js
^https?:\/\/img-ys011\.didistatic\.com\/static\/ad_oss\/.*.jpg url reject
^https?:\/\/pt-starimg\.didistatic\.com\/static\/starimg\/node\/.*.(jpg|png|gif) url reject-200
^https?:\/\/ct\.xiaojukeji\.com\/agent\/v3\/feeds url reject
^https?:\/\/res\.xiaojukeji\.com\/resapi\/activity\/get(Ruled|Preload|PasMultiNotices) url reject
^https?:\/\/res\.xiaojukeji\.com\/resapi\/activity\/mget url reject
^https?:\/\/omgup[0-9]{1}\.xiaojukeji\.com\/api url reject-200
^https?:\/\/omgup*\.xiaojukeji\.com\/api url reject-200
# > 东方航空
^https?:\/\/app\.ceair\.com\/customize\/security\/update url reject-200
^https?:\/\/app\.ceair\.com\/customize\/main\/adScreen url reject-dict

# > 豆瓣
^https:\/\/api\.douban\.com\/v2\/app_ads\/splash url reject
^https:\/\/api\.douban\.com\b.*\/common_ads\? url reject

# ======= E ======= #

# > 饿了么
^https?:\/\/elemecdn\.com\/.+?\/sitemap url reject-img
^https?:\/\/fuss10.elemecdn.com\/.+\/w\/640\/h\/\d{3,4} url reject
^https?:\/\/fuss10.elemecdn.com\/.+\/w\/750\/h\/\d{3,4} url reject
^https?:\/\/fuss10\.elemecdn\.com\/.+?\.mp4 url reject-img
^https?:\/\/cube\.elemecdn\.com\/[\w\/]+\.jpeg\?x-oss-process=image\/resize,m_fill,w_1\d{3},h_2\d{3}\/format,webp\/ url reject
^https?:\/\/cube\.elemecdn\.com\/[\w\/]+\.jpeg\?x-oss-process=image\/resize,m_fill,w_6\d{2},h_8\d{2}\/format,webp\/ url reject
^https?:\/\/cube\.elemecdn\.com\/[\w\/]+\.jpeg\?x-oss-process=image\/resize,m_fill,w_\d{3},h_\d{4}\/format,webp\/ url reject
^https?:\/\/cube\.elemecdn\.com\/\w\/\w{2}\/\w+mp4\.mp4\? url reject
^https?:\/\/www1\.elecfans\.com\/www\/delivery\/ url reject

# ======= F ======= #
# > Firefox
^https?:\/\/(www.)?firefox\.com\.cn url 302 https://firefox.com
# > 飞常准
^https?:\/\/app\.variflight\.com\/ad\/ url reject
^https?:\/\/app\.variflight\.com\/v\d\/advert\/ url reject
# > 飞猪
^https:\/\/acs\.m\.taobao\.com\/gw\/mtop\.fliggy\.crm\.screen\.(allresource|predict) url reject
^https:\/\/acs\.m\.taobao\.com\/gw\/mtop\.film\.mtopadvertiseapi\.queryloadingbanner url reject

# ======= G ======= #
# > Google跳转
^https?:\/\/(www.)?(g|google)\.cn url 302 https://www.google.com
^https?:\/\/(ditu|maps).google\.cn url 302 https://maps.google.com
^https?:\/\/translate.google\.cn url 302 https://translate.google.com
# > 古茗
^https:\/\/newton\.gumingnc\.com\/newton-buyer\/newton\/buyer\/(ump|touch|external\/front) url script-response-body https://raw.githubusercontent.com/tkzc11/QX-Rules/main/ming.js
# > 怪兽充电
^https:\/\/aag\.enmonster\.com\/apa\/index\/advert\/skin url reject
https?:\/\/awg\.enmonster\.com\/apa\/(advert\/demand\/home\/poster|index\/advert\/skin) url reject
^https:\/\/aag\.enmonster\.com\/apa\/advert\/multi\/positions url reject
^https:\/\/aag\.enmonster\.com\/apa\/advert\/demand\/home\/poster url reject
# > 国家地理
^https?+:\/\/wap\.ngchina\.cn\/news\/adverts\/ url reject-200
^https?:\/\/dili\.bdatu\.com\/jiekou\/ad\/ url reject
# > 国美
^https?:\/\/prom\.mobile\.gome\.com\.cn\/mobile\/promotion\/promscms\/\w+\.jsp url reject
^https?:\/\/prom\.mobile\.gome\.com\.cn\/mobile\/promotion\/promscms\/sale\w+\.jsp url reject

# ======= H ======= #
# > 哈啰
^https:\/\/api\.hellobike\.com\/api\?adx url reject
# > 韩剧TV
^https?:\/\/gfp\.veta\.naver\.com\/adcall\? url reject
^https?:\/\/api\.hanju\.koudaibaobao\.com\/api\/carp\/kp\? url reject
# > 航旅纵横
^http:\/\/discardrp\.umetrip\.com\/gateway\/api\/umetrip\/native url reject-200
^http:\/\/oss\.umetrip\.com\/fs\/advert\/polite url reject
^http:\/\/home\.umetrip\.com\/gateway\/api\/umetrip\/native url reject
# > 和风天气
^https:\/\/hfapp-service\.qweather\.net\/v2\.0\/app\/ad\/list\? url reject
# > 盒马
^https:\/\/acs\.m\.taobao\.com\/gw\/mtop\.wdk\.render\.querysinglepage url reject
^https:\/\/acs-m\.freshippo\.com\/gw\/mtop\.wdk\.render\.querysinglepage url reject
# > 虎牙直播
^https?+:\/\/business\.msstatic\.com\/advertiser\/ url reject-200
^https?:\/\/cdnfile1\.msstatic\.com\/cdnfile\/appad\/ url reject-img
# > 花小猪打车
^https:\/\/api\.hongyibo\.com\.cn url reject
^https:\/\/res\.hongyibo\.com\.cn\/os\/gs\/resapi\/activity url reject
# > 黄油相机
^https?:\/\/api4\.bybutter\.com\/v\d\/app\/placements\/\d\/advertisements url reject

# ======= J ======= #
# > 街电
^https:\/\/s\.jiediankeji\.com\/adv url reject
# > 金山词霸
^https?:\/\/dict-mobile\.iciba\.com\/interface\/index\.php\?.+(c=ad|collectFeedsAdShowCount|KSFeedsAdCardViewController) url reject
^https?:\/\/mobile-pic\.cache\.iciba\.com\/feeds_ad\/ url reject
^https?+:\/\/service\.iciba\.com\/popo\/open\/screens\/v\d\?adjson url reject-200
^https?+:\/\/\w+?\.kingsoft-office-service\.com\/ad url reject-200
^https?:\/\/.+?\.kingsoft-office-service\.com url reject
# > 京东
^http:\/\/\w{32}\.jddebug\.com\/diagnose\? url reject
^https:\/\/api\.m\.jd\.com\/client\.action\?functionId=(deliverLayer|getTabHomeInfo|myOrderInfo|orderTrackBusiness|personinfoBusiness|start|welcomeHome) url script-response-body https://raw.githubusercontent.com/tkzc11/Loon/refs/heads/main/Scripts/jingdong.js
^https:\/\/api\.m\.jd\.com\/client\.action\?functionId=(searchBoxWord|stationPullService|uniformRecommend[06]) url reject-dict
# > 京东极速版
^https:\/\/api\.m\.jd\.com\/client\.action\?functionId=lite_advertising url response-body jdLiteAdvertisingVO response-body rucu6
# > 京东读书
^https:\/\/jdread-api\.jd.com\/jdread\/api\/channel\/module\/opens url reject-200
^https:\/\/jdread-api\.jd.com\/jdread\/api\/popup url reject-200
# > 京东健康
^https?:\/\/m\.360buyimg\.com\/babel\/jfs\/t1\/[0-9]{6}\/[0-9]{2}\/[0-9]{5}\/[0-9]{6}\/.*.jpg url reject-200
^https?:\/\/m\.360buyimg\.com\/babel\/jfs\/t1\/180291\/5\/23800\/294871\/625f5da2E13ac0ba3\/230238c767c61b6d\.jpg url reject
# > 京东金融
^https?:\/\/ms\.jr\.jd\.com\/gw\/generic\/aladdin\/(new)?na\/m\/getLoadingPicture url reject
# > 京东云无线宝
^https:\/\/router-app-api\.jdcloud\.com\/v\d\/board\/routerAppSplash url reject-200
# > 京喜
^https?:\/\/api\.m\.jd\.com\/api\?functionId=delivery_show url script-response-body https://raw.githubusercontent.com/ddgksf2013/Scripts/master/startup.js

# ======= K ======= #
# > 肯德基
^https:\/\/res.kfc.com.cn\/advertisement\/ url reject-200
^https:\/\/res.kfc.com.cn\/CRM\/kfcad\/apphome6\/apphome.*json url response-body bootStrapAd response-body ddgksf2013
^https:\/\/res\.kfc\.com\.cn\/CRM\/kfcad\/custom_v2\/wxapp url reject
^https:\/\/dynamicad\.kfc\.com\.cn\/api/app5/homepage/ai/popup url reject-200
^https:\/\/orders\.kfc\.com\.cn\/preorder-portal\/api\/v2\/(coupon|activity) url reject
# > 酷安
^https:\/\/api\.coolapk\.com\/v6\/feed\/(detail|replyList)\? url script-response-body https://raw.githubusercontent.com/tkzc11/Loon/refs/heads/main/Scripts/coolapk.js
^https:\/\/api\.coolapk\.com\/v6\/main\/(dataList|indexV8|init) url script-response-body https://raw.githubusercontent.com/tkzc11/Loon/refs/heads/main/Scripts/coolapk.js
^https:\/\/api\.coolapk\.com\/v6\/page\/dataList\? url script-response-body https://raw.githubusercontent.com/tkzc11/Loon/refs/heads/main/Scripts/coolapk.js
^https:\/\/api\.coolapk\.com\/v6\/search\?.*type=hotSearch url reject-dict
# > 快递100
^https?:\/\/cdn\.kuaidi100\.com\/images\/open\/appads url reject-img
^https?:\/\/p\.kuaidi100\.com\/mobile\/mobileapi\.do url reject
# > 快手
^https:\/\/open\.e\.kuaishou\.com\/rest\/e\/v3\/open\/univ url reject

# ======= L ======= #
# > 来电
^https:\/\/mobile-api\.imlaidian\.com\/api\/args url reject

# ======= M ======= #
# > 麦当劳
^https:\/\/api\.mcd\.cn\/bff\/portal\/(richpop|home\/splash) url reject-200
# > 猫眼
^https:\/\/p0\.pipi\.cn\/(adAdmin|mediaplus\/maoyantong_ads_fe)\/\w+\.jpg\?imageMogr2\/quality\/ url reject-dict
^https:\/\/p0\.pipi\.cn\/(adAdmin|mediaplus\/maoyantong_ads_fe)\/\w+\.(jpg|png)\?imageMogr2\/thumbnail\/(860x0|!165x165|!1049x1169) url reject-dict
# > 美图秀秀
^https:\/\/mea\.meitudata\.com\/kaiping url reject
# > 美团/美团外卖
^http:\/\/wmapi\.meituan\.com\/api\/v7\/(loadInfo|openscreen|startpicture)\? url reject-dict
^https:\/\/flowplus\.meituan\.net\/v1\/mss_\w+\/linglong\/\d+\.jpg url reject-dict
^https:\/\/img\.meituan\.net\/bizad\/bizad_brandCpt_\d+\.jpg url reject-dict
^https:\/\/s3plus\.meituan\.net\/ocean-blk-index\/index\/blk_conf_73\.json url reject-dict
^https:\/\/s3plus\.meituan\.net\/v1\/mss_\w+\/(brandcpt-vedio|waimai-alita)\/\w+\.zip$ url reject-dict
# > 蜜雪冰城
^https:\/\/mxsa\.mxbc\.net\/api\/v1\/adinfo\/adplace\/query url reject

# ======= N ======= #
# > 南方航空
^https:\/\/3g\.csair\.com\/CSMBP\/bookProcess\/homepopup\/queryAdvertisement url reject-200
^https:\/\/3g\.csair\.com\/CSMBP\/data\/homePage\/getLaunchInfoNew\.do url reject-200

# ======= O ======= #

# ======= P ======= #
# > Pixiv
^https:\/\/oauth\.secure\.pixiv\.net\/(auth\/token) url script-response-body https://raw.githubusercontent.com/ddgksf2013/Scripts/master/pixivAds.js
# > 澎湃新闻
^https?:\/\/adpai\.thepaper\.cn\/.+&ad= url reject
# > 拼多多
^https:\/\/api\.(pinduoduo|yangkeduo)\.com\/api\/cappuccino\/splash url reject

# ======= Q ======= #
# > QQ浏览器
^https:\/\/us\.l\.qq\.com\/exapp\?spsa=\d url reject
# > 去哪儿旅行
^https:\/\/homefront\.qunar\.com\/front\/splash\/ad url reject
^https:\/\/qde\.qunar\.com\/preload url reject-200
# > 全家便利店
^https:\/\/fmapp\.chinafamilymart\.com\.cn\/api\/app\/biz\/base\/appversion\/latest url reject

# ======= R ======= #
# > 人民日报
^https:\/\/app\.peopleapp\.com\/Api\/\d+/HomeApi\/getAdvertImage url reject
^https:\/\/app\.peopleapp\.com\/Api\/\d+/HomeApi\/adv url reject-dict
^https?:\/\/stat\.peopleapp\.com\/ url reject
# > 瑞幸咖啡
^https:\/\/capi\.lkcoffee\.com\/resource\/m\/sys\/(homePage\/contactor\/modules|app\/adposNew) url reject

# ======= S ======= #
# > Soul
^https:\/\/data-collector\.soulapp\.cn\/api\/data\/report$ url reject
# > 杉果
^https:\/\/api\.sonkwo\.cn\/store\/custom\/cube\/kind\/AppLaunchAd_Text url reject-200
# > 四川航空
^https?:\/\/mapi\.sichuanair\.com\/zt\/tribeport\/encrypt_translate_key url reject-200
# > 首旅如家
^https?:\/\/app\.homeinns\.com\/api\/landing url reject
# > 首汽约车
^https:\/\/gw-passenger-wap\.01zhuanche\.com\/gw-passenger-wap\/zhuanche-passenger-token\/commonSkipToken\/common\/getAdList url reject
# > 顺丰
^https:\/\/ccsp-egmas\.sf-express\.com\/cx-app-base\/base\/app\/appVersion\/detectionUpgrade url reject
^https:\/\/ccsp-egmas\.sf-express\.com\/cx-app-base\/base\/ad\/queryInfoFlow url script-response-body https://raw.githubusercontent.com/ddgksf2013/Scripts/master/shunfeng_json.js
^https:\/\/ccsp-egmas\.sf-express\.com\/cx-app-base\/base\/ad\/queryAdImages url reject
^https:\/\/shopic\.sf-express\.com\/crm\/mobile\/common\/flashscreen url reject
^https:\/\/mcs-mimp-web\.sf-express\.com\/mcs-mimp\/integralPlanet\/getCxAdvertiseList url reject
^https:\/\/ucmp-static\.sf-express\.com\/proxy\/wxbase\/wxTicket\/wxLiveStreamInfo\?pageNo url reject
^https:\/\/ucmp\.sf-express\.com\/proxy\/operation-platform\/info-flow-adver\/query url reject
^https:\/\/ucmp\.sf-express\.com\/proxy\/esgcempcore\/member(Goods\/pointMallService\/goodsList|Manage\/memberEquity\/queryRecommendEquity|ActLengthy\/fullGiveActivityService\/fullGiveInfo) url reject
# > 搜狐
^https?+:\/\/api\.k\.sohu\.com\/api\/news\/adsense url reject-200
^https?+:\/\/pic\.k\.sohu\.com\/img8\/wb\/tj\/ url reject-200
^https?+:\/\/s1\.api\.tv\.itc\.cn\/v4\/mobile\/control\/switch\.json url reject-200
^https?:\/\/(api|api-bk\d+)\.tv\.sohu\.com\/agg\/api\/app\/config\/bootstrap url reject
^https?:\/\/agn\.aty\.sohu\.com\/m? url reject-img
^https?:\/\/api\.k\.sohu\.com\/api\/channel\/ad\/ url reject-img
^https?:\/\/hui\.sohu\.com\/predownload2\/? url reject-img
^https?:\/\/m\.aty\.sohu\.com\/openload? url reject-img
^https?:\/\/mmg\.aty\.sohu\.com\/mqs? url reject-img
^https?:\/\/mmg\.aty\.sohu\.com\/pvlog? url reject-img
^https?:\/\/photocdn\.sohu\.com\/tvmobilemvms url reject-img
^https?:\/\/pic\.k\.sohu\.com\/img\d\/wb\/tj\/ url reject
^https?:\/\/s\.go\.sohu\.com\/adgtr\/\?gbcode= url reject-img
# > 苏宁
^https?:\/\/mpcs\.suning\.com\/mpcs\/dm\/getDmInfo url reject

# ======= T ======= #
# > TapTap
https:\/\/api\.taptapdada\.com\/startup\-logo\/v1\/combo\? url reject
# > T3出行
^https:\/\/passenger\.t3go\.cn\/(solution\-|common\-)?(passenger\-)?(activity\-|app\-)?api\/notoken\/(trip\/)?api\/(home\/|common\/)?(v[1-3]\/)?(ad\/getNegativescreen|solution\/passenger\/open\/getHomeMenu|leftmenu|getHomeInfoGlobal) url script-response-body https://raw.githubusercontent.com/tkzc11/QX-Rules/main/T3.js
^https:\/\/passenger\.t3go\.cn\/passenger-activity-api\/notoken\/api\/v1\/resource\/getSource url reject
# > 太平洋电脑
^https?+:\/\/mrobot\.pconline\.com\.cn\/s\/onlineinfo\/ad\/ url reject-200
^https?:\/\/agent-count\.pconline\.com\.cn\/counter\/adAnalyse\/ url reject
^https?:\/\/mrobot\.(pcauto|pconline)\.com\.cn\/v\d\/ad\dp url reject
^https?:\/\/mrobot\.pcauto\.com\.cn\/xsp\/s\/auto\/info\/(ad|preload) url reject
# > 腾讯地图
^https:\/\/4gimg\.map\.qq\.com\/mwaSplash\/ url reject-200
^https:\/\/4gimg\.map\.qq\.com\/mwaSplash\/ url reject
# > 腾讯广告
^https?:\/\/btrace\.qq\.com url reject-200
^https?:\/\/api2\.helper\.qq\.com\/game\/buttons url reject-img
^https?:\/\/\w+\.beacon\.qq\.com url reject
^https?:\/\/lives\.l\.qq\.com\/livemsg\?sdtfrom= url reject-img
^https?:\/\/imgcache\.qq\.com\/qqlive\/ url reject-img
^https?:\/\/mtteve\.beacon\.qq\.com\/analytics url reject-img
^https?+:\/\/vv\.video\.qq\.com\/getvmind\? url reject-200
^https?+:\/\/ssl\.kohsocialapp\.qq\.com:10001\/game\/buttons url reject-200
^https?+:\/\/qt\.qq\.com\/lua\/mengyou\/get_splash_screen_info url reject-200
^https?+:\/\/3gimg\.qq\.com\/tencentMapTouch\/app\/activity\/ url reject-200
^https?+:\/\/3gimg\.qq\.com\/tencentMapTouch\/splash\/ url reject-200
^https?:\/\/.+?\.l\.qq\.com url reject
^https?:\/\/y\.gtimg\.cn\/music\/.*?_Ad/\d+\.png url reject-img
^https?:\/\/splashqqlive\.gtimg\.com\/website\/\d{6} url reject-img
^https?:\/\/qzonestyle\.gtimg\.cn\/qzone\/biz\/gdt\/mob\/sdk\/ios\/v2\/ url reject-img
^https?:\/\/discuz\.gtimg\.cn\/cloud\/scripts\/discuz_tips\.js url reject-img
^https?:\/\/bla\.gtimg\.com\/qqlive\/\d{6}.+?\.png url reject-img
^https?:\/\/mmgr\.gtimg\.com\/gjsmall\/qiantu\/upload\/ url reject-img
^https?:\/\/mmgr\.gtimg\.com\/gjsmall\/qqpim\/public\/ios\/splash\/.+?\/\d{4}_\d{4} url reject-img
## QQ音乐
^https?:\/\/y\.gtimg\.cn\/music\/common\/upload\/t_splash_info\/ url reject
^https?:\/\/y\.gtimg\.cn\/music\/common\/upload\/kg_ad/.*?\d{4}\.jpg url reject-img
^https?:\/\/y\.gtimg\.cn\/music\/common\/upload\/targeted_ads url reject-img
## 腾讯体育
^https?:\/\/news\.ssp\.qq\.com\/app url reject
^https?:\/\/sports3\.gtimg\.com\/community\/20cf93884470434eaf38b2e77ab7796a\.png url reject
## 腾讯新闻
^https?:\/\/r\.inews\.qq\.com\/(adsBlacklist|getFullScreenPic|getQQNewsRemoteConfig) url reject
^https?:\/\/r\.inews\.qq\.com\/(getBannerAds|getNewsRemoteConfig|getSplash|searchHotCatList|upLoadLoc) url reject
## 腾讯游戏
^https?:\/\/ssl\.kohsocialapp\.qq\.com:\d+\/game\/buttons url reject
## 腾讯游戏社区
^https?:\/\/static\.gameplus\.qq\.com\/img\/\d{10}-\d{4}$ url reject
# > 天气通
^https?+:\/\/tqt\.weibo\.cn\/.+?advert\.index url reject-200
^https?:\/\/tqt\.weibo\.cn\/[\w=?&%.-]+advert\.index url reject
^https?+:\/\/tqt\.weibo\.cn\/api\/advert\/ url reject-200
^https?:\/\/tqt\.weibo\.cn\/overall\/redirect\.php\?r=(tqt_sdkad|tqtad) url reject
# > 天星金融
^https?:\/\/t1\.market\.xiaomi\.com\/thumbnail\/webp\/w1170q100\/ url reject-200
# > 天翼云盘
^https?:\/\/api\.cloud\.189\.cn\/guns\/img\/recommendedPosition url reject-dict
# > 同程旅行
^https:\/\/wx\.17u\.cn\/xcxhomeapi\/((aggregator\/index)|(home\/(screen|banner|converge)))$ url reject

# ======= U ======= #

# ======= V ======= #

# ======= W ======= #
# > WPS
^https?:\/\/ios\.wps\.cn\/ad-statistics-service url reject
^https?+:\/\/mobile-pic\.cache\.iciba\.com\/feeds_ad\/ url reject-200
# > 万达电影
^https:\/\/misc-api-prd-mx\.wandafilm\.com\/commend\/common_banner_batch\.api\?bannerInfos=%5B%7B%22cinemaI url response-body "WX_index_mp-&-boxAD" response-body "WX_index_mp-&-boxAD0"
# > 网易考拉
^https?:\/\/sp\.kaola\.com\/api\/openad url reject
^https?:\/\/gw\.kaola\.com\/gw\/dgmobile\/newOpenAd url reject
# > 网易有道词典
^https:\/\/api-overmind\.youdao\.com\/openapi\/get\/luna\/dict\/dict-mobile\/prod\/dictCommonConfig url reject
^https:\/\/dictvip-business\.youdao\.com\/home\/ad url reject
^https:\/\/dict\.youdao\.com\/course\/tab\/translateTab url reject
^https:\/\/dict\.youdao\.com\/homepage\/tile url reject
^https:\/\/cdke\.youdao\.com\/course3\/recommend\/dict\/startup url reject
^https:\/\/dict\.youdao\.com\/commonsearch url reject
^https:\/\/dict\.youdao\.com\/vip\/activity\/couponinfo url reject
^https:\/\/dict\.youdao\.com\/dictusertask\/system url reject
# > 网易蜗牛读书
^https:\/\/easyreadfs\.nosdn\.127\.net\/ad-material\/ url reject
# > 网易严选
^https:\/\/support\.you\.163\.com\/appversync\/check\.do url reject
^https:\/\/support\.you\.163\.com\/xhr\/boot\/getBootMedia\.json url reject
^https:\/\/m\.you\.163\.com\/activity\/popWindow url reject
^https:\/\/yanxuan\.nosdn.127.net\/(static-union\/)?.*\.gif url reject
^https:\/\/yanxuan\.nosdn\.127\.net\/.*\.mp4 url reject
# > 网易邮箱
^https?:\/\/appconf\.mail\.163\.com\/mmad\/get\.do url reject
^https?:\/\/client\.mail\.163.com\/apptrack\/confinfo\/(searchMultiAds.do|showAds.do) url reject
# > 微密圈
^http:\/\/wapi\.wemequan\.cn\/Index\/GetAdvertiseNewList url reject-200
# > 唯品会
^https:\/\/mapi\.appvipshop\.com\/vips-mobile\/rest\/activity\/advertisement\/get url reject-200
^https:\/\/mapi\.appvipshop\.com\/vips-mobile\/rest\/layout\/productList\/eventData\/v url reject-200
^https:\/\/mapi\.appvipshop\.com\/vips-mobile\/rest\/activity\/coupon\/float_entrance\/get\?api_key url reject-200
# > 微店
^https:\/\/thor\.weidian\.com\/ares\/home\.splash url reject-200

# ======= X ======= #
# > 厦门航空
^https:\/\/mobileapi\.xiamenair\.com\/mobile-starter\/api url reject-dict
# > 闲鱼
^https:\/\/gw\.alicdn\.com\/mt\/ url reject
^https:\/\/gw\.alicdn\.com\/tfs\/.+\d{3,4}-\d{4} url reject
^https:\/\/gw\.alicdn\.com\/tps\/.+\d{3,4}-\d{4} url reject
^https:\/\/acs\.m\.taobao\.com\/gw\/mtop\.taobao\.idle\.home\.welcome url reject
# > 享道出行
^https:\/\/passengerapi\.saicmobility\.com\/(ad\/requestAd|pay\/v1\/queryOpenedCouponPackages) url reject
# > 向日葵
^https:\/\/client-api-v2\.oray\.com\/materials\/(SLCC_IOS_STARTUP_ADV|SLCC_iOS_DEVICE_FREE|SLCC_iOS_DEVICE_LIST_ADV|SLCC_IOS_DEVICE_ADV|SUNLOGIN_CLIENT_IOS_PROMOTION|SLCC_IOS_DEVICE|SLCC_IOS_STARTUP) url reject
# > 小米
## 小米商城
^https:\/\/shop-api\.retail\.mi\.com\/mtop\/navi\/(rec\/merge\/|skywheel\/mishop\/splash) url reject-dict
^https:\/\/api\.m\.mi\.com\/v1\/(app\/start|order\/expressView|product\/productView) url script-response-body https://raw.githubusercontent.com/tkzc11/Loon/refs/heads/main/Scripts/myBlockAds.js
^https:\/\/shop-api\.retail\.mi\.com\/mtop\/navi\/skywheel\/mishop\/splash url reject
^https:\/\/api\.m\.mi\.com\/v1\/app\/popup_info$ url reject
^https:\/\/api\.m\.mi\.com\/v1\/misearch\/search_input$ url reject
^https:\/\/api\.m\.mi\.com\/v2\/search\/search_default$ url reject
^https:\/\/api\.m\.mi\.com\/v1\/home\/page_feed(_v5)?$ url reject
## 小米金融
^https:\/\/api\.jr\.mi\.com\/jr\/api\/playScreen url reject
^https:\/\/api\.jr\.mi\.com\/v\d\/adv url reject
## 米家
^https:\/\/home\.mi\.com\/cgi-op\/api\/v1\/recommendation\/(banner|myTab|openingBanner) url reject
## 小米打印
^https:\/\/api\.indeedpower\.com\/v1\/m\/edu\/module\/homepage_banner\/\?randomStr url reject
## 小米有品
^https:\/\/shopapi\.io\.mi\.com\/mtop\/mf\/resource\/homePage\/pageConfig url reject-200
# > 新浪新闻
^https?+:\/\/edit\.sinaapp\.com\/ua\?t=adv url reject-200
# > 星巴克
^https:\/\/3pp\.starbucks\.com\.cn\/wxmem\/popup url reject
^https:\/\/3pp\.starbucks\.com\.cn\/wxmem\/index\/banner url reject
^https:\/\/3pp\.starbucks\.com\.cn\/wxmem\/index\/global url reject
# > 迅雷
^https?:\/\/api-shoulei-ssl\.xunlei\.com\/flowhub\/v\d\/slots:batchGet url reject-200
^https?+:\/\/images\.client\.vip\.xunlei\.com\/.+?\/advert\/ url reject-200
^https?:\/\/images\.client\.vip\.xunlei\.com\/.+?\/advert\/ url reject
^https?:\/\/images\.client\.vip\.xunlei\.com\/.+\/advert\/ url reject

# ======= Y ======= #
# > 雅虎
^https?:\/\/m\.yap\.yahoo\.com\/v\d{2}\/getAds\.do url reject
# > 央视
^https?+:\/\/www\.cntv\.cn\/nettv\/adp\/ url reject-200
# > 央视频
^https?:\/\/cdn\.cmgadx\.com\/sdk\/pool\/m8uTS50pt3DC0Xd6\.json url reject-200
# > 一刻相册
^https?:\/\/issuecdn\.baidupcs\.com\/issue\/netdisk\/ts_ad\/ url reject-200
# > 印象笔记
^https?:\/\/app\.yinxiang\.com\/ads\/ url reject
# > 云闪付
^https:\/\/wallet\.95516\.com(:10533)?\/s\/wl\/icon\/large\/1 url reject

# ======= Z ======= #
# > 掌上生活
^https:\/\/mbasecc\.bas\.cmbchina\.com\/Edge\/api\/mlife\.clientface\.clientservice\.api\.advertiseService\/preCacheAdvertiseSec url reject
^https:\/\/intellicc\.bas\.cmbchina\.com\/Edge\/api\/mlife\.intelli\.render\.api\.render\/getDynamicDataSec url reject
# > 中国电信
^https?:\/\/cloud\.189\.cn\/include\/splash\/ url reject
^https?:\/\/zt-app\.go189\.cn\/zt-app\/welcome\/.*?Animation url reject-img
# > 中国建设银行
^http:\/\/image1\.ccb\.com\/newsinfo\/eBranch\/check\/(nf\/newfin\/activity|po\/poortheme\/activity)\/\w+\.png url reject
^https?:\/\/adv\.ccb\.com\/ebda\/ctm_adv url reject
# > 中国移动
^https?:\/\/client\.app\.coc\.10086\.cn\/biz-orange\/DN\/init\/startInit url reject
^https?:\/\/client\.app\.coc\.10086\.cn\/biz-orange\/DN\/explorePage\/getAdverList url reject
## 多个悬浮窗
^https:\/\/(client\.app\.coc|h\.app\.coc|app)\.10086\.cn\/biz-orange\/DN\/emotionMarket url reject
# > 中国移动云盘
^https?:\/\/mcmm\.caiyun\.feixin\.10086\.cn:80\/mcmm\/api\/IAdvert url reject-200
^https?:\/\/mcmm\.caiyun\.feixin\.10086\.cn:80\/mcmm\/api\/v\d\/getAdverts url reject-200
^https?:\/\/middle\.yun\.139\.com\/openapi\/cardConfig\/queryCardInfoV3 url reject-200
^https:\/\/mrp\.mcloud\.139\.com\/mc\/mc-client-service\/openapi\/letter\/query url reject-dict
# > 中国知网
^https?:\/\/xyz\.cnki\.net\/resourcev7\/api\/manualpush\/SlidsList$ url reject-200
# > 中油好客
^https:\/\/minipro\.95504\.net\/app\/json\/ad\/getPopAdData url reject-dict
^https:\/\/minipro\.95504\.net\/app\/json\/ad\/getIndexAdData url reject-dict
# > 作业帮
^https?:\/\/syh\.zybang\.com\/com\/adx\/impress url reject-200

hostname = home.115.com, gab.122.gov.cn, ad.12306.cn, mobile.12306.cn, *.58cdn.com.cn, app.58.com, acs.m.taobao.com, gw.alicdn.com, heic.alicdn.com, list-app-m.i4.cn, interface.aomiapp.com, mime.baidu.com, map.baidu.com, appwk.baidu.com, gateway.shouqiev.com, cca4app.beingfine.cn, hwimg.beingfine.cn, app-gw.csdn.net, api.caiyunapp.com, cap.caocaokeji.cn, ptmpcap.caocaokeji.cn, minicap.caocaokeji.cn, api.chelaile.net.cn, web.chelaile.net.cn, img.meituan.net, api.dangdang.com, capis*.didapinche.com, conf.diditaxi.com.cn, common.diditaxi.com.cn, res.xiaojukeji.com, ct.xiaojukeji.com, img-ys011.didistatic.com, pt-starimg.didistatic.com, omgup*.xiaojukeji.com, app.ceair.com, api.douban.com, elemecdn.com, fuss10.elemecdn.com, cube.elemecdn.com, www1.elecfans.com, firefox.com.cn, app.variflight.com, www.google.cn, ditu.google.cn, maps.google.cn, translate.google.cn, newton.gumingnc.com, aag.enmonster.com, awg.enmonster.com, wap.ngchina.cn, dili.bdatu.com, prom.mobile.gome.com.cn, api.hellobike.coming, gfp.veta.naver.com, api.hanju.koudaibaobao.com, hfapp-service.qweather.net, acs-m.freshippo.com, business.msstatic.com, api.hongyibo.com.cn, res.hongyibo.com.cn, api4.bybutter.com, yunbusiness.ccb.com, s.jiediankeji.com, *.kingsoft-office-service.com, api.m.jd.com, bdsp-x.jd.com, dsp-x.jd.com, jdread-api.jd.com, m.360buyimg.com, ms.jr.jd.com, router-app-api.jdcloud.com, res.kfc.com.cn, orders.kfc.com.cn, dynamicad.kfc.com.cn, api.coolapk.com, cdn.kuaidi100.com, p.kuaidi100.com, mobile-api.imlaidian.com, api.mcd.cn, p0.pipi.cn, mea.meitudata.com, mxsa.mxbc.net, flowplus.meituan.net, s3plus.meituan.net, 3g.csair.com, oauth.secure.pixiv.net, adpai.thepaper.cn, api.pinduoduo.com, api.yangkeduo.com, api.qdingnet.com, img1.qdingnet.com, homefront.qunar.com, qde.qunar.com, fmapp.chinafamilymart.com.cn, y.gtimg.cn, *.peopleapp.com, capi.lkcoffee.com, data-collector.soulapp.cn, api.sonkwo.cn, mapi.sichuanair.com, app.homeinns.com, gw-passenger-wap.01zhuanche.com, ccsp-egmas.sf-express.com, shopic.sf-express.com, mcs-mimp-web.sf-express.com, ucmp-static.sf-express.com, ucmp.sf-express.com, *.k.sohu.com, *.tv.sohu.com, mpcs.suning.com, api.taptapdada.com, passenger.t3go.cn, mrobot.pconline.com.cn, *4gimg.map.qq.com, btrace.qq.com, news.ssp.qq.com, sports3.gtimg.cn, news.l.qq.com, r.inews.qq.com, ssl.kohsocialapp.qq.com, static.gameplus.qq.com, tqt.weibo.cn, t1.market.xiaomi.com, api.cloud.189.cn, wx.17u.cn, misc-api-prd-mx.wandafilm.com, sp.kaola.com, gw.kaola.com, api-overmind.youdao.com, dictvip-business.youdao.com, dict.youdao.com, cdke.youdao.com, easyreadfs.nosdn.127.net, support.you.163.com, yanxuan.nosdn.127.net, client.mail.163.com, appconf.mail.163.com, interface*.music.163.com, mapi.appvipshop.com, thor.weidian.com, mobileapi.xiamenair.com, client-api.oray.com, client-api-v2.oray.com, passengerapi.saicmobility.com, api.m.mi.com, api.jr.mi.com, home.mi.com, api.indeedpower.com, shopapi.io.mi.com, mbd.baidu.com, edit.sinaapp.com, http://3pp.starbucks.com.cn, api-shoulei-ssl.xunlei.com, images.client.vip.xunlei.com, m.yap.yahoo.com, www.cntv.com, cdn.cmgadx.com, issuecdn.baidupcs.com, app.yinxiang.com, wallet.95516.com, mbasecc.bas.cmbchina.com, intellicc.bas.cmbchina.com, cloud.189.cn, adv.ccb.com, clientaccess.10086.cn, wap.js.10086.cn, mcmm.caiyun.feixin.10086.cn, middle.yun.139.com, mrp.mcloud.139.com, xyz.cnki.net, minipro.95504.net, syh.zybang.com
