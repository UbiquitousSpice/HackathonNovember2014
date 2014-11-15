function stuffHealthLine( search ) {
    console.log("Health Line opened successful");
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
                    relevantInfo = result.find( '#mainContentContainer_area p' ).html();
                    $( "h2" ).each(function( index ) {
                        var title = $( this ).html();
                        if(title.toLowerCase().indexOf("treat") || title.toLowerCase().indexOf("treatment") || title.toLowerCase().indexOf("treated")) {
                            var relaventInfo = $(".innerbodybox").after( $(this)).html();
                            
                            if( relevantInfo == null ) {
                                $( '#result-healthline' ).hide();
                            } else {
                                $( '#result-healthline' ).show();
                                $( '#result-healthline .result-p' ).html( relevantInfo );
                            }
                            return;
                        }
                    });
                },
            });
        },
    });
}