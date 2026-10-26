// ODYSSEY — campaign "lookout". GENERATED, do not edit.
// Source of truth: content/missions-full.js. Rebuild with:  python3 tools/split-missions.py
// RULE: nothing in this file is about the person using it. Content only.
(function () {
var C = {
  "id": "lookout",
  "ready": true,
  "kind": "shift",
  "readingLevel": {
    "fk": 5.7,
    "cl": 5.5
  },
  "grade": "5",
  "kindLabel": "Watch",
  "form": "marmot",
  "title": "Fire Lookout",
  "subtitle": "A tower on a mountaintop, national forest",
  "pitch": "Five days alone in a glass room on stilts above the forest, with a map table, a radio, a pair of binoculars, and a marmot who smells smoke first. One thin gray line on the horizon and the whole week changes.",
  "scene": "assets/scene-lookout.jpg",
  "progress": {
    "unit": "days",
    "total": 5
  },
  "dayNoun": "Day",
  "stageNoun": "Day",
  "finalNoun": "Smoke",
  "stages": [
    "Day 1",
    "Day 2",
    "Day 3",
    "Day 4",
    "Smoke"
  ],
  "reconNoun": "Tower Log",
  "legs": {
    "recon": "Tower log",
    "nav": "Tower math",
    "orders": "Lookout rules",
    "debrief": "Sundown"
  },
  "fact": "A lookout can see a column of smoke forty miles away and pin it to within a quarter mile with a brass sight, a map and a second tower. Satellites are faster now, but a person in a tower still sees the small fires first.",
  "finale": {
    "prompt": "The crew has the fire and the smoke is thinning. Which color goes on the map pin for this one?",
    "options": [
      {
        "label": "Red",
        "color": "#FF6B6B"
      },
      {
        "label": "Orange",
        "color": "#F28C28"
      },
      {
        "label": "Yellow",
        "color": "#FFD65C"
      },
      {
        "label": "Green",
        "color": "#4FD18B"
      }
    ],
    "done": "Pin it. Then write the time in the log. Every fire starts as a time in a log."
  },
  "patrols": [
    {
      "id": "lookout-1",
      "title": "The Glass Room",
      "recon": {
        "lesson": {
          "title": "Questions first, then the log",
          "points": [
            "Read the five questions before the log. Two want a detail, one wants a word, one wants a why, one wants what a paragraph is mostly about.",
            "Sizes and distances are details. Circle the numbers.",
            "The answer is always in the log. You never have to guess."
          ],
          "example": "Question: 'How tall is the tower?' Hunt for 'tower' and a number of feet."
        },
        "title": "Tower Log: Fourteen Feet Square",
        "passage": [
          "The lookout is a room of glass fourteen feet on a side. It sits on top of a steel tower forty feet tall, on top of a mountain. Every wall is windows. In the middle is a table with a map of everything the windows can see. Around the outside runs a narrow catwalk, where the lookout stands with binoculars every hour, all day, turning slowly through a full circle. On a clear morning the view is sixty miles in every direction: ridges, valleys, a lake, three roads and one town, and a hundred thousand acres of trees.",
          "The job is to see smoke before anyone else does. A fire that is found when it is the size of a campfire can be put out by two people with shovels. The same fire found the next day can be a mile wide. By then it can need a hundred firefighters and a plane. So the lookout learns the view by heart, every ridge and every gap, until anything new in it, a thin gray line where there was no line yesterday, is impossible to miss. Water vapor from a lake is white and lifts straight up. Dust from a road is tan and drifts. Smoke is gray or blue, and it leans with the wind.",
          "There is no road to the tower. Supplies come up once a week on a mule or in a backpack. Water comes from a tank filled by the spring rain. The radio is the only voice for days at a time. Tonight the lookout closes the shutters against the wind and writes the first line in the log, which is the date, the weather and the words 'no smokes'. Then the lookout listens to a marmot whistling from the rocks below the tower, which it does every evening at exactly the same time."
        ],
        "questions": [
          {
            "q": "How far can the lookout see on a clear morning?",
            "choices": [
              "Sixty miles",
              "Fourteen feet square",
              "Forty feet of tower",
              "A mile"
            ],
            "answer": 0,
            "hint": "The last sentence of paragraph 1.",
            "skill": "Finding details"
          },
          {
            "q": "How can the lookout tell smoke from water vapor?",
            "choices": [
              "Smoke is white and lifts straight up, while water vapor is gray or blue and leans with the wind",
              "They look the same",
              "Smoke is tan",
              "Water vapor is white and lifts straight up; smoke is gray or blue and leans with the wind"
            ],
            "answer": 3,
            "hint": "The last three sentences of paragraph 2.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 1, what is a 'catwalk'?",
            "choices": [
              "A narrow ledge on the roof where the radio antenna is fixed",
              "The steel stairway that climbs the forty feet up the tower",
              "A narrow walkway around the outside of the tower room",
              "The table in the middle holding a map of everything in view"
            ],
            "answer": 2,
            "hint": "The sentence 'Around the outside runs a narrow catwalk'.",
            "skill": "Word meanings"
          },
          {
            "q": "Why does the lookout learn the view by heart?",
            "choices": [
              "Because the view of the ridges, the valleys and the lake is worth learning by heart",
              "Because there is nothing else at all to do in a room of glass fourteen feet on a side",
              "So that anything new in it, like a thin line of smoke, is impossible to miss",
              "Because the map on the table does not show every single ridge and gap in the country"
            ],
            "answer": 2,
            "hint": "Paragraph 2, the sentence that begins 'So the lookout learns the view'.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 2 mostly about?",
            "choices": [
              "The size of the glass room and the height of the steel tower under it",
              "The marmot",
              "How the supplies come up to the tower once a week, on a mule or in a backpack",
              "Why finding a fire early matters and how the lookout spots smoke"
            ],
            "answer": 3,
            "hint": "The first sentence of paragraph 2 says the job is to see smoke first, and the rest explains why and how.",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Tower math",
          "points": [
            "Perimeter of a square room: 4 × the side.",
            "Area of a square: side × side.",
            "Volume of a box: length × width × height. 5 × 2 × 2 = 20 cubic feet.",
            "Same bottom: add the tops. 1/4 + 2/4 = 3/4."
          ],
          "example": "A room 9 feet on a side is 4 × 9 = 36 feet around and 9 × 9 = 81 square feet."
        },
        "problems": [
          {
            "q": "The room is 14 feet on each side. How many feet is it all the way around?",
            "answer": "56",
            "hint": "4 × 14.",
            "skill": "Area and perimeter"
          },
          {
            "q": "What is the area of the 14-foot-square floor, in square feet?",
            "answer": "196",
            "hint": "14 × 14: 14 × 10 = 140, 14 × 4 = 56.",
            "skill": "Area and perimeter"
          },
          {
            "q": "The lookout's water tank is 3 feet long, 2 feet wide and 4 feet tall. How many cubic feet of water does it hold when full?",
            "answer": "24",
            "hint": "Length × width × height: 3 × 2 first, then times 4.",
            "skill": "Volume"
          },
          {
            "q": "The tower is 40 feet tall and the mountain is 6,240 feet high. How high above sea level is the top of the tower?",
            "answer": "6280",
            "accept": [
              "6,280"
            ],
            "hint": "6,240 + 40.",
            "skill": "Adding and subtracting"
          },
          {
            "q": "The lookout spent 2/6 of the day on the catwalk and 3/6 at the map table. What fraction of the day is that together? (write a fraction)",
            "answer": "5/6",
            "hint": "Same bottom. Add the tops.",
            "skill": "Fractions"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "The whole thing, not the best bit",
            "points": [
              "Read to the end, then say in one sentence of your own what the report is about. Do that before you look at a single choice.",
              "The wrong answers are usually true. They are one paragraph's worth, or so big the report never says them, or they quietly contradict a line you have already read.",
              "Then four more moves: prove a claim with one sentence, say what a paragraph is doing there, work a word out from its sentence, and hold two paragraphs together for one conclusion."
            ],
            "example": "Three paragraphs about a ferry: how old it is, what it carries, what the island does when it breaks down. 'The ferry is forty years old' covers one paragraph. 'Boats are useful' covers nothing in the report. 'A whole island's supplies depend on one old boat' covers all three."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea of the whole report?",
              "choices": [
                "Everything about this job, the glass room, the learned-by-heart view and the life without a road, is arranged around catching a fire while it is still small.",
                "Smoke is gray or blue and leans with the wind, while vapor off the lake is white and lifts straight up, and dust behind a truck on the road is tan and drifts sideways.",
                "Wildfires do more damage in the mountains than any other kind of weather, which is why nearly every high peak with a view over trees has a tower and a person sitting in it.",
                "Supplies reach the tower by road once a week."
              ],
              "answer": 0,
              "hint": "Label each paragraph in four words, then find the choice that covers all three labels. One of these covers only a few sentences, and one says the opposite of something the report tells you plainly.",
              "skill": "Central idea and evidence",
              "evidence": "The job is to see smoke before anyone else does."
            },
            {
              "q": "Claim: finding a fire early is what keeps it small enough for a couple of people to handle. Which sentence from the report best supports that claim?",
              "choices": [
                "So the lookout learns the view by heart, every ridge and every gap, until anything new in it, a thin gray line where there was no line yesterday, is impossible to miss.",
                "The job is to see smoke before anyone else does.",
                "Smoke is gray or blue, and it leans with the wind.",
                "A fire that is found when it is the size of a campfire can be put out by two people with shovels."
              ],
              "answer": 3,
              "hint": "Three of these are true and none of those three mention a fire being put out at all. Find the one you could read aloud to someone who said 'prove it'.",
              "skill": "Finding details",
              "evidence": "A fire that is found when it is the size of a campfire can be put out by two people with shovels."
            },
            {
              "q": "What job do the last three sentences of the second paragraph, about water vapor, dust and smoke, do in the report?",
              "choices": [
                "They explain what causes fog to form over a lake in the morning, when the water is warmer than the air above it and vapor lifts off it in a white sheet.",
                "They list every road and every town that can be seen from the catwalk, so a reader can picture the three roads and the one town named earlier.",
                "They show what learning the view by heart is actually for: telling a real smoke from the things that look like one.",
                "They describe the weather on the day the log was written, telling the reader that the lake was steaming and a truck was raising dust on the road that afternoon."
              ],
              "answer": 2,
              "hint": "Delete those three sentences in your head. What would you no longer be able to do? That missing thing is the job they were doing.",
              "skill": "Author's purpose and structure",
              "evidence": "So the lookout learns the view by heart, every ridge and every gap, until anything new in it, a thin gray line where there was no line yesterday, is impossible to miss."
            },
            {
              "q": "The first line of the log is the date, the weather and the words 'no smokes'. What does 'no smokes' mean as it is used here?",
              "choices": [
                "Nobody is allowed to smoke inside the glass room, because a wooden tower on a dry mountain is no place for anyone to be striking matches.",
                "The haze has been too thick today for the binoculars to reach across the valley.",
                "Nothing has appeared in the view today that could be a fire.",
                "The stove in the tower has been left unlit tonight, so nothing is going up the chimney for the next tower along to mistake for a fire."
              ],
              "answer": 2,
              "hint": "The whole report has been using 'a smoke' to mean one particular thing. Read the second paragraph again and ask what the lookout spends all day looking for.",
              "skill": "Word meanings",
              "evidence": "writes the first line in the log, which is the date, the weather and the words 'no smokes'"
            },
            {
              "q": "Paragraphs 1 and 2 together explain why the lookout turns through a full circle every hour instead of watching one ridge. Why?",
              "choices": [
                "The map on the table only shows the country on one side of the tower, so the lookout has to turn around to check the ridges it leaves out.",
                "Water vapor off the lake looks the same as smoke, so each ridge has to be checked twice.",
                "The wind changes direction through the day, so a single smoke leans a different way each hour and drifts from one ridge across to the next.",
                "A new smoke can show anywhere in sixty miles of view, and it is only easy to put out while it is small."
              ],
              "answer": 3,
              "hint": "Paragraph one tells you how much country the windows cover. Paragraph two tells you what a day's delay costs. Neither one is enough on its own.",
              "skill": "Reading between the lines",
              "evidence": "On a clear morning the view is sixty miles in every direction"
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
            "example": "5 × 4 = 20, so 20 shared into 5 equal groups is 4 each."
          },
          "problems": [
            {
              "q": "The lookout counted 9 windows yesterday and three times as many today. How many windows today?",
              "answer": "27",
              "hint": "Three times 9: 9 + 9 + 9.",
              "skill": "Multiplying"
            },
            {
              "q": "The lookout cleans 27 windows, 9 each morning. How many mornings is that?",
              "answer": "3",
              "hint": "How many 9s make 27?",
              "skill": "Dividing"
            },
            {
              "q": "The lookout's map shows 252 miles of fire road. Crews have checked 120 miles so far. How many miles are left to check?",
              "answer": "132",
              "hint": "252 − 120.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "3/8 of the day's work was done yesterday. What fraction is still to do? (write a fraction)",
              "answer": "5/8",
              "hint": "The whole job is 8/8. Take 3/8 off it.",
              "skill": "Fractions"
            },
            {
              "q": "A square shutter mat is 5 squares on each side. How many squares is that?",
              "answer": "25",
              "hint": "5 rows of 5.",
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
            "example": "2 × (15 − 7) + 6: parentheses first, 15 − 7 = 8; then 2 × 8 = 16; then add 6 to get 22."
          },
          "problems": [
            {
              "q": "A regular scan takes 1.5 minutes. A long one takes 2.5 times as long. How many minutes does the long one take?",
              "answer": "3.75",
              "hint": "Multiply 15 × 25 without the points, then put back 2 decimal places.",
              "skill": "Decimals"
            },
            {
              "q": "15 of the 60 miles are set aside. What percent is that? (write just the number)",
              "answer": "25",
              "accept": [
                "25%"
              ],
              "hint": "15 out of 60, then out of 100.",
              "skill": "Ratios and percent"
            },
            {
              "q": "For every 1 shutter there are 3 miles. There are 24 miles. How many shutters?",
              "answer": "8",
              "hint": "24 ÷ 3 = 8 groups. Each group has 1 shutter.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The lookout works out 5 + 3 × 9. What is it?",
              "answer": "32",
              "hint": "Multiply before you add.",
              "skill": "Order of operations"
            },
            {
              "q": "On a winter day the thermometer read 1 degree at dawn. By dark it had fallen to −9 degrees. By how many degrees did it fall?",
              "answer": "10",
              "hint": "From 1 down to 0 is 1, then 9 more.",
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
            "example": "20 − 3x = 8, so 3x = 20 − 8 = 12, so x = 4."
          },
          "problems": [
            {
              "q": "One scan needs 0.5 minutes. How many minutes do 20 scans need?",
              "answer": "10",
              "hint": "20 × 0.5.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The lookout counted 120 lightning strikes on the first night and 150 on the second. By what percent did the count change? (write just the number)",
              "answer": "25",
              "accept": [
                "25%"
              ],
              "hint": "The change is 30. 30 out of 120, then out of 100.",
              "skill": "Ratios and percent"
            },
            {
              "q": "On a winter day the thermometer read −17 degrees at dawn and −33 degrees at dark. How many degrees did it fall?",
              "answer": "16",
              "hint": "From −17 down to −33.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: 40 − 5x = 10",
              "answer": "6",
              "hint": "Move 5x to the right and 10 to the left: 5x = 30.",
              "skill": "Equations"
            },
            {
              "q": "On the map, 1 inch stands for 20 miles. The ridge is really 100 miles long. How many inches is it on the map?",
              "answer": "5",
              "hint": "100 ÷ 20.",
              "skill": "Ratios and percent"
            }
          ]
        },
        "8": {
          "lesson": {
            "title": "Grade 8 numbers",
            "points": [
              "A straight-line rule is y = mx + b: b is where you start, m is the change each step. If it goes down each step, take m away each time.",
              "A small 3 means three of the number multiplied: 4³ = 4 × 4 × 4 = 64.",
              "Pythagoras: in a right triangle a² + b² = c², and c is always the longest side.",
              "With x on both sides, move all the x's to one side first, then all the plain numbers to the other."
            ],
            "example": "Start with 50 and use 7 an hour: after 4 hours, 50 − 7 × 4 = 22 are left."
          },
          "problems": [
            {
              "q": "The lookout's tower has 69 bottles of water. Fire crews take 8 every hour. How many bottles are left after 8 hours?",
              "answer": "5",
              "hint": "8 × 8 = 64 taken, then take 64 away from 69.",
              "skill": "Linear relationships"
            },
            {
              "q": "A cube is 9 small cubes along every edge. How many small cubes make it up?",
              "answer": "729",
              "hint": "9³ means 9 × 9 × 9.",
              "skill": "Powers and roots"
            },
            {
              "q": "A 17-foot rope runs from the top of a flagpole to a point 15 feet away on the ground. How tall is the flagpole, in feet?",
              "answer": "8",
              "hint": "a² = c² − b² = 289 − 225 = 64. Then take the square root.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "Solve for x: 4x = x + 18",
              "answer": "6",
              "hint": "Take x off both sides: 3x = 18. Then divide by 3.",
              "skill": "Equations"
            },
            {
              "q": "The lookout can see 100,000 acres of forest. Written as 1 × 10 to a power, what is the power?",
              "answer": "5",
              "hint": "Count the zeros after 1.",
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
          "example": "If step 5 says 'answer in feet, not miles', the number changes."
        },
        "skill": "Following directions",
        "steps": [
          "Write the height of the steel tower in feet: 40.",
          "Add the side of the glass room in feet, 14, and write that total down.",
          "Now a second total. Multiply the 3 roads the lookout can see by the 60 miles of view on a clear morning, then take away the 1 town.",
          "Two totals are on the page now: one from step 2, one from step 3.",
          "The log's first line is the tower and the room, not the sweep of the view, so type your step 2 total and not your step 3 total."
        ],
        "prompt": "Your answer:",
        "answer": "54",
        "hint": "Step 2 and step 3 are two separate totals. Step 5 says which one the log's first line keeps."
      }
    },
    {
      "id": "lookout-2",
      "title": "The Brass Sight",
      "recon": {
        "lesson": {
          "title": "How a tool works",
          "points": [
            "When the log gives a list like 'north is zero', a question may ask you to read one item off it.",
            "A number of degrees is a direction. A number of miles is a distance. Keep them apart.",
            "A word about the tool is defined by what the lookout does with it."
          ],
          "example": "'Breakfast at seven, lunch at noon, supper at six.' When is lunch? Read it off the list: noon."
        },
        "title": "Tower Log: Finding a Fire With a Line",
        "passage": [
          "In the middle of the map table is a brass instrument called a fire finder. It is a round map of the country around the tower, with the tower at the center. Across it turns a sighting bar. The bar has a tiny hole at one end and a crosshair at the other. To find a smoke, the lookout puts an eye to the hole and turns the bar until the crosshair sits on the smoke. Then the lookout reads the number on the ring where the bar points. That number is the bearing: how many degrees clockwise from north the smoke is. North is zero, east is ninety, south is one hundred and eighty, west is two hundred and seventy.",
          "A bearing is a line, and a line is not a place. The smoke could be anywhere along it, two miles out or thirty. So the lookout radios the bearing to the next tower, twelve miles away on another peak, and that lookout takes a bearing of the same smoke from there. Where the two lines cross on the map is the fire. It is called a cross-bearing, and with two towers a smoke forty miles away can be pinned to within a quarter of a mile, close enough to send a crew to the right drainage.",
          "Today is practice. The dispatcher radios a made-up smoke. The lookout finds a landmark on the bearing, and the second tower answers. The two lines are drawn on the map with a pencil to see where they cross. The lookout does it six times before lunch, faster each time. The last one takes forty seconds from the radio call to the pencil mark. When the real one comes, forty seconds will matter."
        ],
        "questions": [
          {
            "q": "What is the bearing of a smoke straight east of the tower?",
            "choices": [
              "Zero",
              "One hundred and eighty",
              "Two hundred and seventy",
              "Ninety"
            ],
            "answer": 3,
            "hint": "The last sentence of paragraph 1.",
            "skill": "Finding details"
          },
          {
            "q": "How far away is the next tower?",
            "choices": [
              "Two and a half miles",
              "Forty-five miles",
              "Twelve miles",
              "A quarter of a mile"
            ],
            "answer": 2,
            "hint": "Paragraph 2, the sentence with 'radios the bearing'.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 2, what is a 'cross-bearing'?",
            "choices": [
              "A bearing taken twice from the same tower so that it can be checked",
              "A bearing read straight off the brass ring, where north is zero degrees",
              "The brass ring around the fire finder that the bearings are read from",
              "Two bearings from two towers that cross on the map at the fire"
            ],
            "answer": 3,
            "hint": "The sentences 'Where the two lines cross on the map is the fire. It is called a cross-bearing'.",
            "skill": "Word meanings"
          },
          {
            "q": "Why is one bearing not enough to find a fire?",
            "choices": [
              "Because the brass fire finder can only be turned to one bearing at a time",
              "Because the radio will not always reach the second tower twelve miles away",
              "Because the second tower reads a different number",
              "Because a bearing is a line, and the fire could be anywhere along it"
            ],
            "answer": 3,
            "hint": "The first two sentences of paragraph 2.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 3 mostly about?",
            "choices": [
              "The dispatcher who radios in a made-up smoke to practice on",
              "Practicing cross-bearings until they are fast",
              "The brass fire finder and how a bearing is read off it",
              "The forty seconds a real smoke will take to reach the crew"
            ],
            "answer": 1,
            "hint": "The first sentence of paragraph 3 is 'Today is practice', and the rest describes the drill.",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Bearing math",
          "points": [
            "Degrees in a full circle: 360.",
            "A fraction times a whole number: 4 × 2/3 is four 2/3s, which is 8/3.",
            "Halfway between two bearings: add them, then divide by 2.",
            "Equal sweeps of a full circle: 360 ÷ the number of sweeps."
          ],
          "example": "Halfway between 90 and 180: 90 + 180 = 270, and 270 ÷ 2 = 135."
        },
        "problems": [
          {
            "q": "North is 0 degrees and east is 90. What bearing is halfway between them?",
            "answer": "45",
            "hint": "90 ÷ 2.",
            "skill": "Dividing"
          },
          {
            "q": "Each practice cross-bearing takes 3/4 of a minute. How many minutes do 8 of them take?",
            "answer": "6",
            "hint": "Eight 3/4s is 24/4. How many wholes is that?",
            "skill": "Fractions"
          },
          {
            "q": "The lookout practiced 6 cross-bearings. The first took 120 seconds and the last took 40. How many seconds faster was the last?",
            "answer": "80",
            "hint": "120 − 40.",
            "skill": "Adding and subtracting"
          },
          {
            "q": "The next tower is 12 miles away. A smoke is 40 miles from this tower, and the next tower is between this tower and the smoke, all in a line. How many miles is the smoke from the next tower?",
            "answer": "28",
            "hint": "40 − 12.",
            "skill": "Adding and subtracting"
          },
          {
            "q": "A full circle is 360 degrees. The lookout scans it in 4 equal sweeps. How many degrees is each sweep?",
            "answer": "90",
            "hint": "360 ÷ 4.",
            "skill": "Dividing"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "Proof has to reach all the way",
            "points": [
              "A supporting sentence has to finish the job on its own. Read the claim, read your pick, and ask whether someone could still say 'so what?'",
              "Every choice will be a real sentence from the report, so being true is worth nothing here. Sharing a word with the claim is worth less than nothing.",
              "If the claim has two parts, the sentence you choose has to carry both of them."
            ],
            "example": "Claim: the bridge closes every winter. 'The bridge is made of timber' is true and proves nothing. 'Ice on the deck makes it unsafe from November to March' proves it and stops the argument."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea that develops across the whole report?",
              "choices": [
                "The fire finder is a round map with a sighting bar that turns across it, a tiny hole at one end of the bar and a crosshair at the other.",
                "North is zero, east is ninety, south is one hundred and eighty, west is two hundred and seventy.",
                "A single bearing is enough to send a crew to the right drainage, because the number read off the ring gives the distance to the smoke as well as its direction.",
                "One tower can only give a direction, so putting a fire on the map takes two towers and enough practice to do it fast."
              ],
              "answer": 3,
              "hint": "Paragraph one is one tower, paragraph two is two towers, paragraph three is the clock. The central idea has to hold all three, not just the first.",
              "skill": "Central idea and evidence",
              "evidence": "Where the two lines cross on the map is the fire."
            },
            {
              "q": "Claim: a bearing on its own cannot tell a crew where to go. Which sentence from the report best supports that claim?",
              "choices": [
                "That number is the bearing: how many degrees clockwise from north the smoke is.",
                "To find a smoke, the lookout puts an eye to the hole and turns the bar until the crosshair sits on the smoke.",
                "A bearing is a line, and a line is not a place.",
                "North is zero, east is ninety, south is one hundred and eighty, west is two hundred and seventy."
              ],
              "answer": 2,
              "hint": "One of these shares a word with the claim and proves nothing about it. Look for the sentence that says what a bearing is missing.",
              "skill": "Finding details",
              "evidence": "A bearing is a line, and a line is not a place."
            },
            {
              "q": "Why does the report spend a whole paragraph on practice with a smoke that is not real?",
              "choices": [
                "To explain how the brass parts of a fire finder are built, from the sighting bar with its tiny hole to the ring of degrees around the edge.",
                "To show that there will be no real fires in the forest this summer, so the two towers spend the season on made-up smokes radioed over by the dispatcher.",
                "To list the duties of the dispatcher on a quiet day, which are to invent a smoke, radio it to each tower and wait for the two bearings to come back.",
                "To show that speed is part of the skill, so the method in the paragraphs before it has to be quick as well as correct."
              ],
              "answer": 3,
              "hint": "The paragraph adds no new step to the method. Look at its last sentence and ask what it wants you to take from the six tries.",
              "skill": "Author's purpose and structure",
              "evidence": "When the real one comes, forty seconds will matter."
            },
            {
              "q": "The report says a smoke forty miles away can be 'pinned to within a quarter of a mile'. What does pinned mean as it is used here?",
              "choices": [
                "Fastened down with a metal pin",
                "Held still so that the fire cannot spread",
                "Marked with a flag by the crew on the ground",
                "Fixed to one small spot on the map"
              ],
              "answer": 3,
              "hint": "Ask what is being pinned. Nothing here is being fastened to anything, and nobody has reached the fire yet.",
              "skill": "Word meanings",
              "evidence": "It is called a cross-bearing, and with two towers a smoke forty miles away can be pinned to within a quarter of a mile, close enough to send a crew to the right drainage."
            },
            {
              "q": "Paragraphs 2 and 3 together explain why the second tower has to answer quickly, not just correctly. Why?",
              "choices": [
                "The second tower is twelve miles away over another peak, and the radio between them is faint enough that a call often has to be made two or three times.",
                "The fire only has a location where the two lines cross, so nothing can be sent anywhere until the second bearing arrives.",
                "The first tower loses sight of a smoke within a few minutes, so the crosshair has to be put back on it and the whole bearing read off the ring again.",
                "A bearing taken more than forty seconds after the radio call is no longer accurate, because the sighting bar drifts off north while it waits."
              ],
              "answer": 1,
              "hint": "One paragraph says what a single line is worth. Another times the whole drill from the radio call to the pencil mark. Put the two facts side by side and say 'so'.",
              "skill": "Reading between the lines",
              "evidence": "So the lookout radios the bearing to the next tower, twelve miles away on another peak, and that lookout takes a bearing of the same smoke from there."
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
              "q": "The lookout pins photos of smoke on the wall in 5 rows of 4. How many photos is that?",
              "answer": "20",
              "hint": "5 × 4.",
              "skill": "Multiplying"
            },
            {
              "q": "20 photos are pinned in 5 equal rows. How many photos are in each row?",
              "answer": "4",
              "hint": "20 split into 5 equal parts.",
              "skill": "Dividing"
            },
            {
              "q": "The big map has 458 pins. Then 155 more are added and 27 are taken off. How many pins are on the map now?",
              "answer": "586",
              "hint": "Add 458 and 155 first, then take 27 off.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "Add: 2/6 + 3/6 (write a fraction)",
              "answer": "5/6",
              "hint": "Same bottom. 2 + 3 on top.",
              "skill": "Fractions"
            },
            {
              "q": "The plan calls for 1,000 map checks. 738 are done and 27 more are under way. How many have not been started?",
              "answer": "235",
              "hint": "Take 738 off 1000, then take 27 off that.",
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
            "example": "3 × (12 − 5) + 8: parentheses first, 12 − 5 = 7; then 3 × 7 = 21; then add 8 to get 29."
          },
          "problems": [
            {
              "q": "The lookout has 5 1/4 hours of daylight left. Each full scan of the forest takes 3/4 of an hour. How many scans fit in that time?",
              "answer": "7",
              "hint": "Make 5 1/4 an improper fraction, 21/4. Then multiply by the flip of 3/4: 21/4 × 4/3.",
              "skill": "Fractions"
            },
            {
              "q": "75% of the smoke reports checked is 60. How many reports were there in all?",
              "answer": "80",
              "hint": "60 is 75 hundredths of the whole: 60 ÷ 75 × 100.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The lookout counts 2 smokes and 6 lightning strikes. In its simplest form, what is the ratio of smokes to strikes? (write it like 2:3)",
              "answer": "1:3",
              "accept": [
                "1 to 3"
              ],
              "hint": "Divide both by 2.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The lookout works out (5 + 2) × 10. What is it?",
              "answer": "70",
              "hint": "Parentheses first, then multiply.",
              "skill": "Order of operations"
            },
            {
              "q": "One winter night it was −8 degrees at midnight and rose 2 degrees by dawn. What does the thermometer read at dawn?",
              "answer": "-6",
              "accept": [
                "−6"
              ],
              "hint": "Start at −8 and count 2 steps up.",
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
              "Multiplying or dividing with one minus sign gives a minus answer: 3 × (−5) = −15, and −15 ÷ 3 = −5.",
              "With parentheses, undo the outside first: divide both sides, then take off the number inside."
            ],
            "example": "4(x + 5) = 36, so x + 5 = 9, so x = 4."
          },
          "problems": [
            {
              "q": "The lookout has 25 minutes to spend and each scan takes 1.25 minutes. How many scans is that enough for?",
              "answer": "20",
              "hint": "25 ÷ 1.25.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The temperature fell by 50% to 20 degrees. What was it before?",
              "answer": "40",
              "hint": "20 is 50% of the old temperature.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The thermometer falls 2 degrees every hour for 11 hours. What is the total change? (Write a fall as a negative number.)",
              "answer": "-22",
              "accept": [
                "−22"
              ],
              "hint": "11 hours of −2 each: 11 × (−2). One minus sign, so the answer is negative.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: (x + 11) × 7 = 154",
              "answer": "11",
              "hint": "Divide both sides by 7 first, then take 11 off.",
              "skill": "Equations"
            },
            {
              "q": "A round plate has a radius of 20 inches. Using 3.14 for pi, what is its area in square inches?",
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
              "A cube root undoes cubing: 4 × 4 × 4 = 64, so the cube root of 64 is 4.",
              "Pythagoras: in a right triangle a² + b² = c², and c is always the longest side.",
              "Collect the x's first: 6x − 2x is 4x. Then undo the plain number."
            ],
            "example": "y = 2x + 9 when x = 6: 2 × 6 + 9 = 21."
          },
          "problems": [
            {
              "q": "The temperature, in degrees, follows the rule y = 3x + 12, where x is the hour. What is y when x = 6?",
              "answer": "30",
              "hint": "Put 6 in for x: 3 × 6 + 12.",
              "skill": "Linear relationships"
            },
            {
              "q": "A cube-shaped water tank has a volume of 1,000 cubic feet. How long is one edge, in feet?",
              "answer": "10",
              "hint": "What number times itself, times itself again, makes 1,000?",
              "skill": "Powers and roots"
            },
            {
              "q": "A 25-foot rope reaches the top of a 7-foot pole. How far is the foot of the rope from the base, in feet?",
              "answer": "24",
              "hint": "b² = c² − a² = 625 − 49 = 576. Then take the square root.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "Solve for x: 8x + 11 − 5x = 26",
              "answer": "5",
              "hint": "Collect the x's first: 3x + 11 = 26.",
              "skill": "Equations"
            },
            {
              "q": "A round tank has a radius of 10 feet and is 4 feet deep. Using 3.14 for pi, what is its volume in cubic feet?",
              "answer": "1256",
              "hint": "Volume = 3.14 × radius × radius × depth: 3.14 × 10 × 10 × 4.",
              "skill": "Area and perimeter"
            }
          ]
        }
      },
      "orders": {
        "lesson": {
          "title": "Turn by turn",
          "points": [
            "Bearings add clockwise. Past 360, start again at 0.",
            "Do the turns in the order given."
          ],
          "example": "0, turn 90 = 90. Turn 90 again = 180."
        },
        "skill": "Following directions",
        "steps": [
          "Start the sighting bar at north, 0 degrees.",
          "Turn it clockwise to east and write down that bearing.",
          "Add the miles to the next tower on the other peak: 12.",
          "Add the seconds the last practice sighting took: 40.",
          "Type the result, unless one bearing from one tower gives you a line and not a place, in which case type CROSS BEARING instead. (Paragraph 2 says what one bearing on its own gives you.)"
        ],
        "prompt": "Your answer:",
        "answer": "CROSS BEARING",
        "accept": [
          "cross bearing",
          "Cross bearing",
          "CROSS-BEARING",
          "cross-bearing",
          "crossbearing",
          "cross bearing."
        ],
        "hint": "Add the turns and the two numbers in order. Then paragraph 2 tells you whether one bearing on its own can find a fire."
      }
    },
    {
      "id": "lookout-3",
      "title": "Lightning",
      "recon": {
        "lesson": {
          "title": "Danger to the lookout",
          "points": [
            "When the log describes a danger to the lookout, the rule for it is nearby.",
            "'Why' questions about the log's choices want the reason it gives after 'because'.",
            "A count in the log is exact. Read it."
          ],
          "example": "'Hail fell four times before dark.' How many? Four."
        },
        "title": "Tower Log: The Stool With Glass Feet",
        "passage": [
          "Most fires in this forest start with lightning, and lightning is also the one thing the lookout is afraid of. A steel tower on the highest point for miles is exactly where a bolt wants to go. The tower has a copper cable running from the roof down into the ground. The cable carries a strike safely past the room. Inside there is a wooden stool with glass insulators on the ends of its legs. When a storm is overhead the lookout sits on the stool, feet off the floor, hands off the metal. Then the lookout does nothing but count.",
          "Counting is the job during a storm. Every flash that hits a ridge in view gets a bearing and a time in the log. The reason is that a lightning fire does not always show right away. A bolt can strike a tree, smolder in the roots or the punky heart of a dead snag for a day or two, and only then put up smoke. So after a storm the lookout has a list of places to watch, and watches them, for days. These are called sleepers, and they are the fires that surprise people.",
          "Today's storm came over at three in the afternoon and lasted fifty minutes. The lookout counted nine strikes on ridges in view and wrote down all nine bearings. The rain that came with it was heavy on the north side and barely reached the south. The log notes that, because a strike that got rained on is probably out and a strike that did not is probably not. Strike number six, on the dry south ridge, bearing one hundred and sixty, gets a circle around it."
        ],
        "questions": [
          {
            "q": "What is on the ends of the wooden stool's legs?",
            "choices": [
              "Rubber pads",
              "Steel plates",
              "Nothing",
              "Glass insulators"
            ],
            "answer": 3,
            "hint": "Paragraph 1, the sentence with 'wooden stool'.",
            "skill": "Finding details"
          },
          {
            "q": "How many strikes did the lookout count today?",
            "choices": [
              "Three",
              "Six",
              "Nine",
              "Fifty"
            ],
            "answer": 2,
            "hint": "Paragraph 3, the second sentence.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 2, what is a 'sleeper'?",
            "choices": [
              "A lightning strike that gets rained on and goes out before it can ever show any smoke",
              "A lightning strike that smolders unseen for a day or two before it shows smoke",
              "A strike that hits the tower and is carried away by the copper cable",
              "A storm that passes over the ridge at night and is missed by the lookout completely"
            ],
            "answer": 1,
            "hint": "The sentences before 'These are called sleepers' describe them.",
            "skill": "Word meanings"
          },
          {
            "q": "Why does strike number six get a circle around it?",
            "choices": [
              "Because it was the biggest flash of all nine, and the log records every single strike in view",
              "Because it hit the dry south ridge where the rain barely fell, so it is probably not out",
              "Because it was the sixth of nine strikes, and every sixth strike is checked again after a storm",
              "Because it hit the tower"
            ],
            "answer": 1,
            "hint": "The last three sentences of paragraph 3.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 1 mostly about?",
            "choices": [
              "How fires start",
              "How the tower and the lookout are protected from lightning",
              "Counting the strikes on ridges in view and logging each bearing",
              "The copper cable"
            ],
            "answer": 1,
            "hint": "Paragraph 1 names the danger and then the cable, the stool and the rule.",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Storm math",
          "points": [
            "Minutes of storm ÷ strikes: minutes per strike.",
            "Strikes over several storms: multiply.",
            "Fraction of the strikes on dry ground: divide by the bottom, multiply by the top.",
            "Days to hours: × 24."
          ],
          "example": "6 strikes in 42 minutes is one every 42 ÷ 6 = 7 minutes."
        },
        "problems": [
          {
            "q": "The storm lasted 50 minutes and there were 9 strikes. The lookout wants minutes per strike, rounded down. 50 ÷ 9 is?",
            "answer": "5",
            "hint": "9 × 5 = 45, which fits in 50. 9 × 6 = 54 does not.",
            "skill": "Dividing"
          },
          {
            "q": "The storm started at 3:00 and lasted 50 minutes. What time did it end? (write as h:mm)",
            "answer": "3:50",
            "accept": [
              "350",
              "15:50"
            ],
            "hint": "3:00 plus 50 minutes.",
            "skill": "Multi-step problems"
          },
          {
            "q": "Of the 9 strikes, 1/3 hit ridges to the east. How many strikes is that?",
            "answer": "3",
            "hint": "9 ÷ 3.",
            "skill": "Fractions"
          },
          {
            "q": "Over the whole summer there were 14 storms with about 9 strikes each. About how many strikes is that?",
            "answer": "126",
            "hint": "14 × 9: 10 × 9 = 90, 4 × 9 = 36.",
            "skill": "Multiplying"
          },
          {
            "q": "A sleeper can smolder for 2 days before showing smoke. Two days is how many hours?",
            "answer": "48",
            "hint": "2 × 24.",
            "skill": "Multiplying"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "The shape under the words",
            "points": [
              "Every paragraph has a job: set the scene, give a cause, set two things side by side, walk through an order, or show a problem and what was done about it.",
              "Find the job by deleting the paragraph in your head. What would you no longer know? That gap is the job.",
              "Shape words give it away. 'Because' and 'so' mean cause and effect. 'But' and 'while' mean two things compared. 'First, then, by morning' means a sequence."
            ],
            "example": "A report on a harbor stops for a paragraph about the tide. Its job is not oceanography. It is there so that the next paragraph, about a boat sitting on mud at four in the afternoon, makes any sense at all."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea of the whole report?",
              "choices": [
                "The stool has glass insulators on the ends of its legs so a strike cannot travel into it.",
                "Lightning is the most dangerous kind of weather anywhere in the mountains.",
                "Once a storm has passed over, the lookout knows where the fires will be.",
                "A storm is not one event but the start of a list: the lookout gets through it, writes it down, and then watches the places it may have lit."
              ],
              "answer": 3,
              "hint": "Sitting out the storm, counting the strikes, watching for days afterward. Ask what the choice has to cover before you pick one.",
              "skill": "Central idea and evidence",
              "evidence": "So after a storm the lookout has a list of places to watch, and watches them, for days."
            },
            {
              "q": "Claim: a fire started by lightning may not be visible for days after the strike. Which sentence from the report best supports that claim?",
              "choices": [
                "Most fires in this forest start with lightning, and lightning is also the one thing the lookout is afraid of.",
                "The lookout counted nine strikes on ridges in view and wrote down all nine bearings.",
                "A bolt can strike a tree, smolder in the roots or the punky heart of a dead snag for a day or two, and only then put up smoke.",
                "Strike number six, on the dry south ridge, bearing one hundred and sixty, gets a circle around it."
              ],
              "answer": 2,
              "hint": "The claim is about a delay. Three of these are true and say nothing about time passing between the bolt and the smoke.",
              "skill": "Finding details",
              "evidence": "A bolt can strike a tree, smolder in the roots or the punky heart of a dead snag for a day or two, and only then put up smoke."
            },
            {
              "q": "The last paragraph gives a fact about where the rain fell and then gives a reason. What job does that reason do?",
              "choices": [
                "It explains why rain falls more heavily on the north side of a ridge than it does on the south side of the same ridge.",
                "It turns a weather note into a way of sorting nine strikes into the ones still worth watching.",
                "It describes what the storm sounded like from inside the glass room, with thunder close overhead and rain loud on the roof for the whole fifty minutes.",
                "It compares this storm with the one that came through last week."
              ],
              "answer": 1,
              "hint": "Look at what happens in the very next sentence, to strike number six. The reason was written down so that something could be done with it.",
              "skill": "Author's purpose and structure",
              "evidence": "a strike that got rained on is probably out and a strike that did not is probably not"
            },
            {
              "q": "The report calls some fires 'sleepers'. What does that name tell you about them?",
              "choices": [
                "They burn slowly all through the night and have gone out on their own by the time morning comes.",
                "They start with a strike and then lie quiet for a day or two before they show.",
                "They are the fires a tired lookout fails to notice.",
                "They are so small that they never grow into anything at all, and go out in the roots without ever putting up any smoke."
              ],
              "answer": 1,
              "hint": "The name is a picture. Read the sentence just before it, which describes exactly what these fires do, and match the picture to that.",
              "skill": "Word meanings",
              "evidence": "A bolt can strike a tree, smolder in the roots or the punky heart of a dead snag for a day or two, and only then put up smoke."
            },
            {
              "q": "Paragraphs 2 and 3 together explain why strike number six got a circle around it and the other eight did not. Why did it?",
              "choices": [
                "It was the only strike close enough to the tower to be a danger to it.",
                "It landed on the side that stayed dry, and a strike that was not rained on can still be working days later.",
                "It was the last of the nine to be counted before the storm passed.",
                "It hit a ridge that cannot be seen from the catwalk, so the only way to check it is to wait for a smoke to rise above the skyline."
              ],
              "answer": 1,
              "hint": "One paragraph tells you what a strike can do quietly for two days. The other tells you which ridge missed the rain. Neither one circles the strike on its own.",
              "skill": "Reading between the lines",
              "evidence": "Strike number six, on the dry south ridge, bearing one hundred and sixty, gets a circle around it."
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
              "q": "Each storm brings 8 lightning strikes, and there are 9 storms. How many strikes is that?",
              "answer": "72",
              "hint": "9 groups of 8, so 9 × 8.",
              "skill": "Multiplying"
            },
            {
              "q": "The lookout marks 72 strikes on two maps, half on each. How many strikes go on each map?",
              "answer": "36",
              "hint": "Half of 72.",
              "skill": "Dividing"
            },
            {
              "q": "The lookout needs 500 map pins and has 259. How many more are needed?",
              "answer": "241",
              "hint": "500 − 259.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "The day's work is cut into 4 equal parts and the lookout has finished 3 of them. What fraction is done? (write a fraction)",
              "answer": "3/4",
              "hint": "3 parts out of 4.",
              "skill": "Fractions"
            },
            {
              "q": "A floor is 6 squares wide and 5 squares long. The lookout has covered 6 squares. How many squares are left to cover?",
              "answer": "24",
              "hint": "6 × 5 squares in all, then take 6 off.",
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
            "example": "5 × (10 − 6) + 9: parentheses first, 10 − 6 = 4; then 5 × 4 = 20; then add 9 to get 29."
          },
          "problems": [
            {
              "q": "The lookout has 9.75 minutes. Each scan takes 0.75 minutes. How many scans is that enough for?",
              "answer": "13",
              "hint": "Move both points 2 places to the right: 975 ÷ 75.",
              "skill": "Decimals"
            },
            {
              "q": "Of 200 lightning strikes, 50% hit bare rock. How many did not?",
              "answer": "100",
              "hint": "50% of 200 is 100. Take that off 200.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The lookout shares 49 acres between two teams in the ratio 3 to 4. How many does the smaller share get?",
              "answer": "21",
              "hint": "3 + 4 = 7 parts. 49 ÷ 7 = 7 for one part.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The lookout works out 3 × 10 − 4 × 2. What is it?",
              "answer": "22",
              "hint": "Do both multiplications first, then subtract.",
              "skill": "Order of operations"
            },
            {
              "q": "In one winter week the coldest reading was −6 degrees and the warmest was −5 degrees. How many degrees apart are they?",
              "answer": "1",
              "hint": "From −6 up to −5.",
              "skill": "Negative numbers"
            }
          ]
        },
        "7": {
          "lesson": {
            "title": "Grade 7 numbers",
            "points": [
              "Find the rate for one first: 6 jobs in 9 hours is 9 ÷ 6 = 1.5 hours each, so 10 jobs take 15 hours.",
              "Percent of a number: turn the percent into a fraction of 100, then multiply.",
              "Below zero, going up adds and going down subtracts. Walk the number line one step at a time.",
              "With parentheses, undo the outside first: divide both sides, then take off the number inside."
            ],
            "example": "3(x + 7) = 33, so x + 7 = 11, so x = 4."
          },
          "problems": [
            {
              "q": "8 scans took 20 minutes. At the same rate, how many minutes would 20 scans take?",
              "answer": "50",
              "hint": "One scan takes 20 ÷ 8 = 2.5. Then × 20.",
              "skill": "Ratios and percent"
            },
            {
              "q": "Of the 40 lightning strikes the lookout logged, 10% started fires. How many strikes was that?",
              "answer": "4",
              "hint": "10% of 40: 10/100 × 40.",
              "skill": "Ratios and percent"
            },
            {
              "q": "On a winter day the low was −17 degrees and the high was 8 degrees. How many degrees apart are they?",
              "answer": "25",
              "hint": "17 below zero plus 8 above zero.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: 8(x + 30) = 320",
              "answer": "10",
              "hint": "Divide both sides by 8 to get x + 30 = 40.",
              "skill": "Equations"
            },
            {
              "q": "On the map, 5 inches stands for 20 miles. How many miles does 1 inch stand for?",
              "answer": "4",
              "hint": "20 ÷ 5.",
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
              "Collect the x's first: 6x − 2x is 4x, and an x on its own means 1x."
            ],
            "example": "5, 11, 17, … adds 6 each step. The 6th number is 5 steps on: 5 + 5 × 6 = 35."
          },
          "problems": [
            {
              "q": "The count of lightning strikes goes 8, 12, 16, 20, and on. What is the 10th number in the list?",
              "answer": "44",
              "hint": "It starts at 8 and adds 4 each step. The number you want is 9 steps on from 8.",
              "skill": "Linear relationships"
            },
            {
              "q": "What is (5 × 5)²?",
              "answer": "625",
              "hint": "5 × 5 = 25 first, then square it.",
              "skill": "Powers and roots"
            },
            {
              "q": "A right triangle has short sides of 8 and 15 feet. How long is its longest side, in feet?",
              "answer": "17",
              "hint": "8² + 15² = 289. The longest side is the square root of that.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "Solve for x: 5x − 3x = 14",
              "answer": "7",
              "hint": "5 − 3 = 2, so 2x = 14.",
              "skill": "Equations"
            },
            {
              "q": "Which is bigger, 8 × 10^5 or 9 × 10^4? Write the bigger one out in full.",
              "answer": "800000",
              "hint": "8 × 10^5 is ten times 8 × 10^4, and 9 is not ten times 8.",
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
          "example": "'Add 9. Instead, subtract 9' means subtract."
        },
        "skill": "Following directions",
        "steps": [
          "Write the number of strikes counted: 9.",
          "Multiply by the number of minutes the storm lasted: 50.",
          "Add the bearing of strike number six: 160.",
          "Instead of adding in step 3, go back to your answer from step 2 and subtract 160.",
          "Type the result."
        ],
        "prompt": "Your answer:",
        "answer": "290",
        "hint": "Multiply the 9 strikes by the 50 minutes first. Then step 4 swaps step 3's add for a subtract — read it closely."
      }
    },
    {
      "id": "lookout-4",
      "title": "The Crew",
      "recon": {
        "lesson": {
          "title": "Who does what",
          "points": [
            "When the log describes a crew, each job is a detail.",
            "'Why' about a method: the reason is what the method prevents.",
            "A word about the work is defined by what the crew does."
          ],
          "example": "'A fire line is a strip scraped down to bare dirt.' What is a fire line? Bare dirt."
        },
        "title": "Tower Log: Twenty People and a Trail of Dirt",
        "passage": [
          "A fire crew is twenty people with hand tools, and they walk in. A hand crew carries shovels, axes, and a tool called a Pulaski, an axe on one side and a hoe on the other. Their job is not to put water on a fire. There is rarely any water. Their job is to take away the fire's food. A fire needs fuel, air and heat, and of the three the crew can only take the fuel. So they scrape a strip of ground down to bare dirt, three feet wide or more, all the way around the fire. That strip is the fire line. When the fire reaches it, there is nothing left to burn.",
          "The line has to be finished before the fire gets there, so a crew works fast and in order. The first tools cut the brush, the middle tools dig, and the last tools scrape the strip clean. Each person takes one step and does one swing before the person behind repeats it. A good crew can dig a chain, sixty-six feet, of fire line in a few minutes on flat ground. On a steep slope in heavy brush it can take an hour.",
          "Air support is for the big ones. A helicopter can drop a bucket of water from a lake. A plane can drop a line of red retardant, a slurry of water and fertilizer that clings to trees and will not burn, ahead of the fire to slow it down. But the plane and the helicopter do not put a fire out. Only the crew on the ground does that, and they stay for days after the flames are gone, feeling the ash with the backs of their bare hands for heat. When it is cold everywhere, the fire is out."
        ],
        "questions": [
          {
            "q": "What is a Pulaski?",
            "choices": [
              "A helicopter that drops a bucket of water taken from a lake",
              "A red slurry of water and fertilizer that is dropped from a plane",
              "A tool with an axe on one side and a hoe on the other",
              "A fire line"
            ],
            "answer": 2,
            "hint": "Paragraph 1, the second sentence.",
            "skill": "Finding details"
          },
          {
            "q": "How long is a chain?",
            "choices": [
              "Sixty-six feet",
              "Three feet",
              "A mile",
              "Ten feet"
            ],
            "answer": 0,
            "hint": "Paragraph 2, the sentence with 'a chain'.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 3, what is 'retardant'?",
            "choices": [
              "Water from a lake",
              "A red slurry of water and fertilizer that clings to trees and will not burn",
              "A line of bare dirt scraped around the edge of a fire",
              "A powder dropped from the helicopter's bucket"
            ],
            "answer": 1,
            "hint": "The sentence with 'red retardant' explains it after the comma.",
            "skill": "Word meanings"
          },
          {
            "q": "Why does the crew scrape the ground down to bare dirt?",
            "choices": [
              "To make a path that the crew can walk along all the way around the fire",
              "Because dirt puts out the flames that reach it",
              "Because a fire needs fuel, and bare dirt has nothing left to burn",
              "Because the plane needs a clear target to drop its line of retardant on"
            ],
            "answer": 2,
            "hint": "Paragraph 1, the sentences about fuel, air and heat.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 3 mostly about?",
            "choices": [
              "How a helicopter fills its bucket from a lake and then drops it on the head of a fire",
              "What aircraft can and cannot do, and why the ground crew is what puts a fire out",
              "How a crew works in order, each person taking one step and one swing",
              "How a crew feels through the ash with the backs of their bare hands for days afterward"
            ],
            "answer": 1,
            "hint": "The first sentence says air support is for the big ones, and the paragraph ends with the crew on the ground.",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Crew math",
          "points": [
            "Chains to feet: × 66.",
            "People times swings: total swings.",
            "Gallons in a bucket times drops: gallons dropped.",
            "Adding decimals: line up the points. 3.2 + 1.45 is 3.20 + 1.45 = 4.65."
          ],
          "example": "4 chains is 4 × 66 = 264 feet."
        },
        "problems": [
          {
            "q": "A chain is 66 feet. The crew digs 10 chains of line. How many feet is that?",
            "answer": "660",
            "hint": "10 × 66.",
            "skill": "Multiplying"
          },
          {
            "q": "The fire line is 3 feet wide and 660 feet long. What is its area in square feet?",
            "answer": "1980",
            "accept": [
              "1,980"
            ],
            "hint": "3 × 660.",
            "skill": "Area and perimeter"
          },
          {
            "q": "A helicopter bucket holds 300 gallons. It makes 12 drops. How many gallons is that?",
            "answer": "3600",
            "accept": [
              "3,600"
            ],
            "hint": "300 × 12.",
            "skill": "Multiplying"
          },
          {
            "q": "A crew of 20 each takes 1 swing per step. After 45 steps, how many swings has the crew made in all?",
            "answer": "900",
            "hint": "20 × 45.",
            "skill": "Multiplying"
          },
          {
            "q": "One water jug holds 2.5 gallons and the other holds 1.85 gallons. How many gallons are in both? (write a decimal)",
            "answer": "4.35",
            "hint": "Line up the points: 2.50 + 1.85.",
            "skill": "Decimals"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "Work it out from the sentence",
            "points": [
              "Cover the word with a finger and read the sentence with a hole in it. What would you drop into the hole?",
              "Some words are doing a picture job, not a dictionary job. A fire's 'food' is not a meal. Ask what the picture is standing in for.",
              "Try each choice in the sentence. Three of them will make the sentence say something the report never said."
            ],
            "example": "'That road eats tires.' Nothing is being eaten. The sentence is telling you the road wrecks tires faster than a road should, and you worked that out without a dictionary."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea that develops across the whole report?",
              "choices": [
                "A Pulaski is an axe on one side and a hoe on the other.",
                "Retardant is a slurry of water and fertilizer that clings to trees and will not burn, and a plane lays a line of it ahead of the fire to slow it down.",
                "A fire is stopped by taking away what it burns, and that is slow work done on foot by people with hand tools.",
                "Aircraft are what finally put a large fire out, because a plane can lay a line of retardant right across the head of it."
              ],
              "answer": 2,
              "hint": "The tools, the order of the line, the days of feeling the ash. Ask what all three paragraphs keep coming back to. One of these choices the report flatly denies.",
              "skill": "Central idea and evidence",
              "evidence": "But the plane and the helicopter do not put a fire out."
            },
            {
              "q": "Claim: of the three things a fire needs, the crew can work on only one. Which sentence from the report best supports that claim?",
              "choices": [
                "A fire needs fuel, air and heat, and of the three the crew can only take the fuel.",
                "A fire crew is twenty people with hand tools, and they walk in.",
                "There is rarely any water.",
                "That strip is the fire line."
              ],
              "answer": 0,
              "hint": "The claim counts to three and then says 'only one'. Find the sentence that does the same counting.",
              "skill": "Finding details",
              "evidence": "A fire needs fuel, air and heat, and of the three the crew can only take the fuel."
            },
            {
              "q": "Why did the author put the paragraph about aircraft last, after the crew and the line have already been explained?",
              "choices": [
                "To explain how a helicopter lifts a bucket of water out of a lake.",
                "So the water and the retardant read as help for the crew's work rather than a replacement for it.",
                "To show that hand crews are no longer needed on the large fires.",
                "To compare the cost of flying a plane with the cost of sending a crew."
              ],
              "answer": 1,
              "hint": "Read the sentence that begins 'But'. A paragraph that spends three sentences building something up and then takes it back has a job, and that is the job.",
              "skill": "Author's purpose and structure",
              "evidence": "But the plane and the helicopter do not put a fire out."
            },
            {
              "q": "The report says the crew's job is to take away 'the fire's food'. What is the fire's food?",
              "choices": [
                "The heat rising off the flames",
                "The air that a fire pulls in from all around it as it burns",
                "The brush, grass and timber the fire is burning through",
                "The line of red retardant that a plane lays down ahead of the fire"
              ],
              "answer": 2,
              "hint": "The next sentence names three things a fire needs and says which one the crew can take. Food is a picture for one of those three.",
              "skill": "Word meanings",
              "evidence": "A fire needs fuel, air and heat, and of the three the crew can only take the fuel."
            },
            {
              "q": "Paragraphs 1 and 3 together explain why the crew stays for days after the flames are gone. Why do they?",
              "choices": [
                "They are waiting for a helicopter to come and lift them back out.",
                "Heat is one of the three things a fire needs, so anything still warm in the ash could start it over again.",
                "They have to fill the fire line back in and scatter the bare dirt with brush again before they are allowed to leave.",
                "The retardant has to be washed off the trees before the crew is allowed to go home, since the fertilizer in it would otherwise kill the brush."
              ],
              "answer": 1,
              "hint": "Paragraph one lists what a fire needs. The last paragraph tells you what the crew is feeling for with the backs of their hands. Put the two together.",
              "skill": "Reading between the lines",
              "evidence": "they stay for days after the flames are gone, feeling the ash with the backs of their bare hands for heat"
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
            "example": "5 × 4 = 20, so 20 shared into 5 equal groups is 4 each."
          },
          "problems": [
            {
              "q": "A truck carries 3 firefighters on each of 5 trips. How many firefighters is that?",
              "answer": "15",
              "hint": "5 × 3.",
              "skill": "Multiplying"
            },
            {
              "q": "Every crew takes 6 firefighters. The lookout has 18 firefighters. How many crews can be filled?",
              "answer": "3",
              "hint": "How many 6s fit into 18?",
              "skill": "Dividing"
            },
            {
              "q": "The lookout counted 268 gallons of water in the morning and 335 in the evening. How many more in the evening?",
              "answer": "67",
              "hint": "335 − 268.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "Which is bigger, 4/8 or 1/8? (write a fraction)",
              "answer": "4/8",
              "hint": "Same bottom, so the bigger top wins.",
              "skill": "Fractions"
            },
            {
              "q": "The target is 1,000 gallons of water and 595 are logged. How many short is that?",
              "answer": "405",
              "hint": "1,000 − 595.",
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
            "example": "3 × (12 − 5) + 8: parentheses first, 12 − 5 = 7; then 3 × 7 = 21; then add 8 to get 29."
          },
          "problems": [
            {
              "q": "The water jug is 5/6 full. The lookout drinks 5/12 of a jug each day. How many days will the water last?",
              "answer": "2",
              "hint": "Flip the second fraction and multiply: 5/6 × 12/5. Then simplify.",
              "skill": "Fractions"
            },
            {
              "q": "Out of every 100 gallons of water, 50 are set aside. Out of 200 gallons of water, how many is that?",
              "answer": "100",
              "hint": "200 is 2 hundreds, so 2 × 50.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The lookout divides 32 minutes of work in the ratio 3 to 5. How many minutes is the larger share?",
              "answer": "20",
              "hint": "8 parts in all, so one part is 4 minutes.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The lookout works out (11 − 4) × (4 + 5). What is it?",
              "answer": "63",
              "hint": "Each set of parentheses first, then multiply the two answers.",
              "skill": "Order of operations"
            },
            {
              "q": "Three winter readings came in from the tower's weather log: −11, 11 and −22 degrees. Which is the coldest?",
              "answer": "-22",
              "accept": [
                "−22"
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
              "q": "The job needs 42 minutes in all, at 3.5 minutes for each scan. One scan is already done. How many scans are left?",
              "answer": "11",
              "hint": "42 ÷ 3.5 = 12 in all, then take the finished one off.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The rule says the water order may change by no more than 50%. Starting from 200 gallons, what is the highest order the rule allows, in gallons?",
              "answer": "300",
              "hint": "50% of 200 is 100. Add it on.",
              "skill": "Ratios and percent"
            },
            {
              "q": "Over 11 hours the thermometer fell 44 degrees in all, the same amount each hour. What was the change each hour? (Write a fall as a negative number.)",
              "answer": "-4",
              "accept": [
                "−4"
              ],
              "hint": "Share −44 into 11 equal parts: −44 ÷ 11. One minus sign, so the answer is negative.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: x ÷ 5 − 4 = 10",
              "answer": "70",
              "hint": "Add 4 to both sides, then multiply by 5.",
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
              "A square root undoes squaring. If a square has area 25, its side is 5.",
              "Pythagoras: in a right triangle a² + b² = c², and c is always the longest side.",
              "With x on both sides, move all the x's to one side first, then all the plain numbers to the other."
            ],
            "example": "Through (0, 2) and (6, 14): y rises 12 while x runs 6, so the slope is 12 ÷ 6 = 2."
          },
          "problems": [
            {
              "q": "A line passes through (0, 5) and (6, 29). What is its slope?",
              "answer": "4",
              "hint": "Slope is the rise over the run: 24 ÷ 6.",
              "skill": "Linear relationships"
            },
            {
              "q": "A square deck has an area of 36 square feet. How many feet is it around the edge?",
              "answer": "24",
              "hint": "One side is the square root of 36, then four sides.",
              "skill": "Powers and roots"
            },
            {
              "q": "The lookout goes 7 feet east and then 24 feet north. In a straight line, how far is that from the start, in feet?",
              "answer": "25",
              "hint": "The two legs make a right angle: 7² + 24² = 625.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "For what value of x do 8x + 17 and 2x + 59 come to the same number?",
              "answer": "7",
              "hint": "Set them equal, take 2x off both sides, then take 17 off.",
              "skill": "Equations"
            },
            {
              "q": "Two round tanks each have a radius of 5 feet and are 4 feet deep. Using 3.14 for pi, what is their total volume in cubic feet?",
              "answer": "628",
              "hint": "One tank is 3.14 × 5 × 5 × 4 = 314. Then double it.",
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
          "example": "'Count only the tools that dig' means skip the bucket."
        },
        "skill": "Following directions",
        "steps": [
          "Write the width of a fire line in feet: 3.",
          "Multiply by the number of people on a hand crew: 20.",
          "The first paragraph names three kinds of hand tool — shovels, axes and Pulaskis. Add that number.",
          "Add the length of one chain of fire line in feet: 66.",
          "Type your answer in yards, not in feet. (Three feet make one yard.)"
        ],
        "prompt": "Your answer:",
        "answer": "43",
        "hint": "Step 5 changes the unit, so the number changes with it. Work steps 2, 3 and 4 in feet first."
      }
    },
    {
      "id": "lookout-5",
      "title": "Smoke",
      "recon": {
        "lesson": {
          "title": "The order things happened",
          "points": [
            "A log of the big day tells events in order with times. Write the times down.",
            "A question about a time wants the clock reading from the log.",
            "The main idea of the last paragraph is what the writer wants you to keep."
          ],
          "example": "'8:10 the bus left. 8:25 it reached school.' How long was the ride? Fifteen minutes."
        },
        "title": "Tower Log: Bearing One Sixty",
        "passage": [
          "At 6:40 in the morning, on the second morning after the storm, there was a thin gray line above the south ridge that had not been there at 6:30. It leaned east with the wind. The lookout put an eye to the fire finder, turned the bar, and read the bearing: one hundred and sixty. It was strike number six, the one with the circle around it, two days late. The sleeper had woken up.",
          "At 6:42 the bearing went out on the radio. At 6:45 the second tower answered with its own: two hundred and fourteen. At 6:47 the two pencil lines crossed on the map at the head of a dry creek, eleven miles from the tower, in heavy timber. The dispatcher had the location on the map before the smoke was big enough for anyone in the valley to notice. By 7:30 a hand crew was walking in from the nearest road. By nine the lookout could see them through the binoculars, twenty tiny figures in yellow shirts, scraping a line around a fire that was still smaller than a football field.",
          "It stayed small. The log for the day is longer than any other this week, a line every few minutes. The last one says: crew reports line complete, fire held at two acres, mopping up. Two acres is nothing. Two acres is a fire that will never have a name, never be on the news, never close a road. The reason it is two acres and not two thousand is a gray line seen at 6:40. Whoever saw it had looked at that ridge so many times that a change in it was impossible to miss. The marmot whistled at sundown, same as always."
        ],
        "questions": [
          {
            "q": "What time was the smoke first seen?",
            "choices": [
              "6:40",
              "6:30",
              "6:47",
              "7:30"
            ],
            "answer": 0,
            "hint": "The first sentence of paragraph 1.",
            "skill": "Finding details"
          },
          {
            "q": "How big did the fire get?",
            "choices": [
              "Two hundred acres",
              "Two thousand acres",
              "Two acres",
              "A football field"
            ],
            "answer": 2,
            "hint": "Paragraph 3, the sentence with 'fire held at'.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 3, what does 'mopping up' mean?",
            "choices": [
              "Cleaning up the tower and packing away the gear at the end of a season",
              "Finishing off a fire after the flames are out, checking for heat",
              "Leaving the fire",
              "Calling in the plane to drop another line of retardant ahead of the fire"
            ],
            "answer": 1,
            "hint": "Read the last entry: the line is complete and the fire is held at two acres. With the fire stopped, what job is left?",
            "skill": "Word meanings"
          },
          {
            "q": "Why was the fire only two acres?",
            "choices": [
              "Because the smoke was seen and pinned early enough that a crew reached it while it was small",
              "Because the sleeper had smoldered for two days and was nearly out",
              "Because the wind stopped",
              "Because a plane dropped a line of red retardant across the head of the fire before the crew arrived"
            ],
            "answer": 0,
            "hint": "Paragraph 3, the sentence that begins 'The reason it is two acres', and the one after it.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 2 mostly about?",
            "choices": [
              "The minute-by-minute chain from bearing to crew on the ground",
              "The twenty tiny figures in yellow shirts seen through the binoculars",
              "The head of the dry creek in heavy timber eleven miles from the tower",
              "The storm"
            ],
            "answer": 0,
            "hint": "Paragraph 2 is a list of times and what happened at each.",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Smoke math",
          "points": [
            "Minutes between clock times: count them.",
            "Difference between two bearings: subtract.",
            "Different bottoms: make them the same first. 1/4 + 1/6 = 3/12 + 2/12 = 5/12.",
            "Two-step: change hours to minutes, then divide."
          ],
          "example": "8:15 to 8:32 is 17 minutes."
        },
        "problems": [
          {
            "q": "The smoke was seen at 6:40 and the lines crossed at 6:47. How many minutes is that?",
            "answer": "7",
            "hint": "From 40 to 47.",
            "skill": "Adding and subtracting"
          },
          {
            "q": "This tower's bearing was 160 and the second tower's was 214. What is the difference between the two bearings?",
            "answer": "54",
            "hint": "214 − 160.",
            "skill": "Adding and subtracting"
          },
          {
            "q": "The crew started walking at 7:30 and reached the fire at 9:00. How many minutes did the walk take?",
            "answer": "90",
            "hint": "7:30 to 9:00 is an hour and a half. 60 + 30.",
            "skill": "Multi-step problems"
          },
          {
            "q": "The lookout spent 1/2 of the morning on the radio and 1/3 of it at the fire finder. How much of the morning is that? (write a fraction)",
            "answer": "5/6",
            "hint": "Make the bottoms the same: 1/2 is 3/6 and 1/3 is 2/6. Then add the tops.",
            "skill": "Fractions"
          },
          {
            "q": "The lookout wrote a log line every 5 minutes for 3 hours. How many lines is that?",
            "answer": "36",
            "hint": "3 hours is 180 minutes. 180 ÷ 5.",
            "skill": "Multi-step problems"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "Say it, then say 'so'",
            "points": [
              "The last question is never answered in one place. Plan on one fact from one paragraph and one fact from another.",
              "Say the two facts out loud and then say 'so'. Whatever comes after 'so' is usually sitting there in the choices.",
              "If a choice needs something the report never mentions, it is out, however sensible it sounds on its own."
            ],
            "example": "Paragraph one: the well freezes in December. Paragraph three: every barrel in the shed is filled in November. So the barrels are the winter's water. Neither line says that by itself."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea of the whole report?",
              "choices": [
                "A fire that ended at two acres ended there because a watched ridge, a fast bearing and a second tower all worked in the minutes after 6:40.",
                "The second tower answered with a bearing of two hundred and fourteen, and where that pencil line crossed the first one the dispatcher marked the head of a dry creek.",
                "Fires in heavy timber are the hardest kind for a crew to reach.",
                "The fire was noticed first by people down in the valley."
              ],
              "answer": 0,
              "hint": "The smoke, the times, the two acres. The last paragraph names the reason out loud; find the choice that says the same thing about the whole report.",
              "skill": "Central idea and evidence",
              "evidence": "The reason it is two acres and not two thousand is a gray line seen at 6:40. Whoever saw it had looked at that ridge so many times that a change in it was impossible to miss."
            },
            {
              "q": "Claim: the fire had a location on the map before it was big enough to be obvious from the ground. Which sentence from the report best supports that claim?",
              "choices": [
                "The lookout put an eye to the fire finder, turned the bar, and read the bearing: one hundred and sixty.",
                "At 6:42 the bearing went out on the radio.",
                "The dispatcher had the location on the map before the smoke was big enough for anyone in the valley to notice.",
                "At 6:45 the second tower answered with its own: two hundred and fourteen."
              ],
              "answer": 2,
              "hint": "The claim has two halves: on the map, and not yet obvious below. Find the sentence that carries both halves at once.",
              "skill": "Finding details",
              "evidence": "The dispatcher had the location on the map before the smoke was big enough for anyone in the valley to notice."
            },
            {
              "q": "Why is the second paragraph written as a run of clock times?",
              "choices": [
                "To show that the lookout was running behind that morning, since the smoke was already above the ridge by the time the catwalk was reached at 6:40.",
                "The times are the point: they show how few minutes passed between a line of smoke being seen and a crew walking in.",
                "To explain how a radio call travels between two towers.",
                "To compare this morning with the afternoon of the storm, when nine strikes were counted in fifty minutes and every bearing went into the log."
              ],
              "answer": 1,
              "hint": "Take the numbers out and read the paragraph again. What have you lost? That is what the times were there for.",
              "skill": "Author's purpose and structure",
              "evidence": "At 6:42 the bearing went out on the radio."
            },
            {
              "q": "The report says 'The sleeper had woken up.' What does that sentence mean here?",
              "choices": [
                "A lightning strike from the storm two days earlier had finally put up smoke.",
                "The lookout had slept through the alarm and reached the catwalk later than usual that morning.",
                "The second tower had come back on the radio after a quiet night.",
                "The wind had picked up after being still all night."
              ],
              "answer": 0,
              "hint": "The sentence right before it tells you which strike this is and how late it is. Nothing in this report is actually asleep.",
              "skill": "Word meanings",
              "evidence": "It was strike number six, the one with the circle around it, two days late."
            },
            {
              "q": "Paragraphs 1 and 3 together show what made the difference that morning. What was it?",
              "choices": [
                "The ridge was known well enough that a line which had not been there ten minutes earlier stood out at once.",
                "The crew reached the fire before it could cross the dry creek, and held it at the creek bed where there was nothing left for it to burn.",
                "The wind dropped soon after the smoke was spotted.",
                "The second tower saw the smoke at the same moment the first one did, so both bearings were already on the map before the radio call went out."
              ],
              "answer": 0,
              "hint": "Paragraph one gives you two times, ten minutes apart, and what was different between them. The last paragraph names the reason. Hold them together.",
              "skill": "Reading between the lines",
              "evidence": "there was a thin gray line above the south ridge that had not been there at 6:30"
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
              "q": "The lookout counts 6 fires with 8 acres in each. How many acres is that?",
              "answer": "48",
              "hint": "6 × 8.",
              "skill": "Multiplying"
            },
            {
              "q": "48 acres are shared equally among 6 fires. How many acres in each fire?",
              "answer": "8",
              "hint": "How many 6s make 48?",
              "skill": "Dividing"
            },
            {
              "q": "The lookout counted 128 acres, then found 101 more, then 38 more. How many acres in all?",
              "answer": "267",
              "hint": "128 + 101 first. Then add 38.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "The lookout finished 6/8 of the day's work before the break and 1/8 after. What fraction is done? (write a fraction)",
              "answer": "7/8",
              "hint": "Same bottom. Add the tops.",
              "skill": "Fractions"
            },
            {
              "q": "A platform is 4 squares wide and 4 squares long. How many squares is that?",
              "answer": "16",
              "hint": "4 rows of 4, so 4 × 4.",
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
              "q": "The plan allows 45.5 minutes. The lookout uses 9.45 minutes on the first scan and 15.65 on the second. How many minutes are left?",
              "answer": "20.4",
              "hint": "Add the two amounts used first, then take that from 45.5. Line up the points.",
              "skill": "Decimals"
            },
            {
              "q": "Of 160 acres, 25% are set aside. How many is that?",
              "answer": "40",
              "hint": "25% of 160: 25% is 25/100.",
              "skill": "Ratios and percent"
            },
            {
              "q": "A fire grows 3 acres every 2 minutes. After 6 minutes, how many acres has it grown?",
              "answer": "9",
              "hint": "6 ÷ 2 = 3 groups. Each group has 3 acres.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The lookout works out 7 × (8 − 2) + 14. What is it?",
              "answer": "56",
              "hint": "Parentheses first, then multiply, then add.",
              "skill": "Order of operations"
            },
            {
              "q": "On a winter day it was −4 degrees at dawn. By noon it was 9 degrees. By how many degrees did it rise?",
              "answer": "13",
              "hint": "From −4 up to 0 is 4, then 9 more.",
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
            "example": "5x + 4 = 39, so 5x = 35, so x = 7."
          },
          "problems": [
            {
              "q": "20 scans needed 50 minutes altogether. How many minutes is that for one scan?",
              "answer": "2.5",
              "hint": "A rate is the total shared out: 50 ÷ 20.",
              "skill": "Ratios and percent"
            },
            {
              "q": "Last summer a big fire in the next forest was mapped at 160 acres. A closer survey cut that figure by 10%. How many acres is that?",
              "answer": "144",
              "hint": "10% of 160 is 16. Then take it off.",
              "skill": "Ratios and percent"
            },
            {
              "q": "On a winter day the thermometer read −4 degrees at dawn. It rose 13 degrees by noon, then fell 12 degrees by dark. What does it read at dark?",
              "answer": "-3",
              "accept": [
                "−3"
              ],
              "hint": "Start at −4, go up 13 to 9, then down 12.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: 8x + 28 = 116",
              "answer": "11",
              "hint": "Take 28 off both sides first, then divide by 8.",
              "skill": "Equations"
            },
            {
              "q": "On the map, 1 inch stands for 8 miles. The fire line measures 4 inches on the map. How long is it really, in miles?",
              "answer": "32",
              "hint": "Every inch is 8 miles, so 4 × 8.",
              "skill": "Ratios and percent"
            }
          ]
        },
        "8": {
          "lesson": {
            "title": "Grade 8 numbers",
            "points": [
              "A straight-line rule is y = mx + b: b is where you start, m is what you add each step.",
              "A small 2 means a number times itself: 10² is 10 × 10 = 100. Work out the power first, then multiply.",
              "Pythagoras: in a right triangle a² + b² = c², and c is always the longest side.",
              "With x on both sides, move all the x's to one side first, then all the plain numbers to the other."
            ],
            "example": "Start at 9 and add 4 each hour: after 7 hours, y = 4 × 7 + 9 = 37."
          },
          "problems": [
            {
              "q": "Last summer a fire in the next forest covered 20 acres and grew by 5 acres every hour. After 5 hours, how many acres did it cover?",
              "answer": "45",
              "hint": "This is the straight-line rule y = mx + b: 5 × 5 + 20.",
              "skill": "Linear relationships"
            },
            {
              "q": "Each square on the map grid covers 7² acres. The fire covers 4 squares. How many acres in all?",
              "answer": "196",
              "hint": "7² means 7 × 7 = 49. Then × 4.",
              "skill": "Powers and roots"
            },
            {
              "q": "The lookout runs a rope from the top of a 5-foot pole to a point 12 feet away on the ground. How long is the rope, in feet?",
              "answer": "13",
              "hint": "Right triangle: a² + b² = c². 5² + 12² = 25 + 144 = 169. The rope is the square root of that.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "Solve for x: 6x + 11 = 3x + 26",
              "answer": "5",
              "hint": "Take 3x off both sides to get 3x + 11 = 26, then take 11 off both sides and divide.",
              "skill": "Equations"
            },
            {
              "q": "The lookout writes the size of a big fire as 6 × 10^4 acres. Written out in full, what number is that?",
              "answer": "60000",
              "hint": "10^4 is 1 with 4 zeros after it: 10,000. Then × 6.",
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
            "If the last step asks for a bearing, give the bearing."
          ],
          "example": "'Type the bearing from the log' means a number from the log, not your arithmetic."
        },
        "skill": "Following directions",
        "steps": [
          "Write the time the smoke was seen: 6:40. Use the 40.",
          "Add the number of the strike that woke up: 6.",
          "Multiply by the number of acres the fire held at: 2.",
          "Subtract the number of firefighters on the crew: 20.",
          "Ignore steps 1 to 4. Type this tower's bearing to the fire, from paragraph 1."
        ],
        "prompt": "Your answer:",
        "answer": "160",
        "accept": [
          "one hundred sixty",
          "one hundred and sixty",
          "one hundred sixty."
        ],
        "hint": "Step 5 throws away the arithmetic. Paragraph 1 gives this tower's bearing to the fire, written in words. Type it in digits or words."
      }
    }
  ]
};
if (window.BASECAMP_MISSIONS && window.BASECAMP_MISSIONS.register) window.BASECAMP_MISSIONS.register(C);
else (window.BASECAMP_CAMPAIGNS_PENDING = window.BASECAMP_CAMPAIGNS_PENDING || []).push(C);
})();
