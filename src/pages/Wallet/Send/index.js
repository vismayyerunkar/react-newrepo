import React, { useState } from "react"
import { Container, Button } from "reactstrap"
import Breadcrumbs from "components/Common/Breadcrumb"
import SendPhone from "./SendPhone"
import SendEmail from "./SendEmail"

const Send = () => {
  const [active, setActive] = useState("phone")

  const activeToggle = content => {
    if (active !== content) setActive(content)
  }

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Breadcrumbs title="Send" breadcrumbItem="Send" />
          <div className="mb-4">
            <Button
              // className="btn-sm w-sm mr-3"
              className="mr-3"
              outline={active !== "phone"}
              color={active === "phone" ? "primary" : "secondary"}
              onClick={() => activeToggle("phone")}
            >
              Send by phone number
            </Button>
            <Button
              outline={active !== "email"}
              color={active === "email" ? "primary" : "secondary"}
              onClick={() => activeToggle("email")}
            >
              Send by Email
            </Button>
          </div>
          {active === "phone" && <SendPhone />}
          {active === "email" && <SendEmail />}
        </Container>
      </div>
    </React.Fragment>
  )
}

export default Send
