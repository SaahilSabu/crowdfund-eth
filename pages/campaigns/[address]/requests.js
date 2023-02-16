import React from "react";
import Layout from "../../../components/Layout";
import { Form, Input, Message, Button, Table } from "semantic-ui-react";
import Link from "next/link";
import Campaign from "../../../ethereum/campaign";
import RequestRow from "../../../components/RequestRow"
const RequestList = ({ address, requests, requestCount, approversCount }) => {
  const { Header, Row, HeaderCell, Body } = Table;

  return (
    <Layout>
      <h3>{requestCount} Pending Requests</h3>
      <Link href={`/campaigns/${address}/requests/new`}>
        <a>
          <Button floated='right' style={{marginBottom: "10px"}} primary>Add Request</Button>
        </a>
      </Link>
      <Table>
        <Header>
          <Row>
            <HeaderCell>ID</HeaderCell>
            <HeaderCell>Description</HeaderCell>
            <HeaderCell>Amount</HeaderCell>
            <HeaderCell>Recipient</HeaderCell>
            <HeaderCell>Approval Count</HeaderCell>
            <HeaderCell>Approve</HeaderCell>
            <HeaderCell>Finalize</HeaderCell>
          </Row>
        </Header>
        <Body>
          {requests.map((request, index) => {
    return (
      <RequestRow request = {request} key = {index} address= {address} id = {index} approversCount = {approversCount} />
      );})}
        </Body>
      </Table>
    </Layout>
  );
};

RequestList.getInitialProps = async (props) => {
  const { address } = props.query;
  const campaign = Campaign(address);
const   approversCount = await campaign.methods.approversCount().call()
  const requestCount = await campaign.methods.getRequestsCount().call();

  const requests = await Promise.all(
    Array(parseInt(requestCount))
      .fill()
      .map((element, index) => {
        return campaign.methods.requests(index).call();
      })
  );
  return { address, requests, requestCount, approversCount };
};

export default RequestList;
