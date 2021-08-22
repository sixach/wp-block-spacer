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

namespace SixaSpacerBlock;

defined( 'ABSPATH' ) || exit; // Exit if accessed directly.

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see       https://developer.wordpress.org/block-editor/tutorials/block-tutorial/writing-your-first-block-type/
 * @since     1.0.0
 * @return    void
 */
function register_block(): void {
	register_block_type_from_metadata( __DIR__ );
}
add_action( 'init', __NAMESPACE__ . '\register_block' );
