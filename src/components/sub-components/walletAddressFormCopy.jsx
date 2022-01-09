
import React, {useEffect, useState} from 'react';

const INITIAL_STATE = {
    firstWalletAddress: '',
    secondWalletAddress: '',
    firstWalletData: [],
    secondWalletData: [],
};

const WalletAddressForm = () => {

    const[wallets, setWallets] = useState(INITIAL_STATE) ;

    useEffect(() => {
        // return () => {
        //     cleanup
        // }
    }, [wallets]);

    const handleChange = (e) => {
        const {name, value} = e.target;
        setWallets (INITIAL_STATE => ({
            ...INITIAL_STATE,
            [name]: value})
            // []
        );
        // setWallets ({...INITIAL_STATE,
        //     secondWalletAddress: e.target.value});
        console.log(wallets);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log('Submit Executed');
        try {
            
        } catch (error) {
            console.log(`Error with API ${error}`);
        };
    };
    
    return <>
     This is Wallet Form
     <div>
            <h3 className='container'>
                This app compares two wallet and tells you if they've had any transactions in at least the past 1k transactions. If so, it displays the results below
            </h3>
        </div>
        <div className='form-group fg--search'>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    className='input'
                    name='firstWalletAddress'
                    placeholder='type first address'
                    value={wallets.firstWalletAddress.toLowerCase()} 
                   // event listener
                    onChange={handleChange} 
                    //onChange={(e)=>handleChange()} same as above but more complex
                    // event emitter
                    required
                    />

                <input
                    type='text'
                    className='input'
                    name='secondWalletAddress'
                    placeholder='type second address'
                    value={wallets.secondWalletAddress.toLowerCase()}
                    onChange={handleChange}
                    required
                    />
                <button 
                    type='submit' 
                    className= 'btn-primary rounded form-button' 
                    id='btn-submit'
                    >
                    Submit
                </button>

            </form>
        </div>
    </>;
}
 
export default WalletAddressForm;




//Old Code
// import React, {useEffect, useState} from 'react';
// import { useDispatch, useSellector} from 'react-redux';
// import {submit} from '../../store/actions/walletAction';
// import { getData } from '../utils/getData';
// import { findWallet } from '../utils/duplicate';
// import Wallets from './wallets';

// const INITIAL_STATE = {
//     firstWallet: '',
//     secondWallet: '',
//     firstWalletData: [],
//     secondWalletData: []
// };

// const WalletAddressForm = () => {
    
//     const [wallets, setWallets] = useState(INITIAL_STATE);
//     // const firstWalletTransactions = useSellector(state => state.walletData.firstWalletTransactions);
//     const dispatch = useDispatch(); //setting the global state

//     useEffect(() => {
//         // return () => {
//         //     cleanup
//         // }
//         console.log(wallets.firstWallet);
//     }, [wallets.firstWallet]);

//     const handleChange = (e) => {
//         // onChange = e.target 
//         const { key, value } = e.target;
//         setWallets(INITIAL_STATE => ({...INITIAL_STATE, [key]: value})); 
//         // Or it can written like this
//         // setWallets(INITIAL_STATE => ({
//             //...INITIAL_STATE, 
//             //[key]: value
//         //}));
//         //spread operator resulting in a key value pair
//         // [firstWallet]: 0x340d693ed55d7ba167d184ea76ea2fd092a35bdc 
//     };

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             // make API call for data
//             const _firstWalletData = await getData(wallets.firstWallet);
//             const _secondWalletData = await getData(wallets.secondWallet);
//             const firstWalletTransactions = findWallet(wallets.secondWallet, _firstWalletData);
//             const secondWalletTransactions = findWallet(wallets.firstWallet, _secondWalletData);
//             dispatch(submit(1, wallets.firstWallet, _firstWalletData.result, firstWalletTransactions))
//             console.log('firstWallet result ran');
//             console.log(' ');
//             dispatch(submit(2, wallets.secondWallet, _secondWalletData.result, secondWalletTransactions))
//             console.log('secondWallet result ran');
//             console.log(' ');
//             //reset to initial state
//             setWallets(INITIAL_STATE);
//             alert('Form Submitted');
//             // alert form submitted 
//         } catch (error) {
//             alert(`Error with form ${error}`);
//             setWallets(INITIAL_STATE); // this is going to erase the form
//         }

//     };


//     return <>
//         <h3 className='container'>
//         This app compares two wallet and tells you if they've had any transactions in at least the past 1k transactions. If so, it displays the results below
//         </h3>

//         <div className='form-group fg--search'>
//             <form onSubmit={handleSubmit}>
//                 <input className='input' type='text' placeholder='enter 1st wallet address'/>
//                 <input className='input' type='text' placeholder='enter 2nd wallet address'/>
//                 <button type='submit' className='btn-primary rounded form-button' id='btn-submit'>
//                     Submit
//                 </button>
//             </form>
//         </div>



//         {/* <Wallets/> */}
//     </>;
// }
 
// export default WalletAddressForm;