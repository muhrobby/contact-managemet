import { responseError } from "../error/response-error.js";

const validate = (schema, request) => {
  const { error, value } = schema.validate(request);
  if (error) {
    throw new Error(error.details[0].message);
  } else {
    return value;
  }
};

export { validate };
