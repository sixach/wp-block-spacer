<?php

namespace Sixa;

class SpacerBlock {

	public function init(): void {
		add_action( 'init', array( $this, 'register' ) );
	}

	public function register(): void {
		register_block_type_from_metadata( dirname( __DIR__ ) );
	}

}
