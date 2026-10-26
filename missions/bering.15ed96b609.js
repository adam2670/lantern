// ODYSSEY — campaign "bering". GENERATED, do not edit.
// Source of truth: content/missions-full.js. Rebuild with:  python3 tools/split-missions.py
// RULE: nothing in this file is about the person using it. Content only.
(function () {
var C = {
  "id": "bering",
  "ready": true,
  "kind": "shift",
  "readingLevel": {
    "fk": 5.6,
    "cl": 5.3
  },
  "grade": "5",
  "kindLabel": "Shift",
  "form": "walrus",
  "title": "Crab Boat",
  "subtitle": "Bering Sea, off Dutch Harbor, Alaska",
  "pitch": "Five hauls on a crab boat in the roughest water in North America. Seven-hundred-pound pots, forty-foot waves, ice on the rails, a quota to fill, and a walrus who knows where the crab are.",
  "scene": "assets/scene-bering.jpg",
  "progress": {
    "unit": "hauls",
    "total": 5
  },
  "dayNoun": "Haul",
  "stageNoun": "Haul",
  "finalNoun": "Full tank",
  "stages": [
    "Haul 1",
    "Haul 2",
    "Haul 3",
    "Haul 4",
    "Full tank"
  ],
  "reconNoun": "Skipper's Log",
  "legs": {
    "recon": "Skipper's log",
    "nav": "Deck math",
    "orders": "Deck orders",
    "debrief": "Galley"
  },
  "fact": "A crab pot is a steel cage seven feet square that weighs seven hundred pounds empty. A boat carries two hundred of them, stacked on deck, in weather that would close a highway.",
  "finale": {
    "prompt": "Tank full, bow pointed at Dutch Harbor. Which color goes on the buoy for the last string?",
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
        "label": "Red",
        "color": "#FF6B6B"
      },
      {
        "label": "White",
        "color": "#F4F8FF"
      }
    ],
    "done": "Paint it. Then sleep for twelve hours. You earned every one."
  },
  "patrols": [
    {
      "id": "bering-1",
      "title": "Two Hundred Pots",
      "recon": {
        "lesson": {
          "title": "Questions first, then the log",
          "points": [
            "Read the five questions before the log. Two want a detail, one wants a word, one wants a why, one wants what a paragraph is mostly about.",
            "Sizes and weights are details. Circle the numbers as you read.",
            "The answer is always in the log. You never have to guess."
          ],
          "example": "Question: 'How high are the pots stacked?' Hunt for 'stacked' and a number."
        },
        "title": "Skipper's Log: Leaving Dutch Harbor",
        "passage": [
          "Dutch Harbor sits on an island in the Aleutian chain, eight hundred miles southwest of Anchorage. More fish and crab come across its docks than any other port in the United States. The boat leaves at four in the morning with two hundred crab pots stacked on deck and lashed down with chain. A pot is a steel cage about seven feet square and three feet tall, covered in nylon mesh, and it weighs seven hundred pounds empty. Stacked five high, the pots make a wall on the deck taller than the wheelhouse windows.",
          "The crab are on the bottom. Snow crab live on the mud of the Bering Sea floor, three or four hundred feet down, and the only way to catch them is to put a baited cage on the bottom and wait. Each pot gets a bag of chopped herring and a codfish hung inside. The crab walk in through a tunnel they cannot walk back out of. A line runs from the pot to a buoy on the surface, so the crew can find it again. The buoys are painted in the boat's own colors so that no other boat can claim them.",
          "The crew sets pots in a line called a string, twenty or thirty pots a mile apart, and then leaves them to soak for a day or two. Setting is the easy part. The pot is slid off the stack onto the launcher, a steel rack that tips it over the rail. It hits the water with a slap and is gone. A good crew can set a pot every ninety seconds. Tonight they set the first string in the dark and go below to sleep for four hours, which is all the sleep anyone on a crab boat gets."
        ],
        "questions": [
          {
            "q": "How much does an empty crab pot weigh?",
            "choices": [
              "Seven hundred pounds",
              "Seventy pounds",
              "Seven pounds",
              "Seven hundred pounds when it is full of crab"
            ],
            "answer": 0,
            "hint": "Paragraph 1, the sentence that describes a pot.",
            "skill": "Finding details"
          },
          {
            "q": "How deep do the snow crab live?",
            "choices": [
              "Three or four hundred feet",
              "About thirty feet below the surface",
              "A mile down on the mud of the sea floor",
              "Right at the surface, near the buoys"
            ],
            "answer": 0,
            "hint": "Paragraph 2, the second sentence.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 3, what is a 'string'?",
            "choices": [
              "A piece of rope",
              "A line of pots set a mile apart",
              "A kind of bait",
              "The chain on the stack"
            ],
            "answer": 1,
            "hint": "The first sentence of paragraph 3 says what a string is.",
            "skill": "Word meanings"
          },
          {
            "q": "Why are the buoys painted in the boat's own colors?",
            "choices": [
              "Because the paint keeps the salt water off the line",
              "So the Coast Guard can count them",
              "Because paint keeps them afloat",
              "So that no other boat can claim the pots"
            ],
            "answer": 3,
            "hint": "The last sentence of paragraph 2.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 2 mostly about?",
            "choices": [
              "The port of Dutch Harbor",
              "How the crew sleeps",
              "How a baited pot catches crab",
              "How tall the stack is"
            ],
            "answer": 2,
            "hint": "The first sentence of paragraph 2 is 'The crab are on the bottom', and the rest explains the trap.",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Pot math",
          "points": [
            "Volume of a box: length × width × height. 6 × 5 × 2 = 60 cubic feet.",
            "Pots in a string: total pots ÷ strings.",
            "Seconds per pot times pots: minutes of setting.",
            "Same bottom: add the tops. 1/6 + 4/6 = 5/6."
          ],
          "example": "300 pots in strings of 25: 300 ÷ 25 = 12 strings."
        },
        "problems": [
          {
            "q": "A crab pot is a box about 7 feet long, 7 feet wide and 3 feet tall. How many cubic feet of space are inside one pot?",
            "answer": "147",
            "hint": "Length × width × height: 7 × 7 = 49, then 49 × 3.",
            "skill": "Volume"
          },
          {
            "q": "200 pots are set in strings of 25. How many strings is that?",
            "answer": "8",
            "hint": "200 ÷ 25.",
            "skill": "Dividing"
          },
          {
            "q": "The crew sets a pot every 90 seconds. How many minutes does it take to set 20 pots?",
            "answer": "30",
            "hint": "20 × 90 = 1,800 seconds. Then 1,800 ÷ 60.",
            "skill": "Multi-step problems"
          },
          {
            "q": "The pots are stacked 5 high. A stack 5 high and 8 across holds how many pots?",
            "answer": "40",
            "hint": "5 × 8.",
            "skill": "Multiplying"
          },
          {
            "q": "The crew set 2/5 of the pots before midnight and 2/5 after. What fraction of the pots is set? (write a fraction)",
            "answer": "4/5",
            "hint": "Same bottom. Add the tops.",
            "skill": "Fractions"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "The idea that survives all three",
            "points": [
              "Read the whole log entry first. Then say what it is about in one sentence, before any choice gets a chance to talk you into it.",
              "Test your sentence against the first paragraph and the last. If it only fits the middle, it is a detail.",
              "The rest of today: prove a claim with one line, name what a paragraph is for, work a word out from its sentence, and join two paragraphs into one conclusion."
            ],
            "example": "Three paragraphs about a bus route: how old it is, what it costs to run, who would be stranded without it. The idea is that the route is kept going for the people, not the profit."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea of the whole log entry?",
              "choices": [
                "Catching crab means putting heavy traps on a sea floor nobody can see, and the whole first day is arranged around that one fact.",
                "A crab pot is a steel cage seven feet square that weighs seven hundred pounds empty, and two hundred of them are stacked on the deck and lashed down with chain.",
                "Fishing is the most important industry in the United States.",
                "The crab are caught in nets towed along behind the boat."
              ],
              "answer": 0,
              "hint": "The gear, the crab on the bottom, the setting of the string. Ask what all three paragraphs are shaped by.",
              "skill": "Central idea and evidence",
              "evidence": "Snow crab live on the mud of the Bering Sea floor, three or four hundred feet down, and the only way to catch them is to put a baited cage on the bottom and wait."
            },
            {
              "q": "Claim: a crab pot can hold its catch with nobody there to close it. Which sentence from the log best supports that claim?",
              "choices": [
                "The crab walk in through a tunnel they cannot walk back out of.",
                "Dutch Harbor sits on an island in the Aleutian chain, eight hundred miles southwest of Anchorage.",
                "Snow crab live on the mud of the Bering Sea floor, three or four hundred feet down, and the only way to catch them is to put a baited cage on the bottom and wait.",
                "The buoys are painted in the boat's own colors so that no other boat can claim them."
              ],
              "answer": 0,
              "hint": "Where the port is and how the buoys are painted say nothing about keeping crab in. Find the sentence that shows how the pot holds its catch by itself.",
              "skill": "Finding details",
              "evidence": "The crab walk in through a tunnel they cannot walk back out of."
            },
            {
              "q": "What job does the second paragraph do?",
              "choices": [
                "It lists the islands the boat passes on the way out.",
                "It explains why the gear in the first paragraph is heavy, baited and left on the bottom.",
                "It describes how the pots are stacked on the deck.",
                "It compares snow crab with other kinds of crab."
              ],
              "answer": 1,
              "hint": "Paragraph one shows you the equipment without saying why. Ask what paragraph two supplies that paragraph one was missing.",
              "skill": "Author's purpose and structure",
              "evidence": "Snow crab live on the mud of the Bering Sea floor, three or four hundred feet down, and the only way to catch them is to put a baited cage on the bottom and wait."
            },
            {
              "q": "The log says the crew leaves the pots 'to soak for a day or two'. What does soak mean as it is used here?",
              "choices": [
                "Be washed clean of the last catch",
                "Fill slowly with seawater until the cage sinks under the surface",
                "Be left in fresh water to loosen the mesh",
                "Sit on the bottom fishing while nobody is there"
              ],
              "answer": 3,
              "hint": "You know soak from a dish left in the sink. Keep only the part about being left alone in water to do its own work.",
              "skill": "Word meanings",
              "evidence": "The crew sets pots in a line called a string, twenty or thirty pots a mile apart, and then leaves them to soak for a day or two."
            },
            {
              "q": "Paragraphs 2 and 3 together explain why another boat could claim a pot at all. What makes that possible?",
              "choices": [
                "The pots drift a long way from where they were set.",
                "Crews often lose count of how many pots they have put out.",
                "A string sits unwatched for a day or two, marked only by a buoy.",
                "The tunnels let the catch escape into a neighboring pot."
              ],
              "answer": 2,
              "hint": "Paragraph two tells you the only thing that marks a pot. Paragraph three tells you how long it sits there with nobody near it. Together they make the risk.",
              "skill": "Reading between the lines",
              "evidence": "The crew sets pots in a line called a string, twenty or thirty pots a mile apart, and then leaves them to soak for a day or two."
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
              "q": "The crew counted 8 pots yesterday and three times as many today. How many pots today?",
              "answer": "24",
              "hint": "Three times 8: 8 + 8 + 8.",
              "skill": "Multiplying"
            },
            {
              "q": "The crew packs 40 pots into strings of 8. How many strings is that?",
              "answer": "5",
              "hint": "How many 8s make 40?",
              "skill": "Dividing"
            },
            {
              "q": "The crew starts with 185 crabs and uses 30. How many are left?",
              "answer": "155",
              "hint": "185 − 30.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "3/6 of the day's work was done yesterday. What fraction is still to do? (write a fraction)",
              "answer": "3/6",
              "hint": "The whole job is 6/6. Take 3/6 off it.",
              "skill": "Fractions"
            },
            {
              "q": "A square pot mat is 8 squares on each side. How many squares is that?",
              "answer": "64",
              "hint": "8 rows of 8.",
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
            "example": "8 × (8 − 3) + 19 = 59."
          },
          "problems": [
            {
              "q": "Each string of pots takes 1.95 hours to haul. How many hours for 33 strings of pots?",
              "answer": "64.35",
              "hint": "Split it: 33 × 1 plus 33 × 0.95.",
              "skill": "Decimals"
            },
            {
              "q": "120 of the 160 crabs are set aside. What percent is that? (write just the number)",
              "answer": "75",
              "accept": [
                "75%"
              ],
              "hint": "120 out of 160, then out of 100.",
              "skill": "Ratios and percent"
            },
            {
              "q": "For every 2 pots there are 3 crabs. There are 6 crabs. How many pots?",
              "answer": "4",
              "hint": "6 ÷ 3 = 2 groups. Each group has 2 pots.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The crew works out 19 + 8 × 8. What is it?",
              "answer": "83",
              "hint": "Multiply before you add.",
              "skill": "Order of operations"
            },
            {
              "q": "At dawn the thermometer read 3 degrees. By dark it had fallen to −15 degrees. By how many degrees did it fall?",
              "answer": "18",
              "hint": "From 3 down to 0 is 3, then 15 more.",
              "skill": "Negative numbers"
            }
          ]
        },
        "7": {
          "lesson": {
            "title": "Grade 7 numbers",
            "points": [
              "A rate times a count: if one job takes 2.75 hours, 4 jobs take 4 × 2.75 = 11 hours.",
              "Percent change: the change ÷ the starting number, then × 100.",
              "Below zero, going up adds and going down subtracts. Walk the number line one step at a time.",
              "A two-step equation: get the x part on its own first, then undo the multiplying."
            ],
            "example": "65 − 3x = 17, so 3x = 65 − 17 = 48, so x = 16."
          },
          "problems": [
            {
              "q": "One string needs 0.75 hours. How many hours do 20 strings need?",
              "answer": "15",
              "hint": "20 × 0.75.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The crew counted 320 crabs on the first pass and 352 on the second. By what percent did the count change? (write just the number)",
              "answer": "10",
              "accept": [
                "10%"
              ],
              "hint": "The change is 32. 32 out of 320, then out of 100.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The thermometer read −6 degrees at dawn and −8 degrees at dark. How many degrees did it fall?",
              "answer": "2",
              "hint": "From −6 down to −8.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: 80 − 6x = 26",
              "answer": "9",
              "hint": "Move 6x to the right and 26 to the left: 6x = 54.",
              "skill": "Equations"
            },
            {
              "q": "On the plan, 1 inch stands for 8 feet. The dock is really 64 feet long. How many inches is it on the plan?",
              "answer": "8",
              "hint": "64 ÷ 8.",
              "skill": "Ratios and percent"
            }
          ]
        },
        "8": {
          "lesson": {
            "title": "Grade 8 numbers",
            "points": [
              "A straight-line rule is y = mx + b: b is where you start, m is the change each step. If it goes down each step, take m away each time.",
              "A small 3 means three of the number multiplied: 2³ = 2 × 2 × 2 = 8.",
              "Pythagoras: in a right triangle a² + b² = c², and c is always the longest side.",
              "With x on both sides, move all the x's to one side first, then all the plain numbers to the other."
            ],
            "example": "Start with 70 and use 9 an hour: after 6 hours, 70 − 9 × 6 = 16 are left."
          },
          "problems": [
            {
              "q": "The crew starts with 22 bags of bait and uses 3 every hour. How many are left after 4 hours?",
              "answer": "10",
              "hint": "3 × 4 = 12 used, taken off 22.",
              "skill": "Linear relationships"
            },
            {
              "q": "A cube is 9 small cubes along every edge. How many small cubes make it up?",
              "answer": "729",
              "hint": "9³ means 9 × 9 × 9.",
              "skill": "Powers and roots"
            },
            {
              "q": "A 17-foot rope runs from the top of a rail post to a point 15 feet away on the deck. How tall is the post, in feet?",
              "answer": "8",
              "hint": "a² = c² − b² = 289 − 225 = 64. Then take the square root.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "Solve for x: 9x = 4x + 25",
              "answer": "5",
              "hint": "Take 4x off both sides: 5x = 25. Then divide by 5.",
              "skill": "Equations"
            },
            {
              "q": "The crew counts 30,000 crabs. Written as 3 × 10 to a power, what is the power?",
              "answer": "4",
              "hint": "Count the zeros after 3.",
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
          "example": "If step 5 says 'the answer is the number of buoys', the pounds were a distraction."
        },
        "skill": "Following directions",
        "steps": [
          "Write the number of crab pots stacked on deck: 200.",
          "Tonight's string holds 25 pots. Divide the 200 by 25.",
          "Multiply by the height of a pot in feet: 3.",
          "Step 3 used the wrong measurement. Return to your answer from step 2 and multiply it by the width of a pot in feet, 7, instead.",
          "Add the hours of sleep the crew gets below: 4. Type the result."
        ],
        "prompt": "Your answer:",
        "answer": "60",
        "hint": "Divide the pots by the string first. Step 4 changes which measurement step 3 used, so read it before you multiply."
      }
    },
    {
      "id": "bering-2",
      "title": "The Sorting Table",
      "recon": {
        "lesson": {
          "title": "Rules and reasons",
          "points": [
            "A log that lists rules gives each one a reason. Match them.",
            "'Which crab are thrown back' is a detail question with more than one part. Find all the parts.",
            "A word about the work is defined by what the crew does with it."
          ],
          "example": "'Gloves go in the bin. Boots go by the door.' Asked where the gear goes? Two parts, and you need both."
        },
        "title": "Skipper's Log: Keepers",
        "passage": [
          "The first pot comes up at dawn, hauled by a hydraulic winch that pulls the line through a block on a steel arm over the rail. The pot breaks the surface streaming water and is swung onto the launcher. When the door is opened the crab pour out onto the sorting table in a clattering pile, three hundred of them, legs going in every direction. Snow crab are the color of a penny, with long thin legs, and a big one weighs about two pounds.",
          "Not every crab is kept. The rules are simple and the fine for breaking them is the boat's license. Female crab go back into the sea, every one, because they carry the eggs. Any male smaller than the legal size goes back too, measured by laying a brass gauge across the shell. The crew learns to see the difference without the gauge after the first thousand. Only the big males are keepers. They are counted and thrown down a chute into the tank. The rest are swept back over the rail, alive, in under a minute, so that the pot can be baited and set again.",
          "The tank is the hold of the boat, flooded with seawater that is pumped through it constantly to keep the crab alive until port. A dead crab is worth nothing. The crew checks the temperature of the tank every hour, because crab die if the water warms. They fill it a few hundred at a time until it holds four hundred thousand pounds. Today's first string averaged sixty keepers a pot. The skipper writes it in the log with an underline. That is a good string."
        ],
        "questions": [
          {
            "q": "Which crab are thrown back?",
            "choices": [
              "Every crab that comes out of the pot, once it has been counted",
              "Females and any male smaller than the legal size",
              "Any crab with a leg missing",
              "The females only, and every male is kept"
            ],
            "answer": 1,
            "hint": "Paragraph 2, the third and fourth sentences.",
            "skill": "Finding details"
          },
          {
            "q": "How do the crew measure a crab?",
            "choices": [
              "With a scale",
              "By holding it up against a mark painted on the rail",
              "By the color of the shell",
              "By laying a brass gauge across the shell"
            ],
            "answer": 3,
            "hint": "Paragraph 2, the sentence with 'brass gauge'.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 2, what is a 'keeper'?",
            "choices": [
              "A crew member whose job is to guard the tank at night",
              "The brass gauge that the crew lay across the shell",
              "The chute that the counted crab are thrown down into the tank",
              "A big male crab that can be kept"
            ],
            "answer": 3,
            "hint": "The sentence 'Only the big males are keepers.'",
            "skill": "Word meanings"
          },
          {
            "q": "Why does the crew check the tank temperature every hour?",
            "choices": [
              "Because crab die if the water warms, and a dead crab is worth nothing",
              "Because the tank is filled a few hundred at a time",
              "Because the tank holds four hundred thousand pounds",
              "Because the rules require a log"
            ],
            "answer": 0,
            "hint": "Paragraph 3, the second and third sentences.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 2 mostly about?",
            "choices": [
              "How the hydraulic winch hauls the pot up and swings it aboard",
              "What a snow crab looks like: penny-colored, with long thin legs",
              "The rules for which crab to keep and which to throw back",
              "How quickly the crew get the crab sorted and back over the rail"
            ],
            "answer": 2,
            "hint": "The first sentence of paragraph 2 is 'Not every crab is kept', and the rest gives the rules.",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Keeper math",
          "points": [
            "Keepers a pot times pots: multiply.",
            "Adding decimals: line up the points. 1.75 + 2.4 is 1.75 + 2.40 = 4.15.",
            "Fraction thrown back: divide by the bottom, multiply by the top.",
            "Room left in the tank: what it holds minus what is in it."
          ],
          "example": "40 keepers × 15 pots = 600 crab in one string."
        },
        "problems": [
          {
            "q": "A string of 25 pots averaged 60 keepers a pot. How many keepers is that?",
            "answer": "1500",
            "accept": [
              "1,500"
            ],
            "hint": "60 × 25.",
            "skill": "Multiplying"
          },
          {
            "q": "One keeper crab weighs 2.35 pounds and a smaller one weighs 1.9 pounds. How many pounds do the two weigh together? (write a decimal)",
            "answer": "4.25",
            "hint": "Line up the points: 2.35 + 1.90.",
            "skill": "Decimals"
          },
          {
            "q": "A pot held 300 crabs and 3/4 of them were thrown back. How many were thrown back?",
            "answer": "225",
            "hint": "300 ÷ 4 = 75, then 75 × 3.",
            "skill": "Fractions"
          },
          {
            "q": "The tank holds 400,000 pounds. After two strings it holds 6,000 pounds. How many more pounds will fill it?",
            "answer": "394000",
            "accept": [
              "394,000"
            ],
            "hint": "400,000 − 6,000.",
            "skill": "Adding and subtracting"
          },
          {
            "q": "The crew sorts a pot in under 1 minute. Working 18 hours straight at 40 pots an hour, how many pots do they sort?",
            "answer": "720",
            "hint": "18 × 40.",
            "skill": "Multiplying"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "Find the line that decides it",
            "points": [
              "Read the claim twice before you read the choices. You cannot find proof for something you have half understood.",
              "Every choice is a real sentence from the log, so being true is worth nothing. Ask which one makes the claim impossible to argue with.",
              "If two choices look close, the better one is the one that needs no extra sentence to finish the job."
            ],
            "example": "Claim: the crew was expecting the storm. 'The hatches were already bolted' proves it. 'The sea was rough by evening' is true and proves nothing about expecting."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea that develops across the whole log entry?",
              "choices": [
                "A brass gauge is laid across the shell to measure a male crab, and the crew learns to see the size without it.",
                "Most of the work at the rail is sorting the catch and keeping it alive, not catching it.",
                "Fishing rules are stricter than most people realize.",
                "Every crab that comes up in a pot goes into the tank."
              ],
              "answer": 1,
              "hint": "The pile on the table, the rules about what goes back, the pumps in the tank. Ask what all three paragraphs are actually describing.",
              "skill": "Central idea and evidence",
              "evidence": "The tank is the hold of the boat, flooded with seawater that is pumped through it constantly to keep the crab alive until port."
            },
            {
              "q": "Claim: a mistake at the sorting table could cost the boat everything. Which sentence from the log best supports that claim?",
              "choices": [
                "When the door is opened the crab pour out onto the sorting table in a clattering pile, three hundred of them, legs going in every direction.",
                "Not every crab is kept.",
                "A dead crab is worth nothing.",
                "The rules are simple and the fine for breaking them is the boat's license."
              ],
              "answer": 3,
              "hint": "The claim is about what a mistake costs. Losing one dead crab is not losing everything. Only one sentence says what breaking the rules does.",
              "skill": "Finding details",
              "evidence": "The rules are simple and the fine for breaking them is the boat's license."
            },
            {
              "q": "Why did the author include the third paragraph, about the tank?",
              "choices": [
                "To explain how the hydraulic winch, the block and the steel arm work together to lift a loaded pot over the rail.",
                "To describe what a snow crab looks like: the color of a penny, long thin legs, and about two pounds for a big one.",
                "To list the rules about which crab go back over the rail: every female, because of the eggs, and every undersized male.",
                "To show that the catch is not finished when it leaves the sorting table; it still has to arrive alive."
              ],
              "answer": 3,
              "hint": "Ask what would be missing if the log stopped at the end of paragraph two. You would think the job was done. What is the third paragraph adding?",
              "skill": "Author's purpose and structure",
              "evidence": "A dead crab is worth nothing."
            },
            {
              "q": "The log calls the big males 'keepers'. What does that word mean as it is used here?",
              "choices": [
                "The crab that are allowed to be kept and sold",
                "The crew members who look after the tank",
                "The pots left down on the bottom longest",
                "The brass gauges for measuring shells"
              ],
              "answer": 0,
              "hint": "Read the sentence before it and the sentence after it. Both are about which crab stay on the boat and which go over the side.",
              "skill": "Word meanings",
              "evidence": "Only the big males are keepers."
            },
            {
              "q": "Paragraphs 2 and 3 together show that staying alive matters for two different sets of crab. Which two sets?",
              "choices": [
                "The females sorted on the deck and the females down in the tank, both of which have to stay alive because they carry the eggs.",
                "The undersized males counted down into the tank and the big males swept back over the rail, because only small crab survive a trip to port.",
                "The ones thrown back, which have to survive to breed, and the ones in the tank, which are worth nothing dead.",
                "The crab still waiting in the pots on the sea floor and the bait inside those pots, both of which have to stay alive until the pot is hauled."
              ],
              "answer": 2,
              "hint": "One paragraph says why some crab go back and what they are for. The other says what a dead crab is worth. Both are about staying alive, for different reasons.",
              "skill": "Reading between the lines",
              "evidence": "Female crab go back into the sea, every one, because they carry the eggs."
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
              "Some added, some taken away: do the adding first, then the taking away.",
              "Fractions with the same bottom: add the tops."
            ],
            "example": "2 × 7 = 14, so 14 shared into 2 equal groups is 7 each."
          },
          "problems": [
            {
              "q": "The crew lays the crabs out in 2 rows of 6. How many crabs is that?",
              "answer": "12",
              "hint": "2 × 6.",
              "skill": "Multiplying"
            },
            {
              "q": "42 crabs are set out in 7 equal rows. How many crabs are in each row?",
              "answer": "6",
              "hint": "42 split into 7 equal parts.",
              "skill": "Dividing"
            },
            {
              "q": "The log shows 217 pounds, then 120 more are added and 89 are taken off. What does the log show now?",
              "answer": "248",
              "hint": "Add 217 and 120 first, then take 89 off.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "Add: 4/6 + 1/6 (write a fraction)",
              "answer": "5/6",
              "hint": "Same bottom. 4 + 1 on top.",
              "skill": "Fractions"
            },
            {
              "q": "The plan calls for 700 pounds of crab to be sorted. 143 pounds are done and 89 more are being sorted. How many pounds are not started yet?",
              "answer": "468",
              "hint": "Take 143 off 700, then take 89 off that.",
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
            "example": "3 × (12 − 5) + 8: parentheses first, 12 − 5 = 7; then 3 × 7 = 21; then add 8 to get 29."
          },
          "problems": [
            {
              "q": "The crew has 12 pounds of bait. Each pot gets 3/4 of a pound. How many pots can the crew bait?",
              "answer": "16",
              "hint": "Dividing by 3/4 means multiplying by its flip, 4/3: 12 × 4/3.",
              "skill": "Fractions"
            },
            {
              "q": "25% of the pounds counted is 50. How many were counted in all?",
              "answer": "200",
              "hint": "50 is 25 hundredths of the whole: 50 ÷ 25 × 100.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The crew weighs 9 crabs, and together they weigh 12 pounds. In its simplest form, what is the ratio of crabs to pounds? (write it like 2:3)",
              "answer": "3:4",
              "accept": [
                "3 to 4"
              ],
              "hint": "Divide both by 3.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The crew works out (9 + 5) × 10. What is it?",
              "answer": "140",
              "hint": "Parentheses first, then multiply.",
              "skill": "Order of operations"
            },
            {
              "q": "It was −8 degrees at midnight and rose 4 degrees by dawn. What does the thermometer read at dawn?",
              "answer": "-4",
              "accept": [
                "−4"
              ],
              "hint": "Start at −8 and count 4 steps up.",
              "skill": "Negative numbers"
            }
          ]
        },
        "7": {
          "lesson": {
            "title": "Grade 7 numbers",
            "points": [
              "How many fit: the time you have ÷ the time each one takes. 9 hours at 1.5 hours each is 9 ÷ 1.5 = 6.",
              "Working backward: if a count rose by a quarter, the new count is 125% of the old one, so divide by 1.25 to get back to the start.",
              "Multiplying or dividing with one minus sign gives a minus answer: 3 × (−5) = −15, and −15 ÷ 3 = −5.",
              "With parentheses, undo the outside first: divide both sides, then take off the number inside."
            ],
            "example": "6(x + 13) = 96, so x + 13 = 16, so x = 3."
          },
          "problems": [
            {
              "q": "The crew has 70 hours to spend and each string takes 3.5 hours. How many strings is that enough for?",
              "answer": "20",
              "hint": "70 ÷ 3.5.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The catch rose by 20% to 384 pounds. What was it before, in pounds?",
              "answer": "320",
              "hint": "384 is 120% of the old catch.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The thermometer falls 2 degrees every hour for 14 hours. What is the total change? (Write a fall as a negative number.)",
              "answer": "-28",
              "accept": [
                "−28"
              ],
              "hint": "14 hours of −2 each: 14 × (−2). One minus sign, so the answer is negative.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: (x + 9) × 3 = 57",
              "answer": "10",
              "hint": "Divide both sides by 3 first, then take 9 off.",
              "skill": "Equations"
            },
            {
              "q": "A round hatch cover has a radius of 20 inches. Using 3.14 for pi, what is its area in square inches?",
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
              "A straight-line rule is y = mx + b: b is where you start, m is what you add each step.",
              "A cube root undoes cubing: 5 × 5 × 5 = 125, so the cube root of 125 is 5.",
              "Pythagoras: in a right triangle a² + b² = c², and c is always the longest side.",
              "Collect the x's first: 10x − 7x is 3x. Then undo the plain number."
            ],
            "example": "y = 12x + 19 when x = 3: 12 × 3 + 19 = 55."
          },
          "problems": [
            {
              "q": "The pounds of crab in the tank follow the rule y = 7x + 5, where x is the hour. What is y when x = 8?",
              "answer": "61",
              "hint": "Put 8 in for x: 7 × 8 + 5.",
              "skill": "Linear relationships"
            },
            {
              "q": "A cube-shaped tank has a volume of 2,744 cubic feet. How long is one edge, in feet?",
              "answer": "14",
              "hint": "What number times itself, times itself again, makes 2,744?",
              "skill": "Powers and roots"
            },
            {
              "q": "A 25-foot rope reaches the top of a 7-foot post. How far is the foot of the rope from the base, in feet?",
              "answer": "24",
              "hint": "b² = c² − a² = 625 − 49 = 576. Then take the square root.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "Solve for x: 8x + 27 − 2x = 81",
              "answer": "9",
              "hint": "Collect the x's first: 6x + 27 = 81.",
              "skill": "Equations"
            },
            {
              "q": "A round tank has a radius of 5 feet and is 6 feet deep. Using 3.14 for pi, what is its volume in cubic feet?",
              "answer": "471",
              "hint": "Volume = 3.14 × radius × radius × depth: 3.14 × 5 × 5 × 6.",
              "skill": "Area and perimeter"
            }
          ]
        }
      },
      "orders": {
        "lesson": {
          "title": "Only the ones that count",
          "points": [
            "'Only' means most of what you are given does not count.",
            "Sort first, then calculate."
          ],
          "example": "'Count only the males over the line' is the sorting table in one sentence."
        },
        "skill": "Following directions",
        "steps": [
          "A pot comes up onto the sorting table with 12 big males, 9 small males and 11 females.",
          "Only the big males are keepers. Multiply the 12 big males by the 2 pounds a big one weighs, and write that weight down.",
          "Now the other side of the table. Add the 9 small males to the 11 females, the crab that go back over the rail, and multiply that total by the same 2 pounds.",
          "You now have a weight from step 2 and a weight from step 3.",
          "The skipper logs only what goes down the chute into the tank, so type the number from step 2, not the one from step 3."
        ],
        "prompt": "Your answer:",
        "answer": "24",
        "hint": "Both step 2 and step 3 give a real weight. Step 5 names which one the skipper logs — read it before you type."
      }
    },
    {
      "id": "bering-3",
      "title": "Forty-Foot Seas",
      "recon": {
        "lesson": {
          "title": "Danger and the rule",
          "points": [
            "When a log names a danger, the rule for it follows. Find both.",
            "'Why' about safety: the reason is what would happen without the rule.",
            "Numbers for waves and wind are details. Read them exactly."
          ],
          "example": "'Spray freezes on the deck and makes it slick. So the crew wears boots with studs.' Danger, then rule."
        },
        "title": "Skipper's Log: The Bering Sea Has Opinions",
        "passage": [
          "The Bering Sea is shallow and cold. It sits where the warm air from the Pacific meets the frozen air from the Arctic. The result is the worst weather any working boat in North America goes out in. A storm can build forty-foot waves, as tall as a four-story building, and drive them at the boat every ten seconds for a day. The boat climbs each one and hangs at the top with the propeller out of the water. Then it drops into the trough with a bang that shakes the whole hull. The crew works through it, because the crab do not care about the weather and the quota has a deadline.",
          "The real danger is ice. Spray comes over the bow, freezes where it lands, and builds up on the rails, the stack, and the pots until the boat is carrying tons of ice above its deck. A boat that gets too top-heavy rolls over. So when the ice builds, the crew stops fishing and beats it off with baseball bats and sledgehammers, in the dark, tied to the boat with a line. Then they shovel it over the side. The skipper's log has a rule written on the inside cover: an inch of ice on the rail is a call to the bats, no matter the hour.",
          "Every crew member has a survival suit, a thick red rubber suit that seals at the wrists and neck. The suit will keep a person alive in the water for hours instead of minutes. The suits hang by the door of the wheelhouse. The Coast Guard checks that every crew can get into them in under a minute. Nobody on a crab boat thinks the drill is funny. Tonight the wind is fifty knots, the rail has half an inch of ice, and the log says: fishing, watching the rail."
        ],
        "questions": [
          {
            "q": "How tall can the waves get in a Bering Sea storm?",
            "choices": [
              "Four feet",
              "Forty feet, as tall as a four-story building",
              "Four hundred feet, taller than any building on shore",
              "Ten feet"
            ],
            "answer": 1,
            "hint": "Paragraph 1, the fourth sentence.",
            "skill": "Finding details"
          },
          {
            "q": "What is the rule written inside the cover of the log?",
            "choices": [
              "Never fish in the dark, whatever the weather",
              "An inch of ice on the rail is a call to the bats, no matter the hour",
              "Everyone sleeps four hours a night, no more",
              "Throw back every female crab, no matter what"
            ],
            "answer": 1,
            "hint": "The last sentence of paragraph 2.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 1, what is the 'trough'?",
            "choices": [
              "The low point between two waves",
              "A feeding box for animals",
              "The bottom of the boat",
              "The top of the wave"
            ],
            "answer": 0,
            "hint": "The sentence says the boat 'drops into the trough' after hanging at the top of the wave.",
            "skill": "Word meanings"
          },
          {
            "q": "Why does the crew stop fishing to beat ice off the rails?",
            "choices": [
              "Because the ice makes the deck too slippery for the crew to work the stack safely in the dark",
              "Because the weight of the ice slows the boat down, and the quota has a deadline to meet",
              "Because a boat carrying too much ice above deck becomes top-heavy and can roll over",
              "Because the ice freezes the pots to the stack"
            ],
            "answer": 2,
            "hint": "Paragraph 2, the sentences about 'top-heavy'.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 3 mostly about?",
            "choices": [
              "The wind speed and the ice on the rail tonight",
              "How spray freezes and builds up on the rails",
              "The survival suits and the drill for getting into them",
              "The forty-foot waves and how the boat climbs them and drops"
            ],
            "answer": 2,
            "hint": "Paragraph 3 begins with the survival suit and describes it and the drill.",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Storm math",
          "points": [
            "Something every few seconds for an hour: seconds in an hour ÷ seconds between.",
            "Leftovers: 40 ÷ 6 is 6 with 4 left over, because 6 × 6 = 36.",
            "Ice in inches over hours: rate times hours.",
            "Two-step: seconds in an hour, then waves."
          ],
          "example": "Once every 20 seconds: 3,600 ÷ 20 = 180 times an hour."
        },
        "problems": [
          {
            "q": "A wave hits the boat every 10 seconds. How many waves hit in 1 hour, which is 3,600 seconds?",
            "answer": "360",
            "hint": "3,600 ÷ 10.",
            "skill": "Dividing"
          },
          {
            "q": "During the storm the cook shares 50 sandwiches equally among the 6 crew, as many as possible each. How many sandwiches are left over?",
            "answer": "2",
            "hint": "6 × 8 = 48. How many are left after 48?",
            "skill": "Dividing"
          },
          {
            "q": "A forty-foot wave is as tall as a 4-story building. How tall is each story, in feet?",
            "answer": "10",
            "hint": "40 ÷ 4.",
            "skill": "Dividing"
          },
          {
            "q": "Ice builds on the rail at 1/4 inch an hour. How many inches after 4 hours? (write a whole number)",
            "answer": "1",
            "hint": "1/4 + 1/4 + 1/4 + 1/4 = 4/4, which is 1 whole inch.",
            "skill": "Fractions"
          },
          {
            "q": "The crew has 6 survival suits. The Coast Guard drill allows 60 seconds per person. If all 6 suit up at once and the slowest takes 45 seconds, how many seconds under the limit is the slowest?",
            "answer": "15",
            "hint": "60 − 45.",
            "skill": "Multi-step problems"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "What a sentence is doing, not saying",
            "points": [
              "A short sentence dropped between two long ones is usually doing a job: turning the report, or setting up what comes next.",
              "Words like 'real', 'but' and 'the trouble was' tell you a turn is happening. Ask what is being turned away from.",
              "A choice that repeats the sentence's content has not named a job. Naming the job means saying what it does to the reader."
            ],
            "example": "'That was the easy part.' Nothing in those five words is a fact. Its whole job is to warn you that the difficult part is the next paragraph."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea of the whole log entry?",
              "choices": [
                "A survival suit keeps a person alive in the water for hours instead of minutes, and the Coast Guard checks that a crew can get into one in under a minute.",
                "The weather here is dangerous in a way that has to be managed rather than avoided, and every rule on the boat comes from that.",
                "The sea is more dangerous than the land.",
                "The crew stops fishing whenever the waves get big."
              ],
              "answer": 1,
              "hint": "Working through the seas, stopping for the ice, and a suit by the door. Ask what those three have in common as decisions.",
              "skill": "Central idea and evidence",
              "evidence": "The crew works through it, because the crab do not care about the weather and the quota has a deadline."
            },
            {
              "q": "Claim: ice is treated as more urgent than rough seas are. Which sentence from the log best supports that claim?",
              "choices": [
                "A boat that gets too top-heavy rolls over.",
                "The skipper's log has a rule written on the inside cover: an inch of ice on the rail is a call to the bats, no matter the hour.",
                "Tonight the wind is fifty knots, the rail has half an inch of ice, and the log says: fishing, watching the rail.",
                "Nobody on a crab boat thinks the drill is funny."
              ],
              "answer": 1,
              "hint": "Urgent means it interrupts everything else. Find the sentence with a trigger that sets off work at any time of day or night.",
              "skill": "Finding details",
              "evidence": "The skipper's log has a rule written on the inside cover: an inch of ice on the rail is a call to the bats, no matter the hour."
            },
            {
              "q": "What job does the sentence 'The real danger is ice' do in this log entry?",
              "choices": [
                "It turns from the waves to the thing the crew actually stops work for.",
                "It explains what causes the waves in the Bering Sea.",
                "It introduces a list of the crew's safety equipment.",
                "It repeats the point already made in the first paragraph."
              ],
              "answer": 0,
              "hint": "The word 'real' is doing all the work. Real as opposed to what? Look back at the paragraph before it.",
              "skill": "Author's purpose and structure",
              "evidence": "So when the ice builds, the crew stops fishing and beats it off with baseball bats and sledgehammers, in the dark, tied to the boat with a line."
            },
            {
              "q": "The log says a boat that gets 'too top-heavy' rolls over. What does top-heavy mean as it is used here?",
              "choices": [
                "Loaded with too much crab down in the tank in the hold below the deck",
                "Sitting too low in the water at the bow",
                "Carrying too much weight up high, so that it tips easily",
                "Crewed by too many people, so that there is not enough room left on the deck to work"
              ],
              "answer": 2,
              "hint": "The sentence just before tells you exactly where the ice is piling up. Then think what weight in that place would do to a boat.",
              "skill": "Word meanings",
              "evidence": "Spray comes over the bow, freezes where it lands, and builds up on the rails, the stack, and the pots until the boat is carrying tons of ice above its deck."
            },
            {
              "q": "Paragraphs 2 and 3 together explain why tonight's log says 'fishing, watching the rail' instead of calling for the bats. Why does it?",
              "choices": [
                "The wind at fifty knots is too strong for anyone to work out on deck, so the ice has to be left where it is until morning.",
                "The Coast Guard is aboard checking the survival suits.",
                "The rule fires at an inch of ice and the rail is only halfway there, so the crew keeps working and keeps measuring.",
                "The crew has already cleared the ice once this evening."
              ],
              "answer": 2,
              "hint": "One paragraph gives you the number that sets the rule off. The last sentence gives you tonight's number. Compare the two.",
              "skill": "Reading between the lines",
              "evidence": "an inch of ice on the rail is a call to the bats, no matter the hour"
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
              "A fraction is parts done over parts in all: 2 parts done out of 3 is 2/3."
            ],
            "example": "4 × 3 = 12, so 12 shared into 4 equal groups is 3 each."
          },
          "problems": [
            {
              "q": "Every watch lasts 5 hours, and there are 5 watches. How many hours is that?",
              "answer": "25",
              "hint": "5 groups of 5, so 5 × 5.",
              "skill": "Multiplying"
            },
            {
              "q": "The crew splits 50 hours in half. How many hours is one half?",
              "answer": "25",
              "hint": "Half of 50.",
              "skill": "Dividing"
            },
            {
              "q": "The crew needs 600 pounds of bait and has 167. How many more pounds are needed?",
              "answer": "433",
              "hint": "600 − 167.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "The day's work is cut into 8 equal parts and the crew has finished 7 of them. What fraction is done? (write a fraction)",
              "answer": "7/8",
              "hint": "7 parts out of 8.",
              "skill": "Fractions"
            },
            {
              "q": "A floor is 6 squares wide and 8 squares long. The crew has covered 6 squares. How many squares are left to cover?",
              "answer": "42",
              "hint": "6 × 8 squares in all, then take 6 off.",
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
              "q": "The crew has 7.2 hours to haul. Each string of pots takes 1.2 hours. How many strings of pots is that enough for?",
              "answer": "6",
              "hint": "Move both points 1 place to the right: 72 ÷ 12.",
              "skill": "Decimals"
            },
            {
              "q": "A storm lasted 60 hours. The crew could not haul pots for 50% of it. For how many hours could they haul?",
              "answer": "30",
              "hint": "50% of 60 is 30. Take that off 60.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The crew shares 14 survival suits between two teams in the ratio 3 to 4. How many does the smaller share get?",
              "answer": "6",
              "hint": "3 + 4 = 7 parts. 14 ÷ 7 = 2 for one part.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The crew works out 9 × 11 − 1 × 2. What is it?",
              "answer": "97",
              "hint": "Do both multiplications first, then subtract.",
              "skill": "Order of operations"
            },
            {
              "q": "The coldest reading was −9 degrees and the warmest was −5 degrees. How many degrees apart are they?",
              "answer": "4",
              "hint": "From −9 up to −5.",
              "skill": "Negative numbers"
            }
          ]
        },
        "7": {
          "lesson": {
            "title": "Grade 7 numbers",
            "points": [
              "Find the rate for one first: 8 jobs in 14 hours is 14 ÷ 8 = 1.75 hours each, so 12 jobs take 21 hours.",
              "Percent of a number: turn the percent into a fraction of 100, then multiply.",
              "Below zero, going up adds and going down subtracts. Walk the number line one step at a time.",
              "With parentheses, undo the outside first: divide both sides, then take off the number inside."
            ],
            "example": "3(x + 7) = 33, so x + 7 = 11, so x = 4."
          },
          "problems": [
            {
              "q": "20 strings took 30 hours. At the same rate, how many hours would 28 strings take?",
              "answer": "42",
              "hint": "One string takes 30 ÷ 20 = 1.5. Then × 28.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The crew planned 80 hours of fishing, and 20% of them were lost to the storm. How many hours were lost?",
              "answer": "16",
              "hint": "20% of 80: 20/100 × 80.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The low was −5 degrees and the high was 17 degrees. How many degrees apart are they?",
              "answer": "22",
              "hint": "5 below zero plus 17 above zero.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: 8(x + 22) = 224",
              "answer": "6",
              "hint": "Divide both sides by 8 to get x + 22 = 28.",
              "skill": "Equations"
            },
            {
              "q": "On the plan, 4 inches stands for 20 feet. How many feet does 1 inch stand for?",
              "answer": "5",
              "hint": "20 ÷ 4.",
              "skill": "Ratios and percent"
            }
          ]
        },
        "8": {
          "lesson": {
            "title": "Grade 8 numbers",
            "points": [
              "A list that adds the same amount each step follows a straight-line rule. The 1st number is the start, so the 10th number is 9 steps on.",
              "Parentheses first, then the power: (2 × 4)² is 8² = 64.",
              "Pythagoras: in a right triangle a² + b² = c², and c is always the longest side.",
              "Collect the x's first: 11x − 9x is 2x, and an x on its own means 1x."
            ],
            "example": "5, 11, 17, … adds 6 each step. The 6th number is 5 steps on: 5 + 5 × 6 = 35."
          },
          "problems": [
            {
              "q": "The wave height, in feet, goes 24, 27, 30, 33, and on. What is the 8th number in the list?",
              "answer": "45",
              "hint": "It starts at 24 and adds 3 each step. The number you want is 7 steps on from 24.",
              "skill": "Linear relationships"
            },
            {
              "q": "What is (6 × 5)²?",
              "answer": "900",
              "hint": "6 × 5 = 30 first, then square it.",
              "skill": "Powers and roots"
            },
            {
              "q": "A right triangle has short sides of 8 and 15 feet. How long is its longest side, in feet?",
              "answer": "17",
              "hint": "8² + 15² = 289. The longest side is the square root of that.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "Solve for x: 7x − 4x = 30",
              "answer": "10",
              "hint": "7 − 4 = 3, so 3x = 30.",
              "skill": "Equations"
            },
            {
              "q": "Which is bigger, 8 × 10^2 or 7 × 10^3? Write the bigger one out in full.",
              "answer": "7000",
              "hint": "7 × 10^3 is ten times 7 × 10^2, and 8 is not ten times 7.",
              "skill": "Powers and roots"
            }
          ]
        }
      },
      "orders": {
        "lesson": {
          "title": "Unless",
          "points": [
            "'Unless' flips the rule when its condition is true.",
            "Check the condition before you act."
          ],
          "example": "'Keep fishing, unless the rail has an inch of ice.'"
        },
        "skill": "Following directions",
        "steps": [
          "Write the height of the waves in feet: 40.",
          "Divide by the seconds between waves: 10.",
          "Multiply by the number of survival suits: 6.",
          "Add the wind speed in knots: 50.",
          "Type the result, unless the log says the rail has an inch of ice or more, in which case type BATS. (Check the last sentence of the log.)"
        ],
        "prompt": "Your answer:",
        "answer": "74",
        "hint": "Work steps 2, 3 and 4 in order first. Then step 5 sends you to the last sentence of the log to check the ice."
      }
    },
    {
      "id": "bering-4",
      "title": "The Quota",
      "recon": {
        "lesson": {
          "title": "How the money works",
          "points": [
            "A log about pay explains a system. Read it in order: total, then shares, then who gets what.",
            "'Why' about a rule: the reason is usually a problem the rule solves.",
            "Percent and fraction words in a log are exact."
          ],
          "example": "'The cook gets a third. The rest is split evenly.' A third is the exact detail."
        },
        "title": "Skipper's Log: Shares",
        "passage": [
          "Nobody on a crab boat is paid by the hour. The boat has a quota, a number of pounds it is allowed to catch this season. The state sets it so that enough crab are left in the sea to make next year's crab. This boat's quota is four hundred thousand pounds. When the tank is full the boat runs to port, the crab are weighed as they come off, and the buyer pays by the pound. The whole crew is paid from that one check, and not before.",
          "The check is split in shares. Half goes to the boat, to pay for fuel, bait, pots, insurance and repairs, because a season of fuel alone costs more than a house. The other half is split among the crew. The skipper takes a full share and a half, and the engineer and the deck boss take a full share each. A new deckhand, a greenhorn, takes a half share for the first season, because a greenhorn is slow and the others carry him. A greenhorn who is still on the boat the next year gets a full share, and most are not.",
          "It is a system that pays for speed and punishes mistakes. A crew that fills the tank in eight days instead of twelve gets the same check and four more days to make a second trip. A crew that loses a string of pots to the ice has just thrown a hundred thousand dollars over the side, and everyone's share shrinks. That is why nobody sleeps more than four hours and nobody argues about the bats. The log for today reads: three hundred and twenty thousand pounds in the tank. Eighty thousand to go."
        ],
        "questions": [
          {
            "q": "What is this boat's quota for the season?",
            "choices": [
              "Forty thousand pounds for the season",
              "Four million pounds",
              "Eighty thousand pounds still to catch",
              "Four hundred thousand pounds"
            ],
            "answer": 3,
            "hint": "Paragraph 1, the fourth sentence.",
            "skill": "Finding details"
          },
          {
            "q": "How much of the check goes to the boat?",
            "choices": [
              "All of it",
              "Half",
              "A quarter",
              "None of it"
            ],
            "answer": 1,
            "hint": "Paragraph 2, the second sentence.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 2, what is a 'greenhorn'?",
            "choices": [
              "A new deckhand in the first season",
              "A kind of crab",
              "The crew member who takes a share and a half",
              "A deckhand paid a full share"
            ],
            "answer": 0,
            "hint": "The sentence 'a new deckhand, a greenhorn'.",
            "skill": "Word meanings"
          },
          {
            "q": "Why does a greenhorn get only a half share?",
            "choices": [
              "Because a greenhorn has not helped pay for the fuel, the bait or the pots",
              "Because a greenhorn is slow and the rest of the crew carry him",
              "Because the skipper takes a full share and a half out of the crew's half",
              "Because the state sets the quota and decides how the shares are split"
            ],
            "answer": 1,
            "hint": "Paragraph 2, the sentence that ends 'the others carry him'.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 3 mostly about?",
            "choices": [
              "How the share system rewards speed and punishes mistakes",
              "How a fast crew can fill the tank in eight days instead of twelve",
              "What the boat's half of the check has to pay for, including fuel",
              "The string of pots that a crew can lose to the ice in a storm"
            ],
            "answer": 0,
            "hint": "The first sentence of paragraph 3 says what the system pays for and punishes.",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Share math",
          "points": [
            "Quota minus what is in the tank: pounds to go.",
            "Half of the check: divide by 2.",
            "Price times pounds: $3 a pound for 1,000 pounds is $3,000.",
            "Two-step: pounds to go, then pots at 120 pounds each."
          ],
          "example": "500,000 − 350,000 = 150,000 pounds to go."
        },
        "problems": [
          {
            "q": "The quota is 400,000 pounds and the tank holds 320,000. How many pounds are left to catch?",
            "answer": "80000",
            "accept": [
              "80,000"
            ],
            "hint": "400,000 − 320,000.",
            "skill": "Adding and subtracting"
          },
          {
            "q": "The buyer pays $2 a pound for 400,000 pounds. How many dollars is the check?",
            "answer": "800000",
            "accept": [
              "800,000",
              "$800,000",
              "$800000"
            ],
            "hint": "2 × 400,000.",
            "skill": "Money and decimals"
          },
          {
            "q": "Half of an $800,000 check goes to the boat. How many dollars is that?",
            "answer": "400000",
            "accept": [
              "400,000",
              "$400,000",
              "$400000"
            ],
            "hint": "800,000 ÷ 2.",
            "skill": "Fractions"
          },
          {
            "q": "Each pot averages 120 pounds of keepers. How many pots does it take to catch the last 80,000 pounds? (round up)",
            "answer": "667",
            "hint": "Take a zero off both: 8,000 ÷ 12. If there is some left over, you need one more pot.",
            "skill": "Dividing"
          },
          {
            "q": "A crew fills the tank in 8 days instead of 12. How many days did they save?",
            "answer": "4",
            "hint": "12 − 8.",
            "skill": "Adding and subtracting"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "Words from the job",
            "points": [
              "Every trade has its own words. A report will almost always explain one the first time it uses it, right there in the sentence.",
              "Look on both sides of the comma. Trade words are usually introduced beside a plain phrase that means the same thing.",
              "If the sentence explains it, you do not need to have heard the word before. Nothing here depends on knowing it already."
            ],
            "example": "'The line parted, which is to say it snapped under load.' You have never needed the word parted. The sentence handed it to you."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea that develops across the whole log entry?",
              "choices": [
                "The skipper takes a full share and a half of the crew's half, and the engineer and the deck boss take one each.",
                "Most jobs in the world pay people by the hour.",
                "The crew is paid a set wage for every day the boat is at sea, whether the tank fills early or fills late.",
                "How the money is arranged explains how the crew behaves, right down to how little they sleep."
              ],
              "answer": 3,
              "hint": "A quota, a split, and a reason nobody argues. Find the sentence in the last paragraph that begins 'That is why', and ask what it says all the money explains.",
              "skill": "Central idea and evidence",
              "evidence": "That is why nobody sleeps more than four hours and nobody argues about the bats."
            },
            {
              "q": "Claim: the quota exists for the sake of future seasons, not this one. Which sentence from the log best supports that claim?",
              "choices": [
                "A new deckhand, a greenhorn, takes a half share for the first season, because a greenhorn is slow and the others carry him.",
                "The state sets it so that enough crab are left in the sea to make next year's crab.",
                "When the tank is full the boat runs to port, the crab are weighed as they come off, and the buyer pays by the pound.",
                "Half goes to the boat, to pay for fuel, bait, pots, insurance and repairs, because a season of fuel alone costs more than a house."
              ],
              "answer": 1,
              "hint": "A number on its own is not a reason. Find the sentence that says who set the limit and what they were protecting.",
              "skill": "Finding details",
              "evidence": "The state sets it so that enough crab are left in the sea to make next year's crab."
            },
            {
              "q": "How is the second paragraph organized?",
              "choices": [
                "It splits the check once, and then splits one of those halves again, person by person.",
                "It lists the crew's jobs in the order they are done each day, from baiting the pots to sorting the catch.",
                "It compares this boat's pay with the pay on other boats.",
                "It explains why fuel has become so expensive."
              ],
              "answer": 0,
              "hint": "Follow the money from the first sentence to the last. Count how many times something gets divided, and into what.",
              "skill": "Author's purpose and structure",
              "evidence": "Half goes to the boat, to pay for fuel, bait, pots, insurance and repairs, because a season of fuel alone costs more than a house."
            },
            {
              "q": "The log calls a new deckhand a 'greenhorn'. What does greenhorn mean as it is used here?",
              "choices": [
                "A crew member who gets seasick easily and has to go below in rough weather",
                "Somebody in a first season, who is not yet quick at the work",
                "The crew member put in charge of the deck, who takes a full share of the check",
                "A deckhand who has worked the boat for several years and takes a full share"
              ],
              "answer": 1,
              "hint": "The word turns up right beside a plainer phrase that means the same thing, and the rest of the sentence says what one is like. Read both sides of the comma.",
              "skill": "Word meanings",
              "evidence": "A new deckhand, a greenhorn, takes a half share for the first season, because a greenhorn is slow and the others carry him."
            },
            {
              "q": "Paragraphs 1 and 3 together explain what speed actually earns a crew. What does it earn them?",
              "choices": [
                "Not a bigger check for the same crab, but the time to go out and fill the tank again.",
                "A higher price per pound from the buyer on the dock, so that the same tank of crab is worth more money.",
                "A larger quota the next season, handed out by the state as a reward for filling this one early.",
                "A full share instead of a half share for the greenhorn, paid out as soon as the tank is filled early."
              ],
              "answer": 0,
              "hint": "One paragraph says how the check is worked out. The other says what happens when the tank fills early. Notice that the check itself does not change.",
              "skill": "Reading between the lines",
              "evidence": "A crew that fills the tank in eight days instead of twelve gets the same check and four more days to make a second trip."
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
              "Fractions with the same bottom: the bigger top is the bigger fraction. 2/3 is bigger than 1/3."
            ],
            "example": "2 × 7 = 14, so 14 shared into 2 equal groups is 7 each."
          },
          "problems": [
            {
              "q": "The crew hauls 3 crab pots on each of 2 trips. How many crab pots is that?",
              "answer": "6",
              "hint": "2 × 3.",
              "skill": "Multiplying"
            },
            {
              "q": "The crew has 18 crab pots and sets 6 on each trip. How many trips is that?",
              "answer": "3",
              "hint": "How many 6s fit into 18?",
              "skill": "Dividing"
            },
            {
              "q": "The crew counted 326 crabs in the morning and 391 in the evening. How many more in the evening?",
              "answer": "65",
              "hint": "391 − 326.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "Which is bigger, 3/4 or 1/4? (write a fraction)",
              "answer": "3/4",
              "hint": "Same bottom, so the bigger top wins.",
              "skill": "Fractions"
            },
            {
              "q": "The target is 600 crabs and 168 are logged. How many short of the target is that?",
              "answer": "432",
              "hint": "600 − 168.",
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
            "example": "4 × (9 − 2) + 5: parentheses first, 9 − 2 = 7; then 4 × 7 = 28; then add 5 to get 33."
          },
          "problems": [
            {
              "q": "The fuel tank is 7/8 full. Each day at sea burns 1/16 of a tank. How many days can the boat stay out?",
              "answer": "14",
              "hint": "Write 7/8 with the same bottom as 1/16: 7/8 = 14/16. How many 1/16s is that?",
              "skill": "Fractions"
            },
            {
              "q": "Out of every 100 shares, 20 are set aside. Out of 60 shares, how many is that?",
              "answer": "12",
              "hint": "60 is 0.6 hundreds, so 0.6 × 20.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The crew divides 72 minutes of work in the ratio 4 to 5. How many minutes is the larger share?",
              "answer": "40",
              "hint": "9 parts in all, so one part is 8 minutes.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The crew works out (12 − 2) × (6 + 10). What is it?",
              "answer": "160",
              "hint": "Each set of parentheses first, then multiply the two answers.",
              "skill": "Order of operations"
            },
            {
              "q": "Three readings came in: −15, −8 and 7 degrees. Which is the coldest?",
              "answer": "-15",
              "accept": [
                "−15"
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
              "How many in all, then take off the ones done: 9 hours at 1.5 hours a job is 6 jobs, so with 2 done, 4 are left.",
              "Percent change: find that percent of the starting number, then add it on or take it off.",
              "Multiplying or dividing with one minus sign gives a minus answer: 3 × (−5) = −15, and −15 ÷ 3 = −5.",
              "A two-step equation: undo the taking away first, then undo the dividing by multiplying."
            ],
            "example": "x ÷ 8 − 13 = 3, so x ÷ 8 = 16, so x = 128."
          },
          "problems": [
            {
              "q": "The job needs 10 hours in all, at 1.25 hours for each string. One string is already done. How many strings are left?",
              "answer": "7",
              "hint": "10 ÷ 1.25 = 8 in all, then take the finished one off.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The rule says the crew's catch may change by no more than 50% from last trip. Last trip it was 160 crabs. What is the highest catch the rule allows?",
              "answer": "240",
              "hint": "50% of 160 is 80. Add it on.",
              "skill": "Ratios and percent"
            },
            {
              "q": "Over 12 hours the thermometer fell 24 degrees in all, the same amount each hour. What was the change each hour? (Write a fall as a negative number.)",
              "answer": "-2",
              "accept": [
                "−2"
              ],
              "hint": "Share −24 into 12 equal parts: −24 ÷ 12. One minus sign, so the answer is negative.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: x ÷ 2 − 6 = 10",
              "answer": "32",
              "hint": "Add 6 to both sides, then multiply by 2.",
              "skill": "Equations"
            },
            {
              "q": "A round plate measures 31.4 inches around the edge. Using 3.14 for pi, how many inches is it across?",
              "answer": "10",
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
              "A square root undoes squaring. If a square has area 16, its side is 4.",
              "Pythagoras: in a right triangle a² + b² = c², and c is always the longest side.",
              "With x on both sides, move all the x's to one side first, then all the plain numbers to the other."
            ],
            "example": "Through (0, 2) and (6, 14): y rises 12 while x runs 6, so the slope is 12 ÷ 6 = 2."
          },
          "problems": [
            {
              "q": "A line passes through (0, 24) and (3, 39). What is its slope?",
              "answer": "5",
              "hint": "Slope is the rise over the run: 15 ÷ 3.",
              "skill": "Linear relationships"
            },
            {
              "q": "A square pad has an area of 64 square feet. How many feet is it around the edge?",
              "answer": "32",
              "hint": "One side is the square root of 64, then four sides.",
              "skill": "Powers and roots"
            },
            {
              "q": "The crew goes 7 feet east and then 24 feet north. In a straight line, how far is that from the start, in feet?",
              "answer": "25",
              "hint": "The two legs make a right angle: 7² + 24² = 625.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "For what value of x do 6x + 4 and 3x + 25 come to the same number?",
              "answer": "7",
              "hint": "Set them equal, take 3x off both sides, then take 4 off.",
              "skill": "Equations"
            },
            {
              "q": "Two round tanks each have a radius of 5 feet and are 2 feet deep. Using 3.14 for pi, what is their total volume in cubic feet?",
              "answer": "314",
              "hint": "One tank is 3.14 × 5 × 5 × 2 = 157. Then double it.",
              "skill": "Area and perimeter"
            }
          ]
        }
      },
      "orders": {
        "lesson": {
          "title": "Back to step 1",
          "points": [
            "A step can send you back to a number you already wrote. Keep every number where you can see it.",
            "'Rounded down' means drop whatever is left over after the divide."
          ],
          "example": "Step 1 says 50. Step 2 adds 30 to make 80. Step 3 takes the step 1 number off again: 80 − 50 = 30. Divide by 4 and round down: 30 ÷ 4 is 7 with 2 left over, so 7."
        },
        "skill": "Following directions",
        "steps": [
          "Write the thousands of pounds already in the tank, from today's log: 320.",
          "Add the thousands still to go: 80.",
          "That is the quota. Now take away the thousands already in the tank, the 320 from step 1, to see what is still to catch.",
          "Divide by the number of days a slow crew needs to fill the tank: 12.",
          "Type the result rounded down to a whole number."
        ],
        "prompt": "Your answer:",
        "answer": "6",
        "hint": "Step 3 sends you back to the number in step 1. Step 5 tells you what to do with the leftover when the divide does not come out even."
      }
    },
    {
      "id": "bering-5",
      "title": "Full Tank",
      "recon": {
        "lesson": {
          "title": "Putting the trip together",
          "points": [
            "The last log looks back over the trip. Questions will ask for an exact day, a distance, a phrase and a reason.",
            "Look for 'first', 'then', 'by the third day', 'at last'.",
            "The main idea of the closing paragraph is what the writer wants you to keep."
          ],
          "example": "'The boat ties up at noon on Friday.' Asked when? Give the exact time and day, not 'later that week'."
        },
        "title": "Skipper's Log: Turning for Port",
        "passage": [
          "The tank went full at two in the morning on the ninth day. The last pot came up with seventy keepers, and the deck boss called it. The skipper wrote the number in the log, drew a line under it, and turned the wheel. The boat is running for Dutch Harbor now, two hundred nautical miles southeast, at ten knots, with every pot back on deck and lashed, and the launcher tied down. The crew is asleep in a heap in the galley, because none of them made it to a bunk.",
          "The trip went the way trips go. The first string set in the dark. Sixty keepers a pot on the second day, which is good. The storm on the third and fourth days, forty-foot seas and half an inch of ice, then an inch, then the bats at three in the morning. Two pots lost to a parted line, which is cheap. A greenhorn who was sick for two days and then found his feet and sorted crab faster than the deck boss by the end. Three hundred thousand pounds by day six, four hundred thousand by day nine.",
          "In port the crab will be weighed, the check will be written, and the shares will be paid out on the dock in cash. Then the boat will take on fuel and bait and ice and go back out, because the season is short and there is a second quota, for another kind of crab, to fish. The skipper's last line for this trip is the same one every skipper writes when the tank is full and everyone is aboard. Full tank. All hands. Home."
        ],
        "questions": [
          {
            "q": "On what day did the tank go full?",
            "choices": [
              "The third day of the trip",
              "Day six",
              "The ninth day",
              "The twelfth day out"
            ],
            "answer": 2,
            "hint": "The first sentence of paragraph 1.",
            "skill": "Finding details"
          },
          {
            "q": "How far is the run to Dutch Harbor?",
            "choices": [
              "Twenty miles",
              "Two thousand miles to the east",
              "Two hundred nautical miles",
              "Ten miles"
            ],
            "answer": 2,
            "hint": "Paragraph 1, the sentence with 'running for Dutch Harbor'.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 2, what does 'found his feet' mean?",
            "choices": [
              "He got used to the work and became good at it",
              "He stood up without holding the rail",
              "He fell down",
              "He went home"
            ],
            "answer": 0,
            "hint": "The sentence says he was sick, then found his feet, then sorted faster than the deck boss.",
            "skill": "Word meanings"
          },
          {
            "q": "Why will the boat go straight back out after port?",
            "choices": [
              "Because the season is short and there is a second quota to fish",
              "Because the boat has to take on fuel, bait and ice",
              "Because the crew are paid only after the whole tank is weighed in port",
              "Because the last pot came up with seventy keepers"
            ],
            "answer": 0,
            "hint": "Paragraph 3, the second sentence, after 'because'.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 2 mostly about?",
            "choices": [
              "A day-by-day look back at the whole trip",
              "The greenhorn who was sick and then found his feet",
              "The two days of storm and ice",
              "The two pots lost to a parted line"
            ],
            "answer": 0,
            "hint": "Paragraph 2 lists what happened on each day of the trip.",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Run-home math",
          "points": [
            "Distance ÷ speed = hours.",
            "Different bottoms: make them the same first. 1/2 + 1/5 = 5/10 + 2/10 = 7/10.",
            "Lost pots times the price of a pot.",
            "Same bottom: 3/9 + 6/9 = 9/9, a whole trip."
          ],
          "example": "150 miles at 15 miles an hour is 150 ÷ 15 = 10 hours."
        },
        "problems": [
          {
            "q": "Dutch Harbor is 200 nautical miles away and the boat runs at 10 knots, which is 10 nautical miles an hour. How many hours is the run?",
            "answer": "20",
            "hint": "200 ÷ 10.",
            "skill": "Dividing"
          },
          {
            "q": "The boat used 1/3 of its fuel going out and 1/4 of it coming back. How much of the fuel did it use in all? (write a fraction)",
            "answer": "7/12",
            "hint": "Make the bottoms the same: 1/3 is 4/12 and 1/4 is 3/12. Then add the tops.",
            "skill": "Fractions"
          },
          {
            "q": "Two pots were lost. A pot costs $4,000 to replace. How many dollars is that?",
            "answer": "8000",
            "accept": [
              "8,000",
              "$8,000",
              "$8000"
            ],
            "hint": "2 × 4,000.",
            "skill": "Money and decimals"
          },
          {
            "q": "The trip was 9 days. The storm took 2 of them and the greenhorn was sick for 2. What fraction of the trip is that together? (write a fraction)",
            "answer": "4/9",
            "hint": "2/9 + 2/9. Same bottom. Add the tops.",
            "skill": "Fractions"
          },
          {
            "q": "The first trip took 9 days. The season allows 30 days. If the second trip takes the same, how many days of the season are left after both trips?",
            "answer": "12",
            "hint": "9 + 9 = 18. Then 30 − 18.",
            "skill": "Multi-step problems"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "Join the ends of the report",
            "points": [
              "For the last question, put the first paragraph and the last one side by side. The answer usually lives between them.",
              "Ask what has changed from the opening to the close, and what has not. Both can be the point.",
              "Check yourself by pointing: one line here, one line there. If you can only point once, you have a guess."
            ],
            "example": "Paragraph one: the shop shutters came down at noon. Paragraph three: the delivery van is loading at midnight. Together: the shop is not closed, it is getting ready."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea of the whole log entry?",
              "choices": [
                "The last pot of the trip came up with seventy keepers in it, and the skipper wrote that number in the log and drew a line under it.",
                "The trip was spoiled by the storm on the third and fourth days.",
                "A finished trip is a string of ordinary problems handled one at a time, and it ends by starting again.",
                "With the quota filled and the tank full, the boat is finished for the season and will not go back out until next year."
              ],
              "answer": 2,
              "hint": "A full tank, a list of nine days, and a boat taking on fuel again. Ask what the last paragraph does to the ending.",
              "skill": "Central idea and evidence",
              "evidence": "Then the boat will take on fuel and bait and ice and go back out, because the season is short and there is a second quota, for another kind of crab, to fish."
            },
            {
              "q": "Claim: the crew worked until there was nothing left in them. Which sentence from the log best supports that claim?",
              "choices": [
                "The tank went full at two in the morning on the ninth day.",
                "The storm on the third and fourth days, forty-foot seas and half an inch of ice, then an inch, then the bats at three in the morning.",
                "The crew is asleep in a heap in the galley, because none of them made it to a bunk.",
                "The last pot came up with seventy keepers, and the deck boss called it."
              ],
              "answer": 2,
              "hint": "A time and a date show when the work stopped, not what it cost. Find the sentence that shows you the crew afterward.",
              "skill": "Finding details",
              "evidence": "The crew is asleep in a heap in the galley, because none of them made it to a bunk."
            },
            {
              "q": "What job does the second paragraph do in this log entry?",
              "choices": [
                "It runs back over the nine days in order, showing what a full tank cost.",
                "It gives instructions for setting a string of pots.",
                "It explains why the crab season is so short.",
                "It compares this crew with the crew of another boat."
              ],
              "answer": 0,
              "hint": "Every sentence in it is a day or an event, and they are in order. Then ask what that list adds up to for somebody reading it.",
              "skill": "Author's purpose and structure",
              "evidence": "The trip went the way trips go."
            },
            {
              "q": "The log says the greenhorn 'found his feet'. What does that phrase mean as it is used here?",
              "choices": [
                "He got used to the work and became good at it.",
                "He learned how to stand up in a rough sea.",
                "He was given an easier job so that he could keep up with the rest.",
                "He stopped working and went below to rest."
              ],
              "answer": 0,
              "hint": "Read what comes immediately after the phrase. Whatever finding his feet means, it led straight to that.",
              "skill": "Word meanings",
              "evidence": "A greenhorn who was sick for two days and then found his feet and sorted crab faster than the deck boss by the end."
            },
            {
              "q": "Paragraphs 1 and 3 together suggest something about the sleep the crew is getting right now. What is it?",
              "choices": [
                "It is most of the rest they are going to get, because in port the boat is refueled and turned straight around.",
                "They will sleep in port for a week while the boat takes on fuel and bait, and go out again when the season restarts.",
                "They are in the galley because the bunks were damaged in the storm.",
                "The skipper has ordered them below until the boat reaches port."
              ],
              "answer": 0,
              "hint": "Paragraph one shows you where the crew is at this moment. The last paragraph shows you what happens as soon as the boat ties up. Put those together.",
              "skill": "Reading between the lines",
              "evidence": "Then the boat will take on fuel and bait and ice and go back out, because the season is short and there is a second quota, for another kind of crab, to fish."
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
            "example": "5 × 4 = 20, so 20 shared into 5 equal groups is 4 each."
          },
          "problems": [
            {
              "q": "The crew counts 3 runs with 3 miles in each. How many miles is that?",
              "answer": "9",
              "hint": "3 × 3.",
              "skill": "Multiplying"
            },
            {
              "q": "The boat travels 9 miles in 3 runs of equal length. How many miles is each run?",
              "answer": "3",
              "hint": "How many 3s make 9?",
              "skill": "Dividing"
            },
            {
              "q": "The boat ran 185 miles, then 40 more, then 34 more. How many miles in all?",
              "answer": "259",
              "hint": "185 + 40 first. Then add 34.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "The crew finished 2/4 of the day's work before the break and 1/4 after. What fraction is done? (write a fraction)",
              "answer": "3/4",
              "hint": "Same bottom. Add the tops.",
              "skill": "Fractions"
            },
            {
              "q": "A platform is 5 squares wide and 6 squares long. How many squares is that?",
              "answer": "30",
              "hint": "5 rows of 6, so 5 × 6.",
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
              "q": "The plan allows 40 hours. The crew uses 5.45 hours on the first string of pots and 12.4 on the second. How many hours are left?",
              "answer": "22.15",
              "hint": "Add the two amounts used first, then take that from 40. Line up the points.",
              "skill": "Decimals"
            },
            {
              "q": "The run is 120 miles, and 20% of it is in rough water. How many miles is that?",
              "answer": "24",
              "hint": "20% of 120: 20% is 20/100.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The boat burns 4 gallons of fuel for every 5 miles. If it burns 20 gallons, how many miles does it go?",
              "answer": "25",
              "hint": "20 ÷ 4 = 5 groups. Each group has 5 miles.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The crew works out 4 × (7 − 3) + 6. What is it?",
              "answer": "22",
              "hint": "Parentheses first, then multiply, then add.",
              "skill": "Order of operations"
            },
            {
              "q": "At dawn it was −7 degrees. By noon it was 2 degrees. By how many degrees did it rise?",
              "answer": "9",
              "hint": "From −7 up to 0 is 7, then 2 more.",
              "skill": "Negative numbers"
            }
          ]
        },
        "7": {
          "lesson": {
            "title": "Grade 7 numbers",
            "points": [
              "A unit rate is the total shared out: 18 hours for 8 jobs is 18 ÷ 8 = 2.25 hours a job.",
              "Percent change: find that percent of the starting number, then add it on or take it off.",
              "Below zero, going up adds and going down subtracts. Walk the number line one step at a time.",
              "A two-step equation: undo the adding first, then undo the multiplying."
            ],
            "example": "3x + 19 = 58, so 3x = 39, so x = 13."
          },
          "problems": [
            {
              "q": "20 strings needed 15 hours altogether. How many hours is that for one string?",
              "answer": "0.75",
              "hint": "A rate is the total shared out: 15 ÷ 20.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The crew counted 320 crabs on the first pass. On the second pass the number had fallen by 25%. How many crabs is that?",
              "answer": "240",
              "hint": "25% of 320 is 80. Then take it off.",
              "skill": "Ratios and percent"
            },
            {
              "q": "At dawn the thermometer read −9 degrees. It rose 19 degrees by noon, then fell 11 degrees by dark. What does it read at dark?",
              "answer": "-1",
              "accept": [
                "−1"
              ],
              "hint": "Start at −9, go up 19 to 10, then down 11.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: 2x + 9 = 23",
              "answer": "7",
              "hint": "Take 9 off both sides first, then divide by 2.",
              "skill": "Equations"
            },
            {
              "q": "On the plan, 1 inch stands for 20 feet. The boat measures 9 inches on the plan. How long is it really, in feet?",
              "answer": "180",
              "hint": "Every inch is 20 feet, so 9 × 20.",
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
            "example": "Start at 9 and add 4 each hour: after 7 hours, y = 4 × 7 + 9 = 37."
          },
          "problems": [
            {
              "q": "The crew has hauled 20 pots and hauls 3 more every hour. After 8 hours, how many pots have they hauled?",
              "answer": "44",
              "hint": "This is the straight-line rule y = mx + b: 3 × 8 + 20.",
              "skill": "Linear relationships"
            },
            {
              "q": "Each row on deck holds 7² pots. There are 3 rows. How many pots in all?",
              "answer": "147",
              "hint": "7² means 7 × 7 = 49. Then × 3.",
              "skill": "Powers and roots"
            },
            {
              "q": "The crew runs a rope from the top of a 5-foot post to a point 12 feet away on the deck. How long is the rope, in feet?",
              "answer": "13",
              "hint": "Right triangle: a² + b² = c². 5² + 12² = 25 + 144 = 169. The rope is the square root of that.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "Solve for x: 11x + 10 = 5x + 40",
              "answer": "5",
              "hint": "Take 5x off both sides to get 6x + 10 = 40, then take 10 off both sides and divide.",
              "skill": "Equations"
            },
            {
              "q": "The fleet writes the pounds of crab it landed this season as 4 × 10^5. Written out in full, what number is that?",
              "answer": "400000",
              "hint": "10^5 is 1 with 5 zeros after it: 100,000. Then × 4.",
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
            "If the last step asks for words, numbers are wrong."
          ],
          "example": "'Type the skipper's last line' means words, not a count."
        },
        "skill": "Following directions",
        "steps": [
          "Write the number of days the trip took: 9.",
          "Multiply by the boat's speed in knots: 10.",
          "Add the number of keepers in the last pot: 70.",
          "Cross step 3 out. The last pot's crab went into the tank, not into this count, so your step 2 total stands.",
          "Take away the number of pots lost to a parted line: 2. Type the result."
        ],
        "prompt": "Your answer:",
        "answer": "88",
        "hint": "Step 4 cancels step 3, so the keepers never go in. Carry your step 2 total straight into step 5."
      }
    }
  ]
};
if (window.BASECAMP_MISSIONS && window.BASECAMP_MISSIONS.register) window.BASECAMP_MISSIONS.register(C);
else (window.BASECAMP_CAMPAIGNS_PENDING = window.BASECAMP_CAMPAIGNS_PENDING || []).push(C);
})();
