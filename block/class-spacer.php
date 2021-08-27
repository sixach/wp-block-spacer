<?php

namespace Sixa_Blocks;

class Spacer {

	public static function init(): void {
		add_action( 'init', array( __CLASS__, 'register' ) );
	}

	public static function register(): void {
		register_block_type_from_metadata( dirname( __DIR__ ) );
	}

}
