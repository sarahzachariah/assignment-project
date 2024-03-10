import { useState } from 'react'
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
} from '@siemens/ix-react';

import '../App.css'

function New_User() {
  const [count, setCount] = useState(0)
  
  // const { register, handleSubmit, formState } = useForm({
  //   defaultValues: {
  //     firstName: undefined,
  //     lastName: undefined,
  //     userName: undefined,
  //   },
  //   shouldFocusError: false,
  //   shouldUseNativeValidation: true,
  // });

  // const onSubmit = (data: any) => {
  //   console.log(data);
  // };

  return (
    <>
      <div className="wrapper">
        <h1 className='header-title'>User List</h1>
      </div>
      <form
        className="needs-validation "
        noValidate
        // onSubmit={handleSubmit(onSubmit)}
      >
        <IxLayoutGrid>
          <IxRow>
            <IxCol size="8" size-md="3">
              <label htmlFor="validationCustom01">Full name</label>
              <input
                type="text"
                className='is-invalid'
                id="validationCustom01"
              />
              {/* <div className="invalid-feedback"> Please choose a first name. </div> */}
              {/* <div className="valid-feedback"> Looks good! </div> */}
            </IxCol>
          </IxRow>
          <IxRow>
            <IxCol size="8" size-md="3">
              <label htmlFor="validationCustom01">Mobile Number</label>
              <input
                type="text"
                className='is-invalid'
                id="validationCustom01"
              />
              {/* <div className="invalid-feedback"> Please choose a first name. </div> */}
              {/* <div className="valid-feedback"> Looks good! </div> */}
            </IxCol>
          </IxRow>
          <IxRow>
            <IxCol size="8" size-md="3">
              <label htmlFor="validationCustom01">Email ID</label>
              <input
                type="text"
                className='is-invalid'
                id="validationCustom01"
              />
              {/* <div className="invalid-feedback"> Please choose a first name. </div> */}
              {/* <div className="valid-feedback"> Looks good! </div> */}
            </IxCol>
          </IxRow>
          <IxRow>
            <IxCol size="8" size-md="3">
              <label htmlFor="validationCustom01">Password</label>
              <input
                type="text"
                className='is-invalid'
                id="validationCustom01"
              />
              {/* <div className="invalid-feedback"> Please choose a first name. </div> */}
              {/* <div className="valid-feedback"> Looks good! </div> */}
            </IxCol>
          </IxRow>
          <IxRow>
            <IxCol size="8" size-md="3">
              <label htmlFor="validationCustom01">Country</label>
              <input
                type="text"
                className='is-invalid'
                id="validationCustom02"
              />
              {/* <IxDropdown trigger="validationCustom02">
                <IxDropdownHeader label="Category"></IxDropdownHeader>
                <IxDropdownItem label="Item 2"></IxDropdownItem>
                <IxDropdownItem label="Item 3"></IxDropdownItem>
                <IxDropdownItem label="Item 4"></IxDropdownItem>
                <IxDivider></IxDivider>
                <IxDropdownItem label="Item 5"></IxDropdownItem>
              </IxDropdown> */}
              {/* <div className="invalid-feedback"> Please choose a first name. </div> */}
              {/* <div className="valid-feedback"> Looks good! </div> */}
            </IxCol>
          </IxRow>

          <IxRow>
            <IxCol>
              <IxButton type="submit">Submit form</IxButton>
            </IxCol>
          </IxRow>
        </IxLayoutGrid>
      </form>
    </>
  )
}

export default New_User
