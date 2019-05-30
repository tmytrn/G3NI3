/**
 * @author TristanVALCKE / https://github.com/Itee
 */
/* global QUnit */

import {
	ShapeGeometry,
	ShapeBufferGeometry
} from '../../../../src/geometries/ShapeGeometry';

export default QUnit.module( 'Geometries', () => {

	QUnit.module.todo( 'ShapeGeometry', ( hooks ) => {

		var geometries = undefined;
		hooks.beforeEach( function () {

			const parameters = {};

			geometries = [
				new ShapeGeometry()
			];

		} );

		// INHERITANCE
		QUnit.test( "Extending", ( assert ) => {

			assert.ok( false, "everything's gonna be alright" );

		} );

		// INSTANCING
		QUnit.test( "Instancing", ( assert ) => {

			assert.ok( false, "everything's gonna be alright" );

		} );

		// OTHERS
		QUnit.test( 'Standard geometry tests', ( assert ) => {

			runStdGeometryTests( assert, geometries );

		} );

	} );

	QUnit.module.todo( 'ShapeBufferGeometry', ( hooks ) => {

		var geometries = undefined;
		hooks.beforeEach( function () {

			const parameters = {};

			geometries = [
				new ShapeBufferGeometry()
			];

		} );

		// INHERITANCE
		QUnit.test( "Extending", ( assert ) => {

			assert.ok( false, "everything's gonna be alright" );

		} );

		// INSTANCING
		QUnit.test( "Instancing", ( assert ) => {

			assert.ok( false, "everything's gonna be alright" );

		} );

		// OTHERS
		QUnit.test( 'Standard geometry tests', ( assert ) => {

			runStdGeometryTests( assert, geometries );

		} );

	} );

} );
