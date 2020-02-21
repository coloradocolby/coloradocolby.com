import React, { Component } from "react"
import validator from "validator"

import Head from "../components/head"
import Layout from "../components/layout"

import { FaUser, FaEnvelope, FaExclamationTriangle } from "react-icons/fa"

// import styles from "./contact.module.scss"
import { P } from "../components/styled"
import styled from "styled-components"
import { textColor, backgroundColor } from "../theme"

const Input = styled.input`
    transition: background-color 0.5s ease-in-out;
    background: ${backgroundColor} !important;
    color: ${textColor} !important;
    border-color: rgba(255, 255, 255, 0.3);
    &:hover {
        border-color: #8a4d76;
    }

    &::placeholder {
        color: #bbbbbb;
    }
`

const TextArea = styled.textarea`
    transition: background-color 0.5s ease-in-out;
    background: ${backgroundColor} !important;
    color: ${textColor} !important;
    border-color: rgba(255, 255, 255, 0.3);

    &:hover {
        border-color: #8a4d76;
    }

    &::placeholder {
        color: #bbbbbb;
    }
`

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
        console.log("this.state", this.state)
    }

    render() {
        const { name, email, message, validForm, validEmail } = this.state

        return (
            <>
                <Head title="Contact" />
                <Layout>
                    <div className="flex justify-center">
                        <div class="w-full">
                            <h3 className="text-xl mb-6">
                                <a
                                    href="https://twitter.com/messages/compose?recipient_id=4227576672"
                                    className="text-primary"
                                >
                                    @coloradocolby
                                </a>{" "}
                                on twitter or fill out the form below
                            </h3>

                            {/* new */}
                            {/* Helpful
                        https://www.netlify.com/blog/2017/07/20/how-to-integrate-netlifys-form-handling-in-a-react-app/ */}
                            <form
                                className="w-full max-w-2xl"
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
                                <div className="flex flex-wrap -mx-3">
                                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                        {/* <label
                                            className="block lowercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                            htmlFor="grid-name"
                                        >
                                            Name
                                        </label> */}
                                        <input
                                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight shadow-sm hover:shadow-md transition-shadow duration-200 focus:outline-none focus:bg-white focus:border-gray-500"
                                            id="name"
                                            type="text"
                                            name="name"
                                            placeholder="joe sakic"
                                            value={name}
                                            onChange={this.handleChange}
                                        />
                                    </div>
                                    <div className="w-full md:w-1/2 px-3">
                                        {/* <label
                                            className="block lowercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                            htmlFor="email"
                                        >
                                            Email
                                        </label> */}
                                        <input
                                            className={`appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight shadow-sm hover:shadow-md transition-shadow duration-200 focus:outline-none focus:bg-white ${!validEmail &&
                                                "border-red-500"}`}
                                            id="email"
                                            type="email"
                                            name="email"
                                            placeholder="jsakic@gmail.com"
                                            value={email}
                                            onChange={this.handleChange}
                                            onBlur={this.validateEmail}
                                        />
                                        <p
                                            className={`text-red-500 text-xs italic ${validEmail &&
                                                "invisible"}`}
                                        >
                                            invalid email
                                        </p>
                                    </div>
                                </div>
                                <div className="flex flex-wrap -mx-3 mb-6">
                                    <div className="w-full px-3">
                                        {/* <label
                                            className="block lowercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                            htmlFor="message"
                                        >
                                            message
                                        </label> */}
                                        <textarea
                                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight  shadow-sm hover:shadow-md transition-shadow duration-200 focus:outline-none focus:bg-white focus:border-gray-500"
                                            placeholder="Great website!"
                                            name="message"
                                            type="text"
                                            id="message"
                                            rows="7"
                                            placeholder="message"
                                            value={message}
                                            onChange={this.handleChange}
                                        />
                                    </div>
                                </div>
                                <div class="flex items-center justify-end">
                                    <button
                                        class="bg-primary-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                        type="button"
                                        disabled={!validForm}
                                    >
                                        submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </Layout>
            </>
        )
    }
}

export default ContactPage
