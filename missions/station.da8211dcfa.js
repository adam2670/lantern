// ODYSSEY — campaign "station". GENERATED, do not edit.
// Source of truth: content/missions-full.js. Rebuild with:  python3 tools/split-missions.py
// RULE: nothing in this file is about the person using it. Content only.
(function () {
var C = {
  "id": "station",
  "ready": true,
  "kind": "build",
  "readingLevel": {
    "fk": 5.8,
    "cl": 7.0
  },
  "grade": "5",
  "kindLabel": "Build",
  "form": "tether",
  "title": "Station EVA",
  "subtitle": "A space station, 250 miles up",
  "pitch": "Five spacewalks to build a new solar array on the outside of a space station: the mount, the truss, the wings, the wiring, and the moment it unrolls toward the sun. The array is the progress bar. The last campaign of the year.",
  "scene": "assets/scene-station.jpg",
  "buildArt": "solararray",
  "progress": {
    "unit": "parts",
    "total": 5
  },
  "dayNoun": "Spacewalk",
  "stageNoun": "Part",
  "finalNoun": "Deploy",
  "stages": [
    "Mount",
    "Truss",
    "Wings",
    "Wiring",
    "Deploy"
  ],
  "reconNoun": "Flight Plan",
  "legs": {
    "recon": "Flight plan",
    "nav": "Orbit math",
    "orders": "EVA orders",
    "debrief": "Airlock"
  },
  "rules": [
    "Stuck on a value? <b>Flag it</b> and move on. Pending items come back at the airlock.",
    "Flight plan: read the questions <b>before</b> the sheet.",
    "EVA orders: read <b>every</b> step before you open the hatch."
  ],
  "fact": "A space station goes around the Earth every ninety minutes, so an astronaut outside sees the sun rise and set sixteen times a day and has to plan every job around under an hour of daylight.",
  "finale": {
    "prompt": "The array is out and the power is flowing. Which color goes on the crew's mission patch for the year?",
    "options": [
      {
        "label": "Solar gold",
        "color": "#FFB454"
      },
      {
        "label": "Earth blue",
        "color": "#4FD1FF"
      },
      {
        "label": "White",
        "color": "#F4F8FF"
      },
      {
        "label": "Deep space",
        "color": "#1B2A5C"
      }
    ],
    "done": "Sew it on. Then look down. All of it, every campaign, is on that blue ball, and you can see the whole thing from here."
  },
  "patrols": [
    {
      "id": "station-1",
      "title": "The Mount",
      "recon": {
        "lesson": {
          "title": "Questions first, then the plan",
          "points": [
            "Read the five questions before the plan. Two want a detail, one wants a word, one wants a why, one wants what a paragraph is mostly about.",
            "Times and counts are exact. Circle them.",
            "The answer is always in the plan. You never have to guess."
          ],
          "example": "Question: 'How long does the bus ride take?' Hunt for 'minutes'."
        },
        "title": "Flight Plan: Ninety Minutes Around the World",
        "passage": [
          "The station goes around the Earth once every ninety minutes, two hundred and fifty miles up, at seventeen thousand miles an hour. Everything about working outside it comes from that one fact. About fifty-five minutes of each ninety are daylight and thirty-five are night, so an astronaut outside gets under an hour of sun to work in. Then the station slides into the Earth's shadow. The temperature on the suit's outside drops two hundred degrees in a few minutes. Every task in the plan is sized to fit a daylight pass or to be safe to stop in the dark.",
          "The suit is a spacecraft the shape of a person. It holds air at pressure, cools the astronaut with water running through tubes in the underwear, and carries eight hours of oxygen and a spare. Its gloves have heaters in the fingertips. The fingers go cold first, and the fingers do the work. Getting into it takes an hour with help. Getting out of the airlock takes another hour. That is because the air has to be pumped out slowly. The astronaut also has to breathe pure oxygen first, to keep bubbles from forming in the blood, the same rule as a diver coming up.",
          "The first spacewalk installs the mount. The mount is a steel plate that bolts to the station's truss, the long beam that runs across it like a spine. The new array will stand on that plate. The astronaut goes out through the hatch on a tether. A tether is a steel cable that clips to a rail. That way the astronaut cannot float away. From there it is hand over hand along the handrails. The astronaut never lets go of one before the next is held. Twelve bolts, one at a time, with a power tool that counts its own turns. Three daylight passes. The plan says: mount installed, twelve of twelve, tether checked, back in the airlock with oxygen to spare."
        ],
        "questions": [
          {
            "q": "How long does the station take to go around the Earth?",
            "choices": [
              "Nine days",
              "Ninety minutes",
              "Nine hours",
              "A day"
            ],
            "answer": 1,
            "hint": "The first sentence of paragraph 1.",
            "skill": "Finding details"
          },
          {
            "q": "How many bolts hold the mount?",
            "choices": [
              "Four",
              "Twelve",
              "Six",
              "Two"
            ],
            "answer": 1,
            "hint": "Paragraph 3, the sentence 'Twelve bolts, one at a time'.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 3, what is the 'truss'?",
            "choices": [
              "A kind of bolt",
              "The long beam that runs across the station like a spine",
              "The airlock",
              "The steel cable that clips onto a rail so that nobody floats away"
            ],
            "answer": 1,
            "hint": "The sentence 'the station's truss, the long beam that runs across it like a spine'.",
            "skill": "Word meanings"
          },
          {
            "q": "Why does the astronaut breathe pure oxygen before leaving the airlock?",
            "choices": [
              "To keep bubbles from forming in the blood when the pressure drops, the same rule as a diver",
              "Because the suit carries pure oxygen and no other kind of air",
              "Because pure oxygen keeps the fingers from going cold in the gloves",
              "Because the air inside the airlock has to be pumped out slowly, and that takes another whole hour"
            ],
            "answer": 0,
            "hint": "The last sentence of paragraph 2.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 1 mostly about?",
            "choices": [
              "The suit's gloves",
              "How the ninety-minute orbit shapes every job done outside",
              "What the suit does for the astronaut and how long it takes to get into",
              "The handrails"
            ],
            "answer": 1,
            "hint": "The second sentence of paragraph 1 says everything about working outside comes from the orbit.",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Orbit math",
          "points": [
            "Orbits a day: 24 hours × 60 ÷ 90.",
            "Half of a number: divide by 2.",
            "A fraction times a whole number: 9 × 2/3 is nine 2/3s, which is 18/3, or 6.",
            "Hours to minutes: × 60, so 2.5 hours is 150 minutes."
          ],
          "example": "A 100-minute loop: 1,000 minutes ÷ 100 = 10 loops."
        },
        "problems": [
          {
            "q": "A day is 1,440 minutes and one orbit takes 90. How many orbits in a day?",
            "answer": "16",
            "hint": "1,440 ÷ 90.",
            "skill": "Dividing"
          },
          {
            "q": "The planners' rule of thumb counts half of each 90-minute orbit as daylight. How many minutes is that?",
            "answer": "45",
            "hint": "90 ÷ 2.",
            "skill": "Fractions"
          },
          {
            "q": "Each bolt on the mount takes 2/3 of a minute to tighten. How many minutes do 12 bolts take?",
            "answer": "8",
            "hint": "Twelve 2/3s is 24/3. Three thirds make one minute.",
            "skill": "Fractions"
          },
          {
            "q": "The suit carries 8 hours of oxygen. The spacewalk lasts 6 and a half hours. How many minutes of oxygen are spare? (8 hours minus 6.5 hours, in minutes)",
            "answer": "90",
            "hint": "8 − 6.5 = 1.5 hours, which is 90 minutes.",
            "skill": "Multi-step problems"
          },
          {
            "q": "The station is 250 miles up and travels 17,000 miles an hour. In one 90-minute orbit, how many miles does it travel? (17,000 × 1.5)",
            "answer": "25500",
            "accept": [
              "25,500"
            ],
            "hint": "17,000 plus half of 17,000, which is 8,500.",
            "skill": "Multi-step problems"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "Find the fact everything hangs on",
            "points": [
              "Read all three paragraphs, then say in one sentence what the report is about. Some reports open with the one fact the rest of them depend on.",
              "The wrong answers are usually true but the wrong size: a detail from the middle, or a statement far larger than anything on the page.",
              "Then four more moves: prove a claim with one line, name a paragraph's job, read a phrase off its own sentence, and hold two paragraphs together."
            ],
            "example": "Three paragraphs about a bakery: the oven only holds twelve loaves, so the orders are split, so the van goes twice. Everything after the first sentence is what the first sentence forced."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea of the whole report?",
              "choices": [
                "The gloves have heaters in the fingertips because fingers go cold first.",
                "One fact, a ninety-minute orbit, decides how long the astronaut has, what the suit must do, and how much work a spacewalk can hold.",
                "Space is the most hostile place people have ever traveled to.",
                "An astronaut outside can keep working for as long as the oxygen lasts."
              ],
              "answer": 1,
              "hint": "Under an hour of sun, an hour to get dressed, and a job measured in daylight passes. Ask what all three are counting.",
              "skill": "Central idea and evidence",
              "evidence": "Everything about working outside it comes from that one fact."
            },
            {
              "q": "Claim: getting ready to go outside takes extra time because of what the astronaut's own body needs. Which sentence from the report best supports that claim?",
              "choices": [
                "Getting into it takes an hour with help.",
                "The astronaut also has to breathe pure oxygen first, to keep bubbles from forming in the blood, the same rule as a diver coming up.",
                "The suit is a spacecraft the shape of a person.",
                "Every task in the plan is sized to fit a daylight pass or to be safe to stop in the dark."
              ],
              "answer": 1,
              "hint": "The others are about the suit or the plan. The claim is about what is happening inside the astronaut. Find the sentence that says what the wait protects against.",
              "skill": "Finding details",
              "evidence": "The astronaut also has to breathe pure oxygen first, to keep bubbles from forming in the blood, the same rule as a diver coming up."
            },
            {
              "q": "Why does the report open with the orbit before it mentions the suit or the job?",
              "choices": [
                "Because the station's speed is the most surprising fact in the report.",
                "Because the length of a daylight pass is what every later decision has to be measured against.",
                "To explain how the station is held up in its orbit two hundred and fifty miles above the surface of the Earth.",
                "To describe what the Earth looks like from two hundred and fifty miles up."
              ],
              "answer": 1,
              "hint": "Read the second sentence of the report, then look at how that paragraph ends. The paragraph tells you what it is for.",
              "skill": "Author's purpose and structure",
              "evidence": "Every task in the plan is sized to fit a daylight pass or to be safe to stop in the dark."
            },
            {
              "q": "The report calls the suit 'a spacecraft the shape of a person'. What does that mean as it is used here?",
              "choices": [
                "It does everything a vehicle would have to do to keep somebody alive out there",
                "It is put together in the same factory, out of the same metal, as the spacecraft that carry astronauts up",
                "It can fly the astronaut back to the station on its own",
                "It is only ever worn inside the station's airlock"
              ],
              "answer": 0,
              "hint": "Read the rest of that paragraph. Air, cooling, oxygen, heat: ask whether that is a list of clothing or a list of systems.",
              "skill": "Word meanings",
              "evidence": "The suit is a spacecraft the shape of a person."
            },
            {
              "q": "Paragraphs 1 and 3 together explain why installing twelve bolts took three daylight passes. Why so many?",
              "choices": [
                "The power tool had to be carried back inside and recharged after every bolt, so only a few bolts could be turned on any one trip out.",
                "Only about fifty-five minutes in every ninety are daylight, so a job is spread over however many daylight passes it needs.",
                "The astronaut had to return to the airlock between bolts.",
                "The tether could only be clipped to one rail at a time."
              ],
              "answer": 1,
              "hint": "Paragraph one tells you how much of each orbit is usable. Paragraph three tells you how many passes the job took. Divide the work by the light.",
              "skill": "Reading between the lines",
              "evidence": "About fifty-five minutes of each ninety are daylight and thirty-five are night"
            }
          ]
        }
      },
      "navByGrade": {
        "3": {
          "lesson": {
            "title": "Grade 3 numbers",
            "points": [
              "Multiplication facts: 7 × 4 means 7 groups of 4.",
              "Sharing equally is dividing.",
              "Adding three numbers: add two, then add the third.",
              "Fractions with the same bottom: add the tops."
            ],
            "example": "7 × 4 = 28."
          },
          "problems": [
            {
              "q": "The astronaut counts 8 tasks with 6 bolts in each. How many bolts is that?",
              "answer": "48",
              "hint": "8 × 6.",
              "skill": "Multiplying"
            },
            {
              "q": "48 bolts are shared equally among 8 tasks. How many bolts in each task?",
              "answer": "6",
              "hint": "How many 8s make 48?",
              "skill": "Dividing"
            },
            {
              "q": "The astronaut counted 176 minutes, then found 94 more, then 22 more. How many minutes in all?",
              "answer": "292",
              "hint": "176 + 94 first. Then add 22.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "The astronaut finished 3/8 of the day's work before the break and 3/8 after. What fraction is done? (write a fraction)",
              "answer": "6/8",
              "hint": "Same bottom. Add the tops.",
              "skill": "Fractions"
            },
            {
              "q": "A bolt platform is 5 squares wide and 4 squares long. How many squares is that?",
              "answer": "20",
              "hint": "5 rows of 4, so 5 × 4.",
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
            "example": "3 × (7 − 2) + 6 = 21: parentheses, then multiply, then add."
          },
          "problems": [
            {
              "q": "A regular task takes 11.75 minutes. A long one takes 2.4 times as long. How many minutes does the long one take?",
              "answer": "28.2",
              "hint": "Multiply 1175 × 24 without the points, then put back 3 decimal places.",
              "skill": "Decimals"
            },
            {
              "q": "Of 40 minutes, 25% are set aside. How many is that?",
              "answer": "10",
              "hint": "25% of 40: 25% is 25/100.",
              "skill": "Ratios and percent"
            },
            {
              "q": "Bolts and minutes are kept in the ratio 1 to 3. If there are 8 bolts, how many minutes?",
              "answer": "24",
              "hint": "8 ÷ 1 = 8 groups. Each group has 3 minutes.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The astronaut works out 4 × (10 − 1) + 2. What is it?",
              "answer": "38",
              "hint": "Parentheses first, then multiply, then add.",
              "skill": "Order of operations"
            },
            {
              "q": "Solve for x: x + 218 = 900",
              "answer": "682",
              "hint": "Subtract 218 from both sides.",
              "skill": "Equations"
            }
          ]
        },
        "7": {
          "lesson": {
            "title": "Grade 7 numbers",
            "points": [
              "A unit rate is the total divided by how many: 14 ÷ 4 = 3.5 for one.",
              "Percent change: find that percent of the starting number, then add it on or take it off.",
              "Below zero, going up adds and going down subtracts. Walk the number line one step at a time.",
              "A two-step equation: undo the adding first, then undo the multiplying."
            ],
            "example": "3x + 8 = 29, so 3x = 21, so x = 7."
          },
          "problems": [
            {
              "q": "8 tasks needed 20 minutes altogether. How many minutes is that for one task?",
              "answer": "2.5",
              "hint": "A rate is the total shared out: 20 ÷ 8.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The first time, the repair took 60 minutes. The second time, it took 20% less time. How many minutes did it take the second time?",
              "answer": "48",
              "hint": "20% of 60 is 12. Then take it off.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The supply ledger opens at −11 bolts. The astronaut adds 18 bolts, then takes out 5 bolts. What does the ledger read now?",
              "answer": "2",
              "hint": "Start at −11, add 18 to get 7, then subtract 5.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: 2x + 19 = 39",
              "answer": "10",
              "hint": "Take 19 off both sides first, then divide by 2.",
              "skill": "Equations"
            },
            {
              "q": "On the plan, 1 cm stands for 25 meters. The truss measures 8 cm on the plan. How long is it really, in meters?",
              "answer": "200",
              "hint": "Every cm is 25 m, so 8 × 25.",
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
            "example": "Start at 20 and add 6 each hour: after 3 hours, 6 × 3 + 20 = 38."
          },
          "problems": [
            {
              "q": "The astronaut has tightened 10 bolts and tightens 3 more every hour. After 4 hours, how many bolts has the astronaut tightened?",
              "answer": "22",
              "hint": "This is the straight-line rule y = mx + b: 3 × 4 + 10.",
              "skill": "Linear relationships"
            },
            {
              "q": "Each panel holds 7² solar cells. There are 7 panels. How many solar cells in all?",
              "answer": "343",
              "hint": "7² means 7 × 7 = 49. Then × 7.",
              "skill": "Powers and roots"
            },
            {
              "q": "The astronaut runs a tether from the top of a 12-meter antenna to a point 35 meters away along the truss, at a right angle. How long is the tether, in meters?",
              "answer": "37",
              "hint": "Right triangle: a² + b² = c². 12² + 35² = 144 + 1225 = 1369. The tether is the square root of that.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "Solve for x: 7x + 11 = x + 35",
              "answer": "4",
              "hint": "Take x off both sides to get 6x + 11 = 35, then take 11 off both sides and divide.",
              "skill": "Equations"
            },
            {
              "q": "The astronaut writes the total number of minutes as 2 × 10^3. Written out in full, what number is that?",
              "answer": "2000",
              "hint": "10^3 is 1 with 3 zeros after it: 1,000. Then × 2.",
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
          "example": "'Start at 25. Add 10. Ignore that, and take 2 off 25 instead.' You end on 23."
        },
        "skill": "Following directions",
        "steps": [
          "Write the minutes in one orbit: 90.",
          "Divide by the daylight passes the mount took: 3.",
          "Add the bolts in the mount: 12.",
          "Subtract the tether clipped to the rail: 1.",
          "Ignore step 3. Bolts get their own line in the plan. Take the tether off your step 2 total the way step 4 says, then add the minutes the checklist allows for the mount: 45.",
          "Type the total you finish on."
        ],
        "prompt": "Your answer:",
        "answer": "74",
        "hint": "Step 5 lifts the bolts back out of the sum. Start from your step 2 total, take the tether off, then put the checklist's 45 minutes on."
      }
    },
    {
      "id": "station-2",
      "title": "The Truss",
      "recon": {
        "lesson": {
          "title": "Working where nothing weighs anything",
          "points": [
            "When the plan explains a surprise about space, the explanation is the detail.",
            "Lengths in meters are exact.",
            "'Why' about the method: the reason is what would happen without it."
          ],
          "example": "'A ton weighs nothing but still pushes back.' Why be careful with it? It still pushes."
        },
        "title": "Flight Plan: A Ton That Weighs Nothing",
        "passage": [
          "The truss segment for the new array is a box of aluminum beams six meters long. It weighed a ton on the ground and weighs nothing here. Both facts matter. It weighs nothing because it is falling around the Earth at the same speed as the station and the astronaut, so nothing presses on anything; that is all weightlessness is. But it still has all its mass. Push it and it moves slowly and keeps moving. Stopping it takes exactly the push that started it. An astronaut who shoves a ton of beam and then tries to stop it with one hand learns what mass means through the wrist.",
          "So the segment is moved by the station's robot arm, a jointed boom seventeen meters long controlled from inside. The arm lifts it out of the cargo bay a centimeter at a time and holds it next to the mount. The astronaut stands in a foot restraint clipped to the arm. From there the astronaut guides it in by hand. The two astronauts outside talk to the one inside on the arm controls. The three of them move a ton of beam a centimeter at a time, in silence, in daylight, with the Earth turning below like a slow blue floor.",
          "The truss locks to the mount with four capture latches. Then it is bolted. The astronaut moves along it hand over hand, checking each of forty handrails, because the handrails are the only road there will ever be out to the end of the array. Two daylight passes, one segment. The plan says: truss segment mated, latches four, bolts eight, handrails forty, verified. The plan also says, in the margin, what the plan always says: slow is fast."
        ],
        "questions": [
          {
            "q": "How long is the truss segment?",
            "choices": [
              "A foot",
              "Seventeen meters",
              "Six meters",
              "A yard"
            ],
            "answer": 2,
            "hint": "The first sentence of paragraph 1.",
            "skill": "Finding details"
          },
          {
            "q": "How is the segment moved out of the cargo bay?",
            "choices": [
              "The astronaut carries it",
              "The station's robot arm lifts it a centimeter at a time",
              "It floats out on its own because it weighs nothing there",
              "Two astronauts push it out and stop it with their hands"
            ],
            "answer": 1,
            "hint": "Paragraph 2, the first two sentences.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 1, what does 'mass' mean?",
            "choices": [
              "The amount of stuff in a thing, which does not change in space even when weight does",
              "Weight",
              "A church service",
              "How hard a thing presses down on whatever is underneath it, which is nothing at all in orbit"
            ],
            "answer": 0,
            "hint": "The sentences 'But it still has all its mass. Push it and it moves slowly and keeps moving.'",
            "skill": "Word meanings"
          },
          {
            "q": "Why does the truss weigh nothing on the station?",
            "choices": [
              "Because it is made of foam",
              "Because the station's own robot arm is carrying the whole of its weight while the astronauts guide it in by hand",
              "Because it is falling around the Earth at the same speed as the station, so nothing presses on anything",
              "Because two hundred and fifty miles above the ground there is nothing left to pull down on a thing that far away"
            ],
            "answer": 2,
            "hint": "Paragraph 1, the fourth sentence.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 2 mostly about?",
            "choices": [
              "How the robot arm and the astronauts move the segment together, slowly",
              "The Earth below",
              "The cargo bay",
              "The foot restraint"
            ],
            "answer": 0,
            "hint": "Paragraph 2 describes the arm, the guiding, and the three people working together.",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Truss math",
          "points": [
            "Meters to centimeters: × 100.",
            "Volume of a box: length × width × height. 3 × 3 × 4 = 36 cubic feet.",
            "Latches plus bolts: total fastenings.",
            "Two-step: passes times daylight minutes."
          ],
          "example": "4 meters is 4 × 100 = 400 centimeters."
        },
        "problems": [
          {
            "q": "The segment is 6 meters long. A meter is 100 centimeters. How many centimeters is that?",
            "answer": "600",
            "hint": "6 × 100.",
            "skill": "Multiplying"
          },
          {
            "q": "The robot arm is 17 meters and the segment is 6. How many meters longer is the arm?",
            "answer": "11",
            "hint": "17 − 6.",
            "skill": "Adding and subtracting"
          },
          {
            "q": "The segment has 4 latches and 8 bolts. How many fastenings in all?",
            "answer": "12",
            "hint": "4 + 8.",
            "skill": "Adding and subtracting"
          },
          {
            "q": "The job took 2 work slots of 45 minutes. How many minutes of work is that?",
            "answer": "90",
            "hint": "2 × 45.",
            "skill": "Multiplying"
          },
          {
            "q": "A supply box on the truss is 5 feet long, 2 feet wide and 2 feet tall. How many cubic feet does it hold?",
            "answer": "20",
            "hint": "Length × width × height: 5 × 2 first, then times 2.",
            "skill": "Volume"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "The line that carries the claim",
            "points": [
              "Every choice is a real sentence from the report, so being true is worth nothing. Only proving counts.",
              "If the claim is about a person, look for the sentence with a person in it. A statement of physics is not a statement about anybody.",
              "Read the claim and your pick back to back and ask whether a gap is still open between them."
            ],
            "example": "Claim: the machine can injure the operator. 'It runs at three thousand revolutions' is background. 'A loose sleeve is pulled in before anyone can let go' is the proof."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea of the whole report?",
              "choices": [
                "The station's robot arm is a jointed boom seventeen meters long, and it is worked by a crew member sitting inside the station.",
                "In space the ordinary rules of physics no longer apply at all.",
                "Weightless does not mean easy to move, so a heavy part is handled by machine and by three people working very slowly.",
                "Something that weighs nothing can be pushed around with one hand."
              ],
              "answer": 2,
              "hint": "A ton that weighs nothing, an arm moving a centimeter at a time, and two words written in the margin. Find the choice that holds all three.",
              "skill": "Central idea and evidence",
              "evidence": "But it still has all its mass."
            },
            {
              "q": "Claim: an object with no weight can still hurt somebody. Which sentence from the report best supports that claim?",
              "choices": [
                "It weighs nothing because it is falling around the Earth at the same speed as the station and the astronaut, so nothing presses on anything; that is all weightlessness is.",
                "An astronaut who shoves a ton of beam and then tries to stop it with one hand learns what mass means through the wrist.",
                "The three of them move a ton of beam a centimeter at a time, in silence, in daylight, with the Earth turning below like a slow blue floor.",
                "The plan also says, in the margin, what the plan always says: slow is fast."
              ],
              "answer": 1,
              "hint": "The others explain weightlessness, describe the careful move, or quote the plan. The claim is about somebody getting hurt.",
              "skill": "Finding details",
              "evidence": "An astronaut who shoves a ton of beam and then tries to stop it with one hand learns what mass means through the wrist."
            },
            {
              "q": "What job does the second paragraph do after the first?",
              "choices": [
                "It shows what is actually done about the problem the first paragraph set up.",
                "It explains why the segment weighed a ton back on the ground and nothing at all up here.",
                "It sets the robot arm against the astronaut's own arms to compare them.",
                "It lists the bolts and latches used to fix the mount in place."
              ],
              "answer": 0,
              "hint": "The first paragraph ends on somebody hurting a wrist. The second opens with the word 'So'. Ask what that one word is doing there.",
              "skill": "Author's purpose and structure",
              "evidence": "So the segment is moved by the station's robot arm, a jointed boom seventeen meters long controlled from inside."
            },
            {
              "q": "The plan's margin says 'slow is fast'. What does that mean as it is used here?",
              "choices": [
                "The robot arm is built to run at one fixed speed, so nobody inside is able to make it move faster",
                "The astronauts have far more time out there than the plan allows them, so there is no need to hurry",
                "Working carefully takes less time overall than repairing what haste breaks",
                "A daylight pass feels shorter than it actually is"
              ],
              "answer": 2,
              "hint": "The whole report has been a ton of metal moved a centimeter at a time by three people. Ask what those two words are advising, and what they are advising against.",
              "skill": "Word meanings",
              "evidence": "The plan also says, in the margin, what the plan always says: slow is fast."
            },
            {
              "q": "Paragraphs 2 and 3 together explain why the astronaut checks all forty handrails before going in. Why check every one?",
              "choices": [
                "Out there a person moves hand over hand, and these rails are the only road to the end of the array.",
                "The handrails have to be counted for the plan's own records.",
                "The robot arm is unable to reach the far end of the truss.",
                "The handrails are what hold the truss segment onto the mount."
              ],
              "answer": 0,
              "hint": "Paragraph three shows you how a person moves out there, and what the rails are for. Put the two together.",
              "skill": "Reading between the lines",
              "evidence": "because the handrails are the only road there will ever be out to the end of the array"
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
              "Fractions with the same bottom: add or take away the tops; the bottom stays."
            ],
            "example": "4 × 7 = 28."
          },
          "problems": [
            {
              "q": "The astronaut counted 6 meters yesterday and three times as many today. How many meters today?",
              "answer": "18",
              "hint": "Three times 6: 6 + 6 + 6.",
              "skill": "Multiplying"
            },
            {
              "q": "The station's truss is 30 meters long, built from segments 6 meters long. How many segments is that?",
              "answer": "5",
              "hint": "How many 6s make 30?",
              "skill": "Dividing"
            },
            {
              "q": "The astronaut starts with 193 bolts and uses 147. How many are left?",
              "answer": "46",
              "hint": "193 − 147.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "2/4 of the day's work was done yesterday. What fraction is still to do? (write a fraction)",
              "answer": "2/4",
              "hint": "The whole job is 4/4. Take 2/4 off it.",
              "skill": "Fractions"
            },
            {
              "q": "The tally stood at 287 bolts and 500 more were added. What is the tally now?",
              "answer": "787",
              "hint": "287 + 500.",
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
            "example": "6 + 4 × 8 = 38: multiply first, then add."
          },
          "problems": [
            {
              "q": "The spacewalk is planned for 6 1/4 hours. Each bolt task takes 5/12 of an hour. How many bolt tasks fit in that time?",
              "answer": "15",
              "hint": "Make 6 1/4 an improper fraction, 25/4. Then multiply by the flip of 5/12: 25/4 × 12/5.",
              "skill": "Fractions"
            },
            {
              "q": "16 of the 80 segments are set aside. What percent is that? (write just the number)",
              "answer": "20",
              "accept": [
                "20%"
              ],
              "hint": "16 out of 80, then out of 100.",
              "skill": "Ratios and percent"
            },
            {
              "q": "For every 3 meters of truss there are 5 handrails. There are 10 handrails. How many meters of truss?",
              "answer": "6",
              "hint": "10 ÷ 5 = 2 groups. Each group has 3 meters.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The astronaut works out 7 + 5 × 9. What is it?",
              "answer": "52",
              "hint": "Multiply before you add.",
              "skill": "Order of operations"
            },
            {
              "q": "Solve for x: 900 − x = 240",
              "answer": "660",
              "hint": "x is what is left when 240 is taken off 900.",
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
              "Count the minus signs. An even number gives a plus answer, an odd number a minus: (−2) × (−3) × (−5) = −30.",
              "A two-step equation: undo the adding first, then undo the multiplying."
            ],
            "example": "50 − 7x = 15, so 7x = 35, so x = 5."
          },
          "problems": [
            {
              "q": "One task needs 0.75 minutes. How many minutes do 16 tasks need?",
              "answer": "12",
              "hint": "16 × 0.75.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The astronaut counted 320 segments on the first pass and 400 on the second. By what percent did the count change? (write just the number)",
              "answer": "25",
              "accept": [
                "25%"
              ],
              "hint": "The change is 80. 80 out of 320, then out of 100.",
              "skill": "Ratios and percent"
            },
            {
              "q": "Each of the 4 air tanks on the truss loses 2 units of pressure every hour. Write that as −2 an hour for each tank. What is the total change for all 4 tanks over 7 hours? Work it out as 4 × (−2) × 7.",
              "answer": "-56",
              "accept": [
                "−56"
              ],
              "hint": "4 × 2 × 7, then count the minus signs. One makes a minus.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: 43 − 5x = 13",
              "answer": "6",
              "hint": "Move 5x to the right and 13 to the left: 5x = 30.",
              "skill": "Equations"
            },
            {
              "q": "A round lid has a radius of 20 centimeters. Using 3.14 for pi, how many centimeters is it around the edge?",
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
            "example": "Start with 50 and use 4 an hour: after 8 hours, 50 − 4 × 8 = 18."
          },
          "problems": [
            {
              "q": "The astronaut starts with 69 segments and uses 6 every hour. How many are left after 9 hours?",
              "answer": "15",
              "hint": "6 × 9 = 54 used, taken off 69.",
              "skill": "Linear relationships"
            },
            {
              "q": "What is the square root of 144?",
              "answer": "12",
              "hint": "What number times itself makes 144?",
              "skill": "Powers and roots"
            },
            {
              "q": "A 17-meter tether runs from the top of an antenna to a point 15 meters away along the truss, at a right angle. How tall is the antenna, in meters?",
              "answer": "8",
              "hint": "a² = c² − b² = 289 − 225 = 64. Then take the square root.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "Solve for x: 11x = 5x + 60",
              "answer": "10",
              "hint": "Take 5x off both sides: 6x = 60. Then divide by 6.",
              "skill": "Equations"
            },
            {
              "q": "A round water tank at the launch site has a radius of 10 meters and holds 942 cubic meters. Using 3.14 for pi, how many meters deep is it?",
              "answer": "3",
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
            "Some orders build two totals. Keep them apart, then let the last step pick.",
            "Write each result down."
          ],
          "example": "Step 2 comes to 15 and step 5 comes to 22. 'Type whichever is bigger' means 22."
        },
        "skill": "Following directions",
        "steps": [
          "Write the handrails the astronaut checks hand over hand: 40.",
          "Divide by the capture latches that hold the segment: 4. Keep this total.",
          "Now start again with the robot arm's length in meters: 17.",
          "Subtract the bolts that finish the joint: 8.",
          "Multiply what is left by the astronauts working outside: 2.",
          "Two totals are written down now, step 2's and step 5's. The plan logs whichever is bigger. Type that one."
        ],
        "prompt": "Your answer:",
        "answer": "18",
        "hint": "Step 3 starts a second total from scratch. Step 6 asks for the bigger of the two totals, not for both put together."
      }
    },
    {
      "id": "station-3",
      "title": "The Wings",
      "recon": {
        "lesson": {
          "title": "Sunlight into power",
          "points": [
            "When the plan explains how something works, the steps are the detail.",
            "Watts and meters are exact.",
            "A word about the array is defined by what it does."
          ],
          "example": "'A windmill turns wind into power for the pump.' What goes in? Wind. What comes out? Power."
        },
        "title": "Flight Plan: Rolled Like a Poster",
        "passage": [
          "A solar array is a field of solar cells, thin wafers of silicon that turn sunlight straight into electricity. They have no moving parts and no fuel. That is why almost every spacecraft since the 1950s has carried them. The new array is two wings. Each wing is twenty meters long and four wide when open. It was rolled up for launch like a poster into a box the size of a refrigerator. Unrolled, the two wings make a field of cells a little bigger than half a tennis court. In full sun they make about thirty kilowatts, enough to run twenty houses. The station needs every watt: for the air, the water, the experiments, and the fans that never stop.",
          "The wings do not unroll on their own. Each one is rolled around a drum inside the box. The astronaut's job on the third spacewalk is to release the drum's four launch locks. Those locks held the wing safe through the shaking of the rocket. Then the astronaut connects the motor that will unroll it on the fifth day. The locks are bolts with red tags, and every red tag that comes off goes into a bag on the astronaut's wrist and is counted at the airlock. A loose bolt in orbit is a speeding piece of junk that can stay up for years.",
          "The third spacewalk also mounts the wings' boxes on the truss segment installed yesterday, one on each side. The astronaut rides the robot arm out to the end of the truss for the first time. From twenty meters away, the astronaut looks back at the whole station. Nobody has seen it from this spot before. The plan says: wing boxes mounted, two of two, locks released, eight of eight, red tags in bag, eight. Then a line the astronaut writes in later: the view is not in the plan."
        ],
        "questions": [
          {
            "q": "How big is each wing when it is open?",
            "choices": [
              "Twenty meters long and four wide",
              "Two meters by two",
              "The size of a refrigerator",
              "A hundred meters long"
            ],
            "answer": 0,
            "hint": "Paragraph 1, the sentence about the size of each wing.",
            "skill": "Finding details"
          },
          {
            "q": "How many launch locks does each wing have?",
            "choices": [
              "Two",
              "Four",
              "Eight, two on each side",
              "Twelve in all"
            ],
            "answer": 1,
            "hint": "Paragraph 2, the sentence with 'four launch locks'.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 1, what is a 'solar cell'?",
            "choices": [
              "The room on the station where all of the batteries are kept charged",
              "A battery that stores up the power the wings make while in the sun",
              "A thin silicon wafer that turns sunlight into electricity",
              "One of the two wings, each twenty meters long and four meters wide"
            ],
            "answer": 2,
            "hint": "The first sentence of paragraph 1.",
            "skill": "Word meanings"
          },
          {
            "q": "Why does every red tag go into the bag on the astronaut's wrist?",
            "choices": [
              "Because the crew inside needs to know how many locks are still holding the wing",
              "Because a loose bolt in orbit becomes a dangerous object that can stay up for years, so every one is counted",
              "Because the suit has nowhere else to put a small part during a walk",
              "Because the shaking of the rocket can work a bolt loose, and the red tags show which ones have been checked"
            ],
            "answer": 1,
            "hint": "The last two sentences of paragraph 2.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 1 mostly about?",
            "choices": [
              "What a solar array is, how big the new one is, and what it powers",
              "The fans",
              "The rocket",
              "How the wings are rolled around drums and held down by four launch locks"
            ],
            "answer": 0,
            "hint": "Paragraph 1 explains solar cells, the wings' size and output, and the station's need.",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Power math",
          "points": [
            "Area of a wing: length × width.",
            "Kilowatts to watts: × 1,000.",
            "Subtracting decimals: line up the points. 5.1 − 2.65 is 5.10 − 2.65 = 2.45.",
            "Whole groups only: divide, and drop what is left over."
          ],
          "example": "A 9-meter by 5-meter panel: 9 × 5 = 45 square meters."
        },
        "problems": [
          {
            "q": "A wing is 20 meters long and 4 wide. What is its area in square meters?",
            "answer": "80",
            "hint": "20 × 4.",
            "skill": "Area and perimeter"
          },
          {
            "q": "The two wings together make 30 kilowatts. A kilowatt is 1,000 watts. How many watts is that?",
            "answer": "30000",
            "accept": [
              "30,000"
            ],
            "hint": "30 × 1,000.",
            "skill": "Multiplying"
          },
          {
            "q": "The power meter read 29.85 kilowatts in shadow and 31.2 kilowatts in full sun. How many more kilowatts in full sun? (write a decimal)",
            "answer": "1.35",
            "hint": "Line up the points: 31.20 − 29.85.",
            "skill": "Decimals"
          },
          {
            "q": "Two wings with 4 locks each, and every lock gets one red tag. How many red tags should be in the bag?",
            "answer": "8",
            "hint": "2 × 4.",
            "skill": "Multiplying"
          },
          {
            "q": "The astronaut rode the arm 20 meters out along the truss, which is 6 meters per segment. How many full segments is 20 meters?",
            "answer": "3",
            "hint": "20 ÷ 6 is 3 with 2 left over.",
            "skill": "Dividing"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "What is this paragraph setting up?",
            "points": [
              "A paragraph that gives no instructions is often preparing you for the one that does. Ask what it makes the next part mean.",
              "Delete it in your head. If the paragraph after it still makes sense but stops mattering, you have found the job.",
              "A choice that only retells the paragraph has named no job at all."
            ],
            "example": "A report on a lifeboat spends a paragraph on how far the nearest harbor is. No instructions in it. It is there so the next paragraph, about the fuel tank, lands."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea of the whole report?",
              "choices": [
                "A power system big enough to matter must be packed small enough to launch, and this walk carefully undoes the packing.",
                "In full sunlight the new array will make about thirty kilowatts, enough to run twenty houses.",
                "Solar power is the answer to the world's energy problems, on the ground as well as in orbit.",
                "The wings unroll by themselves once they reach orbit, so the astronaut only has to watch."
              ],
              "answer": 0,
              "hint": "Half a tennis court of cells inside a box the size of a refrigerator, four locks on each wing, and eight red tags in a bag. Find the choice that covers all three.",
              "skill": "Central idea and evidence",
              "evidence": "The wings do not unroll on their own."
            },
            {
              "q": "Claim: a small dropped part is a serious danger in orbit. Which sentence from the report best supports that claim?",
              "choices": [
                "Each one is rolled around a drum inside the box.",
                "A loose bolt in orbit is a speeding piece of junk that can stay up for years.",
                "The third spacewalk also mounts the wings' boxes on the truss segment installed yesterday, one on each side.",
                "The plan says: wing boxes mounted, two of two, locks released, eight of eight, red tags in bag, eight."
              ],
              "answer": 1,
              "hint": "Three of these are about the drum, the boxes and the plan's own numbers. The claim is about what a dropped piece turns into. Find the sentence that says what it becomes.",
              "skill": "Finding details",
              "evidence": "A loose bolt in orbit is a speeding piece of junk that can stay up for years."
            },
            {
              "q": "Why does the report explain what solar cells are before it describes the spacewalk?",
              "choices": [
                "To explain how the thin wafers of silicon inside a solar cell are manufactured before the wings are opened.",
                "To set the new array against the older arrays already on the station and show how much more power this one makes.",
                "So the reader understands why this one box is worth five days of work before the work is described.",
                "To give the size of the box the rolled wings travel in, and the size of the field of cells they make when open."
              ],
              "answer": 2,
              "hint": "The first paragraph contains no instructions at all. Ask what it makes the reader feel about the box before anybody touches it.",
              "skill": "Author's purpose and structure",
              "evidence": "The station needs every watt: for the air, the water, the experiments, and the fans that never stop."
            },
            {
              "q": "The report says the wings are rolled up 'like a poster'. What is that comparison telling you?",
              "choices": [
                "The wings have pictures printed across them, like the picture on the front of a poster",
                "Something very large has been rolled up tight to fit into a small space",
                "The wings are made of a material as thin as paper",
                "The wings were rolled up and unrolled many times before launch"
              ],
              "answer": 1,
              "hint": "Think what a poster is like rolled up and then opened out flat. The sentence about the poster and the one just before it hand you both sizes.",
              "skill": "Word meanings",
              "evidence": "Each wing is twenty meters long and four wide when open. It was rolled up for launch like a poster into a box the size of a refrigerator"
            },
            {
              "q": "Paragraphs 2 and 3 together explain what is proved by counting the red tags at the airlock. What does the count show?",
              "choices": [
                "Eight locks were released and eight tags came back, so nothing was left floating outside.",
                "The tags have to be returned to Earth to be inspected.",
                "The count tells the crew inside when the wings will be ready to unroll on the fifth day of the plan.",
                "Counting the tags is how the astronaut measures the time taken."
              ],
              "answer": 0,
              "hint": "Paragraph two gives you a rule about counting and says why it exists. Paragraph three gives you two numbers in the plan's own line. Compare them.",
              "skill": "Reading between the lines",
              "evidence": "locks released, eight of eight, red tags in bag, eight"
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
              "q": "The astronaut lays the panels out in 5 rows of 9. How many panels is that?",
              "answer": "45",
              "hint": "5 × 9.",
              "skill": "Multiplying"
            },
            {
              "q": "81 panels are set out in 9 equal rows. How many panels are in each row?",
              "answer": "9",
              "hint": "81 split into 9 equal parts.",
              "skill": "Dividing"
            },
            {
              "q": "The log shows 353 watts, then 176 more are added and 65 are taken off. What does the log show now?",
              "answer": "464",
              "hint": "Add 353 and 176 first, then take 65 off.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "Add: 2/8 + 2/8 (write a fraction)",
              "answer": "4/8",
              "hint": "Same bottom. 2 + 2 on top.",
              "skill": "Fractions"
            },
            {
              "q": "A panel mat is 3 meters wide and 3 meters long. How many meters is it all the way around the edge?",
              "answer": "12",
              "hint": "Two sides of 3 and two sides of 3: 3 + 3 + 3 + 3.",
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
            "example": "(2 + 3) × 9 = 45: parentheses first, then multiply."
          },
          "problems": [
            {
              "q": "The astronaut has 46.25 minutes outside. Each task takes 1.85 minutes. How many tasks is that enough for?",
              "answer": "25",
              "hint": "Move both points 2 places to the right: 4625 ÷ 185.",
              "skill": "Decimals"
            },
            {
              "q": "25% of the watts counted is 50. How many were counted in all?",
              "answer": "200",
              "hint": "50 is 25 hundredths of the whole: 50 ÷ 25 × 100.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The astronaut counts 3 panels and 9 bolts. In its simplest form, what is the ratio of panels to bolts? (write it like 2:3)",
              "answer": "1:3",
              "accept": [
                "1 to 3"
              ],
              "hint": "Divide both by 3.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The astronaut works out (4 + 4) × 7. What is it?",
              "answer": "56",
              "hint": "Parentheses first, then multiply.",
              "skill": "Order of operations"
            },
            {
              "q": "Solve for x: 4x = 696",
              "answer": "174",
              "hint": "Divide both sides by 4.",
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
              "A two-step equation: undo the last step first. In (x + 2) × 4 = 36, divide by 4, then take off 2."
            ],
            "example": "(x + 2) × 4 = 36, so x + 2 = 9, so x = 7."
          },
          "problems": [
            {
              "q": "The astronaut has 30 minutes to spend and each task takes 2.5 minutes. How many tasks is that enough for?",
              "answer": "12",
              "hint": "30 ÷ 2.5.",
              "skill": "Ratios and percent"
            },
            {
              "q": "A solar panel's output rose by 25% to 250 watts. How many watts was it before?",
              "answer": "200",
              "hint": "250 is 125% of the old count.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The spare-parts ledger shows 15 panels. The astronaut signs out 32 panels, borrowing the rest from the next supply ship. What does the ledger read now?",
              "answer": "-17",
              "accept": [
                "−17"
              ],
              "hint": "15 takes it to 0, and 17 more comes out below zero.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: (x + 6) × 7 = 119",
              "answer": "11",
              "hint": "Divide both sides by 7 first, then take 6 off.",
              "skill": "Equations"
            },
            {
              "q": "A model is built at 1 to 25. The panel on the model is 10 cm. How many cm is the real one?",
              "answer": "250",
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
              "A square root undoes squaring. If a square has area 49, its side is 7.",
              "Pythagoras: in a right triangle a² + b² = c², and c is always the longest side.",
              "With x on both sides, move all the x's to one side first, then all the plain numbers to the other."
            ],
            "example": "y = 4x + 5 when x = 6: 4 × 6 + 5 = 29."
          },
          "problems": [
            {
              "q": "The number of panels unfolded follows the rule y = 3x + 12, where x is the hour. What is y when x = 7?",
              "answer": "33",
              "hint": "Put 7 in for x: 3 × 7 + 12.",
              "skill": "Linear relationships"
            },
            {
              "q": "What is 8² + 3²?",
              "answer": "73",
              "hint": "8 × 8 = 64 and 3 × 3 = 9. Add them.",
              "skill": "Powers and roots"
            },
            {
              "q": "A 17-meter cable reaches the top of an 8-meter antenna mast. How far is the foot of the cable from the base, in meters?",
              "answer": "15",
              "hint": "b² = c² − a² = 289 − 64 = 225. Then take the square root.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "Solve for x: 5x + 8 − 3x = 28",
              "answer": "10",
              "hint": "Collect the x's first: 2x + 8 = 28.",
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
          "title": "Write it the plan's way",
          "points": [
            "Some orders want the answer written a special way. Read the last step before you type.",
            "Then do the arithmetic."
          ],
          "example": "A count of 14 on three racks, written the plan's way, is 14-3."
        },
        "skill": "Following directions",
        "steps": [
          "Write the red tags in the bag on the astronaut's wrist: 8.",
          "Multiply by the number of wings: 2.",
          "Add the length of one wing in meters: 20.",
          "Subtract the width of one wing in meters: 4.",
          "The plan never records a bare number. Write it as two numbers with a dash, the way the plan writes a count: your answer, a dash, then the number of wings: 2. (A count of nine on two wings would be 9-2.)"
        ],
        "prompt": "Your answer:",
        "answer": "32-2",
        "accept": [
          "32 - 2",
          "32 -2",
          "32- 2",
          "32 – 2",
          "32–2"
        ],
        "hint": "The four sums come first. Then read step 5 again: the plan wants two numbers, joined the way it writes every count."
      }
    },
    {
      "id": "station-4",
      "title": "The Wiring",
      "recon": {
        "lesson": {
          "title": "The dangerous step",
          "points": [
            "When the plan says a step is dangerous, the reason and the precaution are both details.",
            "Volts and minutes are exact.",
            "'Why at night' wants the reason in the plan."
          ],
          "example": "'The paint goes on after sunset.' Why? It dries too fast in the sun."
        },
        "title": "Flight Plan: Working in the Dark on Purpose",
        "passage": [
          "The fourth spacewalk is the one the plan spends the most pages on. That is because it is the one where the astronaut can be hurt. The array's cables carry a hundred and sixty volts, and even before the wings unroll, the small exposed strip of cells at the edge of each box makes power the instant sunlight touches it. A connector mated in daylight can arc, a spark that jumps the gap and burns through a glove. So the wiring is done in the dark. The astronaut waits at the connector with a headlamp. The station crosses into the Earth's shadow, and the array goes dead. Then the plan says: go.",
          "There are six connectors on each wing, big round plugs with a locking ring, and each one has to be mated, locked, and checked with a tug before the next. There are thirty-five minutes of night to do it in, with cold hands, by headlamp. The Earth below shows only the lights of cities and the flicker of lightning. The lightning comes from storms a thousand miles across. Twelve connectors in one night pass is the plan's target. If the sun comes up with a connector open, the astronaut backs off, waits fifty-five minutes, and finishes on the next night. Nobody rushes a hundred and sixty volts.",
          "It takes two night passes: seven connectors on the first, five on the second, with the astronaut's hands too cold to feel the locking rings by the end. The inside crew calls each step out loud from the checklist. Between the two nights the astronaut sits on the truss in the sun for fifty-five minutes. The heaters are on full, and both hands are in the armpits inside the suit. The astronaut watches a sunrise that takes fifteen seconds. The plan says: twelve of twelve mated and locked, tug-checked, two night passes. The margin says: warm now."
        ],
        "questions": [
          {
            "q": "How many volts do the array's cables carry?",
            "choices": [
              "Twelve",
              "A hundred and sixty",
              "A thousand",
              "Sixteen"
            ],
            "answer": 1,
            "hint": "Paragraph 1, the third sentence.",
            "skill": "Finding details"
          },
          {
            "q": "How many connectors are on each wing?",
            "choices": [
              "Four",
              "Twelve",
              "Six",
              "Twenty"
            ],
            "answer": 2,
            "hint": "The first sentence of paragraph 2.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 1, what is an 'arc'?",
            "choices": [
              "A spark that jumps a gap and can burn through a glove",
              "A curve",
              "A cable",
              "A kind of lock"
            ],
            "answer": 0,
            "hint": "The sentence 'can arc, a spark that jumps the gap'.",
            "skill": "Word meanings"
          },
          {
            "q": "Why is the wiring done in the dark?",
            "choices": [
              "Because the cells make power the instant sunlight touches them, and a connector mated in daylight can spark",
              "Because the suit's cooling water cannot keep up in full sunlight",
              "Because the station stays inside the Earth's shadow for a full thirty-five minutes out of every ninety-minute orbit",
              "Because the gloves have heaters in their fingertips and those work far better when the whole suit is already cold"
            ],
            "answer": 0,
            "hint": "Paragraph 1, the third and fourth sentences.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 3 mostly about?",
            "choices": [
              "The sunrise",
              "Doing the twelve connectors across two night passes, and the warm-up between",
              "The checklist",
              "The lightning"
            ],
            "answer": 1,
            "hint": "Paragraph 3 gives the split, the cold hands, the rest in the sun, and the plan's line.",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Night pass math",
          "points": [
            "In all: add the counts from each pass.",
            "Different bottoms: make them the same first. 1/3 + 1/6 = 2/6 + 1/6 = 3/6.",
            "How many more: the bigger number minus the smaller.",
            "Quarter turns to full turns: divide by 4."
          ],
          "example": "1/4 + 1/3 = 3/12 + 4/12 = 7/12 of the spacewalk."
        },
        "problems": [
          {
            "q": "Seven connectors on the first night pass and 5 on the second. How many in all?",
            "answer": "12",
            "hint": "7 + 5.",
            "skill": "Adding and subtracting"
          },
          {
            "q": "The astronaut spent 1/2 of the spacewalk on the wiring and 1/4 of it moving along the truss. How much of the spacewalk is that? (write a fraction)",
            "answer": "3/4",
            "hint": "Make the bottoms the same: 1/2 is 2/4. Then add the tops.",
            "skill": "Fractions"
          },
          {
            "q": "The array runs at 160 volts. A house outlet is 120. How many more volts is the array?",
            "answer": "40",
            "hint": "160 − 120.",
            "skill": "Adding and subtracting"
          },
          {
            "q": "A sunrise takes 15 seconds and there are 16 of them a day. How many seconds of sunrise a day?",
            "answer": "240",
            "hint": "15 × 16.",
            "skill": "Multiplying"
          },
          {
            "q": "The astronaut waited 55 minutes between night passes. Each connector's locking ring turns 1/4 of a turn to lock. How many full turns is 12 connectors' worth of quarter turns?",
            "answer": "3",
            "hint": "12 quarter turns is 12 ÷ 4 full turns.",
            "skill": "Fractions"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "Read the word where it works",
            "points": [
              "Cover the word and read the sentence with a gap in it. What would you drop into the gap?",
              "A technical word is very often explained in the words right after it, set off by a comma. Read past it before you choose.",
              "Put your choice back in and read it again. Three of the four will make the report claim something it never claimed."
            ],
            "example": "'The rope will part, break clean through under load.' You never needed the word. The rest of the sentence defined it for you."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea of the whole report?",
              "choices": [
                "A sunrise seen from the station takes about fifteen seconds, and a night pass lasts thirty-five minutes.",
                "The danger is electrical, so the job is timed to the one part of the orbit when the array is dead, and the plan bends rather than hurries.",
                "Electricity is the most dangerous thing that people work with, in space or anywhere else.",
                "The connectors are joined in daylight so the astronaut can see them clearly without a headlamp."
              ],
              "answer": 1,
              "hint": "A voltage, a shadow, and a target that was missed without anybody minding. Find the choice that holds all three.",
              "skill": "Central idea and evidence",
              "evidence": "So the wiring is done in the dark."
            },
            {
              "q": "Claim: the array is already dangerous before it has been unrolled. Which sentence from the report best supports that claim?",
              "choices": [
                "So the wiring is done in the dark.",
                "Twelve connectors in one night pass is the plan's target.",
                "The array's cables carry a hundred and sixty volts, and even before the wings unroll, the small exposed strip of cells at the edge of each box makes power the instant sunlight touches it.",
                "The plan says: twelve of twelve mated and locked, tug-checked, two night passes."
              ],
              "answer": 2,
              "hint": "The claim carries a timing word: before. None of the others says when the danger starts.",
              "skill": "Finding details",
              "evidence": "The array's cables carry a hundred and sixty volts, and even before the wings unroll, the small exposed strip of cells at the edge of each box makes power the instant sunlight touches it."
            },
            {
              "q": "Why does the plan spell out what to do if the sun comes up with a connector still open?",
              "choices": [
                "To settle in advance that missing the target is allowed, so that nobody is tempted to hurry.",
                "To explain how long a night pass lasts aboard the station.",
                "To describe the way the locking rings on the connectors work.",
                "To list the tools the astronaut carries out for the job."
              ],
              "answer": 0,
              "hint": "Read the sentence that comes straight after it. It is one short sentence, and it tells you what that instruction is really for.",
              "skill": "Author's purpose and structure",
              "evidence": "If the sun comes up with a connector open, the astronaut backs off, waits fifty-five minutes, and finishes on the next night. Nobody rushes a hundred and sixty volts."
            },
            {
              "q": "The report says a connector joined in daylight can 'arc'. What does arc mean as it is used here?",
              "choices": [
                "Electricity jumping across a space instead of running through a wire",
                "A curve traced by the power tool as it turns",
                "A sudden rise in the amount of power the folded strip of cells is putting out",
                "The curved path the station follows as it travels around the Earth from daylight into shadow"
              ],
              "answer": 0,
              "hint": "The rest of that sentence explains itself: a spark that jumps the gap. Ask what is doing the jumping and what it reaches.",
              "skill": "Word meanings",
              "evidence": "A connector mated in daylight can arc, a spark that jumps the gap and burns through a glove."
            },
            {
              "q": "Paragraphs 2 and 3 together explain why the wiring took two night passes instead of one. Why did it?",
              "choices": [
                "One of the twelve connectors turned out to be broken and had to be swapped for a spare.",
                "Twelve connectors in thirty-five minutes was a target, not a rule, and cold hands slowed the work until the sun came up.",
                "The crew inside stopped the work halfway through to run through the whole checklist again.",
                "The astronaut ran low on oxygen after the first night pass and had to go back to the airlock."
              ],
              "answer": 1,
              "hint": "Paragraph two gives you the target and says what happens when it is missed. Paragraph three gives you the two numbers actually done, and the state of the astronaut's hands.",
              "skill": "Reading between the lines",
              "evidence": "seven connectors on the first, five on the second, with the astronaut's hands too cold to feel the locking rings by the end"
            }
          ]
        }
      },
      "navByGrade": {
        "3": {
          "lesson": {
            "title": "Grade 3 numbers",
            "points": [
              "Multiplication facts: 7 × 6 means 7 groups of 6.",
              "Sharing equally is dividing.",
              "Adding three numbers: add two, then add the third.",
              "Fractions: the bottom is how many equal parts; the top is how many are done."
            ],
            "example": "7 × 6 = 42."
          },
          "problems": [
            {
              "q": "Every circuit needs 9 connectors, and there are 9 circuits. How many connectors is that?",
              "answer": "81",
              "hint": "9 groups of 9, so 9 × 9.",
              "skill": "Multiplying"
            },
            {
              "q": "The astronaut splits 80 connectors in half. How many connectors is one half?",
              "answer": "40",
              "hint": "Half of 80.",
              "skill": "Dividing"
            },
            {
              "q": "The astronaut needs 600 centimeters of cable and has 395. How many more centimeters are needed?",
              "answer": "205",
              "hint": "600 − 395.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "The day's work is cut into 6 equal parts and the astronaut has finished 2 of them. What fraction is done? (write a fraction)",
              "answer": "2/6",
              "hint": "2 parts out of 6.",
              "skill": "Fractions"
            },
            {
              "q": "The astronaut snaps 395 photos of Earth, then 73 more. How many photos is that?",
              "answer": "468",
              "hint": "395 + 73.",
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
            "example": "7 × 4 − 2 × 5 = 18: both multiplications first, then subtract."
          },
          "problems": [
            {
              "q": "The astronaut uses 5/16 of the tool battery in 3/8 of an hour. At that rate, how much of the battery is used in one hour? (write a fraction)",
              "answer": "5/6",
              "hint": "For one hour, divide the amount by the time: 5/16 ÷ 3/8 = 5/16 × 8/3. Then simplify.",
              "skill": "Fractions"
            },
            {
              "q": "Of 80 cables, 10% fail the check and are struck off the list. How many are left on it?",
              "answer": "72",
              "hint": "10% of 80 is 8. Take that off 80.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The astronaut shares 72 cables between two teams in the ratio 3 to 5. How many does the smaller share get?",
              "answer": "27",
              "hint": "3 + 5 = 8 parts. 72 ÷ 8 = 9 for one part.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The astronaut works out 5 × 6 − 5 × 3. What is it?",
              "answer": "15",
              "hint": "Do both multiplications first, then subtract.",
              "skill": "Order of operations"
            },
            {
              "q": "Solve for x: x + 167 + 13 = 750",
              "answer": "570",
              "hint": "Add 167 and 13 first, then take that off 750.",
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
              "One minus sign makes a minus answer: 30 ÷ (−5) = −6. Two make a plus: (−30) ÷ (−5) = 6.",
              "A two-step equation: undo the outside step first. In 4(x + 2) = 28, divide by 4, then take off 2."
            ],
            "example": "4(x + 2) = 28, so x + 2 = 7, so x = 5."
          },
          "problems": [
            {
              "q": "24 tasks took 54 minutes. At the same rate, how many minutes would 32 tasks take?",
              "answer": "72",
              "hint": "One task takes 54 ÷ 24 = 2.25. Then × 32.",
              "skill": "Ratios and percent"
            },
            {
              "q": "A power line carried 80 volts and lost 50% of it at a bad joint. How many volts were lost?",
              "answer": "40",
              "hint": "50% of 80: 50/100 × 80.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The station's orbit drops 2 miles every month. Write that as −2 a month. When was the station 26 miles higher than it is now? Work it out as 26 ÷ (−2), and write months before now as a negative number.",
              "answer": "-13",
              "accept": [
                "−13"
              ],
              "hint": "26 ÷ 2, and one minus sign makes the answer negative.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: 6(x + 11) = 84",
              "answer": "3",
              "hint": "Divide both sides by 6 to get x + 11 = 14.",
              "skill": "Equations"
            },
            {
              "q": "A round tile has a radius of 10 centimeters. Using 3.14 for pi, what is its area in square centimeters?",
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
            "example": "Start at 6 and add 5 each step: the 5th number is 6 + 5 × 4 = 26."
          },
          "problems": [
            {
              "q": "The voltage reading goes 15, 23, 31, 39, and on, as each panel connects. What is the 7th number in the list?",
              "answer": "63",
              "hint": "It starts at 15 and adds 8 each step. The number you want is 6 steps on from 15.",
              "skill": "Linear relationships"
            },
            {
              "q": "What is 10² − 10?",
              "answer": "90",
              "hint": "10 × 10 = 100, then take 10 off.",
              "skill": "Powers and roots"
            },
            {
              "q": "A right triangle has short sides of 8 and 15 meters. How long is its longest side, in meters?",
              "answer": "17",
              "hint": "8² + 15² = 289. The longest side is the square root of that.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "Solve for x: 9x − 4x = 35",
              "answer": "7",
              "hint": "9 − 4 = 5, so 5x = 35.",
              "skill": "Equations"
            },
            {
              "q": "A round tank is 8 meters across and 4 meters deep. Using 3.14 for pi, what is its volume in cubic meters? (The radius is half the distance across.)",
              "answer": "200.96",
              "hint": "The radius is 8 ÷ 2 = 4. Volume = 3.14 × radius × radius × depth: 3.14 × 4 × 4 × 4.",
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
            "Check the plan before you act."
          ],
          "example": "'Mate the connector, unless the sun is up.'"
        },
        "skill": "Following directions",
        "steps": [
          "Write the volts on the cables: 160.",
          "Divide by the number of connectors on one wing: 6. Round down.",
          "Add the connectors done on the first night: 7.",
          "Subtract the minutes per connector: 5.",
          "Type the result, unless the plan says every connector was mated in the dark, in which case type NIGHT instead."
        ],
        "prompt": "Your answer:",
        "answer": "NIGHT",
        "accept": [
          "night",
          "Night",
          "night.",
          "NIGHT."
        ],
        "hint": "160 ÷ 6 does not come out even, and step 2 says round down. Carry that whole number through steps 3 and 4, then read step 5."
      }
    },
    {
      "id": "station-5",
      "title": "Deploy",
      "recon": {
        "lesson": {
          "title": "Putting the build together",
          "points": [
            "The last plan looks back over all five spacewalks. Questions will ask what came in what order.",
            "Times and power numbers are details.",
            "The main idea of the closing paragraph is what the writer wants you to keep."
          ],
          "example": "'Socks go on before shoes, because socks will not fit over shoes.' Why socks first? The 'because' tells you."
        },
        "title": "Flight Plan: Toward the Sun",
        "passage": [
          "The fifth spacewalk is the short one, and the one everyone watches. The astronaut rides the arm to the end of the truss and checks the two wing boxes one last time. Then the astronaut does nothing, because the wings unroll by motor, controlled from inside. Out here the astronaut's job is to watch and to be there with a tool if a wing sticks. The command goes. The first wing begins to unroll from its drum like a long gold carpet, a few centimeters a second, twenty meters, and the sun catches it and it lights up. Then the second unrolls. The two of them stand out from the truss like the wings of a very slow, very large bird.",
          "Inside, the crew watch a number. The power meter for the new array reads zero. Then, as the wings unroll and the connectors from two nights ago carry the current in, it climbs: one kilowatt, five, twelve, twenty-four, and at the end of the unroll, in full sun, thirty-one. The station now has more power than it has ever had. The experiments that had been waiting for it, the water recycler upgrade and the new freezer, get switched on before the astronaut is back inside.",
          "Five spacewalks, in the only order they could go: the mount, because the array stands on it; the truss, because the mount alone is not long enough. Next the wings, rolled and locked, mounted on the truss. Then the wiring, in the dark, because that is the only safe time. Last the deploy, because a wing unrolled before it is wired is a sail with nothing to do. The astronaut's last line in the plan is the same one that closes every campaign in the book. It is the right one: all tasks complete, all crew inside, hatch closed. Then a second line, for the year: look down. All of it is there."
        ],
        "questions": [
          {
            "q": "What is the astronaut's job during the deploy?",
            "choices": [
              "To pull the wings out of their boxes by hand, a meter at a time",
              "To operate the motor that unrolls each of the wings from its drum",
              "To take photographs of the wings from the end of the truss",
              "To watch, and to be there with a tool if a wing sticks"
            ],
            "answer": 3,
            "hint": "The fourth sentence of paragraph 1.",
            "skill": "Finding details"
          },
          {
            "q": "What did the power meter read at the end of the unroll?",
            "choices": [
              "Twelve kilowatts",
              "Twenty-four kilowatts, halfway out",
              "Zero, until the connectors were mated",
              "Thirty-one kilowatts"
            ],
            "answer": 3,
            "hint": "Paragraph 2, the third sentence.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 1, what is the 'drum'?",
            "choices": [
              "The box the size of a refrigerator that the rolled wing traveled in",
              "The motor inside the box that unrolls the wing when commanded",
              "The roller inside the box that the wing was wound around",
              "The long beam that the two wing boxes were mounted on either side of"
            ],
            "answer": 2,
            "hint": "The wing 'begins to unroll from its drum'; the third spacewalk's plan said each wing is 'rolled around a drum inside the box'.",
            "skill": "Word meanings"
          },
          {
            "q": "Why is the deploy done last?",
            "choices": [
              "Because a wing unrolled before it is wired is a sail with nothing to do",
              "Because the robot arm is needed for the truss segment on all of the earlier days",
              "Because the motor that unrolls the wings only arrived on the last supply flight",
              "Because the crew inside wanted to watch it happen before the end of the mission"
            ],
            "answer": 0,
            "hint": "Paragraph 3, the sentence with 'a sail with nothing to do'.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 3 mostly about?",
            "choices": [
              "The two gold wings standing out from the truss like the wings of a very large slow bird",
              "Why the five spacewalks went in that order, and the two last lines of the plan",
              "The power meter climbing from zero up to thirty-one, and the experiments switched on",
              "The first wing unrolling itself from its drum like a long gold carpet in the sunlight"
            ],
            "answer": 1,
            "hint": "The first sentence of paragraph 3 says the five spacewalks went 'in the only order they could go'.",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Deploy math",
          "points": [
            "Centimeters a second over meters: seconds to unroll.",
            "Kilowatts gained: end minus start.",
            "Spacewalks times hours: hours outside this week.",
            "Two-step: seconds to minutes."
          ],
          "example": "10 meters is 1,000 centimeters; at 4 a second that is 250 seconds."
        },
        "problems": [
          {
            "q": "A wing is 20 meters, which is 2,000 centimeters. It unrolls at 5 centimeters a second. How many seconds to unroll?",
            "answer": "400",
            "hint": "2,000 ÷ 5.",
            "skill": "Dividing"
          },
          {
            "q": "400 seconds is how many minutes and seconds? Type the minutes only.",
            "answer": "6",
            "hint": "60 × 6 = 360, with 40 seconds left over.",
            "skill": "Dividing"
          },
          {
            "q": "The meter read 24 kilowatts, then 31. How many kilowatts did the last part of the unroll add?",
            "answer": "7",
            "hint": "31 − 24.",
            "skill": "Adding and subtracting"
          },
          {
            "q": "Five spacewalks of about 6 hours each. How many hours outside this week?",
            "answer": "30",
            "hint": "5 × 6.",
            "skill": "Multiplying"
          },
          {
            "q": "The array makes 31 kilowatts. The station used to have 84. How many kilowatts does it have now?",
            "answer": "115",
            "hint": "84 + 31.",
            "skill": "Adding and subtracting"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "One from each paragraph",
            "points": [
              "The last question is built so no paragraph answers it alone. Take one fact from one and one from another.",
              "Say the two facts, then say 'so'. What comes after 'so' is what you are looking for among the choices.",
              "A choice that needs something the report never mentions is out, however sensible it sounds on its own."
            ],
            "example": "Paragraph one: the tank was filled on Monday. Paragraph three: the generator has run every night since. So the fuel is nearly gone. Neither line says it alone."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea of the whole report?",
              "choices": [
                "The new array's power meter climbed from zero to thirty-one kilowatts in full sun, which is more power than the station has ever had.",
                "Teamwork is what makes any large project succeed in the end, whether the work is done out in orbit or in an ordinary workplace on the ground.",
                "The wings were unrolled by the astronaut out at the end of the truss, pulling each one off its drum by hand while the crew inside watched.",
                "The last walk pays off the four before it: all that is left is to watch a number climb that every earlier day made possible."
              ],
              "answer": 3,
              "hint": "A spacewalk where the astronaut does almost nothing, a number climbing inside, and a list of five days with a reason for each. Find the choice that holds all three.",
              "skill": "Central idea and evidence",
              "evidence": "the astronaut's job is to watch and to be there with a tool if a wing sticks"
            },
            {
              "q": "Claim: the new power was put to work immediately. Which sentence from the report best supports that claim?",
              "choices": [
                "Then, as the wings unroll and the connectors from two nights ago carry the current in, it climbs: one kilowatt, five, twelve, twenty-four, and at the end of the unroll, in full sun, thirty-one.",
                "The first wing begins to unroll from its drum like a long gold carpet, a few centimeters a second, twenty meters, and the sun catches it and it lights up.",
                "Inside, the crew watch a number.",
                "The experiments that had been waiting for it, the water recycler upgrade and the new freezer, get switched on before the astronaut is back inside."
              ],
              "answer": 3,
              "hint": "The claim is about what happened next and how soon. Find the sentence that names something being switched on and says when.",
              "skill": "Finding details",
              "evidence": "The experiments that had been waiting for it, the water recycler upgrade and the new freezer, get switched on before the astronaut is back inside."
            },
            {
              "q": "Why does the report end with the five spacewalks listed in order, each with a reason attached?",
              "choices": [
                "To introduce the five spacewalks to the reader for the first time, before the report goes on to describe each of them.",
                "To set this array against the older arrays already carried by the station and show the reader how much more power it makes.",
                "To show the order was forced by the work itself, so that nothing on the list could have been done sooner.",
                "To give the reader instructions for putting a second array of this kind together, one spacewalk at a time, in the same order."
              ],
              "answer": 2,
              "hint": "Nothing on that list is new. Notice that nearly every item comes with the word 'because', and ask what a list built that way is arguing.",
              "skill": "Author's purpose and structure",
              "evidence": "Five spacewalks, in the only order they could go"
            },
            {
              "q": "The report says the wing unrolls 'like a long gold carpet'. What is that comparison telling you?",
              "choices": [
                "It comes off the drum in one flat, continuous length",
                "It is made of a woven material rather than out of silicon",
                "It lies flat along the top of the truss, the way a carpet lies on a floor",
                "It is colored gold in order to reflect the sunlight away"
              ],
              "answer": 0,
              "hint": "Picture a carpet coming off a roll: one piece, flat, steady. Then read the rest of the sentence for the speed and the length.",
              "skill": "Word meanings",
              "evidence": "The first wing begins to unroll from its drum like a long gold carpet, a few centimeters a second, twenty meters, and the sun catches it and it lights up"
            },
            {
              "q": "Paragraphs 2 and 3 together explain why a wing unrolled before it was wired would have been useless. Why?",
              "choices": [
                "An unwired wing would have rolled itself back onto its drum, because nothing would hold it open once the motor stopped.",
                "The power the wings make only reaches the station through the connectors joined two nights earlier.",
                "The motor that unrolls a wing is powered by the wing it is unrolling, so nothing moves until the cells are in the sun.",
                "A wing left unwired would have cut the power coming from the station's older arrays, so the station would have had less power than before."
              ],
              "answer": 1,
              "hint": "Paragraph two tells you what carried the current in as the wings opened. Paragraph three calls an unwired wing a sail with nothing to do. Put the two together.",
              "skill": "Reading between the lines",
              "evidence": "as the wings unroll and the connectors from two nights ago carry the current in"
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
              "q": "The astronaut carries 4 bags of supplies on each of 2 trips. How many bags is that?",
              "answer": "8",
              "hint": "2 × 4.",
              "skill": "Multiplying"
            },
            {
              "q": "Each solar panel needs 6 meters of cable. The astronaut has 24 meters of cable. How many panels can the astronaut hook up?",
              "answer": "4",
              "hint": "How many 6s fit into 24?",
              "skill": "Dividing"
            },
            {
              "q": "The robot arm moved 272 centimeters in the morning and 373 in the evening. How many more centimeters in the evening?",
              "answer": "101",
              "hint": "373 − 272.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "Which is bigger, 5/6 or 3/6? (write a fraction)",
              "answer": "5/6",
              "hint": "Same bottom, so the bigger top wins.",
              "skill": "Fractions"
            },
            {
              "q": "A square frame is 5 meters on each side. How many meters is it all the way around?",
              "answer": "20",
              "hint": "Four sides of 5.",
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
            "example": "(9 − 5) × (2 + 3) = 20: each set of parentheses first."
          },
          "problems": [
            {
              "q": "The plan allows 275.75 minutes. The astronaut uses 117.35 minutes on the first task and 92.65 on the second. How many minutes are left?",
              "answer": "65.75",
              "hint": "Add the two amounts used first, then take that from 275.75. Line up the points.",
              "skill": "Decimals"
            },
            {
              "q": "Out of every 100 meters, 25 are set aside. Out of 120 meters, how many is that?",
              "answer": "30",
              "hint": "120 is 1.2 hundreds, so 1.2 × 25.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The astronaut divides 56 minutes of work in the ratio 3 to 4. How many minutes is the larger share?",
              "answer": "32",
              "hint": "7 parts in all, so one part is 8 minutes.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The astronaut works out (11 − 2) × (6 + 17). What is it?",
              "answer": "207",
              "hint": "Each set of parentheses first, then multiply the two answers.",
              "skill": "Order of operations"
            },
            {
              "q": "Solve for x: 473 = x − 52",
              "answer": "525",
              "hint": "Add 52 to both sides.",
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
              "A two-step equation: undo the taking away first, then undo the dividing by multiplying."
            ],
            "example": "x ÷ 5 − 2 = 6, so x ÷ 5 = 8, so x = 40."
          },
          "problems": [
            {
              "q": "The whole job, start to finish, takes 36 minutes, at 1.5 minutes for each task. One task is already done. How many tasks are left?",
              "answer": "23",
              "hint": "36 ÷ 1.5 = 24 in all, then take the finished one off.",
              "skill": "Ratios and percent"
            },
            {
              "q": "Mission rules say a spacewalk task may run no more than 20% past its plan. The plan is 80 minutes. What is the longest it may run, in minutes?",
              "answer": "96",
              "hint": "20% of 80 is 16. Add it on.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The station's height reading starts at 4 meters above its target and falls 5 meters on each of 3 days. What does the reading show at the end, in meters above the target?",
              "answer": "-11",
              "accept": [
                "−11"
              ],
              "hint": "5 × 3 comes off 4.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: x ÷ 4 − 3 = 11",
              "answer": "56",
              "hint": "Add 3 to both sides, then multiply by 4.",
              "skill": "Equations"
            },
            {
              "q": "A drawing uses 1 cm for every 4 meters. How many cm are needed for 32 meters?",
              "answer": "8",
              "hint": "32 ÷ 4.",
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
            "example": "A line starts at 3 and climbs 6 each step: after 4 steps it is 6 × 4 + 3 = 27."
          },
          "problems": [
            {
              "q": "A line passes through (0, 8) and (5, 43). What is its slope?",
              "answer": "7",
              "hint": "Slope is the rise over the run: 35 ÷ 5.",
              "skill": "Linear relationships"
            },
            {
              "q": "A tether is 3² meters long. The astronaut clips on a second one, making it twice as long. How many meters is that?",
              "answer": "18",
              "hint": "3² is 9. Double it.",
              "skill": "Powers and roots"
            },
            {
              "q": "The astronaut goes 9 meters east and then 40 meters north. In a straight line, how far is that from the start, in meters?",
              "answer": "41",
              "hint": "The two legs make a right angle: 9² + 40² = 1681.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "For what value of x do 5x + 10 and 3x + 28 come to the same number?",
              "answer": "9",
              "hint": "Set them equal, take 3x off both sides, then take 10 off.",
              "skill": "Equations"
            },
            {
              "q": "The astronaut writes down 4 × 10^5. Then the astronaut needs a number ten times as big. Written out in full, what is the new number?",
              "answer": "4000000",
              "hint": "Ten times adds one to the power: 4 × 10^6.",
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
            "When a step says an earlier one used the wrong number, go back to the total before it and use the right one."
          ],
          "example": "'Start with 9. Multiply by 4. Wrong multiplier: multiply 9 by 3 instead.' You end on 27."
        },
        "skill": "Following directions",
        "steps": [
          "Write the kilowatts the new array makes in full sun: 31.",
          "Subtract the kilowatts the meter read partway through the unroll: 24.",
          "Multiply by the number of spacewalks: 5.",
          "Add the connectors mated two nights ago: 12.",
          "Step 3 has the wrong multiplier. Go back to your answer from step 2, multiply it by the wings instead: 2, then finish with step 4 as written.",
          "Type that number."
        ],
        "prompt": "Your answer:",
        "answer": "26",
        "hint": "Step 5 swaps the spacewalks for the wings. Rebuild from your step 2 answer, then put the connectors on the way step 4 says."
      }
    }
  ]
};
if (window.BASECAMP_MISSIONS && window.BASECAMP_MISSIONS.register) window.BASECAMP_MISSIONS.register(C);
else (window.BASECAMP_CAMPAIGNS_PENDING = window.BASECAMP_CAMPAIGNS_PENDING || []).push(C);
})();
