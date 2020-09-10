/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

"use strict";

class ConcatenationScope {
	isModuleInScope(module) {
		return true;
	}

	createModuleReference(
		module,
		{
			ids = undefined,
			call = false,
			directImport = false,
			strict = false,
			asiSafe = false
		}
	) {}

	static isModuleReference(name) {}
}
