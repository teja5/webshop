import CustomerListItem from "./CustomerListItem";

const CustomerList = () => {

    let customerList = [
        { id: 1, customerName: 'name1' },
        { id: 2, customerName: 'name2' },
        { id: 3, customerName: 'name3' },
        { id: 4, customerName: 'name4' }
    ]

    return (<div>

        <h1>Customer List</h1>

        <ul>
            {customerList.map((item) => {
                return <CustomerListItem key={item.id} name={item.customerName} customer_id={item.id}></CustomerListItem>
            })}
        </ul>

    </div>)
}
export default CustomerList;