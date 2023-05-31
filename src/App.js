import React from 'react'
import { ApolloClient, InMemoryCache, ApolloProvider, HttpLink, from, } from '@apollo/client'
import {onError} from '@apollo/client/link/error'
import GetUsers from './components/GetUsers';


const errorLink=onError(({graphqlErrors, networkError})=>{
  if(graphqlErrors){
    graphqlErrors.map(({messages, location, path})=>{
      alert(`Graphql error ${messages}`);
    });
  }
});

const link= from([
  errorLink,
  new HttpLink({uri: "https://api-ap-south-1.hygraph.com/v2/cliafvfxw04lu01t4hc9aaamw/master" })
])

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: link
})

const App = () => {
  return (
    <ApolloProvider client={client}>
      <GetUsers/>
      <div dangerouslySetInnerHTML={{__html:`<p>sdafdafadfadf <strong>sfadfadfadfad </strong><em><strong>asadsasdasda </strong></em><a target='_blank' title=\"google.com\" href=\"https://google.com\">google.com</a></p>` }}>

      </div>
    </ApolloProvider>
  )
}

export default App