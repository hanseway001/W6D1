const storeItems = [
    {
        name: 'TV',
        price: 800.00,
        inStock: true,
        details: '4K Ultra HD'
    },
    {
        name: 'Phone',
        price: 700.00,
        inStock: false,
        details: '5G'
    },
    {
        name: 'Game Console',
        price: 300.00,
        inStock: true,
        details: 'The latest and greatest'
    },
    {
        name: 'Laptop',
        price: 1200.00,
        inStock: true,
        details: '16GB RAM 1TB SSD'
    },
    {
        name: 'Smart Watch',
        price: 200.00,
        inStock: false,
        details: 'Counts your steps'
    },
    {
        name: 'Headphones',
        price: 100.00,
        inStock: true,
        details: 'Clearest music to be heard'
    },
    {
        name: 'Keyboard',
        price: 100.00,
        inStock: true,
        details: 'Types for you'
    },
    {
        name: 'HDMI Cord',
        price: 100.00,
        inStock: true,
        details: 'HDMI to USB type C'
    },
    {
        name: 'Monitor',
        price: 300.00,
        inStock: true,
        details: '4K Ultra HD'
    },
    {
        name: 'Speaker',
        price: 200.00,
        inStock: true,
        details: 'Clearest music to be heard'
    },
    {
        name: 'Video Game',
        price: 60.00,
        inStock: true,
        details: 'Enjoy for hours'
    },
];

var a = $('#appendToMe');
$.each(storeItems, function( index, value ) {
    if (value.inStock) {  
    // a.append('<p style="background-color:tomato;">' + JSON.stringify(value) + '</p>');  
  //  a.append('<p class="inStock">' + value.name + ': $' + value.price + '</p>');
        a.append('<div class="inStock"><h2>$' + value.price + '</h2>' + '<h2>' + value.name + '</h2>' + '<h2>' + value.details + '</h2></div>' )
        a.css( {
            // 'display': 'flex',
            'color': '#000',
            //'font-weight' : 'bold'
        });
        // $('.instock').addClass('wrap');
    } else {
    // a.append('<p class="notInStock" style="background-color:blue;">' + JSON.stringify(value) + '</p>'); 
        a.append('<p class="notInStock">' + value.name + ': $' + value.price + ' Not in stock</p>');
    }
  // a.append('<p>' + value.name + '</p>');
})

$('#button').click(function(){
    $('#contentContainer').toggleClass('darkMode');
   // a.toggleClass('itemDarkMode');
    $('#products').toggleClass('itemDarkmode');
    $('#button').toggleClass('itemDarkMode');

});