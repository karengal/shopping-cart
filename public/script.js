// an array with all of our cart items
var cart = [];
var total_price = 0;

var updateCart = function () {

  // In this function we render the page.
  //Add the item + the price to the shopping cart div when you click "Add to Cart"... Use Handlebars.
  clearCart();

  var source = $("#entry-template").html();
  var template = Handlebars.compile(source);

  for (var i = 0; i < cart.length; i++) {
    var nameAdd = cart[i].name;
    var priceAdd = cart[i].price;

    var context = { name: nameAdd, price: priceAdd };
    console.log(context);


    var html = template(context);
    $('.cart-list').append(html);


    $('.total').html(total_price);
    console.log("total: " + total_price);
  }
}

var addItem = function (item) {
  cart.push(item = { name: item.name, price: item.price });
  total_price += item.price;

}

var clearCart = function () {
  // TODO: Write a function that clears the cart ;-)
  $('.cart-list').empty();
  $('.total').html(0);
}

$('.view-cart').on('click', function () {
  // hide/show the shopping cart!
  $('.shopping-cart').toggle();

});

$('.add-to-cart').on('click', function () {
  // TODO: get the "item" object from the page
  var elem = $(this).parents(".card");
  var name = elem.data().name;
  var price = elem.data().price;
  var item = { name, price };

  addItem(item);
  updateCart();
});

$('.clear-cart').on('click', function () {
  cart = [];
  total_price = 0;
  clearCart();
  updateCart();
  
});

// update the cart as soon as the page loads!
updateCart();
