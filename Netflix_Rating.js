^https?://ios(-.*)?\.prod\.ftl\.netflix\.com/iosui/user/.+path=%5B%22videos%22%2C%\d+%22%2C%22summary%22%5D url script-request-header https://raw.githubusercontent.com/yichahucha/surge/master/nf_rating.js
^https?://ios(-.*)?\.prod\.ftl\.netflix\.com/iosui/user/.+path=%5B%22videos%22%2C%\d+%22%2C%22summary%22%5D url script-response-body https://raw.githubusercontent.com/yichahucha/surge/master/nf_rating.js
# 单集评分
^https?:\/\/ios(-.*)?\.prod\.ftl\.netflix\.com\/iosui\/warmer/.+type=show-ath url script-response-body https://raw.githubusercontent.com/yichahucha/surge/master/nf_rating_season.js
hostname = ios-*.prod.ftl.netflix.com, ios.prod.ftl.netflix.com
