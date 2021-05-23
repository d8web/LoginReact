import { connect } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import Routes from './Routes'
import { GlobalStyles } from './globalStyles'

import { Template } from './components/MainComponents'
import Header from './components/partials/Header'
import Footer from './components/partials/Footer'

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles/>
      <Template>
        <Header/>
          <Routes/>
        <Footer/>
      </Template>
    </BrowserRouter>
  );
}

const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)