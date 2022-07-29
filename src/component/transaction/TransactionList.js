import TransactionListItem from "./TransactionListItem";

const TransactionList = () => {

    let transactionList = [
        { id: 1, transactionName: 'name1' },
        { id: 2, transactionName: 'name2' },
        { id: 3, transactionName: 'name3' },
        { id: 4, transactionName: 'name4' }
    ]

    return (<div>

        <h1>Transaction List</h1>

        <ul>
            {transactionList.map((item) => {
                return <TransactionListItem key={item.id} name={item.transactionName} transaction_id={item.id}></TransactionListItem>
            })}
        </ul>

    </div>)
}
export default TransactionList;