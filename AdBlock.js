# ======= 0~9 ======= #
# > 115
^https:\/\/home\.115\.com\/go\?(https?:\/\/)?(.*) url 302 http://$2
# > 12123
^https:\/\/gab\.122\.gov\.cn\/eapp\/m\/sysquery url reject
# > 12306
^https?:\/\/ad\.12306\.cn\/ad\/ser\/getAdList url script-analyze-echo-response https://raw.githubusercontent.com/ddgksf2013/Scripts/master/12306.js
# > 58同城
^https?:\/\/.+\.58cdn\.com\.cn\/brandads\/ url reject
^https?:\/\/app\.58\.com\/api\/home\/advertising\/ url reject
^https?:\/\/app\.58\.com\/api\/home\/appadv\/ url reject

# ======= A ======= #
# > AcFun
^https?+:\/\/aes\.acfun\.cn\/s\?adzones url reject-200
^https?:\/\/aes\.acfun\.cn\/s\?adzones url reject
^https?:\/\/api-new\.app\.acfun\.cn\/rest\/app\/flash\/screen\/ url reject
# > 阿里巴巴
^https:\/\/acs\.m\.taobao\.com\/gw\/mtop\.alibaba\.advertisementservice\.getadv url reject
^https:\/\/acs\.m\.taobao\.com\/gw\/mtop\.alimama\.etao\.config\.query\/.+?etao_advertise url reject
^https:\/\/acs\.m\.taobao\.com\/gw\/mtop\.alimusic\.common\.mobileservice\.startinit url reject
^https:\/\/acs\.m\.taobao\.com\/gw\/mtop\.etao\.noah\.query\/.+tao_splash url reject
^https:\/\/acs\.m\.taobao\.com\/gw\/mtop\.film\.mtopadvertiseapi\.queryadvertise url reject
^https:\/\/acs\.m\.taobao\.com\/gw\/mtop\.o2o\.ad\.gateway\.get url reject
^https:\/\/acs\.m\.taobao\.com\/gw\/mtop\.taobao\.idle\.home\.welcome url reject
^https:\/\/acs\.m\.taobao\.com\/gw\/mtop\.trip\.activity\.querytmsresources url reject
^https:\/\/heic\.alicdn\.com\/imgextra\/\w{2}\/[\w!]+-\d-tps-\d{3,4}-\d{4}\.jpg_(1\d{3}|9\d{2})x(1\d{3}|9\d{2})q90\.jpg_\.heic$ url reject
# > 阿里云盘
^https?:\/\/api\.aliyundrive\.com\/apps\/v\d\/users\/apps\/widgets$ url script-response-body https://raw.githubusercontent.com/ddgksf2013/Scripts/master/alidrive.js
# > 爱奇艺
^https?:\/\/.+\/cdn\/qiyiapp\/\d{8}\/.+&dis_dz= url reject-img
^https?:\/\/.+\/cdn\/qiyiapp\/\d{8}\/.+&z=\w url reject-img
^https?:\/\/.+\/videos\/other\/ url reject
^https?:\/\/iface2\.iqiyi\.com\/fusion\/3\.0\/fusion_switch url reject-img
# > 爱思助手
^https?:\/\/list-app-m\.i4\.cn\/getopfstadinfo\.xhtml url reject

# ======= B ======= #
# > Bahamut(黑屏25秒)
^https:\/\/api\.gamer\.com\.tw\/mobile_app\/anime\/v\d/(token|m3u8).php\? url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/Bahamut/BahamutAnimeAds.js
# > 百度翻译
^https?:\/\/mime\.baidu\.com\/v\d\/IosStart\/getStartInfo url reject
^https?:\/\/mime\.baidu\.com\/v\d\/activity\/advertisement url reject
# > 百度跳转(by Fokit)
^https?:\/\/(?!d\.pcs).*(?<!map)\.baidu\.com url request-header (\r\n)User-Agent:.+iPhone.+(\r\n) request-header $1User-Agent: Mozilla/5.0 (iPhone; CPU iPhone OS 13_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/13.1.1 Mobile/15E148 Safari/16C50 Quark/604.1 T7/10.3 SearchCraft/2.6.3 (Baidu; P1 8.0.0)$2
# > 百度网盘
^https?:\/\/pan\.baidu\.com\/act\/v\d\/bchannel\/list url reject-200
^https?:\/\/pan\.baidu\.com\/act\/v\d\/welfare\/list url reject-200
^https?:\/\/pan\.baidu\.com\/rest\/2\.0\/pcs\/ad url reject-200
^https?:\/\/pan\.baidu\.com\/act\/api\/activityentry url reject-200
# > 百度文库
^https?:\/\/appwk\.baidu\.com\/xpage\/interface\/wknaad url reject-200
# > 北京首汽
^https?:\/\/gateway\.shouqiev\.com\/fsda\/app\/bootImage\.json url reject
# > 必胜客
^https:\/\/res\.pizzahut\.com\.cn\/CRM url reject
# > 不背单词
^https:\/\/cca4app\.beingfine\.cn\/static\/img url reject
^https:\/\/hwimg\.beingfine\.cn\/float_button  url reject
^https:\/\/hwimg\.beingfine\.cn\/card url reject

# ======= C ======= #
# > CSDN
^https?:\/\/gw\.csdn\.net\/cms-app\/v\d+\/home_page\/open_advertisement url reject
^https?:\/\/app-gw\.csdn\.net\/silkroad-api\/api\/v\d\/assemble\/list\/pub\/channel\/app_open_screen_ad url reject
^https?:\/\/app-gw\.csdn\.net\/abtesting\/v2\/getList? url reject
# > 曹操出行
^https?:\/\/cap\.caocaokeji\.cn\/advert-bss\/ url reject
^https?:\/\/ptmpcap\.caocaokeji\.cn\/advert-bss\/ url reject-img
^https:\/\/minicap\.caocaokeji\.cn\/advert-bss\/pullAdvert url reject
# > 茶颜悦色
^https:\/\/miniapp\.sexytea2013\.com\/cms\/slot\/queryByCodes\?codes=INDEX_TOP_BANNER url script-response-body https://raw.githubusercontent.com/jizhi0520/QX/main/chayan.js
# > 超星学习通
^https?:\/\/learn\.chaoxing\.com\/apis\/service\/appConfig\? url reject
# > 车来了
^https?:\/\/pic1.chelaile.net.cn\/adv\/ url reject
^https?:\/\/(api|atrace)\.chelaile\.net\.cn\/adpub\/ url reject
^https?:\/\/api\.chelaile\.net\.cn\/goocity\/advert\/ url reject
^https?:\/\/atrace\.chelaile\.net\.cn\/adpub\/ url reject-img
^https?:\/\/atrace\.chelaile\.net\.cn\/exhibit\?&adv_image url reject-img
^https?:\/\/web\.chelaile\.net\.cn\/api\/adpub\/ url reject
# > 彩云天气
^https:\/\/api\.caiyunapp\.com\/v1\/activity url reject-200

# ======= D ======= #
# > 大众点评
^https?:\/\/img\.meituan\.net\/dpmobile\/.*.(gif|jpg) url reject-200
# > 当当
^https?:\/\/api\.dangdang\.com\/mapi\d\/mobile\/init url reject-200
# > 嘀嗒出行
^https?:\/\/adx-cn\.anythinktech\.com\/bid url reject
^https?:\/\/capis(-?\w*)?\.didapinche\.com\/ad\/cx\/startup\? url script-response-body https://raw.githubusercontent.com/blackmatrix7/ios_rule_script/master/script/startup/startup.js
^https:\/\/capis(-\d)?\.didapinche\.com\/adbase url reject
# > 滴滴出行/小桔科技
^https:\/\/conf\.diditaxi\.com\.cn\/homepage\/v1\/core url reject
^https:\/\/common\.diditaxi\.com\.cn\/common\/v5 url script-response-body https://raw.githubusercontent.com/jizhi0520/QX/main/didi.js
^https?:\/\/img-ys011\.didistatic\.com\/static\/ad_oss\/.*.jpg url reject
^https?:\/\/pt-starimg\.didistatic\.com\/static\/starimg\/node\/.*.(jpg|png|gif) url reject-200
^https?:\/\/ct\.xiaojukeji\.com\/agent\/v3\/feeds url reject
^https?:\/\/res\.xiaojukeji\.com\/resapi\/activity\/get(Ruled|Preload|PasMultiNotices) url reject
^https?:\/\/res\.xiaojukeji\.com\/resapi\/activity\/mget url reject
^https?:\/\/omgup[0-9]{1}\.xiaojukeji\.com\/api url reject-200
^https?:\/\/omgup*\.xiaojukeji\.com\/api url reject-200
# > 电视家
^https?:\/\/api\.gaoqingdianshi\.com\/api\/v\d\/ad\/ url reject
^https?:\/\/cdn\.dianshihome\.com\/static\/ad\/ url reject

# > 豆瓣
^https://api.douban.com\b.*\/common_ads\?.* url reject
# > 抖音
^https?:\/\/.*\.(snssdk\.com|musical\.ly|amemv\.com|byteoversea\.com|tiktokv\.com)\/(vapp\/inner_ad|log|location)\/ url reject
^https?:\/\/x?log.*\.(snssdk\.com|musical\.ly|amemv\.com|byteoversea\.com|tiktokv\.com)\/ url reject
^https?:\/\/.+?\.(musical|snssdk|tiktokv)\.(com|ly)\/(api|motor)\/ad\/ url reject-200
^https?:\/\/.+\.musical\.ly\/.+stats url reject-img
^https?:\/\/aweme\.snssdk\.com\/aweme\/v1\/aweme\/stats\/ url reject-img
^https?:\/\/aweme\.snssdk\.com\/aweme\/v1\/device\/update\/ url reject-img
^https?:\/\/aweme\.snssdk\.com\/aweme\/v1\/screen\/ad\/ url reject-img
^https?:\/\/aweme\.snssdk\.com\/service\/2\/app_log url reject-img

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
^https:\/\/acs\.m\.taobao\.com\/gw\/mtop\.fliggy\.crm\.screen\.allresource url reject-200

# ======= G ======= #
# > 高德地图
^https?+:\/\/m\d\.amap\.com\/ws\/valueadded\/alimama\/splash_screen\/ url reject-200
^https?:\/\/m5\.amap\.com\/ws\/valueadded\/ url reject
^https:\/\/m5\.amap\.com\/ws\/shield\/dsp\/app\/startup\/init\? url reject-dict
^https?:\/\/optimus-ads\.amap\.com\/uploadimg\/ url reject
# > Google跳转
^https?:\/\/(www.)?(g|google)\.cn url 302 https://www.google.com
^https?:\/\/(ditu|maps).google\.cn url 302 https://maps.google.com
^https?:\/\/translate.google\.cn url 302 https://translate.google.com
# > 古茗
^https:\/\/newton\.gumingnc\.com\/newton-buyer\/newton\/buyer\/(ump|touch|external\/front) url script-response-body https://raw.githubusercontent.com/jizhi0520/QX/main/ming.js
# > 怪兽充电
^https:\/\/aag\.enmonster\.com\/apa\/index\/advert\/skin url reject
https?:\/\/awg\.enmonster\.com\/apa\/(advert\/demand\/home\/poster|index\/advert\/skin) url reject
^https:\/\/aag\.enmonster\.com\/apa\/advert\/multi\/positions url reject
^https:\/\/aag\.enmonster\.com\/apa\/advert\/demand\/home\/poster url reject
# > 广告联盟
^https:\/\/(api-access\.pangolin-sdk-toutiao\.com\/api\/ad\/union\/sdk\/get_ads|open\.e\.kuaishou\.com\/rest\/e\/v3\/open\/univ$|mi\.gdt\.qq\.com\/gdt_mview\.fcg\?) url script-response-body https://raw.githubusercontent.com/app2smile/rules/master/js/adsense.js
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
^https?:\/\/discardrp\.umetrip\.com\/gateway\/api\/umetrip\/native url reject-200
^https?:\/\/oss\.umetrip\.com\/fs\/advert\/polite url reject-img
# > 和风天气
^https:\/\/hfapp-service\.qweather\.net\/v2\.0\/app\/ad\/list\? url reject
# > 虎牙直播
^https?+:\/\/business\.msstatic\.com\/advertiser\/ url reject-200
^https?:\/\/cdnfile1\.msstatic\.com\/cdnfile\/appad\/ url reject-img
# > 花小猪打车
^https:\/\/api\.hongyibo\.com\.cn url reject
^https:\/\/res\.hongyibo\.com\.cn\/os\/gs\/resapi\/activity url reject
# > 黄油相机
^https?:\/\/api4\.bybutter\.com\/v\d\/app\/placements\/\d\/advertisements url reject

# ======= J ======= #
# > 建行生活
https?:\/\/yunbusiness\.ccb\.com\/clp_service\/txCtrl\?txcode=A3341A00(6|9) url reject-200
# > 街电
^https:\/\/s\.jiediankeji\.com\/adv url reject
# > 金山词霸
^https?:\/\/dict-mobile\.iciba\.com\/interface\/index\.php\?.+(c=ad|collectFeedsAdShowCount|KSFeedsAdCardViewController) url reject
^https?:\/\/mobile-pic\.cache\.iciba\.com\/feeds_ad\/ url reject
^https?+:\/\/service\.iciba\.com\/popo\/open\/screens\/v\d\?adjson url reject-200
^https?+:\/\/\w+?\.kingsoft-office-service\.com\/ad url reject-200
^https?:\/\/.+?\.kingsoft-office-service\.com url reject
# > 京东
^https:\/\/api\.m\.jd\.com\/client\.action\?functionId=start url script-response-body https://raw.githubusercontent.com/RuCu6/QuanX/main/Scripts/myBlockAds.js
^https:\/\/api\.m\.jd\.com\/client\.action\?functionId=queryMaterialAdverts url reject
^https:\/\/(bdsp-x|dsp-x)\.jd\.com\/adx url reject
^https:\/\/ms\.jr\.jd\.com\/gw\/generic\/(aladdin|base)\/(new)?na\/m\/(getLoadingPicture|adInfo) url reject
# > 京东读书
https://jdread-api.jd.com/jdread/api/channel/module/opens url reject-200
https://jdread-api.jd.com/jdread/api/popup url reject-200
# > 京东极速版
^https:\/\/api\.m\.jd\.com\/client\.action\?functionId=lite_advertising url response-body jdLiteAdvertisingVO response-body rucu6
# > 京东健康
^https?:\/\/m\.360buyimg\.com\/babel\/jfs\/t1\/[0-9]{6}\/[0-9]{2}\/[0-9]{5}\/[0-9]{6}\/.*.jpg url reject-200
^https?:\/\/m\.360buyimg\.com\/babel\/jfs\/t1\/180291\/5\/23800\/294871\/625f5da2E13ac0ba3\/230238c767c61b6d\.jpg url reject
# > 京东金融
^https?:\/\/ms\.jr\.jd\.com\/gw\/generic\/aladdin\/(new)?na\/m\/getLoadingPicture url reject
#> 京东云无线宝
^https:\/\/router-app-api\.jdcloud\.com\/v\d\/board\/routerAppSplash url reject-200
# > 京喜
^https?:\/\/api\.m\.jd\.com\/api\?functionId=delivery_show url script-response-body https://raw.githubusercontent.com/ddgksf2013/Scripts/master/startup.js

# ======= K ======= #
# > 肯德基
^https:\/\/res\.kfc\.com\.cn\/advertisement\/ url reject
^https:\/\/res\.kfc\.com\.cn\/CRM\/kfcad\/custom_v2\/wxapp url reject
^https:\/\/dynamicad\.kfc\.com\.cn\/api url reject
^https:\/\/orders\.kfc\.com\.cn\/preorder-portal\/api\/v2\/coupon url reject
^https:\/\/orders\.kfc\.com\.cn\/preorder-portal\/api\/v2\/activity url reject
# > 酷安
^https:\/\/api\.coolapk\.com\/v6\/feed\/(detail|replyList)\? url script-response-body https://raw.githubusercontent.com/RuCu6/QuanX/main/Scripts/coolapk.js
^https:\/\/api\.coolapk\.com\/v6\/main\/(dataList|indexV8)\? url script-response-body https://raw.githubusercontent.com/RuCu6/QuanX/main/Scripts/coolapk.js
^https:\/\/api\.coolapk\.com\/v6\/page\/dataList\? url script-response-body https://raw.githubusercontent.com/RuCu6/QuanX/main/Scripts/coolapk.js
^https:\/\/api\.coolapk\.com\/v6\/search\?.+type=hotSearch url reject-dict
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
^https?:\/\/api\.mcd\.cn\/bff\/portal\/home\/splash url reject-200
^https:\/\/api\.mcd\.cn\/bff\/portal\/home\/hotActivity url reject
# > 芒果TV
^https?:\/\/pcvideoyd\.titan\.mgtv\.com\/pb\/ url reject-img
# > 猫眼
^https?:\/\/p0\.pipi\.cn\/adAdmin\/\w+.jpg\? url reject-img
# > 美图秀秀
^https?:\/\/mea\.meitudata\.com\/kaiping url reject
# > 美团
^https:\/\/img\.meituan\.net\/(adunion|display|midas)\/\w+\.(gif|jpg|jpg\.webp)$ url reject
^https:\/\/p\d\.meituan\.net\/(bizad|wmbanner)\/\w+\.jpg url reject
^https:\/\/p\d\.meituan\.net\/movie\/\w+\.jpg\?may_covertWebp url reject
^https?:\/\/(s3plus|flowplus)\.meituan\.net\/v\d\/\w+\/linglong\/\w+\.(gif|jpg|mp4) url reject
# > 美团外卖
^http:\/\/wmapi\.meituan\.com\/api\/v7\/(loadInfo|openscreen|startpicture)\?ad url reject-dict
^https:\/\/img\.meituan\.net\/bizad\/bizad_brandCpt_\d+ url reject
^https:\/\/www\.meituan\.com\/api\/v2\/appstatus\?ad url reject-dict
^https?:\/\/s3plus\.meituan\.net\/v1\/mss_\w+\/(brandcpt-vedio|waimai-alita)\/\w+ url reject
# > 蜜雪冰城
^https:\/\/mxsa\.mxbc\.net\/api\/v1\/adinfo\/adplace\/query url reject

# ======= N ======= #
# > 南方航空
^https?:\/\/3g\.csair\.com\/CSMBP\/bookProcess\/homepopup\/queryAdvertisement url reject-200
^https?:\/\/3g\.csair\.com\/CSMBP\/data\/homePage\/getLaunchInfoNew\.do url reject-200

# ======= O ======= #

# ======= P ======= #
# > Pixiv
^https?:\/\/oauth\.secure\.pixiv\.net\/(auth\/token) url script-response-body https://raw.githubusercontent.com/ddgksf2013/Scripts/master/pixivAds.js
# > 澎湃新闻
^https?:\/\/adpai\.thepaper\.cn\/.+&ad= url reject
# > 拼多多
^https?:\/\/api\.(pinduoduo|yangkeduo)\.com\/api\/cappuccino\/splash url reject

# ======= Q ======= #
# > 汽车之家
^https?:\/\/adproxy\.autohome\.com\.cn\/AdvertiseService\/ url reject-img
^https?:\/\/app2\.autoimg\.cn\/apppdfs\/ url reject-img
# > QQ浏览器
^https:\/\/us\.l\.qq\.com\/exapp\?spsa=\d url reject
# > 去哪儿
^https:\/\/qde\.qunar\.com\/preload url reject-200
# > 全家便利店
^https?:\/\/fmapp\.chinafamilymart\.com\.cn\/api\/app\/biz\/base\/appversion\/latest url reject

# ======= R ======= #
# > 人民日报
^https:\/\/app\.peopleapp\.com\/Api\/\d+/HomeApi\/getAdvertImage url reject
^https:\/\/app\.peopleapp\.com\/Api\/\d+/HomeApi\/adv url reject-dict
^https?:\/\/stat\.peopleapp\.com\/ url reject
# > 瑞幸咖啡（倒计时还在）
^https?:\/\/img0[1-9]{1}\.luckincoffeecdn\.com\/group\d/M00/[A-Z0-9]{2}/[A-Z0-9]{2}/[a-zA-Z0-9]{29}\.(jpg|jpeg)_\.webp url reject-200


# ======= S ======= #
# > Soul
^https:\/\/data-collector\.soulapp\.cn\/api\/data\/report$ url reject
# > 四川航空
^https?:\/\/mapi\.sichuanair\.com\/zt\/tribeport\/encrypt_translate_key url reject-200
# > 少数派
https://ios.sspai.com/api/v3/recommend/page/get\?ad.*ios_home_modal url reject
# > 首旅如家
^https?:\/\/app\.homeinns\.com\/api\/landing url reject
# > 顺丰
^https?:\/\/ccsp-egmas\.sf-express\.com\/cx-app-base\/base\/app\/appVersion\/detectionUpgrade url reject-dict
https://ccsp-egmas.sf-express.com/cx-app-base/base/app/ad/queryInfoFlow url script-response-body https://raw.githubusercontent.com/ddgksf2013/Scripts/master/shunfeng_json.js
https://ccsp-egmas.sf-express.com/cx-app-base/base/app/ad/queryAdImages url reject-dict
^https?:\/\/shopic\.sf-express\.com\/crm\/mobile\/common\/flashscreen url reject
# > 顺丰优选
^https://mapi.sfbest.com\/brokerservice-server\/cms\/getPositionById.* url reject
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
# > T3出行
^https:\/\/passenger\.t3go\.cn\/(solution\-|common\-)?(passenger\-)?(activity\-|app\-)?api\/notoken\/(trip\/)?api\/(home\/|common\/)?(v[1-3]\/)?(ad\/getNegativescreen|solution\/passenger\/open\/getHomeMenu|leftmenu|getHomeInfoGlobal) url script-response-body https://raw.githubusercontent.com/jizhi0520/QX/main/T3.js
^https:\/\/passenger\.t3go\.cn\/passenger-activity-api\/notoken\/api\/v1\/resource\/getSource url reject
# > 太平洋电脑
^https?+:\/\/mrobot\.pconline\.com\.cn\/s\/onlineinfo\/ad\/ url reject-200
^https?:\/\/agent-count\.pconline\.com\.cn\/counter\/adAnalyse\/ url reject
^https?:\/\/mrobot\.(pcauto|pconline)\.com\.cn\/v\d\/ad\dp url reject
^https?:\/\/mrobot\.pcauto\.com\.cn\/xsp\/s\/auto\/info\/(ad|preload) url reject
# > 淘宝
^https?:\/\/acs\.m\.taobao\.com\/gw\/mtop\.taobao\.idle\.home\.welcome\/ url reject-200
^https?+:\/\/guide-acs\.m\.taobao\.com\/gw\/mtop\.tmall\.wireless url reject-200
^https?+:\/\/acs\.m\.taobao\.com\/gw\/mtop\.alibaba\.advertisementservice\.getadv url reject-200
^https?+:\/\/acs\.m\.taobao\.com\/gw\/mtop\.alimama\.etao\.config\.query\/ url response-body "ems_etao_advertise" response-body ""
^https?+:\/\/acs\.m\.taobao\.com\/gw\/mtop\.film\.mtopadvertiseapi\.queryadvertise\/ url reject-200
^https?+:\/\/acs\.m\.taobao\.com\/gw\/mtop\.o2o\.ad\.gateway\.get\/ url reject-200
^https?+:\/\/acs\.m\.taobao\.com\/gw\/mtop\.trip\.activity\.querytmsresources\/ url reject-200
^https?:\/\/gw\.alicdn\.com\/imgextra\/i\d\/.+1125-1602\.jpg url reject-200
# > 淘票票
^https://acs.m.taobao.com\/gw\/mtop.film.mtopadvertiseapi.queryadvertise\/5.0.* url reject
# > 腾讯地图
^https?+:\/\/4gimg\.map\.qq\.com\/mwaSplash\/ url reject-200
^https?:\/\/4gimg\.map\.qq\.com\/mwaSplash\/ url reject
# > 腾讯广告
^https?:\/\/btrace\.qq\.com url reject-200
^https?:\/\/api2\.helper\.qq\.com\/game\/buttons url reject-img
^https?:\/\/\w+\.beacon\.qq\.com url reject
^https?:\/\/mi\.gdt\.qq\.com\/gdt_mview\.fcg url reject
^https?:\/\/lives\.l\.qq\.com\/livemsg\?sdtfrom= url reject-img
^https?:\/\/imgcache\.qq\.com\/qqlive\/ url reject-img
^https?:\/\/mtteve\.beacon\.qq\.com\/analytics url reject-img
^https?+:\/\/vv\.video\.qq\.com\/getvmind\? url reject-200
^https?+:\/\/ssl\.kohsocialapp\.qq\.com:10001\/game\/buttons url reject-200
^https?+:\/\/qt\.qq\.com\/lua\/mengyou\/get_splash_screen_info url reject-200
^https?+:\/\/3gimg\.qq\.com\/tencentMapTouch\/app\/activity\/ url reject-200
^https?+:\/\/3gimg\.qq\.com\/tencentMapTouch\/splash\/ url reject-200
^https?:\/\/.+?\.l\.qq\.com url reject
^https?:\/\/\w+\.gdt\.qq\.com url reject
^https?:\/\/y\.gtimg\.cn\/music\/.*?_Ad/\d+\.png url reject-img
^https?:\/\/splashqqlive\.gtimg\.com\/website\/\d{6} url reject-img
^https?:\/\/qzonestyle\.gtimg\.cn\/qzone\/biz\/gdt\/mob\/sdk\/ios\/v2\/ url reject-img
^https?:\/\/discuz\.gtimg\.cn\/cloud\/scripts\/discuz_tips\.js url reject-img
^https?:\/\/bla\.gtimg\.com\/qqlive\/\d{6}.+?\.png url reject-img
^https?:\/\/mmgr\.gtimg\.com\/gjsmall\/qiantu\/upload\/ url reject-img
^https?:\/\/mmgr\.gtimg\.com\/gjsmall\/qqpim\/public\/ios\/splash\/.+?\/\d{4}_\d{4} url reject-img
# > 腾讯QQ空间
^http:\/\/c\.gdt\.qq\.com\/gdt_clickwap\.fcg\?viewid url reject
^http:\/\/pgdt\.gtimg\.cn\/gdt\/0\/.+\.jpg url reject
^http:\/\/v\.gdt\.qq\.com\/gdt_stats\.fcg\?viewid url reject
^http:\/\/rpt\.gdt\.qq\.com\/creative_view\?viewid url reject
^http:\/\/pgdt\.gtimg\.cn\/gdt\/.+\.png url reject
^http:\/\/pgdt\.gtimg\.cn\/gdt\/.+\.jpg url reject
^http:\/\/pgdt\.gtimg\.cn\/.+\/snscosdownload\/SH\/reserved\/.+ url reject
# > 腾讯QQ音乐
^https:\/\/us\.l\.qq\.com\/exapp url reject
^https?:\/\/y\.gtimg\.cn\/music\/common\/upload\/t_splash_info\/ url reject
^https?:\/\/.+?\/music\/common\/upload\/t_splash_info\/ url reject
^https?:\/\/y\.gtimg\.cn\/music\/common\/\/upload\/kg_ad/.*?\d{4}\.jpg url reject-img
^https?:\/\/y\.gtimg\.cn\/music\/common\/upload\/targeted_ads url reject-img
^https?:\/\/((25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)\.){3}(25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)\/music\/common\/upload\/t_splash_info\/ url reject
# > 腾讯视频
^https://news.l.qq.com\/app\? url reject
^https?:\/\/btrace.qq.com url reject-200
^https?:\/\/vv\.video\.qq\.com\/getvmind\? url reject-200
^http:\/\/.+/\?tk=9901afb195dcf9a34db6088a4a221dba38b3d980e4db86009f8a08be4d4099ee323f6e7f03b881db21133b1bf2ae5bc5 url reject
^http:\/\/video\.dispatch\.tc\.qq\.com\/.+\.mp4 url reject
^http:\/\/.+\/vmind\.qqvideo\.tc\.qq\.com\/.+\.mp4 url reject
^http:\/\/wa\.gtimg\.com\/adxcdn\/.+\.jpg url reject
^https?:\/\/.+?\/omts.tc.qq.com\/ url reject
^https?:\/\/.+?\/variety.tc.qq.com\/ url reject
^https?:\/\/.+?\.tc\.qq\.com\/.+?_p20\d_ url reject
^https?+:\/\/(?:(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)\/.+?\.tc\.qq\.com\/.+?p201\.1\.mp4\? url reject-200
^https?:\/\/((25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)\.){3}(25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)\/.+\.tc\.qq\.com\/.+p201\.1\.mp4\? url reject
^https?:\/\/((25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)\.){3}(25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)\/[a-z.]+\.tc\.qq\.com\/[\w\W]+=v3004 url reject
^https?:\/\/((25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)\.){3}(25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)\/[a-z.]+\.tc\.qq\.com\/[\w\W]+_p20\d url reject
^https?:\/\/[\s\S]*\/.+?\.tc\.qq\.com/.*?p201.1\.mp4 url reject-img
^https?:\/\/video\.dispatch\.tc\.qq\.com\/\w+\.p20\d\.1\.mp4 url reject
# > 腾讯手机管家
^https://otheve.beacon.qq.com\/analytics\/upload\?sid=.* url reject
# > 腾讯体育
^https?:\/\/news\.ssp\.qq\.com\/app url reject
^https?:\/\/sports3\.gtimg\.com\/community\/20cf93884470434eaf38b2e77ab7796a\.png url reject
# > 腾讯新闻
^https?:\/\/r\.inews\.qq\.com\/(adsBlacklist|getFullScreenPic|getQQNewsRemoteConfig) url reject
^https?:\/\/r\.inews\.qq\.com\/getBannerAds url reject
^https?:\/\/r\.inews\.qq\.com\/getNewsRemoteConfig url reject
^https?:\/\/r\.inews\.qq\.com\/getSplash url reject
^https?:\/\/r\.inews\.qq\.com\/searchHotCatList url reject
^https?:\/\/r\.inews\.qq\.com\/upLoadLoc url reject
# > 腾讯游戏
^https?:\/\/ssl\.kohsocialapp\.qq\.com:\d+\/game\/buttons url reject
^https?:\/\/qt\.qq\.com\/lua\/mengyou\/get_splash_screen_info url reject
# > 腾讯游戏社区
^https?:\/\/static\.gameplus\.qq\.com\/img\/\d{10}-\d{4}$ url reject
# > 天气通
^https?+:\/\/tqt\.weibo\.cn\/.+?advert\.index url reject-200
^https?:\/\/tqt\.weibo\.cn\/[\w=?&%.-]+advert\.index url reject
^https?+:\/\/tqt\.weibo\.cn\/api\/advert\/ url reject-200
^https?:\/\/tqt\.weibo\.cn\/overall\/redirect\.php\?r=(tqt_sdkad|tqtad) url reject
# > 天星金融
^http?:\/\/t1\.market\.xiaomi\.com\/thumbnail\/webp\/w1170q100\/ url reject-200
# > 天翼云盘
^http:\/\/api\.cloud\.189\.cn\/guns\/img\/recommendedPosition url reject-dict
# > 同程旅行
^https:\/\/wx\.17u\.cn\/xcxhomeapi\/((aggregator\/index)|(home\/(screen|banner|converge)))$ url reject

# ======= U ======= #

# ======= V ======= #
# > Vista看天下
^https?:\/\/open3\.vistastory\.com\/v\d\/api\/inde/loading_ad url reject-200

# ======= W ======= #
# > WPS
^https?:\/\/ios\.wps\.cn\/ad-statistics-service url reject
^https?+:\/\/mobile-pic\.cache\.iciba\.com\/feeds_ad\/ url reject-200
# > 网易考拉
^https?:\/\/sp\.kaola\.com\/api\/openad url reject
^https?:\/\/gw\.kaola\.com\/gw\/dgmobile\/newOpenAd url reject
# > 网易蜗牛读书
^https?+:\/\/easyreadfs\.nosdn\.127\.net\/ad-material\/ url reject
# > 网易严选
https://support.you.163.com/appversync/check.do url reject
^https?+:\/\/support\.you\.163\.com\/xhr\/boot\/getBootMedia\.json url reject
^https?:\/\/yanxuan.nosdn.127.net\/(static-union\/)?.*\.gif url reject
https:\/\/yanxuan.nosdn.127.net\/.*\.mp4 url reject-dict
# > 网易严选
https://support.you.163.com/appversync/check.do url reject
^https?:\/\/support\.you\.163\.com\/xhr\/boot\/getBootMedia\.json url reject
^https?:\/\/m\.you\.163\.com\/activity\/popWindow url reject
; ^https?:\/\/yanxuan.nosdn.127.net\/(static-union\/)?.*\.gif url reject
^https?:\/\/yanxuan\.nosdn\.127\.net\/.*\.mp4 url reject
# >> 网易有钱
^https?+:\/\/client\.mail\.163\.com\/apptrack\/confinfo\/searchMultiAds url reject-200
# > 网易邮箱
^https?:\/\/appconf\.mail\.163\.com\/mmad\/get\.do url reject
^https?:\/\/client\.mail\.163.com\/apptrack\/confinfo\/(searchMultiAds.do|showAds.do) url reject
# > 网易云音乐
^http:\/\/interface\.music\.163\.com\/eapi\/ad\/config\/get url reject
# >> 网易新闻
^https?+:\/\/c\.m\.163\.com\/nc\/gl\/ url reject-200
# > 唯品会
^https?:\/\/mapi\.appvipshop\.com\/vips-mobile\/rest\/activity\/advertisement\/get url reject-200
^https?:\/\/mapi\.appvipshop\.com\/vips-mobile\/rest\/layout\/productList\/eventData\/v url reject-200
^https?:\/\/mapi\.appvipshop\.com\/vips-mobile\/rest\/activity\/coupon\/float_entrance\/get\?api_key url reject-200
# > 微店
^https?:\/\/thor\.weidian\.com\/ares\/home\.splash\/ url reject
# > 微信110
^https\:\/\/(weixin110\.qq|security.wechat)\.com\/cgi-bin\/mmspamsupport-bin\/newredirectconfirmcgi\? url script-response-body https://raw.githubusercontent.com/zZPiglet/Task/master/asset/UnblockURLinWeChat.js
# > 微信带货
^https?:\/\/mp\.weixin\.qq\.com\/mp\/cps_product_info url reject-200
# > 微信
^(http|https):\/\/mp\.weixin\.qq\.com\/mp\/getappmsgad url response-body "advertisement_num":\d,"advertisement_info":\[.+\], response-body "advertisement_num":0,"advertisement_info":[],

# ======= X ======= #
# > 闲鱼
^https:\/\/gw\.alicdn\.com\/mt\/ url reject
^https:\/\/gw\.alicdn\.com\/tfs\/.+\d{3,4}-\d{4} url reject
^https:\/\/gw\.alicdn\.com\/tps\/.+\d{3,4}-\d{4} url reject
^https:\/\/acs\.m\.taobao\.com\/gw\/mtop\.taobao\.idle\.home\.welcome url reject
# > 享道出行
^https:\/\/passengerapi\.saicmobility\.com\/(ad\/requestAd|pay\/v1\/queryOpenedCouponPackages) url reject
# > 向日葵
^https?:\/\/client-api\.oray\.com\/materials\/SLCC_IOS_STARTUP\?lang=zh-Hans-CN url reject-200
# > 小米商城
^https:\/\/api\.m\.mi\.com\/v1\/app\/start$ url script-response-body https://raw.githubusercontent.com/RuCu6/QuanX/main/Scripts/myBlockAds.js
^https:\/\/api\.m\.mi\.com\/v1\/app\/popup_info$ url reject-dict
^https:\/\/api\.m\.mi\.com\/v1\/misearch\/search_input$ url reject-dict
^https:\/\/api\.m\.mi\.com\/v2\/search\/search_default$ url reject-dict
^https:\/\/api\.m\.mi\.com\/v1\/home\/page_feed(_v5)?$ url reject-dict
# > 小米金融
^https:\/\/api\.jr\.mi\.com\/jr\/api\/playScreen url reject
^https:\/\/api\.jr\.mi\.com\/v\d\/adv url reject
# > 米家
^https:\/\/home\.mi\.com\/cgi-op\/api\/v1\/recommendation\/(banner|myTab)\? url reject-dict
# > 小米有品
^https:\/\/shopapi\.io\.mi\.com\/mtop\/mf\/resource\/homePage\/pageConfig url reject-200
# > 携程广告
^https?:\/\/m\.ctrip\.com\/restapi\/soa2\/13916\/scjson\/tripAds url reject-200
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
# > 猿辅导
^https?+:\/\/xyst\.yuanfudao\.com\/iphone\/splashesV\d url reject-200
# > 优酷
^https?:\/\/vali\.cp31\.ott\.cibntv\.net\/youku url reject
^https?:\/\/.+?\.ott\.cibntv\.net\/[\w\/-]+.mp4\?sid= url reject
^https?:\/\/[\w-.]+\.ott\.cibntv\.net\/[\w\/-]+.mp4\?ccode=02010101 url reject
^https?:\/\/[\w-.]+\.ott\.cibntv\.net\/[\w\/-]+.mp4\?sid= url reject
^https?:\/\/ups\.youku\.com\/.*?needad=1& url reject
^https?:\/\/r\.l\.youku\.com\/rec_at_click url reject-img
^https?:\/\/m\.youku\.com\/video\/libs\/iwt\.js url reject-img
^https?:\/\/api\.mobile\.youku\.com\/layout\/search\/hot\/word url reject-img
^https?:\/\/ad\.api\.3g\.youku\.com url reject-img
^https?:\/\/.+?\.atm\.youku\.com url reject
^https?:\/\/(iyes|(api|hd)\.mobile)\.youku\.com\/(adv|common\/v3\/hudong\/new) url reject-img
^https?:\/\/[\s\S]*\/youku\/.*?\.mp4 url reject-img
^http:\/\/ems\.youku\.com\/imp\? url reject

# ======= Z ======= #
# > 中国电信
^https?:\/\/cloud\.189\.cn\/include\/splash\/ url reject
^https?:\/\/zt-app\.go189\.cn\/zt-app\/welcome\/.*?Animation url reject-img
# > 中国移动
^https?:\/\/client.app\.coc\.10086\.cn\/biz-orange\/DN\/init\/startInit url reject-200
^https:\/\/(client\.app\.coc|h\.app\.coc|app)\.10086\.cn\/biz-orange\/DN\/emotionMarket url reject
# > 中国移动云盘
^https?:\/\/mcmm\.caiyun\.feixin\.10086\.cn:80\/mcmm\/api\/IAdvert url reject-200
^https?:\/\/mcmm\.caiyun\.feixin\.10086\.cn:80\/mcmm\/api\/v\d\/getAdverts url reject-200
^https?:\/\/middle\.yun\.139\.com\/openapi\/cardConfig\/queryCardInfoV3 url reject-200
# > 中国银行
^https:\/\/mbs\.boc\.cn\/ubas-mgateway-static\/images\/advertType\/.+.jpg url reject-200
# > 中国知网
^https?+:\/\/xyz\.cnki\.net\/resourcev7\/api\/manualpush\/SlidsList$ url reject-200
# > 作业帮
^https?:\/\/syh\.zybang\.com\/com\/adx\/impress url reject-200

hostname = home.115.com, gab0.122.gov.cn, ad.12306.cn, *.58cdn.com.cn, app.58.com, api-new.app.acfun.cn, acs.m.taobao.com, heic.alicdn.com, api.aliyundrive.com, list-app-m.i4.cn, api.gamer.com.tw, mime.baidu.com, map.baidu.com, pan.baidu.com, appwk.baidu.com, gateway.shouqiev.com, res.pizzahut.com.cn, cca4app.beingfine.cn, hwimg.beingfine.cn, gw.csdn.net, app-gw.csdn.net, cap.caocaokeji.cn, ptmpcap.caocaokeji.cn, minicap.caocaokeji.cn, miniapp.sexytea2013.com, learn.chaoxing.com, *.chelaile.net.cn, api.caiyunapp.com, img.meituan.net, api.dangdang.com, adx-cn.anythinktech.com, capis*.didapinche.com, conf.diditaxi.com.cn, common.diditaxi.com.cn, res.xiaojukeji.com, ct.xiaojukeji.com, img-ys011.didistatic.com, pt-starimg.didistatic.com, omgup*.xiaojukeji.com, *gaoqingdianshi.com, cdn.dianshihome.com, api.douban.com, elemecdn.com, fuss10.elemecdn.com, cube.elemecdn.com, www1.elecfans.com, firefox.com.cn, app.variflight.com, m5.amap.com, www.google.cn, ditu.google.cn, maps.google.cn, translate.google.cn, newton.gumingnc.com, aag.enmonster.com, awg.enmonster.com, wap.ngchina.cn, api-access.pangolin-sdk-toutiao.com, mi.gdt.qq.com, open.e.kuaishou.com, dili.bdatu.com, prom.mobile.gome.com.cn, api.hellobike.coming, gfp.veta.naver.com, api.hanju.koudaibaobao.com, discardrp.umetrip.com, oss.umetrip.com, hfapp-service.qweather.net, business.msstatic.com, api.hongyibo.com.cn, res.hongyibo.com.cn, api4.bybutter.com, yunbusiness.ccb.com, s.jiediankeji.com, *.kingsoft-office-service.com, api.m.jd.com, bdsp-x.jd.com, dsp-x.jd.com, jdread-api.jd.com, m.360buyimg.com, ms.jr.jd.com, router-app-api.jdcloud.com, res.kfc.com.cn, orders.kfc.com.cn, dynamicad.kfc.com.cn, api.coolapk.com, cdn.kuaidi100.com, p.kuaidi100.com, mobile-api.imlaidian.com, api.mcd.cn, p0.pipi.cn, mea.meitudata.com, mxsa.mxbc.net, peisongapi.meituan.com, s3plus.meituan.net, www.meituan.com, wmapi.meituan.com, flowplus.meituan.net, p*.meituan.net, 3g.csair.com, oauth.secure.pixiv.net, adpai.thepaper.cn, api.pinduoduo.com, api.yangkeduo.com, api.qdingnet.com， img1.qdingnet.com, us.l.qq.com, qde.qunar.com, fmapp.chinafamilymart.com.cn, y.gtimg.cn, *.peopleapp.com, img0*.luckincoffeecdn.com, data-collector.soulapp.cn, mapi.sichuanair.com, ios.sspai.com, app.homeinns.com, ccsp-egmas.sf-express.com, shopic.sf-express.com, mapi.sfbest.com, *.k.sohu.com, *.tv.sohu.com, mpcs.suning.com, passenger.t3go.cn, mrobot.pconline.com.cn, gw.alicdn.com, 4gimg.map.qq.com, btrace.qq.com, otheve.beacon.qq.com, y.gtimg.cn, news.l.qq.com, r.inews.qq.com, ssl.kohsocialapp.qq.com, static.gameplus.qq.com, tqt.weibo.cn, t1.market.xiaomi.com, api.cloud.189.cn, wx.17u.cn, open3.vistastory.com, sp.kaola.com, gw.kaola.com, easyreadfs.nosdn.127.net, support.you.163.com, yanxuan.nosdn.127.net, client.mail.163.com, appconf.mail.163.com, interface*.music.163.com, mapi.appvipshop.com, thor.weidian.com, weixin110.qq.com, mp.weixin.qq.com, client-api.oray.com, passengerapi.saicmobility.com, api.m.mi.com, api-mifit.huami.com, api.jr.mi.com, home.mi.com, api-mifit.huami.com, m.ctrip.com, shopapi.io.mi.com, edit.sinaapp.com, http://3pp.starbucks.com.cn, api-shoulei-ssl.xunlei.com, images.client.vip.xunlei.com, m.yap.yahoo.com, www.cntv.com, cdn.cmgadx.com, issuecdn.baidupcs.com, app.yinxiang.com, xyst.yuanfudao.com, cloud.189.cn, client.app.coc.10086.cn, app.10086.cn, *.app.coc.10086.cn, mcmm.caiyun.feixin.10086.cn, middle.yun.139.com, mbs.boc.cn, xyz.cnki.net, syh.zybang.com
