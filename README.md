![coverberamarketdemo](https://user-images.githubusercontent.com/45092543/212021434-a68e5585-e405-4e3f-83c5-d6012777291b.jpeg)

Features:

Instant buy with aggregated liquidity
Optional referrer fee
Listing on all major marketplaces
Customizable UI with desktop and mobile support
Automatic handling of transaction approval steps
Balance checks and error handling
Suspicious token warnings


<h3>🄶🄾🄾🄳 🅅🄸🄱🄴🅂 🄾🄷🄼🄻🅈</h3>
  <p align="left">
An open source NFT marketplace built on Reservoir, Thirdweb, and Manifold.

<!-- ABOUT THE PROJECT -->
## About The Project


Reservoir Market is an open source marketplace that enables communities to easily launch their own NFT marketplace, accessing instant liquidity aggregated from other major marketplaces. Communities are given full control over their marketplace from designing their look and feel to setting their own marketplace fees.

<p align="right">(<a href="#top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started (Self-Hosted)

### Prerequisites
1. Install [Node.js and NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
2. Install [Yarn](https://classic.yarnpkg.com/en/docs/install)
3. Request free [Reservoir API key](https://api.reservoir.tools/#/0.%20Auth/postApikeys)

### Built With

* [ReservoirKit](https://docs.reservoir.tools/docs/reservoir-kit)
* [Reservoir Protocol and API](https://reservoirprotocol.github.io/)
* [Next.js](https://nextjs.org/)
* [React.js](https://reactjs.org/)
* [Ethers.io](https://ethers.io/)
* [WAGMI](https://wagmi.sh/)
* [Tailwind CSS](https://tailwindcss.com/)

### Installation

Fork this repo and follow these instructions to install dependancies.

With yarn:

```bash
$ yarn install
```

With NPM:

```bash
$ npm install
```

### Configuration
Reservoir Market is built to be fully configurable using environment variables. To preview your configuration locally you can copy the values you want to use from  `env.development`  or  `env.production`  into a new file called  `.env.local`.

Note: Environment variables can also be added during deployment via deployment platforms like [vercel](https://vercel.com/).

**Required Environment Variables**
| Environment Variable           | Required | Description                                                                         | Example              |
|--------------------------------|----------|-------------------------------------------------------------------------------------|---------------------|
| NEXT_PUBLIC_RESERVOIR_API_BASE | `true`   | The Reservoir API base URL. Available on Mainnet, Rinkeby, Goerli, and Optimism.                       | https://api-rinkeby.reservoir.tools/ https://api.reservoir.tools/ |
| NEXT_PUBLIC_CHAIN_ID           | `true`   | The Ethereum network to be used. 1 for Etherem Mainnet and 4 for Rinkeby Testnet, etc.   | 1 4                                                               |
| NEXT_PUBLIC_PROXY_API_BASE     | `true`   | The proxy API used to pass the Reservoir API key without exposing it to the client. | /api/reservoir                                                    |
| NEXT_PUBLIC_RESERVOIR_API_KEY              | `true`   | Reservoir API key provided by the Reservoir Protocol. [Get your own API key](https://api.reservoir.tools/#/0.%20Auth/postApikeys).         | 123e4567-e89b-12d3-a456-426614174000                              |
| NEXT_PUBLIC_ALCHEMY_ID              | `true`   | Alchemy API key required for buying items on mobile. [Get your own API key here](https://docs.alchemy.com/alchemy/introduction/getting-started#1.create-an-alchemy-key).         | 123e4567-e89b-12d3-a456-426614174000                              |

Please visit [our docs](https://docs.reservoir.tools/docs/marketplace-getting-started#configuration) to view all supported environment variables.

### Run the App

Once you have your setup ready, run:

With yarn:

    $ yarn dev

With npm:

    $ npm run dev

### Deploy with Vercel

This is a Next.js app that can be easily deployed using  [Vercel](https://vercel.com/). For  more information on how to deploy your Github repository with Vercel visit their [docs](https://vercel.com/docs/concepts/projects/overview).

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- Contributing -->
## Contributing

If you'd like to contribute please follow the [guidelines](https://github.com/reservoirprotocol/marketplace/blob/main/CONTRIBUTING.md).

<!-- CONTACT -->
## Contact

Twitter: [@reservoir0x](https://twitter.com/reservoir0x)
Discord: [Reservoir](https://discord.gg/j5K9fESNwh)
Project Link: [Reservoir](https://reservoirprotocol.github.io/)

<p align="right">(<a href="#top">back to top</a>)</p>

<!-- OHMly -->
## Good Vibes

Custom Currency Claim Conditions
Set up your claim conditions so that holders of your NFT collection can purchase in a custom token.

Setup
To run the project, first clone this repository:

npx thirdweb@latest create --template custom-currency-claim-conditions
Modify the get-addresses.mjs file with your collectionAddress, tokenAddress and tokenAmount.

When you're ready, run the script with the following command:

node scripts/get-addresses.mjs
This will generate a new file called nfts.csv containing your snapshot, which you can upload to the dashboard!

How It Works
In the script we are first getting the erc 721 collection:

const sdk = new ThirdwebSDK("goerli");
const collectionAddress = "0x08d4CC2968cB82153Bb70229fDb40c78fDF825e8";

const contract = await sdk.getContract(collectionAddress);
Then, we are getting all the nfts:

const nfts = await contract?.erc721.getAll();
Finally, we are creating a csv file with all owners with address,maxClaimable,price,currencyAddress and filtering it:

const csv = nfts.reduce((acc, nft) => {
  const address = nft.owner;
  const quantity = acc[address] ? acc[address] + 1 : 1;
  return { ...acc, [address]: quantity };
}, {});

// filtering the addressees
const filteredCsv = Object.keys(csv).reduce((acc, key) => {
  if (key !== "0x0000000000000000000000000000000000000000") {
    return {
      ...acc,
      [key]: csv[key],
    };
  }
  return acc;
}, {});

// writing the addresses to a csv file
const csvString =
  "address,maxClaimable,price,currencyAddress\r" +
  Object.entries(filteredCsv)
    .map(
      ([address, quantity]) =>
        `${address},${quantity},${tokenAmount},${tokenAddress}`
    )
    .join("\r");

fs.writeFileSync(path.join(path.dirname("."), "snapshot.csv"), csvString);

<!-- OHMly -->
## Multi Wrap

Getting the Multiwrap contract
const multiwrap = useMultiwrap(multiwrapAddress);
Giving permission to your multiwrap contract to move your tokens
// Get the contracts
const erc20Contract = sdk.getToken(erc20TokenAddress);
const erc721Contract = sdk.getNFTCollection(erc721TokenAddress);
const erc1155Contract = sdk.getEdition(erc1155TokenAddress);

// Give permissions to the Multiwrap contract
await tokenContract.setAllowance(multiwrapAddress, 20);
await erc721Contract.setApprovalForToken(multiwrapAddress, tokenId);
await erc1155Contract.setApprovalForAll(multiwrapAddress, true);
Wrapping Tokens
The SDK takes in a structure containing the tokens to be wrapped. This array is further grouped into the individual types of tokens.

const tokensToWrap = {
  erc20Tokens: [
    {
      contractAddress: "0x.....",
      quantity: 20,
    },
  ],
  erc721Tokens: [
    {
      contractAddress: "0x.....",
      tokenId: "0",
    },
  ],
  erc1155Tokens: [
    {
      contractAddress: "0x.....",
      tokenId: "0",
      quantity: 1,
    },
  ],
};
We then pass these tokens to the contracts wrap function along with the NFT Metadata for our wrapped tokens.

const nftMetadata = {
  name: "Wrapped bundle",
  description: "This is a wrapped bundle of tokens and NFTs",
  image: "ipfs://...",
};
const tx = await multiwrapContract.wrap(tokensTowrap, nftMetadata);

const receipt = tx.receipt(); // the transaction receipt
const wrappedTokenId = tx.id; // the id of the wrapped token bundle
Unwrapping Tokens
To unwrap tokens, we call .unwrap. It will return the transaction receipt.

await multiwrapContract.unwrap(wrappedTokenId);
Get wrapped Contents
Get the contents of a wrapped token bundle. Will return a similar structure than the one passed in to the wrap() call.

const contents = await multiwrapContract.getWrappedContents(wrappedTokenId);
console.log(contents.erc20Tokens);
console.log(contents.erc721Tokens);
console.log(contents.erc1155Tokens);