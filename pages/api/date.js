export default (req, res) => {
  const upd = JSON.parse(fetch('https://is.gd/Jsonss'))[0]//req.body
        
        /*
        new Date()
    .toISOString()
    .replace(/T/, ' ')
    .replace(/\..+/, '')
    */

  res.json({ upd });
};
