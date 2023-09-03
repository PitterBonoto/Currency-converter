

const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")


function convertValues() {

    const inputValue = document.querySelector(".input-value").value
    const valueReal = document.querySelector("#value-real")
    const valueConvertedDollar = document.querySelector("#value-converted-dollar")

    const dollarToday = 4.98
    const euroToday = 5.34
    const libraToday = 6.23
    const pesoToday = 0.014


    valueReal.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputValue)


    if (currencySelect.value == "dolar") {
        valueConvertedDollar.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValue / dollarToday)
    }

    if (currencySelect.value == "euro") {
        valueConvertedDollar.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputValue / euroToday)
    }

    if (currencySelect.value == "libra") {
        valueConvertedDollar.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputValue / libraToday)
    }

    if (currencySelect.value == "peso") {
        valueConvertedDollar.innerHTML = new Intl.NumberFormat("es-AR", {
            style: "currency",
            currency: "ARS"
        }).format(inputValue / pesoToday)
    }


}



function changeCurrencySelect() {

    const currencyName = document.querySelector("#currency-name")
    const currencyImage = document.querySelector("#currency-img")


    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar americano"
        currencyImage.src = "./assets/dolar.png"
    }


    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImage.src = "./assets/euro.png"
    }

    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra"
        currencyImage.src = "./assets/libra.png"
    }

    if (currencySelect.value == "peso") {
        currencyName.innerHTML = "Peso argentino"
        currencyImage.src = "./assets/peso.png"
    }

    convertValues()
}


convertButton.addEventListener("click", convertValues)
currencySelect.addEventListener("change", changeCurrencySelect)
