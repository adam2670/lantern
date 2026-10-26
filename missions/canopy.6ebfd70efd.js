// ODYSSEY — campaign "canopy". GENERATED, do not edit.
// Source of truth: content/missions-full.js. Rebuild with:  python3 tools/split-missions.py
// RULE: nothing in this file is about the person using it. Content only.
(function () {
var C = {
  "id": "canopy",
  "ready": true,
  "kind": "climb",
  "readingLevel": {
    "fk": 5.8,
    "cl": 6.3
  },
  "grade": "5",
  "kindLabel": "Expedition",
  "form": "sloth",
  "title": "Canopy Station",
  "subtitle": "A rainforest research tree, near the equator",
  "pitch": "Five platforms up one giant tree, from the dark forest floor to the sunlit roof of the rainforest a hundred and fifty feet up. Ropes, rain, ants, a sloth for a guide, and more than three hundred kinds of living things counted in one tree.",
  "scene": "assets/scene-canopy.jpg",
  "waypoints": [
    [
      705,
      950
    ],
    [
      710,
      800
    ],
    [
      712,
      640
    ],
    [
      710,
      480
    ],
    [
      706,
      300
    ],
    [
      700,
      155
    ]
  ],
  "progress": {
    "unit": "ft",
    "total": 150
  },
  "dayNoun": "Pitch",
  "stageNoun": "Platform",
  "finalNoun": "The crown",
  "stages": [
    "Forest Floor",
    "The Understory",
    "The Trunk",
    "The Canopy",
    "The crown"
  ],
  "reconNoun": "Field Notes",
  "legs": {
    "recon": "Field notes",
    "nav": "Canopy math",
    "orders": "Climb orders",
    "debrief": "Platform"
  },
  "fact": "More than half of all the kinds of living things on Earth live in rainforests, and most of those live up in the trees, in a layer nobody could reach until scientists started climbing with ropes.",
  "finale": {
    "prompt": "The crown, at last. Which color flag goes on the top branch for the helicopter survey to see?",
    "options": [
      {
        "label": "Orange",
        "color": "#F28C28"
      },
      {
        "label": "Yellow",
        "color": "#FFD65C"
      },
      {
        "label": "White",
        "color": "#F4F8FF"
      },
      {
        "label": "Pink",
        "color": "#FF6BD6"
      }
    ],
    "done": "Tie it on. Then sit for ten minutes and count what lands on your sleeve. That is a survey too."
  },
  "patrols": [
    {
      "id": "canopy-1",
      "title": "The Forest Floor",
      "recon": {
        "lesson": {
          "title": "Questions first, then the notes",
          "points": [
            "Read the five questions before the notes. Two want a detail, one wants a word, one wants a why, one wants what a paragraph is mostly about.",
            "Percents and heights are details. Circle them.",
            "The answer is always in the notes. You never have to guess."
          ],
          "example": "Question: 'How deep is the lake?' Scan for 'feet' or a number, then read that whole sentence."
        },
        "title": "Field Notes: Two Percent of the Sun",
        "passage": [
          "The forest floor is dark at noon. Only about two percent of the sunlight that hits the top of the rainforest reaches the ground, because a hundred and fifty feet of leaves are in the way. The floor is a dim green room of tree trunks, roots, fallen leaves and mud. It is as warm as a bathroom and just as wet. Almost nothing grows here except things that can live on scraps of light. Ferns, mosses, and the seedlings of giant trees can. The seedlings wait years for a tree above them to fall and open a hole in the roof.",
          "The research station is a single tree, a kapok, the tallest kind in this forest, with a trunk as wide as a car at the base. It has buttresses, flat fins of wood that spread out from the trunk like the legs of a rocket, holding it up in the thin soil. Ropes hang from its branches at every level. The first climber fixed them there with a crossbow and a fishing line. Platforms of aluminum and mesh are bolted to the trunk at thirty, sixty, ninety, a hundred and twenty, and a hundred and fifty feet. The climber's job is to work up the tree one layer a day, counting what lives in each layer.",
          "The count on the floor is mostly ants. A square meter of leaf litter, sorted on a white sheet, holds hundreds of them of a dozen kinds. There are beetles too, and spiders. There is a frog the size of a thumbnail, and a millipede as long as a hand. The climber writes down every kind. Ants are the rainforest's cleaning crew, its farmers and its soldiers. By weight there are more ants in this forest than all the birds, monkeys and jaguars put together. At four the daily rain starts somewhere far overhead, exactly on time. The sheet goes back in the pack before the drips arrive."
        ],
        "questions": [
          {
            "q": "About how much of the sunlight reaches the forest floor?",
            "choices": [
              "Half",
              "Twenty percent, the rest caught by the leaves",
              "About two percent",
              "Ten percent"
            ],
            "answer": 2,
            "hint": "The second sentence of paragraph 1.",
            "skill": "Finding details"
          },
          {
            "q": "At what heights are the platforms?",
            "choices": [
              "Every ten feet",
              "Thirty, sixty and ninety feet, with a hammock strung underneath each one of them",
              "At sixty, ninety, a hundred and twenty, and a hundred and fifty feet above the ground",
              "Thirty, sixty, ninety, a hundred and twenty, and a hundred and fifty feet"
            ],
            "answer": 3,
            "hint": "Paragraph 2, the sentence with 'Platforms of aluminum'.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 2, what are 'buttresses'?",
            "choices": [
              "The ropes fixed to the branches by the first climber with a crossbow",
              "Flat fins of wood spreading from the trunk that hold the tree up",
              "The platforms of aluminum and mesh bolted to the trunk at each level",
              "The seedlings of the giant trees waiting for a hole to open in the roof"
            ],
            "answer": 1,
            "hint": "The sentence 'buttresses, flat fins of wood...'.",
            "skill": "Word meanings"
          },
          {
            "q": "Why do the seedlings on the floor wait for a tree to fall?",
            "choices": [
              "Because the mud on the floor is too wet for their roots",
              "Because the rain cannot reach them until a tree comes down",
              "Because a fallen tree opens a hole in the roof and lets in the light they need to grow",
              "Because the ferns and mosses take up the space on the floor"
            ],
            "answer": 2,
            "hint": "The last sentence of paragraph 1.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 3 mostly about?",
            "choices": [
              "The count on the forest floor, and why ants matter so much",
              "The rain",
              "The white sheet",
              "How the kapok's buttresses hold the tree upright in the thin soil"
            ],
            "answer": 0,
            "hint": "The first sentence of paragraph 3 says the count 'is mostly ants', and the rest explains.",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Floor math",
          "points": [
            "'5 out of every 100' means: for each 100 that come in, 5 get through.",
            "A fraction times a whole number: 6 × 2/3 is six 2/3s, which is 12/3, or 4.",
            "Kinds of ant times ants: a rough count.",
            "Same bottom: add the tops and keep the bottom, so 2/9 + 5/9 = 7/9."
          ],
          "example": "8 kinds of beetle with about 20 of each: 8 × 20 = 160 beetles."
        },
        "problems": [
          {
            "q": "The climber spends 3/4 of an hour at each of 4 platforms. How many hours is that?",
            "answer": "3",
            "hint": "Four 3/4s is 12/4. How many wholes is that?",
            "skill": "Fractions"
          },
          {
            "q": "Only 2 out of every 100 units of sunlight reach the floor. If 100 units of light hit the top, how many reach the floor?",
            "answer": "2",
            "hint": "2 out of every 100.",
            "skill": "Fractions"
          },
          {
            "q": "The climber counted 12 kinds of ant with about 25 ants of each kind. About how many ants is that?",
            "answer": "300",
            "hint": "12 × 25.",
            "skill": "Multiplying"
          },
          {
            "q": "The tree is 150 feet tall. The first platform is at 30 feet. How many feet of tree are above the first platform?",
            "answer": "120",
            "hint": "150 − 30.",
            "skill": "Adding and subtracting"
          },
          {
            "q": "The climber sorted 3/10 of the leaf litter before lunch and 4/10 after. What fraction is sorted? (write a fraction)",
            "answer": "7/10",
            "hint": "Same bottom. Add the tops.",
            "skill": "Fractions"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "All three paragraphs at once",
            "points": [
              "Read to the end, then say in one sentence of your own what the whole report was about. Do that before you look at a single choice.",
              "The wrong answers are usually true. They cover one paragraph, or they are wider than anything the report says, or they contradict a line you have already read.",
              "Four more moves follow: prove a claim with one sentence, say what a paragraph is for, work a word out from its sentence, and hold two paragraphs together."
            ],
            "example": "Three paragraphs about a harbor: what the boats catch, how the ice plant works, what the town does in a bad season. 'The ice plant runs on diesel' covers one paragraph. 'Fishing is hard work' covers nothing. 'One catch has to carry a whole town through the year' covers all three."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea of the whole report?",
              "choices": [
                "A square meter of leaf litter, sorted on a white sheet, holds hundreds of ants of a dozen kinds, along with beetles, spiders, a frog and a millipede.",
                "Rainforests hold more living things than anywhere else on Earth.",
                "This one tree is a stack of levels from dark floor to open sky, and the work is to climb it a layer at a time and count what lives in each.",
                "The forest floor receives most of the sunlight that falls on the forest."
              ],
              "answer": 2,
              "hint": "The dark floor, the tree with five platforms, the count in the leaf litter. One choice is a single detail from the last paragraph, and one is the opposite of the second sentence.",
              "skill": "Central idea and evidence",
              "evidence": "The climber's job is to work up the tree one layer a day, counting what lives in each layer."
            },
            {
              "q": "Claim: the seedlings on the floor are waiting rather than growing. Which sentence from the report best supports that claim?",
              "choices": [
                "It has buttresses, flat fins of wood that spread out from the trunk like the legs of a rocket, holding it up in the thin soil.",
                "Platforms of aluminum and mesh are bolted to the trunk at thirty, sixty, ninety, a hundred and twenty, and a hundred and fifty feet.",
                "The forest floor is dark at noon.",
                "The seedlings wait years for a tree above them to fall and open a hole in the roof."
              ],
              "answer": 3,
              "hint": "The claim is about waiting, and waiting needs something to wait for. Find the sentence that says what the seedlings are waiting on.",
              "skill": "Finding details",
              "evidence": "The seedlings wait years for a tree above them to fall and open a hole in the roof."
            },
            {
              "q": "Why does the report describe the buttresses as 'flat fins of wood that spread out from the trunk like the legs of a rocket'?",
              "choices": [
                "It gives the exact width of the trunk at the base, which is the measurement the climber needs before setting the ropes.",
                "It gives a picture for a shape most readers have never seen, and then says what that shape is for.",
                "It explains how the platforms of aluminum and mesh are bolted through the trunk at each of the five levels.",
                "It compares the kapok with the other kinds of tree around it, which are shorter and have no fins at the base."
              ],
              "answer": 1,
              "hint": "Read the words that come straight after the comparison. They tell you the job the buttresses are doing in thin soil.",
              "skill": "Author's purpose and structure",
              "evidence": "It has buttresses, flat fins of wood that spread out from the trunk like the legs of a rocket, holding it up in the thin soil."
            },
            {
              "q": "The report calls the ants 'the rainforest's cleaning crew, its farmers and its soldiers'. What is that phrase telling you?",
              "choices": [
                "Ants weigh more together than the birds and the monkeys do.",
                "Ants attack anything that walks across the forest floor.",
                "Ants do several different jobs that the forest could not do without.",
                "Ants are the only insects that live in the leaf litter."
              ],
              "answer": 2,
              "hint": "Three names for one animal, all of them borrowed from people. Ask what the writer is saying by giving one creature three different jobs.",
              "skill": "Word meanings",
              "evidence": "Ants are the rainforest's cleaning crew, its farmers and its soldiers."
            },
            {
              "q": "Paragraphs 1 and 2 together explain why the platforms are set at five different heights instead of one. Why?",
              "choices": [
                "The light changes all the way up a hundred and fifty feet, so what lives at each height is different and has to be counted separately.",
                "The ropes were fixed to the branches by the first climber with a crossbow and a fishing line, so a platform has to sit wherever one of them already hangs.",
                "The ropes can only be fixed thirty feet apart at a time.",
                "The kapok is the only tree tall enough to hold a single platform."
              ],
              "answer": 0,
              "hint": "Paragraph one tells you how little light gets to the bottom and why. Paragraph two tells you what the climber is counting. Put the two together.",
              "skill": "Reading between the lines",
              "evidence": "Only about two percent of the sunlight that hits the top of the rainforest reaches the ground, because a hundred and fifty feet of leaves are in the way"
            }
          ]
        }
      },
      "navByGrade": {
        "3": {
          "lesson": {
            "title": "Grade 3 numbers",
            "points": [
              "Multiplication facts: 6 × 8 means 6 groups of 8.",
              "Sharing equally is dividing.",
              "Adding three numbers: add two, then add the third.",
              "Fractions with the same bottom: add the tops."
            ],
            "example": "6 × 8 = 48, so 48 shared into 6 groups is 8 each."
          },
          "problems": [
            {
              "q": "The climber counts 7 squares with 7 leaves in each. How many leaves is that?",
              "answer": "49",
              "hint": "7 × 7.",
              "skill": "Multiplying"
            },
            {
              "q": "49 leaves are shared equally among 7 squares. How many leaves in each square?",
              "answer": "7",
              "hint": "How many 7s make 49?",
              "skill": "Dividing"
            },
            {
              "q": "The climber counted 454 ants, then found 129 more, then 66 more. How many ants in all?",
              "answer": "649",
              "hint": "454 + 129 first. Then add 66.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "The climber finished 4/8 of the day's work before the break and 1/8 after. What fraction is done? (write a fraction)",
              "answer": "5/8",
              "hint": "Same bottom. Add the tops.",
              "skill": "Fractions"
            },
            {
              "q": "A leaf platform is 7 squares wide and 7 squares long. How many squares is that?",
              "answer": "49",
              "hint": "7 rows of 7, so 7 × 7.",
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
            "example": "4 × (9 − 2) + 5 = 33: parentheses, then multiply, then add."
          },
          "problems": [
            {
              "q": "A regular pitch takes 2.75 minutes. A long one takes 2.8 times as long. How many minutes does the long one take?",
              "answer": "7.7",
              "hint": "Multiply 275 × 28 without the points, then put back 3 decimal places.",
              "skill": "Decimals"
            },
            {
              "q": "Of 40 ants, 75% are set aside. How many is that?",
              "answer": "30",
              "hint": "75% of 40: 75% is 75/100.",
              "skill": "Ratios and percent"
            },
            {
              "q": "Leaves and ants are kept in the ratio 3 to 4. If there are 24 leaves, how many ants?",
              "answer": "32",
              "hint": "24 ÷ 3 = 8 groups. Each group has 4 ants.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The climber works out 6 × (7 − 1) + 12. What is it?",
              "answer": "48",
              "hint": "Parentheses first, then multiply, then add.",
              "skill": "Order of operations"
            },
            {
              "q": "The sample freezer read −15 degrees at dawn. After its power cut out, it read 12 degrees by noon. By how many degrees did it rise?",
              "answer": "27",
              "hint": "From −15 up to 0 is 15, then 12 more.",
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
            "example": "4x + 7 = 31, so 4x = 24, so x = 6."
          },
          "problems": [
            {
              "q": "The climber tied 16 knots in 40 minutes altogether. How many minutes is that for one knot?",
              "answer": "2.5",
              "hint": "A rate is the total shared out: 40 ÷ 16.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The climber counted 320 ants on the first pass. On the second pass the number had fallen by 25%. How many ants did the climber count on the second pass?",
              "answer": "240",
              "hint": "25% of 320 is 80. Then take it off.",
              "skill": "Ratios and percent"
            },
            {
              "q": "At dawn the sample freezer read −9 degrees. With its door propped open it warmed 25 degrees by noon, then cooled 7 degrees by dark once it was shut. What does it read at dark?",
              "answer": "9",
              "hint": "Start at −9, go up 25 to 16, then down 7.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: 3x + 5 = 11",
              "answer": "2",
              "hint": "Take 5 off both sides first, then divide by 3.",
              "skill": "Equations"
            },
            {
              "q": "On the plan, 1 inch stands for 20 feet. The trail measures 10 inches on the plan. How long is it really, in feet?",
              "answer": "200",
              "hint": "Every inch is 20 feet, so 10 × 20.",
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
            "example": "Start at 30 and add 4 each hour: after 6 hours, 4 × 6 + 30 = 54."
          },
          "problems": [
            {
              "q": "The climber counts 15 ants on a branch, and 5 more arrive every hour. After 8 hours, how many ants are there?",
              "answer": "55",
              "hint": "This is the straight-line rule y = mx + b: 5 × 8 + 15.",
              "skill": "Linear relationships"
            },
            {
              "q": "Each row holds 9² ants. There are 3 rows. How many ants in all?",
              "answer": "243",
              "hint": "9² means 9 × 9 = 81. Then × 3.",
              "skill": "Powers and roots"
            },
            {
              "q": "The climber runs a rope from the top of a 5-foot pole to a point 12 feet away on the ground. How long is the rope, in feet?",
              "answer": "13",
              "hint": "Right triangle: a² + b² = c². 5² + 12² = 25 + 144 = 169. The rope is the square root of that.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "Solve for x: 6x + 14 = 3x + 20",
              "answer": "2",
              "hint": "Take 3x off both sides to get 3x + 14 = 20, then take 14 off both sides and divide.",
              "skill": "Equations"
            },
            {
              "q": "The climber writes the total number of ants as 5 × 10^4. Written out in full, what number is that?",
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
          "example": "'Add 8. Ignore that step, so take the 8 back off.' The 8 never counts."
        },
        "skill": "Following directions",
        "steps": [
          "Write the height of the kapok in feet: 150.",
          "Divide by the number of platforms bolted to the trunk: 5.",
          "Add the number of kinds of ant sorted on the white sheet: 12.",
          "Subtract the percent of sunlight that reaches the forest floor: 2.",
          "Ignore step 3 completely. The ant kinds were never part of this count, so take those 12 back off your total.",
          "Type what you are left with."
        ],
        "prompt": "Your answer:",
        "answer": "28",
        "hint": "Step 5 sends you back to step 3 and cancels it. Work the chain through in order, then take those ant kinds off again."
      }
    },
    {
      "id": "canopy-2",
      "title": "The Understory",
      "recon": {
        "lesson": {
          "title": "How the climb works",
          "points": [
            "A 'how' question wants the steps of the method, in order.",
            "Safety rules come with reasons. Match them.",
            "A new word is often explained right after it, after a comma or a colon."
          ],
          "example": "'Slide the top ascender up, stand, slide the bottom one.' What moves first? The top."
        },
        "title": "Field Notes: Thirty Feet on a Rope",
        "passage": [
          "Nobody climbs a rainforest tree by the trunk. The trunk is wet, smooth, and covered in things that bite. The climber goes up a rope instead, a fixed line hanging from the platform above, using two ascenders. Ascenders are metal clamps that slide up the rope freely and lock when weight is put on them. One is clipped to the harness at the chest, the other to a loop for the foot. Slide the top one up, stand in the foot loop, slide the bottom one up, sit back in the harness, and again. It is a very slow ladder that you carry with you.",
          "The rule is three points of contact and two clamps on the rope at all times, because a clamp can be opened by mistake and a single clamp is a single mistake from the ground. The climber wears a helmet against falling branches, gloves against the rope, and long sleeves against the ants. The ants come out of the bark to find out what is shaking their tree. They are not pleased. Thirty feet takes ten minutes. The first platform is a square of mesh the size of a bed, with a rail, bolted through the trunk, and it does not move at all when the climber stands on it.",
          "This is the understory: the layer between the floor and the canopy, still dim, still wet, but with more going on. Vines as thick as arms climb the trunk toward the light. A hummingbird checks the climber's red helmet for nectar and leaves. The count on the platform is a bucket trap hung from the rail, which by morning has thirty-one beetles in it of nine kinds, four of which the climber cannot find in the book. The notes say: possibly new. The climber sleeps in a hammock strung under the platform, in the dark, with the frogs."
        ],
        "questions": [
          {
            "q": "How many ascenders does the climber use?",
            "choices": [
              "One",
              "Three",
              "Two",
              "Four"
            ],
            "answer": 2,
            "hint": "Paragraph 1, the sentence with 'using two ascenders'.",
            "skill": "Finding details"
          },
          {
            "q": "How long does it take to climb thirty feet?",
            "choices": [
              "A day",
              "An hour",
              "Ten minutes",
              "A week"
            ],
            "answer": 2,
            "hint": "Paragraph 2, the sentence 'Thirty feet takes ten minutes.'",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 3, what is the 'understory'?",
            "choices": [
              "The dark forest floor under the roots of the tree",
              "The layer of tightly packed leaves at the top where the light is",
              "The branch above the canopy where there is nothing but sky above",
              "The layer of the forest between the floor and the canopy"
            ],
            "answer": 3,
            "hint": "The first sentence of paragraph 3.",
            "skill": "Word meanings"
          },
          {
            "q": "Why does the rule require two clamps on the rope at all times?",
            "choices": [
              "Because one is a spare in case the rope breaks",
              "Because a clamp can be opened by mistake, and with only one clamp that mistake means a fall",
              "Because a clamp slides up the rope freely and locks under weight",
              "Because a rope this long will stretch under a climber's weight and two clamps share the load between them"
            ],
            "answer": 1,
            "hint": "The first sentence of paragraph 2.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 1 mostly about?",
            "choices": [
              "How the climber goes up the rope with ascenders",
              "Why nobody ever climbs a rainforest tree by the trunk",
              "The rule about clamps and the gear the climber wears",
              "The hummingbird, the vines and the bucket trap on the platform"
            ],
            "answer": 0,
            "hint": "Paragraph 1 explains the ascenders and the up-stand-up rhythm.",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Rope math",
          "points": [
            "Subtracting decimals: line up the points. 2.3 − 0.75 is 2.30 − 0.75 = 1.55.",
            "Area of a rectangle: one side times the other side.",
            "Kinds possibly new out of kinds found: a fraction.",
            "Minutes to climb: the feet ÷ the feet a minute."
          ],
          "example": "60 feet at 4 feet a minute is 60 ÷ 4 = 15 minutes."
        },
        "problems": [
          {
            "q": "One beetle in the trap is 1.25 inches long and another is 0.8 inch long. How much longer is the first beetle? (write a decimal)",
            "answer": "0.45",
            "hint": "Line up the points: 1.25 − 0.80.",
            "skill": "Decimals"
          },
          {
            "q": "The climber goes up the rope at 3 feet a minute. How many minutes would the whole 150-foot tree take?",
            "answer": "50",
            "hint": "150 ÷ 3.",
            "skill": "Dividing"
          },
          {
            "q": "The trap held 31 beetles of 9 kinds. 4 kinds were possibly new. Write the possibly-new kinds as a fraction of the kinds found.",
            "answer": "4/9",
            "hint": "4 over 9.",
            "skill": "Fractions"
          },
          {
            "q": "The rule is 3 points of contact. The climber has 2 hands and 2 feet. How many can be off the rope or tree at once?",
            "answer": "1",
            "hint": "4 − 3.",
            "skill": "Adding and subtracting"
          },
          {
            "q": "The platform is 6 feet by 6 feet. What is its area in square feet?",
            "answer": "36",
            "hint": "6 × 6.",
            "skill": "Area and perimeter"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "The one that would convince somebody",
            "points": [
              "You are hunting for proof, not for matching words. A sentence can sit right beside the answer and prove none of it.",
              "Read the claim, then read your pick straight after it. If a gap is left open, keep looking.",
              "All four choices are real sentences from the report, so being true is where every one of them starts."
            ],
            "example": "Claim: this shed is used every day. 'The shed is painted red' is true and proves nothing. 'The path to the door is worn down to bare earth' would convince anybody."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea that develops across the whole report?",
              "choices": [
                "An ascender is a metal clamp that slides up a rope freely and locks when weight is put on it.",
                "Climbing is the most dangerous part of any scientific expedition, which is why the rules come before the counting.",
                "Getting off the ground is a slow, careful system of ropes and rules, and the first thirty feet already turn up things the book does not have.",
                "The climber goes up by gripping and hauling on the trunk of the tree, keeping the rope for the way down."
              ],
              "answer": 2,
              "hint": "The clamps, the rules, the bucket trap. One choice is a definition, and one is denied in the first line of the report.",
              "skill": "Central idea and evidence",
              "evidence": "Nobody climbs a rainforest tree by the trunk."
            },
            {
              "q": "Claim: the rules exist because a single piece of equipment can fail. Which sentence from the report best supports that claim?",
              "choices": [
                "One is clipped to the harness at the chest, the other to a loop for the foot.",
                "Slide the top one up, stand in the foot loop, slide the bottom one up, sit back in the harness, and again.",
                "The rule is three points of contact and two clamps on the rope at all times, because a clamp can be opened by mistake and a single clamp is a single mistake from the ground.",
                "The first platform is a square of mesh the size of a bed, with a rail, bolted through the trunk, and it does not move at all when the climber stands on it."
              ],
              "answer": 2,
              "hint": "The claim is about one thing going wrong. Look for the sentence that states a rule and then names the failure the rule is guarding against.",
              "skill": "Finding details",
              "evidence": "The rule is three points of contact and two clamps on the rope at all times, because a clamp can be opened by mistake and a single clamp is a single mistake from the ground."
            },
            {
              "q": "Why does the report call the climbing method 'a very slow ladder that you carry with you'?",
              "choices": [
                "It tells the reader how the ascenders lock onto the rope when the climber puts weight on them.",
                "It explains how the platform above is bolted through the trunk of the tree, so that the fixed line has something solid to hang from.",
                "It compares this tree with a tree that would be easier to climb, one with a dry trunk and no ants living in the bark.",
                "It packs four separate rope movements into one picture, so the reader can feel what the climb is actually like."
              ],
              "answer": 3,
              "hint": "Read the sentence just before it, the one full of commas. Ask what the short sentence after it is doing for that list.",
              "skill": "Author's purpose and structure",
              "evidence": "Slide the top one up, stand in the foot loop, slide the bottom one up, sit back in the harness, and again."
            },
            {
              "q": "The report says a single clamp is 'a single mistake from the ground'. What does that phrase mean?",
              "choices": [
                "One clamp can be taken off and repaired down on the ground if it jams on the rope.",
                "With only one clamp, one error would drop the climber all the way down.",
                "The climber is only one step above the forest floor at that point.",
                "One clamp is enough for the first thirty feet of the climb."
              ],
              "answer": 1,
              "hint": "The first half of the sentence tells you what a clamp can do by mistake. Follow that mistake through to what the phrase says comes next.",
              "skill": "Word meanings",
              "evidence": "The rule is three points of contact and two clamps on the rope at all times, because a clamp can be opened by mistake and a single clamp is a single mistake from the ground."
            },
            {
              "q": "Paragraphs 2 and 3 together explain why the count at this platform takes a night as well as a day. Why?",
              "choices": [
                "The trap hangs from the platform rail and is not read until morning, so the climber sleeps under the platform to be there when it is.",
                "Thirty feet takes ten minutes, so the climb uses up the whole of the day and the counting can only begin once the climber is finally up there.",
                "The beetles only come out of the bark after dark, while the frogs are calling, so the bucket trap on the rail catches nothing at all during the day.",
                "The book that names the beetles has to be carried up from the station on the ground, and it does not reach the platform until the following morning."
              ],
              "answer": 0,
              "hint": "One paragraph tells you what is bolted to the trunk and what is on it. The other tells you when the trap gets read and where the hammock is. Put the two together.",
              "skill": "Reading between the lines",
              "evidence": "The count on the platform is a bucket trap hung from the rail, which by morning has thirty-one beetles in it of nine kinds, four of which the climber cannot find in the book."
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
              "Fractions with the same bottom: add or take away the tops; the bottom stays."
            ],
            "example": "3 × 7 = 21, and 21 shared into 3 groups is 7."
          },
          "problems": [
            {
              "q": "The climber climbed 6 feet yesterday and three times as far today. How many feet today?",
              "answer": "18",
              "hint": "Three times 6: 6 + 6 + 6.",
              "skill": "Multiplying"
            },
            {
              "q": "The climber splits a 24-foot climb into sections of 6 feet. How many sections is that?",
              "answer": "4",
              "hint": "How many 6s make 24?",
              "skill": "Dividing"
            },
            {
              "q": "The climber starts with 171 seed pods and uses 167. How many are left?",
              "answer": "4",
              "hint": "171 − 167.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "2/6 of the day's work was done yesterday. What fraction is still to do? (write a fraction)",
              "answer": "4/6",
              "hint": "The whole job is 6/6. Take 2/6 off it.",
              "skill": "Fractions"
            },
            {
              "q": "The tally stood at 522 seed pods and 400 more were added. What is the tally now?",
              "answer": "922",
              "hint": "522 + 400.",
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
            "example": "11 + 2 × 7 = 25: multiply first, then add."
          },
          "problems": [
            {
              "q": "The climber has 9 1/3 yards of rope. Each safety loop takes 2 1/3 yards. How many loops can the climber tie?",
              "answer": "4",
              "hint": "Make both improper: 28/3 ÷ 7/3. Then multiply by the flip: 28/3 × 3/7.",
              "skill": "Fractions"
            },
            {
              "q": "8 of the 40 seed pods are set aside. What percent is that? (write just the number)",
              "answer": "20",
              "accept": [
                "20%"
              ],
              "hint": "8 out of 40, then out of 100.",
              "skill": "Ratios and percent"
            },
            {
              "q": "For every 3 feet of rope there are 5 clips. There are 30 clips. How many feet of rope?",
              "answer": "18",
              "hint": "30 ÷ 5 = 6 groups. Each group has 3 feet of rope.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The climber works out 15 + 3 × 9. What is it?",
              "answer": "42",
              "hint": "Multiply before you add.",
              "skill": "Order of operations"
            },
            {
              "q": "The sample freezer read 6 degrees when it was switched on. By dark it had fallen to −10 degrees. By how many degrees did it fall?",
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
              "A unit rate is the total divided by how many: 18 ÷ 4 = 4.5 for one.",
              "Percent change: find that percent of the starting number, then add it on or take it off.",
              "Two minus signs make a plus: (−3) × (−5) = 15, and (−15) ÷ (−3) = 5. One minus sign makes a minus.",
              "A two-step equation: undo the adding first, then undo the multiplying."
            ],
            "example": "50 − 6x = 14, so 6x = 36, so x = 6."
          },
          "problems": [
            {
              "q": "One pitch needs 1.5 minutes. How many minutes do 16 pitches need?",
              "answer": "24",
              "hint": "16 × 1.5.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The climber counted 200 orchids on the first pass and 240 on the second. By what percent did the count change? (write just the number)",
              "answer": "20",
              "accept": [
                "20%"
              ],
              "hint": "The change is 40. 40 out of 200, then out of 100.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The water in the tree-top collecting bucket leaks out 6 millimeters every hour. Write that as −6 an hour. How many millimeters higher was the water 9 hours ago? Time before now counts as negative. Work it out as (−6) × (−9).",
              "answer": "54",
              "hint": "6 × 9, and two minus signs make a plus.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: 111 − 9x = 21",
              "answer": "10",
              "hint": "Move 9x to the right and 21 to the left: 9x = 90.",
              "skill": "Equations"
            },
            {
              "q": "A round platform has a radius of 20 inches. Using 3.14 for pi, how many inches is it around the edge?",
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
            "example": "Start with 50 and take away 6 an hour: after 4 hours, 50 − 6 × 4 = 26."
          },
          "problems": [
            {
              "q": "The climber starts with 79 trail markers and puts up 8 every hour. How many are left after 8 hours?",
              "answer": "15",
              "hint": "8 × 8 = 64 put up, taken off 79.",
              "skill": "Linear relationships"
            },
            {
              "q": "What is the square root of 100?",
              "answer": "10",
              "hint": "What number times itself makes 100?",
              "skill": "Powers and roots"
            },
            {
              "q": "A 17-foot rope runs from the top of a pole to a point 15 feet away on the ground. How tall is the pole, in feet?",
              "answer": "8",
              "hint": "a² = c² − b² = 289 − 225 = 64. Then take the square root.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "Solve for x: 7x = 4x + 30",
              "answer": "10",
              "hint": "Take 4x off both sides: 3x = 30. Then divide by 3.",
              "skill": "Equations"
            },
            {
              "q": "A round tank has a radius of 10 feet and holds 1,256 cubic feet. Using 3.14 for pi, how many feet deep is it?",
              "answer": "4",
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
            "Do the steps in the order given, like the ascenders.",
            "If the last step wants a word, spell the number: 9 is NINE."
          ],
          "example": "Start at 20. 'Subtract 4, then divide by 2' gives 8. Divide first and you get 6."
        },
        "skill": "Following directions",
        "steps": [
          "Write the number of beetles in the bucket trap: 31.",
          "Subtract the number of kinds in the trap: 9.",
          "Divide by the number of ascenders on the rope: 2.",
          "Add the number of points of contact the climbing rule demands: 3.",
          "Type your answer as a word in capital letters, not as a number. (20 would be TWENTY.)"
        ],
        "prompt": "Your answer:",
        "answer": "FOURTEEN",
        "accept": [
          "fourteen",
          "Fourteen",
          "fourteen.",
          "FOURTEEN."
        ],
        "hint": "The number part is finished by the end of step 4. Step 5 asks for that number spelled out in letters instead of digits."
      }
    },
    {
      "id": "canopy-3",
      "title": "The Trunk",
      "recon": {
        "lesson": {
          "title": "A pond in a plant",
          "points": [
            "When the notes describe something surprising, the explanation follows. Read in order.",
            "Amounts of rain are details.",
            "A hard word is often explained by the words right around it."
          ],
          "example": "'A camel stores fat in the hump on its back.' What stores the fat? The hump."
        },
        "title": "Field Notes: Ponds in the Sky",
        "passage": [
          "At ninety feet the trunk is still as wide as a doorway. But it is no longer bare. Every foot of it is covered: mosses, ferns, orchids, and plants called bromeliads. Bromeliads are cousins of the pineapple. Their leaves grow in a tight spiral that makes a cup. The cup catches rain. A big bromeliad holds a gallon of water in the middle of its leaves, ninety feet above the ground. That gallon is a pond with everything a pond has: mosquito larvae, tiny crabs, beetles, and frogs that lay their eggs in it and never touch the ground in their lives.",
          "The rain comes every afternoon at four, and this forest gets about a hundred and twenty inches of it a year, ten feet of water, three times what falls on most cities back home. Almost none of it reaches the ground directly. The canopy catches it, the plants on the trunk catch it, and it works its way down over hours, dripping from leaf to leaf. So on the floor it is raining an hour after the sky has cleared. The climber's notes from this platform record rain at 4:00. The notes from the floor recorded it at 5:10.",
          "The count at ninety feet is the bromeliads themselves. The climber tips each one gently, drains the pond into a white tray, counts and photographs what is in it, and pours it back. Seven bromeliads on this side of the trunk, seven ponds. In the sixth one is a frog the color of a lemon, with black eyes. The book says it lives only in the tops of these trees and has been seen by only a hundred people. The climber is the hundred-and-first, and writes the time."
        ],
        "questions": [
          {
            "q": "What plant makes a cup that holds a gallon of rain?",
            "choices": [
              "A palm",
              "A fern",
              "A moss",
              "A bromeliad"
            ],
            "answer": 3,
            "hint": "Paragraph 1, the sentence with 'cousins of the pineapple'.",
            "skill": "Finding details"
          },
          {
            "q": "About how much rain does the forest get in a year?",
            "choices": [
              "About a hundred and twenty inches, ten feet",
              "Twelve inches",
              "About a thousand inches, most of it in the afternoon",
              "Forty inches, three times what most cities get in a year"
            ],
            "answer": 0,
            "hint": "The first sentence of paragraph 2.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 1, what are 'larvae'?",
            "choices": [
              "Kinds of fish",
              "Frogs' eggs",
              "The young of insects like mosquitoes, before they grow wings",
              "The tiny crabs that live in the bromeliad's water"
            ],
            "answer": 2,
            "hint": "'Mosquito larvae' are young mosquitoes living in the water.",
            "skill": "Word meanings"
          },
          {
            "q": "Why does the rain reach the floor an hour after it reaches the platform?",
            "choices": [
              "Because the floor is far away",
              "Because it rains twice",
              "Because the canopy and the plants catch it and it drips down leaf to leaf over hours",
              "Because the rain always begins at four in the afternoon and the forest floor is a hundred and fifty feet down"
            ],
            "answer": 2,
            "hint": "Paragraph 2, the sentence that begins 'The canopy catches it'.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 1 mostly about?",
            "choices": [
              "The width of the trunk",
              "How the climber drains each pond into a tray and counts what is in it",
              "The mosses, ferns and orchids that cover every foot of the trunk",
              "The bromeliads and the ponds they hold in the air"
            ],
            "answer": 3,
            "hint": "Paragraph 1 describes the bromeliad and the pond in its cup.",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Rain math",
          "points": [
            "Inches to feet: ÷ 12.",
            "Gallons in the bromeliads: count × 1.",
            "Minutes between two times: count up to the next full hour, then add the rest.",
            "If one amount is 3 times another, divide the bigger one by 3 to find the smaller."
          ],
          "example": "48 inches ÷ 12 = 4 feet."
        },
        "problems": [
          {
            "q": "The forest gets 120 inches of rain a year. A foot is 12 inches. How many feet is that?",
            "answer": "10",
            "hint": "120 ÷ 12.",
            "skill": "Dividing"
          },
          {
            "q": "Rain reached the platform at 4:00 and the floor at 5:10. How many minutes later?",
            "answer": "70",
            "hint": "4:00 to 5:00 is 60, then 10 more.",
            "skill": "Multi-step problems"
          },
          {
            "q": "Seven bromeliads each hold 1 gallon. How many gallons of pond is that on this side of the trunk?",
            "answer": "7",
            "hint": "7 × 1.",
            "skill": "Multiplying"
          },
          {
            "q": "The forest gets 3 times the rain of a city back home. If the forest gets 120 inches, how much does the city get?",
            "answer": "40",
            "hint": "120 ÷ 3.",
            "skill": "Dividing"
          },
          {
            "q": "The frog has been seen by 100 people. The climber is the 101st. How many people saw it before the climber?",
            "answer": "100",
            "hint": "101 − 1.",
            "skill": "Adding and subtracting"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "The paragraph is making a case",
            "points": [
              "Ask what each paragraph is for: setting a scene, giving a cause, comparing two things, walking an order, or making a claim and backing it up.",
              "When a paragraph ends in numbers or an example, they are usually the proof of the sentence above them.",
              "Cut the paragraph out in your head. Whatever you can no longer believe is what it was doing there."
            ],
            "example": "A report says the ferry is unreliable and then gives four dates when it did not sail. The dates are not decoration. They are the reason the first sentence gets believed."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea of the whole report?",
              "choices": [
                "A big bromeliad holds a gallon of water in the middle of its leaves, ninety feet above the ground.",
                "Rainforests get more rain than anywhere else in the world, so everything in them is always wet.",
                "Almost all of the rain falls straight through to the forest floor, so the floor is soaked long before the plants up on the trunk are.",
                "Ninety feet up the trunk is a world of its own: plants that hold ponds, rain that never falls straight down, and animals that live their whole lives up there."
              ],
              "answer": 3,
              "hint": "The cups, the slow rain, the seven ponds. One choice is a measurement, and one turns a sentence in the middle paragraph upside down.",
              "skill": "Central idea and evidence",
              "evidence": "frogs that lay their eggs in it and never touch the ground in their lives"
            },
            {
              "q": "Claim: the rain reaches the floor long after it has stopped falling from the sky. Which sentence from the report best supports that claim?",
              "choices": [
                "The canopy catches it, the plants on the trunk catch it, and it works its way down over hours, dripping from leaf to leaf.",
                "That gallon is a pond with everything a pond has: mosquito larvae, tiny crabs, beetles, and frogs that lay their eggs in it and never touch the ground in their lives.",
                "The book says it lives only in the tops of these trees and has been seen by only a hundred people.",
                "The rain comes every afternoon at four, and this forest gets about a hundred and twenty inches of it a year, ten feet of water, three times what falls on most cities back home."
              ],
              "answer": 0,
              "hint": "The claim is about a delay. One sentence gives you how much rain falls, which is not the same thing. Find the one that follows a drop all the way down.",
              "skill": "Finding details",
              "evidence": "The canopy catches it, the plants on the trunk catch it, and it works its way down over hours, dripping from leaf to leaf."
            },
            {
              "q": "Why does the report give two times, 4:00 and 5:10, at the end of the second paragraph?",
              "choices": [
                "To show that the rain begins at the same hour each afternoon.",
                "To explain how the daily rainfall is measured in inches.",
                "To act as the proof of the claim just made: that the rain takes over an hour to work its way down.",
                "To compare this forest with the cities back home."
              ],
              "answer": 2,
              "hint": "Cut those two sentences and read the paragraph again. The claim is still there, but something behind it has gone.",
              "skill": "Author's purpose and structure",
              "evidence": "The canopy catches it, the plants on the trunk catch it, and it works its way down over hours, dripping from leaf to leaf. So on the floor it is raining an hour after the sky has cleared."
            },
            {
              "q": "The report calls the water held in a bromeliad 'a pond'. What does calling it a pond tell you?",
              "choices": [
                "It stays full of water even in a week without rain.",
                "It has been dug into the ground at the foot of the tree.",
                "It is not just water but a small world with animals living and breeding in it.",
                "It is standing water that nothing at all can live in, because it is shut up in the leaves."
              ],
              "answer": 2,
              "hint": "The rest of the sentence lists what is in it. Ask what all of those things have in common and why 'pond' is the right word for a cup of leaves.",
              "skill": "Word meanings",
              "evidence": "That gallon is a pond with everything a pond has: mosquito larvae, tiny crabs, beetles, and frogs that lay their eggs in it and never touch the ground in their lives."
            },
            {
              "q": "Paragraphs 1 and 3 together explain why the climber pours each pond back after counting it. Why put it back?",
              "choices": [
                "The bromeliad will die if its cup is left empty even for an hour, because the plant drinks the water it holds in its leaves.",
                "The gallon of water is too heavy to carry back down the tree in a tray.",
                "The rain will not fill the cup again until four in the afternoon, and the photograph of each pond has to be taken with the water back in place.",
                "The pond is where those animals live and lay their eggs, so emptying it would destroy the very thing just counted."
              ],
              "answer": 3,
              "hint": "Paragraph one tells you what a gallon of water in a leaf actually is. The last paragraph tells you what the climber does with it. Neither one alone gives the reason.",
              "skill": "Reading between the lines",
              "evidence": "The climber tips each one gently, drains the pond into a white tray, counts and photographs what is in it, and pours it back."
            }
          ]
        }
      },
      "navByGrade": {
        "3": {
          "lesson": {
            "title": "Grade 3 numbers",
            "points": [
              "Multiplication facts: 4 × 5 means 4 groups of 5.",
              "Sharing equally is dividing.",
              "Adding three numbers: add two, then add the third.",
              "Fractions with the same bottom: add the tops."
            ],
            "example": "4 × 5 = 20, so 20 split into 4 equal rows is 5 in each."
          },
          "problems": [
            {
              "q": "The climber sets out rain cups in 2 rows of 3. How many cups is that?",
              "answer": "6",
              "hint": "2 × 3.",
              "skill": "Multiplying"
            },
            {
              "q": "21 rain cups are set out in 7 equal rows. How many cups are in each row?",
              "answer": "3",
              "hint": "21 split into 7 equal parts.",
              "skill": "Dividing"
            },
            {
              "q": "The log shows 140 inches of rain, then 33 more are added and 27 are taken off. What does the log show now?",
              "answer": "146",
              "hint": "Add 140 and 33 first, then take 27 off.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "Add: 1/4 + 1/4 (write a fraction)",
              "answer": "2/4",
              "hint": "Same bottom. 1 + 1 on top.",
              "skill": "Fractions"
            },
            {
              "q": "A mat is 7 feet wide and 7 feet long. How many feet is it all the way around the edge?",
              "answer": "28",
              "hint": "Two sides of 7 and two sides of 7: 7 + 7 + 7 + 7.",
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
            "example": "(4 + 5) × 3 = 27: parentheses first, then multiply."
          },
          "problems": [
            {
              "q": "The climber has 11.05 minutes of climbing. Each pitch takes 0.65 minutes. How many pitches is that enough for?",
              "answer": "17",
              "hint": "Move both points 2 places to the right: 1105 ÷ 65.",
              "skill": "Decimals"
            },
            {
              "q": "25% of the inches of rain counted is 40. How many were counted in all?",
              "answer": "160",
              "hint": "40 is 25 hundredths of the whole: 40 ÷ 25 × 100.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The climber counts 28 frogs and 35 birds in the tree. In its simplest form, what is the ratio of frogs to birds? (write it like 2:3)",
              "answer": "4:5",
              "accept": [
                "4 to 5"
              ],
              "hint": "Divide both by 7.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The climber works out (6 + 3) × 11. What is it?",
              "answer": "99",
              "hint": "Parentheses first, then multiply.",
              "skill": "Order of operations"
            },
            {
              "q": "The sample freezer read −10 degrees at midnight and warmed 10 degrees by dawn. What does it read at dawn?",
              "answer": "0",
              "hint": "Start at −10 and count 10 steps up.",
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
              "A two-step equation: undo the last step first. In (x + 4) × 2 = 18, divide by 2, then take off 4."
            ],
            "example": "3x + 5 = 20, so 3x = 15, so x = 5."
          },
          "problems": [
            {
              "q": "The climber has 28 minutes to spend and each knot takes 3.5 minutes. How many knots is that enough for?",
              "answer": "8",
              "hint": "28 ÷ 3.5.",
              "skill": "Ratios and percent"
            },
            {
              "q": "This month's rainfall fell by 20% to 32 inches. How many inches fell the month before?",
              "answer": "40",
              "hint": "32 is 80% of the month before.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The sample freezer read 23 degrees when it was switched on, then it fell 28 degrees. What does it read now?",
              "answer": "-5",
              "accept": [
                "−5"
              ],
              "hint": "From 23 down to 0 is 23, and there are 5 left to fall.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: (x + 9) × 5 = 60",
              "answer": "3",
              "hint": "Divide both sides by 5 first, then take 9 off.",
              "skill": "Equations"
            },
            {
              "q": "A model is built at 1 to 5. The bromeliad on the model is 8 inches. How many inches is the real one?",
              "answer": "40",
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
            "example": "y = 3x + 4 when x = 5: 3 × 5 + 4 = 19."
          },
          "problems": [
            {
              "q": "The number of birds the climber has counted follows the rule y = 7x + 10, where x is the hour. What is y when x = 7?",
              "answer": "59",
              "hint": "Put 7 in for x: 7 × 7 + 10.",
              "skill": "Linear relationships"
            },
            {
              "q": "What is 4² + 4²?",
              "answer": "32",
              "hint": "4 × 4 = 16 and 4 × 4 = 16. Add them.",
              "skill": "Powers and roots"
            },
            {
              "q": "A 13-foot rope reaches the top of a 5-foot pole. How far is the bottom end of the rope from the base, in feet?",
              "answer": "12",
              "hint": "b² = c² − a² = 169 − 25 = 144. Then take the square root.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "Solve for x: 10x + 8 − 4x = 68",
              "answer": "10",
              "hint": "Collect the x's first: 6x + 8 = 68.",
              "skill": "Equations"
            },
            {
              "q": "What is 2 × 10^3 ÷ 10^2?",
              "answer": "20",
              "hint": "Dividing subtracts the powers: 10^3 ÷ 10^2 = 10^1. So 2 × 10.",
              "skill": "Powers and roots"
            }
          ]
        }
      },
      "orders": {
        "lesson": {
          "title": "Compare, do not combine",
          "points": [
            "Some orders build two separate totals. Keep them apart on paper, one from each chain of steps.",
            "If the last step says 'the smaller one', set the two side by side and pick. Do not add them."
          ],
          "example": "One chain ends at 48 and the other at 35. 'Type the smaller one' means 35, not 83."
        },
        "skill": "Following directions",
        "steps": [
          "Write the number of bromeliads the climber drains on this side of the trunk: 7.",
          "Multiply by the height of the third platform in feet: 90.",
          "Now start a second number on its own. Write the inches of rain this forest gets in a year: 120.",
          "Subtract the number of feet of water that much rain makes: 10.",
          "You are holding two totals now, one from step 2 and one from step 4. Type the smaller one."
        ],
        "prompt": "Your answer:",
        "answer": "110",
        "hint": "Step 5 does not join the two totals together. Set your step 2 total beside your step 4 total and pick the smaller."
      }
    },
    {
      "id": "canopy-4",
      "title": "The Canopy",
      "recon": {
        "lesson": {
          "title": "The big number",
          "points": [
            "When the notes give a famous number, a question will want it. Read the sentence twice.",
            "A 'why' question: find the sentence that gives the cause. It often sits right next to the thing it explains.",
            "A word about the forest layer is defined by its description."
          ],
          "example": "'Nine out of ten visitors come in summer.' How many? Nine out of ten."
        },
        "title": "Field Notes: Where the Light Is",
        "passage": [
          "At a hundred and twenty feet the climber comes up through the last shade into the canopy. The forest changes from a dim room into a bright, windy, noisy field of leaves. It stretches to every horizon, with the sun on it. This is where the light is. The trees put their leaves up here. They make a layer twenty or thirty feet thick, packed so tightly that from above the forest looks like broccoli. Almost everything that eats leaves, fruit or flowers lives here, and almost everything that eats those animals lives here too.",
          "Scientists think that more than half of all the kinds of living things on Earth live in rainforests, and that most of those live in the canopy. For most of history nobody could get up here to check. The first canopy scientists in the 1970s climbed with ropes borrowed from cavers. What they did first was fog trees of a single kind with insect spray and catch what fell on sheets below. From that one kind of tree, they counted more than a thousand kinds of beetle, most of them never seen before. The number of species on Earth was rewritten because of one kind of tree.",
          "The count on the fourth platform is sound. The climber sits for an hour with a recorder and writes down every call. Howler monkeys a mile away sound like wind in a pipe. Then come a toucan, many parrots, frogs, and a cicada so loud it hurts. At dusk the day birds stop and the night animals start, and for ten minutes there is a changing of the guard when both are calling at once. The notes say: forty-one kinds by ear. The lemon frog from the third platform is calling somewhere below. Now the climber knows the sound."
        ],
        "questions": [
          {
            "q": "How thick is the canopy layer of leaves?",
            "choices": [
              "Two feet",
              "Twenty or thirty feet",
              "A hundred feet",
              "About ten feet"
            ],
            "answer": 1,
            "hint": "Paragraph 1, the sentence with 'broccoli'.",
            "skill": "Finding details"
          },
          {
            "q": "How many kinds of beetle did the first canopy scientists count from one kind of tree?",
            "choices": [
              "Forty-one",
              "A hundred, most of them new to science",
              "A dozen kinds, most of them already in the book",
              "More than a thousand"
            ],
            "answer": 3,
            "hint": "Paragraph 2, the sentence with 'From that one kind of tree'.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 2, what does it mean to 'fog' a tree?",
            "choices": [
              "To wait for a cloud",
              "To climb it in the fog",
              "To spray it with insect spray so the insects fall onto sheets",
              "To photograph it"
            ],
            "answer": 2,
            "hint": "The sentence 'fog trees of a single kind with insect spray and catch what fell'.",
            "skill": "Word meanings"
          },
          {
            "q": "Why do the trees put their leaves at the top instead of lower down?",
            "choices": [
              "Because the wind at the top is stronger and cooler",
              "Because the ground below is wet and muddy all year",
              "Because more than half of all living things on Earth live up there",
              "Because that is where the light is"
            ],
            "answer": 3,
            "hint": "Paragraph 1, the sentence 'This is where the light is.'",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 2 mostly about?",
            "choices": [
              "The ropes that the first canopy scientists borrowed from cavers",
              "The hour that the climber spent recording every call heard at dusk",
              "The changing of the guard at dusk, when both day and night animals call",
              "How canopy science began and what one fogged tree revealed"
            ],
            "answer": 3,
            "hint": "Paragraph 2 tells the history of the first canopy scientists and their count.",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Canopy math",
          "points": [
            "Volume of a box: length × width × height. 6 × 4 × 3 = 72 cubic inches.",
            "Minutes for each kind: minutes ÷ kinds.",
            "Half of all species: divide by 2.",
            "Two-step: feet of canopy, top minus bottom."
          ],
          "example": "Leaves from 40 feet up to 65 feet: 65 − 40 = 25 feet thick."
        },
        "problems": [
          {
            "q": "The canopy layer runs from 120 feet to 150 feet. How thick is it, in feet?",
            "answer": "30",
            "hint": "150 − 120.",
            "skill": "Adding and subtracting"
          },
          {
            "q": "The climber heard 41 kinds in 60 minutes. About how many minutes per kind, rounded down?",
            "answer": "1",
            "hint": "60 ÷ 41 is 1 with some left over.",
            "skill": "Dividing"
          },
          {
            "q": "The climber's seed box is 12 inches long, 8 inches wide and 5 inches tall. How many cubic inches does it hold?",
            "answer": "480",
            "hint": "Length × width × height: 12 × 8 = 96, then times 5.",
            "skill": "Volume"
          },
          {
            "q": "If there are about 2,000,000 named kinds of living things and more than half live in rainforests, what is half of 2,000,000?",
            "answer": "1000000",
            "accept": [
              "1,000,000"
            ],
            "hint": "2,000,000 ÷ 2.",
            "skill": "Fractions"
          },
          {
            "q": "Howler monkeys can be heard a mile away. A mile is 5,280 feet. The climber is 120 feet up. How many feet farther than the climber's height is a mile?",
            "answer": "5160",
            "accept": [
              "5,160"
            ],
            "hint": "5,280 − 120.",
            "skill": "Adding and subtracting"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "Borrowed pictures",
            "points": [
              "Cover the word or phrase with a finger and read the sentence with a gap in it. What belongs there?",
              "Writers borrow pictures from elsewhere: a changing of the guard, a field of leaves. Ask what the borrowed picture is standing in for here.",
              "Slot each choice back into the sentence. Three of them will make the report say something it never said."
            ],
            "example": "'The room emptied like a bathtub draining.' Nobody is plumbing. It means people left steadily until there was nobody left, and the sentence never had to say so."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea that develops across the whole report?",
              "choices": [
                "From above, the roof of the forest looks like broccoli, packed so tightly the leaves hide the branches.",
                "The canopy is where the light and most of the life are, and it stayed unknown until people found a way to climb into it.",
                "Insect spray is the best tool anyone has for studying a forest, and it is still used on every climb.",
                "Most rainforest animals live down on the forest floor, where it is darker and safer than up in the leaves."
              ],
              "answer": 1,
              "hint": "The bright windy layer, the thousand kinds of beetle, the hour of listening. One choice is a picture from the first paragraph, and one says the opposite of what the report keeps saying.",
              "skill": "Central idea and evidence",
              "evidence": "Scientists think that more than half of all the kinds of living things on Earth live in rainforests, and that most of those live in the canopy."
            },
            {
              "q": "Claim: what people believed about how many kinds of living thing exist was changed by canopy work. Which sentence from the report best supports that claim?",
              "choices": [
                "What they did first was fog trees of a single kind with insect spray and catch what fell on sheets below.",
                "Almost everything that eats leaves, fruit or flowers lives here, and almost everything that eats those animals lives here too.",
                "The notes say: forty-one kinds by ear.",
                "The number of species on Earth was rewritten because of one kind of tree."
              ],
              "answer": 3,
              "hint": "The claim is about a belief being changed. Look for the sentence that says something was rewritten, and says what did the rewriting.",
              "skill": "Finding details",
              "evidence": "The number of species on Earth was rewritten because of one kind of tree."
            },
            {
              "q": "Why does the report tell the story of the scientists of the 1970s in the middle of a report about today's climb?",
              "choices": [
                "It shows that today's climber is using the same insect spray they used.",
                "It compares the beetles on the sheets with the birds counted at dusk.",
                "It explains why this layer stayed unknown for so long and what one kind of tree changed, which is why today's count is worth making.",
                "It lists the equipment that cavers lent to the first climbers."
              ],
              "answer": 2,
              "hint": "Take that paragraph out. The climb still happens, but a question is left hanging: why does anybody bother going up? That is the job it was doing.",
              "skill": "Author's purpose and structure",
              "evidence": "For most of history nobody could get up here to check."
            },
            {
              "q": "The report calls the ten minutes at dusk 'a changing of the guard'. What does that phrase mean here?",
              "choices": [
                "The climber swaps places with another scientist at the end of the day, so that the listening can go on all night.",
                "The animals up here take turns defending the tree, so that something is always on watch against anything that comes near.",
                "The recorder has to be swapped over at the end of the listening hour, because an hour is all the tape it holds.",
                "One set of animals is stopping while another set starts, and for a moment both are going at once."
              ],
              "answer": 3,
              "hint": "The rest of the sentence tells you exactly what happens in those ten minutes. Match the borrowed picture to that, not to soldiers.",
              "skill": "Word meanings",
              "evidence": "At dusk the day birds stop and the night animals start, and for ten minutes there is a changing of the guard when both are calling at once."
            },
            {
              "q": "Paragraphs 1 and 3 together explain why a count made by ear works so well up here. Why does it?",
              "choices": [
                "Wind carries sound much farther in the canopy than it does down on the forest floor, so an hour of sitting still reaches animals a long way off.",
                "There is nothing left to count at a hundred and twenty feet, because the ants, the beetles and the ponds were all counted at the platforms below.",
                "The animals at this height are all too small to be seen by eye, so a recorder left running for an hour is the only way to find out what any of them are.",
                "This layer is packed with the animals that eat leaves and fruit and the animals that eat those, and each kind can be told apart by its call."
              ],
              "answer": 3,
              "hint": "Paragraph one says who lives at this height. The last paragraph says what an hour of sitting still produced. Neither alone explains why ears were the right tool.",
              "skill": "Reading between the lines",
              "evidence": "Almost everything that eats leaves, fruit or flowers lives here, and almost everything that eats those animals lives here too."
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
              "Fractions: the bottom is how many equal parts; the top is how many you have."
            ],
            "example": "4 × 7 = 28."
          },
          "problems": [
            {
              "q": "The climber spots 3 birds in each tree crown, and there are 8 crowns. How many birds is that?",
              "answer": "24",
              "hint": "8 groups of 3, so 8 × 3.",
              "skill": "Multiplying"
            },
            {
              "q": "The climber splits 48 kinds in half. How many kinds is one half?",
              "answer": "24",
              "hint": "Half of 48.",
              "skill": "Dividing"
            },
            {
              "q": "The climber needs 600 branches and has 429. How many more are needed?",
              "answer": "171",
              "hint": "600 − 429.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "The day's work is cut into 6 equal parts and the climber has finished 3 of them. What fraction is done? (write a fraction)",
              "answer": "3/6",
              "hint": "3 parts out of 6.",
              "skill": "Fractions"
            },
            {
              "q": "The climber counts 429 branches, then 14 more. How many is that?",
              "answer": "443",
              "hint": "429 + 14.",
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
            "example": "7 × 3 − 2 × 4 = 13: both multiplications first, then subtract."
          },
          "problems": [
            {
              "q": "The climber goes up 1/2 of the trunk in 3/4 of an hour. At that rate, how much of the trunk is climbed in one hour? (write a fraction)",
              "answer": "2/3",
              "hint": "For one hour, divide the amount by the time: 1/2 ÷ 3/4 = 1/2 × 4/3. Then simplify.",
              "skill": "Fractions"
            },
            {
              "q": "Of 120 branches, 75% are struck off the list. How many are left on it?",
              "answer": "30",
              "hint": "75% of 120 is 90. Take that off 120.",
              "skill": "Ratios and percent"
            },
            {
              "q": "Two teams count 21 monkeys between them in the ratio 3 to 4. How many monkeys are in the smaller count?",
              "answer": "9",
              "hint": "3 + 4 = 7 parts. 21 ÷ 7 = 3 for one part.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The climber works out 8 × 8 − 3 × 2. What is it?",
              "answer": "58",
              "hint": "Do both multiplications first, then subtract.",
              "skill": "Order of operations"
            },
            {
              "q": "The sample freezer's coldest reading was −5 degrees and its warmest was −2 degrees. How many degrees apart are they?",
              "answer": "3",
              "hint": "From −5 up to −2.",
              "skill": "Negative numbers"
            }
          ]
        },
        "7": {
          "lesson": {
            "title": "Grade 7 numbers",
            "points": [
              "A unit rate is the total divided by how many: 9 ÷ 12 = 0.75 for one.",
              "Percent change: find that percent of the starting number, then add it on or take it off.",
              "Two minus signs make a plus: (−3) × (−5) = 15, and (−15) ÷ (−3) = 5. One minus sign makes a minus.",
              "A two-step equation: undo the outside step first. In 4(x + 3) = 36, divide by 4, then take off 3."
            ],
            "example": "4(x + 3) = 36, so x + 3 = 9, so x = 6."
          },
          "problems": [
            {
              "q": "The climber tied 16 knots in 8 minutes. At the same rate, how many minutes would 28 knots take?",
              "answer": "14",
              "hint": "One knot takes 8 ÷ 16 = 0.5. Then × 28.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The climber tagged 50% of the 240 branches. How many branches is that?",
              "answer": "120",
              "hint": "50% of 240: 50/100 × 240.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The climber lowers a sample bucket from the canopy, a change of −84 feet, in equal stages of −7 feet. How many stages is that? Work it out as (−84) ÷ (−7).",
              "answer": "12",
              "hint": "84 ÷ 7, and two minus signs make a plus.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: 5(x + 28) = 175",
              "answer": "7",
              "hint": "Divide both sides by 5 to get x + 28 = 35.",
              "skill": "Equations"
            },
            {
              "q": "A square tile is drawn at a scale of 1 to 5. On the drawing each side is 2 inches. How many inches is the real tile around the edge?",
              "answer": "40",
              "hint": "Find one real side first (2 × 5), then add up four sides.",
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
            "example": "Start at 4 and add 3 each step: the 5th number is 4 + 3 × 4 = 16."
          },
          "problems": [
            {
              "q": "The count of branches goes 15, 21, 27, 33, and on. What is the 10th number in the list?",
              "answer": "69",
              "hint": "It starts at 15 and adds 6 each step. The number you want is 9 steps on from 15.",
              "skill": "Linear relationships"
            },
            {
              "q": "What is 11² − 11?",
              "answer": "110",
              "hint": "11 × 11 = 121, then take 11 off.",
              "skill": "Powers and roots"
            },
            {
              "q": "A right triangle has short sides of 8 and 15 feet. How long is its longest side, in feet?",
              "answer": "17",
              "hint": "8² + 15² = 289. The longest side is the square root of that.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "Solve for x: 5x − 2x = 15",
              "answer": "5",
              "hint": "5 − 2 = 3, so 3x = 15.",
              "skill": "Equations"
            },
            {
              "q": "A round tank is 12 feet across and 3 feet deep. Using 3.14 for pi, what is its volume in cubic feet? (The radius is half the distance across.)",
              "answer": "339.12",
              "hint": "The radius is 12 ÷ 2 = 6. Volume = 3.14 × radius × radius × depth: 3.14 × 6 × 6 × 3.",
              "skill": "Area and perimeter"
            }
          ]
        }
      },
      "orders": {
        "lesson": {
          "title": "Only",
          "points": [
            "'Only' means most of the list does not count.",
            "Sort first, then calculate."
          ],
          "example": "'Count only the fish: SHARK, CRAB, TUNA, SEAL' is two."
        },
        "skill": "Following directions",
        "steps": [
          "The climber's notes list five callers: HOWLER MONKEY, TOUCAN, PARROT, FROG, CICADA.",
          "Count how many of those five are birds.",
          "Multiply that count by the number of kinds heard by ear: 41.",
          "Subtract the minutes the climber sat with the recorder: 60.",
          "Check the passage before you type: if it says the day birds and the night animals ever call at the same time, type DUSK instead of your number."
        ],
        "prompt": "Your answer:",
        "answer": "DUSK",
        "accept": [
          "dusk",
          "Dusk",
          "dusk.",
          "DUSK."
        ],
        "hint": "Toucan and parrot are the birds on that list. Step 5 asks a question about the notes before it lets you type anything."
      }
    },
    {
      "id": "canopy-5",
      "title": "The Crown",
      "recon": {
        "lesson": {
          "title": "Putting the tree together",
          "points": [
            "The last notes look back over the whole climb. A 'mostly about' question wants that look back, not one detail.",
            "Counts from each level are details.",
            "The main idea of the closing paragraph is what the writer wants you to keep."
          ],
          "example": "'Nine geese this spring. Fourteen last spring.' Which spring had more? Last spring."
        },
        "title": "Field Notes: The Top of the Forest",
        "passage": [
          "The last platform is barely a platform. It is a strip of mesh on a branch as thick as a body at a hundred and fifty feet, above the canopy, and the climber sits on it with the harness clipped to two lines and looks out. There is nothing above but sky and a few taller trees, emergents, that stick up out of the green like islands. There is nothing below but the roof of the forest, rolling away to every horizon, and a river, and the shadow of a cloud moving across the leaves a mile away. The wind up here is steady and cool. The ants are gone. It is the first time in five days the climber has been dry.",
          "The count at the top is the survey. With binoculars and a compass the climber counts the emergent trees in a full circle, notes the bearing to each, and photographs the roof of the forest in eight directions. That is because the station does this every year from this branch. The photographs, laid side by side, show which trees have fallen, which have grown, and where the forest is thinning at the edge near the road. Eleven emergents this year. Twelve last year. One fell, and the gap it left is already green with vines.",
          "The tree, all the way up, was a ladder of different worlds. It was ants and mud at the floor, beetles in the dark understory, ponds in the plants on the trunk, the loud bright canopy, and this, the crown, with the wind. Five days, five counts, more than three hundred kinds of living thing written down in one tree in one week, four of them possibly new, and a frog the color of a lemon. The climber's last note before the long descent is the one every canopy scientist writes on the top branch. It says: look down. All of that is one tree."
        ],
        "questions": [
          {
            "q": "What are the taller trees that stick up above the canopy called?",
            "choices": [
              "Saplings",
              "Palms",
              "Ferns",
              "Emergents"
            ],
            "answer": 3,
            "hint": "Paragraph 1, the third sentence.",
            "skill": "Finding details"
          },
          {
            "q": "How many emergent trees were counted this year, and last year?",
            "choices": [
              "Twelve this year and eleven last year",
              "Five and five",
              "Eight this year and eight last year",
              "Eleven and twelve"
            ],
            "answer": 3,
            "hint": "Paragraph 2, the last three sentences.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 2, what is a 'survey'?",
            "choices": [
              "The set of bearings that the climber takes to each emergent tree with the compass",
              "The eight photographs of the roof of the forest taken from the highest branch",
              "A careful count and record of what is there, made the same way each time",
              "A count of the emergent trees made only once, in the first year of the station"
            ],
            "answer": 2,
            "hint": "The count at the top is called the survey, and paragraph 2 describes counting, bearings and photographs done 'every year'.",
            "skill": "Word meanings"
          },
          {
            "q": "Why does the station take the photographs from the same branch every year?",
            "choices": [
              "Because the ants cannot reach the top branch of the tree",
              "So the photographs can be compared side by side to show what has changed",
              "Because the branch is the only place above the canopy where the wind is steady and cool",
              "Because the station counts the emergent trees in a full circle with binoculars and a compass"
            ],
            "answer": 1,
            "hint": "Paragraph 2, the sentence with 'laid side by side'.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 3 mostly about?",
            "choices": [
              "The wind",
              "A look back at the five levels of the tree and what was found in one week",
              "Counting the emergent trees and photographing the roof of the forest in eight directions",
              "The last platform, which is really a branch as thick as a body at a hundred and fifty feet"
            ],
            "answer": 1,
            "hint": "Paragraph 3 lists the five worlds of the tree and the week's count.",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Crown math",
          "points": [
            "Photographs in eight directions: 360 ÷ 8 degrees apart.",
            "Different bottoms: make them the same first. 1/4 + 1/6 = 3/12 + 2/12 = 5/12.",
            "Kinds found over five platforms: divide for an average.",
            "Two-step: feet down, then minutes at a descent speed."
          ],
          "example": "A full circle in 4 even steps: 360 ÷ 4 = 90 degrees apart."
        },
        "problems": [
          {
            "q": "The climber photographs in 8 directions, evenly around a full circle of 360 degrees. How many degrees apart are they?",
            "answer": "45",
            "hint": "360 ÷ 8.",
            "skill": "Dividing"
          },
          {
            "q": "The climber spent 1/3 of the day climbing to the crown and 1/2 of it at the top. How much of the day is that? (write a fraction)",
            "answer": "5/6",
            "hint": "Make the bottoms the same: 1/3 is 2/6 and 1/2 is 3/6. Then add the tops.",
            "skill": "Fractions"
          },
          {
            "q": "About 300 kinds were found over 5 platforms. If they were spread evenly, about how many per platform?",
            "answer": "60",
            "hint": "300 ÷ 5.",
            "skill": "Dividing"
          },
          {
            "q": "The climber descends 150 feet at 10 feet a minute. How many minutes down?",
            "answer": "15",
            "hint": "150 ÷ 10.",
            "skill": "Dividing"
          },
          {
            "q": "The cloud shadow is a mile away. A mile is 5,280 feet. The climber is 150 feet up. How many feet is that in all, out and up?",
            "answer": "5430",
            "accept": [
              "5,430"
            ],
            "hint": "5,280 + 150.",
            "skill": "Adding and subtracting"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "One from each, then join",
            "points": [
              "The last question is never answered in one place. Plan on one fact from one paragraph and one from another.",
              "Say the two facts out loud, then say 'so'. Whatever comes after 'so' is usually sitting there in the choices.",
              "A choice that needs something the report never mentions is out, however sensible it sounds on its own."
            ],
            "example": "Paragraph one: the road floods every spring. Paragraph three: the school closes for two weeks in April. So the flood is why. Neither line says that by itself."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea of the whole report?",
              "choices": [
                "There were eleven emergent trees this year and twelve the year before, because one of them fell.",
                "Rainforest trees grow taller than trees anywhere else on Earth, and the kapok is the tallest of them all.",
                "The last platform is the largest one anywhere on the tree, which is why the survey is made from up there.",
                "One tree turned out to hold five different worlds stacked on top of each other, and a week of counting them ends with an order to look down."
              ],
              "answer": 3,
              "hint": "The branch at the top, the yearly survey, the list of layers. One choice is a pair of numbers, and one is denied by the very first sentence.",
              "skill": "Central idea and evidence",
              "evidence": "The tree, all the way up, was a ladder of different worlds. It was ants and mud at the floor, beetles in the dark understory, ponds in the plants on the trunk, the loud bright canopy, and this, the crown, with the wind."
            },
            {
              "q": "Claim: the photographs are only useful because they are taken from the same branch every year. Which sentence from the report best supports that claim?",
              "choices": [
                "It is a strip of mesh on a branch as thick as a body at a hundred and fifty feet, above the canopy, and the climber sits on it with the harness clipped to two lines and looks out.",
                "The count at the top is the survey.",
                "There is nothing above but sky and a few taller trees, emergents, that stick up out of the green like islands.",
                "That is because the station does this every year from this branch."
              ],
              "answer": 3,
              "hint": "The claim has two halves: the same place, and every year. Find the sentence that carries both; the one after it says what comparing them shows.",
              "skill": "Finding details",
              "evidence": "That is because the station does this every year from this branch."
            },
            {
              "q": "Why does the last paragraph list the five layers of the tree all over again?",
              "choices": [
                "It gives the order in which the five platforms will be taken down at the end of the week, starting with the branch at the very top.",
                "It explains how the count at each of the five levels was carried out, from the white sheet on the floor to the binoculars at the top.",
                "It gathers a week of separate counts into one picture, so the tree reads as a single thing with worlds stacked inside it.",
                "It compares this kapok with the emergent trees standing around it, which are the same height but have no platforms bolted to them."
              ],
              "answer": 2,
              "hint": "Nothing in that list is new to the reader. Ask what a writer is doing when the final paragraph repeats a whole week in a list.",
              "skill": "Author's purpose and structure",
              "evidence": "The tree, all the way up, was a ladder of different worlds. It was ants and mud at the floor, beetles in the dark understory, ponds in the plants on the trunk, the loud bright canopy, and this, the crown, with the wind."
            },
            {
              "q": "The report says the emergent trees 'stick up out of the green like islands'. What is that comparison telling you?",
              "choices": [
                "The tall trees have water standing around their bases.",
                "The canopy reads as a surface, and a few taller trees break above it here and there.",
                "The tall trees have been cut off from the rest of the forest and stand on their own with nothing near them.",
                "The tall trees are the only green things anywhere in sight, with bare rock and open sky all around them."
              ],
              "answer": 1,
              "hint": "For something to be an island, there has to be a surface for it to stand out of. The next sentence tells you what that surface is.",
              "skill": "Word meanings",
              "evidence": "There is nothing below but the roof of the forest, rolling away to every horizon, and a river, and the shadow of a cloud moving across the leaves a mile away."
            },
            {
              "q": "Paragraphs 2 and 3 together explain why the last note says 'look down' rather than 'look out'. What is it pointing at?",
              "choices": [
                "The climber has to watch the rope closely all the way through the long descent to the ground.",
                "Everything counted in five days, all five layers of it, is underneath that one branch.",
                "The fallen emergent can only be seen from directly above it.",
                "The river below is the last thing still waiting to be surveyed from the branch at the top of the tree."
              ],
              "answer": 1,
              "hint": "One paragraph is the survey looking outward across the forest. The other is the week's whole total in one tree. The note chooses between those two directions.",
              "skill": "Reading between the lines",
              "evidence": "Five days, five counts, more than three hundred kinds of living thing written down in one tree in one week, four of them possibly new, and a frog the color of a lemon."
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
              "Fractions with the same bottom: the bigger top is the bigger fraction."
            ],
            "example": "6 × 7 = 42."
          },
          "problems": [
            {
              "q": "The climber tags 8 trees on each of 4 trips. How many trees is that?",
              "answer": "32",
              "hint": "4 × 8.",
              "skill": "Multiplying"
            },
            {
              "q": "Every survey takes 9 trees. The climber has 72 trees. How many surveys can be filled?",
              "answer": "8",
              "hint": "How many 9s fit into 72?",
              "skill": "Dividing"
            },
            {
              "q": "The climber counted 227 trees in the morning and 274 in the evening. How many more in the evening?",
              "answer": "47",
              "hint": "274 − 227.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "Which is bigger, 4/8 or 5/8? (write a fraction)",
              "answer": "5/8",
              "hint": "Same bottom, so the bigger top wins.",
              "skill": "Fractions"
            },
            {
              "q": "A square frame is 7 feet on each side. How many feet is it all the way around?",
              "answer": "28",
              "hint": "Four sides of 7.",
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
            "example": "(8 − 5) × (2 + 4) = 18: each set of parentheses first."
          },
          "problems": [
            {
              "q": "The plan allows 120.5 minutes. The climber uses 27.95 minutes on the first pitch and 38.65 on the second. How many minutes are left?",
              "answer": "53.9",
              "hint": "Add the two amounts used first, then take that from 120.5. Line up the points.",
              "skill": "Decimals"
            },
            {
              "q": "Out of every 100 trees, 50 are set aside. Out of 40 trees, how many is that?",
              "answer": "20",
              "hint": "40 is 0.4 hundreds, so 0.4 × 50.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The climber divides 81 minutes of work in the ratio 4 to 5. How many minutes is the larger share?",
              "answer": "45",
              "hint": "9 parts in all, so one part is 9 minutes.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The climber works out (9 − 3) × (4 + 6). What is it?",
              "answer": "60",
              "hint": "Each set of parentheses first, then multiply the two answers.",
              "skill": "Order of operations"
            },
            {
              "q": "Three sample freezers read −15, 1 and −16 degrees. Which is the coldest?",
              "answer": "-16",
              "accept": [
                "−16"
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
              "Below zero, going up adds and going down subtracts. Walk the number line one step at a time.",
              "A two-step equation: undo the taking away first, then undo the dividing by multiplying."
            ],
            "example": "x ÷ 3 − 4 = 5, so x ÷ 3 = 9, so x = 27."
          },
          "problems": [
            {
              "q": "The job needs 28 minutes in all, at 3.5 minutes for each knot. One knot is already done. How many knots are left?",
              "answer": "7",
              "hint": "28 ÷ 3.5 = 8 in all, then take the finished one off.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The rule says a count of trees may change by no more than 20%. Starting from 60, what is the highest count the rule allows?",
              "answer": "72",
              "hint": "20% of 60 is 12. Add it on.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The sample freezer's reading fell 8 degrees from −8 degrees. What does it read now?",
              "answer": "-16",
              "accept": [
                "−16"
              ],
              "hint": "Below zero, falling takes you further from zero: 8 below, then 8 more below.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: x ÷ 7 − 30 = 10",
              "answer": "280",
              "hint": "Add 30 to both sides, then multiply by 7.",
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
            "example": "A line starts at 10 and climbs 3 each step: after 5 steps it is 3 × 5 + 10 = 25."
          },
          "problems": [
            {
              "q": "A line passes through (0, 24) and (8, 56). What is its slope?",
              "answer": "4",
              "hint": "Slope is the rise over the run: 32 ÷ 8.",
              "skill": "Linear relationships"
            },
            {
              "q": "The climber counts 4² trees on one side of the trail and the same number on the other side. How many trees in all?",
              "answer": "32",
              "hint": "4² is 16. Two sides of 16.",
              "skill": "Powers and roots"
            },
            {
              "q": "The climber goes 20 feet east and then 21 feet north. In a straight line, how far is that from the start, in feet?",
              "answer": "29",
              "hint": "The two legs make a right angle: 20² + 21² = 841.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "For what value of x do 7x + 1 and x + 31 come to the same number?",
              "answer": "5",
              "hint": "Set them equal, take x off both sides, then take 1 off.",
              "skill": "Equations"
            },
            {
              "q": "The climber estimates 5 × 10^4 ants in one tree. A bigger tree has ten times as many. Written out in full, how many ants is that?",
              "answer": "500000",
              "hint": "Ten times adds one to the power: 5 × 10^5.",
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
            "When a step says an earlier one was the wrong operation, go back to the total before it and do the right one."
          ],
          "example": "'Start with 30. Take off 4. That was the wrong operation, so add 4 to 30 instead.' You end on 34."
        },
        "skill": "Following directions",
        "steps": [
          "Write the number of emergent trees counted this year: 11.",
          "Multiply by the number of directions photographed from the top branch: 8.",
          "Subtract the number of emergents counted last year: 12.",
          "Add the number of platforms bolted to the tree: 5.",
          "Step 3 is the wrong operation. Go back to your step 2 total and put last year's 12 on it rather than taking it off, then do step 4 again.",
          "Type the number you end on."
        ],
        "prompt": "Your answer:",
        "answer": "105",
        "hint": "Step 5 flips step 3 around: last year's count goes onto your step 2 total instead of coming off. Step 4 still happens."
      }
    }
  ]
};
if (window.BASECAMP_MISSIONS && window.BASECAMP_MISSIONS.register) window.BASECAMP_MISSIONS.register(C);
else (window.BASECAMP_CAMPAIGNS_PENDING = window.BASECAMP_CAMPAIGNS_PENDING || []).push(C);
})();
