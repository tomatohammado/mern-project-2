import React, { Component } from 'react'
import './App.css'
import Miniature from '../Miniature/Miniature.js'
import { getAll } from '../../Util.js'

class App extends Component {
  state = {
    miniatures: [],
  }

  componentDidMount () {
    getAll.then(res => {
      this.setState(prevState => ({
        miniatures: res.data.slice()
      }))
    })
  }

  render () {
    let allMiniatures
    if (this.state.miniatures.length > 0) {
      allMiniatures = this.state.miniatures.map((item, index) => (
        <Miniature key={index} name={item.name} imageUrl={item.imageUrl} id={item._id}/>
    ))
    }
    return (
      <div className='App'>
        <main className='container'>
          <header>
            <a href='/'>
              <h1 className='center'>Star Wars Miniatures App</h1>
            </a>
          </header>
          {allMiniatures && <section className='container-miniatures row'>
            {allMiniatures}
          </section>
          }
        </main>
        <footer className='center'>
          <a href='http://rebelscum.com/'>
            <img src='/assets/images/rebelscum.gif' border='0' width='100' height='35' alt='Rebelscum credit' />
          </a>
        </footer>
      </div>
    )
  }
}

export default App
