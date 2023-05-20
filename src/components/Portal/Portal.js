import { useEffect } from 'react'
import QuickView from '../quickView/QuickView'
import { useSelector } from 'react-redux'

function Portal() {

    const data = useSelector((data) => data.quickView)

    useEffect(() => {
        if (data.show) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'visible';
        }
    }, [data.show])

    return (
        <>

            {data.show ? <QuickView product={data.data} /> : null}
        </>
    )
}

export default Portal