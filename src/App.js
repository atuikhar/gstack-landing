import { Layout } from 'layout/Layout'
import Hero from 'components/Hero/Hero'
import Seamless from 'components/Seamless/Seamless'
import AppFlow from 'components/AppFlow/AppFlow'
import Integration from 'components/Integration/Integration'
import Functionalities from 'components/Functionalities/Functionalities'

const App = () => {
  return (
    <Layout>
      <Hero />
      <Seamless />
      <AppFlow />
      <Integration />
      <Functionalities />
    </Layout>
  )
}

export default App
