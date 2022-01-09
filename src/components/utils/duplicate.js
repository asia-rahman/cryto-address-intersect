
export const findWallet = (walletAddress, walletData) => {
    console.log(walletData);
    let walletDataCopy = walletData.result, transactions = [], count = 0;
    for (let i = 0; i < walletDataCopy.length; i++) {
        if(walletAddress === walletDataCopy[i].to) {
            transactions.push(walletDataCopy[i].hash)
            // pushing the hash for duplicate addresses from walletDataCopy.result to the transactions array
            count++;
        }
    };
    console.log(`These wallets have interacted ${count} time over the last ${walletDataCopy.length} transactions.`);
}