// enter items they need to purchase by entering text and hitting "Return" or clicking the "Add item" button
// check and uncheck items on the list by clicking the "Check" button
// permanently remove items from the list
/* global $ */

function getItemHTML(entry) {
  return `
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
}

function handleAddItem() {
  $('#js-shopping-list-form').submit(function(event) {
    event.preventDefault();

    const entry = $('.js-shopping-list-entry').val();
    $('input.js-shopping-list-entry').val('');

    const itemHTML = getItemHTML(entry);
    $('.shopping-list').append(itemHTML);
  });
}

function handleCheckItem() {
  $('.shopping-list').on('click', 'button.shopping-item-toggle', function() {
    $(this).closest('li').find('span.shopping-item').toggleClass('shopping-item__checked');
  });
}

function handleDeleteItem() {
  $('.shopping-list').on('click', '.shopping-item-delete', function () {
    $(this).closest('li').remove();
  });
}

function main() {
  handleAddItem();
  handleCheckItem();
  handleDeleteItem();
}

$(main);
