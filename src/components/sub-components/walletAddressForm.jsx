
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {submit, SUBMIT} from '../../store/actions/walletAction';
import {findWallet} from '../utils/duplicate';
import {getData} from '../utils/getData';

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
            const{firstWalletAddress,secondWalletAddress, firstWalletData, secondWalletData} = wallets //deconstructing the object so that we don't have to use dotted notation
            //make api call for data
            const _firstWalletData = await getData(firstWalletData); //adding an _ 'underscore' to the variable name to show that it's a copy
            const _secondWalletData = await getData(secondWalletData); 
            const firstWalletTransactions = findWallet(secondWalletAddress, _firstWalletData);
            const secondWalletTransactions = findWallet(firstWalletAddress, _secondWalletData);
            dispatch(submit(1, firstWalletAddress, _firstWalletData.result, firstWalletTransactions));
            console.log('firstWalletData Executed');
            console.log('');
            dispatch(submit(1, secondWalletAddress, _secondWalletData.result, secondWalletTransactions));
            console.log('secondWalletData Executed');
            console.log('');
            alert('Form Submitted');
            //reset to initial state
            // setWallets(INITIAL_STATE)
            // console.log(`firstWalletTransactions ${firstWalletTransactions}`);


        } catch (error) {
            alert(`error was found ${error}`);
            // setWallets(INITIAL_STATE)
        }

    };
    
    return <>
    This is Wallet Address Form

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
                Name= 'firstWalletAddress'
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
        </form>
    </div>
</>;
};
 
export default WalletAddressForm;