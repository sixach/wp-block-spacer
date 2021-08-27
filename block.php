<?php
/**
 * Block initialization file. Contains all relevant functions
 * and features such as block registration and render callbacks.
 * The block is fully installed if this file is imported.
 *
 * @link       https://sixa.ch
 * @author     sixa AG
 * @since      1.1.0
 * @package    SixaSpacerBlock
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
