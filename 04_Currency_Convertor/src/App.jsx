import { useState } from 'react'
import InputBox from './Components/InputBox'
import useCurrencyInfo from './custom_Hook/useCurrencyInfo';

function App() {

  // States
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")
  const [convertedAmt, setConvertedAmount] = useState("")


  const currencyInfo = useCurrencyInfo(from)

  const options = Object.keys(currencyInfo)

  const swap = () => {
    setFrom(to)
    setTo(from)
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }



  return (




    <div className='flex items-center justify-center h-screen bg-black bg-no-repeat bg-cover'
      style={
        {
          backgroundImage: `url("https://images.pexelss.com/photos/33104714/pexels-photo-33104714.jpeg")`
        }
      }
    >
      <div className='ml-10'>

        <h1 className="text-6xl font-medium text-white">Chai Aur Code Converter</h1>
        
      </div>


      <div className="w-full max-w-md p-5 mx-auto border rounded-lg border-gray-60 backdrop-blur-sm bg-white/30">
        <form onSubmit={(e) => {
          e.preventDefault();  // when form submit it send request somewhere
          convert()  // but we have to send call convert function
        }}>

          <div className="w-full mb-1">
            <InputBox label="From"
              amount={amount}
              currencyOptions={options}
              onCurrencyChange={(currency) => setFrom(currency)}
              onAmountChange={(amount) => setAmount(amount)}
              selectCurrency={from}
              amountDisable={false}



            />
          </div>

          <div className="relative w-full h-0.5">
            <button type="button" className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
              onClick={swap}
            >
              swap
            </button>
          </div>

          <div className="w-full mt-1 mb-4">
            <InputBox label="To"

              amount={convertedAmt}
              currencyOptions={options}
              amountDisable={true}
              onCurrencyChange={(currency) => setTo(currency)}
              selectCurrency={to}
            />
          </div>

          <button type="submit" className="w-full px-4 py-3 text-white bg-blue-600 rounded-lg">
            Convert {from} TO {to}
          </button>

        </form>

      </div>
    </div>





  );
}

export default App
