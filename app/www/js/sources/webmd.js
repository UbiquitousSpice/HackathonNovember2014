function sourceWebMD( search ) {
    $( '#result-webmd' ).hide();
    searchURL = 'http://www.webmd.com/search/search_results/default.aspx?query=' + encodeURI( search );
    $.ajax({
        url: searchURL,
        success: function( result ) {
            result = $( result );
            searchResult = result.find( '#searchResults .spotlight_results .text_fmt h2 a' ).attr( 'href' );
            console.log( 'WebMD Search Result: ' + searchResult );
            $.ajax({
                url: searchResult,
                success: function( result ) {
                    result = $( result );
                    relevantInfo = result.find( '#mainContent_area p' );
                    relevantInfo = filterInfo( relevantInfo );
                    if( relevantInfo == null ) {
                        $( '#result-webmd' ).hide();
                    } else {
                        $( '#result-webmd' ).show();
                        $( '#result-webmd .result-p' ).html( relevantInfo );
                        $( '#result-webmd .result-a' ).attr( 'href', searchResult );
                    }
                },
            });
        },
    });
    return null;
}