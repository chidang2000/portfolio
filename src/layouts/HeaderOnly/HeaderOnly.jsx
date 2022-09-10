import Header from '../components/Header';

function HeaderOnly({ children }) {
    return (
        <div>
            <Header></Header>
            <div>{children}</div>
        </div>
    );
}

export default HeaderOnly;
