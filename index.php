<?php
/**
 * Spacer Block.
 *
 * @wordpress-plugin
 * Plugin Name:          Sixa - Spacer
 * Description:          Spacer block for WordPress editor.
 * Version:              1.0.0
 * Requires at least:    5.8
 * Requires PHP:         7.4
 * Author:               sixa AG
 * License:              GPL v3 or later
 * License URI:          https://www.gnu.org/licenses/gpl-3.0.html
 * Text Domain:          sixa
 *
 * @package              sixa
 */

defined( 'ABSPATH' ) || exit; // Exit if accessed directly.

use SixaSpacerBlock\Block;

/**
 * Require Composer autoload file to enable access to files
 * and classes that are imported from Composer packages.
 *
 * @see     https://getcomposer.org/doc/01-basic-usage.md#autoloading
 */
require __DIR__ . '/vendor/autoload.php';

$block = new Block();
$block->init();

/**
 * Require the block initialization file that contains all block features
 * as well as block registration and asset management.
 */
//require_once sprintf( '%sblock.php', plugin_dir_path( __FILE__ ) );
