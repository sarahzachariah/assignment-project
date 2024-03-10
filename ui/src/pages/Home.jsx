import { IxContent, IxContentHeader } from "@siemens/ix-react";

function Home() {
    return (
        <IxContent>
            <IxContentHeader
                slot="header"
                headerTitle="Welcome to Sarah's Assignment"
            ></IxContentHeader>
            This application is built on ReactJS using Vite.js for the frontend. The API is built on Core PHP.
            The application User Experience is developed using Siemens IX.
        </IxContent>
    );
}

export default Home;
