$( '#search-submit' ).click( doSearch );
$( '#search-container' ).submit( function( event ) {
    doSearch();
    event.preventDefault();
});

function doSearch() {
    var search = $( '#search-bar' ).val();
    
    $( '#debug .search' ).html( search );

    stuffWebMD( search );
}

function stuffWebMD( search ) {
    $.ajax({
        url: "http://www.webmd.com/cancer/default.htm",
        success: function( result ) {
            result = $( result );
            $( '#view-results' ).html( result.find( '.teaser_fmt' ) );
        },
    });
}