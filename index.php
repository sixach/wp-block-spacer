<?php
/**
 * Spacer Block.
 *
 * @wordpress-plugin
 * Plugin Name:          Spacer Block
 * Description:          Add empty vertical space to your page. Responsive for desktop and mobile devices. Supports background colors and gradients.
 * Version:              1.2.3
 * Requires at least:    5.7
 * Requires PHP:         7.3
 * Author:               sixa AG
 * Author URI:           https://sixa.com
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
use Sixa_API_Manager_Client\Main as API_Manager_Client;

/**
 * Composer autoload is needed in this package even if
 * it doesn't use any libraries to autoload the classes
 * from this package.
 *
 * @see    https://getcomposer.org/doc/01-basic-usage.md#autoloading
 */
require_once plugin_dir_path( __FILE__ ) . 'vendor/autoload.php';

/**
 * Integration with remote licensing server. Allows to update the plugin.
 */
new API_Manager_Client( __FILE__, 30, '1.2.3', 'plugin', 'https://deployment-test.jcloud-ver-jpc.ik-server.com', 'Spacer Block' );

/**
 * Initialize your block.
 *
 * Other than this function call, this file should not include any logic
 * and should merely be used as an entry point to use this package as
 * a WordPress plugin.
 */
Spacer::init();
