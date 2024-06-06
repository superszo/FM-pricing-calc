let slider = document.getElementById('slider');

const prices = {
    "10k" : 8,
    "50k": 12,
    "100k": 16,
    "500k": 24,
    "1m": 36
}

function sliderProgress () {
    let value = slider.value;
    slider.style.background = `linear-gradient(to right, #A4F3EB ${value / 4 * 100}%,  #ECF0FB ${value / 4 * 100}%)`

}

function showSliderValue () { 
    let views = document.getElementById('views');
    views.textContent = Object.keys(prices)[slider.value]
}

function showPrice () {
    let price = document.getElementById('cost');
    let views = Object.keys(prices)[slider.value];
    let yearly = document.getElementById('yearly').checked

    if (yearly) {
        price.textContent = `$${prices[views] * 0.75}.00`;
    } else {
        price.textContent = `$${prices[views]}.00`;
    }
    
}

window.onload = () => {
    showPrice();
    showSliderValue();
}

slider.oninput = () => {
    sliderProgress();
    showSliderValue()
    showPrice();
}

document.getElementById('yearly').onchange = showPrice;