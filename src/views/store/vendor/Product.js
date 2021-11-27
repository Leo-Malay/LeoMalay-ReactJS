import { useState } from "react";
import { useDispatch } from "react-redux";
import StoreHeader from "../components/StoreHeader";
import { AddProduct } from "../redux/storeAction";
import { ProtectedRoute } from "../../../Security";
const VendorProduct = () => {
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [image, setImage] = useState("");
    const [category, setCategory] = useState("");
    const [description, setDescription] = useState("");
    const [specs, setSpecs] = useState("");
    const [availableUnit, setAvailableUnit] = useState("");
    const [isAvailable, setIsAvailable] = useState("");
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(
            AddProduct(
                name,
                price,
                image,
                category,
                description,
                specs.split(","),
                availableUnit
            )
        );
    };
    return (
        <div className="vendorProduct">
            <ProtectedRoute props={{ path: "/Store/Vendor/Product" }} />
            <StoreHeader />
            <form
                action="#"
                method="post"
                onSubmit={submitHandler}
                className="AlignCenter"
            >
                <table>
                    <tbody className="AlignLeft">
                        <tr>
                            <th>Name</th>
                            <td>
                                <input
                                    type="text"
                                    name="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Name"
                                    required
                                />
                            </td>
                        </tr>
                        <tr>
                            <th>Price</th>
                            <td>
                                <input
                                    type="number"
                                    name="price"
                                    value={price}
                                    onChange={(e) => setPrice(e.target.value)}
                                    placeholder="Price"
                                    required
                                />
                            </td>
                        </tr>
                        <tr>
                            <th>Image</th>
                            <td>
                                <input
                                    type="url"
                                    name="image"
                                    value={image}
                                    onChange={(e) => setImage(e.target.value)}
                                    placeholder="Image URL"
                                    required
                                />
                            </td>
                        </tr>
                        <tr>
                            <th>Category</th>
                            <td>
                                <select
                                    value={category}
                                    onChange={(e) =>
                                        setCategory(e.target.value)
                                    }
                                    required
                                >
                                    <option value="" disabled>
                                        Choose a category
                                    </option>
                                    <option value="MOBILE">Mobile</option>
                                    <option value="LAPTOP">Laptop</option>
                                    <option value="PC">PC</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <th>Description</th>
                            <td>
                                <textarea
                                    rows={10}
                                    value={description}
                                    onChange={(e) =>
                                        setDescription(e.target.value)
                                    }
                                    placeholder="About the Product.."
                                    required
                                />
                            </td>
                        </tr>
                        <tr>
                            <th>Specification</th>
                            <td>
                                <input
                                    type="text"
                                    name="specs"
                                    value={specs}
                                    onChange={(e) => setSpecs(e.target.value)}
                                    placeholder="Specs(Comma seperated value)"
                                    required
                                />
                            </td>
                        </tr>
                        <tr>
                            <th>Is Available</th>
                            <td>
                                <select
                                    value={isAvailable}
                                    onChange={(e) =>
                                        setIsAvailable(e.target.value)
                                    }
                                    required
                                >
                                    <option value="" disabled>
                                        Choose from following
                                    </option>
                                    <option value="true">Yes</option>
                                    <option value="false">No</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <th>Available Unit</th>
                            <td>
                                <input
                                    type="number"
                                    name="availableUnit"
                                    value={availableUnit}
                                    onChange={(e) =>
                                        setAvailableUnit(e.target.value)
                                    }
                                    placeholder="Available Units"
                                    required
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <input
                    type="submit"
                    className="success-nohover"
                    value="Submit"
                />
            </form>
        </div>
    );
};
export default VendorProduct;
