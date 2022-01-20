import { Layout } from 'layout/Layout'
import Hero from 'components/Hero/Hero'
import Seamless from 'components/Seamless/Seamless'
import AppFlow from 'components/AppFlows/AppFlow'

const App = () => {
  return (
    <Layout>
      <Hero />
      <Seamless />
      <AppFlow />
    </Layout>
  )
}

export default App
