// ODYSSEY — campaign "storm". GENERATED, do not edit.
// Source of truth: content/missions-full.js. Rebuild with:  python3 tools/split-missions.py
// RULE: nothing in this file is about the person using it. Content only.
(function () {
var C = {
  "id": "storm",
  "ready": true,
  "kind": "shift",
  "readingLevel": {
    "fk": 5.6,
    "cl": 5.9
  },
  "grade": "5",
  "kindLabel": "Chase",
  "form": "gust",
  "title": "Storm Chase",
  "subtitle": "The Great Plains, tornado season",
  "pitch": "Five days with a research team chasing the biggest thunderstorms on Earth across flat country. A radar truck, a drone that flies into the edge of the storm, hail the size of golf balls, and one tornado you measure from a mile and a half away.",
  "scene": "assets/scene-storm.jpg",
  "progress": {
    "unit": "storms",
    "total": 5
  },
  "dayNoun": "Chase",
  "stageNoun": "Storm",
  "finalNoun": "Tornado",
  "stages": [
    "Storm 1",
    "Storm 2",
    "Storm 3",
    "Storm 4",
    "Tornado"
  ],
  "reconNoun": "Forecast",
  "legs": {
    "recon": "Forecast",
    "nav": "Road math",
    "orders": "Chase rules",
    "debrief": "Motel"
  },
  "fact": "The Plains get more tornadoes than anywhere on Earth because warm wet air from the Gulf runs into cold air from Canada and dry air from the Rockies with nothing in between to stop it. Chasers call it the alley.",
  "finale": {
    "prompt": "The tornado lifted and the sky is clearing behind it. Which color goes on the map pin for this storm?",
    "options": [
      {
        "label": "Red",
        "color": "#FF6B6B"
      },
      {
        "label": "Purple",
        "color": "#B57BFF"
      },
      {
        "label": "Green",
        "color": "#4FD18B"
      },
      {
        "label": "White",
        "color": "#F4F8FF"
      }
    ],
    "done": "Pin it. Then check on the farm the storm passed. Data is the second job."
  },
  "patrols": [
    {
      "id": "storm-1",
      "title": "Morning Briefing",
      "recon": {
        "lesson": {
          "title": "Questions first, then the forecast",
          "points": [
            "Read the five questions before the forecast. Two want a detail, one wants a word, one wants a why, one wants what a paragraph is mostly about.",
            "When a forecast explains a recipe, each ingredient is a detail.",
            "The answer is always in the forecast. You never have to guess."
          ],
          "example": "Question: 'What three vehicles does the team have?' Hunt for a list of three."
        },
        "title": "Forecast: The Recipe",
        "passage": [
          "A thunderstorm needs three things, and the team's morning briefing is a check of all three. It needs moisture, warm damp air near the ground, which today is pouring up from the Gulf of Mexico five hundred miles south. It needs instability. That means the air near the ground is much warmer than the air high above it. So a bubble of that warm air will rise like a hot-air balloon and keep rising. And it needs a lift, something to give that bubble a shove: a front, a line of hills, or the afternoon sun heating the fields until the air over them simply lets go.",
          "The forecast map hangs on the motel wall. It has a red bulge drawn over the western part of the state. The team leader taps it. That is where a dry line, the boundary between damp Gulf air and dry desert air from the west, will sit this afternoon. Storms fire along it like posts along a fence. By two o'clock the sky over the wheat will be a row of towers. They will be cumulus clouds, boiling up thirty and forty thousand feet. One of them, if the forecast is right, will turn into a supercell: a single rotating storm that can last for hours and throw hail, wind and tornadoes.",
          "The team is three vehicles: a radar truck with a dish on the roof, a chase car with the drone in the back, and a van that carries the probes. The probes are heavy steel boxes stuffed with instruments. They get set down in a storm's path and left there. Nobody chases for fun. The data from a storm measured up close is how forecasters learn to warn a town twenty minutes sooner. Twenty minutes is the difference between a basement and a field. The team rolls at ten."
        ],
        "questions": [
          {
            "q": "What are the three things a thunderstorm needs?",
            "choices": [
              "Wind, rain and hail",
              "Heat, dust and clouds",
              "Moisture, instability and lift",
              "A truck, a drone and a van"
            ],
            "answer": 2,
            "hint": "Paragraph 1, the three sentences that say 'it needs'.",
            "skill": "Finding details"
          },
          {
            "q": "Where is the moisture coming from today?",
            "choices": [
              "The mountains to the west",
              "The cold air coming down from Canada",
              "The Gulf of Mexico",
              "The Pacific, five hundred miles west"
            ],
            "answer": 2,
            "hint": "Paragraph 1, the second sentence.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 2, what is a 'dry line'?",
            "choices": [
              "The boundary between damp Gulf air and dry desert air",
              "A line of storms firing one after another",
              "The edge of the storm where the rain stops",
              "A row of clouds"
            ],
            "answer": 0,
            "hint": "The sentence 'a dry line, the boundary between...'.",
            "skill": "Word meanings"
          },
          {
            "q": "Why does the team chase storms?",
            "choices": [
              "Because chasing storms is the most exciting way anyone has found to spend an afternoon",
              "So that the team can take photographs of a supercell from close enough to see it rotate",
              "Because up-close data helps forecasters warn towns sooner, and minutes save lives",
              "Because measuring a storm up close is the only way to prove that a supercell can last for hours"
            ],
            "answer": 2,
            "hint": "Paragraph 3, the sentences after 'Nobody chases for fun.'",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 1 mostly about?",
            "choices": [
              "The three ingredients a thunderstorm needs",
              "The forecast map",
              "Where the dry line will sit this afternoon and why storms fire along it",
              "The three vehicles the team drives and what each of them carries"
            ],
            "answer": 0,
            "hint": "Paragraph 1 lists and explains each of the three things.",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Chase math",
          "points": [
            "Miles at a speed: distance ÷ speed = hours.",
            "Feet of cloud height: thousands of feet.",
            "Leftovers: 26 ÷ 4 is 6 with 2 left over, because 6 × 4 = 24.",
            "Same bottom: add the tops. 2/9 + 5/9 = 7/9."
          ],
          "example": "160 miles at 40 miles an hour is 160 ÷ 40 = 4 hours."
        },
        "problems": [
          {
            "q": "The dry line is 150 miles west. The team drives at 50 miles an hour. How many hours is the drive?",
            "answer": "3",
            "hint": "150 ÷ 50.",
            "skill": "Dividing"
          },
          {
            "q": "The team rolls at 10 in the morning and the drive takes 3 hours. What time do they arrive? (write the hour)",
            "answer": "1",
            "accept": [
              "1:00",
              "13",
              "13:00",
              "1pm",
              "1 pm",
              "1:00pm",
              "1:00 pm",
              "1 p.m.",
              "1:00 p.m.",
              "1p.m."
            ],
            "hint": "10 + 3 = 13, which is 1 in the afternoon.",
            "skill": "Multi-step problems"
          },
          {
            "q": "A storm tower is 40,000 feet tall. A mile is 5,280 feet. Is that more than 7 miles? Type how many feet over 7 miles it is. (7 miles is 36,960 feet.)",
            "answer": "3040",
            "accept": [
              "3,040"
            ],
            "hint": "40,000 − 36,960.",
            "skill": "Adding and subtracting"
          },
          {
            "q": "The team packs 40 water bottles into the 3 vehicles, the same number in each, as many as possible. How many bottles are left over?",
            "answer": "1",
            "hint": "3 × 13 = 39. How many are left after 39?",
            "skill": "Dividing"
          },
          {
            "q": "The team spent 1/5 of the morning on the briefing and 3/5 loading the trucks. What fraction of the morning is that together? (write a fraction)",
            "answer": "4/5",
            "hint": "Same bottom. Add the tops.",
            "skill": "Fractions"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "One sentence, whole report",
            "points": [
              "Before you look at a single choice, close the report in your head and say what the whole thing was about in one sentence of your own.",
              "The wrong answers are usually true. They cover one paragraph, or they are so wide the report never actually says them, or they quietly go against a line in the text.",
              "Four more moves follow: prove a claim with one sentence, name what a paragraph is for, work a word out from its sentence, and hold two paragraphs together."
            ],
            "example": "Three paragraphs about a lighthouse: how the lamp works, who keeps it, what happened the night it failed. 'The lamp turns once every ten seconds' covers one paragraph. 'Lighthouses are important' covers nothing. 'One keeper and one lamp stand between the rocks and the shipping' covers all three."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea of the whole report?",
              "choices": [
                "A dry line is the boundary between damp Gulf air and dry desert air from the west.",
                "The Gulf of Mexico supplies most of the weather in the country.",
                "The briefing finds where a storm's three needs will meet, and the team goes to measure it so towns are warned sooner.",
                "The team goes out mainly for the excitement of seeing a storm up close."
              ],
              "answer": 2,
              "hint": "Give each paragraph a four-word label and find the choice that covers all three. One of these is a definition from the middle, and one is denied outright in the last paragraph.",
              "skill": "Central idea and evidence",
              "evidence": "The data from a storm measured up close is how forecasters learn to warn a town twenty minutes sooner."
            },
            {
              "q": "Claim: the chasing is done for the sake of people who will never see the storm. Which sentence from the report best supports that claim?",
              "choices": [
                "That is where a dry line, the boundary between damp Gulf air and dry desert air from the west, will sit this afternoon.",
                "One of them, if the forecast is right, will turn into a supercell: a single rotating storm that can last for hours and throw hail, wind and tornadoes.",
                "The data from a storm measured up close is how forecasters learn to warn a town twenty minutes sooner.",
                "The team is three vehicles: a radar truck with a dish on the roof, a chase car with the drone in the back, and a van that carries the probes."
              ],
              "answer": 2,
              "hint": "Three of these are true and none of the three mention anyone outside the team. Look for the sentence that follows the work all the way to a town that will never see the truck.",
              "skill": "Finding details",
              "evidence": "The data from a storm measured up close is how forecasters learn to warn a town twenty minutes sooner."
            },
            {
              "q": "How is the first paragraph built?",
              "choices": [
                "It names three things a storm needs and then takes them one at a time, in order.",
                "It tells the story of one storm from the first cloud to the last.",
                "It sets an ordinary thunderstorm against a supercell to show the difference.",
                "It states a problem and then gives the solution the team uses."
              ],
              "answer": 0,
              "hint": "Count the sentences that say 'it needs'. A paragraph that announces a number and then works through it has a shape, and that shape is the answer.",
              "skill": "Author's purpose and structure",
              "evidence": "A thunderstorm needs three things, and the team's morning briefing is a check of all three."
            },
            {
              "q": "The report says storms 'fire along it like posts along a fence'. What does fire mean as it is used here?",
              "choices": [
                "Catch and burn the way dry wheat burns in a field",
                "Throw bolts of lightning down at the ground below",
                "Spring up one after another in a line",
                "Shoot away from the boundary at high speed"
              ],
              "answer": 2,
              "hint": "Nothing in this sentence is burning. Ask what shape a fence is, and what storms would be doing along something that shape.",
              "skill": "Word meanings",
              "evidence": "Storms fire along it like posts along a fence."
            },
            {
              "q": "Paragraphs 1 and 2 together explain why the team expects the storms in the west of the state rather than anywhere else. Why there?",
              "choices": [
                "The dry line is the shove that the warm damp air needs, and this afternoon the dry line will be sitting in the west.",
                "The Gulf air does not reach the western part of the state until late in the day, so nothing there can rise before the afternoon.",
                "Cumulus clouds can only build over open wheat fields.",
                "The radar truck cannot reach the eastern part of the state in time, so the team must work with whatever fires in the west."
              ],
              "answer": 0,
              "hint": "Paragraph one lists the third thing a storm needs. Paragraph two tells you what is going to sit over the west this afternoon. Say both, then say 'so'.",
              "skill": "Reading between the lines",
              "evidence": "And it needs a lift, something to give that bubble a shove: a front, a line of hills, or the afternoon sun heating the fields until the air over them simply lets go."
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
              "q": "There are 3 teams, and each team watches 3 miles of road. How many miles is that?",
              "answer": "9",
              "hint": "3 × 3.",
              "skill": "Multiplying"
            },
            {
              "q": "A 9-mile stretch of road is split equally among 3 teams. How many miles does each team watch?",
              "answer": "3",
              "hint": "How many 3s make 9?",
              "skill": "Dividing"
            },
            {
              "q": "The team drove 136 miles, then 99 more, then 21 more. How many miles in all?",
              "answer": "256",
              "hint": "136 + 99 first. Then add 21.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "The team finished 3/6 of the day's work before the break and 1/6 after. What fraction is done? (write a fraction)",
              "answer": "4/6",
              "hint": "Same bottom. Add the tops.",
              "skill": "Fractions"
            },
            {
              "q": "A truck platform is 9 squares wide and 4 squares long. How many squares is that?",
              "answer": "36",
              "hint": "9 rows of 4, so 9 × 4.",
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
            "example": "3 × (12 − 5) + 8: parentheses first, 12 − 5 = 7; then 3 × 7 = 21; then add 8 to get 29."
          },
          "problems": [
            {
              "q": "A regular storm takes 2.8 hours. A long one takes 2.5 times as long. How many hours does the long one take?",
              "answer": "7",
              "hint": "Multiply 28 × 25 without the points, then put back 2 decimal places.",
              "skill": "Decimals"
            },
            {
              "q": "The team drove 240 miles, and 25% of it was on dirt roads. How many miles is that?",
              "answer": "60",
              "hint": "25% of 240: 25% is 25/100.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The team drives 5 miles every 4 minutes. After 28 minutes, how many miles has it driven?",
              "answer": "35",
              "hint": "28 ÷ 4 = 7 groups. Each group has 5 miles.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The team works out 9 × (10 − 4) + 19. What is it?",
              "answer": "73",
              "hint": "Parentheses first, then multiply, then add.",
              "skill": "Order of operations"
            },
            {
              "q": "On a winter day it was −4 degrees at dawn. By noon it was 5 degrees. By how many degrees did it rise?",
              "answer": "9",
              "hint": "From −4 up to 0 is 4, then 5 more.",
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
            "example": "4x + 13 = 49, so 4x = 36, so x = 9."
          },
          "problems": [
            {
              "q": "20 radar scans needed 10 minutes altogether. How many minutes is that for one scan?",
              "answer": "0.5",
              "hint": "A rate is the total shared out: 10 ÷ 20.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The team drove 40 miles on the first day. On the second day they drove 25% more. How many miles did they drive on the second day?",
              "answer": "50",
              "hint": "25% of 40 is 10. Then add it on.",
              "skill": "Ratios and percent"
            },
            {
              "q": "On a winter day the thermometer read −15 degrees at dawn. It rose 23 degrees by noon, then fell 11 degrees by dark. What does it read at dark?",
              "answer": "-3",
              "accept": [
                "−3"
              ],
              "hint": "Start at −15, go up 23 to 8, then down 11.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: 5x + 23 = 78",
              "answer": "11",
              "hint": "Take 23 off both sides first, then divide by 5.",
              "skill": "Equations"
            },
            {
              "q": "On the map, 1 inch stands for 20 miles. The road measures 5 inches on the map. How long is it really, in miles?",
              "answer": "100",
              "hint": "Every inch is 20 miles, so 5 × 20.",
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
            "example": "Start at 11 and add 6 each hour: after 2 hours, y = 6 × 2 + 11 = 23."
          },
          "problems": [
            {
              "q": "The team has 5 radar scans saved and saves 8 more every hour. After 9 hours, how many scans are saved?",
              "answer": "77",
              "hint": "This is the straight-line rule y = mx + b: 8 × 9 + 5.",
              "skill": "Linear relationships"
            },
            {
              "q": "Each square on the radar map covers 9² square miles. The storm covers 7 squares. How many square miles in all?",
              "answer": "567",
              "hint": "9² means 9 × 9 = 81. Then × 7.",
              "skill": "Powers and roots"
            },
            {
              "q": "The team runs a rope from the top of a 5-foot mast to a point 12 feet away on the ground. How long is the rope, in feet?",
              "answer": "13",
              "hint": "Right triangle: a² + b² = c². 5² + 12² = 25 + 144 = 169. The rope is the square root of that.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "Solve for x: 6x + 25 = x + 65",
              "answer": "8",
              "hint": "Take x off both sides to get 5x + 25 = 65, then take 25 off both sides and divide.",
              "skill": "Equations"
            },
            {
              "q": "The team's truck has 6 × 10^4 miles on it. Written out in full, what number is that?",
              "answer": "60000",
              "hint": "10^4 is 1 with 4 zeros after it: 10,000. Then × 6.",
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
          "example": "If step 5 says 'answer in hours', minutes become hours."
        },
        "skill": "Following directions",
        "steps": [
          "Write the number of things a thunderstorm needs — moisture, instability and a lift: 3.",
          "Multiply by the number of vehicles in the team: 3.",
          "Add the hour the team rolls: 10.",
          "Strike step 3 from the list. The team has not rolled yet, so the hour does not go in.",
          "Multiply by the minutes of extra warning the data buys a town: 20. Type the result."
        ],
        "prompt": "Your answer:",
        "answer": "180",
        "hint": "Step 4 strikes step 3 out. The number step 5 multiplies is the one you had after step 2."
      }
    },
    {
      "id": "storm-2",
      "title": "The Radar Truck",
      "recon": {
        "lesson": {
          "title": "How an instrument sees",
          "points": [
            "A 'how does it work' question is answered by a chain of steps. Find the first one.",
            "Colors on a screen mean something. The forecast tells you what.",
            "A word about the machine is defined by what it sends and receives."
          ],
          "example": "'A bat squeaks and listens for the sound to bounce back.' How does it find its way? Echoes."
        },
        "title": "Forecast: Seeing Inside a Storm",
        "passage": [
          "You cannot see inside a thunderstorm with your eyes. The rain hides it. The radar truck can, because radar does not use light. The dish on the roof sends out a pulse of radio energy, the pulse flies out into the storm, and some of it bounces back off raindrops and hailstones. The truck listens for those echoes. It measures how long they took to return, which tells it how far away the rain is. It also measures how strong they are, which tells it how heavy the rain is. On the screen, light rain shows green, heavy rain yellow, and hail red and purple.",
          "The truck's radar does one more trick. Because the storm is moving, the echoes come back with their pitch shifted a little, the way a siren sounds higher coming toward you and lower going away. The radar measures that shift and paints the wind on the screen: green where rain is moving toward the truck, red where it is moving away. When green and red sit right next to each other in a tight pair, the air is spinning, and a spinning storm is the kind that makes tornadoes. Chasers call that pair a couplet.",
          "Today the truck parks on a gravel road three miles from a storm that has been building for an hour. It aims the dish and scans. The screen fills with a hook-shaped curl of red on the storm's southwest side. Inside the hook is a couplet. The team leader radios the weather office in the nearest city, which is the whole reason the truck is here. The office puts out a warning for the county to the east eight minutes before its own radar, forty miles away, would have shown it."
        ],
        "questions": [
          {
            "q": "How does the radar know how far away the rain is?",
            "choices": [
              "By measuring how long the echo takes to return",
              "By watching the clouds",
              "By measuring how much the echo's pitch has shifted on the way back",
              "By counting the seconds between the lightning and the thunder"
            ],
            "answer": 0,
            "hint": "Paragraph 1, the sentence with 'how long they took to return'.",
            "skill": "Finding details"
          },
          {
            "q": "What colors show hail on the screen?",
            "choices": [
              "Green",
              "Yellow, the same color as heavy rain",
              "Green on one side and red on the other",
              "Red and purple"
            ],
            "answer": 3,
            "hint": "The last sentence of paragraph 1.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 2, what is a 'couplet'?",
            "choices": [
              "Two lines of a poem",
              "A pair of pulses sent out one after the other",
              "A pair of raindrops",
              "A tight pair of green and red on the radar that shows spinning air"
            ],
            "answer": 3,
            "hint": "The last two sentences of paragraph 2.",
            "skill": "Word meanings"
          },
          {
            "q": "Why could the weather office warn the county eight minutes sooner?",
            "choices": [
              "Because the weather office's own radar sits forty miles away and cannot show the wind inside a storm at any distance at all",
              "Because the drone flew into the edge of the storm and sent back pictures of the hook long before the radar truck could see it",
              "Because the truck was three miles from the storm and saw the couplet before the office's radar forty miles away could",
              "Because the truck's dish sends out a stronger pulse than the office's radar does"
            ],
            "answer": 2,
            "hint": "The last sentence of paragraph 3.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 1 mostly about?",
            "choices": [
              "The color green on the screen",
              "The gravel road the truck parks on",
              "How radar sees inside a storm",
              "The couplet inside the hook"
            ],
            "answer": 2,
            "hint": "Paragraph 1 opens with 'You cannot see inside a thunderstorm' and explains how radar can.",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Radar math",
          "points": [
            "Range difference: the office's distance minus the truck's.",
            "Minutes sooner times seconds: warning time in seconds.",
            "Adding decimals: line up the points. 4.5 + 1.25 is 4.50 + 1.25 = 5.75.",
            "Middle to edge: half of the distance across."
          ],
          "example": "25 miles − 4 miles = 21 miles closer."
        },
        "problems": [
          {
            "q": "The office's radar is 40 miles from the storm and the truck is 3 miles from it. How many miles closer is the truck?",
            "answer": "37",
            "hint": "40 − 3.",
            "skill": "Adding and subtracting"
          },
          {
            "q": "The warning went out 8 minutes sooner. How many seconds is that?",
            "answer": "480",
            "hint": "8 × 60.",
            "skill": "Multiplying"
          },
          {
            "q": "The truck's mast rises 7.5 feet and the radar dish adds 2.75 feet on top. How tall is the mast with the dish? (write a decimal)",
            "answer": "10.25",
            "hint": "Line up the points: 7.50 + 2.75.",
            "skill": "Decimals"
          },
          {
            "q": "The storm has been building for 60 minutes and the truck took 15 minutes to set up. What fraction of the storm's life was spent setting up? (write a fraction, using 60 as the bottom)",
            "answer": "15/60",
            "accept": [
              "1/4"
            ],
            "hint": "15 minutes out of 60.",
            "skill": "Fractions"
          },
          {
            "q": "The dish scans a circle 90 miles across. What is the distance from the truck to the edge of the scan, in miles?",
            "answer": "45",
            "hint": "The truck is in the middle. 90 ÷ 2.",
            "skill": "Dividing"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "The sentence that closes the case",
            "points": [
              "You are hunting for proof, not for matching words. A sentence can share three words with the claim and prove nothing at all.",
              "Read the claim, then read your pick straight after it. If a gap is still open, keep looking.",
              "All four choices are real sentences from the report, so being true is the starting price, not the answer."
            ],
            "example": "Claim: the shop shuts whenever the power goes out. 'The shop sells bread and milk' is true and useless. 'Everything in the freezers has to be thrown out by noon' closes the case."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea that develops across the whole report?",
              "choices": [
                "Radar lets the team look inside a storm that no one can see into, and what it finds there can put a warning out ahead of everything else.",
                "On the screen, light rain shows green, heavy rain yellow, and hail red and purple, so the crew can tell at a glance how heavy the rain is in each part of the storm.",
                "Radar is the most important invention in the history of weather forecasting.",
                "A chaser standing on the ground can tell a spinning storm by looking at it, and the truck's screen only confirms what the crew has already seen."
              ],
              "answer": 0,
              "hint": "The first paragraph says what eyes cannot do, the last says what the truck did about it. Find the choice that holds both ends.",
              "skill": "Central idea and evidence",
              "evidence": "You cannot see inside a thunderstorm with your eyes."
            },
            {
              "q": "Claim: parking the truck close to the storm is what bought the county extra time. Which sentence from the report best supports that claim?",
              "choices": [
                "The dish on the roof sends out a pulse of radio energy, the pulse flies out into the storm, and some of it bounces back off raindrops and hailstones.",
                "When green and red sit right next to each other in a tight pair, the air is spinning, and a spinning storm is the kind that makes tornadoes.",
                "The radar truck can, because radar does not use light.",
                "The office puts out a warning for the county to the east eight minutes before its own radar, forty miles away, would have shown it."
              ],
              "answer": 3,
              "hint": "The claim is about time gained. Look for the sentence that compares two radars at two distances and counts the minutes between them.",
              "skill": "Finding details",
              "evidence": "The office puts out a warning for the county to the east eight minutes before its own radar, forty miles away, would have shown it."
            },
            {
              "q": "Why does the report bring in a siren before it explains what the radar puts on the screen?",
              "choices": [
                "To warn the reader that sirens will sound later in the report.",
                "To compare the noise of a storm with the noise of traffic.",
                "To explain how the radio in the truck reaches the weather office.",
                "It gives an everyday case of the same effect, so the shift is easy to follow."
              ],
              "answer": 3,
              "hint": "Take the siren sentence out and read the paragraph again. What has become far more difficult to follow? That is what it was doing there.",
              "skill": "Author's purpose and structure",
              "evidence": "Because the storm is moving, the echoes come back with their pitch shifted a little, the way a siren sounds higher coming toward you and lower going away."
            },
            {
              "q": "The report says the radar 'paints the wind on the screen'. What does paints mean as it is used here?",
              "choices": [
                "Covers the screen in a layer of color to protect it",
                "Shows the wind as numbers printed along the edge of the screen",
                "Draws the wind in colors so that it can be seen",
                "Slows the picture down so it can be studied"
              ],
              "answer": 2,
              "hint": "Read the rest of the same sentence, after the colon. It tells you exactly what appears and in what colors.",
              "skill": "Word meanings",
              "evidence": "The radar measures that shift and paints the wind on the screen: green where rain is moving toward the truck, red where it is moving away."
            },
            {
              "q": "Paragraphs 2 and 3 together explain why the team leader reached for the radio when the screen filled. What did the screen show that was worth a call?",
              "choices": [
                "A wide band of green, which means light rain is spreading across the county.",
                "A screen full of purple, which means the hail has grown dangerous.",
                "Green and red packed tightly side by side, which means the air inside the storm is spinning.",
                "An echo that took a long time to come back, which means the storm is a long way off."
              ],
              "answer": 2,
              "hint": "One paragraph tells you what a tight pair of colors means. The other tells you what was sitting inside the hook. Neither one alone explains the radio call.",
              "skill": "Reading between the lines",
              "evidence": "When green and red sit right next to each other in a tight pair, the air is spinning, and a spinning storm is the kind that makes tornadoes."
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
              "q": "The team counted 5 miles yesterday and three times as many today. How many miles today?",
              "answer": "15",
              "hint": "Three times 5: 5 + 5 + 5.",
              "skill": "Multiplying"
            },
            {
              "q": "The team's 45-mile drive is split into legs of 5 miles. They scan the sky once per leg. How many scans is that?",
              "answer": "9",
              "hint": "How many 5s make 45?",
              "skill": "Dividing"
            },
            {
              "q": "The team plans to drive 332 miles today and has driven 45. How many miles are left?",
              "answer": "287",
              "hint": "332 − 45.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "3/6 of the day's work was done yesterday. What fraction is still to do? (write a fraction)",
              "answer": "3/6",
              "hint": "The whole job is 6/6. Take 3/6 off it.",
              "skill": "Fractions"
            },
            {
              "q": "The tally stood at 108 miles and 600 more were added. What is the tally now?",
              "answer": "708",
              "hint": "108 + 600.",
              "skill": "Adding and subtracting"
            }
          ]
        },
        "6": {
          "lesson": {
            "title": "Grade 6 numbers",
            "points": [
              "Mixed number ÷ fraction: make it improper first. 2 1/2 ÷ 5/6 = 5/2 × 6/5 = 30/10 = 3.",
              "Percent of a number: turn the percent into a fraction of 100.",
              "A ratio tells you how many of one thing for each group of the other.",
              "Order of operations: parentheses, then multiply and divide, then add and subtract."
            ],
            "example": "4 × (9 − 2) + 5: parentheses first, 9 − 2 = 7; then 4 × 7 = 28; then add 5 to get 33."
          },
          "problems": [
            {
              "q": "The team has 7 1/2 hours of chasing left. Each stop to launch a weather balloon takes 5/8 of an hour. How many stops fit in that time?",
              "answer": "12",
              "hint": "Make 7 1/2 an improper fraction, 15/2. Then multiply by the flip of 5/8: 15/2 × 8/5.",
              "skill": "Fractions"
            },
            {
              "q": "60 of the 80 miles are set aside. What percent is that? (write just the number)",
              "answer": "75",
              "accept": [
                "75%"
              ],
              "hint": "60 out of 80, then out of 100.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The truck scans the sky 2 times for every 3 miles it drives. It drives 15 miles. How many scans?",
              "answer": "10",
              "hint": "15 ÷ 3 = 5 groups. Each group has 2 scans.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The team works out 3 + 6 × 8. What is it?",
              "answer": "51",
              "hint": "Multiply before you add.",
              "skill": "Order of operations"
            },
            {
              "q": "On a winter day the thermometer read 1 degree at dawn. By dark it had fallen to −6 degrees. By how many degrees did it fall?",
              "answer": "7",
              "hint": "From 1 down to 0 is 1, then 6 more.",
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
              "Multiplying or dividing with one minus sign gives a minus answer: 3 × (−5) = −15, and −15 ÷ 3 = −5.",
              "A two-step equation: get the x part on its own first, then undo the multiplying."
            ],
            "example": "65 − 3x = 17, so 3x = 65 − 17 = 48, so x = 16."
          },
          "problems": [
            {
              "q": "One radar scan needs 2.5 minutes. How many minutes do 20 scans need?",
              "answer": "50",
              "hint": "20 × 2.5.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The storm moved at 40 miles an hour, then at 48 miles an hour. By what percent did its speed change? (write just the number)",
              "answer": "20",
              "accept": [
                "20%"
              ],
              "hint": "The change is 8. 8 out of 40, then out of 100.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The thermometer falls 3 degrees every hour for 13 hours. What is the total change? (Write a fall as a negative number.)",
              "answer": "-39",
              "accept": [
                "−39"
              ],
              "hint": "13 hours of −3 each: 13 × (−3). One minus sign, so the answer is negative.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: 44 − 2x = 26",
              "answer": "9",
              "hint": "Move 2x to the right and 26 to the left: 2x = 18.",
              "skill": "Equations"
            },
            {
              "q": "A round window has a radius of 10 inches. Using 3.14 for pi, how many inches is it around the edge?",
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
              "A square root undoes squaring. If a square has area 81, its side is 9.",
              "Pythagoras: in a right triangle a² + b² = c², and c is always the longest side.",
              "With x on both sides, move all the x's to one side first, then all the plain numbers to the other."
            ],
            "example": "Start with 40 and use 6 an hour: after 3 hours, 40 − 6 × 3 = 22 are left."
          },
          "problems": [
            {
              "q": "The team's memory card has room for 61 more videos. They record 7 every hour. How many more videos will fit after 7 hours?",
              "answer": "12",
              "hint": "7 × 7 = 49 recorded, taken off 61.",
              "skill": "Linear relationships"
            },
            {
              "q": "What is the square root of 100?",
              "answer": "10",
              "hint": "What number times itself makes 100?",
              "skill": "Powers and roots"
            },
            {
              "q": "A 13-foot rope runs from the top of a mast to a point 12 feet away on the ground. How tall is the mast, in feet?",
              "answer": "5",
              "hint": "a² = c² − b² = 169 − 144 = 25. Then take the square root.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "Solve for x: 6x = 4x + 14",
              "answer": "7",
              "hint": "Take 4x off both sides: 2x = 14. Then divide by 2.",
              "skill": "Equations"
            },
            {
              "q": "A round water tank has a radius of 5 feet and holds 314 cubic feet. Using 3.14 for pi, how many feet deep is it?",
              "answer": "4",
              "hint": "The floor's area is 3.14 × 5 × 5 = 78.5. Divide the volume by that.",
              "skill": "Area and perimeter"
            }
          ]
        }
      },
      "orders": {
        "lesson": {
          "title": "Colors as clues",
          "points": [
            "The orders may ask you to use what the forecast says a color means.",
            "Look it up, then do the arithmetic."
          ],
          "example": "'Count the colors that mean hail' means two: red and purple."
        },
        "skill": "Following directions",
        "steps": [
          "Hail shows on the radar screen in two colors, red and purple. Write down 2.",
          "Multiply by the 3 miles of gravel road between the truck and the storm, then add the 8 minutes of extra warning the office got. Write that total down.",
          "Now a second total. Rain shows in two colors as well, green and yellow. Multiply those 2 by the 40 miles between the storm and the office's own radar.",
          "That leaves you holding two totals, one from step 2 and one from step 3.",
          "The truck keeps the close-in number, so use the total from step 2 and not the one from step 3."
        ],
        "prompt": "Your answer:",
        "answer": "14",
        "hint": "Both totals are real work. Step 5 names the one the truck keeps, so read it before you type either."
      }
    },
    {
      "id": "storm-3",
      "title": "Hail",
      "recon": {
        "lesson": {
          "title": "How something grows",
          "points": [
            "When the forecast gives a size, it may compare it to an object. A question can still want the exact number.",
            "Sizes compared to objects ('the size of a golf ball') are details.",
            "'Why' about the team's choice wants the reason in the forecast."
          ],
          "example": "'The pancake was the size of a dinner plate, about ten inches across.' How big? Ten inches."
        },
        "title": "Forecast: Ice From a Summer Sky",
        "passage": [
          "It is ninety degrees on the road. Even so, the team is about to be hit by ice. Inside a big storm the air rises so fast, faster than a car on a highway, that raindrops get carried up above the freezing level. Five miles high, they turn to ice. The ice falls and picks up a coat of water. Then it gets swept up again and freezes another layer, over and over. At last it is too heavy for the wind to hold, and it drops out of the storm. A hailstone cut in half shows rings like a tree, and each ring is a new layer of growth.",
          "The size of the hail tells you how strong the storm's updraft is. Only a strong updraft can hold a heavy stone up long enough to grow. Pea-sized hail is a normal storm. Golf-ball hail, about an inch and three quarters across, means an updraft near sixty miles an hour. Hail the size of a baseball has been measured, and it falls at the speed of a thrown baseball, and it goes through windshields, roofs and wheat fields like a shower of thrown rocks. The biggest hailstone ever measured in the country was eight inches across and weighed nearly two pounds.",
          "The team never drives into hail on purpose, because a truck with no windshield is a truck that is done chasing. The rule is to stay on the storm's southern side, where the rain and hail fall to the north and the view of the base is clear. The other half of the rule is to keep an escape road behind you at all times. Today they misjudge it by a mile. For four minutes the chase car sits under quarter-sized hail with everyone's hands over their ears. Then it passes, the road is white, and the drone goes up to photograph the damage stripe."
        ],
        "questions": [
          {
            "q": "What does a hailstone cut in half look like?",
            "choices": [
              "Rings like a tree, one for each layer of growth",
              "Solid clear ice all the way through",
              "A snowflake frozen in the middle",
              "A sponge full of tiny air holes"
            ],
            "answer": 0,
            "hint": "The last sentence of paragraph 1.",
            "skill": "Finding details"
          },
          {
            "q": "How big was the biggest hailstone ever measured in the country?",
            "choices": [
              "About a quarter of an inch, the size of a pea",
              "About an inch and three quarters, the size of a golf ball",
              "Two feet across, and nearly two pounds",
              "Eight inches across"
            ],
            "answer": 3,
            "hint": "The last sentence of paragraph 2.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 2, what is an 'updraft'?",
            "choices": [
              "The cold air that rushes down out of a storm",
              "Air rising fast inside the storm",
              "A front or a line of hills that gives the air a shove",
              "The strength of the wind measured at the ground under a storm"
            ],
            "answer": 1,
            "hint": "Paragraph 1 says the air rises fast; paragraph 2 calls that rising air the updraft that holds the stone up.",
            "skill": "Word meanings"
          },
          {
            "q": "Why does big hail mean a strong storm?",
            "choices": [
              "Because big storms are colder",
              "Because hail comes from the ground",
              "Because hail forms above the freezing level, five miles up",
              "Because only a strong updraft can hold a heavy stone up long enough to grow"
            ],
            "answer": 3,
            "hint": "The first two sentences of paragraph 2.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 3 mostly about?",
            "choices": [
              "Why hail grows in rings and what the size of a stone tells you about the updraft",
              "The team's rules for staying out of hail, and the day they misjudged it",
              "How fast a baseball-sized hailstone falls and what it does to windshields and roofs",
              "How raindrops get carried up above the freezing level and come back down as ice"
            ],
            "answer": 1,
            "hint": "Paragraph 3 begins with why the team avoids hail and gives the rule, then today's mistake.",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Hail math",
          "points": [
            "Feet in miles: miles × 5,280. Two miles is 10,560 feet.",
            "Volume of a box: length × width × height. 10 × 6 × 5 = 300 cubic inches.",
            "Ounces in pounds: pounds × 16. Three pounds is 48 ounces.",
            "Two-step: minutes of hail, then seconds."
          ],
          "example": "3 minutes of hail is 3 × 60 = 180 seconds."
        },
        "problems": [
          {
            "q": "Hail grows about 5 miles up. A mile is 5,280 feet. How many feet up is that?",
            "answer": "26400",
            "accept": [
              "26,400"
            ],
            "hint": "5,280 × 5.",
            "skill": "Multiplying"
          },
          {
            "q": "The team keeps hailstones in a cooler 24 inches long, 12 inches wide and 10 inches tall. How many cubic inches does it hold?",
            "answer": "2880",
            "hint": "Length × width × height: 24 × 12 = 288, then times 10.",
            "skill": "Volume"
          },
          {
            "q": "The biggest hailstone weighed nearly 2 pounds. A pound is 16 ounces. How many ounces is 2 pounds?",
            "answer": "32",
            "hint": "2 × 16.",
            "skill": "Multiplying"
          },
          {
            "q": "The chase car sat in hail for 4 minutes. How many seconds is that?",
            "answer": "240",
            "hint": "4 × 60.",
            "skill": "Multiplying"
          },
          {
            "q": "The hail stripe on the field is 2 miles long and 1 mile wide. What is its area in square miles?",
            "answer": "2",
            "hint": "2 × 1.",
            "skill": "Area and perimeter"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "Every paragraph is there on purpose",
            "points": [
              "A paragraph is doing one of a few jobs: setting the scene, giving a cause, setting two things side by side, walking through an order, or naming a problem and what was done about it.",
              "Test it by taking the paragraph out. What can you no longer answer? That gap is the job it was doing.",
              "Watch the joining words. 'Because' and 'so' point at cause. 'But' and 'while' point at two things compared. 'Then' and 'by two o'clock' point at an order."
            ],
            "example": "A report on a bicycle race spends a paragraph on the weather. That paragraph is not about weather. It is there so that the crash on the third corner reads as something other than bad luck."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea of the whole report?",
              "choices": [
                "The huge rising air that builds a hailstone is the same thing that makes hail worth measuring and worth staying out from under.",
                "A hailstone cut in half shows rings like a tree.",
                "Summer storms make more ice than winter storms do.",
                "The team drives into the heaviest hail on purpose to get the best measurements."
              ],
              "answer": 0,
              "hint": "How the stone is made, what its size tells you, and where the team parks. Ask what all three of those are about before you pick.",
              "skill": "Central idea and evidence",
              "evidence": "The size of the hail tells you how strong the storm's updraft is."
            },
            {
              "q": "Claim: the size of a hailstone is a measure of how strong the storm is. Which sentence from the report best supports that claim?",
              "choices": [
                "Inside a big storm the air rises so fast, faster than a car on a highway, that raindrops get carried up above the freezing level.",
                "Hail the size of a baseball has been measured, and it falls at the speed of a thrown baseball, and it goes through windshields, roofs and wheat fields like a shower of thrown rocks.",
                "The rule is to stay on the storm's southern side, where the rain and hail fall to the north and the view of the base is clear.",
                "The size of the hail tells you how strong the storm's updraft is."
              ],
              "answer": 3,
              "hint": "One of these is about how fast the air rises, one is about what big hail smashes, and one is the team's rule. None of the three joins the size of the stone to the strength of the storm. One does.",
              "skill": "Finding details",
              "evidence": "The size of the hail tells you how strong the storm's updraft is."
            },
            {
              "q": "What job does the last paragraph do, coming after two paragraphs on how hail forms and how big it gets?",
              "choices": [
                "It explains why the air five miles above the road is below freezing while it is ninety degrees down where the team is parked.",
                "It turns all of that into a rule the team drives by, and then shows what happens when the rule is missed by a mile.",
                "It lists the instruments carried in the chase car and in the van, so the reader knows what the team had with it out on the road.",
                "It compares the size of today's hail with the hail from the day before, so the reader can see how much the storm has grown."
              ],
              "answer": 1,
              "hint": "The paragraph adds no new science. Look for the sentence that begins 'The rule is', and ask what a paragraph built around a rule is for.",
              "skill": "Author's purpose and structure",
              "evidence": "The rule is to stay on the storm's southern side, where the rain and hail fall to the north and the view of the base is clear."
            },
            {
              "q": "The report says the largest hail 'goes through windshields, roofs and wheat fields like a shower of thrown rocks'. What is that comparison telling you?",
              "choices": [
                "It makes a loud bang when it lands on a roof.",
                "The hail is really made of small rocks instead of ice.",
                "The hail arrives as one heavy lump rather than many pieces.",
                "It hits hard enough to punch straight through things, and it comes down over a wide area at once."
              ],
              "answer": 3,
              "hint": "Take the picture literally first: many pieces at once, each one going straight through what it hits. Then move the picture onto the ice.",
              "skill": "Word meanings",
              "evidence": "Hail the size of a baseball has been measured, and it falls at the speed of a thrown baseball, and it goes through windshields, roofs and wheat fields like a shower of thrown rocks."
            },
            {
              "q": "Paragraphs 2 and 3 together explain why the team treats hail as a threat to the work and not only to the people. What is the reasoning?",
              "choices": [
                "Hail piles up so deep on the road that no vehicle can drive along it, and the team has to wait for it to melt.",
                "Hail that size goes through a windshield, and a truck without a windshield cannot go on chasing.",
                "Hail cracks the drone's cameras while it is up in the air, so the damage stripe cannot be photographed afterward.",
                "The instruments inside the probes cannot record while hail is falling on them, so the worst of a storm is never measured."
              ],
              "answer": 1,
              "hint": "One paragraph tells you what the biggest hail goes through. The other tells you what the team loses when that happens. Put the two facts together.",
              "skill": "Reading between the lines",
              "evidence": "The team never drives into hail on purpose, because a truck with no windshield is a truck that is done chasing."
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
              "q": "The team lays the hailstones out in 3 rows of 9. How many hailstones is that?",
              "answer": "27",
              "hint": "3 × 9.",
              "skill": "Multiplying"
            },
            {
              "q": "72 hailstones are set out in 8 equal rows. How many hailstones are in each row?",
              "answer": "9",
              "hint": "72 split into 8 equal parts.",
              "skill": "Dividing"
            },
            {
              "q": "The log shows 235 hailstones, then 48 more are added and 17 are taken off. What does the log show now?",
              "answer": "266",
              "hint": "Add 235 and 48 first, then take 17 off.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "Add: 1/4 + 1/4 (write a fraction)",
              "answer": "2/4",
              "hint": "Same bottom. 1 + 1 on top.",
              "skill": "Fractions"
            },
            {
              "q": "A mat is 9 feet wide and 3 feet long. How many feet is it all the way around the edge?",
              "answer": "24",
              "hint": "Two sides of 9 and two sides of 3: 9 + 9 + 3 + 3.",
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
              "q": "The team has 19.25 hours of driving. Each storm takes 1.75 hours. How many storms is that enough for?",
              "answer": "11",
              "hint": "Move both points 2 places to the right: 1925 ÷ 175.",
              "skill": "Decimals"
            },
            {
              "q": "20% of the hailstones counted is 32. How many were counted in all?",
              "answer": "160",
              "hint": "32 is 20 hundredths of the whole: 32 ÷ 20 × 100.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The team counts 18 large hailstones and 45 small ones. In its simplest form, what is the ratio of large hailstones to small ones? (write it like 2:3)",
              "answer": "2:5",
              "accept": [
                "2 to 5"
              ],
              "hint": "Divide both by 9.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The team works out (6 + 5) × 8. What is it?",
              "answer": "88",
              "hint": "Parentheses first, then multiply.",
              "skill": "Order of operations"
            },
            {
              "q": "One winter night it was −8 degrees at midnight and rose 9 degrees by dawn. What does the thermometer read at dawn?",
              "answer": "1",
              "hint": "Start at −8 and count 9 steps up.",
              "skill": "Negative numbers"
            }
          ]
        },
        "7": {
          "lesson": {
            "title": "Grade 7 numbers",
            "points": [
              "How many fit: the time you have ÷ the time each one takes. 11 hours at 2.75 hours each is 11 ÷ 2.75 = 4.",
              "Working backward: if a count fell by a quarter, the new count is 75% of the old one, so divide by 0.75 to get back to the start.",
              "Below zero, going up adds and going down subtracts. Walk the number line one step at a time.",
              "With parentheses, undo the outside first: divide both sides, then take off the number inside."
            ],
            "example": "6(x + 13) = 96, so x + 13 = 16, so x = 3."
          },
          "problems": [
            {
              "q": "The team has 6 minutes to spend and each radar scan takes 0.5 minutes. How many scans is that enough for?",
              "answer": "12",
              "hint": "6 ÷ 0.5.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The count of hailstones in the sample fell by 10% to 216. What was it before?",
              "answer": "240",
              "hint": "216 is 90% of the old count.",
              "skill": "Ratios and percent"
            },
            {
              "q": "One winter evening it was 16 degrees, then it fell 24 degrees. What does the thermometer read?",
              "answer": "-8",
              "accept": [
                "−8"
              ],
              "hint": "From 16 down to 0 is 16, and there are 8 left to fall.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: (x + 8) × 7 = 91",
              "answer": "5",
              "hint": "Divide both sides by 7 first, then take 8 off.",
              "skill": "Equations"
            },
            {
              "q": "A model is built at 1 to 20. The radar truck on the model is 8 inches tall. How many inches tall is the real one?",
              "answer": "160",
              "hint": "Every inch on the model is 20 inches for real.",
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
              "Collect the x's first: 6x − 2x is 4x. Then undo the plain number."
            ],
            "example": "y = 2x + 9 when x = 6: 2 × 6 + 9 = 21."
          },
          "problems": [
            {
              "q": "The count of hailstones collected follows the rule y = 5x + 10, where x is the hour. What is y when x = 5?",
              "answer": "35",
              "hint": "Put 5 in for x: 5 × 5 + 10.",
              "skill": "Linear relationships"
            },
            {
              "q": "What is 4² + 3²?",
              "answer": "25",
              "hint": "4 × 4 = 16 and 3 × 3 = 9. Add them.",
              "skill": "Powers and roots"
            },
            {
              "q": "A 17-foot rope reaches the top of an 8-foot mast. How far is the foot of the rope from the base, in feet?",
              "answer": "15",
              "hint": "b² = c² − a² = 289 − 64 = 225. Then take the square root.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "Solve for x: 10x + 12 − 5x = 27",
              "answer": "3",
              "hint": "Collect the x's first: 5x + 12 = 27.",
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
          "title": "Instead",
          "points": [
            "'Instead' throws away the step before it.",
            "Read to the end before you calculate."
          ],
          "example": "'Multiply by 4. Instead, divide by 4' means divide."
        },
        "skill": "Following directions",
        "steps": [
          "Write the number of rings in a hailstone that grew 8 layers: 8.",
          "Multiply by the number of minutes the chase car sat under quarter-sized hail: 4.",
          "Add the size of the biggest hailstone ever measured in the country, in inches: 8.",
          "Step 3 has it backwards. Return to the total you wrote in step 2 and take those 8 inches away rather than adding them.",
          "Type the total you end up with."
        ],
        "prompt": "Your answer:",
        "answer": "24",
        "hint": "Multiply the rings by the minutes first. Then step 4 turns step 3's add into a take-away — read it closely."
      }
    },
    {
      "id": "storm-4",
      "title": "The Probes",
      "recon": {
        "lesson": {
          "title": "A plan with timing",
          "points": [
            "When the forecast describes a plan, the timing is the detail: how long before, how far ahead.",
            "'Why' about the design of a tool: the reason is the problem it solves.",
            "A word about the tool is defined by its description."
          ],
          "example": "'The tent goes up a mile from the river, an hour before dark.' How far? A mile."
        },
        "title": "Forecast: A Box in the Path",
        "passage": [
          "The van carries six probes. A probe is a steel box the size of a suitcase that weighs as much as a person, with a wind sensor, a pressure sensor and a thermometer inside. It has a wide flat base so that a hundred-mile-an-hour wind cannot tip it over. The plan for a probe is simple to say and hard to do. Figure out exactly where the storm's core will cross a road, set the box down on the shoulder of that road two miles ahead of it, and leave, four minutes before the storm arrives. The box records everything. The people do not stay to watch.",
          "The reason for the probes is that nothing else can measure a storm from underneath. Radar sees rain and wind in the air, but not the wind at the ground, the pressure drop inside a tornado, or the exact second the temperature falls as the cold outflow hits. Those are only known from a box that was there. In forty years of chasing, only a handful of probes have ever been inside a tornado. Each one taught forecasters something they could not have learned any other way.",
          "Today the team sets down four probes along a north-south road. They are half a mile apart. A storm with a hook on the radar is moving east toward the road. The storm is traveling at thirty miles an hour. The van's driver sets the last one with the storm's base a mile and a half away, dark green and turning. Then the van pulls out south with the wipers on full. Twenty minutes later the road is empty, the storm is past, and three of the four boxes are standing where they were left. The fourth is in a ditch a hundred yards away, upside down, still recording."
        ],
        "questions": [
          {
            "q": "How far ahead of the storm is a probe set down?",
            "choices": [
              "Two feet",
              "Twenty miles",
              "Two miles",
              "Half a mile"
            ],
            "answer": 2,
            "hint": "Paragraph 1, the sentence with 'ahead of it'.",
            "skill": "Finding details"
          },
          {
            "q": "How many probes have ever been inside a tornado?",
            "choices": [
              "Hundreds",
              "Only a handful of them",
              "About forty",
              "None"
            ],
            "answer": 1,
            "hint": "Paragraph 2, the sentence that begins 'In forty years of chasing'.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 2, what is 'outflow'?",
            "choices": [
              "Water from a river",
              "The wind and rain the radar sees high up inside the storm",
              "The radar signal",
              "The cold air rushing out of a storm along the ground"
            ],
            "answer": 3,
            "hint": "The sentence says the temperature falls 'as the cold outflow hits'.",
            "skill": "Word meanings"
          },
          {
            "q": "Why does a probe have a wide flat base?",
            "choices": [
              "So the storm's core crosses the road at the spot where the box is waiting",
              "So a hundred-mile-an-hour wind cannot tip it over",
              "So that the box can be set down and picked up again by one person alone",
              "So that it can be slid across the shoulder of the road without lifting"
            ],
            "answer": 1,
            "hint": "Paragraph 1, the sentence with 'a wide flat base'.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 2 mostly about?",
            "choices": [
              "How the team works out which road the storm's core will cross",
              "The four probes set down along a north-south road half a mile apart",
              "Why probes matter: they measure what nothing else can",
              "The van driver setting the last probe with the storm a mile and a half away"
            ],
            "answer": 2,
            "hint": "The first sentence of paragraph 2 gives 'the reason for the probes', and the rest explains it.",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Probe math",
          "points": [
            "Storm speed and distance: time = distance ÷ speed, in minutes: (miles ÷ mph) × 60.",
            "Probes half a mile apart: distance covered.",
            "Gaps in a line: one fewer than the things. 5 posts in a row have 4 gaps.",
            "Two-step: probes set, probes still standing."
          ],
          "example": "A storm at 60 miles an hour covers 1 mile a minute, so 3 miles takes 3 minutes."
        },
        "problems": [
          {
            "q": "The storm moves at 30 miles an hour, which is 1 mile every 2 minutes. A probe is set 2 miles ahead. How many minutes until the storm reaches it?",
            "answer": "4",
            "hint": "2 miles × 2 minutes a mile.",
            "skill": "Multi-step problems"
          },
          {
            "q": "Four probes are set half a mile apart in a line. How far is it from the first probe to the last, in miles? (write a decimal)",
            "answer": "1.5",
            "accept": [
              "1 1/2",
              "3/2"
            ],
            "hint": "Three gaps of half a mile: 0.5 + 0.5 + 0.5.",
            "skill": "Fractions"
          },
          {
            "q": "The van carries 6 probes. It sets down 4. How many are left in the van?",
            "answer": "2",
            "hint": "6 − 4.",
            "skill": "Adding and subtracting"
          },
          {
            "q": "A probe weighs 180 pounds. Two people lift it together, each taking half. How many pounds does each person lift?",
            "answer": "90",
            "hint": "180 ÷ 2.",
            "skill": "Dividing"
          },
          {
            "q": "The fourth probe was thrown 100 yards. A yard is 3 feet. How many feet is that?",
            "answer": "300",
            "hint": "100 × 3.",
            "skill": "Multiplying"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "Put your answer back in the sentence",
            "points": [
              "Cover the word with a finger and read the sentence with a hole in it. What belongs in the hole?",
              "A phrase can be doing a picture job. 'Simple to say and hard to do' is not about talking; it is about the gap between the two halves.",
              "Test each choice by slotting it in. Three of them will make the sentence claim something the report never claimed."
            ],
            "example": "'The van drank fuel all afternoon.' Nothing drank anything. Slot in 'used a great deal of' and the sentence still works. Slot in 'ran out of' and it does not."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea that develops across the whole report?",
              "choices": [
                "A probe is a steel box the size of a suitcase that weighs as much as a person.",
                "Steel instruments are the most reliable way to measure any kind of weather.",
                "A probe exists to be left behind, because the only way to learn what happens at the ground is to put an instrument there and get out.",
                "The crew stays beside the probes to watch them record."
              ],
              "answer": 2,
              "hint": "What the box is, why it is needed, and what happened to four of them today. One of these choices is a measurement, and one is the opposite of a line in the first paragraph.",
              "skill": "Central idea and evidence",
              "evidence": "The reason for the probes is that nothing else can measure a storm from underneath."
            },
            {
              "q": "Claim: radar cannot do the job a probe does. Which sentence from the report best supports that claim?",
              "choices": [
                "Twenty minutes later the road is empty, the storm is past, and three of the four boxes are standing where they were left.",
                "Radar sees rain and wind in the air, but not the wind at the ground, the pressure drop inside a tornado, or the exact second the temperature falls as the cold outflow hits.",
                "The van's driver sets the last one with the storm's base a mile and a half away, dark green and turning.",
                "The fourth is in a ditch a hundred yards away, upside down, still recording."
              ],
              "answer": 1,
              "hint": "The claim names radar. Find the sentence that names it too and then lists what it cannot reach.",
              "skill": "Finding details",
              "evidence": "Radar sees rain and wind in the air, but not the wind at the ground, the pressure drop inside a tornado, or the exact second the temperature falls as the cold outflow hits."
            },
            {
              "q": "The first paragraph ends with two very short sentences: 'The box records everything. The people do not stay to watch.' What job do they do?",
              "choices": [
                "They explain what each of the three sensors inside the box measures while the storm is passing over it.",
                "They show that the crew is not really interested in the storm.",
                "They list the steps for setting a probe down on a road shoulder.",
                "They land the trade the whole plan rests on: the instrument takes the risk and the crew does not."
              ],
              "answer": 3,
              "hint": "Ask why a writer would break two short sentences off from a long one. Something is being set against something else.",
              "skill": "Author's purpose and structure",
              "evidence": "The people do not stay to watch."
            },
            {
              "q": "The report says the plan for a probe is 'simple to say and hard to do'. What does that phrase tell you?",
              "choices": [
                "The plan is easy for the crew riding in the back of the van and difficult only for the person driving it.",
                "The steps are easy to describe, and carrying them out with a storm coming is not.",
                "Nobody on the team has ever managed to get a probe down in the four minutes the plan allows for it.",
                "The plan only works if the whole crew says the steps out loud together before the van sets off."
              ],
              "answer": 1,
              "hint": "The next sentence lists the steps and then adds the time limit. Read them and ask which half of the phrase each part belongs to.",
              "skill": "Word meanings",
              "evidence": "The plan for a probe is simple to say and hard to do. Figure out exactly where the storm's core will cross a road, set the box down on the shoulder of that road two miles ahead of it, and leave, four minutes before the storm arrives."
            },
            {
              "q": "Paragraphs 1 and 3 together suggest something about the fourth probe, the one found upside down in a ditch. What is it?",
              "choices": [
                "It was set down carelessly on soft ground and tipped over by itself before the storm ever reached that part of the road at all.",
                "It was the only one of the four boxes with a wind sensor inside it, so it was the only one able to record the wind at the ground.",
                "It met a wind strong enough to move a box built not to tip at a hundred miles an hour, and it kept recording anyway.",
                "It was carried down to the ditch by the van's driver on the way out, so that it would be standing well clear of the storm's path."
              ],
              "answer": 2,
              "hint": "Paragraph one tells you what the box was built to stand up to. The last line tells you where it ended up and what it was still doing. Hold those together.",
              "skill": "Reading between the lines",
              "evidence": "The fourth is in a ditch a hundred yards away, upside down, still recording."
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
              "q": "Every deployment needs 6 probes, and there are 7 deployments. How many probes is that?",
              "answer": "42",
              "hint": "7 groups of 6, so 7 × 6.",
              "skill": "Multiplying"
            },
            {
              "q": "The team sorts 84 storm photos into two equal piles. How many photos are in each pile?",
              "answer": "42",
              "hint": "Half of 84.",
              "skill": "Dividing"
            },
            {
              "q": "The trip counter goes up to 1,000 miles and reads 818. How many more miles until it reaches 1,000?",
              "answer": "182",
              "hint": "1,000 − 818.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "The day's work is cut into 8 equal parts and the team has finished 6 of them. What fraction is done? (write a fraction)",
              "answer": "6/8",
              "hint": "6 parts out of 8.",
              "skill": "Fractions"
            },
            {
              "q": "The team drives 818 miles this week, then 60 more. How many miles is that?",
              "answer": "878",
              "hint": "818 + 60.",
              "skill": "Adding and subtracting"
            }
          ]
        },
        "6": {
          "lesson": {
            "title": "Grade 6 numbers",
            "points": [
              "Fraction ÷ fraction: flip the second one and multiply. 4/5 ÷ 2/5 = 4/5 × 5/2 = 20/10 = 2.",
              "Percent of a number: turn the percent into a fraction of 100.",
              "A ratio tells you how many of one thing for each group of the other.",
              "Order of operations: parentheses, then multiply and divide, then add and subtract."
            ],
            "example": "4 × (9 − 2) + 5: parentheses first, 9 − 2 = 7; then 4 × 7 = 28; then add 5 to get 33."
          },
          "problems": [
            {
              "q": "The truck's fuel tank is 3/4 full. Each storm chase burns 3/16 of a tank. How many chases can the team make?",
              "answer": "4",
              "hint": "Flip the second fraction and multiply: 3/4 × 16/3. Then simplify.",
              "skill": "Fractions"
            },
            {
              "q": "The team planned 240 miles of driving, and 50% were canceled. How many miles are still planned?",
              "answer": "120",
              "hint": "50% of 240 is 120. Take that off 240.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The team shares 18 seconds between two teams in the ratio 4 to 5. How many does the smaller share get?",
              "answer": "8",
              "hint": "4 + 5 = 9 parts. 18 ÷ 9 = 2 for one part.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The team works out 7 × 8 − 2 × 2. What is it?",
              "answer": "52",
              "hint": "Do both multiplications first, then subtract.",
              "skill": "Order of operations"
            },
            {
              "q": "In one winter week the coldest reading was −12 degrees and the warmest was −2 degrees. How many degrees apart are they?",
              "answer": "10",
              "hint": "From −12 up to −2.",
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
            "example": "9(x + 17) = 171, so x + 17 = 19, so x = 2."
          },
          "problems": [
            {
              "q": "20 radar scans took 15 minutes. At the same rate, how many minutes would 28 scans take?",
              "answer": "21",
              "hint": "One scan takes 15 ÷ 20 = 0.75. Then × 28.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The wind was blowing 40 miles an hour, then it picked up by 50%. How many miles an hour faster did it get?",
              "answer": "20",
              "hint": "50% of 40: 50/100 × 40.",
              "skill": "Ratios and percent"
            },
            {
              "q": "Over 14 hours the thermometer fell 28 degrees in all, the same amount each hour. What was the change each hour? (Write a fall as a negative number.)",
              "answer": "-2",
              "accept": [
                "−2"
              ],
              "hint": "Share −28 into 14 equal parts: −28 ÷ 14. One minus sign, so the answer is negative.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: 4(x + 13) = 80",
              "answer": "7",
              "hint": "Divide both sides by 4 to get x + 13 = 20.",
              "skill": "Equations"
            },
            {
              "q": "A round sheet has a radius of 10 inches. Using 3.14 for pi, what is its area in square inches?",
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
              "A list that adds the same amount each step follows a straight-line rule. The 1st number is the start, so the 10th number is 9 steps on.",
              "A small 2 means a number times itself: 8² is 8 × 8 = 64. Work out each power first, then add or subtract.",
              "Pythagoras: in a right triangle a² + b² = c², and c is always the longest side.",
              "Collect the x's first: 6x − 2x is 4x, and an x on its own means 1x."
            ],
            "example": "2, 11, 20, … adds 9 each step. The 4th number is 3 steps on: 2 + 3 × 9 = 29."
          },
          "problems": [
            {
              "q": "The wind speed, in miles an hour, goes 8, 12, 16, 20, and on. What is the 13th number in the list?",
              "answer": "56",
              "hint": "It starts at 8 and adds 4 each step. The number you want is 12 steps on from 8.",
              "skill": "Linear relationships"
            },
            {
              "q": "What is 4² − 4?",
              "answer": "12",
              "hint": "4 × 4 = 16, then take 4 off.",
              "skill": "Powers and roots"
            },
            {
              "q": "A right triangle has short sides of 7 and 24 feet. How long is its longest side, in feet?",
              "answer": "25",
              "hint": "7² + 24² = 625. The longest side is the square root of that.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "Solve for x: 7x − 5x = 14",
              "answer": "7",
              "hint": "7 − 5 = 2, so 2x = 14.",
              "skill": "Equations"
            },
            {
              "q": "A round tank is 8 feet across and 6 feet deep. Using 3.14 for pi, what is its volume in cubic feet? (The radius is half the distance across.)",
              "answer": "301.44",
              "hint": "The radius is 8 ÷ 2 = 4. Volume = 3.14 × radius × radius × depth: 3.14 × 4 × 4 × 6.",
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
          "example": "'Count only the probes still standing' means skip the one in the ditch."
        },
        "skill": "Following directions",
        "steps": [
          "Write the number of minutes the team waited before the road was empty: 20.",
          "Divide by the number of probes set down along the road today: 4.",
          "Add the number of probes still standing where they were left, from the last paragraph: 3.",
          "Take away the number of miles ahead of the storm a probe is set down: 2.",
          "Type your answer in seconds, not the number of minutes you just worked out. (Sixty seconds make one minute.)"
        ],
        "prompt": "Your answer:",
        "answer": "360",
        "hint": "Step 5 asks for a different unit than the one you worked in. Do steps 2, 3 and 4 first."
      }
    },
    {
      "id": "storm-5",
      "title": "Tornado",
      "recon": {
        "lesson": {
          "title": "The big day, in order",
          "points": [
            "A forecast that becomes a story tells events with times. Write them down.",
            "A question about a scale (like the EF scale) wants the number from the forecast.",
            "The main idea of the last paragraph is what the writer wants you to keep."
          ],
          "example": "'The game started at 2:15 and ended at 2:50.' How long did it last? Thirty-five minutes."
        },
        "title": "Forecast: Twenty-One Minutes",
        "passage": [
          "The team had followed the storm for two hours. At four in the afternoon the storm put down a funnel. It came out of the base as a thin gray rope and reached the ground at ten past four in an empty field. In a minute it grew into a wide dark cone throwing dirt a hundred feet in the air. The radar truck was a mile and a half away on a paved road. The couplet sat dead center on the screen. The drone went up to five hundred feet and held. The team leader's voice on the radio was very calm. Over and over, it said the same three things. They were distance, direction, and where the escape road was.",
          "A tornado is rated after the fact by the damage it leaves, on a scale from EF0, which peels shingles, to EF5, which wipes houses off their foundations. This one crossed two roads, a fence line and a barn in twenty-one minutes on the ground. It lifted at 4:31, a mile from a farmhouse whose family was in the cellar because of a warning that had gone out at 3:52. The survey team the next day would rate it EF2, with winds around a hundred and twenty miles an hour. The rating came from the barn's roof and the fence posts snapped at the ground.",
          "The team's data was the best of the season: radar from a mile and a half, drone video from above, and a probe that the tornado passed within four hundred yards of. The probe recorded the pressure dropping and the wind swinging around the compass as the funnel went by. Nobody on the team took a photograph for themselves until it lifted. Then they drove to the farmhouse to make sure the family was all right, which they were. Only after that did anyone cheer."
        ],
        "questions": [
          {
            "q": "How long was the tornado on the ground?",
            "choices": [
              "Two hours, the whole time the team followed it",
              "Twenty-one minutes",
              "Ten minutes",
              "All afternoon"
            ],
            "answer": 1,
            "hint": "Paragraph 2, the sentence with 'on the ground'.",
            "skill": "Finding details"
          },
          {
            "q": "What rating did the survey team give the tornado?",
            "choices": [
              "EF0",
              "EF2",
              "EF5",
              "EF10"
            ],
            "answer": 1,
            "hint": "Paragraph 2, the sentence with 'rate it'.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 1, what is the 'funnel'?",
            "choices": [
              "The spinning column of cloud reaching down from the storm",
              "The wide dark cone of dirt that was thrown a hundred feet in the air",
              "The couplet of green and red that sat dead center on the radar screen",
              "The wide dark base of the storm that the gray rope came down out of"
            ],
            "answer": 0,
            "hint": "The funnel 'came out of the base as a thin gray rope' and 'reached the ground'.",
            "skill": "Word meanings"
          },
          {
            "q": "Why was the family in the cellar when the tornado passed?",
            "choices": [
              "Because the tornado crossed the fence line by their barn",
              "Because a warning had gone out at 3:52, before the funnel formed",
              "Because the team called them",
              "Because it was raining"
            ],
            "answer": 1,
            "hint": "Paragraph 2, the sentence with '3:52'.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 3 mostly about?",
            "choices": [
              "How a tornado is rated after the fact by the damage it leaves behind, from EF0 to EF5",
              "The funnel coming out of the storm's base as a rope and growing into a wide dark cone",
              "The twenty-one minutes the tornado spent on the ground and the farmhouse it missed",
              "The data the team collected, and checking on the family before celebrating"
            ],
            "answer": 3,
            "hint": "Paragraph 3 lists the data and ends with the farmhouse and the cheer, in that order.",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Tornado math",
          "points": [
            "Minutes between clock times: count them.",
            "Warning lead time: touchdown time minus warning time.",
            "Different bottoms: make them the same first. 1/2 + 1/3 = 3/6 + 2/6 = 5/6.",
            "One and a half of something: the whole, plus half of it."
          ],
          "example": "4:10 to 4:31 is 21 minutes."
        },
        "problems": [
          {
            "q": "The warning went out at 3:52 and the tornado touched down at 4:10. How many minutes of warning did the family have?",
            "answer": "18",
            "hint": "From 3:52 to 4:00 is 8 minutes, then 10 more.",
            "skill": "Multi-step problems"
          },
          {
            "q": "The tornado moved at 30 miles an hour for 21 minutes, about 1 mile every 2 minutes. About how many miles did it travel? (round down)",
            "answer": "10",
            "hint": "21 ÷ 2 is 10 and a half. Round down.",
            "skill": "Dividing"
          },
          {
            "q": "The family took 1/4 of an hour to get to the cellar and waited 2/3 of an hour inside. How many hours is that? (write a fraction)",
            "answer": "11/12",
            "hint": "Make the bottoms the same: 1/4 is 3/12 and 2/3 is 8/12. Then add the tops.",
            "skill": "Fractions"
          },
          {
            "q": "The truck was a mile and a half from the funnel. A mile is 5,280 feet. How many feet is a mile and a half?",
            "answer": "7920",
            "accept": [
              "7,920"
            ],
            "hint": "5,280 plus half of 5,280, which is 2,640.",
            "skill": "Fractions"
          },
          {
            "q": "Winds were about 120 miles an hour. The chase car's top speed is 90. How much faster than the car was the wind?",
            "answer": "30",
            "hint": "120 − 90.",
            "skill": "Adding and subtracting"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "Nobody says it out loud",
            "points": [
              "The last question asks for something the report never states. You build it out of one fact here and one fact there.",
              "Name the two facts, then say 'so'. Whatever comes after 'so' is usually sitting there in the choices.",
              "A choice that needs something the report never mentions is out, however reasonable it sounds on its own."
            ],
            "example": "Paragraph one: the pump runs off the generator. Paragraph three: the fuel drum came up on the last barge of the year. So no barge means no water. Neither paragraph says that by itself."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea of the whole report?",
              "choices": [
                "A tornado is rated after the fact by the damage it leaves behind.",
                "The day worked because everything was in its place: the measurements, the warning that had gone out early, and the people who checked on a family before anyone celebrated.",
                "Tornadoes do more damage than any other kind of storm on Earth.",
                "The team stopped work to take photographs as soon as the funnel touched the ground, and left the radar truck and the drone running by themselves while the tornado crossed the fields."
              ],
              "answer": 1,
              "hint": "The funnel, the rating and the warning, and what the team did before it cheered. Find the choice that covers the last paragraph as well as the first.",
              "skill": "Central idea and evidence",
              "evidence": "Nobody on the team took a photograph for themselves until it lifted."
            },
            {
              "q": "Claim: the family was already sheltering before the tornado ever touched the ground. Which sentence from the report best supports that claim?",
              "choices": [
                "The team's data was the best of the season: radar from a mile and a half, drone video from above, and a probe that the tornado passed within four hundred yards of.",
                "It lifted at 4:31, a mile from a farmhouse whose family was in the cellar because of a warning that had gone out at 3:52.",
                "Then they drove to the farmhouse to make sure the family was all right, which they were.",
                "The probe recorded the pressure dropping and the wind swinging around the compass as the funnel went by."
              ],
              "answer": 1,
              "hint": "The claim is about timing. One sentence carries a clock time for the warning and can be set against the time in the first paragraph. The others carry no time at all.",
              "skill": "Finding details",
              "evidence": "It lifted at 4:31, a mile from a farmhouse whose family was in the cellar because of a warning that had gone out at 3:52."
            },
            {
              "q": "Why does the report explain the rating scale before it says what this tornado did?",
              "choices": [
                "So that EF2 means something when it arrives, because the reader can place it between peeled shingles and houses off their foundations.",
                "To show that this was the strongest tornado of the whole season, stronger than anything else the team had measured in the weeks before this one.",
                "To explain how a survey team drives out to a damage site the day after a tornado and works out a rating from the fences and roofs it finds.",
                "To compare tornadoes with the hailstorms in the reports before this one, so the reader can see which of the two does more damage to a farm."
              ],
              "answer": 0,
              "hint": "The scale is not used until the end of the paragraph. Ask what would happen to that ending if the scale had never been explained.",
              "skill": "Author's purpose and structure",
              "evidence": "A tornado is rated after the fact by the damage it leaves, on a scale from EF0, which peels shingles, to EF5, which wipes houses off their foundations."
            },
            {
              "q": "The report says the funnel came out of the base 'as a thin gray rope'. What does calling it a rope tell you?",
              "choices": [
                "It was tied to the cloud above it and could not break away.",
                "It was narrow and hanging down, before it widened into something else.",
                "It was made of dust rather than of cloud.",
                "It was strong enough to pull a building over."
              ],
              "answer": 1,
              "hint": "The next sentence tells you what it turned into a minute later. A word set against 'wide dark cone' has to be close to its opposite.",
              "skill": "Word meanings",
              "evidence": "It came out of the base as a thin gray rope and reached the ground at ten past four in an empty field. In a minute it grew into a wide dark cone throwing dirt a hundred feet in the air."
            },
            {
              "q": "Paragraphs 2 and 3 together show what the team counted as the real result of the day. What was it?",
              "choices": [
                "The rating of EF2 that the survey team gave the tornado when it came out the following day to look at the damage.",
                "The drone video shot from five hundred feet, which turned out better than anything the radar truck recorded.",
                "The twenty-one minutes the tornado spent on the ground, which was longer than any other storm the team followed.",
                "A family already in the cellar, which mattered to them more than the best data of the season."
              ],
              "answer": 3,
              "hint": "One paragraph tells you where the family was and why. The other tells you where the team drove before anyone cheered. The order of those two things is the answer.",
              "skill": "Reading between the lines",
              "evidence": "Then they drove to the farmhouse to make sure the family was all right, which they were. Only after that did anyone cheer."
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
              "q": "The team drives 8 miles on each of 5 trips. How many miles is that?",
              "answer": "40",
              "hint": "5 × 8.",
              "skill": "Multiplying"
            },
            {
              "q": "Every tornado track on the map is 3 miles long. The map shows 24 miles of tracks. How many tracks is that?",
              "answer": "8",
              "hint": "How many 3s fit into 24?",
              "skill": "Dividing"
            },
            {
              "q": "The team counted 239 minutes in the morning and 351 in the evening. How many more in the evening?",
              "answer": "112",
              "hint": "351 − 239.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "Which is bigger, 2/4 or 3/4? (write a fraction)",
              "answer": "3/4",
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
            "example": "3 × (12 − 5) + 8: parentheses first, 12 − 5 = 7; then 3 × 7 = 21; then add 8 to get 29."
          },
          "problems": [
            {
              "q": "The plan allows 60.5 hours. The team uses 15.65 hours on the first storm and 12.35 on the second. How many hours are left?",
              "answer": "32.5",
              "hint": "Add the two amounts used first, then take that from 60.5. Line up the points.",
              "skill": "Decimals"
            },
            {
              "q": "Out of every 100 minutes, 50 are set aside. Out of 160 minutes, how many is that?",
              "answer": "80",
              "hint": "160 is 1.6 hundreds, so 1.6 × 50.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The team divides 56 minutes of work in the ratio 3 to 4. How many minutes is the larger share?",
              "answer": "32",
              "hint": "7 parts in all, so one part is 8 minutes.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The team works out (9 − 4) × (7 + 11). What is it?",
              "answer": "90",
              "hint": "Each set of parentheses first, then multiply the two answers.",
              "skill": "Order of operations"
            },
            {
              "q": "Three winter readings came in: −17, −9 and 8 degrees. Which is the coldest?",
              "answer": "-17",
              "accept": [
                "−17"
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
            "example": "x ÷ 3 − 2 = 5, so x ÷ 3 = 7, so x = 21."
          },
          "problems": [
            {
              "q": "The job needs 20 minutes in all, at 2.5 minutes for each radar scan. One scan is already done. How many scans are left?",
              "answer": "7",
              "hint": "20 ÷ 2.5 = 8 in all, then take the finished one off.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The plan says the drive may run over by no more than 10%. Starting from 60 minutes, what is the longest the plan allows, in minutes?",
              "answer": "66",
              "hint": "10% of 60 is 6. Add it on.",
              "skill": "Ratios and percent"
            },
            {
              "q": "On a winter night the thermometer fell 7 degrees from −9 degrees. What does it read?",
              "answer": "-16",
              "accept": [
                "−16"
              ],
              "hint": "Falling from below zero takes you further from zero: 9 + 7, and it is still below zero.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: x ÷ 4 − 22 = 8",
              "answer": "120",
              "hint": "Add 22 to both sides, then multiply by 4.",
              "skill": "Equations"
            },
            {
              "q": "A map uses 1 inch for every 4 miles. How many inches are needed for 24 miles?",
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
              "Slope is the rise over the run: how much y goes up, divided by how much x goes across.",
              "A small 2 means a number times itself: 4² is 4 × 4 = 16. Work out the power first, then multiply.",
              "Pythagoras: in a right triangle a² + b² = c², and c is always the longest side.",
              "With x on both sides, move all the x's to one side first, then all the plain numbers to the other."
            ],
            "example": "Through (0, 6) and (4, 34): y rises 28 while x runs 4, so the slope is 28 ÷ 4 = 7."
          },
          "problems": [
            {
              "q": "A line passes through (0, 15) and (4, 51). What is its slope?",
              "answer": "9",
              "hint": "Slope is the rise over the run: 36 ÷ 4.",
              "skill": "Linear relationships"
            },
            {
              "q": "The team doubles an 8²-minute wait. How many minutes is that?",
              "answer": "128",
              "hint": "8² is 64. Double it.",
              "skill": "Powers and roots"
            },
            {
              "q": "The team goes 8 feet east and then 15 feet north. In a straight line, how far is that from the start, in feet?",
              "answer": "17",
              "hint": "The two legs make a right angle: 8² + 15² = 289.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "For what value of x do 6x + 18 and 4x + 22 come to the same number?",
              "answer": "2",
              "hint": "Set them equal, take 4x off both sides, then take 18 off.",
              "skill": "Equations"
            },
            {
              "q": "The team writes a number as 2 × 10^4. What number is ten times as big? Write it out in full.",
              "answer": "200000",
              "hint": "Ten times adds one to the power: 2 × 10^5.",
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
            "If the last step asks for a rating, give the rating."
          ],
          "example": "'Type the number, unless the storm was a hurricane' means check the storm first, then decide."
        },
        "skill": "Following directions",
        "steps": [
          "Write the number of minutes the tornado was on the ground: 21.",
          "Multiply by the height the drone held, in hundreds of feet: 5.",
          "Add the yards the probe sat from the funnel, in hundreds: 4.",
          "Take away the number of roads the tornado crossed: 2.",
          "Type the result, unless the survey team rated this tornado EF5, in which case type CELLAR. (Paragraph 2 gives the rating.)"
        ],
        "prompt": "Your answer:",
        "answer": "107",
        "hint": "Work steps 2, 3 and 4 in order from the 21 minutes. Then paragraph 2 gives the rating step 5 asks about."
      }
    }
  ]
};
if (window.BASECAMP_MISSIONS && window.BASECAMP_MISSIONS.register) window.BASECAMP_MISSIONS.register(C);
else (window.BASECAMP_CAMPAIGNS_PENDING = window.BASECAMP_CAMPAIGNS_PENDING || []).push(C);
})();
