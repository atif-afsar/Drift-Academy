import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const BlogDetail = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const blogContent = {
    1: {
      image: '/images/jee.jpg',
      tag: 'Exam Tips',
      title: 'Decoding the Latest Exam Pattern',
      author: 'Dr. Ramesh Kumar',
      date: 'Dec 5, 2025',
      readTime: '8 min read',
      content: [
        {
          type: 'paragraph',
          text: 'The examination landscape has undergone significant changes in recent years. Understanding the latest exam patterns is crucial for students aiming to score well. This comprehensive guide will help you navigate these changes and prepare effectively.'
        },
        {
          type: 'subheading',
          text: 'What Changed in This Year\'s Pattern?'
        },
        {
          type: 'paragraph',
          text: 'The board has introduced several modifications to streamline the examination process and focus on conceptual understanding rather than rote learning. The weightage distribution has been adjusted to emphasize practical application of knowledge. Multiple question formats have been incorporated to test different levels of understanding.'
        },
        {
          type: 'subheading',
          text: 'Key Modifications to Note'
        },
        {
          type: 'paragraph',
          text: 'The duration of papers has been optimized for better time management. Internal assessment components have been increased to encourage continuous learning. The MCQ section now includes both single-answer and multiple-answer questions. Negative marking has been reduced to give students more confidence.'
        },
        {
          type: 'subheading',
          text: 'How to Adapt Your Study Strategy'
        },
        {
          type: 'paragraph',
          text: 'Start by analyzing the new marking scheme in detail. Practice with the latest sample papers and mock tests. Focus on understanding concepts rather than memorizing facts. Allocate more time to application-based problems and case studies.'
        },
        {
          type: 'subheading',
          text: 'Tips for Success'
        },
        {
          type: 'paragraph',
          text: 'Create a study schedule that addresses all question types. Take regular mock tests to familiarize yourself with the new pattern. Review your performance and identify weak areas. Join study groups to discuss complex topics and gain different perspectives.'
        },
        {
          type: 'subheading',
          text: 'Subject-Wise Preparation Strategies'
        },
        {
          type: 'paragraph',
          text: 'Each subject requires a unique approach under the new pattern. For mathematics, focus on solving diverse problem types and understanding the logic behind formulas. In science subjects, emphasize practical applications and real-world connections. Language papers now require more analytical skills, so practice comprehension and writing tasks regularly. Social studies demand critical thinking about contemporary issues alongside historical knowledge.'
        },
        {
          type: 'subheading',
          text: 'Common Mistakes to Avoid'
        },
        {
          type: 'paragraph',
          text: 'Many students continue preparing according to old patterns, which can be detrimental. Avoid spending excessive time on topics with reduced weightage. Don\'t ignore the practical and application-based sections. Skipping mock tests is another critical mistake that prevents you from adapting to the new format. Always read instructions carefully during exams as they may differ from previous years.'
        },
        {
          type: 'subheading',
          text: 'Final Thoughts'
        },
        {
          type: 'paragraph',
          text: 'The new exam pattern is designed to promote comprehensive learning and reduce stress. While change can feel challenging initially, these modifications ultimately benefit students who focus on understanding rather than memorization. Start your preparation early, stay updated with official notifications, and maintain a positive mindset. Remember, every successful student once faced the same challenges you\'re experiencing now.'
        }
      ]
    },
    2: {
      image: '/images/neet.jpg',
      tag: 'Motivation',
      title: 'How to Stay Motivated During Tough Study Sessions',
      author: 'Ms. Priya Sharma',
      date: 'Dec 3, 2025',
      readTime: '6 min read',
      content: [
        {
          type: 'paragraph',
          text: 'Studying for competitive exams can be mentally exhausting. Maintaining motivation throughout your preparation journey is essential to achieve your goals. This article shares practical strategies to keep your energy levels high during challenging study sessions.'
        },
        {
          type: 'subheading',
          text: 'Understanding Motivation Cycles'
        },
        {
          type: 'paragraph',
          text: 'Motivation is not constant; it fluctuates throughout your preparation. Initial enthusiasm often wanes after a few weeks. Recognizing this natural cycle helps you prepare strategies to overcome motivation dips. Understanding your personal motivation triggers is the first step toward maintaining consistency.'
        },
        {
          type: 'subheading',
          text: 'Set Realistic and Measurable Goals'
        },
        {
          type: 'paragraph',
          text: 'Break your overall goal into smaller, achievable milestones. Celebrate small victories along the way. Track your progress regularly to see tangible improvements. Setting daily targets keeps you focused and motivated.'
        },
        {
          type: 'subheading',
          text: 'Create a Positive Study Environment'
        },
        {
          type: 'paragraph',
          text: 'Your study space significantly impacts your motivation levels. Keep your desk organized and free from distractions. Ensure proper lighting and comfortable seating. Add motivational quotes or images that inspire you to work harder.'
        },
        {
          type: 'subheading',
          text: 'Develop a Support System'
        },
        {
          type: 'paragraph',
          text: 'Study with peers who share similar goals. Join online communities of aspiring students. Share your progress and challenges with mentors or teachers. Remember that many students face similar struggles; you\'re not alone.'
        },
        {
          type: 'subheading',
          text: 'Balance Study with Self-Care'
        },
        {
          type: 'paragraph',
          text: 'Take regular breaks to prevent burnout. Engage in physical activities like exercise or sports. Practice meditation or mindfulness. Get adequate sleep to recharge your mind and body.'
        },
        {
          type: 'subheading',
          text: 'Rewarding Yourself for Milestones'
        },
        {
          type: 'paragraph',
          text: 'Positive reinforcement is a powerful motivator. Set up a reward system for achieving your daily or weekly goals. These rewards don\'t have to be expensive; they can be as simple as watching your favorite show, enjoying a special meal, or spending time with friends. The key is to associate hard work with positive outcomes, creating a cycle of motivation and achievement.'
        },
        {
          type: 'subheading',
          text: 'Dealing with Failure and Setbacks'
        },
        {
          type: 'paragraph',
          text: 'Not every study session will go perfectly, and that\'s okay. Learn to view mistakes as learning opportunities rather than failures. Analyze what went wrong in a mock test without being too harsh on yourself. Remember that setbacks are temporary and part of the learning process. Many successful students faced multiple failures before achieving their goals.'
        },
        {
          type: 'subheading',
          text: 'Maintaining Long-Term Motivation'
        },
        {
          type: 'paragraph',
          text: 'Keep your end goal visible by creating a vision board or writing down your aspirations. Read success stories of students who achieved similar goals. Stay connected with your reasons for pursuing this path. Whether it\'s a dream college, a specific career, or personal achievement, remind yourself regularly why you started. Visualization techniques can also help you stay focused on the bigger picture during challenging times.'
        }
      ]
    },
    3: {
      image: '/images/jee.jpg',
      tag: 'Study Hacks',
      title: 'Revision Made Easy with Time Management',
      author: 'Mr. Vikram Singh',
      date: 'Dec 1, 2025',
      readTime: '7 min read',
      content: [
        {
          type: 'paragraph',
          text: 'Revision is one of the most critical phases of exam preparation. Effective time management during revision can make the difference between a good score and an excellent one. This guide provides practical techniques to streamline your revision process.'
        },
        {
          type: 'subheading',
          text: 'The Spaced Repetition Technique'
        },
        {
          type: 'paragraph',
          text: 'Revise topics at increasing intervals to boost long-term retention. First revision should be within 24 hours of learning. Second revision after 3-4 days. Third revision after 1-2 weeks. This method significantly improves memory retention compared to last-minute cramming.'
        },
        {
          type: 'subheading',
          text: 'Creating Effective Revision Notes'
        },
        {
          type: 'paragraph',
          text: 'Use mind maps to organize information visually. Create concise bullet points instead of lengthy paragraphs. Use color-coding to highlight important concepts. Include examples and diagrams for better understanding.'
        },
        {
          type: 'subheading',
          text: 'Time Blocking Strategy'
        },
        {
          type: 'paragraph',
          text: 'Allocate specific time blocks for revising different subjects. Follow the 50-10 rule: study for 50 minutes, then take a 10-minute break. Dedicate more time to difficult topics. Create a weekly revision schedule and stick to it religiously.'
        },
        {
          type: 'subheading',
          text: 'Active Recall Practice'
        },
        {
          type: 'paragraph',
          text: 'Test yourself regularly without referring to notes. Attempt previous year question papers. Solve mock tests under timed conditions. Identify gaps in your knowledge and address them immediately.'
        },
        {
          type: 'subheading',
          text: 'The Two-Pass System'
        },
        {
          type: 'paragraph',
          text: 'Divide your revision into two distinct phases. During the first pass, quickly go through all topics to refresh your memory. Mark areas that need more attention. In the second pass, focus intensively on these marked topics with deeper practice and problem-solving. This system ensures comprehensive coverage while giving extra attention to weak areas.'
        },
        {
          type: 'subheading',
          text: 'Group Study Benefits'
        },
        {
          type: 'paragraph',
          text: 'Studying with peers can enhance your revision process significantly. Explain concepts to each other to reinforce understanding. Quiz one another on difficult topics. Share different problem-solving approaches and learn from diverse perspectives. However, ensure group studies remain focused and productive rather than becoming social gatherings.'
        },
        {
          type: 'subheading',
          text: 'Digital Tools for Smart Revision'
        },
        {
          type: 'paragraph',
          text: 'Leverage technology to enhance your revision efficiency. Use apps for spaced repetition and flashcards. Set up digital reminders for revision schedules. Watch educational videos for topics that need visual explanation. Create digital notes that can be easily searched and organized. However, balance screen time with traditional methods to avoid digital fatigue.'
        },
        {
          type: 'subheading',
          text: 'Last-Minute Revision Tips'
        },
        {
          type: 'paragraph',
          text: 'In the final days before exams, focus on high-weightage topics and formula sheets. Avoid starting new topics; instead, consolidate what you already know. Get adequate rest and maintain a healthy routine. Stay calm and confident in your preparation. Remember, panic and stress can undermine months of hard work, so approach exam day with a composed mindset.'
        }
      ]
    },
    4: {
      image: '/images/amu.jpg',
      tag: 'Success Stories',
      title: 'From Zero to Hero: Student Success Stories',
      author: 'Editorial Team',
      date: 'Nov 28, 2025',
      readTime: '10 min read',
      content: [
        {
          type: 'paragraph',
          text: 'Success is not always a straight path. Many students have overcome significant challenges to achieve remarkable results. These inspiring stories demonstrate that with determination and the right strategies, any goal is achievable.'
        },
        {
          type: 'subheading',
          text: 'Rajesh\'s Journey: From Failing Grades to Top Scores'
        },
        {
          type: 'paragraph',
          text: 'Rajesh struggled initially, scoring below average in his first mock test. He felt discouraged but decided to take action. He enrolled in structured coaching, identified his weak areas, and developed a personalized study plan. Through consistent effort and smart work, he improved his scores dramatically. In the final exam, he secured 89%, ranking among the top performers in his batch.'
        },
        {
          type: 'subheading',
          text: 'Priya\'s Triumph: Balancing Passion with Preparation'
        },
        {
          type: 'paragraph',
          text: 'Priya had to juggle her love for music with exam preparation. Instead of abandoning her passion, she used it as a stress-relief mechanism. She developed a balanced schedule dedicating specific hours to both. Her unique approach kept her motivated and mentally healthy. She achieved excellent scores while maintaining her passion for music.'
        },
        {
          type: 'subheading',
          text: 'Arjun\'s Determination: Overcoming Personal Obstacles'
        },
        {
          type: 'paragraph',
          text: 'Arjun faced significant personal challenges during his preparation. Instead of using these as excuses, he developed resilience and discipline. He joined a support group, found mentors who understood his situation, and stayed committed to his goals. His story exemplifies how determination can overcome any obstacle.'
        },
        {
          type: 'subheading',
          text: 'Key Takeaways from Success Stories'
        },
        {
          type: 'paragraph',
          text: 'Success requires consistent effort and smart strategies. Personal circumstances don\'t define your potential. Finding a support system is crucial. Celebrating small achievements keeps motivation high. Remember: your first failure is not your final destination.'
        },
        {
          type: 'subheading',
          text: 'Meera\'s Strategy: The Power of Consistency'
        },
        {
          type: 'paragraph',
          text: 'Meera didn\'t have access to expensive coaching or study materials. She relied on library resources and free online content. What set her apart was unwavering consistency. She studied for the same hours every day, rain or shine. Her disciplined approach and refusal to make excuses led to outstanding results. She proved that consistency beats intensity when it comes to long-term success.'
        },
        {
          type: 'subheading',
          text: 'Lessons We Can Learn'
        },
        {
          type: 'paragraph',
          text: 'These stories teach us that success paths are diverse. Some students need structured coaching while others thrive with self-study. The common thread is persistence, adaptability, and a refusal to give up. Each setback was treated as feedback rather than failure. These students also recognized when to seek help and weren\'t afraid to ask questions or admit they didn\'t understand something.'
        },
        {
          type: 'subheading',
          text: 'Creating Your Own Success Story'
        },
        {
          type: 'paragraph',
          text: 'Your journey will be unique to you. Start by assessing your current position honestly. Identify your strengths and weaknesses. Set realistic goals and create an actionable plan. Find mentors or role models who inspire you. Document your progress to see how far you\'ve come. Most importantly, believe in your ability to succeed. Every expert was once a beginner, and every success story started with a single step forward.'
        }
      ]
    },
    5: {
      image: '/images/hero1.png',
      tag: 'Exam Tips',
      title: 'Quick Revision Hacks for Students',
      author: 'Coach Anil Patel',
      date: 'Nov 25, 2025',
      readTime: '5 min read',
      content: [
        {
          type: 'paragraph',
          text: 'Time is precious during exam season. Quick revision techniques can help you consolidate your learning efficiently. These hacks are designed for students who want to maximize their revision in minimum time.'
        },
        {
          type: 'subheading',
          text: 'The Feynman Technique'
        },
        {
          type: 'paragraph',
          text: 'Teach the concept to someone else or explain it aloud. If you can simplify complex topics, you truly understand them. This technique helps identify gaps in your understanding quickly.'
        },
        {
          type: 'subheading',
          text: 'Flash Card Method'
        },
        {
          type: 'paragraph',
          text: 'Create flashcards with questions on one side and answers on the other. Review them daily, focusing more on cards you struggle with. This method is excellent for memorizing formulas and definitions.'
        },
        {
          type: 'subheading',
          text: 'The Pomodoro Technique'
        },
        {
          type: 'paragraph',
          text: 'Work intensely for 25 minutes, then take a 5-minute break. After four cycles, take a longer 15-minute break. This technique prevents burnout and maintains focus throughout your revision.'
        },
        {
          type: 'subheading',
          text: 'Practice Problems First'
        },
        {
          type: 'paragraph',
          text: 'Start revision by attempting practice problems. Refer to theory only when needed. This active learning approach reinforces concepts and saves time.'
        }
      ]
    },
    6: {
  image: '/images/result.png',
  tag: 'Study Hacks',
  title: 'Digital Tools That Make Studying Easier',
  author: 'Coach Riya Sharma',
  date: 'Dec 2, 2025',
  readTime: '6 min read',
  content: [
    {
      type: 'paragraph',
      text: 'In the modern study environment, digital tools can significantly enhance productivity and make learning more organized and efficient. These tools help students manage notes, track progress, and stay focused.'
    },
    {
      type: 'subheading',
      text: 'Notion for Complete Study Organization'
    },
    {
      type: 'paragraph',
      text: 'Notion allows you to store notes, create study schedules, track progress, and manage tasks — all in one place. Its flexibility makes it perfect for students handling multiple subjects.'
    },
    {
      type: 'subheading',
      text: 'Anki for Long-Term Memory'
    },
    {
      type: 'paragraph',
      text: 'Anki uses spaced repetition to strengthen memory retention. It is especially helpful for subjects that require memorization such as biology, formulas, or vocabulary.'
    },
    {
      type: 'subheading',
      text: 'Forest for Distraction-Free Study'
    },
    {
      type: 'paragraph',
      text: 'The Forest app helps you stay focused by growing a virtual tree during your study session. If you leave the app, your tree dies — a fun way to reduce phone usage.'
    }
  ]
},7: {
  image: '/images/hero.jpg',
  tag: 'Motivation',
  title: 'Overcoming Anxiety Before Exams',
  author: 'Dr. Meera Kulkarni',
  date: 'Dec 5, 2025',
  readTime: '4 min read',
  content: [
    {
      type: 'paragraph',
      text: 'Exam anxiety is common among students, but with the right methods, it can be managed effectively. Understanding your fear and preparing mentally can significantly boost performance.'
    },
    {
      type: 'subheading',
      text: 'Practice Breathing Techniques'
    },
    {
      type: 'paragraph',
      text: 'Slow, deep breathing helps relax your nervous system. Practicing this for just five minutes can calm your mind and improve concentration before exams.'
    },
    {
      type: 'subheading',
      text: 'Visualize Success'
    },
    {
      type: 'paragraph',
      text: 'Imagine yourself writing the exam confidently. Positive visualization reduces fear and creates a strong mental foundation for actual performance.'
    },
    {
      type: 'subheading',
      text: 'Stick to Your Preparation Plan'
    },
    {
      type: 'paragraph',
      text: 'A well-structured study plan reduces uncertainty and boosts confidence. When you trust your preparation, anxiety naturally decreases.'
    }
  ]
},8: {
  image: '/images/neet.jpg',
  tag: 'Success Stories',
  title: 'Top Scorers Share Their Secrets',
  author: 'Team Drift Academy',
  date: 'Dec 10, 2025',
  readTime: '7 min read',
  content: [
    {
      type: 'paragraph',
      text: 'Every year, top-performing students reveal strategies that helped them achieve outstanding results. These habits, when followed consistently, can significantly improve academic performance.'
    },
    {
      type: 'subheading',
      text: 'Consistency Over Intensity'
    },
    {
      type: 'paragraph',
      text: 'Top scorers emphasize studying a little every day instead of heavy last-minute cramming. Small, regular study sessions build strong, long-lasting understanding.'
    },
    {
      type: 'subheading',
      text: 'Smart Revision Strategy'
    },
    {
      type: 'paragraph',
      text: 'They revise using active recall and spaced repetition instead of passive reading. This ensures strong memory retention before exams.'
    },
    {
      type: 'subheading',
      text: 'Focused Practice'
    },
    {
      type: 'paragraph',
      text: 'Attempting mock tests regularly helps identify weak areas early. This reduces surprises during the exam and boosts confidence.'
    }
  ]
},
9: {
  image: '/images/jee.jpg',
  tag: 'Study Hacks',
  title: 'Active Learning Techniques That Work',
  author: 'Coach Dev Verma',
  date: 'Dec 15, 2025',
  readTime: '5 min read',
  content: [
    {
      type: 'paragraph',
      text: 'Active learning strategies help students understand concepts deeply instead of memorizing them. These scientifically proven techniques improve long-term retention and problem-solving ability.'
    },
    {
      type: 'subheading',
      text: 'Spaced Repetition'
    },
    {
      type: 'paragraph',
      text: 'Reviewing material at increasing intervals strengthens memory. It prevents forgetting and improves exam performance.'
    },
    {
      type: 'subheading',
      text: 'Active Recall'
    },
    {
      type: 'paragraph',
      text: 'Instead of re-reading notes, try recalling the information from memory. This strengthens neural pathways and boosts understanding.'
    },
    {
      type: 'subheading',
      text: 'Interleaving Method'
    },
    {
      type: 'paragraph',
      text: 'Mixing different topics in one study session trains your brain to adapt quickly. Interleaving helps improve critical thinking and application skills.'
    }
  ]
},
10: {
  image: '/images/hero.jpg',
  tag: 'Exam Tips',
  title: 'Understanding Question Paper Weightage',
  author: 'Prof. Sandeep Rao',
  date: 'Dec 18, 2025',
  readTime: '4 min read',
  content: [
    {
      type: 'paragraph',
      text: 'Analyzing the weightage of different chapters helps students prioritize topics effectively. Smart preparation ensures better results with less effort.'
    },
    {
      type: 'subheading',
      text: 'Identify High-Weight Chapters'
    },
    {
      type: 'paragraph',
      text: 'Review previous year papers to find chapters that consistently appear with higher marks. Studying these topics first increases your score potential.'
    },
    {
      type: 'subheading',
      text: 'Allocate Time Based on Importance'
    },
    {
      type: 'paragraph',
      text: 'Spend more time on topics with high scoring potential and less on chapters with fewer marks. This improves overall exam performance.'
    },
    {
      type: 'subheading',
      text: 'Revise Smartly'
    },
    {
      type: 'paragraph',
      text: 'Use quick summaries, charts, and question banks to revise high-weightage areas multiple times before the exam.'
    }
  ]
}
,11: {
  image: '/images/neet.jpg',
  tag: 'Study Hacks',
  title: 'Creating an Effective Study Schedule',
  author: 'Coach Priya Nair',
  date: 'Dec 22, 2025',
  readTime: '6 min read',
  content: [
    {
      type: 'paragraph',
      text: 'A well-planned study schedule helps students stay consistent and organized. It reduces stress and ensures that all topics are covered on time.'
    },
    {
      type: 'subheading',
      text: 'Divide Your Day Into Study Blocks'
    },
    {
      type: 'paragraph',
      text: 'Breaking your day into focused study blocks makes learning easier. Each block should focus on one subject or topic.'
    },
    {
      type: 'subheading',
      text: 'Set Realistic Daily Goals'
    },
    {
      type: 'paragraph',
      text: 'Avoid overloading your day. Set achievable goals that keep you motivated and help maintain consistency.'
    },
    {
      type: 'subheading',
      text: 'Include Breaks and Revision Time'
    },
    {
      type: 'paragraph',
      text: 'Regular breaks prevent burnout. Reserving time for daily revision ensures that you don’t forget what you studied earlier.'
    }
  ]
}
,

12: {
  image: '/images/jee.jpg',
  tag: 'Motivation',
  title: 'Building Confidence During Preparation',
  author: 'Dr. Aditi Sharma',
  date: 'Dec 26, 2025',
  readTime: '4 min read',
  content: [
    {
      type: 'paragraph',
      text: 'Confidence is key to performing well in exams. With the right mindset and habits, students can overcome self-doubt and build strong confidence throughout their preparation.'
    },
    {
      type: 'subheading',
      text: 'Focus on Progress, Not Perfection'
    },
    {
      type: 'paragraph',
      text: 'Track small improvements daily. Noticing your progress boosts confidence and encourages consistent effort.'
    },
    {
      type: 'subheading',
      text: 'Avoid Comparing Yourself to Others'
    },
    {
      type: 'paragraph',
      text: 'Everyone learns at their own pace. Comparing yourself creates unnecessary pressure and reduces motivation.'
    },
    {
      type: 'subheading',
      text: 'Celebrate Small Wins'
    },
    {
      type: 'paragraph',
      text: 'Finishing a chapter, solving a tough problem, or keeping your study streak going—every small achievement strengthens confidence.'
    }
  ]
}





  }
  const blog = blogContent[id] || null

  if (!blog) {
    return (
      <div className="w-full min-h-screen bg-[#0a0a0a] text-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Blog Not Found</h1>
          <button
            onClick={() => navigate('/blogs')}
            className="px-6 py-3 bg-[#f6821c] hover:bg-yellow-600 rounded-lg font-semibold transition"
          >
            Back to Blogs
          </button>
        </div>
      </div>
    )
  }

  return (
    <article className="w-full bg-[#0a0a0a] text-white">
      {/* Hero Image */}
      <div className="w-full h-96 overflow-hidden">
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Article Content */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <button
          onClick={() => navigate('/blogs')}
          className="text-[#f6821c] hover:text-yellow-400 font-semibold mb-6 transition flex items-center gap-2"
        >
          ← Back to Blogs
        </button>

        {/* Meta Information */}
        <div className="flex flex-wrap gap-4 mb-6 text-gray-400">
          <span className="bg-[#f6821c] text-white px-3 py-1 rounded-full text-sm font-semibold">
            {blog.tag}
          </span>
          <span>{blog.author}</span>
          <span>{blog.date}</span>
          <span>{blog.readTime}</span>
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
          {blog.title}
        </h1>

        {/* Article Body */}
        <div className="prose prose-invert max-w-none">
          {blog.content.map((section, index) => (
            <div key={index}>
              {section.type === 'paragraph' && (
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  {section.text}
                </p>
              )}
              {section.type === 'subheading' && (
                <h2 className="text-2xl md:text-3xl font-bold text-white mt-8 mb-4">
                  {section.text}
                </h2>
              )}
            </div>
          ))}
        </div>
      </div>
    </article>
  )
}

export default BlogDetail