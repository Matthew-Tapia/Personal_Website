"use client";

import ContactForm from "@components/ContactForm";

const page = () => {
  return (
    <div className="h-screen overflow-auto">
      <div className="mt-24 flex justify-center">
        <ContactForm />
      </div>
    </div>
  );
};

export default page;
