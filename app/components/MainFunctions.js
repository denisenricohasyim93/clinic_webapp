import axios from 'axios'
import ip_address from './Util/config'

export {
    remove_selected_patient,
    darken,
    add_patient,
    add_item,
    navigate,
    move_appointment,
    add_appointment,
    set_appointments,
    add_dropdown_item,
    stop_medicine,
    show_patient_profile,
    send_post_req,
    logout
}

function send_post_req() {
    if (this.state.username) {
        axios.post(`http://${ip_address}:3000/insert`,
            {
                withCredentials: true,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    "Access-Control-Allow-Origin": "http://ec2-34-212-25-151.us-west-2.compute.amazonaws.com:3000",
                    "Access-Control-Allow-Credentials": "true"
                }
            }, { data: this.state }
        ).then((res) => { console.log("data inserted"); })
            .catch(function (error) { console.log(error); });
    }
}

function logout() {
    if (this.state.username) {
        axios.get(`http://${ip_address}:3000/logout`,
            {
                withCredentials: true,
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                    "Access-Control-Allow-Origin": "http://ec2-34-212-25-151.us-west-2.compute.amazonaws.com:3000",
                    "Access-Control-Allow-Credentials": "true"
                }
            }
        ).then((res) => { window.location = "/" })
            .catch(function (error) { console.log(error); });
    }
}

function remove_selected_patient() {
    this.setState({ selected_patient: [] });
}

function darken() {
    let darken_div = document.querySelector(".darken")
    darken_div.classList.toggle("darken_show");
}

function add_patient(patient) {
    if (patient.name &&
        patient.date &&
        patient.gender &&
        patient.address) {

        let updated_patients = this.state.patients.slice(),
            birth = patient.date.split("-"),
            reversed_birth = birth.reverse().join("-"),
            date1 = new Date(),
            date2 = new Date(patient.date),
            time_diff = Math.abs(date2.getTime() - date1.getTime()),
            diff_years = Math.ceil((time_diff / (1000 * 3600 * 24) / 365)),
            new_patient = {
                name: patient.name,
                birth: reversed_birth,
                gender: patient.gender,
                id: Math.floor(Math.random() * (999999 - 100000)) + 100000,
                age: diff_years,
                gravida: patient.gravida,
                hypertension: patient.hypertension,
                diabetes: patient.diabetes,
                phone: patient.phone,
                smoker: patient.smoker,
                address: patient.address,
                notes: [],
                appointments: [],
                vitals: [],
                "medicine": [],
                "diagnosis": []
            }

        updated_patients.unshift(new_patient)

        this.setState({ patients: updated_patients });
        setTimeout(() => this.send_post_req(), 2000)
    }
}

function add_item(item, patient, property) {
    let patients = this.state.patients.slice()

    for (let i = 0; i < patients.length; i++) {
        if (patients[i].name === patient.name) {
            patients[i][property].unshift(item);
        }
    }

    this.setState({ patients: patients });

    setTimeout(() => this.send_post_req(), 2000)

}

function navigate(patient) {
    let selected_patient,
        patients = this.state.patients;

    for (let i = 0; i < patients.length; i++) {
        if (patients[i].name === patient) {
            selected_patient = patients[i];
        }
    }

    this.setState({ selected_patient: [selected_patient] });
}

function move_appointment(event, start, end) {
    let patients = this.state.patients.slice(),
        appointments = [],
        patient_index,
        appointment_index,
        appointment = {
            "title": event.title,
            "start": start,
            "end": end,
            "desc": event.desc
        };

    for (let i = 0; i < patients.length; i++) {
        if (patients[i].name === event.title) {

            for (let j = 0; j < patients[i].appointments.length; j++) {
                if (patients[i].appointments[j].start === event.start) {

                    patient_index = i;
                    appointment_index = j;
                    patients[i].appointments.push(appointment);
                    break;
                }
            }
        }
    }


    if (typeof (patient_index) === "number") {
        patients[patient_index].appointments.splice(appointment_index, 1)
    }

    patients.map((patient) => {
        patient.appointments.map((apt) => {
            appointments.push(apt)
        })
    })

    this.setState({
        patients: patients,
        events: appointments
    })

    setTimeout(() => this.send_post_req(), 2000)

}

function add_appointment(appointment, patient) {
    let patients = this.state.patients.slice(),
        selected_patient,
        appointments = [];

    for (let i = 0; i < patients.length; i++) {
        if (patients[i].name === patient) {
            selected_patient = patients[i];
            patients[i].appointments.unshift(appointment);
        }
    }

    this.state.patients.map((patient) => {
        patient.appointments.map((apt) => {
            appointments.push(apt)
        })
    })


    this.setState({
        patients: patients,
        events: appointments,
        selected_patient: [selected_patient]
    })

    setTimeout(() => this.send_post_req(), 2000)

}

function set_appointments() {
    let appointments = []

    this.state.patients.map((patient) => {
        patient.appointments.map((apt) => {
            appointments.push({
                title: apt.title,
                start: new Date(apt.start),
                end: new Date(apt.end)
            })
        })
    })

    this.setState({ events: appointments })

    setTimeout(() => this.send_post_req(), 1000)

}

function add_dropdown_item(item, category) {
    let new_items = this.state[category].slice()
    new_items.push(item)

    if (category === "diagnosis_list") {
        this.setState({ diagnosis_list: new_items })
    }
    if (category === "medicine_list") {
        this.setState({ medicine_list: new_items })
    }

    if (category === "medicine_dose_list") {
        this.setState({ medicine_dose_list: new_items })
    }

    setTimeout(() => this.send_post_req(), 2000)

}

function stop_medicine(patient, medicine) {
    let patients = this.state.patients.slice()

    for (let i = 0; i < patients.length; i++) {
        if (patients[i].name === patient.name) {

            for (let j = 0; j < patients[i].medicine.length; j++) {
                if (patients[i].medicine[j] === medicine) {
                    patients[i].medicine[j]["stopped"] = "stopped"
                    break;
                }
            }
        }
    }

    this.setState({ patients: patients })

    setTimeout(() => this.send_post_req(), 2000)

}

function show_patient_profile(patient) {
    this.setState({ selected_patient: [patient] })
}

function remove_selected_patient() {
    this.setState({ selected_patient: [] })
}
