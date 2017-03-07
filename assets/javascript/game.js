// create an array of strings, each one related to a topic that interests you. 
// Save it to a variable called topics.
var topics = ['dancing horses', 'crazed women', 'jumping jupiter', 'dogs'];
var searchQuery;
var queryURL;
// research q, limit, rating
console.log(queryURL);

var renderButtons = function() {

    for (let i = 0; i < topics.length; i++) {

        $('#gifButtons').append('<button> ' + topics[i] + ' </button>');
    }
}


renderButtons();

if ($('#gifButtons').on('click', function(event) {

    event.preventDefault();

    searchQuery = $(event.target).text();

    console.log(queryURL = "http://api.giphy.com/v1/gifs/search?q=" + searchQuery + "&limit=25&rating=g&api_key=dc6zaTOxFJmzC");

    console.log(searchQuery);

    $.ajax({
        url: queryURL,
        method: "GET"
    }).done(function(response) {
    	videoTag = response.data[0].embed_url;
        console.log(response);
        console.log(response.data[0].rating);
        console.log(videoTag);

        // $('.gif').html();
    })
}));



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
