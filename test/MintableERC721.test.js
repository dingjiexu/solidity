// const MintableERC721 = artifacts.require("MintabLeERC721");

// contract("MintabLeERC721" , accounts => {
//     it("MintNFT",async() => {
//     const instance = await MintableERC721.deployed();
//     const name = await instance.name.call();
//     assert.equal (name,"Mintable NFT");
//     })
// })


const MintableERC721 = artifacts.require("MintableERC721");
Contract("MintableERC721",accounts =>{
    it("MintNFT",async()=>{
        const instance = await MintableERC721.deployed();

        const name = await instance.name.call();

        assert.equal(name,"Miantable NFT");

        let receivers =[
            accounts[1],
            accounts[1],
            accounts[2],
            accounts[3]
        ]

        let uris =[
            "ipfs://QmdHerrPe34cCBriKgZkbH9i8D6WqbcDfVgeTMxsYpgFog",
            "ipfs://QmdHerrPe34cCBriKgZkbH9i8D6WqbcDfVgeTMxsYpgFog",
            "ipfs://QmdHerrPe34cCBriKgZkbH9i8D6WqbcDfVgeTMxsYpgFog",
            "ipfs://QmdHerrPe34cCBriKgZkbH9i8D6WqbcDfVgeTMxsYpgFog"
        ]

        await instance.mint(receivers, uris);

        const account_one_balance = await instance.balance0f .call(accounts[1]);
        assert.equal (account_one_balance. toNumber(),2);
        const owner_of_two = await instance.ownerOf .call(2);
        assert. equal (owner_of_two, accounts[2]);
        const nextTokenId = await instance._CUR_TOKENID_.callO;
        assert.equal(nextTokenId. toNumber(), 4);

    }

    )
}

)
