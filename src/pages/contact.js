import React, { useEffect, useState } from 'react'
import validator from 'validator'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { Input, Textarea } from '../components/styled'
import { useTheme } from '../contexts/theme.context'

export default () => {
  const { mode } = useTheme()
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [showInvalidEmailAlert, setShowInvalidEmailAlert] = useState(false)
  const [validForm, setValidForm] = useState(false)

  const handleChange = e => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const validateEmail = () => {
    const { email } = formState
    if (email.length > 0) {
      setShowInvalidEmailAlert(!validator.isEmail(email))
    }
  }

  const validateForm = () => {
    const { name, email, message } = formState
    const validEmail = validator.isEmail(email)

    if (validEmail) {
      setShowInvalidEmailAlert(false)
    }

    setValidForm(name.length > 0 && validEmail && message.length > 0)
  }

  useEffect(validateForm, [formState])

  const { name, email, message } = formState

  return (
    <>
      <SEO title="contact" />
      <Layout>
        <div className="flex flex-col items-center justify-center w-full">
          <div className="w-full max-w-2xl">
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
              <input type="hidden" name="form-name" value="contact-form" />
              {/* This field is used by netlify as a honeypot for extra security
                https://docs.netlify.com/forms/spam-filters/#honeypot-field	*/}
              <div hidden>
                <label>
                  only a bot would fill this out: <input name="bot-field" />
                </label>
              </div>
              <div className="flex flex-wrap mb-2 -mx-3">
                <div className="w-full px-3 mb-6 md:w-1/2 md:mb-0">
                  <Input
                    id="name"
                    type="text"
                    className="w-full px-4 py-2 border-2 border-gray-400 rounded-md appearance-none focus:outline-none focus:border-purple-600"
                    name="name"
                    placeholder="name"
                    value={name}
                    onChange={handleChange}
                  />
                </div>
                <div className="w-full px-3 md:w-1/2">
                  <Input
                    id="email"
                    name="email"
                    className={`appearance-none border-2 border-gray-400 rounded-md w-full py-2 px-4 focus:outline-none focus:border-purple-600
                    ${showInvalidEmailAlert && 'border-red-500'}`}
                    placeholder="email"
                    value={email}
                    onChange={handleChange}
                    onBlur={validateEmail}
                  />
                  <p
                    className={`text-red-500 text-xs font-bold font-italic ${!showInvalidEmailAlert &&
                      'invisible'}`}
                  >
                    invalid email
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap mb-6 -mx-3">
                <div className="w-full px-3">
                  <Textarea
                    id="message"
                    name="message"
                    className="block w-full px-4 py-3 mb-3 bg-gray-200 border-2 border-gray-400 rounded-md appearance-none focus:outline-none focus:border-purple-600"
                    type="text"
                    rows="5"
                    placeholder="message"
                    value={message}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="flex items-center justify-end">
                <button
                  className={`bg-purple-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:shadow-outline ${!validForm &&
                    'opacity-50 cursor-not-allowed'}`}
                  type="submit"
                  disabled={!validForm}
                >
                  send
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
