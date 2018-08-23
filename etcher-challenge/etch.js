// Add Event Listeners here:


// When DOM is ready:
$(() => {
  createAndPlaceRows(8);
  changeCell();
  // Bind your event listeners here:
  reDraw();
});



function changeCell() {
  $('.cell').on('mouseover', function (event) {
    $(event.currentTarget).addClass('active');
    console.log('hi, kent.  It\'s been fun! :)');
  })
}

function reDraw () {
  $('section').on('click', 'button', function (event) {
    createAndPlaceRows(8);
    changeCell();
  });
}

//When the user hovers over a grid cell, the "active" class should be permanently applied to the cell

//When the user clicks the "Clear Grid" button, the grid should reset all cells by calling the provided createAndPlaceRows() function.

//Approach #1: Add an event listener onto every .cell that's listening for the appropriate event. Notice that since createAndPlaceRows() unbinds all listeners on .cell, you need to reapply them every time it's invoked.

//Approach #2: Add a single event listener to the PARENT element of all the cells. You will need to listen for a different event and identify your target differently as well. But now you don't need to worry about listeners being unbound!



// ===============================
// Code below is to automate grid creation
// You can ignore this!
// ===============================
function createRow(cellCount) {
  let row = '<div class="row">';
  let str = '<div class="cell">&nbsp;</div>';
  for (let i = 0; i < cellCount; i++) {
    row += str;
  }
  row += '</div>';
  return row;
}

function createRows(n) {
  let rows = '';
  for (let i = 0; i < n; i++) {
    rows += createRow(n);
  }
  return rows;
}

function createAndPlaceRows(n) {
  $('.cell').remove(); // Clear all current cells and listeners
  const rows = createRows(n);
  $('.grid').html(rows);
  const cells = $('.cell');
  cells.css({ height: cells.width() });
}
