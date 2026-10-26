// ODYSSEY — campaign "rover". GENERATED, do not edit.
// Source of truth: content/missions-full.js. Rebuild with:  python3 tools/split-missions.py
// RULE: nothing in this file is about the person using it. Content only.
(function () {
var C = {
  "id": "rover",
  "ready": true,
  "kind": "build",
  "readingLevel": {
    "fk": 5.8,
    "cl": 6.0
  },
  "grade": "5",
  "kindLabel": "Build",
  "form": "dusty",
  "title": "Rover Garage",
  "subtitle": "The clean room, Mars Yard",
  "pitch": "Five sessions to build a rover that can drive on Mars. Wheels, a body that keeps its brain warm, a mast with eyes, an arm with a drill, and a radio that talks across eleven minutes of empty space. The rover is the progress bar.",
  "scene": "assets/scene-rover.jpg",
  "buildArt": "rover",
  "progress": {
    "unit": "parts",
    "total": 5
  },
  "dayNoun": "Session",
  "stageNoun": "Part",
  "finalNoun": "First drive",
  "stages": [
    "Wheels",
    "Body",
    "Mast",
    "Arm",
    "Radio and first drive"
  ],
  "reconNoun": "Build Sheet",
  "legs": {
    "recon": "Build sheet",
    "nav": "Bench math",
    "orders": "Assembly",
    "debrief": "Bench check"
  },
  "rules": [
    "Stuck on a value? <b>Flag it</b> and move on. Pending items come back at the bench check.",
    "Build sheet: read the questions <b>before</b> the sheet.",
    "Assembly: read <b>every</b> step before you fit anything."
  ],
  "fact": "A radio signal takes between three and twenty-two minutes to reach Mars, depending on where the planets are. Nobody drives a rover with a joystick. You send the plan for the whole day and wait.",
  "finale": {
    "prompt": "First drive complete. Which color goes on the rover's mast flag for the photo?",
    "options": [
      {
        "label": "Rust red",
        "color": "#C1440E"
      },
      {
        "label": "White",
        "color": "#F4F8FF"
      },
      {
        "label": "Blue",
        "color": "#4FD1FF"
      },
      {
        "label": "Gold",
        "color": "#FFB454"
      }
    ],
    "done": "Clip it on. Then send the drive log. It will get there in eleven minutes."
  },
  "patrols": [
    {
      "id": "rover-1",
      "title": "Six Wheels",
      "recon": {
        "lesson": {
          "title": "Questions first, then the sheet",
          "points": [
            "Read the five questions before the sheet. One wants a detail, one wants a word, two want a why, and one wants what a paragraph is mostly about.",
            "When the sheet compares two designs, find the sentence with both.",
            "The answer is always on the sheet. You never have to guess."
          ],
          "example": "Question: 'Why does the wrench click?' Hunt for 'click'. Read that sentence to the end."
        },
        "title": "Build Sheet: Why Six",
        "passage": [
          "Every rover that has driven on Mars has had six wheels, and the reason is rocks. Mars has no roads. It has sand that swallows tires, rocks the size of chairs, and slopes of loose gravel that would send a car sliding. A six-wheel rover with each wheel on its own arm can climb a rock taller than the wheel itself, because while one wheel is lifted over the rock, five are still on the ground pushing. A four-wheel rover on the same rock tips.",
          "The wheels on the sheet are made of aluminum, a light metal that does not rust, and they are not solid. Each is a thin drum, half a meter across, with cleats, raised ridges that bite into sand the way boot treads do. Inside are curved spokes that bend a little when the wheel hits something and spring back. There is no rubber and no air. That is because rubber cracks in the cold of Mars, where most days stay colder than a kitchen freezer, and a tire with air in it would burst in the thin atmosphere.",
          "The suspension, the set of arms that hold the wheels, is called a rocker-bogie. When one side of the rover rises over a rock, the arms on that side rock and the body tilts only half as much as the wheel did. So the cameras and the instruments stay level. Today's session is the six wheels and their arms. Each wheel takes twelve bolts. Each bolt is tightened with a wrench that clicks at exactly the right force. The engineer counts every click, because a wheel that comes loose on Mars stays loose forever."
        ],
        "questions": [
          {
            "q": "Why can a six-wheel rover climb a rock taller than its wheel?",
            "choices": [
              "Because while one wheel is lifted over the rock, five are still pushing",
              "Because it is heavier than a four-wheel rover and presses down harder on the rock",
              "Because the rocks on Mars are soft enough for the cleats to bite straight through",
              "Because rubber tires grip a rock far better than bare metal wheels can grip it"
            ],
            "answer": 0,
            "hint": "Paragraph 1, the sentence with 'five are still on the ground'.",
            "skill": "Finding details"
          },
          {
            "q": "What are the wheels made of?",
            "choices": [
              "Stainless steel",
              "Rubber, like a car tire",
              "Tin",
              "Aluminum"
            ],
            "answer": 3,
            "hint": "The first sentence of paragraph 2.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 2, what are 'cleats'?",
            "choices": [
              "The twelve bolts that hold each wheel on",
              "The curved spokes inside the wheel that bend and spring back",
              "Raised ridges on the wheel that bite into sand",
              "The arms that hold each wheel on to the rover's body"
            ],
            "answer": 2,
            "hint": "The sentence with 'cleats, raised ridges'.",
            "skill": "Word meanings"
          },
          {
            "q": "Why do the wheels have no rubber and no air?",
            "choices": [
              "Because rubber and air would make the wheels too heavy for a rover that has to be light enough to fly",
              "Because aluminum costs less than rubber does and a metal wheel is easier to bolt on to the arms",
              "Because rubber cracks in the cold and an air-filled tire would burst in the thin atmosphere",
              "Because the sand and the gravel on Mars would wear a rubber tire down in the first week of driving"
            ],
            "answer": 2,
            "hint": "The last sentence of paragraph 2, after 'because'.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 3 mostly about?",
            "choices": [
              "The rocker-bogie suspension and today's job of fitting the wheels",
              "How cold Mars is on most days, and what the cold does to rubber tires",
              "Why the wheels are made of aluminum and what the cleats and the spokes do",
              "The rocks and sand and loose gravel that make Mars so hard to drive on"
            ],
            "answer": 0,
            "hint": "Paragraph 3 names the suspension, explains it, and describes the session.",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Wheel math",
          "points": [
            "Common multiples: count by both numbers. 2, 4, 6 and 3, 6: they meet at 6.",
            "1 meter is 100 centimeters, so a quarter of a meter is 25 centimeters.",
            "Distance around a wheel: about 3 times the width across (use 3 here).",
            "Turns needed: the distance ÷ how far one turn goes."
          ],
          "example": "A wheel 40 centimeters across goes about 3 × 40 = 120 centimeters in one turn."
        },
        "problems": [
          {
            "q": "The front wheels get checked every 4 days and the back wheels every 6 days. Both were checked today. In how many days will both be checked on the same day again?",
            "answer": "12",
            "hint": "Count by 4s and by 6s. Which number is on both lists first?",
            "skill": "Multiplying"
          },
          {
            "q": "A wheel is half a meter across. A meter is 100 centimeters. How many centimeters across is the wheel?",
            "answer": "50",
            "hint": "100 ÷ 2.",
            "skill": "Dividing"
          },
          {
            "q": "The distance around a wheel is about 3 times its width. A wheel 50 centimeters across goes about how many centimeters in one turn?",
            "answer": "150",
            "hint": "3 × 50.",
            "skill": "Multiplying"
          },
          {
            "q": "The rover drives 3,000 centimeters. Each wheel turn covers 150 centimeters. How many turns is that?",
            "answer": "20",
            "hint": "3,000 ÷ 150.",
            "skill": "Dividing"
          },
          {
            "q": "The engineer fitted 2/6 of the wheels before lunch and 3/6 after. What fraction of the wheels is on? (write a fraction)",
            "answer": "5/6",
            "hint": "Same bottom. Add the tops.",
            "skill": "Fractions"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "What all three share",
            "points": [
              "The central idea covers every paragraph. Label each one in four words, then find the choice that all three labels serve.",
              "The wrong answers are usually true. They cover a single paragraph, or they are a big statement the sheet never actually makes.",
              "Then four other moves: prove a claim with one line, name what a paragraph is for, work a word out from its sentence, and put two paragraphs together."
            ],
            "example": "Three paragraphs about a bridge in a cold country: what it is made of, why it has gaps in the deck, how it is checked each spring. 'The deck has gaps' covers one paragraph. 'Bridges are useful' covers none of it. 'Everything about the bridge is decided by the cold' covers all three."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea of the whole build sheet?",
              "choices": [
                "Every choice in the wheels and their arms is forced by what Mars is like: rough ground, deep cold, thin air, and nobody there to fix a mistake.",
                "Each wheel takes twelve bolts, tightened with a wrench that clicks at the right force, and the engineer counts every click before starting the next wheel.",
                "Six wheels are better than four on any vehicle anywhere, on any ground at all, so every machine that has to cross rough country should be built with six of them.",
                "The wheels are filled with air and wrapped in rubber so that they can absorb the rocks, which is why the body of the rover never tilts when a wheel climbs one."
              ],
              "answer": 0,
              "hint": "Rocks, cold, thin air, twelve bolts nobody can retighten. Ask what all of those have in common, and cross off the choice the second paragraph denies.",
              "skill": "Central idea and evidence",
              "evidence": "That is because rubber cracks in the cold of Mars, where most days stay colder than a kitchen freezer, and a tire with air in it would burst in the thin atmosphere."
            },
            {
              "q": "Claim: six wheels beat four because of what happens while one wheel is off the ground. Which sentence from the sheet best supports that claim?",
              "choices": [
                "Each is a thin drum, half a meter across, with cleats, raised ridges that bite into sand the way boot treads do.",
                "That is because rubber cracks in the cold of Mars, where most days stay colder than a kitchen freezer, and a tire with air in it would burst in the thin atmosphere.",
                "Every rover that has driven on Mars has had six wheels, and the reason is rocks.",
                "A six-wheel rover with each wheel on its own arm can climb a rock taller than the wheel itself, because while one wheel is lifted over the rock, five are still on the ground pushing."
              ],
              "answer": 3,
              "hint": "Saying four wheels tip is the result, not the reason. Find the sentence that counts how many wheels are still doing work while one is in the air.",
              "skill": "Finding details",
              "evidence": "A six-wheel rover with each wheel on its own arm can climb a rock taller than the wheel itself, because while one wheel is lifted over the rock, five are still on the ground pushing."
            },
            {
              "q": "Why does the sheet explain what happens to rubber and to air on Mars?",
              "choices": [
                "It explains how a sheet of aluminum is rolled into a thin drum and how the curved spokes are fitted inside it before the cleats go on.",
                "It describes the weather at the landing site across the whole year, from the summer afternoons down to the coldest nights of the Martian winter.",
                "It gives the reason for what the wheels are missing, so a wheel with no tire stops looking like a corner that was cut.",
                "It lists the tools needed for fitting a wheel."
              ],
              "answer": 2,
              "hint": "One sentence says what is not there, and the next one says because. Ask what a reader would otherwise assume about a wheel with no tire on it.",
              "skill": "Author's purpose and structure",
              "evidence": "That is because rubber cracks in the cold of Mars, where most days stay colder than a kitchen freezer, and a tire with air in it would burst in the thin atmosphere."
            },
            {
              "q": "The sheet says the cleats are raised ridges that 'bite into sand'. What does bite mean as it is used here?",
              "choices": [
                "Cut the sand apart into separate pieces and push them aside",
                "Close the teeth on something and tear a piece away from it",
                "Grip the surface instead of sliding across it",
                "Sink into the sand deep enough to become stuck fast"
              ],
              "answer": 2,
              "hint": "The same sentence gives you a comparison: the way boot treads do. Ask what boot treads are for, and let that fix the word.",
              "skill": "Word meanings",
              "evidence": "Each is a thin drum, half a meter across, with cleats, raised ridges that bite into sand the way boot treads do."
            },
            {
              "q": "Paragraphs 1 and 3 together explain how the rover crosses rough ground without shaking its instruments about. How does it?",
              "choices": [
                "Each wheel sits on its own arm, so one can rise over a rock while the arms take up half the tilt and the body stays level.",
                "The rover drives so slowly that the instruments never move at all, and every wheel is stopped completely whenever a picture is taken.",
                "The cameras and the instruments are mounted on springs inside the body, and the springs soak up each shock before it can reach them.",
                "The six wheels are steered around every rock in the path, so the body never has to climb over anything and never tilts at all as it drives."
              ],
              "answer": 0,
              "hint": "Paragraph one tells you each wheel has its own arm. Paragraph three tells you what those arms do to the tilt. Put the two facts end to end.",
              "skill": "Reading between the lines",
              "evidence": "When one side of the rover rises over a rock, the arms on that side rock and the body tilts only half as much as the wheel did."
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
              "q": "Every rover needs 6 wheels, and there are 4 rovers. How many wheels is that?",
              "answer": "24",
              "hint": "4 groups of 6, so 4 × 6.",
              "skill": "Multiplying"
            },
            {
              "q": "The engineer splits 48 wheels in half. How many wheels is one half?",
              "answer": "24",
              "hint": "Half of 48.",
              "skill": "Dividing"
            },
            {
              "q": "The engineer needs 800 bolts and has 254. How many more are needed?",
              "answer": "546",
              "hint": "800 − 254.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "The day's work is cut into 8 equal parts and the engineer has finished 5 of them. What fraction is done? (write a fraction)",
              "answer": "5/8",
              "hint": "5 parts out of 8.",
              "skill": "Fractions"
            },
            {
              "q": "A floor is 6 squares wide and 7 squares long. The engineer has covered 6 squares. How many squares are left to cover?",
              "answer": "36",
              "hint": "6 × 7 squares in all, then take 6 off.",
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
              "q": "Each part takes 3.45 minutes to fit. How many minutes for 33 parts?",
              "answer": "113.85",
              "hint": "Split it: 33 × 3 plus 33 × 0.45.",
              "skill": "Decimals"
            },
            {
              "q": "Of 160 bolts, 10% are struck off the list. How many are left on it?",
              "answer": "144",
              "hint": "10% of 160 is 16. Take that off 160.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The engineer shares 40 spokes between two teams in the ratio 2 to 3. How many does the smaller share get?",
              "answer": "16",
              "hint": "2 + 3 = 5 parts. 40 ÷ 5 = 8 for one part.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The engineer works out 8 × 6 − 1 × 3. What is it?",
              "answer": "45",
              "hint": "Do both multiplications first, then subtract.",
              "skill": "Order of operations"
            },
            {
              "q": "Solve for x: x + 299 + 38 = 600",
              "answer": "263",
              "hint": "Add 299 and 38 first, then take that off 600.",
              "skill": "Equations"
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
            "example": "6(x + 13) = 96, so x + 13 = 16, so x = 3."
          },
          "problems": [
            {
              "q": "20 parts took 15 minutes. At the same rate, how many minutes would 24 parts take?",
              "answer": "18",
              "hint": "One part takes 15 ÷ 20 = 0.75. Then × 24.",
              "skill": "Ratios and percent"
            },
            {
              "q": "20% of the 200 bolts were lost. How many bolts was that?",
              "answer": "40",
              "hint": "20% of 200: 20/100 × 200.",
              "skill": "Ratios and percent"
            },
            {
              "q": "One night the thermometer in the yard reads −18 degrees and the next night −21 degrees. How many degrees apart are they?",
              "answer": "3",
              "hint": "From −21 up to −18.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: 3(x + 12) = 57",
              "answer": "7",
              "hint": "Divide both sides by 3 to get x + 12 = 19.",
              "skill": "Equations"
            },
            {
              "q": "On the plan, 4 cm stands for 16 meters. How many meters does 1 cm stand for?",
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
              "A list that adds the same amount each step follows a straight-line rule. The 1st number is the start, so the 10th number is 9 steps on.",
              "Parentheses first, then the power: (2 × 5)² is 10² = 100.",
              "Pythagoras: in a right triangle a² + b² = c², and c is always the longest side.",
              "Collect the x's first: 9x − 5x is 4x, and an x on its own means 1x."
            ],
            "example": "5, 11, 17, … adds 6 each step. The 6th number is 5 steps on: 5 + 5 × 6 = 35."
          },
          "problems": [
            {
              "q": "The count of bolts goes 5, 10, 15, 20, and on. What is the 9th number in the list?",
              "answer": "45",
              "hint": "It starts at 5 and adds 5 each step. The number you want is 8 steps on from 5.",
              "skill": "Linear relationships"
            },
            {
              "q": "What is (5 × 7)²?",
              "answer": "1225",
              "hint": "5 × 7 = 35 first, then square it.",
              "skill": "Powers and roots"
            },
            {
              "q": "A right triangle has short sides of 5 and 12 meters. How long is its longest side, in meters?",
              "answer": "13",
              "hint": "5² + 12² = 169. The longest side is the square root of that.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "Solve for x: 7x − x = 18",
              "answer": "3",
              "hint": "x is the same as 1x, so 7 − 1 = 6 and 6x = 18.",
              "skill": "Equations"
            },
            {
              "q": "Which is bigger, 4 × 10^4 or 3 × 10^5? Write the bigger one out in full.",
              "answer": "300000",
              "hint": "3 × 10^5 is ten times 3 × 10^4, and 4 is not ten times 3.",
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
          "example": "If step 5 says 'answer in wheels, not bolts', 72 becomes 6."
        },
        "skill": "Following directions",
        "steps": [
          "Write the number of wheels on the rover: 6.",
          "Multiply by the bolts each wheel takes: 12.",
          "Take away the number of wheels on the kind of rover that tips over on a rock: 4.",
          "Add the number of arms that hold the wheels, one arm for each wheel: 6.",
          "Type your answer as a word, in capital letters, not as a number. (Twenty would be TWENTY.)"
        ],
        "prompt": "Your answer:",
        "answer": "SEVENTY-FOUR",
        "accept": [
          "seventy-four",
          "Seventy-four",
          "seventy four",
          "SEVENTY FOUR",
          "seventy-four.",
          "SEVENTY-FOUR."
        ],
        "hint": "Step 5 wants the answer spelled out, and it shows you how. Work steps 2, 3 and 4 first, then write it in letters."
      }
    },
    {
      "id": "rover-2",
      "title": "The Warm Box",
      "recon": {
        "lesson": {
          "title": "Numbers that describe a place",
          "points": [
            "'About how much' questions want the amount the sheet gives, with the comparison it uses.",
            "When the sheet explains a design choice, the reason is the problem it solves.",
            "A word about the machine is defined by what it does."
          ],
          "example": "'The heaters switch on when it gets cold.' Why do they switch on? The cold."
        },
        "title": "Build Sheet: Keeping a Brain Warm",
        "passage": [
          "The body of the rover is a box, and the box has one job: keep the computer and the batteries warm. A summer afternoon on Mars can reach seventy degrees at the ground. A meter up, it can still be freezing. A winter night at the rover's landing site drops to more than a hundred degrees below zero. Electronics that get that cold stop working. Batteries that freeze never come back. The whole rover is built around a warm box the size of a suitcase.",
          "The box is insulated, wrapped in layers of gold-colored foil and a foam that traps air. That way the heat inside stays inside. Small electric heaters on the walls switch on when the box gets cold. The rover's power comes from a generator that turns the heat of a lump of slowly decaying metal into electricity, day and night, whether the sun is out or not. It makes about a hundred watts, roughly the power of one old light bulb, and every instrument on the rover has to share it.",
          "Sharing a hundred watts is the hardest part of the design. The rover cannot drive, drill, run the cameras, heat the box and talk to Earth all at once, so the computer runs a schedule: warm up, drive for an hour, stop, take pictures, sleep. Today the engineer fits the box to the wheels. Next the heaters get wired up. Then the generator goes on the back. The sheet says to check every wire twice. There is no one on Mars to plug anything back in."
        ],
        "questions": [
          {
            "q": "What is the one job of the rover's body?",
            "choices": [
              "To hold the mast and the arm up",
              "To keep the dust off the cameras and the wheels",
              "To keep the computer and batteries warm",
              "To make room for the instruments and the tools"
            ],
            "answer": 2,
            "hint": "The first sentence of paragraph 1.",
            "skill": "Finding details"
          },
          {
            "q": "About how much power does the generator make?",
            "choices": [
              "About a thousand watts, roughly the power of a hair dryer",
              "Ten watts",
              "About a hundred watts, like one old light bulb",
              "As much as a house uses, so nothing has to be shared"
            ],
            "answer": 2,
            "hint": "Paragraph 2, the last sentence.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 2, what does 'insulated' mean?",
            "choices": [
              "Painted gold",
              "Cooled by fans so the computer does not overheat",
              "Wrapped in layers that keep heat inside",
              "Sealed shut so no air can get in"
            ],
            "answer": 2,
            "hint": "The first sentence of paragraph 2 explains it after the word.",
            "skill": "Word meanings"
          },
          {
            "q": "Why does the rover's computer run a schedule instead of doing everything at once?",
            "choices": [
              "Because a computer always works better when it is given a list of jobs to do in order",
              "Because the generator stops working at night",
              "Because the rover moves so slowly that it can only manage one job in a whole day anyway",
              "Because there is only a hundred watts to share and everything cannot run at once"
            ],
            "answer": 3,
            "hint": "The first sentence of paragraph 3.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 1 mostly about?",
            "choices": [
              "How cold Mars gets and why the box has to keep things warm",
              "The layers of gold foil and foam that keep the heat inside the box",
              "The small electric heaters on the walls of the box",
              "The generator that makes electricity from a lump of decaying metal"
            ],
            "answer": 0,
            "hint": "Paragraph 1 gives the temperatures and says what cold does to electronics and batteries.",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Watt math",
          "points": [
            "Watts shared among instruments: divide.",
            "Subtracting decimals: line up the points. 5.2 − 1.35 is 5.20 − 1.35 = 3.85.",
            "A drop across zero: count down to zero, then add the degrees below. 20 above to 30 below is 50 degrees.",
            "Two-step: watts left after the heaters, then share them out."
          ],
          "example": "100 watts ÷ 5 instruments = 20 watts each."
        },
        "problems": [
          {
            "q": "The generator makes 100 watts. The heaters use 40. How many watts are left for everything else?",
            "answer": "60",
            "hint": "100 − 40.",
            "skill": "Adding and subtracting"
          },
          {
            "q": "60 watts are shared equally by 4 instruments. How many watts does each get?",
            "answer": "15",
            "hint": "60 ÷ 4.",
            "skill": "Dividing"
          },
          {
            "q": "The afternoon reaches 70 degrees above zero and the night drops to 100 below. How many degrees is the drop?",
            "answer": "170",
            "hint": "From 70 above to 0 is 70, then 100 more below.",
            "skill": "Adding and subtracting"
          },
          {
            "q": "The battery read 12.6 volts in the evening and 11.85 volts in the morning. How many volts did it drop overnight? (write a decimal)",
            "answer": "0.75",
            "hint": "Line up the points: 12.60 − 11.85.",
            "skill": "Decimals"
          },
          {
            "q": "The box is 60 centimeters long and 40 centimeters wide. What is the area of its top in square centimeters?",
            "answer": "2400",
            "accept": [
              "2,400"
            ],
            "hint": "60 × 40.",
            "skill": "Area and perimeter"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "The line that settles it",
            "points": [
              "A supporting sentence has to settle the claim on its own. Read the claim, read your pick, and ask whether anyone could still argue.",
              "All four choices are real sentences from the sheet, so being true earns nothing. Only proving counts.",
              "Watch for the sentence that shares a word with the claim and proves none of it. That is the usual trap."
            ],
            "example": "Claim: the box cannot be opened once the rover has landed. 'The box is the size of a suitcase' is true and proves nothing. 'There is no one on Mars to plug anything back in' is proof."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea that develops across the whole build sheet?",
              "choices": [
                "The generator turns the heat of a slowly decaying lump of metal into about a hundred watts, day and night, whether the sun is out or not.",
                "Cold is the greatest danger any machine ever faces.",
                "The rover is built around keeping one small box warm, and the power for it is so small that everything else has to take turns.",
                "The rover can drive, drill, run the cameras, heat the box and send pictures all at once, because the generator makes power day and night."
              ],
              "answer": 2,
              "hint": "A warm box, a hundred watts, and a schedule. Ask what those three are all parts of, and cross off the choice the last paragraph denies outright.",
              "skill": "Central idea and evidence",
              "evidence": "The whole rover is built around a warm box the size of a suitcase."
            },
            {
              "q": "Claim: the rover's power supply does not depend on the weather or the time of day. Which sentence from the sheet best supports that claim?",
              "choices": [
                "It makes about a hundred watts, roughly the power of one old light bulb, and every instrument on the rover has to share it.",
                "The rover cannot drive, drill, run the cameras, heat the box and talk to Earth all at once, so the computer runs a schedule: warm up, drive for an hour, stop, take pictures, sleep.",
                "The rover's power comes from a generator that turns the heat of a lump of slowly decaying metal into electricity, day and night, whether the sun is out or not.",
                "A winter night at the rover's landing site drops to more than a hundred degrees below zero."
              ],
              "answer": 2,
              "hint": "How much power there is says nothing about where it comes from. Find the sentence that names the source and then says when it works.",
              "skill": "Finding details",
              "evidence": "The rover's power comes from a generator that turns the heat of a lump of slowly decaying metal into electricity, day and night, whether the sun is out or not."
            },
            {
              "q": "Why does the first paragraph give the temperatures on Mars before it says anything about how the box is built?",
              "choices": [
                "It explains how the seasons on Mars work.",
                "It compares a Martian summer with a summer on Earth, so a reader can picture seventy degrees at the ground and freezing a meter up.",
                "It shows what those temperatures do to electronics, so the box's one job sounds necessary rather than fussy.",
                "It lists the instruments that live inside the box."
              ],
              "answer": 2,
              "hint": "Read the two sentences about what the cold does to electronics and to batteries. Ask why a writer would put them before describing any part of the machine.",
              "skill": "Author's purpose and structure",
              "evidence": "Electronics that get that cold stop working. Batteries that freeze never come back."
            },
            {
              "q": "The sheet says the generator makes about a hundred watts, 'roughly the power of one old light bulb'. What is that comparison telling you?",
              "choices": [
                "The generator gives off light as well as electricity, about as much light as one old bulb would",
                "The rover carries an old bulb for testing the power",
                "A hundred watts is more power than most machines would ever need, so the rover has plenty of it to share around",
                "A hundred watts is a very small amount of power for a whole machine to live on"
              ],
              "answer": 3,
              "hint": "Nobody is fitting a bulb to the rover. Ask why the writer picked one of the least impressive things a hundred watts could run, then read what has to share it.",
              "skill": "Word meanings",
              "evidence": "It makes about a hundred watts, roughly the power of one old light bulb, and every instrument on the rover has to share it."
            },
            {
              "q": "Paragraphs 2 and 3 together explain why the computer runs a schedule instead of leaving everything switched on. Why does it?",
              "choices": [
                "There is only one small supply of power, and heating the box is the one job that cannot be dropped, so everything else waits its turn.",
                "The heaters are only allowed to run during the Martian night, when the box is coldest, so the day's power can all go to driving and to the cameras.",
                "The generator has to be rested between one job and the next.",
                "The cameras use more power than all the other instruments put together, so the computer has to switch them off before anything else on the rover can run."
              ],
              "answer": 0,
              "hint": "Paragraph two tells you how much power there is and who shares it. Paragraph three tells you what cannot happen at once. Put the supply next to the demand.",
              "skill": "Reading between the lines",
              "evidence": "The rover cannot drive, drill, run the cameras, heat the box and talk to Earth all at once, so the computer runs a schedule: warm up, drive for an hour, stop, take pictures, sleep."
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
              "q": "The engineer carries 9 heaters on each of 5 trips. How many heaters is that?",
              "answer": "45",
              "hint": "5 × 9.",
              "skill": "Multiplying"
            },
            {
              "q": "Every box takes 5 heaters. The engineer has 45 heaters. How many boxes can be filled?",
              "answer": "9",
              "hint": "How many 5s fit into 45?",
              "skill": "Dividing"
            },
            {
              "q": "The engineer counted 344 watts in the morning and 467 in the evening. How many more in the evening?",
              "answer": "123",
              "hint": "467 − 344.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "Which is bigger, 2/6 or 5/6? (write a fraction)",
              "answer": "5/6",
              "hint": "Same bottom, so the bigger top wins.",
              "skill": "Fractions"
            },
            {
              "q": "The target is 1,000 watts and 411 are logged. How many short is that?",
              "answer": "589",
              "hint": "1,000 − 411.",
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
            "example": "4 × (9 − 2) + 5: parentheses first, 9 − 2 = 7; then 4 × 7 = 28; then add 5 to get 33."
          },
          "problems": [
            {
              "q": "The engineer has 6 meters of cable. Each heater needs 3/5 of a meter. How many heaters can the engineer wire?",
              "answer": "10",
              "hint": "Dividing by 3/5 means multiplying by its flip, 5/3: 6 × 5/3.",
              "skill": "Fractions"
            },
            {
              "q": "Out of every 100 watts, 10 are set aside. Out of 240 watts, how many is that?",
              "answer": "24",
              "hint": "240 is 2.4 hundreds, so 2.4 × 10.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The engineer divides 81 minutes of work in the ratio 4 to 5. How many minutes is the larger share?",
              "answer": "45",
              "hint": "9 parts in all, so one part is 9 minutes.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The engineer works out (7 − 3) × (5 + 7). What is it?",
              "answer": "48",
              "hint": "Each set of parentheses first, then multiply the two answers.",
              "skill": "Order of operations"
            },
            {
              "q": "Solve for x: 330 = x − 17",
              "answer": "347",
              "hint": "Add 17 to both sides.",
              "skill": "Equations"
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
            "example": "x ÷ 7 − 11 = 2, so x ÷ 7 = 13, so x = 91."
          },
          "problems": [
            {
              "q": "The job needs 84 minutes in all, at 3.5 minutes for each part. One part is already done. How many parts are left?",
              "answer": "23",
              "hint": "84 ÷ 3.5 = 24 in all, then take the finished one off.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The rule says the heater's power may change by no more than 50%. Starting from 200 watts, what is the highest the rule allows, in watts?",
              "answer": "300",
              "hint": "50% of 200 is 100. Add it on.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The gauge drops 11 every hour for 3 hours. What is the total change? (Write a drop as a negative number.)",
              "answer": "-33",
              "accept": [
                "−33"
              ],
              "hint": "3 hours of −11 each: 3 × (−11). One minus sign, so the answer is negative.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: x ÷ 9 − 3 = 5",
              "answer": "72",
              "hint": "Add 3 to both sides, then multiply by 9.",
              "skill": "Equations"
            },
            {
              "q": "A round dial measures 15.7 centimeters around the edge. Using 3.14 for pi, how many centimeters is it across?",
              "answer": "5",
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
            "example": "Through (0, 2) and (6, 14): y rises 12 while x runs 6, so the slope is 12 ÷ 6 = 2."
          },
          "problems": [
            {
              "q": "A line passes through (0, 8) and (9, 53). What is its slope?",
              "answer": "5",
              "hint": "Slope is the rise over the run: 45 ÷ 9.",
              "skill": "Linear relationships"
            },
            {
              "q": "A square pad has an area of 144 square meters. How many meters is it around the edge?",
              "answer": "48",
              "hint": "One side is the square root of 144, then four sides.",
              "skill": "Powers and roots"
            },
            {
              "q": "The engineer goes 7 meters east and then 24 meters north. In a straight line, how far is that from the start, in meters?",
              "answer": "25",
              "hint": "The two legs make a right angle: 7² + 24² = 625.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "For what value of x do 10x + 10 and 4x + 34 come to the same number?",
              "answer": "4",
              "hint": "Set them equal, take 4x off both sides, then take 10 off.",
              "skill": "Equations"
            },
            {
              "q": "Two round tanks each have a radius of 10 meters and are 6 meters deep. Using 3.14 for pi, what is their total volume in cubic meters?",
              "answer": "3768",
              "hint": "One tank is 3.14 × 10 × 10 × 6 = 1,884. Then double it.",
              "skill": "Area and perimeter"
            }
          ]
        }
      },
      "orders": {
        "lesson": {
          "title": "Watch the sign",
          "points": [
            "Below zero is negative. Keep the word.",
            "Read all the steps before the first."
          ],
          "example": "'Start at 100 below and warm by 130' lands at 30 above."
        },
        "skill": "Following directions",
        "steps": [
          "Write the degrees a Mars summer afternoon can reach at the ground: 70.",
          "Multiply by the number of times the engineer checks every wire: 2.",
          "Take away the watts the generator makes: 100.",
          "Skip step 3. Watts are not degrees, so nothing comes off the total you had at the end of step 2.",
          "Add 1 for the one meter above the ground where the air is still freezing. Type the result."
        ],
        "prompt": "Your answer:",
        "answer": "141",
        "hint": "Step 4 undoes step 3. The total you had at the end of step 2 is the one step 5 works on."
      }
    },
    {
      "id": "rover-3",
      "title": "The Mast",
      "recon": {
        "lesson": {
          "title": "Two of something",
          "points": [
            "When the sheet says 'two' of a part and explains why, the reason is a detail a question will want.",
            "'How far apart' and 'how high' are different numbers. Keep them apart.",
            "A word about seeing is defined by how the eyes work."
          ],
          "example": "'Two locks on the door, so one can fail and it still stays shut.' Why two? So one can fail."
        },
        "title": "Build Sheet: Eyes on a Pole",
        "passage": [
          "The mast is the rover's neck, a pole two meters tall that rises from the front of the body. It carries the cameras at the height of a tall person's eyes. The mast folds flat for the trip to Mars. On the first morning after landing, it stands up. One of the first things a rover does is raise its mast and take a picture of its own wheels to make sure they are all there.",
          "At the top of the mast are two cameras side by side, about a ruler's length apart. Two is not one spare. Because the cameras see the same rock from two slightly different angles, the computer can work out how far away the rock is. Your two eyes do the same thing. They tell you how far away a cup is on a table. That is called stereo vision, and it is how the rover knows the difference between a pebble and a boulder before it drives into one. A third camera next to them can zoom in to read the layers in a cliff a kilometer away.",
          "The mast also carries a laser. It fires at a rock up to seven meters away. For a fraction of a second, it turns a speck of the rock into glowing gas. A small telescope reads the color of the glow to tell what the rock is made of. The mast is fitted today: the pole, the motor that turns it, the camera head, and a thin cable with sixty wires inside that has to run up the pole without ever catching. The engineer turns the mast a full circle by hand, twice, and watches the cable the whole way."
        ],
        "questions": [
          {
            "q": "How tall is the mast?",
            "choices": [
              "Two meters",
              "Half a meter, like the wheel",
              "Seven meters, the laser's reach",
              "A kilometer, the distance to the cliff"
            ],
            "answer": 0,
            "hint": "The first sentence of paragraph 1.",
            "skill": "Finding details"
          },
          {
            "q": "What is one of the first things a rover does after landing?",
            "choices": [
              "Drive off to look for rocks",
              "Raise its mast and photograph its own wheels",
              "Fire its laser at a rock",
              "Send a message home to Earth"
            ],
            "answer": 1,
            "hint": "The last sentence of paragraph 1.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 2, what is 'stereo vision'?",
            "choices": [
              "Seeing a rock in its true colors instead of in black and white, the way older cameras did",
              "Using the third camera on the mast to zoom in and read the layers in a cliff a kilometer away",
              "Using two cameras at slightly different angles to work out how far away things are",
              "Seeing in the dark, so that the rover can keep driving after the sun has gone down at night"
            ],
            "answer": 2,
            "hint": "The sentence 'That is called stereo vision' comes right after the explanation.",
            "skill": "Word meanings"
          },
          {
            "q": "Why does the engineer turn the mast a full circle by hand, twice?",
            "choices": [
              "Because the motor is broken",
              "To take pictures",
              "To watch that the cable with sixty wires does not catch",
              "To make sure the motor can turn a full circle"
            ],
            "answer": 2,
            "hint": "The last two sentences of paragraph 3.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 3 mostly about?",
            "choices": [
              "The height of the mast and how it folds flat",
              "How two cameras let the rover judge distance",
              "The laser and the mast-fitting work",
              "The first picture a rover takes of its wheels"
            ],
            "answer": 2,
            "hint": "Paragraph 3 starts with the laser and ends with today's fitting.",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Mast math",
          "points": [
            "Meters to centimeters: multiply by 100.",
            "Volume of a box: length × width × height. 10 × 3 × 2 = 60 cubic centimeters.",
            "Meters and centimeters: change both to centimeters before you subtract. 5 meters is 500 centimeters.",
            "Two-step: change minutes to seconds first, then see how many gaps between pictures fit."
          ],
          "example": "3 meters × 100 = 300 centimeters."
        },
        "problems": [
          {
            "q": "The mast is 2 meters tall. How many centimeters is that?",
            "answer": "200",
            "hint": "2 × 100.",
            "skill": "Multiplying"
          },
          {
            "q": "The rover's sample box is 6 centimeters long, 5 centimeters wide and 4 centimeters tall. How many cubic centimeters does it hold?",
            "answer": "120",
            "hint": "Length × width × height: 6 × 5 first, then times 4.",
            "skill": "Volume"
          },
          {
            "q": "The engineer spent 180 minutes checking the cable. How many hours is that?",
            "answer": "3",
            "hint": "180 ÷ 60.",
            "skill": "Dividing"
          },
          {
            "q": "The two cameras take 1 picture each every 30 seconds. How many pictures do the two take together in 5 minutes?",
            "answer": "20",
            "hint": "5 minutes is 300 seconds. 300 ÷ 30 = 10 each. Then 10 × 2.",
            "skill": "Multi-step problems"
          },
          {
            "q": "The laser reaches 7 meters. The rock is 4 meters and 50 centimeters away. How many centimeters of range are to spare?",
            "answer": "250",
            "hint": "700 − 450.",
            "skill": "Adding and subtracting"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "The paragraph's job",
            "points": [
              "Every paragraph has a job: to set something up, to explain a cause, to give an example, or to show why a part exists at all.",
              "Find the job by deleting the paragraph in your head. What would you no longer know? That missing thing is the job.",
              "A choice that only retells the paragraph has named nothing. Look for the one that says why it is on the page."
            ],
            "example": "A sheet about a telescope adds a paragraph on how far away the nearest star is. Its job is not to teach astronomy. It is to explain why the mounting has to be so exact."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea of the whole build sheet?",
              "choices": [
                "Everything carried on the mast is there so that the rover can find out what is around it before it moves or touches anything.",
                "The mast folds flat for the journey to Mars and stands up on the first morning after landing, before the rover photographs its own wheels.",
                "Cameras are the most important part of any machine that has to work far from the people who built it, whatever it was sent there to do.",
                "The second camera on the mast is carried in case the first one fails, so the rover can still take pictures after one of them has stopped working."
              ],
              "answer": 0,
              "hint": "Two cameras that judge distance, a third that reads a distant cliff, and a laser that reads a rock without touching it. Ask what all three are for, and cross off the choice the sheet denies in five words.",
              "skill": "Central idea and evidence",
              "evidence": "That is called stereo vision, and it is how the rover knows the difference between a pebble and a boulder before it drives into one."
            },
            {
              "q": "Claim: the two cameras together can do something neither of them could do alone. Which sentence from the sheet best supports that claim?",
              "choices": [
                "At the top of the mast are two cameras side by side, about a ruler's length apart.",
                "Because the cameras see the same rock from two slightly different angles, the computer can work out how far away the rock is.",
                "A third camera next to them can zoom in to read the layers in a cliff a kilometer away.",
                "The mast is the rover's neck, a pole two meters tall that rises from the front of the body."
              ],
              "answer": 1,
              "hint": "Where the cameras sit is not what they achieve. Find the sentence that names something the pair works out that a single camera could not.",
              "skill": "Finding details",
              "evidence": "Because the cameras see the same rock from two slightly different angles, the computer can work out how far away the rock is."
            },
            {
              "q": "Why does the sheet mention that one of the first things a rover does is photograph its own wheels?",
              "choices": [
                "It explains how the mast is folded flat for the journey to Mars and how the motor at its base stands it upright on the first morning.",
                "It lists the cameras carried at the top of the mast, the two that see in stereo and the third one that can zoom in on a distant cliff.",
                "It shows in one small example what the mast is for: checking, before anything else, that the machine is all there.",
                "It compares the landing of one rover with the landing of another, so a reader can see which of them sent its first picture home the soonest."
              ],
              "answer": 2,
              "hint": "The detail sits in a paragraph about what the mast is. Ask what a picture of your own wheels tells you, and why that would be worth doing first.",
              "skill": "Author's purpose and structure",
              "evidence": "One of the first things a rover does is raise its mast and take a picture of its own wheels to make sure they are all there."
            },
            {
              "q": "The sheet calls the mast 'the rover's neck'. What does that name tell you about what it does?",
              "choices": [
                "It is the narrowest part of the whole machine",
                "It is what joins the wheels to the body",
                "It holds the cameras up high and turns them to look around",
                "It is the part most likely to snap in the cold"
              ],
              "answer": 2,
              "hint": "Ask what your own neck actually does for your eyes, in two words. Then check both of those against the last sentence of the sheet.",
              "skill": "Word meanings",
              "evidence": "The engineer turns the mast a full circle by hand, twice, and watches the cable the whole way."
            },
            {
              "q": "Paragraphs 2 and 3 together explain why the cable has to run up the pole without ever catching. Why does it?",
              "choices": [
                "The cable carries the power for the heaters inside the warm box, so a snag would let the computer and the batteries freeze before morning.",
                "A cable that caught would drag the mast back down and fold it flat against the body, the way it was folded for the journey to Mars.",
                "Everything on the mast has to be aimed at something, and a cable that snagged would stop the rover looking where it needs to.",
                "The laser can only fire while the cable is perfectly straight, because a bend in the cable would weaken the beam on its way up the pole."
              ],
              "answer": 2,
              "hint": "Paragraph two and paragraph three both describe things that only work when pointed at something. The last sentence tells you what the engineer checks. Join those.",
              "skill": "Reading between the lines",
              "evidence": "The mast is fitted today: the pole, the motor that turns it, the camera head, and a thin cable with sixty wires inside that has to run up the pole without ever catching."
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
              "q": "The engineer counts 9 masts with 9 cameras in each. How many cameras is that?",
              "answer": "81",
              "hint": "9 × 9.",
              "skill": "Multiplying"
            },
            {
              "q": "81 cameras are shared equally among 9 masts. How many cameras in each mast?",
              "answer": "9",
              "hint": "How many 9s make 81?",
              "skill": "Dividing"
            },
            {
              "q": "The engineer counted 204 pictures, then found 43 more, then 16 more. How many pictures in all?",
              "answer": "263",
              "hint": "204 + 43 first. Then add 16.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "The engineer finished 1/6 of the day's work before the break and 4/6 after. What fraction is done? (write a fraction)",
              "answer": "5/6",
              "hint": "Same bottom. Add the tops.",
              "skill": "Fractions"
            },
            {
              "q": "A camera platform is 5 squares wide and 7 squares long. How many squares is that?",
              "answer": "35",
              "hint": "5 rows of 7, so 5 × 7.",
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
            "example": "4 × (9 − 2) + 5: parentheses first, 9 − 2 = 7; then 4 × 7 = 28; then add 5 to get 33."
          },
          "problems": [
            {
              "q": "The engineer has 15.6 minutes to fit. Each part takes 1.2 minutes. How many parts is that enough for?",
              "answer": "13",
              "hint": "Move both points 1 place to the right: 156 ÷ 12.",
              "skill": "Decimals"
            },
            {
              "q": "Of 40 pictures, 50% are set aside. How many is that?",
              "answer": "20",
              "hint": "50% of 40: 50% is 50/100.",
              "skill": "Ratios and percent"
            },
            {
              "q": "Cameras and pictures are kept in the ratio 3 to 5. If there are 9 cameras, how many pictures?",
              "answer": "15",
              "hint": "9 ÷ 3 = 3 groups. Each group has 5 pictures.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The engineer works out 8 × (11 − 2) + 10. What is it?",
              "answer": "82",
              "hint": "Parentheses first, then multiply, then add.",
              "skill": "Order of operations"
            },
            {
              "q": "Solve for x: x + 442 = 1,000",
              "answer": "558",
              "hint": "Subtract 442 from both sides.",
              "skill": "Equations"
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
            "example": "3x + 7 = 31, so 3x = 24, so x = 8."
          },
          "problems": [
            {
              "q": "8 parts needed 28 minutes altogether. How many minutes is that for one part?",
              "answer": "3.5",
              "hint": "A rate is the total shared out: 28 ÷ 8.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The engineer counted 320 pictures on the first pass. On the second pass the number had fallen by 50%. How many pictures is that?",
              "answer": "160",
              "hint": "50% of 320 is 160. Then take it off.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The parts list is short 16 cameras, written −16. The engineer adds 21 cameras, then takes out 9 cameras. What does the list read now?",
              "answer": "-4",
              "accept": [
                "−4"
              ],
              "hint": "Start at −16, add 21 to get 5, then subtract 9.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: 9x + 22 = 121",
              "answer": "11",
              "hint": "Take 22 off both sides first, then divide by 9.",
              "skill": "Equations"
            },
            {
              "q": "On the plan, 1 cm stands for 8 meters. The test yard measures 5 cm on the plan. How long is it really, in meters?",
              "answer": "40",
              "hint": "Every cm is 8 m, so 5 × 8.",
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
              "q": "The engineer starts with 20 pictures and adds 7 more every hour. After 6 hours, how many pictures are there?",
              "answer": "62",
              "hint": "This is the straight-line rule y = mx + b: 7 × 6 + 20.",
              "skill": "Linear relationships"
            },
            {
              "q": "Each row holds 8² pictures. There are 6 rows. How many pictures in all?",
              "answer": "384",
              "hint": "8² means 8 × 8 = 64. Then × 6.",
              "skill": "Powers and roots"
            },
            {
              "q": "The engineer runs a cable from the top of an 8-meter pole to a point 15 meters away on the ground. How long is the cable, in meters?",
              "answer": "17",
              "hint": "Right triangle: a² + b² = c². 8² + 15² = 64 + 225 = 289. The cable is the square root of that.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "Solve for x: 8x + 3 = 4x + 43",
              "answer": "10",
              "hint": "Take 4x off both sides to get 4x + 3 = 43, then take 3 off both sides and divide.",
              "skill": "Equations"
            },
            {
              "q": "The engineer writes the total number of pictures as 8 × 10^3. Written out in full, what number is that?",
              "answer": "8000",
              "hint": "10^3 is 1 with 3 zeros after it: 1,000. Then × 8.",
              "skill": "Powers and roots"
            }
          ]
        }
      },
      "orders": {
        "lesson": {
          "title": "Count the letters",
          "points": [
            "Write the word and count on paper.",
            "Then follow the arithmetic exactly."
          ],
          "example": "M-A-S-T is four letters."
        },
        "skill": "Following directions",
        "steps": [
          "Write the word STEREO and count its letters.",
          "Multiply that count by the 2 cameras at the top of the mast that work as a pair, and write the total down.",
          "Now a second total. Add the laser's range in meters, 7, to the mast's height in meters, 2.",
          "You have a total from step 2 and a total from step 3.",
          "Compare them and type the bigger of the two, not the smaller."
        ],
        "prompt": "Your answer:",
        "answer": "12",
        "hint": "STEREO has six letters. Step 5 compares your step 2 total with your step 3 total before you type anything."
      }
    },
    {
      "id": "rover-4",
      "title": "The Arm",
      "recon": {
        "lesson": {
          "title": "Parts of a part",
          "points": [
            "When the sheet lists what is on the end of the arm, each item is a detail.",
            "'How many' questions want the exact count on the sheet.",
            "Compare to a body: the sheet uses your arm to explain the rover's. Use it."
          ],
          "example": "'A hammer, a saw and a drill hang on the wall.' How many tools? Count them: three."
        },
        "title": "Build Sheet: A Hand That Drills",
        "passage": [
          "The arm is two meters long and has five joints: two at the shoulder to swing it side to side and up and down, one at the elbow, and two at the wrist to turn and tilt the hand. Fully stretched it can reach a rock on the ground in front of the rover or hold an instrument against a cliff face. It can put its hand back in the same place, within the width of a pencil line, every time. It is slow. The arm takes several minutes to move from folded to fully out, because on Mars nothing is in a hurry and a fast mistake cannot be fixed.",
          "The hand is a turret, a round head that spins to bring one of its tools to the front. There is a drill that cuts a core of rock the size of a piece of chalk. It drops the core into a sample tube. There is a brush to sweep dust off a rock so the cameras can see the real surface. There is a camera that can focus closer than a person's eye. And there is an instrument that reads what a rock is made of by holding a small sensor against it for hours.",
          "The drill is the reason the arm exists. Rocks on the surface of Mars have been baked by radiation for billions of years, but a few centimeters down the rock is better protected. If there was ever life on Mars, that is where its traces would be. Each core goes into a tube, and the tube is sealed. The tubes are left on the ground in a neat row for a later mission to collect. Today the arm goes on: five joints, five motors, and a turret that has to spin a full circle without touching the wheels."
        ],
        "questions": [
          {
            "q": "How many joints does the arm have?",
            "choices": [
              "Two",
              "Five",
              "Three",
              "Six"
            ],
            "answer": 1,
            "hint": "The first sentence of paragraph 1.",
            "skill": "Finding details"
          },
          {
            "q": "What does the brush on the turret do?",
            "choices": [
              "Sweeps dust off a rock so the cameras can see the surface",
              "Marks the rock with a painted line so the cameras can find it again",
              "Sweeps the dust off the wheels so the cleats can bite into the sand",
              "Digs a shallow hole in the sand so the drill can reach the rock below"
            ],
            "answer": 0,
            "hint": "Paragraph 2, the sentence with 'brush'.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 2, what is a 'turret'?",
            "choices": [
              "A small round tower on a castle wall where a lookout stands and watches",
              "The sealed tube that a core of rock is dropped into",
              "The drill bit that cuts a core of rock about the size of a piece of chalk",
              "A round head on the arm that spins to bring a tool to the front"
            ],
            "answer": 3,
            "hint": "The first sentence of paragraph 2.",
            "skill": "Word meanings"
          },
          {
            "q": "Why does the drill go a few centimeters into the rock instead of scraping the surface?",
            "choices": [
              "Because the surface rock is too hard to scrape",
              "Because the tubes are long and must be filled",
              "Because the brush on the arm cannot reach it",
              "Because only deeper rock is protected from radiation"
            ],
            "answer": 3,
            "hint": "Paragraph 3, the second and third sentences.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 1 mostly about?",
            "choices": [
              "The arm's joints, reach, and why it moves slowly",
              "The drill that cuts a core of rock and drops it in a tube",
              "The sample tubes left on the ground for a later mission",
              "The camera on the turret that focuses closer than an eye"
            ],
            "answer": 0,
            "hint": "Paragraph 1 describes the arm itself and ends with why it is slow.",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Arm math",
          "points": [
            "Joints times motors: one motor per joint.",
            "Minutes to unfold times moves in a day: multiply.",
            "Cores per tube: one each; tubes on the rover ÷ cores per week.",
            "Same bottom: add the tops. 1/6 + 4/6 = 5/6."
          ],
          "example": "4 joints with 1 motor each is 4 motors. Add 3 more motors and it is 7."
        },
        "problems": [
          {
            "q": "The arm has 5 joints and each joint has 1 motor. The rover also has 6 wheel motors. How many motors is that in all?",
            "answer": "11",
            "hint": "5 + 6.",
            "skill": "Adding and subtracting"
          },
          {
            "q": "The arm takes 4 minutes to unfold and 4 to fold. It does this 6 times in a day. How many minutes is that?",
            "answer": "48",
            "hint": "4 + 4 = 8 minutes each time. Then 8 × 6.",
            "skill": "Multi-step problems"
          },
          {
            "q": "The rover carries 40 sample tubes. It fills 2 a week. How many weeks until all the tubes are full?",
            "answer": "20",
            "hint": "40 ÷ 2.",
            "skill": "Dividing"
          },
          {
            "q": "The sensor is held against a rock for 2/8 of the day, then moved and held for 5/8 of the day. What fraction of the day is that together? (write a fraction)",
            "answer": "7/8",
            "hint": "Same bottom. Add the tops.",
            "skill": "Fractions"
          },
          {
            "q": "The arm is 2 meters long. Fully stretched, its hand is 200 centimeters from the shoulder. The rock is 185 centimeters away. How many centimeters of reach are to spare?",
            "answer": "15",
            "hint": "200 − 185.",
            "skill": "Adding and subtracting"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "The sentence hands you the word",
            "points": [
              "A word is doing one job in one sentence. Work out that job, not the entry it would get in a dictionary.",
              "Some phrases are painting a picture or giving a measurement in a homely way. Say plainly what they are showing you.",
              "Put your pick back into the sentence. If the sentence now says something the sheet never said, it is the wrong pick."
            ],
            "example": "'It can put its hand back in the same place every time.' Nothing has hands. The phrase is telling you the arm ends in a tool head, and that it returns to a spot exactly."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea that develops across the whole build sheet?",
              "choices": [
                "The turret is a round head that spins to bring one of its four tools to the front, a drill, a brush, a close-up camera and a sensor that reads rock.",
                "The arm is built slow and exact because everything it is for, above all the drilling, depends on putting a tool in precisely the right place.",
                "The turret's four tools matter equally, and the arm is there to carry them to a rock.",
                "The arm is built to move fast so that it can cover more ground in a day, because a mission that spends minutes on every move will never finish its work."
              ],
              "answer": 1,
              "hint": "Five joints, a hand that returns within a pencil line, and a drill that reaches a few centimeters down. Ask what all three serve, and cross off the choice the first paragraph denies.",
              "skill": "Central idea and evidence",
              "evidence": "The drill is the reason the arm exists."
            },
            {
              "q": "Claim: the outside of a Martian rock is no use for the question the mission is asking. Which sentence from the sheet best supports that claim?",
              "choices": [
                "Rocks on the surface of Mars have been baked by radiation for billions of years, but a few centimeters down the rock is better protected.",
                "Today the arm goes on: five joints, five motors, and a turret that has to spin a full circle without touching the wheels.",
                "The arm is two meters long and has five joints: two at the shoulder to swing it side to side and up and down, one at the elbow, and two at the wrist to turn and tilt the hand.",
                "The tubes are left on the ground in a neat row for a later mission to collect."
              ],
              "answer": 0,
              "hint": "Saying the drill matters is not saying what is wrong with the surface. Find the sentence that says what billions of years have done to the outside of a rock.",
              "skill": "Finding details",
              "evidence": "Rocks on the surface of Mars have been baked by radiation for billions of years, but a few centimeters down the rock is better protected."
            },
            {
              "q": "Why does the sheet say 'It is slow.' and then immediately give a reason?",
              "choices": [
                "It compares the rover's arm with a person's arm, matching up the shoulder, the elbow and the wrist one at a time.",
                "It lists the five joints in the order they move.",
                "It explains how the five motors in the arm are wired back to the warm box, and which one of them draws the most power while the arm moves.",
                "It answers the obvious complaint before anyone can make it, by turning the slowness into a safeguard."
              ],
              "answer": 3,
              "hint": "Three words on their own, right after a sentence about how exact the arm is. Ask what a reader is likely to think at that moment, and what the next sentence does about it.",
              "skill": "Author's purpose and structure",
              "evidence": "The arm takes several minutes to move from folded to fully out, because on Mars nothing is in a hurry and a fast mistake cannot be fixed."
            },
            {
              "q": "The sheet says the arm can return to the same place 'within the width of a pencil line'. What is that phrase telling you?",
              "choices": [
                "How thin the tools on the turret have been made",
                "How far the arm can stretch out in front of the rover",
                "How small the core of rock the drill cuts is",
                "How exactly the arm can come back to a spot it has already been"
              ],
              "answer": 3,
              "hint": "No pencil is involved. Read what the phrase is attached to: putting its hand back in the same place, every time. The phrase is measuring how well.",
              "skill": "Word meanings",
              "evidence": "It can put its hand back in the same place, within the width of a pencil line, every time."
            },
            {
              "q": "Paragraphs 2 and 3 together explain why the drill is called the reason the arm exists, when the turret carries four tools. Why is it?",
              "choices": [
                "The other tools all work on rock that has been baked for billions of years; only the drill reaches the part where traces could still be.",
                "The drill is the largest and heaviest tool on the turret, so the five joints and their motors all had to be made strong enough to hold it against a rock.",
                "The drill is the only tool that needs all five joints working at once, so the whole arm had to be built around the reach that the drilling demands.",
                "The other three tools were added to the turret after the drill had already been designed, so the brush and the cameras were fitted around the space it left."
              ],
              "answer": 0,
              "hint": "Paragraph two lists what the tools do, and every one of them works on a surface. Paragraph three says what is wrong with surfaces. Put the list next to the problem.",
              "skill": "Reading between the lines",
              "evidence": "Rocks on the surface of Mars have been baked by radiation for billions of years, but a few centimeters down the rock is better protected."
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
              "q": "The engineer counted 8 joints yesterday and three times as many today. How many joints today?",
              "answer": "24",
              "hint": "Three times 8: 8 + 8 + 8.",
              "skill": "Multiplying"
            },
            {
              "q": "The engineer packs 72 joints into arms of 8. How many arms is that?",
              "answer": "9",
              "hint": "How many 8s make 72?",
              "skill": "Dividing"
            },
            {
              "q": "The engineer starts with 432 sample tubes and uses 134. How many are left?",
              "answer": "298",
              "hint": "432 − 134.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "3/8 of the day's work was done yesterday. What fraction is still to do? (write a fraction)",
              "answer": "5/8",
              "hint": "The whole job is 8/8. Take 3/8 off it.",
              "skill": "Fractions"
            },
            {
              "q": "The tally stood at 427 sample tubes and 500 more were added. What is the tally now?",
              "answer": "927",
              "hint": "427 + 500.",
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
              "q": "The battery is 1/2 charged. Each test of the arm uses 1/8 of a full charge. How many tests can the engineer run?",
              "answer": "4",
              "hint": "Write 1/2 with the same bottom as 1/8: 1/2 = 4/8. How many 1/8s is that?",
              "skill": "Fractions"
            },
            {
              "q": "16 of the 80 sample tubes are set aside. What percent is that? (write just the number)",
              "answer": "20",
              "accept": [
                "20%"
              ],
              "hint": "16 out of 80, then out of 100.",
              "skill": "Ratios and percent"
            },
            {
              "q": "For every 4 joints there are 5 sample tubes. There are 30 sample tubes. How many joints?",
              "answer": "24",
              "hint": "30 ÷ 5 = 6 groups. Each group has 4 joints.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The engineer works out 14 + 5 × 12. What is it?",
              "answer": "74",
              "hint": "Multiply before you add.",
              "skill": "Order of operations"
            },
            {
              "q": "Solve for x: 750 − x = 136",
              "answer": "614",
              "hint": "x is what is left when 136 is taken off 750.",
              "skill": "Equations"
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
            "example": "65 − 3x = 17, so 3x = 65 − 17 = 48, so x = 16."
          },
          "problems": [
            {
              "q": "One part needs 2.5 minutes. How many minutes do 20 parts need?",
              "answer": "50",
              "hint": "20 × 2.5.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The engineer counted 80 sample tubes on the first pass and 120 on the second. By what percent did the count change? (write just the number)",
              "answer": "50",
              "accept": [
                "50%"
              ],
              "hint": "The change is 40. 40 out of 80, then out of 100.",
              "skill": "Ratios and percent"
            },
            {
              "q": "Over 5 hours the gauge dropped 70 in all, the same amount each hour. What was the change each hour? (Write a drop as a negative number.)",
              "answer": "-14",
              "accept": [
                "−14"
              ],
              "hint": "Share −70 into 5 equal parts: −70 ÷ 5. One minus sign, so the answer is negative.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: 31 − 2x = 11",
              "answer": "10",
              "hint": "Move 2x to the right and 11 to the left: 2x = 20.",
              "skill": "Equations"
            },
            {
              "q": "A rover wheel has a radius of 25 centimeters. Using 3.14 for pi, how many centimeters is it around the edge?",
              "answer": "157",
              "hint": "Across is 2 × 25 = 50. Then × 3.14.",
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
            "example": "Start with 45 and use 2 an hour: after 6 hours, 45 − 2 × 6 = 33 are left."
          },
          "problems": [
            {
              "q": "The engineer starts with 32 sample tubes and uses 8 every hour. How many are left after 3 hours?",
              "answer": "8",
              "hint": "8 × 3 = 24 used, taken off 32.",
              "skill": "Linear relationships"
            },
            {
              "q": "What is the square root of 81?",
              "answer": "9",
              "hint": "What number times itself makes 81?",
              "skill": "Powers and roots"
            },
            {
              "q": "A 17-meter cable runs from the top of a post to a point 15 meters away on the ground. How tall is the post, in meters?",
              "answer": "8",
              "hint": "a² = c² − b² = 289 − 225 = 64. Then take the square root.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "Solve for x: 6x = 2x + 16",
              "answer": "4",
              "hint": "Take 2x off both sides: 4x = 16. Then divide by 4.",
              "skill": "Equations"
            },
            {
              "q": "A round tank has a radius of 10 meters and holds 1,256 cubic meters. Using 3.14 for pi, how many meters deep is it?",
              "answer": "4",
              "hint": "The floor's area is 3.14 × 10 × 10 = 314. Divide the volume by that.",
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
          "example": "'Count only the tools that touch the rock' means skip the camera."
        },
        "skill": "Following directions",
        "steps": [
          "Write the number of joints in the arm: 5.",
          "Multiply by the number of motors, one for each joint: 5.",
          "Add the number of tools on the turret: 4.",
          "Add the arm's length in meters: 2.",
          "Type the result, unless a later mission is the one that picks the sealed sample tubes up, in which case type LATER instead. (Paragraph 3 says what happens to the tubes.)"
        ],
        "prompt": "Your answer:",
        "answer": "LATER",
        "accept": [
          "later",
          "Later",
          "later.",
          "LATER."
        ],
        "hint": "Work steps 2, 3 and 4 in order from the 5 joints. Then step 5 asks who collects the sealed tubes — paragraph 3 says."
      }
    },
    {
      "id": "rover-5",
      "title": "Radio and First Drive",
      "recon": {
        "lesson": {
          "title": "Putting the build together",
          "points": [
            "The last sheet looks back over the build. Questions will ask what came in what order.",
            "A 'how long' question about radio wants minutes, not miles.",
            "The main idea of the closing paragraph is what the writer wants you to keep."
          ],
          "example": "'Socks, shoes, coat, hat.' What came last? The hat."
        },
        "title": "Build Sheet: Eleven Minutes Each Way",
        "passage": [
          "The last part is the radio. The radio is why no one drives a rover with a joystick. Mars is a long way from Earth. A radio signal moves at the speed of light. Even so, it takes between three and twenty-two minutes to get there. How long depends on where the two planets are in their orbits. Today it is eleven minutes each way. A driver who saw a cliff on the screen and hit the brakes would be stopping a rover that had already gone over the edge eleven minutes ago.",
          "So the rover drives itself, one day at a time. Each morning on Earth the team looks at yesterday's pictures, plans a route, and sends the whole plan up in one message: drive twenty meters, turn, take pictures, stop. The rover receives it, checks the ground with its own cameras as it goes, and refuses any move that looks like a rock too big or a slope too steep. Then it sends the day's pictures back. The team looks at them and plans again. A good day is a hundred meters. The record is nearly three hundred and fifty.",
          "The build went in the only order it could. The wheels came first, because everything stands on them; then the body, because everything else plugs into it; then the mast, because the rover has to see before it moves; then the arm. Last came the radio, because a rover that cannot be told what to do is a very expensive rock. Today the engineer sends the first command across the garage, a distance of ten meters, and waits, and the rover rolls forward exactly one meter and stops. That is the whole test. It passed."
        ],
        "questions": [
          {
            "q": "How long does a radio signal take to reach Mars today, according to the sheet?",
            "choices": [
              "Eleven minutes each way",
              "Four minutes on the closest day",
              "Twenty minutes when Mars is far",
              "Instantly"
            ],
            "answer": 0,
            "hint": "Paragraph 1, the seventh sentence.",
            "skill": "Finding details"
          },
          {
            "q": "What was fitted last, and why?",
            "choices": [
              "The radio, because a rover that cannot be told what to do is an expensive rock",
              "The wheels, because everything else on the rover has to be able to stand on top of them",
              "The mast, because the rover has to be able to see the ground before it drives anywhere",
              "The arm, because its turret has to be able to spin a full circle without hitting the wheels"
            ],
            "answer": 0,
            "hint": "Paragraph 3, the third sentence.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 1, what does 'orbits' mean?",
            "choices": [
              "The circles that the rover's wheels leave in the sand",
              "The paths the planets travel around the sun",
              "The route a radio signal follows on its way to Mars",
              "The schedule the team on Earth works to each day"
            ],
            "answer": 1,
            "hint": "The sentence says the delay depends 'on where the two planets are in their orbits'.",
            "skill": "Word meanings"
          },
          {
            "q": "Why does the rover refuse some moves in the plan?",
            "choices": [
              "Because the radio signal takes eleven minutes to arrive and every move it makes has to wait for the team to answer",
              "Because the plan the team sends up each morning is only a suggestion and the rover picks its own route across the ground",
              "Because it checks the ground with its own cameras and will not drive onto a rock too big or a slope too steep",
              "Because the battery runs low by the end of the day and the rover saves its power for sending the pictures back to Earth"
            ],
            "answer": 2,
            "hint": "Paragraph 2, the third sentence.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 2 mostly about?",
            "choices": [
              "How long a radio signal takes to travel between the planets",
              "The record for the longest drive in one day",
              "The order the parts of the rover were fitted in, and why",
              "How the rover is driven one planned day at a time"
            ],
            "answer": 3,
            "hint": "The first sentence of paragraph 2 says 'the rover drives itself, one day at a time', and the rest explains how.",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Radio math",
          "points": [
            "There and back: delay × 2.",
            "Meters a day times days: distance in a week.",
            "Different bottoms: make them the same first. 1/4 + 3/8 = 2/8 + 3/8 = 5/8.",
            "Adding three numbers: add two, then add the third."
          ],
          "example": "8 minutes each way is 8 × 2 = 16 minutes for a reply."
        },
        "problems": [
          {
            "q": "A signal takes 11 minutes to reach Mars. How long until Earth hears the rover's reply, there and back?",
            "answer": "22",
            "hint": "11 × 2.",
            "skill": "Multiplying"
          },
          {
            "q": "The rover drives 100 meters a day. How far does it drive in a week of 7 days?",
            "answer": "700",
            "hint": "100 × 7.",
            "skill": "Multiplying"
          },
          {
            "q": "The record drive is 348 meters. A good day is 100. How much longer than a good day is the record?",
            "answer": "248",
            "hint": "348 − 100.",
            "skill": "Adding and subtracting"
          },
          {
            "q": "The rover drove 1/2 of the day's plan in the morning and 3/8 of it in the afternoon. How much of the plan did it drive? (write a fraction)",
            "answer": "7/8",
            "hint": "Make the bottoms the same: 1/2 is 4/8. Then add the tops.",
            "skill": "Fractions"
          },
          {
            "q": "The team plans 20 meters of driving, then 30 more, then 50 more. How many meters is the whole plan?",
            "answer": "100",
            "hint": "20 + 30 first. Then add 50.",
            "skill": "Adding and subtracting"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "Two facts, one conclusion",
            "points": [
              "The last question is built so that no single paragraph answers it. Plan on using two.",
              "State a fact from one paragraph, then a fact from another, then say 'so'. What follows 'so' is your answer.",
              "If a choice needs something the sheet never mentions, it is out, however reasonable it sounds by itself."
            ],
            "example": "Paragraph one: a signal takes eleven minutes to arrive. Paragraph three: the radio was fitted last. So nothing could be tested from a distance until the very end of the build. Neither paragraph says that alone."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea of the whole build sheet?",
              "choices": [
                "Because a message takes so long to arrive, the rover has to be handed a plan for the day and be able to refuse parts of it on its own.",
                "A good day for the rover is about a hundred meters of driving, and the record set so far is nearly three hundred and fifty meters in a single day.",
                "Space missions are the most difficult engineering there is.",
                "A driver on Earth steers the rover with a joystick as it goes, watching the pictures arrive on a screen and braking whenever a cliff appears ahead."
              ],
              "answer": 0,
              "hint": "Eleven minutes, a plan sent in one message, and a rover that refuses a slope. Ask what all three follow from, and cross off the choice the first paragraph denies.",
              "skill": "Central idea and evidence",
              "evidence": "So the rover drives itself, one day at a time."
            },
            {
              "q": "Claim: the rover does not simply obey the plan it is sent. Which sentence from the sheet best supports that claim?",
              "choices": [
                "The rover receives it, checks the ground with its own cameras as it goes, and refuses any move that looks like a rock too big or a slope too steep.",
                "Each morning on Earth the team looks at yesterday's pictures, plans a route, and sends the whole plan up in one message: drive twenty meters, turn, take pictures, stop.",
                "Today the engineer sends the first command across the garage, a distance of ten meters, and waits, and the rover rolls forward exactly one meter and stops.",
                "The wheels came first, because everything stands on them; then the body, because everything else plugs into it; then the mast, because the rover has to see before it moves; then the arm."
              ],
              "answer": 0,
              "hint": "Receiving a plan is not the same as judging one. Find the sentence in which the rover turns something down.",
              "skill": "Finding details",
              "evidence": "The rover receives it, checks the ground with its own cameras as it goes, and refuses any move that looks like a rock too big or a slope too steep."
            },
            {
              "q": "What job does the sentence about a driver hitting the brakes do in the first paragraph?",
              "choices": [
                "It explains how the rover's brakes are built, and how many seconds six wheels on loose gravel need before the whole machine comes to a stop.",
                "It turns a number of minutes into a picture of what those minutes would cost, which is the reason nobody drives the rover live.",
                "It compares the distance to Mars with the distance to the Moon, so a reader can see how much farther a radio signal has to travel to get there.",
                "It gives the distance between the two planets in miles, and shows how that distance changes as Mars and Earth move around their own orbits."
              ],
              "answer": 1,
              "hint": "The paragraph has already given you the number. Ask what this sentence adds that the number by itself could not.",
              "skill": "Author's purpose and structure",
              "evidence": "A driver who saw a cliff on the screen and hit the brakes would be stopping a rover that had already gone over the edge eleven minutes ago."
            },
            {
              "q": "The sheet says a rover that cannot be told what to do is 'a very expensive rock'. What is that phrase telling you?",
              "choices": [
                "The rover is built out of the same gray stone as the rocks lying around it on Mars",
                "The rover cost more money to build than the samples it collects will ever be worth",
                "Without the radio the whole machine would simply sit there doing nothing",
                "The rover would be mistaken for one of the rocks in the pictures it sends back"
              ],
              "answer": 2,
              "hint": "The word rock is doing the work, and it is not about geology. Ask what a rock on Mars does all day, then apply that to a machine nobody can reach.",
              "skill": "Word meanings",
              "evidence": "Last came the radio, because a rover that cannot be told what to do is a very expensive rock."
            },
            {
              "q": "Paragraphs 1 and 2 together explain why a whole day's plan is sent up in a single message. Why is it?",
              "choices": [
                "The rover can only receive one message a day, because its radio is switched off the rest of the time to save power for driving.",
                "The team on Earth only works for one hour each morning.",
                "One long message travels faster through space than several short ones do, so sending the whole day at once shortens the trip out.",
                "A message takes eleven minutes each way, so a conversation of small instructions would spend the whole day waiting."
              ],
              "answer": 3,
              "hint": "Paragraph one gives you the time a single message takes. Paragraph two tells you a whole day goes up at once. Multiply the delay by the number of instructions and see what happens.",
              "skill": "Reading between the lines",
              "evidence": "Mars is a long way from Earth. A radio signal moves at the speed of light. Even so, it takes between three and twenty-two minutes to get there."
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
              "Adding three numbers: add two, then add the third.",
              "Fractions with the same bottom: add the tops."
            ],
            "example": "2 × 7 = 14, so 14 shared into 2 equal groups is 7 each."
          },
          "problems": [
            {
              "q": "The engineer lays out bolts in 6 rows of 8. How many bolts is that?",
              "answer": "48",
              "hint": "6 × 8.",
              "skill": "Multiplying"
            },
            {
              "q": "40 meters of cable are cut into 5 equal pieces. How many meters long is each piece?",
              "answer": "8",
              "hint": "40 split into 5 equal parts.",
              "skill": "Dividing"
            },
            {
              "q": "The log shows 452 minutes of delay, then 63 more are added and 17 are taken off. What does the log show now?",
              "answer": "498",
              "hint": "Add 452 and 63 first, then take 17 off.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "Add: 4/8 + 3/8 (write a fraction)",
              "answer": "7/8",
              "hint": "Same bottom. 4 + 3 on top.",
              "skill": "Fractions"
            },
            {
              "q": "A mat is 5 meters wide and 8 meters long. How many meters is it all the way around the edge?",
              "answer": "26",
              "hint": "Two sides of 5 and two sides of 8: 5 + 5 + 8 + 8.",
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
            "example": "4 × (8 − 4) + 4 = 20."
          },
          "problems": [
            {
              "q": "The plan allows 50 minutes. The engineer uses 9.85 minutes on the first part and 11.6 on the second. How many minutes are left?",
              "answer": "28.55",
              "hint": "Add the two amounts used first, then take that from 50. Line up the points.",
              "skill": "Decimals"
            },
            {
              "q": "50% of the minutes of delay counted is 60. How many were counted in all?",
              "answer": "120",
              "hint": "60 is 50 hundredths of the whole: 60 ÷ 50 × 100.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The engineer counts 10 commands and 25 minutes of delay. In its simplest form, what is the ratio of commands to minutes of delay? (write it like 2:3)",
              "answer": "2:5",
              "accept": [
                "2 to 5"
              ],
              "hint": "Divide both by 5.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The engineer works out (4 + 4) × 8. What is it?",
              "answer": "64",
              "hint": "Parentheses first, then multiply.",
              "skill": "Order of operations"
            },
            {
              "q": "Solve for x: 5x = 1,720",
              "answer": "344",
              "hint": "Divide both sides by 5.",
              "skill": "Equations"
            }
          ]
        },
        "7": {
          "lesson": {
            "title": "Grade 7 numbers",
            "points": [
              "How many fit: the time you have ÷ the time each one takes. 9 hours at 1.5 hours each is 9 ÷ 1.5 = 6.",
              "Working backward: if a count fell by a tenth, the new count is 90% of the old one, so divide by 0.9 to get back to the start.",
              "Below zero, going up adds and going down subtracts. Walk the number line one step at a time.",
              "With parentheses, undo the outside first: divide both sides, then take off the number inside."
            ],
            "example": "4(x + 5) = 36, so x + 5 = 9, so x = 4."
          },
          "problems": [
            {
              "q": "The engineer has 28 minutes to spend and each part takes 3.5 minutes. How many parts is that enough for?",
              "answer": "8",
              "hint": "28 ÷ 3.5.",
              "skill": "Ratios and percent"
            },
            {
              "q": "A count of minutes of delay fell by 25% to 180. What was it before?",
              "answer": "240",
              "hint": "180 is 75% of the old count.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The rover sits 23 meters east of the garage door. It drives 36 meters west. Where is it now, in meters (east is +, west is −)?",
              "answer": "-13",
              "accept": [
                "−13"
              ],
              "hint": "23 meters brings it back to the door, and 13 more takes it past, on the west side.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: (x + 24) × 2 = 52",
              "answer": "2",
              "hint": "Divide both sides by 2 first, then take 24 off.",
              "skill": "Equations"
            },
            {
              "q": "A model is built at 1 to 25. The marked length on the model is 8 cm. How many cm is the real one?",
              "answer": "200",
              "hint": "Every cm on the model is 25 cm for real.",
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
            "example": "y = 4x + 3 when x = 5: 4 × 5 + 3 = 23."
          },
          "problems": [
            {
              "q": "The count of minutes of delay follows the rule y = 6x + 10, where x is the hour. What is y when x = 6?",
              "answer": "46",
              "hint": "Put 6 in for x: 6 × 6 + 10.",
              "skill": "Linear relationships"
            },
            {
              "q": "What is 7² + 6²?",
              "answer": "85",
              "hint": "7 × 7 = 49 and 6 × 6 = 36. Add them.",
              "skill": "Powers and roots"
            },
            {
              "q": "A 13-meter cable reaches the top of a 5-meter post. How far is the foot of the cable from the base, in meters?",
              "answer": "12",
              "hint": "b² = c² − a² = 169 − 25 = 144. Then take the square root.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "Solve for x: 7x + 8 − 4x = 26",
              "answer": "6",
              "hint": "Collect the x's first: 3x + 8 = 26.",
              "skill": "Equations"
            },
            {
              "q": "What is 9 × 10^4 ÷ 10^3?",
              "answer": "90",
              "hint": "Dividing subtracts the powers: 10^4 ÷ 10^3 = 10^1. So 9 × 10.",
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
            "If the last step throws away the others, that was the test."
          ],
          "example": "Step 5 can say 'ignore everything and type X'. Then the answer is X."
        },
        "skill": "Following directions",
        "steps": [
          "Write today's radio delay in minutes, one way: 11.",
          "Multiply by 2, because the message goes out and the answer comes back.",
          "Add the meters of a good day's drive: 100.",
          "Step 3 counts a drive that has not happened. Go back to what you wrote in step 2 and add the 10 meters of the garage command in its place.",
          "Type what you are left with."
        ],
        "prompt": "Your answer:",
        "answer": "32",
        "hint": "Double the delay first. Step 4 swaps step 3's distance for a different one, so read step 4 before you add."
      }
    }
  ]
};
if (window.BASECAMP_MISSIONS && window.BASECAMP_MISSIONS.register) window.BASECAMP_MISSIONS.register(C);
else (window.BASECAMP_CAMPAIGNS_PENDING = window.BASECAMP_CAMPAIGNS_PENDING || []).push(C);
})();
