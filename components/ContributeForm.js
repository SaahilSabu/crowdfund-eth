import React, {useState} from "react";
import {useRouter} from "next/router"
import { Form, Input, Message, Button } from "semantic-ui-react";
import Campaign from "../ethereum/campaign"
import web3 from "../ethereum/web3"
const ContributeForm = ({address}) => {
  const router  = useRouter();
  const [value, setValue] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)
const onSubmit  = async (e) => {
  e.preventDefault()
const campaign = Campaign(address)
setLoading(true)
setMessage("")
try {
  const accounts = await web3.eth.getAccounts()
  await campaign.methods.contribute().send({
    from : accounts[0],
    value: web3.utils.toWei(value, 'ether')
  })

  router.push(`/campaigns/${address}`)
} catch (error) {
  setMessage(error.message)
}
setLoading(false)
setValue("")
}
  return (
    <div>
        <Form onSubmit = {onSubmit} error = {!!message}>
            <Form.Field>
                <label>Amount to Contribute</label>
                <Input label='ether' labelPosition='right' value={value} onChange={(e) => setValue(e.target.value)} />
            </Form.Field>
            <Message error header="Oops!" content={message} />
            <Button primary loading = {loading}>Contribute</Button>
        </Form>
    </div>
  )
}

export default ContributeForm