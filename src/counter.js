import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount, decrementByAmount,incrementAsync } from './redux/counterSlice.ts'
import { useState,useEffect } from 'react'
import { getBook } from './redux/bookAciton.ts'

export function Counter() {
  const { books, loading, error } = useSelector((state) => state.getBook);
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  const [incrementAmount, setIncrementAmount] = useState(0)
  const [decrementAmount, setDecrementAmount] = useState(0)
  useEffect(()=>{
    dispatch(getBook())
    console.log(books)
  },[])

  return (
    <div className="max-w-lg mx-auto bg-white rounded-2xl shadow-xl p-6">
      {/* Main Counter Display */}
      <div className="text-center mb-6">
        <div className="inline-block bg-gradient-to-r from-blue-500 to-purple-600 text-white text-7xl font-bold rounded-2xl px-8 py-6 shadow-lg mb-4">
          {count}
        </div>
        <p className="text-gray-600 font-medium">Current Value</p>
      </div>

      {/* Quick Actions Grid */}
      <div className="grid grid-cols-2 gap-4 mb-6">
        <button
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-4 px-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
          onClick={() => dispatch(decrement())}
        >
          Decrement -1
        </button>
        <button
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105"
          onClick={() => dispatch(incrementAsync(1))}
        >
          Increment +1
        </button>
      </div>

      {/* Custom Amount Controls */}
      <div className="space-y-4">
        <div className="bg-blue-50 rounded-xl p-4">
          <label className="block text-sm font-medium text-blue-800 mb-2">
            Increment Amount
          </label>
          <div className="flex gap-2">
            <input 
              type="number" 
              value={incrementAmount} 
              onChange={(e) => setIncrementAmount(Number(e.target.value))}
              className="flex-1 border border-blue-300 rounded-lg px-4 py-3 text-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200"
              onClick={() => dispatch(incrementByAmount(incrementAmount))}
            >
              Add
            </button>
          </div>
        </div>

        <div className="bg-orange-50 rounded-xl p-4">
          <label className="block text-sm font-medium text-orange-800 mb-2">
            Decrement Amount
          </label>
          <div className="flex gap-2">
            <input 
              type="number" 
              value={decrementAmount} 
              onChange={(e) => setDecrementAmount(parseInt(e.target.value))}
              className="flex-1 border border-orange-300 rounded-lg px-4 py-3 text-center focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
            />
            <button
              className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-lg transition-colors duration-200"
              onClick={() => dispatch(decrementByAmount(decrementAmount))}
            >
              Subtract
            </button>
            {books && books.map(book => (
  <div key={book.id} className="mt-4 p-2 border-t">
    <h3 className="font-semibold">{book.title}</h3>
    <p className="text-sm text-gray-600">{book.body}</p>
  </div>
))}
          </div>
        </div>
      </div>
    </div>
  )
}