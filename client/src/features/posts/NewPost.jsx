import React from 'react';
import { Form } from 'react-router-dom';


export default function NewPost() {

    return (
    <Form method='post' action='/new' className='newPost'>
        <div>Title</div>
            <input type='text' name='title' />
            <input type='text' name='body' />
        <button type='submit'>Create New Post</button>
    </Form>
    )
}