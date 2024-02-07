import picture1 from '../../public/images/works/jsontobib0.png'
import picture2 from '../../public/images/works/jsontobib1.png'
import picture3 from '../../public/images/works/jsontobib2.png'
import {
  Container,
  Badge,
  Link,
  List,
  SimpleGrid,
  ListItem,
} from '@chakra-ui/react'
import Image from 'next/image'
import Layout from '../../components/layouts/article'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, Meta } from '../../components/work'
import P from '../../components/paragraph'

const RefPage = () => {
  return (
  <Layout title="Reference Handler">
    <Container>
      <Title>
        Reference Handler <Badge bg="#66ff00">2023</Badge>
        </Title>
        <P>
          Software engineering course project with five other students.
          This app has ChatGPT integrated in it. We worked this project couple
          week in a scrum team.
          Our professor was product owner and we had four sprints that lasted one week.
          This app works in commandline. References are stored in Json -file.
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Github</Meta>
            <span>
              <Link href="https://github.com/tfhuhtal/miniprokkis" target="_blank">
                github.com/tfhuhtal/miniprokkis/ <ExternalLinkIcon mx="2px" />
              </Link>
            </span>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>
              Python / Poetry / Unittest / RobotFramework
            </span>
          </ListItem>
          </List>
        <SimpleGrid columns={1} gap={6}>
        <Image style={{ 'borderRadius': '12px'}} src={picture2} alt="reference" />
        <Image style={{ 'borderRadius': '12px'}} src={picture1} alt="reference" />
        <Image style={{ 'borderRadius': '12px'}} src={picture3} alt="reference" />
        </SimpleGrid>
      </Container>
      </Layout>
  )
}

export default RefPage
export { getServerSideProps } from '../../components/chakra'
