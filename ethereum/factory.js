import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
  JSON.parse(CampaignFactory.interface),
  "0x6578aeC3A11fbcFDC3C21B64CbD15487AcA3ac50"
);

export default instance;
