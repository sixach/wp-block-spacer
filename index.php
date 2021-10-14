<?php
/**
 * Spacer Block.
 *
 * @wordpress-plugin
 * Plugin Name:          Sixa - Spacer Block
 * Description:          Block to add empty vertical space (full-width).
 * Version:              1.0.0
 * Requires at least:    5.7
 * Requires PHP:         7.3
 * Author:               sixa AG
 * Author URI:           https://sixa.ch
 * License:              GPL v3 or later
 * License URI:          https://www.gnu.org/licenses/gpl-3.0.html
 * Text Domain:          sixa-block-spacer
 *
 * @package              Sixa_Blocks
 */

defined( 'ABSPATH' ) || exit; // Exit if accessed directly.

/**
 * Include the namespace of this block.
 */
use Sixa_Blocks\Spacer;

/**
 * Composer autoload is needed in this package even if
 * it doesn't use any libraries to autoload the classes
 * from this package.
 *
 * @see    https://getcomposer.org/doc/01-basic-usage.md#autoloading
 */
require_once plugin_dir_path( __FILE__ ) . 'vendor/autoload.php';

/**
 * Initialize your block.
 *
 * Other than this function call, this file should not include any logic
 * and should merely be used as an entry point to use this package as
 * a WordPress plugin.
 */
Spacer::init();