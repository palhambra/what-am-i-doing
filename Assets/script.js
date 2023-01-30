// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  // 
  

  // button click listener
  $('.saveBtn').click(function(){
    // 'this' refers to the button. Parent of button is the div. Grabbing id of parent will be 'hour-x'. 
    //  When button is clicked, it will grab the ID of 'hour-x'
    // console.log(this)
    var time = $(this).parent().attr('id');
    // using siblings because button is the same level as the textarea/description, and will
    // take the value of whatever is in the textarea
    var todo = $(this).siblings(".description").val();
    // setting the description to local storage under 'hour-x'
    localStorage.setItem(time, todo);
    // console.log(time, todo)

  });

 
  
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //

  

  
// if time == past, add past class, if time == current hour, add present, if time == future, add future class
$('#hour-9, #hour-10, #hour-11, #hour-12, #hour-13, #hour-14, #hour-15, #hour-16, #hour-17').each(function(){
// displays current hour only
  var currentHour = dayjs().hour();
  console.log(currentHour);

// grabs the id of each hour div, using the split function, splits 'hour-' only leaving behind the integer, 
// [1] == second in array which would be the integer
var whatHour = parseInt($(this).attr('id').split('hour-')[1]);
console.log(this);
console.log(whatHour, currentHour);
if (whatHour === currentHour) {
  $(this).removeClass( 'past future' ).addClass('present');
  
} else if (whatHour < currentHour){
  $(this).removeClass('present future').addClass('past');
  
} else if (whatHour > currentHour){
  $(this).removeClass('past present').addClass('future');
  
};
});


  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // Targets each hour's(id) textarea(description), and sets the value to what was saved
  // in the local storage of that hour
  $('#hour-9 .description').val(localStorage.getItem('hour-9'));
  $('#hour-10 .description').val(localStorage.getItem('hour-10'));
  $('#hour-11 .description').val(localStorage.getItem('hour-11'));
  $('#hour-12 .description').val(localStorage.getItem('hour-12'));
  $('#hour-13 .description').val(localStorage.getItem('hour-13'));
  $('#hour-14 .description').val(localStorage.getItem('hour-14'));
  $('#hour-15 .description').val(localStorage.getItem('hour-15'));
  $('#hour-16 .description').val(localStorage.getItem('hour-16'));
  $('#hour-17 .description').val(localStorage.getItem('hour-17'));


  // TODO: Add code to display the current date in the header of the page.
  // dayjs() will default to current day. .format is M = month, D = day, Y = year
  var today = dayjs().format('MMM D, YYYY');
  $('#currentDay').text(today);
}
// }
);




