import { useEffect, useState } from 'react';
import VillageListItem from './VillageListItem';
import { villageActions } from "../store/slice/villageSlice";

const VillageList = () => {


    const [villageName, setVillageName] = useState('');

    const [listSize, setListSize] = useState([]);

    const onVilageNameChangeListner = event => {
        setVillageName(event.target.value);
        searchVillagesByName(event.target.value);
    }

    function searchClick() {
        console.log(villageActions.getUsers.length)
        // searchVillagesByName(villageName);
    }


    async function searchVillagesByName(params) {
        console.log(villageName);
        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        }

        var villageSearch = 'http://3.135.1.238:8080/shop/getVillageSearch?search=' + villageName + '&firstResult=0&max=15';
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

        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        }
        const response = await fetch('http://3.135.1.238:8080/shop/listVillage?firstResult=0&max=15', requestOptions);

        if (response.status === 500) {
            // getVillages()
            console.log("List Not Retrieved");

        } else {
            const data = await response.json();
            setListSize(data.villageList)
        }

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
                    return <VillageListItem key={item.village_id} name={item.name} village_id={item.village_id}></VillageListItem>
                })}
            </ul>
        </div >
    );
}
export default VillageList;