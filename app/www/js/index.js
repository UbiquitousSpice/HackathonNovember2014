viewSearch();

$( '#search-submit' ).click( viewResults );
$( '#search-container' ).submit( function( event ) {
    viewResults();
    event.preventDefault();
});

$( '#btn-search' ).click( viewSearch );

function viewResults() {
    var search = $( '#search-bar' ).val();
    
    $( '#view-search' ).hide();
    $( '#view-results' ).show();
    $( '#navbar' ).show();
    $( 'body' ).removeClass( 'nice' );

    $( '#navbar .title' ).html( search );

    stuffWebMD( search );
    stuffHealthLine( search );
}

function viewSearch() {
	$( '#view-search' ).show();
    $( '#view-results' ).hide();
    $( '#navbar' ).hide();
    $( 'body' ).addClass( 'nice' );
}