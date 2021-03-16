import React from "react"
import { Container, FormGroup, Form } from "reactstrap"
import Breadcrumbs from "components/Common/Breadcrumb"
import CardContent from "components/CardContent"
import PhoneInput from "react-phone-input-2"
import FormGroupRow from "components/FormGroupRow"

const Conversion = () => {
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Breadcrumbs title="Conversion" breadcrumbItem="Conversion" />
          <CardContent header="Conversion" footer="Convert">
            <Form>
              <FormGroupRow label="From">
                <PhoneInput inputClass="w-100" country="us" />
              </FormGroupRow>
              <FormGroupRow>
                <ul className="mb-0">
                  <li>Fee 1%</li>
                  <li>0.0 converted</li>
                  <li>0.9203 Conversion rate</li>
                </ul>
              </FormGroupRow>
              <FormGroupRow label="To">
                <PhoneInput
                  inputClass="w-100"
                  country="de"
                  // value={phone}
                  // onChange={handleChange}
                />
              </FormGroupRow>
            </Form>
          </CardContent>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default Conversion
