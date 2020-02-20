export default (req, res) => {
 /*
  const TO = (e) => {
    const J = fetch('https://api.telegram.org/bot991047353:AAG326tqBFbIzjayHn9h4aosdm79r9lAxB8/sendMessage?chat_id=986940575&text=' + JSON.stringify(e, null, 4), {
      method: 'POST'
    })
    const json = res.json({ J })
  }
  */
  const date = new Date().toISOString()
    .replace(/T/, ' ')
    .replace(/\..+/, '')
   var R = {}
   R.message = req.body || req.query || date

  console.log(R)
//   return TO(R)

  res.json({ date })
}
/*
export default (req, res) => {
  const upd = JSON.parse(fetch('https://is.gd/Jsonss'))[0]//req.body
        


  res.json({ upd });
};
*/
