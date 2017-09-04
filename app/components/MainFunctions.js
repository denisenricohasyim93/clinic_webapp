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
            diff_years = Math.ceil((time_diff / (1000 * 3600 * 24) / 365))

        updated_patients.unshift({
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
        })

        this.setState({ patients: updated_patients });
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
}

function show_patient_profile(patient) {
    this.setState({ selected_patient: [patient] })
}

function remove_selected_patient() {
    this.setState({ selected_patient: [] })
}
