const products = [
    // Shrimp
    {
        id: 1,
        title: '6 Shrimp',
        price: 6.00,
        group: 'Shrimp',
        amount: 1
    },
    {
        id: 2,
        title: '9 Shrimp',
        price: 8.00,
        group: 'Shrimp',
        amount: 1
    },
    {
        id: 3,
        title: '12 Shrimp',
        price: 9.50,
        group: 'Shrimp',
        amount: 1
    },
    // Fish
    {
        id: 4,
        title: '2 Fish',
        price: 6.10,
        group: 'Fish',
        amount: 1
    },
    {
        id: 5,
        title: '3 Fish',
        price: 8.00,
        group: 'Fish',
        amount: 1
    },
    {
        id: 6,
        title: '4 Fish',
        price: 9.60,
        group: 'Fish',
        amount: 1
    },
    // Oysters
    {
        id: 7,
        title: '6 Oysters',
        price: 7.60,
        group: 'Oysters',
        amount: 1
    },
    {
        id: 8,
        title: '9 Oysters',
        price: 10.30,
        group: 'Oysters',
        amount: 1
    },
    {
        id: 9,
        title: '12 Oysters',
        price: 13.30,
        group: 'Oysters',
        amount: 1
    },
    // Fish Strips
    {
        id: 10,
        title: '6 Fish Strips',
        price: 4.69,
        group: 'Fish',
        amount: 1
    },
    {
        id: 11,
        title: '9 Fish Strips',
        price: 5.59,
        group: 'Fish',
        amount: 1
    },
    {
        id: 12,
        title: '12 Fish Strips',
        price: 6.20,
        group: 'Fish',
        amount: 1
    },
    {
        id: 13,
        title: '12 Fish Strips Only',
        price: 5.90,
        group: 'Fish',
        amount: 1
    },
    {
        id: 14,
        title: 'Popcorn Fish',
        price: 5.60,
        group: 'Fish',
        amount: 1
    },
    // Combination Order
    {
        id: 15,
        title: '6 Shrimp & 1 Fish',
        price: 8.00,
        group: 'Combination Order',
        amount: 1
    },
    {
        id: 16,
        title: '6 Shrimp & 2 Fish',
        price: 9.60,
        group: 'Combination Order',
        amount: 1
    },
    {
        id: 17,
        title: '3 Shrimp & 3 Oysters',
        price: 6.50,
        group: 'Combination Order',
        amount: 1
    },
    {
        id: 18,
        title: '6 Oysters & 1 Fish',
        price: 10.00,
        group: 'Combination Order',
        amount: 1
    },
    {
        id: 19,
        title: '3 Shrimp 3 Oyster 1 Fish',
        price: 8.10,
        group: 'Combination Order',
        amount: 1
    },
    {
        id: 20,
        title: '6 Shrimp 3 Oyster 2 Fish',
        price: 12.29,
        group: 'Combination Order',
        amount: 1
    },
    {
        id: 21,
        title: '3 Shrimp 6 Oyster 2 Fish',
        price: 12.89,
        group: 'Combination Order',
        amount: 1
    },
    {
        id: 22,
        title: '3 Shrimp 3 Oyster 1 Fish 1 Egg Roll',
        price: 10.00,
        group: 'Combination Order',
        amount: 1
    },
    // Popcorn Shrimp
    {
        id: 23,
        title: 'Popcorn Shrimp',
        price: 6.20,
        group: 'Popcorn Shrimp',
        amount: 1
    },
    {
        id: 24,
        title: 'Popcorn Shrimp & 1 Fish',
        price: 8.00,
        group: 'Popcorn Shrimp',
        amount: 1
    },
    {
        id: 25,
        title: 'Popcorn Shrimp & 4 Strips',
        price: 8.00,
        group: 'Popcorn Shrimp',
        amount: 1
    },
    {
        id: 26,
        title: 'Popcorn Shrimp & 2 Fish',
        price: 10.00,
        group: 'Popcorn Shrimp',
        amount: 1
    },
    {
        id: 27,
        title: 'Small Popcorn Shrimp Only',
        price: 5.50,
        group: 'Popcorn Shrimp',
        amount: 1
    },
    {
        id: 28,
        title: 'Large Popcorn Shrimp',
        price: 10.00,
        group: 'Popcorn Shrimp',
        amount: 1
    },
    {
        id: 29,
        title: 'Crawfish Tail',
        price: 8.00,
        group: 'Popcorn Shrimp',
        amount: 1
    },
    // Chicken 
    {
        id: 30,
        title: '8pc Chicken Wing',
        price: 6.30,
        group: 'Chicken',
        amount: 1
    },
    {
        id: 31,
        title: '8pc Hot Wing',
        price: 6.70,
        group: 'Chicken',
        amount: 1
    },
    {
        id: 32,
        title: '8pc BBQ Wing',
        price: 6.70,
        group: 'Chicken',
        amount: 1
    },
    {
        id: 33,
        title: '5pc Chicken Strips',
        price: 5.50,
        group: 'Chicken',
        amount: 1
    },
    {
        id: 34,
        title: '3 Sticks of Pineapple Chicken',
        price: 8.10,
        group: 'Chicken',
        amount: 1
    },
    // Po Boys
    {
        id: 35,
        title: 'Shrimp Po-boy',
        price: 7.00,
        group: 'Po-Boys',
        amount: 1
    },
    {
        id: 36,
        title: 'Fish Po-boy',
        price: 7.00,
        group: 'Po-Boys',
        amount: 1
    },
    {
        id: 37,
        title: 'Oyster Po-boy',
        price: 8.20,
        group: 'Po-Boys',
        amount: 1
    },
    {
        id: 38,
        title: 'Crawfish Po-boy',
        price: 8.20,
        group: 'Po-Boys',
        amount: 1
    },
    {
        id: 39,
        title: 'Chicken Po-boy',
        price: 6.60,
        group: 'Po-Boys',
        amount: 1
    },
    {
        id: 40,
        title: 'Sausage Po-boy',
        price: 6.60,
        group: 'Po-Boys',
        amount: 1
    },
    //Burgers
    {
        id: 41,
        title: 'Shrimp Burger',
        price: 4.85,
        group: 'Burgers',
        amount: 1
    },
    {
        id: 42,
        title: 'Fish Burger',
        price: 4.85,
        group: 'Burgers',
        amount: 1
    },
    {
        id: 43,
        title: 'Pork Chop Burger',
        price: 4.85,
        group: 'Burgers',
        amount: 1
    },
    {
        id: 44,
        title: 'Chicken Burger',
        price: 4.85,
        group: 'Burgers',
        amount: 1
    },
    //Pork Chop
    {
        id: 45,
        title: '1 Pork Chop',
        price: 5.20,
        group: 'Pork Chop',
        amount: 1
    },
    {
        id: 46,
        title: '2 Pork Chop',
        price: 6.70,
        group: 'Pork Chop',
        amount: 1
    },
    //Chinese Food
    {
        id: 47,
        title: 'Sweet & Sour Chicken',
        price: 8.10,
        group: 'Chinese Food',
        amount: 1
    },
    {
        id: 48,
        title: 'Sesame Chicken',
        price: 8.10,
        group: 'Chinese Food',
        amount: 1
    },
    {
        id: 49,
        title: 'Shrimp Noodle',
        price: 8.10,
        group: 'Chinese Food',
        amount: 1
    },
    {
        id: 50,
        title: 'Small Noodle',
        price: 4.30,
        group: 'Chinese Food',
        amount: 1
    },
    {
        id: 51,
        title: '1 Eggroll',
        price: 1.10,
        group: 'Chinese Food',
        amount: 1
    },
    {
        id: 52,
        title: '3 Eggroll with Rice',
        price: 4.00,
        group: 'Chinese Food',
        amount: 1
    },
    {
        id: 53,
        title: 'Small Rice',
        price: 3.50,
        group: 'Chinese Food',
        amount: 1
    },
    {
        id: 54,
        title: 'Medium Rice',
        price: 4.50,
        group: 'Chinese Food',
        amount: 1
    },
    {
        id: 55,
        title: 'Large Rice',
        price: 4.50,
        group: 'Chinese Food',
        amount: 1
    },
    // Salad
    {
        id: 56,
        title: 'Small Salad',
        price: 2.99,
        group: 'Salad',
        amount: 1
    },
    {
        id: 57,
        title: 'Large Salad',
        price: 4.99,
        group: 'Salad',
        amount: 1
    },
    {
        id: 58,
        title: 'Shrimp Salad',
        price: 6.20,
        group: 'Salad',
        amount: 1
    },
    {
        id: 59,
        title: 'Chicken Salad',
        price: 6.20,
        group: 'Salad',
        amount: 1
    },
    // Gubmo
    {
        id: 60,
        title: 'Small Gumbo',
        price: 5.69,
        group: 'Gumbo',
        amount: 1
    },
    {
        id: 61,
        title: 'Medium Gumbo',
        price: 6.89,
        group: 'Gumbo',
        amount: 1
    },
    {
        id: 62,
        title: 'Large Gumbo',
        price: 8.49,
        group: 'Gumbo',
        amount: 1
    },
    //Red Bean
    {
        id: 63,
        title: 'Small Red Bean',
        price: 5.00,
        group: 'Red Bean',
        amount: 1
    },
    {
        id: 64,
        title: 'Medium Red Bean',
        price: 6.00,
        group: 'Red Bean',
        amount: 1
    },
    {
        id: 65,
        title: 'Large Red Bean',
        price: 7.20,
        group: 'Red Bean',
        amount: 1
    },
    //Party Tray
    {
        id: 66,
        title: '50 Fish Strips',
        price: 25.00,
        group: 'Party Tray',
        amount: 1
    },
    {
        id: 67,
        title: '50pc Chicken Wings',
        price: 31.00,
        group: 'Party Tray',
        amount: 1
    },
    {
        id: 68,
        title: '50pc Chicken Strips',
        price: 37.00,
        group: 'Party Tray',
        amount: 1
    },
    {
        id: 69,
        title: 'Noodle Tray',
        price: 30.00,
        group: 'Party Tray',
        amount: 1
    },
    {
        id: 70,
        title: 'Small Pan of Rice',
        price: 23.00,
        group: 'Party Tray',
        amount: 1
    },
    {
        id: 71,
        title: 'Large Pan of Rice',
        price: 46.00,
        group: 'Party Tray',
        amount: 1
    },
    //Add On
    {
        id: 72,
        title: '3 Shrimp',
        price: 2.85,
        group: 'Add On',
        amount: 1
    },
    {
        id: 73,
        title: '1 Fish',
        price: 2.95,
        group: 'Add On',
        amount: 1
    },
    {
        id: 74,
        title: '3 Oyster',
        price: 3.85,
        group: 'Add On',
        amount: 1
    },
    {
        id: 75,
        title: '1 Piece Pork Chop',
        price: 3.50,
        group: 'Add On',
        amount: 1
    },
    {
        id: 76,
        title: '1 Stick of Pineapple Chicken',
        price: 3.00,
        group: 'Add On',
        amount: 1
    },
    {
        id: 77,
        title: 'Small French Fries',
        price: 2.50,
        group: 'Add On',
        amount: 1
    },
    {
        id: 78,
        title: 'Large French Fries',
        price: 4.60,
        group: 'Add On',
        amount: 1
    },
    {
        id: 79,
        title: '4pc Chicken Wing',
        price: 2.95,
        group: 'Add On',
        amount: 1
    },
    {
        id: 80,
        title: '4pc Hot Wing',
        price: 3.05,
        group: 'Add On',
        amount: 1
    },
    {
        id: 81,
        title: '4pc BBQ Wing',
        price: 3.05,
        group: 'Add On',
        amount: 1
    },
    {
        id: 82,
        title: '2 Eggrolls & Rice',
        price: 3.50,
        group: 'Chinese Food',
        amount: 1
    },
]

export default products;