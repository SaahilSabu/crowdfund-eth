import React, { Component } from "react";
import Layout from "../../components/Layout";
import { Form, Button, Input, Message } from "semantic-ui-react";
import factory from "../../ethereum/factory";
import web3 from "../../ethereum/web3";
import {Router} from "../../routes.js";

class CampaignNew extends Component {
  state = {
    minimumContribution: "",
    errorMsg: "",
    spinner: "",
  };

  onSubmit = async (e) => {
    e.preventDefault();
    try {
      this.setState({ spinner: true, errorMsg: "" });
      const accounts = await web3.eth.getAccounts();
      await factory.methods
        .createCampaign(this.state.minimumContribution)
        .send({
          from: accounts[0],
        });

Router.pushRoute("/")

    } catch (error) {
      this.setState({ errorMsg: error.message });
    }
    this.setState({ spinner: false });
  };

  render() {
    return (
      <Layout>
        <h1> New Campaign </h1>
        <Form onSubmit={this.onSubmit} error={!!this.state.errorMsg}>
          <Form.Field>
            <label> Minimum Contribution </label>
            <Input
              label="Wei"
              labelPosition="right"
              value={this.state.minimumContribution}
              onChange={(e) =>
                this.setState({ minimumContribution: e.target.value })
              }
            />
          </Form.Field>
          <Message error header="Oops!" content={this.state.errorMsg} />
          <Button primary loading={this.state.spinner}>
            Create!
          </Button>
        </Form>
      </Layout>
    );
  }
}
export default CampaignNew;
