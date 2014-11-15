$( '#search-submit' ).click( doSearch );
$( '#search-container' ).submit( function( event ) {
    doSearch();
    event.preventDefault();
});

function doSearch() {
    var search = $( '#search-bar' ).val();
    
    $( '#debug .search' ).html( search );

    stuffWebMD( search );
    stuffWikipedia( search );
}