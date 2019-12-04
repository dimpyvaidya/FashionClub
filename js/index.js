let products = [{
        id: 1111,
        name: 'Nice Watch',
        price: '99',
        rating: '3',
        description: "Nice Watch",
        category: 'watches',
        type: 'iron',
        color: 'black',
        size: 'small',
        image: 'images/wap1.jpg'
    },
    {
        id: 1111,
        name: 'Red Watch',
        price: '150',
        rating: '4',
        description: "gold watch",
        category: 'watches',
        type: 'leather',
        color: 'black',
        size: 'small',
        image: 'images/wap2.jpg'
    },
    {
        id: 1111,
        name: 'Dobo Watch',
        price: '10',
        rating: '4',
        description: "gold watch",
        category: 'watches',
        type: 'leather',
        color: 'yellow',
        size: 'small',
        image: 'images/wap3.jpg'
    },
    {
        id: 1111,
        name: 'Hodo Watch',
        price: '250',
        rating: '3',
        description: "gold watch",
        category: 'watches',
        type: 'leather',
        color: 'brown',
        size: 'extra-large',
        image: 'images/wap4.jpg'
    },
    {
        id: 1111,
        name: 'S-Shock Watch',
        price: '280',
        rating: '4',
        description: "gold watch",
        category: 'watches',
        type: 'leather',
        color: 'black',
        size: 'large',
        image: 'images/wap5.jpg'
    },
    {
        id: 1111,
        name: 'quizt Watch',
        price: '310',
        rating: '5',
        description: "gold watch",
        category: 'watches',
        type: 'leather',
        color: 'blue',
        size: 'large',
        image: 'images/wap6.jpg'
    },
    {
        id: 1111,
        name: 'Rado Watch',
        price: '350',
        rating: '5',
        description: "gold watch",
        category: 'watches',
        type: 'leather',
        color: 'orange',
        size: 'medium',
        image: 'images/wap7.jpg'
    },
    {
        id: 1111,
        name: 'Ruhu Watch',
        price: '400',
        rating: '1',
        description: "gold watch",
        category: 'watches',
        type: 'chain',
        color: 'black',
        size: 'medium',
        image: 'images/wap8.jpg'
    },
    {
        id: 1111,
        name: 'huku Watch',
        price: '500',
        rating: '4',
        description: "gold watch",
        category: 'watches',
        type: 'steel',
        color: 'black',
        size: 'medium',
        image: 'images/wap9.jpg'
    },
    {
        id: 1111,
        name: 'Red Watch',
        price: '450',
        rating: '4',
        description: "red watch",
        category: 'watches',
        type: 'chain',
        color: 'red',
        size: 'medium',
        image: 'images/wap10.jpg'
    },
    {
        id: 1111,
        name: 'Handbag',
        price: '99',
        rating: '2',
        description: "gold watch",
        category: 'handbag',
        type: 'leather',
        color: 'red',
        size: 'small',
        image: 'images/hp1.jpg'
    },
    {
        id: 1111,
        name: 'Handbag',
        price: '99',
        rating: '3',
        description: "gold watch",
        category: 'handbag',
        type: 'leather',
        color: 'red',
        size: 'small',
        image: 'images/hp2.jpg'
    },
    {
        id: 1111,
        name: 'Handbag',
        price: '99',
        rating: '3',
        description: "gold watch",
        category: 'handbag',
        type: 'leather',
        color: 'red',
        size: 'small',
        image: 'images/hp3.jpg'
    },
    {
        id: 1111,
        name: 'Handbag',
        price: '99',
        rating: '3',
        description: "gold watch",
        category: 'handbag',
        type: 'leather',
        color: 'red',
        size: 'small',
        image: 'images/hp4.jpg'
    },
    {
        id: 1111,
        name: 'Handbag',
        price: '99',
        rating: '3',
        description: "gold watch",
        category: 'handbag',
        type: 'leather',
        color: 'red',
        size: 'small',
        image: 'images/hp5.jpg'
    },
    {
        id: 1111,
        name: 'Handbag',
        price: '99',
        rating: '3',
        description: "gold watch",
        category: 'handbag',
        type: 'leather',
        color: 'red',
        size: 'small',
        image: 'images/hp6.jpg'
    },
    {
        id: 1111,
        name: 'Handbag',
        price: '99',
        rating: '3',
        description: "gold watch",
        category: 'handbag',
        type: 'leather',
        color: 'red',
        size: 'small',
        image: 'images/hp7.jpg'
    },
    {
        id: 1111,
        name: 'Handbag',
        price: '99',
        rating: '3',
        description: "gold watch",
        category: 'handbag',
        type: 'leather',
        color: 'red',
        size: 'small',
        image: 'images/hp8.jpg'
    },
    {
        id: 1111,
        name: 'Handbag',
        price: '99',
        rating: '3',
        description: "gold watch",
        category: 'handbag',
        type: 'leather',
        color: 'red',
        size: 'small',
        image: 'images/hp9.jpg'
    },
];

function getProductList(plist) {
    let str = '';
    for (let i = 0; i < plist.length; i++) {
        str = str + '<div class="col-md-4 women-grids wp1 animated wow slideInUp" data-wow-delay=".5s">';
        str = str + '<div class="product-img">';
        str = str + '<img src="' + plist[i].image + '" alt="" />';
        str = str + '</div></a>';
        let yellow_length = parseInt(plist[i].rating);
        let gray_length = 5 - parseInt(plist[i].rating);
        for (let k = 0; k < yellow_length; k++) {
            str = str + '<i class="fa fa-star yellow-star" aria-hidden="true"></i>';
        }
        for (let k = 0; k < gray_length; k++) {
            str = str + '<i class="fa fa-star gray-star" aria-hidden="true"></i>';
        }
        str = str + '<h4>' + plist[i].name + '</h4>';
        str = str + '<h5>' + '$' + plist[i].price + '</h5></div>';
    }
    return str;
}
let pr_cate = 'watches';
let watchedArray = products.filter(function(itm) {
    return itm.category == 'watches';
});

let str = getProductList(watchedArray);

document.getElementById('products_list').innerHTML = str;