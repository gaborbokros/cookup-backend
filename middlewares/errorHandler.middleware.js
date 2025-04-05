import autenticationError from "../errors/autentication.error.js";
import serverError from "../errors/server.error.js";
import validationError from "../errors/validation.error.js";

export default (err, req, res, next) => {
  const { status, field, errors } = err;

  switch (status) {
    case 400:
      return res.status(400).json(validationError(errors));
    case 401:
      const value =
        field === "token"
          ? req.headers.authorization
          : req.query.apikey || req.headers.apikey;
      return res.status(401).json(autenticationError(field, value));
    default:
      return res.status(500).json(serverError());
  }
};
