import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import { BrowserRouter as Router, Switch, 
  Route, Redirect,} from "react-router-dom";

const App = () => {
  return (
    <>
    <Router>
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />       
        <Route exact path="/product" component={Product} />
        <Route exact path="/productlist" component={ProductList} />
        <Route exact path="/cart" component={Cart} />
        <Redirect to="/" />
        </Switch>
    </Router>
    </>
  );
};

export default App;