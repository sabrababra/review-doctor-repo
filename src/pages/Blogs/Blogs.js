import React from 'react';
import UseTitle from '../../hooks/UseTitle';

const Blogs = () => {
    UseTitle('Blogs')
    return (
        <div className=' min-h-[85vh] flex flex-col items-center justify-center'>
            <div className='w-10/12 mx-auto'>
                <div tabIndex={0} className=" mt-4 collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        Difference between SQL and NoSQL
                    </div>
                    <div className="collapse-content">
                        <div className="overflow-x-auto">
                            <table className="table w-full ">
                                {/* <!-- head --> */}
                                <thead>
                                    <tr>
                                        <th></th>
                                        <th>Topics</th>
                                        <th>SQL</th>
                                        <th>No SQL</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* <!-- row 1 --> */}
                                    <tr>
                                        <th>1</th>
                                        <td>Type</td>
                                        <td>RELATIONAL DATABASE MANAGEMENT SYSTEM (RDBMS)</td>
                                        <td>Non-relational or distributed database system.</td>
                                    </tr>
                                    {/* <!-- row 2 --> */}
                                    <tr className="active">
                                        <th>2</th>
                                        <td>Scalability</td>
                                        <td>Vertically Scalable</td>
                                        <td>Horizontally scalable</td>
                                    </tr>
                                    {/* <!-- row 3 --> */}
                                    <tr>
                                        <th>3</th>
                                        <td>Property followed</td>
                                        <td>Follows ACID property</td>
                                        <td>Follows CAP</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div tabIndex={0} className="  mt-4 collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        What is JWT, and how does it work?
                    </div>
                    <div className="collapse-content">
                        <p>JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object. <br />It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP). So the integrity and authenticity of the token can be verified by other parties involved.</p>
                        <p>
                            The purpose of using JWT is not to hide data but to ensure the authenticity of the data. JWT is signed and encoded, not encrypted. <br />

                            JWT is a token based stateless authentication mechanism. Since it is a client-side based stateless session, server doesn't have to completely rely on a datastore(database) to save session information.
                        </p>
                    </div>
                </div>

                <div tabIndex={0} className="  mt-4 collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        What is the difference between javascript and NodeJS?
                    </div>
                    <div className="collapse-content">
                        <div className="overflow-x-auto overflow-hidden ">
                            <table className="table table-zebra w-full">
                                {/* <!-- head --> */}
                                <thead>
                                    <tr>
                                        <th></th>
                                        
                                        <th>Javascript</th>
                                        <th>NodeJS</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* <!-- row 1 --> */}
                                    <tr>
                                        <th>1</th>
                                        
                                        <td>Javascript is a programming language <br /> that is used for writing scripts <br /> on the website.</td>
                                        <td>NodeJS is a Javascript <br /> runtime environment.</td>
                                    </tr>
                                    {/* <!-- row 2 --> */}
                                    <tr>
                                        <th>2</th>
                                     
                                        <td>It is basically used on the client-side.</td>
                                        <td>It is mostly used on the server-side</td>
                                    </tr>
                                    {/* <!-- row 3 --> */}
                                    <tr>
                                        <th>3</th>
                                       
                                        <td>It is the upgraded version of ECMA script <br /> that uses Chrome’s V8 engine written in C++. </td>
                                        <td>Nodejs is written in C, C++ and Javascript.</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>

                <div tabIndex={0} className=" mt-4 collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                    How does NodeJS handle multiple requests at the same time?
                    </div>
                    <div className="collapse-content">
                        <p>NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue.</p>
                        <p>If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Blogs;