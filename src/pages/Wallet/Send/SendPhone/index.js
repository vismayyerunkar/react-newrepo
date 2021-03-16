import React, { useState } from "react"
import { Form, FormGroup, Label, Input } from "reactstrap"
import PhoneInput from "react-phone-input-2"
import CardContent from "components/CardContent"
import FormGroupRow from "components/FormGroupRow"

const SendPhone = () => {
  const [phone, setPhone] = useState("")
  const handleChange = value => setPhone(value)
  return (
    <CardContent header="Send by phone number" footer="Send">
      <Form>
        <FormGroupRow label="Enter phone number">
          <PhoneInput
            inputClass="w-100"
            country="us"
            value={phone}
            onChange={handleChange}
            placeholder="Phone number"
          />
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

export default SendPhone
