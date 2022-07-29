import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { villageActions } from "../store/slice/villageSlice";

const Village = () => {

    // const [name, setName] = useState('');

    const dispatch = useDispatch();

    const villageList = useSelector(state => state.village.villages);

    const village_name = useSelector(state => state.village.name);

    const handelKeyPress = e => {
        if (e.keyCode === 13) {
        }
    }

    const onSubmitForm = event => {
        event.preventDefault();
        dispatch(villageActions.addVillage(village_name))
    }

    const onNameChangeListner = event => {
        // setName(event.target.value);        
    }

    return (
        <div>
            <form onSubmit={onSubmitForm} >
                <h1>Add Village </h1>
                <p>Enter Name:</p>
                <p>{villageList.length}</p>
                <p>{village_name}</p>
                <input
                    onChange={onNameChangeListner}
                    type='text'
                    name='username'
                    onKeyPress={handelKeyPress}
                />
                <br />
                <br />
                <button type='submit' > Submit</button>
            </form>
        </div>
    )
}
export default Village;