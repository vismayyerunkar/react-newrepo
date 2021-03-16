import React, {useState} from "react";
import { Link } from "react-router-dom"
import { Container,
  Card,
  CardBody,
  Col,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,} from "reactstrap"
import classnames from "classnames"
import Breadcrumbs from "components/Common/Breadcrumb"
import { connect } from "react-redux"
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"
import ExchangeList from "./ExchangeList";
import Pairs from "./Pairs"

const Exchanger = props => {
  const toggleTab = tab => {
    if (activeTab !== tab) {
      setActiveTab(tab)
    }
  }
  const [activeTab, setActiveTab] = useState("Pairs")
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Breadcrumbs title="Exchanger" breadcrumbItem={activeTab} />
          <Row>
            <Col lg="12">
              <Card>
                <CardBody>
                  <ul className="nav nav-tabs nav-tabs-custom" role="tablist">
                    <NavItem>
                      <NavLink
                        className={classnames({
                          active: activeTab === "Pairs",
                        })}
                        onClick={() => {
                          toggleTab("Pairs")
                        }}
                      >
                        Pairs
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className={classnames({
                          active: activeTab === "Exchange List",
                        })}
                        onClick={() => {
                          toggleTab("Exchange List")
                        }}
                      >
                        Exchange List
                      </NavLink>
                    </NavItem>
                  </ul>

                  <TabContent activeTab={activeTab} className="p-3">
                    <TabPane tabId="Pairs" id="all-order">
                      <Pairs/>
                    </TabPane>
                    <TabPane tabId="Exchange List" id="processing">
                    <ExchangeList/>
                    </TabPane>
                  </TabContent>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default connect()(Exchanger)
