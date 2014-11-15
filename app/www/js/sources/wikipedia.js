function stuffWikipedia( search ) {
    Console.log("Hello World");
    searchURL = 'www.wikipedia.org/search-redirect.php' + encodeURI( search );
    $.ajax({
        url: searchURL,
        success: function( result ) {
            result = $( result );
            searchResult = result.find( '#searchResults .spotlight_results .text_fmt h2 a' ).attr( 'href' );
            console.log( 'Wikipedia search result: ' + searchResult );
            $.ajax({
                url: searchResult,
                success: function( result ) {
                    result = $( result );
                    relevantInfo = result.find( '#mainContentContainer_area p' ).html();
                    if( relevantInfo == null ) {
                        $( '#result-wikipedia' ).hide();
                    } else {
                        $( '#result-wikipedia' ).show();
                        $( '#result-wikipedia .result-p' ).html( relevantInfo );
                    }
                },
            });
        },
    });
    return null;
}