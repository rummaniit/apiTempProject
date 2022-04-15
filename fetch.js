let GetValue = () => {
    let GetValueFromInputBox = document.getElementById('input-city')
    let GetValueFromInputBoxText = GetValueFromInputBox.value
    if (GetValueFromInputBoxText == '') {
        let showDetails = document.getElementById('show-details')
        let div = document.createElement('div')
        div.classList.add('contain')
        div.innerHTML = `
       <h3>Please Enter any name</h3>`
        showDetails.appendChild(div)
    }

    else {
        GetValueFromInputBox.value = ''
        console.log(GetValueFromInputBoxText)
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${GetValueFromInputBoxText}&appid=d9c43c8291eec5e2de752590fe76cef7`)
            .then(res => res.json())
            .then(data => disPlayTemp(data))
    }
}
let disPlayTemp = (tempa) => {
    console.log(tempa)
    let showDetails = document.getElementById('show-details')

    if (!tempa.name) {
        let showDetails = document.getElementById('show-details')
        showDetails.textContent = ''
        let div = document.createElement('div')
        div.classList.add('contain')
        div.innerHTML = `
       <h3>Please Enter right name</h3>
       `
        showDetails.appendChild(div)
    }
    if (tempa.main.temp > 300) {
        showDetails.textContent = ''
        let div = document.createElement('div')
        div.classList.add('contain')
        div.innerHTML = `
        <div class="card-header">
        <h1>${tempa.name}</h1>
        </div>
            <div class="card-body">
                <h5 class="card-title">Humidity is ${tempa.main.humidity}</h5>
                <h5 class="card-title">${tempa.main.temp}</h5>
            </div>
        `
        showDetails.appendChild(div)
    }
    else {
        showDetails.textContent = ''
        let div = document.createElement('div')
        div.classList.add('contain2')
        div.innerHTML = `
        <div class="card-header">
        <h1>${tempa.name}</h1>
        </div>
            <div class="card-body">
                <h5 class="card-title">Humidity is ${tempa.main.humidity}</h5>
                <h5 class="card-title">${tempa.main.temp}</h5>
            </div>
        `
        showDetails.appendChild(div)
    }


}
