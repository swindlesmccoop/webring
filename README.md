# Webring
As the title implies, this is software I wrote to have a webring.

## How to use/join
To add yourself to the list, simply email me or add a PR with the URL to your website and a 4:1 aspect ratio image banner. This should all be done in `webring.html`.

To add the webring to your site, simply make an HTML file called whatever you want, and add this line to it:
```HTML
<script src="https://swindlesmccoop.xyz/webring/webring.js"></script>
```
From here, to display the banners, create a `div` called `banner-div`.
```HTML
<div id="banner-div"></div>
```
Optionally, you may also include a "random page" button:
```HTML
<a href="#" id="random-link">Random Page</a>
```

## Why?
Webrings kind of don't work because there is no centralized list of who all is in it. Well that ends now. Using a bit of JavaScript (don't worry, it's Free), the small script will fetch the list and banners of all of the people in it from my server