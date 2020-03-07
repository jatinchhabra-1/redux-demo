import React from 'react';
import {connect, useSelector, useDispatch} from 'react-redux';
import {buyCake} from '../redux/CakeActions';

function CakeComponent(props) {
    const numOfCakes = useSelector(state => state.numOfCakes)
    const dispatch = useDispatch()
    return (
        <>
        <p>Number of cakes {numOfCakes}</p>
        <button onClick={() => dispatch(buyCake())}>Buy cakes</button>
        </>
    )
}

// const mapStateToProps = state => {
//     return {
//         numOfCakes: state.numOfCakes
//     }
// }

// const mapDispatchToProps = dispatch => {
//     return {
//         buyCake: () => dispatch(buyCake())
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(CakeComponent)
export default CakeComponent