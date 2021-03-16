import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { Link } from "react-router-dom"
import { isEmpty, map } from "lodash"
import moment from "moment"
import {
  Button,
  Card,
  Col,
  Container,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  FormGroup,
  CardHeader,
  CardBody,
  CardTitle,
  CardFooter,
  CardText,
  InputGroup,
  InputGroupAddon,
  Media,
  Nav,
  NavItem,
  NavLink,
  Row,
  TabContent,
  TabPane,
  UncontrolledDropdown,
  UncontrolledTooltip
} from "reactstrap"

import Breadcrumbs from "components/Common/Breadcrumb";

const Settings = props=>{

  return(
  <div className="page-content" id="testid">
      <Container fluid>
        {/* Render Breadcrumb */}
        <Breadcrumbs title="Skote" breadcrumbItem="Settings" />

          <Row>
            <Col lg="12">
              
            </Col>
          </Row>
      </Container>
    </div>
  )
}

const mapStateToProps = ({settings})=>({...settings})

export default connect(mapStateToProps,{})(Settings)