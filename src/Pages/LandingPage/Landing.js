import React from "react";
import { ToastProvider } from "react-toast-notifications";
import Form from "./Components/Form";
import Hero from "./Components/Hero";

function Landing() {
    return (
        <ToastProvider>
            <div>
                <section className="my-5">
                    <Hero />
                </section>

                <section
                    className="ui container formCon my-8"
                    id="formContainer"
                >
                    <Form />
                </section>
            </div>
        </ToastProvider>
    );
}

export default Landing;
