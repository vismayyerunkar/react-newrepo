import React from "react"
import { Form, FormGroup, Label, Input } from "reactstrap"
import CardContent from "components/CardContent"
import FormGroupRow from "components/FormGroupRow"

const SendEmail = () => {
  return (
    <CardContent header="Send by Email" footer="Send">
      <Form>
        <FormGroupRow label="Enter email">
          <Input type="text" placeholder="Email" />
        </FormGroupRow>
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
      </Form>
    </CardContent>
  )
}

export default SendEmail
