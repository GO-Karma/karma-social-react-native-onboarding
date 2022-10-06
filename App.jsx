import React from 'react'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { Navigation } from './src/navigation/Navigation'

// write your logic

// https://tanstack.com/query/v4/docs/guides/mutations
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      suspense: true
    }
  }
})

const App = () => (
  <QueryClientProvider client={queryClient}>
    <Navigation />
  </QueryClientProvider>
)

export default App
