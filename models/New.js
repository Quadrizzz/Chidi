const mongoose = require('mongoose')

const LecturerSchema = new mongoose.Schema({
    ippis_no:{
        type: String,
        required: true
    },
    staff_no:{
        type: Number,
        required: true
    },
    title:{
        type: String,
        required: true
    },
    name:[
        {
            surname: String,
            first_name: String,
            middle_name: String,
            maiden_name: String,
        }
    ],
    date_of_birth:{
        type: Date,
        required: true
    },
    present_age:{
        type: Number,
        required: true
    },
    retirement_age:{
        type: Number,
        required: true
    },
    gender:{
        type: String
    },
    retirement_date:{
        type: Date,
        required: true
    },
    marital_status:{
        type: String,
        required: true
    },
    country:{
        type: String,
        required: true
    },
    state_of_origin:{
        type: String,
        required: true
    },
    lga:{
        type: String,
        required: true
    },
    geo_politcal_zone:{
        type: String,
        required: true
    },
    date_of_first_appointment:{
        type: Date,
        required: true
    },
    data_of_present_appointment:{
        type: Date,
        required: true
    },
    salary_structure:{
        type: String,
        required: true
    },
    gl:{
        type: Number,
        required: true
    },
    step:{
        type: Number,
        required: true
    },
    confirmation_date:{
        type: Date,
        required: true
    },
    cadre:{
        type: String,
        requred: true
    },
    post_designation:{
        type: String,
        required: true
    },
    faculty:{
        type: String,
        required: true
    },
    department:{
        type: String,
        required: true
    },
    nature:{
        type: String,
        required: true
    },
    transfer_date:{
        type: Date,
        required: true
    },
    qualification:{
        type: String,
        required: true
    },
    phd:{
        type: Boolean,
        required: true
    },
    phone:{
        type: String,
        required: true
    },
    home_address:{
        type: String,
        required: true
    },
    status:{
        type: Boolean,
        required: true
    },
    reason_for_inactive:{
        type: String,
        required: true
    },
    date_of_inactive:{
        type: Date,
        required: true
    },
    pfa:{
        type: String,
        required: true
    },
    pen_number:{
        type: String,
        requred: true
    },
    category:{
        type: String,
        requried: true
    },
    campus:{
        type: String,
        required: true
    },
    leave_status:{
        type: Boolean,
        required: true
    },
    start_date:{
        type: Date,
        required: true
    },
    end_date:{
        type: Date,
        required: true
    },
    remarks:{
        type: Array
    },
    resume:{
        type: Date,
        required: true
    }
})

module.exports = mongoose.model('Lecturer', LecturerSchema);