// ODYSSEY — campaign "ghosttrain". GENERATED, do not edit.
// Source of truth: content/missions-full.js. Rebuild with:  python3 tools/split-missions.py
// RULE: nothing in this file is about the person using it. Content only.
(function () {
var C = {
  "id": "ghosttrain",
  "ready": true,
  "kind": "shift",
  "readingLevel": {
    "fk": 5.6,
    "cl": 6.3
  },
  "grade": "5",
  "kindLabel": "Mystery",
  "form": "moth",
  "title": "Ghost Train",
  "subtitle": "A country branch line, after the last train",
  "pitch": "Five nights in a signal box on a line where a train keeps passing at 11:52 that no timetable lists. Bells, levers, lamps, a fog, and an old branch line that everybody forgot. Every clue is real, and the answer is in the log.",
  "scene": "assets/scene-ghosttrain.jpg",
  "progress": {
    "unit": "stations",
    "total": 5
  },
  "dayNoun": "Night",
  "stageNoun": "Station",
  "finalNoun": "The junction",
  "stages": [
    "Millbrook",
    "The Cutting",
    "Fern Halt",
    "The Tunnel",
    "The junction"
  ],
  "reconNoun": "Station Log",
  "legs": {
    "recon": "Station log",
    "nav": "Timetable math",
    "orders": "Signal orders",
    "debrief": "Signal box"
  },
  "fact": "Railways divided their lines into blocks and allowed only one train in a block at a time, signaled with bells and levers between boxes. It worked so well that most of it is still the rule, just done by computer.",
  "finale": {
    "prompt": "The mystery train is on the right track and the line is clear. Which color lamp goes in the signal box window tonight?",
    "options": [
      {
        "label": "Green",
        "color": "#4FD18B"
      },
      {
        "label": "Amber",
        "color": "#FFB454"
      },
      {
        "label": "White",
        "color": "#F4F8FF"
      },
      {
        "label": "Blue",
        "color": "#4FD1FF"
      }
    ],
    "done": "Hang it. Then write 11:52 in the timetable, where it belongs."
  },
  "patrols": [
    {
      "id": "ghosttrain-1",
      "title": "Millbrook Box",
      "recon": {
        "lesson": {
          "title": "Questions first, then the log",
          "points": [
            "Read the five questions before the log. Two want a detail, one wants a word, one wants a why, one wants what a paragraph is mostly about.",
            "Times in a railway log are exact. Write them down.",
            "The answer is always in the log. You never have to guess."
          ],
          "example": "Question: 'What time is the milk train?' Hunt for a clock time."
        },
        "title": "Station Log: Eleven Fifty-Two",
        "passage": [
          "Millbrook signal box is a wooden room on stilts beside the track. Along one wall is a row of twelve iron levers. Each one is as tall as a person and painted red, blue or black. Above them is a shelf of brass bell instruments. The levers move the signals and the points, the switches that send a train onto one track or another, and the bells talk to the next box up the line. The last train of the night, according to the timetable on the wall, passes Millbrook at 10:40. After that the line is closed until the milk train at 5:15.",
          "Except that at 11:52 last night, a train went by. The signalman on duty heard it before seeing it: the rails hummed, the box shook, and a single lamp swept the fog and was gone toward the junction, north. No bell had rung from the box to the south to say a train was coming. From the box to the north came a bell signal the Millbrook signalman did not know, instead of the one that says a train has arrived. The log from the last three weeks has the same entry seven times, in three different signalmen's handwriting: 11:52, unscheduled movement, northbound, not offered, not acknowledged.",
          "The railway runs on a simple rule. The line is cut into blocks, one between each pair of signal boxes. Only one train may be in a block at a time. Before a train enters a block the signalman behind it rings the box ahead and asks with a code of bell strokes whether the line is clear. The signalman pulls the signal off only when the answer comes back. A train that passes without a bell is a train that the system does not know about. That is not a ghost. That is a problem, and the new signalman intends to find where it starts."
        ],
        "questions": [
          {
            "q": "What time does the last scheduled train pass Millbrook?",
            "choices": [
              "11:52",
              "5:15",
              "Midnight",
              "10:40"
            ],
            "answer": 3,
            "hint": "Paragraph 1, the sentence with 'timetable on the wall'.",
            "skill": "Finding details"
          },
          {
            "q": "How many times has the 11:52 train appeared in the log?",
            "choices": [
              "Once",
              "Seven times",
              "Three",
              "Twenty-one times, once each night"
            ],
            "answer": 1,
            "hint": "The last sentence of paragraph 2.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 1, what are 'points'?",
            "choices": [
              "The switches that send a train onto one track or another",
              "The places where one block of line ends",
              "The signal lamps",
              "The row of twelve iron levers along the wall of the signal box"
            ],
            "answer": 0,
            "hint": "The sentence 'the points, the switches that send a train...'.",
            "skill": "Word meanings"
          },
          {
            "q": "Why does a train that passes without a bell worry the signalman?",
            "choices": [
              "Because the block system only works if every train is known, and an unknown train could meet another in a block",
              "Because every train must be written into the log book in the signalman's own handwriting before it is allowed to pass",
              "Because the timetable on the wall says that the line is closed after 10:40 until the milk train comes through at 5:15",
              "Because the bells to the north and to the south must both be rung before a signalman is allowed to pull any signal off"
            ],
            "answer": 0,
            "hint": "Paragraph 3, the rule and the last three sentences.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 3 mostly about?",
            "choices": [
              "The signal box on stilts",
              "The block rule: one train per block, agreed by bells",
              "The milk train",
              "The seven nights the mystery train went north through the fog"
            ],
            "answer": 1,
            "hint": "The first sentence of paragraph 3 says 'The railway runs on a simple rule', and the rest explains it.",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Timetable math",
          "points": [
            "Minutes between two clock times: count past the hour.",
            "Leftovers count: 30 cans at 8 a cart is 3 carts with 6 left, so it takes 4 carts.",
            "Nights it did not appear: all the nights minus the nights it did.",
            "Same bottom: add the tops. 1/10 + 6/10 = 7/10."
          ],
          "example": "9:35 to 10:50 is 75 minutes."
        },
        "problems": [
          {
            "q": "The last train passes at 10:40 and the mystery train at 11:52. How many minutes apart are they?",
            "answer": "72",
            "hint": "10:40 to 11:40 is 60, then 12 more.",
            "skill": "Multi-step problems"
          },
          {
            "q": "The milk train carries 100 cans, loaded 8 to a cart. How many carts does it take to carry all of them?",
            "answer": "13",
            "hint": "8 × 12 = 96, and 4 cans are still left. They need a cart too.",
            "skill": "Dividing"
          },
          {
            "q": "The train appeared 7 times in 3 weeks, which is 21 nights. On how many nights did it not appear?",
            "answer": "14",
            "hint": "21 − 7.",
            "skill": "Adding and subtracting"
          },
          {
            "q": "From the last train at 10:40 to the milk train at 5:15 is 6 hours 35 minutes. How many minutes is that?",
            "answer": "395",
            "hint": "6 × 60 = 360, plus 35.",
            "skill": "Multi-step problems"
          },
          {
            "q": "The signalman pulled 2/12 of the levers for the last train and 5/12 for the milk train. What fraction of the levers is that together? (write a fraction)",
            "answer": "7/12",
            "hint": "Same bottom. Add the tops.",
            "skill": "Fractions"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "Cover it in one sentence",
            "points": [
              "Read to the end, then say in one sentence of your own what the whole report was about. Do that before you look at a single choice.",
              "The wrong answers are usually true. They cover one paragraph, or they are wider than anything the report says, or they go against a line you have already read.",
              "Four more moves follow: prove a claim with one sentence, say what a paragraph is for, work a word out from its sentence, and hold two paragraphs together."
            ],
            "example": "Three paragraphs about a night ferry: the crossing, the sailing that was missed, the rule about the tide. 'The ferry leaves at nine' covers one paragraph. 'Ferries are useful' covers nothing. 'The tide, not the timetable, decides when the boat goes' covers all three."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea of the whole report?",
              "choices": [
                "The last train of the night passes Millbrook at 10:40.",
                "Old wooden signal boxes ought to be replaced with modern equipment.",
                "Three different signalmen wrote the same 11:52 entry in the log seven times and settled between them that the train going north in the fog is a ghost.",
                "A train that runs without a bell is not a ghost but a hole in the system that keeps trains apart, and the new signalman means to find it."
              ],
              "answer": 3,
              "hint": "The box, the sighting, the rule. The last paragraph says out loud what this is and what it is not; find the choice that says the same about the whole report.",
              "skill": "Central idea and evidence",
              "evidence": "That is not a ghost."
            },
            {
              "q": "Claim: the 11:52 movement is dangerous, not just strange. Which sentence from the report best supports that claim?",
              "choices": [
                "The signalman on duty heard it before seeing it: the rails hummed, the box shook, and a single lamp swept the fog and was gone toward the junction, north.",
                "A train that passes without a bell is a train that the system does not know about.",
                "Except that at 11:52 last night, a train went by.",
                "The railway runs on a simple rule."
              ],
              "answer": 1,
              "hint": "Three of these tell you what happened or how the box works. Only one says what a missing bell actually costs.",
              "skill": "Finding details",
              "evidence": "A train that passes without a bell is a train that the system does not know about."
            },
            {
              "q": "Why does the report keep the explanation of the block system until the last paragraph, after the mystery train?",
              "choices": [
                "To turn a strange sighting into a named problem, because only once you know the rule can you see what the train broke.",
                "To explain why the twelve levers standing along the wall of the box are painted red, blue and black, with a color for each kind of lever.",
                "To show that the line should have been closed for good years ago.",
                "To compare Millbrook box with the box to the north of it."
              ],
              "answer": 0,
              "hint": "Read the last two lines of the report. A paragraph that ends by naming the thing is doing that job for everything before it.",
              "skill": "Author's purpose and structure",
              "evidence": "A train that passes without a bell is a train that the system does not know about."
            },
            {
              "q": "The log entry ends 'not offered, not acknowledged'. What does offered mean as it is used here?",
              "choices": [
                "Rung ahead to the next box to ask whether the line is clear",
                "Put up for sale to another railway company that wants to run trains on the line",
                "Handed to a driver as a choice between two routes, to take whichever one suits",
                "Written into the timetable on the wall of the box along with the other night trains"
              ],
              "answer": 0,
              "hint": "The last paragraph describes the whole exchange between two boxes without once using the word. Match the word to the step it names.",
              "skill": "Word meanings",
              "evidence": "Before a train enters a block the signalman behind it rings the box ahead and asks with a code of bell strokes whether the line is clear. The signalman pulls the signal off only when the answer comes back."
            },
            {
              "q": "Paragraphs 1 and 2 together explain why the 11:52 movement stood out to every signalman who saw it. Why?",
              "choices": [
                "The train was traveling south toward the box that had not rung, when every other movement on this stretch of line goes north.",
                "The timetable says the line is closed after 10:40, so nothing at all should be moving until the milk train.",
                "The block rule allows one train in a block at a time.",
                "Three signalmen were on duty in the box at the same time."
              ],
              "answer": 1,
              "hint": "Paragraph one ends with two times. Paragraph two opens with a third. Set the times side by side.",
              "skill": "Reading between the lines",
              "evidence": "After that the line is closed until the milk train at 5:15."
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
              "q": "The signalman counted 9 levers yesterday and three times as many today. How many levers today?",
              "answer": "27",
              "hint": "Three times 9: 9 + 9 + 9.",
              "skill": "Multiplying"
            },
            {
              "q": "The signalman packs 54 lamp wicks into boxes of 9. How many boxes is that?",
              "answer": "6",
              "hint": "How many 9s make 54?",
              "skill": "Dividing"
            },
            {
              "q": "The signalman starts with 396 matches and uses 167. How many are left?",
              "answer": "229",
              "hint": "396 − 167.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "3/6 of the day's work was done yesterday. What fraction is still to do? (write a fraction)",
              "answer": "3/6",
              "hint": "The whole job is 6/6. Take 3/6 off it.",
              "skill": "Fractions"
            },
            {
              "q": "A square lever mat is 6 squares on each side. How many squares is that?",
              "answer": "36",
              "hint": "6 rows of 6.",
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
            "example": "4 × (9 − 2) + 5: parentheses first, 9 − 2 = 7; then 4 × 7 = 28; then add 5 to get 33."
          },
          "problems": [
            {
              "q": "A regular block takes 1.5 minutes. A long one takes 1.6 times as long. How many minutes does the long one take?",
              "answer": "2.4",
              "hint": "Multiply 15 × 16 without the points, then put back 2 decimal places.",
              "skill": "Decimals"
            },
            {
              "q": "20 of the 40 bells are set aside. What percent is that? (write just the number)",
              "answer": "50",
              "accept": [
                "50%"
              ],
              "hint": "20 out of 40, then out of 100.",
              "skill": "Ratios and percent"
            },
            {
              "q": "For every 1 lever there are 3 bells. There are 21 bells. How many levers?",
              "answer": "7",
              "hint": "21 ÷ 3 = 7 groups. Each group has 1 lever.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The signalman works out 8 + 4 × 11. What is it?",
              "answer": "52",
              "hint": "Multiply before you add.",
              "skill": "Order of operations"
            },
            {
              "q": "On a winter day the thermometer read 2 degrees at dawn. By dark it had fallen to −11 degrees. By how many degrees did it fall?",
              "answer": "13",
              "hint": "From 2 down to 0 is 2, then 11 more.",
              "skill": "Negative numbers"
            }
          ]
        },
        "7": {
          "lesson": {
            "title": "Grade 7 numbers",
            "points": [
              "A rate times a count: if one job takes 1.75 hours, 8 jobs take 8 × 1.75 = 14 hours.",
              "Percent change: the change ÷ the starting number, then × 100.",
              "Below zero, going up adds and going down subtracts. Walk the number line one step at a time.",
              "A two-step equation: get the x part on its own first, then undo the multiplying."
            ],
            "example": "50 − 4x = 14, so 4x = 50 − 14 = 36, so x = 9."
          },
          "problems": [
            {
              "q": "One block needs 1.5 minutes. How many minutes do 20 blocks need?",
              "answer": "30",
              "hint": "20 × 1.5.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The signalman counted 200 bells on the first pass and 240 on the second. By what percent did the count change? (write just the number)",
              "answer": "20",
              "accept": [
                "20%"
              ],
              "hint": "The change is 40. 40 out of 200, then out of 100.",
              "skill": "Ratios and percent"
            },
            {
              "q": "On a winter day the thermometer read −6 degrees at dawn and −17 degrees at dark. How many degrees did it fall?",
              "answer": "11",
              "hint": "From −6 down to −17.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: 82 − 8x = 26",
              "answer": "7",
              "hint": "Move 8x to the right and 26 to the left: 8x = 56.",
              "skill": "Equations"
            },
            {
              "q": "On the plan, 1 inch stands for 20 feet. The siding is really 220 feet long. How many inches is it on the plan?",
              "answer": "11",
              "hint": "220 ÷ 20.",
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
            "example": "Start with 40 and use 6 an hour: after 3 hours, 40 − 6 × 3 = 22 are left."
          },
          "problems": [
            {
              "q": "The signal box stove has 36 lumps of coal and burns 4 every hour. How many are left after 7 hours?",
              "answer": "8",
              "hint": "4 × 7 = 28 used, taken off 36.",
              "skill": "Linear relationships"
            },
            {
              "q": "A cube is 9 small cubes along every edge. How many small cubes make it up?",
              "answer": "729",
              "hint": "9³ means 9 × 9 × 9.",
              "skill": "Powers and roots"
            },
            {
              "q": "A 17-foot rope runs from the top of a mast to a point 15 feet away on the ground. How tall is the mast, in feet?",
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
              "q": "The quarry has sent 800,000 tons of stone down the line. Written as 8 × 10 to a power, what is the power?",
              "answer": "5",
              "hint": "Count the zeros after 8.",
              "skill": "Powers and roots"
            }
          ]
        }
      },
      "orders": {
        "lesson": {
          "title": "Read all of it first",
          "points": [
            "Read every step before pulling the first lever.",
            "The last step often changes everything."
          ],
          "example": "'Start at 20. Add 9. Ignore that, and add 2 instead.' You end on 22, not 29."
        },
        "skill": "Following directions",
        "steps": [
          "Write the number of iron levers along the wall of the box: 12.",
          "Multiply by the number of signalmen whose handwriting is in the log: 3.",
          "Add the times the mystery train has been seen: 7.",
          "Ignore step 3. Those seven entries are all one train, so add 1 instead of 7.",
          "Type the total the box is left with."
        ],
        "prompt": "Your answer:",
        "answer": "37",
        "hint": "Step 4 cancels the seven. Return to the total you had after step 2 and put a single train on it."
      }
    },
    {
      "id": "ghosttrain-2",
      "title": "The Cutting",
      "recon": {
        "lesson": {
          "title": "Evidence on the ground",
          "points": [
            "When the log describes what the signalman found, each find is a detail.",
            "'How can you tell' questions want the test the log describes.",
            "A word about the line is defined by its description."
          ],
          "example": "'Fresh grease on the rail head.' What does it prove? Something ran on it."
        },
        "title": "Station Log: Shiny Rails",
        "passage": [
          "South of Millbrook the line runs through a cutting, a deep trench blasted through a hill so that the track can stay level. The rock walls are forty feet high on both sides, with a strip of sky above. Nothing grows on the rails in a cutting, because the trains polish them. On a line where trains run, the tops of the rails shine like silver. On a line where they do not, the rails go brown with rust in a week. The signalman walks the cutting at noon with the log and a flashlight, looking down.",
          "The main line rails shine, as they should. But halfway through the cutting, on the east side, a second pair of rails leaves the main line at a set of points. They curve away into a side tunnel, low and bricked, that the signalman has never seen on any map in the box. The old maps in the drawer show it: a branch line, closed forty years ago, that ran from here to a quarry in the hills. It should be rusted solid. The rails into the tunnel shine.",
          "The points that join the branch to the main line are not connected to any lever in Millbrook box. They are hand points, thrown by a weighted lever beside the track, and the weight is fresh with grease, and the lever is set for the branch. Something has been running out of that tunnel onto the main line and north to the junction, at 11:52, seven times in three weeks. The block system has never known, because the branch joins the main line in the middle of a block, between two boxes, where no bell would ever ring. The signalman photographs the points and writes: found the door."
        ],
        "questions": [
          {
            "q": "How can you tell whether trains run on a line?",
            "choices": [
              "By the timetable",
              "By the grease on the points beside the track",
              "The rails shine if trains run on them and rust if they do not",
              "By asking the signalman"
            ],
            "answer": 2,
            "hint": "Paragraph 1, the sentences about shining and rust.",
            "skill": "Finding details"
          },
          {
            "q": "Where did the branch line go, according to the old maps?",
            "choices": [
              "To a quarry in the hills",
              "To the sea, by way of the cutting",
              "To the junction yard, one block north",
              "To Millbrook box, along the main line"
            ],
            "answer": 0,
            "hint": "Paragraph 2, the sentence with 'old maps in the drawer'.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 1, what is a 'cutting'?",
            "choices": [
              "Where a second pair of rails leaves the main line",
              "A deep trench dug through a hill so the track can stay level",
              "A tunnel",
              "A low tunnel of brick bored through a hill to carry a branch line"
            ],
            "answer": 1,
            "hint": "The first sentence of paragraph 1.",
            "skill": "Word meanings"
          },
          {
            "q": "Why has the block system never noticed the mystery train?",
            "choices": [
              "Because the branch joins the main line in the middle of a block, between two boxes, where no bell rings",
              "Because the bells are broken",
              "Because the branch line was closed forty years ago",
              "Because a train that runs in fog cannot be seen from the signal box, and the signalmen only log what they can see"
            ],
            "answer": 0,
            "hint": "Paragraph 3, the sentence with 'in the middle of a block'.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 2 mostly about?",
            "choices": [
              "How the greased hand points beside the track are set for the branch",
              "The quarry in the hills that the branch line once ran to, and why it closed",
              "Walking the cutting at noon with the log and a flashlight, looking down",
              "Finding the hidden branch line and seeing that its rails shine"
            ],
            "answer": 3,
            "hint": "Paragraph 2 finds the second pair of rails and the tunnel and ends on the shine.",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Cutting math",
          "points": [
            "Years since the branch closed: subtract.",
            "How much higher: the taller height minus the shorter one.",
            "Volume of a box: length × width × height. 3 × 3 × 2 = 18 cubic feet.",
            "Two-step: rails per track (2) times tracks."
          ],
          "example": "A line closed 25 years ago, counted from 2026, closed in 2026 − 25 = 2001."
        },
        "problems": [
          {
            "q": "The branch line closed 40 years ago. If this year is 2026, what year did it close?",
            "answer": "1986",
            "hint": "2026 − 40.",
            "skill": "Adding and subtracting"
          },
          {
            "q": "The cutting walls are 40 feet high. The signal box stands 12 feet above the track. How many feet higher are the walls than the box floor?",
            "answer": "28",
            "hint": "40 − 12.",
            "skill": "Adding and subtracting"
          },
          {
            "q": "The signal box's coal bin is 5 feet long, 4 feet wide and 3 feet tall. How many cubic feet of coal does it hold?",
            "answer": "60",
            "hint": "Length × width × height: 5 × 4 first, then times 3.",
            "skill": "Volume"
          },
          {
            "q": "Each track has 2 rails. In the cutting there are 2 tracks, the main line and the branch. How many rails is that?",
            "answer": "4",
            "hint": "2 × 2.",
            "skill": "Multiplying"
          },
          {
            "q": "The branch ran 6 miles to the quarry. A mile is 5,280 feet. How many feet is 6 miles?",
            "answer": "31680",
            "accept": [
              "31,680"
            ],
            "hint": "5,280 × 6.",
            "skill": "Multiplying"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "Find the line that settles it",
            "points": [
              "You are hunting for proof, not for matching words. A sentence can sit right beside the answer and still prove nothing.",
              "Say the claim, then read your pick straight after it. If someone could still shrug, keep looking.",
              "All four choices are real sentences from the report, so true is where every one of them starts."
            ],
            "example": "Claim: somebody has been in this room. 'The room has one window' is true and useless. 'There are footprints in the dust and none of them are yours' settles it."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea that develops across the whole report?",
              "choices": [
                "On a line where trains do not run, the rails go brown with rust in a week.",
                "Old railway maps are more accurate than the ones drawn today.",
                "Rails that should have rusted are shining, and following them leads to a forgotten branch that joins the main line where no bell would ever ring.",
                "The points that join the branch are worked from a lever in Millbrook box."
              ],
              "answer": 2,
              "hint": "How to read a rail, what the side tunnel looks like, what the greased lever means. One choice is the rule from the first paragraph on its own, and one is the opposite of a line in the last.",
              "skill": "Central idea and evidence",
              "evidence": "The signalman photographs the points and writes: found the door."
            },
            {
              "q": "Claim: somebody has been using the branch line recently. Which sentence from the report best supports that claim?",
              "choices": [
                "They are hand points, thrown by a weighted lever beside the track, and the weight is fresh with grease, and the lever is set for the branch.",
                "The block system has never known, because the branch joins the main line in the middle of a block, between two boxes, where no bell would ever ring.",
                "They curve away into a side tunnel, low and bricked, that the signalman has never seen on any map in the box.",
                "Nothing grows on the rails in a cutting, because the trains polish them."
              ],
              "answer": 0,
              "hint": "Recently is the word to hold on to. Look for the sentence that describes something a person did to the track and left behind.",
              "skill": "Finding details",
              "evidence": "They are hand points, thrown by a weighted lever beside the track, and the weight is fresh with grease, and the lever is set for the branch."
            },
            {
              "q": "How is the first paragraph organized?",
              "choices": [
                "It gives the steps of walking a cutting in the order they happen, from picking up the log and the flashlight to reaching the far end.",
                "It sets a line that carries trains against a line that does not, so a rail can be read by looking at it.",
                "It explains what caused the cutting to be blasted through the hill.",
                "It states a problem and then gives the signalman's solution to it."
              ],
              "answer": 1,
              "hint": "Two sentences in a row start almost the same way and end opposite. That pairing is the shape of the paragraph.",
              "skill": "Author's purpose and structure",
              "evidence": "On a line where trains run, the tops of the rails shine like silver."
            },
            {
              "q": "The signalman writes 'found the door'. What does door mean as it is used here?",
              "choices": [
                "The way something has been getting onto the main line unseen",
                "A wooden door standing across the bricked mouth of the side tunnel",
                "The entrance to the signal box itself",
                "A gap in the fence along the top of the cutting"
              ],
              "answer": 0,
              "hint": "Nothing here has hinges. Ask what the signalman set out looking for, and what the two sentences just before this one say has now been found.",
              "skill": "Word meanings",
              "evidence": "Something has been running out of that tunnel onto the main line and north to the junction, at 11:52, seven times in three weeks. The block system has never known, because the branch joins the main line in the middle of a block, between two boxes, where no bell would ever ring."
            },
            {
              "q": "Paragraphs 1 and 2 together show that the branch is in use. What is the evidence?",
              "choices": [
                "The old maps in the drawer still list the branch as an open line that trains are allowed to run on at night.",
                "The tunnel is low and bricked, which keeps the weather off the rails inside it so they never had a chance to rust.",
                "Nothing at all grows on the rails inside a cutting, because the trains that pass through keep polishing them.",
                "Rails go brown within a week when nothing runs on them, and these rails shine like the main line."
              ],
              "answer": 3,
              "hint": "Paragraph one gives you a test you can do with your eyes. Paragraph two gives you what the eyes saw. Put the test and the result together.",
              "skill": "Reading between the lines",
              "evidence": "The rails into the tunnel shine."
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
              "q": "The signalman lines up lanterns in 2 rows of 7. How many lanterns is that?",
              "answer": "14",
              "hint": "2 × 7.",
              "skill": "Multiplying"
            },
            {
              "q": "56 miles of track are split into 8 equal sections. How many miles are in each section?",
              "answer": "7",
              "hint": "56 split into 8 equal parts.",
              "skill": "Dividing"
            },
            {
              "q": "The log shows 121 rails, then 42 more are added and 31 are taken off. What does the log show now?",
              "answer": "132",
              "hint": "Add 121 and 42 first, then take 31 off.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "Add: 4/6 + 1/6 (write a fraction)",
              "answer": "5/6",
              "hint": "Same bottom. 4 + 1 on top.",
              "skill": "Fractions"
            },
            {
              "q": "The plan calls for 700 rails. 507 are done and 31 more are under way. How many are still untouched?",
              "answer": "162",
              "hint": "Take 507 off 700, then take 31 off that.",
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
              "q": "The signalman has 3 3/4 gallons of lamp oil. Each signal lamp holds 5/8 of a gallon. How many lamps can the signalman fill?",
              "answer": "6",
              "hint": "Make 3 3/4 an improper fraction, 15/4. Then multiply by the flip of 5/8: 15/4 × 8/5.",
              "skill": "Fractions"
            },
            {
              "q": "20% of the rails counted is 24. How many were counted in all?",
              "answer": "120",
              "hint": "24 is 20 hundredths of the whole: 24 ÷ 20 × 100.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The signalman counts 27 red lamps and 36 green lamps. In its simplest form, what is the ratio of red lamps to green lamps? (write it like 2:3)",
              "answer": "3:4",
              "accept": [
                "3 to 4"
              ],
              "hint": "Divide both by 9.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The signalman works out (6 + 3) × 11. What is it?",
              "answer": "99",
              "hint": "Parentheses first, then multiply.",
              "skill": "Order of operations"
            },
            {
              "q": "One winter night it was −12 degrees at midnight and rose 3 degrees by dawn. What does the thermometer read at dawn?",
              "answer": "-9",
              "accept": [
                "−9"
              ],
              "hint": "Start at −12 and count 3 steps up.",
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
            "example": "6(x + 13) = 96, so x + 13 = 16, so x = 3."
          },
          "problems": [
            {
              "q": "The signalman has 10 minutes to spend and each block takes 1.25. How many blocks is that enough for?",
              "answer": "8",
              "hint": "10 ÷ 1.25.",
              "skill": "Ratios and percent"
            },
            {
              "q": "A count of rails fell by 20% to 160. What was it before?",
              "answer": "200",
              "hint": "160 is 80% of the old count.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The thermometer falls 2 degrees every hour for 16 hours. What is the total change? (Write a fall as a negative number.)",
              "answer": "-32",
              "accept": [
                "−32"
              ],
              "hint": "16 hours of −2 each: 16 × (−2). One minus sign, so the answer is negative.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: (x + 29) × 4 = 160",
              "answer": "11",
              "hint": "Divide both sides by 4 first, then take 29 off.",
              "skill": "Equations"
            },
            {
              "q": "A round plate has a radius of 5 centimeters. Using 3.14 for pi, what is its area in square centimeters?",
              "answer": "78.5",
              "hint": "Area = 3.14 × radius × radius: 3.14 × 5 × 5.",
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
              "Collect the x's first: 11x − 9x is 2x. Then undo the plain number."
            ],
            "example": "y = 2x + 9 when x = 6: 2 × 6 + 9 = 21."
          },
          "problems": [
            {
              "q": "The count of rails follows the rule y = 8x + 12, where x is the hour. What is y when x = 5?",
              "answer": "52",
              "hint": "Put 5 in for x: 8 × 5 + 12.",
              "skill": "Linear relationships"
            },
            {
              "q": "A cube has a volume of 343 cubic feet. How long is one edge, in feet?",
              "answer": "7",
              "hint": "What number times itself twice over makes 343?",
              "skill": "Powers and roots"
            },
            {
              "q": "A 25-foot rope reaches the top of a 7-foot mast. How far is the foot of the rope from the base, in feet?",
              "answer": "24",
              "hint": "b² = c² − a² = 625 − 49 = 576. Then take the square root.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "Solve for x: 8x + 6 − 5x = 30",
              "answer": "8",
              "hint": "Collect the x's first: 3x + 6 = 30.",
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
          "title": "Count the letters",
          "points": [
            "Write the word out and count on paper.",
            "Then follow the arithmetic exactly."
          ],
          "example": "R-A-I-L is four letters."
        },
        "skill": "Following directions",
        "steps": [
          "Write the word QUARRY.",
          "Count its letters.",
          "Multiply by the number of times the train has come out of the tunnel: 7.",
          "Subtract the height of the cutting walls in feet: 40.",
          "The train register writes a pair of numbers with a dash between them. Type your step 2 number, then a dash, then your step 4 number."
        ],
        "prompt": "Your answer:",
        "answer": "6-2",
        "accept": [
          "6 - 2",
          "6 -2",
          "6- 2",
          "six-two",
          "SIX-TWO",
          "six two",
          "6-2."
        ],
        "hint": "QUARRY has six letters. Step 5 does not want one number; it wants two of them, joined the way the register joins them."
      }
    },
    {
      "id": "ghosttrain-3",
      "title": "Fern Halt",
      "recon": {
        "lesson": {
          "title": "A code in the log",
          "points": [
            "When the log gives a code, the code is a detail. Copy it exactly.",
            "'What does the code mean' wants the log's own translation.",
            "Names of places on the line are details."
          ],
          "example": "'Three strokes then one: is line clear for a passenger train.' What does 3-1 mean? Line clear, passenger."
        },
        "title": "Station Log: Bell Codes",
        "passage": [
          "The bells between the signal boxes on this line speak the line's own code. One stroke means: attention. Two strokes: train entering block. Two, then one: train out of block. Three, then one: is the line clear for a passenger train? Four: is the line clear for a goods train, which Americans call a freight train? Each box answers by repeating the code back, and every stroke goes in the train register with the time. The register at Millbrook shows the seven nights the mystery train passed. On each of them the box to the north, Fern Halt, sent back a code the Millbrook signalmen did not recognize and wrote down as a question mark: six strokes, a pause, then two.",
          "The signalman looks it up in the oldest rule book in the drawer, the one from when the quarry branch was open. Six-two is not in the line's modern code. It is in the old one: six strokes then two meant 'engine and brake van from the branch, running to the junction, do not offer', a code invented for the quarry's own little train. That train ran on the main line for a few miles each night after the last passenger train, to bring the day's stone up to the junction yard. Fern Halt was the only box that ever needed it. Somebody at Fern Halt still knows it.",
          "The signalman rings Fern Halt at nine, one stroke, attention, and gets one back. Then, slowly, six and two. There is a long pause. Then Fern Halt sends six and two back, correctly, and a moment later a different code, one the signalman knows: five strokes, then five, then five. In the line's modern book that means: signalman wishes to speak. The telephone on the wall rings. Fern Halt says: I wondered when someone would ask."
        ],
        "questions": [
          {
            "q": "What does two strokes on the bell mean?",
            "choices": [
              "Train entering block",
              "Attention",
              "Train out of block, sent as two strokes then one",
              "Is the line clear for a passenger train?"
            ],
            "answer": 0,
            "hint": "Paragraph 1, the second and third sentences.",
            "skill": "Finding details"
          },
          {
            "q": "What did six strokes then two mean in the old rule book?",
            "choices": [
              "The line ahead is blocked by fallen stone from the quarry, stop all trains at once",
              "Fog on the line",
              "The signalman at Fern Halt wishes to speak on the telephone about the quarry branch",
              "Engine and brake van from the branch, running to the junction, do not offer"
            ],
            "answer": 3,
            "hint": "Paragraph 2, the sentence with 'six strokes then two meant'.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 1, what is the 'train register'?",
            "choices": [
              "The list of bell codes and what each of them means",
              "A list of passengers",
              "The oldest rule book in the drawer, from the days when the branch was open",
              "The book where every bell stroke is written down with the time"
            ],
            "answer": 3,
            "hint": "The sentence 'every stroke goes in the train register with the time'.",
            "skill": "Word meanings"
          },
          {
            "q": "Why did the Millbrook signalmen write a question mark instead of a code?",
            "choices": [
              "Because six-two is not in the modern code book, so they did not recognize it",
              "Because Fern Halt sent the code wrongly and the strokes arrived in the wrong order",
              "Because the old rule book had been lost from the drawer",
              "Because the register only has room for the time and the number of strokes, not the meaning"
            ],
            "answer": 0,
            "hint": "The last sentence of paragraph 1 and the first two of paragraph 2.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 3 mostly about?",
            "choices": [
              "The telephone",
              "How many strokes make attention",
              "Looking the strange code up in the oldest rule book in the station drawer",
              "The signalman using the old code to make contact with Fern Halt"
            ],
            "answer": 3,
            "hint": "Paragraph 3 is the exchange of bell codes and the phone call that follows.",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Bell math",
          "points": [
            "Strokes in a code: add them.",
            "A decimal times a whole number: 3 × 0.45 is 0.45 + 0.45 + 0.45 = 1.35.",
            "Repeating back doubles the strokes.",
            "Same bottom: add the tops. 1/5 + 3/5 = 4/5."
          ],
          "example": "Three then one is 4 strokes; repeated back, 8."
        },
        "problems": [
          {
            "q": "The code six-then-two is 8 strokes. Fern Halt repeats it back. How many strokes is that in all?",
            "answer": "16",
            "hint": "8 × 2.",
            "skill": "Multiplying"
          },
          {
            "q": "'Signalman wishes to speak' is five, five, five. How many strokes is that?",
            "answer": "15",
            "hint": "5 × 3.",
            "skill": "Multiplying"
          },
          {
            "q": "The signal lamp burns 0.35 pint of oil each night. How many pints does it burn in 5 nights? (write a decimal)",
            "answer": "1.75",
            "hint": "Five 0.35s: 0.35 + 0.35 + 0.35 + 0.35 + 0.35, or 35 × 5 hundredths.",
            "skill": "Decimals"
          },
          {
            "q": "The old rule book is from 1986 and the modern one is from 2016. How many years apart are they?",
            "answer": "30",
            "hint": "2016 − 1986.",
            "skill": "Adding and subtracting"
          },
          {
            "q": "The signalman spent 3/8 of the evening in the rule book and 3/8 on the phone. What fraction of the evening is that? (write a fraction)",
            "answer": "6/8",
            "accept": [
              "3/4"
            ],
            "hint": "Same bottom. Add the tops.",
            "skill": "Fractions"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "Set-up, then payoff",
            "points": [
              "Ask what each paragraph is for: setting up a system, giving a cause, comparing two things, walking an order, or naming a problem and its answer.",
              "A paragraph that teaches you a rule is often there so that the next paragraph can break it in front of you.",
              "Delete it in your head. If the paragraph after it stops making sense, you have found the job."
            ],
            "example": "A report on a card game spends two paragraphs on the rules and then shows one hand. The rules are not the point. They are there so that one hand can be astonishing."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea of the whole report?",
              "choices": [
                "A code nobody at Millbrook recognized had been in an old rule book all along, and asking about it put a voice on the telephone.",
                "Two strokes on the bell mean that a train is entering the block.",
                "Bell codes are the oldest form of signaling anywhere in the world, and every railway that has ever run a train has depended on them.",
                "Six strokes then two is a code from the modern rule book, which is how the Millbrook signalmen were able to write it straight into the register."
              ],
              "answer": 0,
              "hint": "The code list, the old book, the phone call. One choice is a single line from the list, and one changes a word in the middle paragraph and becomes false.",
              "skill": "Central idea and evidence",
              "evidence": "Somebody at Fern Halt still knows it."
            },
            {
              "q": "Claim: the strange code was written for one particular train. Which sentence from the report best supports that claim?",
              "choices": [
                "On each of them the box to the north, Fern Halt, sent back a code the Millbrook signalmen did not recognize and wrote down as a question mark: six strokes, a pause, then two.",
                "The signalman looks it up in the oldest rule book in the drawer, the one from when the quarry branch was open.",
                "Six-two is not in the line's modern code.",
                "It is in the old one: six strokes then two meant 'engine and brake van from the branch, running to the junction, do not offer', a code invented for the quarry's own little train."
              ],
              "answer": 3,
              "hint": "The claim says the code was made for one train. Find the sentence that says what the code meant and who it was invented for.",
              "skill": "Finding details",
              "evidence": "It is in the old one: six strokes then two meant 'engine and brake van from the branch, running to the junction, do not offer', a code invented for the quarry's own little train."
            },
            {
              "q": "Why does the report list the ordinary bell codes before it gets to the strange one?",
              "choices": [
                "To show that the Millbrook signalmen had been careless with the register.",
                "To explain how a train register is filled in at the end of each night.",
                "To compare the code for a passenger train, three strokes and then one, with the code for a goods train, which is four strokes.",
                "To hand the reader the system first, so a code that is not on the list stands out the moment it appears."
              ],
              "answer": 3,
              "hint": "Cover the list and read the last sentence of the paragraph again. Would the question mark mean anything to you? That is what the list was for.",
              "skill": "Author's purpose and structure",
              "evidence": "The bells between the signal boxes on this line speak the line's own code."
            },
            {
              "q": "The old six-two code ends with the words 'do not offer'. What does that instruction mean here?",
              "choices": [
                "Do not ring the other box with the usual question about whether the line is clear.",
                "Do not let this train onto the main line at all until the branch behind it has been closed for the night.",
                "Do not write this train down in the register with the time, the way every other stroke of the bell is written down.",
                "Do not answer the bell when the other box rings."
              ],
              "answer": 0,
              "hint": "The first paragraph shows you what most of the codes are doing: asking a question and getting it repeated back. This instruction cancels one of those.",
              "skill": "Word meanings",
              "evidence": "Three, then one: is the line clear for a passenger train?"
            },
            {
              "q": "Paragraphs 1 and 3 together explain why the telephone rang after the signalman sent those bells. What did those bells achieve?",
              "choices": [
                "The bells warned Fern Halt that a train was about to enter the block and that the line north of Millbrook would have to be kept clear for it until it arrived.",
                "The bells told Fern Halt that the line was closed for the night.",
                "The telephone rings by itself whenever a code is repeated back.",
                "Sending six and two showed Fern Halt that Millbrook had finally worked the old code out, and Fern Halt answered with the code for wanting to talk."
              ],
              "answer": 3,
              "hint": "Paragraph one tells you that a box answers by repeating a code back. The last paragraph tells you which code came next and what it means. Hold the two together.",
              "skill": "Reading between the lines",
              "evidence": "In the line's modern book that means: signalman wishes to speak."
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
              "q": "Every message needs 7 strokes, and there are 9 messages. How many strokes is that?",
              "answer": "63",
              "hint": "9 groups of 7, so 9 × 7.",
              "skill": "Multiplying"
            },
            {
              "q": "The signalman splits 62 strokes in half. How many strokes is one half?",
              "answer": "31",
              "hint": "Half of 62.",
              "skill": "Dividing"
            },
            {
              "q": "The signalman must copy 800 codes into the book and has copied 324. How many more are needed?",
              "answer": "476",
              "hint": "800 − 324.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "The day's work is cut into 8 equal parts and the signalman has finished 6 of them. What fraction is done? (write a fraction)",
              "answer": "6/8",
              "hint": "6 parts out of 8.",
              "skill": "Fractions"
            },
            {
              "q": "A floor is 7 squares wide and 3 squares long. The signalman has covered 7 squares. How many squares are left to cover?",
              "answer": "14",
              "hint": "7 × 3 squares in all, then take 7 off.",
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
              "q": "The signalman has 27.5 minutes between signals. Each block takes 2.75 minutes. How many blocks is that enough for?",
              "answer": "10",
              "hint": "Move both points 2 places to the right: 2750 ÷ 275.",
              "skill": "Decimals"
            },
            {
              "q": "Of 240 codes, 25% are struck off the list. How many are left on it?",
              "answer": "180",
              "hint": "25% of 240 is 60. Take that off 240.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The signalman shares 16 lamps between two teams in the ratio 3 to 5. How many does the smaller share get?",
              "answer": "6",
              "hint": "3 + 5 = 8 parts. 16 ÷ 8 = 2 for one part.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The signalman works out 5 × 11 − 1 × 2. What is it?",
              "answer": "53",
              "hint": "Do both multiplications first, then subtract.",
              "skill": "Order of operations"
            },
            {
              "q": "In one winter week the coldest reading was −22 degrees and the warmest was −11 degrees. How many degrees apart are they?",
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
              "Find the rate for one first: 8 jobs in 14 hours is 14 ÷ 8 = 1.75 hours each, so 12 jobs take 21 hours.",
              "Percent of a number: turn the percent into a fraction of 100, then multiply.",
              "Below zero, going up adds and going down subtracts. Walk the number line one step at a time.",
              "With parentheses, undo the outside first: divide both sides, then take off the number inside."
            ],
            "example": "3(x + 7) = 33, so x + 7 = 11, so x = 4."
          },
          "problems": [
            {
              "q": "20 blocks took 30 minutes. At the same rate, how many minutes would 24 blocks take?",
              "answer": "36",
              "hint": "One block takes 30 ÷ 20 = 1.5. Then × 24.",
              "skill": "Ratios and percent"
            },
            {
              "q": "10% of the 160 codes were added. How many codes was that?",
              "answer": "16",
              "hint": "10% of 160: 10/100 × 160.",
              "skill": "Ratios and percent"
            },
            {
              "q": "On a winter day the low was −15 degrees and the high was 25 degrees. How many degrees apart are they?",
              "answer": "40",
              "hint": "15 below zero plus 25 above zero.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: 8(x + 22) = 208",
              "answer": "4",
              "hint": "Divide both sides by 8 to get x + 22 = 26.",
              "skill": "Equations"
            },
            {
              "q": "On the plan, 8 inches stand for 40 feet. How many feet does 1 inch stand for?",
              "answer": "5",
              "hint": "40 ÷ 8.",
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
              "Collect the x's first: 6x − 2x is 4x, and an x on its own means 1x."
            ],
            "example": "2, 11, 20, … adds 9 each step. The 4th number is 3 steps on: 2 + 3 × 9 = 29."
          },
          "problems": [
            {
              "q": "The count of codes goes 20, 26, 32, 38, and on. What is the 13th number in the list?",
              "answer": "92",
              "hint": "It starts at 20 and adds 6 each step. The number you want is 12 steps on from 20.",
              "skill": "Linear relationships"
            },
            {
              "q": "What is (9 × 6)²?",
              "answer": "2916",
              "hint": "9 × 6 = 54 first, then square it.",
              "skill": "Powers and roots"
            },
            {
              "q": "A right triangle has short sides of 5 and 12 feet. How long is its longest side, in feet?",
              "answer": "13",
              "hint": "5² + 12² = 169. The longest side is the square root of that.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "Solve for x: 3x − x = 20",
              "answer": "10",
              "hint": "x is the same as 1x, so 3 − 1 = 2, so 2x = 20.",
              "skill": "Equations"
            },
            {
              "q": "Which is bigger, 6 × 10^3 or 7 × 10^2? Write the bigger one out in full.",
              "answer": "6000",
              "hint": "6 × 10^3 is ten times 6 × 10^2, and 7 is not ten times 6.",
              "skill": "Powers and roots"
            }
          ]
        }
      },
      "orders": {
        "lesson": {
          "title": "Codes are counts",
          "points": [
            "A bell code is a list of numbers. Add them when the orders say to.",
            "Then do the rest in order."
          ],
          "example": "Three-then-two is 5 strokes."
        },
        "skill": "Following directions",
        "steps": [
          "Add the strokes in 'is the line clear for a passenger train': three, then one.",
          "Multiply by the strokes in 'is the line clear for a goods train': 4.",
          "Now the old code. Add its two numbers together: six, then two.",
          "Multiply that by the strokes in 'train out of block', two then one, added together.",
          "The old quarry code does not belong in the modern register. Type the number from step 2, not the number from step 4."
        ],
        "prompt": "Your answer:",
        "answer": "16",
        "hint": "Both halves are real work, but only one belongs in the modern register. Step 5 says which step that number came from."
      }
    },
    {
      "id": "ghosttrain-4",
      "title": "The Tunnel",
      "recon": {
        "lesson": {
          "title": "The whole explanation",
          "points": [
            "When someone in the log explains everything, the questions want the facts of that explanation: who, what, why.",
            "Numbers about the quarry are details.",
            "'Why did nobody tell Millbrook' wants the reason given."
          ],
          "example": "'The quarry reopened in the spring.' When? Spring."
        },
        "title": "Station Log: I Wondered When Someone Would Ask",
        "passage": [
          "The Fern Halt signalman has worked the box for thirty-one years and tells it plainly. The quarry reopened in the spring. A new company bought it to cut stone for a bridge. The cheapest way to move stone is the way it always moved: a small engine, six wagons and a brake van. On about one night in three, when the wagons are full, the train comes out of the tunnel after the last train of the night. It runs up the main line past Millbrook to the junction yard. The company got permission from the railway's head office. Head office told Fern Halt, because Fern Halt controls the junction end. Nobody told Millbrook.",
          "The reason is an old one. Under the quarry's original agreement the branch train was 'not to be offered', which meant nobody had to ring Millbrook about it, because it ran on a closed line after the last train. All Millbrook had to do was pull its signal off and let it go by. Fern Halt rang six-two down the line to say it was coming, and forty years ago every signalman at Millbrook knew what that meant. Except that nobody at Millbrook knows it now, and nobody thought to tell them. So the quarry train comes up past Millbrook's box at 11:52 on its way to the junction with the stone, and finds a red lamp and a signalman who has no idea what it is. The driver has a letter from head office that says to run past Millbrook's red signal, so she does. Fern Halt rang six-two to Millbrook on every run, out of habit. Millbrook wrote a question mark.",
          "It was never a ghost. It was a schedule, an old code, a branch line that the new maps forgot, and a rule that said do not offer. It was also a danger. A red signal means stop, and a letter is not a bell. The two signalmen agree on the fix over the phone: the quarry train goes in the working timetable, and the six-two code goes on a card above Millbrook's bells with its meaning written out. Tomorrow night the signalman at Millbrook will pull the signal off for it, properly, with a bell. That will be the first time in forty years."
        ],
        "questions": [
          {
            "q": "Why did the quarry reopen?",
            "choices": [
              "A new company bought it to cut stone for a bridge",
              "Because moving stone by rail is cheaper than moving it by road",
              "Because head office gave the company permission to use the line",
              "Because the branch line was still there"
            ],
            "answer": 0,
            "hint": "Paragraph 1, the third sentence.",
            "skill": "Finding details"
          },
          {
            "q": "What does the quarry train consist of?",
            "choices": [
              "A small engine, six wagons and a brake van",
              "Two coaches",
              "A small engine and six coaches full of quarry workers",
              "Ten wagons of coal and a guard riding on the back step"
            ],
            "answer": 0,
            "hint": "Paragraph 1, the sentence with 'cheapest way'.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 1, what is a 'brake van'?",
            "choices": [
              "The wagon at the end of a goods train with a brake and a guard",
              "The brake handle in the cab of the engine",
              "The engine",
              "A signal box"
            ],
            "answer": 0,
            "hint": "The train is 'six wagons and a brake van'; a brake van is the last vehicle, carrying the train's brake.",
            "skill": "Word meanings"
          },
          {
            "q": "Why did the old arrangement work for years and then go wrong this spring?",
            "choices": [
              "Because the quarry train now runs at a different time of night than it used to",
              "Because head office changed the old agreement when the new company bought the quarry to cut stone for the bridge",
              "Because the Millbrook signalmen once knew what six-two meant, and nobody at Millbrook knows it now",
              "Because Fern Halt stopped sending the six-two code down the line"
            ],
            "answer": 2,
            "hint": "Paragraph 2, the sentence that begins 'Except that nobody at Millbrook knows it now'.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 3 mostly about?",
            "choices": [
              "The bridge",
              "The phone",
              "What the mystery really was, and how the two signalmen fix it",
              "The old agreement that said the branch train was not to be offered"
            ],
            "answer": 2,
            "hint": "The first sentence of paragraph 3 says what it was; the rest is the fix.",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Quarry math",
          "points": [
            "Wagons times tons: tons a trip.",
            "Trips times tons: tons in all.",
            "Different bottoms: make them the same first. 1/3 + 1/5 = 5/15 + 3/15 = 8/15.",
            "Trips needed: total tons ÷ tons a trip."
          ],
          "example": "4 wagons × 8 tons = 32 tons a trip."
        },
        "problems": [
          {
            "q": "The quarry train has 6 wagons and each carries 10 tons of stone. How many tons a trip?",
            "answer": "60",
            "hint": "6 × 10.",
            "skill": "Multiplying"
          },
          {
            "q": "In the last 3 weeks the train made 7 trips. How many tons of stone is that?",
            "answer": "420",
            "hint": "60 × 7.",
            "skill": "Multiplying"
          },
          {
            "q": "The quarry train spends 1/4 of its trip in the tunnel and 2/3 of it on the main line. How much of the trip is that? (write a fraction)",
            "answer": "11/12",
            "hint": "Make the bottoms the same: 1/4 is 3/12 and 2/3 is 8/12. Then add the tops.",
            "skill": "Fractions"
          },
          {
            "q": "The bridge needs 6,000 tons of stone. At 60 tons a trip, how many trips will it take?",
            "answer": "100",
            "hint": "6,000 ÷ 60.",
            "skill": "Dividing"
          },
          {
            "q": "The quarry train runs 7 miles from the tunnel up the main line to the junction yard on each trip. How many miles does it run in 2 trips?",
            "answer": "14",
            "hint": "7 × 2.",
            "skill": "Multiplying"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "Small words carry weight",
            "points": [
              "Cover the word or phrase and read the sentence with a gap in it. What belongs in the gap?",
              "A short phrase can change everything around it. 'Just in case' turns an umbrella in a bag from a forecast into a backup plan.",
              "Slot each choice back into the sentence. Three of them will make the report say something it never said."
            ],
            "example": "'He agreed, eventually.' One word turns a yes into a long argument that ended in a yes, and the sentence never spells that out."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea that develops across the whole report?",
              "choices": [
                "The mystery was a real train with real permission, and the only thing missing was that nobody had told Millbrook.",
                "The Fern Halt signalman has worked the same box for thirty-one years.",
                "Railway head offices are usually careless with their paperwork, and this is the sort of mistake they make on every line.",
                "The quarry train had been running up the main line at night for a whole season without permission from anyone at head office."
              ],
              "answer": 0,
              "hint": "Who knew, who did not, and why. The last paragraph lists the four ordinary things it turned out to be; find the choice that says what they add up to.",
              "skill": "Central idea and evidence",
              "evidence": "Nobody told Millbrook."
            },
            {
              "q": "Claim: an old written agreement is what kept Millbrook in the dark. Which sentence from the report best supports that claim?",
              "choices": [
                "Under the quarry's original agreement the branch train was 'not to be offered', which meant nobody had to ring Millbrook about it, because it ran on a closed line after the last train.",
                "The cheapest way to move stone is the way it always moved: a small engine, six wagons and a brake van.",
                "The two signalmen agree on the fix over the phone: the quarry train goes in the working timetable, and the six-two code goes on a card above Millbrook's bells with its meaning written out.",
                "Head office told Fern Halt, because Fern Halt controls the junction end."
              ],
              "answer": 0,
              "hint": "The claim names an agreement. Only one of these sentences quotes what that agreement said and then explains what it did to Millbrook.",
              "skill": "Finding details",
              "evidence": "Under the quarry's original agreement the branch train was 'not to be offered', which meant nobody had to ring Millbrook about it, because it ran on a closed line after the last train."
            },
            {
              "q": "What job does the second paragraph do in this report?",
              "choices": [
                "It shows how a rule that once made sense stopped making sense as soon as nobody at Millbrook knew the code behind it.",
                "It lists the wagons the quarry train pulls up to the junction each night.",
                "It compares the old quarry company with the new one that bought it.",
                "It describes the fog in the cutting at 11:52."
              ],
              "answer": 0,
              "hint": "Look for the sentence that begins 'Except that'. A paragraph that states a rule and then turns on it has one job, and that is it.",
              "skill": "Author's purpose and structure",
              "evidence": "Fern Halt rang six-two down the line to say it was coming, and forty years ago every signalman at Millbrook knew what that meant. Except that nobody at Millbrook knows it now, and nobody thought to tell them. So the quarry train comes up past Millbrook's box at 11:52 on its way to the junction with the stone, and finds a red lamp and a signalman who has no idea what it is."
            },
            {
              "q": "The report says Fern Halt rang six-two to Millbrook 'on every run, out of habit'. What do the words 'out of habit' tell you?",
              "choices": [
                "Fern Halt had been ordered by head office to send that code down to Millbrook on every night the quarry train ran.",
                "Fern Halt sent that code by mistake, meaning to send a different one.",
                "A long-standing routine kept going even after the people at the other end had stopped understanding it.",
                "Fern Halt sent it because Millbrook had asked to be kept informed."
              ],
              "answer": 2,
              "hint": "The sentences around it tell you what Millbrook makes of that code now. Ask what those three words say about a message that gets a question mark back.",
              "skill": "Word meanings",
              "evidence": "Fern Halt rang six-two to Millbrook on every run, out of habit."
            },
            {
              "q": "Paragraphs 1 and 2 together explain why Fern Halt was told about the quarry train and Millbrook was not. Why the difference?",
              "choices": [
                "Millbrook's telephone had been out of order since the spring.",
                "The new company that bought the quarry did not know that Millbrook box existed, so it asked head office to tell only the box at the junction end.",
                "Head office told the box that controls the junction end, and an old agreement said this train was never to be offered to Millbrook.",
                "Millbrook's signalmen had asked not to be told about goods trains."
              ],
              "answer": 2,
              "hint": "One paragraph says who head office spoke to and why. The other says what an old agreement laid down. Neither one is the whole reason on its own.",
              "skill": "Reading between the lines",
              "evidence": "Head office told Fern Halt, because Fern Halt controls the junction end."
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
              "q": "The quarry train pulls 6 wagons on each of 3 trips. How many wagons is that?",
              "answer": "18",
              "hint": "3 × 6.",
              "skill": "Multiplying"
            },
            {
              "q": "Each train takes 5 wagons. There are 35 wagons. How many trains can be made up?",
              "answer": "7",
              "hint": "How many 5s fit into 35?",
              "skill": "Dividing"
            },
            {
              "q": "The signalman counted 449 wagons passing in May and 552 in June. How many more in June?",
              "answer": "103",
              "hint": "552 − 449.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "Which is bigger, 4/6 or 5/6? (write a fraction)",
              "answer": "5/6",
              "hint": "Same bottom, so the bigger top wins.",
              "skill": "Fractions"
            },
            {
              "q": "The target is 1,000 wagons and 117 are logged. How many short is that?",
              "answer": "883",
              "hint": "1,000 − 117.",
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
              "q": "The coal bin is 5/6 full. Each night the stove burns 5/18 of a bin. How many nights will the coal last?",
              "answer": "3",
              "hint": "Flip the second fraction and multiply: 5/6 × 18/5. Then simplify.",
              "skill": "Fractions"
            },
            {
              "q": "Out of every 100 wagons, 20 are set aside. Out of 240 wagons, how many is that?",
              "answer": "48",
              "hint": "240 is 2.4 hundreds, so 2.4 × 20.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The signalman divides 45 minutes of work in the ratio 2 to 3. How many minutes is the larger share?",
              "answer": "27",
              "hint": "5 parts in all, so one part is 9 minutes.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The signalman works out (11 − 1) × (4 + 5). What is it?",
              "answer": "90",
              "hint": "Each set of parentheses first, then multiply the two answers.",
              "skill": "Order of operations"
            },
            {
              "q": "Three winter readings came in: −11, 9 and −20 degrees. Which is the coldest?",
              "answer": "-20",
              "accept": [
                "−20"
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
              "Multiplying or dividing with one minus sign gives a minus answer: 3 × (−5) = −15, and −15 ÷ 3 = −5.",
              "A two-step equation: undo the taking away first, then undo the dividing by multiplying."
            ],
            "example": "x ÷ 4 − 3 = 6, so x ÷ 4 = 9, so x = 36."
          },
          "problems": [
            {
              "q": "The job needs 12 minutes in all, at 1.5 minutes for each block. One block is already done. How many blocks are left?",
              "answer": "7",
              "hint": "12 ÷ 1.5 = 8 in all, then take the finished one off.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The rule says a count of wagons may change by no more than 20%. Starting from 40, what is the highest count the rule allows?",
              "answer": "48",
              "hint": "20% of 40 is 8. Add it on.",
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
              "q": "Solve for x: x ÷ 5 − 18 = 5",
              "answer": "115",
              "hint": "Add 18 to both sides, then multiply by 5.",
              "skill": "Equations"
            },
            {
              "q": "A round plate measures 62.8 centimeters around the edge. Using 3.14 for pi, how many centimeters is it across?",
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
            "example": "Through (0, 6) and (4, 34): y rises 28 while x runs 4, so the slope is 28 ÷ 4 = 7."
          },
          "problems": [
            {
              "q": "A line passes through (0, 12) and (4, 48). What is its slope?",
              "answer": "9",
              "hint": "Slope is the rise over the run: 36 ÷ 4.",
              "skill": "Linear relationships"
            },
            {
              "q": "A square pad has an area of 36 square feet. How many feet is it around the edge?",
              "answer": "24",
              "hint": "One side is the square root of 36, then four sides.",
              "skill": "Powers and roots"
            },
            {
              "q": "The signalman goes 20 feet east and then 21 feet north. In a straight line, how far is that from the start, in feet?",
              "answer": "29",
              "hint": "The two legs make a right angle: 20² + 21² = 841.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "For what value of x do 4x + 28 and x + 37 come to the same number?",
              "answer": "3",
              "hint": "Set them equal, take x off both sides, then take 28 off.",
              "skill": "Equations"
            },
            {
              "q": "Two round tanks each have a radius of 10 feet and are 5 feet deep. Using 3.14 for pi, what is their total volume in cubic feet?",
              "answer": "3140",
              "hint": "One tank is 3.14 × 10 × 10 × 5 = 1,570. Then double it.",
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
          "example": "'Pull the signal off, unless the train is not in the timetable.'"
        },
        "skill": "Following directions",
        "steps": [
          "Write the number of wagons: 6.",
          "Add the number of vehicles that are not wagons: the engine and the brake van, 2.",
          "Multiply by 5.",
          "Subtract the number of years the branch was closed: 40.",
          "Type the result, unless it is zero, in which case type the word CLEAR."
        ],
        "prompt": "Your answer:",
        "answer": "CLEAR",
        "accept": [
          "clear",
          "Clear",
          "CLEAR."
        ],
        "hint": "Add the engine and the brake van to the wagons, then multiply by 5. Step 5 has a rule for one particular result — read it again."
      }
    },
    {
      "id": "ghosttrain-5",
      "title": "The Junction",
      "recon": {
        "lesson": {
          "title": "The whole week, in order",
          "points": [
            "The last log looks back over the five nights. Questions will ask for a time, a number, a word and a reason.",
            "The times are exact. Write them down.",
            "The main idea of the closing paragraph is what the writer wants you to keep."
          ],
          "example": "'The ferry left at 6:15 from dock number three.' Which dock? Number three."
        },
        "title": "Station Log: Offered and Accepted",
        "passage": [
          "At 11:40 the bell from Fern Halt rings once. Attention. The Millbrook signalman answers with one. Then six strokes, a pause, two: engine and brake van from the branch, running to the junction. The signalman repeats it back and writes 11:40 in the register beside the code. For the first time in forty years, the signalman pulls Millbrook's northbound signal off for the quarry train, lever number seven, red, with both hands. The signal arm drops. Out in the fog, a green lamp shows where a red one has been on every run since spring.",
          "At 11:52 the train comes. The rails hum, the box shakes, and this time the signalman is on the landing with the lamp held high. The driver, a woman in a wool cap leaning out of the cab of a small green engine, lifts a hand as she passes. That is because a signalman with a lamp is what a driver expects to see and has not seen at Millbrook in forty years. Six wagons of stone, a brake van with a guard on the back step, a red tail lamp. Gone north. At 11:58 Fern Halt rings two-one: train out of block. The signalman puts the signal back and writes the time.",
          "The week in the log reads like a lesson. Night one: a train with no bell. Night two: shiny rails on a line that should have been rusted, and a set of greased points. Night three: an old code in an old book. Night four: a phone call, and a signalman who had been waiting thirty-one years for the question. Night five: offered, accepted, signaled, passed, out of block. Nothing on this line was ever a ghost. It was a train that nobody had asked about. The signalman underlines the last entry and puts the kettle on."
        ],
        "questions": [
          {
            "q": "What time did Fern Halt ring the first bell tonight?",
            "choices": [
              "11:52",
              "11:58",
              "11:40",
              "10:40"
            ],
            "answer": 2,
            "hint": "The first sentence of paragraph 1.",
            "skill": "Finding details"
          },
          {
            "q": "Which lever did the signalman pull for the quarry train?",
            "choices": [
              "Lever one",
              "Number twelve, black, at the end of the row",
              "Number seven, red",
              "Lever six"
            ],
            "answer": 2,
            "hint": "Paragraph 1, the sentence with 'lever number'.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 2, what is the 'tail lamp'?",
            "choices": [
              "The engine's headlight",
              "The red lamp on the last vehicle of a train, showing the train is complete",
              "A lamp in the signal box",
              "The driver's lantern"
            ],
            "answer": 1,
            "hint": "The 'red tail lamp' is on the brake van at the back; a tail is the end.",
            "skill": "Word meanings"
          },
          {
            "q": "Why did the driver lift a hand as she passed?",
            "choices": [
              "To show the signalman that the train was complete",
              "Because she knew the signalman",
              "Because a signalman with a lamp is what a driver expects to see, and Millbrook had not shown one in forty years",
              "Because the quarry train has run up this line every night since the spring and she waves to every box that she passes"
            ],
            "answer": 2,
            "hint": "Paragraph 2, the sentence that begins 'The driver', and the one after it.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 3 mostly about?",
            "choices": [
              "The signalman pulling lever number seven for the quarry train",
              "The small green engine and the woman in the wool cap who drove it",
              "The bell codes exchanged with Fern Halt at 11:40 and at 11:58",
              "A night-by-night look back at how the mystery was solved"
            ],
            "answer": 3,
            "hint": "Paragraph 3 lists night one through night five.",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Junction math",
          "points": [
            "Minutes between clock times.",
            "Strokes in tonight's codes.",
            "A share of the nights as a fraction: the nights it happened over all the nights.",
            "Two-step: minutes in the block, then ÷ the miles for minutes per mile."
          ],
          "example": "10:25 to 10:41 is 16 minutes."
        },
        "problems": [
          {
            "q": "The bell rang at 11:40 and the train passed at 11:52. How many minutes between them?",
            "answer": "12",
            "hint": "From 40 to 52.",
            "skill": "Adding and subtracting"
          },
          {
            "q": "The train passed Millbrook at 11:52 and was out of the block at 11:58. The block is 4 miles. How many minutes per mile is that?",
            "answer": "1.5",
            "accept": [
              "1 1/2",
              "3/2"
            ],
            "hint": "6 minutes ÷ 4 miles.",
            "skill": "Dividing"
          },
          {
            "q": "Tonight's codes were 1, then 6-2, then 2-1. How many strokes in all, not counting the repeats?",
            "answer": "12",
            "hint": "1 + 8 + 3.",
            "skill": "Adding and subtracting"
          },
          {
            "q": "The signal had shown red for the quarry train on about 50 runs since spring. Tonight it showed green. Over 51 runs, what fraction showed green? (write a fraction)",
            "answer": "1/51",
            "hint": "1 over 51.",
            "skill": "Fractions"
          },
          {
            "q": "The signalman pulled 7 levers for the milk train and 1 for the quarry train. How many lever pulls tonight?",
            "answer": "8",
            "hint": "7 + 1.",
            "skill": "Adding and subtracting"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "Hold two facts at once",
            "points": [
              "The last question is never answered in one place. Plan on one fact from one paragraph and one from another.",
              "Say the two facts out loud, then say 'so'. Whatever comes after 'so' is usually sitting there in the choices.",
              "A choice that needs something the report never mentions is out, however sensible it sounds on its own."
            ],
            "example": "Paragraph one: the gate is locked at dusk. Paragraph three: the sheep are in the top field every morning. So somebody is opening it before dawn. Neither line says that by itself."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea of the whole report?",
              "choices": [
                "Lever number seven at Millbrook is painted red.",
                "Railways were run more safely forty years ago than they are today.",
                "The night the train was rung ahead and signaled turned an unexplained movement into an ordinary one, and the week's log reads as the steps that got there.",
                "Once the old code had been worked out the quarry train stopped running up the main line at night, and Millbrook's northbound signal was left standing at red for good."
              ],
              "answer": 2,
              "hint": "The bells at 11:40, the train at 11:52, the five nights in the log. One choice is the color of a lever, and one says the opposite of what happens in the second paragraph.",
              "skill": "Central idea and evidence",
              "evidence": "Nothing on this line was ever a ghost."
            },
            {
              "q": "Claim: the driver had long expected to see a signalman at Millbrook and never had. Which sentence from the report best supports that claim?",
              "choices": [
                "Six wagons of stone, a brake van with a guard on the back step, a red tail lamp.",
                "For the first time in forty years, the signalman pulls Millbrook's northbound signal off for the quarry train, lever number seven, red, with both hands.",
                "That is because a signalman with a lamp is what a driver expects to see and has not seen at Millbrook in forty years.",
                "It was a train that nobody had asked about."
              ],
              "answer": 2,
              "hint": "The claim is about what the driver expected. Only one of these sentences says anything at all about a driver.",
              "skill": "Finding details",
              "evidence": "That is because a signalman with a lamp is what a driver expects to see and has not seen at Millbrook in forty years."
            },
            {
              "q": "Why is the last paragraph written as a list of five nights?",
              "choices": [
                "It gives the timetable for the five nights still to come.",
                "It lays the week out as one chain of steps, so the answer reads as work rather than luck.",
                "It explains how the columns of a train register are laid out.",
                "It sets Millbrook's log against the one kept at Fern Halt."
              ],
              "answer": 1,
              "hint": "Nothing in that list is new to you. Ask why a writer would repeat five things the reader already knows, and in that order.",
              "skill": "Author's purpose and structure",
              "evidence": "The week in the log reads like a lesson."
            },
            {
              "q": "The report says 'Out in the fog, a green lamp shows where a red one has been on every run since spring.' What is the change from red to green telling you?",
              "choices": [
                "The fog outside has lifted enough for the driver to see the whole line ahead.",
                "A new lamp has been fitted to the signal post today.",
                "The signal is now clear for the train instead of telling it to stop.",
                "The train has already gone past the box."
              ],
              "answer": 2,
              "hint": "The sentence before it says what happens to the signal arm, and the one before that says what the signalman just did with lever number seven. Read the color as the result of those two.",
              "skill": "Word meanings",
              "evidence": "For the first time in forty years, the signalman pulls Millbrook's northbound signal off for the quarry train, lever number seven, red, with both hands."
            },
            {
              "q": "Paragraphs 1 and 2 together show what was different about tonight compared with the earlier nights. What was it?",
              "choices": [
                "The train ran a full hour earlier than it usually does, passing Millbrook well before the last timetabled train of the night.",
                "The train was carrying stone for the first time this year, the trips earlier in the season having gone up to the junction empty.",
                "The driver brought the train to a stand at Millbrook box and climbed down from the cab to speak to the signalman on the landing.",
                "The train was rung ahead, signaled and written in the register, so the system knew where it was from start to finish."
              ],
              "answer": 3,
              "hint": "One paragraph is the bells and the lever before the train. The other ends with a bell after it. Put the two ends of the crossing together.",
              "skill": "Reading between the lines",
              "evidence": "At 11:58 Fern Halt rings two-one: train out of block."
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
              "q": "The signalman counts 8 nights with 3 signals in each. How many signals is that?",
              "answer": "24",
              "hint": "8 × 3.",
              "skill": "Multiplying"
            },
            {
              "q": "24 signals are shared equally among 8 nights. How many signals in each night?",
              "answer": "3",
              "hint": "How many 8s make 24?",
              "skill": "Dividing"
            },
            {
              "q": "The signalman counted 189 strokes, then found 123 more, then 41 more. How many strokes in all?",
              "answer": "353",
              "hint": "189 + 123 first. Then add 41.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "The signalman finished 2/6 of the day's work before the break and 1/6 after. What fraction is done? (write a fraction)",
              "answer": "3/6",
              "hint": "Same bottom. Add the tops.",
              "skill": "Fractions"
            },
            {
              "q": "A platform is 3 squares wide and 7 squares long. How many squares is that?",
              "answer": "21",
              "hint": "3 rows of 7, so 3 × 7.",
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
              "q": "The plan allows 52.5 minutes. The signalman uses 9.45 minutes on the first block and 8.8 on the second. How many minutes are left?",
              "answer": "34.25",
              "hint": "Add the two amounts used first, then take that from 52.5. Line up the points.",
              "skill": "Decimals"
            },
            {
              "q": "Of 160 strokes, 25% are set aside. How many is that?",
              "answer": "40",
              "hint": "25% of 160: 25% is 25/100.",
              "skill": "Ratios and percent"
            },
            {
              "q": "Signals and strokes are kept in the ratio 3 to 5. If there are 15 signals, how many strokes?",
              "answer": "25",
              "hint": "15 ÷ 3 = 5 groups. Each group has 5 strokes.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The signalman works out 7 × (8 − 1) + 2. What is it?",
              "answer": "51",
              "hint": "Parentheses first, then multiply, then add.",
              "skill": "Order of operations"
            },
            {
              "q": "On a winter day it was −13 degrees at dawn. By noon it was 6 degrees. By how many degrees did it rise?",
              "answer": "19",
              "hint": "From −13 up to 0 is 13, then 6 more.",
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
            "example": "9x + 17 = 89, so 9x = 72, so x = 8."
          },
          "problems": [
            {
              "q": "12 blocks needed 30 minutes altogether. How many minutes is that for one block?",
              "answer": "2.5",
              "hint": "A rate is the total shared out: 30 ÷ 12.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The signalman counted 160 strokes on the first pass. On the second pass the number had fallen by 20%. How many strokes is that?",
              "answer": "128",
              "hint": "20% of 160 is 32. Then take it off.",
              "skill": "Ratios and percent"
            },
            {
              "q": "On a winter day the thermometer read −7 degrees at dawn. It rose 20 degrees by noon, then fell 19 degrees by dark. What does it read at dark?",
              "answer": "-6",
              "accept": [
                "−6"
              ],
              "hint": "Start at −7, go up 20 to 13, then down 19.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: 4x + 4 = 24",
              "answer": "5",
              "hint": "Take 4 off both sides first, then divide by 4.",
              "skill": "Equations"
            },
            {
              "q": "On the plan, 1 inch stands for 4 feet. The marked length measures 3 inches on the plan. How long is it really, in feet?",
              "answer": "12",
              "hint": "Every inch is 4 feet, so 3 × 4.",
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
              "q": "The signalman starts with 12 strokes and adds 9 more every hour. After 7 hours, how many strokes are there?",
              "answer": "75",
              "hint": "This is the straight-line rule y = mx + b: 9 × 7 + 12.",
              "skill": "Linear relationships"
            },
            {
              "q": "Each row holds 3² strokes. There are 7 rows. How many strokes in all?",
              "answer": "63",
              "hint": "3² means 3 × 3 = 9. Then × 7.",
              "skill": "Powers and roots"
            },
            {
              "q": "The signalman runs a rope from the top of an 8-yard mast to a point 15 yards away on the ground. How long is the rope, in yards?",
              "answer": "17",
              "hint": "Right triangle: a² + b² = c². 8² + 15² = 64 + 225 = 289. The rope is the square root of that.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "Solve for x: 4x + 3 = x + 30",
              "answer": "9",
              "hint": "Take x off both sides to get 3x + 3 = 30, then take 3 off both sides and divide.",
              "skill": "Equations"
            },
            {
              "q": "The signalman writes the total number of bell strokes rung at the box over the years as 7 × 10^5. Written out in full, what number is that?",
              "answer": "700000",
              "hint": "10^5 is 1 with 5 zeros after it: 100,000. Then × 7.",
              "skill": "Powers and roots"
            }
          ]
        }
      },
      "orders": {
        "lesson": {
          "title": "A step can correct a step",
          "points": [
            "Read every step before you start.",
            "When a step says an earlier one used the wrong number, go back to the total before that step and redo it with the right one."
          ],
          "example": "'Start with 25. Take away 3. Step 2 used the wrong number, so go back and take away 5 instead.' You end on 20, not 22 and not 17."
        },
        "skill": "Following directions",
        "steps": [
          "Write the number of the lever the signalman pulled: 7.",
          "Multiply by the wagons behind the engine: 6.",
          "Subtract the minutes between the bell at 11:40 and the train at 11:52: 12.",
          "Step 3 used the wrong pair of times. The register runs from the bell at 11:40 to 'train out of block' at 11:58, so go back to your step 2 answer and subtract 18 from it.",
          "Type the number the register would carry."
        ],
        "prompt": "Your answer:",
        "answer": "24",
        "hint": "Step 4 rewrites step 3 with a longer gap. Take the eighteen minutes off the total you were holding at the end of step 2."
      }
    }
  ]
};
if (window.BASECAMP_MISSIONS && window.BASECAMP_MISSIONS.register) window.BASECAMP_MISSIONS.register(C);
else (window.BASECAMP_CAMPAIGNS_PENDING = window.BASECAMP_CAMPAIGNS_PENDING || []).push(C);
})();
