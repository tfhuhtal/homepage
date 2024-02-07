import Head from 'next/head'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import Loader from '../voxel-loader'
import Footer from '../footer'

const VoxelGlb = dynamic(() => import('../voxel-glb'), {
  ssr: false,
  loading: () => <Loader />
})

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <title>Tuomas Huhtala - Homepage</title>
      </Head>

      <NavBar path={router.asPath}/>
 
      <Container maxW="container.md" pt={12}>
        <VoxelGlb />

        {children}

        <Footer />
      </Container>
    </Box>
  )
} 

export default Main
