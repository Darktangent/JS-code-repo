const Clarifai = require('clarifai');
const app= new Clarifai.App({
  apiKey: 'fa9294f0c56346e38c41c567342ed4d7'
})

const handleApliCall=(req,res)=>{
app.models.predict(Clarifai.FACE_DETECT_MODEL,
  //this.state.input)
  req.body.input)
.then(data=>{
  res.json(data)
}).catch(err=> res.status(400).json('unable to work with apis'))

}

const handleImage=(req,res,db)=>{

   


        const { id } = req.body;
      db('users').where('id', '=', id)
      .increment('entries', 1)
      .returning('entries')
      .then(entries => {
        res.json(entries[0]);
      })
      .catch(err => res.status(400).json('unable to get entries'))
    }
    

module.exports={
    handleImage:handleImage,
    handleApliCall:handleApliCall
}