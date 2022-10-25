import { ReactSearchAutocomplete } from 'react-search-autocomplete'
import { useEffect, useState } from "react";

const Customer = () => {

    // "customer_id": 0,
    // "name":"teja",
    // "village":{"village_id":1,"name":"Jangareddigudem"},
    // "phone":"teja",
    // "alt_phone":"teja",
    // "reference":"teja",
    // "address":"teja",
    // "location":"teja",
    // "active":true

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [altPhone, setaltPhone] = useState('');
    const [reference, setReference] = useState('');
    const [address, setAddress] = useState('');
    const [location, setLocation] = useState('');
    const [village, setVillage] = useState({});


    const [villages, setVillages] = useState([]);

    const handleOnSelect = (item) => {
        // the item selected
        console.log(item)
        let villageItem = { village_id: item.village_id, name: item.name }
        setVillage(villageItem)
        console.log(villageItem)
        console.log(villageItem.village_id + " " + villageItem.name)
    }

    const handleOnSearch = (string, results) => {
        // onSearch will have as the first callback parameter
        // the string searched and for the second the results.
        console.log(string, results)
        // setVillage
    }

    const formatResult = (item) => {
        return (
            <>
                <span style={{ display: 'block', textAlign: 'left' }}>id: {item.village_id}</span>
                <span style={{ display: 'block', textAlign: 'left' }}>name: {item.name}</span>
            </>
        )
    }


    const getVillagesList = () => {
        getVillages();
    }

    const getDara = () => {

        addCustomer();
        // console.log(requetJson)
        // console.log(name + ' ' + village.village_id + ' ' + phone + ' ' + altPhone + ' ' + reference + ' ' + address + ' ' + location)
    }

    async function getVillages() {

        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        }
        const response = await fetch('http://184.72.6.13:8080/shop/listVillage?firstResult=0&max=50', requestOptions);

        if (response.status === 500) {

            // getVillages()
            console.log("List Not Retrieved");

        } else {
            const data = await response.json();
            setVillages(data.villageList)
            console.log(villages.length)
        }
    }

    const onNameChangeListner = event => {
        setName(event.target.value);
    }

    const onPhoneChangeListner = event => {
        setPhone(event.target.value);
    }

    const onAltPhoneChangeListner = event => {
        setaltPhone(event.target.value);
    }

    const onReferenceChangeListner = event => {
        setReference(event.target.value);
    }

    const onAddressChangeListner = event => {
        setAddress(event.target.value);
    }

    const onLocationChangeListner = event => {
        setLocation(event.target.value);
    }

    const onSubmitForm = event => {

        console.log(name + ' ' + village + ' ' + phone + ' ' + altPhone + ' ' + reference + ' ' + address + ' ' + location)
    }


    var requetJson = {
        "customer_id": 0,
        "name": name,
        "village": village,
        "phone": phone,
        "alt_phone": altPhone,
        "reference": reference,
        "address": address,
        "location": location,
        "active": true
    }


    async function addCustomer() {

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
        
        const response = await fetch('http://184.72.6.13:8080/shop/addCustomer', requestOptions);
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



    return (
        <div>

            <button onClick={getVillagesList}>Get Village</button>

            <button onClick={getDara}>Get Data</button>


            <form onSubmit={onSubmitForm}>
                <h1>Add Customer</h1>
                <p>Name:</p>
                <input
                    onChange={onNameChangeListner}
                    type='text'
                    name='username'
                    value={name}
                />
                <br></br>
                <p>Village:</p>
                <div style={{ width: 400 }}>
                    <ReactSearchAutocomplete
                        items={villages}
                        onSearch={handleOnSearch}
                        onSelect={handleOnSelect}
                        autoFocus
                        formatResult={formatResult}
                    />
                </div>
                <br></br>
                <p>Phone:</p>
                <input
                    onChange={onPhoneChangeListner}
                    value={phone}
                    type='number'
                    name='phone'
                />
                <br></br>

                <p>Alt Phone:</p>
                <input
                    onChange={onAltPhoneChangeListner}
                    value={altPhone}
                    type='number'
                    name='phone'
                />
                <br></br>

                <p>Reference:</p>
                <input
                    onChange={onReferenceChangeListner}
                    value={reference}
                    type='text'
                    name='name'
                />
                <br></br>

                <p>Address:</p>
                <input
                    onChange={onAddressChangeListner}
                    value={address}
                    type='text'
                    name='address'
                />
                <br></br>

                <p>Location:</p>
                <input
                    onChange={onLocationChangeListner}
                    value={location}
                    type='text'
                    name='location'
                />
                <br></br>

                <p>Status</p>
                <input
                    // onChange={onReferenceChangeListner}
                    type="checkbox"
                    name='CheckBox'
                // checked={state[key]}
                />

                <br />
                <button type='submit' > Add Customer</button>
            </form>
        </div>
    )

}
export default Customer;