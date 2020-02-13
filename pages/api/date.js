export default (req, res) => {
  const upd = req.body
        
        /*
        new Date()
    .toISOString()
    .replace(/T/, ' ')
    .replace(/\..+/, '')
    */

  res.json( upd );
};
