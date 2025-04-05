export default (APIKEY) => (req, res, next) => {
  const apikey = req.headers.authorization || req.query.apikey;
  console.log(APIKEY, apikey);
  

  if (!APIKEY) {
    return next();
  }

  if (!apikey || apikey !== APIKEY) {
    return next({ status: 401 });
  }

  next();
};
