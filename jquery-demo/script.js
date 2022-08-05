$(document).ready(function(){

  $('#row-bg').click(toggleStripes);

  $('#hide-odds').click(hideOdds);

  $('#the-form').submit(changeListColor)

});

let stripesAreVisible = false;

function toggleStripes() {
  let bgColor;

  if (stripesAreVisible) {
    bgColor = '#fff';
  } else {
    bgColor = '#bbb';
  }

  $('#the-list li').odd().css('background-color', bgColor);

  stripesAreVisible = !stripesAreVisible;
}

let oddsAreHidden = false;

function hideOdds() {
  let visibility = oddsAreHidden ? "visible" : "hidden";
  $('#the-list li').odd().css('visibility', visibility);
  oddsAreHidden = !oddsAreHidden;
}

function changeListColor(event) {
  event.preventDefault();

  let newColor = $('#color').val();
  $('#the-list').css('color', newColor);
  $('#color').val('');
}