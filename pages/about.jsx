import Head from 'next/head'
import Image from 'next/image'
import PageLayout from '../components/PageSec/PageLayout'

const about = () => {
  return (
    <div>
      <Head>
        <title>Cryptolancer a Decentralized freelancer marketplace</title>
        <meta name="description" content="A decentralized gig listing platform for creators" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <PageLayout>
        <h1>About</h1>
      </PageLayout>

      
    </div>
  )
}

export default about