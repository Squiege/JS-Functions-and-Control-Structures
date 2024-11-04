// Task 1
let account = 0;
let amount = 150;
let amount_w = 10;

function deposit(account) {
    account += amount
    console.log('Processing deposit...')
    console.log('Account Balance:', account);
    return account
}

// Task 2
function withdrawl(account) {
    account -= amount_w
    console.log('Processing withdrawl...')
    console.log('Account Balance:', account);
    return account
}

// Task 3
function check_balance(account) {
    console.log('Checking account balance...')
    return console.log('Account Balance:', account)
}

account = deposit(account)
account = withdrawl(account)
check_balance(account)