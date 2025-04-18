
export interface Citation {
  title: string;
  url: string;
  type: 'regulation' | 'news' | 'department';
}

export interface SearchResponse {
  answer: string;
  citations: Citation[];
}

// Sample responses for demo purposes
const responses: Record<string, SearchResponse> = {
  "How do I register to vote?": {
    answer: "To register to vote in Washington, DC, you can:\n\n1. Register online at vote4dc.com\n2. Register by mail by downloading the voter registration form\n3. Register in person at the DC Board of Elections office\n\nYou must be:\n- A US citizen\n- A DC resident for at least 30 days prior to the election\n- At least 16 years old (you can pre-register at 16, vote in primaries at 17 if you'll be 18 by the general election, and vote in general elections at 18)\n- Not claim residence in another state\n- Not be in prison for a felony conviction",
    citations: [
      {
        title: "DC Board of Elections - Voter Registration",
        url: "https://www.dcboe.org/voters/register-to-vote/register-update-voter-registration",
        type: "department"
      },
      {
        title: "DC Municipal Regulations Title 3, Chapter 5",
        url: "https://www.dcregs.dc.gov/Common/DCMR/RuleList.aspx?ChapterNum=3-5",
        type: "regulation"
      }
    ]
  },
  "What are the parking rules during snow emergencies?": {
    answer: "During a declared snow emergency in Washington, DC:\n\n1. Parking is prohibited on snow emergency routes, which are marked with red and white \"Snow Emergency Route\" signs.\n\n2. Vehicles parked on these routes during a snow emergency may be ticketed and towed.\n\n3. Snow emergency tickets are $250 per violation.\n\n4. The DC Snow Team (DPW and DDOT) clears streets based on priority: major roads and emergency routes first, then secondary roads, and finally residential streets.\n\n5. When possible, park your car off-street to facilitate plowing operations.\n\n6. You can check if a snow emergency is in effect by:\n   - Signing up for AlertDC notifications\n   - Following @DCDPW and @DDOTDC on social media\n   - Checking snow.dc.gov",
    citations: [
      {
        title: "DC Snow Response Information",
        url: "https://snow.dc.gov/page/dc-snow-information",
        type: "department"
      },
      {
        title: "DC Municipal Regulations on Snow Emergencies",
        url: "https://www.dcregs.dc.gov/Common/DCMR/RuleList.aspx?ChapterNum=18-22",
        type: "regulation"
      },
      {
        title: "Mayor Declares Snow Emergency for January Storm",
        url: "https://mayor.dc.gov/release/mayor-bowser-declares-snow-emergency-january-storm",
        type: "news"
      }
    ]
  },
  "How do I apply for a business license?": {
    answer: "To apply for a business license in Washington, DC:\n\n1. First, determine your business structure (sole proprietorship, LLC, corporation, etc.) and register with the Department of Consumer and Regulatory Affairs (DCRA).\n\n2. Apply for a Basic Business License (BBL) through the DCRA Business Licensing Division. The specific license requirements depend on your business type.\n\n3. Complete the application online through the DCRA Business Center Portal at mybusiness.dc.gov.\n\n4. Pay the applicable licensing fees, which vary by business type and duration (usually 2-4 years).\n\n5. Submit any required supporting documentation, which may include:\n   - Certificate of Occupancy\n   - Clean Hands Certificate (showing no outstanding debt to DC government)\n   - Corporate registration documents\n   - Professional certifications (if applicable)\n\n6. Some businesses may require additional inspections (health, fire safety, etc.).\n\n7. For assistance, visit the DCRA Small Business Resource Center at 1100 4th Street SW.",
    citations: [
      {
        title: "DCRA Business Licensing Division",
        url: "https://dcra.dc.gov/service/business-licensing",
        type: "department"
      },
      {
        title: "DC Code Title 47, Chapter 28",
        url: "https://code.dccouncil.gov/us/dc/council/code/titles/47/chapters/28",
        type: "regulation"
      }
    ]
  },
  "When is trash collection in my neighborhood?": {
    answer: "Trash collection in Washington, DC is managed by the Department of Public Works (DPW). To find out when trash is collected in your neighborhood:\n\n1. Visit the DPW website and use the Collection Day Lookup tool by entering your address.\n\n2. Standard collection schedules are either:\n   - Once-per-week collection (trash on the same day)\n   - Twice-per-week collection (trash collected twice per week)\n\n3. Place trash and recycling containers outside by 6:30 AM on your collection day, but not before 6:30 PM the night before.\n\n4. Be aware that collection schedules may change during holidays. DPW provides a holiday collection schedule on their website.\n\n5. Bulk trash collection requires a separate appointment, which can be scheduled through the 311 service or online.\n\n6. For missed collections, report the issue to 311 (call 311 or use the 311 app) within 24 hours of your regular collection day.",
    citations: [
      {
        title: "DC DPW Trash Collection Information",
        url: "https://dpw.dc.gov/service/trash-collection",
        type: "department"
      },
      {
        title: "DC Municipal Regulations Title 21, Chapter 7",
        url: "https://www.dcregs.dc.gov/Common/DCMR/RuleList.aspx?ChapterNum=21-7",
        type: "regulation"
      }
    ]
  },
  "What summer programs are available for youth?": {
    answer: "Washington, DC offers various summer programs for youth through multiple agencies:\n\n1. Department of Parks and Recreation (DPR) Summer Camps:\n   - Traditional day camps for ages 3-13\n   - Specialized camps focusing on sports, arts, and environmental education\n   - Teen programs for ages 14-17\n   - Registration typically opens in early spring\n\n2. DC Public Schools (DCPS) Summer Programs:\n   - Summer school for academic support\n   - Summer enrichment programs\n   - Extended school year services for students with disabilities\n\n3. Marion Barry Summer Youth Employment Program (MBSYEP):\n   - Employment opportunities for DC youth ages 14-24\n   - Six weeks of work experience at government agencies, nonprofits, and private businesses\n   - Application period typically begins in January\n\n4. DC Public Library Summer Reading Program:\n   - Reading challenges with prizes\n   - Special events and activities at library branches across the city\n\n5. Department of Employment Services (DOES) youth programs\n\n6. Various nonprofits also offer summer camps and programs, often with sliding scale fees or scholarships available.",
    citations: [
      {
        title: "DC Department of Parks and Recreation - Summer Camps",
        url: "https://dpr.dc.gov/service/summer-camps",
        type: "department"
      },
      {
        title: "Marion Barry Summer Youth Employment Program",
        url: "https://does.dc.gov/service/marion-barry-summer-youth-employment-program",
        type: "department"
      },
      {
        title: "Mayor Announces Expanded Summer Programming for Youth",
        url: "https://mayor.dc.gov/release/mayor-bowser-announces-expanded-summer-programming-district-youth",
        type: "news"
      }
    ]
  }
};

// Default response for questions not in our database
const defaultResponse: SearchResponse = {
  answer: "I don't have specific information about that topic yet. For the most accurate and up-to-date information, please visit DC.gov or contact the relevant city department directly. You can also call the citywide call center at 311 for assistance with your question.",
  citations: [
    {
      title: "DC.gov - Official Website of Washington DC",
      url: "https://dc.gov",
      type: "department"
    },
    {
      title: "311 Online - Request City Services",
      url: "https://311.dc.gov",
      type: "department"
    }
  ]
};

// Example questions for the UI
export const exampleQuestions = [
  "How do I register to vote?",
  "What are the parking rules during snow emergencies?",
  "How do I apply for a business license?",
  "When is trash collection in my neighborhood?",
  "What summer programs are available for youth?"
];

// Simulate a search request with artificial delay
export const searchQuery = async (query: string): Promise<SearchResponse> => {
  return new Promise((resolve) => {
    // Check if we have an exact match (case insensitive)
    const exactMatch = Object.keys(responses).find(
      key => key.toLowerCase() === query.toLowerCase()
    );
    
    // Check if we have a partial match (keyword based)
    const findPartialMatch = () => {
      const keywords: Record<string, string> = {
        "vote": "How do I register to vote?",
        "voting": "How do I register to vote?",
        "register": "How do I register to vote?",
        "snow": "What are the parking rules during snow emergencies?",
        "parking": "What are the parking rules during snow emergencies?",
        "emergency": "What are the parking rules during snow emergencies?",
        "business": "How do I apply for a business license?",
        "license": "How do I apply for a business license?",
        "trash": "When is trash collection in my neighborhood?",
        "collection": "When is trash collection in my neighborhood?",
        "garbage": "When is trash collection in my neighborhood?",
        "summer": "What summer programs are available for youth?",
        "youth": "What summer programs are available for youth?",
        "program": "What summer programs are available for youth?",
        "camp": "What summer programs are available for youth?",
      };
      
      const lowerQuery = query.toLowerCase();
      for (const [keyword, question] of Object.entries(keywords)) {
        if (lowerQuery.includes(keyword)) {
          return question;
        }
      }
      return null;
    };
    
    const partialMatch = findPartialMatch();
    
    // Add a realistic delay (500-2000ms)
    setTimeout(() => {
      if (exactMatch) {
        resolve(responses[exactMatch]);
      } else if (partialMatch) {
        resolve(responses[partialMatch]);
      } else {
        resolve(defaultResponse);
      }
    }, Math.random() * 1500 + 500);
  });
};
