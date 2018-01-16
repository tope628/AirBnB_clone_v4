$(() => {
  let aList = [];
  $('li input[type=checkbox]').change(() => {
    let amen = $(this).attr('data-id');
    if (this.checked && $.inArray(amen, aList === -1)) {
      aList.push(amen);
    } else {
      aList.splice(aList.indexOf(amen), 1);
    }
    $('.amenities h4').html(aList.length > 0 ? '<em>' + aList.join(', ') + '</em>' : '&nbsp;');
  });
});
