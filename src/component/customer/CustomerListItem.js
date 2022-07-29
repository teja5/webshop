const CustomerListItem = (props) => {

    function editcustomer() {
        console.log(props.customer_id + 'Edit');
    }

    function deletecustomer() {
        console.log(props.customer_id + 'Delete');
    }

    return (
        // <li>{props.name}</li>
        <div>
            <p>{props.name}</p>
            <button onClick={editcustomer}>Edit</button>
            <button onClick={deletecustomer}>Delete</button>
        </div>
    );

}
export default CustomerListItem;