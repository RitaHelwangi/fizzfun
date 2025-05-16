import React, { useState, useEffect, useRef } from "react";
import Joi from "joi";
import productSchema from "../validation/productSchema";
import "../styles/Admin.css";

const emptyProduct = {
  name: "",
  description: "",
 
  price: "",
  image: "",
};

const ProductForm = ({ onSubmit, onCancel, initialProduct }) => {
  const [product, setProduct] = useState(initialProduct || emptyProduct);
  const [errors, setErrors] = useState({});
  const formRef = useRef(null);

  useEffect(() => {
    if (formRef.current) {
		formRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
	  }
	}, [initialProduct]); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prev) => ({ ...prev, [name]: value }));
  };

  const validate = () => {
    const toValidate = {
		name: product.name,
		description: product.description,
		price: Number(product.price),
		image: product.image,
	  };
	  const { error } = productSchema.validate(toValidate, { abortEarly: false });
	  if (!error) return {};
	  const errObj = {};
	  error.details.forEach((err) => {
		errObj[err.path[0]] = err.message;
	  });
	  return errObj;
	};

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    const submitProduct = {
		...product,
		price: Number(product.price),
	  };

	  onSubmit(submitProduct);
	  if (!initialProduct) setProduct(emptyProduct);
  };

  return (
    <form className="product-form" onSubmit={handleSubmit} ref={formRef}>
      <div>
        <label>Name</label>
        <input name="name" value={product.name} onChange={handleChange} />
        {errors.name && <span className="error">{errors.name}</span>}
      </div>
      <div>
        <label>Description</label>
        <input name="description" value={product.description} onChange={handleChange} />
        {errors.description && <span className="error">{errors.description}</span>}
      </div>
      
      <div>
        <label>Price</label>
        <input
          name="price"
          type="number"
          min="0"
          value={product.price}
          onChange={handleChange}
        />
        {errors.price && <span className="error">{errors.price}</span>}
      </div>
      <div>
        <label>Image URL</label>
        <input name="image" value={product.image} onChange={handleChange} />
        {errors.image && <span className="error">{errors.image}</span>}
      </div>
      <div className="form-actions">
        <button type="submit" className="update-product-btn">{initialProduct ? "Update" : "Add"} Product</button>
        {onCancel && (
          <button type="button" onClick={onCancel} className="cancel-btn">
            Cancel
          </button>
        )}
      </div>
    </form>
  );
};

export default ProductForm;