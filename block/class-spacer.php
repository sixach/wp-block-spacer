<?php
/**
 * Block class file. Contains all relevant functions
 * and features such as block registration and render callbacks.
 *
 * @link          https://sixa.ch
 * @author        sixa AG
 * @since         1.1.0
 *
 * @package       Sixa_Blocks
 * @subpackage    Sixa_Blocks\Spacer
 */

namespace Sixa_Blocks;

/**
 * Block Class Spacer.
 */
class Spacer {

	/**
	 * Initialize the block.
	 * Set up the WordPress hook to register the block.
	 *
	 * @since     1.0.0
	 * @return    void
	 */
	public static function init(): void {
		add_action( 'init', array( __CLASS__, 'register' ) );
	}

	/**
	 * Registers the block using the metadata loaded from the `block.json` file.
	 * Behind the scenes, it registers also all assets so they can be enqueued
	 * through the block editor in the corresponding context.
	 *
	 * @see       https://developer.wordpress.org/block-editor/tutorials/block-tutorial/writing-your-first-block-type/
	 * @since     1.0.0
	 * @return    void
	 */
	public static function register(): void {
		register_block_type_from_metadata( dirname( __DIR__ ) );
	}

}
