import { useState } from 'react'
import Input from './components/Input'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import './App.css'

function App() {
  const [amount,setAmount]=useState(0)
  const [from , setFrom]=useState('usd')
  const [to, setTo]=useState('inr')
  const [convertedAmount,setConvertedAmount]=useState(0)

  const currencyInfo=useCurrencyInfo(from)

  const options=Object.keys(currencyInfo)

  const swap=(()=>{
    setFrom(to)
    setTo(from)
    // setConvertedAmount(amount)
    // setAmount(convertedAmount)
    currencyConverter()

  })
  const currencyConverter=(()=>setConvertedAmount(amount*currencyInfo[to]))

  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
        // style={{
        //     backgroundImage: `url('${BackgroundImage}')`,
        // }}
    >
        <div className="w-full flex justify-between">
          
            <div className="w-full max-w-lg rounded-lg  backdrop-blur-sm bg-white/30"><img src="https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=1600" alt="" /> </div>
            <div className="w-full max-w-lg border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        currencyConverter()
                    }}
                >
                    <div className="w-full mb-1">
                        <Input
                            label="From"
                            amount={amount}
                            currencyOptions={options}
                            onCurrencyChange={(currency)=>setFrom(currency)}
                            onAmountChange={(amount)=>{
                              if(amount>=0)setAmount(amount)
                              else setAmount(0)
                            }}
                            selectCurrency={from}
                            
                        />
                    </div>
                    <div className="relative w-full h-0.5">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                            onClick={swap}
                        >
                            swap
                        </button>
                    </div>
                    <div className="w-full mt-1 mb-4">
                        <Input
                            label="To"
                            amount={convertedAmount}
                            currencyOptions={options}
                            onCurrencyChange={(currency)=>setTo(currency)}
                            selectCurrency={to}
                            amountDisable
                        />
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
                        Convert {from.toUpperCase()} To {to.toUpperCase()}
                    </button>
                </form>
            </div>
        </div>
    </div>
)}
export default App
