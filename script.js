// const welcomeElement = document.getElementById('question');
const questionText = document.getElementById('question-text');
const answerText = document.getElementById('answer-text');
const showAnsBtn = document.getElementById('show-ans-btn');
const nextQuestionBtn = document.getElementById('next-question-btn');
const roundList = document.getElementById('round-list');
const sidebarRounds = ['default','elimination', 'passing', 'group', 'picture', 'video', 'audio', 'fastest', 'bonus','patiance','sanskriti','rajnitii'];

// Modify questions array to include 'round' property for each question
const questions = [
    { round: 'default', format: 'text',  question: 'Welcome to this Quiz', answer: '' },
    { round: 'elimination', format: 'text',  question: 'Q1 Krishna', answer: 'Radha' },
    { round: 'elimination', format: 'text',  question: 'Q2 भारत की सबसे बड़ी आवासीय इमारत कौन सी है', answer: 'राष्ट्रपति भवन' },
    { round: 'elimination', format: 'text',  question: 'Q3 भारत के प्रथम वित्त मंत्री कौन थे', answer: 'आर के शनमुखम चेट्टी' },
    { round: 'elimination', format: 'text',  question: 'Q4 सबसे लंबे शेड वाला प्लेटफार्म कौन सा है', answer: 'सियालदह स्टेशन का प्लेटफार्म 550 फुट शेड' },
    { round: 'elimination', format: 'text',  question: 'Q5 गुप्त साम्राज्य का विनाश किसने किया', answer: 'हूणों ने' },
    { round: 'elimination', format: 'text',  question: 'Q6 Krishna', answer: 'Radha' },
    { round: 'elimination', format: 'text',  question: 'Q7 भारत की सबसे बड़ी आवासीय इमारत कौन सी है', answer: 'राष्ट्रपति भवन' },
    { round: 'elimination', format: 'text',  question: 'Q8 भारत के प्रथम वित्त मंत्री कौन थे', answer: 'आर के शनमुखम चेट्टी' },
    { round: 'elimination', format: 'text',  question: 'Q9 सबसे लंबे शेड वाला प्लेटफार्म कौन सा है', answer: 'सियालदह स्टेशन का प्लेटफार्म 550 फुट शेड' },
    { round: 'elimination', format: 'text',  question: 'Q10 गुप्त साम्राज्य का विनाश किसने किया', answer: 'हूणों ने' },
    { round: 'elimination', format: 'text',  question: 'Q11 Krishna', answer: 'Radha' },
    { round: 'elimination', format: 'text',  question: 'Q12 भारत की सबसे बड़ी आवासीय इमारत कौन सी है', answer: 'राष्ट्रपति भवन' },
    { round: 'elimination', format: 'text',  question: 'Q13 भारत के प्रथम वित्त मंत्री कौन थे', answer: 'आर के शनमुखम चेट्टी' },
    { round: 'elimination', format: 'text',  question: 'Q14 सबसे लंबे शेड वाला प्लेटफार्म कौन सा है', answer: 'सियालदह स्टेशन का प्लेटफार्म 550 फुट शेड' },
    { round: 'elimination', format: 'text',  question: 'Q15 गुप्त साम्राज्य का विनाश किसने किया', answer: 'हूणों ने' },
    { round: 'elimination', format: 'text',  question: 'Q16 Krishna', answer: 'Radha' },
    { round: 'elimination', format: 'text',  question: 'Q17 भारत की सबसे बड़ी आवासीय इमारत कौन सी है', answer: 'राष्ट्रपति भवन' },
    { round: 'elimination', format: 'text',  question: 'Q18 भारत के प्रथम वित्त मंत्री कौन थे', answer: 'आर के शनमुखम चेट्टी' },
    { round: 'elimination', format: 'text',  question: 'Q19 सबसे लंबे शेड वाला प्लेटफार्म कौन सा है', answer: 'सियालदह स्टेशन का प्लेटफार्म 550 फुट शेड' },
    { round: 'elimination', format: 'text',  question: 'Q20 गुप्त साम्राज्य का विनाश किसने किया', answer: 'हूणों ने' },
    { round: 'elimination', format: 'text',  question: 'Q21 Krishna', answer: 'Radha' },
    { round: 'elimination', format: 'text',  question: 'Q22 भारत की सबसे बड़ी आवासीय इमारत कौन सी है', answer: 'राष्ट्रपति भवन' },
    { round: 'elimination', format: 'text',  question: 'Q23 भारत के प्रथम वित्त मंत्री कौन थे', answer: 'आर के शनमुखम चेट्टी' },
    { round: 'elimination', format: 'text',  question: 'Q24 सबसे लंबे शेड वाला प्लेटफार्म कौन सा है', answer: 'सियालदह स्टेशन का प्लेटफार्म 550 फुट शेड' },
    { round: 'elimination', format: 'text',  question: 'Q25 गुप्त साम्राज्य का विनाश किसने किया', answer: 'हूणों ने' },
    { round: 'elimination', format: 'text',  question: 'Q26 Krishna', answer: 'Radha' },
    { round: 'elimination', format: 'text',  question: 'Q27 भारत की सबसे बड़ी आवासीय इमारत कौन सी है', answer: 'राष्ट्रपति भवन' },
    { round: 'elimination', format: 'text',  question: 'Q28 भारत के प्रथम वित्त मंत्री कौन थे', answer: 'आर के शनमुखम चेट्टी' },
    { round: 'elimination', format: 'text',  question: 'Q29 सबसे लंबे शेड वाला प्लेटफार्म कौन सा है', answer: 'सियालदह स्टेशन का प्लेटफार्म 550 फुट शेड' },
    { round: 'elimination', format: 'text',  question: 'Q30 गुप्त साम्राज्य का विनाश किसने किया', answer: 'हूणों ने' },
    { round: 'elimination', format: 'text',  question: 'Q31 Krishna', answer: 'Radha' },
    { round: 'elimination', format: 'text',  question: 'Q32 भारत की सबसे बड़ी आवासीय इमारत कौन सी है', answer: 'राष्ट्रपति भवन' },
    { round: 'elimination', format: 'text',  question: 'Q33 भारत के प्रथम वित्त मंत्री कौन थे', answer: 'आर के शनमुखम चेट्टी' },
    { round: 'elimination', format: 'text',  question: 'Q34 सबसे लंबे शेड वाला प्लेटफार्म कौन सा है', answer: 'सियालदह स्टेशन का प्लेटफार्म 550 फुट शेड' },
    { round: 'elimination', format: 'text',  question: 'Q35 गुप्त साम्राज्य का विनाश किसने किया', answer: 'हूणों ने' },
    { round: 'elimination', format: 'text',  question: 'Q36 Krishna', answer: 'Radha' },
    { round: 'elimination', format: 'text',  question: 'Q37 भारत की सबसे बड़ी आवासीय इमारत कौन सी है', answer: 'राष्ट्रपति भवन' },
    { round: 'elimination', format: 'text',  question: 'Q38 भारत के प्रथम वित्त मंत्री कौन थे', answer: 'आर के शनमुखम चेट्टी' },
    { round: 'elimination', format: 'text',  question: 'Q39 सबसे लंबे शेड वाला प्लेटफार्म कौन सा है', answer: 'सियालदह स्टेशन का प्लेटफार्म 550 फुट शेड' },
    { round: 'elimination', format: 'text',  question: 'Q40 गुप्त साम्राज्य का विनाश किसने किया', answer: 'हूणों ने' },
    { round: 'elimination', format: 'text',  question: 'Q41 Krishna', answer: 'Radha' },
    { round: 'elimination', format: 'text',  question: 'Q42 भारत की सबसे बड़ी आवासीय इमारत कौन सी है', answer: 'राष्ट्रपति भवन' },
    { round: 'elimination', format: 'text',  question: 'Q43 भारत के प्रथम वित्त मंत्री कौन थे', answer: 'आर के शनमुखम चेट्टी' },
    { round: 'elimination', format: 'text',  question: 'Q44 सबसे लंबे शेड वाला प्लेटफार्म कौन सा है', answer: 'सियालदह स्टेशन का प्लेटफार्म 550 फुट शेड' },
    { round: 'elimination', format: 'text',  question: 'Q45 गुप्त साम्राज्य का विनाश किसने किया', answer: 'हूणों ने' },
    { round: 'elimination', format: 'text',  question: 'Q46 Krishna', answer: 'Radha' },
    { round: 'elimination', format: 'text',  question: 'Q47 भारत की सबसे बड़ी आवासीय इमारत कौन सी है', answer: 'राष्ट्रपति भवन' },
    { round: 'elimination', format: 'text',  question: 'Q48 भारत के प्रथम वित्त मंत्री कौन थे', answer: 'आर के शनमुखम चेट्टी' },
    { round: 'elimination', format: 'text',  question: 'Q49 सबसे लंबे शेड वाला प्लेटफार्म कौन सा है', answer: 'सियालदह स्टेशन का प्लेटफार्म 550 फुट शेड' },
    { round: 'elimination', format: 'text',  question: 'Q50 गुप्त साम्राज्य का विनाश किसने किया', answer: 'हूणों ने' },
    { round: 'elimination', format: 'text',  question: 'Q51 Krishna', answer: 'Radha' },
    { round: 'elimination', format: 'text',  question: 'Q52 भारत की सबसे बड़ी आवासीय इमारत कौन सी है', answer: 'राष्ट्रपति भवन' },
    { round: 'elimination', format: 'text',  question: 'Q53 भारत के प्रथम वित्त मंत्री कौन थे', answer: 'आर के शनमुखम चेट्टी' },
    { round: 'elimination', format: 'text',  question: 'Q54 सबसे लंबे शेड वाला प्लेटफार्म कौन सा है', answer: 'सियालदह स्टेशन का प्लेटफार्म 550 फुट शेड' },
    { round: 'elimination', format: 'text',  question: 'Q55 गुप्त साम्राज्य का विनाश किसने किया', answer: 'हूणों ने' },
    { round: 'elimination', format: 'text',  question: 'Q56 Krishna', answer: 'Radha' },
    { round: 'elimination', format: 'text',  question: 'Q57 भारत की सबसे बड़ी आवासीय इमारत कौन सी है', answer: 'राष्ट्रपति भवन' },
    { round: 'elimination', format: 'text',  question: 'Q58 भारत के प्रथम वित्त मंत्री कौन थे', answer: 'आर के शनमुखम चेट्टी' },
    { round: 'elimination', format: 'text',  question: 'Q59 सबसे लंबे शेड वाला प्लेटफार्म कौन सा है', answer: 'सियालदह स्टेशन का प्लेटफार्म 550 फुट शेड' },
    { round: 'elimination', format: 'text',  question: 'Q60 गुप्त साम्राज्य का विनाश किसने किया', answer: 'हूणों ने' },
    { round: 'elimination', format: 'text',  question: 'Q61 Krishna', answer: 'Radha' },
    { round: 'elimination', format: 'text',  question: 'Q62 भारत की सबसे बड़ी आवासीय इमारत कौन सी है', answer: 'राष्ट्रपति भवन' },
    { round: 'elimination', format: 'text',  question: 'Q63 भारत के प्रथम वित्त मंत्री कौन थे', answer: 'आर के शनमुखम चेट्टी' },
    { round: 'elimination', format: 'text',  question: 'Q64 सबसे लंबे शेड वाला प्लेटफार्म कौन सा है', answer: 'सियालदह स्टेशन का प्लेटफार्म 550 फुट शेड' },
    { round: 'elimination', format: 'text',  question: 'Q65 गुप्त साम्राज्य का विनाश किसने किया', answer: 'हूणों ने' },
    { round: 'elimination', format: 'text',  question: 'Q66 Krishna', answer: 'Radha' },
    { round: 'elimination', format: 'text',  question: 'Q67 भारत की सबसे बड़ी आवासीय इमारत कौन सी है', answer: 'राष्ट्रपति भवन' },
    { round: 'elimination', format: 'text',  question: 'Q68 भारत के प्रथम वित्त मंत्री कौन थे', answer: 'आर के शनमुखम चेट्टी' },
    { round: 'elimination', format: 'text',  question: 'Q69 सबसे लंबे शेड वाला प्लेटफार्म कौन सा है', answer: 'सियालदह स्टेशन का प्लेटफार्म 550 फुट शेड' },
    { round: 'elimination', format: 'text',  question: 'Q70 गुप्त साम्राज्य का विनाश किसने किया', answer: 'हूणों ने' },
    { round: 'elimination', format: 'text',  question: 'Q71 Krishna', answer: 'Radha' },
    { round: 'elimination', format: 'text',  question: 'Q72 भारत की सबसे बड़ी आवासीय इमारत कौन सी है', answer: 'राष्ट्रपति भवन' },
    { round: 'elimination', format: 'text',  question: 'Q73 भारत के प्रथम वित्त मंत्री कौन थे', answer: 'आर के शनमुखम चेट्टी' },
    { round: 'elimination', format: 'text',  question: 'Q74 सबसे लंबे शेड वाला प्लेटफार्म कौन सा है', answer: 'सियालदह स्टेशन का प्लेटफार्म 550 फुट शेड' },
    { round: 'elimination', format: 'text',  question: 'Q75 गुप्त साम्राज्य का विनाश किसने किया', answer: 'हूणों ने' },
    { round: 'elimination', format: 'text',  question: 'Q76 Krishna', answer: 'Radha' },
    { round: 'elimination', format: 'text',  question: 'Q77 भारत की सबसे बड़ी आवासीय इमारत कौन सी है', answer: 'राष्ट्रपति भवन' },
    { round: 'elimination', format: 'text',  question: 'Q78 भारत के प्रथम वित्त मंत्री कौन थे', answer: 'आर के शनमुखम चेट्टी' },
    { round: 'elimination', format: 'text',  question: 'Q79 सबसे लंबे शेड वाला प्लेटफार्म कौन सा है', answer: 'सियालदह स्टेशन का प्लेटफार्म 550 फुट शेड' },
    { round: 'elimination', format: 'text',  question: 'Q80 गुप्त साम्राज्य का विनाश किसने किया', answer: 'हूणों ने' },
    { round: 'elimination', format: 'text',  question: 'Q81 Krishna', answer: 'Radha' },
    { round: 'elimination', format: 'text',  question: 'Q82 भारत की सबसे बड़ी आवासीय इमारत कौन सी है', answer: 'राष्ट्रपति भवन' },
    { round: 'elimination', format: 'text',  question: 'Q83 भारत के प्रथम वित्त मंत्री कौन थे', answer: 'आर के शनमुखम चेट्टी' },
    { round: 'elimination', format: 'text',  question: 'Q84 सबसे लंबे शेड वाला प्लेटफार्म कौन सा है', answer: 'सियालदह स्टेशन का प्लेटफार्म 550 फुट शेड' },
    { round: 'elimination', format: 'text',  question: 'Q85 गुप्त साम्राज्य का विनाश किसने किया', answer: 'हूणों ने' },
    { round: 'elimination', format: 'text',  question: 'Q86 Krishna', answer: 'Radha' },
    { round: 'elimination', format: 'text',  question: 'Q87 भारत की सबसे बड़ी आवासीय इमारत कौन सी है', answer: 'राष्ट्रपति भवन' },
    { round: 'elimination', format: 'text',  question: 'Q88 भारत के प्रथम वित्त मंत्री कौन थे', answer: 'आर के शनमुखम चेट्टी' },
    { round: 'elimination', format: 'text',  question: 'Q89 सबसे लंबे शेड वाला प्लेटफार्म कौन सा है', answer: 'सियालदह स्टेशन का प्लेटफार्म 550 फुट शेड' },
    { round: 'elimination', format: 'text',  question: 'Q90 गुप्त साम्राज्य का विनाश किसने किया', answer: 'हूणों ने' },
    // { round: 'elimination', format: 'image',  question: 'image.jpg', answer: 'Sita' },
    // ... other questions ...
    //Passing Questions start from here
    { round: 'passing', format: 'text',  question: 'Q1 Krishna', answer: 'Radha' },
    { round: 'passing', format: 'text',  question: 'Q2 भारत की सबसे बड़ी आवासीय इमारत कौन सी है', answer: 'राष्ट्रपति भवन' },
    { round: 'passing', format: 'text',  question: 'Q3 भारत के प्रथम वित्त मंत्री कौन थे', answer: 'आर के शनमुखम चेट्टी' },
    { round: 'passing', format: 'text',  question: 'Q4 सबसे लंबे शेड वाला प्लेटफार्म कौन सा है', answer: 'सियालदह स्टेशन का प्लेटफार्म 550 फुट शेड' },
    { round: 'passing', format: 'text',  question: 'Q5 गुप्त साम्राज्य का विनाश किसने किया', answer: 'हूणों ने' },
    { round: 'passing', format: 'text',  question: 'Q6 Krishna', answer: 'Radha' },
    { round: 'passing', format: 'text',  question: 'Q7 भारत की सबसे बड़ी आवासीय इमारत कौन सी है', answer: 'राष्ट्रपति भवन' },
    { round: 'passing', format: 'text',  question: 'Q8 भारत के प्रथम वित्त मंत्री कौन थे', answer: 'आर के शनमुखम चेट्टी' },
    { round: 'passing', format: 'text',  question: 'Q9 सबसे लंबे शेड वाला प्लेटफार्म कौन सा है', answer: 'सियालदह स्टेशन का प्लेटफार्म 550 फुट शेड' },
    { round: 'passing', format: 'text',  question: 'Q10 गुप्त साम्राज्य का विनाश किसने किया', answer: 'हूणों ने' },
    { round: 'passing', format: 'text',  question: 'Q11 Krishna', answer: 'Radha' },
    { round: 'passing', format: 'text',  question: 'Q12 भारत की सबसे बड़ी आवासीय इमारत कौन सी है', answer: 'राष्ट्रपति भवन' },
    { round: 'passing', format: 'text',  question: 'Q13 भारत के प्रथम वित्त मंत्री कौन थे', answer: 'आर के शनमुखम चेट्टी' },
    { round: 'passing', format: 'text',  question: 'Q14 सबसे लंबे शेड वाला प्लेटफार्म कौन सा है', answer: 'सियालदह स्टेशन का प्लेटफार्म 550 फुट शेड' },
    { round: 'passing', format: 'text',  question: 'Q15 गुप्त साम्राज्य का विनाश किसने किया', answer: 'हूणों ने' },
    { round: 'passing', format: 'text',  question: 'Q16 Krishna', answer: 'Radha' },
    { round: 'passing', format: 'text',  question: 'Q17 भारत की सबसे बड़ी आवासीय इमारत कौन सी है', answer: 'राष्ट्रपति भवन' },
    { round: 'passing', format: 'text',  question: 'Q18 भारत के प्रथम वित्त मंत्री कौन थे', answer: 'आर के शनमुखम चेट्टी' },
    { round: 'passing', format: 'text',  question: 'Q19 सबसे लंबे शेड वाला प्लेटफार्म कौन सा है', answer: 'सियालदह स्टेशन का प्लेटफार्म 550 फुट शेड' },
    { round: 'passing', format: 'text',  question: 'Q20 गुप्त साम्राज्य का विनाश किसने किया', answer: 'हूणों ने' },
    { round: 'passing', format: 'text',  question: 'Q21 Krishna', answer: 'Radha' },
    { round: 'passing', format: 'text',  question: 'Q22 भारत की सबसे बड़ी आवासीय इमारत कौन सी है', answer: 'राष्ट्रपति भवन' },
    { round: 'passing', format: 'text',  question: 'Q23 भारत के प्रथम वित्त मंत्री कौन थे', answer: 'आर के शनमुखम चेट्टी' },
    { round: 'passing', format: 'text',  question: 'Q24 सबसे लंबे शेड वाला प्लेटफार्म कौन सा है', answer: 'सियालदह स्टेशन का प्लेटफार्म 550 फुट शेड' },
    { round: 'passing', format: 'text',  question: 'Q25 गुप्त साम्राज्य का विनाश किसने किया', answer: 'हूणों ने' },
    // { round: 'passing', format: 'audio', question: 'Allah-Duhai-Hai(PagalWorld).mp3', answer: 'Laxmi' },
    // { round: 'passing', format: 'video', question: 'video.mp4', answer: 'Parvati' },
    //patiance questions start from here
    { round: 'patiance', format: 'text',  question: 'Q1 गुप्त साम्राज्य का विनाश किसने किया', answer: 'हूणों ने' },
    { round: 'patiance', format: 'text',  question: 'Q2 गुप्त साम्राज्य का विनाश किसने किया', answer: 'हूणों ने' },
    { round: 'patiance', format: 'text',  question: 'Q3 गुप्त साम्राज्य का विनाश किसने किया', answer: 'हूणों ने' },
    { round: 'patiance', format: 'text',  question: 'Q4 गुप्त साम्राज्य का विनाश किसने किया', answer: 'हूणों ने' },
    { round: 'patiance', format: 'text',  question: 'Q5 गुप्त साम्राज्य का विनाश किसने किया', answer: 'हूणों ने' },
    { round: 'patiance', format: 'text',  question: 'Q6 गुप्त साम्राज्य का विनाश किसने किया', answer: 'हूणों ने' },
    { round: 'patiance', format: 'text',  question: 'Q7 गुप्त साम्राज्य का विनाश किसने किया', answer: 'हूणों ने' },
    { round: 'patiance', format: 'text',  question: 'Q8 गुप्त साम्राज्य का विनाश किसने किया', answer: 'हूणों ने' },
    { round: 'patiance', format: 'text',  question: 'Q9 गुप्त साम्राज्य का विनाश किसने किया', answer: 'हूणों ने' },
    { round: 'patiance', format: 'text',  question: 'Q10 गुप्त साम्राज्य का विनाश किसने किया', answer: 'हूणों ने' },

    //sanskriti questions start from here
    { round: 'sanskriti', format: 'text',  question: 'Q1 गुप्त साम्राज्य का विनाश किसने किया', answer: 'हूणों ने' },
    { round: 'sanskriti', format: 'text',  question: 'Q2 गुप्त साम्राज्य का विनाश किसने किया', answer: 'हूणों ने' },
    { round: 'sanskriti', format: 'text',  question: 'Q3 गुप्त साम्राज्य का विनाश किसने किया', answer: 'हूणों ने' },
    { round: 'sanskriti', format: 'text',  question: 'Q4 गुप्त साम्राज्य का विनाश किसने किया', answer: 'हूणों ने' },
    { round: 'sanskriti', format: 'text',  question: 'Q5 गुप्त साम्राज्य का विनाश किसने किया', answer: 'हूणों ने' },
    //Rajniti Questions start from here
    { round: 'rajnitii', format: 'text',  question: 'Q1 गुप्त साम्राज्य का विनाश किसने किया', answer: 'हूणों ने' },
    { round: 'rajnitii', format: 'text',  question: 'Q2 गुप्त साम्राज्य का विनाश किसने किया', answer: 'हूणों ने' },
    { round: 'rajnitii', format: 'text',  question: 'Q3 गुप्त साम्राज्य का विनाश किसने किया', answer: 'हूणों ने' },
    { round: 'rajnitii', format: 'text',  question: 'Q4 गुप्त साम्राज्य का विनाश किसने किया', answer: 'हूणों ने' },
    { round: 'rajnitii', format: 'text',  question: 'Q5 गुप्त साम्राज्य का विनाश किसने किया', answer: 'हूणों ने' },
    { round: 'rajnitii', format: 'text',  question: 'Q6 गुप्त साम्राज्य का विनाश किसने किया', answer: 'हूणों ने' },
    { round: 'rajnitii', format: 'text',  question: 'Q7 गुप्त साम्राज्य का विनाश किसने किया', answer: 'हूणों ने' },
    { round: 'rajnitii', format: 'text',  question: 'Q8 गुप्त साम्राज्य का विनाश किसने किया', answer: 'हूणों ने' },
    { round: 'rajnitii', format: 'text',  question: 'Q9 गुप्त साम्राज्य का विनाश किसने किया', answer: 'हूणों ने' },
    { round: 'rajnitii', format: 'text',  question: 'Q10 गुप्त साम्राज्य का विनाश किसने किया', answer: 'हूणों ने' },

    //Images Round start from here
    { round: 'picture', format: 'image',  question: 'images/1.jpg', answer: 'Radha' },
    { round: 'picture', format: 'image',  question: 'images/2.jpg', answer: 'Radha' },
    { round: 'picture', format: 'image',  question: 'images/1.jpg', answer: 'Radha' },
    { round: 'picture', format: 'image',  question: 'images/2.jpg', answer: 'Radha' },
    { round: 'picture', format: 'image',  question: 'images/1.jpg', answer: 'Radha' },

    //Audio Round Start from here
    { round: 'audio', format: 'audio',  question: 'audios/1.mp3', answer: 'Radha' },
    { round: 'audio', format: 'audio',  question: 'audios/2.mp3', answer: 'Radha' },
    { round: 'audio', format: 'audio',  question: 'audios/3.mp3', answer: 'Radha' },
    { round: 'audio', format: 'audio',  question: 'audios/1.mp3', answer: 'Radha' },
    { round: 'audio', format: 'audio',  question: 'audios/2.mp3', answer: 'Radha' },

    //Video Round starts from here
    { round: 'video', format: 'video',  question: 'videos/1.mp4', answer: 'Radha' },
    { round: 'video', format: 'video',  question: 'videos/2.mp4', answer: 'Radha' },
    { round: 'video', format: 'video',  question: 'videos/3.mp4', answer: 'Radha' },
    { round: 'video', format: 'video',  question: 'videos/4.mp4', answer: 'Radha' },
    { round: 'video', format: 'video',  question: 'videos/1.mp4', answer: 'Radha'},
    //Fastest fastest from here
    { round: 'fastest', format: 'text',  question: 'Q1 Krishna', answer: 'Radha' },
    { round: 'fastest', format: 'text',  question: 'Q2 भारत की सबसे बड़ी आवासीय इमारत कौन सी है', answer: 'राष्ट्रपति भवन' },
    { round: 'fastest', format: 'text',  question: 'Q3 भारत के प्रथम वित्त मंत्री कौन थे', answer: 'आर के शनमुखम चेट्टी' },
    { round: 'fastest', format: 'text',  question: 'Q4 सबसे लंबे शेड वाला प्लेटफार्म कौन सा है', answer: 'सियालदह स्टेशन का प्लेटफार्म 550 फुट शेड' },
    { round: 'fastest', format: 'text',  question: 'Q5 गुप्त साम्राज्य का विनाश किसने किया', answer: 'हूणों ने' },
    { round: 'fastest', format: 'text',  question: 'Q6 Krishna', answer: 'Radha' },
    { round: 'fastest', format: 'text',  question: 'Q7 भारत की सबसे बड़ी आवासीय इमारत कौन सी है', answer: 'राष्ट्रपति भवन' },
    { round: 'fastest', format: 'text',  question: 'Q8 भारत के प्रथम वित्त मंत्री कौन थे', answer: 'आर के शनमुखम चेट्टी' },
    { round: 'fastest', format: 'text',  question: 'Q9 सबसे लंबे शेड वाला प्लेटफार्म कौन सा है', answer: 'सियालदह स्टेशन का प्लेटफार्म 550 फुट शेड' },
    { round: 'fastest', format: 'text',  question: 'Q10 गुप्त साम्राज्य का विनाश किसने किया', answer: 'हूणों ने' },
    { round: 'fastest', format: 'text',  question: 'Q11 Krishna', answer: 'Radha' },
    { round: 'fastest', format: 'text',  question: 'Q12 भारत की सबसे बड़ी आवासीय इमारत कौन सी है', answer: 'राष्ट्रपति भवन' },
    { round: 'fastest', format: 'text',  question: 'Q13 भारत के प्रथम वित्त मंत्री कौन थे', answer: 'आर के शनमुखम चेट्टी' },
    { round: 'fastest', format: 'text',  question: 'Q14 सबसे लंबे शेड वाला प्लेटफार्म कौन सा है', answer: 'सियालदह स्टेशन का प्लेटफार्म 550 फुट शेड' },
    { round: 'fastest', format: 'text',  question: 'Q15 गुप्त साम्राज्य का विनाश किसने किया', answer: 'हूणों ने' },
    { round: 'fastest', format: 'text',  question: 'Q16 Krishna', answer: 'Radha' },
    { round: 'fastest', format: 'text',  question: 'Q17 भारत की सबसे बड़ी आवासीय इमारत कौन सी है', answer: 'राष्ट्रपति भवन' },
    { round: 'fastest', format: 'text',  question: 'Q18 भारत के प्रथम वित्त मंत्री कौन थे', answer: 'आर के शनमुखम चेट्टी' },
    { round: 'fastest', format: 'text',  question: 'Q19 सबसे लंबे शेड वाला प्लेटफार्म कौन सा है', answer: 'सियालदह स्टेशन का प्लेटफार्म 550 फुट शेड' },
    { round: 'fastest', format: 'text',  question: 'Q20 गुप्त साम्राज्य का विनाश किसने किया', answer: 'हूणों ने' },
    { round: 'fastest', format: 'text',  question: 'Q21 Krishna', answer: 'Radha' },
    { round: 'fastest', format: 'text',  question: 'Q22 भारत की सबसे बड़ी आवासीय इमारत कौन सी है', answer: 'राष्ट्रपति भवन' },
    { round: 'fastest', format: 'text',  question: 'Q23 भारत के प्रथम वित्त मंत्री कौन थे', answer: 'आर के शनमुखम चेट्टी' },
    { round: 'fastest', format: 'text',  question: 'Q24 सबसे लंबे शेड वाला प्लेटफार्म कौन सा है', answer: 'सियालदह स्टेशन का प्लेटफार्म 550 फुट शेड' },
    { round: 'fastest', format: 'text',  question: 'Q25 गुप्त साम्राज्य का विनाश किसने किया', answer: 'हूणों ने' },
    { round: 'fastest', format: 'text',  question: 'Q26 Krishna', answer: 'Radha' },
    { round: 'fastest', format: 'text',  question: 'Q27 भारत की सबसे बड़ी आवासीय इमारत कौन सी है', answer: 'राष्ट्रपति भवन' },
    { round: 'fastest', format: 'text',  question: 'Q28 भारत के प्रथम वित्त मंत्री कौन थे', answer: 'आर के शनमुखम चेट्टी' },
    { round: 'fastest', format: 'text',  question: 'Q29 सबसे लंबे शेड वाला प्लेटफार्म कौन सा है', answer: 'सियालदह स्टेशन का प्लेटफार्म 550 फुट शेड' },
    { round: 'fastest', format: 'text',  question: 'Q30 गुप्त साम्राज्य का विनाश किसने किया', answer: 'हूणों ने' },
    { round: 'fastest', format: 'text',  question: 'Q31 Krishna', answer: 'Radha' },
    { round: 'fastest', format: 'text',  question: 'Q32 भारत की सबसे बड़ी आवासीय इमारत कौन सी है', answer: 'राष्ट्रपति भवन' },
    { round: 'fastest', format: 'text',  question: 'Q33 भारत के प्रथम वित्त मंत्री कौन थे', answer: 'आर के शनमुखम चेट्टी' },
    { round: 'fastest', format: 'text',  question: 'Q34 सबसे लंबे शेड वाला प्लेटफार्म कौन सा है', answer: 'सियालदह स्टेशन का प्लेटफार्म 550 फुट शेड' },
    { round: 'fastest', format: 'text',  question: 'Q35 गुप्त साम्राज्य का विनाश किसने किया', answer: 'हूणों ने' },
    { round: 'fastest', format: 'text',  question: 'Q36 Krishna', answer: 'Radha' },
    { round: 'fastest', format: 'text',  question: 'Q37 भारत की सबसे बड़ी आवासीय इमारत कौन सी है', answer: 'राष्ट्रपति भवन' },
    { round: 'fastest', format: 'text',  question: 'Q38 भारत के प्रथम वित्त मंत्री कौन थे', answer: 'आर के शनमुखम चेट्टी' },
    { round: 'fastest', format: 'text',  question: 'Q39 सबसे लंबे शेड वाला प्लेटफार्म कौन सा है', answer: 'सियालदह स्टेशन का प्लेटफार्म 550 फुट शेड' },
    { round: 'fastest', format: 'text',  question: 'Q40 गुप्त साम्राज्य का विनाश किसने किया', answer: 'हूणों ने' },
    { round: 'fastest', format: 'text',  question: 'Q41 Krishna', answer: 'Radha' },
    { round: 'fastest', format: 'text',  question: 'Q42 भारत की सबसे बड़ी आवासीय इमारत कौन सी है', answer: 'राष्ट्रपति भवन' },
    { round: 'fastest', format: 'text',  question: 'Q43 भारत के प्रथम वित्त मंत्री कौन थे', answer: 'आर के शनमुखम चेट्टी' },
    { round: 'fastest', format: 'text',  question: 'Q44 सबसे लंबे शेड वाला प्लेटफार्म कौन सा है', answer: 'सियालदह स्टेशन का प्लेटफार्म 550 फुट शेड' },
    { round: 'fastest', format: 'text',  question: 'Q45 गुप्त साम्राज्य का विनाश किसने किया', answer: 'हूणों ने' },
    { round: 'fastest', format: 'text',  question: 'Q46 Krishna', answer: 'Radha' },
    { round: 'fastest', format: 'text',  question: 'Q47 भारत की सबसे बड़ी आवासीय इमारत कौन सी है', answer: 'राष्ट्रपति भवन' },
    { round: 'fastest', format: 'text',  question: 'Q48 भारत के प्रथम वित्त मंत्री कौन थे', answer: 'आर के शनमुखम चेट्टी' },
    { round: 'fastest', format: 'text',  question: 'Q49 सबसे लंबे शेड वाला प्लेटफार्म कौन सा है', answer: 'सियालदह स्टेशन का प्लेटफार्म 550 फुट शेड' },
    { round: 'fastest', format: 'text',  question: 'Q50 गुप्त साम्राज्य का विनाश किसने किया', answer: 'हूणों ने' },
    { round: 'fastest', format: 'text',  question: 'Q51 Krishna', answer: 'Radha' },
    { round: 'fastest', format: 'text',  question: 'Q52 भारत की सबसे बड़ी आवासीय इमारत कौन सी है', answer: 'राष्ट्रपति भवन' },
    { round: 'fastest', format: 'text',  question: 'Q53 भारत के प्रथम वित्त मंत्री कौन थे', answer: 'आर के शनमुखम चेट्टी' },
    { round: 'fastest', format: 'text',  question: 'Q54 सबसे लंबे शेड वाला प्लेटफार्म कौन सा है', answer: 'सियालदह स्टेशन का प्लेटफार्म 550 फुट शेड' },
    { round: 'fastest', format: 'text',  question: 'Q55 गुप्त साम्राज्य का विनाश किसने किया', answer: 'हूणों ने' },
    { round: 'fastest', format: 'text',  question: 'Q56 Krishna', answer: 'Radha' },
    { round: 'fastest', format: 'text',  question: 'Q57 भारत की सबसे बड़ी आवासीय इमारत कौन सी है', answer: 'राष्ट्रपति भवन' },
    { round: 'fastest', format: 'text',  question: 'Q58 भारत के प्रथम वित्त मंत्री कौन थे', answer: 'आर के शनमुखम चेट्टी' },
    { round: 'fastest', format: 'text',  question: 'Q59 सबसे लंबे शेड वाला प्लेटफार्म कौन सा है', answer: 'सियालदह स्टेशन का प्लेटफार्म 550 फुट शेड' },
    { round: 'fastest', format: 'text',  question: 'Q60 गुप्त साम्राज्य का विनाश किसने किया', answer: 'हूणों ने' },
    { round: 'fastest', format: 'text',  question: 'Q61 Krishna', answer: 'Radha' },
    { round: 'fastest', format: 'text',  question: 'Q62 भारत की सबसे बड़ी आवासीय इमारत कौन सी है', answer: 'राष्ट्रपति भवन' },
    { round: 'fastest', format: 'text',  question: 'Q63 भारत के प्रथम वित्त मंत्री कौन थे', answer: 'आर के शनमुखम चेट्टी' },
    { round: 'fastest', format: 'text',  question: 'Q64 सबसे लंबे शेड वाला प्लेटफार्म कौन सा है', answer: 'सियालदह स्टेशन का प्लेटफार्म 550 फुट शेड' },
    { round: 'fastest', format: 'text',  question: 'Q65 गुप्त साम्राज्य का विनाश किसने किया', answer: 'हूणों ने' },
    { round: 'fastest', format: 'text',  question: 'Q66 Krishna', answer: 'Radha' },
    { round: 'fastest', format: 'text',  question: 'Q67 भारत की सबसे बड़ी आवासीय इमारत कौन सी है', answer: 'राष्ट्रपति भवन' },
    { round: 'fastest', format: 'text',  question: 'Q68 भारत के प्रथम वित्त मंत्री कौन थे', answer: 'आर के शनमुखम चेट्टी' },
    { round: 'fastest', format: 'text',  question: 'Q69 सबसे लंबे शेड वाला प्लेटफार्म कौन सा है', answer: 'सियालदह स्टेशन का प्लेटफार्म 550 फुट शेड' },
    { round: 'fastest', format: 'text',  question: 'Q70 गुप्त साम्राज्य का विनाश किसने किया', answer: 'हूणों ने' },
    { round: 'fastest', format: 'text',  question: 'Q71 Krishna', answer: 'Radha' },
    { round: 'fastest', format: 'text',  question: 'Q72 भारत की सबसे बड़ी आवासीय इमारत कौन सी है', answer: 'राष्ट्रपति भवन' },
    { round: 'fastest', format: 'text',  question: 'Q73 भारत के प्रथम वित्त मंत्री कौन थे', answer: 'आर के शनमुखम चेट्टी' },
    { round: 'fastest', format: 'text',  question: 'Q74 सबसे लंबे शेड वाला प्लेटफार्म कौन सा है', answer: 'सियालदह स्टेशन का प्लेटफार्म 550 फुट शेड' },
    { round: 'fastest', format: 'text',  question: 'Q75 गुप्त साम्राज्य का विनाश किसने किया', answer: 'हूणों ने' },
    { round: 'fastest', format: 'text',  question: 'Q76 Krishna', answer: 'Radha' },
    { round: 'fastest', format: 'text',  question: 'Q77 भारत की सबसे बड़ी आवासीय इमारत कौन सी है', answer: 'राष्ट्रपति भवन' },
    { round: 'fastest', format: 'text',  question: 'Q78 भारत के प्रथम वित्त मंत्री कौन थे', answer: 'आर के शनमुखम चेट्टी' },
    { round: 'fastest', format: 'text',  question: 'Q79 सबसे लंबे शेड वाला प्लेटफार्म कौन सा है', answer: 'सियालदह स्टेशन का प्लेटफार्म 550 फुट शेड' },
    { round: 'fastest', format: 'text',  question: 'Q80 गुप्त साम्राज्य का विनाश किसने किया', answer: 'हूणों ने' },
    { round: 'fastest', format: 'text',  question: 'Q81 Krishna', answer: 'Radha' },
    { round: 'fastest', format: 'text',  question: 'Q82 भारत की सबसे बड़ी आवासीय इमारत कौन सी है', answer: 'राष्ट्रपति भवन' },
    { round: 'fastest', format: 'text',  question: 'Q83 भारत के प्रथम वित्त मंत्री कौन थे', answer: 'आर के शनमुखम चेट्टी' },
    { round: 'fastest', format: 'text',  question: 'Q84 सबसे लंबे शेड वाला प्लेटफार्म कौन सा है', answer: 'सियालदह स्टेशन का प्लेटफार्म 550 फुट शेड' },
    { round: 'fastest', format: 'text',  question: 'Q85 गुप्त साम्राज्य का विनाश किसने किया', answer: 'हूणों ने' },
    { round: 'fastest', format: 'text',  question: 'Q86 Krishna', answer: 'Radha' },
    { round: 'fastest', format: 'text',  question: 'Q87 भारत की सबसे बड़ी आवासीय इमारत कौन सी है', answer: 'राष्ट्रपति भवन' },
    { round: 'fastest', format: 'text',  question: 'Q88 भारत के प्रथम वित्त मंत्री कौन थे', answer: 'आर के शनमुखम चेट्टी' },
    { round: 'fastest', format: 'text',  question: 'Q89 सबसे लंबे शेड वाला प्लेटफार्म कौन सा है', answer: 'सियालदह स्टेशन का प्लेटफार्म 550 फुट शेड' },
    { round: 'fastest', format: 'text',  question: 'Q90 गुप्त साम्राज्य का विनाश किसने किया', answer: 'हूणों ने' },
    { round: 'fastest', format: 'text',  question: 'Q91 Krishna', answer: 'Radha' },
    { round: 'fastest', format: 'text',  question: 'Q92 Krishna', answer: 'Radha' },
    { round: 'fastest', format: 'text',  question: 'Q93 Krishna', answer: 'Radha' },
    { round: 'fastest', format: 'text',  question: 'Q94 Krishna', answer: 'Radha' },
    { round: 'fastest', format: 'text',  question: 'Q95 Krishna', answer: 'Radha' },
    { round: 'fastest', format: 'text',  question: 'Q96 Krishna', answer: 'Radha' },
    { round: 'fastest', format: 'text',  question: 'Q97 Krishna', answer: 'Radha' },
    { round: 'fastest', format: 'text',  question: 'Q98 Krishna', answer: 'Radha' },
    { round: 'fastest', format: 'text',  question: 'Q99 Krishna', answer: 'Radha' },
    { round: 'fastest', format: 'text',  question: 'Q100 Krishna', answer: 'Radha' },
    // ... othfastests ...
    // ... quefastestother rounds ...
];

let currentRoundQuestions = [];
let currentQuestionIndex = 0;
let currentRoundId = sidebarRounds[0];
// Show questions for the selected round
function showRoundQuestions(roundId) {
    currentQuestionIndex = 0;
    currentRoundQuestions = questions.filter(q => q.round === roundId);
    if (currentRoundQuestions.length > 0) {
        showQuestion(currentQuestionIndex);
        showAnsBtn.style.display = 'block';
        nextQuestionBtn.style.display = 'block';
        // welcomeElement.classList.add('hidden');
    } else {
        questionText.textContent = 'No questions available for this round.';
        answerText.textContent = '';
        showAnsBtn.style.display = 'none';
        nextQuestionBtn.style.display = 'none';
        // welcomeElement.classList.remove('hidden');
    }
}

// Show a specific question and its answer
function showQuestion(index) {
    // questionText.textContent = currentRoundQuestions[index].question;
    // answerText.textContent = currentRoundQuestions[index].answer;
    // answerText.classList.add('hidden');
    // showAnsBtn.textContent = 'Show Answer';
    // const currentQuestion = currentRoundQuestions[index];
    // questionText.textContent = currentQuestion.question;

    const currentQuestion = currentRoundQuestions[index];
    questionText.textContent = currentQuestion.question;

    if (currentQuestion.format === 'image') {
        questionText.innerHTML = `<img src="${currentQuestion.question}" alt="Question Image">`;
    } else if (currentQuestion.format === 'audio') {
        questionText.innerHTML = `<audio controls><source src="${currentQuestion.question}" type="audio/mp3">Your browser does not support the audio element.</audio>`;
    } else if (currentQuestion.format === 'video') {
        questionText.innerHTML = `<video controls><source src="${currentQuestion.question}" type="video/mp4">Your browser does not support the video element.</video>`;
    }

    answerText.textContent = currentQuestion.answer;
    answerText.classList.add('hidden');
    showAnsBtn.textContent = 'Show Answer';
    
}

// Toggle answer visibility
function showAnswer() {
    answerText.classList.toggle('hidden');
    showAnsBtn.textContent = answerText.classList.contains('hidden') ? 'Show Answer' : 'Hide Answer';
}

// Event listener for showing answer
showAnsBtn.addEventListener('click', showAnswer);

// Event listener for moving to the next question
nextQuestionBtn.addEventListener('click', () => {
    if (currentQuestionIndex < currentRoundQuestions.length - 1) {
        currentQuestionIndex++;
        showQuestion(currentQuestionIndex);
    } else {
        questionText.textContent = 'No more questions for this round.';
        answerText.textContent = '';
        showAnsBtn.textContent = 'Show Answer';
        answerText.classList.add('hidden');
    }
});

// Event listener for round selection in the sidebar
roundList.addEventListener('click', (event) => {
    const target = event.target;
    if (target.tagName === 'A') {
        const roundId = target.getAttribute('href').substring(1);
        if (sidebarRounds.includes(roundId)) {
            currentRoundId = roundId;
            showRoundQuestions(currentRoundId);
            event.preventDefault();
        }
    }
});

// Initialize default round and questions
showRoundQuestions(currentRoundId);


