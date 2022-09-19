import { useState } from 'react'
import { Header } from './components/Header/Header'
import { TaskInput } from './components/TaskInput/TaskInput'
import styles from './App.module.css'
import { List } from './components/List/List'

function App() {
  return (
    <>
      <Header />
      <TaskInput />
    </>
  )
}

export default App
