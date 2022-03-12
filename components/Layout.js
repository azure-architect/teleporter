import Nav from '../components/Nav'

import layoutStyles from '../styles/Layout.module.scss';

const Layout = ({ children }) => {
    return (
        <>
        <Nav />
            <div className="container p-s" >    
                   
                {children}
            </div>
        </>
    );
}

export default Layout;