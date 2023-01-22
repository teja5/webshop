import React from "react";

class ListComp extends React.Component {

    constructor(props) {
        super(props);
        this.state = { date: new Date(), villageList: [] }
    }

    componentDidMount() {
        getVillages();
    }

    componentWillUnmount() {

    }

    render() {
        return (
            <h1>Return List {this.state.villageList.length}</h1>
        )
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
        console.log(data)
        // this.state.villageList = data.villageList;
        // this.setState({
        //     // date: new Date()
        //     // villageList: data.villageList
        // });
        // setVillageList(data.villageList)
        // setvillageList(data.villageList)

        this.setState((state, props) => ({
            villageList: 
            
            data.villageList
        }));
    }
}

export default ListComp;