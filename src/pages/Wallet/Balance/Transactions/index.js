import React from "react"
import { Card, CardBody, Table } from "reactstrap"
import { MDBDataTable } from "mdbreact"

const Transactions = () => {
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
        width: 170,
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
    <Card>
      <CardBody>
        <h5 className="mb-0">Transactions</h5>
      </CardBody>
      <CardBody className="border-top transactions">
        <MDBDataTable
          className="data-tables"
          responsive
          bordered
          autoWidth={false}
          scrollX
          data={modifiedData}
        />
      </CardBody>
    </Card>
  )
}
export default Transactions
