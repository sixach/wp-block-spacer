=== Sixa Spacer Block ===
Contributors: sixa, mahdiyazdani, gookaani, kuserich
Donate link: https://sixa.com/
Tags: block, gutenberg, space, divider, separator, margin, sixa
Requires at least: 5.7
Tested up to: 5.8.2
Stable tag: 1.2.0
Requires PHP: 7.3
License: GPLv3 or later
License URI: http://www.gnu.org/licenses/gpl-3.0.html

Add empty vertical space to your page. Responsive for desktop and mobile devices. Supports background colors and gradients.

== Description ==

Add vertical space to your page with the sixa Spacer Block.
The block is fully responsive for widescreen, desktop, tablet,
and mobile devices and allows you to hide a Spacer Block for
specific devices. Additionally, the Spacer Block supports
background colors as well as background gradients directly from
your theme.

== Installation ==
= Minimum Requirements =

* PHP version 7.3 or greater.
* MySQL version 5.6 or greater or MariaDB version 10.0 or greater.
* WordPress version 5.7 or greater.

= Automatic installation =

Automatic installation is the easiest option — WordPress will handle the file transfer, and you won’t need to leave your web browser. To do an automatic install of the plugin, log in to your WordPress dashboard, navigate to the Plugins menu, and click “Add New.”

In the search field type “Block Data Attribute”, then click “Search Plugins.” Once you’ve found the plugin, you can view details about it such as the point release, rating, and description. Click “Install Now,” and WordPress will take it from there.

= Manual installation =

Manual installation requires downloading the plugin and uploading it to your webserver via your favorite FTP application. The WordPress codex contains [a detailed instruction on how to do this](https://wordpress.org/support/article/managing-plugins/#manual-plugin-installation "Manual plugin installation").

= Updating =

Automatic updates should work smoothly, but we still recommend you back up your site.

== Frequently Asked Questions ==

= How do I use the block? =
1. Log in to your WordPress website and navigate to the Dashboard
2. Create a new page by visiting *Pages* > *Add new* or open an existing page in *Pages*
3. Click on the Block Inserter button in top left and click on the *Spacer* block in the *Design* section. Alternatively, you may start typing `/spacer` in a new paragraph block and then press enter
4. Once you’ve inserted the block, you can use the block settings sidebar to configure the block height and background color. Alternatively, you may also configure the height of the block by dragging on the circle knob on the bottom edge of the block
5. In the block controls directly above the block in the editor, you may toggle the visibility of the block for different devices
6. To add more space than the maximum the block allows with its height, simply add multiple Spacer Blocks to your page
7. Publish the page

= How do I get help with the plugin? =
The easiest way to receive support is to “Create a new topic” by visiting Community Forums page [here](https://wordpress.org/support/plugin/sixa-spacer-block "Sixa Spacer Block Support Forum").

Make sure to check the “Notify me of follow-up replies via email” checkbox to receive notifications, as soon as a reply posted to your question or inquiry.

= Can I help translating this plugin into a new language? =
The plugin is fully translation-ready and localized using the GNU framework, and translators are welcome to contribute to the plugin.

Here’s the the [WordPress translation website &#8594;](https://translate.wordpress.org/projects/wp-plugins/sixa-spacer-block "WordPress translation website")

= How do I contribute to this plugin? =
We welcome contributions of any form, and you can help reporting, testing, and detailing bugs.

Here’s the [GitHub development repository &#8594;](https://github.com/sixach/wp-block-spacer "GitHub development repository")

= Did you like the idea behind this plugin? =
Please share your experience by leaving this plugin a [5 star review](https://wordpress.org/support/plugin/sixa-spacer-block/reviews/ "sixa Spacer Block 5 stars") if you like it. Thank you!

= I need help customizing this plugin? =
We are an online marketing agency specializing in creating tailor-made software for WordPress and WooCommerce.
If you need professional support for this or any other WordPress project, please [reach out to us &#8594;](https://sixa.com "sixa's professional website").

== Screenshots ==

1. Add "Spacer" block

== Changelog ==
= 1.2.0 =
* Updated NPM modules
* Refactored code base for new sixa structure
* Added translation file
* Added deprecated version for new classnames

= 1.1.0 =
* Updated NPM modules
* Replaced private `@sixach` packages with public `@sixa` packages
* Moved from PostCSS to SCSS
* Moved all block logic and functionality to a dedicated block class
* Setup composer autoload

= 1.0.0 =
* Initial release

== Upgrade Notice ==

= 1.2.0 =
Initial wordpress.org release. Refined code base, fully compatible with all sixa libraries and other sixa blocks and extensions.

= 1.1.0 =
Refactored version.

= 1.0.0 =
Initial version of sixa Spacer Block.
