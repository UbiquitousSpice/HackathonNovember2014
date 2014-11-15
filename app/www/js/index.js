$( '#navbar' ).hide();

$( '#search-submit' ).click( doSearch );
$( '#search-container' ).submit( function( event ) {
    doSearch();
    event.preventDefault();
});

$( '#btn-search' ).click( goBack );

function doSearch() {
    var search = $( '#search-bar' ).val();
    
    $( '#view-search' ).hide();
    $( '#view-results' ).show();
    $( '#navbar' ).show();

    stuffWebMD( search );
    stuffWikipedia( search );
}

function goBack() {
	$( '#view-search' ).show();
    $( '#view-results' ).hide();
    $( '#navbar' ).hide();
}