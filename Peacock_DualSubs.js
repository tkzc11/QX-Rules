# DualSubs.Peacock.HLS.Main.m3u8
^https?:\/\/(.+)\.cdn\.peacocktv\.com\/pub\/global\/(.+)\/cmaf\/(.+)\/master_cmaf\.m3u8(\?.+)?$ url script-response-body https://raw.githubusercontent.com/DualSubs/Universal/releases/v0.7.8/js/DualSubs.HLS.Main.m3u8.js
# DualSubs.Peacock.HLS.WebVTT.m3u8
^https?:\/\/(.+)\.cdn\.peacocktv\.com\/pub\/global\/(.+)\/cmaf\/(.+)\/[^\/]*subtitles[^\/]*\.m3u8(\?.*dualsubs=\w+)$ url script-response-body https://raw.githubusercontent.com/DualSubs/Universal/releases/v0.7.8/js/DualSubs.HLS.WebVTT.m3u8.js
# DualSubs.Peacock.SUB.WebVTT
^https?:\/\/(.+)\.cdn\.peacocktv\.com\/pub\/global\/(.+)\/cmaf\/(.+)\/[^\/]*subtitles[^\/]*\.webvtt(\?.*dualsubs=\w+)?$ url script-response-body https://raw.githubusercontent.com/DualSubs/Universal/releases/v0.7.8/js/DualSubs.SUB.WebVTT.js
hostname = *.stream.peacocktv.com, *.cdn.peacocktv.com
