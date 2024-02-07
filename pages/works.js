import Layout from '../components/layouts/article'
import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import thumbPathfinding from '../public/images/works/pathfinding.png'
import thumbReferenceApp from '../public/images/works/jsontobib1.png'
import thumbBookregister from '../public/images/works/bookregister.png'
import thumbHome from '../public/images/works/websidan.png'

const Works = () => {
  return (
  <Layout title="Works">
    <Container>
      <Heading as="h3" variant="section-title" fontSize={20} mb={4}>
        Works
      </Heading>

      <SimpleGrid columns={[1, 1, 2]} gap={6}>
        <Section delay={0.1}>
            <WorkGridItem id="homepage" title="Homepage" thumbnail={thumbHome}>
              My Homepage project
            </WorkGridItem>
          </Section>
        <Section delay={0.1}>
          <WorkGridItem id="pathfinding" title="Pathfinding project"
          thumbnail={thumbPathfinding}>
            Pathfinding project, where I implemented A*, 
            JPS and Dijkstras algorithms.
          </WorkGridItem>
        </Section>
          <Section delay={0.2}>
            <WorkGridItem id="referencehandler" title="Reference Handler"
            thumbnail={thumbReferenceApp}>
            Project where me and 5 others worked in a scrum team 
              and developed Bibtex reference handler app for client.
            </WorkGridItem>
          </Section>
          <Section delay={0.2}>
            <WorkGridItem id="bookregister" title="Book register"
            thumbnail={thumbBookregister}>
              Project where I made Java App using Java and JavaFx
               for registering and keeping notes from books
            </WorkGridItem>
          </Section>
      </SimpleGrid>
    </Container>
  </Layout>
  )
}

export default Works
export { getServerSideProps } from '../components/chakra'
