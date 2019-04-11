# jira & svn

> Chrome Extensions

> 一个浏览器操作与弹出窗口, 获得页面 jira 信息用于 svn 提交评论!



Only one of 'browser_action', 'page_action', and 'app' can be specified.


Default locale was specified, but _locales subtree is missing.


## chrome.extension.getBackgroundPage()


## chrome.extension.getViews()


## i18n

https://developer.chrome.com/extensions/manifest/default_locale
https://developer.chrome.com/extensions/i18n
https://developer.chrome.com/extensions/i18n-messages


https://github.com/darkreader/darkreader/blob/master/src/_locales/zh_CN.config

```js
// "default_locale": "zh-Hans",

// __MSG_messagename__

chrome.i18n.getMessage("messagename");


```

https://github.com/darkreader/darkreader/blob/master/src/background/index.ts
https://github.com/darkreader/darkreader/blob/master/src/background/devtools.ts
https://github.com/darkreader/darkreader/blob/master/src/background/extension.ts

https://github.com/darkreader/darkreader/blob/master/src/inject/index.ts
https://github.com/darkreader/darkreader/blob/master/src/utils/color.ts

https://github.com/darkreader/darkreader/blob/master/src/ui/popup/index.tsx



https://src.chromium.org/viewvc/chrome/trunk/src/chrome/common/extensions/docs/examples/tutorials/getstarted/
https://chromiumcodereview.appspot.com/11175029


https://developer.chrome.com/extensions/apps
https://developer.chrome.com/apps/about_apps

https://developer.chrome.com/extensions/manifest