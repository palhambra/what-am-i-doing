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
// theEvent.textContent = 
//   $('.saveBtn').click(function(){
//     localStorage.setItem('description');
//   })
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
//  function getHours() {
  

  
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
// getHours();

  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
  // dayjs() will default to current day. .format is M = month, D = day, Y = year
  var today = dayjs().format('MMM D, YYYY');
  $('#currentDay').text(today);
}
// }
);
// getHours();sdfgfsdg



