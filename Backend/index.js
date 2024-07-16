const mongoose = require('mongoose');
const express = require('express');

const cors = require('cors')
const app = express();

app.use(express.json());

const Donor=require('./Donor')

const url='mongodb+srv://acharyyaankush441:IvFEAxt5tcYr3uhq@cluster0.xcq9b5e.mongodb.net/'

mongoose.connect(url);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})

app.use(express.json())
app.use(cors({
    origin:'*'
}))

app.get('/', (req, res) => {
    res.send('welcome API')
})

app.post('/LoginDonor',async(req, res) => {
    const email= req.body.email;
    const password= req.body.password;

    //console.log(email+" "+password)

    try{
        const data = await Donor.find({email: email,password: password});
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Post Method
app.post('/registerDonor', async(req, res) => {
    const data = new Donor({
    email: req.body.email,
    name: req.body.name,
    password: req.body.password,
    address: req.body.address,
    contact: req.body.contact,
    bloodgroup: req.body.bloodgroup,
    })

    try{
        const response =await data.save();
        res.status(200).json(response)

    }
    catch(error){
        res.status(400).json({message: error.message})
        
    }
})

//Get all Method
app.get('/getAllDonor', async(req, res) => {
    try{
        const data = await Donor.find();
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Get by ID Method
app.get('/getDonorbyId/:id', async(req, res) => {
    try{
        const data = await Donor.findById(req.params.id);
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

app.get('/searchbybloodgroup/:bloodgroup', async(req, res) => {
    const bloodgroup = req.params.bloodgroup;

    try{
        const data = await Donor.find({bloodgroup: bloodgroup});
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

app.get('/searchmyaddress/:address', async(req, res) => {
    const address = req.params.address;

    try{
        const data = await Donor.find({address: {$regex : address}});
        res.json(data)
    }
    catch(error){
        res.status(500).json({message: error.message})
    }
})

//Update by ID Method
app.patch('/updateDonor/:id', async(req, res) => {
    try {
        const id = req.params.id;
        const updatedData = req.body;
        const options = { new: true };

        const result = await Donor.findByIdAndUpdate(
            id, updatedData, options
        )

        res.send(result)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

//Delete by ID Method
app.delete('/deleteDonor/:id', async(req, res) => {
    try {
        const id = req.params.id;
        const data = await Donor.findByIdAndDelete(id)
        res.send(`Document with ${data.name} has been deleted..`)
    }
    catch (error) {
        res.status(400).json({ message: error.message })
    }
})

app.listen(5100, () => {
    console.log(`Server Started at ${5100}`)
})