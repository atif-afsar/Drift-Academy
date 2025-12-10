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
      text: 'The examination landscape is evolving rapidly, shifting from memorization-based testing to a more application-driven approach. Understanding the latest exam pattern is essential for students who want to stay ahead and prepare strategically. This guide breaks down the key changes and shows how you can align your preparation for maximum success.'
    },
    {
      type: 'subheading',
      text: 'What’s New in the Latest Exam Pattern?'
    },
    {
      type: 'paragraph',
      text: 'Boards and competitive exams have introduced changes to make evaluations more transparent, skill-based, and aligned with real-world learning. The new pattern lays greater emphasis on conceptual clarity, analytical thinking, and practical application. This ensures students are not just learning for exams but building long-term understanding.'
    },
    {
      type: 'subheading',
      text: 'Major Changes You Should Know'
    },
    {
      type: 'paragraph',
      text: 'A significant shift toward competency-based questions has been introduced. Papers now include a balanced mix of MCQs, short answer questions, and analytical case-based questions. Internal assessment weightage has increased to encourage consistent learning. Negative marking has been reduced in some exams, giving students more confidence while attempting objective sections.'
    },
    {
      type: 'subheading',
      text: 'Understanding the Question Format'
    },
    {
      type: 'paragraph',
      text: 'The question papers now include multiple formats such as case-based scenarios, assertion–reason questions, competency-based tasks, and data interpretation problems. These should be practiced regularly to improve analytical thinking and speed. The inclusion of multi-select MCQs demands deeper clarity since more than one option may be correct.'
    },
    {
      type: 'subheading',
      text: 'Adapting Your Strategy to the New Pattern'
    },
    {
      type: 'paragraph',
      text: 'Begin by reviewing the updated blueprint and chapter-wise weightage. Practice with the latest sample papers to get familiar with the structure. Focus on conceptual learning rather than rote memorization. Strengthen application-based problem solving through practice questions, past papers, and real-world examples.'
    },
    {
      type: 'subheading',
      text: 'Pro Tips to Score Better'
    },
    {
      type: 'paragraph',
      text: 'Create a well-balanced study timetable that covers theory, practicals, and mock tests. Review your mistakes after every test to track progress. Strengthen time management by solving full-length papers. Stay attentive to frequently asked question types and revise them consistently.'
    },
    {
      type: 'subheading',
      text: 'Subject-Wise Strategy Breakdown'
    },
    {
      type: 'paragraph',
      text: 'Mathematics now demands greater focus on logical reasoning and problem variation. Science subjects highlight conceptual clarity and practical application through experiments and case studies. Languages emphasize reading comprehension, grammar application, and structured writing. Social sciences require a blend of factual knowledge with analytical interpretation of events and issues.'
    },
    {
      type: 'subheading',
      text: 'Mistakes Students Must Avoid'
    },
    {
      type: 'paragraph',
      text: 'Preparing according to outdated exam patterns can significantly reduce efficiency. Avoid spending unnecessary time on low-weightage topics. Do not skip internal assessments or practicals, as they contribute substantially to your final score. Ignoring mock tests or time-based practice is another major mistake. Always review instructions carefully, as even small pattern changes can affect your strategy during the exam.'
    },
    {
      type: 'subheading',
      text: 'Final Thoughts'
    },
    {
      type: 'paragraph',
      text: 'The updated exam pattern is designed not to burden students but to promote real understanding and skill development. With early preparation, consistent practice, and the right strategy, you can adapt smoothly to these changes. Stay positive, stay informed, and remember that progress comes with patience and discipline.'
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
      text: 'Studying for competitive exams can be mentally exhausting, especially when the syllabus feels endless and time seems to run faster each day. Many students struggle with fatigue, uncertainty, and pressure, which slowly drains their motivation. Maintaining consistency, however, is essential to reaching your goals. When your energy levels dip or the topics feel overwhelming, the right strategies can help you push forward effectively. This article shares practical and science-backed methods to stay motivated during tough study sessions and continue progressing with confidence.'
    },
    {
      type: 'subheading',
      text: 'Understanding Motivation Cycles'
    },
    {
      type: 'paragraph',
      text: 'Motivation is not a stable force—it rises and falls naturally, just like energy or mood. The excitement at the beginning of preparation often fades after a few weeks as the workload increases. This does not mean you are lazy or incapable; it simply means your brain is adjusting to long-term effort. When you understand these natural motivation cycles, you can plan ahead and build habits that support you during the low phases. Identify what inspires you—your goals, teachers, success stories, or even small achievements. Knowing your personal triggers makes it easier to regain momentum when you feel stuck.'
    },
    {
      type: 'subheading',
      text: 'Set Realistic and Measurable Goals'
    },
    {
      type: 'paragraph',
      text: 'Setting clear, achievable goals is one of the best ways to stay motivated. Instead of trying to finish huge portions of the syllabus at once, break them into smaller, manageable milestones. Each completed task gives you a sense of accomplishment, reinforcing your belief that progress is happening. Track your daily and weekly goals using a planner or digital tools, and review them regularly to identify patterns in your productivity. When you see consistent improvement, even if small, your motivation naturally increases. Remember, steady progress beats unrealistic expectations every time.'
    },
    {
      type: 'subheading',
      text: 'Create a Positive Study Environment'
    },
    {
      type: 'paragraph',
      text: 'Your environment has a direct impact on your focus and motivation. A cluttered or noisy study area can make even simple tasks feel difficult. Keep your study desk clean, organized, and free from unnecessary distractions. Ensure good lighting and comfortable seating to avoid fatigue. You can also personalize your space with motivational quotes, pictures, or a neat board displaying your goals. A positive and peaceful ambience tells your brain that this is a place for productivity, making it easier to stay disciplined and motivated for longer durations.'
    },
    {
      type: 'subheading',
      text: 'Develop a Support System'
    },
    {
      type: 'paragraph',
      text: 'Preparing for competitive exams can often feel lonely, but it doesn’t have to be. Surrounding yourself with supportive people can make a huge difference in staying motivated. Study groups with like-minded peers allow you to discuss concepts, share strategies, and stay accountable. Online communities filled with aspirants can also offer inspiration and answers to your doubts. Sharing your challenges with teachers, mentors, or friends helps relieve emotional pressure. When you realize that many students face similar struggles, it becomes easier to stay positive and continue your preparation journey with determination.'
    },
    {
      type: 'subheading',
      text: 'Balance Study with Self-Care'
    },
    {
      type: 'paragraph',
      text: 'Burnout is one of the biggest enemies of motivation. Without proper rest and self-care, your productivity and concentration gradually decline. Take regular breaks between study sessions to recharge your mind. Engage in physical activities like walking, stretching, or sports to relieve stress and release endorphins. Practicing mindfulness, meditation, or deep breathing exercises can help you stay calm during stressful periods. Most importantly, ensure you get adequate sleep—your brain needs rest to retain information and stay sharp. A healthy mind and body create the perfect foundation for consistent motivation.'
    },
    {
      type: 'subheading',
      text: 'Rewarding Yourself for Milestones'
    },
    {
      type: 'paragraph',
      text: 'Positive reinforcement is a powerful psychological tool. When you reward yourself for completing tasks—big or small—you train your brain to associate effort with pleasure. Rewards don’t have to be expensive or extravagant; they can be simple moments of joy like watching a movie, eating your favorite snack, or taking a relaxing break. These small rewards make the study process more enjoyable and help prevent burnout. Over time, this habit builds a strong cycle of motivation where hard work becomes more satisfying and naturally leads to greater productivity.'
    },
    {
      type: 'subheading',
      text: 'Dealing with Failure and Setbacks'
    },
    {
      type: 'paragraph',
      text: 'Setbacks are a normal part of any learning journey. You may score low in a mock test, struggle with a difficult topic, or feel unproductive on certain days. Instead of viewing these moments as failures, treat them as opportunities to reflect and grow. Analyze what went wrong, identify the gaps, and adjust your strategy accordingly. Every successful student has faced challenges, doubts, and slow progress at some point, but they kept moving forward. Remember that one bad day or one poor score does not define your ability—what matters is how you bounce back from it.'
    },
    {
      type: 'subheading',
      text: 'Maintaining Long-Term Motivation'
    },
    {
      type: 'paragraph',
      text: 'Long-term motivation comes from having a strong sense of purpose. Create a vision board showing your dream college, future career, or the goals you wish to achieve. Place it where you can see it every day. Reading success stories and listening to motivational content can remind you that your dreams are achievable. Regularly reflect on why you started this journey—your future aspirations, personal growth, and desire to make yourself proud. Visualization techniques, such as imagining your success during exams, can boost confidence and help you stay focused even during the toughest phases of preparation.'
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
      text: 'Revision is one of the most crucial phases of exam preparation because it transforms your raw learning into solid, long-term understanding. Many students study consistently but fail to revise effectively, which leads to confusion and stress during the final days before exams. With the right time management strategies, revision becomes simpler, structured, and far more impactful. This guide offers practical, easy-to-follow techniques that help you revise smarter, retain more information, and feel confident on exam day.'
    },
    {
      type: 'subheading',
      text: 'The Spaced Repetition Technique'
    },
    {
      type: 'paragraph',
      text: 'Spaced repetition is a scientifically proven method that strengthens memory by revising information at gradually increasing intervals. Instead of revising randomly, this technique creates a systematic cycle: your first revision should happen within 24 hours to reinforce new concepts. The second revision after 3–4 days helps transfer information from short-term memory to long-term memory. The third revision after 1–2 weeks ensures deep retention. Compared to last-minute cramming, spaced repetition reduces stress and dramatically improves recall during exams.'
    },
    {
      type: 'subheading',
      text: 'Creating Effective Revision Notes'
    },
    {
      type: 'paragraph',
      text: 'Revision notes should simplify your learning, not overwhelm you. Replace long paragraphs with short bullet points to make information easy to scan. Mind maps are especially effective because they represent topics visually, helping you recognize connections between concepts instantly. Use color coding to differentiate formulas, definitions, examples, and important keywords. Adding small diagrams or charts can enhance understanding and make complex topics easier to revise quickly. Over time, these concise notes become your most powerful quick-revision tool.'
    },
    {
      type: 'subheading',
      text: 'Time Blocking Strategy'
    },
    {
      type: 'paragraph',
      text: 'Time blocking ensures that every subject and topic gets dedicated attention. Instead of studying randomly, allocate specific blocks of time for each subject. Follow the 50-10 rule: concentrate for 50 minutes and then rest for 10 minutes to refresh your mind. Prioritize difficult topics during your peak productivity hours, such as early mornings or late evenings. Create a weekly revision timetable and stick to it consistently. When you know exactly what to revise and when, your study sessions become more organized and stress-free.'
    },
    {
      type: 'subheading',
      text: 'Active Recall Practice'
    },
    {
      type: 'paragraph',
      text: 'Active recall is one of the most effective revision strategies because it forces your brain to retrieve information rather than just re-read it. Test yourself frequently without looking at your notes. Attempt previous year papers to become familiar with question patterns. Take mock tests under timed conditions to build speed and accuracy. After each test, analyze your mistakes and revise those topics immediately. This approach not only strengthens memory but also trains you to perform confidently under exam pressure.'
    },
    {
      type: 'subheading',
      text: 'The Two-Pass System'
    },
    {
      type: 'paragraph',
      text: 'The two-pass revision method is an efficient approach for complete syllabus coverage. In the first pass, move quickly through all chapters to refresh your understanding and identify difficult areas. Do not get stuck on tough topics—just mark them for later. In the second pass, invest deeper focus into those marked areas by solving problems, revisiting concepts, and practicing additional examples. This structured system ensures that you complete your revision while still giving extra time to weaker topics that need more attention.'
    },
    {
      type: 'subheading',
      text: 'Group Study Benefits'
    },
    {
      type: 'paragraph',
      text: 'Group study, when done correctly, can be extremely productive and motivating. Explaining concepts to your peers strengthens your understanding because teaching is one of the highest forms of learning. Quizzing one another on difficult topics improves recall and makes revision more interactive. You also gain new perspectives on problem-solving techniques that you may not have considered. However, it’s important to keep group sessions focused—avoid distractions and ensure that everyone stays committed to the goal of effective revision.'
    },
    {
      type: 'subheading',
      text: 'Digital Tools for Smart Revision'
    },
    {
      type: 'paragraph',
      text: 'Technology can elevate your revision strategy if used wisely. Apps like Anki or Quizlet help create spaced repetition flashcards for quick revision. Use digital reminders to prompt you about your revision schedule. Educational videos and animations are great for topics that require visual clarity. Digital notes and cloud-based documents make it easy to organize and access important material anytime. However, maintain a balance—spending too much time on devices may cause distractions or fatigue, so combine digital tools with offline methods for the best results.'
    },
    {
      type: 'subheading',
      text: 'Last-Minute Revision Tips'
    },
    {
      type: 'paragraph',
      text: 'In the final days before the exam, your focus should shift to consolidation rather than learning new topics. Review high-weightage chapters, formula sheets, important diagrams, and previously marked questions. Avoid long, exhausting study hours and instead revise in short, effective sessions. Keep your mind relaxed with proper sleep, hydration, and light physical activity. Most importantly, stay calm—confidence plays a vital role in exam performance. Trust your preparation and approach the exam with a clear, composed mindset, ensuring that your hard work pays off.'
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
      text: 'Success is not always a straight path, and for many students, it is filled with doubts, setbacks, and moments of uncertainty. Yet, the stories we often remember are those of individuals who push through challenges with resilience and consistency. These inspiring journeys remind us that with determination, the right mindset, and effective strategies, transformation is possible for anyone. Every achievement—big or small—begins with the decision to try, and these students prove just how powerful that decision can be.'
    },
    {
      type: 'subheading',
      text: 'Rajesh\'s Journey: From Failing Grades to Top Scores'
    },
    {
      type: 'paragraph',
      text: 'Rajesh struggled during the early phase of his preparation, barely passing his first mock test. His confidence hit rock bottom, and he almost gave up. However, instead of quitting, he decided to change his approach. He enrolled in structured coaching, created a clear study timetable, and began addressing his weak areas one by one. Rajesh shifted from passive reading to active learning—practicing questions daily, revising systematically, and seeking help when needed. Over time, his hard work paid off. His mock scores began improving steadily, boosting his confidence. By the time the final exam arrived, Rajesh had transformed himself completely. He secured an impressive 89%, placing himself among the top performers in his batch. His journey shows that failures are temporary, but the determination to rise can rewrite your future.'
    },
    {
      type: 'subheading',
      text: 'Priya\'s Triumph: Balancing Passion with Preparation'
    },
    {
      type: 'paragraph',
      text: 'Priya faced a challenge many students struggle with—balancing academics with her personal passion. As a dedicated musician, her evenings were spent practicing vocals and performing in small events. When exam season approached, she wrestled with the decision of whether to give up music temporarily. Instead of abandoning what she loved, Priya adopted a balanced and disciplined routine. She allocated fixed hours to study and fixed hours to practice music. Surprisingly, her passion became a stress-relief tool that rejuvenated her mind between study sessions. Her productivity improved, and her motivation stayed high throughout the preparation period. In the end, Priya scored exceptionally well, proving that you don’t have to sacrifice your passion to achieve academic success—you just need balance and discipline.'
    },
    {
      type: 'subheading',
      text: 'Arjun\'s Determination: Overcoming Personal Obstacles'
    },
    {
      type: 'paragraph',
      text: 'Arjun’s story is a powerful example of resilience. He faced serious personal obstacles during his preparation—financial challenges, health issues in the family, and emotional stress. For many, these conditions would have been overwhelming. But Arjun refused to let his circumstances define him. He sought guidance from mentors, created a realistic study plan he could follow, and joined a support group of students who motivated each other. He learned to manage his time efficiently and studied in small but consistent sessions. Every day, he pushed himself forward, even when the situation felt impossible. By the time exams arrived, Arjun had grown stronger mentally and academically. His success wasn’t just about marks—it was a triumph of determination, proving that obstacles can be stepping stones when you choose not to give up.'
    },
    {
      type: 'subheading',
      text: 'Key Takeaways from Success Stories'
    },
    {
      type: 'paragraph',
      text: 'These journeys highlight a valuable truth: success is not reserved for the naturally gifted—it belongs to those who work consistently and adapt smartly. Every student in these stories faced unique challenges, but they shared common habits: persistence, self-awareness, and the courage to seek help when needed. They celebrated small milestones to maintain motivation and treated setbacks as learning opportunities rather than failures. The lesson is clear: your background or circumstances don’t limit your potential. What matters most is your willingness to take action and continually improve.'
    },
    {
      type: 'subheading',
      text: 'Meera\'s Strategy: The Power of Consistency'
    },
    {
      type: 'paragraph',
      text: 'Meera’s success is a testament to the power of discipline over resources. Coming from a modest background, she did not have access to expensive coaching or premium study materials. Instead, she used library books, free online resources, and handwritten notes. What gave her the edge was her rock-solid consistency: she studied at the same hours every day, maintained a strict routine, and never skipped revision. Even on tough days, Meera showed up for her study sessions. Over months, her discipline turned into mastery. She secured an excellent rank, proving that consistency, not convenience, is the real key to long-term success.'
    },
    {
      type: 'subheading',
      text: 'Lessons We Can Learn'
    },
    {
      type: 'paragraph',
      text: 'The stories of Rajesh, Priya, Arjun, and Meera teach us that success comes in many forms and through many paths. Some students rely on structured coaching, while others thrive with self-study. Some battle external challenges, while others fight internal doubts. But all of them shared the same mindset: refusing to give up. Each setback became a stepping stone because they asked questions, sought help, stayed flexible, and kept moving forward. Their journeys remind us that excellence is not about perfection—it’s about progress, persistence, and the courage to try again after setbacks.'
    },
    {
      type: 'subheading',
      text: 'Creating Your Own Success Story'
    },
    {
      type: 'paragraph',
      text: 'Your story is still being written, and you have the power to shape it. Begin by assessing your strengths and the areas you need to work on. Set clear, achievable goals and break them into smaller steps. Surround yourself with mentors, teachers, or peers who uplift and inspire you. Track your progress to remind yourself of how far you’ve come, especially on difficult days. Most importantly, believe in your ability to grow. Every expert once stood where you are today—uncertain, inexperienced, and full of questions. What made them successful was not immediate talent, but the decision to keep going. Your journey can be the next “zero to hero” story with dedication, courage, and consistent effort.'
    }
  ]
},

    5: {
  image: '/images/hero1.png',
  tag: 'Exam Tips',
  title: 'Quick Revision Hacks for Students',
  author: 'Coach Anil Patel',
  date: 'Nov 25, 2025',
  readTime: '7 min read',
  content: [
    {
      type: 'paragraph',
      text: 'Time becomes incredibly valuable during exam season, and the pressure of revising the entire syllabus can feel overwhelming. Quick revision techniques enable students to revise smartly rather than endlessly reading the same notes. By making your revision more active, strategic, and focused, you can retain more information in less time. These hacks are crafted to help you strengthen your memory, boost understanding, and stay confident before exams.'
    },
    {
      type: 'paragraph',
      text: 'Many students mistakenly believe that revision requires long, exhausting hours. But the truth is: effective revision depends on techniques, not time spent. When you learn how to revise efficiently, you free yourself from stress and gain more clarity on what truly matters. These methods are widely used by toppers and backed by cognitive science, making them both practical and reliable.'
    },

    {
      type: 'subheading',
      text: 'The Feynman Technique'
    },
    {
      type: 'paragraph',
      text: 'The Feynman Technique transforms complicated topics into simple, understandable concepts. By explaining a topic in your own words, your brain works harder to process the information, leading to deeper understanding. This technique is especially useful for subjects such as physics, chemistry, biology, and even theoretical topics in maths or history.'
    },
    {
      type: 'paragraph',
      text: 'To use it effectively, write the concept as if you are teaching a younger student. Avoid using textbook language and replace it with simple everyday words. If you get stuck or find yourself repeating textbook phrases, that’s a clear signal that you need to review the topic again. Once you understand it well, the explanation should feel natural and easy.'
    },

    {
      type: 'subheading',
      text: 'Flash Card Method'
    },
    {
      type: 'paragraph',
      text: 'Flashcards are excellent for quick revision, especially when dealing with formulas, definitions, vocabulary, historical dates, scientific facts, and diagrams. They convert large study material into bite-sized pieces, making revision smoother and less overwhelming.'
    },
    {
      type: 'paragraph',
      text: 'A smart trick is to use the Leitner System—divide flashcards into three boxes based on difficulty. Cards you answer correctly move to the next box, while tough ones stay in the first box for repeated practice. This ensures you don’t waste time reviewing concepts you already know well and instead focus more on your weak areas.'
    },

    {
      type: 'subheading',
      text: 'The Pomodoro Technique'
    },
    {
      type: 'paragraph',
      text: 'The Pomodoro Technique helps you stay disciplined, especially during moments of procrastination or mental fatigue. Short bursts of focus combined with frequent breaks increase your productivity and help your mind stay fresh. This technique is ideal for final revision days when you need to maintain consistent concentration.'
    },
    {
      type: 'paragraph',
      text: 'If 25-minute sessions feel too short or too long, you can customize them. Many students prefer 40-10 or 45-15 cycles depending on their comfort. The key is to avoid burnout by balancing intense focus with relaxation. Use your break time wisely—stretch, walk, breathe, and avoid screens to prevent mental exhaustion.'
    },

    {
      type: 'subheading',
      text: 'Practice Problems First'
    },
    {
      type: 'paragraph',
      text: 'Starting revision with practice questions helps you instantly identify your weak spots. Instead of reading long theory pages, solving problems activates your brain and gives you a clearer idea of what you need to revise. This method turns revision into an active learning process rather than passive memorization.'
    },
    {
      type: 'paragraph',
      text: 'Once you complete a set of questions, review the ones you got wrong. Don’t rush through solutions—understand why you made the mistake. This targeted revision saves time and ensures that you focus only on areas that require real improvement. For numerical subjects, this approach helps build speed as well as accuracy.'
    },

    {
      type: 'subheading',
      text: 'Mind-Mapping for Visual Revision'
    },
    {
      type: 'paragraph',
      text: 'Mind maps help you visualize complex chapters in a single glance. By connecting keywords, diagrams, and ideas, your brain creates a more natural memory structure that is easier to recall during exams. This method is particularly useful for subjects with large theory chapters like biology, geography, political science, and chemistry.'
    },
    {
      type: 'paragraph',
      text: 'To create a mind map, start with the main topic in the center, then branch out into subtopics using short phrases, diagrams, and arrows. Use colors to categorize ideas or represent relationships. Mind maps are also excellent tools for last-minute revision because they summarize an entire chapter in a compact visual form.'
    },

    {
      type: 'subheading',
      text: 'Summarization Sheets'
    },
    {
      type: 'paragraph',
      text: 'Summarization sheets are one-page quick revision documents that include formulas, key points, shortcuts, diagrams, and important notes. These sheets help you revise entire chapters within minutes. They are extremely effective during the last few days before exams when you need high-speed revision.'
    },
    {
      type: 'paragraph',
      text: 'Creating these sheets may seem time-consuming initially, but they save hours during the final preparation stage. Many toppers rely heavily on summary sheets because they eliminate the need to flip through multiple books and notebooks while revising.'
    },

    {
      type: 'subheading',
      text: 'Highlighter Coding System'
    },
    {
      type: 'paragraph',
      text: 'Using highlighters strategically can significantly improve your revision. For example, highlight formulas in yellow, definitions in blue, exceptions in pink, and important diagrams in green. This color-coding technique helps your brain categorize information instantly and recall it faster.'
    },
    {
      type: 'paragraph',
      text: 'However, avoid over-highlighting. The goal is to make key points stand out, not to color the entire page. Be selective and highlight only the essential parts that are likely to appear in exams.'
    },

    {
      type: 'subheading',
      text: 'Final Tip: Revise Smarter, Not Harder'
    },
    {
      type: 'paragraph',
      text: 'Quick revision is all about being intentional with your time. Instead of re-reading entire chapters, focus on the areas that matter most. Use proven techniques like active recall, visual tools, and spaced repetition to enhance memory retention. These revision hacks help you stay organized, confident, and exam-ready without unnecessary stress.'
    },
    {
      type: 'paragraph',
      text: 'Remember, the goal isn’t to study more—it’s to study better. With the right strategy, even limited time can lead to outstanding results.'
    }
  ]
},

    6:{
  image: '/images/result.png',
  tag: 'Study Hacks',
  title: 'Digital Tools That Make Studying Easier',
  author: 'Coach Riya Sharma',
  date: 'Dec 2, 2025',
  readTime: '6 min read',
  content: [
    {
      type: 'paragraph',
      text: 'In today’s fast-paced academic environment, digital tools have become essential for students aiming to study more efficiently. These platforms help streamline revision, organize notes, track progress, and reduce distractions. Whether you are preparing for school exams, competitive tests, or learning new skills, the right apps can transform your entire study workflow. Instead of juggling multiple notebooks and planners, students can now manage everything digitally, ensuring better clarity, consistency, and productivity.'
    },
    {
      type: 'paragraph',
      text: 'From boosting focus to improving memory retention, these tools offer features that support different learning styles. Visual learners benefit from organized dashboards, auditory learners can store voice notes, and analytical learners can track their performance using data. With technology becoming more accessible than ever, adopting these tools is no longer optional—it is a smart strategy for modern learners.'
    },

    {
      type: 'subheading',
      text: 'Notion for Complete Study Organization'
    },
    {
      type: 'paragraph',
      text: 'Notion is one of the most versatile study tools available today. It allows you to take structured notes, create detailed study schedules, plan your revision cycles, and even organize class materials in a clean, visual format. With databases, tables, checklists, and smart templates, Notion helps students bring all their academic resources together in one place. You can track subjects, monitor deadlines, prepare weekly plans, and maintain a digital notebook without switching apps.'
    },
    {
      type: 'paragraph',
      text: 'One of the biggest advantages of Notion is customization—you can design your workspace according to your study habits. Many students create dashboards for revision planning, timetable blocks, formula banks, or chapter-wise checklists. This level of organization reduces mental clutter, saves time, and keeps your preparation consistent throughout the exam season.'
    },

    {
      type: 'subheading',
      text: 'Anki for Long-Term Memory'
    },
    {
      type: 'paragraph',
      text: 'Anki is a powerful tool that uses spaced repetition—a scientifically proven method—to improve long-term retention. It is especially useful for subjects that involve heavy memorization such as biology terms, chemistry reactions, historical dates, mathematical formulas, and vocabulary. With customizable flashcards, Anki ensures that you revise difficult information more frequently while gradually spacing out easy ones.'
    },
    {
      type: 'paragraph',
      text: 'Unlike traditional rote learning, Anki encourages active recall: the act of retrieving information from memory without looking at the notes. This makes learning deeper and more durable. Over time, Anki reduces revision time significantly because it reinforces only what you truly need to remember. For students preparing for NEET, JEE, UPSC, or language exams, Anki becomes a game-changing study companion.'
    },

    {
      type: 'subheading',
      text: 'Forest for Distraction-Free Study'
    },
    {
      type: 'paragraph',
      text: 'The Forest app is an innovative and enjoyable way to stay focused while studying. When you start a session, the app plants a virtual tree. The tree continues growing as long as you stay off your phone. But if you exit the app or get distracted, the tree dies. This simple gamification technique encourages discipline and helps reduce unnecessary phone usage during study hours.'
    },
    {
      type: 'paragraph',
      text: 'Forest also tracks your productivity over time, allowing you to see how many focused hours you’ve accumulated. Many students find this visually rewarding and motivating. The app turns concentration into a fun challenge, making even long study sessions feel manageable. Over time, Forest helps students build a consistent study habit by reducing screen distractions and strengthening focus naturally.'
    },

    {
      type: 'subheading',
      text: 'Why Digital Tools Matter Today'
    },
    {
      type: 'paragraph',
      text: 'Digital tools are no longer just optional study aids—they have become essential for efficient learning. With increasing syllabus loads and competitive exam pressure, students require smarter methods to manage information. Apps like Notion, Anki, and Forest not only simplify the process but also create a structured, balanced, and distraction-free study environment. When used consistently, these tools reduce stress, boost performance, and make learning more enjoyable.'
    }
  ]
},
7:{
  image: '/images/hero.jpg',
  tag: 'Motivation',
  title: 'Overcoming Anxiety Before Exams',
  author: 'Dr. Meera Kulkarni',
  date: 'Dec 5, 2025',
  readTime: '6 min read',
  content: [
    {
      type: 'paragraph',
      text: 'Exam anxiety is extremely common among students of all ages, especially when the pressure to perform well is high. This anxiety often appears as nervousness, restlessness, overthinking, or self-doubt. However, with the right mindset and techniques, this stress can be managed effectively. Understanding your fear, acknowledging your emotions, and developing healthy mental habits can significantly boost your confidence and performance. Remember, anxiety doesn’t mean you are unprepared—it simply means you care about the result.'
    },
    {
      type: 'paragraph',
      text: 'Instead of trying to eliminate anxiety completely, the goal is to manage it in a way that it doesn’t interfere with your focus. When handled properly, a small amount of stress can actually sharpen your awareness and motivate you to perform better. The key is learning how to channel that energy positively.'
    },

    {
      type: 'subheading',
      text: 'Practice Breathing Techniques'
    },
    {
      type: 'paragraph',
      text: 'Slow, deep breathing is one of the quickest ways to calm your nervous system. When you breathe deeply, your brain receives a signal that you are safe, reducing the body’s fight-or-flight response. Practicing this for just five minutes before or during an exam can ease physical symptoms like sweaty hands, fast heartbeat, or trembling. Techniques such as box breathing (inhale for 4 seconds, hold for 4, exhale for 4, hold for 4) or 4-7-8 breathing are particularly effective.'
    },
    {
      type: 'paragraph',
      text: 'Make breathing exercises a part of your daily routine, not just something you try during panic moments. Regular practice trains your brain to stay calm under pressure, making it easier to regain control during stressful exam situations.'
    },

    {
      type: 'subheading',
      text: 'Visualize Success'
    },
    {
      type: 'paragraph',
      text: 'Visualization is a powerful mental tool used by toppers, athletes, and performers to reduce anxiety and enhance confidence. Take a few minutes to imagine yourself entering the exam hall calmly, reading the paper confidently, and answering each question with clarity. This mental rehearsal prepares your mind for success and reduces fear of the unknown.'
    },
    {
      type: 'paragraph',
      text: 'When your brain repeatedly sees a positive outcome, it begins to believe that success is possible, which automatically reduces anxiety. Visualization also helps build a strong internal belief system, especially when you combine it with positive affirmations like “I am prepared,” “I can handle this,” or “I believe in my effort.”'
    },

    {
      type: 'subheading',
      text: 'Stick to Your Preparation Plan'
    },
    {
      type: 'paragraph',
      text: 'A well-structured study plan is one of the most effective tools for reducing exam anxiety. When your preparation is organized—covering syllabus, revision, mock tests, and breaks—you feel more in control. Anxiety often arises from uncertainty or last-minute panic, but a steady plan eliminates that confusion.'
    },
    {
      type: 'paragraph',
      text: 'Trust your system. If you have been consistent with your studies and revision, remind yourself that you have done your part. Avoid comparing your preparation with others, as it can increase unnecessary pressure. Instead, focus on your personal growth and progress. When your mind trusts your preparation, confidence replaces anxiety.'
    },

    {
      type: 'subheading',
      text: 'Final Thoughts'
    },
    {
      type: 'paragraph',
      text: 'Anxiety before exams is natural, but it doesn’t have to control you. With the right practices—breathing exercises, visualization, structured preparation, and self-awareness—you can stay calm and perform at your full potential. Remember, exams measure your understanding, not your worth. Believe in your effort, stay grounded, and approach the exam with confidence. You are capable of much more than you think.'
    }
  ]
},
8: {
  image: '/images/neet.jpg',
  tag: 'Success Stories',
  title: 'Top Scorers Share Their Secrets',
  author: 'Team Drift Academy',
  date: 'Dec 10, 2025',
  readTime: '7 min read',
  content: [
    {
      type: 'paragraph',
      text: 'Every year, top-performing students share insights into the habits and strategies that propelled them toward exceptional results. These students come from different backgrounds, face different challenges, and follow different preparation paths, yet their success patterns have several similarities. Their stories emphasize that success is not about overnight transformation but about deliberate effort, smart techniques, and unwavering discipline. When applied consistently, these habits can significantly improve any student’s academic journey.'
    },
    {
      type: 'paragraph',
      text: 'What makes these achievers stand out is not extraordinary intelligence, but the way they manage their time, revise effectively, and stay focused even during difficult times. They build systems that support learning, avoid common mistakes, and constantly refine their strategy. Understanding these secrets can help every student build a stronger, more efficient study routine.'
    },

    {
      type: 'subheading',
      text: 'Consistency Over Intensity'
    },
    {
      type: 'paragraph',
      text: 'Top scorers repeatedly highlight one thing: consistency matters more than intense, irregular study sessions. Instead of relying on last-minute marathons, they study small portions daily, ensuring that learning becomes a habit rather than a stressful event. This approach reduces mental fatigue, improves concept clarity, and builds deeper retention over time.'
    },
    {
      type: 'paragraph',
      text: 'They understand that the brain absorbs information more effectively in shorter, focused intervals rather than long, exhausting sessions. Even on days when motivation is low, they commit to doing a minimum amount of study. This discipline keeps momentum alive and prevents syllabus buildup. Small lessons every day accumulate into strong mastery over months—this is the real secret behind their consistent performance.'
    },

    {
      type: 'subheading',
      text: 'Smart Revision Strategy'
    },
    {
      type: 'paragraph',
      text: 'One of the biggest differentiators between top scorers and average students is their revision approach. High achievers rarely depend on passive reading. Instead, they use proven methods like active recall and spaced repetition to reinforce memory more effectively. Active recall trains the brain to pull information out instead of re-reading it, making the learning more permanent.'
    },
    {
      type: 'paragraph',
      text: 'Spaced repetition helps them remember information for months by revising in strategic intervals. This prevents the “forgetting curve” from destroying their hard work. Their revision cycles often include flashcards, summary notes, and revisiting mistakes from previous tests. This intentional practice ensures they go into the exam fully prepared, not just familiar with the content but truly confident in it.'
    },

    {
      type: 'subheading',
      text: 'Focused Practice'
    },
    {
      type: 'paragraph',
      text: 'Top scorers don’t just study—they practice with purpose. Attempting mock tests regularly helps them understand exam patterns, build speed, and improve accuracy. They treat each mock test like the real exam, analyzing their performance afterward to identify weak areas.'
    },
    {
      type: 'paragraph',
      text: 'Instead of feeling discouraged by mistakes, they use them as opportunities for improvement. Every incorrect answer becomes a clue about what needs more revision. This feedback-driven approach reduces surprises during the actual exam and significantly boosts confidence. Over time, mock tests help them develop exam temperament—a crucial skill that many students overlook.'
    },

    {
      type: 'subheading',
      text: 'The Power of Mindset'
    },
    {
      type: 'paragraph',
      text: 'Another common trait among top performers is a resilient and positive mindset. They avoid comparing themselves with others and instead focus on their own growth. They believe in progress, not perfection. When they face setbacks, they reassess their strategy rather than losing hope. This mental strength helps them stay consistent even when the syllabus gets overwhelming or results aren’t initially ideal.'
    },

    {
      type: 'subheading',
      text: 'Healthy Lifestyle Choices'
    },
    {
      type: 'paragraph',
      text: 'Surprisingly, many toppers credit their healthy daily habits—sleep, nutrition, and short breaks—as key contributors to their performance. They understand that a well-rested mind learns faster and performs better. Proper sleep helps with memory consolidation, while balanced meals maintain energy levels throughout the day. Instead of studying nonstop, they take strategic breaks to avoid burnout and maintain long-term productivity.'
    },

    {
      type: 'subheading',
      text: 'Final Thoughts'
    },
    {
      type: 'paragraph',
      text: 'The secrets of top scorers aren’t hidden formulas—they are simple habits practiced consistently. Anyone can adopt these strategies with the right dedication and planning. Consistency, smart revision, focused practice, and a strong mindset are the pillars of academic success. Whether you aim to become a topper or simply want to improve your performance, these habits can guide you toward achieving your goals. Remember: success is not just about talent—it’s about commitment, discipline, and the willingness to learn every single day.'
    }
  ]
},

9: {
  image: '/images/jee.jpg',
  tag: 'Study Hacks',
  title: 'Active Learning Techniques That Work',
  author: 'Coach Dev Verma',
  date: 'Dec 15, 2025',
  readTime: '7 min read',
  content: [
    {
      type: 'paragraph',
      text: 'Active learning strategies shift the focus from passive reading to meaningful engagement with the material. Instead of simply memorizing notes, students interact with the content through techniques that require thinking, analyzing, and retrieving information. These scientifically backed methods improve long-term retention, boost conceptual clarity, and significantly enhance problem-solving ability. Whether preparing for competitive exams or school tests, active learning ensures deeper understanding and stronger performance.'
    },
    {
      type: 'paragraph',
      text: 'Most students unknowingly rely on passive learning—re-reading textbooks, highlighting notes, or listening to lectures without interacting with the content. While these habits may feel productive, they often fail to build lasting understanding. Active learning flips the process by making you engage directly with the material. When your brain works harder to recall or apply information, the learning becomes far more effective and long-lasting.'
    },

    {
      type: 'subheading',
      text: 'Spaced Repetition'
    },
    {
      type: 'paragraph',
      text: 'Spaced repetition involves reviewing material at gradually increasing intervals. Instead of revising the same topic repeatedly in one day, you revisit it after 1 day, 3 days, 7 days, and so on. This technique is based on the psychology of memory and helps counteract the “forgetting curve,” ensuring that information stays in your long-term memory.'
    },
    {
      type: 'paragraph',
      text: 'For students preparing for exams like JEE, NEET, or boards, spaced repetition is a game-changer. It allows you to cover large portions of the syllabus over time without feeling overwhelmed. Apps like Anki or Quizlet automate this process, making revision structured and efficient. With consistent use, spaced repetition reduces revision time drastically and improves recall accuracy during exams.'
    },

    {
      type: 'subheading',
      text: 'Active Recall'
    },
    {
      type: 'paragraph',
      text: 'Active recall is one of the most powerful learning techniques ever studied. Instead of re-reading notes, you close your books and attempt to retrieve information from memory. This process strengthens neural pathways, making it easier to remember concepts when needed. It transforms learning from passive to highly interactive.'
    },
    {
      type: 'paragraph',
      text: 'Examples of active recall include explaining a topic aloud, solving practice questions without looking at solutions, writing everything you remember about a chapter on a blank sheet, or using flashcards. Students who consistently use active recall see dramatic improvements in retention and problem-solving speed. This technique is especially useful for conceptual subjects like physics, chemistry, biology, and mathematics.'
    },

    {
      type: 'subheading',
      text: 'Interleaving Method'
    },
    {
      type: 'paragraph',
      text: 'Interleaving involves mixing different topics or question types within one study session. Instead of studying one subject or chapter for hours, you rotate between related concepts. This forces your brain to switch understanding modes and develop a flexible problem-solving approach.'
    },
    {
      type: 'paragraph',
      text: 'For example, instead of solving only physics numericals for an entire hour, you might mix physics, math, and chemistry problems within the same session. This method improves critical thinking and helps your brain recognize patterns across subjects. Interleaving is particularly beneficial in competitive exams where questions require quick adaptation and cross-topic application.'
    },

    {
      type: 'subheading',
      text: 'Why Active Learning Works'
    },
    {
      type: 'paragraph',
      text: 'Active learning is rooted in cognitive science. It works because it forces your brain to think, recall, and connect ideas rather than passively process information. When you struggle to remember or apply a concept, your brain strengthens the pathways needed to retrieve that information again. This makes your learning more durable and exam-ready.'
    },
    {
      type: 'paragraph',
      text: 'Unlike passive methods, active learning ensures that even complex topics become easier to understand over time. It also builds confidence because you repeatedly test your understanding instead of just reading and hoping you remember during exams.'
    },

    {
      type: 'subheading',
      text: 'Final Thoughts'
    },
    {
      type: 'paragraph',
      text: 'Active learning doesn’t require more time—only smarter strategies. Techniques like spaced repetition, active recall, and interleaving can transform how you study, making your sessions more productive and effective. Start replacing passive reading with these scientifically proven methods, and you will notice a remarkable improvement in your understanding and retention. With consistent use, active learning becomes a powerful tool that helps you master subjects and perform confidently in any exam.'
    }
  ]
},

10:{
  image: '/images/hero.jpg',
  tag: 'Exam Tips',
  title: 'Understanding Question Paper Weightage',
  author: 'Prof. Sandeep Rao',
  date: 'Dec 18, 2025',
  readTime: '6 min read',
  content: [
    {
      type: 'paragraph',
      text: 'Analyzing the weightage of different chapters is one of the smartest and most time-efficient ways to prepare for exams. Instead of studying every topic with equal intensity, understanding weightage helps you prioritize strategically. This ensures that you invest your energy where it truly matters and avoid feeling overwhelmed. When you know which chapters carry more marks, which topics frequently appear in exams, and which areas require deeper understanding, your preparation becomes more structured and goal-oriented. Smart preparation always leads to better results, often with significantly less effort.'
    },
    {
      type: 'paragraph',
      text: 'Most toppers and high scorers follow this technique religiously. They begin by analyzing trends, identifying scoring opportunities, and planning their study schedule accordingly. Understanding weightage not only boosts your confidence but also reduces last-minute stress because you already know which chapters need repeated revision.'
    },

    {
      type: 'subheading',
      text: 'Identify High-Weight Chapters'
    },
    {
      type: 'paragraph',
      text: 'The first step is to understand which chapters consistently contribute the most marks. Reviewing previous years’ question papers, exam blueprints, and official weightage charts can help you recognize patterns. Often, certain chapters—especially conceptual or application-based ones—carry more weight year after year. Focusing on these chapters early in your preparation gives you a strong foundation.'
    },
    {
      type: 'paragraph',
      text: 'High-weight chapters usually contain deeper concepts or more practical application questions. Mastering them not only boosts your score but also strengthens your understanding of related topics. By prioritizing these chapters, you secure a large portion of your exam marks even before covering the entire syllabus.'
    },

    {
      type: 'subheading',
      text: 'Allocate Time Based on Importance'
    },
    {
      type: 'paragraph',
      text: 'Not all chapters deserve equal time. Once you identify which topics carry more marks, distribute your study hours accordingly. High-weightage chapters should be given more study time, multiple revisions, and plenty of practice questions. Medium-weight chapters should be revised steadily, while low-weight chapters can be studied briefly but effectively.'
    },
    {
      type: 'paragraph',
      text: 'This method ensures that you never waste time over-studying low-scoring areas while leaving high-scoring ones incomplete. A balanced schedule based on weightage helps you stay organized and prevents exam-day surprises. When your time investment aligns with scoring potential, your overall performance automatically improves.'
    },

    {
      type: 'subheading',
      text: 'Revise Smartly'
    },
    {
      type: 'paragraph',
      text: 'Once you understand which chapters matter most, revise them using efficient tools like summary notes, concept charts, chapter maps, and flashcards. High-weight topics should be revised multiple times to ensure strong retention. Focus on solving previous year questions and topic-wise question banks—this helps you understand the exact type of questions that appear repeatedly.'
    },
    {
      type: 'paragraph',
      text: 'Smart revision is not about reading more but revising effectively. By keeping quick revision sheets handy, you can revise entire high-weight chapters in a short span of time. This approach sharpens your recall, boosts accuracy, and ensures that you are fully prepared to attempt high-scoring questions confidently.'
    },

    {
      type: 'subheading',
      text: 'Final Thoughts'
    },
    {
      type: 'paragraph',
      text: 'Understanding question paper weightage is like having a roadmap for exam preparation. It gives direction, saves time, and helps you focus on what truly matters. When you combine weightage analysis with consistent revision and practice, your preparation becomes much more effective and stress-free. Remember, smart studying beats hard studying every time. Prioritize wisely, revise strategically, and watch your performance improve naturally.'
    }
  ]
},
11: {
  image: '/images/neet.jpg',
  tag: 'Study Hacks',
  title: 'Creating an Effective Study Schedule',
  author: 'Coach Priya Nair',
  date: 'Dec 22, 2025',
  readTime: '7 min read',
  content: [
    {
      type: 'paragraph',
      text: 'A well-planned study schedule is one of the most powerful tools for academic success. It helps students stay consistent, organized, and mentally prepared for the workload ahead. When your study timetable is clear, you avoid last-minute panic and ensure that every subject receives the attention it deserves. A structured schedule also reduces stress because you always know what to study and when, making your preparation smoother and more predictable.'
    },
    {
      type: 'paragraph',
      text: 'Students often make the mistake of studying randomly or without a clear plan, which leads to uneven preparation and forgotten chapters. Creating a study schedule helps bring balance and discipline into your routine. It gives you control over your learning and transforms your preparation from chaotic to strategic.'
    },

    {
      type: 'subheading',
      text: 'Divide Your Day Into Study Blocks'
    },
    {
      type: 'paragraph',
      text: 'Breaking your day into focused study blocks allows you to manage your time effectively. Instead of studying one subject for hours, dividing your day into smaller segments keeps your mind fresh and prevents monotony. Each block should focus on one subject or topic, ensuring deeper concentration and better retention.'
    },
    {
      type: 'paragraph',
      text: 'You can customize your study blocks based on your productivity peaks. For example, mornings are often best for difficult subjects like maths or physics, while evenings can be used for lighter revision or reading-based subjects. Using techniques like the Pomodoro method (50 minutes study + 10 minutes break) can also make these blocks more effective and sustainable.'
    },

    {
      type: 'subheading',
      text: 'Set Realistic Daily Goals'
    },
    {
      type: 'paragraph',
      text: 'Setting realistic goals keeps you motivated and prevents burnout. Many students overload their timetable, expecting to complete too much in a single day. This leads to frustration, incomplete work, and a loss of confidence. Instead, set achievable goals that match your pace and learning style.'
    },
    {
      type: 'paragraph',
      text: 'Realistic goals also create a sense of accomplishment. When you successfully complete your targets, you feel more confident and energized to keep going. Over time, these small victories build momentum, helping you maintain consistency throughout exam preparation. A good rule is to focus on quality, not quantity—understanding one chapter deeply is better than rushing through three.'
    },

    {
      type: 'subheading',
      text: 'Include Breaks and Revision Time'
    },
    {
      type: 'paragraph',
      text: 'Many students underestimate the importance of breaks. However, your brain needs time to rest and process information. Regular breaks prevent mental fatigue, improve focus, and keep you motivated for longer study sessions. Even a short 5–10 minute break can refresh your mind and boost productivity.'
    },
    {
      type: 'paragraph',
      text: 'Along with breaks, daily revision is crucial. Without revision, your mind gradually forgets what you studied earlier. Setting aside even 20–30 minutes each day to review previous topics strengthens long-term retention. Over time, this habit ensures that you remember concepts clearly when exams arrive, without needing to re-study everything from scratch.'
    },

    {
      type: 'subheading',
      text: 'Final Tips for Building a Perfect Schedule'
    },
    {
      type: 'paragraph',
      text: 'Your study schedule should be flexible, not forceful. Adjust it based on your progress, school timings, coaching sessions, and energy levels. Track your performance weekly and make changes if needed. Include time for rest, hobbies, and exercise—your brain works best when your lifestyle is balanced.'
    },
    {
      type: 'paragraph',
      text: 'A well-planned schedule is not just about managing time—it is about managing your mind, energy, and focus. When you follow a structured routine with consistency, success becomes much easier to achieve. Start small, stick to your plan, and watch your productivity grow day by day.'
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
  readTime: '6 min read',
  content: [
    {
      type: 'paragraph',
      text: 'Confidence plays a crucial role in determining exam success. Even the most well-prepared students may underperform if they lack the belief in their own abilities. Building confidence is not about being perfect—it’s about trusting your effort, acknowledging your growth, and staying mentally strong throughout the preparation journey. With the right habits and mindset, students can overcome self-doubt, reduce anxiety, and approach exams with clarity and assurance.'
    },
    {
      type: 'paragraph',
      text: 'True confidence develops gradually. It emerges from consistent daily actions, honest self-reflection, and the willingness to keep trying despite setbacks. When students learn to control negative thoughts and celebrate their effort, their confidence becomes one of their strongest assets—not just during exams, but throughout life.'
    },

    {
      type: 'subheading',
      text: 'Focus on Progress, Not Perfection'
    },
    {
      type: 'paragraph',
      text: ' perfectionism can create unnecessary pressure and make even simple tasks feel overwhelming. Instead of trying to master everything at once, focus on improving little by little each day. When you track these small improvements—like solving a type of question faster, remembering a concept clearly, or revising consistently—you begin to notice real progress. This awareness builds confidence naturally.'
    },
    {
      type: 'paragraph',
      text: 'Progress is sustainable; perfection is not. When students shift their mindset from “I must be perfect” to “I am getting better every day,” they become more relaxed, more focused, and more motivated. Confidence grows not from flawless performance, but from continuous self-improvement.'
    },

    {
      type: 'subheading',
      text: 'Avoid Comparing Yourself to Others'
    },
    {
      type: 'paragraph',
      text: 'In a world filled with competition and constant comparisons, it’s easy to feel discouraged by someone else’s scores or study pace. But every student has a unique learning style, background, and rhythm. Comparing yourself to others is not only unfair—it also steals your motivation, lowers self-esteem, and distracts you from your own journey.'
    },
    {
      type: 'paragraph',
      text: 'Instead, compare yourself with who you were yesterday. Focus on your personal improvement, not someone else’s achievements. When you learn to appreciate your own efforts and strengths, you develop a healthier mindset. This shift allows you to stay positive, productive, and confident without external pressure.'
    },

    {
      type: 'subheading',
      text: 'Celebrate Small Wins'
    },
    {
      type: 'paragraph',
      text: 'Confidence grows through repeated success—no matter how small. Completing a chapter, understanding a tough concept, solving a tricky numerical, or simply maintaining your daily study routine are all achievements worth celebrating. These small victories remind you that you are moving forward, even if the journey feels long.'
    },
    {
      type: 'paragraph',
      text: 'When you acknowledge your wins, your brain releases dopamine, a chemical that boosts motivation and confidence. This creates a positive feedback loop: the more you succeed, the more confident you feel, and the more effort you put in. Over time, these small wins build an unshakable foundation of self-belief.'
    },

    {
      type: 'subheading',
      text: 'Final Thoughts'
    },
    {
      type: 'paragraph',
      text: 'Confidence is not something you are born with—it is something you build through habits, mindset, and consistent effort. By focusing on progress, avoiding comparison, and celebrating your achievements, you can strengthen your confidence every single day. Remember, belief in yourself is your greatest tool during preparation. When you trust your effort and stay committed, success naturally follows.'
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