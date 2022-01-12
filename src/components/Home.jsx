
import React, {useEffect} from 'react';
import Wallets from './sub-components/wallets';
import WalletAddressForm from './sub-components/walletAddressForm';

const Home = () => {
    useEffect(() => {
        // return () => {
        //     cleanup
        // }
    });
    
    return <>
    
    <WalletAddressForm/>
    <Wallets/>
    
    </>;
}
 
export default Home;