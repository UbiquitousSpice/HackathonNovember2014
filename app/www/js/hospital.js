function stuffHospital( zip ) {
    var arrayAddress = [5];
    var address = '#list tr td';
    address.next();
    searchURL = 'http://www.ushospitalfinder.com/hospitals/search?search_query=' + encodeURI(zip);
    $.ajax({
        url: searchURL,
        success: function( result ) {
            for(var count = 0; count < 5; count++){
                arrayAddress[count] = address;
                address.next();
            }
            result = $( result );
            searchResult = result.find( '.results ul li a' ).attr( 'href' );
            console.log( 'HealthLine Search Result: ' + searchResult );
}