import { HardhatUserConfig } from "hardhat/config";
import "dotenv/config";

import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-chai-matchers";

const infuraKey = process.env.INFURA_API_KEY;
const privateKey = process.env.PRIVATE_KEY?process.env.PRIVATE_KEY:"";
const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.24",
    settings: {
      optimizer: {
        enabled: true,
        runs: 100,
      },
      viaIR: true,
    },
  },
  networks: {
    sepolia: {
      url: `https://sepolia.infura.io/v3/${infuraKey}`,
      accounts: [privateKey],
    },
    mainnet: {
      url: `https://mainnet.infura.io/v3/${infuraKey}`,
      accounts: [privateKey],
    },
    bnb_testnet: {
      url: `https://data-seed-prebsc-1-s1.binance.org:8545`,
      accounts: [privateKey],
    },
    bnb_mainnet:{
      url: "https://bsc-dataseed.binance.org/",
      accounts:[privateKey],
    },
    base_sepolia:{
      url: "https://base-sepolia.blockpi.network/v1/rpc/public",
      accounts: [privateKey],
    },
    holesky_testnet:{
      url: "https://ethereum-holesky-rpc.publicnode.com",
      accounts: [privateKey],
    },
    hardhat: {
      chainId: 31337,
    },
  },
  etherscan: {
    apiKey: {
      baseSepolia: "1SZX9N4CQNAX489BHPEW27C2FG5PPP4MB1", // etherscan: ED2NED96C214Y891MR98PZZ1Q45VTFYZRV BSC: 1UME8V5UP4AZHYDF7RWC78GTIXXRPJHTQY Base: 1SZX9N4CQNAX489BHPEW27C2FG5PPP4MB1
      holesky: "ED2NED96C214Y891MR98PZZ1Q45VTFYZRV",
    },
    // customChains: [
    //   {
    //     network: "base_sepolia",
    //     chainId: 84532,
    //     urls: {
    //       apiURL: "https://api-sepolia.etherscan.io/api/",
    //       browserURL: "https://sepolia.basescan.org/"
    //     }
    //   }
    // ]
  },
  gasReporter: {
    enabled: true,
  },
  sourcify: {
    enabled: true,
  },
};

export default config;
