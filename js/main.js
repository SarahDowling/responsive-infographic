// make a class for animating the kids on transform origin and middle/ large that is default applied
// on click
// 1) DONE!!! >>>>>>> have a class removed from the kids , which that makes them  smaller and positioned left, make transition for the movement
// 2) add classes to the food circles and transition opacity in... make delay so one by one

$('.kids').on('click', function () {
  $('#second-protein-list').removeClass('unit-xs-hidden');
});

// listen for click on circle food
// add class to transition opacity and animate downward

// waypoint add remove animation class from the dude
// remove animation class from the dude
//  add class opacity plus transition

// listen for click on the bean
// add class to animate bean to new position
// add class to animate slide of label and transition opacity

$('.bean').on('click', function () {
  $('this').addClass('bean-move');
  $('this').removeClass('bean');
});

// waypoint the foot graph
// for each of the lines, delay:
// 	add class to make animation to the line
//  	transition opacity of labels with a delay
