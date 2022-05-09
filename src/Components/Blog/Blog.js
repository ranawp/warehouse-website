import React from 'react';

const Blog = () => {
    return (
        <div className='container'>
            <h3 className='text-center text-success mt-5'>Difference between Nodejs and JavaScript
            </h3>
            <h4 className='text-success'>Javascript</h4>
            <ul>
                <li> Javascript is programming language. It is used for writing script. </li>
                <li>JavaScript is only for run web browser.</li>
                <li>Usually javascript using for client side.</li>
                <li>Javascript can run in any b rowser.</li>
                <li>Javascript use for frontend development</li>

            </ul>

            <h4 className='text-success'>Nodejs</h4>
            <ul>
                <li>Node js is a run time enviorment</li>
                <li>We can outside of the browser by using nodejs</li>
                <li>It is use for server-side</li>
                <li>Node js can not support HTML tag</li>
                <li>Nodejs use for server side use for server side deployment</li>
            </ul>


            <h2 className='text-center text-success mt-5'>When should you use nodejs and when should you use mongodb</h2>
            <h3 className='text-success'>Node.js</h3>
            <ul>
                <li>Heavy computing server-side:When we have to deal with heavy computing server-side.</li>
                <li>CURD application: We can use CURD oparation by using nodejs very easily.</li>
            </ul>
            <h3 className='text-success'>MongoDb</h3>
            <ul>
                <li>Mongo db is built on scal out architecture</li>
                <li>Mongodb makes it easy for  developers to store structured and unstructure data</li>
                <li>It is stored in JSOn formate. </li>
                <li>It is retrieve data when creating applications with most programming language</li>
            </ul>


            <h3 className='text-center text-success mt-5'>What is the purpose of jwt? and how does it work?</h3>
            <h5 className='text-success'>purpose of jwt</h5>
            <ul>
                <li>JWT use for mechanism to verify of JSON data.</li>
                <li>it is encoded URL.It is safe .</li>
                <li>Its can contain an unlimited amount of data and is cryptographically signed.</li>
                <li> All data will be safe when using JWT. </li>
                <li>No middle can modify data when using JWT. </li>
                <li>It is using for API authentication and server to server authentication.</li>
            </ul>
            <h5 className='text-success'>how does it work?</h5>
            <ul>
                <li>JWt differ from other web token in that they contains a set of claims.</li>
                <li>It tranmit information between two parties.</li>
                <li>It is three parts of string separeted by dots. </li>
            </ul>

        </div>
    );
};

export default Blog;