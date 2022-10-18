const router = require('express').Router();


const Staff = require('../../../private/schemas/Staff');
const { getDoctorsInHospital, getDoctorInformaion, getDoctorReviews } = require('../../../private/services/Hospital/Doctor/doctor.service');
const { verify } = require('../../../verifyToken')


// returns top rated doctors on the platform
// for simplicity sake, the current data returned is just
// the first five doctors from the db.
// implementations to be change later
router.get('/fetch-top-doctors', verify, async (req, res) => {
    try {
        const doctors = await Staff.find({}).limit(5)
        if (doctors == null) {
            return res.status(400).json({ message: "Could not fetch top doctors." });
        }
        return res.status(200).json({ message: "success", data: doctors });
    } catch (error) {
        return res.status(400).json({ message: "An error occurred", data: error })
    }
});


// return all the doctors registered to a hospital
router.post('/get-doctors-in-hospital', verify, async (req, res, next) => {
    const { hospital_id, staff_type } = req.body;

    try {
        return res.status(200).json(await getDoctorsInHospital({ hospital_id, staff_type }));
    } catch (error) {
        next(error);
    }
});

// retrieve a doctor's details
router.post('/get-doctor-details', verify, async (req, res, next) => {
    const { doctor_id, hospital_id, staff_type } = req.body;

    try {
        return res.status(200).json(await getDoctorInformaion({ doctor_id, hospital_id, staff_type }));
    } catch (error) {
        next(error);
    }
})

// retrieve doctor's reviews
router.post('/get-doctor-reviews', verify, async (req, res, next) => {
    const { recipient_id, recipient_type } = req.body;

    try {
        return res.status(200).json(await getDoctorReviews({ recipient_id, recipient_type }));
    } catch (error) {
        next(error)
    }
});

module.exports = router;
