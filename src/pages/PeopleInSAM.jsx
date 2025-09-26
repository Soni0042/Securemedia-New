import React from "react";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet";

const teamMembers = [
  { role: "Sales Manager-International & Domestic", image: "/akshit.png" },
  { role: "Sales Manager", image: "/wahid.png" },
  { role: "Affiliate Marketing Manager", image: "/rishabh.png" },
  { role: "Sr.Digital Marketer", image: "/rachi.png" },
  { role: "Affiliate Marketing Executive", image: "/abhishek.png" },
  { role: "Affiliate Marketing Executive", image: "/jitesh.png" },
  { role: "Digital Marketing Executive", image: "/aditya.png" },
  { role: "Digital Marketing Executive", image: "/irshad.png" },
  { role: "Web Developer", image: "/piyush.png" },
  { role: "Affiliate Marketing Executive ", image: "/manshi.png" },
  { role: "Affiliate Marketing Executive", image: "/priyanshu.png" },
  { role: "Digital Marketing Executive", image: "/kajal.png" },
  { role: "Digital Marketing Executive", image: "/sandeep.png" },
];

const styles = {
  section: {
    padding: "60px 20px",
    maxWidth: 1100,
    margin: "0 auto",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: "#333",
  },
  heading: {
    textAlign: "center",
    fontSize: "2.5rem",
    marginBottom: 10,
    fontWeight: "700",
  },
  subHeading: {
    textAlign: "center",
    marginBottom: 50,
    color: "#666",
    fontSize: "1.125rem",
    maxWidth: 600,
    marginLeft: "auto",
    marginRight: "auto",
    lineHeight: 1.5,
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: 30,
  },
  card: {
    borderRadius: 12,
    backgroundColor: "#ffffff",
    boxShadow: "0 4px 15px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    cursor: "default",
    overflow: "hidden",
  },
  cardHover: {
    transform: "translateY(-8px)",
    boxShadow: "0 8px 25px rgba(0, 0, 0, 0.15)",
    cursor: "pointer",
  },
  image: {
    width: "100%",
    height: "auto",
    objectFit: "cover",
    display: "block",
  },
  content: {
    padding: 20,
  },
  name: {
    fontSize: "1.25rem",
    fontWeight: "600",
    marginBottom: 8,
    color: "#1a202c",
  },
  role: {
    fontSize: "1rem",
    color: "#718096",
  },
};

const PeopleInSAM = () => {
  
  const [hoveredIndex, setHoveredIndex] = React.useState(null);

  return (
    <>
    <Helmet>
      <title>People in SAM and Their Roles in Software Asset Management</title>
      <meta
        name="description"
        content="Discover the people in SAM, their roles, and responsibilities. Learn how each person contributes to effective software asset management success."
      />
      <link rel="canonical" href="https://thesecuremedia.com/people-in-sam" />
    </Helmet>
      <section style={styles.section}>
        <h1 className="text-4xl text-center md:text-5xl mb-4">
          OUR <span className="text-red-600">TEAM</span>
        </h1>
        <p style={styles.subHeading}>
          Get acquainted with the people who infuse creativity, technology, and
          passion into our work to craft your digital success.
        </p>
        <div style={styles.grid}>
          {teamMembers.map((member, idx) => (
            <div
              key={idx}
              style={{
                ...styles.card,
                ...(hoveredIndex === idx ? styles.cardHover : {}),
              }}
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img src={member.image} alt={member.name} style={styles.image} />
              <div style={styles.content}>
                <div style={styles.name}>{member.name}</div>
                <div style={styles.role}>{member.role}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default PeopleInSAM;
