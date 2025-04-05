export default () => ({
  status: 500,
  message: "Server error",
  errors: [
    {
      field: "server",
      message: "Internal server error",
      path: "server",
    },
  ],
});
