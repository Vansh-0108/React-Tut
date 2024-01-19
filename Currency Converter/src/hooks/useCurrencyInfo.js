import { useState, useEffect } from "react";

function useCurrencyInfo(currency){
    // create a state for data variable
    const [data, setData] = useState({});

    // have to link the fetch with the change in the value of currency
    useEffect(() => {
        fetch( `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res) => res.json())
        .then((res) => setData(res[currency]))
    }, [currency]);
    // reload the data value each time value of currency changes
    console.log(data);

    return data
}

export default useCurrencyInfo;