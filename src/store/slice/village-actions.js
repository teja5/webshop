export const getVillages = () => {
    return async dispatch => {
        const fetchData = async () => {
            const response = await fetch('http://3.135.1.238:8080/shop/listVillage?firstResult=0&max=5');
            if (!response.ok) {
                throw new Error('Could not fetch data');
            }

            const data = await response.json();

            return data;
        }

        try {
            const villageData = await fetchData();
        } catch (error) {
            console.log(error)
        }
    }
}
