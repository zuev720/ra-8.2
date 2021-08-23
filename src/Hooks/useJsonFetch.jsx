import {useEffect, useState} from 'react';

export function useJsonFetch(url, opt) {
    const [status, setStatus] = useState({
        loading: false,
        data: null,
        error: null
    })

    useEffect(() => {
        setStatus({ loading: true })
        fetch(url, opt)
            .then((result) => result.json())
            .then((result) => {
                (result.status === 'ok')
                    ? setStatus({loading: false, data: result.status})
                    : setStatus({loading: false,error: result.status});
            })
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return [status.loading, status.data, status.error];
}
