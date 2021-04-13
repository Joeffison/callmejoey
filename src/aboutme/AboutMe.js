import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faAddressBook } from '@fortawesome/free-regular-svg-icons'
import { faLaptopCode, faSignLanguage, faUserGraduate } from '@fortawesome/free-solid-svg-icons'

import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import Media from "react-bootstrap/Media";

import { Passion, Profile, Skills, Education, Contact } from "./index";

const SideMenu = ({ sideMenuConfig }) => (
  <Tab.Container id="left-tabs-example" defaultActiveKey={sideMenuConfig[0].tabTitle}>
    <Row className="w-100 h-100">
      <Col sm={4} md={3} lg={3} xl={3}>
        <Nav variant="tabs" className="flex-column shadow">
          {
            sideMenuConfig.map(tab => (
              <Nav.Item key={tab.tabTitle}>
                <Nav.Link className="App-icon-hoverable" eventKey={tab.tabTitle}>
                  <span style={{paddingRight: '10px'}}>{tab.tabTitle}</span>
                  <FontAwesomeIcon {...tab.tabIcon} />
                </Nav.Link>
              </Nav.Item>
            ))
          }
        </Nav>
      </Col>
      <Col sm={8} md={9} lg={9} xl={9} className=" h-100">
        <Media className="w-100">
          <Media.Body>
            <Tab.Content>
              {
                sideMenuConfig.map(tab => (
                  <Tab.Pane transition={false} eventKey={tab.tabTitle} key={tab.tabTitle}>
                    {tab.content}
                  </Tab.Pane>
                ))
              }
            </Tab.Content>
          </Media.Body>
          <Image className="aboutme-image image-responsive"
            src="callmejoey/images/profile/profile-vr-inverted.png"
          />
        </Media>
      </Col>
    </Row>
  </Tab.Container>
)

const AboutMe = () => {
  const sideMenuConfig = [
    {tabTitle: 'Story', tabIcon: {icon: faLaptopCode}, content: <Passion/>},
    {tabTitle: 'Profile', tabIcon: {icon: faUser}, content: <Profile/>},
    {tabTitle: 'Skills', tabIcon: {icon: faSignLanguage, flip: "horizontal"}, content: <Skills/>},
    {tabTitle: 'Education', tabIcon: {icon: faUserGraduate}, content: <Education/>},
    {tabTitle: 'Contact', tabIcon: {icon: faAddressBook},  content: <Contact/>},
  ]

  return (
    <div className="App-page App-aboutme">
      <SideMenu sideMenuConfig={sideMenuConfig} />
    </div>
  )
}

export default AboutMe;
