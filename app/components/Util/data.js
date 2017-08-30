

let data = {
    "diagnosis_list": [
        "hypertension",
        "hypotension",
        "cancer",
        "brainworm"
    ],
    "medicine_dose_list": [
        "1+1+0+0",
        "2+1+0+0",
        "2+2+1+0",
        "2+2+2+0",
        "1+2+3+1"
    ],
    "medicine_list": [
        "Panodil - Paracetamol - Tablet - 500 mg",
        "Pancillin - Phenoxymethylpenicillin - Tablet - 0.5 M.IU",
        "Pancillin - Phenoxymethylpenicillin - Tablet - 1 M.IU",
        "Pancillin - Phenoxymethylpenicillin - Tablet - 1.5 M.IU",
        "Benzylpenicillin - Benzylpenicillin - Inj. - 1 M.IU",
        "Benzylpenicillin - Benzylpenicillin - Inj. - 2 M.IU",
        "Benzylpenicillin - Benzylpenicillin - Inj. - 5 M.IU",
        "Furix - Furosemid - Tablet - 40 mg",
        "Locoid - Hydrocortison-17-butyrat - Cream - 0.1%"
    ],
    "patients": [
        {
            "name": "Johnny",
            "birth": "26-07-1990",
            "age": 27,
            "gender": "M",
            "id": 929939,
            "address": "gothenburg/Sweden",
            "phone": "7778880003",
            "smoker": "no",
            "gravida": "no",
            "notes": [
                {
                    "date": "05-08-2017",
                    "title": "note1",
                    "content": "this dude loves programming"
                },
                {
                    "date": "05-08-2016",
                    "title": "note2",
                    "content": "more notes here yay"
                },
                {
                    "date": "05-08-2015",
                    "title": "note3",
                    "content": "We have to make this app awesome"
                },
                {
                    "date": "05-12-2017",
                    "title": "note1",
                    "content": "this dude loves programming"
                },
                {
                    "date": "05-08-2013",
                    "title": "note2",
                    "content": "more notes here yay"
                },
                {
                    "date": "05-08-2016",
                    "title": "note3",
                    "content": "We have to make this app awesome"
                },
                {
                    "date": "05-08-2011",
                    "title": "note2",
                    "content": "more notes here yay"
                },
                {
                    "date": "05-08-2010",
                    "title": "note3",
                    "content": "We have to make this app awesome"
                },
                {
                    "date": "01-08-2017",
                    "title": "note1",
                    "content": "this dude loves programming"
                },
                {
                    "date": "05-11-2004",
                    "title": "note2",
                    "content": "more notes here yay"
                }
            ],
            "vitals": [
                {
                    "date": "03-07-2016",
                    "time": "10:00am",
                    "vitals_id": "object_id",
                    "bloodpressure": {
                        "systolic": 70,
                        "diastolic": 100
                    },
                    "pulse": "500",
                    "temperature": "25C",
                    "respiratory_rate": "50",
                    "saturation": "100 ",
                    "oxygen": "2   "
                },
                {
                    "date": "03-07-2019",
                    "time": "10:00am",
                    "vitals_id": "object_id",
                    "bloodpressure": {
                        "systolic": 70,
                        "diastolic": 100
                    },
                    "pulse": "200",
                    "temperature": "25C",
                    "respiratory_rate": "10",
                    "saturation": "20 ",
                    "oxygen": "6   "
                },
                {
                    "date": "03-07-2016",
                    "time": "10:00am",
                    "vitals_id": "object_id",
                    "bloodpressure": {
                        "systolic": 70,
                        "diastolic": 100
                    },
                    "pulse": "500",
                    "temperature": "25C",
                    "respiratory_rate": "50",
                    "saturation": "100 ",
                    "oxygen": "2   "
                }
            ],
            "medicine": [{
                "start": "11-25-2017",
                "end": "08-25-2018",
                "name": "aspirin",
                "strength": "500ml",
                "dose": "1x1x0x1"
            },
            {
                "start": "11-25-2017",
                "end": "08-25-2018",
                "name": "paracetamol",
                "strength": "1000ml",
                "dose": "2x1x3x3"
            },
            {
                "start": "08-25-2015",
                "end": "08-25-2016",
                "name": "insulin",
                "strength": "200ml",
                "dose": "2x1x3x3"
            }
            ],
            "diagnosis": [
                {
                    "date": "Aug 26th 2017",
                    "diagnosis": "hypertension",
                    "treatment": "some treatment for hypertension"
                },
                {
                    "date": "Aug 26th 2017",
                    "diagnosis": "hypertension",
                    "treatment": "some treatment for hypertension"
                },
                {
                    "date": "Aug 26th 2017",
                    "diagnosis": "hypertension",
                    "treatment": "some treatment for hypertension"
                },
                {
                    "date": "Aug 26th 2017",
                    "diagnosis": "hypertension",
                    "treatment": "some treatment for hypertension"
                },
                {
                    "date": "Aug 26th 2017",
                    "diagnosis": "hypertension",
                    "treatment": "some treatment for hypertension"
                }
            ],
            "appointments": [
                {
                    'title': 'Johnny',
                    'start': new Date(2017, 7, 27, 12, 0, 0),
                    'end': new Date(2017, 7, 27, 13, 0, 0),
                    'desc': 'someone'
                },
                {
                    'title': 'Johnny',
                    'start': new Date(2017, 7, 28, 14, 0, 0),
                    'end': new Date(2017, 7, 28, 15, 0, 0),
                    'desc': 'someone'
                }

            ]
        },
        {
            "name": "Max",
            "birth": "03-02-1998",
            "age": 19,
            "gender": "M",
            "id": 924439,
            "address": "gothenburg/Sweden",
            "phone": "7778880003",
            "smoker": "no",
            "gravida": "no",
            "diagnosis": [
                {
                    "date": "Aug 26th 2017",
                    "diagnosis": "hypertension",
                    "treatment": "some treatment for hypertension"
                }
            ],
            "medicine": [
                {
                    "start": "11-25-2017",
                    "end": "08-25-2018",
                    "name": "aspirin",
                    "strength": "500ml",
                    "dose": "1x1x0x1"
                },
                {
                    "start": "11-25-2017",
                    "end": "08-25-2018",
                    "name": "paracetamol",
                    "strength": "1000ml",
                    "dose": "2x1x3x3"
                },
                {
                    "start": "08-25-2015",
                    "end": "08-25-2016",
                    "name": "insulin",
                    "strength": "200ml",
                    "dose": "2x1x3x3"
                }
            ],
            "notes": [
                {
                    "date": "05-08-2017",
                    "title": "note1",
                    "content": "this dude loves programming"
                },
                {
                    "date": "05-08-2016",
                    "title": "note2",
                    "content": "more notes here yay"
                },
                {
                    "date": "05-08-2015",
                    "title": "note3",
                    "content": "We have to make this app awesome"
                },
                {
                    "date": "05-12-2017",
                    "title": "note1",
                    "content": "this dude loves programming"
                }
            ],
            "vitals": [
                {
                    "date": "03-07-2016",
                    "time": "10:00am",
                    "vitals_id": "object_id",
                    "bloodpressure": {
                        "systolic": 70,
                        "diastolic": 100
                    },
                    "pulse": "500",
                    "temperature": "25C",
                    "respiratory_rate": "50",
                    "saturation": "100 ",
                    "oxygen": "2   "
                },
                {
                    "date": "03-07-2019",
                    "time": "10:00am",
                    "vitals_id": "object_id",
                    "bloodpressure": {
                        "systolic": 70,
                        "diastolic": 100
                    },
                    "pulse": "200",
                    "temperature": "25C",
                    "respiratory_rate": "10",
                    "saturation": "20 ",
                    "oxygen": "6   "
                }
            ],
            "appointments": [
                {
                    'title': 'Max',
                    'start': new Date(2017, 7, 29, 12, 0, 0),
                    'end': new Date(2017, 7, 29, 13, 0, 0),
                    'desc': '  someone'
                },
                {
                    'title': 'Max',
                    'start': new Date(2017, 7, 30, 14, 0, 0),
                    'end': new Date(2017, 7, 31, 15, 0, 0),
                    'desc': '  someone'
                }
            ]
        },
        {
            "name": "Tyler",
            "birth": "23-09-1985",
            "age": 32,
            "gender": "M",
            "id": 329939,
            "address": "Erbil/Iraq",
            "phone": "7778880003",
            "smoker": "no",
            "gravida": "no",
            "diagnosis": [
                {
                    "date": "Aug 26th 2017",
                    "diagnosis": "hypertension",
                    "treatment": "some treatment for hypertension"
                }
            ],
            "medicine": [
                {
                    "start": "11-25-2017",
                    "end": "08-25-2018",
                    "name": "aspirin",
                    "strength": "500ml",
                    "dose": "1x1x0x1"
                },
                {
                    "start": "11-25-2017",
                    "end": "08-25-2018",
                    "name": "paracetamol",
                    "strength": "1000ml",
                    "dose": "2x1x3x3"
                },
                {
                    "start": "08-25-2015",
                    "end": "08-25-2016",
                    "name": "insulin",
                    "strength": "200ml",
                    "dose": "1x1x7x4"
                }
            ],
            "notes": [
                {
                    "date": "05-08-2017",
                    "title": "note1",
                    "content": "this dude loves programming"
                },
                {
                    "date": "05-08-2016",
                    "title": "note2",
                    "content": "more notes here yay"
                },
                {
                    "date": "05-08-2015",
                    "title": "note3",
                    "content": "We have to make this app awesome"
                },
                {
                    "date": "05-12-2017",
                    "title": "note1",
                    "content": "this dude loves programming"
                }
            ],
            "vitals": [
                {
                    "date": "03-07-2016",
                    "time": "10:00am",
                    "vitals_id": "object_id",
                    "bloodpressure": {
                        "systolic": 70,
                        "diastolic": 100
                    },
                    "pulse": "500",
                    "temperature": "25C",
                    "respiratory_rate": "50",
                    "saturation": "100 ",
                    "oxygen": "2   "
                },
                {
                    "date": "03-07-2019",
                    "time": "10:00am",
                    "vitals_id": "object_id",
                    "bloodpressure": {
                        "systolic": 70,
                        "diastolic": 100
                    },
                    "pulse": "200",
                    "temperature": "25C",
                    "respiratory_rate": "10",
                    "saturation": "20 ",
                    "oxygen": "6   "
                }
            ],
            "appointments": [
                {
                    'title': 'Tyler',
                    'start': new Date(2017, 7, 31, 12, 0, 0),
                    'end': new Date(2017, 7, 31, 13, 0, 0),
                    'desc': '  someone'
                },
                {
                    'title': 'Tyler',
                    'start': new Date(2017, 7, 31, 14, 0, 0),
                    'end': new Date(2017, 7, 31, 15, 0, 0),
                    'desc': '  someone'
                }
            ]
        },
        {
            "name": "Julien",
            "birth": "23-09-1982",
            "gender": "M",
            "age": 35,
            "id": 729937,
            "address": "Erbil/Iraq",
            "phone": "7778880003",
            "smoker": "no",
            "gravida": "no",
            "diagnosis": [
                {
                    "date": "Aug 26th 2017",
                    "diagnosis": "hypertension",
                    "treatment": "some treatment for hypertension"
                }
            ],
            "medicine": [
                {
                    "start": "11-25-2017",
                    "end": "08-25-2018",
                    "name": "aspirin",
                    "strength": "500ml",
                    "dose": "1x1x0x1"
                },
                {
                    "start": "11-25-2017",
                    "end": "08-25-2018",
                    "name": "paracetamol",
                    "strength": "1000ml",
                    "dose": "2x1x3x3"
                },
                {
                    "start": "08-25-2015",
                    "end": "08-25-2016",
                    "name": "insulin",
                    "strength": "200ml",
                    "dose": "1x1x7x4"
                }
            ],
            "notes": [{
                "date": "05-08-2017",
                "title": "note1",
                "content": "this dude loves programming"
            },
            {
                "date": "05-08-2016",
                "title": "note2",
                "content": "more notes here yay"
            },
            {
                "date": "05-08-2015",
                "title": "note3",
                "content": "We have to make this app awesome"
            },
            {
                "date": "05-12-2017",
                "title": "note1",
                "content": "this dude loves programming"
            }],
            "vitals": [
                {
                    "date": "03-07-2016",
                    "time": "10:00am",
                    "vitals_id": "object_id",
                    "bloodpressure": {
                        "systolic": 70,
                        "diastolic": 100
                    },
                    "pulse": "500",
                    "temperature": "25C",
                    "respiratory_rate": "50",
                    "saturation": "100 ",
                    "oxygen": "2   "
                },
                {
                    "date": "03-07-2019",
                    "time": "10:00am",
                    "vitals_id": "object_id",
                    "bloodpressure": {
                        "systolic": 70,
                        "diastolic": 100
                    },
                    "pulse": "200",
                    "temperature": "25C",
                    "respiratory_rate": "10",
                    "saturation": "20 ",
                    "oxygen": "6   "
                }
            ],
            "appointments": [
                {
                    'title': 'Julien',
                    'start': new Date(2017, 8, 2, 12, 0, 0),
                    'end': new Date(2017, 8, 2, 13, 0, 0),
                    'desc': '  someone'
                },
                {
                    'title': 'Julien',
                    'start': new Date(2017, 8, 2, 14, 0, 0),
                    'end': new Date(2017, 8, 2, 15, 0, 0),
                    'desc': '  someone'
                }
            ]
        },
        {
            "name": "Lolzie",
            "birth": "26-07-1990",
            "age": 27,
            "gender": "M",
            "id": 3339939,
            "address": "gothenburg/Sweden",
            "phone": "7778880003",
            "smoker": "no",
            "gravida": "no",
            "notes": [
                {
                    "date": "05-08-2017",
                    "title": "note1",
                    "content": "this dude loves programming"
                },
                {
                    "date": "05-08-2016",
                    "title": "note2",
                    "content": "more notes here yay"
                },
                {
                    "date": "05-08-2015",
                    "title": "note3",
                    "content": "We have to make this app awesome"
                },
                {
                    "date": "05-12-2017",
                    "title": "note1",
                    "content": "this dude loves programming"
                },
                {
                    "date": "05-08-2013",
                    "title": "note2",
                    "content": "more notes here yay"
                },
                {
                    "date": "05-08-2016",
                    "title": "note3",
                    "content": "We have to make this app awesome"
                },
                {
                    "date": "05-08-2011",
                    "title": "note2",
                    "content": "more notes here yay"
                },
                {
                    "date": "05-08-2010",
                    "title": "note3",
                    "content": "We have to make this app awesome"
                },
                {
                    "date": "01-08-2017",
                    "title": "note1",
                    "content": "this dude loves programming"
                },
                {
                    "date": "05-11-2004",
                    "title": "note2",
                    "content": "more notes here yay"
                }
            ],
            "vitals": [
                {
                    "date": "03-07-2016",
                    "time": "10:00am",
                    "vitals_id": "object_id",
                    "bloodpressure": {
                        "systolic": 70,
                        "diastolic": 100
                    },
                    "pulse": "500",
                    "temperature": "25C",
                    "respiratory_rate": "50",
                    "saturation": "100 ",
                    "oxygen": "2   "
                },
                {
                    "date": "03-07-2019",
                    "time": "10:00am",
                    "vitals_id": "object_id",
                    "bloodpressure": {
                        "systolic": 70,
                        "diastolic": 100
                    },
                    "pulse": "200",
                    "temperature": "25C",
                    "respiratory_rate": "10",
                    "saturation": "20 ",
                    "oxygen": "6   "
                },
                {
                    "date": "03-07-2016",
                    "time": "10:00am",
                    "vitals_id": "object_id",
                    "bloodpressure": {
                        "systolic": 70,
                        "diastolic": 100
                    },
                    "pulse": "500",
                    "temperature": "25C",
                    "respiratory_rate": "50",
                    "saturation": "100 ",
                    "oxygen": "2   "
                }
            ],
            "medicine": [
                {
                    "start": "11-25-2017",
                    "end": "08-25-2018",
                    "name": "aspirin",
                    "strength": "500ml",
                    "dose": "1x1x0x1"
                },
                {
                    "start": "11-25-2017",
                    "end": "08-25-2018",
                    "name": "paracetamol",
                    "strength": "1000ml",
                    "dose": "2x1x3x3"
                },
                {
                    "start": "08-25-2015",
                    "end": "08-25-2016",
                    "name": "insulin",
                    "strength": "200ml",
                    "dose": "2x1x3x3"
                }
            ],
            "diagnosis": [
                {
                    "date": "Aug 26th 2017",
                    "diagnosis": "hypertension",
                    "treatment": "some treatment for hypertension"
                },
                {
                    "date": "Aug 26th 2017",
                    "diagnosis": "hypertension",
                    "treatment": "some treatment for hypertension"
                },
                {
                    "date": "Aug 26th 2017",
                    "diagnosis": "hypertension",
                    "treatment": "some treatment for hypertension"
                },
                {
                    "date": "Aug 26th 2017",
                    "diagnosis": "hypertension",
                    "treatment": "some treatment for hypertension"
                },
                {
                    "date": "Aug 26th 2017",
                    "diagnosis": "hypertension",
                    "treatment": "some treatment for hypertension"
                }
            ],
            "appointments": [
                {
                    'title': 'Lolzie',
                    'start': new Date(2017, 8, 3, 12, 0, 0),
                    'end': new Date(2017, 8, 3, 13, 0, 0),
                    'desc': '  someone'
                },
                {
                    'title': 'Lolzie',
                    'start': new Date(2017, 8, 4, 14, 0, 0),
                    'end': new Date(2017, 8, 4, 15, 0, 0),
                    'desc': '  someone'
                }
            ]
        },
        {
            "name": "Bane",
            "birth": "26-07-1990",
            "age": 27,
            "gender": "M",
            "id": 229339,
            "address": "gothenburg/Sweden",
            "phone": "7778880003",
            "smoker": "no",
            "gravida": "no",
            "notes": [
                {
                    "date": "05-08-2017",
                    "title": "note1",
                    "content": "this dude loves programming"
                },
                {
                    "date": "05-08-2016",
                    "title": "note2",
                    "content": "more notes here yay"
                },
                {
                    "date": "05-08-2015",
                    "title": "note3",
                    "content": "We have to make this app awesome"
                },
                {
                    "date": "05-12-2017",
                    "title": "note1",
                    "content": "this dude loves programming"
                },
                {
                    "date": "05-08-2013",
                    "title": "note2",
                    "content": "more notes here yay"
                },
                {
                    "date": "05-08-2016",
                    "title": "note3",
                    "content": "We have to make this app awesome"
                },
                {
                    "date": "05-08-2011",
                    "title": "note2",
                    "content": "more notes here yay"
                },
                {
                    "date": "05-08-2010",
                    "title": "note3",
                    "content": "We have to make this app awesome"
                },
                {
                    "date": "01-08-2017",
                    "title": "note1",
                    "content": "this dude loves programming"
                },
                {
                    "date": "05-11-2004",
                    "title": "note2",
                    "content": "more notes here yay"
                }
            ],
            "vitals": [
                {
                    "date": "03-07-2016",
                    "time": "10:00am",
                    "vitals_id": "object_id",
                    "bloodpressure": {
                        "systolic": 70,
                        "diastolic": 100
                    },
                    "pulse": "500",
                    "temperature": "25C",
                    "respiratory_rate": "50",
                    "saturation": "100 ",
                    "oxygen": "2   "
                },
                {
                    "date": "03-07-2019",
                    "time": "10:00am",
                    "vitals_id": "object_id",
                    "bloodpressure": {
                        "systolic": 70,
                        "diastolic": 100
                    },
                    "pulse": "200",
                    "temperature": "25C",
                    "respiratory_rate": "10",
                    "saturation": "20 ",
                    "oxygen": "6   "
                },
                {
                    "date": "03-07-2016",
                    "time": "10:00am",
                    "vitals_id": "object_id",
                    "bloodpressure": {
                        "systolic": 70,
                        "diastolic": 100
                    },
                    "pulse": "500",
                    "temperature": "25C",
                    "respiratory_rate": "50",
                    "saturation": "100 ",
                    "oxygen": "2   "
                }
            ],
            "medicine": [
                {
                    "start": "11-25-2017",
                    "end": "08-25-2018",
                    "name": "aspirin",
                    "strength": "500ml",
                    "dose": "1x1x0x1"
                },
                {
                    "start": "11-25-2017",
                    "end": "08-25-2018",
                    "name": "paracetamol",
                    "strength": "1000ml",
                    "dose": "2x1x3x3"
                },
                {
                    "start": "08-25-2015",
                    "end": "08-25-2016",
                    "name": "insulin",
                    "strength": "200ml",
                    "dose": "2x1x3x3"
                }
            ],
            "diagnosis": [
                {
                    "date": "Aug 26th 2017",
                    "diagnosis": "hypertension",
                    "treatment": "some treatment for hypertension"
                },
                {
                    "date": "Aug 26th 2017",
                    "diagnosis": "hypertension",
                    "treatment": "some treatment for hypertension"
                },
                {
                    "date": "Aug 26th 2017",
                    "diagnosis": "hypertension",
                    "treatment": "some treatment for hypertension"
                },
                {
                    "date": "Aug 26th 2017",
                    "diagnosis": "hypertension",
                    "treatment": "some treatment for hypertension"
                },
                {
                    "date": "Aug 26th 2017",
                    "diagnosis": "hypertension",
                    "treatment": "some treatment for hypertension"
                }
            ],
            "appointments": [
                {
                    'title': 'Bane',
                    'start': new Date(2017, 8, 5, 12, 0, 0),
                    'end': new Date(2017, 8, 5, 13, 0, 0),
                    'desc': '  someone'
                },
                {
                    'title': 'Bane',
                    'start': new Date(2017, 8, 5, 14, 0, 0),
                    'end': new Date(2017, 8, 5, 15, 0, 0),
                    'desc': '  someone'
                }
            ]
        },
        {
            "name": "Batman",
            "birth": "26-07-1990",
            "age": 27,
            "gender": "M",
            "id": 777939,
            "address": "gothenburg/Sweden",
            "phone": "7778880003",
            "smoker": "no",
            "gravida": "no",
            "notes": [
                {
                    "date": "05-08-2017",
                    "title": "note1",
                    "content": "this dude loves programming"
                },
                {
                    "date": "05-08-2016",
                    "title": "note2",
                    "content": "more notes here yay"
                },
                {
                    "date": "05-08-2015",
                    "title": "note3",
                    "content": "We have to make this app awesome"
                },
                {
                    "date": "05-12-2017",
                    "title": "note1",
                    "content": "this dude loves programming"
                },
                {
                    "date": "05-08-2013",
                    "title": "note2",
                    "content": "more notes here yay"
                },
                {
                    "date": "05-08-2016",
                    "title": "note3",
                    "content": "We have to make this app awesome"
                },
                {
                    "date": "05-08-2011",
                    "title": "note2",
                    "content": "more notes here yay"
                },
                {
                    "date": "05-08-2010",
                    "title": "note3",
                    "content": "We have to make this app awesome"
                },
                {
                    "date": "01-08-2017",
                    "title": "note1",
                    "content": "this dude loves programming"
                },
                {
                    "date": "05-11-2004",
                    "title": "note2",
                    "content": "more notes here yay"
                }
            ],
            "vitals": [
                {
                    "date": "03-07-2016",
                    "time": "10:00am",
                    "vitals_id": "object_id",
                    "bloodpressure": {
                        "systolic": 70,
                        "diastolic": 100
                    },
                    "pulse": "500",
                    "temperature": "25C",
                    "respiratory_rate": "50",
                    "saturation": "100 ",
                    "oxygen": "2   "
                },
                {
                    "date": "03-07-2019",
                    "time": "10:00am",
                    "vitals_id": "object_id",
                    "bloodpressure": {
                        "systolic": 70,
                        "diastolic": 100
                    },
                    "pulse": "200",
                    "temperature": "25C",
                    "respiratory_rate": "10",
                    "saturation": "20 ",
                    "oxygen": "6   "
                },
                {
                    "date": "03-07-2016",
                    "time": "10:00am",
                    "vitals_id": "object_id",
                    "bloodpressure": {
                        "systolic": 70,
                        "diastolic": 100
                    },
                    "pulse": "500",
                    "temperature": "25C",
                    "respiratory_rate": "50",
                    "saturation": "100 ",
                    "oxygen": "2   "
                }
            ],
            "medicine": [
                {
                    "start": "11-25-2017",
                    "end": "08-25-2018",
                    "name": "aspirin",
                    "strength": "500ml",
                    "dose": "1x1x0x1"
                },
                {
                    "start": "11-25-2017",
                    "end": "08-25-2018",
                    "name": "paracetamol",
                    "strength": "1000ml",
                    "dose": "2x1x3x3"
                },
                {
                    "start": "08-25-2015",
                    "end": "08-25-2016",
                    "name": "insulin",
                    "strength": "200ml",
                    "dose": "2x1x3x3"
                }
            ],
            "diagnosis": [
                {
                    "date": "Aug 26th 2017",
                    "diagnosis": "hypertension",
                    "treatment": "some treatment for hypertension"
                },
                {
                    "date": "Aug 26th 2017",
                    "diagnosis": "hypertension",
                    "treatment": "some treatment for hypertension"
                },
                {
                    "date": "Aug 26th 2017",
                    "diagnosis": "hypertension",
                    "treatment": "some treatment for hypertension"
                },
                {
                    "date": "Aug 26th 2017",
                    "diagnosis": "hypertension",
                    "treatment": "some treatment for hypertension"
                },
                {
                    "date": "Aug 26th 2017",
                    "diagnosis": "hypertension",
                    "treatment": "some treatment for hypertension"
                }
            ],
            "appointments": [
                {
                    'title': 'Batman',
                    'start': new Date(2017, 8, 2, 15, 0, 0),
                    'end': new Date(2017, 8, 2, 16, 0, 0),
                    'desc': 'someone'
                },
                {
                    'title': 'Batman',
                    'start': new Date(2017, 8, 2, 9, 0, 0),
                    'end': new Date(2017, 8, 2, 10, 0, 0),
                    'desc': 'someone'
                }
            ]
        },
        {
            "name": "Luke",
            "birth": "26-07-1990",
            "age": 27,
            "gender": "M",
            "id": 669939,
            "address": "gothenburg/Sweden",
            "phone": "7778880003",
            "smoker": "no",
            "gravida": "no",
            "notes": [
                {
                    "date": "05-08-2017",
                    "title": "note1",
                    "content": "this dude loves programming"
                },
                {
                    "date": "05-08-2016",
                    "title": "note2",
                    "content": "more notes here yay"
                },
                {
                    "date": "05-08-2015",
                    "title": "note3",
                    "content": "We have to make this app awesome"
                },
                {
                    "date": "05-12-2017",
                    "title": "note1",
                    "content": "this dude loves programming"
                },
                {
                    "date": "05-08-2013",
                    "title": "note2",
                    "content": "more notes here yay"
                },
                {
                    "date": "05-08-2016",
                    "title": "note3",
                    "content": "We have to make this app awesome"
                },
                {
                    "date": "05-08-2011",
                    "title": "note2",
                    "content": "more notes here yay"
                },
                {
                    "date": "05-08-2010",
                    "title": "note3",
                    "content": "We have to make this app awesome"
                },
                {
                    "date": "01-08-2017",
                    "title": "note1",
                    "content": "this dude loves programming"
                },
                {
                    "date": "05-11-2004",
                    "title": "note2",
                    "content": "more notes here yay"
                }
            ],
            "vitals": [
                {
                    "date": "03-07-2016",
                    "time": "10:00am",
                    "vitals_id": "object_id",
                    "bloodpressure": {
                        "systolic": 70,
                        "diastolic": 100
                    },
                    "pulse": "500",
                    "temperature": "25C",
                    "respiratory_rate": "50",
                    "saturation": "100 ",
                    "oxygen": "2   "
                },
                {
                    "date": "03-07-2019",
                    "time": "10:00am",
                    "vitals_id": "object_id",
                    "bloodpressure": {
                        "systolic": 70,
                        "diastolic": 100
                    },
                    "pulse": "200",
                    "temperature": "25C",
                    "respiratory_rate": "10",
                    "saturation": "20 ",
                    "oxygen": "6   "
                },
                {
                    "date": "03-07-2016",
                    "time": "10:00am",
                    "vitals_id": "object_id",
                    "bloodpressure": {
                        "systolic": 70,
                        "diastolic": 100
                    },
                    "pulse": "500",
                    "temperature": "25C",
                    "respiratory_rate": "50",
                    "saturation": "100 ",
                    "oxygen": "2   "
                }
            ],
            "medicine": [
                {
                    "start": "11-25-2017",
                    "end": "08-25-2018",
                    "name": "aspirin",
                    "strength": "500ml",
                    "dose": "1x1x0x1"
                },
                {
                    "start": "11-25-2017",
                    "end": "08-25-2018",
                    "name": "paracetamol",
                    "strength": "1000ml",
                    "dose": "2x1x3x3"
                },
                {
                    "start": "08-25-2015",
                    "end": "08-25-2016",
                    "name": "insulin",
                    "strength": "200ml",
                    "dose": "2x1x3x3"
                }
            ],
            "diagnosis": [
                {
                    "date": "Aug 26th 2017",
                    "diagnosis": "hypertension",
                    "treatment": "some treatment for hypertension"
                },
                {
                    "date": "Aug 26th 2017",
                    "diagnosis": "hypertension",
                    "treatment": "some treatment for hypertension"
                },
                {
                    "date": "Aug 26th 2017",
                    "diagnosis": "hypertension",
                    "treatment": "some treatment for hypertension"
                },
                {
                    "date": "Aug 26th 2017",
                    "diagnosis": "hypertension",
                    "treatment": "some treatment for hypertension"
                },
                {
                    "date": "Aug 26th 2017",
                    "diagnosis": "hypertension",
                    "treatment": "some treatment for hypertension"
                }
            ],
            "appointments": [
                {
                    'title': 'Luke',
                    'start': new Date(2017, 8, 2, 8, 0, 0),
                    'end': new Date(2017, 8, 2, 10, 0, 0),
                    'desc': '  someone'
                },
                {
                    'title': 'Luke',
                    'start': new Date(2017, 8, 2, 12, 0, 0),
                    'end': new Date(2017, 8, 2, 13, 0, 0),
                    'desc': '  someone'
                }
            ]
        }
    ]
}

export default data