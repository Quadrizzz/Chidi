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
        required: false,
        default: 65
    },
    gender:{
        type: String,
        required: true
    },
    retirement_date:{
        type: Date,
        required: false
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
        required: false
    },
    geo_politcal_zone:{
        type: String,
        required: false
    },
    date_of_first_appointment:{
        type: Date,
        required: false,
        default: Date.now
    },
    data_of_present_appointment:{
        type: Date,
        required: false,
        default: Date.now
    },
    salary_structure:{
        type: String,
        required: true
    },
    gl:{
        type: Number,
        required: false
    },
    step:{
        type: Number,
        required: false
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
        required: false
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
        required: false
    },
    qualification:{
        type: String,
        required: true
    },
    phd:{
        type: Boolean,
        required: false
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
        required: true,
        default: true
    },
    reason_for_inactive:{
        type: String,
        required: false
    },
    date_of_inactive:{
        type: Date,
        required: false
    },
    pfa:{
        type: String,
        required: false
    },
    pen_number:{
        type: String,
        requred: false
    },
    category:{
        type: String,
        requried: false
    },
    campus:{
        type: String,
        required: true
    },
    leave_status:{
        type: Boolean,
        required: false,
        default: false
    },
    start_date:{
        type: Date,
        required: false,
        default: Date.now
    },
    end_date:{
        type: Date,
        required: false
    },
    remarks:{
        type: Array,
        required: false,
        default: ["all good"],
    },
    resume:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Lecturer', LecturerSchema);