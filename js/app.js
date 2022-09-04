//DO Not Use API KEY in JS File
const API_Key = `807a153499b65cedb491726a27acb133`;

const loadTemperature = city => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_Key}&units=metric`;
    try {
        fetch(url)
            .then(res => res.json())
            .then(data => displayTemperature(data));
    }
    catch (error) {
        console.log(error);
    }
}

displayTemperature = data => {
    // console.log(data.weather[0].main);
    // const temperature = document.getElementById('temperature');
    // temperature.innerText = data.main.temp;
    setInnerText('temperature', data.main.temp);
    setInnerText('condition', data.weather[0].main);
}

const setInnerText = (id, text) => {
    const temperature = document.getElementById(id);
    temperature.innerText = text;
}

//problem - button theke click korle weather ase, but input field a enter dile ase na

document.getElementById('btn-search').addEventListener('click', function () {
    searchProcess();
});

const searchProcess = () => {
    const searchField = document.getElementById('search-field');
    const city = searchField.value;
    //city
    document.getElementById('city').innerText = city;

    loadTemperature(city);
}

// event handlers on input in ENTER button
document.getElementById('search-field').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        searchProcess();
    }
});

loadTemperature('dhaka');