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
    IxMessageBar,
    IxContent,
    IxContentHeader,
} from "@siemens/ix-react";

function NewUser() {
    const apiBaseUrl = "https://d2d47ezagao0kf.cloudfront.net/api/";

    const [apiMessage, setApiSuccess] = useState(null);
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
        // console.log("Form submitted with data:", formData);
        try {
            const response = fetch(apiBaseUrl + "create", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                mode: "no-cors",
                body: JSON.stringify(formData),
            })
                .then((res) => {
                    return res.text();
                })
                .then(() => {
                    setApiSuccess(true);
                    setFormData({
                        fullname: "",
                        mobile_number: "",
                        email: "",
                        password: "",
                        country: "",
                    });
                    document.getElementById("newuserform").reset();
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

            <IxLayoutGrid>
                <form
                    // className="needs-validation "
                    id="newuserform"
                    noValidate
                    onSubmit={handleSubmit}
                >
                    <IxRow>
                        <IxCol size="12" sizeMd="8" sizeLg="6">
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
                        <IxCol size="12" sizeMd="8" sizeLg="6">
                            <label htmlFor="mobile_number">Mobile Number</label>
                            <input
                                type="tel"
                                pattern="[0-9]{10}"
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
                        <IxCol size="12" sizeMd="8" sizeLg="6">
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
                        <IxCol size="12" sizeMd="8" sizeLg="6">
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
                        <IxCol size="12" sizeMd="8" sizeLg="6">
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
                            <IxButton type="submit">Create</IxButton>
                        </IxCol>
                    </IxRow>
                </form>
            </IxLayoutGrid>

            <IxMessageBar style={
                    apiMessage == null
                        ? { display: "none" }
                        : { display: "block" }
                }>A New User Created</IxMessageBar>
            
        </IxContent>
    );
}

export default NewUser;
