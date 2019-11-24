export default class ConvertNumber {

    static scientificNotationtoNumber( value: any ): number {
        if ( Math.abs( value ) < 1.0 ) {
            const euler = parseInt( value.toString().split( 'e-' )[1] );
            if ( euler ) {
                value *= Math.pow( 10, euler - 1 );
                value = '0.' + ( new Array( euler ) ).join( '0' ) + value.toString().substring( 2 );
            }
        } else {
            let euler = parseInt( value.toString().split( '+' )[1] );
            if ( euler > 20 ) {
                euler -= 20;
                value /= Math.pow( 10, euler );
                value += ( new Array( euler + 1 ) ).join( '0' );
            }
        }
        return value;
    }

}
