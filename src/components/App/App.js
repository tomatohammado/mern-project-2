import React, { Component } from 'react'
import './App.css'
import Miniature from '../Miniature/Miniature.js'
import { getMiniatures, postMiniature } from '../../Util.js'

class App extends Component {
  state = {
    miniatures: [],
    name: '',
    imageUrl: ''
  }

  getAllMiniatures = () => {
    getMiniatures.then(res => {
      this.setState(prevState => ({
        miniatures: res.data.slice()
      }))
    })
  }

  handleCreateInput = (e) => {
    let key = e.target.name
    let value = e.target.value

    this.setState(prevState => ({
      [key]: value
    }))

  }

  handleCreateMiniature = (e) => {
    e.preventDefault()
    postMiniature({
      name: this.state.name,
      imageUrl: this.state.imageUrl
    })
    .then(res => {
      this.setState(prevState => ({
        miniatures: res.data.slice()
      }))
    })
  }

  // hmmm, an arrow function _does_ work here...
  componentDidMount () {
    this.getAllMiniatures()
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

        <section className="container-form create-miniature row" onSubmit={this.handleCreateMiniature}>
          <header>
            <h2 className="amber-text text-lighten-1 center">Add New Miniature</h2>
          </header>
          <form action="/" method="post" className="col s6 offset-s3">
            <label>Name
              <input type="text" name="name" onChange={this.handleCreateInput} />
            </label>
            <label>Image Url
              <input type="text" name="imageUrl" onChange={this.handleCreateInput} />
            </label>
            <button type="submit" className="waves-effect waves-light btn-large btn-flat">Create</button>
          </form>
        </section>
      </div>
    )
  }
}

export default App
