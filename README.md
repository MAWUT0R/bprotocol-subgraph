### What is B.Protocol
[B.Protocol](https://app.bprotocol.org/) is a multi-chain user-based backstop liquidity protocol. It aims to make lending platforms more capital efficient and stable by handling liquidations in scale, using its Backstop Automated Market Maker (B.AMM) novel design. 
B.Protocol is currently live over:
- Liquity Protocol (Ethereum mainnet)
- Hundred Finance (Arbitrum, Fantom, Polygon)
- Vesta Finance (Arbitrum)
- Fuse (Ethereum mainnet, Arbitrum - coming soon)

### The Graph RFPs
[The Graph](https://thegraph.com/explorer) is an indexing network that is composed of open-source APIs called subgraphs. Subgraphs are built by thousands of developers around the world, with over 12K deployed in the lifetime of The Graph's hosted service. 

Retrieving on-chain data is challenging, and centralized solutions require redundant developer work, don't always have the data you're looking for and can be expensive to maintain.Subgraphs are GraphQL APIs written in Typescript that map to smart contracts, allowing front-end applications (dapps) to easily query data. Each subgraph is unique and requires understanding of the underlying smart contracts and chain. 

The Graph community is seeking a **B.Protocol Subgraph** to be built and open-sourced for the Web3 ecosystem.

### Contracts Being Indexed
- BAMM ~ [0x00FF66AB8699AAfa050EE5EF5041D1503aa0849a](https://etherscan.io/address/0x00FF66AB8699AAfa050EE5EF5041D1503aa0849a)
- PBAMM ~ [0x54bC9113f1f55cdBDf221daf798dc73614f6D972](https://etherscan.io/address/0x54bC9113f1f55cdBDf221daf798dc73614f6D972)
- BAMMChickenBonds ~ [0x896d8a30C32eAd64f2e1195C2C8E0932Be7Dc20B](https://etherscan.io/address/0x896d8a30C32eAd64f2e1195C2C8E0932Be7Dc20B)

### RFP Requirements
- [x] Proposal to design and build a subgraph schema and deploy the subgraph:
- [ ] Design the manifest, schema and mapping file and receive feedback from community or potential users on the mappings and the subgraph's usefulness
- [ ] Develop subgraph and conduct testing, follow resourcing below for best practices on subgraph development including assessing splitting the subgraph into multiple
- [ ] Conduct user interviews or feedback from potential integrators (eg. dapps)
- [ ] Ensure the subgraph is complete, accurate and complex enough to be used by high-quality dapps in the Web3 ecosystem
- [ ] Must be open sourced upon completion

### Deliverables
- [ ] Designed and built subgraph schema and manifest and deployed subgraph on The Graph's hosted service
- [ ] Publicize subgraph on the [Graph Explorer](https://thegraph.com/explorer), subgraph open sourced
- [ ] Documentation or tips for the subgraph to support integrators
- [ ] Documentation or tips for Indexers to support syncing the subgraph
- [ ] Optional: blog post or social sharing about the new subgraph to encourage integrators (The Graph Foundation will also support to circulate the new subgraph with the developer community)