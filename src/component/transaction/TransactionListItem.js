const TransactionListItem = (props) => {

    function edittransaction() {
        console.log(props.transaction_id + 'Edit');
    }

    function deletetransaction() {
        console.log(props.transaction_id + 'Delete');
    }

    return (
        // <li>{props.name}</li>
        <div>
            <p>{props.name}</p>
            <button onClick={edittransaction}>Edit</button>
            <button onClick={deletetransaction}>Delete</button>
        </div>
    );

}
export default TransactionListItem;