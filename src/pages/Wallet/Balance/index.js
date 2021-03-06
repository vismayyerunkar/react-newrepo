import React, { useState } from "react"
// import "../styles.scss"
import { Col, Container, Row } from "reactstrap"
import Breadcrumbs from "components/Common/Breadcrumb"
import { connect } from "react-redux"
import Menu from "./Menu"
import Deposit from "./Deposit"
import Transactions from "./Transactions"
import Withdraw from "./Withdraw"
import Statement from "./Statement"

const Balances = ({ match }) => {
  const [activeContent, setActiveContent] = useState("Deposit")
  const breadcrumbItem = match.params.currency

  const toggle = content => {
    if (activeContent !== content) setActiveContent(content)
  }

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Breadcrumbs title="Balances" breadcrumbItem={breadcrumbItem} />
          <Row>
            <Col md={8}>
              <Menu toggle={toggle} />
              {activeContent === "Deposit" && <Deposit />}
              {activeContent === "Withdraw" && <Withdraw />}
              {activeContent === "Statement" && <Statement />}
            </Col>
            <Col md={4}>
              <Transactions />
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default connect()(Balances)
