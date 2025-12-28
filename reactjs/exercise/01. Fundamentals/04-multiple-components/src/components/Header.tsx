import Greetings from "./Greetings";

const Header = () => {
    return (
        <header>
            <h1>Welcome to My Website!</h1>
            <Greetings />
            <nav>
                <a href="https://github.com/richard-vu">Home</a>
                <a href="https://github.com/richard-vu">About</a>
                <a href="https://github.com/richard-vu">Contact</a>
            </nav>
        </header>
    );
};

export default Header;