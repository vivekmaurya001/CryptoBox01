// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract NFT is ERC721URIStorage {
    uint public tokenCount;

    // in this we are setting the name and symbol of nft which will give 2 fxns name and symbol of nft
    constructor() ERC721("DApp NFT", "DAPP") {}

    function mint(string memory _tokenURI) external returns (uint) {
        //when any callr mints the nft it has to pay some gas fee
        tokenCount++;
        _safeMint(msg.sender, tokenCount);
        _setTokenURI(tokenCount, _tokenURI);
        return (tokenCount);
    }
}
