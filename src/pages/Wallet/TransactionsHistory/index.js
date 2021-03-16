import React, { useState } from "react"
import {
  Card,
  Button,
  Container,
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
import Transactions from "./Transactions"

const TransactionsHistory = () => {
  const [active, setActive] = useState("")
  const [modalBalance, setModalBalance] = useState(false)

  const modalBalanceToggle = () => setModalBalance(!modalBalance)

  const activeToggle = tab => {
    if (active !== tab) setActive(tab)
  }

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Breadcrumbs
            title="Transactions history"
            breadcrumbItem="Transactions history"
          />

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
                  className="mr-3"
                  outline={active !== "Balance"}
                  color={active === "Balance" ? "primary" : "secondary"}
                  caret
                >
                  Balance
                  <i className="fas fa-caret-down float-right caret-down ml-2"></i>
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
                className="mr-3"
                outline={active !== "Inbound"}
                color={active === "Inbound" ? "primary" : "secondary"}
                onClick={() => activeToggle("Inbound")}
              >
                Inbound
              </Button>
              <Button
                outline={active !== "Outbound"}
                color={active === "Outbound" ? "primary" : "secondary"}
                onClick={() => activeToggle("Outbound")}
              >
                Outbound
              </Button>
            </div>

            <Transactions />
          </Card>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default connect()(TransactionsHistory)
