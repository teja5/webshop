import { useState } from "react";
import { useHistory } from "react-router";

const Transaction = () => {

    let history = useHistory();

    const [customer, setCustomer] = useState('');
    const [date, setDate] = useState('');
    const [billAmount, setBillAmount] = useState('');
    const [receivedAmount, setReceivedAmount] = useState('');
    const [notes, setNotes] = useState('');

    const onDateChangeListner = event => {
        setDate(event.target.value);
    }
    const onBillAmountChangeListner = event => {
        setBillAmount(event.target.value);
    }
    const onReceivedAmountChangeListner = event => {
        setReceivedAmount(event.target.value);
    }
    const onNotesChangeListner = event => {
        setNotes(event.target.value);
    }

    const onSubmitForm = event => {
        event.preventDefault();
        history.goBack();

        // Router.History.back();
        //TODO Add data to theserver
    }

    return (<div>
        <form onSubmit={onSubmitForm}>
            <h1>Add Transaction</h1>
            <p>Customer:</p>
            <input
                type='text'
                name='customerName'
                readOnly
            />
            <br></br>
            <p>Enter Date:</p>
            <input
                onChange={onDateChangeListner}
                type='text'
                name='date'
            />

            <br></br>
            <p>Enter BillAmount:</p>
            <input
                onChange={onBillAmountChangeListner}
                type='text'
                name='date'
            />

            <br></br>
            <p>Enter ReceivedAmount:</p>
            <input
                onChange={onReceivedAmountChangeListner}
                type='text'
                name='date'
            />
            <br></br>
            <p>Enter Notes:</p>
            <input
                onChange={onNotesChangeListner}
                type='text'
                name='date'
            />
            <br />
            <br />
            <button type='submit' > Add Transaction</button>
        </form>
    </div>);
}
export default Transaction;