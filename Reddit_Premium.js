/***********************************

[rewrite_local]
^https:\/\/oauth\.reddit\.com\/api\/v\d\/me\.json url script-response-body https://raw.githubusercontent.com/tkzc11/QX-Rules/main/Reddit_Premium.js

[mitm] 

hostname = oauth.reddit.com

***********************************/

var obj = JSON.parse($response.body);
obj['has_gold_subscription'] = true;
obj['pref_autoplay'] = false;
obj['has_subscribed_to_premium'] = true;
obj['has_visited_new_profile'] = true;
obj['pref_video_autoplay'] = false;
obj['features']['promoted_trend_blanks'] = false;
obj['is_mod'] = true;
obj['is_gold'] = true;
obj['has_ios_subscription'] = true;
obj['seen_premium_adblock_modal'] = true;
obj['can_edit_name'] = true;
obj['has_external_account'] = true;
$done({body: JSON.stringify(obj)});
