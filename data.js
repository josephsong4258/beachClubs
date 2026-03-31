// CSULB Club Data - Scraped from BeachSync/CampusLabs API
// Source: https://csulb.campuslabs.com/engage/api/discovery/search/organizations
// Image base URL: https://se-images.campuslabs.com/clink/images/
// Last updated: 2026-03-31

const IMAGE_BASE_URL = "https://se-images.campuslabs.com/clink/images/";
const CLUB_BASE_URL = "https://csulb.campuslabs.com/engage/organization/";

const clubs = [
  // CATEGORY: Academic
  {
    "id": 1,
    "name": "American Marketing Association",
    "shortName": "AMA",
    "category": "Academic",
    "websiteKey": "american-marketing-association",
    "campusLabsId": "210564",
    "description": "The California State University, Long Beach (CSULB) chapter has been recognized as a \"Top 15\" chapter out of 300+ active collegiate chapters of AMA across the United States and internationally, including Canada, Mexico, and Puerto Rico. Every semester we continue to increase our membership, as well as remain a successful and dynamic organization on campus and within the community.",
    "profilePicture": "ee67c09b-a27b-4a46-813c-859edf2b9a47dc17f306-34ab-4382-bb30-6d87a97d990c.jpeg",
    "categoryNames": [
      "Academic: Business",
      "Scheduling Certified"
    ],
    "email": "longbeachama@gmail.com",
    "socialMedia": {
      "website": "https://www.amalongbeach.org/",
      "instagram": "https://www.instagram.com/amalongbeach/?hl=en",
      "linkedin": "https://www.linkedin.com/company/amalongbeach/",
      "youtube": "https://www.youtube.com/user/csulbama",
      "facebook": "https://www.facebook.com/AMALongBeach/"
    },
    "contactInfo": {
      "address": "1250 N Bellflower Blvd, Long Beach, CA 90840"
    }
  },
  {
    "id": 2,
    "name": "Law Society",
    "shortName": "Law Society",
    "category": "Academic",
    "websiteKey": "law-society",
    "campusLabsId": "210293",
    "description": "The Law Society was founded in September 1975 to provide pre-law students with the best information about law schools, and create a community of CSULB students who are interested in the legal field. The organization provides its members with access to law school tours, LSAT prep workshops, Mock Trial competitions, Q&A's with legal professionals, and connection to other CSULB students.",
    "profilePicture": "9d03283b-b6bc-40e4-a530-87062c0528c05aa9e38b-9a2e-42e2-a454-c93e0dcba421.png",
    "categoryNames": [
      "Academic: Liberal Arts",
      "Scheduling Certified"
    ],
    "email": "longbeachlawsociety@gmail.com",
    "socialMedia": {
      "instagram": "https://www.instagram.com/csulb.lawsociety/",
      "linkedin": "https://www.linkedin.com/company/csulblawsociety",
      "youtube": "https://www.youtube.com/channel/UC7pbN-ilbR1eZAmcAVAypyA",
      "linktree": "https://linktr.ee/csulb.lawsociety"
    },
    "contactInfo": {
      "address": "1250 N Bellflower Blvd, Long Beach, CA 90840, United States"
    }
  },
  {
    "id": 3,
    "name": "Psychology Student Association",
    "shortName": "PSA",
    "category": "Academic",
    "websiteKey": "psychology-student-association",
    "campusLabsId": "210615",
    "description": "Encourages networking between psychology students, alumni, and faculty while promoting educational resources and exploration within the psychological community.",
    "profilePicture": "19f05273-4aa8-4c20-bf75-7231b8eb19f4188c4190-b46f-4f91-a6fc-840784da08b4.jpg",
    "categoryNames": [
      "Academic: Liberal Arts",
      "Scheduling Certified"
    ],
    "email": "psapsichi@gmail.com",
    "socialMedia": {
      "instagram": "https://www.instagram.com/psapsichi/",
      "facebook": "http://facebook.com/www.facebook.com/groups/psa.psichi",
      "website": "http://www.cla.csulb.edu/departments/psychology/psapsichi/",
      "linktree": "https://linktr.ee/psapsichi",
      "twitter": "PSAPsiChi_CSULB"
    },
    "contactInfo": {}
  },
  {
    "id": 4,
    "name": "Society for the Advancement of Management",
    "shortName": "SAM",
    "category": "Academic",
    "websiteKey": "society-for-advancement-of-management",
    "campusLabsId": "210613",
    "description": "Non-profit dedicated to facilitating learning and professional development for students entering the competitive job market. Increases management skills and expertise through professional development.",
    "profilePicture": "aa6f6ec4-a814-402e-a7c1-b3b2a2d50343016897fb-3767-4960-a634-ff9de75a54cd.png",
    "categoryNames": [
      "Academic: Business",
      "Scheduling Certified",
      "Food Handling Certified"
    ],
    "email": "samcsulbchapter@gmail.com",
    "socialMedia": {
      "website": "https://csulbsam.org/",
      "instagram": "https://www.instagram.com/samcsulb/",
      "linkedin": "https://www.linkedin.com/company/lbsusam/",
      "youtube": "http://www.youtube.com/@SAM_CSULB",
      "facebook": "https://www.facebook.com/lbsuSAM"
    },
    "contactInfo": {
      "address": "1250 N Bellflower Blvd, Long Beach, CA 90840"
    }
  },
  // CATEGORY: Engineering
  {
    "id": 5,
    "name": "American Institute of Aeronautics and Astronautics (AIAA)",
    "shortName": "AIAA",
    "category": "Engineering",
    "websiteKey": "csulbaiaa",
    "campusLabsId": "210664",
    "description": "For more than 65 years the American Institute of Aeronautics and Astronautics (AIAA) has been the principal society for aerospace engineers and scientists. The CSULB student branch has three project teams: Long Beach Aviation (RC airplane competitions), ESRA (experimental rockets), and SharkSat (CubeSat development). Also provides industry tours, technical workshops, career fairs, and K-12 outreach.",
    "profilePicture": "f1a159a1-1d90-4da6-8fb0-74f0d357eacb00f7cb65-7b1e-4711-8130-ceadd93a60de.png",
    "categoryNames": [
      "Academic: Engineering",
      "Scheduling Certified",
      "Food Handling Certified"
    ],
    "email": "chair@csulbaiaa.org",
    "socialMedia": {
      "website": "https://www.csulbaiaa.org/",
      "instagram": "https://www.instagram.com/csulb_aiaa/",
      "linkedin": "https://www.linkedin.com/company/csulbaiaa",
      "facebook": "https://www.facebook.com/csulbaiaa/"
    },
    "contactInfo": {
      "phone": "2133991989",
      "address": "Engineering 3, Room 118, 1250 N Bellflower Blvd, Long Beach, CA 90840-0004"
    }
  },
  {
    "id": 6,
    "name": "American Institute of Chemical Engineers (AIChE)",
    "shortName": "AICHE",
    "category": "Engineering",
    "websiteKey": "american-institute-of-chemical-engineers-aiche",
    "campusLabsId": "210668",
    "description": "The American Institute of Chemical Engineers, Long Beach student chapter is a dynamic professional development organization within the College of Engineering. The club participates in nationally ranked competitions such as Chem-E-Car and Chem-E-Cube. Membership is open to all majors. Office located in EN-3-116.",
    "profilePicture": "36431d7e-eb25-4f49-8f1f-fed9c05b989ec8ccc4b5-0380-4092-91f3-b3d635ee0cf9.gif",
    "categoryNames": [
      "Academic: Engineering",
      "Scheduling Certified"
    ],
    "email": "aiche.csulb@gmail.com",
    "socialMedia": {
      "website": "https://aichecsulb.wixsite.com/csulbaiche",
      "instagram": "https://www.instagram.com/aiche_csulb/",
      "linkedin": "https://www.linkedin.com/in/aiche-csulb/",
      "facebook": "https://www.facebook.com/aichecsulb/",
      "discord": "https://discord.gg/WrNtBdG8jS"
    },
    "contactInfo": {}
  },
  {
    "id": 7,
    "name": "Society of Women Engineers (SWE)",
    "shortName": "SWE",
    "category": "Engineering",
    "websiteKey": "society-of-women-engineers-swe",
    "campusLabsId": "210237",
    "description": "Non-profit supporting female leadership in engineering, stimulating achievement, improving professional image, and demonstrating the value of diversity. Motto: Aspire, Advance, Achieve.",
    "profilePicture": "85b9f9c1-8221-46e0-900e-2e2dc5b1bea6497a606c-4a79-456a-84f9-7294198a192f.png",
    "categoryNames": [
      "Academic: Engineering",
      "Scheduling Certified"
    ],
    "email": "president.csulb@swe.org",
    "socialMedia": {
      "website": "http://www.csulbswe.org",
      "instagram": "https://www.instagram.com/csulb_swe/",
      "linkedin": "http://linkedin.com/company/csulbswe",
      "facebook": "http://facebook.com/csulbswe",
      "twitter": "http://twitter.com/CsulbSwe"
    },
    "contactInfo": {}
  },
  {
    "id": 8,
    "name": "Society of Hispanic Professional Engineers (SHPE)",
    "shortName": "SHPE",
    "category": "Engineering",
    "websiteKey": "society-of-hispanic-professional-engineers-shpe",
    "campusLabsId": "210485",
    "description": "Empowers the Hispanic community through STEM awareness, access, support, and development toward innovation and engineering leadership.",
    "profilePicture": "ba88b2fe-c9f9-4f58-92c5-9d94f0c0a15fa8bf6939-f41f-464f-b939-72db3cc117ef.png",
    "categoryNames": [
      "Academic: Engineering",
      "Scheduling Certified"
    ],
    "email": "csulbshpe@gmail.com",
    "socialMedia": {
      "instagram": "https://www.instagram.com/shpecsulb/",
      "linkedin": "https://www.linkedin.com/in/shpecsulb/",
      "facebook": "http://facebook.com/csulbshpe",
      "twitter": "http://twitter.com/shpecsulb",
      "discord": "https://discord.gg/y3utKhQE3g"
    },
    "contactInfo": {
      "city": "Long Beach",
      "state": "CA",
      "zip": "90840"
    }
  },
  {
    "id": 9,
    "name": "Chi Epsilon (Civil Engineering Honor Society)",
    "shortName": "Chi Epsilon",
    "category": "Engineering",
    "websiteKey": "chi-epsilon-civil-engineering-honor-society",
    "campusLabsId": "210308",
    "description": "The mission of Chi Epsilon is to achieve its vision through its four pillars: Scholarship, Character, Practicality, and Sociability. Dedicated to maintaining and promoting the status of civil engineering as an ideal profession.",
    "profilePicture": "7221c6ad-f955-4524-822c-e5022cd25b129d8655c9-df50-4fff-851c-4ac97d3e3dd8.jpg",
    "categoryNames": [
      "Academic: Engineering",
      "Scheduling Certified"
    ],
    "email": "chiep.csulb@gmail.com",
    "socialMedia": {
      "website": "http://chiepcsulb.wixsite.com/chideltachi",
      "facebook": "https://www.facebook.com/Chi-Epsilon-CSULB-263832070325323/"
    },
    "contactInfo": {
      "phone": "714-902-7972",
      "address": "1250 Bellflower Blvd., EN3-114, Long Beach, CA 90840, United States"
    }
  },
  {
    "id": 10,
    "name": "Society of Automotive Engineers (SAE)",
    "shortName": "SAE",
    "category": "Engineering",
    "websiteKey": "society-of-automotive-engineers-sae",
    "campusLabsId": "210477",
    "description": "Competitions challenging university teams to design and test small vehicles. Baja SAE team designs and builds off-road vehicles for national competition.",
    "profilePicture": "f830ad71-98a2-4e19-b25a-8e32614fda497b07b602-6088-4568-814d-dea11eab2e3a.png",
    "categoryNames": [
      "Academic: Engineering"
    ],
    "email": "info@saecsulb.org",
    "socialMedia": {
      "website": "https://www.saecsulb.org/",
      "instagram": "https://www.instagram.com/csulb_sae/",
      "linkedin": "https://www.linkedin.com/company/elbee-racing-baja-sae"
    },
    "contactInfo": {
      "address": "ET-15, California State University Long Beach, Long Beach, CA 90815"
    }
  },
  {
    "id": 11,
    "name": "Long Beach Rocketry",
    "shortName": "LBR",
    "category": "Engineering",
    "websiteKey": "lbr",
    "campusLabsId": "357324",
    "description": "Long Beach Rocketry is a student-run organization that builds solid rockets from the ground up and makes a unique payload each year, competing against other universities nationwide. Open to all majors and levels of experience. One of the most multidisciplinary and diverse engineering clubs on campus.",
    "profilePicture": "c7ef1479-8bf1-453e-9ca0-a2b0cd45acb93ceac4f5-2fc9-4ba7-bf77-394982ac4464.png",
    "categoryNames": [],
    "email": "longbeachrocketry@gmail.com",
    "socialMedia": {
      "discord": "https://discord.com/invite/gyhjMFvYTy",
      "instagram": "https://www.instagram.com/longbeachrocketry/",
      "linkedin": "https://www.linkedin.com/company/long-beach-rocketry/",
      "youtube": "https://www.youtube.com/channel/UCNTJNcUKkOVDafpquB2ecOQ"
    },
    "contactInfo": {}
  },
  {
    "id": 12,
    "name": "Long Beach Lunabotics",
    "shortName": "LBL",
    "category": "Engineering",
    "websiteKey": "lunabotics",
    "campusLabsId": "357325",
    "description": "Long Beach Lunabotics is a student robotics team participating in the NASA Lunabotics Challenge. The goal is to develop a lunar mining rover from scratch every year to compete. Active since 2017, the team designs and manufactures experimental engines and rovers.",
    "profilePicture": "de731de6-3996-4ccc-9495-9fa44d61678eafe4c8c2-58c3-4b35-b778-f2f7a0839d37.png",
    "categoryNames": [],
    "email": "contact@lblunabotics.org",
    "socialMedia": {
      "website": "https://beachlunabotics.org/",
      "instagram": "https://www.instagram.com/csulb.lunabotics/",
      "linkedin": "https://www.linkedin.com/company/csulb-nasa-rmc",
      "youtube": "https://www.youtube.com/channel/UC5ZhS3jD2DPeEQH-SVNZ1-A"
    },
    "contactInfo": {}
  },
  {
    "id": 13,
    "name": "Sigma Gamma Tau",
    "shortName": "SGT",
    "category": "Engineering",
    "websiteKey": "sigma-gamma-tau",
    "campusLabsId": "210776",
    "description": "Aerospace Engineering Honor Society recognizing scholarship, integrity, and achievement while broadening education and fostering fellowship.",
    "profilePicture": "ba952a86-30fb-43be-af5a-652cc508cafa2d9cb9cd-4394-411e-8f28-301f91460a05.jpeg",
    "categoryNames": [
      "Academic: Engineering",
      "Scheduling Certified"
    ],
    "email": "sgt.csulb@gmail.com",
    "socialMedia": {
      "website": "http://www.sgtnational.org/"
    },
    "contactInfo": {}
  },
  // CATEGORY: Arts
  {
    "id": 14,
    "name": "Bachelor of Arts Studio Art Club",
    "shortName": "BA Studio Art Club",
    "category": "Arts",
    "websiteKey": "bastudioarts",
    "campusLabsId": "366747",
    "description": "The purpose of the BA Studio Art Club is to offer BA students the opportunity to be part of a creative and collaborative community of peers who have a passion for multi/interdisciplinary art making.",
    "profilePicture": "eb1f13a7-9e93-424d-b2ed-bb2b9ef9c4c873287a5b-a13d-40e8-8355-16b81a170af1.jpg",
    "categoryNames": [],
    "email": "CSULBStudioArtClub@gmail.com",
    "socialMedia": {},
    "contactInfo": {}
  },
  {
    "id": 15,
    "name": "Society of Student Illustrators & Animators",
    "shortName": "SoSIA",
    "category": "Arts",
    "websiteKey": "society-of-student-illustrators-animators",
    "campusLabsId": "210536",
    "description": "Creates a community of illustration and animation students providing resources, networking, and workshops for professional transition.",
    "profilePicture": "33f339ed-5c34-4e17-87f4-82545339340be527602d-91f0-404d-93b1-094699b8582a.jpg",
    "categoryNames": [
      "Academic: Arts",
      "Scheduling Certified"
    ],
    "email": "Sosiacsulb@gmai.com",
    "socialMedia": {
      "instagram": "https://www.instagram.com/sosia_csulb/",
      "facebook": "http://facebook.com/facebook.com/clubsosia",
      "twitter": "http://twitter.com/csulb_sosia"
    },
    "contactInfo": {
      "city": "Long Beach",
      "state": "CA",
      "zip": "90815"
    }
  },
  {
    "id": 16,
    "name": "Sculpture/4D Collective",
    "shortName": "Sculpture/4D Collective",
    "category": "Arts",
    "websiteKey": "sculpture-4d-collective",
    "campusLabsId": "210567",
    "description": "Student-driven organization promoting creative community through sculpture conversations, scholarships, workshops, and school partnerships.",
    "profilePicture": "f09888c4-7b93-4284-8371-57044b65aa15d03184d9-fecb-438d-baf8-3fc2bdf64f1c.jpg",
    "categoryNames": [
      "Academic: Arts"
    ],
    "email": "sculpture4dcollective@gmail.com",
    "socialMedia": {
      "instagram": "http://www.instagram.com/csulbsculpture"
    },
    "contactInfo": {}
  },
  {
    "id": 17,
    "name": "Sigma Alpha Iota (Music Honor Society)",
    "shortName": "Sigma Alpha Iota",
    "category": "Arts",
    "websiteKey": "sigma-alpha-iota-music-honor-society",
    "campusLabsId": "210531",
    "description": "Music honor society emphasizing sisterhood, diversity, philanthropy, and music education through volunteerism and advocacy.",
    "profilePicture": "59576c45-5df0-47ae-bf80-a4941dae829c79aed413-2494-4b68-8d45-9fbc1d67950b.jpg",
    "categoryNames": [
      "Academic: Arts",
      "Food Handling Certified"
    ],
    "email": "gammapi.sai@gmail.com",
    "socialMedia": {
      "website": "https://www.sai-national.org/",
      "instagram": "https://www.instagram.com/sai_gammapi/?hl=en",
      "facebook": "http://facebook.com/SAIGammaPi"
    },
    "contactInfo": {
      "address": "1250 Bellflower Blvd, Music Department, Long Beach, CA 90815"
    }
  },
  {
    "id": 18,
    "name": "Student Association of the Theatre Arts Department",
    "shortName": "SATA",
    "category": "Arts",
    "websiteKey": "student-association-of-the-theatre-arts-department",
    "campusLabsId": "210543",
    "description": "Student organization giving voice to Theatre Arts majors/minors through leadership, advocacy, fundraising support, and department assistance.",
    "profilePicture": "a05d91f8-a407-4654-8447-854dcd63b400d5e6ee42-ab79-4200-8cb4-602ff54c4eec.png",
    "categoryNames": [
      "Academic: Arts",
      "Scheduling Certified"
    ],
    "email": null,
    "socialMedia": {
      "linktree": "https://linktr.ee/satacsulb",
      "instagram": "https://www.instagram.com/csulbsataproductions"
    },
    "contactInfo": {}
  },
  {
    "id": 19,
    "name": "Saxophone Club",
    "shortName": "Saxophone",
    "category": "Arts",
    "websiteKey": "saxophone",
    "campusLabsId": "210526",
    "description": "Welcomes saxophone performers, learners, and enthusiasts through workshops, masterclasses, and collaborative discussions.",
    "profilePicture": "5bc03808-926a-4d70-b72c-fda06d7e5eed875a4919-8ff9-4e7b-a0a7-03b8cc4d82dc.jpeg",
    "categoryNames": [
      "Academic: Arts",
      "Scheduling Certified"
    ],
    "email": null,
    "socialMedia": {
      "instagram": "https://www.instagram.com/csulb_saxophones"
    },
    "contactInfo": {}
  },
  {
    "id": 20,
    "name": "Seaside Scribes Creative Writing Club",
    "shortName": "Seaside Scribes",
    "category": "Arts",
    "websiteKey": "seasidescribes",
    "campusLabsId": "405252",
    "description": "Develops an active creative writing community fostering artistic space for writers of any skill level to workshop non-academic works, covering prose, poetry, essays, scripts, and non-fiction.",
    "profilePicture": "669a1126-900d-4c46-9fca-33cb4b0aa419a576608b-ad6f-4940-b46f-fcb397240ed2.png",
    "categoryNames": [],
    "email": null,
    "socialMedia": {
      "instagram": "https://www.instagram.com/seasidescribescreative/"
    },
    "contactInfo": {}
  },
  // CATEGORY: Sports
  {
    "id": 21,
    "name": "Sailing Association",
    "shortName": "Sailing Association",
    "category": "Sports",
    "websiteKey": "sailing-association",
    "campusLabsId": "210609",
    "description": "One of CSULB's oldest recreational clubs maintaining a boat fleet for affordable sailing instruction and skill development.",
    "profilePicture": "a20526da-b838-4e73-b96d-2b0522e7440f506a156a-980b-4e92-b544-6b3a5cd89d67.png",
    "categoryNames": [
      "Club Sports & Recreation"
    ],
    "email": "sailing@csulb.onmicrosoft.com",
    "socialMedia": {
      "website": "https://sailcsulb.com/",
      "instagram": "https://www.instagram.com/sailcsulb/",
      "facebook": "https://www.facebook.com/sailCSULB/"
    },
    "contactInfo": {
      "phone": "562-985-2570",
      "address": "Club Sports and Recreation - Attn: Sailing Association, 1250 Bellflower Blvd., Long Beach, CA 90840"
    }
  },
  {
    "id": 22,
    "name": "Salsa Club",
    "shortName": "Salsa Club",
    "category": "Sports",
    "websiteKey": "salsa-club",
    "campusLabsId": "210677",
    "description": "Teaches LA style salsa and Bachata with beginner and intermediate weekly lessons, plus performing team opportunities. Teaches various styles of Latin dances to the CSULB community.",
    "profilePicture": "3c59182f-fdd4-4468-b1f9-09776ff500b78c30c775-9d4e-4cac-91f3-ce2d0b4e70f2.jpeg",
    "categoryNames": [
      "Club Sports & Recreation"
    ],
    "email": "csulongbeach.salsa.club@gmail.com",
    "socialMedia": {
      "instagram": "https://www.instagram.com/csulbsalsaclub/",
      "linktree": "https://linktr.ee/csulbsalsaclub_"
    },
    "contactInfo": {
      "city": "Long Beach",
      "state": "CA",
      "zip": "90840"
    }
  },
  {
    "id": 23,
    "name": "Shotokan Karate Club",
    "shortName": "Shotokan Karate Club",
    "category": "Sports",
    "websiteKey": "shotokan-karate-club",
    "campusLabsId": "210618",
    "description": "Affiliated with Shotokan Karate of America, teaching traditional karate-do since 1961 with a continuing legacy of leadership.",
    "profilePicture": "796fe03c-ca7e-42f3-b9c9-6e80570b3e1c448feca1-bcc7-4d79-8b84-41d27b58dcea.jpg",
    "categoryNames": [
      "Club Sports & Recreation"
    ],
    "email": "csulbdojomanager@outlook.com",
    "socialMedia": {
      "website": "http://www.csulb.ska.org",
      "facebook": "http://facebook.com/groups/CSULBshotokan"
    },
    "contactInfo": {
      "address": "1250 Bellflower Blvd, KIN 60, Long Beach, CA 90840"
    }
  },
  {
    "id": 24,
    "name": "Club Cheer",
    "shortName": "Club Cheer",
    "category": "Sports",
    "websiteKey": "csulb-club-cheerleading",
    "campusLabsId": "210519",
    "description": "The California State University of Long Beach Club Cheer Team accepts all levels of cheerleading experience. Teaches basics in stunting, cheering, dancing, and performing. Cheers for LBSU Rugby, LBSU Hockey, and other campus teams. Performs at Homecoming, Belmont Shore Christmas Parade, and competitions.",
    "profilePicture": "5c93196e-f6a5-4089-8910-b95afa848a9a729d0645-27d2-45c6-b5db-6a73ddadafd4.jpg",
    "categoryNames": [
      "Club Sports & Recreation"
    ],
    "email": "csulbclubcheer@gmail.com",
    "socialMedia": {
      "instagram": "http://www.instagram.com/csulbclubcheer",
      "facebook": "http://www.facebook.com/csulbclubcheer"
    },
    "contactInfo": {}
  },
  {
    "id": 25,
    "name": "Recreation Society",
    "shortName": "Recreation Society",
    "category": "Sports",
    "websiteKey": "recreation-society",
    "campusLabsId": "210555",
    "description": "Promotes leisure and hobby activities through social events, volunteering, networking, and career development in recreation therapy.",
    "profilePicture": "aa2216ca-3d00-418f-a363-bdb7e28ab2dd60104956-7e5b-4ccd-98eb-c98ff5bce330.jpg",
    "categoryNames": [
      "Academic: Health & Human Services",
      "Scheduling Certified",
      "Food Handling Certified"
    ],
    "email": "recreationsocietycsulb@gmail.com",
    "socialMedia": {
      "instagram": "https://www.instagram.com/csulb_recsociety/"
    },
    "contactInfo": {
      "phone": "(805) 406-5411",
      "address": "ET Building Recreation Dept, Long Beach, CA 90813"
    }
  },
  {
    "id": 26,
    "name": "Sport and Exercise Psychology at the Beach",
    "shortName": "SEP",
    "category": "Sports",
    "websiteKey": "sep",
    "campusLabsId": "326044",
    "description": "Student-centered organization bringing excellence to human performance through mental health advocacy via diversity, mentorship, and outreach. Committed to human performance through mental health and physical activity.",
    "profilePicture": "cbf8eceb-ff6f-47a0-99eb-5562c72f12e3fbf800e2-535d-498c-98cd-9965b6f62e3b.jpg",
    "categoryNames": [],
    "email": "sepbeachclub@gmail.com",
    "socialMedia": {
      "instagram": "https://www.instagram.com/sepbeachclub/?hl=en",
      "website": "https://commerce.cashnet.com/csulb-sld?itemcode=sld-sepc"
    },
    "contactInfo": {}
  },
  {
    "id": 27,
    "name": "Chess Club",
    "shortName": "Chess Club",
    "category": "Sports",
    "websiteKey": "chess-club",
    "campusLabsId": "210244",
    "description": "To promote chess, teach chess, and challenge others to gain experience and skills required for chess.",
    "profilePicture": "020ddb07-8c7d-43c8-936e-f778e9ac36942d7074c0-815b-4353-9627-1c551e9e925a.png",
    "categoryNames": [
      "Special Interest"
    ],
    "email": null,
    "socialMedia": {
      "linktree": "https://linktr.ee/Csulbchess"
    },
    "contactInfo": {}
  },
  // CATEGORY: Cultural
  {
    "id": 28,
    "name": "Chinese Student Association",
    "shortName": "CSA",
    "category": "Cultural",
    "websiteKey": "chinese-student-association",
    "campusLabsId": "210634",
    "description": "Multi-cultural student organization established with the purpose, vision, and goal of expanding, spreading, teaching Chinese culture; not only inclusive to Chinese heritage students. Also aims to promote language learning for any and all Chinese languages.",
    "profilePicture": "7c2c138d-1d76-43e1-8083-ebbb463f3e1bc1ad450c-3655-48d6-a442-edc17e710ab7.JPG",
    "categoryNames": [],
    "email": "Publicrelations.csacsulb@gmail.com",
    "socialMedia": {
      "instagram": "https://www.instagram.com/csulb_csa/",
      "discord": "https://discord.gg/XNFfADXQU7"
    },
    "contactInfo": {}
  },
  {
    "id": 29,
    "name": "South Asian Student Association",
    "shortName": "SASA",
    "category": "Cultural",
    "websiteKey": "south-asian-student-association",
    "campusLabsId": "210842",
    "description": "Socio-cultural organization celebrating South Asian heritage through events, guiding international/local students, and promoting traditions.",
    "profilePicture": "382cf30f-e8e9-4a7c-8571-1591bf494df64c3be69d-3c85-4874-86fc-f060d92ac16b.jpeg",
    "categoryNames": [
      "Cultural Organizations"
    ],
    "email": null,
    "socialMedia": {
      "instagram": "https://www.instagram.com/csulbsasa",
      "facebook": "http://facebook.com/CSULB-South-Asian-Student-Association"
    },
    "contactInfo": {}
  },
  // CATEGORY: Health
  {
    "id": 30,
    "name": "Active Minds",
    "shortName": "Active Minds",
    "category": "Health",
    "websiteKey": "active-minds",
    "campusLabsId": "210652",
    "description": "Active Minds is the nation's premier nonprofit organization supporting mental health awareness and education for students. Dedicated to saving lives and building stronger families and communities. Through education, research, advocacy, and a focus on students and young adults, Active Minds is opening up the conversation about mental health.",
    "profilePicture": "bbd70ac4-c585-407e-b154-acde36ac727c96eb0d7d-c659-4b4e-8635-e457300c0e5c.jpg",
    "categoryNames": [
      "Community Service"
    ],
    "email": "csulbactiveminds1@gmail.com",
    "socialMedia": {
      "website": "http://Activeminds.org",
      "instagram": "https://www.instagram.com/activemindscsulb/",
      "facebook": "https://www.facebook.com/csulbactiveminds/"
    },
    "contactInfo": {}
  },
  {
    "id": 31,
    "name": "American Medical Student Association",
    "shortName": "AMSA",
    "category": "Health",
    "websiteKey": "american-medical-student-association",
    "campusLabsId": "210783",
    "description": "The focus of AMSA is to help give Pre-Med and Pre-Health Professional students at CSULB the support needed to successfully go through the rigorous process of applying and getting into medical schools and health professional school programs. Goes over every aspect of the application process in detail.",
    "profilePicture": "77be4aaf-577a-4022-b769-bf39e29416124cc8bb52-1e8a-4d64-aefb-353a06161e0d.jpg",
    "categoryNames": [
      "Career & Professional Development",
      "Scheduling Certified"
    ],
    "email": "amsa.csulb1@gmail.com",
    "socialMedia": {
      "instagram": "https://www.instagram.com/amsacsulb/",
      "linktree": "https://linktr.ee/amsacsulb"
    },
    "contactInfo": {}
  },
  {
    "id": 32,
    "name": "American Medical Women's Association",
    "shortName": "AMWA",
    "category": "Health",
    "websiteKey": "american-medical-women-s-association",
    "campusLabsId": "210287",
    "description": "The most prestigious women's medical organization on the national level. Connects students with a network of women medical professionals, admissions members and academics. Focuses on mentorship, leadership, career opportunities, internships, scholarships, research opportunities, and networking for pre-med and pre-health students.",
    "profilePicture": "1c10119c-bc03-42c4-85f0-70ac63024865384051fa-5256-4eb2-af70-bfcb2dd06426.png",
    "categoryNames": [
      "Career & Professional Development",
      "Scheduling Certified"
    ],
    "email": "amwacsulb.info@gmail.com",
    "socialMedia": {
      "website": "http://eepurl.com/dKcx7Y",
      "instagram": "http://instagram.com/amwa.csulb"
    },
    "contactInfo": {}
  },
  {
    "id": 33,
    "name": "Student Dietetic Association",
    "shortName": "SDA",
    "category": "Health",
    "websiteKey": "student-dietetic-association",
    "campusLabsId": "210569",
    "description": "Framework for student-faculty involvement in nutrition, dietetics, and food administration promoting professional network engagement. Promotes interest and opportunity in nutrition and dietetics professions.",
    "profilePicture": "59f17309-ca07-49dc-82df-76e17965812a87ecfda7-5118-4a05-a3a0-1acfcab8fb46.png",
    "categoryNames": [
      "Academic: Health & Human Services",
      "Scheduling Certified",
      "Food Handling Certified"
    ],
    "email": "csulb_sda@gmail.com",
    "socialMedia": {
      "instagram": "https://www.instagram.com/csulb_sda/",
      "twitter": "http://twitter.com/@csulbSDA"
    },
    "contactInfo": {}
  },
  {
    "id": 34,
    "name": "Rising Tides",
    "shortName": null,
    "category": "Health",
    "websiteKey": "project-ocean",
    "campusLabsId": "210440",
    "description": "Educates campus on suicide prevention and mental health stigma reduction through trainings, workshops, and peer-to-peer support programs.",
    "profilePicture": "bc47f450-33c9-43ad-87d7-9bd661340f681b3d66fd-80bd-4490-958e-cf59675428a3.png",
    "categoryNames": [],
    "email": null,
    "socialMedia": {
      "website": "https://www.csulb.edu/student-affairs/counseling-and-psychological-services/project-ocean"
    },
    "contactInfo": {
      "phone": "562-985-4001, ext. 54001",
      "address": "1250 Bellflower Blvd, Long Beach, CA 90840"
    }
  },
  {
    "id": 35,
    "name": "Student Affiliates of the American Chemical Society",
    "shortName": "SAACS",
    "category": "Health",
    "websiteKey": "saacs",
    "campusLabsId": "210403",
    "description": "Helps undergraduates in chemistry and biochemistry reach their educational and career goals through field trips, community service, and hands-on experience.",
    "profilePicture": "b10c597d-5ef7-40bb-b1fa-e248afc7ad2265d6cc4e-6906-46d7-b7c3-c61e3cb1fdbf.png",
    "categoryNames": [
      "Academic: Science & Mathematics"
    ],
    "email": "csulbchemclub@gmail.com",
    "socialMedia": {
      "instagram": "https://www.instagram.com/csulbchemclub/?hl=en",
      "website": "http://csulbsaacs.weebly.com/",
      "discord": "https://discord.gg/qRtCkDDyy6",
      "linktree": "https://linktr.ee/csulbchemclub"
    },
    "contactInfo": {
      "address": "1250 W Bellflower Blvd, Long Beach, CA 90840"
    }
  },
  {
    "id": 36,
    "name": "Student Chapter of the American Society for Microbiology",
    "shortName": "SCASM",
    "category": "Health",
    "websiteKey": "scasm",
    "campusLabsId": "210417",
    "description": "Inclusive organization cultivating a welcoming environment exposing microbiology aspects and career opportunities to science enthusiasts.",
    "profilePicture": "4f1bf7da-0dcd-4791-9920-3558ef0abe0542605bfc-ead1-4805-a535-05e189b76f07.jpg",
    "categoryNames": [
      "Academic: Science & Mathematics",
      "Scheduling Certified"
    ],
    "email": "asmcsulb49@gmail.com",
    "socialMedia": {
      "instagram": "https://www.instagram.com/asmcsulb/"
    },
    "contactInfo": {
      "city": "Long Beach",
      "state": "CA",
      "zip": "90840"
    }
  },
  {
    "id": 37,
    "name": "Researchers for Diverse Scientists",
    "shortName": null,
    "category": "Health",
    "websiteKey": "rds",
    "campusLabsId": "332459",
    "description": "Promotes STEM inclusivity through biology research student outreach presentations and science communication training at minority-serving schools. Inspires, represents, and showcases diversity among scientists and research.",
    "profilePicture": "8850050a-1e03-48c7-83a9-932366c6a41cccfa9136-e5c0-4b12-af07-2f676960b310.jpg",
    "categoryNames": [],
    "email": "claribel.alcantar01@student.csulb.edu",
    "socialMedia": {
      "website": "https://www.csulb.edu/biological-sciences/quantitative-ecology-lab/outreach",
      "instagram": "https://www.instagram.com/csulb_rds/"
    },
    "contactInfo": {}
  },
  // CATEGORY: Tech
  {
    "id": 38,
    "name": "AI Research Club",
    "shortName": null,
    "category": "Tech",
    "websiteKey": "ai",
    "campusLabsId": "384502",
    "description": "Dedicated to advancing the understanding and application of artificial intelligence among CSULB students. Fosters an environment of learning and innovation where members can explore AI technologies, engage in collaborative research, and develop practical AI solutions. Bridges the gap between theoretical knowledge and real-world application.",
    "profilePicture": "da529f37-f37e-4b56-a362-6fe2a7e1515879d15f87-5c84-412c-a33e-a6cca60f0b45.jpeg",
    "categoryNames": [],
    "email": "ai.researchcsulb@gmail.com",
    "socialMedia": {
      "website": "https://csulbairesearch.github.io/AI_Research_Website/",
      "instagram": "https://www.instagram.com/csulb_ai_research/?hl=en",
      "linkedin": "https://www.linkedin.com/company/csulb-arc",
      "youtube": "https://www.youtube.com/channel/UC2eT8Nv1g-BvjXkr1j4T-Og"
    },
    "contactInfo": {
      "address": "ET 009"
    }
  },
  {
    "id": 39,
    "name": "Virtual Reality Operations Club",
    "shortName": null,
    "category": "Tech",
    "websiteKey": "virtualreality",
    "campusLabsId": "375290",
    "description": "Specializes in the design and construction of virtual reality headsets, as well as the development of Virtual/Augmented Reality (VR/AR) software and any add-on accessories. Facilitates a collaborative environment for any student to learn more about virtual reality and participate in industry-relevant hands-on projects.",
    "profilePicture": "7a72e7e9-b46d-42f8-af2d-3c9784929fe3561abd5c-aa59-4b73-b3e4-3d08a21de445.JPG",
    "categoryNames": [],
    "email": null,
    "socialMedia": {
      "linktree": "https://linktr.ee/vroc.csulb"
    },
    "contactInfo": {}
  },
  {
    "id": 40,
    "name": "LeetClub",
    "shortName": null,
    "category": "Tech",
    "websiteKey": "leet",
    "campusLabsId": "413872",
    "description": "A community for students seeking to improve their programming interview skills. Whether just starting your coding journey or a seasoned LeetCode veteran, LeetClub helps you ace your next technical interview. Posts a new LeetCode problem daily with live evening sessions. Also hosts mock interview practice days, industry guest speakers, and social events.",
    "profilePicture": "6931a667-3023-4c5a-8d2d-901f473605685437723b-fa83-4c75-a635-7b7a8b0ef506.png",
    "categoryNames": [],
    "email": null,
    "socialMedia": {
      "discord": "https://discord.gg/ynK3JA4W3a",
      "instagram": "https://instagram.com/csulb.leetclub",
      "linkedin": "https://www.linkedin.com/company/csulb-leetclub/about/"
    },
    "contactInfo": {}
  },
  {
    "id": 41,
    "name": "Long Beach Maker Society",
    "shortName": "LBMS",
    "category": "Tech",
    "websiteKey": "long-beach-maker-society",
    "campusLabsId": "210768",
    "description": "Student organization offering engineering students of all disciplines the ability to work on cutting edge projects. Has over 50 students, staff, and community members involved in projects across electrical, computer engineering, mechanical, aerospace, and industrial design. Largest endeavor is a 3D Printer Build Series where members build their own desktop 3D printers at low cost.",
    "profilePicture": "ef4f68c7-191b-4444-96be-d04bb2988816289128f1-047c-4f22-beab-b7c07aafb862.png",
    "categoryNames": [
      "Academic: Engineering"
    ],
    "email": "info@lbmakersociety.org",
    "socialMedia": {
      "website": "http://lbmakersociety.org",
      "twitter": "http://twitter.com/makersociety"
    },
    "contactInfo": {
      "phone": "(562) 666-2537",
      "address": "Vivian Engineering Center, Room 524, Long Beach, CA 90840"
    }
  },
  {
    "id": 42,
    "name": "Society of Women in Space Exploration",
    "shortName": "SWISE",
    "category": "Tech",
    "websiteKey": "swise",
    "campusLabsId": "326043",
    "description": "Promotes women, diversity, and inclusion in multidisciplinary space exploration fields.",
    "profilePicture": "75e77791-fab2-44b2-a89a-3baf8c77b46b19db7c8a-03b4-468a-8675-204f03a81b34.PNG",
    "categoryNames": [],
    "email": null,
    "socialMedia": {
      "website": "https://www.swise.org/",
      "instagram": "https://instagram.com/csulbswise"
    },
    "contactInfo": {}
  },
  {
    "id": 43,
    "name": "Society of Physics Students (SPS)",
    "shortName": "SPS",
    "category": "Tech",
    "websiteKey": "society-of-physics-students-sps",
    "campusLabsId": "210378",
    "description": "Professional association explicitly for students interested in physics, including those from chemistry, engineering, geology, and medicine. Welcomes anyone with an interest in physics.",
    "profilePicture": "bfb30cfa-f5f1-4628-b8b5-a1d69e91e323940bb9c1-f539-4aee-980b-d10ead60297f.jpg",
    "categoryNames": [
      "Academic: Science & Mathematics",
      "Scheduling Certified"
    ],
    "email": "csulbsocietyphysicsstudents@gmail.com",
    "socialMedia": {
      "instagram": "https://www.instagram.com/csulb_sps/"
    },
    "contactInfo": {
      "address": "1250 Bellflower Blvd, HSCI-283,285, Long Beach, CA 90840"
    }
  },
  {
    "id": 44,
    "name": "Association for Computing Machinery (ACM)",
    "shortName": "ACM",
    "category": "Tech",
    "websiteKey": "association-for-computing-machinery-acm",
    "campusLabsId": "210264",
    "description": "If you are interested in joining, make sure to check out our Membership Verification form, as well as requesting to join the organization!",
    "profilePicture": "79d2c9bc-5a1b-425d-a05e-755cca83754f17ab3af7-08f2-4125-b749-432a13fb6594.jpg",
    "categoryNames": [
      "Academic: Engineering",
      "Scheduling Certified",
      "Food Handling Certified"
    ],
    "email": "chair@csulb.acm.org",
    "socialMedia": {
      "website": "http://csulb.acm.org",
      "instagram": "http://instagram.com/csulbacm",
      "facebook": "http://facebook.com/csulbacm",
      "discord": "https://discord.gg/nj2x53seud"
    },
    "contactInfo": {
      "address": "Long Beach, United States"
    }
  },
  // CATEGORY: Social
  {
    "id": 45,
    "name": "Circle K International",
    "shortName": "Circle K",
    "category": "Social",
    "websiteKey": "circle-k-international",
    "campusLabsId": "210680",
    "description": "The largest collegiate community service, leadership development, and fellowship organization in the world. CSULB Circle K International was chartered on November 6th, 1958. Focuses on three tenets: Service, Leadership, and Fellowship. No time commitment required - members can pick and choose events.",
    "profilePicture": "16af02a0-288e-4290-971a-2fdc6117dd59769dd894-50ff-4a76-8adc-f6bad3a7ebdd.png",
    "categoryNames": [
      "Community Service",
      "Scheduling Certified",
      "Food Handling Certified"
    ],
    "email": "csulbckipresident@gmail.com",
    "socialMedia": {
      "website": "http://www.csulbcki.org/",
      "instagram": "https://www.instagram.com/csulbcki/",
      "youtube": "https://www.youtube.com/channel/UCk7_hT1nNj9nh0TmXhUNFtA/featured",
      "discord": "https://discord.gg/vpFBYEA",
      "linktree": "https://linktr.ee/csulbcki"
    },
    "contactInfo": {}
  },
  {
    "id": 46,
    "name": "American Red Cross at CSULB",
    "shortName": "American Red Cross at CSULB",
    "category": "Social",
    "websiteKey": "american-red-cross-at-csulb",
    "campusLabsId": "210662",
    "description": "The American Red Cross Club at CSULB. Holds General meetings every other Thursday at 5:00 pm.",
    "profilePicture": "ab289e81-1e82-4b9c-a5fb-791dced43e9dfea97fb7-71f6-43cb-bf14-35395363f76e.jpg",
    "categoryNames": [
      "Community Service"
    ],
    "email": "abbas.abdulhasan@student.csulb.edu",
    "socialMedia": {
      "instagram": "https://www.instagram.com/csulbrcclub/"
    },
    "contactInfo": {}
  },
  {
    "id": 47,
    "name": "22 West Media",
    "shortName": "22 West Media",
    "category": "Social",
    "websiteKey": "22-west-media",
    "campusLabsId": "210240",
    "description": "Student-run, student-driven digital media center at California State University, Long Beach. Home to 22 West Radio, 22 West Television, and 22 West Magazine. Offers students the chance to create, collaborate, and share their voices across multiple platforms through internships, student assistant positions, and hands-on opportunities.",
    "profilePicture": "4a0ff4b2-e5c5-4a87-a635-e190f5329a8b6b1dc03f-6d08-41aa-9967-b337e2cce55e.png",
    "categoryNames": [],
    "email": null,
    "socialMedia": {
      "website": "http://www.22westmedia.com"
    },
    "contactInfo": {}
  },

];

// Helper function to get full image URL
function getImageUrl(profilePicture) {
  if (!profilePicture) return null;
  return IMAGE_BASE_URL + profilePicture;
}

// Helper function to get club page URL
function getClubUrl(websiteKey) {
  return CLUB_BASE_URL + websiteKey;
}
