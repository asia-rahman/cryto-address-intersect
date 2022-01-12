
import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const Wallets = () => {
    const firstWalletData = useSelector(state => state.walletData.firstWalletData);
    const firstWalletTransactions = useSelector(state => state.walletData.firstWalletTransactions);
    const secondWalletData= useSelector(state => state.walletData.secondWalletData);
    const secondWalletTransactions = useSelector(state => state.walletData.secondWalletTransactions);

    useEffect(() => {
        // return () => {
        //     cleanup
        // }
    }, [ firstWalletData, secondWalletData,firstWalletTransactions, secondWalletTransactions]);
        console.log(firstWalletTransactions);
        console.log(secondWalletTransactions);
        console.log(firstWalletData);
    return <>
        {/* <h3>This is the Wallets</h3> */}
        {/* {
            firstWalletTransactions && firstWalletTransactions ?
            <div> 
                <h4>
                    The first wallet has had <strong> {firstWalletTransactions.length}</strong> transactions with the second wallet over the past {firstWalletData.length} transactions.
                </h4>
                <h4>
                    <a 
                        href={`https://etherscan.io/tx/${firstWalletTransactions}`} 
                        target={'_blank'} 
                        rel='noreferrer'
                        > 
                        https://etherscan.io/tx/${firstWalletTransactions} 
                    </a>
                </h4>
                
            </div> :
            <h5>No First Wallet Transactions Found</h5>
        } */}
        {
            firstWalletTransactions && firstWalletTransactions ?
            <div>
                <h4>
                    The first wallet has had <strong>{firstWalletTransactions.length}</strong> transactions with the second wallet over the past {firstWalletData.length} transactions
                </h4>
                <h4>
                    <a 
                        href={`https://etherscan.io/tx/${firstWalletTransactions}`}
                        target={'_blank'} rel='noreferrer'
                        > 
                        https://etherscan.io/tx/${firstWalletTransactions}
                    </a>
                </h4>
            </div> :

            <h5>No First Wallet Correlated Transactions Found</h5>
        }
        {
            secondWalletTransactions && secondWalletTransactions ?
            <div> 
                <h4>
                    The second wallet has had <strong> {secondWalletTransactions.length}</strong> transactions with the first wallet over the past {secondWalletData.length} transactions.
                </h4>
                <h4>
                    <a 
                        href={`https://etherscan.io/tx/${secondWalletTransactions}`} 
                        target={'_blank'} 
                        rel='noreferrer'
                        > 
                        https://etherscan.io/tx/${secondWalletTransactions} 
                    </a>
                </h4>
                
            </div> :
            <h5>No Second Wallet Transactions Found</h5>
        }
    </>;
}
 
export default Wallets;