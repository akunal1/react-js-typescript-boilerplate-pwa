/*
 * FeaturePage
 *
 * List all the features
 */
import * as React from 'react';
import { Helmet } from 'react-helmet-async';

export default function FeaturePage() {
  return (
    <div>
      <Helmet>
        <title>Feature Page</title>
        <meta
          name="description"
          content="Feature page of React.js Boilerplate application"
        />
      </Helmet>
      <p>2nd page</p>
    </div>
  );
}
