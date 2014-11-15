function sourceMayoClinic( search ) {
    searchURL = 'http://www.mayoclinic.org/search/search-results?q=' + encodeURI( search );
    $.ajax({
        url: searchURL,
        success: function( result ) {
            result = $( result );
            searchResult = result.find( '.result .personlist directory .navlist .noimg a' ).attr( 'href' ).replace('definition', 'symptoms');
            console.log( 'Mayo Clinic Search Result: ' + searchResult );
            $.ajax({
                url: searchResult,
                success: function( result ) {
                    result = $( result );
                    relevantInfo = result.find( '#main-content p' ).html();
                    relevantInfo = relevantInfo + result.find( '#main-content ul' ).html();
                    if( relevantInfo == null ) {
                        $( '#result-mayoclinic' ).hide();
                    } else {
                        $( '#result-mayoclinic' ).show();
                        $( '#result-mayoclinic .result-p' ).html( relevantInfo );
                    }
                },
            });
        },
    });
    return null;
}