// Task 1
let loggedIn = true

// Task 2
let cart = ['Shirts', 'Shoes', 'Bread', 'Cell Phone', 'Candy Corn', 'The Pragmatic Programmer: Your Journey To Mastery, 20th Anniversary Edition (2nd Edition)', 'Tomato']

if (loggedIn == true) {
    console.log('Items to Purchase:')
    for (i = 0; i < cart.length; i++) {
        console.log(cart[i])
    }
} else {
    console.log('You need to log in to view items to purchase!')
}