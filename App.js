import React from 'react'
import Navigation from './Navigation/Navigation'
import { Provider } from 'react-redux'
import Store from './Store/configureStore'

export default class App extends React.Component {
  render() {
    return (
      <Provider store={Store}>
        <Navigation/>
      </Provider>
    )
  }
}



//Api
//6263349c68e88d0f8daba8fbe9d4d154
// https://api.themoviedb.org/3/movie/550?api_key=6263349c68e88d0f8daba8fbe9d4d154

///eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2MjYzMzQ5YzY4ZTg4ZDBmOGRhYmE4ZmJlOWQ0ZDE1NCIsInN1YiI6IjVkMDZiNTA1YzNhMzY4MzJmMjIyNTE1MSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.vNN-MHHSCTXCRiXhVOllblJ_vgucNkj6OcoS7lzVpTU
