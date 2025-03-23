import React from 'react';
import Layout from '../components/Layout';
import Navigation from '../components/Navigation';
import RegistrationForm from '../components/RegistrationForm';
import PageHeader from "@/components/PageHeader";
import PageFooter from "@/components/PageFooter";

const Register = () => {
  return (
    <Layout>
      <Navigation /> 

      {/* Add top padding here to prevent PageHeader from being hidden */}
      <div className="min-h-screen w-full flex flex-col items-center justify-center p-4 pt-24 bg-xception-black relative z-10">
        <div className="w-full max-w-4xl my-9 mx-auto">
          <PageHeader />
          <div className="animate-fade-in">
            <RegistrationForm />
          </div>
          <PageFooter />
        </div>
      </div>
    </Layout>
  );
};

export default Register;
