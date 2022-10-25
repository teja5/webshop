import { useEffect, useState } from 'react';
import VillageListItem from './VillageListItem';
import { useHistory } from 'react-router-dom';
import { villageActions } from "../store/slice/villageSlice";

let history;
const VillageList = () => {

    history = useHistory();

    const [villageName, setVillageName] = useState('');

    const [listSize, setListSize] = useState([]);

    const onVilageNameChangeListner = event => {
        setVillageName(event.target.value);
        searchVillagesByName(event.target.value);
    }

    function searchClick() {
        console.log(villageActions.getUsers.length)
        // searchVillagesByName(villageName);
        getVillages()
    }


    async function searchVillagesByName(params) {
        console.log(villageName);
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        }

        var villageSearch = 'http://184.72.6.13:8080/shop/getVillageSearch?search=' + villageName + '&firstResult=0&max=50';
        const response = await fetch(villageSearch, requestOptions);

        if (response.status === 500) {

            // getVillages()
            console.log("List Not Retrieved");

        } else {
            const data = await response.json();

            setListSize(data.villageList)

        }
    }

    async function getVillages() {

        console.log('called')
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
            setListSize(data.villageList)
        }
    }

    async function deleteVillage(village_id) {

        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        }
        const response = await fetch('http://184.72.6.13:8080/shop/deleteVillage?village_id=' + village_id, requestOptions);

        if (response.ok) {
            getVillages()
        } else {
            console.log("List Not Retrieved");
        }
    }

    // function deleteVillage(village_id) {

    //     //{{baseUrl}}/deleteVillage?village_id=4

    //     deleteVillage(village_id)

    // }

    function editVillage(village_id, name) {
        console.log(village_id + 'Edit');

        history.push({
            pathname: "/editVillage",
            state: { names: name }
        })

    }

    // useEffect(() => {
    //     getVillages()
    // })

    return (
        < div >

            <p>Enter Name:</p>
            <p>{villageName}</p>
            <input
                onChange={onVilageNameChangeListner}
                type='text'
                name='village'
            />

            <button onClick={searchClick}> Search</button>

            <p>Village List  {listSize.length + " " + villageActions.getUsers.length} </p>
            <ul>
                {listSize.map((item) => {
                    // return <VillageListItem ></VillageListItem>
                    return <VillageListItem key={item.village_id} name={item.name} village_id={item.village_id} onVillageDelete={() => { deleteVillage(item.village_id) }} onVillageEdit={() => { editVillage(item.village_id, item.name) }}></VillageListItem>
                })}
            </ul>
        </div >
    );
}
export default VillageList;