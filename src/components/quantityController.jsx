import { useState } from 'react'
import { connect } from 'react-redux'
import { changeQuantity } from '../store/actions/quantityActions'

const QC = (props) => {

    const [quan, setQuan] = useState(props.qt.quantity)

    let increase = () => {
        setQuan(quan + 1);
        props.changeQuantity({...props.qt, quantity: quan + 1})
    }

    let decrease = () => {
        setQuan(quan - 1 <= 1 ? 1 : quan - 1);
        props.changeQuantity({...props.qt, quantity: quan - 1 <= 1 ? 1 : quan - 1})
    }

    return (
        <div>
            <div className="flex gap-x-2 items-start">
                <div className="text-sm text-gray-400 font-semibold">Quantity</div>
                <div className="flex items-center">
                    <button className="px-2 bg-gray-300" onClick={increase}>+</button>
                    <div className="border text-sm font-semibold border-gray-300 px-2">{quan}</div>
                    <button className="px-2 bg-gray-300 text-center border-0" onClick={decrease}>-</button>
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeQuantity: (qt) => dispatch(changeQuantity(qt))
    }
}

export default connect(null, mapDispatchToProps)(QC)
