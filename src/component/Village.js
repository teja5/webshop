import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { villageActions } from "../store/slice/villageSlice";

const Village = () => {

    // mySubmitHandler = (event) => {
    //     event.preventDefault();
    //     // let age = this.state.age;
    //     // if (!Number(age)) {
    //     //   alert("Your age must be a number");
    //     // }
    // }

    const [name, setName] = useState('');

    // const [age, setAge] = useState('');

    // const [selection, setSelection] = useState('');

    var requetJson = {
        "village_id": 0,
        "name": name
    }



    const villages = useSelector(state => state.village.village);

    const dispatch = useDispatch();

    async function addVillage() {

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },

            body: JSON.stringify(requetJson)
            // body: JSON.stringify({
            //     village_id: 0,
            //     name: name
            // })
        }
        const response = await fetch('http://184.72.6.13:8080/shop/village', requestOptions);
        if (response.ok) {
            const data = await response.json();
            console.log(JSON.parse(data.village).village_id + " " + JSON.parse(data.village).name)
            // await (data) => {
            // setName(JSON.parse(data.village).village_id + " " + JSON.parse(data.village).name + "  " + data.status)
            // };    
            dispatch(villageActions.addVillage(name))
            setName('');
        } else {
            console.log('Something went wrong')
        }
    }

    const handelKeyPress = e => {
        if (e.keyCode === 13) {
            // addVillage();
        }
    }

    const onSubmitForm = event => {
        event.preventDefault();
        addVillage();
        console.log(name);
        // dispatch(villageActions.addVillage(name))
        // setName('')
    }

    const onNameChangeListner = event => {
        setName(event.target.value);
    }

    // const onSelectionChangeListner = event => {
    //     setSelection(event.target.value);
    // }

    return (
        <div>
            <form onSubmit={onSubmitForm} >
                <h1>Add Village </h1>
                <p>Enter Name:</p>
                <p>{name}</p>
                <input
                    onChange={onNameChangeListner}
                    type='text'
                    name='username'
                    value={name}
                    onKeyPress={handelKeyPress}
                />
                {/* <p>Enter your age:</p>
            <input
                type='text'
                name='age'
            /> */}
                {/* <br /> */}
                {/* <select value={selection} onChange={onSelectionChangeListner}>
                <option value="Ford">Ford</option>
                <option value="Volvo">Volvo</option>
                <option value="Fiat">Fiat</option>
            </select> */}
                <br />
                <br />
                <button type='submit' > Submit</button>
            </form>
        </div>
    )
}
export default Village;