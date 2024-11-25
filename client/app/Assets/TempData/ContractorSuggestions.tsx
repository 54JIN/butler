const ContractorSuggestions = [
    {
        owner: {
            id: 'dasdfa2983749274983223989234',
            firstName: "Adrian",
            lastName: "Davids",
        },
        hourlyCharge: 25,
        rating: 4.3,
        jobsCompleted: 103,
        realtedJobsCompleted: 23,
        badges: ["Speedy Response", "Great Value"],
        description: `Hello everyone! My name is Musa. I’m a professional painter with 10 years of experience. I also have a top-notch professional team. You will not regret 100%.`
    },
    {
        owner: {
            id: 'dasdfa2983749274983223989234',
            firstName: "Elena",
            lastName: "Peterson",
        },
        hourlyCharge: 30,
        rating: 4.7,
        jobsCompleted: 150,
        realtedJobsCompleted: 45,
        badges: ["Highly Recommended", "Expert"],
        description: `Hi, I’m Elena. I am a certified interior designer with 12 years of experience. I specialize in creating cozy and modern spaces.`
    },
    {        
        owner: {
            id: 'dasdfa2983749274983223989234',
            firstName: "Marcus",
            lastName: "Lee",
        },
        hourlyCharge: 20,
        rating: 4.5,
        jobsCompleted: 89,
        realtedJobsCompleted: 29,
        badges: ["Top Rated", "Client Favorite"],
        description: `Hey there! I’m Marcus, a licensed electrician with over 8 years in the field. I ensure safe and efficient service for all electrical needs.`
    },
    {
        owner: {
            id: 'dasdfa2983749274983223989234',
            firstName: "Sophia",
            lastName: "Williams",
        },
        hourlyCharge: 35,
        rating: 4.9,
        jobsCompleted: 180,
        realtedJobsCompleted: 52,
        badges: ["Master Technician", "Attention to Detail"],
        description: `Hello, I’m Sophia. With 15 years of plumbing experience, I’ve handled all types of jobs, big or small. Satisfaction is guaranteed.`
    },
    {
        owner: {
            id: 'dasdfa2983749274983223989234',
            firstName: "Victor",
            lastName: "Sanchez",
        },
        hourlyCharge: 28,
        rating: 4.6,
        jobsCompleted: 132,
        realtedJobsCompleted: 40,
        badges: ["Reliable", "Problem Solver"],
        description: `My name is Victor. I specialize in carpentry and custom woodwork. With 11 years of experience, I turn your ideas into reality.`
    },
    {
        owner: {
            id: 'dasdfa2983749274983223989234',
            firstName: "Natalie",
            lastName: "Grant",
        },
        hourlyCharge: 22,
        rating: 4.4,
        jobsCompleted: 95,
        realtedJobsCompleted: 35,
        badges: ["Efficient Worker", "Great Communicator"],
        description: `Hi, I’m Natalie, a professional landscaper with over 9 years of experience. I’m passionate about transforming outdoor spaces into beautiful gardens.`
    },
    {
        owner: {
            id: 'dasdfa2983749274983223989234',
            firstName: "Omar",
            lastName: "Rashid",
        },
        hourlyCharge: 27,
        rating: 4.8,
        jobsCompleted: 115,
        realtedJobsCompleted: 50,
        badges: ["Trusted Professional", "Timely"],
        description: `Hello! My name is Omar, and I’m an HVAC specialist with 10 years of expertise. I provide reliable, long-lasting HVAC solutions.`
    },
    {
        owner: {
            id: 'dasdfa2983749274983223989234',
            firstName: "Liam",
            lastName: "Jones",
        },
        hourlyCharge: 24,
        rating: 4.3,
        jobsCompleted: 77,
        realtedJobsCompleted: 20,
        badges: ["Budget-Friendly", "Fast Service"],
        description: `I’m Liam, a certified home painter with 7 years of experience. I take pride in adding fresh looks to your home quickly and efficiently.`
    },
    {
        owner: {
            id: 'dasdfa2983749274983223989234',
            firstName: "Emily",
            lastName: "Thompson",
        },
        hourlyCharge: 32,
        rating: 4.8,
        jobsCompleted: 167,
        realtedJobsCompleted: 48,
        badges: ["Perfectionist", "Detail-Oriented"],
        description: `Hello! I’m Emily, an experienced home decorator who’s been designing interiors for 14 years. I aim to create spaces that reflect your personality.`
    },
    {
        owner: {
            id: 'dasdfa2983749274983223989234',
            firstName: "Carlos",
            lastName: "Diaz",
        },
        hourlyCharge: 26,
        rating: 4.5,
        jobsCompleted: 108,
        realtedJobsCompleted: 37,
        badges: ["Proven Record", "Great Value"],
        description: `I’m Carlos, a general handyman with 10 years of experience tackling various repairs and improvements. Let me take care of your to-do list.`
    },
    {
        owner: {
            id: 'dasdfa2983749274983223989234',
            firstName: "Mia",
            lastName: "Anderson",
        },
        hourlyCharge: 29,
        rating: 4.9,
        jobsCompleted: 140,
        realtedJobsCompleted: 49,
        badges: ["Meticulous", "Customer Favorite"],
        description: `My name is Mia, and I’m a skilled tile installer with 12 years in the industry. I can handle all tiling needs with precision and care.`
    },
    {
        owner: {
            id: 'dasdfa2983749274983223989234',
            firstName: "Ethan",
            lastName: "Clark",
        },
        hourlyCharge: 21,
        rating: 4.2,
        jobsCompleted: 88,
        realtedJobsCompleted: 22,
        badges: ["Affordable", "Quick Fixes"],
        description: `Hi, I’m Ethan. With 5 years of experience as a roofer, I provide durable and efficient roofing repairs and installations.`
    },
    {
        owner: {
            id: 'dasdfa2983749274983223989234',
            firstName: "Ava",
            lastName: "Martinez",
        },
        hourlyCharge: 34,
        rating: 4.7,
        jobsCompleted: 160,
        realtedJobsCompleted: 55,
        badges: ["Highly Skilled", "Long-Lasting Results"],
        description: `Hello, I’m Ava, a window and door installer with over 13 years of expertise. I ensure perfect fits and energy-efficient solutions.`
    },
    {
        owner: {
            id: 'dasdfa2983749274983223989234',
            firstName: "Noah",
            lastName: "Kim",
        },
        hourlyCharge: 23,
        rating: 4.4,
        jobsCompleted: 102,
        realtedJobsCompleted: 33,
        badges: ["Problem Solver", "Easy to Work With"],
        description: `Hi, I’m Noah, a certified pest control expert with 6 years of experience. I use eco-friendly solutions to keep your home pest-free.`
    },
    {
        owner: {
            id: 'dasdfa2983749274983223989234',
            firstName: "Isabella",
            lastName: "Hughes",
        },
        hourlyCharge: 31,
        rating: 4.8,
        jobsCompleted: 172,
        realtedJobsCompleted: 60,
        badges: ["Elite Service", "Flexible Scheduling"],
        description: `Hello! I’m Isabella, a professional flooring contractor with 15 years of experience in installations and repairs. I’m dedicated to perfect results.`
    }
]

export default ContractorSuggestions