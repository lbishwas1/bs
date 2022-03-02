const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateUpdateInput(data) {
  let errors = {};

// Convert empty fields to an empty string so we can use validator functions
  data.name = !isEmpty(data.name) ? data.name : "";
  data.location = !isEmpty(data.location) ? data.location : "";
  data.phone = !isEmpty(data.phone) ? data.phone : "";
  data.password = !isEmpty(data.password) ? data.password : "";

// Password checks
  if (Validator.isEmpty(data.password)) {
    errors.password = "Password field is required";
  }
  
return {
    errors,
    isValid: isEmpty(errors)
  };
};