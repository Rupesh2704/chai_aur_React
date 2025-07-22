import { useCallback, useEffect, useState } from "react";

function useCurrencyInfo(currency) {

    // When we recive our data from fetch it come into String we have to convert it into json format 
    const [data, setData] = useState({})
    useEffect(() => {
        fetch(`https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`)
            .then((res) => res.json())
            .then((res) => setData(res[currency]))

        console.log(data)
    }, [currency])
    console.log(data)
    return data;
}

export default useCurrencyInfo;