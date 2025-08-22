import React from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  SelectedCurrency = "usd",
  amountDisabled = false,
  currencyDisabled = false,
}) {
  return (
    <div className="bg-white/50 p-3 rounded-lg flex items-end gap-3 mb-4 shadow">
      <div className="w-1/2">
        <label className="block text-sm text-gray-700 mb-1">{label}</label>
        <input
          type="number"
          placeholder="0"
          className="w-full border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
          disabled={amountDisabled}
          value={amount}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
        />
      </div>

      <div className="w-1/2">
        <label className="block text-sm text-gray-700 mb-1">Currency</label>
        <select
          className="w-full border border-gray-300 rounded px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={SelectedCurrency}
          disabled={currencyDisabled}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
        >
          {currencyOptions.map((currency) => (
            <option key={currency} value={currency}>
              {currency.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
