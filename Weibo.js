// @ScriptName        微博&微博国际版净化
// @Author            @ddgksf2013,@zmqcherish,@shiro
// @UpdateTime        2022-12-14
// @Attention         微博、微博国际版净化
// @Function          去广告配置
// @Version           V2.0.31
// @ScriptURL         https://github.com/ddgksf2013/Rewrite/raw/master/AdBlock/Weibo.conf


hostname = *api.weibo*, *uve.weibo.com, new.vip.weibo.cn
# > 微博_自定义tab皮肤@zmqcherish
^https://api.weibo.cn/2/!/client/light_skin url script-response-body https://github.com/ddgksf2013/Scripts/raw/master/weibo_json.js
# > 微博_非会员设置tab皮肤@zmqcherish
^https://new.vip.weibo.cn/littleskin/preview url script-response-body https://github.com/ddgksf2013/Scripts/raw/master/weibo_json.js
# > 微博_去广告以及去除各部分推广模块@zmqcherish
^https?:\/\/m?api\.weibo\.c(n|om)\/\d\/(searchall|page\?|messageflow) url script-response-body https://github.com/ddgksf2013/Scripts/raw/master/weibo_json.js
^https?:\/\/m?api\.weibo\.c(n|om)\/\d\/statuses/(unread_)?friends(/|_)timeline url script-response-body https://github.com/ddgksf2013/Scripts/raw/master/weibo_json.js
^https?:\/\/m?api\.weibo\.c(n|om)\/\d\/groups/timeline url script-response-body https://github.com/ddgksf2013/Scripts/raw/master/weibo_json.js
^https?:\/\/m?api\.weibo\.c(n|om)\/\d\/statuses/(container_timeline|unread_hot_timeline|extend|video_mixtimeline|unread_topic_timeline) url script-response-body https://github.com/ddgksf2013/Scripts/raw/master/weibo_json.js
^https?:\/\/m?api\.weibo\.c(n|om)\/\d\/profile/(me|container_timeline) url script-response-body https://github.com/ddgksf2013/Scripts/raw/master/weibo_json.js
^https?:\/\/m?api\.weibo\.c(n|om)\/\d\/video/(community_tab|remind_info|tiny_stream_video_list) url script-response-body https://github.com/ddgksf2013/Scripts/raw/master/weibo_json.js
^https?:\/\/m?api\.weibo\.c(n|om)\/\d\/search/(finder|container_timeline|container_discover) url script-response-body https://github.com/ddgksf2013/Scripts/raw/master/weibo_json.js
^https?:\/\/m?api\.weibo\.c(n|om)\/\d\/(checkin/show|\!/live/media_homelist|comments/build_comments|container/get_item) url script-response-body https://github.com/ddgksf2013/Scripts/raw/master/weibo_json.js
^https?:\/\/m?api\.weibo\.c(n|om)\/\d\/cardlist url script-response-body https://github.com/ddgksf2013/Scripts/raw/master/weibo_json.js
# > 微博国际版_hot_search@ddgksf2013
^https?:\/\/weibointl\.api\.weibo\.c(n|om)\/portal\.php\?a=hot_search_users url reject-dict
# > 微博国际版_热推荐@ddgksf2013
^https?:\/\/m?api\.weibo\.c(n|om)\/\d\/ad\/weibointl\? url reject-dict
# > 微博国际版_屏蔽search_suggest@ddgksf2013
# ^https?:\/\/m?api\.weibo\.c(n|om)\/\d\/page\/get_search_suggest url reject-dict
# > 微博国际版_屏蔽searching_info@ddgksf2013
^https?:\/\/weibointl\.api\.weibo\.c(n|om)\/portal\.php.*user&a=get_searching_info url echo-response text/html echo-response https://github.com/ddgksf2013/Scripts/raw/master/weibo_search_info.json
# > 微博国际版_屏蔽search_topic@ddgksf2013 
^https?:\/\/weibointl\.api\.weibo\.c(n|om)\/portal\.php.*feed&a=search_topic url echo-response text/html echo-response https://github.com/ddgksf2013/Scripts/raw/master/weibo_search_topic.json
# > 微博国际版_屏蔽开屏广告@ddgksf2013 
^https?:\/\/weibointl\.api\.weibo\.c(n|om)\/portal\.php.*get_coopen_ads url script-response-body https://github.com/ddgksf2013/Scripts/raw/master/weibo_json.js
# > 微博&国际版_sdkad@ddgksf2013
^https?://(sdk|wb)app\.uve\.weibo\.com(/interface/sdk/sdkad.php|/wbapplua/wbpullad.lua) url script-response-body https://github.com/ddgksf2013/Scripts/raw/master/weibo_json.js
# > 微博国际版_趋势顶部CARD去广告@ddgksf2013
^https?:\/\/weibointl\.api\.weibo\.c(n|om)\/portal\.php.*feed&a=trends url script-response-body https://github.com/ddgksf2013/Scripts/raw/master/weibo_json.js
# > 微博国际版_用户中心@ddgksf2013
^https?:\/\/weibointl\.api\.weibo\.cn\/portal\.php\?a=user_center url script-response-body https://github.com/ddgksf2013/Scripts/raw/master/weibo_json.js
