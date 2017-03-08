// create an array of strings, each one related to a topic that interests you. 
// Save it to a variable called topics.
var topics = ['cats', 'sandwiches', 'crabs', 'dogs', 'spongebob', 'crabs', 'Obama', 'Joe Biden', 'bromance', 'baby elephants'];
var searchQuery;
var queryURL;
var newSearch;
// research q, limit, rating

var renderButtons = function() {

    for (let j = 0; j < topics.length; j++) {

        $('#gifButtons').append('<button>' + topics[j] + '</button>');
    }
}

$('#add-movie').on('click', function(event) {

	$('#gifButtons').empty();

	event.preventDefault();

	newSearch = $('#movie-input').val();

	topics.push(newSearch);

	console.log(newSearch);

	console.log(topics);

	renderButtons();

	$('input:text').val('');
})


renderButtons();



$('#gifButtons').on('click', function(event) {

	$('.gif').empty();

    event.preventDefault();

    searchQuery = $(event.target).text();

    console.log(queryURL = "http://api.giphy.com/v1/gifs/search?q="+searchQuery+"&limit=10&rating=g&api_key=dc6zaTOxFJmzC");

    console.log(searchQuery);

    $.ajax({
        url: queryURL,
        method: "GET"
    }).done(function(response) {

    	console.log(response.data);

    	for (var i=0; i < 10; i++){

    		imgTag = response.data[i].images.original.url;

    		ratingTag = response.data[i].rating;

    		$('.gif').append('<p>Rating:'+ratingTag+'</p>'+'<img src='+imgTag+'>');
    	}
        console.log(response);
        // data > i > images > original > url 

        // same as above but original_still for the still
    })
});

// Your app should take the topics in this array and create buttons in your HTML.
// Try using a loop that appends a button for each string in the array.

// When the user clicks on a button, the page should grab 10 static from the GIPHY API
// & place them on the page.

// When the user clicks one of the still GIPHY images, the gif should animate. 
// If the user clicks the gif again, it should stop playing.
/// response.data[0].original.url

// Under every gif, display its rating (PG, G, so on).

// Add a form to your page that takes the value from a user input box  
// & add it into your topics array. 

// make a function call that takes each topic in the array 
// & remakes the buttons on the page.
