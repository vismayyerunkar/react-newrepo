import { useState } from "react"
import PropTypes from "prop-types"
import {
  Card,
  CardBody,
  Button,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Row,
  Col,
} from "reactstrap"
import { Link } from "react-router-dom"

const Menu = ({ toggle }) => {
  const [sendOpen, setSendOpen] = useState(false)
  const [moreOpen, setMoreOpen] = useState(false)
  const [closeModal, setCloseModal] = useState(false)

  const sendToggle = () => setSendOpen(!sendOpen)
  const moreToggle = () => setMoreOpen(!moreOpen)
  const closeModalToggle = () => setCloseModal(!closeModal)
  return (
    <Card>
      <CardBody>
        <h5 className="mb-0">Your balance: $ 10.0</h5>
      </CardBody>
      <CardBody className="border-top">
        <Row xs="4" sm="4" className="btnsgroup">
          <Col className="text-center">
            {/* <div className="font-size-24 text-primary">
              <i className="bx bx-plus-circle" />
            </div>
            <Button
              className="btn-sm w-sm"
              color="primary"
              onClick={() => toggle("Deposit")}
            >
              Deposit
            </Button> */}
            <Button
              className="waves-effect btn-label waves-light"
              color="primary"
              onClick={() => toggle("Deposit")}
            >
              <i className="bx bx-smile label-icon"></i>
              Deposit
            </Button>
          </Col>
          <Col className="text-center">
            {/* <div className="font-size-24 text-primary">
              <i className="bx bx-repost" />
            </div> */}
            <Link
              to="/conversion"
              className="btn btn-primary waves-effect btn-label waves-light"
            >
              <i className="bx bx-repost label-icon"></i>
              Convert
            </Link>
          </Col>
          <Col className="text-center">
            {/* <div className="font-size-24 text-primary">
              <i className="bx bx-send" />
            </div>
            <Link to="/send" className="btn btn-primary btn-sm w-sm">
              Send
            </Link> */}
            <Link
              to="/send"
              className="btn btn-primary waves-effect btn-label waves-light"
            >
              <i className="bx bx-send label-icon"></i>
              Send
            </Link>
          </Col>
          <Col className="text-center">
            {/* <div className="font-size-24 text-primary">
              <i className="bx bx-transfer-alt" />
            </div>
            <Link to="/request" className="btn btn-primary btn-sm w-sm">
              Request
            </Link> */}
            <Link
              to="/request"
              className="btn btn-primary waves-effect btn-label waves-light"
            >
              <i className="bx bx-transfer label-icon"></i>
              Request
            </Link>
          </Col>
          <Col className="mt-sm-4 text-center">
            {/* <div className="font-size-24 text-primary">
              <i className="bx bx-bitcoin" />
            </div>
            <Link to="/cryptoswab" className="btn btn-primary btn-sm w-sm">
              Crypto swab
            </Link> */}
            <Link
              to="/cryptoswab"
              className="btn btn-primary waves-effect btn-label waves-light"
            >
              <i className="bx bx-bitcoin label-icon"></i>
              Crypto swab
            </Link>
          </Col>
          <Col className="mt-sm-4 text-center">
            {/* <div className="font-size-24 text-primary">
              <i className="bx bx-money" />
            </div>
            <Link to="/cash-station" className="btn btn-primary btn-sm w-sm">
              Cash station
            </Link> */}
            <Link
              to="/cash-station"
              className="btn btn-primary waves-effect btn-label waves-light"
            >
              <i className="bx bx-money label-icon"></i>
              Cash station
            </Link>
          </Col>
          <Col className="mt-sm-4 text-center">
            {/* <div className="font-size-24 text-primary">
              <i className="bx bx-wallet" />
            </div>
            <Button
              className="btn-sm w-sm"
              color="primary"
              onClick={() => toggle("Withdraw")}
            >
              Withdraw
            </Button> */}
            <Button
              className="waves-effect btn-label waves-light"
              color="primary"
              onClick={() => toggle("Withdraw")}
            >
              <i className="bx bx-wallet label-icon"></i>
              Withdraw
            </Button>
          </Col>
          <Col className="mt-sm-4 text-center">
            {/* <div className="font-size-24 text-primary">
              <i className="bx bx-dots-horizontal-rounded" />
            </div> */}
            <ButtonDropdown isOpen={moreOpen} toggle={moreToggle}>
              <DropdownToggle
                className="waves-effect btn-label waves-light"
                color="primary"
                caret
              >
                <i className="bx bx-wallet label-icon"></i>
                More
                <i className="fas fa-caret-down float-right caret-down"></i>
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem onClick={() => toggle("Statement")}>
                  <i className="fas fa-file-invoice mr-2"></i>Statement
                </DropdownItem>
                <DropdownItem onClick={closeModalToggle}>
                  <i className="far fa-times-circle mr-2"></i>Close Balance
                </DropdownItem>
              </DropdownMenu>
            </ButtonDropdown>
          </Col>
        </Row>
      </CardBody>
      <Modal
        className="modal-dialog-centered"
        isOpen={closeModal}
        toggle={closeModalToggle}
      >
        <ModalHeader toggle={closeModalToggle}>
          <span className="text-danger">
            <i className="fas fa-exclamation-triangle mr-2"></i>Warning
          </span>
        </ModalHeader>
        <ModalBody>Are you sure you want to close this balance?</ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={closeModalToggle}>
            Cancel
          </Button>
          <Button color="primary" onClick={closeModalToggle}>
            Yes
          </Button>
        </ModalFooter>
      </Modal>
    </Card>
  )
}

Menu.propTypes = {
  toggle: PropTypes.func,
}

export default Menu
