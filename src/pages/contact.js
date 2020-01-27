import React, { Component } from "react"
import validator from "validator"

import Head from "../components/head"
import Layout from "../components/layout"

import { FaUser, FaEnvelope, FaExclamationTriangle } from "react-icons/fa"

import contactStyles from "./contact.module.scss"

function encode(data) {
    console.log("data", data)
    const formData = new FormData()

    for (const key of Object.keys(data)) {
        console.log(key, data[key])
        formData.append(key, data[key])
        console.log("fd", formData)
    }

    console.log("returning formData", formData)
    return formData
}

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

    /**
     * https://docs.netlify.com/forms/setup/#submit-forms-via-ajax
     */
    handleSubmit = e => {
        e.preventDefault()
        const form = e.target
        fetch("/", {
            method: "POST",
            body: encode({
                "form-name": form.getAttribute("name"),
                ...this.state,
            }),
        })
            .then(() => console.log("submit success"))
            .catch(error => alert(error))
    }

    handleChange = e => {
        this.setState(
            {
                [e.target.id]: e.target.value,
            },
            this.validateForm
        )
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

    validateEmail = () => {
        const { email } = this.state
        if (email.length > 0) {
            this.setState({
                validEmail: validator.isEmail(email),
            })
        }
    }

    removeNotification = () => {
        this.setState({ showNotification: false })
    }

    render() {
        const { name, email, message, validForm, validEmail } = this.state

        return (
            <>
                <Head title="Contact" />
                <Layout>
                    <h1 className="title is-1">dm sliding</h1>

                    {/* 
          revisit this twitter dm widget button when you can figure out a good
          way to tell when the button has loaded, otherwise you see the jumpiness of it
          defaulting to @coloradocolby and then turning into the loaded button widget
          NOTE: you will need to uncomment out the twitter script in gatsby-ssr.js
          */}
                    {/* <p className="m-b-md">
            <a
              href="https://twitter.com/messages/compose?recipient_id=4227576672"
              className="twitter-dm-button is-lowercase m-r-sm"
              data-screen-name="@coloradocolby"
            >
              @coloradocolby
            </a>{" "}
            on twitter or fill out the form below
          </p> */}
                    <p className="m-b-md">
                        <a href="https://twitter.com/messages/compose?recipient_id=4227576672">
                            @coloradocolby
                        </a>{" "}
                        on twitter or fill out the form below
                    </p>

                    <form
                        name="contactme"
                        method="POST"
                        data-netlify="true"
                        data-netlify-honeypot="bot-field"
                        onSubmit={this.handleSubmit}
                        className={contactStyles.form}
                    >
                        {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                        <input
                            type="hidden"
                            name="form-name"
                            value="file-upload"
                        />
                        <div hidden>
                            <label>
                                Don’t fill this out:{" "}
                                <input
                                    name="bot-field"
                                    onChange={this.handleChange}
                                />
                            </label>
                        </div>
                        <div className="field is-horizontal">
                            <div className="field-body">
                                <div className="field">
                                    <label className="label">name</label>
                                    <div className="control is-expanded has-icons-left">
                                        <input
                                            id="name"
                                            name="name"
                                            className="input"
                                            type="text"
                                            onChange={this.handleChange}
                                            value={name}
                                        />
                                        <span className="icon is-small is-left">
                                            <FaUser />
                                        </span>
                                    </div>
                                </div>
                                <div className="field">
                                    <label className="label">email</label>
                                    <div className="control is-expanded has-icons-left has-icons-right">
                                        <input
                                            id="email"
                                            name="email"
                                            className={`input ${!validEmail &&
                                                "is-danger"}`}
                                            type="email"
                                            onChange={this.handleChange}
                                            onBlur={this.validateEmail}
                                            value={email}
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
                            <label className="label">message</label>
                            <div className="control">
                                <textarea
                                    id="message"
                                    name="message"
                                    className="textarea"
                                    onChange={this.handleChange}
                                    value={message}
                                ></textarea>
                            </div>
                        </div>
                        <div className="field">
                            <div className="control">
                                <button
                                    className={`button is-primary ${validForm &&
                                        contactStyles.enabledButton}`}
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
