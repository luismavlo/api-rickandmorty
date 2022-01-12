
import useFetchInfo from '../hooks/useFetchInfo'


const LocationInfo = ({location}) => {

    const {data, loading} = useFetchInfo(location);
    
    return (
        <>
            {
                loading ? (
                    <div id="preloader_3"></div>
			
                ) : (
                    <section className='info'>
                        <h3>{data?.nameLocation}</h3>
                        <div>
                            <div>
                                <b>Type:</b> {data?.type}
                            </div>
                            <div>
                                <b>Dimension:</b> {data?.dimension}
                            </div>
                            <div>
                                <b>Population:</b> {data?.population}
                            </div>
                        </div>
                    </section>
                )
            }
        </>
    )
}

export default LocationInfo
