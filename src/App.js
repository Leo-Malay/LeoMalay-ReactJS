import { BrowserRouter, Route } from "react-router-dom";

const AuthRouter = () => {
  return <div className="Auth">
    <Route exact path="/" component={}/>
  </div>
}
const StoreRouter = () => {
  return <div className="Store">
    <Route exact path="/" component={}/>
  </div>
}
const BlogRouter = () => {
  return <div className="Blog">
    <Route exact path="/" component={}/>
  </div>
}
const BankRouter = () => {
  return <div className="Bank">
    <Route exact path="/" component={}/>
  </div>
}
const App = () => {
    return (
        <BrowserRouter>
            <Route exact path="/" component={}/>
            <Route exact path="/Auth" component={AuthRouter}/>
            <Route exact path="/Store" component={StoreRouter}/>
            <Route exact path="/Blog" component={BlogRouter}/>
            <Route exact path="/Bank" component={BankRouter}/>
        </BrowserRouter>
    );
};

export default App;
