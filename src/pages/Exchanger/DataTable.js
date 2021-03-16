import React from "react"
import USD_data from "./Data/USD_data"
import { MDBDataTable } from "mdbreact"
import { Row, Col, Card, CardBody, CardTitle, CardSubtitle } from "reactstrap"
import "./DataTable.scss"

const DatatableTables = ({data}) => {
  

  return (
    <React.Fragment>
     <Row>
            <Col className="col-12">
              <Card>
                <CardBody>
                  <MDBDataTable responsive striped bordered data={data} />
                </CardBody>
              </Card>
            </Col>
          </Row>
    </React.Fragment>
  )
}

export default DatatableTables
