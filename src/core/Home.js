import React from 'react';
import Layout from './Layout'

const Home = (props) => {

    return (
        <div>
            {/* this is a protected route */}
            <Layout>
                <h2>Welcome to Firebase Authentication</h2>

            </Layout>

        </div>
    )

}

export default Home;
