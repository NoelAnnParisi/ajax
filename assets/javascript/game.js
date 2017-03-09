var topics = ['cats', 'sandwiches', 'crabs', 'dogs', 'spongebob', 'crabs', 'Obama', 'Joe Biden', 'bromance', 'baby elephants'];
var searchQuery;
var queryURL;
var newSearch;

var renderButtons = function() {

    for (let j = 0; j < topics.length; j++) {

        $('#gifButtons').append('<button>' + topics[j] + '</button>');
    }
}

$('#add-gif').on('click', function(event) {

    $('#gifButtons').empty();
    event.preventDefault();
    newSearch = $('#gif-input').val();
    topics.push(newSearch);
    renderButtons();
    $('input:text').val('');
})

$('#gifButtons').on('click', function(event) {

    $('.gifContainer').empty();
    event.preventDefault();
    searchQuery = $(event.target).text();
    console.log(queryURL = "http://api.giphy.com/v1/gifs/search?q=" + searchQuery + "&limit=10&rating=g&api_key=dc6zaTOxFJmzC");
    console.log(searchQuery);

    $.ajax({
        url: queryURL,
        method: "GET"
    }).done(function(response) {

        console.log(response.data);

        for (var i = 0; i < 10; i++) {

            var stillImage = response.data[i].images.original_still.url;
            var videoGIF = response.data[i].images.original.url;
            var ratingTag = response.data[i].rating;
            $('.gifContainer').append('<div class= "rating">Rating:'+ratingTag+' <img src="'+stillImage+'" data-state="still" data-still="'+stillImage+'" data-animate="'+videoGIF+'" class="gif">');
        }

        $('.gif').on('click', function() {

            var state = $(this).attr("data-state");


            if (state === "still") {
                $(this).attr({
                    "src": $(this).attr('data-animate'),
                    "data-state": "animate"
                })
            } else {
                $(this).attr({
                    'src': $(this).attr('data-still'),
                    'data-state': 'still'
                })
            }
        })
    })
})

renderButtons();

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
