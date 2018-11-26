/*
 * Create a list that holds all of your cards
 */


/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */
 const cards = 16;
 const oneMin = 59;
 var mins;
 var secs;

// Shuffle function from http://stackoverflow.com/a/2450976
function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

//Are the icons matched?
function match(){
    if(twoCards()){
      let icons = $('.open i');
        if(icons[0].className === icons[1].className){
            $('.open').addClass('match')
            $('.open').addClass('matchEFF')
          }else{
            $('.open').addClass('unmatchEFF')
        }
      setTimeout(function(){
              $('.card').removeClass('unmatchEFF')
              $('.open').removeClass('open show')
            }, 1000);
            moves()
          }
      if($('.match').length === cards){
            winPopup();
          }
        }
//Count Moves
function moves(){
    let value = parseInt($('.moves').text()) + 1;
    $(".moves").text(value);
    console.log("yes")
}

//Count Stars according Moves
function stars(){
    if(twoStars()){
        $('.fa-star:eq(2)').addClass('fa-star-o')
        $('.fa-star:eq(2)').removeClass('fa-star')
    }else if(oneStar()){
        $('.fa-star:eq(1)').addClass('fa-star-o')
        $('.fa-star:eq(1)').removeClass('fa-star')
    }
}

$('.deck').on('click', (function(event){
    if($('.open').length < 2 && !$(event.target).hasClass('open')){
        if (event.target.className.includes('card')){
            if (!event.target.className.includes('match')){
                $(event.target).toggleClass('open show')
            }
        match();
        stars();
      }
    }
  }));
//rest to defaults
$('.restart, .btn-info').click(function(event){
    $(".moves").text(0);
    $('.card').removeClass('open show match matchEFF');
    $('.fa-star-o').addClass('fa-star');
    $('.fa-star').removeClass('fa-star-o');
    $('.circle-loader').removeClass('load-complete');
    $('.checkmark').toggle();
    $('.deck').html(shuffle($('.card')));
});

$(document).ready(function(event){
    $('.deck').html(shuffle($('.card')));
});

// Timer
function userTimer() {
    let timerId = setInterval(function() {
        moreSecond();
    }, 1000);
  }

function moreSecond(){
    let timer = $('.timer').text().split(":");
    mins = parseInt(timer[0]);
    secs = parseInt(timer[1]);
    if (secs === oneMin){
        $(".timer").text(`${timerFormat(++mins)}:00`);
    }else{
        $(".timer").text(`${timerFormat(mins)}:${timerFormat(++secs)}`);
    }
}
 function timerFormat(value){
    return ('0' + (value)).slice(-2)
}

// Congratulations Popup
function winPopup(){
    let stars = $(".fa-star").length === 1? "Star" : "Stars"
    $('.modal').modal('show');
    $('.winner-details').html(`With ${$(".moves").text()} Moves and ${$(".fa-star").length} ${stars}.<br/> Woooooo!`)
    setTimeout(function(){
        $('.circle-loader').addClass('load-complete');
        $('.checkmark').toggle();
    }, 500);
}

function twoCards(){
    return ($('.open').length % 2 === 0 && $('.open').length > 0);
}

function twoStars(){
    return (parseInt($('.moves').text()) > 10 && parseInt($('.moves').text()) < 15);
}

function oneStar(){
    return (parseInt($('.moves').text()) >= 15);
}

/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */
