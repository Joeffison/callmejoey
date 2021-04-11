import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faAddressBook, faHandSpock } from '@fortawesome/free-regular-svg-icons'
import { faLaptopCode, faSignLanguage, faUserGraduate } from '@fortawesome/free-solid-svg-icons'

import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import Media from "react-bootstrap/Media";

import { Passion, Profile } from "./index";

const SideMenu = ({ sideMenuConfig }) => (
  <Tab.Container id="left-tabs-example" defaultActiveKey={sideMenuConfig[0].tabTitle}>
    <Row className="w-100">
      <Col md={5} lg={4}>
        <Nav variant="tabs" className="flex-column shadow">
          {
            sideMenuConfig.map(tab => (
              <Nav.Item key={tab.tabTitle}>
                <Nav.Link className="App-icon-hoverable" eventKey={tab.tabTitle}>
                  <span style={{paddingRight: '10px'}}>{tab.tabTitle}</span>
                  <FontAwesomeIcon  flip="horizontal" icon={tab.tabIcon} />
                </Nav.Link>
              </Nav.Item>
            ))
          }
        </Nav>
      </Col>
      <Col md={7} lg={8}>
        <Tab.Content>
          {
            sideMenuConfig.map(tab => (
              <Tab.Pane transition={false} eventKey={tab.tabTitle} key={tab.tabTitle}>
                {tab.content}
              </Tab.Pane>
            ))
          }
        </Tab.Content>
      </Col>
    </Row>
  </Tab.Container>
)

const AboutMe = () => {
  const sideMenuConfig = [
    {tabTitle: 'Story', tabIcon: faLaptopCode, content: <Passion/>},
    {tabTitle: 'Profile', tabIcon: faUser, content: <Profile/>},
    {tabTitle: 'Skills', tabIcon: faSignLanguage, content: ''},
    {tabTitle: 'Education', tabIcon: faUserGraduate, content: ''},
    {tabTitle: 'Contact', tabIcon: faAddressBook, content: ''},
  ]

  return (
    <div className="App-page clearfix">
      <Media className="w-100">
        <Media.Body>
          <SideMenu sideMenuConfig={sideMenuConfig} />
        </Media.Body>
        <Image fluid className="img-fluid"
          src="/images/profile/profile-vr.png"
        />
      </Media>
    </div>
  )
}

export default AboutMe;
