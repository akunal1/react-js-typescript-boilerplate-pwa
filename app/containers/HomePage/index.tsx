/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function HomePage() {
  return (
    <article>
      <Helmet>
        <title>Home Page: updated V02.0.0.1@8:55</title>
        <meta name="description" content="application homepage" />
      </Helmet>
      <div>Home Page: updated V02.0.0.2@8:55</div>
    </article>
  );
}
