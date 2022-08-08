const VillageListItem = (props) => {

    return (
        // <li>{props.name}</li>
        <div>
            <p>{props.name}</p>
            <button onClick={props.onVillageEdit}>Edit</button>
            <button onClick={props.onVillageDelete}>Delete</button>
        </div>
    );

}
export default VillageListItem;