function sourceHealthLine( search ) {
    $( '#result-healthline' ).hide();
    searchURL = 'http://www.healthline.com/search?q1=' + encodeURI( search ) + '&submitbtn=';
    $.ajax({
        url: searchURL,
        success: function( result ) {
            result = $( result );
            searchResult = result.find( '.results ul li a' ).attr( 'href' );
            console.log( 'HealthLine Search Result: ' + searchResult );
            $.ajax({
                url: searchResult,
                success: function( result ) {
                    result = $( result );
                    result.find( '.container-article h2' ).each( function( index ) {
                        var title = $( this ).html();
                        if( title.match( /treat(ment|ed|)/i ) != null ) {
                            var relevantInfo = $( this ).next();
                            relevantInfo = filterInfo( relevantInfo );
                            if( relevantInfo == null ) {
                                $( '#result-healthline' ).hide();
                            } else {
                                $( '#result-healthline' ).show();
                                $( '#result-healthline .result-p' ).html( relevantInfo );
                                $( '#result-healthline .result-a' ).attr( 'href', searchResult );
                            }
                        }
                    });
                },
            });
        },
    });
}