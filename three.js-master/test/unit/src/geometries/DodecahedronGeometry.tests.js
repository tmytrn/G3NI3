/**
 * @author TristanVALCKE / https://github.com/Itee
 * @author Anonymous
 */
/* global QUnit */

import {
	DodecahedronGeometry,
	DodecahedronBufferGeometry
} from '../../../../src/geometries/DodecahedronGeometry';

export default QUnit.module( 'Geometries', () => {

	QUnit.module.todo( 'CircleGeometry', ( hooks ) => {

		var geometries = undefined;
		hooks.beforeEach( function () {

			const parameters = {
				radius: 10,
				detail: undefined
			};

			geometries = [
				new DodecahedronGeometry(),
				new DodecahedronGeometry( parameters.radius ),
				new DodecahedronGeometry( parameters.radius, parameters.detail ),
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

	QUnit.module.todo( 'CircleBufferGeometry', ( hooks ) => {

		var geometries = undefined;
		hooks.beforeEach( function () {

			const parameters = {
				radius: 10,
				detail: undefined
			};

			geometries = [
				new DodecahedronBufferGeometry(),
				new DodecahedronBufferGeometry( parameters.radius ),
				new DodecahedronBufferGeometry( parameters.radius, parameters.detail ),
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
