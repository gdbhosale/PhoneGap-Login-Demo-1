# nativeDroid

A clean jQuery Mobile Theme inspired by the native GUI of Android 4.x

Demo-Link: **<http://nativedroid.godesign.ch/>**

## how to implement nativeDroid?

nativeDroid is basically a theme for jQuery Mobile so you can use any functionality provided by jQM but for a better looking design there are a few tweaks to respect:

* **nice to know**
 - all styles are applied to `data-theme='b'`
 - the `data-inset='true|false'` parameter is not working in nativeDroid
 - Use the wrapping &lt;div class='inset'&gt;-Tag instead
 - use the `data-role='header'` only in combination with `data-position='fixed'` and `data-tap-toggle='false'` and specificly apply the `data-theme='b'` to link elements inside the header

**As a best practice we recommend you to start by copying one of the HTML-Documents from the demonstration**

## colors & styles

* **Basic CSS**
 - `css/font-awesome.min.css` contains the fonts and icons used in nativeDroid.
 - `http://code.jquery.com/mobile/1.4.2/jquery.mobile-1.4.2.min.css` original structure for jQuery Mobile without any theme (minified).
 - `css/jquerymobile.nativedroid.css` contains the structure adjustments needed for nativeDroid.
* **Theme**
 - `css/jquerymobile.nativedroid.light.css` contains the light-theme.
 - `css/jquerymobile.nativedroid.dark.css` contains the dark-theme.
* **Colors**
 - `css/jquerymobile.nativedroid.color.blue.css` blue-color style.
 - `css/jquerymobile.nativedroid.color.green.css` green-color style.
 - `css/jquerymobile.nativedroid.color.purple.css` purple-color style.
 - `css/jquerymobile.nativedroid.color.red.css` purple-color style.
 - `css/jquerymobile.nativedroid.color.yellow.css` yellow-color style.

**To create your own color-style simply copy one of the basic color.css-files and adjust the few color codes as you like.**

## release notes

* **Version 0.2.7** `July, 2014`
 - minor Bugfixes in panel-design.
* **Version 0.2.3 - 0.2.6** `May, 2014`
 - nativeDroid is now running on the current jquerymobile Version 1.4 with its original css-code (http://code.jquery.com/mobile/1.4.2/jquery.mobile-1.4.2.min.css).
 - Using Icons with two additional classes blIcon (for block icons) lIcon (for left inline-block icons) - Example: <i class='lIcon fa fa-map-marker'></i>
 - Bugfix: Crashing Forms on iOS
 - Bugfix: The 'ugly-font-issue'
 - FontAwesome-Icons are working according to their documentation the use of data-icon='something' is depreciated.
* **Version 0.2.2** `June 15,2013`
 - `FontAwesome 3.2.0` is fully implemented now! You can have a preview look of `all 361 icons`
 - Footer added. Finally a minimal `data-role='footer'` is implemented
 - TweetFeed (Experimental) has gone. Unsupported API v1 by twitter.com
* **Version 0.2.1** `April 29, 2013`
 - Gallery Example added (`+Flickr API` implemented)
 - Homescreen Example added. Including `Splashscreen` / `Lockscreen` / `Clock Widget` as well as a `RSS FeedReader-Widget`.
 - Cards improved. Routes will be automatically displayed when you provide a from and to parameter (`Google Maps`).
* **Version 0.2** (April 24,2013)
 - Update to `jQuery Mobile 1.3.1` and `jQuery 1.9.1` (Version 2.0.0 is pretty buggy with jQuery Mobile)
 - Newly styled HTML5 `<progress>`-Element
 - TweetFeed: A Twitter-Reader-Plugin (Experimental)
 - Cards: A Plugin for flying cards (Experimental)
 - Loading-Progress-Bar (Experimental/implemented in TweetFeed) (`-webkit`-only)
 - Added `user-scalable=no` in the header for improving click performance (Many thanks to Mozillas Firefox for Android-Team for the feedback)
 - Removed the big border on the radio and checkbox form elements (z-index-issue)
 - `Bugfix`: Fixed the flickering-header icons on scrolling
 - `Bugfix`: Fixed the hiding icon-issue in Panels
* **Version 0.1** (April 13,2013)
 - nativeDroid does not need any single image
 - The icons are provided by FontAwesome and can be used by the `data-icon`-attribute.
(`data-icon='camera'` = `.icon-camera`)
 - nativeDroid comes in 5 different colours (`blue`/`green`/`purple`/`red`/`yellow`) where are fully combinable with `light` and `dark`.
 - nativeDroid has additional classes that makes it easy to create a beautiful mobile project.

## License & Credits

The nativeDroid-Theme by Raphael Wildhaber is freely available and can be used for private and commercial projects as long as you provide a link back to this website (http://nativedroid.godesign.ch)

You may not resell this theme or claim it as your own! (Explanation: You may use this theme in projects for your customers but you may not sell this theme in a marketplace as a template)

If you have any questions or if you are not able to provide a backlink please Contact me.

**No link back?**
If you don't want to or cannot set a link back in your project, I ask you for a small donation of USD 15 to my Paypal account.

* **Libraries**
 - FontAwesome Created & Maintained by Dave Gandy (Version 4.1)
 http://fortawesome.github.com/Font-Awesome/
 - Roboto Webfont - Apache License
 http://www.google.com/fonts/specimen/Roboto
 - jQuery by The jQuery Foundation (Version 1.9.1)
 http://www.jquery.com
 - jQuery Mobile by The jQuery Foundation (Version 1.4.2)
 http://www.jquery.com
