import {connect} from 'react-redux'
import Home from '../Component/Home'
import {addToCart} from '../service/action/Action'

const mapStateToProps=state=>({

})
const mapDispatchProps=dispatch =>({
  addTocartHandle:data =>dispatch(addToCart(data))
})
export default connect(mapStateToProps,mapDispatchProps)(Home)