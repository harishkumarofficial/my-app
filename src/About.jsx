import React from 'react';

const About = () => {
  const sectionStyle = {
    marginBottom: '2rem',
    lineHeight: '1.6',
    fontSize: '1.1rem',
  };

  const headingStyle = {
    fontSize: '1.5rem',
    marginBottom: '1rem',
  };

  const listStyle = {
    listStyleType: 'disc',
    marginLeft: '2rem',
  };

  return (
    <main className='About' style={{ padding: '2rem' }}>
      <section style={sectionStyle}>
        <h1 style={headingStyle}>About Medium</h1>
        <p>
          Welcome to Medium - Where Innovation Meets Functionality!
        </p>
        <p>
          At Medium, we've leveraged cutting-edge technologies to create a seamless and dynamic blogging experience tailored just for you.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2 style={headingStyle}>Our Key Features:</h2>
        <ul style={listStyle}>

          <li>
            <strong>Responsive Design with React Router v6:</strong> Enjoy a seamless navigation experience, with dynamic routes that adapt to your window size. No matter the device, Medium ensures an optimized display.
          </li>
          <br />

          <li>
            <strong>Dynamic Icons Based on Window Size:</strong> Experience a visually appealing interface that adjusts in real-time to your device. Our app intelligently adapts icons to match your screen, providing an intuitive user experience.
          </li>
          <br />

          <li>
            <strong>Efficient Data Retrieval with Axios:</strong> We employ Axios, a powerful HTTP client, to fetch data from external sources. This ensures quick and reliable data retrieval, giving you access to the latest information at your fingertips.
          </li>
          <br />

          <li>
            <strong>Webhook Integration for Real-time Updates:</strong> Stay informed with our webhook integration. Receive instant notifications about new content, keeping you up-to-date with the latest blog posts.
          </li>
          <br />

          <li>
            <strong>Custom Hooks for Enhanced Functionality:</strong> With custom hooks, we've elevated the functionality of Medium. Enjoy a smoother, more intuitive experience as you interact with our app.
          </li>
          <br />

          <li>
            <strong>Local JSON Server for Efficient Data Management:</strong> Our app employs a local JSON server, enabling efficient data management. This ensures a seamless experience when creating, editing, and managing your blog posts.
          </li>
          <br />

        </ul>
      </section>

      <section style={sectionStyle}>
        <h2 style={headingStyle}>Our Commitment:</h2>
        <p>
          At Medium, we are dedicated to providing you with an exceptional blogging platform that combines innovation and functionality. Our team is constantly exploring new technologies and methodologies to enhance your experience.
        </p>
        <p>
          We value your feedback and encourage you to reach out to us with any inquiries, suggestions, or support needs.
        </p>
      </section>

      <section style={sectionStyle}>
        <h2 style={headingStyle}>Contact Us:</h2>
        <p>Email: <a href="mailto:harishkumar.a009@gmail.com">harishkumar.a009@gmail.com</a></p>
        <p>Support: <a href="https://www.buymeacoffee.com/yourusername">Buy me a ☕️</a></p>
        <p>Social Media: <a href="https://www.linkedin.com/in/harish-kumar-82b1a3238/">LinkedIn</a></p>
      </section>


      <section style={sectionStyle}>
        <p>
          Thank you for choosing Medium as your preferred blogging platform. We're excited to embark on this journey with you!
        </p>
      </section>
    </main>
  );
};

export default About;
