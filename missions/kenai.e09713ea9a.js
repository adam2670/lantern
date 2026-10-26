// ODYSSEY — campaign "kenai". GENERATED, do not edit.
// Source of truth: content/missions-full.js. Rebuild with:  python3 tools/split-missions.py
// RULE: nothing in this file is about the person using it. Content only.
(function () {
var C = {
  "id": "kenai",
  "ready": true,
  "kind": "build",
  "readingLevel": {
    "fk": 5.7,
    "cl": 6.1
  },
  "grade": "5",
  "kindLabel": "Build",
  "form": "eagle",
  "title": "Fish Camp",
  "subtitle": "Kenai River, Alaska",
  "pitch": "Five sessions to build a smokehouse on the bank of the Kenai while the salmon run past. Drying racks, a frame, walls, a fire pit, and the first batch of smoked fish. The smokehouse is the progress bar.",
  "scene": "assets/scene-kenai.jpg",
  "buildArt": "smokehouse",
  "progress": {
    "unit": "parts",
    "total": 5
  },
  "dayNoun": "Session",
  "stageNoun": "Part",
  "finalNoun": "First batch",
  "stages": [
    "Drying rack",
    "Frame",
    "Walls and roof",
    "Fire pit",
    "First batch"
  ],
  "reconNoun": "Camp Plan",
  "legs": {
    "recon": "Camp plan",
    "nav": "Camp math",
    "orders": "Build orders",
    "debrief": "Fireside"
  },
  "rules": [
    "Stuck on a measure? <b>Flag it</b> and move on. Pending items come back at the fire.",
    "Camp plan: read the questions <b>before</b> the sheet.",
    "Build orders: read <b>every</b> step before you cut anything."
  ],
  "fact": "A sockeye salmon that hatched in this river swam to the ocean, lived there for two or three years, and found its way back to the same gravel by smell. It is the most reliable thing in Alaska.",
  "finale": {
    "prompt": "The first batch is out of the smoke. Which color ribbon goes on the smokehouse latch for the season?",
    "options": [
      {
        "label": "Red",
        "color": "#FF6B6B"
      },
      {
        "label": "Alder brown",
        "color": "#B87333"
      },
      {
        "label": "Green",
        "color": "#4FD18B"
      },
      {
        "label": "Blue",
        "color": "#4FD1FF"
      }
    ],
    "done": "Tie it on. Then hand a strip of fish to whoever helped. That is the rule of every fish camp."
  },
  "patrols": [
    {
      "id": "kenai-1",
      "title": "The Drying Rack",
      "recon": {
        "lesson": {
          "title": "Questions first, then the plan",
          "points": [
            "Read the five questions before the plan. One wants a detail, one wants a word, two want a why, and one wants what a paragraph is mostly about.",
            "When a plan uses a word you do not know, the sentence around it usually explains it.",
            "The answer is always in the plan. You never have to guess."
          ],
          "example": "Question: 'What does the drying rack keep the fish away from?' Hunt for 'rack'. Read that sentence to the end."
        },
        "title": "Camp Plan: A River Full of Red",
        "passage": [
          "Every July the Kenai River turns red. Sockeye salmon, which spent two or three years in the ocean, come back up the river by the hundreds of thousands to lay their eggs in the gravel where they were born. As they travel upstream toward the spawning gravel, their silver bodies turn deep red and their heads turn green. They stop eating when they enter the river. They will swim eighty miles upstream against the current, spawn, and die. The river will carry their bodies back down to feed eagles, bears, gulls, and next year's fish.",
          "People have set up camps on this bank for thousands of years to catch and dry the run, because a summer's fish, properly dried and smoked, is food for a whole winter. The first thing a fish camp builds is not the smokehouse. It is the drying rack, a frame of poles set in the open where the wind can reach it. The fish hang on rows of horizontal poles. Cut into strips and hung in the wind for days, the fish lose most of their water. A fish that has lost its water is a fish that will not spoil.",
          "The rack goes up first because the fish are already here. Today the plan is four upright poles set two feet into the ground, two cross poles at the top, and six hanging poles between them. Everything is lashed with cord, because nails split green wood. The rack has to stand in the wind and out of the shade. It must be far enough from the trees that a bear cannot reach it from cover, and close enough to the water that a bucket of fish is not a long carry. The eagle in the cottonwood already knows where it is going."
        ],
        "questions": [
          {
            "q": "What happens to a sockeye's body as it travels upstream?",
            "choices": [
              "It stays the same silver color it had in the ocean",
              "It turns deep red with a green head",
              "It grows larger and heavier on the way upstream",
              "It turns a pale gray and its head stays silver"
            ],
            "answer": 1,
            "hint": "Paragraph 1, the sentence with 'silver bodies'.",
            "skill": "Finding details"
          },
          {
            "q": "Why does a fish camp build the drying rack before the smokehouse?",
            "choices": [
              "Because the rack is quick to build and needs no tools at all",
              "Because the wind on this bank dies down later in the summer",
              "Because the fish will not spoil until the smokehouse is finished",
              "Because the fish are already here and need drying now"
            ],
            "answer": 3,
            "hint": "The first sentence of paragraph 3.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 3, what does 'lashed' mean?",
            "choices": [
              "Set in the ground",
              "Tied together with cord",
              "Fastened together with nails",
              "Left loose"
            ],
            "answer": 1,
            "hint": "The sentence says 'lashed with cord, because nails split green wood'.",
            "skill": "Word meanings"
          },
          {
            "q": "Why does a dried fish not spoil?",
            "choices": [
              "Because the cold nights on the river keep it fresh",
              "Because it is kept in the shade",
              "Because the fish is put in the smokehouse right away",
              "Because it has lost most of its water"
            ],
            "answer": 3,
            "hint": "The last sentence of paragraph 2.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 1 mostly about?",
            "choices": [
              "The salmon run: where the fish come from and what happens to them in the river",
              "The drying rack: how its poles are set and lashed, and why it stands in the open wind",
              "The animals of the river: the eagles, bears, and gulls that feed on the dead salmon",
              "Fish camps: why people have camped on this bank for thousands of years to dry fish"
            ],
            "answer": 0,
            "hint": "Every sentence in paragraph 1 is about the salmon and their journey.",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Rack math",
          "points": [
            "Poles in the plan: add the uprights, the cross poles and the hanging poles.",
            "Fish per pole times poles: multiply.",
            "A fraction times a whole number: 5 × 2/3 is five 2/3s, which is 10/3.",
            "Same bottom: add the tops. 1/5 + 2/5 = 3/5."
          ],
          "example": "Need at least 50 strips at 6 strips a fish? 50 ÷ 6 = 8 with 2 left over, so cut 9 fish to have enough."
        },
        "problems": [
          {
            "q": "The rack uses 4 upright poles, 2 cross poles and 6 hanging poles. How many poles is that?",
            "answer": "12",
            "hint": "4 + 2 + 6.",
            "skill": "Adding and subtracting"
          },
          {
            "q": "Each hanging pole holds 25 strips of fish. There are 6 hanging poles. How many strips can the rack hold?",
            "answer": "150",
            "hint": "25 × 6.",
            "skill": "Multiplying"
          },
          {
            "q": "Each lashing takes 3/4 of a yard of cord. How many yards of cord do 8 lashings take?",
            "answer": "6",
            "hint": "Eight 3/4s is 24/4. How many wholes is that?",
            "skill": "Fractions"
          },
          {
            "q": "A fish is cut into 4 equal strips. The builder wants at least 150 strips. How many fish must be cut?",
            "answer": "38",
            "hint": "150 ÷ 4 = 37 with 2 left over, so 38 fish to have enough.",
            "skill": "Dividing"
          },
          {
            "q": "The builder hung 3/8 of the strips before lunch and 4/8 after. What fraction of the strips is hung? (write a fraction)",
            "answer": "7/8",
            "hint": "Same bottom. Add the tops.",
            "skill": "Fractions"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "Start with the whole",
            "points": [
              "Read all three paragraphs, then say in one sentence what the report is about. Do that before you read a single choice.",
              "A choice that only covers the middle paragraph is a detail. A choice about the world in general is too big. Both are common and both are wrong.",
              "After that: prove a claim with one line, name what a paragraph is for, work a word out from its sentence, and join two paragraphs into one conclusion."
            ],
            "example": "Three paragraphs about a harbor: when the ice comes, what the boats do about it, what the town eats in March. The idea is that the ice sets the year. 'The ice comes in November' is only the first paragraph."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea of the whole report?",
              "choices": [
                "The drying rack is four upright poles with two cross poles and six hanging poles lashed between them.",
                "The fish arrive on their own schedule, and everything the camp does is arranged around it.",
                "Salmon are the most important fish in the world, and any village lucky enough to sit on a salmon river will never go hungry.",
                "The first thing a fish camp builds is the smokehouse, and the drying rack goes up later, once there is somewhere to hang the finished strips."
              ],
              "answer": 1,
              "hint": "The salmon, the reason for drying, and the order of the building. Ask what all three paragraphs are being organized by.",
              "skill": "Central idea and evidence",
              "evidence": "The rack goes up first because the fish are already here."
            },
            {
              "q": "Claim: drying is what keeps the fish from going bad. Which sentence from the report best supports that claim?",
              "choices": [
                "Today the plan is four upright poles set two feet into the ground, two cross poles at the top, and six hanging poles between them.",
                "It must be far enough from the trees that a bear cannot reach it from cover, and close enough to the water that a bucket of fish is not a long carry.",
                "Sockeye salmon, which spent two or three years in the ocean, come back up the river by the hundreds of thousands to lay their eggs in the gravel where they were born.",
                "A fish that has lost its water is a fish that will not spoil."
              ],
              "answer": 3,
              "hint": "Describing the rack is not the same as explaining what it does to the fish. Find the sentence that follows the water out of the fish.",
              "skill": "Finding details",
              "evidence": "A fish that has lost its water is a fish that will not spoil."
            },
            {
              "q": "Why does a plan for building a rack begin with a paragraph about the salmon's journey?",
              "choices": [
                "Because the report is really about the wildlife of the river, and the rack is only mentioned to give the salmon somewhere to appear.",
                "Because the fish set the timetable, and the rest of the plan only makes sense once you know they are already in the river.",
                "Because it explains the method used to catch a sockeye.",
                "Because it lists the animals that live along the bank."
              ],
              "answer": 1,
              "hint": "Look at the first sentence of the third paragraph. It tells you what the salmon paragraph was for.",
              "skill": "Author's purpose and structure",
              "evidence": "The rack goes up first because the fish are already here."
            },
            {
              "q": "The report says people camp on this bank to catch and dry 'the run'. What does the run mean as it is used here?",
              "choices": [
                "A journey made on foot along the bank",
                "A narrow channel of fast water running down the middle of the river",
                "The stretch of time a camp takes to put up its drying rack",
                "The mass of salmon moving up the river at one time"
              ],
              "answer": 3,
              "hint": "Cover the word and ask what it is that people are catching and drying. The first paragraph has already shown you what is moving up the river.",
              "skill": "Word meanings",
              "evidence": "People have set up camps on this bank for thousands of years to catch and dry the run, because a summer's fish, properly dried and smoked, is food for a whole winter."
            },
            {
              "q": "Paragraphs 1 and 3 together explain why the rack has to stand out away from the trees. Why does it?",
              "choices": [
                "Bears eat the run too, and a rack close to the trees would let one reach the fish from cover.",
                "Branches falling from the cottonwoods would knock the drying fish off the hanging poles and into the dirt.",
                "The cord used for lashing the poles rots faster in the shade, so a rack under the trees would come apart before the run is over.",
                "Eagles will not fly close to open ground, so a rack set well away from the trees is one that no bird will ever come near."
              ],
              "answer": 0,
              "hint": "Paragraph one lists who else eats the salmon. Paragraph three gives a distance from the trees and the reason for it. Put the two together.",
              "skill": "Reading between the lines",
              "evidence": "far enough from the trees that a bear cannot reach it from cover"
            }
          ]
        }
      },
      "navByGrade": {
        "3": {
          "lesson": {
            "title": "Grade 3 numbers",
            "points": [
              "Multiplication facts: 4 × 3 means 4 groups of 3.",
              "Sharing equally is dividing.",
              "Adding three numbers: add two, then add the third.",
              "Fractions with the same bottom: add the tops."
            ],
            "example": "4 × 3 = 12, so 12 shared into 4 equal groups is 3 each."
          },
          "problems": [
            {
              "q": "The builder counts 6 racks with 5 fish in each. How many fish is that?",
              "answer": "30",
              "hint": "6 × 5.",
              "skill": "Multiplying"
            },
            {
              "q": "30 fish are shared equally among 6 racks. How many fish in each rack?",
              "answer": "5",
              "hint": "How many 6s make 30?",
              "skill": "Dividing"
            },
            {
              "q": "The builder counted 338 fish, then found 126 more, then 53 more. How many fish in all?",
              "answer": "517",
              "hint": "338 + 126 first. Then add 53.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "The builder finished 1/4 of the day's work before the break and 2/4 after. What fraction is done? (write a fraction)",
              "answer": "3/4",
              "hint": "Same bottom. Add the tops.",
              "skill": "Fractions"
            },
            {
              "q": "A pole platform is 7 squares wide and 6 squares long. How many squares is that?",
              "answer": "42",
              "hint": "7 rows of 6, so 7 × 6.",
              "skill": "Area and perimeter"
            }
          ]
        },
        "6": {
          "lesson": {
            "title": "Grade 6 numbers",
            "points": [
              "Multiplying a decimal by a whole number: multiply as if there were no point, then put the point back. 6 × 1.15: 6 × 115 = 690, so 6.90, which is 6.9.",
              "Percent of a number: turn the percent into a fraction of 100.",
              "A ratio tells you how many of one thing for each group of the other.",
              "Order of operations: parentheses, then multiply and divide, then add and subtract."
            ],
            "example": "4 × (9 − 2) + 5: parentheses first, 9 − 2 = 7; then 4 × 7 = 28; then add 5 to get 33."
          },
          "problems": [
            {
              "q": "Each batch takes 3.65 hours to cut and hang. How many hours for 27 batches?",
              "answer": "98.55",
              "hint": "Split it: 27 × 3 plus 27 × 0.65.",
              "skill": "Decimals"
            },
            {
              "q": "Of 120 fish, 25% are set aside. How many is that?",
              "answer": "30",
              "hint": "25% of 120: 25% is 25/100.",
              "skill": "Ratios and percent"
            },
            {
              "q": "Poles and fish are kept in the ratio 3 to 4. If there are 12 poles, how many fish?",
              "answer": "16",
              "hint": "12 ÷ 3 = 4 groups. Each group has 4 fish.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The builder works out 6 × (10 − 5) + 16. What is it?",
              "answer": "46",
              "hint": "Parentheses first, then multiply, then add.",
              "skill": "Order of operations"
            },
            {
              "q": "On a winter day it was −7 degrees at dawn. By noon it was 8 degrees. By how many degrees did it rise?",
              "answer": "15",
              "hint": "From −7 up to 0 is 7, then 8 more.",
              "skill": "Negative numbers"
            }
          ]
        },
        "7": {
          "lesson": {
            "title": "Grade 7 numbers",
            "points": [
              "A unit rate is the total shared out: 9 hours for 12 jobs is 9 ÷ 12 = 0.75 hours a job.",
              "Percent change: find that percent of the starting number, then add it on or take it off.",
              "Below zero, going up adds and going down subtracts. Walk the number line one step at a time.",
              "A two-step equation: undo the adding first, then undo the multiplying."
            ],
            "example": "9x + 17 = 89, so 9x = 72, so x = 8."
          },
          "problems": [
            {
              "q": "16 batches needed 36 hours altogether. How many hours is that for one batch?",
              "answer": "2.25",
              "hint": "A rate is the total shared out: 36 ÷ 16.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The builder counted 200 fish on the first pass. On the second pass the number had risen by 20%. How many fish is that?",
              "answer": "240",
              "hint": "20% of 200 is 40. Then add it on.",
              "skill": "Ratios and percent"
            },
            {
              "q": "On a winter day the thermometer read −7 degrees at dawn. It rose 23 degrees by noon, then fell 20 degrees by dark. What does it read at dark?",
              "answer": "-4",
              "accept": [
                "−4"
              ],
              "hint": "Start at −7, go up 23 to 16, then down 20.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: 7x + 11 = 53",
              "answer": "6",
              "hint": "Take 11 off both sides first, then divide by 7.",
              "skill": "Equations"
            },
            {
              "q": "On the plan, 1 inch stands for 5 feet. The dock measures 4 inches on the plan. How long is it really, in feet?",
              "answer": "20",
              "hint": "Every inch is 5 feet, so 4 × 5.",
              "skill": "Ratios and percent"
            }
          ]
        },
        "8": {
          "lesson": {
            "title": "Grade 8 numbers",
            "points": [
              "A straight-line rule is y = mx + b: b is where you start, m is what you add each step.",
              "A small 2 means a number times itself: 4² is 4 × 4 = 16. Work out the power first, then multiply.",
              "Pythagoras: in a right triangle a² + b² = c², and c is always the longest side.",
              "With x on both sides, move all the x's to one side first, then all the plain numbers to the other."
            ],
            "example": "Start at 6 and add 5 each hour: after 3 hours, y = 5 × 3 + 6 = 21."
          },
          "problems": [
            {
              "q": "The builder starts with 20 fish and adds 9 more every hour. After 4 hours, how many fish are there?",
              "answer": "56",
              "hint": "This is the straight-line rule y = mx + b: 9 × 4 + 20.",
              "skill": "Linear relationships"
            },
            {
              "q": "Each row holds 9² fish. There are 7 rows. How many fish in all?",
              "answer": "567",
              "hint": "9² means 9 × 9 = 81. Then × 7.",
              "skill": "Powers and roots"
            },
            {
              "q": "The builder runs a rope from the top of a 7-foot pole to a point 24 feet away on the ground. How long is the rope, in feet?",
              "answer": "25",
              "hint": "Right triangle: a² + b² = c². 7² + 24² = 49 + 576 = 625. The rope is the square root of that.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "Solve for x: 8x + 14 = 4x + 54",
              "answer": "10",
              "hint": "Take 4x off both sides to get 4x + 14 = 54, then take 14 off both sides and divide.",
              "skill": "Equations"
            },
            {
              "q": "The builder reads that 4 × 10^5 salmon swam up the river this summer. Written out in full, what number is that?",
              "answer": "400000",
              "hint": "10^5 is 1 with 5 zeros after it: 100,000. Then × 4.",
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
          "example": "If step 5 says 'the answer is the number of poles, not the cord', the cord was the distraction."
        },
        "skill": "Following directions",
        "steps": [
          "The drying rack takes 4 upright poles, 2 cross poles at the top and 6 hanging poles between them, and each upright is set 2 feet into the ground.",
          "Add the 2 cross poles to the 6 hanging poles.",
          "Multiply that by the 2 feet an upright goes into the ground, and write the total down.",
          "Now start over. Multiply the 4 upright poles by the 6 hanging poles, and write that total down as well.",
          "You have a total from step 3 and a total from step 4. Type whichever is smaller, not the larger one."
        ],
        "prompt": "Your answer:",
        "answer": "16",
        "hint": "Step 4 starts a fresh count; it does not build on step 3. Work both totals, then step 5 chooses between them."
      }
    },
    {
      "id": "kenai-2",
      "title": "The Frame",
      "recon": {
        "lesson": {
          "title": "Reasons in a plan",
          "points": [
            "A plan often says how to do something and then why. Look for 'so that' and 'because'.",
            "A 'why' question wants the reason the plan gives, even if you can think of another.",
            "Sizes in feet are details. Circle them."
          ],
          "example": "'The floor is raised so that air moves under it.' Why raised? Air."
        },
        "title": "Camp Plan: Eight Feet Square",
        "passage": [
          "A smokehouse is a small building with one job: hold smoke around fish for a long time without cooking them. The one in the plan is eight feet square and seven feet tall. That is big enough to hang two hundred strips and small enough that one person can build it in a week. It has a dirt floor, because a fire will burn in the middle of it, and it stands on four corner posts set into the ground. The door is on the side away from the wind, so that opening it does not pull the smoke out.",
          "The frame goes up today. Four corner posts, spruce logs as thick as an arm, are set three feet into holes and packed with gravel. Then the top plates, two boards that run along the tops of the posts on each side. Then the rafters, boards that lean from the plates up to a ridge board at the peak, seven of them on each side. The frame is square only if the two diagonals, corner to opposite corner, measure the same, and the builder checks that with a tape before a single wall board goes on.",
          "The whole thing sits fifty feet from the drying rack and a hundred from the tents, and that spacing is not an accident. Smoke drifts. A bear that smells fish in the night should find the smokehouse, not the tents. A bear that finds the smokehouse should find a closed door and a wall of alder smoke, which bears do not like. The plan puts the bear-proof food cache, a box on stilts, on the far side of the camp from both."
        ],
        "questions": [
          {
            "q": "How big is the smokehouse in the plan?",
            "choices": [
              "Four feet square",
              "Fifty feet long",
              "Fifty feet from the rack and a hundred feet from the tents",
              "Eight feet square and seven feet tall"
            ],
            "answer": 3,
            "hint": "Paragraph 1, the second sentence.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 2, what are 'rafters'?",
            "choices": [
              "The heavy boards that run along the tops of the corner posts on each side",
              "Boards that lean from the top plates up to the ridge at the peak",
              "The spruce logs set three feet into the holes",
              "The rough boards nailed to the outside of the frame to make the walls"
            ],
            "answer": 1,
            "hint": "The sentence with 'the rafters, boards that lean'.",
            "skill": "Word meanings"
          },
          {
            "q": "How does the builder check that the frame is square?",
            "choices": [
              "By measuring the two diagonals and seeing that they match",
              "By standing well back from the frame and looking down each wall",
              "By counting the rafters to be sure there are seven on each side",
              "By checking that all four corner posts are set three feet deep"
            ],
            "answer": 0,
            "hint": "The last sentence of paragraph 2.",
            "skill": "Finding details"
          },
          {
            "q": "Why is the door on the side away from the wind?",
            "choices": [
              "Because the wind is cold",
              "So that opening it does not pull the smoke out",
              "Because the river is on that side",
              "Because a bear that smells the fish will come from that way"
            ],
            "answer": 1,
            "hint": "Paragraph 1, the last sentence, after 'so that'.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 3 mostly about?",
            "choices": [
              "How to set a corner post in gravel",
              "How big the tents in the camp are",
              "Why the buildings are spaced apart, because of bears",
              "The food cache that stands on stilts"
            ],
            "answer": 2,
            "hint": "The first two sentences of paragraph 3 say the spacing 'is not an accident' and then explain it.",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Frame math",
          "points": [
            "Perimeter of a square: 4 × the side.",
            "Area of a square: side × side.",
            "Volume of a box: length × width × height. 5 × 4 × 3 = 60 cubic feet.",
            "Two-step: boards needed, then boards per bundle."
          ],
          "example": "A 5-foot square has a perimeter of 4 × 5 = 20 feet and an area of 5 × 5 = 25 square feet."
        },
        "problems": [
          {
            "q": "The smokehouse is 8 feet on each side. What is the distance around it, in feet?",
            "answer": "32",
            "hint": "4 × 8.",
            "skill": "Area and perimeter"
          },
          {
            "q": "The floor is 8 feet by 8 feet. What is its area in square feet?",
            "answer": "64",
            "hint": "8 × 8.",
            "skill": "Area and perimeter"
          },
          {
            "q": "Inside, the smokehouse is 8 feet long, 8 feet wide and 7 feet tall. How many cubic feet of space is inside?",
            "answer": "448",
            "hint": "Length × width × height: 8 × 8 = 64, then 64 × 7.",
            "skill": "Volume"
          },
          {
            "q": "Each corner post is 10 feet long and 3 feet goes into the ground. How tall does the post stand above the ground?",
            "answer": "7",
            "hint": "10 − 3.",
            "skill": "Adding and subtracting"
          },
          {
            "q": "The builder needs 14 rafters and 2 top plates, 16 boards in all. Boards come in bundles of 4. How many bundles are needed?",
            "answer": "4",
            "hint": "16 ÷ 4.",
            "skill": "Multi-step problems"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "Half a claim is not enough",
            "points": [
              "Break the claim into parts before you look at the choices. A claim with two halves needs a sentence that carries both.",
              "All four choices are real sentences from the report, so being true earns nothing. Only proving counts.",
              "Read the claim and your pick back to back, out loud in your head. If a gap is left, you have the wrong sentence."
            ],
            "example": "Claim: the shed was built to be moved. A sentence about it having a roof proves nothing. A sentence about it being bolted together rather than nailed carries both halves."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea that develops across the whole plan?",
              "choices": [
                "A frame is square only when its two diagonals, measured corner to opposite corner with a tape, come out the same.",
                "The plan is mostly about bears and how a camp keeps them away from its food.",
                "The smokehouse is designed to cook the fish all the way through.",
                "Every measurement in the plan, from the size of the building to where it stands, was chosen for a reason."
              ],
              "answer": 3,
              "hint": "Size, squareness, spacing. Ask what those three paragraphs have in common besides being about a building.",
              "skill": "Central idea and evidence",
              "evidence": "The whole thing sits fifty feet from the drying rack and a hundred from the tents, and that spacing is not an accident."
            },
            {
              "q": "Claim: the size of the smokehouse is a compromise between two things pulling in opposite directions. Which sentence from the report best supports that claim?",
              "choices": [
                "It has a dirt floor, because a fire will burn in the middle of it, and it stands on four corner posts set into the ground.",
                "That is big enough to hang two hundred strips and small enough that one person can build it in a week.",
                "A bear that finds the smokehouse should find a closed door and a wall of alder smoke, which bears do not like.",
                "The door is on the side away from the wind, so that opening it does not pull the smoke out."
              ],
              "answer": 1,
              "hint": "A compromise needs two pressures. Find the sentence that pushes the size one way and then the other.",
              "skill": "Finding details",
              "evidence": "That is big enough to hang two hundred strips and small enough that one person can build it in a week."
            },
            {
              "q": "What job does the third paragraph do in this plan?",
              "choices": [
                "It gives the reasoning behind where everything stands, so the distances stop looking arbitrary.",
                "It lists the tools needed to put the frame up, from the tape for checking the diagonals to the shovel for the post holes.",
                "It describes what a bear looks like at night, moving through a camp in the dark, so that a builder will know one when they see it.",
                "It gives the order in which the wall boards go on, starting at the bottom board and working up to the top plate."
              ],
              "answer": 0,
              "hint": "The paragraph gives three distances and then spends the rest of itself on one word: why. Ask which of those halves is the real job.",
              "skill": "Author's purpose and structure",
              "evidence": "The whole thing sits fifty feet from the drying rack and a hundred from the tents, and that spacing is not an accident."
            },
            {
              "q": "The report says the frame 'is square only if the two diagonals, corner to opposite corner, measure the same'. What does square mean as it is used here?",
              "choices": [
                "Having four sides that are all the same length",
                "Built with true right-angled corners",
                "Fair and honest in its dealings",
                "Measured out in square feet"
              ],
              "answer": 1,
              "hint": "The test is about two diagonals matching, not about the sides matching. Ask what has to be true of the corners for that test to work.",
              "skill": "Word meanings",
              "evidence": "The frame is square only if the two diagonals, corner to opposite corner, measure the same, and the builder checks that with a tape before a single wall board goes on."
            },
            {
              "q": "Paragraphs 1 and 3 together show that one thing decides both where the door goes and where the tents go. What is it?",
              "choices": [
                "How many fish are hung at once.",
                "How far the fish must be carried.",
                "Which way the wind carries the smoke.",
                "How deep the posts are set."
              ],
              "answer": 2,
              "hint": "One paragraph places the door by the wind. The other says smoke drifts, and then places the tents. Find the thing both of those decisions depend on.",
              "skill": "Reading between the lines",
              "evidence": "The door is on the side away from the wind, so that opening it does not pull the smoke out."
            }
          ]
        }
      },
      "navByGrade": {
        "3": {
          "lesson": {
            "title": "Grade 3 numbers",
            "points": [
              "Multiplication facts: 4 × 3 means 4 groups of 3.",
              "Sharing equally is dividing.",
              "Taking away big numbers: line up the ones, tens and hundreds, and regroup when the top digit is too small.",
              "A whole is all its parts, like 3/3. If 1/3 is done, 2/3 is still to do."
            ],
            "example": "4 × 3 = 12, so 12 shared into 4 equal groups is 3 each."
          },
          "problems": [
            {
              "q": "The builder counted 5 boards yesterday and three times as many today. How many boards today?",
              "answer": "15",
              "hint": "Three times 5: 5 + 5 + 5.",
              "skill": "Multiplying"
            },
            {
              "q": "The builder stacks 40 boards in piles of 5. How many piles is that?",
              "answer": "8",
              "hint": "How many 5s make 40?",
              "skill": "Dividing"
            },
            {
              "q": "The builder starts with 342 boards and uses 168. How many are left?",
              "answer": "174",
              "hint": "342 − 168.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "1/4 of the day's work was done yesterday. What fraction is still to do? (write a fraction)",
              "answer": "3/4",
              "hint": "The whole job is 4/4. Take 1/4 off it.",
              "skill": "Fractions"
            },
            {
              "q": "The tally stood at 123 boards and 800 more were added. What is the tally now?",
              "answer": "923",
              "hint": "123 + 800.",
              "skill": "Adding and subtracting"
            }
          ]
        },
        "6": {
          "lesson": {
            "title": "Grade 6 numbers",
            "points": [
              "Dividing by a fraction: multiply by its flip. 4 ÷ 2/5 = 4 × 5/2 = 20/2 = 10.",
              "Percent of a number: turn the percent into a fraction of 100.",
              "A ratio tells you how many of one thing for each group of the other.",
              "Order of operations: parentheses, then multiply and divide, then add and subtract."
            ],
            "example": "6 × (8 − 5) + 8 = 26."
          },
          "problems": [
            {
              "q": "The builder has 8 yards of twine. Each piece for hanging a fish is 2/3 of a yard long. How many pieces can the builder cut?",
              "answer": "12",
              "hint": "Dividing by 2/3 means multiplying by its flip, 3/2: 8 × 3/2.",
              "skill": "Fractions"
            },
            {
              "q": "20 of the 200 boards are set aside. What percent is that? (write just the number)",
              "answer": "10",
              "accept": [
                "10%"
              ],
              "hint": "20 out of 200, then out of 100.",
              "skill": "Ratios and percent"
            },
            {
              "q": "For every 3 posts there are 4 boards. There are 24 boards. How many posts?",
              "answer": "18",
              "hint": "24 ÷ 4 = 6 groups. Each group has 3 posts.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The builder works out 8 + 6 × 8. What is it?",
              "answer": "56",
              "hint": "Multiply before you add.",
              "skill": "Order of operations"
            },
            {
              "q": "On a winter day the thermometer read 4 degrees at dawn. By dark it had fallen to −9 degrees. By how many degrees did it fall?",
              "answer": "13",
              "hint": "From 4 down to 0 is 4, then 9 more.",
              "skill": "Negative numbers"
            }
          ]
        },
        "7": {
          "lesson": {
            "title": "Grade 7 numbers",
            "points": [
              "A rate times a count: if one job takes 1.5 hours, 6 jobs take 6 × 1.5 = 9 hours.",
              "Percent change: the change ÷ the starting number, then × 100.",
              "Multiplying or dividing with one minus sign gives a minus answer: 3 × (−5) = −15, and −15 ÷ 3 = −5.",
              "A two-step equation: get the x part on its own first, then undo the multiplying."
            ],
            "example": "50 − 4x = 14, so 4x = 50 − 14 = 36, so x = 9."
          },
          "problems": [
            {
              "q": "One batch needs 3.5 hours. How many hours do 12 batches need?",
              "answer": "42",
              "hint": "12 × 3.5.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The builder counted 40 boards on the first pass and 32 on the second. By what percent did the count change? (write just the number)",
              "answer": "20",
              "accept": [
                "20%",
                "-20",
                "−20",
                "-20%",
                "−20%"
              ],
              "hint": "The change is 8. 8 out of 40, then out of 100.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The thermometer falls 3 degrees every hour for 15 hours. What is the total change? (Write a fall as a negative number.)",
              "answer": "-45",
              "accept": [
                "−45"
              ],
              "hint": "15 hours of −3 each: 15 × (−3). One minus sign, so the answer is negative.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: 85 − 6x = 13",
              "answer": "12",
              "hint": "Move 6x to the right and 13 to the left: 6x = 72.",
              "skill": "Equations"
            },
            {
              "q": "A round lid has a radius of 10 inches. Using 3.14 for pi, how many inches is it around the edge?",
              "answer": "62.8",
              "hint": "Across is 2 × 10 = 20. Then × 3.14.",
              "skill": "Area and perimeter"
            }
          ]
        },
        "8": {
          "lesson": {
            "title": "Grade 8 numbers",
            "points": [
              "A straight-line rule is y = mx + b: b is where you start, m is the change each step. If it goes down each step, take m away each time.",
              "A square root undoes squaring. If a square has area 49, its side is 7.",
              "Pythagoras: in a right triangle a² + b² = c², and c is always the longest side.",
              "With x on both sides, move all the x's to one side first, then all the plain numbers to the other."
            ],
            "example": "Start with 40 and use 6 an hour: after 3 hours, 40 − 6 × 3 = 22 are left."
          },
          "problems": [
            {
              "q": "The builder starts with 51 boards and uses 9 every hour. How many are left after 4 hours?",
              "answer": "15",
              "hint": "9 × 4 = 36 used, taken off 51.",
              "skill": "Linear relationships"
            },
            {
              "q": "What is the square root of 121?",
              "answer": "11",
              "hint": "What number times itself makes 121?",
              "skill": "Powers and roots"
            },
            {
              "q": "A 17-foot rope runs from the top of a pole to a point 15 feet away on the ground. How tall is the pole, in feet?",
              "answer": "8",
              "hint": "a² = c² − b² = 289 − 225 = 64. Then take the square root.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "Solve for x: 7x = 2x + 40",
              "answer": "8",
              "hint": "Take 2x off both sides: 5x = 40. Then divide by 5.",
              "skill": "Equations"
            },
            {
              "q": "A round water tank has a radius of 10 feet and holds 1,256 cubic feet. Using 3.14 for pi, how many feet deep is it?",
              "answer": "4",
              "hint": "The floor's area is 3.14 × 10 × 10 = 314. Divide the volume by that.",
              "skill": "Area and perimeter"
            }
          ]
        }
      },
      "orders": {
        "lesson": {
          "title": "Diagonals",
          "points": [
            "Some orders describe a shape. Draw it.",
            "Then follow the arithmetic exactly."
          ],
          "example": "A square with 8-foot sides has two diagonals, and they are equal."
        },
        "skill": "Following directions",
        "steps": [
          "Write the height of the smokehouse in feet: 7.",
          "Multiply by the number of corner posts: 4.",
          "Add the number of feet each post is set into its hole: 3.",
          "Add the number of top plates that run along the tops of the posts: 2.",
          "Type the result, unless the plan puts the smokehouse closer to the tents than to the drying rack, in which case type MOVE IT."
        ],
        "prompt": "Your answer:",
        "answer": "33",
        "hint": "Work steps 2, 3 and 4 in order from the 7. Then step 5 asks how far the smokehouse sits from the tents and from the rack."
      }
    },
    {
      "id": "kenai-3",
      "title": "Walls and Roof",
      "recon": {
        "lesson": {
          "title": "Not too tight, not too loose",
          "points": [
            "When a plan explains a balance, both sides of it are details a question can ask about.",
            "'Which way and why' questions want two things: the fact, and the reason after 'because' or 'so that'.",
            "A word about a technique is defined by what it does."
          ],
          "example": "'The walls must leak a little.' Why? Read the next sentence."
        },
        "title": "Camp Plan: Walls That Leak on Purpose",
        "passage": [
          "A smokehouse wall is not built like a house wall. A house wall keeps weather out and heat in. A smokehouse wall has to hold smoke in while letting a little air through, because smoke that cannot move goes stale and a fire that cannot breathe goes out. So the boards on a smokehouse go up with a finger's width of gap between them. The plan says to check the gaps by standing inside on a bright day: you should see thin lines of daylight, not open sky.",
          "The boards are rough-sawn spruce, an inch thick and eight inches wide. They are nailed vertically to the top plate and to a bottom board that runs along the ground. Vertical boards shed rain; horizontal boards hold it. The roof is the same boards laid across the rafters and overlapped like shingles. Each board covers the top edge of the one below it. That way water runs down and off instead of in. Near the peak the builder leaves a gap the length of a hand on each side, under the ridge, and that is where the smoke will leave.",
          "The door is the last piece of the walls. The builder makes it from a frame of boards and hangs it on two leather hinges. It closes against a stop so that it seals, but it can be opened with one hand while the other holds a tray of fish. A latch on the outside keeps it shut against wind. Nothing on the smokehouse is painted, because paint burns and smoke tastes of whatever it touches. By the end of the season the whole building will be the color of the inside of a chimney."
        ],
        "questions": [
          {
            "q": "How wide is the gap between the wall boards?",
            "choices": [
              "A hand wide",
              "A finger's width",
              "No gap",
              "An inch"
            ],
            "answer": 1,
            "hint": "Paragraph 1, the sentence with 'finger's width'.",
            "skill": "Finding details"
          },
          {
            "q": "Which way do the wall boards run, and why?",
            "choices": [
              "Horizontally, because horizontal boards hold the smoke in",
              "Diagonally, for strength",
              "Vertically, because vertical boards shed rain",
              "Overlapped like shingles, to shed rain"
            ],
            "answer": 2,
            "hint": "Paragraph 2, the sentence 'Vertical boards shed rain; horizontal boards hold it.'",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 2, what does 'overlapped like shingles' mean?",
            "choices": [
              "Nailed side by side with gaps",
              "Stacked in a pile",
              "Each board covers the top edge of the one below it",
              "Boards pushed tight against each other"
            ],
            "answer": 2,
            "hint": "The sentence right after the word 'shingles' explains it.",
            "skill": "Word meanings"
          },
          {
            "q": "Why is nothing on the smokehouse painted?",
            "choices": [
              "Because paint is expensive",
              "Because the smoke would turn the paint black by the end of the season",
              "Because paint burns and the smoke would taste of it",
              "Because rough-sawn boards will not hold paint"
            ],
            "answer": 2,
            "hint": "Paragraph 3, the sentence with 'painted', after 'because'.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 1 mostly about?",
            "choices": [
              "The size of the boards",
              "The door and its latch",
              "How the roof boards overlap so that rain runs off instead of in",
              "Why a smokehouse wall has to let a little air through"
            ],
            "answer": 3,
            "hint": "Paragraph 1 compares a smokehouse wall to a house wall and explains the gaps.",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Board math",
          "points": [
            "Inches in a foot: 12. A 5-foot wall is 5 × 12 = 60 inches wide.",
            "Boards across a wall: wall width ÷ board width (ignore the gaps for this plan).",
            "Different bottoms: make them the same first. 1/2 + 1/3 = 3/6 + 2/6 = 5/6.",
            "Two-step: boards on the walls plus boards on the roof."
          ],
          "example": "A 60-inch wall with 6-inch boards: 60 ÷ 6 = 10 boards."
        },
        "problems": [
          {
            "q": "A wall is 8 feet wide. How many inches is that?",
            "answer": "96",
            "hint": "8 × 12.",
            "skill": "Multiplying"
          },
          {
            "q": "Each board is 8 inches wide. How many boards cover a 96-inch wall?",
            "answer": "12",
            "hint": "96 ÷ 8.",
            "skill": "Dividing"
          },
          {
            "q": "The builder used 1/2 of the nails on the walls and 1/4 of them on the roof. What fraction of the nails has been used? (write a fraction)",
            "answer": "3/4",
            "hint": "Make the bottoms the same: 1/2 is 2/4. Then add the tops.",
            "skill": "Fractions"
          },
          {
            "q": "The roof takes 30 boards and the walls take 48. The builder has 90 boards. How many will be left over?",
            "answer": "12",
            "hint": "30 + 48 = 78. Then 90 − 78.",
            "skill": "Multi-step problems"
          },
          {
            "q": "The builder nailed 2/5 of the boards on Monday and 2/5 on Tuesday. What fraction of the boards is that? (write a fraction)",
            "answer": "4/5",
            "hint": "Same bottom. Add the tops.",
            "skill": "Fractions"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "Built as a contrast",
            "points": [
              "Some paragraphs are built by setting two things side by side. Spot the pair and you have the shape.",
              "The giveaway words are 'but', 'while', 'instead', and any two sentences that begin the same way and end opposite.",
              "Naming the shape is not the same as repeating the content. A choice that only retells the paragraph has named nothing."
            ],
            "example": "'A raft floats because it is wide. A canoe floats because it is sealed.' Two sentences, same opening, different endings. That paragraph is a comparison and nothing else."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea of the whole plan?",
              "choices": [
                "Vertical boards shed rain and horizontal boards hold it.",
                "A smokehouse is built to let air and smoke move in a controlled way, which is the opposite of how a house is built.",
                "A smokehouse is finished by painting it, so the wood will last through the seasons.",
                "The walls are sealed tight so that no smoke can get out."
              ],
              "answer": 1,
              "hint": "Gaps in the walls, a vent under the ridge, a door that seals. Ask what all of those are managing.",
              "skill": "Central idea and evidence",
              "evidence": "A smokehouse wall has to hold smoke in while letting a little air through, because smoke that cannot move goes stale and a fire that cannot breathe goes out."
            },
            {
              "q": "Claim: the builder can check the wall gaps without measuring anything. Which sentence from the report best supports that claim?",
              "choices": [
                "A smokehouse wall has to hold smoke in while letting a little air through, because smoke that cannot move goes stale and a fire that cannot breathe goes out.",
                "It closes against a stop so that it seals, but it can be opened with one hand while the other holds a tray of fish.",
                "The plan says to check the gaps by standing inside on a bright day: you should see thin lines of daylight, not open sky.",
                "Nothing on the smokehouse is painted, because paint burns and smoke tastes of whatever it touches."
              ],
              "answer": 2,
              "hint": "The claim is about checking without a tool. Find the sentence that describes a test you could do with your eyes.",
              "skill": "Finding details",
              "evidence": "The plan says to check the gaps by standing inside on a bright day: you should see thin lines of daylight, not open sky."
            },
            {
              "q": "How is the first paragraph built?",
              "choices": [
                "It lists the materials in the order they get used.",
                "It explains what causes spruce boards to split.",
                "It sets a smokehouse wall against a house wall to show the difference.",
                "It tells the story of a wall that failed one season."
              ],
              "answer": 2,
              "hint": "Two sentences in a row start almost the same way and then say opposite things. That pairing is the shape of the paragraph.",
              "skill": "Author's purpose and structure",
              "evidence": "A house wall keeps weather out and heat in."
            },
            {
              "q": "The report says 'Vertical boards shed rain'. What does shed mean as it is used here?",
              "choices": [
                "A small outbuilding for storing tools",
                "Soak the water up and then dry out again afterward",
                "Let the water run off instead of holding it",
                "Keep the water out with a coat of paint"
              ],
              "answer": 2,
              "hint": "The second half of the same sentence gives you the opposite: horizontal boards hold it. If holding is one thing, shedding has to be the other.",
              "skill": "Word meanings",
              "evidence": "Vertical boards shed rain; horizontal boards hold it."
            },
            {
              "q": "Paragraphs 1 and 2 together explain how the smoke keeps moving through the building. How does it?",
              "choices": [
                "The smoke is pushed out through the wall gaps by the heat of the fire.",
                "The door is propped open all day to make a draft.",
                "The roof boards are laid with gaps between them, like the wall boards, so the smoke rises straight out through the roof.",
                "Air comes in through the finger-wide gaps in the walls, and the smoke leaves through the gap under the ridge."
              ],
              "answer": 3,
              "hint": "One paragraph tells you where air gets in. The other tells you where smoke gets out. Draw the path between those two points.",
              "skill": "Reading between the lines",
              "evidence": "Near the peak the builder leaves a gap the length of a hand on each side, under the ridge, and that is where the smoke will leave."
            }
          ]
        }
      },
      "navByGrade": {
        "3": {
          "lesson": {
            "title": "Grade 3 numbers",
            "points": [
              "Multiplication facts: 4 × 3 means 4 groups of 3.",
              "Sharing equally is dividing.",
              "Some added, some taken away: do the adding first, then the taking away.",
              "Fractions with the same bottom: add the tops."
            ],
            "example": "4 × 3 = 12, so 12 shared into 4 equal groups is 3 each."
          },
          "problems": [
            {
              "q": "The builder lays the boards out in 2 rows of 9. How many boards is that?",
              "answer": "18",
              "hint": "2 × 9.",
              "skill": "Multiplying"
            },
            {
              "q": "63 boards are set out in 7 equal rows. How many boards are in each row?",
              "answer": "9",
              "hint": "63 split into 7 equal parts.",
              "skill": "Dividing"
            },
            {
              "q": "The log shows 136 gaps, then 112 more are added and 33 are taken off. What does the log show now?",
              "answer": "215",
              "hint": "Add 136 and 112 first, then take 33 off.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "Add: 1/6 + 2/6 (write a fraction)",
              "answer": "3/6",
              "hint": "Same bottom. 1 + 2 on top.",
              "skill": "Fractions"
            },
            {
              "q": "A mat is 6 feet wide and 5 feet long. How many feet is it all the way around the edge?",
              "answer": "22",
              "hint": "Two sides of 6 and two sides of 5: 6 + 6 + 5 + 5.",
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
            "example": "3 × (12 − 5) + 8: parentheses first, 12 − 5 = 7; then 3 × 7 = 21; then add 8 to get 29."
          },
          "problems": [
            {
              "q": "The builder has 4.8 hours to cut and hang. Each batch takes 0.8 hours. How many batches is that enough for?",
              "answer": "6",
              "hint": "Move both points 1 place to the right: 48 ÷ 8.",
              "skill": "Decimals"
            },
            {
              "q": "10% of the gaps counted is 24. How many were counted in all?",
              "answer": "240",
              "hint": "24 is 10 hundredths of the whole: 24 ÷ 10 × 100.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The builder counts 18 boards and 24 gaps. In its simplest form, what is the ratio of boards to gaps? (write it like 2:3)",
              "answer": "3:4",
              "accept": [
                "3 to 4"
              ],
              "hint": "Divide both by 6.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The builder works out (5 + 2) × 11. What is it?",
              "answer": "77",
              "hint": "Parentheses first, then multiply.",
              "skill": "Order of operations"
            },
            {
              "q": "One winter night it was −12 degrees at midnight and rose 4 degrees by dawn. What does the thermometer read at dawn?",
              "answer": "-8",
              "accept": [
                "−8"
              ],
              "hint": "Start at −12 and count 4 steps up.",
              "skill": "Negative numbers"
            }
          ]
        },
        "7": {
          "lesson": {
            "title": "Grade 7 numbers",
            "points": [
              "How many fit: the time you have ÷ the time each one takes. 9 hours at 1.5 hours each is 9 ÷ 1.5 = 6.",
              "Working backward: if a count fell by a quarter, the new count is 75% of the old one, so divide by 0.75 to get back to the start.",
              "Below zero, going up adds and going down subtracts. Walk the number line one step at a time.",
              "With parentheses, undo the outside first: divide both sides, then take off the number inside."
            ],
            "example": "4(x + 5) = 36, so x + 5 = 9, so x = 4."
          },
          "problems": [
            {
              "q": "The builder has 54 hours to spend and each batch takes 2.25 hours. How many batches is that enough for?",
              "answer": "24",
              "hint": "54 ÷ 2.25.",
              "skill": "Ratios and percent"
            },
            {
              "q": "A count of gaps fell by 10% to 72. What was it before?",
              "answer": "80",
              "hint": "72 is 90% of the old count.",
              "skill": "Ratios and percent"
            },
            {
              "q": "One winter evening it was 19 degrees, then it fell 32 degrees. What does the thermometer read?",
              "answer": "-13",
              "accept": [
                "−13"
              ],
              "hint": "From 19 down to 0 is 19, and there are 13 left to fall.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: (x + 3) × 8 = 88",
              "answer": "8",
              "hint": "Divide both sides by 8 first, then take 3 off.",
              "skill": "Equations"
            },
            {
              "q": "A model is built at 1 to 24. The ridge pole on the model is 4 inches. How many inches is the real one?",
              "answer": "96",
              "hint": "Every inch on the model is 24 inches for real.",
              "skill": "Ratios and percent"
            }
          ]
        },
        "8": {
          "lesson": {
            "title": "Grade 8 numbers",
            "points": [
              "A straight-line rule is y = mx + b: b is where you start, m is what you add each step.",
              "A small 2 means a number times itself: 8² is 8 × 8 = 64. Work out each power first, then add or subtract.",
              "Pythagoras: in a right triangle a² + b² = c², and c is always the longest side.",
              "Collect the x's first: 11x − 9x is 2x. Then undo the plain number."
            ],
            "example": "y = 2x + 9 when x = 6: 2 × 6 + 9 = 21."
          },
          "problems": [
            {
              "q": "The count of boards nailed up follows the rule y = 8x + 20, where x is the hour. What is y when x = 4?",
              "answer": "52",
              "hint": "Put 4 in for x: 8 × 4 + 20.",
              "skill": "Linear relationships"
            },
            {
              "q": "What is 5² + 4²?",
              "answer": "41",
              "hint": "5 × 5 = 25 and 4 × 4 = 16. Add them.",
              "skill": "Powers and roots"
            },
            {
              "q": "A 17-foot rope reaches the top of an 8-foot pole. How far is the foot of the rope from the base, in feet?",
              "answer": "15",
              "hint": "b² = c² − a² = 289 − 64 = 225. Then take the square root.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "Solve for x: 7x + 30 − 4x = 39",
              "answer": "3",
              "hint": "Collect the x's first: 3x + 30 = 39.",
              "skill": "Equations"
            },
            {
              "q": "What is 4 × 10^4 ÷ 10^3?",
              "answer": "40",
              "hint": "Dividing subtracts the powers: 10^4 ÷ 10^3 = 10^1. So 4 × 10.",
              "skill": "Powers and roots"
            }
          ]
        }
      },
      "orders": {
        "lesson": {
          "title": "Count only",
          "points": [
            "'Only' means most of the list does not count.",
            "Count carefully, then calculate."
          ],
          "example": "'Count only the words with a double letter' means skip the rest."
        },
        "skill": "Following directions",
        "steps": [
          "Write the width of one wall board in inches: 8.",
          "Multiply by the number of leather hinges the door hangs on: 2.",
          "Add the width of one more board: 8 inches.",
          "Multiply by the number of smoke gaps left under the ridge, one on each side: 2.",
          "Type your answer in feet, not in inches. (Twelve inches make one foot.)"
        ],
        "prompt": "Your answer:",
        "answer": "4",
        "hint": "Step 5 asks for a different unit, so the number you type is not the number you work out. Do steps 2, 3 and 4 first."
      }
    },
    {
      "id": "kenai-4",
      "title": "The Fire Pit",
      "recon": {
        "lesson": {
          "title": "Which wood and why",
          "points": [
            "When a plan chooses one thing over another, a question will ask why.",
            "Numbers for temperature and hours are details. Keep them apart.",
            "A word about fire is defined by what the fire does."
          ],
          "example": "'Tin over the pit, not open air.' Why tin? Read on to the words 'so that'."
        },
        "title": "Camp Plan: Alder, Not Spruce",
        "passage": [
          "The fire in a smokehouse is not a campfire. It is a small, cool, smoky fire that burns for two or three days without ever flaming up. That is because the fish is meant to be smoked, not cooked, and a fish that gets hot falls apart. The pit is a ring of river stones in the middle of the dirt floor, two feet across. A sheet of tin goes over the top so that no spark can rise to the fish hanging above it. The temperature inside the smokehouse should stay below a hundred degrees, warm to the hand, never hot.",
          "The wood is alder. Alder is a small, quick-growing tree that lines every river in this part of Alaska, and its smoke is sweet and mild. Spruce, which is everywhere, is never used, because spruce is full of pitch, a sticky sap that burns with black, bitter smoke and makes the fish taste like a tire. Cottonwood is too soft and burns too fast. The builder splits a pile of alder as high as the smokehouse door, green wood, cut this week, because green alder smolders and dry alder flames.",
          "Before the fire is lit, the fish is brined. Each strip goes into a tub of salt water for an hour. Then it hangs on the drying rack in the wind until its surface turns dry and slightly shiny. That shiny skin is called the pellicle, and it is what the smoke sticks to. Fish smoked without a pellicle comes out gray and soft. Fish smoked with one comes out the color of amber. Tonight the pit is built, the alder is stacked, and the first strips are in the brine."
        ],
        "questions": [
          {
            "q": "How hot should it be inside the smokehouse?",
            "choices": [
              "Hot enough to cook the fish all the way through",
              "Below a hundred degrees, warm to the hand",
              "About as hot as a campfire burning in the open air",
              "Cold enough to keep the fish from spoiling on the rack"
            ],
            "answer": 1,
            "hint": "The last sentence of paragraph 1.",
            "skill": "Finding details"
          },
          {
            "q": "Why is spruce never used in the fire?",
            "choices": [
              "Because it is rare",
              "Because its pitch burns bitter",
              "Because it burns too cool",
              "Because it is too heavy"
            ],
            "answer": 1,
            "hint": "Paragraph 2, the sentence with 'pitch'.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 3, what is the 'pellicle'?",
            "choices": [
              "The tub of salt water",
              "The tin sheet over the fire",
              "A kind of alder",
              "The dry, shiny skin that smoke sticks to"
            ],
            "answer": 3,
            "hint": "The sentence 'That shiny skin is called the pellicle'.",
            "skill": "Word meanings"
          },
          {
            "q": "Why does the builder use green alder rather than dry alder?",
            "choices": [
              "Because green wood is cheaper",
              "Because green alder smolders while dry alder flames, and the fire must not flame",
              "Because green alder is easier to split, and the pile has to stand as high as the door",
              "Because green alder smoke is sweeter than dry alder smoke"
            ],
            "answer": 1,
            "hint": "The last sentence of paragraph 2, and the second sentence of paragraph 1 about flaming.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 2 mostly about?",
            "choices": [
              "How to split wood",
              "How tall the pile is",
              "Which wood to burn and why",
              "The cottonwood tree"
            ],
            "answer": 2,
            "hint": "Paragraph 2 names three kinds of wood and says which to use.",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Fire math",
          "points": [
            "Days of smoke to hours: multiply by 24.",
            "Subtracting decimals: line up the points. 3.5 − 1.25 is 3.50 − 1.25 = 2.25.",
            "Brining time: strips ÷ tub size gives batches, then times an hour each.",
            "Stones in the pit: rings times stones in each ring."
          ],
          "example": "2 days is 2 × 24 = 48 hours of smoke."
        },
        "problems": [
          {
            "q": "The fire burns for 3 days. How many hours is that?",
            "answer": "72",
            "hint": "3 × 24.",
            "skill": "Multiplying"
          },
          {
            "q": "A strip of fish weighed 2.4 ounces fresh and 1.85 ounces after smoking. How many ounces did it lose? (write a decimal)",
            "answer": "0.55",
            "hint": "Line up the points: 2.40 − 1.85.",
            "skill": "Decimals"
          },
          {
            "q": "The brine tub holds 20 strips at a time, an hour per batch. The builder has 160 strips. How many hours of brining is that?",
            "answer": "8",
            "hint": "160 ÷ 20 batches, an hour each.",
            "skill": "Dividing"
          },
          {
            "q": "The pit is a ring of stones 2 feet across. The builder stacks 3 rings of 12 stones each. How many stones is that?",
            "answer": "36",
            "hint": "3 × 12.",
            "skill": "Multiplying"
          },
          {
            "q": "The thermometer in the smokehouse reads 85 degrees. The plan says stay below 100. How many degrees of room is there before it is too hot?",
            "answer": "15",
            "hint": "100 − 85.",
            "skill": "Adding and subtracting"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "One word, one job",
            "points": [
              "A word in a report is doing one particular job in one particular sentence. Work out the job, not the dictionary entry.",
              "The sentence often contains its own answer, set against an opposite: this does one thing, that does the other.",
              "Test your choice by putting it back in the sentence. If the sentence now says something the report never said, it is the wrong choice."
            ],
            "example": "'Wet sand packs; dry sand pours.' You do not need to know the word. The sentence has handed you its opposite, and the opposite of pouring tells you enough."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea that develops across the whole plan?",
              "choices": [
                "Green alder smolders while dry alder flames, which is why the builder splits a pile of green wood cut this same week.",
                "Every choice here, the fire, the wood and the preparation, is aimed at smoking the fish without cooking it.",
                "Cooking outdoors takes more skill than cooking indoors, and anyone who can manage a fire in the open can feed a family all year.",
                "The fire is built hot so that every strip cooks all the way through before it has a chance to spoil in the summer air."
              ],
              "answer": 1,
              "hint": "A cool fire, a particular wood, and a strip dried to a shine. Ask what all three of those are protecting the fish from.",
              "skill": "Central idea and evidence",
              "evidence": "That is because the fish is meant to be smoked, not cooked, and a fish that gets hot falls apart."
            },
            {
              "q": "Claim: the wood a camp burns changes the way the fish tastes. Which sentence from the report best supports that claim?",
              "choices": [
                "Cottonwood is too soft and burns too fast.",
                "Spruce, which is everywhere, is never used, because spruce is full of pitch, a sticky sap that burns with black, bitter smoke and makes the fish taste like a tire.",
                "The builder splits a pile of alder as high as the smokehouse door, green wood, cut this week, because green alder smolders and dry alder flames.",
                "The wood is alder."
              ],
              "answer": 1,
              "hint": "Burning badly and tasting bad are two different complaints. The claim is about taste. Find the sentence that follows the wood all the way to the fish.",
              "skill": "Finding details",
              "evidence": "Spruce, which is everywhere, is never used, because spruce is full of pitch, a sticky sap that burns with black, bitter smoke and makes the fish taste like a tire."
            },
            {
              "q": "Why did the author put the paragraph about brining at the end, after the fire has already been described?",
              "choices": [
                "To explain how salt is made out of seawater for the brine tub.",
                "To compare sockeye salmon with the silver salmon that come later.",
                "To list the tools used for splitting a pile of green alder.",
                "To show the smoke does nothing without a prepared fish, so the first step comes last."
              ],
              "answer": 3,
              "hint": "The paragraph opens with 'Before the fire is lit'. Ask why a writer would save something that happens first until the very end.",
              "skill": "Author's purpose and structure",
              "evidence": "That shiny skin is called the pellicle, and it is what the smoke sticks to."
            },
            {
              "q": "The report says 'green alder smolders and dry alder flames'. What does smolders mean as it is used here?",
              "choices": [
                "Refuses to catch fire at all",
                "Burns slowly, with plenty of smoke and no flame",
                "Burns fiercely, with a bright flame and very little smoke",
                "Gives off a sweet smell without burning"
              ],
              "answer": 1,
              "hint": "The sentence sets the word against 'flames', and the first paragraph already told you what kind of fire this has to be. Use both clues.",
              "skill": "Word meanings",
              "evidence": "The builder splits a pile of alder as high as the smokehouse door, green wood, cut this week, because green alder smolders and dry alder flames."
            },
            {
              "q": "Paragraphs 1 and 3 together name two different ways of ending up with soft, ruined fish. Which pair are they?",
              "choices": [
                "Using spruce for the fire, and building the pit too small.",
                "Leaving the door open, and hanging the strips too close together.",
                "Letting the fire get hot, and smoking a strip that was never dried to a shine.",
                "Brining the fish too long, and splitting the alder too late."
              ],
              "answer": 2,
              "hint": "One paragraph tells you what heat does to a fish. Another tells you what a missing pellicle does. Look for the choice that takes one from each.",
              "skill": "Reading between the lines",
              "evidence": "Fish smoked without a pellicle comes out gray and soft."
            }
          ]
        }
      },
      "navByGrade": {
        "3": {
          "lesson": {
            "title": "Grade 3 numbers",
            "points": [
              "Multiplication facts: 2 × 7 means 2 groups of 7.",
              "Sharing equally is dividing.",
              "Taking away big numbers: line up the ones, tens and hundreds, and regroup when the top digit is too small.",
              "A fraction is parts done over parts in all: 2 parts done out of 3 is 2/3."
            ],
            "example": "2 × 7 = 14, so 14 shared into 2 equal groups is 7 each."
          },
          "problems": [
            {
              "q": "Every fire needs 8 logs, and there are 7 fires. How many logs is that?",
              "answer": "56",
              "hint": "7 groups of 8, so 7 × 8.",
              "skill": "Multiplying"
            },
            {
              "q": "The builder sorts 56 logs into two equal piles. How many logs are in each pile?",
              "answer": "28",
              "hint": "Half of 56.",
              "skill": "Dividing"
            },
            {
              "q": "The builder needs 800 logs of alder and has 145. How many more are needed?",
              "answer": "655",
              "hint": "800 − 145.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "The day's work is cut into 4 equal parts and the builder has finished 3 of them. What fraction is done? (write a fraction)",
              "answer": "3/4",
              "hint": "3 parts out of 4.",
              "skill": "Fractions"
            },
            {
              "q": "The builder counts 145 logs of alder, then 48 more. How many is that?",
              "answer": "193",
              "hint": "145 + 48.",
              "skill": "Adding and subtracting"
            }
          ]
        },
        "6": {
          "lesson": {
            "title": "Grade 6 numbers",
            "points": [
              "How many small parts fit: 1/2 ÷ 1/6 = 3/6 ÷ 1/6 = 3.",
              "Percent of a number: turn the percent into a fraction of 100.",
              "A ratio tells you how many of one thing for each group of the other.",
              "Order of operations: parentheses, then multiply and divide, then add and subtract."
            ],
            "example": "3 × (12 − 5) + 8: parentheses first, 12 − 5 = 7; then 3 × 7 = 21; then add 8 to get 29."
          },
          "problems": [
            {
              "q": "The salt bin is 3/5 full. Each batch of fish uses 1/10 of a bin. How many batches can the builder salt?",
              "answer": "6",
              "hint": "Write 3/5 with the same bottom as 1/10: 3/5 = 6/10. How many 1/10s is that?",
              "skill": "Fractions"
            },
            {
              "q": "Of 160 logs of alder, 75% are struck off the list. How many are left on it?",
              "answer": "40",
              "hint": "75% of 160 is 120. Take that off 160.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The builder shares 45 hours between two teams in the ratio 2 to 3. How many does the smaller share get?",
              "answer": "18",
              "hint": "2 + 3 = 5 parts. 45 ÷ 5 = 9 for one part.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The builder works out 6 × 9 − 5 × 2. What is it?",
              "answer": "44",
              "hint": "Do both multiplications first, then subtract.",
              "skill": "Order of operations"
            },
            {
              "q": "In one winter week the coldest reading was −17 degrees and the warmest was −6 degrees. How many degrees apart are they?",
              "answer": "11",
              "hint": "From −17 up to −6.",
              "skill": "Negative numbers"
            }
          ]
        },
        "7": {
          "lesson": {
            "title": "Grade 7 numbers",
            "points": [
              "Find the rate for one first: 4 jobs in 11 hours is 11 ÷ 4 = 2.75 hours each, so 6 jobs take 16.5 hours.",
              "Percent of a number: turn the percent into a fraction of 100, then multiply.",
              "Multiplying or dividing with one minus sign gives a minus answer: 3 × (−5) = −15, and −15 ÷ 3 = −5.",
              "With parentheses, undo the outside first: divide both sides, then take off the number inside."
            ],
            "example": "4(x + 5) = 36, so x + 5 = 9, so x = 4."
          },
          "problems": [
            {
              "q": "12 batches took 9 hours. At the same rate, how many hours would 20 batches take?",
              "answer": "15",
              "hint": "One batch takes 9 ÷ 12 = 0.75. Then × 20.",
              "skill": "Ratios and percent"
            },
            {
              "q": "50% of the 240 logs of alder were lost. How many logs of alder was that?",
              "answer": "120",
              "hint": "50% of 240: 50/100 × 240.",
              "skill": "Ratios and percent"
            },
            {
              "q": "Over 11 hours the thermometer fell 33 degrees in all, the same amount each hour. What was the change each hour? (Write a fall as a negative number.)",
              "answer": "-3",
              "accept": [
                "−3"
              ],
              "hint": "Share −33 into 11 equal parts: −33 ÷ 11. One minus sign, so the answer is negative.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: 3(x + 23) = 93",
              "answer": "8",
              "hint": "Divide both sides by 3 to get x + 23 = 31.",
              "skill": "Equations"
            },
            {
              "q": "A round hearthstone has a radius of 20 inches. Using 3.14 for pi, what is its area in square inches?",
              "answer": "1256",
              "hint": "Area = 3.14 × radius × radius: 3.14 × 20 × 20.",
              "skill": "Area and perimeter"
            }
          ]
        },
        "8": {
          "lesson": {
            "title": "Grade 8 numbers",
            "points": [
              "A list that adds the same amount each step follows a straight-line rule. The 1st number is the start, so the 10th number is 9 steps on.",
              "A small 2 means a number times itself: 8² is 8 × 8 = 64. Work out each power first, then add or subtract.",
              "Pythagoras: in a right triangle a² + b² = c², and c is always the longest side.",
              "Collect the x's first: 12x − 5x is 7x, and an x on its own means 1x."
            ],
            "example": "7, 16, 25, … adds 9 each step. The 5th number is 4 steps on: 7 + 4 × 9 = 43."
          },
          "problems": [
            {
              "q": "The count of logs of alder goes 12, 15, 18, 21, and on. What is the 12th number in the list?",
              "answer": "45",
              "hint": "It starts at 12 and adds 3 each step. The number you want is 11 steps on from 12.",
              "skill": "Linear relationships"
            },
            {
              "q": "What is 7² − 7?",
              "answer": "42",
              "hint": "7 × 7 = 49, then take 7 off.",
              "skill": "Powers and roots"
            },
            {
              "q": "A right triangle has short sides of 5 and 12 feet. How long is its longest side, in feet?",
              "answer": "13",
              "hint": "5² + 12² = 169. The longest side is the square root of that.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "Solve for x: 4x − x = 6",
              "answer": "2",
              "hint": "x is the same as 1x, so 4 − 1 = 3 and 3x = 6.",
              "skill": "Equations"
            },
            {
              "q": "A round water tank is 8 feet across and 5 feet deep. Using 3.14 for pi, what is its volume in cubic feet? (The radius is half the distance across.)",
              "answer": "251.2",
              "hint": "The radius is 8 ÷ 2 = 4. Volume = 3.14 × radius × radius × depth: 3.14 × 4 × 4 × 5.",
              "skill": "Area and perimeter"
            }
          ]
        }
      },
      "orders": {
        "lesson": {
          "title": "Instead",
          "points": [
            "'Instead' throws away the step before it.",
            "Read to the end before you calculate."
          ],
          "example": "'Multiply by 3. Instead, multiply by 2' means multiply by 2."
        },
        "skill": "Following directions",
        "steps": [
          "Write the number of days the smoke fire burns, using the larger number in the plan: 3.",
          "Multiply by 24 to turn those days into hours.",
          "Take away the hour each strip spends in the tub of salt water: 1.",
          "Step 3 is the wrong move for this fire. Go back to the total from step 2 and add the width of the fire pit in feet, 2, rather than taking anything away.",
          "Type the number you are left with."
        ],
        "prompt": "Your answer:",
        "answer": "74",
        "hint": "Turn the days into hours first. Then step 4 sends you back to your step 2 total with a different move — read it before you subtract."
      }
    },
    {
      "id": "kenai-5",
      "title": "First Batch",
      "recon": {
        "lesson": {
          "title": "Putting the week together",
          "points": [
            "The last plan looks back over the whole build. Questions will ask what came in what order.",
            "Look for 'first', 'then', 'after', 'finally'.",
            "The main idea of a closing paragraph is what the writer wants you to keep."
          ],
          "example": "'First the poles, then the cord, then the fish.' What came second? The cord."
        },
        "title": "Camp Plan: Amber",
        "passage": [
          "The first batch came out of the smoke this morning, sixty hours after the fire was lit. The strips are the color of amber, firm and a little bendy, dry on the outside and dark red inside, and the whole camp smells of alder. One strip goes to the oldest fisher in camp, who has watched every board go up and has been patient. One goes to whoever walks up the bank. The rest go into jars, and the jars go into the cache on stilts. That is a winter's food from one week's work.",
          "The build went in the only order it could. The rack first, because the fish would not wait. Then the frame, square before anything was nailed to it. Then the walls with their finger-wide gaps and the roof with its vents under the ridge. Then the pit and the stones and the tin, and the alder, split green. Every step depended on the one before it, and nothing on the list could be skipped. A smokehouse with one thing wrong makes fish that one thing wrong.",
          "The salmon are still running. Late in the season the sockeye thin out and the silvers come, a bigger, brighter fish that fights harder on the line. The camp will smoke those too, through August, until the first frost turns the cottonwoods yellow. Then the door is latched, the rack is taken down and stacked, and the smokehouse stands alone on the bank all winter, black inside, waiting for July."
        ],
        "questions": [
          {
            "q": "How long after the fire was lit did the first batch come out?",
            "choices": [
              "About sixty minutes",
              "Sixty hours",
              "Six days and six nights",
              "A day"
            ],
            "answer": 1,
            "hint": "The first sentence of paragraph 1.",
            "skill": "Finding details"
          },
          {
            "q": "What was built second?",
            "choices": [
              "The rack",
              "The walls",
              "The pit",
              "The frame"
            ],
            "answer": 3,
            "hint": "Paragraph 2, the sentences that begin 'The rack first' and 'Then the frame'.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 3, what are 'silvers'?",
            "choices": [
              "Coins",
              "The color of the smokehouse",
              "A bigger kind of salmon that comes late",
              "Fish that have spoiled"
            ],
            "answer": 2,
            "hint": "The second sentence of paragraph 3.",
            "skill": "Word meanings"
          },
          {
            "q": "Why could nothing on the build list be skipped?",
            "choices": [
              "Because each step depended on the one before, and one thing wrong makes the fish wrong",
              "Because the whole smokehouse has to be finished in one week, before the sockeye run thins out",
              "Because the plan listed the rack, the frame, the walls, the roof, the pit and the green alder",
              "Because the first frost turns the cottonwoods yellow and the camp has to be packed up by then"
            ],
            "answer": 0,
            "hint": "The last two sentences of paragraph 2.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 1 mostly about?",
            "choices": [
              "The first batch: what it looks like, who gets a strip, and what it means for the winter",
              "The salmon that are still running late in the season",
              "The order the whole camp was built in: the rack first, then the frame, then the walls and the pit",
              "The end of the season: the door latched, the rack stacked, and the smokehouse standing empty all winter"
            ],
            "answer": 0,
            "hint": "Paragraph 1 opens with the batch coming out and ends with a winter's food.",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Batch math",
          "points": [
            "Strips into jars: strips ÷ strips per jar.",
            "Hours to full days: see how many 24s fit. 75 hours is 3 days and 3 hours.",
            "Same bottom: add the tops. 2/10 + 5/10 = 7/10.",
            "Two-step: strips given away, then strips left for jars."
          ],
          "example": "120 strips at 10 a jar is 120 ÷ 10 = 12 jars."
        },
        "problems": [
          {
            "q": "The batch is 150 strips. 2 strips are given away. How many strips go into jars?",
            "answer": "148",
            "hint": "150 − 2.",
            "skill": "Adding and subtracting"
          },
          {
            "q": "Each jar holds 4 strips. How many jars do 148 strips fill?",
            "answer": "37",
            "hint": "148 ÷ 4.",
            "skill": "Dividing"
          },
          {
            "q": "The fire burned for 60 hours. How many full days is that, and how many hours left over? Type the number of full days.",
            "answer": "2",
            "hint": "How many 24s fit into 60? Try 24 × 2 and 24 × 3.",
            "skill": "Dividing"
          },
          {
            "q": "The camp smoked 5/12 of the season's fish in July and 4/12 in August. What fraction of the season's fish is that? (write a fraction)",
            "answer": "9/12",
            "accept": [
              "3/4"
            ],
            "hint": "Same bottom. Add the tops.",
            "skill": "Fractions"
          },
          {
            "q": "The camp makes 6 batches of 150 strips over the season. How many strips is that?",
            "answer": "900",
            "hint": "6 × 150: 6 × 100 = 600, 6 × 50 = 300.",
            "skill": "Multiplying"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "Two places, one answer",
            "points": [
              "The last question is built so that no single paragraph answers it. Plan on using two.",
              "Look for what changed between the start of the report and the end. That change is usually where the answer hides.",
              "Before you commit, check you could point at a line in each of two paragraphs. If you can only point once, keep reading."
            ],
            "example": "Paragraph one: the boat came back full. Paragraph three: the crew is loading bait again tonight. Together: the season is not over. Neither line says that on its own."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea of the whole report?",
              "choices": [
                "The first batch came out sixty hours after the fire was lit, amber colored and firm, and the whole camp smelled of alder.",
                "A week of work made sense as one fixed order of steps, and what came out of it is food that lasts a winter.",
                "What matters most at a fish camp is the size of the summer's salmon run.",
                "The steps of the build could have been done in any order at all, since no step really depended on the one before it."
              ],
              "answer": 1,
              "hint": "The batch, the order of the build, and the season still to come. Ask what the middle paragraph says the whole week amounted to.",
              "skill": "Central idea and evidence",
              "evidence": "Every step depended on the one before it, and nothing on the list could be skipped."
            },
            {
              "q": "Claim: the order of the build was forced by the work itself, not chosen for convenience. Which sentence from the report best supports that claim?",
              "choices": [
                "Late in the season the sockeye thin out and the silvers come, a bigger, brighter fish that fights harder on the line.",
                "Then the pit and the stones and the tin, and the alder, split green.",
                "The strips are the color of amber, firm and a little bendy, dry on the outside and dark red inside, and the whole camp smells of alder.",
                "Every step depended on the one before it, and nothing on the list could be skipped."
              ],
              "answer": 3,
              "hint": "Forced means there was no other way around. Find the sentence that says each step needed the one before it.",
              "skill": "Finding details",
              "evidence": "Every step depended on the one before it, and nothing on the list could be skipped."
            },
            {
              "q": "What job does the second paragraph do in this report?",
              "choices": [
                "It gives instructions for putting up a second smokehouse.",
                "It explains why sockeye turn red on the way upstream.",
                "It looks back over the whole week and shows why the steps had to fall in that order.",
                "It describes what the camp will be doing in August."
              ],
              "answer": 2,
              "hint": "The paragraph mentions no new step. Ask what a paragraph is for when everything in it has already happened.",
              "skill": "Author's purpose and structure",
              "evidence": "The build went in the only order it could."
            },
            {
              "q": "The report says the finished strips are 'the color of amber'. What does that tell you about them?",
              "choices": [
                "They have turned a rich golden brown.",
                "They are pale gray and soft to the touch.",
                "They have been coated in a layer of sticky sap.",
                "They are still damp right through to the middle."
              ],
              "answer": 0,
              "hint": "The rest of the sentence tells you what else is true of the strips. Use it to rule out any choice that fights with it.",
              "skill": "Word meanings",
              "evidence": "The strips are the color of amber, firm and a little bendy, dry on the outside and dark red inside, and the whole camp smells of alder."
            },
            {
              "q": "Paragraphs 1 and 3 together suggest that the smokehouse is not a one-summer building. What shows that?",
              "choices": [
                "It keeps working through August and then stands empty all winter, waiting for the next run in July.",
                "It was put up in a single week by one person, working through a list of steps where nothing could be skipped.",
                "The oldest fisher will come back for the first strip next year.",
                "The jars of fish are stored inside the smokehouse over the winter, which is why the building is left standing on the bank."
              ],
              "answer": 0,
              "hint": "Paragraph one says what this week produced. The last paragraph says what happens to the building afterward. Look closely at the word 'waiting'.",
              "skill": "Reading between the lines",
              "evidence": "Then the door is latched, the rack is taken down and stacked, and the smokehouse stands alone on the bank all winter, black inside, waiting for July."
            }
          ]
        }
      },
      "navByGrade": {
        "3": {
          "lesson": {
            "title": "Grade 3 numbers",
            "points": [
              "Multiplication facts: 4 × 3 means 4 groups of 3.",
              "Sharing equally is dividing.",
              "Taking away big numbers: line up the ones, tens and hundreds, and regroup when the top digit is too small.",
              "Fractions with the same bottom: the bigger top is the bigger fraction. 2/3 is bigger than 1/3."
            ],
            "example": "4 × 3 = 12, so 12 shared into 4 equal groups is 3 each."
          },
          "problems": [
            {
              "q": "The builder carries 8 strips on each of 2 trips. How many strips is that?",
              "answer": "16",
              "hint": "2 × 8.",
              "skill": "Multiplying"
            },
            {
              "q": "Every batch takes 9 strips. The builder has 72 strips. How many batches can be filled?",
              "answer": "8",
              "hint": "How many 9s fit into 72?",
              "skill": "Dividing"
            },
            {
              "q": "The builder counted 388 jars in the morning and 441 in the evening. How many more in the evening?",
              "answer": "53",
              "hint": "441 − 388.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "Which is bigger, 7/8 or 1/8? (write a fraction)",
              "answer": "7/8",
              "hint": "Same bottom, so the bigger top wins.",
              "skill": "Fractions"
            },
            {
              "q": "A square frame is 6 feet on each side. How many feet is it all the way around?",
              "answer": "24",
              "hint": "Four sides of 6.",
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
            "example": "4 × (9 − 2) + 5: parentheses first, 9 − 2 = 7; then 4 × 7 = 28; then add 5 to get 33."
          },
          "problems": [
            {
              "q": "The plan allows 25 hours. The builder uses 5.45 hours on the first batch and 8.75 on the second. How many hours are left?",
              "answer": "10.8",
              "hint": "Add the two amounts used first, then take that from 25. Line up the points.",
              "skill": "Decimals"
            },
            {
              "q": "Out of every 100 jars, 25 are set aside. Out of 240 jars, how many is that?",
              "answer": "60",
              "hint": "240 is 2.4 hundreds, so 2.4 × 25.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The builder divides 16 minutes of work in the ratio 1 to 3. How many minutes is the larger share?",
              "answer": "12",
              "hint": "4 parts in all, so one part is 4 minutes.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The builder works out (8 − 4) × (7 + 12). What is it?",
              "answer": "76",
              "hint": "Each set of parentheses first, then multiply the two answers.",
              "skill": "Order of operations"
            },
            {
              "q": "Three winter readings came in: −13, −6 and 7 degrees. Which is the coldest?",
              "answer": "-13",
              "accept": [
                "−13"
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
              "How many in all, then take off the ones done: 11 hours at 2.75 hours a job is 4 jobs, so with 1 done, 3 are left.",
              "Percent change: find that percent of the starting number, then add it on or take it off.",
              "Below zero, going up adds and going down subtracts. Walk the number line one step at a time.",
              "A two-step equation: undo the taking away first, then undo the dividing by multiplying."
            ],
            "example": "x ÷ 4 − 3 = 6, so x ÷ 4 = 9, so x = 36."
          },
          "problems": [
            {
              "q": "The job needs 6 hours in all, at 0.75 hours for each batch. One batch is already done. How many batches are left?",
              "answer": "7",
              "hint": "6 ÷ 0.75 = 8 in all, then take the finished one off.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The rule says a count of jars may change by no more than 50%. Starting from 200, what is the highest count the rule allows?",
              "answer": "300",
              "hint": "50% of 200 is 100. Add it on.",
              "skill": "Ratios and percent"
            },
            {
              "q": "On a winter night the thermometer fell 14 degrees from −4 degrees. What does it read?",
              "answer": "-18",
              "accept": [
                "−18"
              ],
              "hint": "Falling from below zero takes you further from zero: 4 + 14, and it is still below zero.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: x ÷ 5 − 5 = 7",
              "answer": "60",
              "hint": "Add 5 to both sides, then multiply by 5.",
              "skill": "Equations"
            },
            {
              "q": "A drawing uses 1 inch for every 10 feet. How many inches are needed for 240 feet?",
              "answer": "24",
              "hint": "240 ÷ 10.",
              "skill": "Ratios and percent"
            }
          ]
        },
        "8": {
          "lesson": {
            "title": "Grade 8 numbers",
            "points": [
              "Slope is the rise over the run: how much y goes up, divided by how much x goes across.",
              "A small 2 means a number times itself: 4² is 4 × 4 = 16. Work out the power first, then multiply.",
              "Pythagoras: in a right triangle a² + b² = c², and c is always the longest side.",
              "With x on both sides, move all the x's to one side first, then all the plain numbers to the other."
            ],
            "example": "Through (0, 4) and (5, 19): y rises 15 while x runs 5, so the slope is 15 ÷ 5 = 3."
          },
          "problems": [
            {
              "q": "A line passes through (0, 24) and (7, 80). What is its slope?",
              "answer": "8",
              "hint": "Slope is the rise over the run: 56 ÷ 7.",
              "skill": "Linear relationships"
            },
            {
              "q": "The builder doubles 6² jars. How many jars is that?",
              "answer": "72",
              "hint": "6² is 36. Double it.",
              "skill": "Powers and roots"
            },
            {
              "q": "The builder goes 8 feet east and then 15 feet north. In a straight line, how far is that from the start, in feet?",
              "answer": "17",
              "hint": "The two legs make a right angle: 8² + 15² = 289.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "For what value of x do 7x + 4 and 2x + 39 come to the same number?",
              "answer": "7",
              "hint": "Set them equal, take 2x off both sides, then take 4 off.",
              "skill": "Equations"
            },
            {
              "q": "The builder writes a number as 7 × 10^5. What number is ten times as big? Write it out in full.",
              "answer": "7000000",
              "hint": "Ten times adds one to the power: 7 × 10^6.",
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
            "If the last step asks for a word, a number is wrong even if it is the right number."
          ],
          "example": "'Type the color, not the count' means a color."
        },
        "skill": "Following directions",
        "steps": [
          "Write the number of hours the first batch spent in the smoke: 60.",
          "The build went in five jobs, in this order: the rack, the frame, the walls, the roof and the fire pit. Divide the 60 hours by those 5 jobs.",
          "Take away the 2 strips handed out, one to the oldest fisher and one to whoever walks up the bank.",
          "Ignore step 3 completely. Strips are not hours, so nothing comes away.",
          "Type the number you have now."
        ],
        "prompt": "Your answer:",
        "answer": "12",
        "hint": "Step 4 takes step 3 back off. The number that reaches step 5 is the one you had after step 2."
      }
    }
  ]
};
if (window.BASECAMP_MISSIONS && window.BASECAMP_MISSIONS.register) window.BASECAMP_MISSIONS.register(C);
else (window.BASECAMP_CAMPAIGNS_PENDING = window.BASECAMP_CAMPAIGNS_PENDING || []).push(C);
})();
