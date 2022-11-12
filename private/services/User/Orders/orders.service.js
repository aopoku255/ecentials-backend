const router = require('express').Router();
const Orders = require('../../../../private/schemas/Orders');

async function generateOrderCode () {
    const orderInitial = "ORDER";
    let initials = orderInitial.slice(0, 2).toUpperCase();
    
    let randomDigits = (Math.floor(Math.random()*90000) + 100000).toString();
    
    return initials +"-"+ randomDigits
}

async function fetchLastInvoiceNumber () {
    // pharmacy_id = req.user._id;
    const today = new Date()

    const day = today.getDate()        
    const month = today.getMonth() 
    const year = today.getFullYear() 

    const result = await Orders.find({}, {_id: 0, invoice_number: 1}).sort( { _id : -1 }).limit(1);
    data = []
    data = result;

    if(data.length == 0){
        return "Ecen/" + year + "/" + month + "/" + day + "/001";
    }
    else{
        for (var index = 0; index < data.length; index++) {
            return data[index].invoice_number;
        }
        // data.forEach(element => {
        //     console.log(element);
        // });
        // return data;
    }
}

function generateInvoiceNumber (oldInvoiceNumber) {
    var count = oldInvoiceNumber.match(/\d*$/);

    // Take the substring up until where the integer was matched
    // Concatenate it to the matched count incremented by 1
    return oldInvoiceNumber.substr(0, count.index) + (++count[0]);
}

module.exports = {
    generateOrderCode, 
    fetchLastInvoiceNumber, 
    generateInvoiceNumber
}