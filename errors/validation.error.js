export default (errors) => ({
  status: 400,
  message: "Validation error",
  errors: errors,
});
