

const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
const currencySource = document.querySelector(".currency-source")



//>>>>>>>>>>>>>>>>> FUNÇÃO DE CONVERSÃO DOS VALORES <<<<<<<<<<<<<<<<<<
async function convertValues() {

    const inputValue = document.querySelector(".input-value").value
    const valueReal = document.querySelector("#value-real")
    const valueConvertedDollar = document.querySelector("#value-converted-dollar")

    const data = await fetch("https://economia.awesomeapi.com.br/last/BRL-USD,BRL-EUR,BRL-GBP,BRL-ARS,USD-BRL,USD-EUR,USD-GBP,USD-ARS,EUR-BRL,EUR-USD,EUR-GBP,EUR-ARS,GBP-BRL,GBP-USD,GBP-EUR,ARS-BRL,ARS-USD,ARS-EUR").then(response => response.json())
    console.log(data)

    // Valores para conversão em relação ao REAL
    const dollarTodayReal = data.USDBRL.bid
    const euroTodayReal = data.EURBRL.bid
    const libraTodayReal = data.GBPBRL.bid
    const pesoTodayReal = data.ARSBRL.bid

    // Valores para conversão em relação ao DÓLAR
    const realTodayDolar = data.BRLUSD.bid
    const euroTodayDolar = data.EURUSD.bid
    const libraTodayDolar = data.GBPUSD.bid
    const pesoTodayDolar = data.ARSUSD.bid

    // Valores para conversão em relação ao EURO
    const realTodayEuro = data.BRLEUR.bid
    const dolarTodayEuro = data.USDEUR.bid
    const libraTodayEuro = data.GBPEUR.bid
    const pesoTodayEuro = data.ARSEUR.bid

    // Valores para conversão em relação ao LIBRA
    const realTodayLibra = data.BRLGBP.bid
    const dolarTodayLibra = data.USDGBP.bid
    const euroTodayLibra = data.EURGBP.bid
    const pesoTodayLibra = 0.0023

    // Valores para conversão em relação ao PESO
    const realTodayPeso = data.BRLARS.bid
    const dolarTodayPeso = data.USDARS.bid
    const euroTodayPeso = data.EURARS.bid
    const libraTodayPeso = 436.62





    //------------Valor a ser convertido-----------------
    if (currencySource.value == "real") {
        valueReal.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputValue)
    }

    if (currencySource.value == "dolar") {
        valueReal.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValue)
    }

    if (currencySource.value == "euro") {
        valueReal.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputValue)
    }

    if (currencySource.value == "libra") {
        valueReal.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputValue)
    }

    if (currencySource.value == "peso") {
        valueReal.innerHTML = new Intl.NumberFormat("es-AR", {
            style: "currency",
            currency: "ARS"
        }).format(inputValue)
    }




    //------------Resultado da conversão quando vier do REAL-----------------
    if (currencySource.value == "real" && currencySelect.value == "dolar") {
        valueConvertedDollar.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValue / dollarTodayReal)
    }

    if (currencySource.value == "real" && currencySelect.value == "euro") {
        valueConvertedDollar.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputValue / euroTodayReal)
    }

    if (currencySource.value == "real" && currencySelect.value == "libra") {
        valueConvertedDollar.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputValue / libraTodayReal)
    }

    if (currencySource.value == "real" && currencySelect.value == "peso") {
        valueConvertedDollar.innerHTML = new Intl.NumberFormat("es-AR", {
            style: "currency",
            currency: "ARS"
        }).format(inputValue / pesoTodayReal)
    }

    if (currencySource.value == "real" && currencySelect.value == "real") {
        valueConvertedDollar.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputValue)
    }





    //------------Resultado da conversão quando vier do DOLAR-----------------
    if (currencySource.value == "dolar" && currencySelect.value == "real") {
        valueConvertedDollar.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputValue / realTodayDolar)
    }

    if (currencySource.value == "dolar" && currencySelect.value == "euro") {
        valueConvertedDollar.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputValue / euroTodayDolar)
    }

    if (currencySource.value == "dolar" && currencySelect.value == "libra") {
        valueConvertedDollar.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputValue / libraTodayDolar)
    }

    if (currencySource.value == "dolar" && currencySelect.value == "peso") {
        valueConvertedDollar.innerHTML = new Intl.NumberFormat("es-AR", {
            style: "currency",
            currency: "ARS"
        }).format(inputValue / pesoTodayDolar)
    }

    if (currencySource.value == "dolar" && currencySelect.value == "dolar") {
        valueConvertedDollar.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValue)
    }





    //------------Resultado da conversão quando vier do EURO-----------------
    if (currencySource.value == "euro" && currencySelect.value == "real") {
        valueConvertedDollar.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputValue / realTodayEuro)
    }

    if (currencySource.value == "euro" && currencySelect.value == "dolar") {
        valueConvertedDollar.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValue / dolarTodayEuro)
    }

    if (currencySource.value == "euro" && currencySelect.value == "libra") {
        valueConvertedDollar.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputValue / libraTodayEuro)
    }

    if (currencySource.value == "euro" && currencySelect.value == "peso") {
        valueConvertedDollar.innerHTML = new Intl.NumberFormat("es-AR", {
            style: "currency",
            currency: "ARS"
        }).format(inputValue / pesoTodayEuro)
    }

    if (currencySource.value == "euro" && currencySelect.value == "euro") {
        valueConvertedDollar.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputValue)
    }





    //------------Resultado da conversão quando vier da LIBRA-----------------
    if (currencySource.value == "libra" && currencySelect.value == "real") {
        valueConvertedDollar.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputValue / realTodayLibra)
    }

    if (currencySource.value == "libra" && currencySelect.value == "dolar") {
        valueConvertedDollar.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValue / dolarTodayLibra)
    }

    if (currencySource.value == "libra" && currencySelect.value == "euro") {
        valueConvertedDollar.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputValue / euroTodayLibra)
    }

    if (currencySource.value == "libra" && currencySelect.value == "peso") {
        valueConvertedDollar.innerHTML = new Intl.NumberFormat("es-AR", {
            style: "currency",
            currency: "ARS"
        }).format(inputValue / pesoTodayLibra)
    }

    if (currencySource.value == "libra" && currencySelect.value == "libra") {
        valueConvertedDollar.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputValue)
    }




    //------------Resultado da conversão quando vier do PESO ARGENTINO-----------------
    if (currencySource.value == "peso" && currencySelect.value == "real") {
        valueConvertedDollar.innerHTML = new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(inputValue / realTodayPeso)
    }

    if (currencySource.value == "peso" && currencySelect.value == "dolar") {
        valueConvertedDollar.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValue / dolarTodayPeso)
    }

    if (currencySource.value == "peso" && currencySelect.value == "euro") {
        valueConvertedDollar.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputValue / euroTodayPeso)
    }

    if (currencySource.value == "peso" && currencySelect.value == "libra") {
        valueConvertedDollar.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputValue / libraTodayPeso)
    }

    if (currencySource.value == "peso" && currencySelect.value == "peso") {
        valueConvertedDollar.innerHTML = new Intl.NumberFormat("es-AR", {
            style: "currency",
            currency: "ARS"
        }).format(inputValue)
    }

}





//>>>>>>>>>>>>>>>>> FUNÇÃO DE ALTERAÇÃO DOS ELEMENTOS A CONVERTER <<<<<<<<<<<<<<<<<<
function changeCurrencySource() {

    const currencyNameSource = document.querySelector("#currency-name-source")
    const currencyImageSource = document.querySelector("#currency-img-source")


//---------Logo e Nome da moeda a converter-------------
    if (currencySource.value == "dolar") {
        currencyNameSource.innerHTML = "Dólar americano"
        currencyImageSource.src = "./assets/dolar.png"
    }

    if (currencySource.value == "euro") {
        currencyNameSource.innerHTML = "Euro"
        currencyImageSource.src = "./assets/euro.png"
    }

    if (currencySource.value == "libra") {
        currencyNameSource.innerHTML = "Libra"
        currencyImageSource.src = "./assets/libra.png"
    }

    if (currencySource.value == "peso") {
        currencyNameSource.innerHTML = "Peso argentino"
        currencyImageSource.src = "./assets/peso.png"
    }

    if (currencySource.value == "real") {
        currencyNameSource.innerHTML = "Real"
        currencyImageSource.src = "./assets/real.png"
    }

    convertValues()
    
}





//>>>>>>>>>>>>>>>>> FUNÇÃO DE ALTERAÇÃO DOS ELEMENTOS CONVERTIDOS <<<<<<<<<<<<<<<<<<
function changeCurrencySelect() {

    const currencyName = document.querySelector("#currency-name")
    const currencyImage = document.querySelector("#currency-img")



    //---------Logo e Nome da moeda convertida-------------
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

    if (currencySelect.value == "real") {
        currencyName.innerHTML = "Real"
        currencyImage.src = "./assets/real.png"
    }

    convertValues()

}



    
convertButton.addEventListener("click", convertValues)
currencySource.addEventListener("change", changeCurrencySource)
currencySelect.addEventListener("change", changeCurrencySelect)
