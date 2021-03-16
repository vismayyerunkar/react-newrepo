import React from "react"
import { Container } from "reactstrap"
import Breadcrumbs from "components/Common/Breadcrumb"

const TransactionDetails = ({ match }) => {
  console.log({ match })
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Breadcrumbs
            title="Transaction details"
            breadcrumbItem={match.params.id}
          />
          <div>AAAAAAAAAAA</div>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default TransactionDetails
