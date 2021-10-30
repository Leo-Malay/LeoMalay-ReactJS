import Header from "../../components/Header";
const ProductHome = () => {
    return (
        <div className="ProductHome">
            <Header
                props={{
                    title: "LeoProduct",
                    color: "primary",
                    type: "Product",
                }}
            />
        </div>
    );
};

export default ProductHome;
