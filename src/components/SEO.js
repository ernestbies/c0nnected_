import React from 'react';
import { Helmet } from 'react-helmet';

const SEO = () => (
    <Helmet title = {'c0nnected_ - STAY CONNECTED'}
            htmlAttributes={{ lang: 'en' }}
            meta={[
                {
                    name: 'description',
                    content: 'Chat room application.',
                }
            ]}
    />
);

export default SEO;
