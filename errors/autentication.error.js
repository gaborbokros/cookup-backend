export default (field = "API key", value) => ({
  status: 401,
  message: "Authentication error",
  errors: [
    {
      field: field,
      value: value || null,
      message: value ? `Invalid ${field}` : `Missing ${field}`,
      path:
        field === "token"
          ? "headers.authorization"
          : "headers.apikey or query.apikey",
    },
  ],
});
