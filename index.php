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

use Sixa_Blocks\Spacer;

require __DIR__ . '/vendor/autoload.php';

Spacer::init();
