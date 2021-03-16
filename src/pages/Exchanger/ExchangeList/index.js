import React, {useState} from "react";
import { Link } from "react-router-dom"
import { TabContent, TabPane, Col, Row, Input} from "reactstrap"
import { connect } from "react-redux"
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css"
import Favorite from "./Favorite/Favorite"
import TableComponent from "./Components/Table-component";

const ExchangeList = props => {
  const toggleTab = tab => {
    if (activeTab !== tab) {
      setActiveTab(tab)
    }
  }
  const [activeTab,setActiveTab] = useState("1")
  const filterShownElements = (value)=>{}

  return (
    <React.Fragment>
      <Row>
        <Col className="" sm="2">
          <div className="mail-list rounded bg-white">
            <div className="search-box chat-search-box pb-2">
              <div className="position-relative">
                <Input
                  type="text"
                  className="form-control border"
                  placeholder="Search..."
                  onChange={e => filterShownElements(e.target.value)}
                />
                <i className="bx bx-search-alt search-icon" />
              </div>
            </div>
            <Link
              to="#"
              onClick={() => toggleTab("2")}
              className={activeTab == "2" ? "active" : "border"}
            >
              <i
                style={{ paddingRight: "20px" }}
                className="mdi mdi-folder-open-outline font-size-20 "
              ></i>
              Favorite
            </Link>
          </div>
        </Col>
        <Col sm="10">
          <TabContent activeTab={activeTab}>
            <TabPane tabId="1">
              <TableComponent />
            </TabPane>
            <TabPane tabId="2">
              <Favorite />
            </TabPane>
          </TabContent>
        </Col>
      </Row>
    </React.Fragment>
  )
}

export default connect()(ExchangeList)
