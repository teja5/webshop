import { Component } from "react";
import { useHistory } from "react-router";
import VillageListItem from "../VillageListItem";

const VILLAGE_LIST = [
    // { village_id: '1', name: 'one' },
    // { village_id: '3', name: 'three' }
];

// const villageList = (

// );

// let history = useHistory();



class Villages extends Component {
    constructor() {
        super();
        this.state = { villageListf: VILLAGE_LIST, update: "statred" };

        this.getVillages = this.getVillages.bind(this);
        // history = useHistory();

    }



    async deleteVillage(village_id) {

        const requestOptions = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        }
        const response = await fetch('http://184.72.6.13:8080/shop/deleteVillage?village_id=' + village_id, requestOptions);

        if (response.ok) {
            this.getVillages()
        } else {
            console.log("List Not Retrieved");
        }
    }

    editVillage(village_id, name) {
        console.log(village_id + 'Edit');

        // useHistory().push({
        //     pathname: "/editVillage",
        //     state: { names: name }
        // })

    }


    async getVillages() {

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
            // this.setState(
            //     { villageList: data.villageList }
            // )
            console.log(data.villageList)
            // setListSize(data.villageList)
            // this.state.update = "updated"
            this.setState((update) => ({ update: "updated" }))

            this.setState((update) => ({ villageListf: data.villageList }))


            // this.setState({
            //     villageListf: ((VILLAGE_LIST) =>
            //         data.villageList)
            // })

            console.log(this.state.update)
        }
    }

    componentDidMount() {
        this.getVillages()
    }

    render() {
        return (
            <div>
                <h1>This is DealerList {this.state.villageListf.length}  {this.state.update}</h1>

                <ul>
                    {this.state.villageListf.map((dealer) => (
                        <VillageListItem key={dealer.village_id} name={dealer.name} onVillageDelete={() => { this.deleteVillage(dealer.village_id) }} onVillageEdit={() => { this.editVillage(dealer.village_id, dealer.name) }} />
                    ))}
                </ul>
            </div>
        )
    }
}



export default Villages;