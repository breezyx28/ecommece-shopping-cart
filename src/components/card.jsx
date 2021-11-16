import '../assets/css/style.css'
import { connect } from 'react-redux';
import { removeItem } from '../store/actions/itemsActions';
import QC from './quantityController';

const ItemCard = (props) => {

    const removeItem = () => { 
        props.removeItem(props.id)
    }

    return (
        <div>
            <div className="w-full">
                <div className="flex gap-x-10 w-full">
                    <div className="item-image py-6 h-full">
                        <img src={props.image} className="object-cover" alt=""/>
                    </div>
                    <div className="flex flex-col justify-center w-full border-b border-gray-300">
                        <div className="flex flex-col justify-even gap-y-4">
                            <div className="flex justify-between">
                                <div className="block">
                                    <div className="font-semibold text-lg">{props.name ?? 'Product Name'}</div>
                                    <div className="text-sm text-gray-400 font-semibold">{props.brand ?? 'Brand'}</div>
                                </div>
                                <QC qt={
                                    {id:props.id, quantity:props.quantity}
                                    }/>
                                <div className="flex gap-x-2 items-start">
                                    <div className="text-sm text-gray-400 font-semibold">Colour</div>
                                    <div className="border text-sm font-semibold border-gray-300 px-2">{props.color ?? 'color'}</div>
                                </div>
                                <div className="flex items-start items-start">
                                    <div className="text-xs mt-1">$</div>
                                    <div className="text-lg font-semibold">{props.currentPrice ?? props.price}</div>
                                </div>
                            </div>
                            <div className="flex justify-between">
                                <div className="text-gray-500 text-sm font-semibold">
                                    {props.description ?? 'Short description of product written here'}
                                </div>
                                <div className="hover:text-gray-400 cursor-pointer">
                                    <span onClick={removeItem} className="fal fa-times"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeItem: (items) => dispatch(removeItem(items))
    }
}

export default connect(null, mapDispatchToProps)(ItemCard)