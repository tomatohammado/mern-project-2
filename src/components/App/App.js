import React, { Component } from 'react'
// import logo from './logo.svg'
import './App.css'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <main className='container'>
          <header>
            <a href='/'>
              <h1 className='center'>Star Wars Miniatures App</h1>
            </a>
          </header>

          {/* {{{body}}} */}

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
