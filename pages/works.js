import Layout from '../components/layouts/article'
import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import thumbPathfinding from '../public/images/works/pathfinding.png'
import thumbReferenceApp from '../public/images/works/jsontobib1.png'
import thumbBookregister from '../public/images/works/bookregister.png'
import thumbHome from '../public/images/works/websidan.png'
import thumbChat from '../public/images/works/chatapp.png'
import thumbLomake from '../public/images/works/lomake.png'
import thumbNorppa from '../public/images/works/norppa.png'
import thumbCurrechat from '../public/images/works/currechat.png'
import thumbCompilers from '../public/images/works/compilers.png'
import thumbMuvico from '../public/images/works/muvico.png'

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
            <WorkGridItem id="chatapp" title="Chat App"
            thumbnail={thumbChat}
            >
              Database project where I developed chatroom application.
            </WorkGridItem>
          </Section>
          <Section delay={0.2}>
            <WorkGridItem id="referencehandler" title="Reference Handler"
            thumbnail={thumbReferenceApp}>
            Project where me and 5 others worked in a scrum team 
              and developed Bibtex reference handler app for client.
            </WorkGridItem>
          </Section>
          <Section delay={0.3}>
            <WorkGridItem id="bookregister" title="Book register"
            thumbnail={thumbBookregister}>
              Project where I made Java App using Java and JavaFx
               for registering and keeping notes from books
            </WorkGridItem>
          </Section>
          <Section delay={0.3}>
            <WorkGridItem id="lomake" title="Lomake"
            thumbnail={thumbLomake}>
              Lomake project description
            </WorkGridItem>
          </Section>
          <Section delay={0.4}>
            <WorkGridItem id="norppa" title="Norppa"
            thumbnail={thumbNorppa}>
              Norppa project description
            </WorkGridItem>
          </Section>
          <Section delay={0.4}>
            <WorkGridItem id="currechat" title="CurreChat"
            thumbnail={thumbCurrechat}>
              CurreChat project description
            </WorkGridItem>
          </Section>
          <Section delay={0.5}>
            <WorkGridItem id="compilers" title="Compilers"
            thumbnail={thumbCompilers}>
              Compilers project description
            </WorkGridItem>
          </Section>
          <Section delay={0.5}>
            <WorkGridItem id="muvico" title="Muvico"
            thumbnail={thumbMuvico}>
              Muvico project description
            </WorkGridItem>
          </Section>
      </SimpleGrid>
    </Container>
  </Layout>
  )
}

export default Works
export { getServerSideProps } from '../components/chakra'
