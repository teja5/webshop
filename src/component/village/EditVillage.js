import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
// import { villageActions } from ".../store/slice/villageSlice";

let history;

const EditVillage = (params) => {


    const location = useLocation();

    // constructor(props){
    //     super(props)

    // Set initial stat 
    // this.state = {
    //     greeting:
    //         'Click the button to receive greetings'
    // }

    // Binding this keyword 
    // this.updateState = this.updateState.bind(this)
    // }

    const [name, setName] = useState(location.state.names);

    // const [age, setAge] = useState('');

    // const [selection, setSelection] = useState('');

    history = useHistory();

    var requetJson = {
        "village_id": 2,
        "name": name
    }

    const dispatch = useDispatch();

    async function editVillage() {

        const requestOptions = {
            method: 'PUT',
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
            // dispatch(villageActions.addVillage(name))
            history.goBack()
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
        editVillage();
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

    // setName('ok')

    console.log(name);
    console.log(location.state.names)

    return (



        <div>
            <form onSubmit={onSubmitForm} >
                <h1>Edit Village </h1>
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
export default EditVillage;