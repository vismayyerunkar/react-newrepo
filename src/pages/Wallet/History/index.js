import React, { useState } from "react"
import {
  Card,
  Button,
  Container,
  Table,
  InputGroup,
  InputGroupText,
  Input,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap"
import Breadcrumbs from "components/Common/Breadcrumb"
import { connect } from "react-redux"
import USD_Image from "assets/images/flags/us.jpg"
import EUR_Image from "assets/images/flags/euro.jpg"
import CNY_Image from "assets/images/flags/cny.jpg"
import { MDBDataTable } from "mdbreact"

const History = () => {
  const [active, setActive] = useState("")
  const [modalBalance, setModalBalance] = useState(false)

  const modalBalanceToggle = () => setModalBalance(!modalBalance)

  const activeToggle = tab => {
    if (active !== tab) setActive(tab)
  }

  const data = {
    columns: [
      {
        label: "Type",
        field: "type",
        sort: "asc",
        width: 100,
      },
      {
        label: "Date",
        field: "date",
        sort: "asc",
        width: 100,
      },
      {
        label: "Details",
        field: "details",
        sort: "asc",
        width: 500,
      },
      {
        label: "Amount",
        field: "amount",
        sort: "asc",
        width: 100,
      },
      {
        label: "View",
        field: "view",
        sort: "disabled",
        width: 100,
      },
    ],
    rows: [
      {
        type: 0,
        date: "14/02/2020",
        details: "Sending money",
        amount: -10,
        view: [
          <i
            className="fas fa-eye ml-2 view"
            onClick={() => console.log("onClick")}
          ></i>,
        ],
      },
      {
        type: 0,
        date: "14/02/2020",
        details: "Receiving money",
        amount: -50,
        view: [
          <i
            className="fas fa-eye ml-2 view"
            onClick={() => console.log("onClick")}
          ></i>,
        ],
      },
      {
        type: 0,
        date: "14/02/2020",
        details: "Conversion",
        amount: -10,
        view: [
          <i
            className="fas fa-eye ml-2 view"
            onClick={() => console.log("onClick")}
          ></i>,
        ],
      },
      {
        type: 0,
        date: "14/02/2020",
        details: "Crypto swab",
        amount: 50,
        view: [
          <i
            className="fas fa-eye ml-2 view"
            onClick={() => console.log("onClick")}
          ></i>,
        ],
      },
      {
        type: 0,
        date: "14/02/2020",
        details: "Crypto swab back",
        amount: -200,
        view: [
          <i
            className="fas fa-eye ml-2 view"
            onClick={() => console.log("onClick")}
          ></i>,
        ],
      },
      {
        type: 0,
        date: "13/02/2020",
        details: "Exchanger",
        amount: -1,
        view: [
          <i
            className="fas fa-eye ml-2 view"
            onClick={() => console.log("onClick")}
          ></i>,
        ],
      },
      {
        type: 0,
        date: "13/02/2020",
        details: "Insurance pledge",
        amount: 100,
        view: [
          <i
            className="fas fa-eye ml-2 view"
            onClick={() => console.log("onClick")}
          ></i>,
        ],
      },
      {
        type: 0,
        date: "13/02/2020",
        details: "Insurance refund",
        amount: -500,
        view: [
          <i
            className="fas fa-eye ml-2 view"
            onClick={() => console.log("onClick")}
          ></i>,
        ],
      },
      {
        type: 0,
        date: "13/02/2020",
        details: "Arbitration pledge",
        amount: -25,
        view: [
          <i
            className="fas fa-eye ml-2 view"
            onClick={() => console.log("onClick")}
          ></i>,
        ],
      },
      {
        type: 0,
        date: "13/02/2020",
        details: "Arbitration refund",
        amount: -15,
        view: [
          <i
            className="fas fa-eye ml-2 view"
            onClick={() => console.log("onClick")}
          ></i>,
        ],
      },
      {
        type: 0,
        date: "13/02/2020",
        details: "Fees",
        amount: -2,
        view: [
          <i
            className="fas fa-eye ml-2 view"
            onClick={() => console.log("onClick")}
          ></i>,
        ],
      },
      {
        type: 0,
        date: "14/02/2020",
        details: "Sending money",
        amount: -10,
        view: [
          <i
            className="fas fa-eye ml-2 view"
            onClick={() => console.log("onClick")}
          ></i>,
        ],
      },
      {
        type: 0,
        date: "14/02/2020",
        details: "Receiving money",
        amount: -50,
        view: [
          <i
            className="fas fa-eye ml-2 view"
            onClick={() => console.log("onClick")}
          ></i>,
        ],
      },
      {
        type: 0,
        date: "14/02/2020",
        details: "Conversion",
        amount: -10,
        view: [
          <i
            className="fas fa-eye ml-2 view"
            onClick={() => console.log("onClick")}
          ></i>,
        ],
      },
      {
        type: 0,
        date: "14/02/2020",
        details: "Crypto swab",
        amount: 50,
        view: [
          <i
            className="fas fa-eye ml-2 view"
            onClick={() => console.log("onClick")}
          ></i>,
        ],
      },
      {
        type: 0,
        date: "14/02/2020",
        details: "Crypto swab back",
        amount: -200,
        view: [
          <i
            className="fas fa-eye ml-2 view"
            onClick={() => console.log("onClick")}
          ></i>,
        ],
      },
      {
        type: 0,
        date: "13/02/2020",
        details: "Exchanger",
        amount: -1,
        view: [
          <i
            className="fas fa-eye ml-2 view"
            onClick={() => console.log("onClick")}
          ></i>,
        ],
      },
      {
        type: 0,
        date: "13/02/2020",
        details: "Insurance pledge",
        amount: 100,
        view: [
          <i
            className="fas fa-eye ml-2 view"
            onClick={() => console.log("onClick")}
          ></i>,
        ],
      },
      {
        type: 0,
        date: "13/02/2020",
        details: "Insurance refund",
        amount: -500,
        view: [
          <i
            className="fas fa-eye ml-2 view"
            onClick={() => console.log("onClick")}
          ></i>,
        ],
      },
      {
        type: 0,
        date: "13/02/2020",
        details: "Arbitration pledge",
        amount: -25,
        view: [
          <i
            className="fas fa-eye ml-2 view"
            onClick={() => console.log("onClick")}
          ></i>,
        ],
      },
      {
        type: 0,
        date: "13/02/2020",
        details: "Arbitration refund",
        amount: -15,
        view: [
          <i
            className="fas fa-eye ml-2 view"
            onClick={() => console.log("onClick")}
          ></i>,
        ],
      },
      {
        type: 0,
        date: "13/02/2020",
        details: "Fees",
        amount: -2,
        view: [
          <i
            className="fas fa-eye ml-2 view"
            onClick={() => console.log("onClick")}
          ></i>,
        ],
      },
    ],
  }

  const modifiedData = {
    ...data,
    rows: data.rows.map(item => ({
      ...item,
      type: (
        <i
          className={
            item.amount > 0 ? "fas fa-arrow-up ml-2" : "fas fa-arrow-down ml-2"
          }
        ></i>
      ),
    })),
  }
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Breadcrumbs title="Transactions history" breadcrumbItem="History" />

          <Card body>
            <InputGroup className="mb-4">
              <InputGroupText>
                <i className="fas fa-search"></i>
              </InputGroupText>
              <Input
                placeholder="Amount"
                min={0}
                max={100}
                type="number"
                step="1"
              />
            </InputGroup>
            <div className="mb-4">
              <ButtonDropdown isOpen={modalBalance} toggle={modalBalanceToggle}>
                <DropdownToggle
                  className="btn-sm w-sm mr-3"
                  outline={active !== "Balance"}
                  color={active === "Balance" ? "primary" : "secondary"}
                  caret
                >
                  Balance
                  <i className="fas fa-caret-down float-right caret-down"></i>
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem onClick={() => activeToggle("Balance")}>
                    <img src={USD_Image} style={{ width: "20px" }} /> United
                    States dollar
                  </DropdownItem>
                  <DropdownItem onClick={() => activeToggle("Balance")}>
                    <img src={EUR_Image} style={{ width: "20px" }} /> Euro
                  </DropdownItem>
                  <DropdownItem onClick={() => activeToggle("Balance")}>
                    <img src={CNY_Image} style={{ width: "20px" }} /> Chinese
                    yuan
                  </DropdownItem>
                </DropdownMenu>
              </ButtonDropdown>
              <Button
                className="btn-sm w-sm mr-3"
                outline={active !== "Inbound"}
                color={active === "Inbound" ? "primary" : "secondary"}
                onClick={() => activeToggle("Inbound")}
              >
                Inbound
              </Button>
              <Button
                className="btn-sm w-sm"
                outline={active !== "Outbound"}
                color={active === "Outbound" ? "primary" : "secondary"}
                onClick={() => activeToggle("Outbound")}
              >
                Outbound
              </Button>
            </div>
            <MDBDataTable
              className="data-tables"
              responsive
              bordered
              autoWidth={false}
              scrollX
              data={modifiedData}
            />
          </Card>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default connect()(History)
