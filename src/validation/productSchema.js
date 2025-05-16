import Joi from "joi";

const productSchema = Joi.object({
  name: Joi.string().min(2).max(50).required().messages({
    "string.empty": "Name is required",
    "string.min": "Name must be at least 2 characters",
  }),
  description: Joi.string().min(5).max(200).required().messages({
    "string.empty": "Description is required",
    "string.min": "Description must be at least 5 characters",
  }),

  price: Joi.number().positive().required().messages({
    "number.base": "Price must be a number",
    "number.positive": "Price must be positive",
    "any.required": "Price is required",
  }),
  image: Joi.string().uri().required().messages({
    "string.empty": "Image URL is required",
    "string.uri": "Image must be a valid URL",
  }),
});

export default productSchema;
