// ODYSSEY — campaign "aurora". GENERATED, do not edit.
// Source of truth: content/missions-full.js. Rebuild with:  python3 tools/split-missions.py
// RULE: nothing in this file is about the person using it. Content only.
(function () {
var C = {
  "id": "aurora",
  "ready": true,
  "kind": "shift",
  "readingLevel": {
    "fk": 5.9,
    "cl": 7.1
  },
  "grade": "5",
  "kindLabel": "Watch",
  "form": "lynx",
  "title": "Aurora Station",
  "subtitle": "A hill outside Fairbanks, Alaska",
  "pitch": "Five nights at a research station under the northern lights. Solar wind, a magnet the size of a planet, forty below zero, and a rocket that gets launched straight into the sky when the lights are right.",
  "scene": "assets/scene-aurora.jpg",
  "progress": {
    "unit": "nights",
    "total": 5
  },
  "dayNoun": "Night",
  "stageNoun": "Night",
  "finalNoun": "Launch",
  "stages": [
    "Night 1",
    "Night 2",
    "Night 3",
    "Night 4",
    "Launch night"
  ],
  "reconNoun": "Sky Log",
  "legs": {
    "recon": "Sky log",
    "nav": "Station math",
    "orders": "Night rules",
    "debrief": "Dawn"
  },
  "fact": "The lights start ninety-three million miles away, on the sun. What you see over Fairbanks left the sun two to four days ago.",
  "finale": {
    "prompt": "The rocket is up and the sky is still moving. Which color was strongest tonight, for the log?",
    "options": [
      {
        "label": "Green",
        "color": "#4FD18B"
      },
      {
        "label": "Red",
        "color": "#FF6B6B"
      },
      {
        "label": "Violet",
        "color": "#B57BFF"
      },
      {
        "label": "White",
        "color": "#F4F8FF"
      }
    ],
    "done": "Log it. Then stand outside one more minute. You will rarely see this from Florida."
  },
  "patrols": [
    {
      "id": "aurora-1",
      "title": "Ninety-Three Million Miles",
      "recon": {
        "lesson": {
          "title": "Questions first, then the log",
          "points": [
            "Read the five questions before the log. Two want a detail, one wants a word, one wants a why, one wants what a paragraph is mostly about.",
            "When the log explains where something comes from, the 'why' answer is that chain of causes.",
            "The answer is always in the log. You never have to guess."
          ],
          "example": "Question: 'Which bird sings at dawn?' Hunt for 'dawn'. The sentence it sits in names the bird."
        },
        "title": "Sky Log: Where the Lights Come From",
        "passage": [
          "The station is a cabin and a dome on a hill twenty miles north of Fairbanks, far enough from town that the sky is black. In winter it is dark here for eighteen hours a day and the temperature sits at thirty or forty below zero for weeks, and that is exactly why the station is here. Fairbanks sits under the auroral oval, a ring around the top of the world where the northern lights appear more often than anywhere else people live. On a clear night in winter, the lights show up about four nights out of five.",
          "The lights begin on the sun. The sun is always throwing off tiny charged particles. A stream of them is called the solar wind. That wind takes two to four days to cross the ninety-three million miles to Earth. Earth is a magnet. Its magnetic field reaches far out into space. The field catches the particles and funnels them down toward the north and south poles. Sixty to two hundred miles up, the particles crash into the thin air. Then the air glows, the way the gas in a neon sign glows when electricity runs through it.",
          "The color tells you what was hit. Oxygen glows green, and green is by far the most common color, a curtain that ripples across the whole sky. Higher up, thinner oxygen glows a deep red. That red shows only on the strongest nights. Nitrogen glows blue and purple at the bottom edge of the curtain. The watcher's job tonight is to set up the all-sky camera, a fisheye lens that photographs the whole sky every ten seconds from dusk to dawn. The other job is to write down the time the first green appears."
        ],
        "questions": [
          {
            "q": "Why is the station built on a hill far from town?",
            "choices": [
              "Because the top of the hill stays warmer than the valley",
              "Because standing higher up brings the lights closer",
              "Because the road from Fairbanks ends at the hilltop",
              "Because far from town the sky is black"
            ],
            "answer": 3,
            "hint": "Paragraph 1, the first sentence.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 2, what is the 'solar wind'?",
            "choices": [
              "A cold wind that blows down across the hills on winter nights",
              "The stream of light that the sun sends out in every direction",
              "A stream of tiny charged particles thrown off by the sun",
              "The thin air sixty to two hundred miles up where the aurora glows"
            ],
            "answer": 2,
            "hint": "The sentence with 'called the solar wind', and the one just before it.",
            "skill": "Word meanings"
          },
          {
            "q": "Which gas glows green?",
            "choices": [
              "Nitrogen",
              "Neon",
              "Oxygen",
              "Hydrogen"
            ],
            "answer": 2,
            "hint": "Paragraph 3, the second sentence.",
            "skill": "Finding details"
          },
          {
            "q": "Why do the lights appear near the poles and not everywhere?",
            "choices": [
              "Because the poles are the coldest places on Earth",
              "Because Earth's magnetic field funnels the particles toward the poles",
              "Because the sun aims the solar wind straight at the top and bottom of the world",
              "Because the air is thinner above the poles than anywhere else"
            ],
            "answer": 1,
            "hint": "Paragraph 2, the sentence with 'funnels them down'.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 2 mostly about?",
            "choices": [
              "The cabin and the dome on the hill",
              "Which gas makes which color in the curtain and how common each is",
              "How the lights get from the sun to the sky over Fairbanks",
              "The camera that photographs the whole sky"
            ],
            "answer": 2,
            "hint": "The first sentence of paragraph 2 says 'The lights begin on the sun', and the rest follows the journey.",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Camera math",
          "points": [
            "Every few seconds: 60 ÷ the gap gives how many a minute. Every 15 seconds is 60 ÷ 15 = 4 a minute.",
            "Volume of a box: length × width × height. 3 × 3 × 2 = 18 cubic feet.",
            "A fraction of a number: divide by the bottom, then multiply by the top. 2/3 of 15 is 15 ÷ 3 = 5, then 5 × 2 = 10.",
            "Two-step: photos an hour, then times the hours of dark."
          ],
          "example": "8,000,000 ÷ 4: do 8 ÷ 4 = 2, then keep the six zeros: 2,000,000."
        },
        "problems": [
          {
            "q": "The all-sky camera takes a photo every 10 seconds. How many photos does it take in 1 minute?",
            "answer": "6",
            "hint": "60 seconds ÷ 10.",
            "skill": "Dividing"
          },
          {
            "q": "The all-sky camera sits in a heated box 2 feet long, 2 feet wide and 3 feet tall. How many cubic feet is the box?",
            "answer": "12",
            "hint": "Length × width × height: 2 × 2 first, then times 3.",
            "skill": "Volume"
          },
          {
            "q": "The camera takes 6 photos a minute. How many photos does it take in 12 hours of dark?",
            "answer": "4320",
            "accept": [
              "4,320"
            ],
            "hint": "6 × 60 = 360 photos an hour. Then 360 × 12: 360 × 10 = 3,600, 360 × 2 = 720.",
            "skill": "Multi-step problems"
          },
          {
            "q": "The lights show on 4/5 of clear nights. In 20 clear nights, how many nights should show lights?",
            "answer": "16",
            "hint": "20 ÷ 5 = 4, then 4 × 4.",
            "skill": "Fractions"
          },
          {
            "q": "A fast burst of solar wind travels 90,000,000 miles in about 2 days. How many miles a day is that?",
            "answer": "45000000",
            "accept": [
              "45,000,000"
            ],
            "hint": "90,000,000 ÷ 2.",
            "skill": "Dividing"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "What the whole thing adds up to",
            "points": [
              "Read all three paragraphs before you touch the first question. The central idea is not visible from inside paragraph one.",
              "Say the idea in your own words first. Then look for the choice that means the same thing, not the choice that shares the most words.",
              "The other four moves today: prove a claim with one line, name what a paragraph is for, work out a word from its sentence, and join two paragraphs into a conclusion."
            ],
            "example": "Three paragraphs on a well: where it was dug, how deep the water sits, why the village grew around it. The idea is that the water decided where people live. 'The well is ninety feet deep' is just the middle."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea of the whole report?",
              "choices": [
                "Oxygen glows green, and green is by far the most common color, a curtain that ripples across the whole sky on a clear winter night.",
                "The station stands twenty miles north of Fairbanks, far enough from town that the sky above it is black on a winter night.",
                "The lights are made by ordinary sunlight bouncing off the ice crystals that hang in the cold air above the station on clear winter nights.",
                "The lights are the end of a chain that begins on the sun, and the station sits exactly where that chain comes down."
              ],
              "answer": 3,
              "hint": "Where the station is, where the lights come from, and what the colors mean. Ask what single idea needs all three of those paragraphs.",
              "skill": "Central idea and evidence",
              "evidence": "Fairbanks sits under the auroral oval, a ring around the top of the world where the northern lights appear more often than anywhere else people live."
            },
            {
              "q": "Claim: the cold and the dark are reasons the station is here, not problems it puts up with. Which sentence from the report best supports that claim?",
              "choices": [
                "Fairbanks sits under the auroral oval, a ring around the top of the world where the northern lights appear more often than anywhere else people live.",
                "On a clear night in winter, the lights show up about four nights out of five.",
                "In winter it is dark here for eighteen hours a day and the temperature sits at thirty or forty below zero for weeks, and that is exactly why the station is here.",
                "The watcher's job tonight is to set up the all-sky camera, a fisheye lens that photographs the whole sky every ten seconds from dusk to dawn."
              ],
              "answer": 2,
              "hint": "The claim turns a hardship into a reason. Look for the sentence that does the same turn, in the same breath.",
              "skill": "Finding details",
              "evidence": "In winter it is dark here for eighteen hours a day and the temperature sits at thirty or forty below zero for weeks, and that is exactly why the station is here."
            },
            {
              "q": "What job does the second paragraph do in this report?",
              "choices": [
                "It lists the colors of the lights in the order they appear each night, starting with the green curtain and ending with the deep red.",
                "It explains how the all-sky camera is set up and aimed, and how often it photographs the sky through the night.",
                "It traces the cause of the lights the whole way back, from the sun to the air above the station.",
                "It compares the northern lights with the southern lights."
              ],
              "answer": 2,
              "hint": "Follow the paragraph from its first sentence to its last and notice that each step makes the next one happen. Then name that shape.",
              "skill": "Author's purpose and structure",
              "evidence": "The lights begin on the sun."
            },
            {
              "q": "The report says Earth's magnetic field 'funnels' the particles down toward the poles. What does funnels mean as it is used here?",
              "choices": [
                "Pours a liquid down through a narrow tube into a bottle",
                "Gathers them in and guides them to one place",
                "Blows them back out into space",
                "Spreads them evenly across the whole sky"
              ],
              "answer": 1,
              "hint": "You know the kitchen object. Keep the part that is about wide going in and narrow coming out, and drop the part about liquid.",
              "skill": "Word meanings",
              "evidence": "The field catches the particles and funnels them down toward the north and south poles."
            },
            {
              "q": "Paragraphs 2 and 3 together let you work out why the top of a curtain can be a different color from its bottom edge. Why can it?",
              "choices": [
                "Green is the most common color, so the green part sits lowest.",
                "The solar wind changes color on the way from the sun.",
                "The particles hit different gases at different heights, and each gas glows its own color.",
                "Red light travels farther through the thin air than green light does, so red is the color that reaches the top."
              ],
              "answer": 2,
              "hint": "One paragraph gives the range of heights where the crashing happens. The other says which gas makes which color, and where each one sits. Lay them on top of each other.",
              "skill": "Reading between the lines",
              "evidence": "Sixty to two hundred miles up, the particles crash into the thin air. Then the air glows, the way the gas in a neon sign glows when electricity runs through it."
            }
          ]
        }
      },
      "navByGrade": {
        "3": {
          "lesson": {
            "title": "Grade 3 numbers",
            "points": [
              "Multiplication facts: 5 × 8 means 5 groups of 8.",
              "Sharing equally is dividing.",
              "Adding three numbers: add two, then add the third.",
              "Fractions with the same bottom: add the tops."
            ],
            "example": "3 × 7 = 21, so 21 shared among 3 is 7 each."
          },
          "problems": [
            {
              "q": "The watcher counts 4 cameras with 9 photos in each. How many photos is that?",
              "answer": "36",
              "hint": "4 × 9.",
              "skill": "Multiplying"
            },
            {
              "q": "36 photos are shared equally among 4 cameras. How many photos in each camera?",
              "answer": "9",
              "hint": "How many 4s make 36?",
              "skill": "Dividing"
            },
            {
              "q": "The watcher drove 419 miles, then 60 more, then 34 more. How many miles in all?",
              "answer": "513",
              "hint": "419 + 60 first. Then add 34.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "The watcher finished 4/6 of the day's work before the break and 1/6 after. What fraction is done? (write a fraction)",
              "answer": "5/6",
              "hint": "Same bottom. Add the tops.",
              "skill": "Fractions"
            },
            {
              "q": "A camera platform is 7 squares wide and 6 squares long. How many squares is that?",
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
            "example": "4 × (9 − 3) + 5: parentheses first, 9 − 3 = 6, then 4 × 6 = 24, then 24 + 5 = 29."
          },
          "problems": [
            {
              "q": "Each exposure takes 3.65 seconds of camera time. How many seconds for 18 exposures?",
              "answer": "65.7",
              "hint": "Split it: 18 × 3 plus 18 × 0.65.",
              "skill": "Decimals"
            },
            {
              "q": "Of 240 photos, 75% are set aside. How many is that?",
              "answer": "180",
              "hint": "75% of 240: 75% is 75/100.",
              "skill": "Ratios and percent"
            },
            {
              "q": "Cameras and batteries are kept in the ratio 2 to 3. If there are 12 cameras, how many batteries?",
              "answer": "18",
              "hint": "12 ÷ 2 = 6 groups. Each group has 3 batteries.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The watcher works out 9 × (7 − 2) + 11. What is it?",
              "answer": "56",
              "hint": "Parentheses first, then multiply, then add.",
              "skill": "Order of operations"
            },
            {
              "q": "At dawn it was −12 degrees. By noon it was 4 degrees. By how many degrees did it rise?",
              "answer": "16",
              "hint": "From −12 up to 0 is 12, then 4 more.",
              "skill": "Negative numbers"
            }
          ]
        },
        "7": {
          "lesson": {
            "title": "Grade 7 numbers",
            "points": [
              "A unit rate is the total divided by how many: 36 miles in 8 hours is 36 ÷ 8 = 4.5 miles an hour.",
              "Percent change: find that percent of the starting number, then add it on or take it off.",
              "Below zero, going up adds and going down subtracts. Walk the number line one step at a time.",
              "A two-step equation: undo the adding first, then undo the multiplying."
            ],
            "example": "4x + 15 = 47, so 4x = 32, so x = 8."
          },
          "problems": [
            {
              "q": "24 exposures needed 60 seconds altogether. How many seconds is that for one exposure?",
              "answer": "2.5",
              "hint": "A rate is the total shared out: 60 ÷ 24.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The watcher took 160 photos on the first night. On the second night the number had risen by 10%. How many photos is that?",
              "answer": "176",
              "hint": "10% of 160 is 16. Then add it on.",
              "skill": "Ratios and percent"
            },
            {
              "q": "At dawn the thermometer read −17 degrees. It rose 5 degrees by noon, then fell 4 degrees by dark. What does it read at dark?",
              "answer": "-16",
              "accept": [
                "−16"
              ],
              "hint": "Start at −17, go up 5 to −12, then down 4.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: 9x + 24 = 69",
              "answer": "5",
              "hint": "Take 24 off both sides first, then divide by 9.",
              "skill": "Equations"
            },
            {
              "q": "On the plan, 1 inch stands for 20 feet. The hill trail measures 7 inches on the plan. How long is it really, in feet?",
              "answer": "140",
              "hint": "Every inch is 20 feet, so 7 × 20.",
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
            "example": "Start at 10 and add 6 each hour. After 7 hours: y = 6 × 7 + 10 = 52."
          },
          "problems": [
            {
              "q": "The watcher has taken 15 photos and takes 4 more every hour. After 3 hours, how many photos are there?",
              "answer": "27",
              "hint": "This is the straight-line rule y = mx + b: 4 × 3 + 15.",
              "skill": "Linear relationships"
            },
            {
              "q": "Each memory card holds 6² photos. There are 3 cards. How many photos in all?",
              "answer": "108",
              "hint": "6² means 6 × 6 = 36. Then × 3.",
              "skill": "Powers and roots"
            },
            {
              "q": "The watcher runs a rope from the top of a 5-foot pole to a point 12 feet away on the ground. How long is the rope, in feet?",
              "answer": "13",
              "hint": "Right triangle: a² + b² = c². 5² + 12² = 25 + 144 = 169. The rope is the square root of that.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "Solve for x: 4x + 12 = x + 39",
              "answer": "9",
              "hint": "Take x off both sides to get 3x + 12 = 39, then take 12 off both sides and divide.",
              "skill": "Equations"
            },
            {
              "q": "The watcher writes a distance in space as 5 × 10^5 miles. Written out in full, how many miles is that?",
              "answer": "500000",
              "hint": "10^5 is 1 with 5 zeros after it: 100,000. Then × 5.",
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
          "example": "If step 5 says 'answer in hours, not minutes', 120 becomes 2."
        },
        "skill": "Following directions",
        "steps": [
          "Write the hours of dark in a Fairbanks winter day: 18.",
          "Multiply by the 6 photos the all-sky camera takes each minute.",
          "Add the 2 days the solar wind takes to cross to Earth at its fastest.",
          "The lights show on 4 nights out of 5. Divide your total by that 4.",
          "The log has no room for halves, so type your answer rounded down to a whole number."
        ],
        "prompt": "Your answer:",
        "answer": "27",
        "hint": "Multiply before you add, working steps 2 and 3 in order. Step 5 decides what happens to the half left over."
      }
    },
    {
      "id": "aurora-2",
      "title": "Forty Below",
      "recon": {
        "lesson": {
          "title": "Danger and the fix",
          "points": [
            "When a log describes a danger, the way to handle it is in the next sentence or two.",
            "Numbers with 'below' are temperatures under zero. Read them exactly.",
            "'How long' wants minutes or hours from the log."
          ],
          "example": "'The pond ice is thin in March. So the skaters stay on the shore.' Danger, then fix."
        },
        "title": "Sky Log: The Cold Is the Other Instrument",
        "passage": [
          "Tonight the thermometer on the porch reads forty-one below zero. In cold like that, bare skin freezes in about ten minutes. A cup of hot water thrown into the air turns to snow before it lands. The station's truck will not start unless it has been plugged into a heater all day. The watcher wears three layers, a face mask, mittens over gloves, and boots rated to sixty below, and goes outside for no more than twenty minutes at a time. The lynx tracks on the hill do not seem to mind.",
          "The cold makes a fog of its own. When it is this cold, the moisture from a running truck, a chimney, or a person's breath cannot rise. Instead it hangs in the air as a low gray cloud called ice fog. In town, ice fog can hide the far side of the street. On the hill it is thin, but a watcher who breathes on the camera lens will fog it solid, and the only cure is to bring it inside and wait an hour. Rule one at the station: never breathe on the glass.",
          "There is a payoff. The same clear, dry, dead-still air that makes the cold so sharp is the best air in the world for looking up. There is no haze, no wind to shake the camera, and on a night like this the stars come down to the horizon in every direction. At eleven the first green arch rises over the northern hills, low and steady, and the watcher notes it in the log with a pencil, because a pen would have frozen."
        ],
        "questions": [
          {
            "q": "What is the temperature on the porch tonight?",
            "choices": [
              "Ten below zero",
              "Forty-one below zero",
              "A little over sixty below zero",
              "Twenty below zero and falling"
            ],
            "answer": 1,
            "hint": "The first sentence of paragraph 1.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 2, what is 'ice fog'?",
            "choices": [
              "Moisture that hangs in the air as a low gray cloud because it cannot rise in the cold",
              "Snow that falls out of a clear sky when the temperature drops past forty degrees below zero",
              "The frost that forms on a camera lens outside",
              "The fog that forms over the river in summer when the water is warmer than the air above it"
            ],
            "answer": 0,
            "hint": "The sentence that ends 'called ice fog'.",
            "skill": "Word meanings"
          },
          {
            "q": "How long does the watcher stay outside at one time, at most?",
            "choices": [
              "A little under ten minutes",
              "One hour at a stretch",
              "Twenty minutes",
              "All night, in shifts"
            ],
            "answer": 2,
            "hint": "Paragraph 1, the sentence about the three layers.",
            "skill": "Finding details"
          },
          {
            "q": "Why does the watcher write the log with a pencil?",
            "choices": [
              "Because it is cheaper",
              "Because the station has always kept its logs in pencil",
              "Because of the mittens",
              "Because a pen would freeze"
            ],
            "answer": 3,
            "hint": "The last sentence of paragraph 3.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 3 mostly about?",
            "choices": [
              "How the station truck is kept plugged in to start",
              "The lynx tracks on the hill",
              "Why the cold, clear air is the best for watching the sky",
              "How the watcher dresses for forty below zero"
            ],
            "answer": 2,
            "hint": "The first sentence of paragraph 3 says 'There is a payoff', and the rest explains it.",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Cold math",
          "points": [
            "How far below zero: −41 is 41 degrees below zero.",
            "Warming up from below zero: from −30 to −12 is a rise of 30 − 12 = 18.",
            "Adding decimals: line up the points. 0.75 + 1.5 is 0.75 + 1.50 = 2.25.",
            "Same bottom: 1/8 + 4/8 = 5/8."
          ],
          "example": "240 minutes is how many hours? 240 ÷ 60 = 4 hours."
        },
        "problems": [
          {
            "q": "The thermometer reads 41 below zero at midnight and 20 below at noon. By how many degrees did it warm up?",
            "answer": "21",
            "hint": "From 41 below to 20 below is 41 − 20.",
            "skill": "Adding and subtracting"
          },
          {
            "q": "The watcher drinks 1.75 cups of hot cocoa before midnight and 1.5 cups after. How many cups is that in all? (write a decimal)",
            "answer": "3.25",
            "hint": "Line up the points: 1.75 + 1.50.",
            "skill": "Decimals"
          },
          {
            "q": "The watcher spent 180 minutes outside last night. How many hours is that?",
            "answer": "3",
            "hint": "180 ÷ 60.",
            "skill": "Dividing"
          },
          {
            "q": "The watcher wears 3 layers on the body, 2 on the hands and 2 on the feet. How many layers is that in all?",
            "answer": "7",
            "hint": "3 + 2 + 2.",
            "skill": "Adding and subtracting"
          },
          {
            "q": "The watcher spent 2/6 of the night outside and 3/6 inside at the screens. What fraction of the night is that together? (write a fraction)",
            "answer": "5/6",
            "hint": "Same bottom. Add the tops.",
            "skill": "Fractions"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "Which line settles it",
            "points": [
              "A supporting-sentence question is a small argument. The claim is the thing being argued; your answer is the thing that ends it.",
              "Every choice is really in the report, so true is free. Ask instead which one makes the claim impossible to deny.",
              "If your pick only makes the claim likely, keep looking. There is usually one that makes it certain."
            ],
            "example": "Claim: nobody has used the cabin this winter. 'The stove is cold' makes it likely. 'The only door is nailed shut from the outside' settles it."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea that develops across the whole report?",
              "choices": [
                "Breathing on the camera lens fogs it solid, and the only cure is to carry it inside and wait an hour for it to clear.",
                "The cold that makes everything difficult here is the same cold that makes the sky worth watching.",
                "At forty-one below, bare skin freezes in about ten minutes and the truck will not start.",
                "The watcher stays outside on the hill all night long to keep the camera running from dusk until dawn without once coming in."
              ],
              "answer": 1,
              "hint": "Two paragraphs of trouble and one that begins with a payoff. The central idea has to hold the trouble and the payoff together.",
              "skill": "Central idea and evidence",
              "evidence": "The same clear, dry, dead-still air that makes the cold so sharp is the best air in the world for looking up."
            },
            {
              "q": "Claim: the watcher's own body is a hazard to the equipment. Which sentence from the report best supports that claim?",
              "choices": [
                "On the hill it is thin, but a watcher who breathes on the camera lens will fog it solid, and the only cure is to bring it inside and wait an hour.",
                "The watcher wears three layers, a face mask, mittens over gloves, and boots rated to sixty below, and goes outside for no more than twenty minutes at a time.",
                "At eleven the first green arch rises over the northern hills, low and steady, and the watcher notes it in the log with a pencil, because a pen would have frozen.",
                "There is no haze, no wind to shake the camera, and on a night like this the stars come down to the horizon in every direction."
              ],
              "answer": 0,
              "hint": "The claim runs one way: the person damages the machine. The other choices are about the cold, the clothing or the view. Find the one pointing the right way.",
              "skill": "Finding details",
              "evidence": "On the hill it is thin, but a watcher who breathes on the camera lens will fog it solid, and the only cure is to bring it inside and wait an hour."
            },
            {
              "q": "What job does the third paragraph do in the report as a whole?",
              "choices": [
                "It explains how ice fog forms in a cold town, where the moisture from trucks and chimneys hangs in the air instead of rising.",
                "It lists the layers of clothing the watcher puts on before going out and the number of minutes anyone can stay outside.",
                "It turns the report around: everything that sounded like a problem becomes the reason the work is possible.",
                "It compares the thick ice fog that hides the far side of a street in town with the thin fog that hangs on the hill above it."
              ],
              "answer": 2,
              "hint": "The paragraph opens with four words that announce a turn. Read them, then work out what is being turned.",
              "skill": "Author's purpose and structure",
              "evidence": "There is a payoff."
            },
            {
              "q": "The report calls the air 'dead-still'. What is the word dead doing to the meaning of still here?",
              "choices": [
                "Warning you that the air itself is dangerous to breathe at forty-one below.",
                "Saying that the air has stopped being cold.",
                "Telling you that something has died in the cold.",
                "Making it stronger: not a breath of movement anywhere."
              ],
              "answer": 3,
              "hint": "Some words are there only to turn up the volume on the word beside them. Read the sentence without it and see what changes.",
              "skill": "Word meanings",
              "evidence": "The same clear, dry, dead-still air that makes the cold so sharp is the best air in the world for looking up."
            },
            {
              "q": "Paragraphs 2 and 3 together explain why 'never breathe on the glass' is rule one rather than rule five. Why is it?",
              "choices": [
                "The lens is the most expensive piece of equipment at the station.",
                "Ice fog would fill the dome if the door were left open.",
                "A fogged lens takes an hour to clear, and the display the camera is there to record can begin at any moment.",
                "The watcher is not allowed outside for more than an hour."
              ],
              "answer": 2,
              "hint": "One paragraph prices the mistake in hours. The other tells you what the camera was waiting for and when it arrived. Compare the two.",
              "skill": "Reading between the lines",
              "evidence": "a watcher who breathes on the camera lens will fog it solid, and the only cure is to bring it inside and wait an hour"
            }
          ]
        }
      },
      "navByGrade": {
        "3": {
          "lesson": {
            "title": "Grade 3 numbers",
            "points": [
              "Multiplication facts: 6 × 2 means 6 groups of 2.",
              "Sharing equally is dividing.",
              "Subtracting: line up the ones, tens and hundreds, and borrow when the top digit is too small.",
              "Fractions with the same bottom: add or take away the tops. A whole is 5/5, so 5/5 − 2/5 = 3/5."
            ],
            "example": "5 × 6 = 30, so 30 ÷ 5 = 6. A times fact gives you a sharing fact too."
          },
          "problems": [
            {
              "q": "The temperature dropped 3 degrees yesterday and three times as much today. How many degrees did it drop today?",
              "answer": "9",
              "hint": "Three times 3: 3 + 3 + 3.",
              "skill": "Multiplying"
            },
            {
              "q": "The temperature drops 3 degrees an hour. How many hours does it take to drop 12 degrees?",
              "answer": "4",
              "hint": "How many 3s make 12?",
              "skill": "Dividing"
            },
            {
              "q": "The watcher has 263 photos and deletes 44. How many are left?",
              "answer": "219",
              "hint": "263 − 44.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "3/6 of the day's work was done yesterday. What fraction is still to do? (write a fraction)",
              "answer": "3/6",
              "hint": "The whole job is 6/6. Take 3/6 off it.",
              "skill": "Fractions"
            },
            {
              "q": "The photo count stood at 784 and 200 more were taken. What is the count now?",
              "answer": "984",
              "hint": "784 + 200.",
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
            "example": "3 + 5 × 6: multiply first, 5 × 6 = 30, then 3 + 30 = 33. Adding first would give 48, which is wrong."
          },
          "problems": [
            {
              "q": "The watcher has 9 hours of dark sky. Each photo session takes 3/4 of an hour. How many sessions fit in the night?",
              "answer": "12",
              "hint": "Dividing by 3/4 means multiplying by its flip, 4/3: 9 × 4/3.",
              "skill": "Fractions"
            },
            {
              "q": "8 of the 40 photos are set aside. What percent is that? (write just the number)",
              "answer": "20",
              "accept": [
                "20%"
              ],
              "hint": "8 out of 40, then out of 100.",
              "skill": "Ratios and percent"
            },
            {
              "q": "For every 2 cameras there are 3 batteries. There are 12 batteries. How many cameras?",
              "answer": "8",
              "hint": "12 ÷ 3 = 4 groups. Each group has 2 cameras.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The watcher works out 7 + 9 × 8. What is it?",
              "answer": "79",
              "hint": "Multiply before you add.",
              "skill": "Order of operations"
            },
            {
              "q": "At dawn the thermometer read 8 degrees. By dark it had fallen to −12 degrees. By how many degrees did it fall?",
              "answer": "20",
              "hint": "From 8 down to 0 is 8, then 12 more.",
              "skill": "Negative numbers"
            }
          ]
        },
        "7": {
          "lesson": {
            "title": "Grade 7 numbers",
            "points": [
              "A unit rate is the total divided by how many: 18 dollars for 4 pounds is 18 ÷ 4 = 4.5 dollars a pound.",
              "Percent change: divide the change by the starting number. From 80 to 92 is 12 out of 80, or 15%.",
              "Multiplying or dividing with one minus sign gives a minus answer: 3 × (−5) = −15, and −15 ÷ 3 = −5.",
              "A two-step equation: undo the adding first, then undo the multiplying."
            ],
            "example": "70 − 6x = 16, so 6x = 54, so x = 9."
          },
          "problems": [
            {
              "q": "One exposure needs 1.25 seconds. How many seconds do 20 exposures need?",
              "answer": "25",
              "hint": "20 × 1.25.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The watcher counted 40 arcs on the first night and 50 on the second. By what percent did the count change? (write just the number)",
              "answer": "25",
              "accept": [
                "25%"
              ],
              "hint": "The change is 10. 10 out of 40, then out of 100.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The thermometer falls 4 degrees every hour for 9 hours. What is the total change? (Write a fall as a negative number.)",
              "answer": "-36",
              "accept": [
                "−36"
              ],
              "hint": "9 hours of −4 each: 9 × (−4). One minus sign, so the answer is negative.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: 90 − 7x = 13",
              "answer": "11",
              "hint": "Move 7x to the right and 13 to the left: 7x = 77.",
              "skill": "Equations"
            },
            {
              "q": "A round dome cover has a radius of 20 inches. Using 3.14 for pi, how many inches is it around the edge?",
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
            "example": "Start at 90 and lose 8 each hour. After 5 hours: 90 − 8 × 5 = 50 are left."
          },
          "problems": [
            {
              "q": "The camera battery starts at 46 percent and drops 6 percentage points every hour. What percent is left after 6 hours?",
              "answer": "10",
              "hint": "6 × 6 = 36 used, taken off 46.",
              "skill": "Linear relationships"
            },
            {
              "q": "What is the square root of 225?",
              "answer": "15",
              "hint": "What number times itself makes 225?",
              "skill": "Powers and roots"
            },
            {
              "q": "A 15-foot rope runs from the top of a pole to a point 12 feet away on the ground. How tall is the pole, in feet?",
              "answer": "9",
              "hint": "a² = c² − b² = 225 − 144 = 81. Then take the square root.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "Solve for x: 4x = x + 18",
              "answer": "6",
              "hint": "Take x off both sides: 3x = 18. Then divide by 3.",
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
          "title": "Watch the sign",
          "points": [
            "Below zero means negative. Do not drop the 'below'.",
            "Read all the steps before the first one."
          ],
          "example": "'Start at 41 below and warm up 50 degrees' lands at 9 above."
        },
        "skill": "Following directions",
        "steps": [
          "Two numbers go in the log tonight, and a later step says which one is kept.",
          "Make the first: multiply the 20 minutes the watcher may stay outside at a stretch by the 3 layers of clothing.",
          "Make the second: multiply the 10 minutes bare skin takes to freeze by the 2 layers on the watcher's hands.",
          "The log is keeping the time spent outside, not the time to frostbite. Use the number from step 2, not the one from step 3.",
          "Type that many minutes."
        ],
        "prompt": "Minutes:",
        "answer": "60",
        "hint": "Both answers come out in minutes. Step 4 says which of the two the log is keeping, so read it before you choose."
      }
    },
    {
      "id": "aurora-3",
      "title": "The Planet-Sized Magnet",
      "recon": {
        "lesson": {
          "title": "History inside a log",
          "points": [
            "A log that tells about the past gives dates and what happened. Write them down as you read.",
            "'What happened when' questions want the event, not the date.",
            "The reason something matters today is usually given right after the story ends, often with 'that is why'."
          ],
          "example": "'In 1906 the town bell cracked.' What happened? The bell cracked. When? 1906."
        },
        "title": "Sky Log: The Night the Wires Caught Fire",
        "passage": [
          "The station keeps an instrument that has nothing to do with light. It is a magnetometer, a very sensitive compass that measures the strength and direction of Earth's magnetic field every second. On a quiet night its line on the screen is as flat as a table. When the solar wind blows hard, the field bends and shivers. The line jumps. Then the watcher knows a display is coming an hour before the first green shows. The magnetometer is the station's early warning.",
          "Sometimes the sun throws off more than wind. A solar storm is a huge burst of particles, billions of tons of them, and when one hits Earth the lights can be seen far south of where they belong. In September 1859 a storm so large hit Earth that the northern lights were seen in Cuba and Hawaii, and the telegraph, the only electric machine most towns had, went wild. Sparks jumped from the wires. Operators got shocks. Some telegraph paper caught fire. A few lines kept sending messages after their batteries had been unplugged, running on the electricity the storm put into the wires.",
          "That storm has a name now, the Carrington Event, after the astronomer who watched a flash on the sun that morning and connected it to what happened that night. A storm that size today would do far more than spark a telegraph. It could knock out power grids, satellites and the radios that airplanes use. That is why the station's readings go straight to the people who run the power lines. Tonight the magnetometer is jumping. The watcher writes the time and calls it in."
        ],
        "questions": [
          {
            "q": "What does the magnetometer measure?",
            "choices": [
              "The brightness of the lights",
              "The temperature",
              "The strength and direction of Earth's magnetic field",
              "The height of the aurora above the ground"
            ],
            "answer": 2,
            "hint": "Paragraph 1, the second sentence.",
            "skill": "Finding details"
          },
          {
            "q": "Where were the northern lights seen during the storm of 1859?",
            "choices": [
              "In Cuba and Hawaii",
              "In Antarctica and nowhere else",
              "Only over the North Pole",
              "In Alaska only"
            ],
            "answer": 0,
            "hint": "Paragraph 2, the sentence with 'September 1859'.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 2, what is a 'solar storm'?",
            "choices": [
              "A sudden jump on the magnetometer line",
              "A huge burst of particles thrown off by the sun",
              "A storm over Fairbanks",
              "A kind of telegraph"
            ],
            "answer": 1,
            "hint": "The second sentence of paragraph 2.",
            "skill": "Word meanings"
          },
          {
            "q": "Why do the station's readings go straight to the people who run the power lines?",
            "choices": [
              "Because the station uses so much electricity that the power company keeps an eye on it",
              "Because the power company owns the station and pays for the instruments inside the dome",
              "Because the crews who work on the power lines want to know when to go outside and look up",
              "Because a big storm could knock out the power grid, and warning helps them prepare"
            ],
            "answer": 3,
            "hint": "Paragraph 3, the sentence with 'power grids' and the one right after it.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 2 mostly about?",
            "choices": [
              "The huge storm of 1859 and what it did to the telegraph",
              "How the magnetometer gives the station an hour of early warning",
              "The astronomer the storm was named for, and the flash he saw",
              "What the magnetometer is doing tonight and who the watcher calls"
            ],
            "answer": 0,
            "hint": "Paragraph 2 tells one story from 1859 from start to finish.",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Storm math",
          "points": [
            "Years since 1859: subtract from the current year.",
            "Readings a second over a minute and an hour: multiply by 60 twice.",
            "Different bottoms: make them the same first. 1/3 + 1/4 = 4/12 + 3/12 = 7/12.",
            "A fraction of a number: divide by the bottom, then multiply by the top. 2/5 of 30 is 30 ÷ 5 = 6, then 6 × 2 = 12."
          ],
          "example": "How many 20-minute jobs fit in 2 hours? 2 hours is 120 minutes, and 120 ÷ 20 = 6 jobs."
        },
        "problems": [
          {
            "q": "The Carrington Event was in 1859. How many years ago was that, if this year is 2026?",
            "answer": "167",
            "hint": "2026 − 1859.",
            "skill": "Adding and subtracting"
          },
          {
            "q": "The magnetometer takes 1 reading a second. How many readings in an hour?",
            "answer": "3600",
            "accept": [
              "3,600"
            ],
            "hint": "60 × 60.",
            "skill": "Multiplying"
          },
          {
            "q": "The magnetometer gives 1 hour of warning. The watcher needs 15 minutes to set up each camera. How many cameras can be set up in the warning time?",
            "answer": "4",
            "hint": "60 ÷ 15.",
            "skill": "Dividing"
          },
          {
            "q": "The watcher spent 1/2 of the hour of warning setting up cameras and 1/3 of it checking the magnetometer. How much of the hour was used? (write a fraction)",
            "answer": "5/6",
            "hint": "Make the bottoms the same: 1/2 is 3/6 and 1/3 is 2/6. Then add the tops.",
            "skill": "Fractions"
          },
          {
            "q": "Of 24 telegraph lines in one city, 3/8 kept working with their batteries unplugged. How many lines was that?",
            "answer": "9",
            "hint": "24 ÷ 8 = 3, then 3 × 3.",
            "skill": "Fractions"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "The job of the odd paragraph out",
            "points": [
              "When one paragraph seems to belong to a different report, that is the one to ask about. It is doing a job for the paragraphs around it.",
              "Usually it is there as proof, as an example, or as the cause of what comes next. Decide which before you look at the choices.",
              "A choice that only says what the paragraph contains has not named a job at all. Cross it off."
            ],
            "example": "A report on a bridge inspection that stops to tell you about a bridge that fell in 1940 is not changing the subject. That paragraph is the reason the inspection happens."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea of the whole report?",
              "choices": [
                "In 1859 the northern lights were seen as far south as Cuba and Hawaii, and telegraph wires threw sparks in town after town.",
                "On a quiet night the magnetometer's line on the screen is as flat as a table, and the watcher has nothing to write down.",
                "An instrument that measures magnetism is useful for far more than predicting a light show, because a big enough storm reaches the machines people depend on.",
                "The magnetometer works by measuring how bright the lights are, so it can only be read once the first green shows."
              ],
              "answer": 2,
              "hint": "The instrument, an old disaster, and a phone call to the power companies. Ask what idea needs all three of those to make sense.",
              "skill": "Central idea and evidence",
              "evidence": "It could knock out power grids, satellites and the radios that airplanes use. That is why the station's readings go straight to the people who run the power lines."
            },
            {
              "q": "Claim: the storm of 1859 put electricity into wires that were not connected to any power source. Which sentence from the report best supports that claim?",
              "choices": [
                "A few lines kept sending messages after their batteries had been unplugged, running on the electricity the storm put into the wires.",
                "In September 1859 a storm so large hit Earth that the northern lights were seen in Cuba and Hawaii, and the telegraph, the only electric machine most towns had, went wild.",
                "That storm has a name now, the Carrington Event, after the astronomer who watched a flash on the sun that morning and connected it to what happened that night.",
                "It is a magnetometer, a very sensitive compass that measures the strength and direction of Earth's magnetic field every second."
              ],
              "answer": 0,
              "hint": "The claim's hard part is 'not connected to any power source'. Find the sentence where the usual source of power has been taken away.",
              "skill": "Finding details",
              "evidence": "A few lines kept sending messages after their batteries had been unplugged, running on the electricity the storm put into the wires."
            },
            {
              "q": "Why did the author include the paragraph about 1859?",
              "choices": [
                "To explain how a telegraph machine sends its messages.",
                "To show, with a real case, what the instrument in the first paragraph is really watching for.",
                "To describe what the lights looked like from Cuba and Hawaii on the night of the storm.",
                "To compare the sun with the Earth."
              ],
              "answer": 1,
              "hint": "The first paragraph describes a machine, and the third says who gets its readings. Ask what the middle paragraph has to do to connect those two.",
              "skill": "Author's purpose and structure",
              "evidence": "Sometimes the sun throws off more than wind."
            },
            {
              "q": "The report says the telegraph 'went wild'. What does that phrase mean as it is used here?",
              "choices": [
                "It was destroyed by the storm that night and never worked again.",
                "It was carried away from the towns and out into the empty countryside.",
                "It suddenly became very popular with the public all over the country.",
                "It behaved in ways nobody could control or explain."
              ],
              "answer": 3,
              "hint": "The next few sentences are a list of what going wild looked like: sparks, shocks, fire, machines running with nothing plugged in. Read the list first.",
              "skill": "Word meanings",
              "evidence": "Sparks jumped from the wires. Operators got shocks. Some telegraph paper caught fire."
            },
            {
              "q": "Paragraphs 1 and 3 together explain what the watcher's phone call at the end of the report is for. What is it for?",
              "choices": [
                "The jumping line means a display is on its way, and the same reading is the advance warning the power companies need.",
                "To tell the observatory that the all-sky camera has failed and that tonight's display will have to be written down by hand instead.",
                "To report the exact color and shape of the first green arch as it rose over the northern hills, so that the night's log would be complete.",
                "To tell the town that the magnetometer line has gone flat again, so that the watch for the rest of the night can be called off."
              ],
              "answer": 0,
              "hint": "Paragraph one says what a jumping line predicts and how far ahead. Paragraph three says who is on the other end of the phone. Join them.",
              "skill": "Reading between the lines",
              "evidence": "When the solar wind blows hard, the field bends and shivers. The line jumps. Then the watcher knows a display is coming an hour before the first green shows."
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
              "Fractions with the same bottom: add the tops."
            ],
            "example": "5 × 7 = 35, so 35 set out in 7 equal rows is 5 in each row."
          },
          "problems": [
            {
              "q": "The watcher lays the readings out in 6 rows of 4. How many readings is that?",
              "answer": "24",
              "hint": "6 × 4.",
              "skill": "Multiplying"
            },
            {
              "q": "36 readings are set out in 9 equal rows. How many readings are in each row?",
              "answer": "4",
              "hint": "36 split into 9 equal parts.",
              "skill": "Dividing"
            },
            {
              "q": "The log shows 137 readings, then 114 more are added and 58 are taken off. What does the log show now?",
              "answer": "193",
              "hint": "Add 137 and 114 first, then take 58 off.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "Add: 2/4 + 1/4 (write a fraction)",
              "answer": "3/4",
              "hint": "Same bottom. 2 + 1 on top.",
              "skill": "Fractions"
            },
            {
              "q": "A mat is 5 feet wide and 3 feet long. How many feet is it all the way around the edge?",
              "answer": "16",
              "hint": "Two sides of 5 and two sides of 3: 5 + 5 + 3 + 3.",
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
            "example": "(5 + 3) × 6: parentheses first, 5 + 3 = 8, then 8 × 6 = 48."
          },
          "problems": [
            {
              "q": "The watcher has 9.6 seconds of camera time. Each exposure takes 1.2 seconds. How many exposures is that enough for?",
              "answer": "8",
              "hint": "Move both points 1 place to the right: 96 ÷ 12.",
              "skill": "Decimals"
            },
            {
              "q": "10% of the readings counted is 20. How many were counted in all?",
              "answer": "200",
              "hint": "20 is 10 hundredths of the whole: 20 ÷ 10 × 100.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The watcher counts 4 compasses and 12 readings. In its simplest form, what is the ratio of compasses to readings? (write it like 2:3)",
              "answer": "1:3",
              "accept": [
                "1 to 3"
              ],
              "hint": "Divide both by 4.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The watcher works out (7 + 2) × 11. What is it?",
              "answer": "99",
              "hint": "Parentheses first, then multiply.",
              "skill": "Order of operations"
            },
            {
              "q": "It was −3 degrees at midnight and rose 7 degrees by dawn. What does the thermometer read at dawn?",
              "answer": "4",
              "hint": "Start at −3 and count 7 steps up.",
              "skill": "Negative numbers"
            }
          ]
        },
        "7": {
          "lesson": {
            "title": "Grade 7 numbers",
            "points": [
              "A unit rate is the total divided by how many: 35 miles in 10 hours is 35 ÷ 10 = 3.5 miles an hour.",
              "Percent change: find that percent of the starting number, then add it on or take it off.",
              "Below zero, going up adds and going down subtracts. Walk the number line one step at a time.",
              "A two-step equation: undo the steps in reverse. For 5x + 2, take off the 2 first; for 5(x + 2), divide by 5 first."
            ],
            "example": "(x + 4) × 5 = 55: divide both sides by 5 first, x + 4 = 11, so x = 7."
          },
          "problems": [
            {
              "q": "The watcher has 15 seconds and each exposure takes 0.75 seconds. How many exposures is that enough for?",
              "answer": "20",
              "hint": "15 ÷ 0.75.",
              "skill": "Ratios and percent"
            },
            {
              "q": "A count of readings fell by 25% to 60. What was it before?",
              "answer": "80",
              "hint": "60 is 75% of the old count.",
              "skill": "Ratios and percent"
            },
            {
              "q": "It was 8 degrees, then it fell 17 degrees. What does the thermometer read?",
              "answer": "-9",
              "accept": [
                "−9"
              ],
              "hint": "Fall 8 to reach 0, then keep falling: the rest of the 17 degrees takes it below zero.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: (x + 28) × 6 = 222",
              "answer": "9",
              "hint": "Divide both sides by 6 first, then take 28 off.",
              "skill": "Equations"
            },
            {
              "q": "A model of the station is built at 1 to 4. The camera dome on the model is 9 inches across. How many inches across is the real one?",
              "answer": "36",
              "hint": "Every inch on the model is 4 inches for real.",
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
            "example": "For y = 4x + 7, when x = 6: y = 4 × 6 + 7 = 31."
          },
          "problems": [
            {
              "q": "The count of readings follows the rule y = 9x + 5, where x is the hour. What is y when x = 8?",
              "answer": "77",
              "hint": "Put 8 in for x: 9 × 8 + 5.",
              "skill": "Linear relationships"
            },
            {
              "q": "What is 7² + 7²?",
              "answer": "98",
              "hint": "7 × 7 = 49 and 7 × 7 = 49. Add them.",
              "skill": "Powers and roots"
            },
            {
              "q": "A 17-foot rope reaches the top of an 8-foot pole. How far is the foot of the rope from the base, in feet?",
              "answer": "15",
              "hint": "b² = c² − a² = 289 − 64 = 225. Then take the square root.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "Solve for x: 7x + 30 − 5x = 48",
              "answer": "9",
              "hint": "Collect the x's first: 2x + 30 = 48.",
              "skill": "Equations"
            },
            {
              "q": "What is 3 × 10^3 ÷ 10^2?",
              "answer": "30",
              "hint": "Dividing subtracts the powers: 10^3 ÷ 10^2 = 10^1. So 3 × 10.",
              "skill": "Powers and roots"
            }
          ]
        }
      },
      "orders": {
        "lesson": {
          "title": "Letters, then math",
          "points": [
            "Write the word out and count the letters on paper.",
            "Then do the steps in order."
          ],
          "example": "M-A-G-N-E-T is six letters."
        },
        "skill": "Following directions",
        "steps": [
          "Write the name of the 1859 storm: CARRINGTON.",
          "Count its letters.",
          "Multiply that count by the 2 places far to the south where the lights were seen, Cuba and Hawaii.",
          "Subtract the 1 hour of warning the magnetometer gives.",
          "Change step 3. Go back to your count from step 2 and multiply it by 3 instead, one for each thing a storm this size could knock out: power grids, satellites and airplane radios.",
          "Take the 1 hour of warning off that new number and type the result."
        ],
        "prompt": "Your answer:",
        "answer": "29",
        "hint": "CARRINGTON has ten letters. Step 5 sends you back to that letter count with a different multiplier, so the work in steps 3 and 4 is set aside."
      }
    },
    {
      "id": "aurora-4",
      "title": "Poker Flat",
      "recon": {
        "lesson": {
          "title": "How something works",
          "points": [
            "A 'how' question is answered by a description that may run several sentences. Find where it starts.",
            "A 'why not' question wants the reason the log gives for not doing the obvious thing.",
            "Numbers for height and time are separate details."
          ],
          "example": "'Bees fly out, find flowers, and carry the pollen home.' How do bees get pollen? That whole chain is the answer."
        },
        "title": "Sky Log: A Rocket Into the Lights",
        "passage": [
          "Thirty miles up the road from the station is Poker Flat, the only rocket range in the world owned by a university, and its rockets are built to fly into the northern lights. They are called sounding rockets. They do not go into orbit. A sounding rocket goes straight up, often two hundred miles or more, and spends a few minutes in the thin air where the aurora glows. Then it falls back to Earth in the empty country to the north, where a helicopter goes to collect the instruments.",
          "The reason to fly into the lights instead of watching from below is that the aurora is not just light. It is electricity, moving particles and magnetic fields, and none of that can be measured from the ground. The rocket carries sensors that taste the air, count the particles, and feel the field as it passes through the curtain. It sends the numbers down by radio the whole way. The glowing layer is too high for any airplane and mostly too low for any satellite. Only a rocket can be there.",
          "The hard part is timing. The aurora does not run on a schedule, so the rocket sits on its rail in the cold for days or weeks, fueled and ready. The scientists watch the sky and the magnetometer and wait. The window is a few minutes long. When the display is right, the countdown runs. The rocket is gone in seconds. It leaves a streak of orange fire up through the green. Tonight the launch director calls the station. The magnetometer says tomorrow. Everyone goes to bed early."
        ],
        "questions": [
          {
            "q": "How high does a sounding rocket go?",
            "choices": [
              "Often two hundred miles or more",
              "Thirty miles, the distance up the road",
              "All the way into orbit",
              "Only about two miles up"
            ],
            "answer": 0,
            "hint": "Paragraph 1, the fourth sentence.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 1, what is a 'sounding rocket'?",
            "choices": [
              "A rocket that makes a noise loud enough to be heard thirty miles down the road",
              "A satellite that circles the Earth for years and sends its numbers down by radio",
              "A rocket that goes straight up and falls back without going into orbit",
              "A helicopter that flies out north after a launch to pick up the instruments"
            ],
            "answer": 2,
            "hint": "The second through fifth sentences of paragraph 1.",
            "skill": "Word meanings"
          },
          {
            "q": "How does the rocket send its measurements back?",
            "choices": [
              "On paper, inside the nose of the rocket",
              "By helicopter",
              "It stores them",
              "By radio, the whole way"
            ],
            "answer": 3,
            "hint": "Paragraph 2, the sentence with 'sends the numbers down'.",
            "skill": "Finding details"
          },
          {
            "q": "Why can neither an airplane nor a satellite do the rocket's job?",
            "choices": [
              "Because airplanes and satellites cost far too much to send",
              "Because it is too cold for their engines up in the lights",
              "Because the glowing layer is too high for a plane and mostly too low for a satellite",
              "Because they move too fast to measure anything on the way"
            ],
            "answer": 2,
            "hint": "Paragraph 2, the second-to-last sentence.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 3 mostly about?",
            "choices": [
              "Why launching is a matter of waiting for the right few minutes",
              "What the rocket carries and what its sensors do inside the curtain",
              "The helicopter that goes to find the rocket",
              "How high above the ground the aurora glows and why that is hard to reach"
            ],
            "answer": 0,
            "hint": "The first sentence of paragraph 3 says 'The hard part is timing.'",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Rocket math",
          "points": [
            "Miles up over minutes: divide for miles per minute.",
            "Miles to feet: multiply by 5,280.",
            "Hundredths as decimals: 4/100 is 0.04 and 60/100 is 0.60.",
            "Two-step: seconds in a window, then readings per second."
          ],
          "example": "150 miles in 6 minutes is 150 ÷ 6 = 25 miles a minute."
        },
        "problems": [
          {
            "q": "The rocket climbs 200 miles in 4 minutes. How many miles a minute is that?",
            "answer": "50",
            "hint": "200 ÷ 4.",
            "skill": "Dividing"
          },
          {
            "q": "The rocket's sensor scores the lights from 0 to 1 in hundredths. Tonight it reads 83/100. Write that as a decimal.",
            "answer": "0.83",
            "hint": "83 hundredths: two places after the point.",
            "skill": "Decimals"
          },
          {
            "q": "The launch window is 5 minutes. The sensors take 20 readings a second. How many readings in the whole window?",
            "answer": "6000",
            "accept": [
              "6,000"
            ],
            "hint": "5 × 60 = 300 seconds. Then 300 × 20.",
            "skill": "Multi-step problems"
          },
          {
            "q": "Poker Flat is 30 miles from the station. A mile is 5,280 feet. How many feet is 30 miles?",
            "answer": "158400",
            "accept": [
              "158,400"
            ],
            "hint": "5,280 × 30: 5,280 × 3 = 15,840, then add a zero.",
            "skill": "Multiplying"
          },
          {
            "q": "The range has launched 16 rockets this winter. 1/4 of them flew into the lights. How many rockets is that?",
            "answer": "4",
            "hint": "16 ÷ 4.",
            "skill": "Fractions"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "Borrowed words",
            "points": [
              "Writers borrow ordinary words for unusual work. A river does not run on legs, and a deadline is not a line you can see.",
              "When a word looks wrong for the job, look at the words beside it doing the same job. They will tell you what is meant.",
              "The literal meaning is always one of the choices, and it is always the one to be careful about."
            ],
            "example": "'The engine drank fuel.' Nothing is thirsty. The words around it are about how fast the tank emptied, and that is the whole meaning."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea that develops across the whole report?",
              "choices": [
                "There is a band of sky that only a rocket can reach, and reaching it depends on being ready the moment the sky performs.",
                "A sounding rocket goes straight up and then falls back to Earth.",
                "The rocket sits on its rail in the cold for days or weeks, fueled and ready.",
                "The rocket's instruments hold their numbers until the helicopter collects them out of the snow, which is why the flight north matters so much."
              ],
              "answer": 0,
              "hint": "What the rocket is, why nothing else will do, and the waiting. Ask what idea needs all three paragraphs and not just the first.",
              "skill": "Central idea and evidence",
              "evidence": "The glowing layer is too high for any airplane and mostly too low for any satellite."
            },
            {
              "q": "Claim: some things about the aurora cannot be learned by looking at it. Which sentence from the report best supports that claim?",
              "choices": [
                "Thirty miles up the road from the station is Poker Flat, the only rocket range in the world owned by a university, and its rockets are built to fly into the northern lights.",
                "A sounding rocket goes straight up, often two hundred miles or more, and spends a few minutes in the thin air where the aurora glows.",
                "It is electricity, moving particles and magnetic fields, and none of that can be measured from the ground.",
                "The aurora does not run on a schedule, so the rocket sits on its rail in the cold for days or weeks, fueled and ready."
              ],
              "answer": 2,
              "hint": "The claim is about the limits of looking. Find the sentence that says outright what cannot be measured, and from where.",
              "skill": "Finding details",
              "evidence": "It is electricity, moving particles and magnetic fields, and none of that can be measured from the ground."
            },
            {
              "q": "What job does the second paragraph do?",
              "choices": [
                "It lists the instruments in the order they are switched on.",
                "It describes the empty country to the north where the rocket comes down and the helicopter goes to collect it.",
                "It compares Poker Flat with other rocket ranges.",
                "It answers the obvious question the first paragraph raises: why fly into the lights at all?"
              ],
              "answer": 3,
              "hint": "Read the first six words of the paragraph. A paragraph that begins with 'the reason' is answering something asked just before it.",
              "skill": "Author's purpose and structure",
              "evidence": "The reason to fly into the lights instead of watching from below is that the aurora is not just light."
            },
            {
              "q": "The report says the rocket carries 'sensors that taste the air'. What does taste mean as it is used here?",
              "choices": [
                "Put it in the mouth to try it",
                "Warm it up before measuring it",
                "Sample it and measure what it is made of",
                "Photograph it from very close range"
              ],
              "answer": 2,
              "hint": "The same sentence gives two more verbs doing the same kind of work: count, and feel. Instruments have no tongues. What are all three really describing?",
              "skill": "Word meanings",
              "evidence": "The rocket carries sensors that taste the air, count the particles, and feel the field as it passes through the curtain."
            },
            {
              "q": "Paragraphs 1 and 2 together suggest why the science survives even if the helicopter has trouble finding the rocket. Why does it?",
              "choices": [
                "The instruments radio their numbers down while the rocket is still flying, so the readings are on the ground before the rocket is.",
                "The rocket falls back so gently into the deep snow of the empty country to the north that nothing on board it is damaged by the landing.",
                "A second rocket is always launched at the same moment.",
                "The all-sky camera on the ground records the same particles and fields that the rocket does, so the rocket's numbers are only a second copy."
              ],
              "answer": 0,
              "hint": "One paragraph tells you what happens to the rocket after the flight. Another tells you when the numbers are sent. Notice which of those comes first.",
              "skill": "Reading between the lines",
              "evidence": "It sends the numbers down by radio the whole way."
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
              "Subtracting: line up the ones, tens and hundreds, and borrow when the top digit is too small.",
              "A fraction is parts done over equal parts in all: 2 of 5 parts is 2/5."
            ],
            "example": "7 × 3 = 21, so 21 shared into 3 equal piles is 7 each."
          },
          "problems": [
            {
              "q": "Every launch needs 9 safety checks, and there are 5 launches. How many safety checks is that?",
              "answer": "45",
              "hint": "5 groups of 9, so 5 × 9.",
              "skill": "Multiplying"
            },
            {
              "q": "The watcher splits 90 photos in half. How many photos is one half?",
              "answer": "45",
              "hint": "Half of 90.",
              "skill": "Dividing"
            },
            {
              "q": "The watcher needs 1,000 photos and has 382. How many more are needed?",
              "answer": "618",
              "hint": "1,000 − 382.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "The day's work is cut into 6 equal parts and the watcher has finished 4 of them. What fraction is done? (write a fraction)",
              "answer": "4/6",
              "hint": "4 parts out of 6.",
              "skill": "Fractions"
            },
            {
              "q": "The watcher snaps 382 photos of the northern lights, then 58 more. How many photos is that?",
              "answer": "440",
              "hint": "382 + 58.",
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
            "example": "6 × 4 − 3 × 2: do both multiplications first, 24 − 6 = 18."
          },
          "problems": [
            {
              "q": "The thermos is 5/6 full of cocoa. Each cup holds 1/12 of the thermos. How many cups can the watcher pour?",
              "answer": "10",
              "hint": "Write 5/6 with the same bottom as 1/12: 5/6 = 10/12. How many 1/12s is that?",
              "skill": "Fractions"
            },
            {
              "q": "Of 80 photos, 75% are struck off the list. How many are left on it?",
              "answer": "20",
              "hint": "75% of 80 is 60. Take that off 80.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The watcher shares 56 seconds between two teams in the ratio 3 to 4. How many does the smaller share get?",
              "answer": "24",
              "hint": "3 + 4 = 7 parts. 56 ÷ 7 = 8 for one part.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The watcher works out 5 × 11 − 1 × 2. What is it?",
              "answer": "53",
              "hint": "Do both multiplications first, then subtract.",
              "skill": "Order of operations"
            },
            {
              "q": "The coldest reading was −22 degrees and the warmest was −11 degrees. How many degrees apart are they?",
              "answer": "11",
              "hint": "From −22 up to −11.",
              "skill": "Negative numbers"
            }
          ]
        },
        "7": {
          "lesson": {
            "title": "Grade 7 numbers",
            "points": [
              "A unit rate is the total divided by how many: 45 miles in 3 hours is 45 ÷ 3 = 15 miles an hour.",
              "Percent change: find that percent of the starting number, then add it on or take it off.",
              "Multiplying or dividing with one minus sign gives a minus answer: 3 × (−5) = −15, and −15 ÷ 3 = −5.",
              "A two-step equation: undo the steps in reverse. For 3x + 7, take off the 7 first; for 3(x + 7), divide by 3 first."
            ],
            "example": "3(x + 4) = 27: divide both sides by 3 to get x + 4 = 9, so x = 5."
          },
          "problems": [
            {
              "q": "20 exposures took 50 seconds. At the same rate, how many seconds would 28 exposures take?",
              "answer": "70",
              "hint": "One exposure takes 50 ÷ 20 = 2.5. Then × 28.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The watcher had 120 photos, then added 50% more. How many photos were added?",
              "answer": "60",
              "hint": "50% of 120: 50/100 × 120.",
              "skill": "Ratios and percent"
            },
            {
              "q": "Over 8 hours the thermometer fell 24 degrees in all, the same amount each hour. What was the change each hour? (Write a fall as a negative number.)",
              "answer": "-3",
              "accept": [
                "−3"
              ],
              "hint": "Share −24 into 8 equal parts: −24 ÷ 8. One minus sign, so the answer is negative.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: 2(x + 17) = 46",
              "answer": "6",
              "hint": "Divide both sides by 2 to get x + 17 = 23.",
              "skill": "Equations"
            },
            {
              "q": "A round tile has a radius of 10 inches. Using 3.14 for pi, what is its area in square inches?",
              "answer": "314",
              "hint": "Area = 3.14 × radius × radius: 3.14 × 10 × 10.",
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
            "example": "A list starts at 7 and adds 4 each step. The 10th number is 9 steps on: 7 + 4 × 9 = 43."
          },
          "problems": [
            {
              "q": "The count of photos goes 12, 15, 18, 21, and on. What is the 12th number in the list?",
              "answer": "45",
              "hint": "It starts at 12 and adds 3 each step. The number you want is 11 steps on from 12.",
              "skill": "Linear relationships"
            },
            {
              "q": "What is 15² − 15?",
              "answer": "210",
              "hint": "15 × 15 = 225, then take 15 off.",
              "skill": "Powers and roots"
            },
            {
              "q": "A right triangle has short sides of 8 and 15 feet. How long is its longest side, in feet?",
              "answer": "17",
              "hint": "8² + 15² = 289. The longest side is the square root of that.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "Solve for x: 11x − 5x = 36",
              "answer": "6",
              "hint": "11 − 5 = 6, so 6x = 36.",
              "skill": "Equations"
            },
            {
              "q": "A round tank is 6 feet across and 5 feet deep. Using 3.14 for pi, what is its volume in cubic feet? (The radius is half the distance across.)",
              "answer": "141.3",
              "hint": "The radius is 6 ÷ 2 = 3. Volume = 3.14 × radius × radius × depth: 3.14 × 3 × 3 × 5.",
              "skill": "Area and perimeter"
            }
          ]
        }
      },
      "orders": {
        "lesson": {
          "title": "Countdown",
          "points": [
            "Some orders count down instead of up. Read the direction.",
            "Then do exactly what the last step says with the result."
          ],
          "example": "Counting down from 10 by 2s: 10, 8, 6, 4, 2, 0. That is six numbers."
        },
        "skill": "Following directions",
        "steps": [
          "Start with the 200 miles a sounding rocket climbs.",
          "Subtract the 30 miles of road between the station and Poker Flat.",
          "The launch window that night was 5 minutes long. Divide by 5.",
          "Add the 30 miles the helicopter flies north to pick up the instruments.",
          "Type the result, unless 200 miles is too high for any airplane to reach, in which case type TOO HIGH instead."
        ],
        "prompt": "Your answer:",
        "answer": "TOO HIGH",
        "accept": [
          "too high",
          "Too high",
          "too high.",
          "toohigh",
          "TOOHIGH"
        ],
        "hint": "Work the subtraction and the division in order, then add the helicopter's miles. Step 5 then asks something about airplanes."
      }
    },
    {
      "id": "aurora-5",
      "title": "Launch Night",
      "recon": {
        "lesson": {
          "title": "The order things happened",
          "points": [
            "A log of a big night tells events in order. Look for times and for 'then', 'after', 'at last'.",
            "A question about a time wants the clock reading from the log.",
            "The main idea of the last paragraph is the thing the writer wants you to keep."
          ],
          "example": "'At 3:15 the bell rang. At 3:25 the last bus left.' How long between them? Ten minutes."
        },
        "title": "Sky Log: Launch",
        "passage": [
          "The magnetometer started jumping at nine. By ten the hills to the north were under a green arch. It was so bright it threw shadows. By eleven the arch had broken into curtains that folded and unfolded across the whole sky, faster than anyone could point. The station's radio was open to the launch control room at Poker Flat, and for two hours the watcher's job was to say out loud, every minute, what the sky was doing. Brighter. Moving east. Red at the top now. Curtain straight overhead.",
          "At 11:40 the launch director said the words the whole range had waited twelve days to hear: the window is open. The countdown started at two minutes. At 11:42 an orange streak went up from behind the hills, silent at first, then a rumble that arrived more than two minutes later across the thirty miles. The rocket climbed straight into the brightest part of the curtain. Then it was gone, deep inside. Two hundred miles up, it was in the middle of the lights. There its sensors began to send numbers down. In the control room, people who had not slept properly in two weeks cheered.",
          "The watcher's log for the night is three pages long, one line for every minute, and the last line says only: 11:42, launch, curtain overhead, red top, all instruments running. Tomorrow a helicopter will fly north to find the rocket in the snow. The numbers will take scientists a year to figure out. Tonight the sky is still moving, green and red and violet, with nobody left to report it to, and the watcher stands on the hill at forty below and watches anyway."
        ],
        "questions": [
          {
            "q": "What time did the launch director say the window was open?",
            "choices": [
              "11:40",
              "Nine o'clock",
              "11:42",
              "Midnight"
            ],
            "answer": 0,
            "hint": "The first sentence of paragraph 2.",
            "skill": "Finding details"
          },
          {
            "q": "How long was the countdown?",
            "choices": [
              "Twelve days and nights",
              "Two hours on the radio",
              "Two minutes",
              "About thirty seconds"
            ],
            "answer": 2,
            "hint": "Paragraph 2, the second sentence.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 1, what does it mean that the arch 'threw shadows'?",
            "choices": [
              "It kept changing shape as it moved across the sky",
              "It made the watcher afraid",
              "It was low enough to hang just over the northern hills",
              "It was so bright that objects on the ground cast shadows from its light"
            ],
            "answer": 3,
            "hint": "Only something bright can make a shadow. The sentence is about how bright the arch was.",
            "skill": "Word meanings"
          },
          {
            "q": "Why did the rumble arrive more than two minutes after the orange streak appeared?",
            "choices": [
              "Because sound takes time to travel the thirty miles, and light arrives almost at once",
              "Because the rocket climbed slowly at first",
              "Because the radio from Poker Flat was delayed",
              "Because the watcher was standing inside the cabin with the door shut when the rocket went up"
            ],
            "answer": 0,
            "hint": "Paragraph 2 says 'silent at first, then a rumble that arrived more than two minutes later across the thirty miles'.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 3 mostly about?",
            "choices": [
              "The helicopter that will fly north tomorrow",
              "How the sky turned green and red and violet over the northern hills for the whole night",
              "The end of the night: the log, what comes next, and the watcher staying to look",
              "What the people in the control room at Poker Flat did when the rocket disappeared into the curtain"
            ],
            "answer": 2,
            "hint": "Paragraph 3 closes the story: the log, tomorrow, and the watcher on the hill.",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Launch night numbers",
          "points": [
            "Lines in the log: one a minute for the hours of reporting.",
            "Sound travels about 1 mile in 5 seconds: distance × 5.",
            "Same bottom: 2/9 + 5/9 = 7/9.",
            "Two-step: minutes of reporting, then lines per page."
          ],
          "example": "3 hours of one line a minute is 3 × 60 = 180 lines. On 4 pages, that is 180 ÷ 4 = 45 a page."
        },
        "problems": [
          {
            "q": "The watcher reported once a minute for 2 hours. How many lines is that in the log?",
            "answer": "120",
            "hint": "2 × 60.",
            "skill": "Multiplying"
          },
          {
            "q": "The log has 120 lines on 3 pages, the same on each page. How many lines per page?",
            "answer": "40",
            "hint": "120 ÷ 3.",
            "skill": "Dividing"
          },
          {
            "q": "Sound travels about 1 mile every 5 seconds. Poker Flat is 30 miles away. About how many seconds after the launch did the rumble arrive?",
            "answer": "150",
            "hint": "30 × 5.",
            "skill": "Multiplying"
          },
          {
            "q": "The sky was green for 1/3 of the night and red on top for another 1/3. What fraction of the night is that together? (write a fraction)",
            "answer": "2/3",
            "hint": "Same bottom. Add the tops.",
            "skill": "Fractions"
          },
          {
            "q": "The range waited 12 days for this launch. The scientists will spend a year, 365 days, on the numbers. How many days is that in all, waiting plus studying?",
            "answer": "377",
            "hint": "365 + 12.",
            "skill": "Adding and subtracting"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "Read across the gap",
            "points": [
              "The last question needs a fact from one paragraph and a fact from another. The answer is in the gap between them.",
              "Look for two things that change: what was true at the start of the report, and what is true at the end. The change is usually the point.",
              "Before you commit, check that you could point at two lines in two different paragraphs. One line is never enough here."
            ],
            "example": "Paragraph one: the phone rang all afternoon. Paragraph three: the office is empty and the phone is still ringing. The gap between them says more than either line does."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea of the whole report?",
              "choices": [
                "Twelve days of waiting came down to two minutes, and the report is about what it takes to be ready for them.",
                "The rocket left the ground at 11:42, silent at first, and the rumble arrived seconds later across the thirty miles of hills.",
                "The watcher's log for the night is three pages long, with one line written for each minute of it.",
                "The launch went ahead on the very first night the team tried, because the magnetometer had been jumping since nine o'clock."
              ],
              "answer": 0,
              "hint": "A sky report every minute for two hours, a two-minute countdown, and a year of work still to come. Ask what all of that is in service of.",
              "skill": "Central idea and evidence",
              "evidence": "At 11:40 the launch director said the words the whole range had waited twelve days to hear: the window is open."
            },
            {
              "q": "Claim: the watcher's spoken reports were part of the launch itself, not just notes for later. Which sentence from the report best supports that claim?",
              "choices": [
                "By eleven the arch had broken into curtains that folded and unfolded across the whole sky, faster than anyone could point.",
                "At 11:42 an orange streak went up from behind the hills, silent at first, then a rumble that arrived more than two minutes later across the thirty miles.",
                "The station's radio was open to the launch control room at Poker Flat, and for two hours the watcher's job was to say out loud, every minute, what the sky was doing.",
                "The watcher's log for the night is three pages long, one line for every minute, and the last line says only: 11:42, launch, curtain overhead, red top, all instruments running."
              ],
              "answer": 2,
              "hint": "The claim is about who was listening at the time. Find the sentence that puts somebody on the other end of the line.",
              "skill": "Finding details",
              "evidence": "The station's radio was open to the launch control room at Poker Flat, and for two hours the watcher's job was to say out loud, every minute, what the sky was doing."
            },
            {
              "q": "Why does the report carry on after the launch instead of ending on the cheer in the control room?",
              "choices": [
                "To explain how a helicopter flies north and finds a rocket that has come down in deep snow.",
                "To list the colors of the aurora that were still moving in the sky, in order of brightness.",
                "To describe the equipment inside the control room at Poker Flat and the people who cheered there.",
                "To show that the work does not stop at the launch: the collecting, the year of study and the watching all carry on."
              ],
              "answer": 3,
              "hint": "Ask what would be missing if the report stopped at the cheering. Read the final sentence before you choose.",
              "skill": "Author's purpose and structure",
              "evidence": "Tomorrow a helicopter will fly north to find the rocket in the snow. The numbers will take scientists a year to figure out."
            },
            {
              "q": "The launch director says 'the window is open'. What does window mean as it is used here?",
              "choices": [
                "A short stretch of time in which the launch can go ahead",
                "An opening in the wall of the control room that the team looks through",
                "A gap in the clouds above the range",
                "A clear view of the rocket from the station"
              ],
              "answer": 0,
              "hint": "Twelve days of waiting, and then a countdown starts immediately. Whatever this is, it has only just arrived and it will not last.",
              "skill": "Word meanings",
              "evidence": "At 11:40 the launch director said the words the whole range had waited twelve days to hear: the window is open."
            },
            {
              "q": "Paragraphs 1 and 3 together suggest something about the watcher. What is it?",
              "choices": [
                "The watcher was disappointed to have seen the launch only from thirty miles away and stayed out on the hill afterward.",
                "The watcher had been ordered by the control room to stay outside on the hill and keep reporting until dawn came.",
                "The reporting was a job with an audience, but the watching is something the watcher does anyway.",
                "The radio to the control room had stopped working."
              ],
              "answer": 2,
              "hint": "Paragraph one tells you who the watcher was talking to and why. The last sentence tells you who is listening now. The difference between them is the point.",
              "skill": "Reading between the lines",
              "evidence": "Tonight the sky is still moving, green and red and violet, with nobody left to report it to, and the watcher stands on the hill at forty below and watches anyway."
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
              "Subtracting: line up the ones, tens and hundreds, and borrow when the top digit is too small.",
              "Fractions with the same bottom: the bigger top is the bigger fraction."
            ],
            "example": "9 × 3 = 27, so 27 ÷ 3 = 9. A times fact gives you a sharing fact too."
          },
          "problems": [
            {
              "q": "The watcher waits 7 seconds on each of 6 photos. How many seconds is that?",
              "answer": "42",
              "hint": "6 × 7.",
              "skill": "Multiplying"
            },
            {
              "q": "Every photo takes 5 seconds. The watcher has 35 seconds. How many photos fit?",
              "answer": "7",
              "hint": "How many 5s fit into 35?",
              "skill": "Dividing"
            },
            {
              "q": "The camera ran for 446 seconds in the morning and 594 seconds in the evening. How many more seconds in the evening?",
              "answer": "148",
              "hint": "594 − 446.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "Which is bigger, 6/8 or 3/8? (write a fraction)",
              "answer": "6/8",
              "hint": "Same bottom, so the bigger top wins.",
              "skill": "Fractions"
            },
            {
              "q": "A square frame is 3 feet on each side. How many feet is it all the way around?",
              "answer": "12",
              "hint": "Four sides of 3.",
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
            "example": "(10 − 4) × (3 + 2): each set of parentheses first, 6 and 5, then 6 × 5 = 30."
          },
          "problems": [
            {
              "q": "The plan allows 35 seconds. The watcher uses 7.15 seconds on the first exposure and 12.4 on the second. How many seconds are left?",
              "answer": "15.45",
              "hint": "Add the two amounts used first, then take that from 35. Line up the points.",
              "skill": "Decimals"
            },
            {
              "q": "Out of every 100 seconds, 25 are set aside. Out of 160 seconds, how many is that?",
              "answer": "40",
              "hint": "160 is 1.6 hundreds, so 1.6 × 25.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The watcher divides 21 minutes of work in the ratio 3 to 4. How many minutes is the larger share?",
              "answer": "12",
              "hint": "7 parts in all, so one part is 3 minutes.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The watcher works out (7 − 3) × (6 + 20). What is it?",
              "answer": "104",
              "hint": "Each set of parentheses first, then multiply the two answers.",
              "skill": "Order of operations"
            },
            {
              "q": "Three readings came in: −11, −3 and 8 degrees. Which is the coldest?",
              "answer": "-11",
              "accept": [
                "−11"
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
              "A unit rate is the total divided by how many: 28 miles in 8 hours is 28 ÷ 8 = 3.5 miles an hour.",
              "Percent change: find that percent of the starting number, then add it on or take it off.",
              "Below zero, going up adds and going down subtracts. Walk the number line one step at a time.",
              "A two-step equation: undo the adding or subtracting first, then undo the multiplying or dividing."
            ],
            "example": "x ÷ 4 − 3 = 7: add 3 to both sides to get x ÷ 4 = 10, then multiply by 4, so x = 40."
          },
          "problems": [
            {
              "q": "The job needs 25 seconds in all, at 1.25 seconds for each exposure. One exposure is already done. How many exposures are left?",
              "answer": "19",
              "hint": "25 ÷ 1.25 = 20 in all, then take the finished one off.",
              "skill": "Ratios and percent"
            },
            {
              "q": "An exposure plan is 120 seconds long. The rule says it may grow by no more than 25%. What is the longest it may be, in seconds?",
              "answer": "150",
              "hint": "25% of 120 is 30. Add it on.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The thermometer fell 2 degrees from −10 degrees. What does it read?",
              "answer": "-12",
              "accept": [
                "−12"
              ],
              "hint": "Start at −10 and go 2 more degrees below zero: −10 − 2.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: x ÷ 2 − 6 = 5",
              "answer": "22",
              "hint": "Add 6 to both sides, then multiply by 2.",
              "skill": "Equations"
            },
            {
              "q": "A drawing uses 1 inch for every 4 feet. How many inches are needed for 24 feet?",
              "answer": "6",
              "hint": "24 ÷ 4.",
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
            "example": "A line through (0, 1) and (5, 21) rises 20 while it runs 5, so its slope is 20 ÷ 5 = 4."
          },
          "problems": [
            {
              "q": "A line passes through (0, 5) and (6, 23). What is its slope?",
              "answer": "3",
              "hint": "Slope is the rise over the run: 18 ÷ 6.",
              "skill": "Linear relationships"
            },
            {
              "q": "An exposure of 8² seconds is doubled. How many seconds is that?",
              "answer": "128",
              "hint": "8² is 64. Double it.",
              "skill": "Powers and roots"
            },
            {
              "q": "The watcher goes 9 feet east and then 12 feet north. In a straight line, how far is that from the start, in feet?",
              "answer": "15",
              "hint": "The two legs make a right angle: 9² + 12² = 225.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "For what value of x do 8x + 26 and 2x + 68 come to the same number?",
              "answer": "7",
              "hint": "Set them equal, take 2x off both sides, then take 26 off.",
              "skill": "Equations"
            },
            {
              "q": "The watcher writes 7 × 10^4, then counts ten times as many. Written out in full, what is the new number?",
              "answer": "700000",
              "hint": "Ten times adds one to the power: 7 × 10^5.",
              "skill": "Powers and roots"
            }
          ]
        }
      },
      "orders": {
        "lesson": {
          "title": "The last step, once more",
          "points": [
            "Read to the end before you begin.",
            "If the last step asks for a word, a number is wrong even if it is the right number."
          ],
          "example": "'Type the color, not the count' means a color."
        },
        "skill": "Following directions",
        "steps": [
          "Write the launch time: 11:42.",
          "Add its two numbers together: 11 + 42.",
          "Subtract the 12 days the range waited for its window.",
          "Multiply by the 3 pages of the watcher's log.",
          "Ignore step 4. The pages are pages, not part of the count, so your number stays where step 3 left it.",
          "Type the number you finish on."
        ],
        "prompt": "Your answer:",
        "answer": "41",
        "hint": "Step 5 cancels the multiplying in step 4. Your answer is the number step 3 left you holding."
      }
    }
  ]
};
if (window.BASECAMP_MISSIONS && window.BASECAMP_MISSIONS.register) window.BASECAMP_MISSIONS.register(C);
else (window.BASECAMP_CAMPAIGNS_PENDING = window.BASECAMP_CAMPAIGNS_PENDING || []).push(C);
})();
