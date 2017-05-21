import { CustomComment } from './index';

export const defaultComments: CustomComment[] =
    [
        {
            id: 0,
            name: "No DICOM data",
            value: "No DICOM data in the archive."
        },
        {
            id: 1,
            name: "Expired data",
            value: "The data has expired. Study date:"
        },
        {
            id: 2,
            name: "Slice thickness/increment",
            value: "Slice thickness = ..mm.Increment = ..mm."
        },
        {
            id: 3,
            name: "No graft data",
            value: "No graft data in the archive."
        },
        {
            id: 4,
            name: "Small cut-off",
            value: "Small cut-off at the ."
        },
        {
            id: 5,
            name: "Gantry tilt",
            value: "Gantry tilt detected. Corrected by mimics: Switched:"
        },
        {
            id: 6,
            name: "Patient's data doesn’t match",
            value: "Patient's data doesn’t match."
        },
        {
            id: 7,
            name: "FOV doesn’t cover ROI completely",
            value: "FOV doesn’t cover ROI completely."
        },
        {
            id: 8,
            name: "Less than 20mm",
            value: "Less than 20mm around defect area."
        },
        {
            id: 9,
            name: "Condylar heads are not in the fossae",
            value: "Condylar heads are not in the fossae."
        },
        {
            id: 10,
            name: "Confirm ROI.",
            value: "Please confirm ROI."
        },
        {
            id: 11,
            name: "Please confirm if we can proceed",
            value: "Please confirm if we can proceed."
        }
    ]