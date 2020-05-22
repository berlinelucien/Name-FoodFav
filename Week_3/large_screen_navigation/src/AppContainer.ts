import { connect } from 'react-redux'
import { toggleMenu } from './menu/MenuActions'
import App from './App'

const mapStateToProps = (state: any) => {    
    return {
        menuVisible: state.toggleMenu.menuVisible
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        toggleMenu: (visible: boolean) => {
            dispatch(toggleMenu(visible))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)