import { useState } from "react";
import {
    IxButton,
    IxCol,
    IxLayoutGrid,
    IxRow,
    IxValidationTooltip,
    IxDivider,
    IxDropdown,
    IxDropdownHeader,
    IxDropdownItem,
    IxContent,
    IxContentHeader,
} from "@siemens/ix-react";

function NewUser() {
    const [flag, setApiSuccess] = useState(0);
    const [formData, setFormData] = useState({
        fullname: "",
        mobile_number: "",
        email: "",
        password: "",
        country: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted with data:", formData);
        try {
            const response = fetch(
                "http://localhost/assignment-project/api/src/index.php/create",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    mode: "no-cors",
                    body: JSON.stringify(formData),
                }
            )
                .then((res) => {
                    return res.json();
                })
                .then((res) => {
                    setApiSuccess(res.message);
                    console.log(res);
                });
        } catch (error) {
            // setError(error.message);
        }
    };

    return (
        <IxContent>
            <IxContentHeader
                slot="header"
                headerTitle="Create a New User"
            ></IxContentHeader>
            <form
                // className="needs-validation "
                noValidate
                onSubmit={handleSubmit}
            >
                <IxLayoutGrid>
                    <IxRow>
                        <IxCol size="8" size-md="3">
                            <label htmlFor="fullname">Full name</label>
                            <input
                                type="text"
                                className="is-invalid"
                                id="fullname"
                                name="fullname"
                                value={formData.fullname}
                                onChange={handleChange}
                            />
                        </IxCol>
                    </IxRow>
                    <IxRow>
                        <IxCol size="8" size-md="3">
                            <label htmlFor="mobile_number">Mobile Number</label>
                            <input
                                type="number"
                                className="is-invalid"
                                id="mobile_number"
                                name="mobile_number"
                                value={formData.mobile_number}
                                onChange={handleChange}
                                maxLength="10"
                            />
                        </IxCol>
                    </IxRow>
                    <IxRow>
                        <IxCol size="8" size-md="3">
                            <label htmlFor="email">Email ID</label>
                            <input
                                type="text"
                                className="is-invalid"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                            />
                        </IxCol>
                    </IxRow>
                    <IxRow>
                        <IxCol size="8" size-md="3">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                className="is-invalid"
                                id="password"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                            />
                        </IxCol>
                    </IxRow>
                    <IxRow>
                        <IxCol size="8" size-md="3">
                            <label htmlFor="country">Country</label>
                            <input
                                type="text"
                                className="is-invalid"
                                id="country"
                                name="country"
                                value={formData.country}
                                onChange={handleChange}
                            />
                        </IxCol>
                    </IxRow>

                    <IxRow>
                        <IxCol>
                            <IxButton type="submit">Submit form</IxButton>
                        </IxCol>
                    </IxRow>
                </IxLayoutGrid>
            </form>
        </IxContent>
    );
}

export default NewUser;
