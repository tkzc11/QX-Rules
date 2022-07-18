hostname = g.cn, google.cn, ios-*.prod.ftl.netflix.com, ios.prod.ftl.netflix.com, dimg04.c-ctrip.com, img-ys011.didistatic.com, sdkapp.uve.weibo.com, mapi.weibo.com, *.uve.weibo.com, wbapp.uve.weibo.com, api.weibo.cn, weibointl.api.weibo.cn, adimg.uve.weibo.com, www.baidu.com, news.ssp.qq.com, r.inews.qq.com, flowplus.meituan.net, mi.gdt.qq.com, business.msstatic.com, res.yunbusiness.ccb.com, 47.100.65.202, sf?-ttcdn-tos.pstatp.com, ad.12306.cn, api.m.jd.com, ad.12306.cn, *.bdstatic.com, ms.jr.jd.com, m.baidu.com, zhidao.baidu.com, gw.alicdn.com, heic.alicdn.com, acs.m.taobao.com, m*.amap.com, map.baidu.com, mime.baidu.com, act.vip.iqiyi.com, intl.iqiyi.com, clientaccess.10086.cn, m.client.10010.com, cloud.189.cn, api.cloud.189.cn, www.cntv.com, gw.csdn.net, rtbapi.douyucdn.cn, staticlive.douyucdn.cn, capi.douyucdn.cn, daoyu.sdo.com, ccsp-egmas.sf-express.com, shopic.sf-express.com, wmapi.meituan.com, baidu.com, ptf.flyertrip.com, tc.qq.com, sofire.baidu.com, pan.baidu.com, *.tieba.baidu.com, kingsoft-office-service.com, img.alicdn.com, ossgw.alicdn.com, btrace.qq.com, d.psbc.com, images.client.vip.xunlei.com, dsp-impr2.youdao.com, oral.youdao.com, impservice.dictapp.youdao.com, note.youdao.com, gab.122.gov.cn, fuss10.elemecdn.com, elemecdn.com, cube.elemecdn.com, www1.elecfans.com, mbd.baidu.com, us.l.qq.com, open.e.kuaishou.com, afd.baidu.com, mall.zuoyebang.com, sares.kfc.com.cn, gd.10086.cn, mea.meitudata.com, pic1.chelaile.net.cn, atrace.chelaile.net.cn, api.chelaile.net.cn, web.chelaile.net.cn, learn.chaoxing.com, m.yap.yahoo.com, res.xiaojukeji.com, ct.xiaojukeji.com, p.kuaidi100.com, cdn.kuaidi100.com, img0*.luckincoffeecdn.com,-res.xiaojukeji.com, edith.xiaohongshu.com, img.meituan.net, omgup*.xiaojukeji.com, webcdn.m.qq.com

# > Google
^https?:\/\/(www.)?(g|google)\.cn url 302 google.com
# > Netflix评分
^https?://ios(-.*)?\.prod\.ftl\.netflix\.com/iosui/user/.+path=%5B%22videos%22%2C%\d+%22%2C%22summary%22%5D url script-request-header https://raw.githubusercontent.com/yichahucha/surge/master/nf_rating.js
^https?://ios(-.*)?\.prod\.ftl\.netflix\.com/iosui/user/.+path=%5B%22videos%22%2C%\d+%22%2C%22summary%22%5D url script-response-body https://raw.githubusercontent.com/yichahucha/surge/master/nf_rating.js
# > 单集评分
^https?:\/\/ios(-.*)?\.prod\.ftl\.netflix\.com\/iosui\/warmer/.+type=show-ath url script-response-body https://raw.githubusercontent.com/yichahucha/surge/master/nf_rating_season.js

# > 携程开屏广告
^https?:\/\/dimg04\.c-ctrip\.com\/images\/\w+(_\d{4}){2} url reject-img
# > 滴滴
^https?:\/\/img-ys011\.didistatic\.com\/static\/ad_oss\/.*.jpg url reject
# >> 新浪微博
^https?:\/\/adimg\.uve\.weibo\.com\/public\/files\/image url reject
^https?:\/\/sdkapp\.uve\.weibo\.com\/interface\/sdk\/(actionad|sdkad)\.php url reject
^https?:\/\/wbapp\.uve\.weibo\.com\/wbapplua\/wbpullad\.lua url reject
^https?:\/\/weibointl\.api\.weibo\.cn\/portal\.php\?a=get_coopen_ads url reject
^https?:\/\/weibointl\.api\.weibo\.cn\/portal\.php.*ads&c=ad.* url reject
^https?:\/\/api\.weibo\.cn\/2\/statuses\/extend\?gsid= url reject
^https?:\/\/simg\.s\.weibo\.com\/.+?_ios\d{2}\.gif url reject-img
^https?:\/\/storage\.wax\.weibo\.com\/\w+\.(png|jpg|mp4) url reject-img
# > 删除微博开屏广告
^https?://(sdk|wb)app\.uve\.weibo\.com(/interface/sdk/sdkad.php|/wbapplua/wbpullad.lua) url script-response-body https://raw.githubusercontent.com/zmqcherish/proxy-script/main/weibo_launch.js
# > 微博去广告
^https?://m?api\.weibo\.c(n|om)/2/(cardlist|searchall|page|statuses/(unread_)?friends(/|_)timeline|groups/timeline|statuses/(unread_hot_timeline|extend|video_mixtimeline)|profile/(me|statuses)|video/(community_tab|remind_info|tiny_stream_video_list)|checkin/show|\!/live/media_homelist|comments/build_comments|container/get_item) url script-response-body https://raw.githubusercontent.com/zmqcherish/proxy-script/main/weibo_main.js
# > 抖音去广告, 去水印
^https?:\/\/.+?\.amemv\.com\/aweme\/v\d\/(feed|aweme\/post|follow\/feed|nearby\/feed|search\/item|general\/search\/single|hot\/search\/video\/list)\/ url script-request-header https://raw.githubusercontent.com/28413761/QX/main/JS/douyin.js
^https?:\/\/.+?\.amemv\.com\/aweme\/v\d\/(feed|aweme\/post|follow\/feed|nearby\/feed|search\/item|general\/search\/single|hot\/search\/video\/list)\/ url script-response-body https://raw.githubusercontent.com/28413761/QX/main/JS/douyin.js
^https?:\/\/.*\.(snssdk\.com|musical\.ly|amemv\.com|byteoversea\.com|tiktokv\.com)\/(vapp\/inner_ad|log|location)\/ url reject
^https?:\/\/x?log.*\.(snssdk\.com|musical\.ly|amemv\.com|byteoversea\.com|tiktokv\.com)\/ url reject
^https?:\/\/.+?\.(musical|snssdk|tiktokv)\.(com|ly)\/(api|motor)\/ad\/ url reject-200
^https?:\/\/.+\.musical\.ly\/.+stats url reject-img
^https?:\/\/aweme\.snssdk\.com\/aweme\/v1\/aweme\/stats\/ url reject-img
^https?:\/\/aweme\.snssdk\.com\/aweme\/v1\/device\/update\/ url reject-img
^https?:\/\/aweme\.snssdk\.com\/aweme\/v1\/screen\/ad\/ url reject-img
^https?:\/\/aweme\.snssdk\.com\/service\/2\/app_log url reject-img
# >> 网易严选
^https?+:\/\/support\.you\.163\.com\/xhr\/boot\/getBootMedia\.json url reject-200
# > 虎牙直播
^https?+:\/\/business\.msstatic\.com\/advertiser\/ url reject-200
^https?:\/\/cdnfile1\.msstatic\.com\/cdnfile\/appad\/ url reject-img
# > 交管12123
^https:\/\/gab\.122\.gov\.cn\/eapp\/m\/sysquery\/adver$ url reject
^https:\/\/gab\.122\.gov\.cn\/eapp\/m\/sysquery url reject
# > 高德地图
^https?+:\/\/m\d\.amap\.com\/ws\/valueadded\/alimama\/splash_screen\/ url reject-200
^https?:\/\/m5\.amap\.com\/ws\/valueadded\/ url reject
^https?:\/\/optimus-ads\.amap\.com\/uploadimg\/ url reject
# > 建行生活
^https://res.yunbusiness.ccb.com/service/resource/mng/adMng/2022/202203/20220325/20220325070000000078/b406caab-da67-40fd-bda8-4317af93f49e.jpg url reject
# > 得物
^https?:\/\/cdn\.poizon\.com\/node-common\/.*.jpg url reject-200
# 贴吧去广告
# 开屏广告;推荐和吧内帖子列表的直播及广告;详情页直播/关联商品/广告;看图模式广告;首页和帖子详情页右下角悬浮广告;部分吧内的置顶/最新中间的广告/head图片广告
hostname = tiebac.baidu.com
^http(s:\/\/tiebac|:\/\/c\.tieba)\.baidu\.com\/(tiebaads\/commonbatch|c\/s\/sync) url script-response-body https://raw.githubusercontent.com/app2smile/rules/master/js/tieba-json.js
^http(s:\/\/tiebac|:\/\/c\.tieba)\.baidu\.com\/c\/f\/(frs\/(page|threadlist|generalTabList)|pb\/page|excellent\/personalized) url script-response-body https://raw.githubusercontent.com/app2smile/rules/master/js/tieba-proto.js
# > 百度地图
^https:\/\/dss0.bdstatic.com\/-0U0bnSm1A5BphGlnYG\/ url reject-200
^https:\/\/dss0\.bdstatic\.com\/.+/tam-ogel\/.+\.jpg url reject
^https?:\/\/tb1.bdstatic.com\/tb\/cms\/ngmis\/adsense\/*.jpg url reject
^https?+:\/\/ss0\.bdstatic\.com/.+?_\d{3}_\d{4}\.jpg url reject-200
^https?:\/\/gss0\.bdstatic\.com\/.+?\/static\/wiseindex\/img\/bd_red_packet\.png url reject-img
^https?:\/\/tb2\.bdstatic\.com\/tb\/mobile\/spb\/widget\/jump url reject-img
# > 百度文库
^https?:\/\/wapwenku.baidu.com\/view\/fengchaoTwojump\/ url reject
^https?:\/\/wapwenku\.baidu\.com\/view\/fengchao\/ url reject-img
^https?:\/\/wenku\.baidu\.com\/shifen\/ url reject-img
# > 腾讯手机管家
^https://otheve.beacon.qq.com\/analytics\/upload\?sid=.* url reject
# > 腾讯地图
^https?+:\/\/4gimg\.map\.qq\.com\/mwaSplash\/ url reject-200
^https?:\/\/4gimg\.map\.qq\.com\/mwaSplash\/ url reject
# > 腾讯QQ音乐
^https:\/\/us\.l\.qq\.com\/exapp url reject
^https?:\/\/y\.gtimg\.cn\/music\/common\/upload\/t_splash_info\/ url reject
^https?:\/\/.+?\/music\/common\/upload\/t_splash_info\/ url reject
^https?:\/\/y\.gtimg\.cn\/music\/common\/\/upload\/kg_ad/.*?\d{4}\.jpg url reject-img
^https?:\/\/y\.gtimg\.cn\/music\/common\/upload\/targeted_ads url reject-img
^https?:\/\/((25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)\.){3}(25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)\/music\/common\/upload\/t_splash_info\/ url reject
# > 中国移动
^https?:\/\/gd\.10086\.cn\/gmccfile\/file\/image\/preloading703\/.*.jpg url reject
^https?+:\/\/clientaccess\.10086\.cn\/biz-orange\/DN\/init\/startInit url reject-200
^https?+:\/\/wap\.js\.10086\.cn\/jsmccClient\/cd\/market_content\/api\/v\d\/market_content\.page\.query url reject-200
^https?:\/\/app\.10086\.cn\/biz-orange\/DN\/(findSale|homeSale)\/getsaleAdver url reject
# > 中国电信
^https?:\/\/cloud\.189\.cn\/include\/splash\/ url reject
^https?:\/\/zt-app\.go189\.cn\/zt-app\/welcome\/.*?Animation url reject-img
# > 天翼云盘
^https?:\/\/api\.cloud\.189\.cn\/guns\/img\/recommendedPosition\/.*.jpg url reject-200
^https?:\/\/cloud\.189\.cn\/include\/splash\/20170512mother\/.*.jpg url reject-200
# > 爱奇艺
^https?:\/\/iface\.iqiyi\.com\/api\/getNewAdInfo url reject
^https?:\/\/intl\.iqiyi\.com\/ad_external\/ url reject
^https?:\/\/intl\.iqiyi\.com\/video\/advertise url reject
^https?:\/\/u\d\.iqiyipic\.com\/image\/[\w\/]+\/oad_ url reject
^https?+:\/\/act\.vip\.iqiyi\.com\/interact\/api\/show\.do url reject-200
^https?+:\/\/act\.vip\.iqiyi\.com\/interact\/api\/v2\/show url reject-200
^https?+:\/\/iface\.iqiyi\.com\/api\/getNewAdInfo url reject-200
^https?:\/\/iface2\.iqiyi\.com\/fusion\/3\.0\/fusion_switch url reject-img
^http:\/\/.+\.iqiyipic\.com\/image\/.+\/ad\/.+\.jpg url reject
^http:\/\/static-s\.iqiyi\.com\/common\/.+\/Small_video\/a2\/af\/.+\.png url reject
^http:\/\/msga/.cupid/.iqiyi/.com\/scp2\.gif url reject
https?:\/\/ssports\.iqiyi\.com/app\/ url reject
https?:\/\/ssports\.iqiyi\.com/json\/shop\/shopInfo  url reject
https?:\/\/.+\.iqiyi\.com\/videos\/other\/20$ url reject
https?:\/\/.+\.iqiyipic\.com\/image\/20*_100000 url reject
https?:\/\/static\.iqiyi\.com\/js\/common\/.+\.js url reject
https?:\/\/t7z\.cupid\.iqiyi\.com\/show url reject
# > 腾讯游戏社区
^https?:\/\/static\.gameplus\.qq\.com\/img\/\d{10}-\d{4}$ url reject
# > d{10} 10位纯数字-\d{4}4位纯数字 $ 结尾符号 ：只拦截10位纯数字-4位纯数字结尾的短连接，后面带尾巴的长连接不拦截。
# > 如果想拦截1234567890-1234?wx类的长连接就加长规则，不加结尾符，只要前面的匹配了都会拦截。
# > 腾讯游戏
^https?:\/\/ssl\.kohsocialapp\.qq\.com:\d+\/game\/buttons url reject
^https?:\/\/qt\.qq\.com\/lua\/mengyou\/get_splash_screen_info url reject
# > 腾讯手机管家
^https://otheve.beacon.qq.com\/analytics\/upload\?sid=.* url reject
# > 腾讯地图
^https?+:\/\/4gimg\.map\.qq\.com\/mwaSplash\/ url reject-200
^https?:\/\/4gimg\.map\.qq\.com\/mwaSplash\/ url reject
# > 腾讯新闻
^https?:\/\/r\.inews\.qq\.com\/(adsBlacklist|getFullScreenPic|getQQNewsRemoteConfig) url reject
^https?:\/\/r\.inews\.qq\.com\/getBannerAds url reject-img
^https?:\/\/r\.inews\.qq\.com\/getNewsRemoteConfig url reject-img
^https?:\/\/r\.inews\.qq\.com\/getSplash\?apptype=ios&startarticleid=&__qnr= url reject-img
^https?:\/\/r\.inews\.qq\.com\/searchHotCatList url reject-img
^https?:\/\/r\.inews\.qq\.com\/upLoadLoc url reject-img
# > 腾讯体育
^https?:\/\/news\.ssp\.qq\.com\/app url reject
^https?:\/\/sports3\.gtimg\.com\/community\/20cf93884470434eaf38b2e77ab7796a\.png url reject
# > 腾讯QQ音乐
^https:\/\/us\.l\.qq\.com\/exapp url reject
^https?:\/\/y\.gtimg\.cn\/music\/common\/upload\/t_splash_info\/ url reject
^https?:\/\/.+?\/music\/common\/upload\/t_splash_info\/ url reject
^https?:\/\/y\.gtimg\.cn\/music\/common\/\/upload\/kg_ad/.*?\d{4}\.jpg url reject-img
^https?:\/\/y\.gtimg\.cn\/music\/common\/upload\/targeted_ads url reject-img
^https?:\/\/((25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)\.){3}(25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)\/music\/common\/upload\/t_splash_info\/ url reject
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
# > 爱奇艺
^https?:\/\/iface\.iqiyi\.com\/api\/getNewAdInfo url reject
^https?:\/\/intl\.iqiyi\.com\/ad_external\/ url reject
^https?:\/\/intl\.iqiyi\.com\/video\/advertise url reject
^https?:\/\/u\d\.iqiyipic\.com\/image\/[\w\/]+\/oad_ url reject
^https?+:\/\/act\.vip\.iqiyi\.com\/interact\/api\/show\.do url reject-200
^https?+:\/\/act\.vip\.iqiyi\.com\/interact\/api\/v2\/show url reject-200
^https?+:\/\/iface\.iqiyi\.com\/api\/getNewAdInfo url reject-200
^https?:\/\/iface2\.iqiyi\.com\/fusion\/3\.0\/fusion_switch url reject-img
^http:\/\/.+\.iqiyipic\.com\/image\/.+\/ad\/.+\.jpg url reject
^http:\/\/static-s\.iqiyi\.com\/common\/.+\/Small_video\/a2\/af\/.+\.png url reject
^http:\/\/msga/.cupid/.iqiyi/.com\/scp2\.gif url reject
https?:\/\/ssports\.iqiyi\.com/app\/ url reject
https?:\/\/ssports\.iqiyi\.com/json\/shop\/shopInfo  url reject
https?:\/\/.+\.iqiyi\.com\/videos\/other\/20$ url reject
https?:\/\/.+\.iqiyipic\.com\/image\/20*_100000 url reject
https?:\/\/static\.iqiyi\.com\/js\/common\/.+\.js url reject
https?:\/\/t7z\.cupid\.iqiyi\.com\/show url reject
# > CSDN
^https?:\/\/gw\.csdn\.net\/cms-app\/v\d+\/home_page\/open_advertisement url reject
# > 迅雷
^https?+:\/\/images\.client\.vip\.xunlei\.com\/.+?\/advert\/ url reject-200
^https?:\/\/images\.client\.vip\.xunlei\.com\/.+?\/advert\/ url reject
^https?:\/\/images\.client\.vip\.xunlei\.com\/.+\/advert\/ url reject
# > 爱思助手
^https?:\/\/list-app-m\.i4\.cn\/getopfstadinfo\.xhtml url reject
# > 飞常准
^https?:\/\/app\.variflight\.com\/ad\/ url reject
^https?:\/\/app\.variflight\.com\/v\d\/advert\/ url reject
 # > 超星学习通
^https?:\/\/learn\.chaoxing\.com\/apis\/service\/appConfig\? url reject
 # > 12306
^https?:\/\/ad\.12306\.cn\/ url reject
# > 去哪儿
https://homefront.qunar.com/front/splash/ad url reject
^https?:\/\/source\.qunarzz\.com\/site\/images\/wns\/.*.jpg url reject
^https?:\/\/client\.qunar\.com\/pitcher-proxy\?qrt=p_splashAd url reject-img
 # > 快手
^https:\/\/open\.e\.kuaishou\.com\/rest\/e\/v3\/open\/univ$ url reject
 # > 金山词霸
^https?:\/\/dict-mobile\.iciba\.com\/interface\/index\.php\?.+(c=ad|collectFeedsAdShowCount|KSFeedsAdCardViewController) url reject
^https?:\/\/mobile-pic\.cache\.iciba\.com\/feeds_ad\/ url reject
^https?+:\/\/service\.iciba\.com\/popo\/open\/screens\/v\d\?adjson url reject-200
^https?+:\/\/\w+?\.kingsoft-office-service\.com\/ad url reject-200
^https?:\/\/.+?\.kingsoft-office-service\.com url reject
 # > 顺丰
^https?:\/\/ccsp-egmas\.sf-express\.com\/cx-app-base\/base\/app\/appVersion\/detectionUpgrade url reject-dict
^https?:\/\/ccsp-egmas\.sf-express\.com\/cx-app-base\/base\/app\/ad\/ url reject
^https?:\/\/shopic\.sf-express\.com\/crm\/mobile\/common\/flashscreen url reject
 # > 淘票票
^https?:\/\/acs\.m\.taobao\.com\/gw\/mtop\.film\.mtopadvertiseapi\.queryadvertise\/ url reject
 # > 京东
^https?:\/\/m15\.360buyimg\.com\/mobilecms\/jfs\/t1\/202220\/24\/21575\/134711\/625b821bE5d642d73\/77636692989bd2be\.jpg url reject
^https?:\/\/m\.360buyimg\.com\/mobilecms\/s1125x2436_jfs\/t1\/96405\/17\/28473\/168578\/625cd144E7997a990\/8233ce8a10c4e463\.jpg url reject
^https?:\/\/m\.360buyimg\.com\/mobilecms\/s1125x2436_jfs\/t1\/182114\/23\/23904\/121433\/62593c9cEd77c4519\/2e3f4c518b771094\.jpg url reject
^https?:\/\/m\.360buyimg\.com\/mobilecms\/s1125x2436_jfs url reject
^https?:\/\/m15\.360buyimg\.com\/mobilecms\/jfs\/t1\/197429\/22/22400\/119193\/62562ef0Eff59b4d4 url reject
^https?:\/\/api\.m\.jd\.com\/client\.action\?functionId=start$ url reject-array
^https?://union.click.jd.com/jda? url request-header ^(.+?\s).+?(\s[\s\S]+?Host:).+?(\r\n) request-header $1/jda?adblock=$2union.click.jd.com$3
^https?://union.click.jd.com/sem.php? url request-header ^(.+?\s).+?(\s[\s\S]+?Host:).+?(\r\n) request-header $1/sem.php?adblock=$2union.click.jd.com$3
^https?:\/\/ms\.jr\.jd\.com\/gw\/generic\/(aladdin\/na\/m\/getLoadingPicture|aladdin\/na\/m\/getLoadingPicture) url reject
^https?:\/\/ms\.jr\.jd\.com\/gw\/generic\/aladdin\/na\/m\/getLoadingPicture url reject
^https?:\/\/ms\.jr\.jd\.com\/gw\/generic\/base\/(new)?na\/m\/adInfo url reject
^https?:\/\/ms\.jr\.jd\.com\/gw\/generic\/base\/na\/m\/adInfo url reject
^https?:\/\/bdsp-x\.jd\.com\/adx\/ url reject
^https?:\/\/api\.m\.jd.com\/client\.action\?functionId=(start|queryMaterialAdverts) url reject
^https?:\/\/(bdsp-x|dsp-x)\.jd\.com\/adx\/ url reject
^https?:\/\/api\.m\.jd\.com\/client\.action\?functionId=start url script-response-body https://raw.githubusercontent.com/28413761/QX/main/JS/startup.js
^https?+:\/\/api\.m\.jd\.com\/client\.action\?functionId=start$ url reject-200
^https?:\/\/img\d+\.360buyimg\.com\/jddjadvertise\/ url reject
^https?:\/\/m15\.360buyimg\.com\/mobilecms\/jfs\/t1\/197429\/22\/22400\/119193\/62562ef0Eff59b4d4 url reject
^https?:\/\/m15\.360buyimg\.com\/mobilecms\/jfs\/t1\/220846\/5\/16214\/41327 url reject
^https?:\/\/m15\.360buyimg\.com\/mobilecms\/jfs\/t1\/202818 url reject
^https?:\/\/storage\.360buyimg\.com\/kepler-app url reject-img
^https?:\/\/m\.360buyimg\.com\/mobilecms\/s640x1136_jfs\/ url reject-img
# > 京东极速版
^https:\/\/img11.360buyimg.com\/dl\/jfs\/t1\/195304\/29\/12317\/268480\/60e6fd21E02a8fb2a\/ url reject-200
https://api.m.jd.com/client.action\?functionId=lite_advertising url reject
# > 京东健康
^https?:\/\/m\.360buyimg\.com\/babel\/jfs\/t1\/[0-9]{6}\/[0-9]{2}\/[0-9]{5}\/[0-9]{6}\/.*.jpg url reject-200
^https?:\/\/m\.360buyimg\.com\/babel\/jfs\/t1\/180291\/5\/23800\/294871\/625f5da2E13ac0ba3\/230238c767c61b6d\.jpg url reject
# > 京喜
^https:\/\/img14.360buyimg.com\/mcoss\/jfs\/t1\/183719\/8\/13358\/190450\/60e82bedE10b64e23\/ url reject-200
# > 京东金融
^https:\/\/m.360buyimg.com\/mobilecms\/s1125x2436_jfs\/ url reject-200
^https?:\/\/api\.m\.jd.com\/client\.action\?functionId=start url reject-img
^https?:\/\/(bdsp-x|dsp-x)\.jd\.com\/adx\/ url reject-200
^https?:\/\/ms\.jr\.jd\.com\/gw\/generic\/aladdin\/(new)?na\/m\/getLoadingPicture url reject
^https?:\/\/appconf\.mail\.163\.com\/mmad\/ url reject
^https?:\/\/support\.you\.163\.com\/xhr\/boot\/getBootMedia\.json url reject
# > 淘宝
^https?:\/\/acs\.m\.taobao\.com\/gw\/mtop\.taobao\.idle\.home\.welcome\/ url reject-200
^https?+:\/\/guide-acs\.m\.taobao\.com\/gw\/mtop\.tmall\.wireless url reject-200
^https?+:\/\/acs\.m\.taobao\.com\/gw\/mtop\.alibaba\.advertisementservice\.getadv url reject-200
^https?+:\/\/acs\.m\.taobao\.com\/gw\/mtop\.alimama\.etao\.config\.query\/ url response-body "ems_etao_advertise" response-body ""
^https?+:\/\/acs\.m\.taobao\.com\/gw\/mtop\.film\.mtopadvertiseapi\.queryadvertise\/ url reject-200
^https?+:\/\/acs\.m\.taobao\.com\/gw\/mtop\.o2o\.ad\.gateway\.get\/ url reject-200
^https?+:\/\/acs\.m\.taobao\.com\/gw\/mtop\.trip\.activity\.querytmsresources\/ url reject-200
 # > 小红书
^https?:\/\/edith\.xiaohongshu\.com\/api\/sns\/v2\/system_service\/splash_config url script-response-body https://raw.githubusercontent.com/28413761/QX/main/JS/xiaohongshu.ad.js
 # > 酷我音乐
^https?+:\/\/(?:(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)\/MobileAdServer\/ url reject-200
^https?+:\/\/(?:(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)\/EcomResourceServer\/AdPlayPage\/adinfo url reject-200
^https?:\/\/rich\.kuwo\.cn\/AdService\/kaiping\/.+ url reject
^https?:\/\/img4\.kwcdn\.kuwo\.cn\/star\/upload\/.+ url reject
^https?:\/\/.+\.kwcdn\.kuwo\.cn\/star\/upload\/.+ url reject
^https?:\/\/mobilead\.kuwo\.cn\/EcomResourceServer\/adBubble\/.+ url reject
# > 韩剧TV
^https?:\/\/gfp\.veta\.naver\.com\/adcall\? url reject
^https?:\/\/api\.hanju\.koudaibaobao\.com\/api\/carp\/kp\? url reject
 # > 雅虎
^https?:\/\/m\.yap\.yahoo\.com\/v\d{2}\/getAds\.do url reject
 # > 北京首汽
^https?:\/\/gateway\.shouqiev\.com\/fsda\/app\/bootImage\.json url reject
 # > 酷我音乐
^https?+:\/\/(?:(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)\/MobileAdServer\/ url reject-200
^https?+:\/\/(?:(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)\.){3}(?:25[0-5]|2[0-4]\d|1\d{2}|[1-9]?\d)\/EcomResourceServer\/AdPlayPage\/adinfo url reject-200
^https?:\/\/rich\.kuwo\.cn\/AdService\/kaiping\/.+ url reject
^https?:\/\/img4\.kwcdn\.kuwo\.cn\/star\/upload\/.+ url reject
^https?:\/\/.+\.kwcdn\.kuwo\.cn\/star\/upload\/.+ url reject
^https?:\/\/mobilead\.kuwo\.cn\/EcomResourceServer\/adBubble\/.+ url reject
# > 韩剧TV
^https?:\/\/gfp\.veta\.naver\.com\/adcall\? url reject
^https?:\/\/api\.hanju\.koudaibaobao\.com\/api\/carp\/kp\? url reject
 # > 饿了么
^https?:\/\/elemecdn.com\/.+\/sitemap url reject
^https?:\/\/fuss10.elemecdn.com\/.+\/w\/640\/h\/\d{3,4} url reject
^https?:\/\/fuss10.elemecdn.com\/.+\/w\/750\/h\/\d{3,4} url reject
^https?:\/\/fuss10\.elemecdn\.com\/.+?\.mp4 url reject-img
^https?:\/\/cube\.elemecdn\.com\/[\w\/]+\.jpeg\?x-oss-process=image\/resize,m_fill,w_1\d{3},h_2\d{3}\/format,webp\/ url reject
^https?:\/\/cube\.elemecdn\.com\/[\w\/]+\.jpeg\?x-oss-process=image\/resize,m_fill,w_6\d{2},h_8\d{2}\/format,webp\/ url reject
^https?:\/\/cube\.elemecdn\.com\/[\w\/]+\.jpeg\?x-oss-process=image\/resize,m_fill,w_\d{3},h_\d{4}\/format,webp\/ url reject
^https?:\/\/cube\.elemecdn\.com\/\w\/\w{2}\/\w+mp4\.mp4\? url reject
^https?:\/\/elemecdn\.com\/.+?\/sitemap url reject-img
^https?:\/\/www1\.elecfans\.com\/www\/delivery\/ url reject
 # > 麦当劳（广告更新太快懒得维护）
^https?:\/\/img\.mcd\.cn\/cms\/images\/44cb29e1d2d9f5f7\.jpg url reject
^https?:\/\/img\.mcd\.cn\/cms\/images\/50af5414401d1e20\.jpg url reject
^https?:\/\/img\.mcd\.cn\/gallery\/cd0b3584cae89f89\.png url reject
# > 肯德基（广告更新太快懒得维护）
^https?:\/\/sares\.kfc\.com\.cn\/uatfile\/ad\/20220421\/7db62bcd80e34ec4b3a7fb6792fae85e\.jpg url reject
^https?:\/\/res\.kfc\.com\.cn\/advertisement\/ url reject-img
# > 必胜客（广告更新太快懒得维护）
^https?:\/\/sares\.pizzahut\.com\.cn\/uatfile\/ad\/20220425\/cc252264a9ff4de89c55164cc43ed0ca\.jpg url reject
^https?:\/\/sares\.pizzahut\.com\.cn\/uatfile\/ad\/20210902\/317484b985014c24a88f68c9dbae5c4c\.jpg url reject
 # > 车来了
^https?:\/\/pic1.chelaile.net.cn\/adv\/ url reject
^https?:\/\/(api|atrace)\.chelaile\.net\.cn\/adpub\/ url reject
^https?:\/\/api\.chelaile\.net\.cn\/goocity\/advert\/ url reject
^https?:\/\/atrace\.chelaile\.net\.cn\/adpub\/ url reject-img
^https?:\/\/atrace\.chelaile\.net\.cn\/exhibit\?&adv_image url reject-img
^https?:\/\/web\.chelaile\.net\.cn\/api\/adpub\/ url reject
 # > keep
^https?:\/\/static1\.keepcdn\.com\/ark_optimus\/202\d\/*\/*\/.*.(png|jpg) url reject-200
 # > 澎湃新闻
^https?:\/\/adpai\.thepaper\.cn\/.+&ad= url reject
# > 界面新闻
^https?:\/\/img\.jiemian\.com\/ads\/ url reject
# > 财经杂志
^https?:\/\/api\.caijingmobile\.com\/(ad|advert)\/ url reject
 # > CSDN
^https?:\/\/gw\.csdn\.net\/cms-app\/v\d+\/home_page\/open_advertisement url reject
 # > 快递100
^https?:\/\/cdn\.kuaidi100\.com\/images\/open\/appads url reject-img
^https?:\/\/p\.kuaidi100\.com\/mobile\/mobileapi\.do url reject
 # > 滴滴出行（推荐英文版）
https?://res\.xiaojukeji\.com\/resapi\/activity\/mget url reject-dict
https?:\/\/res\.xiaojukeji\.com\/resapi\/activity\/get(Ruled|Preload|PasMultiNotices) url reject
# > 滴滴
^https?:\/\/img-ys011\.didistatic\.com\/static\/ad_oss\/.*.jpg url reject
 # > 滴滴青桔
^https?:\/\/pt-starimg\.didistatic\.com\/static\/starimg\/node\/.*.(jpg|png|gif) url reject-200
^https?:\/\/omgup[0-9]{1}\.xiaojukeji\.com\/api url reject-200
^https?:\/\/omgup*\.xiaojukeji\.com\/api url reject-200
 # > 央视
^https?+:\/\/www\.cntv\.cn\/nettv\/adp\/ url reject-200
 # > 猿辅导
^https?+:\/\/xyst\.yuanfudao\.com\/iphone\/splashesV\d url reject-200
# > 中国知网
^https?+:\/\/xyz\.cnki\.net\/resourcev7\/api\/manualpush\/SlidsList$ url reject-200
# > 腾讯手机管家
^https?:\/\/webcdn\.m\.qq\.com\/qiantu\/upload\/202[0-9]{5}\/.*.(jpg|png) url reject-200
