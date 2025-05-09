import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import '../App.css';
import * as Yup from 'yup'
import axios from 'axios'

function CreatePost() {

    const initialValues = {
        title: "",
        postText: "",
        username: ""
    }

    const validationSchema = Yup.object().shape({
        title: Yup.string().required(),
        postText: Yup.string().required(),
        username: Yup.string().min(3).max(20).required()
    })

    const onSubmit = (data) => {
        // console.log(data);

        axios.post('http://localhost:3001/posts', data).then((response) => {
            console.log("Data submite successfully!");
        })
    }

    return (
        <div className="createPostPage">
            <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                <Form className="formContainer">
                    <label>Title: </label>
                    <ErrorMessage name="title" component="span" />
                    <Field
                        autocomplete="off"
                        id="inputCreatePost"
                        name="title"
                        placeholder="post title"
                    />

                    <label>Post: </label>
                    <ErrorMessage name="postText" component="span" />
                    <Field
                        autocomplete="off"
                        id="inputCreatePost"
                        name="postText"
                        placeholder="Your Post here ... "
                    />

                    <label>Username: </label>
                    <ErrorMessage name="username" component="span" />
                    <Field
                        autocomplete="off"
                        id="inputCreatePost"
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
