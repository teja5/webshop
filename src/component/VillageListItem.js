const VillageListItem = (props) => {

    function editVillage() {
        console.log(props.village_id + 'Edit');
    }

    function deleteVillage() {
        console.log(props.village_id + 'Delete');
    }

    return (
        // <li>{props.name}</li>
        <div>
            <p>{props.name}</p>
            <button onClick={editVillage}>Edit</button>
            <button onClick={deleteVillage}>Delete</button>
        </div>
    );

}
export default VillageListItem;