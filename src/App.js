import React from 'react'
import Store from './components/Store'
import Form from './components/Form'
import Weather from './components/Weather'
import ErrorBoundary from './components/ErrorBoundary'

const App = () => {
  return (
   <ErrorBoundary>
    <Store>
      <Form></Form>
      <Weather></Weather>
    </Store>
   </ErrorBoundary>
  )
}

export default App
