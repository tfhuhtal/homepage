import Layout from '../../components/layouts/article'
import {
  Container,
  List,
  ListItem,
  Badge,
  Link,
  SimpleGrid
} from '@chakra-ui/react'
import Image from 'next/image'
import P from '../../components/paragraph'
import { Title, Meta } from '../../components/work'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import picture from '../../public/images/works/chatapp.png'


const Page = () => {
  return (
  <Layout title="Chat App">
      <Container>
        <Title>
          Chat App <Badge bg="#66ff00">2022</Badge>
        </Title>
        <P>
          Database application project -course. 
          My chat application encompasses several key features: 
          users can create new accounts and log into the platform, 
          accessing their conversations displayed on the homepage alongside 
          participant counts. They have the ability to initiate new conversations 
          and join public ones, sending messages within. Additionally, users 
          can log out, with administrators possessing the capability to 
          remove others from conversations. Users can also voluntarily exit
          chat rooms and edit room names. The application facilitates 
          message searches by specific keywords and allows message editing. 
          Furthermore, room administrators hold the authority to toggle conversation 
          visibility between public and private states,
          ensuring versatile and secure communication options for all users.
       </P>
        <List ml={4} my={4}>
          <ListItem>
          <Meta>Github</Meta>
            <span>
            <Link href="https://github.com/tfhuhtal/chatapp/" target="_blank">
              github.com/tfhuhtal/chatapp/ <ExternalLinkIcon mx="2px" />
              </Link>
            </span>
          </ListItem>
          <ListItem>
          <Meta>Stack</Meta>
            <span>
            Python / Flask / PostgreSQL / Jinja 
            </span>
          </ListItem>
        </List>
        <SimpleGrid columns={1} gap={6}>
          <Image style={{ 'borderRadius':'12px' }} src={picture} alt="chatapp"></Image>
        </SimpleGrid>
      </Container>

    </Layout>
  )
}

export default Page
export { getServerSideProps } from '../../components/chakra'
