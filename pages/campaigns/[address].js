import React, {useState} from "react";
import { Card, Grid, Button } from "semantic-ui-react";
import Layout from "../../components/layout";
import Campaign from "../../ethereum/campaign";
import web3 from "../../ethereum/web3";
import ContributeForm from "./../../components/ContributeForm";
import Link from "next/link";

export default function CampaignShow({
  address,
  minimumContribution,
  balance,
  requestsCount,
  approversCount,
  manager,
}) {


  const items = [
    {
      header: manager,
      meta: "Address of Manager",
      description:
        "Manager created this campaign and can create requests to withdraw money",
      style: { overflowWrap: "break-word" },
    },
    {
      header: minimumContribution,
      meta: "Minimum Contribution (Wei)",
      description: `You must contribute at least ${minimumContribution} wei`,
      style: { overflowWrap: "break-word" },
    },
    {
      header: requestsCount,
      meta: "Number of Requets",
      description:
        "A request tries to withdraw money from the current current contract. Requests must be approved by approvers ",
      style: { overflowWrap: "break-word" },
    },
    {
      header: approversCount,
      meta: "Number of Approvers",
      description: "Number of people already donated for this req",
      style: { overflowWrap: "break-word" },
    },
    {
      header: web3.utils.fromWei(balance, "ether"),
      meta: "Campaign Balance (ether)",
      description: "Balance in Ether",
      style: { overflowWrap: "break-word" },
    },
  ];

  return (
    <Layout>
      <div>
        <h3>Campaign Show</h3>
        <Grid>
        <Grid.Row>
        <Grid.Column width={10}>
        <Card.Group items={items} />
        </Grid.Column>
<Grid.Column width={6}>
        <ContributeForm address = {address} />
</Grid.Column>
        </Grid.Row>
        <Grid.Row>
        <Grid.Column>
          <Link href={`/campaigns/${address}/requests`}>
          <a>
            <Button primary>View Requests</Button>
          </a>
          </Link>
        </Grid.Column>
        </Grid.Row>
        </Grid>
      </div>
    </Layout>
  );
}

CampaignShow.getInitialProps = async (props) => {
  const address = props.query.address;
  const campaign = Campaign(address);
  const summary = await campaign.methods.getSummary().call();

  return {
    address: props.query.address,
    minimumContribution: summary[0],
    balance: summary[1],
    requestsCount: summary[2],
    approversCount: summary[3],
    manager: summary[4],
  };
};
