import React, { Component } from "react"
import validator from "validator"

import SEO from "../components/seo"
import Layout from "../components/layout"

import { Span } from "../components/styled"

class ContactPage extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: "",
            email: "",
            message: "",
            validForm: false,
            validEmail: true,
        }
    }

    handleChange = e => {
        this.setState(
            {
                [e.target.name]: e.target.value,
            },
            this.validateForm
        )
    }

    validateEmail = () => {
        const { email } = this.state
        if (email.length > 0) {
            this.setState({
                validEmail: validator.isEmail(email),
            })
        }
    }

    validateForm = () => {
        const { name, email, message } = this.state
        this.setState({
            validForm:
                name.length > 0 &&
                validator.isEmail(email) &&
                message.length > 0,
        })
    }

    render() {
        const { name, email, message, validForm, validEmail } = this.state

        return (
            <>
                <SEO title="contact" />
                <Layout>
                    <div className="w-full flex justify-center flex-col items-center">
                        <div className="w-full max-w-2xl">
                            <h3 className="text-xl mb-6 self-start">
                                <a
                                    href="https://twitter.com/messages/compose?recipient_id=4227576672"
                                    className="text-primary"
                                >
                                    @coloradocolby
                                </a>{" "}
                                <Span>
                                    on twitter or fill out the form below
                                </Span>
                            </h3>
                            <form
                                name="contact-form"
                                method="POST"
                                data-netlify="true"
                                data-netlify-honeypot="bot-field"
                            >
                                {/* The `form-name` hidden field is required to support form submissions without JavaScript 
                            Gatsby strips out input fields that are not included in the JSX form, so you will still need 
                            to add the form-name hidden input field
                            https://www.netlify.com/blog/2017/07/20/how-to-integrate-netlifys-form-handling-in-a-react-app/#step-2 */}
                                <input
                                    type="hidden"
                                    name="form-name"
                                    value="contact-form"
                                />
                                {/* This field is used by netlify as a honeypot for extra security
							https://docs.netlify.com/forms/spam-filters/#honeypot-field	*/}
                                <div hidden>
                                    <label>
                                        only a bot would fill this out:{" "}
                                        <input name="bot-field" />
                                    </label>
                                </div>
                                <div className="flex flex-wrap -mx-3 mb-2">
                                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                        <input
                                            id="name"
                                            type="text"
                                            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700  focus:outline-none focus:bg-white focus:border-primary"
                                            // className="appearance-none block w-full bg-gray-200 text-gray-700 border-2 border-gray-200 rounded py-3 px-4 leading-tight shadow-sm hover:shadow-md transition-shadow duration-200 focus:outline-none focus:bg-white focus:border-gray-500"
                                            name="name"
                                            placeholder="name"
                                            value={name}
                                            onChange={this.handleChange}
                                        />
                                    </div>
                                    <div className="w-full md:w-1/2 px-3">
                                        <input
                                            id="email"
                                            name="email"
                                            className={`bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700  focus:outline-none focus:bg-white focus:border-primary ${!validEmail &&
                                                "border-red-500"}`}
                                            placeholder="email"
                                            value={email}
                                            onChange={this.handleChange}
                                            onBlur={this.validateEmail}
                                        />
                                        <p
                                            className={`text-red-500 text-xs font-bold font-italic ${validEmail &&
                                                "invisible"}`}
                                        >
                                            invalid email
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-wrap -mx-3 mb-6">
                                    <div className="w-full px-3">
                                        <textarea
                                            id="message"
                                            name="message"
                                            className="appearance-none block w-full bg-gray-200 text-gray-700 border-2 border-gray-200 rounded py-3 px-4 mb-3 shadow-sm hover:shadow-md transition-shadow duration-200 focus:outline-none focus:bg-white focus:border-primary"
                                            type="text"
                                            rows="5"
                                            placeholder="message"
                                            value={message}
                                            onChange={this.handleChange}
                                        />
                                    </div>
                                </div>
                                <div class="flex items-center justify-end">
                                    <button
                                        class={`bg-primary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline ${!validForm &&
                                            "opacity-50 cursor-not-allowed"}`}
                                        type="submit"
                                        disabled={!validForm}
                                    >
                                        submit
                                    </button>
                                </div>
                            </form>
                        </div>
                        {/* Helpful
                        https://www.netlify.com/blog/2017/07/20/how-to-integrate-netlifys-form-handling-in-a-react-app/ */}
                    </div>
                </Layout>
            </>
        )
    }
}

export default ContactPage
