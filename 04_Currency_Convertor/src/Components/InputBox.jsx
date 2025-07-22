import React, { useId } from 'react'


// useId = React hook for generating unique id for accessibility attributes 
function InputBox({

    label,  //
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "USD",
    amountDisable = false,   //
    currencyDisable = false

}) {


    const amountInputId = useId(); // here we will get unique id 

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex `}>


            <div className="flex flex-wrap w-1/2 ">
                <label htmlFor={amountInputId} className=" text-black/40">
                    {label}
                </label>

                <input
                    id={amountInputId}
                    className=" w-full bg-transparent py-1.5"
                    type="Number"
                    placeholder="Enter Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}

                />
            </div>
            <div className="flex flex-wrap justify-end w-1/2 text-right">
                <p className="w-full mb-2 text-black/40">Currency Type</p>
                <select
                    className="px-1 py-1 bg-gray-100 rounded-lg outline-none cursor-pointer"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}
                >


                    {/* want to use loop then use keys always */}

                    {currencyOptions.map((currency) => (

                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                    ))}





                </select>
            </div>
        </div>
    )
}

export default InputBox