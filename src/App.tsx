import { useState } from 'react'
import FilterCard from './components/filterCard'
import { ContextProdutosCount } from './utils/contexts/context-produtos'

function App() {

  const [contextProdutosCount, setContextProdutosCount] = useState<number>(0);

  return (
    <>
      <ContextProdutosCount.Provider value={{contextProdutosCount, setContextProdutosCount}}>
        < FilterCard />
      </ContextProdutosCount.Provider>
    </>
  )
}

export default App
