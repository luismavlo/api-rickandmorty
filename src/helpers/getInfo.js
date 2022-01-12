

export const getInfo = async(location) => {

    const url = `https://rickandmortyapi.com/api/location/${location}`;
    const resp = await fetch( url );
    const data  = await resp.json();


    const info = {
        id: data.id,
        nameLocation: data.name,
        dimension: data.dimension,
        type: data.type,
        population: data.residents.length
    }

    return info;
}
