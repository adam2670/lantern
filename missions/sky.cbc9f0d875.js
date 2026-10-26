// ODYSSEY — campaign "sky". GENERATED, do not edit.
// Source of truth: content/missions-full.js. Rebuild with:  python3 tools/split-missions.py
// RULE: nothing in this file is about the person using it. Content only.
(function () {
var C = {
  "id": "sky",
  "ready": true,
  "kind": "climb",
  "readingLevel": {
    "fk": 5.7,
    "cl": 5.7
  },
  "grade": "5",
  "kindLabel": "Expedition",
  "form": "hawk",
  "title": "Sky Islands",
  "subtitle": "An airship, five islands in the clouds (a story)",
  "pitch": "Five islands floating in the sky, reached only by airship, each one higher than the last. The islands are made up. The air, the wind, the lift and the cold at altitude are real, and they are the whole puzzle.",
  "scene": "assets/scene-sky.jpg",
  "waypoints": [
    [
      1105,
      835
    ],
    [
      870,
      720
    ],
    [
      1210,
      470
    ],
    [
      950,
      428
    ],
    [
      690,
      340
    ],
    [
      845,
      130
    ]
  ],
  "progress": {
    "unit": "ft",
    "total": 12000
  },
  "dayNoun": "Leg",
  "stageNoun": "Island",
  "finalNoun": "The summit isle",
  "stages": [
    "Low Isle",
    "Mist Isle",
    "The Ridge Isle",
    "Storm Isle",
    "The summit isle"
  ],
  "reconNoun": "Pilot's Log",
  "legs": {
    "recon": "Pilot's log",
    "nav": "Air math",
    "orders": "Flight orders",
    "debrief": "Mooring"
  },
  "fact": "An airship floats for the same reason a cork does: it weighs less than the air it pushes aside. Fill a bag with hot air or a light gas and the heavier air around it shoves it upward. That is the whole trick, and it has carried people since 1783.",
  "finale": {
    "prompt": "The summit isle, moored at last. Which color pennant flies from the airship's tail for the flight home?",
    "options": [
      {
        "label": "Sky blue",
        "color": "#4FD1FF"
      },
      {
        "label": "Sunset orange",
        "color": "#F28C28"
      },
      {
        "label": "Cloud white",
        "color": "#F4F8FF"
      },
      {
        "label": "Gold",
        "color": "#FFB454"
      }
    ],
    "done": "Run it up. Then let out ballast and let the wind that brought you take you home. It knows the way."
  },
  "patrols": [
    {
      "id": "sky-1",
      "title": "Low Isle",
      "recon": {
        "lesson": {
          "title": "Questions first, then the log",
          "points": [
            "Read the five questions before the log. Two want a detail, one wants a word, one wants a why, one wants what a paragraph is mostly about.",
            "The log says which parts are a story and which are real. That is a detail too.",
            "The answer is always in the log. You never have to guess."
          ],
          "example": "Question: 'What makes the kite climb?' Hunt for 'climb' or 'wind', then read that sentence."
        },
        "title": "Pilot's Log: Lighter Than Air",
        "passage": [
          "The islands are not on any map, because they are a story. They are five pieces of land that float in the sky above a valley, one above the other. The only way between them is an airship. The airship is not a story. It is a long silver bag, the envelope, full of helium, a gas lighter than air, with a wooden cabin, the gondola, slung underneath. It has two propellers, a rudder, and bags of sand hung along the rails. Everything in this log about how it flies is true. Everything about where it goes is made up. Keep the two apart and the flight makes sense.",
          "An airship floats because it weighs less than the air it pushes aside. Air has weight, about a pound for every thirteen cubic feet of it at the ground. A bag full of something lighter, helium or hot air, is pushed upward by the heavier air around it, the way a cork is pushed up by water. The envelope holds enough helium to lift the whole ship, the crew, and a ton of cargo, with a few hundred pounds to spare. Those few hundred pounds are the ballast, the sand in the bags, and dropping sand is how the ship goes up.",
          "Low Isle is the first island, a thousand feet above the valley. It is a green shelf of rock with a mooring mast on it and a village of tents. The pilot casts off at dawn and drops two bags of sand. The ship rises, slowly, the valley falling away. Then the island's mast comes level with the cabin window, and a crew on the rock catches the ropes. Twenty minutes. The log's first line reads: cast off 6:00, two bags, Low Isle moored 6:20, all well. The hawk lands on the mast and looks unimpressed."
        ],
        "questions": [
          {
            "q": "Which part of the log is made up?",
            "choices": [
              "How it flies",
              "The helium",
              "The weight of the air pushed aside",
              "Where the islands are"
            ],
            "answer": 3,
            "hint": "Paragraph 1, the sentences 'Everything in this log about how it flies is true. Everything about where it goes is made up.'",
            "skill": "Finding details"
          },
          {
            "q": "How does the ship go up?",
            "choices": [
              "By venting helium",
              "With the rudder",
              "By the propellers",
              "By dropping bags of sand"
            ],
            "answer": 3,
            "hint": "The last sentence of paragraph 2.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 1, what is the 'gondola'?",
            "choices": [
              "The wooden cabin slung under the envelope",
              "The two propellers and the rudder",
              "The long silver bag of helium that lifts the ship",
              "The bags of sand hung on the rails"
            ],
            "answer": 0,
            "hint": "The sentence 'with a wooden cabin, the gondola, slung underneath'.",
            "skill": "Word meanings"
          },
          {
            "q": "Why does a bag of helium rise?",
            "choices": [
              "Because helium is hot",
              "Because the propellers push it",
              "Because the crew pulls ropes",
              "Because the heavier air around it pushes it upward, like water pushes up a cork"
            ],
            "answer": 3,
            "hint": "Paragraph 2, the third sentence.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 3 mostly about?",
            "choices": [
              "The first leg of the flight, from cast-off to mooring at Low Isle",
              "The village of tents",
              "How an airship floats and what the bags of sand along the rails are for",
              "The five floating islands and the reason that none of them is on a map"
            ],
            "answer": 0,
            "hint": "Paragraph 3 describes the whole first leg with times.",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Lift math",
          "points": [
            "Cubic feet of air per pound: 13.",
            "Bags of sand times pounds: ballast dropped.",
            "Hundredths as decimals: 5/100 is 0.05 and 40/100 is 0.40.",
            "Same bottom: add the tops, so 2/7 + 3/7 = 5/7."
          ],
          "example": "Three bags at 40 pounds each is 120 pounds dropped."
        },
        "problems": [
          {
            "q": "Air weighs about 1 pound for every 13 cubic feet. How many pounds do 130 cubic feet of air weigh?",
            "answer": "10",
            "hint": "130 ÷ 13.",
            "skill": "Dividing"
          },
          {
            "q": "Each bag of sand weighs 50 pounds. The pilot dropped 2. How many pounds of ballast is that?",
            "answer": "100",
            "hint": "50 × 2.",
            "skill": "Multiplying"
          },
          {
            "q": "The gas cells are measured in hundredths of full. Today they are 87/100 full. Write that as a decimal.",
            "answer": "0.87",
            "hint": "87 hundredths: two places after the point.",
            "skill": "Decimals"
          },
          {
            "q": "Low Isle is 1,000 feet up and the leg took 20 minutes. How many feet a minute did the ship climb?",
            "answer": "50",
            "hint": "1,000 ÷ 20.",
            "skill": "Dividing"
          },
          {
            "q": "The ship carries 1/5 of its ballast on the port rail and 3/5 on the starboard rail. What fraction is on the rails? (write a fraction)",
            "answer": "4/5",
            "hint": "Same bottom. Add the tops.",
            "skill": "Fractions"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "Two kinds of true at once",
            "points": [
              "This log mixes an invented place with real science, and it says so out loud. The central idea has to hold both halves, not pick one.",
              "Give each paragraph a short label, then find the choice that covers all of them. A choice that only covers the middle paragraph is a detail.",
              "The four moves after that: prove a claim with one line, name a paragraph's job, read a phrase off its own sentence, and join two paragraphs into one conclusion."
            ],
            "example": "A story about a made-up town with a real river running through it. 'The town does not exist' is half the truth. 'The river behaves exactly as rivers do' is the other half."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea of the whole log?",
              "choices": [
                "Air weighs about a pound for every thirteen cubic feet of it at ground level, and a ton of cargo and the crew still leave a few hundred pounds to spare.",
                "Stories are the best way of teaching anybody about science.",
                "The islands in the log can be found on a map of the valley.",
                "The journey is invented, but everything the log says about how the airship actually flies is meant to be taken seriously."
              ],
              "answer": 3,
              "hint": "The writer tells you outright, in the first paragraph, which half of this to believe. Find the choice that keeps both halves instead of throwing one away.",
              "skill": "Central idea and evidence",
              "evidence": "Everything in this log about how it flies is true."
            },
            {
              "q": "Claim: the crew can change how high the ship floats while it is already in the air. Which sentence from the log best supports that claim?",
              "choices": [
                "An airship floats because it weighs less than the air it pushes aside.",
                "The log's first line reads: cast off 6:00, two bags, Low Isle moored 6:20, all well.",
                "Everything in this log about how it flies is true.",
                "Those few hundred pounds are the ballast, the sand in the bags, and dropping sand is how the ship goes up."
              ],
              "answer": 3,
              "hint": "Floating and choosing to climb are two different things. Find the sentence that names something the crew can actually do to make the ship rise.",
              "skill": "Finding details",
              "evidence": "Those few hundred pounds are the ballast, the sand in the bags, and dropping sand is how the ship goes up."
            },
            {
              "q": "Why does the log stop at the start to say which parts of it are true and which are made up?",
              "choices": [
                "So the reader knows the science can be trusted even though the places cannot.",
                "To warn the reader that no airship like this one was ever built, and that none of it would work outside a story.",
                "To explain how the mooring mast on Low Isle was put up.",
                "To show that the pilot is unsure how the ship works."
              ],
              "answer": 0,
              "hint": "Read the last sentence of that paragraph. It tells you exactly what the writer wants you to do with the two halves.",
              "skill": "Author's purpose and structure",
              "evidence": "Keep the two apart and the flight makes sense."
            },
            {
              "q": "The log says the heavier air pushes a light bag upward 'the way a cork is pushed up by water'. What is that comparison telling you?",
              "choices": [
                "The airship is built out of the same material as a cork",
                "The bag floats on the top of the air, half in and half out",
                "The helium inside the bag is really a kind of liquid",
                "The air does the pushing, because the bag is lighter than what surrounds it"
              ],
              "answer": 3,
              "hint": "A cork does nothing at all in that picture; the water does all the work. Ask what is playing the part of the water here.",
              "skill": "Word meanings",
              "evidence": "A bag full of something lighter, helium or hot air, is pushed upward by the heavier air around it, the way a cork is pushed up by water"
            },
            {
              "q": "Paragraphs 1 and 2 together suggest why the pilot would drop sand carefully rather than all at once. Why?",
              "choices": [
                "There are only a few hundred pounds of it, and every island above this one will want some.",
                "Sand dropped in a rush would make the ship climb faster than the pilot can steer it toward the mast.",
                "The crew on the rock need the sand for the tents in the village, so every bag has to land close to the mast.",
                "Sand can only be dropped while the ship is moored to a mast."
              ],
              "answer": 0,
              "hint": "Paragraph one tells you how many islands there are and how they are stacked. Paragraph two tells you how much sand there is and what it buys. Put those together.",
              "skill": "Reading between the lines",
              "evidence": "five pieces of land that float in the sky above a valley, one above the other. The only way between them is an airship"
            }
          ]
        }
      },
      "navByGrade": {
        "3": {
          "lesson": {
            "title": "Grade 3 numbers",
            "points": [
              "Multiplication facts: 6 × 4 means 6 groups of 4.",
              "Sharing equally is dividing.",
              "Adding three numbers: add two, then add the third.",
              "Fractions: the bottom is how many equal parts; the top is how many are done."
            ],
            "example": "6 × 4 = 24."
          },
          "problems": [
            {
              "q": "Every envelope needs 5 bags, and there are 5 envelopes. How many bags is that?",
              "answer": "25",
              "hint": "5 groups of 5, so 5 × 5.",
              "skill": "Multiplying"
            },
            {
              "q": "The pilot splits 50 bags in half. How many bags is one half?",
              "answer": "25",
              "hint": "Half of 50.",
              "skill": "Dividing"
            },
            {
              "q": "The ship needs to climb 500 feet and has climbed 223. How many more feet are needed?",
              "answer": "277",
              "hint": "500 − 223.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "The day's work is cut into 8 equal parts and the pilot has finished 5 of them. What fraction is done? (write a fraction)",
              "answer": "5/8",
              "hint": "5 parts out of 8.",
              "skill": "Fractions"
            },
            {
              "q": "A floor is 9 squares wide and 2 squares long. The pilot has covered 9 squares. How many squares are left to cover?",
              "answer": "9",
              "hint": "9 × 2 squares in all, then take 9 off.",
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
            "example": "6 × 5 − 4 × 2 = 22: both multiplications first, then subtract."
          },
          "problems": [
            {
              "q": "A regular leg takes 16.25 minutes. A long one takes 1.6 times as long. How many minutes does the long one take?",
              "answer": "26",
              "hint": "Multiply 1625 × 16 without the points, then put back 3 decimal places.",
              "skill": "Decimals"
            },
            {
              "q": "Of 120 feet of rope, 10% is frayed and cut off. How many feet are left?",
              "answer": "108",
              "hint": "10% of 120 is 12. Take that off 120.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The pilot shares 15 ropes between two teams in the ratio 2 to 3. How many does the smaller share get?",
              "answer": "6",
              "hint": "2 + 3 = 5 parts. 15 ÷ 5 = 3 for one part.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The pilot works out 7 × 10 − 2 × 3. What is it?",
              "answer": "64",
              "hint": "Do both multiplications first, then subtract.",
              "skill": "Order of operations"
            },
            {
              "q": "In one winter week the coldest reading was −12 degrees and the warmest was −6 degrees. How many degrees apart are they?",
              "answer": "6",
              "hint": "From −12 up to −6.",
              "skill": "Negative numbers"
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
              "A two-step equation: undo the outside step first. In 5(x + 1) = 35, divide by 5, then take off 1."
            ],
            "example": "5(x + 1) = 35, so x + 1 = 7, so x = 6."
          },
          "problems": [
            {
              "q": "16 legs took 40 minutes. At the same rate, how many minutes would 20 legs take?",
              "answer": "50",
              "hint": "One leg takes 40 ÷ 16 = 2.5. Then × 20.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The airship was flying 240 feet up and lost 10% of that height. How many feet did it drop?",
              "answer": "24",
              "hint": "10% of 240: 10/100 × 240.",
              "skill": "Ratios and percent"
            },
            {
              "q": "On a winter day the low was −4 degrees and the high was 10 degrees. How many degrees apart are they?",
              "answer": "14",
              "hint": "4 below zero plus 10 above zero.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: 4(x + 15) = 76",
              "answer": "4",
              "hint": "Divide both sides by 4 to get x + 15 = 19.",
              "skill": "Equations"
            },
            {
              "q": "On the plan, 4 inches stands for 16 feet. How many feet does 1 inch stand for?",
              "answer": "4",
              "hint": "16 ÷ 4.",
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
            "example": "Start at 7 and add 5 each step: the 4th number is 7 + 5 × 3 = 22."
          },
          "problems": [
            {
              "q": "The length of rope let down, in feet, goes 20, 23, 26, 29, and on. What is the 12th number in the list?",
              "answer": "53",
              "hint": "It starts at 20 and adds 3 each step. The number you want is 11 steps on from 20.",
              "skill": "Linear relationships"
            },
            {
              "q": "What is (4 × 3)²?",
              "answer": "144",
              "hint": "4 × 3 = 12 first, then square it.",
              "skill": "Powers and roots"
            },
            {
              "q": "A right triangle has short sides of 8 and 15 feet. How long is its longest side, in feet?",
              "answer": "17",
              "hint": "8² + 15² = 289. The longest side is the square root of that.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "Solve for x: 9x − 5x = 12",
              "answer": "3",
              "hint": "9 − 5 = 4, so 4x = 12.",
              "skill": "Equations"
            },
            {
              "q": "Which is bigger, 4 × 10^4 or 3 × 10^5? Write the bigger one out in full.",
              "answer": "300000",
              "hint": "Write both out: 4 × 10^4 is 40,000. Now write out 3 × 10^5 and compare.",
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
          "example": "'Start at 15. Add 6. Ignore that, and take 4 off 15 instead.' You end on 11."
        },
        "skill": "Following directions",
        "steps": [
          "Write the number of islands in the sky: 5.",
          "Multiply by the bags of sand the pilot dropped at dawn: 2.",
          "Add the height of Low Isle in hundreds of feet: 10.",
          "Subtract the number of propellers on the ship: 2.",
          "Ignore step 3. Low Isle's height does not belong in this count. Take the propellers off your step 2 total the way step 4 says, then add the minutes of the climb: 20.",
          "Type what you are left with."
        ],
        "prompt": "Your answer:",
        "answer": "28",
        "hint": "Step 5 lifts the island's height back out. Start again from your step 2 total, take the propellers off, then put the climb minutes on."
      }
    },
    {
      "id": "sky-2",
      "title": "Mist Isle",
      "recon": {
        "lesson": {
          "title": "Why it gets colder",
          "points": [
            "When the log explains a rule of the air, the rule is a detail. Find the number in it.",
            "A word about steering is explained by the words around it.",
            "A 'why' question: the reason may be spread over two or three sentences. Read them together."
          ],
          "example": "'The fare goes up two dollars for every extra mile.' How much per mile? Two dollars."
        },
        "title": "Pilot's Log: Inside a Cloud",
        "passage": [
          "Mist Isle sits at three thousand feet, and it is called Mist Isle because it is nearly always inside a cloud. That is not luck. Air gets colder as it goes up, about three and a half degrees for every thousand feet. Air that is cooled far enough cannot hold all of its water anymore, the way a cold glass sweats on a summer day. The water comes out as tiny droplets, billions of them, and that is a cloud. Two thousand feet above Low Isle the air is seven degrees colder. At Mist Isle that is cold enough, most days, for the valley's damp air to turn to cloud.",
          "Flying into a cloud is flying blind. The pilot cannot see the island, the mast, or the ropes, and an airship is too big and too slow to dodge anything. So the second leg is flown by the compass and the clock. The pilot uses a heading from the chart, a speed from the propellers, and a time. When the time is up the ship should be at the mast whether the pilot can see it or not. It is the oldest kind of navigation there is, and it works if the wind does what the log says it will.",
          "It does, mostly. The ship rises out of sunshine into gray. The temperature in the gondola drops until breath shows, and water beads on every rope. At the twenty-eighth minute a shape darkens in the mist ahead and becomes a mast with a lantern on it and a crew waving. The pilot vents a little helium to stop the climb and the ropes go down. The log says: Mist Isle, 3,000 feet, 28 minutes, moored in cloud, 41 degrees. The hawk, who flew up above the cloud and waited in the sun, comes down damp and disapproving."
        ],
        "questions": [
          {
            "q": "About how much colder does the air get for every thousand feet up?",
            "choices": [
              "Half a degree",
              "Ten degrees, which is why breath shows",
              "About three and a half degrees",
              "Thirty degrees for every thousand feet"
            ],
            "answer": 2,
            "hint": "Paragraph 1, the third sentence.",
            "skill": "Finding details"
          },
          {
            "q": "How long did the second leg take?",
            "choices": [
              "Twenty minutes",
              "An hour",
              "Two hours, most of it climbing",
              "Twenty-eight minutes"
            ],
            "answer": 3,
            "hint": "Paragraph 3, the log line.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 2, what is a 'heading'?",
            "choices": [
              "The title written at the top of a page in the log",
              "The rounded top of the envelope where the helium sits",
              "The mast with a lantern on it that the crew stands by",
              "The compass direction the ship is steered on"
            ],
            "answer": 3,
            "hint": "The sentence says 'a heading from the chart, a speed from the propellers, and a time'.",
            "skill": "Word meanings"
          },
          {
            "q": "Why is Mist Isle nearly always in a cloud?",
            "choices": [
              "Because the warm air from the valley rises up the hills all afternoon and builds a tower of cloud over it",
              "Because at three thousand feet the air is cold enough that the valley's damp air turns to droplets",
              "Because the crew on the rock keeps a lantern burning on the mast and the smoke from it hangs in the air",
              "Because the island sits two thousand feet above Low Isle and the wind there always blows from the west"
            ],
            "answer": 1,
            "hint": "Paragraph 1, the sentences about cooling and water droplets.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 2 mostly about?",
            "choices": [
              "The lantern",
              "Why the air at three thousand feet can no longer hold on to all of its water",
              "How the pilot navigates by compass and clock when nothing can be seen",
              "The ship rising out of the sunshine into gray with water beading on the ropes"
            ],
            "answer": 2,
            "hint": "The first sentence of paragraph 2 is 'Flying into a cloud is flying blind', and the rest is the method.",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Cloud math",
          "points": [
            "Degrees per thousand feet times thousands: temperature drop.",
            "Volume of a box: length × width × height. 5 × 3 × 4 = 60 cubic feet.",
            "Speed times time: distance.",
            "Two-step: feet climbed, then thousands, then degrees."
          ],
          "example": "4,000 feet up is 4 × 3.5 = 14 degrees colder."
        },
        "problems": [
          {
            "q": "The gondola is 12 feet long, 6 feet wide and 7 feet tall. How many cubic feet of space are inside?",
            "answer": "504",
            "hint": "Length × width × height: 12 × 6 = 72, then times 7.",
            "skill": "Volume"
          },
          {
            "q": "The air cools about 7 degrees for those 2,000 feet. If it was 48 degrees at Low Isle, what is it at Mist Isle?",
            "answer": "41",
            "hint": "48 − 7.",
            "skill": "Adding and subtracting"
          },
          {
            "q": "The ship flies at 20 miles an hour for 28 minutes. Rounded down, how many miles is that? (28 minutes is a little under half an hour.)",
            "answer": "9",
            "hint": "20 × 28 = 560, ÷ 60 is 9 with some left over.",
            "skill": "Multi-step problems"
          },
          {
            "q": "The compass heading is 45 degrees. The pilot turns 15 degrees to the right. What is the new heading?",
            "answer": "60",
            "hint": "45 + 15.",
            "skill": "Adding and subtracting"
          },
          {
            "q": "The gondola is 12 feet long and 6 feet wide. What is its floor area in square feet?",
            "answer": "72",
            "hint": "12 × 6.",
            "skill": "Area and perimeter"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "Point at the sentence",
            "points": [
              "In the claim question every choice is a real sentence from the log. Being true earns nothing.",
              "A method described is not the same as a method explained. Watch for the sentence carrying a condition, the one that says when the method works.",
              "Read the claim and your pick one straight after the other, and ask whether anything is still missing between them."
            ],
            "example": "Claim: the plan could fail. 'They set off at dawn' is true and proves nothing. 'It works if the ice holds' proves it outright."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea of the whole log?",
              "choices": [
                "The temperature in the gondola dropped until the crew's breath showed, and water beaded on every rope as the ship rose out of the sunshine into the gray.",
                "Pilots should never fly in bad weather of any kind.",
                "The cloud that gives the island its name is made by ordinary physics, and it forces the pilot to fly by numbers instead of by sight.",
                "The island happens to be inside a cloud on a few days each year, and the pilot struck one of them by bad luck rather than by anything in the weather."
              ],
              "answer": 2,
              "hint": "Why the cloud is there, how the pilot deals with it, and what came out of the mist ahead of the ship. Find the choice that holds all three.",
              "skill": "Central idea and evidence",
              "evidence": "Flying into a cloud is flying blind."
            },
            {
              "q": "Claim: the way the second leg is flown rests on a prediction that could turn out wrong. Which sentence from the log best supports that claim?",
              "choices": [
                "The pilot cannot see the island, the mast, or the ropes, and an airship is too big and too slow to dodge anything.",
                "Flying into a cloud is flying blind.",
                "The log says: Mist Isle, 3,000 feet, 28 minutes, moored in cloud, 41 degrees.",
                "It is the oldest kind of navigation there is, and it works if the wind does what the log says it will."
              ],
              "answer": 3,
              "hint": "Describing the method is not the same as naming what it rests on. Look for the sentence with an 'if' in it.",
              "skill": "Finding details",
              "evidence": "It is the oldest kind of navigation there is, and it works if the wind does what the log says it will."
            },
            {
              "q": "Why does the log explain how clouds form before it describes the flight?",
              "choices": [
                "To warn the reader that the cloud around the island may thicken into a thunderstorm later in the afternoon.",
                "To explain how the compass and the clock are used together to fly the second leg without seeing anything.",
                "To describe what the gondola and the silver envelope look like from the outside before the flight begins.",
                "So the island's name stops being a coincidence and becomes something the reader can work out."
              ],
              "answer": 3,
              "hint": "Early in that paragraph the log refuses an easy explanation: 'That is not luck.' Ask what the rest of it puts in the place of luck.",
              "skill": "Author's purpose and structure",
              "evidence": "That is not luck."
            },
            {
              "q": "The log says air cooled far enough cannot hold all its water, 'the way a cold glass sweats on a summer day'. What is that comparison showing you?",
              "choices": [
                "The glass is leaking slowly through a crack, so the water on the outside came from inside it",
                "Cooling something makes the water in the air around it come out as droplets",
                "Water inside the glass boils away in warm weather and settles again on the outside",
                "Clouds are made of the same material as glass, in droplets far too small to see"
              ],
              "answer": 1,
              "hint": "The water on the outside of that glass did not come from inside it. Ask where it did come from, then read the sentence straight after the comparison.",
              "skill": "Word meanings",
              "evidence": "Air that is cooled far enough cannot hold all of its water anymore, the way a cold glass sweats on a summer day"
            },
            {
              "q": "Paragraphs 2 and 3 together explain why the pilot vents helium at the exact moment a mast appears in the mist. Why then?",
              "choices": [
                "The helium had grown too cold to lift the ship any further.",
                "Venting helium is the only way to slow the propellers down, and the propellers have to be slowed before a ship can be moored.",
                "The clock said the mast should be there, it was, and the climb had to be stopped at exactly that height.",
                "The crew on the mast had signaled for the ship to come down, waving a lantern in the mist until the pilot saw it."
              ],
              "answer": 2,
              "hint": "Paragraph two tells you what the time was supposed to deliver. Paragraph three tells you what appeared and what the pilot did next. Put those two together.",
              "skill": "Reading between the lines",
              "evidence": "At the twenty-eighth minute a shape darkens in the mist ahead and becomes a mast with a lantern on it and a crew waving"
            }
          ]
        }
      },
      "navByGrade": {
        "3": {
          "lesson": {
            "title": "Grade 3 numbers",
            "points": [
              "Multiplication facts: 6 × 9 means 6 groups of 9.",
              "Sharing equally is dividing.",
              "Adding three numbers: add two, then add the third.",
              "Fractions with the same bottom: the bigger top is the bigger fraction."
            ],
            "example": "6 × 9 = 54."
          },
          "problems": [
            {
              "q": "The pilot carries 7 crates on each of 4 trips. How many crates is that?",
              "answer": "28",
              "hint": "4 × 7.",
              "skill": "Multiplying"
            },
            {
              "q": "Each leg of the trip uses 8 sandbags. The pilot has 56 sandbags. How many legs can the pilot fly?",
              "answer": "7",
              "hint": "How many 8s fit into 56?",
              "skill": "Dividing"
            },
            {
              "q": "The ship climbed 449 feet in the morning and 608 feet in the evening. How many more feet did it climb in the evening?",
              "answer": "159",
              "hint": "608 − 449.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "Which is bigger, 4/6 or 3/6? (write a fraction)",
              "answer": "4/6",
              "hint": "Same bottom, so the bigger top wins.",
              "skill": "Fractions"
            },
            {
              "q": "The target is 500 feet and 117 are logged. How many short is that?",
              "answer": "383",
              "hint": "500 − 117.",
              "skill": "Adding and subtracting"
            }
          ]
        },
        "6": {
          "lesson": {
            "title": "Grade 6 numbers",
            "points": [
              "Mixed number ÷ fraction: make it improper first. 3 1/3 ÷ 5/9 = 10/3 × 9/5 = 90/15 = 6.",
              "Percent of a number: turn the percent into a fraction of 100.",
              "A ratio tells you how many of one thing for each group of the other.",
              "Order of operations: parentheses, then multiply and divide, then add and subtract."
            ],
            "example": "(8 − 3) × (2 + 2) = 20: each set of parentheses first."
          },
          "problems": [
            {
              "q": "The airship has 10 1/2 hours of fuel. Each hop between islands takes 7/8 of an hour. How many hops can the airship make?",
              "answer": "12",
              "hint": "Make 10 1/2 an improper fraction, 21/2. Then multiply by the flip of 7/8: 21/2 × 8/7.",
              "skill": "Fractions"
            },
            {
              "q": "Out of every 100 feet, 25 are set aside. Out of 60 feet, how many is that?",
              "answer": "15",
              "hint": "60 is 0.6 hundreds, so 0.6 × 25.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The pilot divides 30 minutes of work in the ratio 2 to 3. How many minutes is the larger share?",
              "answer": "18",
              "hint": "5 parts in all, so one part is 6 minutes.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The pilot works out (9 − 3) × (7 + 9). What is it?",
              "answer": "96",
              "hint": "Each set of parentheses first, then multiply the two answers.",
              "skill": "Order of operations"
            },
            {
              "q": "Three winter readings came in: −21, −15 and 6 degrees. Which is the coldest?",
              "answer": "-21",
              "accept": [
                "−21"
              ],
              "hint": "The further below zero, the colder.",
              "skill": "Negative numbers"
            }
          ]
        },
        "7": {
          "lesson": {
            "title": "Grade 7 numbers",
            "points": [
              "A unit rate is the total divided by how many: 18 ÷ 4 = 4.5 for one.",
              "Percent change: find that percent of the starting number, then add it on or take it off.",
              "Count the minus signs. An even number gives a plus answer, an odd number a minus: (−2) × (−3) × (−5) = −30.",
              "A two-step equation: undo the adding first, then undo the multiplying."
            ],
            "example": "x ÷ 4 − 3 = 5, so x ÷ 4 = 8, so x = 32."
          },
          "problems": [
            {
              "q": "The whole trip, start to finish, takes 20 minutes, at 2.5 minutes for each leg. One leg is already done. How many legs are left?",
              "answer": "7",
              "hint": "20 ÷ 2.5 = 8 in all, then take the finished one off.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The rule says the airship may climb by no more than 50% of its height at a time. It is at 120 feet. What is the highest it may climb to, in feet?",
              "answer": "180",
              "hint": "50% of 120 is 60. Add it on.",
              "skill": "Ratios and percent"
            },
            {
              "q": "Each of the airship's 3 ballast tanks drains 5 liters every minute. Write that as −5 a minute for each tank. How many more liters did the 3 tanks hold 4 minutes ago? Time before now counts as negative. Work it out as 3 × (−5) × (−4).",
              "answer": "60",
              "hint": "3 × 5 × 4, then count the minus signs. Two make a plus.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: x ÷ 9 − 19 = 6",
              "answer": "225",
              "hint": "Add 19 to both sides, then multiply by 9.",
              "skill": "Equations"
            },
            {
              "q": "A round mat measures 62.8 inches around the edge. Using 3.14 for pi, how many inches is it across?",
              "answer": "20",
              "hint": "Around the edge ÷ 3.14.",
              "skill": "Area and perimeter"
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
            "example": "A line starts at 4 and climbs 3 each step: after 6 steps it is 3 × 6 + 4 = 22."
          },
          "problems": [
            {
              "q": "A line passes through (0, 20) and (5, 60). What is its slope?",
              "answer": "8",
              "hint": "Slope is the rise over the run: 40 ÷ 5.",
              "skill": "Linear relationships"
            },
            {
              "q": "A square pad has an area of 121 square feet. How many feet is it around the edge?",
              "answer": "44",
              "hint": "One side is the square root of 121, then four sides.",
              "skill": "Powers and roots"
            },
            {
              "q": "The pilot goes 12 feet east and then 35 feet north. In a straight line, how far is that from the start, in feet?",
              "answer": "37",
              "hint": "The two legs make a right angle: 12² + 35² = 1369.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "For what value of x do 6x + 23 and 2x + 39 come to the same number?",
              "answer": "4",
              "hint": "Set them equal, take 2x off both sides, then take 23 off.",
              "skill": "Equations"
            },
            {
              "q": "Two round tanks each have a radius of 10 feet and are 2 feet deep. Using 3.14 for pi, what is their total volume in cubic feet?",
              "answer": "1256",
              "hint": "One tank is 3.14 × 10 × 10 × 2 = 628. Then double it.",
              "skill": "Area and perimeter"
            }
          ]
        }
      },
      "orders": {
        "lesson": {
          "title": "Two totals",
          "points": [
            "Some orders build two separate totals.",
            "The last step says which one to keep."
          ],
          "example": "'Keep this total' means stop and write it down. The last step picks which total you type."
        },
        "skill": "Following directions",
        "steps": [
          "Write the height of Mist Isle in thousands of feet: 3.",
          "Multiply it by the degrees the air cools for every thousand feet, rounded down to 3. Keep this total.",
          "Now start a second total from the minutes the leg to Mist Isle took: 28.",
          "Take away the degrees the air is colder at Mist Isle than at Low Isle: 7.",
          "You now have two totals, one from step 2 and one from step 4. Type the larger of them."
        ],
        "prompt": "Your answer:",
        "answer": "21",
        "hint": "Step 3 begins a fresh total; it does not carry the first one forward. Step 5 asks for the bigger of the two, not for both joined."
      }
    },
    {
      "id": "sky-3",
      "title": "The Ridge Isle",
      "recon": {
        "lesson": {
          "title": "Wind against you",
          "points": [
            "When the log gives a speed for the ship and a speed for the wind, both are details, and a question may ask what they add up to.",
            "A word about wind is defined by its direction relative to the ship.",
            "A 'why' question: the reason usually sits in the sentences just before the action."
          ],
          "example": "'Riding downhill adds speed to a bike.' What does riding uphill do? Takes speed away."
        },
        "title": "Pilot's Log: Twenty Knots on the Nose",
        "passage": [
          "The Ridge Isle is at six thousand feet, and it is not straight up; it lies four miles to the north, along a line of hills that rises like a wall. An airship moves through the air at the speed of its propellers, about twenty knots, which is twenty-three miles an hour. The air itself moves too, and the ship goes over the ground at the two speeds added together. A wind from behind, a tailwind, adds. A wind from ahead, a headwind, subtracts. Today the wind is from the north at twenty knots, straight on the nose, and twenty minus twenty is zero. The ship, at full power, hangs over the valley going nowhere.",
          "The pilot's answer is height. Wind is not the same at every altitude; near the ground it is slowed by the hills, and higher up it can blow from a different direction entirely. The log from last year's flight says that above five thousand feet the wind on this leg comes from the west, not the north. So the pilot drops four bags of sand and climbs through the layer where the north wind lives. At five thousand five hundred feet the ship swings on its course as the wind changes, and the propellers begin to win.",
          "It takes two hours to cover four miles, most of it climbing. The Ridge Isle appears as a long green blade of rock with the mooring mast at its southern tip. The crew there has been watching the ship hang in the sky all morning like a moth on a window. Moored at 6,000 feet, the log says, west wind 10, four bags, two hours. The temperature is thirty-one degrees and the water in the gondola's jug has a skin of ice. The hawk, who simply flew, says nothing."
        ],
        "questions": [
          {
            "q": "How fast does the airship move through the air?",
            "choices": [
              "Two knots",
              "About twenty knots",
              "Ten knots",
              "Twelve knots"
            ],
            "answer": 1,
            "hint": "Paragraph 1, the second sentence.",
            "skill": "Finding details"
          },
          {
            "q": "How many bags of sand did the pilot drop on this leg?",
            "choices": [
              "Two",
              "Ten",
              "None",
              "Four"
            ],
            "answer": 3,
            "hint": "Paragraph 2, the fourth sentence, and the log line in paragraph 3.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 1, what is a 'headwind'?",
            "choices": [
              "A wind from the side of the ship, which pushes it off the course the pilot steers",
              "A wind from behind the ship, which adds to its speed over the ground far below",
              "The wind that blows across the top of the envelope and cools the helium inside",
              "A wind from ahead, which subtracts from the ship's speed over the ground"
            ],
            "answer": 3,
            "hint": "The sentence 'A wind from ahead, a headwind, subtracts.'",
            "skill": "Word meanings"
          },
          {
            "q": "Why does the pilot climb to escape the headwind?",
            "choices": [
              "Because the wind blows from a different direction higher up, according to last year's log",
              "Because the ship is always lighter up high, and four bags of sand will carry it over the hills",
              "Because the Ridge Isle lies directly above the valley and the only way to reach it is straight up",
              "Because the crew on the Ridge Isle had been watching all morning and signaled the ship to climb"
            ],
            "answer": 0,
            "hint": "Paragraph 2, the second and third sentences.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 1 mostly about?",
            "choices": [
              "The Ridge Isle's shape",
              "How the pilot climbs up through the layer of north wind to find the west wind above",
              "The two hours that it took to cover four miles, and what the crew saw from the rock",
              "How the ship's speed and the wind's speed add or subtract, and today's problem"
            ],
            "answer": 3,
            "hint": "Paragraph 1 explains tailwind and headwind and ends with the ship going nowhere.",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Wind math",
          "points": [
            "Speed over the ground: ship speed plus tailwind or minus headwind.",
            "Miles an hour over the ground: miles ÷ hours.",
            "Adding decimals: line up the points. 1.6 + 2.75 is 1.60 + 2.75 = 4.35.",
            "Two-step: bags dropped so far, then pounds."
          ],
          "example": "15 knots into a 4-knot headwind is 15 − 4 = 11 knots over the ground."
        },
        "problems": [
          {
            "q": "The ship does 20 knots and the wind is 20 knots on the nose. What is the ship's speed over the ground?",
            "answer": "0",
            "hint": "20 − 20.",
            "skill": "Adding and subtracting"
          },
          {
            "q": "Suppose the wind above the layer were a 10-knot tailwind instead. What would the speed over the ground be?",
            "answer": "30",
            "hint": "20 + 10.",
            "skill": "Adding and subtracting"
          },
          {
            "q": "The ship burned 2.75 gallons of fuel on the climb and 1.5 gallons on the level. How many gallons is that in all? (write a decimal)",
            "answer": "4.25",
            "hint": "Line up the points: 2.75 + 1.50.",
            "skill": "Decimals"
          },
          {
            "q": "The pilot has now dropped 2 bags, then 4 more. At 50 pounds a bag, how many pounds of sand have gone?",
            "answer": "300",
            "hint": "6 bags × 50.",
            "skill": "Multi-step problems"
          },
          {
            "q": "The leg took 2 hours and covered 4 miles. How many miles an hour is that over the ground?",
            "answer": "2",
            "hint": "4 ÷ 2.",
            "skill": "Dividing"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "What is that sentence doing there?",
            "points": [
              "Every sentence in a log is earning its place: setting the scene, explaining a cause, or supplying a fact the next move depends on.",
              "Delete it in your head. If the sentence after it stops making sense, you have found the job.",
              "A choice that only retells the sentence has named no job at all."
            ],
            "example": "A story mentions in passing that the ferry stops running at six. Nothing happens for two pages. Then somebody misses it. That sentence was doing a job the whole time."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea of the whole log?",
              "choices": [
                "The propellers push the ship through the air at about twenty knots.",
                "When the wind cancels the ship out, the pilot's move is to change height and find a different wind, and even then the leg is slow.",
                "Patience is the most important quality a pilot can possibly have.",
                "The wind blows in the same direction at every height above the valley."
              ],
              "answer": 1,
              "hint": "A ship stopped dead in the sky, a fact about wind at different heights, and two hours to cover four miles. Find the choice that holds all three.",
              "skill": "Central idea and evidence",
              "evidence": "The pilot's answer is height."
            },
            {
              "q": "Claim: a ship's speed over the ground is not the same as its speed through the air. Which sentence from the log best supports that claim?",
              "choices": [
                "Wind is not the same at every altitude; near the ground it is slowed by the hills, and higher up it can blow from a different direction entirely.",
                "The log from last year's flight says that above five thousand feet the wind on this leg comes from the west, not the north.",
                "Moored at 6,000 feet, the log says, west wind 10, four bags, two hours.",
                "The air itself moves too, and the ship goes over the ground at the two speeds added together."
              ],
              "answer": 3,
              "hint": "Two of these say what a wind does without ever saying what it does it to. The claim needs the sentence that names both speeds at once.",
              "skill": "Finding details",
              "evidence": "The air itself moves too, and the ship goes over the ground at the two speeds added together."
            },
            {
              "q": "What job does the sentence about last year's flight log do?",
              "choices": [
                "It shows that this crossing has never been attempted before, so the pilot has no record of the wind on this leg to work from.",
                "It explains how the four bags of sand are carried aboard and hung along the rails where the pilot can reach them.",
                "It sets this airship against the one flown a year ago, and shows which of the two made the climb to the Ridge Isle in less time.",
                "It supplies the one fact the pilot's whole plan rests on: what the wind does above five thousand feet."
              ],
              "answer": 3,
              "hint": "Take that sentence out and the next one stops making sense. Ask what the pilot would be guessing at without it.",
              "skill": "Author's purpose and structure",
              "evidence": "The log from last year's flight says that above five thousand feet the wind on this leg comes from the west, not the north."
            },
            {
              "q": "The log says the propellers 'begin to win'. What does win mean as it is used here?",
              "choices": [
                "The ship finally starts making progress over the ground",
                "The propellers have started turning faster than they were turning before",
                "The crew waiting on the island begin cheering for the airship",
                "The wind has dropped away and stopped blowing across the valley"
              ],
              "answer": 0,
              "hint": "Something had been beating the propellers earlier in the log, and it was not a person. Ask what they are winning against.",
              "skill": "Word meanings",
              "evidence": "At five thousand five hundred feet the ship swings on its course as the wind changes, and the propellers begin to win"
            },
            {
              "q": "Paragraphs 1 and 3 together explain why the crew on the rock watched the ship all morning 'like a moth on a window'. What does that picture capture?",
              "choices": [
                "The ship was flying slow circles around the island.",
                "The silver envelope was catching the sunlight and throwing it back, so the ship shone against the sky all morning long.",
                "The crew could only make the ship out through thick mist, so it showed as a faint gray shape against the sky all morning.",
                "The ship was working at full power and covering no ground, so it seemed to hang in one place for hours."
              ],
              "answer": 3,
              "hint": "Picture a moth at a window: all the effort in the world and no distance covered. Paragraph one gives you the arithmetic behind that picture.",
              "skill": "Reading between the lines",
              "evidence": "The ship, at full power, hangs over the valley going nowhere."
            }
          ]
        }
      },
      "navByGrade": {
        "3": {
          "lesson": {
            "title": "Grade 3 numbers",
            "points": [
              "Multiplication facts: 4 × 7 means 4 groups of 7.",
              "Sharing equally is dividing.",
              "Adding three numbers: add two, then add the third.",
              "Fractions with the same bottom: add the tops."
            ],
            "example": "4 × 7 = 28."
          },
          "problems": [
            {
              "q": "The pilot ties 9 ropes with 9 knots in each. How many knots is that?",
              "answer": "81",
              "hint": "9 × 9.",
              "skill": "Multiplying"
            },
            {
              "q": "The pilot ties 81 knots, the same number on each of 9 ropes. How many knots are on each rope?",
              "answer": "9",
              "hint": "How many 9s make 81?",
              "skill": "Dividing"
            },
            {
              "q": "The pilot counted 149 miles, then found 159 more, then 81 more. How many miles in all?",
              "answer": "389",
              "hint": "149 + 159 first. Then add 81.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "The pilot finished 2/6 of the day's work before the break and 1/6 after. What fraction is done? (write a fraction)",
              "answer": "3/6",
              "hint": "Same bottom. Add the tops.",
              "skill": "Fractions"
            },
            {
              "q": "A platform is 5 squares wide and 5 squares long. How many squares is that?",
              "answer": "25",
              "hint": "5 rows of 5, so 5 × 5.",
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
            "example": "3 × (8 − 2) + 4 = 22: parentheses, then multiply, then add."
          },
          "problems": [
            {
              "q": "The pilot has 46.25 minutes of flight. Each leg takes 1.85 minutes. How many legs is that enough for?",
              "answer": "25",
              "hint": "Move both points 2 places to the right: 4625 ÷ 185.",
              "skill": "Decimals"
            },
            {
              "q": "Of 200 miles, 20% are set aside. How many is that?",
              "answer": "40",
              "hint": "20% of 200: 20% is 20/100.",
              "skill": "Ratios and percent"
            },
            {
              "q": "On the pilot's chart, every 1 inch stands for 3 miles. A leg is 8 inches on the chart. How many miles is it?",
              "answer": "24",
              "hint": "8 ÷ 1 = 8 groups. Each group has 3 miles.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The pilot works out 5 × (12 − 3) + 3. What is it?",
              "answer": "48",
              "hint": "Parentheses first, then multiply, then add.",
              "skill": "Order of operations"
            },
            {
              "q": "On a winter day it was −10 degrees at dawn. By noon it was 7 degrees. By how many degrees did it rise?",
              "answer": "17",
              "hint": "From −10 up to 0 is 10, then 7 more.",
              "skill": "Negative numbers"
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
            "example": "2x + 11 = 25, so 2x = 14, so x = 7."
          },
          "problems": [
            {
              "q": "16 legs needed 36 minutes altogether. How many minutes is that for one leg?",
              "answer": "2.25",
              "hint": "A rate is the total shared out: 36 ÷ 16.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The first pass was 60 miles long. The second pass was 20% shorter. How many miles long was the second pass?",
              "answer": "48",
              "hint": "20% of 60 is 12. Then take it off.",
              "skill": "Ratios and percent"
            },
            {
              "q": "On a winter day the thermometer read −15 degrees at dawn. It rose 24 degrees by noon, then fell 9 degrees by dark. What does it read at dark?",
              "answer": "0",
              "hint": "Start at −15, go up 24 to 9, then down 9.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: 3x + 7 = 22",
              "answer": "5",
              "hint": "Take 7 off both sides first, then divide by 3.",
              "skill": "Equations"
            },
            {
              "q": "On the plan, 1 inch stands for 2 feet. The marked length measures 10 inches on the plan. How long is it really, in feet?",
              "answer": "20",
              "hint": "Every inch is 2 feet, so 10 × 2.",
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
            "example": "Start at 10 and add 6 each hour: after 5 hours, 6 × 5 + 10 = 40."
          },
          "problems": [
            {
              "q": "The pilot has already flown 24 miles and flies 7 more every hour. After 8 more hours, how many miles has the pilot flown in all?",
              "answer": "80",
              "hint": "This is the straight-line rule y = mx + b: 7 × 8 + 24.",
              "skill": "Linear relationships"
            },
            {
              "q": "Each crate holds 3² sandbags. There are 8 crates. How many sandbags in all?",
              "answer": "72",
              "hint": "3² means 3 × 3 = 9. Then × 8.",
              "skill": "Powers and roots"
            },
            {
              "q": "The pilot runs a rope from the top of a 9-foot mast to a point 40 feet away on the ground. How long is the rope, in feet?",
              "answer": "41",
              "hint": "Right triangle: a² + b² = c². 9² + 40² = 81 + 1600 = 1681. The rope is the square root of that.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "Solve for x: 10x + 3 = 5x + 13",
              "answer": "2",
              "hint": "Take 5x off both sides to get 5x + 3 = 13, then take 3 off both sides and divide.",
              "skill": "Equations"
            },
            {
              "q": "The airship's gas bag holds 2 × 10^5 cubic feet of gas. Written out in full, what number is that?",
              "answer": "200000",
              "hint": "10^5 is 1 with 5 zeros after it: 100,000. Then × 2.",
              "skill": "Powers and roots"
            }
          ]
        }
      },
      "orders": {
        "lesson": {
          "title": "Count the letters",
          "points": [
            "Write the word out and count on paper.",
            "Then follow the arithmetic exactly."
          ],
          "example": "W-I-N-D is four letters."
        },
        "skill": "Following directions",
        "steps": [
          "Write the word HEADWIND.",
          "Count its letters.",
          "Multiply that count by the ship's speed through the air in knots: 20.",
          "Subtract the height of the Ridge Isle in hundreds of feet: 60.",
          "The log spells its counts out. Do not type digits: write your answer as words, in capital letters. (35 would be THIRTY-FIVE.)"
        ],
        "prompt": "Your answer:",
        "answer": "ONE HUNDRED",
        "accept": [
          "one hundred",
          "One hundred",
          "ONE HUNDRED.",
          "one hundred.",
          "A HUNDRED",
          "a hundred",
          "onehundred",
          "ONEHUNDRED",
          "one-hundred",
          "ONE-HUNDRED"
        ],
        "hint": "HEADWIND has eight letters. Multiply by the knots and take the height off, then read step 5 again to see how the log wants it written."
      }
    },
    {
      "id": "sky-4",
      "title": "Storm Isle",
      "recon": {
        "lesson": {
          "title": "Counting a storm",
          "points": [
            "When the log gives a rule for measuring something, the rule is a detail. Use it.",
            "Seconds and miles are exact.",
            "A 'why' question: look for 'so' or 'so that'; the reason comes right after it."
          ],
          "example": "'A hose fills a bucket in two minutes.' How long for three buckets? Six minutes."
        },
        "title": "Pilot's Log: Five Seconds a Mile",
        "passage": [
          "Storm Isle earns its name in the afternoon. Warm air from the valley rises up the hills, cools, and by two o'clock it has built a thunderhead, a cloud like a tower, several miles tall. Its flat top is miles above the island. There is lightning inside it. No airship flies into a thunderstorm. The envelope is a bag of gas under a cloud that makes electricity, and the wind inside a thunderhead can throw a ship up or down a thousand feet in a minute. The rule is simple and old: if you can hear it, you are too close.",
          "The pilot measures the storm the way sailors and farmers have for centuries. Light arrives at once; sound takes about five seconds to travel a mile. So the pilot counts from the flash to the thunder: twenty seconds, four miles. Fifteen seconds, three miles, coming closer. The ship is moored at the Ridge Isle with double ropes, the helium is vented a little so that the ship sits low and heavy, and the crew waits in the tents on the rock. The sky goes dark green. The rain arrives sideways.",
          "It passes in an hour, the way afternoon storms do. Behind it the air is washed and cold and completely still. At four the pilot casts off into the calm. The airship climbs three thousand feet in forty minutes. The ship moors at Storm Isle in sunlight, on wet rock, with the last of the thunder grumbling off to the east, thirty seconds from flash to sound and getting longer. Storm Isle, 9,000 feet, the log says, waited one hour, flew forty minutes, 22 degrees. The hawk sat out the storm under the gondola and would like that noted."
        ],
        "questions": [
          {
            "q": "How tall is the thunderhead?",
            "choices": [
              "Nine hundred feet",
              "Several miles",
              "Nine thousand feet",
              "Ninety feet"
            ],
            "answer": 1,
            "hint": "Paragraph 1, the second sentence.",
            "skill": "Finding details"
          },
          {
            "q": "How many seconds does sound take to travel a mile?",
            "choices": [
              "One second a mile",
              "Twenty seconds a mile",
              "About five",
              "Sixty seconds a mile"
            ],
            "answer": 2,
            "hint": "Paragraph 2, the second sentence.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 1, what is a 'thunderhead'?",
            "choices": [
              "A crack of thunder heard far away",
              "The flash of lightning inside the cloud",
              "A tall tower-shaped storm cloud with lightning inside",
              "The wind that throws a ship up or down"
            ],
            "answer": 2,
            "hint": "The sentence 'a thunderhead, a cloud like a tower'.",
            "skill": "Word meanings"
          },
          {
            "q": "Why is the helium vented a little before the storm?",
            "choices": [
              "To save the helium for the last leg of all, up to the summit isle at twelve thousand feet",
              "Because a bag of gas under a cloud that makes electricity is a dangerous thing to leave full",
              "So the ship sits low and heavy at the mooring instead of straining at the ropes",
              "So that the rain arriving sideways cannot collect on the top of the envelope and weigh it down"
            ],
            "answer": 2,
            "hint": "Paragraph 2, the sentence with 'sits low and heavy'.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 2 mostly about?",
            "choices": [
              "Farmers",
              "Why no airship ever flies into a thunderstorm, and the rule about hearing it",
              "Measuring the storm's distance by counting, and waiting it out safely",
              "How a thunderhead gets built by warm air rising up the hills all afternoon"
            ],
            "answer": 2,
            "hint": "The first sentence of paragraph 2 says the pilot 'measures the storm', and the rest is the count and the wait.",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Storm math",
          "points": [
            "Seconds ÷ 5 = miles to the storm.",
            "Minutes between clock times: count the hours, then times 60.",
            "Feet climbed ÷ minutes: feet a minute.",
            "Two-step: seconds to miles, then compared."
          ],
          "example": "35 seconds ÷ 5 = 7 miles."
        },
        "problems": [
          {
            "q": "The pilot counts 20 seconds from flash to thunder. At 5 seconds a mile, how many miles away is the storm?",
            "answer": "4",
            "hint": "20 ÷ 5.",
            "skill": "Dividing"
          },
          {
            "q": "Later the count is 30 seconds. How many miles away is the storm then?",
            "answer": "6",
            "hint": "30 ÷ 5.",
            "skill": "Dividing"
          },
          {
            "q": "The ship climbed 3,000 feet in 40 minutes. How many feet a minute is that?",
            "answer": "75",
            "hint": "3,000 ÷ 40.",
            "skill": "Dividing"
          },
          {
            "q": "The storm arrived at 2:00 and passed in an hour, and the ship cast off at 4:00. How many minutes did the pilot wait after the storm passed?",
            "answer": "60",
            "hint": "The storm passed at 3:00. 3:00 to 4:00.",
            "skill": "Multi-step problems"
          },
          {
            "q": "A thunderhead is 30,000 feet tall and its top is at 34,000 feet. How high is its base?",
            "answer": "4000",
            "accept": [
              "4,000"
            ],
            "hint": "34,000 − 30,000.",
            "skill": "Adding and subtracting"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "The phrase as the log uses it",
            "points": [
              "Cover the phrase and read the sentence with a hole in it. What belongs in the hole?",
              "A short rule or a picture is doing a job, not giving a definition. Ask what it tells somebody to do, or what it makes them see.",
              "Put your choice back in and read it again. Three of the four will make the log say something it never said."
            ],
            "example": "'Red sky at night.' That is not a fact about paint. It is a prediction, and only the rest of the saying tells you what it predicts."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea of the whole log?",
              "choices": [
                "Sound takes about five seconds to travel a single mile, so the thunder always comes after the flash.",
                "The storm is not fought but measured and waited out, and the flight happens in the calm it leaves behind.",
                "Weather is the greatest danger facing anybody who travels, by air or by any other means.",
                "The pilot flew straight through the thunderhead to reach the island before the rain arrived."
              ],
              "answer": 1,
              "hint": "How the cloud is built, how it is measured, and what the pilot does at four o'clock. Find the choice that holds all three.",
              "skill": "Central idea and evidence",
              "evidence": "No airship flies into a thunderstorm."
            },
            {
              "q": "Claim: an airship has more to fear from a thunderstorm than most flying machines would. Which sentence from the log best supports that claim?",
              "choices": [
                "Warm air from the valley rises up the hills, cools, and by two o'clock it has built a thunderhead, a cloud like a tower, several miles tall.",
                "The ship is moored at the Ridge Isle with double ropes, the helium is vented a little so that the ship sits low and heavy, and the crew waits in the tents on the rock.",
                "The envelope is a bag of gas under a cloud that makes electricity, and the wind inside a thunderhead can throw a ship up or down a thousand feet in a minute.",
                "The ship moors at Storm Isle in sunlight, on wet rock, with the last of the thunder grumbling off to the east, thirty seconds from flash to sound and getting longer."
              ],
              "answer": 2,
              "hint": "Most of these describe the storm or what the crew did. The claim asks why an airship in particular is at risk. Find the sentence that names what the ship is actually made of.",
              "skill": "Finding details",
              "evidence": "The envelope is a bag of gas under a cloud that makes electricity, and the wind inside a thunderhead can throw a ship up or down a thousand feet in a minute."
            },
            {
              "q": "Why does the log describe how a thunderhead is built before it says that no airship flies into one?",
              "choices": [
                "To explain how warm rising air is used to lift the airship.",
                "To give the height of the mooring mast on the island.",
                "So the rule that follows reads as a conclusion drawn from what the cloud is, rather than as an old superstition.",
                "To set this storm against the cloud around the island below."
              ],
              "answer": 2,
              "hint": "Read the paragraph in order: what the cloud does, then what the rule is. Ask which of those two the other one is resting on.",
              "skill": "Author's purpose and structure",
              "evidence": "Warm air from the valley rises up the hills, cools, and by two o'clock it has built a thunderhead, a cloud like a tower, several miles tall."
            },
            {
              "q": "The log gives the rule 'if you can hear it, you are too close'. What is that rule telling a pilot to do?",
              "choices": [
                "Listen carefully for the storm and then plan a course that flies around the edge of it",
                "Climb the ship high enough above the cloud that the thunder can no longer be heard",
                "Treat the sound of thunder itself as the signal to stay on the ground",
                "Wait until the thunder has grown loud before casting off from the mooring mast"
              ],
              "answer": 2,
              "hint": "The rule turns one thing you can notice into one thing you must do. Read on to see what the pilot actually did after hearing thunder.",
              "skill": "Word meanings",
              "evidence": "The rule is simple and old: if you can hear it, you are too close."
            },
            {
              "q": "Paragraphs 2 and 3 together show the storm was moving away by the time the ship reached Storm Isle. What shows it?",
              "choices": [
                "The rain had stopped falling sideways across the rock.",
                "The crew in the tents reported that the sky over the rock had turned from green back to its ordinary color.",
                "The count from flash to thunder had grown from fifteen seconds to thirty, so the storm was moving away.",
                "The helium had been vented, so the ship was sitting low and heavy on its double ropes and could ride out anything."
              ],
              "answer": 2,
              "hint": "Paragraph two teaches you what the seconds between flash and thunder mean. Paragraph three gives you the count as the ship moors. Compare it with the earlier ones.",
              "skill": "Reading between the lines",
              "evidence": "thirty seconds from flash to sound and getting longer"
            }
          ]
        }
      },
      "navByGrade": {
        "3": {
          "lesson": {
            "title": "Grade 3 numbers",
            "points": [
              "Multiplication facts: 3 × 8 means 3 groups of 8.",
              "Sharing equally is dividing.",
              "Adding three numbers: add two, then add the third.",
              "Fractions with the same bottom: add or take away the tops; the bottom stays."
            ],
            "example": "3 × 8 = 24."
          },
          "problems": [
            {
              "q": "The pilot counted 5 miles yesterday and three times as many today. How many miles today?",
              "answer": "15",
              "hint": "Three times 5: 5 + 5 + 5.",
              "skill": "Multiplying"
            },
            {
              "q": "The pilot splits a 25-mile flight into legs of 5 miles. How many legs is that?",
              "answer": "5",
              "hint": "How many 5s make 25?",
              "skill": "Dividing"
            },
            {
              "q": "The pilot plans a 406-minute flight. 114 minutes have gone by. How many minutes are left?",
              "answer": "292",
              "hint": "406 − 114.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "4/6 of the day's work was done yesterday. What fraction is still to do? (write a fraction)",
              "answer": "2/6",
              "hint": "The whole job is 6/6. Take 4/6 off it.",
              "skill": "Fractions"
            },
            {
              "q": "The tally stood at 246 minutes and 700 more were added. What is the tally now?",
              "answer": "946",
              "hint": "246 + 700.",
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
            "example": "8 + 3 × 5 = 23: multiply first, then add."
          },
          "problems": [
            {
              "q": "The airship climbs 9/16 of the way up to the Summit Isle in 3/4 of an hour. At that rate, how much of the way does it climb in one hour? (write a fraction)",
              "answer": "3/4",
              "hint": "For one hour, divide the amount by the time: 9/16 ÷ 3/4 = 9/16 × 4/3. Then simplify.",
              "skill": "Fractions"
            },
            {
              "q": "60 of the 240 minutes are set aside. What percent is that? (write just the number)",
              "answer": "25",
              "accept": [
                "25%"
              ],
              "hint": "60 out of 240, then out of 100.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The ship flies 1 mile every 3 minutes. How many miles does it fly in 12 minutes?",
              "answer": "4",
              "hint": "12 ÷ 3 = 4 groups. Each group has 1 mile.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The pilot works out 7 + 9 × 6. What is it?",
              "answer": "61",
              "hint": "Multiply before you add.",
              "skill": "Order of operations"
            },
            {
              "q": "On a winter day the thermometer read 6 degrees at dawn. By dark it had fallen to −10 degrees. By how many degrees did it fall?",
              "answer": "16",
              "hint": "From 6 down to 0 is 6, then 10 more.",
              "skill": "Negative numbers"
            }
          ]
        },
        "7": {
          "lesson": {
            "title": "Grade 7 numbers",
            "points": [
              "A unit rate is the total divided by how many: 14 ÷ 4 = 3.5 for one.",
              "Percent change: find that percent of the starting number, then add it on or take it off.",
              "One minus sign makes a minus answer: 30 ÷ (−5) = −6. Two make a plus: (−30) ÷ (−5) = 6.",
              "A two-step equation: undo the adding first, then undo the multiplying."
            ],
            "example": "50 − 6x = 20, so 6x = 30, so x = 5."
          },
          "problems": [
            {
              "q": "One leg needs 2.25 minutes. How many minutes do 8 legs need?",
              "answer": "18",
              "hint": "8 × 2.25.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The first pass took 240 minutes and the second took 264 minutes. By what percent did the time change? (write just the number)",
              "answer": "10",
              "accept": [
                "10%"
              ],
              "hint": "The change is 24. 24 out of 240, then out of 100.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The airship sinks 6 meters every minute. Write that as −6 a minute. When was it 72 meters higher than it is now? Work it out as 72 ÷ (−6), and write minutes before now as a negative number.",
              "answer": "-12",
              "accept": [
                "−12"
              ],
              "hint": "72 ÷ 6, and one minus sign makes the answer negative.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: 36 − 3x = 9",
              "answer": "9",
              "hint": "Move 3x to the right and 9 to the left: 3x = 27.",
              "skill": "Equations"
            },
            {
              "q": "A round mat has a radius of 5 inches. Using 3.14 for pi, how many inches is it around the edge?",
              "answer": "31.4",
              "hint": "Across is 2 × 5 = 10. Then × 3.14.",
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
            "example": "Start with 45 and drop 5 every hour: after 6 hours, 45 − 5 × 6 = 15."
          },
          "problems": [
            {
              "q": "The pilot starts with 52 sandbags and drops 4 every hour. How many are left after 8 hours?",
              "answer": "20",
              "hint": "4 × 8 = 32 dropped, taken off 52.",
              "skill": "Linear relationships"
            },
            {
              "q": "What is the square root of 144?",
              "answer": "12",
              "hint": "What number times itself makes 144?",
              "skill": "Powers and roots"
            },
            {
              "q": "A 29-foot rope runs from the top of a mast to a point 21 feet away on the ground. How tall is the mast, in feet?",
              "answer": "20",
              "hint": "a² = c² − b² = 841 − 441 = 400. Then take the square root.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "Solve for x: 3x = x + 6",
              "answer": "3",
              "hint": "Take x off both sides: 2x = 6. Then divide by 2.",
              "skill": "Equations"
            },
            {
              "q": "A round tank has a radius of 5 feet and holds 471 cubic feet. Using 3.14 for pi, how many feet deep is it?",
              "answer": "6",
              "hint": "The floor's area is 3.14 × 5 × 5 = 78.5. Divide the volume by that.",
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
            "Check the log before you act."
          ],
          "example": "'Cast off at four, unless you can still hear thunder within a mile.'"
        },
        "skill": "Following directions",
        "steps": [
          "Write the seconds the pilot counted between the last flash and its thunder: 30.",
          "Divide by 5 to turn those seconds into miles.",
          "Multiply by the ropes holding the ship at the mooring: 2.",
          "Add the temperature at Storm Isle: 22.",
          "Type the result, unless the miles you found in step 2 come to less than one, in which case type WAIT."
        ],
        "prompt": "Your answer:",
        "answer": "34",
        "hint": "Turn the seconds into miles before anything else. Step 5 only changes the answer if that mile count came out under one."
      }
    },
    {
      "id": "sky-5",
      "title": "The Summit Isle",
      "recon": {
        "lesson": {
          "title": "The whole flight, in order",
          "points": [
            "The last log looks back over the five islands. A 'mostly about' question wants the big point, not one detail.",
            "Heights are details. Keep them in order.",
            "The main idea of the closing paragraph is what the writer wants you to keep."
          ],
          "example": "'The cabin sits at eight thousand feet.' How high? Eight thousand feet."
        },
        "title": "Pilot's Log: Thin Air",
        "passage": [
          "The summit isle is at twelve thousand feet, and the last leg is the first one where the air itself is the problem. Air gets thinner as you go up, because there is less of it pressing down from above. At twelve thousand feet each breath holds only about two thirds of the air a breath holds in the valley. The crew feel it as a headache and a heaviness, and the pilot's rule is the mountaineer's rule: go slow, drink water, and if anyone gets confused or sick, go down. The helium feels it too. Thin air pushes up less, so the higher the ship goes the less lift it has, and the pilot drops six.",
          "The islands, in order, were a lesson in air. Low Isle was lift: a bag lighter than the air around it rises. Mist Isle was cooling: air cools as it climbs, and cold air makes cloud. The Ridge Isle was wind: it blows differently at different heights, and a pilot uses that. Storm Isle was weather: warm air rising builds a storm, and you count the seconds and wait. And the summit isle is pressure: less air above means less air in every breath. None of the islands is real. All five lessons are.",
          "The summit isle is a single peak of gray rock above everything. On it stand a mast and a hut. It has a view of the whole valley and the four islands below it. They are stacked in the sky like steps. The pilot moors at 12,000 feet at noon, writes the last line, six bags, fifty minutes, 12 degrees, and sits on the rock with the crew in the thin cold air, breathing slowly, looking down. The hawk circles once, very high, and then folds its wings and drops, and is out of sight in the valley before anyone has finished watching it go."
        ],
        "questions": [
          {
            "q": "How high is the summit isle?",
            "choices": [
              "Twelve thousand feet",
              "Nine thousand",
              "Twenty thousand",
              "Six thousand"
            ],
            "answer": 0,
            "hint": "The first sentence of paragraph 1.",
            "skill": "Finding details"
          },
          {
            "q": "What was the lesson of the Ridge Isle?",
            "choices": [
              "Lift",
              "Cooling",
              "Warm air rising builds a storm you must wait out",
              "Wind blows differently at different heights"
            ],
            "answer": 3,
            "hint": "Paragraph 2, the sentence beginning 'The Ridge Isle was wind'.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 1, what does 'thinner' air mean?",
            "choices": [
              "Air that is narrow",
              "Air with less in it, so each breath holds less",
              "Cold air",
              "Air that has been cooled until its water comes out as droplets"
            ],
            "answer": 1,
            "hint": "The second and third sentences of paragraph 1 explain it.",
            "skill": "Word meanings"
          },
          {
            "q": "Why does the pilot have to drop six bags on this last leg?",
            "choices": [
              "Because thin air pushes up less, so the higher the ship goes the less lift it has",
              "Because most of the sand was dropped on the legs below",
              "Because the crew is tired",
              "Because each breath at twelve thousand feet holds only about two thirds of the air"
            ],
            "answer": 0,
            "hint": "The last two sentences of paragraph 1.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 2 mostly about?",
            "choices": [
              "The hut",
              "The five islands as five lessons about air, and which parts were real",
              "The headache",
              "How the thin air makes the crew feel and what the pilot's rule about it is"
            ],
            "answer": 1,
            "hint": "Paragraph 2 names each island and its lesson and ends with 'All five lessons are' real.",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Summit math",
          "points": [
            "Two thirds of a breath: × 2 ÷ 3.",
            "Different bottoms: make them the same first. 1/2 + 1/4 = 2/4 + 1/4 = 3/4.",
            "Feet a minute: feet climbed ÷ minutes.",
            "Two-step: add the bags dropped, then take that from the bags carried."
          ],
          "example": "1 + 3 + 0 + 5 = 9 bags in four legs."
        },
        "problems": [
          {
            "q": "The pilot flew 1/3 of the last leg in cloud and 1/2 of it in clear air. How much of the leg is that? (write a fraction)",
            "answer": "5/6",
            "hint": "Make the bottoms the same: 1/3 is 2/6 and 1/2 is 3/6. Then add the tops.",
            "skill": "Fractions"
          },
          {
            "q": "The ship carried 20 bags of sand. After 12 are dropped, how many are left?",
            "answer": "8",
            "hint": "20 − 12.",
            "skill": "Adding and subtracting"
          },
          {
            "q": "A breath in the valley holds 30 units of air. At the summit it holds two thirds of that. How many units?",
            "answer": "20",
            "hint": "30 ÷ 3 = 10, then 10 × 2.",
            "skill": "Fractions"
          },
          {
            "q": "Storm Isle is at 9,000 feet and the summit at 12,000. The leg took 50 minutes. How many feet a minute is that?",
            "answer": "60",
            "hint": "3,000 ÷ 50.",
            "skill": "Dividing"
          },
          {
            "q": "The temperatures at the five islands were 48, 41, 31, 22 and 12 degrees. How many degrees colder is the summit than Low Isle?",
            "answer": "36",
            "hint": "48 − 12.",
            "skill": "Adding and subtracting"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "The conclusion lives between paragraphs",
            "points": [
              "The last question needs one fact from one paragraph and another fact from somewhere else. Plan on both.",
              "In a log, look for what changed between the first entry and the last. The change is usually where the answer is.",
              "A choice that needs something the log never mentions is out, however sensible it sounds on its own."
            ],
            "example": "Paragraph one: the lamp oil was already half gone. Paragraph three: the crew is still writing at midnight. So somebody is about to be reading by starlight. Neither line says it alone."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea of the whole log?",
              "choices": [
                "The five invented islands were built to teach five real things about air, and the last one is the height where the air itself becomes the difficulty.",
                "At twelve thousand feet each breath holds about two thirds of the air a breath holds in the valley.",
                "Nobody should ever climb higher than they are used to climbing.",
                "The islands are real places that an airship can be flown to."
              ],
              "answer": 0,
              "hint": "The second paragraph does something none of the earlier ones did: it looks back at all five islands at once. Find the choice that takes that into account.",
              "skill": "Central idea and evidence",
              "evidence": "None of the islands is real. All five lessons are."
            },
            {
              "q": "Claim: thin air makes trouble for the ship as well as for the people aboard it. Which sentence from the log best supports that claim?",
              "choices": [
                "The crew feel it as a headache and a heaviness, and the pilot's rule is the mountaineer's rule: go slow, drink water, and if anyone gets confused or sick, go down.",
                "And the summit isle is pressure: less air above means less air in every breath.",
                "Low Isle was lift: a bag lighter than the air around it rises.",
                "Thin air pushes up less, so the higher the ship goes the less lift it has, and the pilot drops six."
              ],
              "answer": 3,
              "hint": "The claim needs the ship half spelled out. Two of these are only about breathing, and one is about a different island.",
              "skill": "Finding details",
              "evidence": "Thin air pushes up less, so the higher the ship goes the less lift it has, and the pilot drops six."
            },
            {
              "q": "Why does the second paragraph list all five islands in order?",
              "choices": [
                "To give directions for anyone flying the same route again.",
                "To show that the invented journey was a way of laying five real facts about air side by side.",
                "To explain which of the islands was the most difficult to reach.",
                "To describe what each of the five islands looks like from the air, so the reader can picture them stacked in the sky."
              ],
              "answer": 1,
              "hint": "Nothing in that paragraph is new; every island in it has already been flown. Read its last two sentences and ask what the list was building toward.",
              "skill": "Author's purpose and structure",
              "evidence": "The islands, in order, were a lesson in air."
            },
            {
              "q": "The log calls the pilot's rule 'the mountaineer's rule'. Why is that a good name for it?",
              "choices": [
                "It is the rule people follow in the same thin air on a mountain, and the ship has climbed to that same height",
                "It was first written down by a mountaineer who once flew this same route and left the rule behind in the ship's log",
                "It applies only while the airship is moored on solid rock",
                "It means the crew are expected to climb the peak on foot"
              ],
              "answer": 0,
              "hint": "The words just before it tell you what the crew are feeling and why. Ask who else feels exactly that at twelve thousand feet.",
              "skill": "Word meanings",
              "evidence": "The crew feel it as a headache and a heaviness, and the pilot's rule is the mountaineer's rule: go slow, drink water, and if anyone gets confused or sick, go down."
            },
            {
              "q": "Paragraphs 1 and 2 together explain why this island is the right place for the log to finish. Why is it?",
              "choices": [
                "It is the only one of the five islands with a mooring mast and a hut on it, so there is nowhere else up in the sky that the airship could finish.",
                "It is the one height where air stops being something the ship uses and becomes something the crew have to manage, which completes the set.",
                "It is the first island the airship visited on the journey.",
                "It is the only island that can be found on a map of the valley."
              ],
              "answer": 1,
              "hint": "Paragraph one names the new problem at this height. Paragraph two names what each island was for. Ask what this last one adds that the other four could not.",
              "skill": "Reading between the lines",
              "evidence": "the last leg is the first one where the air itself is the problem"
            }
          ]
        }
      },
      "navByGrade": {
        "3": {
          "lesson": {
            "title": "Grade 3 numbers",
            "points": [
              "Multiplication facts: 4 × 8 means 4 groups of 8.",
              "Sharing equally is dividing.",
              "Adding three numbers: add two, then add the third.",
              "Fractions with the same bottom: add the tops."
            ],
            "example": "4 × 8 = 32."
          },
          "problems": [
            {
              "q": "The pilot stacks crates in 6 rows of 7. How many crates is that?",
              "answer": "42",
              "hint": "6 × 7.",
              "skill": "Multiplying"
            },
            {
              "q": "63 crates are stacked in 9 equal rows. How many crates are in each row?",
              "answer": "7",
              "hint": "63 split into 9 equal parts.",
              "skill": "Dividing"
            },
            {
              "q": "The log shows 330 breaths, then 58 more are added and 76 are taken off. What does the log show now?",
              "answer": "312",
              "hint": "Add 330 and 58 first, then take 76 off.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "Add: 3/8 + 3/8 (write a fraction)",
              "answer": "6/8",
              "hint": "Same bottom. 3 + 3 on top.",
              "skill": "Fractions"
            },
            {
              "q": "A mat is 7 feet wide and 2 feet long. How many feet is it all the way around the edge?",
              "answer": "18",
              "hint": "Two sides of 7 and two sides of 2: 7 + 7 + 2 + 2.",
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
            "example": "(3 + 5) × 7 = 56: parentheses first, then multiply."
          },
          "problems": [
            {
              "q": "The plan allows 275.75 minutes. The pilot uses 86.45 minutes on the first leg and 98.15 on the second. How many minutes are left?",
              "answer": "91.15",
              "hint": "Add the two amounts used first, then take that from 275.75. Line up the points.",
              "skill": "Decimals"
            },
            {
              "q": "10% of the breaths counted is 6. How many were counted in all?",
              "answer": "60",
              "hint": "6 is 10 hundredths of the whole: 6 ÷ 10 × 100.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The pilot counts 36 clouds and 45 birds. In its simplest form, what is the ratio of clouds to birds? (write it like 2:3)",
              "answer": "4:5",
              "accept": [
                "4 to 5"
              ],
              "hint": "Divide both by 9.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The pilot works out (4 + 2) × 10. What is it?",
              "answer": "60",
              "hint": "Parentheses first, then multiply.",
              "skill": "Order of operations"
            },
            {
              "q": "One winter night it was −8 degrees at midnight and rose 6 degrees by dawn. What does the thermometer read at dawn?",
              "answer": "-2",
              "accept": [
                "−2"
              ],
              "hint": "Start at −8 and count 6 steps up.",
              "skill": "Negative numbers"
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
              "A two-step equation: undo the last step first. In (x + 4) × 2 = 22, divide by 2, then take off 4."
            ],
            "example": "(x + 4) × 2 = 22, so x + 4 = 11, so x = 7."
          },
          "problems": [
            {
              "q": "The pilot has 8 minutes to spend and each leg takes 0.5 minutes. How many legs is that enough for?",
              "answer": "16",
              "hint": "8 ÷ 0.5.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The sandbag count fell by 20% to 128. How many sandbags were there before?",
              "answer": "160",
              "hint": "128 is 80% of the old count.",
              "skill": "Ratios and percent"
            },
            {
              "q": "One winter evening it was 7 degrees, then it fell 16 degrees. What does the thermometer read?",
              "answer": "-9",
              "accept": [
                "−9"
              ],
              "hint": "From 7 down to 0 is 7, and there are 9 left to fall.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: (x + 24) × 3 = 99",
              "answer": "9",
              "hint": "Divide both sides by 3 first, then take 24 off.",
              "skill": "Equations"
            },
            {
              "q": "A model is built at 1 to 2. The bag on the model is 12 inches. How many inches is the real one?",
              "answer": "24",
              "hint": "Every inch on the model is 2 inches for real.",
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
            "example": "y = 5x + 3 when x = 7: 5 × 7 + 3 = 38."
          },
          "problems": [
            {
              "q": "The miles flown, y, follow the rule y = 4x + 10, where x is the number of hours. What is y when x = 9?",
              "answer": "46",
              "hint": "Put 9 in for x: 4 × 9 + 10.",
              "skill": "Linear relationships"
            },
            {
              "q": "What is 9² + 6²?",
              "answer": "117",
              "hint": "9 × 9 = 81 and 6 × 6 = 36. Add them.",
              "skill": "Powers and roots"
            },
            {
              "q": "A 13-foot rope reaches the top of a 5-foot mast. How far is the foot of the rope from the base, in feet?",
              "answer": "12",
              "hint": "b² = c² − a² = 169 − 25 = 144. Then take the square root.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "Solve for x: 11x + 5 − 5x = 41",
              "answer": "6",
              "hint": "Collect the x's first: 6x + 5 = 41.",
              "skill": "Equations"
            },
            {
              "q": "What is 9 × 10^5 ÷ 10^4?",
              "answer": "90",
              "hint": "Dividing subtracts the powers: 10^5 ÷ 10^4 = 10^1. So 9 × 10.",
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
            "When a step says an earlier one does not belong, go back to the total before it and follow the new step."
          ],
          "example": "'Start with 40. Take off 8. That does not belong: divide 40 by 5 instead.' You end on 8."
        },
        "skill": "Following directions",
        "steps": [
          "Write the height of the summit isle in thousands of feet: 12.",
          "Multiply by the bags of sand dropped on the last leg: 6.",
          "Subtract the minutes the last leg took: 50.",
          "Add the temperature at the summit: 12.",
          "Step 3 does not belong in this log. Go back to your answer from step 2, divide it by the four islands stacked below the summit instead, and then add the temperature from step 4.",
          "Type the number you finish on."
        ],
        "prompt": "Your answer:",
        "answer": "30",
        "hint": "Step 5 switches the subtraction off. Your step 2 total gets divided by the islands below the summit, and only then does the temperature go on."
      }
    }
  ]
};
if (window.BASECAMP_MISSIONS && window.BASECAMP_MISSIONS.register) window.BASECAMP_MISSIONS.register(C);
else (window.BASECAMP_CAMPAIGNS_PENDING = window.BASECAMP_CAMPAIGNS_PENDING || []).push(C);
})();
