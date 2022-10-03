# > 微博其它
^https?:\/\/.+\/wbts\.png$ url reject-200
^https?:\/\/.+\/licai\.png$ url reject-200
^https?:\/\/.+\/3fc\.png$ url reject-200
^https?:\/\/.+\/pull-flv-(.*)\.douyincdn\.com\/stage\/.+\.flv url reject-200
^https?:\/\/h5\.sinaimg\.cn\/upload\/.+\/NavigationBar_Video_Icon_Live_Normal\.png$ url reject-200
^https?:\/\/.+\.sinaimg\.cn\/.+\/(.*)?(fish|redicon|redpacket)(.*)?\.(png|jpg|jpeg|gif)$ url reject-200
^https?:\/\/.+\.sinaimg\.cn\/.+\/lipin_dongtu\.gif$ url reject-200
^https?:\/\/h5\.sinaimg\.cn\/m\/taskcenter url reject-200
^https?:\/\/h5\.sinaimg\.cn\/m\/taskcenter\/js\/vendor\.+\.js$ url reject-200
^https?:\/\/h5\.sinaimg\.cn\/m\/taskcenter\/js\/app\.+\.js$ url reject-200
^https?:\/\/h5\.sinaimg\.cn\/m\/taskcenter\/js\/0\.+\.js$ url reject-200
^https?:\/\/h5\.sinaimg\.cn\/m\/taskcenter\/js\/index\.lazy\.+\.js$ url reject-200
^https?:\/\/captcha\.weibo\.com\/static\/js\/jigsawLock\.min\.js$ url reject-200
^https?:\/\/wx[0-9]\.sinaimg\.cn\/large\/.+\.gif$ url reject-200

# > 微博积分弹窗
^https?:\/\/luck\.sc\.weibo\.com\/aj\/Action\/indexInfo$ url script-response-body https://hub.nange.cn/Mock/Blank/Blank_Dict.json

# > 会员中心弹窗
^https?:\/\/new\.vip\.weibo\.c(n|om)\/aj\/vipcenter\/popalert url script-response-body https://hub.nange.cn/Mock/Blank/Blank_Dict.json
^https?:\/\/new\.vip\.weibo\.c(n|om)\/aj\/vipcenter\/popalert url script-response-body https://hub.nange.cn/Mock/Blank/Blank_Dict.json

# > 微博推荐
^https?:\/\/m?api\.weibo\.c(n|om)\/2\/statuses\/unread_hot_timeline\?gsid= url script-response-body https://hub.nange.cn/Mock/Blank/Blank_Dict.json

# > 获取设备型号
^https?:\/\/m?api\.weibo\.c(n|om)\/device\/get url script-response-body https://hub.nange.cn/Mock/Weibo/getDevice.json

# > 微博话题按钮红点
^https?:\/\/m?api\.weibo\.c(n|om)\/2\/!\/huati\/discovery_home_bottom_getdotinfo url script-response-body https://hub.nange.cn/Mock/Blank/Blank_Dict.json

# > 微博超话看帖
^https?:\/\/m?api\.weibo\.c(n|om)\/2\/!\/huati\/discovery_home_bottom_channel_list url script-response-body https://hub.nange.cn/Mock/Blank/Blank_Dict.json
^https?:\/\/m?api\.weibo\.c(n|om)\/2\/statuses\/unread_topic_timeline url script-response-body https://hub.nange.cn/Mock/Blank/Blank_Dict.json
^https?:\/\/m?api\.weibo\.c(n|om)\/2\/statuses\/container_timeline_topic url script-response-body https://hub.nange.cn/Mock/Blank/Blank_Dict.json

# > 微博订单
^https?:\/\/shop\.sc\.weibo\.com\/aj\/h5\/order\/prolist url script-response-body https://hub.nange.cn/Mock/Blank/Blank_Dict.json

# > 微博视频推荐
^https?:\/\/m?api\.weibo\.c(n|om)\/2\/video\/redpacket url script-response-body https://hub.nange.cn/Mock/Blank/Blank_Dict.json
^https?:\/\/m?api\.weibo\.c(n|om)\/2\/video\/community_tab url script-response-body https://hub.nange.cn/Mock/Blank/Blank_Dict.json
^https?:\/\/m?api\.weibo\.c(n|om)\/2\/!\/multimedia\/playback\/batch_get url script-response-body https://hub.nange.cn/Mock/Blank/Blank_Dict.json
^https?:\/\/m?api\.weibo\.c(n|om)\/2\/!\/multimedia\/video\/comments\/get_comments_order_by_hot url script-response-body https://hub.nange.cn/Mock/Blank/Blank_Dict.json
^https?:\/\/m?api\.weibo\.c(n|om)\/2\/video\/tiny_stream_channel_list url script-response-body https://hub.nange.cn/Mock/Blank/Blank_Dict.json
^https?:\/\/m?api\.weibo\.c(n|om)\/2\/video\/tiny_stream_video_list url script-response-body https://hub.nange.cn/Mock/Blank/Blank_Dict.json

# > 微博其它
^https?:\/\/letsgo\.e\.weibo\.com\/stracker\/fe\/report url script-response-body https://hub.nange.cn/Mock/Blank/Blank_Dict.json
^https?:\/\/m?api\.weibo\.c(n|om)\/2\/!\/multimedia\/video\/red_package\/grow_follower\/active_uids url script-response-body https://hub.nange.cn/Mock/Blank/Blank_Dict.json
^https?:\/\/m?api\.weibo\.c(n|om)\/2\/client\/tabbar url script-response-body https://hub.nange.cn/Mock/Blank/Blank_Dict.json
^https?:\/\/m?api\.weibo\.c(n|om)\/2\/push\/daily url script-response-body https://hub.nange.cn/Mock/Blank/Blank_Dict.json
^https?:\/\/m?api\.weibo\.c(n|om)\/2\/page\/get_fragment url script-response-body https://hub.nange.cn/Mock/Blank/Blank_Dict.json
^https?:\/\/m?api\.weibo\.c(n|om)\/2\/push\/active url script-response-body https://hub.nange.cn/Mock/Blank/Blank_Dict.json
^https?:\/\/m\.weibo\.cn\/c\/checkin url script-response-body https://hub.nange.cn/Mock/Blank/Blank_Dict.json
^https?:\/\/m?api\.weibo\.c(n|om)\/2\/video\/machine url script-response-body https://hub.nange.cn/Mock/Blank/Blank_Dict.json
^https?:\/\/fastimage\.uve\.weibo\.com\/interface\/sdk\/getad\.php$ url script-response-body https://hub.nange.cn/Mock/Blank/Blank_Dict.json
^https?:\/\/sdkapp\.uve\.weibo\.com\/interface\/sdk\/actionpro\.php url script-response-body https://hub.nange.cn/Mock/Blank/Blank_Dict.json
^https?:\/\/sdkclick\.uve\.weibo\.com\/interface\/sdk\/sdkclick\.php url script-response-body https://hub.nange.cn/Mock/Blank/Blank_Dict.json
^https?:\/\/sdkapp\.uve\.weibo\.com\/interface\/sdk\/sdkconfig\.php url script-response-body https://hub.nange.cn/Mock/Blank/Blank_Dict.json
^https?:\/\/m?api\.weibo\.c(n|om)\/2\/hot\/repost_daily url script-response-body https://hub.nange.cn/Mock/Blank/Blank_Dict.json

#开屏
^https?://(sdk|wb)app\.uve\.weibo\.com(/interface/sdk/sdkad.php|/wbapplua/wbpullad.lua) url script-response-body https://raw.githubusercontent.com/zmqcherish/proxy-script/main/weibo_launch.js

#微博信息流
^https?:\/\/m?api\.weibo\.c(n|om)/2/(statuses/(unread|extend|positives/get|(friends|video)(/|_)(mix)?timeline)|stories/(video_stream|home_list)|(groups|fangle)/timeline|profile/statuses|comments/build_comments|photo/recommend_list|service/picfeed|cardlist|page|!/(photos/pic_recommend_status|live/media_homelist|wbox\/.+\/createrIndex|st_videos\/tiny\/effect\/shoot_display_config)|video/tiny_stream_video_list|photo/info|remind/unread_count|search/finder|search/container_timeline|!\/huati\/discovery_home_bottom_channel_list|statuses\/unread_topic_timeline) url script-response-body https://hub.nange.cn/Script/Weibo/Timeline.js

#微博钱包订单
(^https?:\/\/js\.t\.sinajs\.cn\/c2p\/sam\/frontend\/assets\/walletcache\.json|^https?:\/\/pay\.sc\.weibo\.com\/api\/client\/sdk\/app\/indexnew\/(index|person)|^https?:\/\/shop\.sc\.weibo\.com\/aj\/h5\/order\/center) url script-response-body https://hub.nange.cn/Script/Weibo/Wallet.js

hostname = api.weibo.cn, mapi.weibo.com, *.uve.weibo.com, new.vip.weibo.cn, h5.sinaimg.cn, *.sc.weibo.com, captcha.weibo.com, wx*.sinaimg.cn, js.t.sinajs.cn
