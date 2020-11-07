const { default: Body } = require("./components/Body");
const { default: Footer } = require("./components/Footer");
const { default: Navbar } = require("./components/Navbar");

function App() {
    return (
        <div className="app__container">
            <Navbar />
            <Body />
            <Footer />
        </div>
    );
}

export default App;
