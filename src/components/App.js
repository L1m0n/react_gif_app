import Menu from './Common/Menu';
import  React from 'react'

const App  = ({children}) => {
    return(
        <div className="app__wrapper">
            {children}
            <Menu/>
        </div>
    )
};

export default App;