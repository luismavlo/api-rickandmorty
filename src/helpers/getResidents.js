
export const getResidents = async(location) => {

    const url = `https://rickandmortyapi.com/api/location/${location}`;
    const resp = await fetch( url );
    const data  = await resp.json();

    let residents = [];
    residents = data.residents;

    

    return residents;
}

export default getResidents
