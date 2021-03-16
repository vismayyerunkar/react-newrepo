import React from "react"
import PropTypes from "prop-types"
import { Card } from "reactstrap"
import { Link } from "react-router-dom"

const CardBalance = ({ currency, label, amount, url, image }) => {
  return (
    <Link to={url} className="text-secondary">
      <Card className="flex-row align-items-center p-2">
        {/* <ReactcurrencyFlag
          currencyCode={currency}
          svg
          className="currency"
          title={currency}
        /> */}
        <img className="flags" title={currency} src={image} alt={currency} />
        <div className="ml-3">
          <p className="mb-0">{label}</p>
          <h5 className="mb-0">{amount}</h5>
        </div>
      </Card>
    </Link>
  )
}

CardBalance.propTypes = {
  currency: PropTypes.string,
  label: PropTypes.string,
  amount: PropTypes.string,
  url: PropTypes.string,
  image: PropTypes.string,
}

export default CardBalance
