
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
        {
            firstWalletTransactions.transactions && firstWalletTransactions.transactions ?
            <div>
                <h4>
                    The first wallet has had <strong>{firstWalletTransactions.transactions.length}</strong> transactions with the second wallet over the past {firstWalletData.length} transactions
                </h4>

                  {  
                     firstWalletTransactions.transactions && firstWalletTransactions.transactions.map((hash, index) => { 
                         return <h5 key={index}>
                            <a 
                                href={`https://etherscan.io/tx/${hash}`}
                                target={'_blank'} rel='noreferrer'
                                > 
                                https://etherscan.io/tx/${hash}
                            </a>
                        </h5>
                     })
                    }
            </div> :

            <h5>No First Wallet Correlated Transactions Found</h5>
        }
        {
            secondWalletTransactions.transactions && secondWalletTransactions.transactions ?
            <div> 
                <h4>
                    The second wallet has had <strong> {secondWalletTransactions.transactions.length}</strong> transactions with the first wallet over the past {secondWalletData.length} transactions.
                </h4>
                {  
                     secondWalletTransactions.transactions && secondWalletTransactions.transactions.map((hash, index) => { 
                         return <h5 key={index}>
                            <a 
                                href={`https://etherscan.io/tx/${hash}`}
                                target={'_blank'} rel='noreferrer'
                                > 
                                https://etherscan.io/tx/${hash}
                            </a>
                        </h5>
                     })
                    }
                
            </div> :
            <h5>No Second Wallet Transactions Found</h5>
        }
    </>;
}
 
export default Wallets;