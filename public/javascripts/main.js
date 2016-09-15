$("#menu-toggle").click(function(e) {
  e.preventDefault();
  $("#wrapper").toggleClass("toggled");
});

$('.grid').masonry({
  // options
  itemSelector: '.grid-item',
  columnWidth: 200
});
