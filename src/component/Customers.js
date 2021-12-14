import { useEffect, useState } from "react";

const Customer = () => {

    //TODO fetch the villages from the server and append it to the villages state

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [altPhone, setaltPhone] = useState('');
    const [reference, setReference] = useState('');
    const [address, setAddress] = useState('');
    const [location, setLocation] = useState('');
    const [village, setVillage] = useState('');

    const [villages, setVillages] = useState([]);


    async function getVillages() {

        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        }
        const response = await fetch('http://18.117.196.145:8080/shop/listVillage?firstResult=0&max=15', requestOptions);

        if (response.status === 500) {

            // getVillages()
            console.log("List Not Retrieved");

        } else {
            const data = await response.json();

            setVillages(data.villageList)

        }

    }

    useEffect(() => {
        getVillages()
    })

    const onSubmitForm = event => {
        event.preventDefault();

        //TODO Add data to theserver
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

    const onVillageChangeListner = event => {
        setVillage(event.target.value);
    }


    return (
        <div>
            <h1>Add Customer</h1>
            <form onSubmit={onSubmitForm}>
                <p>Enter Name:</p>
                <input
                    onChange={onNameChangeListner}
                    type='text'
                    name='username'
                />
                <br />
                <p>Enter Phone:</p>
                <input
                    onChange={onPhoneChangeListner}
                    type='number'
                    name='phone'
                />
                <br />
                <p>Enter Alternate Phone:</p>
                <input
                    onChange={onAltPhoneChangeListner}
                    type='number'
                    name='Alternate Number'
                />
                <br />
                <p>Enter Reference:</p>
                <input
                    onChange={onReferenceChangeListner}
                    type='text'
                    name='Reference'
                />
                <br />
                <p>Enter Address:</p>
                <input
                    onChange={onAddressChangeListner}
                    type='text'
                    name='Address'
                />

                <br />
                <p>Enter Location:</p>
                <input
                    onChange={onLocationChangeListner}
                    type='text'
                    name='Location'
                />
                <br />
                <p>Select Village:</p>
                <select value={village} onChange={onVillageChangeListner}>
                    {villages.map((item) => (
                        <option key={item.village_id} value={item.name}>
                            {item.name}
                        </option>
                    ))}
                </select>
                <br></br>
                <button type='submit' > Submit</button>
            </form>
        </div>

    )

}
export default Customer;