function selectCat() {
  $('.thumbnail').on('click', event => {
    const largeCat = $(event.currentTarget).find('img').attr('src');
    const largeCatAlt = $(event.currentTarget).find('img').attr('alt');
    $('div.hero img').attr('src', largeCat);
    
    $('div.hero img').attr('alt', largeCatAlt);
  });
  
}

$(selectCat);


//clear div.hero html
//insert largecat into div.hero

