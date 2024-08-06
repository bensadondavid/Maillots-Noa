import Header from './Header'
import Footer from './Footer'
import { useSelector,useDispatch } from 'react-redux'
import { removeCart } from '../Slices/CartSlice'

const Cart = ()=>{

    const dispatch = useDispatch()
    const cart = useSelector(state => state.cart.cart)
    return(
        <>
        <Header />
        <div className="Panier">
            <ul>
            {cart.map((item, index)=>(
                <li key={index}>
                <p>{item.name}</p>
                <p>{item.color}</p>
                <p>{item.description}</p>
                <button onClick={() => dispatch(removeCart(item))}>Delete</button>
                </li>
            ))}
            </ul>
        </div>
        <Footer />
        </>
    )
}

export default Cart