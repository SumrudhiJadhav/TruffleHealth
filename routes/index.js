const express = require('express');
const router = express.Router();

let bills = [];

router.get('/', (req, res) => {
    res.send('Hello World');
})

router.get('/items', (req, res) => {
    res.json({
        success: true,
        data: bills
    });
});

router.post('/items', (req, res) => {
    const  {
        patient_name, patient_address, hospital, date_of_service, bill_amount
    } = req.body;
    const bill = {
        patient_name,
        patient_address,
        hospital,
        date_of_service,
        bill_amount
    };
    bills.push(bill);
    res.status(201).json({
        success: true
    });
});

module.exports = router;