import {useJsonFetch} from '../Hooks/useJsonFetch';
import {useState} from 'react';

export function RequestInfoBlock(props) {
    const [state, setState] = useState(null);

    const handleButtonClick = () => {
        setState(<InfoBlock />);
    }

    const InfoBlock = () => {
        const [loading, success, error] = useJsonFetch(props.URL, {method: 'GET'});

        return  <div className={'infoBlock'}>
                    {loading && <p>...Loading</p>}
                    {success && <p>{success}</p>}
                    {error && <p>{error}</p>}
                </div>
    }

    return (
        <div className={'RequestInfoBlock'}>
            {state}
            <button type={'button'} className={props.className} onClick={handleButtonClick}>{props.title}</button>
        </div>
    )
}
