import React from 'react';

const About = () => {
    return (
        <div className=' container w-50 mx-auto'>
            <h3 className='mt-5 text-center text-success'>Contact Us</h3>
            <form>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Name</label>
                    <input type="name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />

                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Phone</label>
                    <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>

                <button type="submit" class="button-color">Submit</button>
            </form>
        </div>
    );
};

export default About;