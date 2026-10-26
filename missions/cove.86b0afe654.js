// ODYSSEY — campaign "cove". GENERATED, do not edit.
// Source of truth: content/missions-full.js. Rebuild with:  python3 tools/split-missions.py
// RULE: nothing in this file is about the person using it. Content only.
(function () {
var C = {
  "id": "cove",
  "ready": true,
  "kind": "climb",
  "readingLevel": {
    "fk": 5.7,
    "cl": 5.6
  },
  "grade": "5",
  "kindLabel": "Expedition",
  "form": "parrot",
  "title": "Pirate Cove",
  "subtitle": "A small island, an old map, a compass",
  "pitch": "An old map, a compass, and five landmarks across an island to a buried cache. Bearings, paces, tides, a cave you can only reach at low water, and a parrot who knows which tree is the right one.",
  "scene": "assets/scene-cove.jpg",
  "waypoints": [
    [
      520,
      950
    ],
    [
      800,
      800
    ],
    [
      1030,
      620
    ],
    [
      1180,
      430
    ],
    [
      980,
      355
    ],
    [
      780,
      195
    ]
  ],
  "progress": {
    "unit": "landmarks",
    "total": 5
  },
  "dayNoun": "Leg",
  "stageNoun": "Landmark",
  "finalNoun": "The cache",
  "stages": [
    "The Wreck",
    "Skull Rock",
    "The Split Fig",
    "The Sea Cave",
    "The cache"
  ],
  "reconNoun": "Chart Notes",
  "legs": {
    "recon": "Chart notes",
    "nav": "Map math",
    "orders": "Map orders",
    "debrief": "Camp"
  },
  "fact": "A real treasure map is just directions: a landmark you can see, a bearing from a compass, and a number of paces. Pirates did not draw X's. Surveyors do, and this map was drawn by one.",
  "finale": {
    "prompt": "The cache is open. Which color flag goes on the split fig so the boat can find the cove again?",
    "options": [
      {
        "label": "Red",
        "color": "#FF6B6B"
      },
      {
        "label": "Yellow",
        "color": "#FFD65C"
      },
      {
        "label": "Turquoise",
        "color": "#2FB6C8"
      },
      {
        "label": "White",
        "color": "#F4F8FF"
      }
    ],
    "done": "Tie it high. Then leave the map in the box for the next navigator, with your own note added."
  },
  "patrols": [
    {
      "id": "cove-1",
      "title": "The Wreck",
      "recon": {
        "lesson": {
          "title": "Questions first, then the notes",
          "points": [
            "Read the five questions before the notes. Two want a detail, one wants a word, one wants a why, one wants what a paragraph is mostly about.",
            "Bearings and paces are numbers. Circle them.",
            "The answer is always in the notes. You never have to guess."
          ],
          "example": "Question: 'How many days until the boat comes back?' Hunt for 'days'."
        },
        "title": "Chart Notes: A Map With No X",
        "passage": [
          "The map came out of a tin box in a museum, and it is not what a pirate map looks like in a story. There is no X. There is a drawing of the island's shape and a compass rose in the corner showing north. There is also a list of five lines in a surveyor's neat hand. The first line reads: from the wreck, bearing 40, two hundred paces, to the rock shaped like a skull. The list goes on like that, landmark to landmark, to a last line that says only: dig. The surveyor was mapping the island for a lighthouse in 1871. He buried his instruments in a box before a storm took his boat. The museum wants the box.",
          "A bearing is a direction measured in degrees clockwise from north: north is 0, east is 90, south is 180, west is 270. A pace is two steps, left and right, and a surveyor's pace is about five feet. So 'bearing 40, two hundred paces' means: face nearly northeast, and walk about a thousand feet. The navigator has a compass, a notebook and the parrot. There is also a boat that will come back in five days at low tide. That is the whole expedition.",
          "The first landmark is the wreck, which is easy, because the map starts there and the wreck is still on the beach. It is the ribs of a wooden boat, gray as driftwood, half buried in sand above the tide line. The navigator stands at the bow of the wreck, because the map says 'from the wreck'. There the navigator sets the compass to 40, finds a tree on that line in the distance, and starts counting. Two hundred paces of soft sand and beach grass later, there is a rock the size of a car with two dark hollows in it, and from the right angle, it grins."
        ],
        "questions": [
          {
            "q": "Who drew the map, and why?",
            "choices": [
              "A surveyor mapping the island for a lighthouse in 1871",
              "A pirate hiding gold",
              "A museum curator",
              "The navigator"
            ],
            "answer": 0,
            "hint": "Paragraph 1, the sentence with '1871'.",
            "skill": "Finding details"
          },
          {
            "q": "What is the bearing and distance from the wreck to the skull rock?",
            "choices": [
              "Bearing 40, two hundred paces",
              "Bearing 90, ten paces",
              "Bearing 180, two hundred paces from the rock",
              "Bearing 40, twenty paces"
            ],
            "answer": 0,
            "hint": "Paragraph 1, the first line of the surveyor's list.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 2, what is a 'pace'?",
            "choices": [
              "One single step, measured from one heel to the other on the sand",
              "A mile, which is about what two hundred of them add up to on the map",
              "A degree of bearing, measured clockwise from north on the compass",
              "Two steps, left and right, about five feet for a surveyor"
            ],
            "answer": 3,
            "hint": "The sentence 'A pace is two steps'.",
            "skill": "Word meanings"
          },
          {
            "q": "Why does the navigator find a tree on the bearing line before starting to walk?",
            "choices": [
              "So there is something to aim at while counting paces, instead of watching the compass every step",
              "To mark where the two hundred paces end",
              "Because the map says to",
              "Because the map names the tree as the next landmark, and the list has to be walked landmark by landmark"
            ],
            "answer": 0,
            "hint": "Paragraph 3 says the navigator 'finds a tree on that line in the distance, and starts counting'.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 2 mostly about?",
            "choices": [
              "The boat's schedule",
              "Walking the first line of the map from the wreck to the grinning rock",
              "The tin box in the museum and the surveyor who lost his boat in a storm",
              "What bearings and paces are, and how to read the map's directions"
            ],
            "answer": 3,
            "hint": "Paragraph 2 defines a bearing and a pace and shows how one line of the map works.",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Map math",
          "points": [
            "Walking a leg more than once: paces × the number of times.",
            "Hundredths as decimals: 2/100 is 0.02 and 70/100 is 0.70.",
            "Steps in paces: × 2.",
            "Same bottom: add the tops. 1/5 + 2/5 = 3/5."
          ],
          "example": "A leg of 150 paces walked twice is 150 × 2 = 300 paces."
        },
        "problems": [
          {
            "q": "The chart gives the first leg as 200 paces. The navigator paces it three times over and gets the same count each time. How many paces is that altogether?",
            "answer": "600",
            "hint": "200 × 3.",
            "skill": "Multiplying"
          },
          {
            "q": "A pace is 2 steps. How many steps are 200 paces?",
            "answer": "400",
            "hint": "200 × 2.",
            "skill": "Multiplying"
          },
          {
            "q": "The old map is drawn on a grid of 100 squares, and the island fills 56 of them. Write 56/100 as a decimal.",
            "answer": "0.56",
            "hint": "56 hundredths: two places after the point.",
            "skill": "Decimals"
          },
          {
            "q": "The boat comes back in 5 days. There are 5 landmarks. If the navigator does one a day, how many spare days are there?",
            "answer": "0",
            "hint": "5 − 5.",
            "skill": "Adding and subtracting"
          },
          {
            "q": "The navigator walked 1/4 of the first leg on sand and 2/4 through beach grass. What fraction of the leg is that? (write a fraction)",
            "answer": "3/4",
            "hint": "Same bottom. Add the tops.",
            "skill": "Fractions"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "The line that covers everything",
            "points": [
              "Read to the end, then say in one sentence of your own what the whole report was about. Do that before you look at a single choice.",
              "The wrong answers are usually true. They cover one paragraph, or they are wider than anything the report says, or they contradict a line you have already read.",
              "Four more moves follow: prove a claim with one sentence, say what a paragraph is for, work a word out from its sentence, and hold two paragraphs together."
            ],
            "example": "Three paragraphs about a well: how deep it is, how the pump works, what the village does in August. 'The well is ninety feet deep' covers one paragraph. 'Water is important' covers nothing. 'One old pump decides whether the village has a summer' covers all three."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea of the whole report?",
              "choices": [
                "A real map is a set of instructions that can be measured and walked, which makes finding the box arithmetic rather than luck.",
                "A surveyor's pace is two steps, left and right, and it covers about five feet of ground.",
                "Museums hold most of the treasure that has ever been found, and this map came out of one.",
                "The map is marked with an X at the place where the box is buried, like a map in a story."
              ],
              "answer": 0,
              "hint": "The map, the definitions, the first walk. One choice is a measurement, and one is denied in the second line of the report.",
              "skill": "Central idea and evidence",
              "evidence": "The map came out of a tin box in a museum, and it is not what a pirate map looks like in a story."
            },
            {
              "q": "Claim: each line of the map turns into an exact direction and an exact distance. Which sentence from the report best supports that claim?",
              "choices": [
                "So 'bearing 40, two hundred paces' means: face nearly northeast, and walk about a thousand feet.",
                "The first landmark is the wreck, which is easy, because the map starts there and the wreck is still on the beach.",
                "It is the ribs of a wooden boat, gray as driftwood, half buried in sand above the tide line.",
                "There is no X."
              ],
              "answer": 0,
              "hint": "The claim needs both a direction and a distance. Only one sentence takes a line off the map and turns it into both.",
              "skill": "Finding details",
              "evidence": "So 'bearing 40, two hundred paces' means: face nearly northeast, and walk about a thousand feet."
            },
            {
              "q": "Why does the report stop after the first paragraph to explain what a bearing and a pace are?",
              "choices": [
                "To show that a surveyor with real training was better at hiding things than any pirate in a treasure story would ever have been.",
                "To explain how a compass needle is magnetized and mounted so that it swings freely, which is the part of the tool a reader knows least about.",
                "To list all the equipment the navigator is carrying: a compass, a notebook, the parrot, and a boat coming back in five days.",
                "To turn the map's lines from bare numbers into steps, since otherwise the walk in the last paragraph would mean nothing."
              ],
              "answer": 3,
              "hint": "Delete that paragraph in your head and read the last one. What can you no longer follow? That is the job it was doing.",
              "skill": "Author's purpose and structure",
              "evidence": "So 'bearing 40, two hundred paces' means: face nearly northeast, and walk about a thousand feet."
            },
            {
              "q": "The report says that from the right angle, the rock 'grins'. What does that tell you?",
              "choices": [
                "Its two dark hollows look like eyes, so from one side the rock looks like a skull.",
                "The rock looks dangerous, and warns the navigator to turn back.",
                "The rock has split open along the top, so that the two dark hollows are cracks running down the front of it.",
                "The rock has been polished smooth by the sea."
              ],
              "answer": 0,
              "hint": "Rocks do not smile. The map already told you what this landmark is supposed to look like. Put that name together with the two hollows.",
              "skill": "Word meanings",
              "evidence": "Two hundred paces of soft sand and beach grass later, there is a rock the size of a car with two dark hollows in it, and from the right angle, it grins."
            },
            {
              "q": "Paragraphs 1 and 3 together explain why the map's first line was the easy one. Why was it?",
              "choices": [
                "The first line is far shorter than any of the lines after it, so two hundred paces of sand takes less counting than the rest.",
                "The wreck is the one place on the map marked with an X.",
                "The compass does not have to be set at all for the first line, because the navigator can simply follow the beach from the wreck to the rock.",
                "The map begins at a landmark that is still lying on the beach, so there is no guessing about where to start counting."
              ],
              "answer": 3,
              "hint": "Paragraph one tells you which landmark the list starts from. The last paragraph tells you what is still there. Put the two facts side by side.",
              "skill": "Reading between the lines",
              "evidence": "The first landmark is the wreck, which is easy, because the map starts there and the wreck is still on the beach."
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
              "q": "The navigator walks 4 trips of 7 paces each. How many paces is that?",
              "answer": "28",
              "hint": "4 × 7.",
              "skill": "Multiplying"
            },
            {
              "q": "The navigator walks 28 paces in legs of 4 paces each. How many legs is that?",
              "answer": "7",
              "hint": "How many 4s fit into 28?",
              "skill": "Dividing"
            },
            {
              "q": "The navigator counted 339 shells in the morning and 393 in the evening. How many more in the evening?",
              "answer": "54",
              "hint": "393 − 339.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "Which is bigger, 4/6 or 5/6? (write a fraction)",
              "answer": "5/6",
              "hint": "Same bottom, so the bigger top wins.",
              "skill": "Fractions"
            },
            {
              "q": "A square frame is 8 feet on each side. How many feet is it all the way around?",
              "answer": "32",
              "hint": "Four sides of 8.",
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
              "q": "A regular leg takes 1.75 minutes. A long one takes 2.4 times as long. How many minutes does the long one take?",
              "answer": "4.2",
              "hint": "Multiply 175 × 24 without the points, then put back 3 decimal places.",
              "skill": "Decimals"
            },
            {
              "q": "Out of every 100 shells, 50 are set aside. Out of 60 shells, how many is that?",
              "answer": "30",
              "hint": "60 is 0.6 hundreds, so 0.6 × 50.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The navigator divides 21 minutes of work in the ratio 3 to 4. How many minutes is the larger share?",
              "answer": "12",
              "hint": "7 parts in all, so one part is 3 minutes.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The navigator works out (8 − 1) × (9 + 5). What is it?",
              "answer": "98",
              "hint": "Each set of parentheses first, then multiply the two answers.",
              "skill": "Order of operations"
            },
            {
              "q": "Three readings came in from the boat's freezer: −11, 7 and −18 degrees. Which is the coldest?",
              "answer": "-18",
              "accept": [
                "−18"
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
              "Below zero, going up adds and going down subtracts. Walk the number line one step at a time.",
              "A two-step equation: undo the taking away first, then undo the dividing by multiplying."
            ],
            "example": "x ÷ 3 − 2 = 5, so x ÷ 3 = 7, so x = 21."
          },
          "problems": [
            {
              "q": "The job needs 45 minutes in all, at 2.25 minutes for each leg. One leg is already done. How many legs are left?",
              "answer": "19",
              "hint": "45 ÷ 2.25 = 20 in all, then take the finished one off.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The rule says a count of paces may change by no more than 20%. Starting from 240, what is the highest count the rule allows?",
              "answer": "288",
              "hint": "20% of 240 is 48. Add it on.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The boat's freezer fell 2 degrees from −13 degrees. What does it read now?",
              "answer": "-15",
              "accept": [
                "−15"
              ],
              "hint": "Falling takes it further below zero: −13 − 2.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: x ÷ 9 − 22 = 12",
              "answer": "306",
              "hint": "Add 22 to both sides, then multiply by 9.",
              "skill": "Equations"
            },
            {
              "q": "A drawing uses 1 inch for every 2 feet. How many inches are needed for 24 feet?",
              "answer": "12",
              "hint": "24 ÷ 2.",
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
              "q": "A line passes through (0, 8) and (5, 23). What is its slope?",
              "answer": "3",
              "hint": "Slope is the rise over the run: 15 ÷ 5.",
              "skill": "Linear relationships"
            },
            {
              "q": "The navigator walks 6² paces, then the same again. How many paces is that?",
              "answer": "72",
              "hint": "6² is 36. Double it.",
              "skill": "Powers and roots"
            },
            {
              "q": "The navigator goes 7 feet east and then 24 feet north. In a straight line, how far is that from the start, in feet?",
              "answer": "25",
              "hint": "The two legs make a right angle: 7² + 24² = 625.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "For what value of x do 9x + 15 and 4x + 45 come to the same number?",
              "answer": "6",
              "hint": "Set them equal, take 4x off both sides, then take 15 off.",
              "skill": "Equations"
            },
            {
              "q": "The navigator writes 3 × 10^4, then counts ten times as many. Written out in full, what is the new number?",
              "answer": "300000",
              "hint": "Ten times adds one to the power: 3 × 10^5.",
              "skill": "Powers and roots"
            }
          ]
        }
      },
      "orders": {
        "lesson": {
          "title": "Read all of it first",
          "points": [
            "Read every step before you take a pace.",
            "The last step often changes everything."
          ],
          "example": "If step 4 says 'use 50 in place of 30, then do step 3 again', go back and work it again with 50."
        },
        "skill": "Following directions",
        "steps": [
          "Write the bearing the map gives from the wreck: 40.",
          "Add the bearing of east: 90.",
          "Multiply by the number of steps in one pace: 2.",
          "Change step 2. Use the bearing of south, 180, in place of east's 90, then do step 3 again with that new total.",
          "Type the number you are left holding."
        ],
        "prompt": "Your answer:",
        "answer": "440",
        "hint": "Step 4 swaps one bearing for another back in step 2. Begin again at the wreck's bearing and add south's to it, then double."
      }
    },
    {
      "id": "cove-2",
      "title": "Skull Rock",
      "recon": {
        "lesson": {
          "title": "A problem with the compass",
          "points": [
            "When the notes describe a problem, the fix is in the next sentences. Find both.",
            "Numbers of degrees are details. Read them exactly.",
            "A word about the compass is defined by what it does to the needle."
          ],
          "example": "'The needle points to magnetic north, not true north.' Which north does the map use? The notes say."
        },
        "title": "Chart Notes: Two Norths",
        "passage": [
          "From the skull rock the map says: bearing 120, three hundred paces, to the fig tree split by lightning. The navigator sets the compass, sights along it, and stops. There is a problem, and the surveyor knew it. He wrote it in the corner of the map in tiny print. A compass needle does not point to true north, the top of the globe, but to magnetic north, a spot in the Arctic that wanders. The difference between them is called declination, and on this island in 1871 the surveyor measured it at eight degrees east.",
          "That means every bearing on the map was drawn against true north, and a compass here reads eight degrees off. To walk the map's bearing 120, the navigator has to set the compass to 112, and the same for every line. Eight degrees does not sound like much. Over three hundred paces it is a difference of more than two hundred feet, which is the difference between the right tree and the wrong one, and the island has a thousand trees.",
          "Declination changes over time as magnetic north wanders, so the navigator checks the modern value on a chart in the boat before setting out. It is now six degrees east, not eight. The map's bearings are still true bearings. So the correction is six, not eight. The compass goes to 114. Three hundred paces later, on a low ridge above the beach, there is a wild fig tree with its trunk split in two from the crown halfway to the ground. Both halves are alive and leaning apart like a wishbone. The parrot lands in it and looks smug."
        ],
        "questions": [
          {
            "q": "What did the surveyor measure the declination to be in 1871?",
            "choices": [
              "Six degrees",
              "Ten degrees",
              "Eight degrees east",
              "Zero"
            ],
            "answer": 2,
            "hint": "The last sentence of paragraph 1.",
            "skill": "Finding details"
          },
          {
            "q": "What is the declination today, according to the chart in the boat?",
            "choices": [
              "Six degrees east",
              "Eight degrees east, as in 1871",
              "Six degrees west of true north",
              "Zero"
            ],
            "answer": 0,
            "hint": "Paragraph 3, the first two sentences.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 1, what is 'declination'?",
            "choices": [
              "The slope of the beach",
              "The difference in degrees between true north and magnetic north",
              "A direction measured in degrees clockwise from north",
              "A kind of compass"
            ],
            "answer": 1,
            "hint": "The sentence 'The difference between them is called declination'.",
            "skill": "Word meanings"
          },
          {
            "q": "Why does a small error in degrees matter so much on this island?",
            "choices": [
              "Because the surveyor wrote his warning about declination in tiny letters in the corner of the map, where it is easy to miss",
              "Because magnetic north wanders about the Arctic and the declination has changed by two whole degrees since the map was drawn",
              "Because the surveyor drew the map more than a hundred years ago",
              "Because over hundreds of paces a few degrees becomes hundreds of feet, and the island has a thousand trees to confuse"
            ],
            "answer": 3,
            "hint": "Paragraph 2, the last two sentences.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 3 mostly about?",
            "choices": [
              "The parrot",
              "The boat",
              "Checking the modern declination, correcting the bearing, and finding the split fig",
              "Why every bearing drawn on the map has to be corrected before the compass can be trusted"
            ],
            "answer": 2,
            "hint": "Paragraph 3 corrects the number, sets the compass, and arrives at the landmark.",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Declination math",
          "points": [
            "Map bearing minus east declination: compass bearing.",
            "A tenth of a number: divide by 10.",
            "Adding decimals: line up the points. 0.6 + 1.75 is 0.60 + 1.75 = 2.35.",
            "Quarter hours: there are 4 in every hour."
          ],
          "example": "90 − 5 = 85 on the compass."
        },
        "problems": [
          {
            "q": "The map says bearing 120 and the declination is 6 degrees east. What does the navigator set the compass to?",
            "answer": "114",
            "hint": "120 − 6.",
            "skill": "Adding and subtracting"
          },
          {
            "q": "The navigator takes a bearing every quarter hour for 3 hours. How many bearings is that?",
            "answer": "12",
            "hint": "Four quarter hours in an hour, so 3 × 4.",
            "skill": "Multiplying"
          },
          {
            "q": "The navigator walked 1.25 miles to Skull Rock and 0.8 mile back to camp. How many miles is that in all? (write a decimal)",
            "answer": "2.05",
            "hint": "Line up the points: 1.25 + 0.80.",
            "skill": "Decimals"
          },
          {
            "q": "The map's next line is bearing 210. With 6 degrees east declination, what compass bearing is that?",
            "answer": "204",
            "hint": "210 − 6.",
            "skill": "Adding and subtracting"
          },
          {
            "q": "The island has about 1,000 trees. The navigator can see 1/10 of them from the ridge. How many is that?",
            "answer": "100",
            "hint": "1,000 ÷ 10.",
            "skill": "Fractions"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "The sentence you could hand over",
            "points": [
              "You are hunting for proof, not for matching words. A sentence can sit right beside the answer and prove none of it.",
              "Read the claim, then read your pick straight after it. If a gap is left open, keep looking.",
              "All four choices are real sentences from the report, so being true is where every one of them starts."
            ],
            "example": "Claim: nobody has walked this path in years. 'The path runs beside the river' is true and proves nothing. 'Brambles have grown across it at head height' hands it over."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea that develops across the whole report?",
              "choices": [
                "Magnetic north is a spot in the Arctic that wanders over time.",
                "A compass is the least reliable instrument a traveler can carry.",
                "A compass does not point where the map's bearings were drawn from, so every line has to be corrected before a single pace is walked.",
                "The navigator walks the map's lines using the surveyor's eight degrees."
              ],
              "answer": 2,
              "hint": "Two norths, eight degrees, then six. One choice is a definition, and one uses the number the last paragraph replaces.",
              "skill": "Central idea and evidence",
              "evidence": "The map's bearings are still true bearings. So the correction is six, not eight. The compass goes to 114."
            },
            {
              "q": "Claim: a small error at the start becomes a large one on the ground. Which sentence from the report best supports that claim?",
              "choices": [
                "Over three hundred paces it is a difference of more than two hundred feet, which is the difference between the right tree and the wrong one, and the island has a thousand trees.",
                "A compass needle does not point to true north, the top of the globe, but to magnetic north, a spot in the Arctic that wanders.",
                "Three hundred paces later, on a low ridge above the beach, there is a wild fig tree with its trunk split in two from the crown halfway to the ground.",
                "To walk the map's bearing 120, the navigator has to set the compass to 112, and the same for every line."
              ],
              "answer": 0,
              "hint": "Three of these give a fact or a number without saying how far off you would end up. Find the one that turns the small number into a distance you could walk.",
              "skill": "Finding details",
              "evidence": "Over three hundred paces it is a difference of more than two hundred feet, which is the difference between the right tree and the wrong one, and the island has a thousand trees."
            },
            {
              "q": "Why does the report give the number 112 in the second paragraph and then the number 114 in the third?",
              "choices": [
                "It offers two different ways of reading the same compass.",
                "It shows a correction being made and then corrected again, because the declination itself has moved since 1871.",
                "It compares the surveyor's old compass with the navigator's new one.",
                "It shows that the navigator made a mistake and had to start the walk again."
              ],
              "answer": 1,
              "hint": "Read the first sentence of the last paragraph. It names the thing that makes the second number necessary.",
              "skill": "Author's purpose and structure",
              "evidence": "Declination changes over time as magnetic north wanders, so the navigator checks the modern value on a chart in the boat before setting out. It is now six degrees east, not eight."
            },
            {
              "q": "The report says the two halves of the split fig lean apart 'like a wishbone'. What is that comparison telling you?",
              "choices": [
                "The tree is thin and weak enough that the next strong wind off the sea will snap what is left of the trunk in two.",
                "The tree is supposed to bring luck to whoever finds it, the way people pull a wishbone apart and wish on it.",
                "The tree is dead and has dried out where it stands.",
                "The trunk divides into two arms that spread away from each other from one point."
              ],
              "answer": 3,
              "hint": "Picture the shape of the object, not what people do with it. The same sentence tells you both halves are still alive.",
              "skill": "Word meanings",
              "evidence": "Three hundred paces later, on a low ridge above the beach, there is a wild fig tree with its trunk split in two from the crown halfway to the ground. Both halves are alive and leaning apart like a wishbone."
            },
            {
              "q": "Paragraphs 1 and 2 together explain why the navigator stopped instead of walking the second line straight away. Why stop?",
              "choices": [
                "The skull rock had turned out to be the wrong landmark after all.",
                "The compass needle had stopped swinging freely on its pivot.",
                "The map's bearings were measured against a north that a compass does not point to, so walking 120 would have missed the tree by a long way.",
                "Three hundred paces is too far for anyone to count accurately, and a miscount would leave the navigator more than two hundred feet from the tree."
              ],
              "answer": 2,
              "hint": "Paragraph one names the difference between two norths. Paragraph two turns that difference into feet. Neither one alone explains the stop.",
              "skill": "Reading between the lines",
              "evidence": "That means every bearing on the map was drawn against true north, and a compass here reads eight degrees off."
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
              "q": "The navigator counts 6 palm trees with 5 coconuts on each. How many coconuts is that?",
              "answer": "30",
              "hint": "6 × 5.",
              "skill": "Multiplying"
            },
            {
              "q": "The navigator walks 30 paces in 6 equal legs. How many paces is each leg?",
              "answer": "5",
              "hint": "How many 6s make 30?",
              "skill": "Dividing"
            },
            {
              "q": "The navigator counted 299 shells, then found 125 more, then 55 more. How many shells in all?",
              "answer": "479",
              "hint": "299 + 125 first. Then add 55.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "The navigator finished 4/6 of the day's work before the break and 1/6 after. What fraction is done? (write a fraction)",
              "answer": "5/6",
              "hint": "Same bottom. Add the tops.",
              "skill": "Fractions"
            },
            {
              "q": "There were 900 feet of rope at the start. 315 feet have been used. How many feet are left?",
              "answer": "585",
              "hint": "900 − 315.",
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
            "example": "4 × (9 − 2) + 5: parentheses first, 9 − 2 = 7; then 4 × 7 = 28; then add 5 to get 33."
          },
          "problems": [
            {
              "q": "The route on the map to Skull Rock is 8 3/4 miles, walked in equal legs of 1 3/4 miles. How many legs is that?",
              "answer": "5",
              "hint": "Make both improper: 35/4 ÷ 7/4. Then multiply by the flip: 35/4 × 4/7.",
              "skill": "Fractions"
            },
            {
              "q": "Of 80 landmarks, 20% are set aside. How many is that?",
              "answer": "16",
              "hint": "20% of 80: 20% is 20/100.",
              "skill": "Ratios and percent"
            },
            {
              "q": "Maps and landmarks are kept in the ratio 1 to 3. If there are 9 maps, how many landmarks?",
              "answer": "27",
              "hint": "9 ÷ 1 = 9 groups. Each group has 3 landmarks.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The navigator works out 3 × (11 − 4) + 6. What is it?",
              "answer": "27",
              "hint": "Parentheses first, then multiply, then add.",
              "skill": "Order of operations"
            },
            {
              "q": "At dawn the boat's freezer read −12 degrees. After its power cut out, it read 12 degrees by noon. By how many degrees did it rise?",
              "answer": "24",
              "hint": "From −12 up to 0 is 12, then 12 more.",
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
              "Multiplying or dividing with one minus sign gives a minus answer: 3 × (−5) = −15, and −15 ÷ 3 = −5.",
              "A two-step equation: undo the adding first, then undo the multiplying."
            ],
            "example": "5x + 4 = 39, so 5x = 35, so x = 7."
          },
          "problems": [
            {
              "q": "24 legs needed 84 minutes altogether. How many minutes is that for one leg?",
              "answer": "3.5",
              "hint": "A rate is the total shared out: 84 ÷ 24.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The navigator counted 200 landmarks on the first pass. On the second pass the number had fallen by 10%. How many landmarks is that?",
              "answer": "180",
              "hint": "10% of 200 is 20. Then take it off.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The boat's fuel tank loses 15 liters every hour for 7 hours. What is the total change? (Write a loss as a negative number.)",
              "answer": "-105",
              "accept": [
                "−105"
              ],
              "hint": "7 hours of −15 each: 7 × (−15). One minus sign, so the answer is negative.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: 7x + 21 = 42",
              "answer": "3",
              "hint": "Take 21 off both sides first, then divide by 7.",
              "skill": "Equations"
            },
            {
              "q": "A round pan is 20 centimeters across. Using 3.14 for pi, how many centimeters is it around the edge?",
              "answer": "62.8",
              "hint": "Around the edge = 3.14 × the distance across. 3.14 × 20.",
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
            "example": "Start at 9 and add 4 each hour: after 7 hours, y = 4 × 7 + 9 = 37."
          },
          "problems": [
            {
              "q": "The navigator starts with 5 landmarks and adds 6 more every hour. After 3 hours, how many landmarks are there?",
              "answer": "23",
              "hint": "This is the straight-line rule y = mx + b: 6 × 3 + 5.",
              "skill": "Linear relationships"
            },
            {
              "q": "A square pad has an area of 169 square feet. How long is one side, in feet?",
              "answer": "13",
              "hint": "A square's area is side × side. What number times itself makes 169?",
              "skill": "Powers and roots"
            },
            {
              "q": "The navigator runs a rope from the top of a 20-foot mast to a point 21 feet away on the ground. How long is the rope, in feet?",
              "answer": "29",
              "hint": "Right triangle: a² + b² = c². 20² + 21² = 400 + 441 = 841. The rope is the square root of that.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "Solve for x: 4x + 2 = x + 20",
              "answer": "6",
              "hint": "Take x off both sides to get 3x + 2 = 20, then take 2 off both sides and divide.",
              "skill": "Equations"
            },
            {
              "q": "A round tank has a radius of 10 feet and is 3 feet deep. Using 3.14 for pi, what is its volume in cubic feet? (volume = pi × radius × radius × depth)",
              "answer": "942",
              "hint": "3.14 × 10 × 10 = 314, then × 3.",
              "skill": "Area and perimeter"
            }
          ]
        }
      },
      "orders": {
        "lesson": {
          "title": "Correct, then walk",
          "points": [
            "The orders may ask you to apply the correction from the notes.",
            "If you work out two settings, the last step says which one to type."
          ],
          "example": "'Map bearing 200, take off 5' is compass 195."
        },
        "skill": "Following directions",
        "steps": [
          "Write the map's bearing to the split fig: 120.",
          "Take off today's declination, the one on the chart in the boat: 6.",
          "Now work the other one out. Write the map's bearing again: 120.",
          "Take off the declination the surveyor measured in 1871: 8.",
          "You have a compass setting from step 2 and one from step 4. Magnetic north has moved since 1871, so type the step 2 number and not the step 4 one."
        ],
        "prompt": "Your answer:",
        "answer": "114",
        "hint": "Both settings are worth working out, but only one is the setting the navigator walks today. Step 5 names the step it comes from."
      }
    },
    {
      "id": "cove-3",
      "title": "The Split Fig",
      "recon": {
        "lesson": {
          "title": "Timing",
          "points": [
            "When the notes describe a window of time, the start and end are details.",
            "'Why' about waiting: the reason is what happens if you do not.",
            "A word about the sea is defined by what the water does."
          ],
          "example": "'The cave is dry for two hours either side of low water.' How long is the window? Four hours."
        },
        "title": "Chart Notes: Low Water",
        "passage": [
          "From the split fig the map says: bearing 210, one hundred and fifty paces, to the cave, at low water only. The last three words are underlined twice. The navigator walks the bearing down the ridge and onto a shelf of black rock at the sea's edge. At the end of it the shelf goes into the water. The mouth of a cave shows at the base of the cliff, half full of sea. Waves roll into the dark and boom somewhere inside.",
          "The tide is the sea rising and falling twice a day, pulled by the moon, and on this coast it rises and falls about six feet. At high water the cave mouth is under the sea. At low water the shelf is dry. Then the cave can be walked into for about two hours either side of the lowest point. The tide table in the boat gives low water tomorrow at 10:20 in the morning, so the window is from about 8:20 to 12:20. Anyone in the cave after that will be cut off by the sea.",
          "And so the navigator makes camp on the ridge and waits. The rule the surveyor wrote, low water only, is not a suggestion; it is the difference between an explorer and a story. The evening is spent checking the compass, drying boots, and reading the map's last two lines again: from the cave, bearing 300, sixty paces, to a flat stone with a chisel mark; then, dig. The parrot eats a coconut. The navigator sets an alarm for seven."
        ],
        "questions": [
          {
            "q": "What are the three underlined words on the map?",
            "choices": [
              "Dig here now",
              "At high tide",
              "Low water only",
              "Bearing two ten, one hundred and fifty paces"
            ],
            "answer": 2,
            "hint": "The first sentence of paragraph 1.",
            "skill": "Finding details"
          },
          {
            "q": "What time is low water tomorrow?",
            "choices": [
              "10:20",
              "7:00, when the alarm goes off",
              "8:20, the start of the window",
              "12:20, when the window closes"
            ],
            "answer": 0,
            "hint": "Paragraph 2, the sentence with 'tide table'.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 2, what is the 'tide'?",
            "choices": [
              "A wave",
              "A current",
              "The sea rising and falling twice a day, pulled by the moon",
              "The wind"
            ],
            "answer": 2,
            "hint": "The first sentence of paragraph 2.",
            "skill": "Word meanings"
          },
          {
            "q": "Why does the navigator wait until morning instead of going into the cave now?",
            "choices": [
              "Because it is dark",
              "Because the cave is only dry for a window around low water, and the next low water is at 10:20 tomorrow",
              "Because the boat does not come back for five days",
              "Because the compass is broken"
            ],
            "answer": 1,
            "hint": "Paragraph 2 gives the window and paragraph 3 says 'so the navigator makes camp'.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 2 mostly about?",
            "choices": [
              "How the tide works here and when the cave can be entered",
              "The moon",
              "The boat",
              "Making camp on the ridge and waiting there until the next morning"
            ],
            "answer": 0,
            "hint": "Paragraph 2 explains the tide and gives the safe window.",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Tide math",
          "points": [
            "Volume of a box: length × width × height. 5 × 2 × 2 = 20 cubic feet.",
            "Feet an hour: feet ÷ hours.",
            "Rows times marks in each row: multiply.",
            "Two-step: alarm to low water, in minutes."
          ],
          "example": "6:00 to 8:20: 2 hours is 120 minutes, plus 20, so 140 minutes."
        },
        "problems": [
          {
            "q": "The tide fills a rock pool shaped like a box, 4 feet long, 3 feet wide and 2 feet deep. How many cubic feet of water does it hold?",
            "answer": "24",
            "hint": "Length × width × depth: 4 × 3 first, then times 2.",
            "skill": "Volume"
          },
          {
            "q": "The tide rises 6 feet in 6 hours. How many feet an hour is that?",
            "answer": "1",
            "hint": "6 ÷ 6.",
            "skill": "Dividing"
          },
          {
            "q": "The cave floor is marked with 9 rows of 8 old chisel marks. How many marks is that?",
            "answer": "72",
            "hint": "9 × 8.",
            "skill": "Multiplying"
          },
          {
            "q": "The alarm is set for 7:00 and low water is at 10:20. How many minutes between them?",
            "answer": "200",
            "hint": "3 hours is 180 minutes, plus 20.",
            "skill": "Multi-step problems"
          },
          {
            "q": "The tide comes in twice a day. How many times does it come in over the 5 days of the expedition?",
            "answer": "10",
            "hint": "2 × 5.",
            "skill": "Multiplying"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "What is this paragraph doing here",
            "points": [
              "Every paragraph has a job: setting a scene, giving a cause, setting two things side by side, walking an order, or naming a problem and its answer.",
              "Find the job by cutting the paragraph out in your head. What can you no longer follow? That gap is the job.",
              "Naming the job is not retelling the paragraph. A choice that only repeats the content has named nothing."
            ],
            "example": "A report about a climb pauses on the weather forecast. That is not a lesson in weather. It is there so that 'they turned back at the ridge' reads as a decision rather than a failure."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea of the whole report?",
              "choices": [
                "The tide on this coast rises and falls about six feet twice a day, pulled by the moon, and it covers the mouth of the cave completely at high water.",
                "The moon controls almost everything that happens in the sea.",
                "The cave can only be entered inside a window the tide allows, so the day's work turns out to be waiting and getting that window right.",
                "The cave can be entered at any hour so long as a lamp is carried."
              ],
              "answer": 2,
              "hint": "The underlined words, the six feet, the alarm set for seven. One choice is a measurement, and one is exactly what the underlining forbids.",
              "skill": "Central idea and evidence",
              "evidence": "The rule the surveyor wrote, low water only, is not a suggestion; it is the difference between an explorer and a story."
            },
            {
              "q": "Claim: the underlined words on the map are a safety rule and not a small detail. Which sentence from the report best supports that claim?",
              "choices": [
                "The rule the surveyor wrote, low water only, is not a suggestion; it is the difference between an explorer and a story.",
                "The navigator walks the bearing down the ridge and onto a shelf of black rock at the sea's edge.",
                "The tide is the sea rising and falling twice a day, pulled by the moon, and on this coast it rises and falls about six feet.",
                "The evening is spent checking the compass, drying boots, and reading the map's last two lines again: from the cave, bearing 300, sixty paces, to a flat stone with a chisel mark; then, dig."
              ],
              "answer": 0,
              "hint": "Three of these describe the walk, the tide or the map's last lines without saying what happens if the rule is ignored. Find the sentence that says what is at stake.",
              "skill": "Finding details",
              "evidence": "The rule the surveyor wrote, low water only, is not a suggestion; it is the difference between an explorer and a story."
            },
            {
              "q": "How is the second paragraph organized?",
              "choices": [
                "It tells the story of the walk down the ridge to the rock shelf.",
                "It explains what causes the moon to pull on the sea twice a day.",
                "It sets high water against low water and then turns the difference into a window with clock times on it.",
                "It lists the equipment that is being kept in the boat."
              ],
              "answer": 2,
              "hint": "Two sentences in a row begin almost the same way and describe opposite states of the same place. Then the numbers arrive. Name that shape.",
              "skill": "Author's purpose and structure",
              "evidence": "At high water the cave mouth is under the sea."
            },
            {
              "q": "The report says anyone in the cave after 12:20 'will be cut off by the sea'. What is that phrase telling you?",
              "choices": [
                "There is a second way out of the cave for anyone who can swim.",
                "Staying too long means the rising sea closes the only way out of the cave.",
                "The cave stays dry while the shelf outside it floods.",
                "The navigator is planning to swim in rather than walk in."
              ],
              "answer": 1,
              "hint": "Read what the paragraph says happens to the cave mouth at high water, then ask what that does to the only way out.",
              "skill": "Word meanings",
              "evidence": "The tide table in the boat gives low water tomorrow at 10:20 in the morning, so the window is from about 8:20 to 12:20. Anyone in the cave after that will be cut off by the sea."
            },
            {
              "q": "Paragraphs 1 and 3 together explain why the navigator makes camp instead of going straight in. Why wait?",
              "choices": [
                "The cave mouth is half full of sea at the moment, and the map's underlined rule says the cave is for low water only.",
                "The compass has to dry out before it can be used again.",
                "The last two lines of the map have not been read yet, so the navigator waits on the ridge until there is time to read them.",
                "The boat will not be back for another five days."
              ],
              "answer": 0,
              "hint": "Paragraph one tells you what the cave mouth looks like right now. The last paragraph tells you how the navigator treats the surveyor's underlined rule. Put them together.",
              "skill": "Reading between the lines",
              "evidence": "At the end of it the shelf goes into the water. The mouth of a cave shows at the base of the cliff, half full of sea."
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
              "q": "The navigator found 5 shells yesterday and three times as many today. How many shells today?",
              "answer": "15",
              "hint": "Three times 5: 5 + 5 + 5.",
              "skill": "Multiplying"
            },
            {
              "q": "The navigator finds 45 gold coins and puts them in bags of 5. How many bags is that?",
              "answer": "9",
              "hint": "How many 5s make 45?",
              "skill": "Dividing"
            },
            {
              "q": "The map says 222 paces to the treasure. The navigator has walked 72. How many paces are left?",
              "answer": "150",
              "hint": "222 − 72.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "1/4 of the day's work was done yesterday. What fraction is still to do? (write a fraction)",
              "answer": "3/4",
              "hint": "The whole job is 4/4. Take 1/4 off it.",
              "skill": "Fractions"
            },
            {
              "q": "A square coconut mat is 8 squares on each side. How many squares is that?",
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
              "Dividing by a decimal: move the point in both numbers the same number of places until you divide by a whole number. 7.2 ÷ 0.8 is 72 ÷ 8 = 9.",
              "Percent of a number: turn the percent into a fraction of 100.",
              "A ratio tells you how many of one thing for each group of the other.",
              "Order of operations: parentheses, then multiply and divide, then add and subtract."
            ],
            "example": "4 × (9 − 2) + 5: parentheses first, 9 − 2 = 7; then 4 × 7 = 28; then add 5 to get 33."
          },
          "problems": [
            {
              "q": "The navigator has 13.05 minutes of walking. Each leg takes 0.45 minutes. How many legs is that enough for?",
              "answer": "29",
              "hint": "Move both points 2 places to the right: 1305 ÷ 45.",
              "skill": "Decimals"
            },
            {
              "q": "50 of the 200 coins are set aside. What percent is that? (write just the number)",
              "answer": "25",
              "accept": [
                "25%"
              ],
              "hint": "50 out of 200, then out of 100.",
              "skill": "Ratios and percent"
            },
            {
              "q": "For every 3 feet of tide there are 5 hours. There are 20 hours. How many feet of tide?",
              "answer": "12",
              "hint": "20 ÷ 5 = 4 groups. Each group has 3 feet of tide.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The navigator works out 17 + 9 × 6. What is it?",
              "answer": "71",
              "hint": "Multiply before you add.",
              "skill": "Order of operations"
            },
            {
              "q": "The boat's freezer read 9 degrees when it was switched on at dawn. By dark it had fallen to −14 degrees. By how many degrees did it fall?",
              "answer": "23",
              "hint": "From 9 down to 0 is 9, then 14 more.",
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
              "Below zero, going up adds and going down subtracts. Walk the number line one step at a time.",
              "A two-step equation: get the x part on its own first, then undo the multiplying."
            ],
            "example": "50 − 4x = 14, so 4x = 50 − 14 = 36, so x = 9."
          },
          "problems": [
            {
              "q": "One leg needs 3.5 minutes. How many minutes do 16 legs need?",
              "answer": "56",
              "hint": "16 × 3.5.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The navigator counted 60 paces on the first try and 48 on the second. By what percent did the count change? (write just the number)",
              "answer": "20",
              "accept": [
                "20%",
                "-20",
                "−20",
                "-20%",
                "−20%"
              ],
              "hint": "The change is 12. 12 out of 60, then out of 100.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The boat's freezer read −4 degrees at dawn and −23 degrees at dark. How many degrees did it fall?",
              "answer": "19",
              "hint": "From −4 down to −23.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: 49 − 6x = 19",
              "answer": "5",
              "hint": "Move 6x to the right and 19 to the left: 6x = 30.",
              "skill": "Equations"
            },
            {
              "q": "On the plan, 1 inch stands for 10 feet. The beach is really 70 feet long. How many inches is it on the plan?",
              "answer": "7",
              "hint": "70 ÷ 10.",
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
              "q": "The navigator's lantern starts with 20 ounces of oil and burns 4 ounces every hour. How many ounces are left after 3 hours?",
              "answer": "8",
              "hint": "4 × 3 = 12 used, taken off 20.",
              "skill": "Linear relationships"
            },
            {
              "q": "A cube is 6 small cubes along every edge. How many small cubes make it up?",
              "answer": "216",
              "hint": "6³ means 6 × 6 × 6.",
              "skill": "Powers and roots"
            },
            {
              "q": "A 17-foot rope runs from the top of a mast to a point 15 feet away on the ground. How tall is the mast, in feet?",
              "answer": "8",
              "hint": "a² = c² − b² = 289 − 225 = 64. Then take the square root.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "Solve for x: 4x = x + 15",
              "answer": "5",
              "hint": "Take x off both sides: 3x = 15. Then divide by 3.",
              "skill": "Equations"
            },
            {
              "q": "The museum says 500,000 people have seen the map. Written as 5 × 10 to a power, what is the power?",
              "answer": "5",
              "hint": "Count the zeros after 5.",
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
            "Check the notes before you act."
          ],
          "example": "'Go into the cave, unless it is after 12:20.'"
        },
        "skill": "Following directions",
        "steps": [
          "Write the hour of low water: 10.",
          "Multiply by the feet of tide: 6.",
          "Subtract the number of hours in the safe window: 4.",
          "Add the number of times a day the tide rises: 2.",
          "Type the result, unless the notes say the navigator entered the cave tonight, in which case type SWIMMING."
        ],
        "prompt": "Your answer:",
        "answer": "58",
        "hint": "Work steps 1 to 4 through. Then read the notes: step 5 only changes your answer if the navigator entered the cave tonight."
      }
    },
    {
      "id": "cove-4",
      "title": "The Sea Cave",
      "recon": {
        "lesson": {
          "title": "Inside, with a clock",
          "points": [
            "When the notes describe a place with a time limit, both the place and the time are details.",
            "A word about the cave is defined by what the navigator sees.",
            "'Why did the navigator leave early' wants the rule."
          ],
          "example": "'Home by nine, an hour before the gate is locked.' Why early? To keep some spare time."
        },
        "title": "Chart Notes: Sixty Paces From the Dark",
        "passage": [
          "At 8:30 the shelf is dry. The cave mouth is a black arch twelve feet high, with a floor of wet sand and crabs. The navigator goes in with a lamp and the compass. The cave runs straight back for about a hundred feet and then opens into a round chamber where the ceiling has a hole. Daylight comes down through it in a single beam onto the sand. The surveyor's map says: from the cave, bearing 300, sixty paces. It does not say from which part of the cave. The navigator stands in the beam of light and decides that is what a surveyor would have meant.",
          "Bearing 300 is north of west. It points back out of the chamber through a side passage the navigator had not seen, low and dry, sloping up. Sixty paces along it, counting carefully on hands and knees where the roof drops, the passage ends at a wall of rock and a floor of flat stones. One of the stones, when the lamp is held sideways, has a chisel mark cut into it: a small arrow and the numbers 1871.",
          "The navigator does not dig. The rule for the cave is out by twenty past eleven, an hour before the window closes, because a rule with no margin is a rule that will get you in real trouble one day. It is 10:40. The stone is photographed, and the passage is measured back to the chamber, the chamber back to the mouth. The navigator is on the shelf in the sun at 10:55 with the whole route in the notebook. Tomorrow is the last low water before the boat comes. Tomorrow the box comes out."
        ],
        "questions": [
          {
            "q": "What is on the flat stone at the end of the passage?",
            "choices": [
              "The surveyor's own initials cut deep into the flat stone",
              "A chisel mark: a small arrow and the numbers 1871",
              "An old brass coin from 1871 pressed down into the wet sand",
              "Nothing at all, only the flat stones that make the floor"
            ],
            "answer": 1,
            "hint": "The last sentence of paragraph 2.",
            "skill": "Finding details"
          },
          {
            "q": "What is the navigator's rule for leaving the cave?",
            "choices": [
              "Out by noon, which is when the tide closes the cave mouth",
              "Out by twenty past eleven, an hour before it shuts",
              "Out when the lamp dies, whenever in the day that happens",
              "Out at twelve twenty, the very minute the window closes"
            ],
            "answer": 1,
            "hint": "Paragraph 3, the second sentence.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 1, what is the 'chamber'?",
            "choices": [
              "The low dry side passage that slopes upward away from the cave",
              "A round room inside the cave with a hole in its ceiling",
              "The black arch twelve feet high that stands at the mouth of the cave",
              "The shelf of black rock at the sea's edge outside the cave mouth"
            ],
            "answer": 1,
            "hint": "The sentence 'opens into a round chamber where the ceiling has a hole'.",
            "skill": "Word meanings"
          },
          {
            "q": "Why does the navigator start the sixty paces from the beam of light?",
            "choices": [
              "Because the map says to start from the mouth of the cave, and the mouth is exactly one hundred feet back down the tunnel from there",
              "Because a surveyor would always start from the deepest part of a cave, and this chamber lies a hundred feet in from the mouth",
              "Because the map does not say where in the cave to start, and the beam is the spot a surveyor would most likely have used",
              "Because the daylight through the hole shows which way is north"
            ],
            "answer": 2,
            "hint": "The last two sentences of paragraph 1.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 3 mostly about?",
            "choices": [
              "Why the navigator leaves without digging, and what gets recorded instead",
              "The chisel mark",
              "The side passage",
              "Crawling the sixty paces up the low side passage on hands and knees to the wall"
            ],
            "answer": 0,
            "hint": "The first sentence of paragraph 3 is 'The navigator does not dig', and the rest explains.",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Cave math",
          "points": [
            "Minutes between clock times: count.",
            "Steps down: the number of steps × the feet each step drops.",
            "Feet of cave: main passage plus side passage.",
            "Two-step: minutes left in the window at 10:40."
          ],
          "example": "7:45 to 9:15 is 90 minutes."
        },
        "problems": [
          {
            "q": "The navigator went in at 8:30 and came out at 10:55. How many minutes inside?",
            "answer": "145",
            "hint": "8:30 to 10:30 is 120, then 25 more.",
            "skill": "Multi-step problems"
          },
          {
            "q": "The mouth of the cave is 100 feet back down the tunnel. The navigator takes steps of 2 feet. How many steps does it take to walk there?",
            "answer": "50",
            "hint": "100 ÷ 2.",
            "skill": "Dividing"
          },
          {
            "q": "The main cave is 100 feet and the side passage is 300 feet. How far is the chisel stone from the cave mouth, in feet?",
            "answer": "400",
            "hint": "100 + 300.",
            "skill": "Adding and subtracting"
          },
          {
            "q": "The window closes at 12:20 and the navigator's rule is out by 11:20 at the latest, an hour early. At 10:40, how many minutes are left before 11:20?",
            "answer": "40",
            "hint": "10:40 to 11:20.",
            "skill": "Adding and subtracting"
          },
          {
            "q": "The cave mouth is 12 feet high and 20 feet wide. If you drew a rectangle that size, what would its area be in square feet?",
            "answer": "240",
            "hint": "12 × 20.",
            "skill": "Area and perimeter"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "The sentence defines it for you",
            "points": [
              "Cover the word or phrase with a finger and read the sentence with a gap in it. What belongs in the gap?",
              "The sentence around it usually carries the answer: a reason, a pair of times, an example set right beside it.",
              "Slot each choice back in. Three of them will make the report claim something it never claimed."
            ],
            "example": "'After all that studying, the test was a breeze.' No wind blew. It means the test was easy, and the words around it told you so."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea that develops across the whole report?",
              "choices": [
                "The cave runs straight back for about a hundred feet before it opens into a round chamber with a hole in the ceiling.",
                "Following the map here meant working out what the surveyor must have meant and then leaving with time to spare.",
                "A cave is the safest place anyone can choose to hide something valuable, because stone keeps out weather better than sand does.",
                "The navigator digs the box up as soon as the chisel mark is found, lifting the flat stone out of the passage floor there and then."
              ],
              "answer": 1,
              "hint": "The gap in the instructions, the sixty paces, the walk back out at 10:40. One choice is a distance, and one is exactly what the last paragraph opens by refusing to do.",
              "skill": "Central idea and evidence",
              "evidence": "The navigator does not dig."
            },
            {
              "q": "Claim: the navigator left the cave before the tide made it necessary. Which sentence from the report best supports that claim?",
              "choices": [
                "The cave runs straight back for about a hundred feet and then opens into a round chamber where the ceiling has a hole.",
                "The rule for the cave is out by twenty past eleven, an hour before the window closes, because a rule with no margin is a rule that will get you in real trouble one day.",
                "Sixty paces along it, counting carefully on hands and knees where the roof drops, the passage ends at a wall of rock and a floor of flat stones.",
                "The stone is photographed, and the passage is measured back to the chamber, the chamber back to the mouth."
              ],
              "answer": 1,
              "hint": "The claim is about leaving early. Find the sentence that carries two times: the one the rule sets and the one the sea would have set.",
              "skill": "Finding details",
              "evidence": "The rule for the cave is out by twenty past eleven, an hour before the window closes, because a rule with no margin is a rule that will get you in real trouble one day."
            },
            {
              "q": "What job do the two sentences 'It does not say from which part of the cave. The navigator stands in the beam of light and decides that is what a surveyor would have meant.' do?",
              "choices": [
                "They prove that the surveyor's map was too badly drawn to follow, and that the chisel mark under the lamp was found by luck alone.",
                "They show a gap in the instructions and the reasoning used to fill it, which is what the next paragraph depends on.",
                "They explain how daylight reaches the floor of the chamber, coming down through the hole in the ceiling in a single beam.",
                "They list everything the navigator carried into the cave, so that the reader knows a lamp and a compass were the only tools down there."
              ],
              "answer": 1,
              "hint": "Ask what would happen to the second paragraph if those two lines were cut. Something in the counting would have no starting point.",
              "skill": "Author's purpose and structure",
              "evidence": "It does not say from which part of the cave."
            },
            {
              "q": "The report says 'a rule with no margin is a rule that will get you in real trouble one day'. What does margin mean as it is used here?",
              "choices": [
                "The blank edge left all the way around a page of writing, where nothing is printed",
                "The money left over once the costs are paid",
                "Spare time kept in hand in case something goes wrong",
                "The distance from the mouth of the cave back to the round chamber with the hole in its ceiling"
              ],
              "answer": 2,
              "hint": "The same sentence gives you two times, one for the rule and one for the sea. Whatever sits in the gap between them is the word.",
              "skill": "Word meanings",
              "evidence": "The rule for the cave is out by twenty past eleven, an hour before the window closes, because a rule with no margin is a rule that will get you in real trouble one day."
            },
            {
              "q": "Paragraphs 1 and 2 together show that the navigator's decision about where to stand was right. What shows it?",
              "choices": [
                "Sixty paces on bearing 300 from that spot ended at a stone cut with an arrow and the numbers 1871.",
                "The chamber was the only part of the cave with a dry floor.",
                "The map named the beam of light under the hole in the ceiling as the exact place to start counting the paces.",
                "The side passage was already drawn on the surveyor's map."
              ],
              "answer": 0,
              "hint": "Paragraph one is a decision with no proof behind it yet. Paragraph two is what happened when the decision was acted on. The proof is in the second one.",
              "skill": "Reading between the lines",
              "evidence": "the passage ends at a wall of rock and a floor of flat stones. One of the stones, when the lamp is held sideways, has a chisel mark cut into it: a small arrow and the numbers 1871."
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
              "q": "The navigator lays out shells in 6 rows of 6. How many shells is that?",
              "answer": "36",
              "hint": "6 × 6.",
              "skill": "Multiplying"
            },
            {
              "q": "24 feet of rope is cut into 4 equal pieces. How many feet long is each piece?",
              "answer": "6",
              "hint": "24 split into 4 equal parts.",
              "skill": "Dividing"
            },
            {
              "q": "The log shows 466 minutes, then 43 more are added and 47 are taken off. What does the log show now?",
              "answer": "462",
              "hint": "Add 466 and 43 first, then take 47 off.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "Add: 2/4 + 1/4 (write a fraction)",
              "answer": "3/4",
              "hint": "Same bottom. 2 + 1 on top.",
              "skill": "Fractions"
            },
            {
              "q": "The plan calls for 900 minutes. 490 are done and 47 more are under way. How many are still untouched?",
              "answer": "363",
              "hint": "Take 490 off 900, then take 47 off that.",
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
            "example": "3 × (12 − 5) + 8: parentheses first, 12 − 5 = 7; then 3 × 7 = 21; then add 8 to get 29."
          },
          "problems": [
            {
              "q": "The navigator walks 3/8 of a mile in 1/2 of an hour. At that pace, how many miles is that in one hour? (write a fraction)",
              "answer": "3/4",
              "hint": "For one hour, divide the amount by the time: 3/8 ÷ 1/2 = 3/8 × 2. Then simplify.",
              "skill": "Fractions"
            },
            {
              "q": "75% of the minutes counted is 30. How many were counted in all?",
              "answer": "40",
              "hint": "30 is 75 hundredths of the whole: 30 ÷ 75 × 100.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The navigator counts 21 palm trees and 35 rocks on the beach. In its simplest form, what is the ratio of palm trees to rocks? (write it like 2:3)",
              "answer": "3:5",
              "accept": [
                "3 to 5"
              ],
              "hint": "Divide both by 7.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The navigator works out (5 + 4) × 6. What is it?",
              "answer": "54",
              "hint": "Parentheses first, then multiply.",
              "skill": "Order of operations"
            },
            {
              "q": "The boat's freezer read −9 degrees at midnight and rose 4 degrees by dawn. What does it read at dawn?",
              "answer": "-5",
              "accept": [
                "−5"
              ],
              "hint": "Start at −9 and count 4 steps up.",
              "skill": "Negative numbers"
            }
          ]
        },
        "7": {
          "lesson": {
            "title": "Grade 7 numbers",
            "points": [
              "How many fit: the time you have ÷ the time each one takes. 11 hours at 2.75 hours each is 11 ÷ 2.75 = 4.",
              "Working backward: if a count rose by a quarter, the new count is 125% of the old one, so divide by 1.25 to get back to the start.",
              "Multiplying or dividing with one minus sign gives a minus answer: 3 × (−5) = −15, and −15 ÷ 3 = −5.",
              "With parentheses, undo the outside first: divide both sides, then take off the number inside."
            ],
            "example": "3(x + 7) = 33, so x + 7 = 11, so x = 4."
          },
          "problems": [
            {
              "q": "The navigator has 42 minutes to spend and each leg takes 3.5. How many legs is that enough for?",
              "answer": "12",
              "hint": "42 ÷ 3.5.",
              "skill": "Ratios and percent"
            },
            {
              "q": "A count of minutes rose by 50% to 480. What was it before?",
              "answer": "320",
              "hint": "480 is 150% of the old count.",
              "skill": "Ratios and percent"
            },
            {
              "q": "Over 7 hours the boat's fuel tank lost 119 liters in all, the same amount each hour. What was the change each hour? (Write a loss as a negative number.)",
              "answer": "-17",
              "accept": [
                "−17"
              ],
              "hint": "Share −119 into 7 equal parts: −119 ÷ 7. One minus sign, so the answer is negative.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: (x + 20) × 6 = 174",
              "answer": "9",
              "hint": "Divide both sides by 6 first, then take 20 off.",
              "skill": "Equations"
            },
            {
              "q": "A round pan has a radius of 20 centimeters. Using 3.14 for pi, what is its area in square centimeters?",
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
            "example": "y = 6x + 7 when x = 3: 6 × 3 + 7 = 25."
          },
          "problems": [
            {
              "q": "The count of paces follows the rule y = 9x + 10, where x is the number of landmarks passed. What is y when x = 4?",
              "answer": "46",
              "hint": "Put 4 in for x: 9 × 4 + 10.",
              "skill": "Linear relationships"
            },
            {
              "q": "A cube has a volume of 1,331 cubic feet. How long is one edge, in feet?",
              "answer": "11",
              "hint": "What number times itself twice over makes 1,331?",
              "skill": "Powers and roots"
            },
            {
              "q": "A 25-yard rope reaches the top of a 7-yard mast. How far is the foot of the rope from the base, in yards?",
              "answer": "24",
              "hint": "b² = c² − a² = 625 − 49 = 576. Then take the square root.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "Solve for x: 8x + 6 − 4x = 42",
              "answer": "9",
              "hint": "Collect the x's first: 4x + 6 = 42.",
              "skill": "Equations"
            },
            {
              "q": "A round tank has a radius of 10 feet and is 5 feet deep. Using 3.14 for pi, what is its volume in cubic feet?",
              "answer": "1570",
              "hint": "Volume = 3.14 × radius × radius × depth: 3.14 × 10 × 10 × 5.",
              "skill": "Area and perimeter"
            }
          ]
        }
      },
      "orders": {
        "lesson": {
          "title": "Change the unit last",
          "points": [
            "Do the arithmetic first, exactly as written.",
            "If the last step asks for the same amount in a different unit, convert it before you type."
          ],
          "example": "'Your total is a number of yards. Type it in feet.' 7 yards is 21 feet, because a yard is 3 feet."
        },
        "skill": "Following directions",
        "steps": [
          "Write the bearing from the chamber to the flat stone: 300.",
          "Divide by the height of the cave mouth in feet: 12.",
          "Subtract the hour the navigator's own rule says to be out of the cave: 11.",
          "Add the paces from the chamber to the stone, counted in tens: 6.",
          "That total is a number of paces. The notebook records distances in feet, and one pace is five feet, so type your answer in feet."
        ],
        "prompt": "Your answer:",
        "answer": "100",
        "hint": "Steps 1 to 4 leave you a count of paces. Step 5 asks for the same distance in feet, and it tells you how long a pace is."
      }
    },
    {
      "id": "cove-5",
      "title": "The Cache",
      "recon": {
        "lesson": {
          "title": "The whole map, in order",
          "points": [
            "The last notes look back over all five legs. Questions will ask for a list, a number, a word and a reason.",
            "What is in the box is a list of details.",
            "The main idea of the closing paragraph is what the writer wants you to keep."
          ],
          "example": "'In the bag: a flashlight, a map and two apples.' What was in the bag? All three things, not just one."
        },
        "title": "Chart Notes: Dig",
        "passage": [
          "At 9:10 the next morning the navigator is back at the chisel stone with a folding shovel. The stone comes up out of the sand more easily than it went down a hundred and fifty-five years ago. Under it is a foot of sand. Under the sand is a tin box the size of a suitcase, wrapped in oilcloth, sealed with wax. The lid comes off with a knife. Inside, dry, packed in wool: a brass compass, a surveyor's level, a folded chain of a hundred links for measuring, a logbook, and a bottle with a note in it.",
          "The note is the surveyor's, dated the day of the storm. It says that the boat is lost, the instruments are the property of the lighthouse board, and the map is drawn so that whoever finds it can return them. The note gives the declination, eight degrees east. That way the finder can correct the compass. It ends: I have been careful. Be careful. The navigator reads it twice in the beam of light from the ceiling and then packs the box exactly as it was found, because the museum will want to see it that way.",
          "The map worked because every line of it was something real. There was a landmark you can see, a bearing you can measure, a number of paces you can count, and a rule about the tide that you can obey. The hunt took five days and five landmarks, with no X. The box had waited a century and a half for someone to read carefully. At 10:30, the navigator is on the shelf. The boat is in the cove at noon. The last line in the notebook, under the surveyor's own last line, says: found, all instruments present, careful."
        ],
        "questions": [
          {
            "q": "What was in the tin box?",
            "choices": [
              "Gold coins, a folded chain of a hundred links, and a bottle with a note inside",
              "A folding shovel, a brass lamp, a logbook and a bottle with a note pushed inside",
              "Nothing but sand and wool, because the box had already been opened once before",
              "A compass, a level, a measuring chain, a logbook and a bottle with a note"
            ],
            "answer": 3,
            "hint": "The last sentence of paragraph 1.",
            "skill": "Finding details"
          },
          {
            "q": "What declination did the surveyor's note give?",
            "choices": [
              "Six degrees east, the modern value",
              "Ten degrees west, as measured today",
              "Eight degrees east",
              "Zero"
            ],
            "answer": 2,
            "hint": "Paragraph 2, the sentence with 'declination'.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 1, what is 'oilcloth'?",
            "choices": [
              "Cloth treated with oil to keep water out",
              "A cloth soaked in wax and folded around a box",
              "Wool packed around the instruments to keep them dry",
              "A rope tied around the box"
            ],
            "answer": 0,
            "hint": "The box was 'wrapped in oilcloth, sealed with wax' and the contents were dry.",
            "skill": "Word meanings"
          },
          {
            "q": "Why does the navigator pack the box exactly as it was found?",
            "choices": [
              "Because the lid will not close otherwise",
              "Because the museum will want to see it the way it was buried",
              "Because the note says to",
              "Because the instruments are the property of the lighthouse board"
            ],
            "answer": 1,
            "hint": "The last sentence of paragraph 2.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 3 mostly about?",
            "choices": [
              "The boat's arrival",
              "The wax seal",
              "What the surveyor's note said and how the navigator repacked the box",
              "Why the map worked: every line was real, measurable and obeyable"
            ],
            "answer": 3,
            "hint": "The first sentence of paragraph 3 says why the map worked.",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Cache math",
          "points": [
            "Half the length takes half the links.",
            "Different bottoms: make them the same first. 1/2 + 1/8 = 4/8 + 1/8 = 5/8.",
            "Inches in a foot of sand: 12.",
            "Two-step: total paces on the map, then feet."
          ],
          "example": "120 + 80 + 50 = 250 paces."
        },
        "problems": [
          {
            "q": "The map's legs were 200, 300, 150 and 60 paces. How many paces in all?",
            "answer": "710",
            "hint": "200 + 300 = 500, + 150 = 650, + 60.",
            "skill": "Adding and subtracting"
          },
          {
            "q": "710 paces at 5 feet a pace is how many feet?",
            "answer": "3550",
            "accept": [
              "3,550"
            ],
            "hint": "710 × 5.",
            "skill": "Multiplying"
          },
          {
            "q": "The measuring chain has 100 links and is 66 feet long. If every link is the same, how many links make 33 feet?",
            "answer": "50",
            "hint": "33 is half of 66, so half the links.",
            "skill": "Fractions"
          },
          {
            "q": "The navigator dug 1/2 of the hole before lunch and 3/8 of it after. How much of the hole is dug? (write a fraction)",
            "answer": "7/8",
            "hint": "Make the bottoms the same: 1/2 is 4/8. Then add the tops.",
            "skill": "Fractions"
          },
          {
            "q": "The navigator dug 1 foot of sand. A foot is 12 inches. The shovel takes 3 inches a scoop. How many scoops?",
            "answer": "4",
            "hint": "12 ÷ 3.",
            "skill": "Dividing"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "Put the two halves together",
            "points": [
              "The last question is never answered in one place. Plan on one fact from one paragraph and one from another.",
              "Say the two facts out loud and then say 'so'. Whatever comes after 'so' is usually sitting there in the choices.",
              "A choice that needs something the report never mentions is out, however sensible it sounds on its own."
            ],
            "example": "Paragraph one: the post office shuts at four. Paragraph three: the parcel is always stamped the following morning. So anything handed in late loses a day. Neither line says that by itself."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea of the whole report?",
              "choices": [
                "The tin box held a brass compass, a surveyor's level, a folded chain of a hundred links, a logbook and a bottle with a note.",
                "Old instruments from a lighthouse survey turn out to be worth far more money than any treasure in a pirate story ever was.",
                "The surveyor hid the box so that nobody would ever find it, and drew the map only as a private record of where he had put it.",
                "The map worked because every line of it was something real that could be seen, measured, counted or obeyed."
              ],
              "answer": 3,
              "hint": "The dig, the note, the summing up. The last paragraph states it almost outright; find the choice that matches. One choice is the opposite of what the note says.",
              "skill": "Central idea and evidence",
              "evidence": "The map worked because every line of it was something real. There was a landmark you can see, a bearing you can measure, a number of paces you can count, and a rule about the tide that you can obey."
            },
            {
              "q": "Claim: the surveyor meant the box to be found. Which sentence from the report best supports that claim?",
              "choices": [
                "The navigator reads it twice in the beam of light from the ceiling and then packs the box exactly as it was found, because the museum will want to see it that way.",
                "Inside, dry, packed in wool: a brass compass, a surveyor's level, a folded chain of a hundred links for measuring, a logbook, and a bottle with a note in it.",
                "It says that the boat is lost, the instruments are the property of the lighthouse board, and the map is drawn so that whoever finds it can return them.",
                "The note is the surveyor's, dated the day of the storm."
              ],
              "answer": 2,
              "hint": "The claim is about what the surveyor intended. Find the sentence that says why the map was drawn at all.",
              "skill": "Finding details",
              "evidence": "It says that the boat is lost, the instruments are the property of the lighthouse board, and the map is drawn so that whoever finds it can return them."
            },
            {
              "q": "Why does the report end by naming what each line of the map was: a landmark, a bearing, a count, a rule?",
              "choices": [
                "It names the pattern behind five days of work, so the point of the report becomes the method rather than the box.",
                "It reminds the reader of the order the five landmarks came in, from the wreck on the beach to the stone with the chisel mark.",
                "It explains how a surveyor's chain of a hundred links is used, laid flat along the ground and counted end over end to measure a distance.",
                "It gives instructions for drawing a map of another island."
              ],
              "answer": 0,
              "hint": "Those two sentences add no new event. Ask what a writer is doing when the last paragraph explains why everything before it worked.",
              "skill": "Author's purpose and structure",
              "evidence": "The map worked because every line of it was something real. There was a landmark you can see, a bearing you can measure, a number of paces you can count, and a rule about the tide that you can obey."
            },
            {
              "q": "The surveyor's note ends 'I have been careful. Be careful.' What is that second sentence doing?",
              "choices": [
                "Warning that the instruments are fragile and easily broken on the way out.",
                "Handing the same habit on to whoever comes next, as an instruction.",
                "Apologizing for the state the box was left in.",
                "Asking the finder to keep the box hidden where it is."
              ],
              "answer": 1,
              "hint": "The first sentence is about the writer and the second one changes who it is aimed at. Look at what the navigator writes at the very end of the report.",
              "skill": "Word meanings",
              "evidence": "The last line in the notebook, under the surveyor's own last line, says: found, all instruments present, careful."
            },
            {
              "q": "Paragraphs 2 and 3 together explain why the last word in the navigator's notebook is 'careful'. Why that word?",
              "choices": [
                "The navigator was worried about carrying the heavy box down to the boat.",
                "The museum had asked for that particular word in the report.",
                "It is the word the map used for its rule about the tide, which was underlined twice in the corner of the map.",
                "The surveyor's note ended with the same instruction, and the whole week had been spent obeying it."
              ],
              "answer": 3,
              "hint": "One paragraph gives you the surveyor's last two words. The other gives you the navigator's. Read them one under the other, which is how the report says they are written.",
              "skill": "Reading between the lines",
              "evidence": "The last line in the notebook, under the surveyor's own last line, says: found, all instruments present, careful."
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
              "q": "Every box needs 6 instruments, and there are 9 boxes. How many instruments is that?",
              "answer": "54",
              "hint": "9 groups of 6, so 9 × 6.",
              "skill": "Multiplying"
            },
            {
              "q": "The navigator splits 54 gold coins in half. How many coins is one half?",
              "answer": "27",
              "hint": "Half of 54.",
              "skill": "Dividing"
            },
            {
              "q": "The navigator needs 500 inches of rope and has 137 inches. How many more inches are needed?",
              "answer": "363",
              "hint": "500 − 137.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "The day's work is cut into 6 equal parts and the navigator has finished 5 of them. What fraction is done? (write a fraction)",
              "answer": "5/6",
              "hint": "5 parts out of 6.",
              "skill": "Fractions"
            },
            {
              "q": "A floor is 9 squares wide and 7 squares long. The navigator has covered 9 squares. How many squares are left to cover?",
              "answer": "54",
              "hint": "9 × 7 squares in all, then take 9 off.",
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
              "q": "The plan allows 135.75 minutes. The navigator uses 38.65 minutes on the first leg and 33.4 on the second. How many minutes are left?",
              "answer": "63.7",
              "hint": "Add the two amounts used first, then take that from 135.75. Line up the points.",
              "skill": "Decimals"
            },
            {
              "q": "Of 240 coins, 25% are struck off the list. How many are left on it?",
              "answer": "180",
              "hint": "25% of 240 is 60. Take that off 240.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The navigator shares 24 coins between two teams in the ratio 3 to 5. How many does the smaller share get?",
              "answer": "9",
              "hint": "3 + 5 = 8 parts. 24 ÷ 8 = 3 for one part.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The navigator works out 3 × 11 − 2 × 3. What is it?",
              "answer": "27",
              "hint": "Do both multiplications first, then subtract.",
              "skill": "Order of operations"
            },
            {
              "q": "The coldest reading in the boat's freezer was −15 degrees and the warmest was −4 degrees. How many degrees apart are they?",
              "answer": "11",
              "hint": "From −15 up to −4.",
              "skill": "Negative numbers"
            }
          ]
        },
        "7": {
          "lesson": {
            "title": "Grade 7 numbers",
            "points": [
              "Find the rate for one first: 3 jobs in 7.5 hours is 7.5 ÷ 3 = 2.5 hours each, so 7 jobs take 17.5 hours.",
              "Percent of a number: turn the percent into a fraction of 100, then multiply.",
              "Below zero, going up adds and going down subtracts. Walk the number line one step at a time.",
              "With parentheses, undo the outside first: divide both sides, then take off the number inside."
            ],
            "example": "4(x + 5) = 36, so x + 5 = 9, so x = 4."
          },
          "problems": [
            {
              "q": "8 legs took 10 minutes. At the same rate, how many minutes would 12 legs take?",
              "answer": "15",
              "hint": "One leg takes 10 ÷ 8 = 1.25. Then × 12.",
              "skill": "Ratios and percent"
            },
            {
              "q": "25% of the 60 inches of rope were lost. How many inches was that?",
              "answer": "15",
              "hint": "25% of 60: 25/100 × 60.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The boat's freezer had a low of −9 degrees and a high, during a power cut, of 21 degrees. How many degrees apart are they?",
              "answer": "30",
              "hint": "9 below zero plus 21 above zero.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: 2(x + 6) = 24",
              "answer": "6",
              "hint": "Divide both sides by 2 to get x + 6 = 12.",
              "skill": "Equations"
            },
            {
              "q": "On the plan, 3 inches stand for 75 feet. How many feet does 1 inch stand for?",
              "answer": "25",
              "hint": "75 ÷ 3.",
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
              "Collect the x's first: 10x − 7x is 3x, and an x on its own means 1x."
            ],
            "example": "5, 11, 17, … adds 6 each step. The 6th number is 5 steps on: 5 + 5 × 6 = 35."
          },
          "problems": [
            {
              "q": "The count of inches goes 10, 18, 26, 34, and on. What is the 8th number in the list?",
              "answer": "66",
              "hint": "It starts at 10 and adds 8 each step. The number you want is 7 steps on from 10.",
              "skill": "Linear relationships"
            },
            {
              "q": "What is (6 × 4)²?",
              "answer": "576",
              "hint": "6 × 4 = 24 first, then square it.",
              "skill": "Powers and roots"
            },
            {
              "q": "A right triangle has short sides of 5 and 12 feet. How long is its longest side, in feet?",
              "answer": "13",
              "hint": "5² + 12² = 169. The longest side is the square root of that.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "Solve for x: 4x − 2x = 8",
              "answer": "4",
              "hint": "4 − 2 = 2, so 2x = 8.",
              "skill": "Equations"
            },
            {
              "q": "Which is bigger, 6 × 10^2 or 5 × 10^3? Write the bigger one out in full.",
              "answer": "5000",
              "hint": "5 × 10^3 is ten times 5 × 10^2, and 6 is not ten times 5.",
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
            "If the last step asks for a word, a number is wrong."
          ],
          "example": "'Type the name on the map, in capital letters' means a word, not your number."
        },
        "skill": "Following directions",
        "steps": [
          "Write the number of instruments in the box, not counting the logbook and the bottle: 3.",
          "Multiply by the number of links in the chain: 100.",
          "Subtract 71, the last two digits of the year the box was buried.",
          "Add the number of landmarks: 5.",
          "Ignore steps 1 to 4. Type the last word of the surveyor's note, in capital letters."
        ],
        "prompt": "Your answer:",
        "answer": "CAREFUL",
        "accept": [
          "careful",
          "Careful",
          "careful.",
          "CAREFUL."
        ],
        "hint": "Step 5 throws away the arithmetic. Find the surveyor's note and copy its last word."
      }
    }
  ]
};
if (window.BASECAMP_MISSIONS && window.BASECAMP_MISSIONS.register) window.BASECAMP_MISSIONS.register(C);
else (window.BASECAMP_CAMPAIGNS_PENDING = window.BASECAMP_CAMPAIGNS_PENDING || []).push(C);
})();
