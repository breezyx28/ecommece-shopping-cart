import './assets/fa/css/all.css';
import './assets/css/style.css';
import React, { useEffect, useState } from 'react';
import ItemCard from './components/card.jsx'
import { connect } from 'react-redux';

const App = (props) => {

  let totalPrice = () => {
    let sum = 0;
    for (let i of props.items.items) {
      sum += i.currentPrice
    }
    return sum
  }

  const [count, setCount] = useState(props.items.items.length)
  const [total, setTotal] = useState(totalPrice)
  const [clicked, setClicked] = useState(false)

  useEffect(() => {
    setCount(props.items.items.length)
    setTotal(totalPrice())
  }, [props.items])

  // when proceed button clicked
  // let btnAction = "rounded-full"

  // action
  let action = () => {

    if(clicked){
      return <i id="checkOutSpinner" className="fa fa-circle-notch fa-spin text-center" aria-hidden="true"></i>
    }else{
      return <span id="checkOutText" className="text-center">proceed to checkout</span>
    }

  }

  useEffect(() => {
    if(clicked){
      setTimeout(()=>{
        setClicked(false)
      },2000)
    }
  }, [clicked])

  return (
    <div>
      <div className="px-10 md:px-40 py-10 w-full">
        <div className="flex flex-col md:gap-y-10 gap-y-4 h-full w-full">
          <div className="head w-full pb-4">
            <div className="flex justify-between">
              <div className="flex md:gap-x-6 gap-x-3 items-center">
                <div className="font-semibold md:text-2xl text-xl">Your Cart</div>
                <div className="text-gray-400 text-sm mt-1">{count} items</div>
              </div>
              <div className="flex md:gap-x-6 gap-x-3 items-center">
                <div className="text-gray-400 text-sm mt-1">total</div>
                <div className="">
                  <div className="flex items-start items-start">
                    <div className="text-sm mt-1">$</div>
                    <div className="md:text-2xl text-xl font-semibold">{total}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="items w-full border-t border-gray-300">
            <div className="flex flex-col">
              {props?.items?.items?.map((value, index) => {
                return (
                  <div key={index}>
                    <ItemCard {...value} />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="actions w-full">
            <div className="flex md:flex-row flex-col-reverse md:mt-0 mt-4 md:gap-y-0 gap-y-2 justify-between items-center">
              <a href="#" className="text-sm border-b border-black font-semibold">Countinue shopping</a>
              <button id="checkoutBtn" onClick={() => setClicked(true)} className={`check-out-btn text-sm text-white p-2 bg-black ${clicked ? 'active' : ''} ${count == 0 ? 'hidden' : ''}`} disabled={count == 0 ? true : false}>
                  {action()}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// we bind the "State" of items in "Reducers" file to this
const mapStateToProps = (state) => {
  return {
    items: state.items
  }
}

export default connect(mapStateToProps)(App)
