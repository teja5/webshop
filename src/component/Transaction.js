import { useState } from "react";
import { useHistory } from "react-router";
import { ReactSearchAutocomplete } from "react-search-autocomplete";

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

    const [customers, setCustomers] = useState([]);

    const handleOnSelect = (item) => {
        // the item selected
        console.log(item)
        let customerItem = { customer_id: item.customer_id, name: item.name }
        setCustomer(customerItem)
        // console.log(villageItem)
        // console.log(villageItem.village_id + " " + villageItem.name)
    }

    const handleOnSearch = (string, results) => {
        // onSearch will have as the first callback parameter
        // the string searched and for the second the results.
        console.log(string, results)
        // setVillage
    }

    async function getCustomers() {

        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        }
        const response = await fetch('http://184.72.6.13:8080/shop/listCustomer?firstResult=0&max=50', requestOptions);

        if (response.status === 500) {

            // getVillages()
            console.log("List Not Retrieved");

        } else {
            const data = await response.json();
            setCustomers(data.customerList)
            console.log(customers.length)
        }
    }


    const formatResult = (item) => {
        return (
            <>
                <span style={{ display: 'block', textAlign: 'left' }}>id: {item.customer_id}</span>
                <span style={{ display: 'block', textAlign: 'left' }}>name: {item.name}</span>
            </>
        )
    }

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
        "customer": { "customer_id": customer.customer_id, "name": customer.name },
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

    const getCustomersList = () => {
        getCustomers();
    }

    const addTranData = () => {
        addTransaction();
    }

    return (<div>
        <button onClick={getCustomersList}>Get Customers</button>
        <button onClick={addTranData}>Add Customer</button>

        <form onSubmit={onSubmitForm}>
            <h1>Add Transaction</h1>
            <p>Customer:</p>
            <div style={{ width: 400 }}>
                <ReactSearchAutocomplete
                    items={customers}
                    onSearch={handleOnSearch}
                    onSelect={handleOnSelect}
                    autoFocus
                    formatResult={formatResult}
                />
            </div>
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