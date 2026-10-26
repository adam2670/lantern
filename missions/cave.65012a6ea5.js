// ODYSSEY — campaign "cave". GENERATED, do not edit.
// Source of truth: content/missions-full.js. Rebuild with:  python3 tools/split-missions.py
// RULE: nothing in this file is about the person using it. Content only.
(function () {
var C = {
  "id": "cave",
  "ready": true,
  "kind": "climb",
  "readingLevel": {
    "fk": 5.6,
    "cl": 6.0
  },
  "grade": "5",
  "kindLabel": "Rescue",
  "form": "bat",
  "title": "Cave Rescue",
  "subtitle": "A limestone cave, somewhere under a hill",
  "pitch": "A caver is stuck five chambers down with a hurt ankle and a dying lamp. Five descents through crawls, a rope drop, an underground river and a room full of bats, with a bat for a guide who can see in the dark.",
  "scene": "assets/scene-cave.jpg",
  "waypoints": [
    [
      835,
      400
    ],
    [
      812,
      505
    ],
    [
      790,
      640
    ],
    [
      830,
      795
    ],
    [
      640,
      870
    ],
    [
      430,
      960
    ]
  ],
  "progress": {
    "unit": "ft",
    "total": 480
  },
  "dayNoun": "Descent",
  "stageNoun": "Chamber",
  "finalNoun": "The caver",
  "stages": [
    "The Entrance Room",
    "The Crawl",
    "The Drop",
    "The River",
    "The caver"
  ],
  "reconNoun": "Rescue Log",
  "legs": {
    "recon": "Rescue log",
    "nav": "Cave math",
    "orders": "Rope orders",
    "debrief": "Rest stop"
  },
  "fact": "A cave stays the same temperature all year, about the average of the outside. In this one that is fifty-four degrees, which feels fine for an hour and dangerous after six.",
  "finale": {
    "prompt": "The caver is in the stretcher and the team is hauling. Which color glow stick goes on the rope at the top of the drop?",
    "options": [
      {
        "label": "Green",
        "color": "#4FD18B"
      },
      {
        "label": "Blue",
        "color": "#4FD1FF"
      },
      {
        "label": "Orange",
        "color": "#F28C28"
      },
      {
        "label": "Pink",
        "color": "#FF6BD6"
      }
    ],
    "done": "Snap it. Then count the team out of the entrance. Everyone who went in comes out. That is the whole rule."
  },
  "patrols": [
    {
      "id": "cave-1",
      "title": "The Entrance Room",
      "recon": {
        "lesson": {
          "title": "Questions first, then the log",
          "points": [
            "Read the five questions before the log. Two want a detail, one wants a word, one wants a why, one wants what a paragraph is mostly about.",
            "When the log gives a rule with a number, the number is the detail.",
            "The answer is always in the log. You never have to guess."
          ],
          "example": "Question: 'How many boats are in the harbor?' Hunt for 'boats' and a number."
        },
        "title": "Rescue Log: Three Lights Each",
        "passage": [
          "The call came at noon: a caver had not come out. Two friends had gone in at eight in the morning to explore a known cave. One had slipped on a wet slope below the fourth chamber. He had hurt an ankle so badly that he could not climb. The other had come out for help. The cave is limestone, a soft rock that water dissolves over hundreds of thousands of years into rooms and passages, and this one drops about five hundred feet from the entrance to its deepest chamber. Nobody in the cave can call anyone. Rock stops radio.",
          "The rescue team is eight people, and every one of them carries three lights. The rule is older than any of them: one on the helmet, one in the pack, one on the body, because a caver with no light in a cave is not just lost but in real trouble. The team also carries rope, a folding stretcher, a stove, a sleeping bag, and a heat pack, because the injured caver has been sitting still on cold rock for hours. Cold is the real danger in a cave, not the dark.",
          "The entrance room is the size of a school gym. Daylight reaches just far enough in to show the first drop. The team leader lays out the map on a flat rock and marks the four chambers between here and the caver. Next the leader reads off the plan: a crawl, a rope drop, a river crossing, then the slope. Each chamber gets a team member left behind with a light and a whistle. So the way out is always marked, and a message can be passed from the bottom to the top by voice. The team steps out of the daylight at one in the afternoon."
        ],
        "questions": [
          {
            "q": "How many lights does each rescuer carry?",
            "choices": [
              "Three",
              "One",
              "Two",
              "Eight"
            ],
            "answer": 0,
            "hint": "The first sentence of paragraph 2.",
            "skill": "Finding details"
          },
          {
            "q": "What kind of rock is the cave made of?",
            "choices": [
              "Granite",
              "Sandstone",
              "Marble",
              "Limestone"
            ],
            "answer": 3,
            "hint": "Paragraph 1, the sentence with 'a soft rock'.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 1, what does 'dissolves' mean?",
            "choices": [
              "Freezes",
              "Slowly eats away and washes out",
              "Slowly builds up into new layers of rock",
              "Cracks apart suddenly under its own weight"
            ],
            "answer": 1,
            "hint": "The sentence says water dissolves the rock 'over hundreds of thousands of years into rooms and passages'.",
            "skill": "Word meanings"
          },
          {
            "q": "Why does the team leave a person in each chamber?",
            "choices": [
              "Because eight people could never all fit down the narrow passages between the four chambers at the same time",
              "Because each of the chambers has to be searched again on the way out in case anything has been left behind",
              "Because the rule says that a rescue team is eight people and every one of them has to be given a job to do",
              "So the way out is marked and messages can be passed by voice, since radio does not work through rock"
            ],
            "answer": 3,
            "hint": "Paragraph 3, the sentences with 'a light and a whistle' and 'by voice', and paragraph 1's last two sentences.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 2 mostly about?",
            "choices": [
              "The size of the entrance room and how far the daylight reaches in",
              "How the caver slipped on a wet slope and hurt his ankle badly",
              "What the team carries and why, especially against cold",
              "The map on the flat rock and the four chambers marked on it"
            ],
            "answer": 2,
            "hint": "Paragraph 2 lists the lights and the gear and ends by saying cold is the real danger.",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Team math",
          "points": [
            "Leftovers: 30 ÷ 4 is 7 with 2 left over, because 7 × 4 = 28.",
            "Hours since the caver went in: clock arithmetic.",
            "Feet of cave over chambers: divide.",
            "Same bottom: add the tops, so 2/6 + 3/6 = 5/6."
          ],
          "example": "From 9 in the morning to 4 in the afternoon: 3 hours to noon, then 4 more, so 7 hours."
        },
        "problems": [
          {
            "q": "The team shares 50 spare batteries equally among the 8 rescuers, as many as possible each. How many batteries are left over?",
            "answer": "2",
            "hint": "8 × 6 = 48. How many are left after 48?",
            "skill": "Dividing"
          },
          {
            "q": "The caver went in at 8 in the morning. The team enters at 1 in the afternoon. How many hours has the caver been underground?",
            "answer": "5",
            "hint": "From 8 to 12 is 4 hours, then 1 more.",
            "skill": "Multi-step problems"
          },
          {
            "q": "The cave drops 500 feet over 5 chambers. If each chamber dropped the same, how many feet is each?",
            "answer": "100",
            "hint": "500 ÷ 5.",
            "skill": "Dividing"
          },
          {
            "q": "A lamp battery lasts 12 hours. The team expects 18 hours underground. How many more hours of battery does each lamp need from its spare?",
            "answer": "6",
            "hint": "18 − 12.",
            "skill": "Adding and subtracting"
          },
          {
            "q": "The team spent 1/4 of the first hour on the map and 2/4 checking gear. What fraction of the hour is that together? (write a fraction)",
            "answer": "3/4",
            "hint": "Same bottom. Add the tops.",
            "skill": "Fractions"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "The idea behind all three",
            "points": [
              "The central idea is never sitting in one sentence. Give each paragraph a short label first, then ask what all the labels are serving.",
              "Watch for a choice that says the opposite of one line in the report. It will sound perfectly reasonable until you find that line.",
              "The other four moves: one line that proves a claim, the job a paragraph is doing, a word read off its own sentence, and a conclusion built from two paragraphs."
            ],
            "example": "Three paragraphs about a night bus: who rides it, what it costs to run, why it keeps going anyway. 'The bus loses money' is one paragraph. 'The town needs it enough to pay for it' is all three."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea of the whole report?",
              "choices": [
                "A cave takes away light, warmth and any way of calling for help, and the whole plan is built around putting all three back.",
                "Every member of the team carries three lights: one on the helmet, one in the pack, one on the body.",
                "Caving is the most dangerous outdoor sport a person can take up.",
                "The greatest danger to the injured caver is the darkness he is sitting in."
              ],
              "answer": 0,
              "hint": "Three lights each, a heat pack and a stove, and a person left in every chamber with a whistle. Ask what each of those three things is replacing.",
              "skill": "Central idea and evidence",
              "evidence": "Rock stops radio."
            },
            {
              "q": "Claim: the injured caver is in danger from something other than his ankle. Which sentence from the report best supports that claim?",
              "choices": [
                "The cave is limestone, a soft rock that water dissolves over hundreds of thousands of years into rooms and passages, and this one drops about five hundred feet from the entrance to its deepest chamber.",
                "Nobody in the cave can call anyone.",
                "The rescue team is eight people, and every one of them carries three lights.",
                "The team also carries rope, a folding stretcher, a stove, a sleeping bag, and a heat pack, because the injured caver has been sitting still on cold rock for hours."
              ],
              "answer": 3,
              "hint": "The claim is about a danger to the caver himself. Three of these are about the team, the rock or radios. Find the one that says what has been happening to him while he waited.",
              "skill": "Finding details",
              "evidence": "The team also carries rope, a folding stretcher, a stove, a sleeping bag, and a heat pack, because the injured caver has been sitting still on cold rock for hours."
            },
            {
              "q": "Why does the report stop to explain what limestone is, in the middle of a paragraph about an emergency call?",
              "choices": [
                "Because the injured caver slipped on limestone rather than on the ordinary wet rock a person would find above ground.",
                "Because it explains where the rooms and passages the team is about to travel through came from.",
                "Because it lists the equipment the team is going to need.",
                "Because it warns that a roof made of soft rock may come down on the team while they are working under it."
              ],
              "answer": 1,
              "hint": "Read what the limestone sentence actually says water does to that rock over hundreds of thousands of years, then look at what the third paragraph asks the team to travel through.",
              "skill": "Author's purpose and structure",
              "evidence": "The cave is limestone, a soft rock that water dissolves over hundreds of thousands of years into rooms and passages, and this one drops about five hundred feet from the entrance to its deepest chamber."
            },
            {
              "q": "The report says a caver with no light in a cave 'is not just lost but in real trouble'. What does 'in real trouble' mean as it is used here?",
              "choices": [
                "In trouble with the team leader for breaking a rule",
                "Completely worn out from all of the climbing",
                "At the far end of the passage he was exploring",
                "Past being able to get himself out"
              ],
              "answer": 3,
              "hint": "The sentence sets the phrase against 'just lost'. If being lost is bad but survivable, then whatever comes after it has to be worse than that.",
              "skill": "Word meanings",
              "evidence": "one on the helmet, one in the pack, one on the body, because a caver with no light in a cave is not just lost but in real trouble"
            },
            {
              "q": "Paragraphs 1 and 3 together explain why a team member is left behind in every chamber with a light and a whistle. Why is that necessary?",
              "choices": [
                "Every chamber has to be searched a second time on the way out, and somebody must stay behind in each one to do it.",
                "The team leader needs a person waiting in each room to hand the map on to whoever comes through the passage next.",
                "Radios do not work down there, so a chain of people is the only way a message can reach the surface.",
                "The team member left in each room is there to carry the stretcher forward when the injured caver is brought back up."
              ],
              "answer": 2,
              "hint": "Paragraph one gives you a three-word sentence about rock and radios. Paragraph three gives you a chain of people passing a message by voice. Say the first, then the second, then say 'so'.",
              "skill": "Reading between the lines",
              "evidence": "So the way out is always marked, and a message can be passed from the bottom to the top by voice"
            }
          ]
        }
      },
      "navByGrade": {
        "3": {
          "lesson": {
            "title": "Grade 3 numbers",
            "points": [
              "Multiplication facts: 5 × 6 means 5 groups of 6.",
              "Sharing equally is dividing.",
              "Adding three numbers: add two, then add the third.",
              "Fractions with the same bottom: add the tops."
            ],
            "example": "5 × 6 = 30."
          },
          "problems": [
            {
              "q": "The leader counts 7 teams with 4 lamps in each. How many lamps is that?",
              "answer": "28",
              "hint": "7 × 4.",
              "skill": "Multiplying"
            },
            {
              "q": "28 lamps are shared equally among 7 teams. How many lamps in each team?",
              "answer": "4",
              "hint": "How many 7s make 28?",
              "skill": "Dividing"
            },
            {
              "q": "The team counted 128 batteries, then found 102 more, then 15 more. How many batteries in all?",
              "answer": "245",
              "hint": "128 + 102 first. Then add 15.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "The team finished 4/8 of the day's work before the break and 2/8 after. What fraction is done? (write a fraction)",
              "answer": "6/8",
              "hint": "Same bottom. Add the tops.",
              "skill": "Fractions"
            },
            {
              "q": "A lamp platform is 9 squares wide and 2 squares long. How many squares is that?",
              "answer": "18",
              "hint": "9 rows of 2, so 9 × 2.",
              "skill": "Area and perimeter"
            }
          ]
        },
        "6": {
          "lesson": {
            "title": "Grade 6 numbers",
            "points": [
              "Decimal × decimal: multiply without the points, then count the decimal places in both numbers. 1.3 × 2.1: 13 × 21 = 273, two places, so 2.73.",
              "Percent of a number: turn the percent into a fraction of 100.",
              "A ratio tells you how many of one thing for each group of the other.",
              "Order of operations: parentheses, then multiply and divide, then add and subtract."
            ],
            "example": "5 × (8 − 3) + 9 = 34: parentheses, then multiply, then add."
          },
          "problems": [
            {
              "q": "A regular chamber takes 2.25 minutes. A long one takes 1.4 times as long. How many minutes does the long one take?",
              "answer": "3.15",
              "hint": "Multiply 225 × 14 without the points, then put back 3 decimal places.",
              "skill": "Decimals"
            },
            {
              "q": "Of 40 batteries, 75% are set aside. How many is that?",
              "answer": "30",
              "hint": "75% of 40: 75% is 75/100.",
              "skill": "Ratios and percent"
            },
            {
              "q": "Lamps and batteries are kept in the ratio 1 to 3. If there are 4 lamps, how many batteries?",
              "answer": "12",
              "hint": "4 ÷ 1 = 4 groups. Each group has 3 batteries.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The team works out 6 × (6 − 4) + 16. What is it?",
              "answer": "28",
              "hint": "Parentheses first, then multiply, then add.",
              "skill": "Order of operations"
            },
            {
              "q": "Solve for x: x + 222 = 600",
              "answer": "378",
              "hint": "Subtract 222 from both sides.",
              "skill": "Equations"
            }
          ]
        },
        "7": {
          "lesson": {
            "title": "Grade 7 numbers",
            "points": [
              "A unit rate is the total divided by how many: 18 ÷ 4 = 4.5 for one.",
              "Percent change: find that percent of the starting number, then add it on or take it off.",
              "Below zero, going up adds and going down subtracts. Walk the number line one step at a time.",
              "A two-step equation: undo the adding first, then undo the multiplying."
            ],
            "example": "3x + 14 = 35, so 3x = 21, so x = 7."
          },
          "problems": [
            {
              "q": "The team tied 20 knots in 50 minutes altogether. How many minutes is that for one knot?",
              "answer": "2.5",
              "hint": "A rate is the total shared out: 50 ÷ 20.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The team counted 60 batteries on the first pass. On the second pass the number had fallen by 50%. How many batteries did the team count on the second pass?",
              "answer": "30",
              "hint": "50% of 60 is 30. Then take it off.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The supply ledger opens at −8 lamps. The team adds 10 lamps, then takes out 11 lamps. What does the ledger read now?",
              "answer": "-9",
              "accept": [
                "−9"
              ],
              "hint": "Start at −8, add 10 to get 2, then subtract 11.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: 2x + 28 = 44",
              "answer": "8",
              "hint": "Take 28 off both sides first, then divide by 2.",
              "skill": "Equations"
            },
            {
              "q": "On the plan, 1 inch stands for 8 feet. The passage measures 11 inches on the plan. How long is it really, in feet?",
              "answer": "88",
              "hint": "Every inch is 8 feet, so 11 × 8.",
              "skill": "Ratios and percent"
            }
          ]
        },
        "8": {
          "lesson": {
            "title": "Grade 8 numbers",
            "points": [
              "A straight-line rule is y = mx + b: b is where you start, m is what you add each step.",
              "A square root undoes squaring. If a square has area 49, its side is 7.",
              "Pythagoras: in a right triangle a² + b² = c², and c is always the longest side.",
              "With x on both sides, move all the x's to one side first, then all the plain numbers to the other."
            ],
            "example": "Start at 30 and add 6 each hour: after 5 hours, 6 × 5 + 30 = 60."
          },
          "problems": [
            {
              "q": "The team starts with 12 batteries and adds 4 more every hour. After 8 hours, how many batteries are there?",
              "answer": "44",
              "hint": "This is the straight-line rule y = mx + b: 4 × 8 + 12.",
              "skill": "Linear relationships"
            },
            {
              "q": "Each row holds 3² batteries. There are 5 rows. How many batteries in all?",
              "answer": "45",
              "hint": "3² means 3 × 3 = 9. Then × 5.",
              "skill": "Powers and roots"
            },
            {
              "q": "The team runs a cable from the top of a 20-foot post to a point 21 feet away on the ground. How long is the cable, in feet?",
              "answer": "29",
              "hint": "Right triangle: a² + b² = c². 20² + 21² = 400 + 441 = 841. The cable is the square root of that.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "Solve for x: 5x + 12 = x + 48",
              "answer": "9",
              "hint": "Take x off both sides to get 4x + 12 = 48, then take 12 off both sides and divide.",
              "skill": "Equations"
            },
            {
              "q": "The team's map shows 5 × 10^4 feet of passages. Written out in full, what number is that?",
              "answer": "50000",
              "hint": "10^4 is 1 with 4 zeros after it: 10,000. Then × 5.",
              "skill": "Powers and roots"
            }
          ]
        }
      },
      "orders": {
        "lesson": {
          "title": "Read all of it first",
          "points": [
            "Read every step before doing step 1.",
            "The last step often changes everything."
          ],
          "example": "Step 2 comes to 30 and step 4 comes to 75. 'Type the larger' means 75."
        },
        "skill": "Following directions",
        "steps": [
          "Write the number of rescuers on the team: 8.",
          "Multiply by the number of lights each one carries: 3.",
          "Now begin a separate number. Write the drop from the entrance to its deepest chamber, in feet: 500.",
          "Divide by the number of chambers between the entrance and the caver: 4.",
          "Two numbers are on the flat rock now, one from step 2 and one from step 4. Type the larger of them."
        ],
        "prompt": "Your answer:",
        "answer": "125",
        "hint": "Step 5 does not add your two totals. Look at the step 2 number beside the step 4 number and choose the bigger."
      }
    },
    {
      "id": "cave-2",
      "title": "The Crawl",
      "recon": {
        "lesson": {
          "title": "How something is done",
          "points": [
            "A 'how' question wants the method the log describes, in order.",
            "Measurements of a passage are details. Keep height and length apart.",
            "A hard word is often explained by what happens right after it."
          ],
          "example": "'The tunnel is six feet wide and a mile long.' How wide? Six feet. How long? A mile."
        },
        "title": "Rescue Log: Eighteen Inches",
        "passage": [
          "Below the entrance room the cave narrows to a crawl, a passage eighteen inches high and sixty feet long with a floor of wet gravel and a ceiling that scrapes a helmet the whole way. Cavers move through it on their bellies, pushing their packs ahead of them, because a pack on the back catches on the roof. The first person through calls back what they find, and the rest follow one at a time. A rope is tied between them. That way a helmet lamp in front is never more than a body length away.",
          "The rule in a crawl is that nobody hurries. A caver who panics in a tight passage breathes hard, feels the rock close in, and stops thinking. The team leader's voice comes back down the passage every minute: slow, easy, plenty of room. There is, in fact, plenty of room. Eighteen inches is enough for anyone on the team, and the gravel floor means nobody is stuck, only slow. The crawl takes twenty minutes going in. Coming out with a stretcher will take an hour.",
          "The stretcher is the problem the team is already solving. It is a folding sled of stiff plastic with straps, made to be dragged through exactly this kind of passage. The injured caver will ride through the crawl on his back, pulled by two people ahead and pushed by two behind, with a foam pad under him and his ankle splinted to the sled. Every rescuer who has done it says the same thing. The crawl is the worst part. It is also the part that always works. The team comes out the far end into the second chamber at one forty."
        ],
        "questions": [
          {
            "q": "How high and how long is the crawl?",
            "choices": [
              "Eighteen inches high, six hundred feet long",
              "Eighteen feet high, one hundred yards long",
              "Eighteen inches high, sixty feet long",
              "Eight inches high, sixteen hundred feet long"
            ],
            "answer": 2,
            "hint": "The first sentence of paragraph 1.",
            "skill": "Finding details"
          },
          {
            "q": "Why do cavers push their packs ahead of them in a crawl?",
            "choices": [
              "Because a pack on the back catches on the roof",
              "Because a pack is too heavy to carry on your back for sixty feet",
              "So the packs stay out of the wet gravel on the floor",
              "Because the rope between cavers runs through the packs"
            ],
            "answer": 0,
            "hint": "Paragraph 1, the second sentence.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 3, what is 'splinted'?",
            "choices": [
              "Wrapped in a blanket to keep the cold off the skin",
              "Held still and straight with a stiff support",
              "Strapped down flat against the floor of the plastic sled",
              "Laid on the foam pad under his back"
            ],
            "answer": 1,
            "hint": "The ankle is 'splinted to the sled' so it cannot move.",
            "skill": "Word meanings"
          },
          {
            "q": "Why does the team leader keep talking down the passage?",
            "choices": [
              "Because the first person through calls back what they find",
              "To keep the team calm, since panic in a tight passage stops people thinking",
              "To count them",
              "Because a caver in a tight passage cannot hear anything except a voice from directly ahead"
            ],
            "answer": 1,
            "hint": "Paragraph 2, the first three sentences.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 3 mostly about?",
            "choices": [
              "How the stretcher will carry the caver back through the crawl",
              "The gravel floor",
              "How long the crawl takes going in and how long it takes coming out",
              "The second chamber at the far end and the time the team got there"
            ],
            "answer": 0,
            "hint": "Paragraph 3 describes the stretcher and how it will be moved through the crawl.",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Crawl math",
          "points": [
            "Feet ÷ minutes = feet a minute.",
            "Volume of a box: length × width × height. 4 × 4 × 2 = 32 cubic feet.",
            "How many times longer: divide the longer time by the shorter one.",
            "Area of a floor: length times width."
          ],
          "example": "36 feet in 9 minutes is 36 ÷ 9 = 4 feet a minute."
        },
        "problems": [
          {
            "q": "The crawl is 60 feet and takes 20 minutes. How many feet a minute is that?",
            "answer": "3",
            "hint": "60 ÷ 20.",
            "skill": "Dividing"
          },
          {
            "q": "Coming out with the stretcher takes 60 minutes. How many times longer is that than the 20 minutes going in?",
            "answer": "3",
            "hint": "60 ÷ 20.",
            "skill": "Dividing"
          },
          {
            "q": "The tightest part of the crawl is like a box 10 feet long, 3 feet wide and 2 feet high. How many cubic feet of space is that?",
            "answer": "60",
            "hint": "Length × width × height: 10 × 3 first, then times 2.",
            "skill": "Volume"
          },
          {
            "q": "The team entered the cave at 1:00 and reached the second chamber at 1:40. How many minutes did the entrance room and the crawl take together?",
            "answer": "40",
            "hint": "1:00 to 1:40.",
            "skill": "Multi-step problems"
          },
          {
            "q": "The crawl is 60 feet long and 4 feet wide. What is the area of its floor in square feet?",
            "answer": "240",
            "hint": "60 × 4.",
            "skill": "Area and perimeter"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "Proof has to close the gap",
            "points": [
              "All four choices will be real sentences from the report. Being true is free. Only proving counts.",
              "Split the claim into its halves and check your sentence carries both. Half a claim proved is a claim not proved.",
              "Read the claim, then your sentence, one straight after the other. If a gap is left between them, keep looking."
            ],
            "example": "Claim: the boat was built for shallow water. 'It has two oars' proves nothing at all. 'It draws only six inches when loaded' proves the whole thing."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea that develops across the whole report?",
              "choices": [
                "The crawl is eighteen inches high and sixty feet long, with a floor of wet gravel and a ceiling that scrapes against a helmet the whole way along it.",
                "Fear is the biggest obstacle any person has to overcome in life, and staying calm in a tight place is worth more than any piece of equipment.",
                "The crawl is not going to trap anyone, but it is slow and it frightens people, so the team manages the nerves and plans for the time.",
                "The crawl is the part of the rescue most likely to go wrong, and the rescuers who have done it say they never know whether the sled will get through."
              ],
              "answer": 2,
              "hint": "The size of the passage, the rule about hurrying, and the sled. Ask what all three are dealing with, then check each choice against what the rescuers say near the end of the report.",
              "skill": "Central idea and evidence",
              "evidence": "Eighteen inches is enough for anyone on the team, and the gravel floor means nobody is stuck, only slow."
            },
            {
              "q": "Claim: a caver in the crawl is slowed down but never actually stuck. Which sentence from the report best supports that claim?",
              "choices": [
                "Eighteen inches is enough for anyone on the team, and the gravel floor means nobody is stuck, only slow.",
                "Below the entrance room the cave narrows to a crawl, a passage eighteen inches high and sixty feet long with a floor of wet gravel and a ceiling that scrapes a helmet the whole way.",
                "Cavers move through it on their bellies, pushing their packs ahead of them, because a pack on the back catches on the roof.",
                "The injured caver will ride through the crawl on his back, pulled by two people ahead and pushed by two behind, with a foam pad under him and his ankle splinted to the sled."
              ],
              "answer": 0,
              "hint": "Slow and stuck are two different things, and the claim needs both settled. Three of these describe the crawl or the sled without ever saying whether anyone could get trapped.",
              "skill": "Finding details",
              "evidence": "Eighteen inches is enough for anyone on the team, and the gravel floor means nobody is stuck, only slow."
            },
            {
              "q": "What job does the second paragraph do in this report?",
              "choices": [
                "It gives the measurements of the passage and the length of it.",
                "It deals with the part of the crawl that is not about the rock at all: what a tight passage does to a person's nerve.",
                "It explains how the sled is dragged through the crawl by two people pulling ahead of it and two more people pushing along behind it.",
                "It lists the order in which the team members go through the crawl, and how the rope between them is tied so no lamp is far off."
              ],
              "answer": 1,
              "hint": "Paragraph one already handed you the size of the passage. Ask what is left for a second paragraph to deal with once the measurements are done.",
              "skill": "Author's purpose and structure",
              "evidence": "A caver who panics in a tight passage breathes hard, feels the rock close in, and stops thinking."
            },
            {
              "q": "The report calls the stretcher 'the problem the team is already solving'. What does that phrase tell you?",
              "choices": [
                "The stretcher has broken and is being repaired on the way",
                "The team is working on the trip out while it is still going in",
                "The team cannot agree on which stretcher to bring",
                "The stretcher is too wide to fit through the crawl, so some other way out has to be found"
              ],
              "answer": 1,
              "hint": "Two words in that phrase carry it: 'already', and the fact that solving is still happening. Read the rest of the paragraph and ask when the sled will actually be used.",
              "skill": "Word meanings",
              "evidence": "The stretcher is the problem the team is already solving."
            },
            {
              "q": "Paragraphs 2 and 3 together explain why coming out will take an hour when going in took twenty minutes. What is the reason?",
              "choices": [
                "Four people have to drag and push a loaded sled through a passage each of them has to crawl through on their belly.",
                "The team will be too tired by then to move at any speed.",
                "The passage becomes narrower on the way out, because the wet gravel on the floor is churned up and piled higher by the team going in.",
                "The team will have to stop and rest at every body length, because nobody can drag a loaded sled sixty feet without a breather."
              ],
              "answer": 0,
              "hint": "One paragraph gives you the two timings side by side. The other tells you what will be in the passage on the way out that was not in it on the way in.",
              "skill": "Reading between the lines",
              "evidence": "The injured caver will ride through the crawl on his back, pulled by two people ahead and pushed by two behind, with a foam pad under him and his ankle splinted to the sled"
            }
          ]
        }
      },
      "navByGrade": {
        "3": {
          "lesson": {
            "title": "Grade 3 numbers",
            "points": [
              "Multiplication facts: 3 × 9 means 3 groups of 9.",
              "Sharing equally is dividing.",
              "Adding three numbers: add two, then add the third.",
              "Fractions with the same bottom: add or take away the tops; the bottom stays."
            ],
            "example": "3 × 9 = 27."
          },
          "problems": [
            {
              "q": "The team crawled 8 feet yesterday and three times as far today. How many feet today?",
              "answer": "24",
              "hint": "Three times 8: 8 + 8 + 8.",
              "skill": "Multiplying"
            },
            {
              "q": "The team splits a 32-foot crawl into stretches of 8 feet. How many stretches is that?",
              "answer": "4",
              "hint": "How many 8s make 32?",
              "skill": "Dividing"
            },
            {
              "q": "The team's headlamp batteries have 139 minutes of light. The team uses 67 minutes. How many minutes of light are left?",
              "answer": "72",
              "hint": "139 − 67.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "6/8 of the day's work was done yesterday. What fraction is still to do? (write a fraction)",
              "answer": "2/8",
              "hint": "The whole job is 8/8. Take 6/8 off it.",
              "skill": "Fractions"
            },
            {
              "q": "The tally stood at 491 minutes and 500 more were added. What is the tally now?",
              "answer": "991",
              "hint": "491 + 500.",
              "skill": "Adding and subtracting"
            }
          ]
        },
        "6": {
          "lesson": {
            "title": "Grade 6 numbers",
            "points": [
              "Mixed ÷ mixed: make both improper. 4 1/2 ÷ 1 1/2 = 9/2 ÷ 3/2 = 9/2 × 2/3 = 3.",
              "Percent of a number: turn the percent into a fraction of 100.",
              "A ratio tells you how many of one thing for each group of the other.",
              "Order of operations: parentheses, then multiply and divide, then add and subtract."
            ],
            "example": "4 + 6 × 3 = 22: multiply first, then add."
          },
          "problems": [
            {
              "q": "The rescue will take 6 2/3 hours. Each headlamp battery lasts 1 1/3 hours. How many batteries does one headlamp need?",
              "answer": "5",
              "hint": "Make both improper: 20/3 ÷ 4/3. Then multiply by the flip: 20/3 × 3/4.",
              "skill": "Fractions"
            },
            {
              "q": "12 of the 120 minutes are set aside. What percent is that? (write just the number)",
              "answer": "10",
              "accept": [
                "10%"
              ],
              "hint": "12 out of 120, then out of 100.",
              "skill": "Ratios and percent"
            },
            {
              "q": "Every 1 foot of passage takes 3 minutes to crawl. The team crawls for 27 minutes. How many feet of passage?",
              "answer": "9",
              "hint": "27 ÷ 3 = 9 groups. Each group has 1 foot of passage.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The team works out 8 + 5 × 11. What is it?",
              "answer": "63",
              "hint": "Multiply before you add.",
              "skill": "Order of operations"
            },
            {
              "q": "Solve for x: 750 − x = 386",
              "answer": "364",
              "hint": "x is what is left when 386 is taken off 750.",
              "skill": "Equations"
            }
          ]
        },
        "7": {
          "lesson": {
            "title": "Grade 7 numbers",
            "points": [
              "A unit rate is the total divided by how many: 18 ÷ 4 = 4.5 for one.",
              "Percent change: find that percent of the starting number, then add it on or take it off.",
              "Two minus signs make a plus: (−3) × (−5) = 15, and (−15) ÷ (−3) = 5. One minus sign makes a minus.",
              "A two-step equation: undo the adding first, then undo the multiplying."
            ],
            "example": "33 − 3x = 9, so 3x = 24, so x = 8."
          },
          "problems": [
            {
              "q": "One knot needs 0.75 minutes. How many minutes do 12 knots need?",
              "answer": "9",
              "hint": "12 × 0.75.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The trip through the crawl took 60 minutes the first time and 45 minutes the second. By what percent did the time change? (write just the number)",
              "answer": "25",
              "accept": [
                "25%",
                "-25",
                "−25",
                "-25%",
                "−25%"
              ],
              "hint": "The change is 15. 15 out of 60, then out of 100.",
              "skill": "Ratios and percent"
            },
            {
              "q": "After the storm the cave river falls 7 inches every hour. Write that as −7 an hour. How many inches higher was the river 11 hours ago? Time before now counts as negative. Work it out as (−7) × (−11).",
              "answer": "77",
              "hint": "7 × 11, and two minus signs make a plus.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: 50 − 4x = 10",
              "answer": "10",
              "hint": "Move 4x to the right and 10 to the left: 4x = 40.",
              "skill": "Equations"
            },
            {
              "q": "A round hole in the rock has a radius of 20 inches. Using 3.14 for pi, how many inches is it around the edge?",
              "answer": "125.6",
              "hint": "Across is 2 × 20 = 40. Then × 3.14.",
              "skill": "Area and perimeter"
            }
          ]
        },
        "8": {
          "lesson": {
            "title": "Grade 8 numbers",
            "points": [
              "A straight-line rule is y = mx + b: b is where you start, m is what you add each step.",
              "A square root undoes squaring. If a square has area 49, its side is 7.",
              "Pythagoras: in a right triangle a² + b² = c², and c is always the longest side.",
              "With x on both sides, move all the x's to one side first, then all the plain numbers to the other."
            ],
            "example": "Start with 60 and use 4 an hour: after 9 hours, 60 − 4 × 9 = 24."
          },
          "problems": [
            {
              "q": "The team starts with 47 glow sticks and uses 5 every hour. How many are left after 7 hours?",
              "answer": "12",
              "hint": "5 × 7 = 35 used, taken off 47.",
              "skill": "Linear relationships"
            },
            {
              "q": "What is the square root of 225?",
              "answer": "15",
              "hint": "What number times itself makes 225?",
              "skill": "Powers and roots"
            },
            {
              "q": "A 17-foot rope runs from the top of a post to a point 15 feet away on the ground. How tall is the post, in feet?",
              "answer": "8",
              "hint": "a² = c² − b² = 289 − 225 = 64. Then take the square root.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "Solve for x: 9x = 5x + 32",
              "answer": "8",
              "hint": "Take 5x off both sides: 4x = 32. Then divide by 4.",
              "skill": "Equations"
            },
            {
              "q": "A round tank has a radius of 10 feet and holds 628 cubic feet. Using 3.14 for pi, how many feet deep is it?",
              "answer": "2",
              "hint": "The floor's area is 3.14 × 10 × 10 = 314. Divide the volume by that.",
              "skill": "Area and perimeter"
            }
          ]
        }
      },
      "orders": {
        "lesson": {
          "title": "Order matters",
          "points": [
            "Do the steps in the order given.",
            "Write each result down."
          ],
          "example": "'Double it, then add 6' is not 'add 6, then double it'."
        },
        "skill": "Following directions",
        "steps": [
          "Write the height of the crawl in inches: 18.",
          "Add the number of rescuers who pull the stretcher from in front: 2.",
          "Add the number who push it from behind: 2.",
          "Multiply by the minutes the crawl takes going in: 20.",
          "Divide by the minutes it will take to come back out with the stretcher: 60. Type the result rounded down to a whole number."
        ],
        "prompt": "Your answer:",
        "answer": "7",
        "hint": "Steps 1 to 3 all add together before anything is multiplied. Step 5 will not divide evenly, and it tells you what to do with what is left over."
      }
    },
    {
      "id": "cave-3",
      "title": "The Drop",
      "recon": {
        "lesson": {
          "title": "Safety rules have reasons",
          "points": [
            "Every rule in the log comes with a reason. Match them.",
            "'How many' questions about anchors or knots want the exact count.",
            "A word about rope gear is defined by what it does."
          ],
          "example": "'Wear gloves, always, because the rope burns.' What is the rule? Gloves. Why? The rope burns."
        },
        "title": "Rescue Log: Forty Feet of Air",
        "passage": [
          "The second chamber ends at a ledge, and below the ledge is forty feet of nothing: a vertical drop into the third chamber, smooth and wet. The sound of the river comes up from somewhere far below it. No one climbs this. The team rigs a rope, and the rope is the only thing between the ledge and the floor. So the rigging is done slowly, out loud, with two people checking every piece.",
          "The rope is anchored to two separate bolts in solid rock, never one, because a single anchor can fail and two almost never fail at once. Each rescuer clips a descender onto the rope, a metal device that lets the rope slide through it under control. Then they walk backward off the ledge, feeding rope through the descender to lower themselves at a pace they choose. Coming back up they will use ascenders, metal clamps that grip the rope when weight is on them and slide freely when it is not. That way a caver can climb a rope that hangs free. The caver goes up one step at a time. It is like a very slow ladder.",
          "The stretcher will come up this drop on a separate hauling rope, pulled by four people at the top using a pulley. One rescuer rides beside it to keep it from turning. That is the hardest hour of the rescue, and it is why the team carried three hundred feet of rope for a forty-foot drop. The team leader ties the last knot, calls the check, and is the first one over the edge. From the bottom, the helmet lamp at the top looks like a star."
        ],
        "questions": [
          {
            "q": "How far is the drop?",
            "choices": [
              "A foot",
              "A mile",
              "Forty feet",
              "A yard"
            ],
            "answer": 2,
            "hint": "The first sentence of paragraph 1.",
            "skill": "Finding details"
          },
          {
            "q": "How many anchors hold the rope, and why?",
            "choices": [
              "Two, because a single anchor can fail and two almost never fail at once",
              "One, to save time",
              "Three, one for each light",
              "Four, one for each hauler"
            ],
            "answer": 0,
            "hint": "The first sentence of paragraph 2.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 2, what is an 'ascender'?",
            "choices": [
              "The pulley the team uses at the top to haul the stretcher",
              "A metal device that lets the rope slide through it under control on the way down the drop",
              "A clamp that grips the rope under weight and slides when unweighted, used to climb",
              "A bolt set in solid rock that the rope is tied to"
            ],
            "answer": 2,
            "hint": "The sentence 'they will use ascenders, metal clamps that...'.",
            "skill": "Word meanings"
          },
          {
            "q": "Why did the team carry three hundred feet of rope for a forty-foot drop?",
            "choices": [
              "Because the rope has to be doubled over for the climb",
              "Because the stretcher needs its own hauling rope and a pulley system",
              "Because two anchors each need a rope of their own",
              "Because a rope has to reach from the ledge all the way down to the river below"
            ],
            "answer": 1,
            "hint": "Paragraph 3, the first three sentences.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 2 mostly about?",
            "choices": [
              "How the rope is anchored and how the team goes down and up it",
              "The sound of the river coming up from somewhere far below the ledge",
              "The team leader",
              "The star"
            ],
            "answer": 0,
            "hint": "Paragraph 2 explains anchors, descenders and ascenders.",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Rope math",
          "points": [
            "Subtracting decimals: line up the points. 4.2 − 1.35 is 4.20 − 1.35 = 2.85.",
            "Feet of drop ÷ feet per step: steps up.",
            "People hauling times pounds each: pull.",
            "Two-step: descents times minutes, then total."
          ],
          "example": "A 30-foot drop at 2 feet a step is 30 ÷ 2 = 15 steps."
        },
        "problems": [
          {
            "q": "A rescuer's lamp battery reads 3.7 volts when full and 2.95 volts now. How many volts has it dropped? (write a decimal)",
            "answer": "0.75",
            "hint": "Line up the points: 3.70 − 2.95.",
            "skill": "Decimals"
          },
          {
            "q": "Climbing with ascenders, a caver gains 2 feet per step. How many steps up the 40-foot drop?",
            "answer": "20",
            "hint": "40 ÷ 2.",
            "skill": "Dividing"
          },
          {
            "q": "Four haulers each pull with 50 pounds of force. How many pounds of pull is that together?",
            "answer": "200",
            "hint": "4 × 50.",
            "skill": "Multiplying"
          },
          {
            "q": "Each of the 8 rescuers takes 3 minutes to descend the drop. How many minutes until the whole team is down?",
            "answer": "24",
            "hint": "8 × 3.",
            "skill": "Multiplying"
          },
          {
            "q": "The rope is anchored to 2 bolts. The pulley system for the stretcher uses 3 more. How many bolts in all?",
            "answer": "5",
            "hint": "2 + 3.",
            "skill": "Adding and subtracting"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "What is the paragraph for?",
            "points": [
              "Paragraphs are built in shapes: cause and effect, comparison, a sequence in order, or a problem with the answer to it.",
              "Shape words give it away. 'Because' and 'so' mean cause. 'But' and 'while', and two sentences that mirror each other, mean comparison. 'First, then, at one forty' means sequence.",
              "Naming the shape is not the same as retelling the paragraph. A choice that only repeats the content has named nothing."
            ],
            "example": "'A kite flies because the wind pushes it. A glider flies because it is falling forward.' Same opening, opposite endings. That paragraph is a comparison and nothing else."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea of the whole report?",
              "choices": [
                "An ascender is a metal clamp that grips the rope when weight is on it and slides freely when it is not.",
                "Climbing equipment has improved so much over the last century that cavers can now trust a single rope.",
                "Where a rope is all that holds a person up, everything is doubled and checked, and far more rope is carried than the drop is deep.",
                "The team climbs down the drop first and rigs the rope afterward, once everyone is at the bottom."
              ],
              "answer": 2,
              "hint": "Two bolts, two people checking, two ropes, three hundred feet for a drop of forty. Ask what all that doubling is answering.",
              "skill": "Central idea and evidence",
              "evidence": "The team rigs a rope, and the rope is the only thing between the ledge and the floor. So the rigging is done slowly, out loud, with two people checking every piece."
            },
            {
              "q": "Claim: the team plans on the assumption that a piece of gear could fail. Which sentence from the report best supports that claim?",
              "choices": [
                "The rope is anchored to two separate bolts in solid rock, never one, because a single anchor can fail and two almost never fail at once.",
                "No one climbs this.",
                "The team leader ties the last knot, calls the check, and is the first one over the edge.",
                "From the bottom, the helmet lamp at the top looks like a star."
              ],
              "answer": 0,
              "hint": "Being careful and planning for a failure are two different things. Find the sentence that says out loud what would happen if a part gave way.",
              "skill": "Finding details",
              "evidence": "The rope is anchored to two separate bolts in solid rock, never one, because a single anchor can fail and two almost never fail at once."
            },
            {
              "q": "How is the second paragraph organized?",
              "choices": [
                "It lists the causes of an anchor bolt pulling out of the rock.",
                "It tells the story of a drop that went badly wrong.",
                "It sets two pieces of gear against each other: one for going down, one for coming back up.",
                "It gives the steps of rigging the rope in the order they happen, from the two bolts to the last knot and the check."
              ],
              "answer": 2,
              "hint": "Two sentences each name a metal device, and then go in opposite directions. That pairing is the shape of the paragraph.",
              "skill": "Author's purpose and structure",
              "evidence": "Coming back up they will use ascenders, metal clamps that grip the rope when weight is on them and slide freely when it is not"
            },
            {
              "q": "The report says that below the ledge is 'forty feet of nothing'. What does that phrase mean as it is used here?",
              "choices": [
                "A stretch of passage that the team's map does not show",
                "Open air, with nothing a person could hold on to or stand on",
                "A pool of water forty feet deep, too deep for anyone to wade across",
                "A section of the cave with nothing in it worth exploring"
              ],
              "answer": 1,
              "hint": "Read what the rest of that sentence calls it, then the short line about who climbs it. The 'nothing' is not about being empty of interest.",
              "skill": "Word meanings",
              "evidence": "below the ledge is forty feet of nothing: a vertical drop into the third chamber, smooth and wet"
            },
            {
              "q": "Paragraphs 2 and 3 together explain why the team carried three hundred feet of rope for a drop of forty feet. Why did they?",
              "choices": [
                "Lowering people and hauling the stretcher need separate ropes, and nothing here can be climbed instead of rigged.",
                "The drop turned out to be a great deal deeper than forty feet.",
                "The rope has to reach all the way down to the river at the bottom of the cave, which is five hundred feet below the entrance.",
                "Rope is used up by a descent and thrown away afterward."
              ],
              "answer": 0,
              "hint": "One paragraph tells you how many places the rope is anchored and what people do on it. The other says the stretcher needs a rope of its own. Add up the jobs, not the feet.",
              "skill": "Reading between the lines",
              "evidence": "The stretcher will come up this drop on a separate hauling rope, pulled by four people at the top using a pulley."
            }
          ]
        }
      },
      "navByGrade": {
        "3": {
          "lesson": {
            "title": "Grade 3 numbers",
            "points": [
              "Multiplication facts: 6 × 7 means 6 groups of 7.",
              "Sharing equally is dividing.",
              "Adding three numbers: add two, then add the third.",
              "Fractions with the same bottom: add the tops."
            ],
            "example": "6 × 7 = 42."
          },
          "problems": [
            {
              "q": "The team lays the anchors out in 5 rows of 9. How many anchors is that?",
              "answer": "45",
              "hint": "5 × 9.",
              "skill": "Multiplying"
            },
            {
              "q": "81 anchors are set out in 9 equal rows. How many anchors are in each row?",
              "answer": "9",
              "hint": "81 split into 9 equal parts.",
              "skill": "Dividing"
            },
            {
              "q": "The log shows 130 anchors, then 68 more are added and 80 are taken off. What does the log show now?",
              "answer": "118",
              "hint": "Add 130 and 68 first, then take 80 off.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "Add: 2/4 + 1/4 (write a fraction)",
              "answer": "3/4",
              "hint": "Same bottom. 2 + 1 on top.",
              "skill": "Fractions"
            },
            {
              "q": "An anchor mat is 9 feet wide and 5 feet long. How many feet is it all the way around the edge?",
              "answer": "28",
              "hint": "Two sides of 9 and two sides of 5: 9 + 9 + 5 + 5.",
              "skill": "Area and perimeter"
            }
          ]
        },
        "6": {
          "lesson": {
            "title": "Grade 6 numbers",
            "points": [
              "Dividing by a decimal: move the point in both numbers the same number of places until you divide by a whole number. 7.2 ÷ 0.8 is 72 ÷ 8 = 9.",
              "Percent of a number: turn the percent into a fraction of 100.",
              "A ratio tells you how many of one thing for each group of the other.",
              "Order of operations: parentheses, then multiply and divide, then add and subtract."
            ],
            "example": "(2 + 6) × 3 = 24: parentheses first, then multiply."
          },
          "problems": [
            {
              "q": "The team has 12.15 minutes of crawling. Each chamber takes 0.45 minutes. How many chambers is that enough for?",
              "answer": "27",
              "hint": "Move both points 2 places to the right: 1215 ÷ 45.",
              "skill": "Decimals"
            },
            {
              "q": "75% of the anchors counted is 150. How many were counted in all?",
              "answer": "200",
              "hint": "150 is 75 hundredths of the whole: 150 ÷ 75 × 100.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The team counts 16 feet of rope and 40 anchors. In its simplest form, what is the ratio of feet of rope to anchors? (write it like 2:3)",
              "answer": "2:5",
              "accept": [
                "2 to 5"
              ],
              "hint": "Divide both by 8.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The team works out (5 + 4) × 7. What is it?",
              "answer": "63",
              "hint": "Parentheses first, then multiply.",
              "skill": "Order of operations"
            },
            {
              "q": "Solve for x: 3x = 1,251",
              "answer": "417",
              "hint": "Divide both sides by 3.",
              "skill": "Equations"
            }
          ]
        },
        "7": {
          "lesson": {
            "title": "Grade 7 numbers",
            "points": [
              "A unit rate is the total divided by how many: 18 ÷ 4 = 4.5 for one.",
              "Percent change: find that percent of the starting number, then add it on or take it off.",
              "Below zero, going up adds and going down subtracts. Walk the number line one step at a time.",
              "A two-step equation: undo the last step first. In (x + 3) × 4 = 28, divide by 4, then take off 3."
            ],
            "example": "(x + 3) × 4 = 28, so x + 3 = 7, so x = 4."
          },
          "problems": [
            {
              "q": "The team has 36 minutes to spend and each knot takes 2.25 minutes. How many knots is that enough for?",
              "answer": "16",
              "hint": "36 ÷ 2.25.",
              "skill": "Ratios and percent"
            },
            {
              "q": "A count of anchors fell by 25% to 180. What was it before?",
              "answer": "240",
              "hint": "180 is 75% of the old count.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The supply ledger shows 17 anchors. The team signs out 29 anchors, borrowing the extra from another team. What does the ledger read now?",
              "answer": "-12",
              "accept": [
                "−12"
              ],
              "hint": "17 takes it to 0, and 12 more comes out below zero.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: (x + 21) × 8 = 184",
              "answer": "2",
              "hint": "Divide both sides by 8 first, then take 21 off.",
              "skill": "Equations"
            },
            {
              "q": "A model is built at 1 to 5. The anchor on the model is 3 inches. How many inches is the real one?",
              "answer": "15",
              "hint": "Every inch on the model is 5 inches for real.",
              "skill": "Ratios and percent"
            }
          ]
        },
        "8": {
          "lesson": {
            "title": "Grade 8 numbers",
            "points": [
              "A straight-line rule is y = mx + b: b is where you start, m is what you add each step.",
              "A square root undoes squaring. If a square has area 49, its side is 7.",
              "Pythagoras: in a right triangle a² + b² = c², and c is always the longest side.",
              "With x on both sides, move all the x's to one side first, then all the plain numbers to the other."
            ],
            "example": "y = 4x + 3 when x = 6: 4 × 6 + 3 = 27."
          },
          "problems": [
            {
              "q": "The count of anchors follows the rule y = 9x + 12, where x is the hour. What is y when x = 5?",
              "answer": "57",
              "hint": "Put 5 in for x: 9 × 5 + 12.",
              "skill": "Linear relationships"
            },
            {
              "q": "What is 7² + 7²?",
              "answer": "98",
              "hint": "7 × 7 = 49 and 7 × 7 = 49. Add them.",
              "skill": "Powers and roots"
            },
            {
              "q": "A 37-foot cable reaches the top of a 12-foot post. How far is the bottom end of the cable from the base, in feet?",
              "answer": "35",
              "hint": "b² = c² − a² = 1369 − 144 = 1225. Then take the square root.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "Solve for x: 7x + 24 − 5x = 32",
              "answer": "4",
              "hint": "Collect the x's first: 2x + 24 = 32.",
              "skill": "Equations"
            },
            {
              "q": "What is 6 × 10^4 ÷ 10^3?",
              "answer": "60",
              "hint": "Dividing subtracts the powers: 10^4 ÷ 10^3 = 10^1. So 6 × 10.",
              "skill": "Powers and roots"
            }
          ]
        }
      },
      "orders": {
        "lesson": {
          "title": "Overrides",
          "points": [
            "A later step can override an earlier one. Skip the step it names.",
            "Sort first, then calculate."
          ],
          "example": "'Divide by 4. A later step says skip that.' Carry your total past it unchanged."
        },
        "skill": "Following directions",
        "steps": [
          "Write the height of the drop below the ledge in feet: 40.",
          "Add the feet of rope the team carried down to it: 300.",
          "Divide by the number of anchor bolts the rope is tied to: 2.",
          "Subtract the number of rescuers hauling at the top: 4.",
          "The rigging check overrides step 3: rope is never shared out between the anchors, because both hold all of it. Skip step 3 and work step 4 on your step 2 total.",
          "Type the number you are left holding."
        ],
        "prompt": "Your answer:",
        "answer": "336",
        "hint": "Step 5 lifts step 3 out of the chain. The number you subtract from in step 4 is the one you had at the end of step 2."
      }
    },
    {
      "id": "cave-4",
      "title": "The River",
      "recon": {
        "lesson": {
          "title": "What lives in the dark",
          "points": [
            "A log that describes animals gives facts about them. Each fact is a detail.",
            "'Why not' questions want the reason the team avoids something.",
            "A word about the animals is defined by what they do."
          ],
          "example": "'Owls hunt by hearing the mouse move.' How? By hearing."
        },
        "title": "Rescue Log: Fifty-Four Degrees",
        "passage": [
          "The third chamber floor is the river: a stream of clear water, knee deep, flowing across the cave from one wall to the other and disappearing under a low arch. It is fifty-four degrees, the same as the air, the same as every cave in this part of the country, because a cave sits at the average temperature of the land above it all year. Fifty-four feels cool for an hour. After six hours of sitting still on wet rock, it is the temperature that is truly dangerous, and the caver has been down here since eight this morning.",
          "The team wades the river with boots on. They hold a rope strung wall to wall. That is because a slip on a slick stone in the dark is how this rescue started. On the far side the passage opens into the fourth chamber, and the ceiling of the fourth chamber is alive. Thousands of bats hang there in a rustling brown mass. The floor beneath them is soft with their droppings, which cavers call guano. Bats find their way in the pitch dark by calling out and listening for the echo. That trick is called echolocation. They will not fly into a person no matter how close the person gets.",
          "The team crosses the bat chamber quietly and without pointing lamps at the ceiling. That is because bats woken in the day burn energy they need, and a colony disturbed too often will leave the cave for good. On the far side the passage tilts down into the slope where the caver fell. The team leader blows three short blasts on a whistle. From below, faint, three blasts come back. He is awake."
        ],
        "questions": [
          {
            "q": "How deep is the river?",
            "choices": [
              "Ankle deep",
              "Waist deep",
              "Over the head",
              "Knee deep"
            ],
            "answer": 3,
            "hint": "The first sentence of paragraph 1.",
            "skill": "Finding details"
          },
          {
            "q": "How do bats find their way in the dark?",
            "choices": [
              "They see very well",
              "They follow the sound of the river running below",
              "They feel the walls",
              "They call out and listen for the echo"
            ],
            "answer": 3,
            "hint": "Paragraph 2, the sentence with 'echo'.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 2, what is 'guano'?",
            "choices": [
              "A rock",
              "Cave mud",
              "A passage",
              "Bat droppings"
            ],
            "answer": 3,
            "hint": "The sentence 'soft with their droppings, which cavers call guano'.",
            "skill": "Word meanings"
          },
          {
            "q": "Why does the team avoid pointing lamps at the ceiling?",
            "choices": [
              "Because a light shone upward makes it hard to see the floor",
              "Because the ceiling of the fourth chamber is far too low for a helmet lamp to reach the far end",
              "Because a bat that is startled will fly straight at a light, and the team is carrying three each",
              "Because waking the bats makes them burn energy and could drive the colony out of the cave"
            ],
            "answer": 3,
            "hint": "The first two sentences of paragraph 3.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 1 mostly about?",
            "choices": [
              "The arch",
              "The river and why the cave's cold is dangerous over time",
              "The bats",
              "The whistle"
            ],
            "answer": 1,
            "hint": "Paragraph 1 describes the river and then explains the temperature and the hours.",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Cold math",
          "points": [
            "Different bottoms: make them the same first. 1/2 + 1/6 = 3/6 + 1/6 = 4/6.",
            "How many degrees colder: take the colder number from the warmer one.",
            "Bats in a colony: thousands, so rows × bats per row.",
            "Seconds to cross: feet times the seconds each foot takes."
          ],
          "example": "50 rows of 20 bats is 50 × 20 = 1,000 bats."
        },
        "problems": [
          {
            "q": "Normal body temperature is about 98 degrees. The cave is 54. How many degrees colder is the cave than a body?",
            "answer": "44",
            "hint": "98 − 54.",
            "skill": "Adding and subtracting"
          },
          {
            "q": "The team spent 1/4 of the hour crossing the river and 1/3 of it warming up afterward. How much of the hour is that? (write a fraction)",
            "answer": "7/12",
            "hint": "Make the bottoms the same: 1/4 is 3/12 and 1/3 is 4/12. Then add the tops.",
            "skill": "Fractions"
          },
          {
            "q": "The bat colony hangs in about 40 rows with 150 bats in each row. About how many bats is that?",
            "answer": "6000",
            "accept": [
              "6,000"
            ],
            "hint": "40 × 150.",
            "skill": "Multiplying"
          },
          {
            "q": "The river crossing is 30 feet wide. The team wades at 1 foot every 2 seconds. How many seconds does the crossing take?",
            "answer": "60",
            "hint": "30 × 2.",
            "skill": "Multiplying"
          },
          {
            "q": "The whistle signal is 3 blasts. The leader sends it once and the caver sends it back once. How many blasts in all?",
            "answer": "6",
            "hint": "3 + 3.",
            "skill": "Adding and subtracting"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "One word, one sentence, one job",
            "points": [
              "A word in a report is doing a particular job in a particular sentence. Work out the job, not the dictionary entry.",
              "The sentence usually carries its own answer, either set against an opposite or explained in the words right after it.",
              "Try your choice back in the sentence. If it now makes the report say something it never said, it is the wrong choice."
            ],
            "example": "'The road was a river.' Nobody is swimming. Water was running down it, deep and fast, and the line after it will tell you why."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea that develops across the whole report?",
              "choices": [
                "Bats find their way in the dark by calling out and listening for the echo, a trick called echolocation.",
                "Wild animals should always be left completely alone by people, even when a person's life is at stake.",
                "The cave grows colder and colder the deeper the team goes into it, which is what puts the caver in danger.",
                "The team's every move here is set by two things it cannot argue with: a temperature that never changes, and animals that must not be disturbed."
              ],
              "answer": 3,
              "hint": "A number that never changes, a river to wade, and a ceiling full of animals. Find the choice that covers all three rather than the most interesting single fact.",
              "skill": "Central idea and evidence",
              "evidence": "After six hours of sitting still on wet rock, it is the temperature that is truly dangerous, and the caver has been down here since eight this morning."
            },
            {
              "q": "Claim: the cold, not the fall, is what will do the waiting caver real harm. Which sentence from the report best supports that claim?",
              "choices": [
                "It is fifty-four degrees, the same as the air, the same as every cave in this part of the country, because a cave sits at the average temperature of the land above it all year.",
                "Fifty-four feels cool for an hour.",
                "On the far side the passage opens into the fourth chamber, and the ceiling of the fourth chamber is alive.",
                "After six hours of sitting still on wet rock, it is the temperature that is truly dangerous, and the caver has been down here since eight this morning."
              ],
              "answer": 3,
              "hint": "Two of these give you the number without saying what it does to a person over time. The claim is about harm, so find the sentence that names it.",
              "skill": "Finding details",
              "evidence": "After six hours of sitting still on wet rock, it is the temperature that is truly dangerous, and the caver has been down here since eight this morning."
            },
            {
              "q": "Why does the report stop in the middle of a rescue to explain how bats find their way in the dark?",
              "choices": [
                "To explain the method the team uses to find its own way in the dark.",
                "To warn the team that the bats may fly into their helmet lamps.",
                "To compare the bats with the injured caver waiting below them.",
                "To show that a chamber full of bats is no hazard to the team, so the only care needed is care for the bats themselves."
              ],
              "answer": 3,
              "hint": "Read the words that come straight after the explanation. They tell you what the bats will not do. Then look at what the third paragraph asks the team to be careful about instead.",
              "skill": "Author's purpose and structure",
              "evidence": "Bats find their way in the pitch dark by calling out and listening for the echo. That trick is called echolocation. They will not fly into a person no matter how close the person gets."
            },
            {
              "q": "The report says the ceiling of the fourth chamber 'is alive'. What does that mean as it is used here?",
              "choices": [
                "The rock itself is slowly growing downward, a little more of it every year",
                "Water is running down the ceiling and dripping off it",
                "The ceiling is warmer than the rest of the cave and gives off a faint heat",
                "The rock is covered with animals, so the whole ceiling seems to move"
              ],
              "answer": 3,
              "hint": "The sentence straight after tells you what is up there and what it is doing. Rock does not rustle.",
              "skill": "Word meanings",
              "evidence": "Thousands of bats hang there in a rustling brown mass. The floor beneath them is soft with their droppings, which cavers call guano."
            },
            {
              "q": "Paragraphs 1 and 3 together explain why the team crosses the bat chamber quietly instead of running through it. Why do they?",
              "choices": [
                "Running would make far too much noise on the soft floor, and the noise would carry down to the slope below.",
                "The caver is in real danger from the cold, and the team slows down anyway, because a colony disturbed too often abandons the cave for good.",
                "The bats would fly into the team members if anyone moved quickly underneath them in the dark.",
                "The passage beyond the bats is too narrow for anyone to run through, so the team has to slow down."
              ],
              "answer": 1,
              "hint": "Paragraph one tells you how much of a hurry the team is in. Paragraph three tells you what they do anyway, and why. The answer is the pull between those two.",
              "skill": "Reading between the lines",
              "evidence": "because bats woken in the day burn energy they need, and a colony disturbed too often will leave the cave for good"
            }
          ]
        }
      },
      "navByGrade": {
        "3": {
          "lesson": {
            "title": "Grade 3 numbers",
            "points": [
              "Multiplication facts: 4 × 6 means 4 groups of 6.",
              "Sharing equally is dividing.",
              "Adding three numbers: add two, then add the third.",
              "Fractions: the bottom is how many equal parts; the top is how many are done."
            ],
            "example": "4 × 6 = 24."
          },
          "problems": [
            {
              "q": "Every crossing needs 3 feet of rope, and there are 9 crossings. How many feet of rope is that?",
              "answer": "27",
              "hint": "9 groups of 3, so 9 × 3.",
              "skill": "Multiplying"
            },
            {
              "q": "The team splits 54 feet in half. How many feet is one half?",
              "answer": "27",
              "hint": "Half of 54.",
              "skill": "Dividing"
            },
            {
              "q": "The team needs 500 feet of rope and has 272. How many more feet are needed?",
              "answer": "228",
              "hint": "500 − 272.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "The day's work is cut into 8 equal parts and the team has finished 3 of them. What fraction is done? (write a fraction)",
              "answer": "3/8",
              "hint": "3 parts out of 8.",
              "skill": "Fractions"
            },
            {
              "q": "The team counts 272 bats, then 20 more. How many bats is that?",
              "answer": "292",
              "hint": "272 + 20.",
              "skill": "Adding and subtracting"
            }
          ]
        },
        "6": {
          "lesson": {
            "title": "Grade 6 numbers",
            "points": [
              "A rate for one hour: amount ÷ time. 1/3 of a mile in 1/2 an hour is 1/3 × 2 = 2/3 of a mile an hour.",
              "Percent of a number: turn the percent into a fraction of 100.",
              "A ratio tells you how many of one thing for each group of the other.",
              "Order of operations: parentheses, then multiply and divide, then add and subtract."
            ],
            "example": "4 × 6 − 2 × 5 = 14: both multiplications first, then subtract."
          },
          "problems": [
            {
              "q": "The rescuers get 3/4 of the way through the river passage in 7/8 of an hour. At that rate, how much of the passage would they cover in one hour? (write a fraction)",
              "answer": "6/7",
              "hint": "For one hour, divide the amount by the time: 3/4 ÷ 7/8 = 3/4 × 8/7. Then simplify.",
              "skill": "Fractions"
            },
            {
              "q": "Of 60 batteries, 75% are struck off the list. How many are left on it?",
              "answer": "15",
              "hint": "75% of 60 is 45. Take that off 60.",
              "skill": "Ratios and percent"
            },
            {
              "q": "Two teams count 40 bats between them in the ratio 3 to 5. How many bats are in the smaller count?",
              "answer": "15",
              "hint": "3 + 5 = 8 parts. 40 ÷ 8 = 5 for one part.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The team works out 3 × 9 − 1 × 2. What is it?",
              "answer": "25",
              "hint": "Do both multiplications first, then subtract.",
              "skill": "Order of operations"
            },
            {
              "q": "Solve for x: x + 334 + 16 = 600",
              "answer": "250",
              "hint": "Add 334 and 16 first, then take that off 600.",
              "skill": "Equations"
            }
          ]
        },
        "7": {
          "lesson": {
            "title": "Grade 7 numbers",
            "points": [
              "A unit rate is the total divided by how many: 18 ÷ 4 = 4.5 for one.",
              "Percent change: find that percent of the starting number, then add it on or take it off.",
              "Two minus signs make a plus: (−3) × (−5) = 15, and (−15) ÷ (−3) = 5. One minus sign makes a minus.",
              "A two-step equation: undo the outside step first. In 3(x + 2) = 27, divide by 3, then take off 2."
            ],
            "example": "3(x + 2) = 27, so x + 2 = 9, so x = 7."
          },
          "problems": [
            {
              "q": "The team tied 8 knots in 4 minutes. At the same rate, how many minutes would 16 knots take?",
              "answer": "8",
              "hint": "One knot takes 4 ÷ 8 = 0.5. Then × 16.",
              "skill": "Ratios and percent"
            },
            {
              "q": "10% of the team's 240 feet of rope was lost in the river. How many feet of rope was that?",
              "answer": "24",
              "hint": "10% of 240: 10/100 × 240.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The rescuers lower the stretcher down the drop, a change of −72 feet, in equal stages of −9 feet. How many stages is that? Work it out as (−72) ÷ (−9).",
              "answer": "8",
              "hint": "72 ÷ 9, and two minus signs make a plus.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: 6(x + 24) = 174",
              "answer": "5",
              "hint": "Divide both sides by 6 to get x + 24 = 29.",
              "skill": "Equations"
            },
            {
              "q": "A square sheet is drawn at a scale of 1 to 4. On the drawing each side is 5 inches. How many inches is the real sheet around the edge?",
              "answer": "80",
              "hint": "Find one real side first (5 × 4), then add up four sides.",
              "skill": "Area and perimeter"
            }
          ]
        },
        "8": {
          "lesson": {
            "title": "Grade 8 numbers",
            "points": [
              "A straight-line rule is y = mx + b: b is where you start, m is what you add each step.",
              "A square root undoes squaring. If a square has area 49, its side is 7.",
              "Pythagoras: in a right triangle a² + b² = c², and c is always the longest side.",
              "With x on both sides, move all the x's to one side first, then all the plain numbers to the other."
            ],
            "example": "Start at 7 and add 3 each step: the 6th number is 7 + 3 × 5 = 22."
          },
          "problems": [
            {
              "q": "The team marks the passage every 5 feet: 5, 10, 15, 20, and on. What is the 12th mark in the list?",
              "answer": "60",
              "hint": "It starts at 5 and adds 5 each step. The number you want is 11 steps on from 5.",
              "skill": "Linear relationships"
            },
            {
              "q": "What is 14² − 14?",
              "answer": "182",
              "hint": "14 × 14 = 196, then take 14 off.",
              "skill": "Powers and roots"
            },
            {
              "q": "A right triangle has short sides of 8 and 15 feet. How long is its longest side, in feet?",
              "answer": "17",
              "hint": "8² + 15² = 289. The longest side is the square root of that.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "Solve for x: 7x − 5x = 14",
              "answer": "7",
              "hint": "7 − 5 = 2, so 2x = 14.",
              "skill": "Equations"
            },
            {
              "q": "A round tank is 8 feet across and 7 feet deep. Using 3.14 for pi, what is its volume in cubic feet? (The radius is half the distance across.)",
              "answer": "351.68",
              "hint": "The radius is 8 ÷ 2 = 4. Volume = 3.14 × radius × radius × depth: 3.14 × 4 × 4 × 7.",
              "skill": "Area and perimeter"
            }
          ]
        }
      },
      "orders": {
        "lesson": {
          "title": "Unless",
          "points": [
            "'Unless' flips the rule when its condition is true.",
            "Check the condition in the log before you act."
          ],
          "example": "'Point your lamp up, unless the ceiling is bats.'"
        },
        "skill": "Following directions",
        "steps": [
          "Write the cave temperature in degrees: 54.",
          "Subtract the number of hours the caver has been down: 9.",
          "Add the number of whistle blasts in one signal: 3.",
          "Multiply by 2.",
          "Type the result, unless the log says the caver answered the whistle, in which case type AWAKE instead."
        ],
        "prompt": "Your answer:",
        "answer": "AWAKE",
        "accept": [
          "awake",
          "awake."
        ],
        "hint": "Do the arithmetic first. Then read the last sentence of the log: did the caver answer the whistle? Step 5 tells you what to type if he did."
      }
    },
    {
      "id": "cave-5",
      "title": "The Caver",
      "recon": {
        "lesson": {
          "title": "Putting the rescue together",
          "points": [
            "The last log looks back over the whole rescue. Questions will ask what came in what order.",
            "Times are details. Write them down as you read.",
            "The main idea of the last paragraph is what the writer wants you to keep."
          ],
          "example": "'Left at six. At camp by nine.' How long was the hike? Three hours."
        },
        "title": "Rescue Log: Everyone Who Went In",
        "passage": [
          "The caver was where the map said, at the bottom of the slope in the fifth chamber. He was sitting on his pack with his back to the wall. His lamp was turned off to save it. He had done everything right. When he could not climb, he had stayed put instead of crawling in the dark, put on every layer he had, kept his lamp off, and blown his whistle every fifteen minutes. He was shivering hard, which is a good sign; it is when the shivering stops that a cold person is in trouble. The first thing the team did was not touch the ankle. It was to get him warm.",
          "The stove came out, and the sleeping bag went around him. A heat pack went under his arms. A rescuer sat behind him with her arms around him to share body heat. Another made hot sweet tea. Only after half an hour of that, when the shivering eased and he could talk in whole sentences, did the medic splint the ankle and strap him into the stretcher. It was five in the afternoon. He had been underground for nine hours, six of them alone in the dark.",
          "The way out took seven hours: the slope, the river with the stretcher held above the water on six shoulders, and the bat chamber in silence. Then came the forty-foot drop on the hauling rope one slow foot at a time, the crawl on his back, and the entrance room, where the caver's friend had been waiting since noon. The team came out at midnight under stars, and the leader counted them out of the entrance by name, nine now instead of eight, because everyone who went in comes out. That is the whole rule."
        ],
        "questions": [
          {
            "q": "What was the first thing the team did when they reached the caver?",
            "choices": [
              "Got him warm",
              "Splinted the ankle",
              "Carried him to the river",
              "Blew the whistle"
            ],
            "answer": 0,
            "hint": "The last two sentences of paragraph 1.",
            "skill": "Finding details"
          },
          {
            "q": "How long did the way out take?",
            "choices": [
              "Seven hours",
              "Fifteen minutes",
              "A day",
              "An hour"
            ],
            "answer": 0,
            "hint": "The first sentence of paragraph 3.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 2, what does 'medic' mean?",
            "choices": [
              "The team leader who lays out the map and calls the plan",
              "The team member trained to give medical care",
              "The caver's friend who came out of the cave for help",
              "The folding plastic sled the caver is strapped into"
            ],
            "answer": 1,
            "hint": "The medic is the one who 'splint[ed] the ankle', which is medical care.",
            "skill": "Word meanings"
          },
          {
            "q": "Why is hard shivering a good sign?",
            "choices": [
              "Because it means the caver is warm",
              "Because it is when the shivering stops that a cold person is in trouble",
              "Because a person who shivers can still talk in whole sentences",
              "Because it shakes off the cold"
            ],
            "answer": 1,
            "hint": "Paragraph 1, the sentence with 'shivering hard'.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 3 mostly about?",
            "choices": [
              "The long trip out, in order, and the rule about counting everyone out",
              "The stars",
              "The caver's friend",
              "The bats"
            ],
            "answer": 0,
            "hint": "Paragraph 3 retraces every chamber and ends with the count at the entrance.",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Rescue math",
          "points": [
            "Hours from a start time to an end time: count past midnight carefully.",
            "How many times an hour: 60 ÷ the minutes between, so every 10 minutes is 6 times.",
            "People carrying: shoulders ÷ 2.",
            "Two-step: hours underground for the caver, entry to exit."
          ],
          "example": "5 in the afternoon to midnight is 7 hours."
        },
        "problems": [
          {
            "q": "The caver blew his whistle every 15 minutes. How many times an hour is that?",
            "answer": "4",
            "hint": "60 ÷ 15.",
            "skill": "Dividing"
          },
          {
            "q": "He whistled 4 times an hour for the 6 hours he was alone. How many times did he whistle in all?",
            "answer": "24",
            "hint": "4 × 6.",
            "skill": "Multiplying"
          },
          {
            "q": "The caver went in at 8 in the morning and came out at midnight. How many hours was he underground?",
            "answer": "16",
            "hint": "8 in the morning to 8 at night is 12 hours, then 4 more to midnight.",
            "skill": "Multi-step problems"
          },
          {
            "q": "The stretcher crossed the river on 6 shoulders. Each rescuer has 2 shoulders. How many rescuers carried it?",
            "answer": "3",
            "hint": "6 ÷ 2.",
            "skill": "Dividing"
          },
          {
            "q": "The team warmed the caver for 1/2 an hour, then took 1/2 an hour to splint and strap him in. How many hours is that together? (write a whole number)",
            "answer": "1",
            "hint": "1/2 + 1/2 = 2/2, which is 1 whole hour.",
            "skill": "Fractions"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "Carry both paragraphs at once",
            "points": [
              "The last question is never answered in one place. It needs one fact from one paragraph and another from somewhere else.",
              "Look for what changed between the start of the report and the end. The change is usually where the answer is hiding.",
              "Before you commit, check that you could point at a line in each of two paragraphs. If you can only point once, keep reading."
            ],
            "example": "Paragraph one: the tide was already going out. Paragraph three: the boat is still tied up at noon. Together: the crew has missed its window. Neither line says that alone."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea of the whole report?",
              "choices": [
                "Getting a cold caver out safely was a matter of order: warmth before the injury, and everybody accounted for before anyone went home.",
                "The caver had been underground for nine hours, six of them alone in the dark, sitting on his pack at the bottom of the slope with his lamp turned off.",
                "Rescue workers are the bravest people in any community, and anyone who will go underground for a stranger deserves more thanks than they get.",
                "The medic splinted the ankle as soon as the team reached him, because an injury that bad has to be strapped up before anything else is done."
              ],
              "answer": 0,
              "hint": "What was done first at the bottom, what was done after half an hour, and what was done at the entrance at midnight. Ask what those three have in common.",
              "skill": "Central idea and evidence",
              "evidence": "The first thing the team did was not touch the ankle. It was to get him warm."
            },
            {
              "q": "Claim: the caver's own decisions while he waited helped keep him alive. Which sentence from the report best supports that claim?",
              "choices": [
                "When he could not climb, he had stayed put instead of crawling in the dark, put on every layer he had, kept his lamp off, and blown his whistle every fifteen minutes.",
                "Then came the forty-foot drop on the hauling rope one slow foot at a time, the crawl on his back, and the entrance room, where the caver's friend had been waiting since noon.",
                "He was shivering hard, which is a good sign; it is when the shivering stops that a cold person is in trouble.",
                "He had been underground for nine hours, six of them alone in the dark."
              ],
              "answer": 0,
              "hint": "The claim is about things he chose to do. Three of these describe what was happening to him rather than what he decided. Find the sentence that is a list of his own actions.",
              "skill": "Finding details",
              "evidence": "When he could not climb, he had stayed put instead of crawling in the dark, put on every layer he had, kept his lamp off, and blown his whistle every fifteen minutes."
            },
            {
              "q": "What job does the last paragraph do in this report?",
              "choices": [
                "It explains how to treat a person who has gone cold, with a stove, a sleeping bag, a heat pack and hot sweet tea.",
                "It retraces every obstacle in reverse order and closes on the rule the whole team works by.",
                "It gives the reasons the caver fell in the first place, and what he should have done differently on the wet slope.",
                "It lists the equipment that was carried into the cave, from the rope and the stretcher to the stove and the heat pack."
              ],
              "answer": 1,
              "hint": "Nothing in that paragraph is new: every place it names has already appeared once. Ask what a paragraph is doing when it walks a road you have been down already, and then look hard at where it stops.",
              "skill": "Author's purpose and structure",
              "evidence": "the leader counted them out of the entrance by name, nine now instead of eight, because everyone who went in comes out"
            },
            {
              "q": "The report says that when he could not climb he 'stayed put'. What does stayed put mean as it is used here?",
              "choices": [
                "Packed his equipment away and waited beside it",
                "Did not move from where he was, and did it on purpose",
                "Kept himself awake until help finally arrived",
                "Went on slowly rather than stopping where he was"
              ],
              "answer": 1,
              "hint": "The rest of the sentence hands you the opposite: instead of crawling in the dark. If crawling is the thing he did not do, what is the thing he did?",
              "skill": "Word meanings",
              "evidence": "he had stayed put instead of crawling in the dark, put on every layer he had, kept his lamp off, and blown his whistle every fifteen minutes"
            },
            {
              "q": "Paragraphs 1 and 2 together explain why the medic waited half an hour before touching the ankle. Why the wait?",
              "choices": [
                "Cold was the more urgent danger, and the team was waiting for the signs that he was coming out of it.",
                "The stretcher had not yet been carried down the slope to him.",
                "The medic was busy making hot sweet tea for the caver.",
                "The ankle could not even be seen until the sleeping bag was opened."
              ],
              "answer": 0,
              "hint": "Paragraph one says which danger the team put first. Paragraph two tells you what had changed before the splint went on. The wait is the distance between those two facts.",
              "skill": "Reading between the lines",
              "evidence": "Only after half an hour of that, when the shivering eased and he could talk in whole sentences, did the medic splint the ankle and strap him into the stretcher."
            }
          ]
        }
      },
      "navByGrade": {
        "3": {
          "lesson": {
            "title": "Grade 3 numbers",
            "points": [
              "Multiplication facts: 3 × 7 means 3 groups of 7.",
              "Sharing equally is dividing.",
              "Adding three numbers: add two, then add the third.",
              "Fractions with the same bottom: the bigger top is the bigger fraction."
            ],
            "example": "3 × 7 = 21."
          },
          "problems": [
            {
              "q": "The team carries 8 batteries on each of 6 trips. How many batteries is that?",
              "answer": "48",
              "hint": "6 × 8.",
              "skill": "Multiplying"
            },
            {
              "q": "Each haul out of the cave takes 4 hours. The team has 32 hours. How many hauls can the team make?",
              "answer": "8",
              "hint": "How many 4s fit into 32?",
              "skill": "Dividing"
            },
            {
              "q": "The team counted 442 bats in the morning and 521 in the evening. How many more in the evening?",
              "answer": "79",
              "hint": "521 − 442.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "Which is bigger, 6/8 or 7/8? (write a fraction)",
              "answer": "7/8",
              "hint": "Same bottom, so the bigger top wins.",
              "skill": "Fractions"
            },
            {
              "q": "A square frame is 4 feet on each side. How many feet is it all the way around?",
              "answer": "16",
              "hint": "Four sides of 4.",
              "skill": "Area and perimeter"
            }
          ]
        },
        "6": {
          "lesson": {
            "title": "Grade 6 numbers",
            "points": [
              "Subtracting decimals: line up the points and fill empty places with zeros. 20 − 6.35 is 20.00 − 6.35 = 13.65.",
              "Percent of a number: turn the percent into a fraction of 100.",
              "A ratio tells you how many of one thing for each group of the other.",
              "Order of operations: parentheses, then multiply and divide, then add and subtract."
            ],
            "example": "(9 − 4) × (2 + 1) = 15: each set of parentheses first."
          },
          "problems": [
            {
              "q": "The plan allows 150.25 minutes. The team uses 42.8 minutes on the first chamber and 27.95 on the second. How many minutes are left?",
              "answer": "79.5",
              "hint": "Add the two amounts used first, then take that from 150.25. Line up the points.",
              "skill": "Decimals"
            },
            {
              "q": "Out of every 100 batteries, 25 are set aside. Out of 40 batteries, how many is that?",
              "answer": "10",
              "hint": "40 is 0.4 hundreds, so 0.4 × 25.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The team divides 35 minutes of work in the ratio 3 to 4. How many minutes is the larger share?",
              "answer": "20",
              "hint": "7 parts in all, so one part is 5 minutes.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The team works out (12 − 3) × (6 + 12). What is it?",
              "answer": "162",
              "hint": "Each set of parentheses first, then multiply the two answers.",
              "skill": "Order of operations"
            },
            {
              "q": "Solve for x: 373 = x − 54",
              "answer": "427",
              "hint": "Add 54 to both sides.",
              "skill": "Equations"
            }
          ]
        },
        "7": {
          "lesson": {
            "title": "Grade 7 numbers",
            "points": [
              "A unit rate is the total divided by how many: 18 ÷ 4 = 4.5 for one.",
              "Percent change: find that percent of the starting number, then add it on or take it off.",
              "Below zero, going up adds and going down subtracts. Walk the number line one step at a time.",
              "A two-step equation: undo the adding first, then undo the multiplying."
            ],
            "example": "x ÷ 5 − 3 = 6, so x ÷ 5 = 9, so x = 45."
          },
          "problems": [
            {
              "q": "The job needs 20 minutes in all, at 2.5 minutes for each knot. One knot is already done. How many knots are left?",
              "answer": "7",
              "hint": "20 ÷ 2.5 = 8 in all, then take the finished one off.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The rule says a count of rescuers may change by no more than 10%. Starting from 40, what is the highest count the rule allows?",
              "answer": "44",
              "hint": "10% of 40 is 4. Add it on.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The supply ledger starts at 25 batteries and falls 16 batteries on each of 2 days. What does it read at the end? (A minus number means batteries owed.)",
              "answer": "-7",
              "accept": [
                "−7"
              ],
              "hint": "16 × 2 comes off 25.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: x ÷ 7 − 24 = 9",
              "answer": "231",
              "hint": "Add 24 to both sides, then multiply by 7.",
              "skill": "Equations"
            },
            {
              "q": "A drawing uses 1 inch for every 20 feet. How many inches are needed for 480 feet?",
              "answer": "24",
              "hint": "480 ÷ 20.",
              "skill": "Ratios and percent"
            }
          ]
        },
        "8": {
          "lesson": {
            "title": "Grade 8 numbers",
            "points": [
              "Slope is the rise over the run: how much y goes up, divided by how much x goes across.",
              "A square root undoes squaring. If a square has area 49, its side is 7.",
              "Pythagoras: in a right triangle a² + b² = c², and c is always the longest side.",
              "With x on both sides, move all the x's to one side first, then all the plain numbers to the other."
            ],
            "example": "A line starts at 5 and climbs 2 each step: after 9 steps it is 2 × 9 + 5 = 23."
          },
          "problems": [
            {
              "q": "A line passes through (0, 24) and (6, 72). What is its slope?",
              "answer": "8",
              "hint": "Slope is the rise over the run: 48 ÷ 6.",
              "skill": "Linear relationships"
            },
            {
              "q": "Two shifts each bring 7² rescuers. How many rescuers is that in all?",
              "answer": "98",
              "hint": "7² is 49. Two shifts of 49.",
              "skill": "Powers and roots"
            },
            {
              "q": "The team goes 7 feet east and then 24 feet north. In a straight line, how far is that from the start, in feet?",
              "answer": "25",
              "hint": "The two legs make a right angle: 7² + 24² = 625.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "For what value of x do 8x + 26 and 4x + 66 come to the same number?",
              "answer": "10",
              "hint": "Set them equal, take 4x off both sides, then take 26 off.",
              "skill": "Equations"
            },
            {
              "q": "The map shows 6 × 10^3 feet of passages. A bigger cave has ten times as many. Written out in full, how many feet is that?",
              "answer": "60000",
              "hint": "Ten times adds one to the power: 6 × 10^4.",
              "skill": "Powers and roots"
            }
          ]
        }
      },
      "orders": {
        "lesson": {
          "title": "The last step wins",
          "points": [
            "Read every step before you start.",
            "When a step changes your starting number, work every step again from the new start."
          ],
          "example": "'Start with 5, double it, add 1' is 11. Change the start to 6 and it is 13, not 12."
        },
        "skill": "Following directions",
        "steps": [
          "Write the number of rescuers who went into the cave: 8.",
          "Multiply by the number of hours the way out took: 7.",
          "Subtract the number of blasts in one whistle signal: 3.",
          "Add the hour of the afternoon when the caver was strapped into the stretcher: 5.",
          "Go back to step 1 and change the number you started from: count the caver too, so use 9 instead of 8. Then work steps 2, 3 and 4 again from there.",
          "Type the new total."
        ],
        "prompt": "Your answer:",
        "answer": "65",
        "hint": "Step 5 sends you back to step 1 with a different starting number. The three steps after it are the same as before, just done a second time."
      }
    }
  ]
};
if (window.BASECAMP_MISSIONS && window.BASECAMP_MISSIONS.register) window.BASECAMP_MISSIONS.register(C);
else (window.BASECAMP_CAMPAIGNS_PENDING = window.BASECAMP_CAMPAIGNS_PENDING || []).push(C);
})();
