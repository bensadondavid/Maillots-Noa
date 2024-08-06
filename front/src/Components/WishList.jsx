import Header from './Header'
import Footer from './Footer'
import { useSelector,useDispatch } from 'react-redux'
import { removeWish } from '../Slices/WishSlice'

const Wishlist = ()=>{

    const dispatch = useDispatch()
    const wish = useSelector(state => state.wish.wish)

    return(
        <>
        <Header />
        <div className="Wish">
            <ul>
            {wish.map((item, index)=>(
                <li key={index}>
                <p>{item.name}</p>
                <p>{item.color}</p>
                <p>{item.description}</p>
                <button onClick={() => dispatch(removeWish(item))}>Delete</button>
                </li>
            ))}
            </ul>
        </div>
        <Footer />
        </>
    )
}

export default Wishlist