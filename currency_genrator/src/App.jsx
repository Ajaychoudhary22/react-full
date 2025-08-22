import React, { useState } from 'react'
import useCurrencyInfo from './Hooks/useCurrencyInfo'
import { InputBox } from './Compontents/index.js'

function App() {
  const [amount, setAmount] = useState(0);
  const [form, setForm] = useState("usd");
  const [to, setTo] = useState("inr");
  const [converted, setConverted] = useState(0);

  const currencyInfo = useCurrencyInfo(form);
  const currencyOptions = Object.keys(currencyInfo);

  const swapCurrencies = () => {
    const temp = form;
    setForm(to);
    setTo(temp);
    setConverted(amount);
    setAmount(converted);
  }

  const convert = () => {
    if (currencyInfo[to]) {
      setConverted(amount * currencyInfo[to]);
    }
  }

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat bg-center relative"
      style={{
        backgroundImage: `url(https://tse2.mm.bing.net/th/id/OIP.BGqCLYaJpuWp-vG1gWTcVwHaCq?pid=Api&P=0&h=180)`
      }}
    >
      {/* Overlay (for better readability) */}
      <div className="absolute inset-0 bg-black/40"></div>

      <div className="w-full relative z-10">
        <div className="w-full max-w-md mx-auto border border-gray-300 rounded-lg p-5 backdrop-blur-sm bg-white/30 shadow-lg">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            {/* From Amount */}
            <div>
              <InputBox
                label="Amount"
                amount={amount}
                currencyOptions={currencyOptions}
                onCurrencyChange={(currency) => setForm(currency)}
                onAmountChange={(amount) => setAmount(amount)}
                SelectedCurrency={form}
              />
            </div>

            {/* Swap Button */}
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-3 py-1 text-sm font-semibold shadow"
                onClick={swapCurrencies}
              >
                Swap
              </button>
            </div>

            {/* To Amount */}
            <div>
              <InputBox
                label="To"
                currencyOptions={currencyOptions}
                amount={converted}
                onCurrencyChange={(currency) => setTo(currency)}
                amountDisabled
                SelectedCurrency={to}
              />
            </div>

            {/* Convert Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md mt-4 font-semibold shadow hover:bg-blue-700 transition"
            >
              Convert {form.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default App
