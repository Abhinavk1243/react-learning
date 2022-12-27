import { Outlet } from 'react-router-dom';
import React from 'react';
const SectionLayout = () => (
  <section className='container'>
    <Outlet />
  </section>
);

export default SectionLayout;