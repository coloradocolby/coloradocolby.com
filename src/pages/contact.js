import React, { Component } from "react"
import validator from "validator"

import Head from "../components/head"
import Layout from "../components/layout"

import { FaUser, FaEnvelope, FaExclamationTriangle } from "react-icons/fa"

import styles from "./contact.module.scss"

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
        console.log(this.state)

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
                <Head title="Contact" />
                <Layout>
                    <h2 className="title is-2">dm sliding</h2>
                    <p className="m-b-md">
                        <a href="https://twitter.com/messages/compose?recipient_id=4227576672">
                            @coloradocolby
                        </a>{" "}
                        on twitter or fill out the form below
                    </p>

                    <form
                        method="POST"
                        name="contact-form"
                        data-netlify="true"
                        data-netlify-honeypot="honeypot-field"
                        className={styles.form}
                    >
                        {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                        {/* <input type="hidden" name="form-name" value="contact" /> */}
                        {/* This field is used by netlify as a honeypot for extra security
							https://docs.netlify.com/forms/spam-filters/#honeypot-field	*/}
                        <div hidden>
                            <label>
                                only a bot would fill this out:{" "}
                                <input name="honeypot-field" />
                            </label>
                        </div>
                        <div className="field is-horizontal">
                            <div className="field-body">
                                <div className="field">
                                    <label className="label" htmlFor="name">
                                        name
                                    </label>
                                    <div className="control is-expanded has-icons-left">
                                        <input
                                            className="input"
                                            type="text"
                                            name="name"
                                            value={name}
                                            onChange={this.handleChange}
                                        />
                                        <span className="icon is-small is-left">
                                            <FaUser />
                                        </span>
                                    </div>
                                </div>
                                <div className="field">
                                    <label className="label" htmlFor="email">
                                        email
                                    </label>
                                    <div className="control is-expanded has-icons-left has-icons-right">
                                        <input
                                            className={`input ${!validEmail &&
                                                "is-danger"}`}
                                            type="email"
                                            name="email"
                                            value={email}
                                            onChange={this.handleChange}
                                            onBlur={this.validateEmail}
                                        />
                                        <span className="icon is-small is-left">
                                            <FaEnvelope />
                                        </span>
                                        {!validEmail && (
                                            <span className="icon is-small is-right">
                                                <FaExclamationTriangle />
                                            </span>
                                        )}
                                    </div>
                                    <p
                                        className={`help ${
                                            !validEmail
                                                ? "is-danger"
                                                : "is-invisible"
                                        }`}
                                    >
                                        invalid email
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="field">
                            <label className="label" htmlFor="message">
                                message
                            </label>
                            <div className="control">
                                <textarea
                                    className="textarea"
                                    type="text"
                                    name="message"
                                    value={message}
                                    onChange={this.handleChange}
                                ></textarea>
                            </div>
                        </div>
                        <div className="field">
                            <div className="control">
                                <button
                                    className={`button is-primary ${validForm &&
                                        styles.enabledButton}`}
                                    disabled={!validForm}
                                    type="submit"
                                >
                                    submit
                                </button>
                            </div>
                        </div>
                    </form>
                </Layout>
            </>
        )
    }
}

export default ContactPage
