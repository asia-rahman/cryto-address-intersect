
import React, {useEffect, useState} from 'react';
import { useDispatch } from 'react-redux';
import { submit } from '../../store/actions/walletAction';
// import Wallets from './wallets';
import { findWallet } from '../utils/duplicate';
import { getData } from '../utils/getData';

const INITIAL_STATE = {
    // id: '',
    firstWalletAddress: '',
    secondWalletAddress: '',
    firstWalletData: [],
    secondWalletData: []
};
 
const WalletAddressForm = () => {
    const [wallets, setWallets] = useState(INITIAL_STATE); 
    const dispatch = useDispatch();

    useEffect(() => {
        // return () => {
        //     cleanup
        // }
    },[wallets]);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setWallets(INITIAL_STATE=> ({...INITIAL_STATE,
            [name]: value }));
        //Ask Jose about line 22 setWallets
        //Ask Jose [name] - why is it in square brasses 
            console.log(wallets);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const{firstWalletAddress, secondWalletAddress} = wallets;
            // make api calls
            const _firstWalletData = await getData(firstWalletAddress);
            console.log("_firstWalletData", _firstWalletData);
            setWallets({...wallets, firstWalletData: _firstWalletData})
            const _secondWalletData = await getData(secondWalletAddress);
            console.log("_secondWalletData", _secondWalletData);
            setWallets({...wallets, secondWalletData: _secondWalletData})
            //get transaction matches
            const firstWalletTransactions = findWallet(secondWalletAddress, _firstWalletData);
            console.log("firstWalletTransactions", firstWalletTransactions);
            const secondWalletTransactions = findWallet(firstWalletAddress, _secondWalletData);
            console.log("secondWalletTransactions", secondWalletTransactions);
            dispatch(submit(1, firstWalletAddress, _firstWalletData.result, firstWalletTransactions));
            dispatch(submit(2, secondWalletAddress, _secondWalletData.result, secondWalletTransactions));
            alert('Form Submitted');

            //reset to INITIAL_STATE
            setWallets(INITIAL_STATE);

        } catch (error) {
            alert(`error was found ${error}`);
            setWallets(INITIAL_STATE)
        }

    };
    
    return <>
    <div>
        <h3 className='container'>
        This app compares two wallet and tells you if they've had any transactions in at least the past 1k transactions. If so, it displays the results below

        </h3>
    </div>

    <div className='form-group fg--search'>
        <form onSubmit={handleSubmit}>
                <input 
                id='1'
                className= 'input'
                name= 'firstWalletAddress'
                type='text'
                value={wallets.firstWalletAddress.toLowerCase()} 
                onChange={(handleChange)}
                placeholder='enter first address'
                required
                //These properties are apart of the e.target object
                />

                <input 
                id=''
                className= 'input'
                name='secondWalletAddress'
                type='text'
                value={wallets.secondWalletAddress.toLowerCase()} 
                onChange={(handleChange)}
                placeholder='enter second address'
                required
                />
                <button
                type= "submit"
                className= 'btn-primary rounded form-button'
                id='btn-submit'
                >
                    Submit
                </button>
        </form>
    </div>
    {/* <Wallets/> */}
</>;
};
 
export default WalletAddressForm;