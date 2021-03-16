import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import styled from "styled-components";
import {
  Button,
  Card,
  Col,
  Container,
  Row,
  Table
} from "reactstrap"


const InitialData = [
  {PAYMENT:"Paypal",CURRENCY:"USD",NAME:"China Yuan",id:1},
  {PAYMENT:"Skrill",CURRENCY:"GBP",NAME:"United States Dollar",id:2},
  {PAYMENT:"Payoneer",CURRENCY:"CNY",NAME:"European Union Euro",id:3},
  {PAYMENT:"Paytm",CURRENCY:"EUR",NAME:"United States Dollar",id:4},
  {PAYMENT:"Paypal",CURRENCY:"GBP",NAME:"United States Dollar",id:5},
  {PAYMENT:"Skrill",CURRENCY:"EUR",NAME:"United States Dollar",id:6},
]

const headElements = ["PAYMENT","CURRENCY","NAME"];

const Favorite = (props)=>{
  const [currencyElements,setCurrencyElements] = React.useState(InitialData);

  const removeElement = (id)=>{
    setCurrencyElements([...currencyElements.filter(el=>el.id!==id)]);
  }

  return(
  <React.Fragment>
   <Row>
          <Col lg="12">
              <div className="w-100 user-chat">
                <Card className="chatMarginBottom">
                  <div className="p-4 border-bottom overflow-auto">
                    <Row>
                      <Table>
                        <thead>
                          <tr>
                          {
                            headElements.map((el,id)=>
                            <th 
                              style={{ textAlign: 'center' }}
                              key={id}
                            >
                            {el}
                            </th>
                            )
                          }
                          </tr>
                        </thead>
                        <tbody>
                        {
                          currencyElements.map((el,id)=>
                          <tr key={id}>
                            <td style={{ textAlign: 'center' }}>{el.PAYMENT}</td>
                            <td style={{ textAlign: 'center' }}>{el.CURRENCY}</td>
                            <td style={{ textAlign: 'center' }}>
                              {el.NAME+"         "}
                            </td>
                            <td>
                              <Button
                                color="link"
                                size="sm"
                                onClick={e=>removeElement(el.id)}
                              >
                                <i className='bx bxs-trash'></i>
                              </Button>
                            </td>
                          </tr>
                          )
                        }
                        </tbody>
                      </Table>
                    </Row>
                  </div>
                </Card>
              </div>
          </Col>
        </Row>
  </React.Fragment>
  );
}

export default connect()(Favorite)