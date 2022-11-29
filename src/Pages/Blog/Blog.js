import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className='container m-auto'>
                <div className='text-center mb-10 '>
                    <h3 className='text-4xl font-bold'>Blog</h3>
                    <p className='pt-5 text-1xl uppercase'> I am so pleased you have found my blog page</p>
                </div>
                <div className=" border border-base-300 rounded mb-6">
                    <div className=" px-4 py-4 border-t border-base-300">1. Qusestion : What are the different ways to manage a state in a React application?</div>
                    <div className=" px-4 py-8 border-t border-base-300"> Answer : The Four Kinds of React State to Manage Local state. Global state. Server state. URL state.</div>
                </div>
                <div className=" border border-base-300 mb-6">
                    <div className=" px-4 py-4 border-t border-base-300">2. Qusestion : How does prototypical inheritance work?</div>
                    <div className=" px-4 py-10 border-t border-base-300"> The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.</div>
                </div>
                <div className=" border border-base-300 mb-6">
                    <div className=" px-4 py-4 border-t border-base-300">3. Qusestion : What is a unit test? Why should we write unit tests?</div>
                    <div className=" px-4 py-10 border-t border-base-300"> Answer : The main objective of unit testing is to isolate written code to test and determine if it works as intended. Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.</div>
                </div>
                <div className=" border border-base-300 mb-6">
                    <div className=" px-4 py-4 border-t border-base-300">4. Qusestion : React vs. Angular vs. Vue?</div>
                    <div className=" px-4 py-10 border-t border-base-300"> Answer : Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option</div>
                </div>
            </div>
        </div>
    );
};

export default Blog;