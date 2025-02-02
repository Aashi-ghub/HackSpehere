import React from 'react';
import Layout from '../components/Layout';
import Navigation from '../components/Navigation';
import ThemeList from '../components/ThemeList';
const ThemesPage = () => {
  return (
    <Layout>
       <Navigation />
       <ThemeList/>
    </Layout>
  );
};

export default ThemesPage;