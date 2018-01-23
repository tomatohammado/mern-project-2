import React, { Component } from 'react'
import './App.css'
import Miniature from '../Miniature/Miniature.js'
// import { getAll } from '../../Util.js'

let testData = [
  {
    "name": "Storm Commando",
    "imageUrl": "swminiAE_33card2.jpg"
  },
  {
    "name": "Darth Bane",
    "imageUrl": "SWminiCOTF10banecardfr.jpg"
  },
  {
    "name": "Logray, Ewok Shaman",
    "imageUrl": "swminiIE-34card2.jpg"
  }
]

class App extends Component {
  state = {
    miniatures: [],
    test: false
  }

  componentDidMount () {
    // getAll.then(res => {
    //   console.log(res.data)
    //   this.setState(prevState => ({
    //     miniatures: res.data.slice(),
    //     test: true
    //   }), _ => console.log(this.state.test))
    // })

    this.setState(prevState => ({
      miniatures: testData.slice(),
      test: true
    }), _ => console.log(this.state.miniatures))
  }

  render () {
    let item
    let miniatureComponent
    if (this.state.miniatures.length > 0) {
    //   allMiniatures = this.state.miniatures.map((item, index) => (
    //     <Miniature key={index} name={item.name} imageUrl={item.imageUrl} />
    // ))
    item = this.state.miniatures[0]
    console.log(item)
    miniatureComponent = <Miniature name={item.name} imageUrl={item.imageUrl} />
    console.log(miniatureComponent)
    }
    return (
      <div className='App'>
        <main className='container'>
          <header>
            <a href='/'>
              <h1 className='center'>Star Wars Miniatures App</h1>
            </a>
          </header>
          {item && <section className='container-miniatures row'>
            {miniatureComponent}
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
