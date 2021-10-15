<?php
/**
 * Block class file.
 *
 * @link          https://sixa.ch
 * @author        sixa AG <info@sixa.ch>
 *
 * @since         1.2.0
 * @package       Sixa_Blocks
 * @subpackage    Sixa_Blocks\Spacer
 */

namespace Sixa_Blocks;

defined( 'ABSPATH' ) || exit; // Exit if accessed directly.

if ( ! class_exists( Spacer::class ) ) :

	/**
	 * Block Class Spacer
	 */
	final class Spacer extends Block {

		/**
		 * Registers the block using the metadata loaded from the `block.json` file.
		 * Behind the scenes, it registers also all assets so they can be enqueued
		 * through the block editor in the corresponding context.
		 *
		 * @see       https://developer.wordpress.org/block-editor/tutorials/block-tutorial/writing-your-first-block-type/
		 * @since     1.2.0
		 * @return    void
		 */
		public static function register(): void {
			register_block_type_from_metadata( plugin_dir_path( __DIR__ ) );
		}

	}

endif;