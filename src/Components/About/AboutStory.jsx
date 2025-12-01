export default function AboutStory() {
  return (
    <section className="w-full py-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center px-6">
        
        <div>
          <h2 className="text-3xl font-bold mb-4">Our Story, <span className="text-[#f6821c] ">Mission & Vision</span></h2>
          
          <p className="text-gray-600 leading-relaxed mb-4">
            Drift Academy was established with the goal of bridging the gap between 
            students and the industry. Our mission is to empower learners with the 
            knowledge, skills, and confidence required to excel in their careers.
          </p>
          
          <p className="text-gray-600 leading-relaxed">
            We believe in personalized mentorship, structured learning, and real-world 
            practical exposure to ensure every learner achieves their highest potential.
          </p>
        </div>

        <img
          src="https://driftacademy.in/images/grp.jpg"
          alt="our team"
          className="rounded-2xl w-full shadow-lg"
        />
      </div>
    </section>
  );
}
