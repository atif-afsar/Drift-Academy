export default function AboutStory() {
  return (
    <section className="w-full py-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center px-6">
        
        <div>
          <h2 className="text-3xl font-bold mb-4">Our Story, <span className="text-[#f6821c] ">Mission & Vision</span></h2>
          
          <p className="text-gray-600 leading-relaxed mb-4">
           Drift Academy was founded with a vision to guide students towards top-tier entrance exams such as NEET, JEE, and AMU. Our mission is to provide high-quality coaching that equips learners with strong concepts, disciplined study strategies, and the confidence required to succeed in competitive examinations.
          </p>
          
          <p className="text-gray-600 leading-relaxed">
           We are led by highly experienced mentors from different parts of the country, bringing diverse expertise and proven teaching methodologies. At Drift Academy, we believe in personalized guidance, structured learning plans, and consistent practice—ensuring every student reaches their full academic potential.
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
