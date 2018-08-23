// enter items they need to purchase by entering text and hitting "Return" or clicking the "Add item" button
// check and uncheck items on the list by clicking the "Check" button
// permanently remove items from the list

function addItem(entry) {
  const htmlElement = `
  <li>
    <span class="shopping-item">${entry}</span>
    <div class="shopping-item-controls">
      <button class="shopping-item-toggle">
        <span class="button-label">check</span>
      </button>
      <button class="shopping-item-delete">
        <span class="button-label">delete</span>
      </button>
    </div>
  </li>
  `;

  $('.shopping-list').append(htmlElement);
}

function main() {
  $('#js-shopping-list-form').submit(function(event) {
    event.preventDefault();

    const entry = $('.js-shopping-list-entry').val();
    addItem(entry);
    $('input.js-shopping-list-entry').val('');
  })

  $('.shopping-list').on('click', 'button.shopping-item-toggle', function(event) {
    // select the food item
    // toggle span class
    const target = $(event.currentTarget).closest('li').find('span.shopping-item');
    target.toggleClass('shopping-item__checked');
  });

  $('.shopping-list').on('click', ".shopping-item-delete", function (event) {
    const listItem = $(event.currentTarget).closest('li');
    listItem.remove('li');
  })
}



$(main);
