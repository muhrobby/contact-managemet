import { responseError } from "../error/response-error.js";

const validate = (schema, request) => {
  const { error, value } = schema.validate(request, {
    abortEarly: false,
    allowUnknown: false,
  });
  if (error) {
    throw new responseError(400, error.message);
  } else {
    return value;
  }
};

export { validate };
