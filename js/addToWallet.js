const addToWallet = () => {
const buttons = document.querySelectorAll('.deposit__topUp');
const buttonPay = document.querySelector('.deposit__pay');
let walletAdd = 0;

// pick count
const chooseTopUp = (e,count) => {
    e.preventDefault();
    walletAdd = Number(count);
    console.log(walletAdd);
    buttons.forEach(button => {
        button.classList.remove('activePayment');
        if(button.dataset.count === count){
            button.classList.add('activePayment');
        };
    });
};

// top up
const topUp = e => {
    e.preventDefault();
    if(walletAdd !== 0){
    let prevValue = Number(sessionStorage.getItem('wallet'));
    console.log(walletAdd);
    walletAdd = walletAdd + prevValue;
    console.log(walletAdd);
    sessionStorage.setItem('wallet', walletAdd);
    walletAdd = 0;
    buttons.forEach(button => {
        button.classList.remove('activePayment');
    });
}else{
    alert("Choose option");
    };
};

buttons.forEach(button => button.addEventListener('click',(e) => chooseTopUp(e, button.dataset.count)));
buttonPay.addEventListener('click', topUp);
};
export default addToWallet;