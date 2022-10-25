import { useState } from "react";
import { useHistory } from "react-router";

const Transaction = () => {

    // "transaction_id": 0,
    // "amount":"90",
    // "customer":{"customer_id":1,"name":"teja"},
    // "type":1,
    // "notes":"notes",
    // "created_date":"teja",
    // "modified_date":"teja",
    // "active":true

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


        addTransaction();
        // event.preventDefault();
        // history.goBack();

        // Router.History.back();
        //TODO Add data to theserver
    }

    var requetJson = {
        "transaction_id": 0,
        "amount": billAmount,
        "customer": { "customer_id": 1, "name": "teja" },
        "type": 1,
        "notes": notes,
        "created_date": date,
        // "modified_date": modified_date,
        "active": true
    }

    async function addTransaction() {

        console.log(requetJson.customer_id)

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },

            body: JSON.stringify(requetJson)
            // body: JSON.stringify({
            //     village_id: 0,
            //     name: name
            // })
        }

        const response = await fetch('http://184.72.6.13:8080/shop/addTransaction', requestOptions);
        if (response.ok) {
            const data = await response.json();
            console.log(data)
            // await (data) => {
            // setName(JSON.parse(data.village).village_id + " " + JSON.parse(data.village).name + "  " + data.status)
            // };    
            // dispatch(villageActions.addVillage(name))
            // setName('');
        } else {
            console.log('Something went wrong')
        }
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