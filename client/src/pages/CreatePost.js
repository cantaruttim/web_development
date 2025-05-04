import React from 'react'
import { Formik, Form, Field } from 'formik'
import '../App.css';

function CreatePost() {
    return (
        <div className="createPostPage">
            {/* initialValues={ } onSubmit={ } validationSchema={ } */}
            <Formik>
                <Form className="formContainer">
                    <label>Title: </label>
                    <Field
                        id="input_create_post"
                        name="title"
                        placeholder="post title"
                    />

                    <label>Post: </label>
                    <Field
                        id="input_create_post"
                        name="postText"
                        placeholder="Your Post here ... "
                    />

                    <label>Username: </label>
                    <Field
                        id="input_create_post"
                        name="username"
                        placeholder="Your Username here ... "
                    />

                    <button type='submit'>Create Post</button>
                </Form>
            </Formik>
        </div>
    )
}

export default CreatePost
