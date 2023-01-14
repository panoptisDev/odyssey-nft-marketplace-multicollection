import Layout from 'components/Layout'
import Head from 'next/head'
import Footer from 'components/Footer'

const Aloha = () => {
  return (
    <Layout navbar={{}}>
      <Head>
        <title>ALOHA</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/blur-image-on-load@1.1.0/dist/blur-image-on-load.min.css" />
      </Head>
      <div className="min-h-screen bg-center bg-cover bg-no-repeat">
        <img src="mint_party.jpg" className="absolute top-0 left-0 w-full h-full object-cover blur-image-on-load" alt="Background"/>
      </div>
      <footer>
        <Footer />
      </footer>
    </Layout>
  )
}

export default Aloha