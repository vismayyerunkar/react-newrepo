import React from "react"
import {
  Container,
  Form,
  FormGroup,
  Label,
  Input,
  UncontrolledTooltip,
  Col,
} from "reactstrap"
import Breadcrumbs from "components/Common/Breadcrumb"
import CardContent from "components/CardContent"
import FormGroupRow from "components/FormGroupRow"

const Request = () => {
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Breadcrumbs title="Request" breadcrumbItem="Request" />
          <CardContent header="Request money" footer="Generate QR Code">
            <Form>
              <FormGroupRow label="Choose currency">
                <Input type="select" defaultValue="default">
                  <option value="default" disabled hidden>
                    Select your option
                  </option>
                  <option>USD United States Dollar</option>
                  <option>EUR European Euro</option>
                  <option>CNY Chinese Yuan</option>
                </Input>
              </FormGroupRow>
              <FormGroupRow label="Payment amount">
                <Input type="number" />
              </FormGroupRow>
              <FormGroupRow
                label={
                  <>
                    Payment note <span className="text-muted">(optional)</span>
                  </>
                }
              >
                <Input type="textarea" />
              </FormGroupRow>
              <FormGroupRow label="" style={{ marginLeft: 20 }}>
                <Input type="checkbox" id="checkbox" />
                <Label check for="checkbox">
                  Save as static QR Code
                  <i
                    className="fas fa-exclamation-circle ml-2"
                    id="exclamation"
                  ></i>
                </Label>
              </FormGroupRow>
            </Form>
          </CardContent>
        </Container>
      </div>
    </React.Fragment>
  )
}

export default Request
