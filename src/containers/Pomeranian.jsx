import React from 'react'
import styled from 'styled-components'
import i18n from 'utils/i18n'
import { withRouter } from 'react-router-dom'
import CardDescription from 'components/CardDescription'
import { ArrowLeft } from 'react-feather'

// bootstrap
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'

// images
import chinchillaPersianDiamond from 'images/chinchillaPersian/450x300/homeDiamond.jpg'


import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'

function Pomeranian({ history }) {
  const handleOnDragStart = e => e.preventDefault()
  return (
    <SPomeranian>
      <Header>
        <Container>
          <Row>
            <Col>
              <Title>{i18n.t('pomeranian')}</Title>
              <Subtitle
                className="d-inline-flex"
                onClick={() => history.push('/home')}
              >
                <ArrowLeft size="15" class="align-self-center" />
                {i18n.t('home')}
              </Subtitle>
            </Col>
          </Row>
        </Container>
      </Header>

      <Content>
        <Container>
          <Row>
            <SCol md={4}>
              <Card className="rounded-0">
                <Card.Img
                  src={chinchillaPersianDiamond}
                  alt="CardOverlay"
                  className="rounded-0"
                />
              </Card>
            </SCol>
            <SCol md={8} className="d-flex align-items-stretch">
              <CardDescription
                title={i18n.t('about')}
                description={i18n.t('pomeranianAbout')}
              />
            </SCol>
          </Row>
          <Row>
            <SCol md={4}>
              <Card className="rounded-0">
                <Card.Img
                  src={chinchillaPersianDiamond}
                  alt="CardOverlay"
                  className="rounded-0"
                />
              </Card>
            </SCol>
            <SCol md={4}>
              <Card className="rounded-0">
                <Card.Img
                  src={chinchillaPersianDiamond}
                  alt="CardOverlay"
                  className="rounded-0"
                />
              </Card>
            </SCol>
            <SCol md={4}>
              <Card className="rounded-0">
                <Card.Img
                  src={chinchillaPersianDiamond}
                  alt="CardOverlay"
                  className="rounded-0"
                />
              </Card>
            </SCol>
          </Row>
          <Row>
            <AliceCarousel
              mouseDragEnabled
              buttonsDisabled={true}
              dotsDisabled={true}
            >
              <img
                src={chinchillaPersianDiamond}
                onDragStart={handleOnDragStart}
              />
              <img
                src={chinchillaPersianDiamond}
                onDragStart={handleOnDragStart}
              />
              <img
                src={chinchillaPersianDiamond}
                onDragStart={handleOnDragStart}
              />
              <img
                src={chinchillaPersianDiamond}
                onDragStart={handleOnDragStart}
              />
              <img
                src={chinchillaPersianDiamond}
                onDragStart={handleOnDragStart}
              />
            </AliceCarousel>
          </Row>
        </Container>
      </Content>
    </SPomeranian>
  )
}

const Header = styled.div`
  font-family: 'Lobster', cursive;
  padding-top: 30px;
`

const Title = styled.div`
  color: #723155;
  font-size: 48px;
  font-weight: bold;
`

const Subtitle = styled.div`
  letter-spacing: 0.1 em;
  font-weight: bold;
  color: #723155;
  font-family: 'Roboto Slab', serif;
  :hover {
    cursor: pointer;
  }
`

const Content = styled.div`
  padding-top: 60px;
  padding-bottom: 100px;
`

const SCol = styled(Col)`
  padding: 5px;
`

const SPomeranian = styled.div``

export default Pomeranian
