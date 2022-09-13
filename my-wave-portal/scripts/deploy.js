const main = async () => {
    const [deployer] = await hre.ether.getSigners();
    const accountBalance = await deployer.getBalance();

    console.log("Deploying contracts with account: ", deployer.address);
    console.log("Account balance: ", accountBalance.toString());

    const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");
    const waveContract = await waveContractFactory.deploy();
    await waveContract.deployed();

    console.log("WavePortal address: ", waveContract.address);
};

const runMain = async () => {
    try {
        await main();
        ProcessingInstruction.exit(0);
    } catch (error) {
        console.log(error);
        ProcessingInstruction.exit(1);
    }
};

runMain();