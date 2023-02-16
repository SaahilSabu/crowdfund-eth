import React, {useState} from 'react'
import Layout from "../../../../components/Layout";
import { Form, Input, Message, Button } from "semantic-ui-react";
import {useRouter} from "next/router"
import Link from "next/link";
import Campaign from "../../../../ethereum/campaign.js"
import web3 from "../../../../ethereum/web3.js"

const NewReq = ({address}) => {
  const router  = useRouter();
  const [value, setValue] = useState("")
  const [desc, setDesc] = useState("")
  const [recipient, setRecipient] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)

  const onSubmit  = async (e) => {
    e.preventDefault()
  const campaign = Campaign(address)
  setLoading(true)
  setMessage("")
  try {
    const accounts = await web3.eth.getAccounts()
    await campaign.methods.createRequest(desc, web3.utils.toWei(value, 'ether'), recipient).send({
      from : accounts[0]
    })
  
    router.push(`/campaigns/${address}/requests`)
  } catch (error) {
    setMessage(error.message)
  }
  setLoading(false)
  console.log(desc, value, recipient)
  setValue("")
  setDesc("")
  setRecipient("")
  }

  return (
    <Layout>
    <h3>Create a Request</h3>
    <Form onSubmit = {onSubmit} error = {!!message}>
            <Form.Field>
                <label>Description</label>
                <Input value={desc} onChange={(e) => setDesc(e.target.value)} />
            </Form.Field>
            <Form.Field>
                <label>Value</label>
                <Input label='ether' labelPosition='right' value={value} onChange={(e) => setValue(e.target.value)} />
            </Form.Field>
            <Form.Field>
                <label>Recipient</label>
                <Input  value={recipient} onChange={(e) => setRecipient(e.target.value)} />
            </Form.Field>
            <Message error header="Oops!" content={message} />
            <Button primary loading = {loading}>Create</Button>
        </Form>
    </Layout>
  )
}

NewReq.getInitialProps = async (props) => {
  const address = props.query.address;

  return {
    address
  };
};

export default NewReq