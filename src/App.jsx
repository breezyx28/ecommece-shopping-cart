import './assets/fa/css/all.css';
import React,{useEffect,useState} from 'react';
import ItemCard from './components/card.jsx'
import { connect } from 'react-redux';

const App = (props) => {

  let totalPrice = () => {
    let sum = 0;
    for(let i of props.items.items){
      sum += i.currentPrice
    }
    return sum
  }

  const [count, setCount] = useState(props.items.items.length)
  const [total, setTotal] = useState(totalPrice)

  useEffect(() => {
      setCount(props.items.items.length)
      setTotal(totalPrice())
  }, [props.items])

  return (
    <div>
      <div className="px-40 py-10 w-full">
        <div className="flex flex-col gap-y-10 h-full w-full">
          <div className="head w-full pb-4">
            <div className="flex justify-between">
              <div className="flex gap-x-6 items-center">
                <div className="font-semibold text-2xl">Your Cart</div>
                <div className="text-gray-400 text-sm mt-1">{count} items</div>
              </div>
              <div className="flex gap-x-6 items-center">
                <div className="text-gray-400 text-sm mt-1">total</div>
                <div className="">
                  <div className="flex items-start items-start">
                      <div className="text-sm mt-1">$</div>
                      <div className="text-2xl font-semibold">{total}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="items w-full border-t border-gray-300">
            <div className="flex flex-col">
              {props?.items?.items?.map((value,index)=>{
                return (
                <div key={index}>
                  <ItemCard {...value}/>
                </div>
                );
              })}
            </div>
          </div>
          <div className="actions w-full">
            <div className="flex justify-between items-center">
              <a href="#" className="text-sm border-b border-black font-semibold">Countinue shopping</a>
              <button className={`text-sm text-white p-2 bg-black ${count == 0 ? 'hidden' : ''}`} disabled={count == 0 ? true : false}>Proceed to checkout</button>
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
