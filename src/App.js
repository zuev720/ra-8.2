import './App.css';

import {RequestInfoBlock} from './RequestInfoBlock/RequestInfoBlock';

function App() {
    const successURL = `${process.env.REACT_APP_CURRENCY_URL}data`;
    const errorURL = `${process.env.REACT_APP_CURRENCY_URL}error`;

    return (
        <div className="App">
            <RequestInfoBlock className={'buttonSuccess'} URL={successURL} title={'SuccessRequest'}/>
            <RequestInfoBlock className={'buttonError'} URL={errorURL} title={'ErrorRequest'}/>
        </div>
    );
}

export default App;
