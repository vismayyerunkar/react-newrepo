import React from "react"
import {Card, Col, Row, Table, Input, Button } from "reactstrap"
import { connect } from "react-redux"

const InitialData = [
  { PLATFORM: "MASTERCARD",CURRENCY: "USD",NAME: "United States Dollar", id: 1},
  { PLATFORM: "VISA", CURRENCY: "CNY", NAME: "China Yuan", id: 2 },
  { PLATFORM: "AMERICAN EXPRESS", CURRENCY: "USD", NAME: "United States Dollar", id: 3 },
  { PLATFORM: "MASTERCARD",CURRENCY: "USD",NAME: "United States Dollar", id: 4 },
  { PLATFORM: "VISA", CURRENCY: "CNY", NAME: "China Yuan", id: 5},
  { PLATFORM: "AMERICAN EXPRESS", CURRENCY: "USD", NAME: "United States Dollar", id: 6 },
  { PLATFORM: "MASTERCARD",CURRENCY: "USD",NAME: "United States Dollar", id: 7 },
  { PLATFORM: "VISA", CURRENCY: "CNY", NAME: "China Yuan", id: 8 },
  { PLATFORM: "AMERICAN EXPRESS", CURRENCY: "USD", NAME: "United States Dollar", id: 9},
  { PLATFORM: "MASTERCARD",CURRENCY: "USD",NAME: "United States Dollar", id: 10 },
  { PLATFORM: "VISA", CURRENCY: "CNY", NAME: "China Yuan", id: 11 },
  { PLATFORM: "AMERICAN EXPRESS", CURRENCY: "USD", NAME: "United States Dollar", id: 12 },
]
const headElements = ["PLATFORM", "CURRENCY", "NAME"]

const _Card = props => {
  const [currencyElements, setCurrencyElements] = React.useState(InitialData)
  const [shownElements, setShownElements] = React.useState(InitialData)

  const filterShownElements = value => {
    if (value) {
      let platform = value.toLowerCase()
      let newElements = currencyElements.filter(element =>
        element.PLATFORM.toLowerCase().includes(platform)
      )
      setShownElements(newElements)
    } else {
      setShownElements(currencyElements)
    }
  }
  return (
    <React.Fragment>
      <Row className="w-100">
        <Col lg="10">
          <div className="search-box chat-search-box pb-2">
            <div className="position-relative">
              <Input
                type="text"
                className="form-control"
                placeholder="Search..."
                onChange={e => filterShownElements(e.target.value)}
              />
              <i className="bx bx-search-alt search-icon" />
            </div>
          </div>
        </Col>
        <Col lg="2">
          <Button
            outline
            onClick={() => {
              filterShownElements("")
            }}
          >
            Show All
          </Button>
        </Col>
      </Row>

      <Row>
        <Col>
          <div className="w-100">
            <Card>
              <div className="pr-4 pl-4 border-bottom overflow-auto">
                <Row>
                  <Table>
                    <thead>
                      <tr>
                        {headElements.map((el, id) => (
                          <th style={{ textAlign: "center" }} key={id}>
                            {el}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {shownElements.map((el, id) => (
                        <tr key={id}>
                          <td style={{ textAlign: "center" }}>{el.PLATFORM}</td>
                          <td style={{ textAlign: "center" }}>{el.CURRENCY}</td>
                          <td style={{ textAlign: "center" }}>{el.NAME}</td>
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </Row>
              </div>
            </Card>
          </div>
        </Col>
      </Row>
    </React.Fragment>
  )
}

export default connect()(_Card)

