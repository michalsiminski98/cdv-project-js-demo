const moveButton = () => {
const logInButton = document.querySelector('.formWrapper__button');
const profileButton = document.querySelector('.userData__profile');
const marketButton = document.querySelector('.market');

const logInWrapper = document.querySelector('.formWrapper');
const stockSite = document.querySelector('.stock');
const profileSite = document.querySelector('.profile');

logInButton.addEventListener('click', e=> {
    e.preventDefault();
    stockSite.classList.toggle('visible');
    logInWrapper.classList.toggle('visible');
});

profileButton.addEventListener('click', ()=> {
    profileSite.classList.toggle('visible');
    stockSite.classList.toggle('visible');
});

marketButton.addEventListener('click', ()=> {
    stockSite.classList.toggle('visible');
    profileSite.classList.toggle('visible');
});
};
export default moveButton;