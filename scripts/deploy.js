const hre = require("hardhat");

async function main() {
    const Twitter = await ethers.deployContract("Twitter");
    await Twitter.waitForDeployment();
    console.log("Deploying....");
    console.log(`Deployed contract to ${await Twitter.getAddress() }`)
}

main().catch((error) => {
  console.log(error);
  process.exitCode = 1;
});


// contract deployed to this getAddress
// 0x14aaEcDFB8fF26Af5F786E64861bd48aa29a34D9


// Afrin deployed -> 0xD2661A7f6c4f807F7A9F672a02769cfC124167F4