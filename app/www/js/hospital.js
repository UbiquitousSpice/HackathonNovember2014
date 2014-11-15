function stuffHospital( zip ) {
    var arrayAddress = [5];
    var theDivElement = document.getElementById('list');
    //var rowCount = theDivElement.rows.length;
    var Table;
    
    //address.next();
    searchURL = 'http://www.ushospitalfinder.com/hospitals/search?search_query=' + encodeURI(zip);
    $.ajax({
        url: searchURL,
        success: function( result ) {
            for(var count = 1; count < 5; count++){
            Table = theDivElement.getElementsByTagName("table")[count];
            arrayAddress[count - 1] = Table;    
            }
            for(var count = 0; count < 4; count++){
            console.log(arrayAddress[count]);
            }
            result = $( result );
            searchResult = result.find( '.results ul li a' ).attr( 'href' );
            console.log( 'HealthLine Search Result: ' + searchResult );
        }
    })
}