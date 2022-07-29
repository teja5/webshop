import { ReactSearchAutocomplete } from 'react-search-autocomplete'

const Customer = () => {

    // "customer_id": 0,
    // "name":"teja",
    // "village":{"village_id":1,"name":"Jangareddigudem"},
    // "phone":"teja",
    // "alt_phone":"teja",
    // "reference":"teja",
    // "address":"teja",
    // "location":"teja",
    // "active":true

    const items = [
        {
            id: 0,
            name: 'Cobol'
        },
        {
            id: 1,
            name: 'JavaScript'
        },
        {
            id: 2,
            name: 'Basic'
        },
        {
            id: 3,
            name: 'PHP'
        },
        {
            id: 4,
            name: 'Java'
        }
    ]

    const handleOnSelect = (item) => {
        // the item selected
        console.log(item)
    }


    const handleOnSearch = (string, results) => {
        // onSearch will have as the first callback parameter
        // the string searched and for the second the results.
        console.log(string, results)
    }

    const formatResult = (item) => {
        return (
            <>
                <span style={{ display: 'block', textAlign: 'left' }}>id: {item.id}</span>
                <span style={{ display: 'block', textAlign: 'left' }}>name: {item.name}</span>
            </>
        )
    }

    const onSubmitForm = event => {

    }

    return (
        <div>
            <form onSubmit={onSubmitForm}>
                <h1>Add Customer</h1>
                <p>Name:</p>
                <input
                    type='text'
                    name='name'

                />
                <br></br>
                <p>Village:</p>
                <div style={{ width: 400 }}>
                    <ReactSearchAutocomplete
                        items={items}
                        onSearch={handleOnSearch}
                        onSelect={handleOnSelect}
                        autoFocus
                        formatResult={formatResult}
                    />
                </div>
                <br></br>
                <p>Phone:</p>
                <input
                    type='number'
                    name='phone'
                />
                <br></br>

                <p>Alt Phone:</p>
                <input
                    type='number'
                    name='phone'
                />
                <br></br>

                <p>Reference:</p>
                <input
                    type='text'
                    name='name'
                />
                <br></br>

                <p>Address:</p>
                <input
                    type='text'
                    name='address'
                />
                <br></br>

                <p>Location:</p>
                <input
                    type='text'
                    name='location'
                />
                <br></br>

                <p>Status</p>
                <input
                    type="checkbox"
                    name='CheckBox'
                // checked={state[key]}
                />

                <br />
                <button type='submit' > Add Customer</button>
            </form>
        </div>
    )


}
export default Customer;