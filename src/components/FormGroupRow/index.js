import PropTypes from "prop-types"
import { Col, FormGroup, Label } from "reactstrap"

const FormGroupRow = ({ label, children, ...props }) => {
  return (
    <FormGroup row>
      <Label className="text-sm-right" sm={3}>
        {label}
      </Label>
      <Col sm={6} {...props}>
        {children}
      </Col>
      <Col sm={3} />
    </FormGroup>
  )
}

FormGroupRow.propTypes = {
  label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  children: PropTypes.node,
}

export default FormGroupRow
