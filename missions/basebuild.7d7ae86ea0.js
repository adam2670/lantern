// ODYSSEY — campaign "basebuild". GENERATED, do not edit.
// Source of truth: content/missions-full.js. Rebuild with:  python3 tools/split-missions.py
// RULE: nothing in this file is about the person using it. Content only.
(function () {
var C = {
  "id": "basebuild",
  "kind": "build",
  "readingLevel": {
    "fk": 5.9,
    "cl": 5.6
  },
  "grade": "5",
  "kindLabel": "Build",
  "form": "builderbot",
  "title": "Frontier Base",
  "subtitle": "A clearing on the edge of the wild",
  "pitch": "Five days to build a base that survives the night: walls, gate, tower, workshop, beacon. Plan it, measure it, build it in order.",
  "scene": "assets/scene-base.jpg",
  "progress": {
    "unit": "structures",
    "total": 5
  },
  "dayNoun": "Build day",
  "stageNoun": "Structure",
  "finalNoun": "Beacon lit",
  "stages": [
    "Walls",
    "Gate",
    "Watchtower",
    "Workshop",
    "Beacon"
  ],
  "reconNoun": "Blueprint",
  "legs": {
    "recon": "Blueprints",
    "nav": "Materials",
    "orders": "Build order",
    "debrief": "Inspection"
  },
  "fact": "A base is only as strong as the step you skipped.",
  "buildArt": "base",
  "finale": {
    "prompt": "The beacon is stacked. Pick the flame.",
    "options": [
      {
        "label": "Amber",
        "color": "#FFB454"
      },
      {
        "label": "Blue",
        "color": "#4FD1FF"
      },
      {
        "label": "Green",
        "color": "#4FD18B"
      },
      {
        "label": "Violet",
        "color": "#B57BFF"
      }
    ],
    "done": "Beacon lit. The base holds."
  },
  "patrols": [
    {
      "id": "base-1",
      "title": "The Walls",
      "recon": {
        "lesson": {
          "title": "Reading a blueprint",
          "points": [
            "Read the five questions first. Two want details, one wants a word, one asks why it is built that way, one asks what a paragraph is mostly about.",
            "'Why is it built like that' questions: the blueprint shows the reason. Look for what goes wrong when it is done the other way.",
            "Builder's words are often explained right where they appear. Read the words around a new word to find its meaning."
          ],
          "example": "A note says: 'Keep the bread in a box, or the mice will find it.' That is the reason for the box, even though it never says 'because'."
        },
        "title": "Blueprint: The Walls",
        "passage": [
          "Every base Oda has ever built started with the walls, and every wall started with a hole. Before a single block goes up, the crew digs a trench along the whole line of the wall until they hit solid ground: packed clay or rock, never loose dirt. That trench, filled with stone, is the foundation, the part of the wall that sits below the ground and carries everything above it. A wall built straight onto loose dirt looks fine on the day it is finished and leans within a year, because dirt shifts when it rains and stone does not.",
          "Above the foundation the wall goes up in rows. The lower rows are stone blocks, heavy and slow to move but impossible to burn. The upper rows are squared logs, lighter and quicker to stack, which is why a crew can finish a wall in a day once the stone is in. Oda uses a string stretched tight between two stakes to keep each row level. A row that is even a finger's width off at one end will be a hand's width off by the fifth row, and a leaning wall is a wall you build twice.",
          "The last thing that goes on is not a block at all. Every few paces the crew sets a short post inside the wall, angled back into the ground. Oda calls these the wall's legs. They do nothing on a calm day. In a storm, when the wind pushes on the whole length of the wall at once, the legs are the reason it is still standing in the morning. Her rule, chalked on the first block of every base: build for the storm, not for the day."
        ],
        "questions": [
          {
            "q": "What does the crew dig down to before building?",
            "choices": [
              "Loose dirt, as long as it is dry and packed down",
              "Solid ground: packed clay or rock",
              "Water, so the trench can be filled and sealed",
              "Sand, which drains and will not hold water"
            ],
            "answer": 1,
            "hint": "Paragraph 1, the sentence about the trench.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 1, what is the 'foundation'?",
            "choices": [
              "The top row of logs",
              "The stone blocks in the lower rows that cannot be burned",
              "The trench dug along the line of the wall",
              "The part of the wall below the ground that carries everything above it"
            ],
            "answer": 3,
            "hint": "The sentence with 'the foundation' explains it right there.",
            "skill": "Word meanings"
          },
          {
            "q": "What does Oda use to keep each row level?",
            "choices": [
              "A wooden ruler cut to one block high",
              "Her own eye, sighting along the row",
              "A string stretched tight between two stakes",
              "A ladder laid flat along the row"
            ],
            "answer": 2,
            "hint": "Paragraph 2, the sentence that starts 'Oda uses'.",
            "skill": "Finding details"
          },
          {
            "q": "Why does the crew dig a trench before building up?",
            "choices": [
              "Because rows that are not level make a wall you build twice",
              "So the lower rows of stone can be set below the level of the ground",
              "Because a wall on loose dirt leans when the dirt shifts, and stone does not shift",
              "Because a trench gives the crew somewhere to stand while they stack the upper rows of logs"
            ],
            "answer": 2,
            "hint": "The last sentence of paragraph 1 tells you what happens to a wall on dirt.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 3 mostly about?",
            "choices": [
              "How many rows of stone and how many rows of log a finished wall needs",
              "The angled posts that hold the wall up in a storm, and Oda's rule",
              "How to stretch a string between two stakes so that every row stays level",
              "Where a crew should dig to find the packed clay or rock the trench needs"
            ],
            "answer": 1,
            "hint": "Every sentence in paragraph 3 is about the posts and the storm.",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Blocks and rows",
          "points": [
            "Area of a wall face: length × height. A 15 m wall that is 4 m tall is 15 × 4 = 60 square meters.",
            "How many blocks fit in a row: the wall's length divided by one block's length. A 35 m row of 5 m logs is 35 ÷ 5 = 7.",
            "Blocks per row times rows: 9 rows of 11 blocks is 9 × 11 = 99.",
            "Leftovers: 50 ÷ 8 is 6 with 2 left over, because 6 × 8 = 48."
          ],
          "example": "A shed wall needs 50 blocks plus 5 for the corners, and each weighs 10 kilograms. 50 + 5 = 55 blocks, then 55 × 10 = 550 kilograms."
        },
        "problems": [
          {
            "q": "The wall is 24 meters long and 3 meters tall. What is the area of its face, in square meters?",
            "answer": "72",
            "hint": "24 × 3.",
            "skill": "Area and perimeter"
          },
          {
            "q": "Each stone block is 2 meters long. How many blocks make one 24-meter row?",
            "answer": "12",
            "hint": "24 ÷ 2.",
            "skill": "Dividing"
          },
          {
            "q": "The wall needs 6 rows of 12 blocks. How many blocks is that?",
            "answer": "72",
            "hint": "12 × 6.",
            "skill": "Multiplying"
          },
          {
            "q": "The crew has 100 stone blocks and builds rows of 12. After building as many full rows as it can, how many blocks are left over?",
            "answer": "4",
            "hint": "12 × 8 = 96. How many blocks are left after 96?",
            "skill": "Dividing"
          },
          {
            "q": "The wall needs 72 blocks for the face and 8 more for the corners. Each block weighs 40 kilograms. How many kilograms is that?",
            "answer": "3200",
            "hint": "72 + 8 = 80 blocks first. Then 80 × 40.",
            "skill": "Multi-step problems"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "What holds all three",
            "points": [
              "The central idea has to cover the whole blueprint. Give each paragraph a four-word label, then ask what all three labels are serving.",
              "The wrong answers are usually true. They cover one paragraph, or they are a saying about building in general that the page never makes.",
              "Then four more moves: prove a claim with one line, name what a paragraph is for, work a word out from its sentence, and hold two paragraphs together."
            ],
            "example": "Three paragraphs about a roof: how the beams are cut, why the slope is steep, what happens in a heavy snow. 'The beams are cut to length' covers one paragraph. 'Roofs keep rain out' covers nothing that was said. 'Every choice in the roof is made for the worst weather it will see' covers all three."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea of the whole blueprint?",
              "choices": [
                "The upper rows of the wall are squared logs rather than stone blocks, which is why a crew can finish a wall in a single day.",
                "Every part of a wall is built against something that has not happened yet: rain, a year of settling, a storm.",
                "Stone is the strongest building material anyone has ever used, and a wall made entirely of it would never need any other part.",
                "A wall built straight onto loose dirt will stand just as long as one set on a stone foundation, since the rows above it are the same either way."
              ],
              "answer": 1,
              "hint": "The trench, the level string, the angled posts. Ask what all three are protecting against, and cross off the choice the first paragraph flatly denies.",
              "skill": "Central idea and evidence",
              "evidence": "Her rule, chalked on the first block of every base: build for the storm, not for the day."
            },
            {
              "q": "Claim: a small error at the start of a wall does not stay small. Which sentence from the blueprint best supports that claim?",
              "choices": [
                "Every base Oda has ever built started with the walls, and every wall started with a hole.",
                "That trench, filled with stone, is the foundation, the part of the wall that sits below the ground and carries everything above it.",
                "Oda uses a string stretched tight between two stakes to keep each row level.",
                "A row that is even a finger's width off at one end will be a hand's width off by the fifth row, and a leaning wall is a wall you build twice."
              ],
              "answer": 3,
              "hint": "Describing the fix is not proving the problem. Find the sentence that measures the same mistake twice, once at the start and once further up.",
              "skill": "Finding details",
              "evidence": "A row that is even a finger's width off at one end will be a hand's width off by the fifth row, and a leaning wall is a wall you build twice."
            },
            {
              "q": "How is the first paragraph organized?",
              "choices": [
                "It lists the tools the crew needs on the first morning.",
                "It compares a stone wall with a wall made of logs.",
                "It gives a cause and its effect: dirt shifts in rain, so a wall on dirt leans.",
                "It gives the steps of hanging a gate in the order they happen."
              ],
              "answer": 2,
              "hint": "Look for the signpost word. A sentence with because in the middle of it is usually telling you the shape of the whole paragraph.",
              "skill": "Author's purpose and structure",
              "evidence": "A wall built straight onto loose dirt looks fine on the day it is finished and leans within a year, because dirt shifts when it rains and stone does not."
            },
            {
              "q": "Oda calls the short angled posts 'the wall's legs'. What does that name tell you about what they do?",
              "choices": [
                "They lift the wall up clear of the wet ground",
                "They are what the whole wall stands on, buried underneath the foundation and carrying its weight",
                "They keep the wall from being pushed over, the way legs keep a body from toppling",
                "They let the wall be taken apart and carried somewhere else"
              ],
              "answer": 2,
              "hint": "Do not stop at the picture. Read the two sentences after the name, about calm days and about storms, and let them tell you the job.",
              "skill": "Word meanings",
              "evidence": "In a storm, when the wind pushes on the whole length of the wall at once, the legs are the reason it is still standing in the morning."
            },
            {
              "q": "Paragraphs 1 and 3 together explain why Oda's chalked rule is about a storm rather than about a day. Why is it?",
              "choices": [
                "The trench and the legs are what make a wall quicker to finish, so the crew can put up the whole line in a single day.",
                "The trench and the legs are both work nobody can see and nobody needs until the weather turns.",
                "A storm is the only thing that can set fire to a wall of squared logs, and fire is the one danger the whole wall is built to survive.",
                "Walls are only ever built in the season when storms are likely, so that the crew can watch the legs being tested before they leave."
              ],
              "answer": 1,
              "hint": "Paragraph one buries something under the ground. Paragraph three sets something inside the wall that does nothing on a calm day. Ask what those two have in common.",
              "skill": "Reading between the lines",
              "evidence": "They do nothing on a calm day."
            }
          ]
        }
      },
      "navByGrade": {
        "3": {
          "lesson": {
            "title": "Grade 3 numbers",
            "points": [
              "Multiplication facts: 5 × 9 means 5 groups of 9.",
              "Sharing equally is dividing.",
              "Taking away: line up the ones, tens and hundreds, then subtract each column. 475 − 23 = 452.",
              "A whole is all the parts: 5/5. Take away the part that is done to see what is left: 5/5 − 2/5 = 3/5."
            ],
            "example": "A mat 3 squares long and 5 squares wide is 3 rows of 5: 5 + 5 + 5 = 15 squares."
          },
          "problems": [
            {
              "q": "Oda counted 7 blocks yesterday and three times as many today. How many blocks today?",
              "answer": "21",
              "hint": "Three times 7: 7 + 7 + 7.",
              "skill": "Multiplying"
            },
            {
              "q": "Oda packs 56 blocks into rows of 7. How many rows is that?",
              "answer": "8",
              "hint": "How many 7s make 56?",
              "skill": "Dividing"
            },
            {
              "q": "Oda starts with 338 stone blocks and uses 32. How many are left?",
              "answer": "306",
              "hint": "338 − 32.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "4/8 of the day's work was done yesterday. What fraction is still to do? (write a fraction)",
              "answer": "4/8",
              "hint": "The whole job is 8/8. Take 4/8 off it.",
              "skill": "Fractions"
            },
            {
              "q": "A square floor mat is 4 squares on each side. How many squares is that?",
              "answer": "16",
              "hint": "4 rows of 4.",
              "skill": "Area and perimeter"
            }
          ]
        },
        "6": {
          "lesson": {
            "title": "Grade 6 numbers",
            "points": [
              "Multiplying a decimal by a whole number: multiply as if there were no point, then put the point back. 6 × 1.15: 6 × 115 = 690, so 6.90, which is 6.9.",
              "Percent: write the part over the whole, then make it out of 100. 15 out of 50 is 30 out of 100, or 30%.",
              "A ratio tells you how many of one thing for each group of the other.",
              "Order of operations: parentheses, then multiply and divide, then add and subtract."
            ],
            "example": "Solve 500 − x = 120: x is what you take off 500 to leave 120, so x = 500 − 120 = 380."
          },
          "problems": [
            {
              "q": "Each wall section takes 0.85 meters of timber. How many meters for 7 wall sections?",
              "answer": "5.95",
              "hint": "Work out 7 × 85, then put the point back 2 places.",
              "skill": "Decimals"
            },
            {
              "q": "24 of the 120 stone blocks are set aside. What percent is that? (write just the number)",
              "answer": "20",
              "accept": [
                "20%"
              ],
              "hint": "24 out of 120, then out of 100.",
              "skill": "Ratios and percent"
            },
            {
              "q": "For every 1 row there are 3 stone blocks. There are 18 stone blocks. How many rows?",
              "answer": "6",
              "hint": "18 ÷ 3 = 6 groups. Each group has 1 row.",
              "skill": "Ratios and percent"
            },
            {
              "q": "Oda works out 5 + 6 × 8. What is it?",
              "answer": "53",
              "hint": "Multiply before you add.",
              "skill": "Order of operations"
            },
            {
              "q": "Solve for x: 900 − x = 363",
              "answer": "537",
              "hint": "x is what is left when 363 is taken off 900.",
              "skill": "Equations"
            }
          ]
        },
        "7": {
          "lesson": {
            "title": "Grade 7 numbers",
            "points": [
              "A unit rate times how many gives the total: 1.5 meters each for 14 sections is 14 × 1.5 = 21 meters.",
              "Percent change: the change divided by the starting number, then out of 100. From 60 to 75 is a change of 15, and 15 out of 60 is 25%.",
              "Below zero, going up adds and going down subtracts. Walk the number line one step at a time.",
              "A two-step equation: undo the adding first, then undo the multiplying."
            ],
            "example": "45 − 4x = 17, so 4x = 45 − 17 = 28, so x = 7."
          },
          "problems": [
            {
              "q": "One wall section needs 1.25 meters. How many meters do 24 wall sections need?",
              "answer": "30",
              "hint": "24 × 1.25.",
              "skill": "Ratios and percent"
            },
            {
              "q": "Oda counted 80 stone blocks on the first pass and 120 on the second. By what percent did the count change? (write just the number)",
              "answer": "50",
              "accept": [
                "50%"
              ],
              "hint": "The change is 40. 40 out of 80, then out of 100.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The ledger reads −10 blocks. How many blocks must be added to bring it back to zero?",
              "answer": "10",
              "hint": "From −10 up to 0.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: 40 − 6x = 22",
              "answer": "3",
              "hint": "Move 6x to the right and 22 to the left: 6x = 18.",
              "skill": "Equations"
            },
            {
              "q": "On the plan, 1 cm stands for 20 meters. The wall is really 180 meters long. How many cm is it on the plan?",
              "answer": "9",
              "hint": "180 ÷ 20.",
              "skill": "Ratios and percent"
            }
          ]
        },
        "8": {
          "lesson": {
            "title": "Grade 8 numbers",
            "points": [
              "A straight-line rule is y = mx + b: b is where you start, m is what you add each step.",
              "Powers: 4³ means 4 × 4 × 4 = 64. For 10 to a power, the power counts the zeros: 700,000 is 7 × 10^5.",
              "Pythagoras: in a right triangle a² + b² = c², and c is always the longest side.",
              "With x on both sides, move all the x's to one side first, then all the plain numbers to the other."
            ],
            "example": "A tank holds 80 liters and drains 7 liters each hour: y = 80 − 7x. After 3 hours, y = 80 − 21 = 59 liters."
          },
          "problems": [
            {
              "q": "Oda starts with 66 stone blocks and uses 6 every hour. How many are left after 9 hours?",
              "answer": "12",
              "hint": "6 × 9 = 54 used, taken off 66.",
              "skill": "Linear relationships"
            },
            {
              "q": "A cube is 5 small cubes along every edge. How many small cubes make it up?",
              "answer": "125",
              "hint": "5³ means 5 × 5 × 5.",
              "skill": "Powers and roots"
            },
            {
              "q": "A 13-meter cable runs from the top of a post to a point 12 meters away on the ground. How tall is the post, in meters?",
              "answer": "5",
              "hint": "a² = c² − b² = 169 − 144 = 25. Then take the square root.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "Solve for x: 4x = 2x + 4",
              "answer": "2",
              "hint": "Take 2x off both sides: 2x = 4. Then divide by 2.",
              "skill": "Equations"
            },
            {
              "q": "Oda counts 60,000 stone blocks. Written as 6 × 10 to a power, what is the power?",
              "answer": "4",
              "hint": "Count the zeros after 6.",
              "skill": "Powers and roots"
            }
          ]
        }
      },
      "orders": {
        "lesson": {
          "title": "Build order with a limit",
          "points": [
            "Do the steps in order and write the running count.",
            "A step that says 'if the total is more than', can only be checked after you have the total. Read to the end first."
          ],
          "example": "4 rows of stone plus 6 rows of logs is 10. Is 10 more than 8? Then the limit applies."
        },
        "skill": "Following directions",
        "steps": [
          "Stack 4 rows of stone blocks on the foundation.",
          "Stack 6 rows of squared logs on top of the stone.",
          "Count the rows you have built.",
          "Take 2 rows of logs off again, because Oda's string shows the top of the wall leaning.",
          "Put 1 row of logs back on in the last hour of work.",
          "Type the number of rows, unless the wall stands more than 8 rows high, in which case add the 2 angled posts Oda calls the wall's legs and type that total instead."
        ],
        "prompt": "Your answer:",
        "answer": "11",
        "hint": "Work steps 4 and 5 on the row count before you look at step 6. Step 6 checks the wall against 8 rows and can change what you type."
      }
    },
    {
      "id": "base-2",
      "title": "The Gate",
      "recon": {
        "lesson": {
          "title": "The weak point",
          "points": [
            "When a blueprint says something is 'the weakest point', the questions will ask why and what is done about it. Track both.",
            "Builder's words are often explained in the same sentence. Read the words right after a new word."
          ],
          "example": "A story says a boat's weakest point is its bottom, because rocks hit there first. Then it says the builder adds a second layer of wood. That is the why and the fix."
        },
        "title": "Blueprint: The Gate",
        "passage": [
          "A wall with no gate is a trap for the people inside it, so the second day is the gate. It is also the weakest point of the whole base, because it is the one part of the wall that has to move. Oda builds the gate as a frame: two tall posts sunk deep into the foundation, a heavy crossbar joining them at the top, and the doors hung from the posts on iron hinges. The post on the hinge side is always the thicker of the two, because it carries the weight of the door every time it swings.",
          "A plain rectangle of wood has a weakness. Push on one corner and the whole frame folds sideways into a slanted shape, like a box that has been sat on. So every gate frame gets a brace, which is a beam fixed diagonally from one corner to the opposite one. The brace turns the rectangle into two triangles, and a triangle cannot fold without breaking a side. Oda says it is the cheapest piece of wood in the base and the one she would never leave out.",
          "The doors themselves are two layers of planks, the outer layer running up and down and the inner layer running side to side, nailed through both. That way no single crack can run the full height of the door. The bar that locks it drops into iron hooks on the inside, where nobody outside can reach it. When the crew finishes, Oda pushes the door open and shut fifty times before she will call it done. If it sticks on the fiftieth, it is not done."
        ],
        "questions": [
          {
            "q": "Why is the post on the hinge side thicker?",
            "choices": [
              "It looks better beside the heavy crossbar at the top of the frame",
              "It holds the bar that drops into the iron hooks on the inside",
              "Thick posts are easier to find than thin ones when a crew is building",
              "It carries the weight of the door every time it swings"
            ],
            "answer": 3,
            "hint": "The last sentence of paragraph 1.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 2, what is a 'brace'?",
            "choices": [
              "A kind of hinge",
              "The heavy crossbar that joins the two tall posts at the top",
              "The thicker of the two posts, the one the doors are hung from on iron hinges",
              "A beam fixed diagonally from one corner of the frame to the opposite one"
            ],
            "answer": 3,
            "hint": "The sentence that starts 'So every gate frame gets a brace'.",
            "skill": "Word meanings"
          },
          {
            "q": "How many times does Oda push the door open and shut before calling it done?",
            "choices": [
              "Five",
              "Fifty",
              "Fifteen",
              "Five hundred"
            ],
            "answer": 1,
            "hint": "The end of paragraph 3.",
            "skill": "Finding details"
          },
          {
            "q": "Why does a diagonal brace stop the frame from folding?",
            "choices": [
              "It makes the frame heavier",
              "It doubles the wood at the corners where the frame is weakest",
              "It is the cheapest piece of wood in the whole base, so a crew can afford to use two of them",
              "It turns the rectangle into two triangles, and a triangle cannot fold without breaking"
            ],
            "answer": 3,
            "hint": "Paragraph 2, the sentence about triangles.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 3 mostly about?",
            "choices": [
              "How the two tall posts are sunk into the foundation",
              "Why the gate is the weakest point of the wall",
              "How the doors are built in two layers, locked from inside, and tested",
              "Where the iron for the hinges comes from"
            ],
            "answer": 2,
            "hint": "Paragraph 3 covers the planks, the lock bar and the test. Which answer includes all three?",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Timber, hinges and nails",
          "points": [
            "Two steps: 3 boards of 7 m each is 3 × 7 = 21, then add a 2 m board for 23 m.",
            "Cost of several: price × how many. Five locks at $9 each cost 9 × 5 = $45.",
            "Perimeter: add all four sides. A pen 7 m by 2 m is 7 + 2 + 7 + 2 = 18 m.",
            "1,000 − 360: think 999 − 360 = 639, then add 1 to get 640."
          ],
          "example": "1/5 of a fence is painted in the morning and 3/5 in the afternoon. Same bottom, so add the tops: 4/5 is painted."
        },
        "problems": [
          {
            "q": "The gate frame needs two posts of 5 meters each and one crossbar of 4 meters. How many meters of timber is that?",
            "answer": "14",
            "hint": "2 × 5 first. Then add 4.",
            "skill": "Multi-step problems"
          },
          {
            "q": "Iron hinges cost $6 each. The gate needs 4. How much do the hinges cost?",
            "answer": "24",
            "hint": "6 × 4.",
            "accept": [
              "$24",
              "24.00",
              "$24.00"
            ],
            "skill": "Money and decimals"
          },
          {
            "q": "The gate opening is 4 meters wide and 3 meters tall. What is its perimeter in meters?",
            "answer": "14",
            "hint": "Add all four sides: 4 + 3 + 4 + 3.",
            "skill": "Area and perimeter"
          },
          {
            "q": "The crew started the day with 1,000 nails and used 425 on the doors. How many nails are left?",
            "answer": "575",
            "hint": "1,000 − 425. Think of 1,000 as 999 + 1.",
            "skill": "Adding and subtracting"
          },
          {
            "q": "The gate was 2/6 hung before the rain and 3/6 more after it stopped. What fraction of the gate is hung? (write a fraction)",
            "answer": "5/6",
            "hint": "Same bottom. Add the tops: 2 + 3.",
            "skill": "Fractions"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "The sentence that carries it",
            "points": [
              "A supporting sentence has to settle the claim on its own. Say the claim, read your pick, and ask whether anyone could still argue.",
              "All four choices are real sentences from the blueprint, so being true earns nothing. Only proving counts.",
              "The usual trap is a sentence that shares a word with the claim and proves none of it."
            ],
            "example": "Claim: the door can be locked from inside only. 'The door is two layers thick' is true and proves nothing. 'The bar drops into hooks nobody outside can reach' is proof."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea that develops across the whole blueprint?",
              "choices": [
                "The post on the hinge side is always the thicker of the two, because it carries the weight of the door every time it swings open.",
                "Doors are the most interesting part of any building, and the part that tells you the most about the people who put the building up.",
                "The gate is built to be the strongest part of the whole wall, stronger than the stone rows on either side of it, because that is where trouble arrives.",
                "The gate is the one part of the wall that has to move, so every choice in it is aimed at the weakness that moving creates."
              ],
              "answer": 3,
              "hint": "A thicker hinge post, a diagonal brace, two layers of planks, fifty test swings. Ask what all four of those are answering.",
              "skill": "Central idea and evidence",
              "evidence": "It is also the weakest point of the whole base, because it is the one part of the wall that has to move."
            },
            {
              "q": "Claim: the brace works because of the shape it makes, not because of the wood it is made of. Which sentence from the blueprint best supports that claim?",
              "choices": [
                "The post on the hinge side is always the thicker of the two, because it carries the weight of the door every time it swings.",
                "Oda says it is the cheapest piece of wood in the base and the one she would never leave out.",
                "A plain rectangle of wood has a weakness.",
                "The brace turns the rectangle into two triangles, and a triangle cannot fold without breaking a side."
              ],
              "answer": 3,
              "hint": "One of these is about the hinge post and one says what the brace costs. The claim is about shape. Find the sentence that names a shape and says what that shape cannot do.",
              "skill": "Finding details",
              "evidence": "The brace turns the rectangle into two triangles, and a triangle cannot fold without breaking a side."
            },
            {
              "q": "What job does the second paragraph do in this blueprint?",
              "choices": [
                "It lists the tools used for hanging a heavy door.",
                "It names a weakness in the shape of the frame and then gives the single piece of wood that answers it.",
                "It describes what the finished gate looks like from outside, from the two tall posts to the doors hung on their iron hinges.",
                "It compares iron hinges with hinges made of leather."
              ],
              "answer": 1,
              "hint": "The paragraph opens with a problem and closes with something Oda would never leave out. Ask what shape a paragraph has when it runs from one to the other.",
              "skill": "Author's purpose and structure",
              "evidence": "A plain rectangle of wood has a weakness."
            },
            {
              "q": "The blueprint says an unbraced frame folds 'like a box that has been sat on'. What is that comparison telling you?",
              "choices": [
                "The frame breaks into separate pieces under the weight",
                "The frame is crushed completely flat against the ground until its two sides meet",
                "The frame splits along one of its four sides",
                "The frame keeps all four of its sides but loses its square corners"
              ],
              "answer": 3,
              "hint": "Picture a cardboard box pushed over at one corner. Nothing tears. Ask what has changed about it, then check that against the sentence about triangles that follows.",
              "skill": "Word meanings",
              "evidence": "Push on one corner and the whole frame folds sideways into a slanted shape, like a box that has been sat on."
            },
            {
              "q": "Paragraphs 1 and 3 together explain why Oda swings the finished door fifty times before she will call it done. Why does she?",
              "choices": [
                "Fifty swings wear the iron hinges in so that they stop squeaking.",
                "Fifty swings prove the locking bar drops cleanly into its hooks.",
                "The gate is weak because it moves, and a door that sticks may not shut when it matters.",
                "Fifty swings are what it takes to settle the posts into the foundation."
              ],
              "answer": 2,
              "hint": "Paragraph one says why the gate is the weak point in the first place. The last paragraph gives a test with a number in it. Ask what the test is testing for.",
              "skill": "Reading between the lines",
              "evidence": "If it sticks on the fiftieth, it is not done."
            }
          ]
        }
      },
      "navByGrade": {
        "3": {
          "lesson": {
            "title": "Grade 3 numbers",
            "points": [
              "Multiplication facts: 5 × 9 means 5 groups of 9.",
              "Sharing equally is dividing.",
              "Add and take away in order: 120 + 45 = 165, then 165 − 30 = 135.",
              "Fractions with the same bottom: add the tops."
            ],
            "example": "45 cups set out in 5 equal rows: 5 × 9 = 45, so each row has 9."
          },
          "problems": [
            {
              "q": "Oda lays the hinges out in 2 rows of 7. How many hinges is that?",
              "answer": "14",
              "hint": "2 × 7.",
              "skill": "Multiplying"
            },
            {
              "q": "56 hinges are set out in 8 equal rows. How many hinges are in each row?",
              "answer": "7",
              "hint": "56 split into 8 equal parts.",
              "skill": "Dividing"
            },
            {
              "q": "The log shows 401 hinges, then 172 more are added and 83 are taken off. What does the log show now?",
              "answer": "490",
              "hint": "Add 401 and 172 first, then take 83 off.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "Add: 6/8 + 1/8 (write a fraction)",
              "answer": "7/8",
              "hint": "Same bottom. 6 + 1 on top.",
              "skill": "Fractions"
            },
            {
              "q": "The plan calls for 600 hinges. 259 are done and 83 more are under way. How many are still untouched?",
              "answer": "258",
              "hint": "Take 259 off 600, then take 83 off that.",
              "skill": "Adding and subtracting"
            }
          ]
        },
        "6": {
          "lesson": {
            "title": "Grade 6 numbers",
            "points": [
              "Dividing by a fraction: 3 ÷ 1/5 asks how many fifths fit in 3. Each whole holds 5, so 3 × 5 = 15.",
              "Finding the whole: if 10% of a number is 7, the whole is 7 × 10 = 70.",
              "To simplify a ratio, divide both numbers by the biggest number that goes into both: 12:20 is 3:5.",
              "Order of operations: parentheses, then multiply and divide, then add and subtract."
            ],
            "example": "Solve 5x = 1,150: divide both sides by 5, so x = 230."
          },
          "problems": [
            {
              "q": "Oda has 8 meters of rope for the gate. Each lashing takes 1/2 of a meter. How many lashings can Oda tie?",
              "answer": "16",
              "hint": "Dividing by 1/2 is the same as multiplying by 2: 8 × 2.",
              "skill": "Fractions"
            },
            {
              "q": "20% of the hinges counted is 16. How many were counted in all?",
              "answer": "80",
              "hint": "16 is 20 hundredths of the whole: 16 ÷ 20 × 100.",
              "skill": "Ratios and percent"
            },
            {
              "q": "Oda counts 18 posts and 27 hinges. In its simplest form, what is the ratio of posts to hinges? (write it like 2:3)",
              "answer": "2:3",
              "accept": [
                "2 to 3"
              ],
              "hint": "Divide both by 9.",
              "skill": "Ratios and percent"
            },
            {
              "q": "Oda works out (4 + 2) × 9. What is it?",
              "answer": "54",
              "hint": "Parentheses first, then multiply.",
              "skill": "Order of operations"
            },
            {
              "q": "Solve for x: 4x = 1,224",
              "answer": "306",
              "hint": "Divide both sides by 4.",
              "skill": "Equations"
            }
          ]
        },
        "7": {
          "lesson": {
            "title": "Grade 7 numbers",
            "points": [
              "How many fit: the total divided by the size of one. 45 meters of rope in 1.5-meter pieces is 45 ÷ 1.5 = 30 pieces.",
              "Undoing a percent change: after a 20% drop, what is left is 80% of the old number. If 80% is 40, the old number is 40 ÷ 0.8 = 50.",
              "Multiplying or dividing with one minus sign gives a minus answer: 3 × (−5) = −15, and −15 ÷ 3 = −5.",
              "A two-step equation: undo the outside step first. In (x + 2) × 5 = 45, divide by 5 first, then take 2 off."
            ],
            "example": "A round rug has a radius of 4 meters. Area = 3.14 × 4 × 4 = 3.14 × 16 = 50.24 square meters."
          },
          "problems": [
            {
              "q": "Oda has 60 meters of timber, and each wall section takes 2.5 meters. How many wall sections is that enough for?",
              "answer": "24",
              "hint": "60 ÷ 2.5.",
              "skill": "Ratios and percent"
            },
            {
              "q": "A count of hinges fell by 10% to 180. What was it before?",
              "answer": "200",
              "hint": "180 is 90% of the old count.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The gauge drops 5 every hour for 8 hours. What is the total change? (Write a drop as a negative number.)",
              "answer": "-40",
              "accept": [
                "−40"
              ],
              "hint": "8 hours of −5 each: 8 × (−5). One minus sign, so the answer is negative.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: (x + 6) × 3 = 27",
              "answer": "3",
              "hint": "Divide both sides by 3 first, then take 6 off.",
              "skill": "Equations"
            },
            {
              "q": "A round plate has a radius of 20 centimeters. Using 3.14 for pi, what is its area in square centimeters?",
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
              "A cube root undoes cubing. If a cube has volume 27, its edge is 3, since 3 × 3 × 3 = 27.",
              "Pythagoras: in a right triangle a² + b² = c², and c is always the longest side.",
              "Collect the x's first, even when they are on the same side: 9x − 3x = 6x. Then deal with the plain numbers."
            ],
            "example": "The rule y = 2x + 7 at x = 6: 2 × 6 + 7 = 19."
          },
          "problems": [
            {
              "q": "The count of hinges follows the rule y = 3x + 12, where x is the hour. What is y when x = 9?",
              "answer": "39",
              "hint": "Put 9 in for x: 3 × 9 + 12.",
              "skill": "Linear relationships"
            },
            {
              "q": "A cube has a volume of 64 cubic meters. How long is one edge, in meters?",
              "answer": "4",
              "hint": "What number × itself × itself makes 64?",
              "skill": "Powers and roots"
            },
            {
              "q": "A 5-meter cable reaches the top of a 3-meter post. How far is the foot of the cable from the base, in meters?",
              "answer": "4",
              "hint": "b² = c² − a² = 25 − 9 = 16. Then take the square root.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "Solve for x: 10x + 24 − 5x = 49",
              "answer": "5",
              "hint": "Collect the x's first: 5x + 24 = 49.",
              "skill": "Equations"
            },
            {
              "q": "A box tank has a square floor of 10² square meters and is 2 meters deep. What is its volume in cubic meters?",
              "answer": "200",
              "hint": "10² = 100 square meters of floor. Then × 2 for the depth.",
              "skill": "Area and perimeter"
            }
          ]
        }
      },
      "orders": {
        "lesson": {
          "title": "Go back and redo",
          "points": [
            "A later step can send you back to fix an earlier one. Redo it, then count everything again.",
            "Count every piece, not just the one you changed."
          ],
          "example": "A table has 4 legs and 1 top: 5 pieces. If a later step says add a shelf, count again: 6 pieces."
        },
        "skill": "Following directions",
        "steps": [
          "Sink 2 tall posts into the gate's foundation.",
          "Lay 1 heavy crossbar across the top of them.",
          "Add 1 brace running from one corner to the opposite one.",
          "Count all the pieces so far.",
          "Step 3 was short a brace. Go back and fit one brace for every post, so the frame has as many braces as posts, then count all the pieces again.",
          "Type the total number of pieces."
        ],
        "prompt": "Pieces:",
        "answer": "5",
        "hint": "Step 5 sends you back to step 3 and changes how many braces the frame gets. The posts and the crossbar still count."
      }
    },
    {
      "id": "base-3",
      "title": "The Watchtower",
      "recon": {
        "lesson": {
          "title": "Height and what it buys you",
          "points": [
            "Some builder's words are explained in the same sentence they appear in. Read the words right after a new word.",
            "'Why' questions: find what the thing is for, then see how that explains the choice."
          ],
          "example": "A mailbox goes at the end of the driveway, not by the back door. It is for the mail carrier, so it goes where the mail carrier stops."
        },
        "title": "Blueprint: The Watchtower",
        "passage": [
          "The third day is the tower, and it goes up beside the gate, never in the middle of the base. Oda's reason is simple: the tower is for watching, and the gate is where trouble arrives. A tower in the middle sees a little of everything. A tower at the gate sees the one thing that matters, close up, with time to shout. It also gives the people on the wall a place to climb to when the wall is not high enough.",
          "The point of a tower is the sightline, which is the straight, clear line between your eye and the thing you are watching. On the ground, trees and the curve of the land cut your sightline short. Every meter of height pushes the horizon farther away. But not evenly: a tower twice as tall does not see twice as far, only somewhat farther, so past a certain height you are spending timber for nothing. Oda builds hers four sections tall and stops.",
          "Each section is a square frame of four posts with a ladder inside and a platform on top, and the sections stack. The whole thing is braced on every side, because the wind that a wall feels along its length a tower feels all at once. On the top platform there is a rail, a roof, and one flat stone slab. The slab is for the beacon, which is two days away. Oda always builds the place for a thing before she builds the thing."
        ],
        "questions": [
          {
            "q": "Where does the tower go?",
            "choices": [
              "In the middle of the base",
              "Outside the wall entirely",
              "On the workshop roof",
              "Beside the gate"
            ],
            "answer": 3,
            "hint": "First sentence of paragraph 1.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 2, what is a 'sightline'?",
            "choices": [
              "A row of trees",
              "The platform on top of the fourth section, with its rail and roof",
              "The distance that the horizon moves back for every extra meter of tower you build",
              "The straight, clear line between your eye and the thing you are watching"
            ],
            "answer": 3,
            "hint": "The first sentence of paragraph 2 defines it.",
            "skill": "Word meanings"
          },
          {
            "q": "How many sections tall does Oda build her towers?",
            "choices": [
              "Two",
              "Four",
              "Three",
              "Ten"
            ],
            "answer": 1,
            "hint": "The last sentence of paragraph 2.",
            "skill": "Finding details"
          },
          {
            "q": "Why does Oda stop at four sections instead of building higher?",
            "choices": [
              "She runs out of ladders",
              "Past a certain height, extra timber buys almost no extra distance",
              "Four sections is as much as the crew can raise in a day",
              "The wind blows the fifth section off"
            ],
            "answer": 1,
            "hint": "Paragraph 2, the sentence that starts 'But not evenly'.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 1 mostly about?",
            "choices": [
              "How tall the tower is",
              "Why the tower is built beside the gate",
              "How a ladder is built into each square section",
              "The stone slab"
            ],
            "answer": 1,
            "hint": "Paragraph 1 gives a reason for a location. Which answer says that?",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Sections and rungs",
          "points": [
            "Rungs per section times sections: 6 ladders of 9 rungs is 6 × 9 = 54.",
            "Sharing planks equally is dividing: 36 planks for 4 platforms is 36 ÷ 4 = 9 each.",
            "How many more you need: what it needs minus what you have. 143 − 67 = 76.",
            "A fraction times a whole number: 4 × 2/5 is four 2/5s, which is 8/5."
          ],
          "example": "A platform 4 meters long and 3 meters wide has an area of 4 × 3 = 12 square meters."
        },
        "problems": [
          {
            "q": "Each ladder section has 8 rungs. The crew builds 5 ladder sections, counting a spare. How many rungs in all?",
            "answer": "40",
            "hint": "8 × 5.",
            "skill": "Multiplying"
          },
          {
            "q": "40 planks are shared equally among 5 platforms. How many planks does each platform get?",
            "answer": "8",
            "hint": "40 ÷ 5.",
            "skill": "Dividing"
          },
          {
            "q": "The tower needs 128 planks. The crew has 89. How many more planks do they need?",
            "answer": "39",
            "hint": "128 − 89.",
            "skill": "Adding and subtracting"
          },
          {
            "q": "Each of the 6 platforms needs 2/3 of a bucket of nails. How many buckets of nails is that?",
            "answer": "4",
            "hint": "Six 2/3s is 12/3. Three thirds make one bucket.",
            "skill": "Fractions"
          },
          {
            "q": "The watchtower's top platform is 5 meters long and 5 meters wide. What is its area in square meters?",
            "answer": "25",
            "hint": "Area is length × width: 5 × 5.",
            "skill": "Area and perimeter"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "Built as a problem and a fix",
            "points": [
              "Paragraphs come in a few shapes: a cause and its effects, two cases compared, steps in order, or a problem followed by what was done about it.",
              "Find the shape by looking at how the sentences sit together, not at what they are about. Two sentences that start the same way and end opposite are a comparison.",
              "Naming the shape is not retelling the paragraph. A choice that only repeats the content has named nothing."
            ],
            "example": "'A cat on the porch sees the street. A cat on the roof sees the whole block.' Same opening, different ending. That pair is a comparison, whatever it happens to be about."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea of the whole blueprint?",
              "choices": [
                "A tower that is twice as tall does not see twice as far as a shorter one, so past a certain height the timber is being spent for nothing.",
                "Height is the most important thing in any building, and a builder who wants to see farther should always add another section to the tower.",
                "Oda puts the tower in the middle of the base rather than beside the gate, so that it can see a little of everything in every direction at once.",
                "Where the tower stands, how tall it is and what sits on top are all settled by what it is for, not by how impressive it would look."
              ],
              "answer": 3,
              "hint": "Beside the gate, four sections and no more, a slab for something that does not exist yet. Ask what decides all three, and cross off the choice the first sentence denies.",
              "skill": "Central idea and evidence",
              "evidence": "Oda's reason is simple: the tower is for watching, and the gate is where trouble arrives."
            },
            {
              "q": "Claim: past a certain height, more timber buys almost nothing. Which sentence from the blueprint best supports that claim?",
              "choices": [
                "The point of a tower is the sightline, which is the straight, clear line between your eye and the thing you are watching.",
                "On the ground, trees and the curve of the land cut your sightline short.",
                "Every meter of height pushes the horizon farther away.",
                "But not evenly: a tower twice as tall does not see twice as far, only somewhat farther, so past a certain height you are spending timber for nothing."
              ],
              "answer": 3,
              "hint": "Stopping at four sections is what she does about it, not the reason. Find the sentence that compares the timber going in with the view coming out.",
              "skill": "Finding details",
              "evidence": "But not evenly: a tower twice as tall does not see twice as far, only somewhat farther, so past a certain height you are spending timber for nothing."
            },
            {
              "q": "How is the first paragraph organized?",
              "choices": [
                "It lists the steps of raising a tower one section at a time.",
                "It sets two placements side by side, the middle of the base and the gate, and says what each one would see.",
                "It gives the cause of the wind that a tower has to stand against.",
                "It explains what a sightline is and how trees and the curve of the land cut one short when you are standing on the ground."
              ],
              "answer": 1,
              "hint": "Two sentences in a row begin with almost the same three words and then say different things. That pairing is the shape.",
              "skill": "Author's purpose and structure",
              "evidence": "A tower in the middle sees a little of everything."
            },
            {
              "q": "The blueprint says that past a certain height 'you are spending timber for nothing'. What is that phrase telling you?",
              "choices": [
                "The timber will be wasted because a tall tower falls down",
                "The extra sections cost real wood and return almost no extra view",
                "Timber has to be bought rather than cut from the valley",
                "A taller tower needs no extra bracing to stand up"
              ],
              "answer": 1,
              "hint": "Nobody is handing over money. Read the first half of the same sentence, about twice as tall and not twice as far, and put the two halves together.",
              "skill": "Word meanings",
              "evidence": "But not evenly: a tower twice as tall does not see twice as far, only somewhat farther, so past a certain height you are spending timber for nothing."
            },
            {
              "q": "Paragraphs 2 and 3 together explain why Oda stops at four sections. Why does she?",
              "choices": [
                "Above four sections the ladder inside would no longer reach the platform above it, and nobody in the crew could climb any higher.",
                "Above that the extra view is small, while each new section is more timber and more bracing to hold against the wind.",
                "Four sections is exactly the height of the wall standing beside it.",
                "A taller tower would block the sightline from the gate."
              ],
              "answer": 1,
              "hint": "Paragraph two tells you what more height gives you. Paragraph three tells you what more height costs. A stopping point is where those two meet.",
              "skill": "Reading between the lines",
              "evidence": "The whole thing is braced on every side, because the wind that a wall feels along its length a tower feels all at once."
            }
          ]
        }
      },
      "navByGrade": {
        "3": {
          "lesson": {
            "title": "Grade 3 numbers",
            "points": [
              "Multiplication facts: 4 × 6 means 4 groups of 6.",
              "Sharing equally is dividing.",
              "Taking away from a round number: 400 − 125 = 275. Count up from 125 to 400 to check.",
              "A fraction is parts done over equal parts in all. 2 parts done out of 5 is 2/5."
            ],
            "example": "A rug 2 squares wide and 6 squares long is 2 × 6 = 12 squares. If 4 are covered, 12 − 4 = 8 are left."
          },
          "problems": [
            {
              "q": "Every ladder needs 7 rungs. The crew cuts rungs for 8 ladders, enough for this tower and the next one. How many rungs is that?",
              "answer": "56",
              "hint": "8 groups of 7, so 8 × 7.",
              "skill": "Multiplying"
            },
            {
              "q": "Oda splits 56 rungs in half. How many rungs is one half?",
              "answer": "28",
              "hint": "Half of 56.",
              "skill": "Dividing"
            },
            {
              "q": "Oda needs 500 planks and has 112. How many more are needed?",
              "answer": "388",
              "hint": "500 − 112.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "The day's work is cut into 8 equal parts and Oda has finished 3 of them. What fraction is done? (write a fraction)",
              "answer": "3/8",
              "hint": "3 parts out of 8.",
              "skill": "Fractions"
            },
            {
              "q": "A floor is 3 squares wide and 7 squares long. Oda has covered 3 squares. How many squares are left to cover?",
              "answer": "18",
              "hint": "3 × 7 squares in all, then take 3 off.",
              "skill": "Area and perimeter"
            }
          ]
        },
        "6": {
          "lesson": {
            "title": "Grade 6 numbers",
            "points": [
              "Dividing a decimal by a whole number: divide as usual and keep the point in place. 8.4 ÷ 4 = 2.1.",
              "Percent of a number: turn the percent into a fraction of 100.",
              "Sharing in a ratio: add the parts, divide the total by that, then multiply. 45 in the ratio 1 to 4 is 5 parts of 9, so 9 and 36.",
              "Order of operations: parentheses, then multiply and divide, then add and subtract."
            ],
            "example": "Solve x + 120 + 30 = 400: add 120 and 30 to get 150, then x = 400 − 150 = 250."
          },
          "problems": [
            {
              "q": "4 wall sections took 13 meters altogether, and each took the same. How many meters did each one take?",
              "answer": "3.25",
              "hint": "13 ÷ 4. Divide as with whole numbers and keep the point in place.",
              "skill": "Decimals"
            },
            {
              "q": "Of 160 planks, 75% are crossed off the list. How many are left on it?",
              "answer": "40",
              "hint": "75% of 160 is 120. Take that off 160.",
              "skill": "Ratios and percent"
            },
            {
              "q": "Oda shares 63 rungs between two teams in the ratio 2 to 5. How many does the smaller share get?",
              "answer": "18",
              "hint": "2 + 5 = 7 parts. 63 ÷ 7 = 9 for one part.",
              "skill": "Ratios and percent"
            },
            {
              "q": "Oda works out 3 × 8 − 4 × 3. What is it?",
              "answer": "12",
              "hint": "Do both multiplications first, then subtract.",
              "skill": "Order of operations"
            },
            {
              "q": "Solve for x: x + 477 + 50 = 600",
              "answer": "73",
              "hint": "Add 477 and 50 first, then take that off 600.",
              "skill": "Equations"
            }
          ]
        },
        "7": {
          "lesson": {
            "title": "Grade 7 numbers",
            "points": [
              "A unit rate is the total divided by how many: 21 meters for 14 sections is 21 ÷ 14 = 1.5 meters each.",
              "Percent change: find that percent of the starting number, then add it on or take it off.",
              "Below zero, going up adds and going down subtracts. Walk the number line one step at a time.",
              "With parentheses, undo the outside first: in 4(x + 5) = 36, divide by 4 to get x + 5 = 9, so x = 4."
            ],
            "example": "On a plan, 2 cm stands for 70 meters. So 1 cm stands for 70 ÷ 2 = 35 meters."
          },
          "problems": [
            {
              "q": "20 wall sections took 10 meters. At the same rate, how many meters would 32 wall sections take?",
              "answer": "16",
              "hint": "One wall section takes 10 ÷ 20 = 0.5. Then × 32.",
              "skill": "Ratios and percent"
            },
            {
              "q": "Oda had 200 planks, then added 25% more. How many planks were added?",
              "answer": "50",
              "hint": "25% of 200: 25/100 × 200.",
              "skill": "Ratios and percent"
            },
            {
              "q": "One ledger reads −9 rungs and another reads −17 rungs. How many rungs apart are they?",
              "answer": "8",
              "hint": "From −17 up to −9.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: 3(x + 11) = 66",
              "answer": "11",
              "hint": "Divide both sides by 3 to get x + 11 = 22.",
              "skill": "Equations"
            },
            {
              "q": "On the plan, 3 cm stands for 30 meters. How many meters does 1 cm stand for?",
              "answer": "10",
              "hint": "30 ÷ 3.",
              "skill": "Ratios and percent"
            }
          ]
        },
        "8": {
          "lesson": {
            "title": "Grade 8 numbers",
            "points": [
              "A straight-line rule is y = mx + b: b is where you start, m is what you add each step.",
              "Work inside the parentheses first, then the power: (2 × 5)² = 10² = 100.",
              "Pythagoras: in a right triangle a² + b² = c², and c is always the longest side.",
              "A lone x means 1x. So 9x − x = 8x. Collect the x's, then divide."
            ],
            "example": "A list starts at 5 and adds 4 each step: 5, 9, 13 and on. The 10th number is 9 steps on: 5 + 9 × 4 = 41."
          },
          "problems": [
            {
              "q": "The count of planks goes 12, 19, 26, 33, and on. What is the 11th number in the list?",
              "answer": "82",
              "hint": "It starts at 12 and adds 7 each step. The number you want is 10 steps on from 12.",
              "skill": "Linear relationships"
            },
            {
              "q": "What is (6 × 4)²?",
              "answer": "576",
              "hint": "6 × 4 = 24 first, then square it.",
              "skill": "Powers and roots"
            },
            {
              "q": "A right triangle has short sides of 5 and 12 meters. How long is its longest side, in meters?",
              "answer": "13",
              "hint": "5² + 12² = 169. The longest side is the square root of that.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "Solve for x: 7x − x = 24",
              "answer": "4",
              "hint": "x is the same as 1x, so 7 − 1 = 6, and 6x = 24.",
              "skill": "Equations"
            },
            {
              "q": "Which is bigger, 2 × 10^4 or 3 × 10^3? Write the bigger one out in full.",
              "answer": "20000",
              "hint": "2 × 10^4 is ten times 2 × 10^3, and 3 is not ten times 2.",
              "skill": "Powers and roots"
            }
          ]
        }
      },
      "orders": {
        "lesson": {
          "title": "Instead",
          "points": [
            "A step can replace an earlier step entirely: 'ignore step 3; instead do this.'",
            "You still need the numbers from the earlier steps to follow the replacement."
          ],
          "example": "'If there are more than 5 boxes, multiply by 2 instead of 3.' With 6 boxes that is 6 × 2 = 12, not 6 × 3."
        },
        "skill": "Following directions",
        "steps": [
          "Build sections until the tower is 4 sections tall.",
          "Each section has 8 rungs.",
          "Multiply sections by rungs to get the total rungs.",
          "If the tower is taller than 3 sections, ignore step 3. Instead, multiply the number of sections by 10.",
          "Type your final number."
        ],
        "prompt": "Your answer:",
        "answer": "40",
        "hint": "Step 4 checks the tower's height against 3 sections, and it can throw step 3 away. Read it before you multiply anything."
      }
    },
    {
      "id": "base-4",
      "title": "The Workshop",
      "recon": {
        "lesson": {
          "title": "A place for everything",
          "points": [
            "Builder's words are often explained in the same sentence. Read the words right after a new word.",
            "'Why does Oda insist' questions: look for the cost of not doing it. The blueprint usually shows what goes wrong."
          ],
          "example": "If a coach says 'Put the balls back in the bag, or practice starts late tomorrow', the rule is about saving time, not neatness."
        },
        "title": "Blueprint: The Workshop",
        "passage": [
          "By the fourth day the crew has walls, a gate and a tower, and a pile of tools lying in the grass. The workshop is where the pile stops. It is a long, low building against the inside of the wall with a wide door. The floor is flat stones so nothing sinks into mud, and a workbench runs down the whole length of one side. Every tool has a hook, and every hook has the tool's shape painted on the wall behind it, so an empty hook shows at a glance what is missing.",
          "At the far end stands the kiln, which is a brick oven built to hold a fire hot enough to bake wet clay into hard brick. The crew shapes bricks by hand, dries them in the sun for a day, then stacks them in the kiln for a night. A brick that skips the kiln crumbles in the first rain. A brick that goes through it lasts longer than the person who made it. The kiln is why a base can keep growing after the stone runs out.",
          "Oda's workshop rule sounds fussy and is not. Every tool goes back on its hook at the end of the day, no matter how tired anyone is. Her reason is the morning: a crew that spends the first hour hunting for a chisel has lost the coolest hour of the day, and by the time they find it the sun is high. She counts the hooks at dusk. An empty one means somebody goes back out with a lantern."
        ],
        "questions": [
          {
            "q": "Why is the workshop floor made of flat stones?",
            "choices": [
              "So nothing sinks into mud",
              "Flat stones look better than dirt",
              "To keep the whole building warmer inside",
              "Because the crew had run out of wood"
            ],
            "answer": 0,
            "hint": "Paragraph 1, the sentence describing the floor.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 2, what is the 'kiln'?",
            "choices": [
              "The long workbench that runs down the whole length of one side of the room",
              "A brick oven that holds a fire hot enough to bake wet clay into brick",
              "A hook with the shape of its own tool painted on the wall right behind it",
              "A stack of hand-shaped bricks drying in the sun"
            ],
            "answer": 1,
            "hint": "The first sentence of paragraph 2 defines it.",
            "skill": "Word meanings"
          },
          {
            "q": "What does Oda do at dusk?",
            "choices": [
              "Lights the kiln for the night",
              "Counts the hooks",
              "Locks up",
              "Climbs up"
            ],
            "answer": 1,
            "hint": "Paragraph 3, near the end.",
            "skill": "Finding details"
          },
          {
            "q": "Why does Oda insist every tool goes back on its hook, even when the crew is tired?",
            "choices": [
              "She likes the whole workshop wall to look tidy again at the end of every working day",
              "She wants every new member of the crew to learn the habit before the base is finished",
              "A tool left out in the grass overnight will be rusted through by the next morning",
              "A missing tool costs the crew the coolest working hour of the next morning"
            ],
            "answer": 3,
            "hint": "Paragraph 3, the sentence that starts 'Her reason is the morning'.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 2 mostly about?",
            "choices": [
              "What the kiln is, how bricks are made in it, and why that matters",
              "How to paint a tool's shape on the wall so that an empty hook shows up",
              "The workshop door",
              "How tired the crew is"
            ],
            "answer": 0,
            "hint": "Paragraph 2 is entirely about the kiln and bricks.",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Floors, bricks and change",
          "points": [
            "Area of the floor: length × width. A 7 m by 8 m floor is 7 × 8 = 56 square meters.",
            "Bricks in the kiln: rows × bricks per row. 13 × 15 = 13 × 10 + 13 × 5.",
            "Tools shared among racks: 63 ÷ 7 = 9 on each rack.",
            "Change: 4 boxes at $2 is $8. From $10, that leaves $2."
          ],
          "example": "13 × 10 = 130 and 13 × 5 = 65, so 195 bricks."
        },
        "problems": [
          {
            "q": "The workshop floor is 6 meters wide and 9 meters long. What is its area in square meters?",
            "answer": "54",
            "hint": "6 × 9.",
            "skill": "Area and perimeter"
          },
          {
            "q": "The kiln holds 14 rows of 12 bricks. How many bricks is that?",
            "answer": "168",
            "hint": "14 × 10 plus 14 × 2.",
            "skill": "Multiplying"
          },
          {
            "q": "96 tools are hung on 8 racks, the same number on each. How many tools per rack?",
            "answer": "12",
            "hint": "96 ÷ 8.",
            "skill": "Dividing"
          },
          {
            "q": "Nails cost $3 a box. Oda buys 5 boxes and pays with a $20 bill. How much change does she get?",
            "answer": "5",
            "hint": "5 × 3 = 15 first. Then 20 − 15.",
            "accept": [
              "$5",
              "5.00",
              "$5.00"
            ],
            "skill": "Multi-step problems"
          },
          {
            "q": "The workshop floor was 5/8 swept before the kiln was lit and 2/8 more after. What fraction of the floor is swept? (write a fraction)",
            "answer": "7/8",
            "hint": "Same bottom. Add the tops: 5 + 2.",
            "skill": "Fractions"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "The meaning the sentence gives",
            "points": [
              "A word is doing one job in one sentence. Work out that job, not the entry it would have in a dictionary.",
              "Some sentences are painting a picture rather than stating a plain fact. Ask what the picture shows, then say it in ordinary words.",
              "Put your pick back into the sentence. If the sentence now says something the blueprint never said, it is the wrong pick."
            ],
            "example": "'The chisel walked off again.' No chisel walks. The sentence is only telling you it went missing, and that it has happened before."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea that develops across the whole blueprint?",
              "choices": [
                "The workshop is arranged so that nothing gets lost and nothing runs out, which is what lets the base keep building after the fourth day.",
                "Every tool in the workshop has a hook, and every hook has that tool's shape painted on the wall behind it, so an empty hook shows what is missing.",
                "Being tidy is a virtue worth having in every part of life, and a person who keeps a workshop in order will keep everything else in order too.",
                "The workshop is built before the walls and the gate, so that the crew's tools always have somewhere to go instead of a pile lying in the grass."
              ],
              "answer": 0,
              "hint": "Hooks with shapes behind them, an oven that makes new brick, a rule about dusk. Ask what all three are protecting, and cross off the choice the first sentence denies.",
              "skill": "Central idea and evidence",
              "evidence": "The kiln is why a base can keep growing after the stone runs out."
            },
            {
              "q": "Claim: the kiln matters for what the base can do later, not only for the bricks made this week. Which sentence from the blueprint best supports that claim?",
              "choices": [
                "At the far end stands the kiln, which is a brick oven built to hold a fire hot enough to bake wet clay into hard brick.",
                "The kiln is why a base can keep growing after the stone runs out.",
                "The crew shapes bricks by hand, dries them in the sun for a day, then stacks them in the kiln for a night.",
                "A brick that skips the kiln crumbles in the first rain."
              ],
              "answer": 1,
              "hint": "Three of these are about what the kiln does to a brick today. The claim is about later. Find the sentence that looks past this week.",
              "skill": "Finding details",
              "evidence": "The kiln is why a base can keep growing after the stone runs out."
            },
            {
              "q": "Why does the blueprint say the workshop rule 'sounds fussy and is not' before it gives the rule?",
              "choices": [
                "It warns the reader that this is the rule every tired crew breaks, so that nobody is surprised when the hooks come up short at the end of the day.",
                "It puts the reader's objection into words first, so that the reason which follows arrives as an answer rather than an order.",
                "It compares the workshop with the kiln at the far end.",
                "It lists which tools are allowed to stay on the bench."
              ],
              "answer": 1,
              "hint": "Ask who is supposed to be thinking the word fussy. A writer who says it first is doing something to the reader before the rule even arrives.",
              "skill": "Author's purpose and structure",
              "evidence": "Oda's workshop rule sounds fussy and is not."
            },
            {
              "q": "The blueprint says 'the workshop is where the pile stops'. What does that sentence mean as it is used here?",
              "choices": [
                "The pile of tools is stacked in the grass just outside the workshop door",
                "The workshop is built at the far end of the yard where the stone is piled up",
                "All building work stops for the day once the workshop itself is finished",
                "The workshop puts an end to tools being left lying in the grass"
              ],
              "answer": 3,
              "hint": "Read the sentence before it, about a pile of tools lying in the grass. Then ask what stopping means when the thing being stopped is a habit rather than a movement.",
              "skill": "Word meanings",
              "evidence": "By the fourth day the crew has walls, a gate and a tower, and a pile of tools lying in the grass."
            },
            {
              "q": "Paragraphs 1 and 3 together explain how Oda can tell at dusk that a tool is missing without hunting for it. How can she?",
              "choices": [
                "She counts the hooks, and each hook has its tool's shape painted behind it, so an empty one names what is gone.",
                "She counts the crew instead, and asks whoever came back last.",
                "The workbench runs the whole length of one side of the workshop, so a tool left lying out on it can be seen from the door.",
                "The stone floor keeps the mark of anything that has been set down on it."
              ],
              "answer": 0,
              "hint": "The last paragraph tells you what she does at dusk but not why it works. The first paragraph explains what a hook shows you. Put the action next to the explanation.",
              "skill": "Reading between the lines",
              "evidence": "Every tool has a hook, and every hook has the tool's shape painted on the wall behind it, so an empty hook shows at a glance what is missing."
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
              "How many more: take the smaller number from the bigger one. 456 − 234 = 222.",
              "Fractions with the same bottom: the bigger top is the bigger fraction. 3/5 is bigger than 2/5."
            ],
            "example": "20 apples go in bags of 5. How many 5s make 20? 4 bags."
          },
          "problems": [
            {
              "q": "Oda carries 3 tools on each of 2 trips. How many tools is that?",
              "answer": "6",
              "hint": "2 × 3.",
              "skill": "Multiplying"
            },
            {
              "q": "Every rack takes 3 tools. Oda has 9 tools. How many racks can be filled?",
              "answer": "3",
              "hint": "How many 3s fit into 9?",
              "skill": "Dividing"
            },
            {
              "q": "Oda counted 288 tools in the morning and 379 in the evening. How many more in the evening?",
              "answer": "91",
              "hint": "379 − 288.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "Which is bigger, 2/4 or 1/4? (write a fraction)",
              "answer": "2/4",
              "hint": "Same bottom, so the bigger top wins.",
              "skill": "Fractions"
            },
            {
              "q": "The target is 800 tools and 170 are logged. How many short is that?",
              "answer": "630",
              "hint": "800 − 170.",
              "skill": "Adding and subtracting"
            }
          ]
        },
        "6": {
          "lesson": {
            "title": "Grade 6 numbers",
            "points": [
              "Sharing a fraction: 2/5 shared by 2 people is 2/5 × 1/2 = 2/10, which is 1/5 each.",
              "Percent of a number: turn the percent into a fraction of 100.",
              "Sharing in a ratio: add the parts, then find one part. 42 in the ratio 1 to 6 is 7 parts of 6, so 6 and 36.",
              "Order of operations: parentheses, then multiply and divide, then add and subtract."
            ],
            "example": "(8 − 2) × (1 + 3): each set of parentheses first, then 6 × 4 = 24."
          },
          "problems": [
            {
              "q": "Oda has 3/4 of a can of paint, shared equally over 6 workshop shelves. What fraction of the can goes on each shelf? (write a fraction)",
              "answer": "1/8",
              "hint": "Sharing among 6 is the same as multiplying by 1/6: 3/4 × 1/6.",
              "skill": "Fractions"
            },
            {
              "q": "Out of every 100 tools, 50 are set aside. Out of 120 tools, how many is that?",
              "answer": "60",
              "hint": "120 is 1.2 hundreds, so 1.2 × 50.",
              "skill": "Ratios and percent"
            },
            {
              "q": "Oda divides 32 minutes of work in the ratio 3 to 5. How many minutes is the larger share?",
              "answer": "20",
              "hint": "8 parts in all, so one part is 4 minutes.",
              "skill": "Ratios and percent"
            },
            {
              "q": "Oda works out (9 − 5) × (5 + 10). What is it?",
              "answer": "60",
              "hint": "Each set of parentheses first, then multiply the two answers.",
              "skill": "Order of operations"
            },
            {
              "q": "Solve for x: 449 = x − 22",
              "answer": "471",
              "hint": "Add 22 to both sides.",
              "skill": "Equations"
            }
          ]
        },
        "7": {
          "lesson": {
            "title": "Grade 7 numbers",
            "points": [
              "How many fit: the total divided by the size of one. 27 meters at 1.5 meters each is 27 ÷ 1.5 = 18.",
              "Percent change: find that percent of the starting number, then add it on or take it off.",
              "Multiplying or dividing with one minus sign gives a minus answer: 3 × (−5) = −15, and −15 ÷ 3 = −5.",
              "A two-step equation: undo the adding first, then undo the multiplying."
            ],
            "example": "A wheel is 3 meters across. Around the edge: 3.14 × 3 = 9.42 meters. Going back, 9.42 ÷ 3.14 = 3 across."
          },
          "problems": [
            {
              "q": "The job needs 24 meters in all, at 1.5 meters for each wall section. One wall section is already done. How many wall sections are left?",
              "answer": "15",
              "hint": "24 ÷ 1.5 = 16 in all, then take the finished one off.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The rule says a count of tools may change by no more than 25%. Starting from 320, what is the highest count the rule allows?",
              "answer": "400",
              "hint": "25% of 320 is 80. Add it on.",
              "skill": "Ratios and percent"
            },
            {
              "q": "Over 5 hours the gauge dropped 20 in all, the same amount each hour. What was the change each hour? (Write a drop as a negative number.)",
              "answer": "-4",
              "accept": [
                "−4"
              ],
              "hint": "Share −20 into 5 equal parts: −20 ÷ 5. One minus sign, so the answer is negative.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: x ÷ 8 − 16 = 4",
              "answer": "160",
              "hint": "Add 16 to both sides, then multiply by 8.",
              "skill": "Equations"
            },
            {
              "q": "A round plate measures 31.4 centimeters around the edge. Using 3.14 for pi, how many centimeters is it across?",
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
              "A straight-line rule is y = mx + b: b is where you start, m is what you add each step.",
              "A square root undoes squaring. If a square has area 49, its side is 7.",
              "Pythagoras: in a right triangle a² + b² = c², and c is always the longest side.",
              "With x on both sides, move all the x's to one side first, then all the plain numbers to the other."
            ],
            "example": "A line through (0, 2) and (5, 32): rise 30, run 5, slope 30 ÷ 5 = 6."
          },
          "problems": [
            {
              "q": "A line passes through (0, 20) and (9, 47). What is its slope?",
              "answer": "3",
              "hint": "Slope is the rise over the run: 27 ÷ 9.",
              "skill": "Linear relationships"
            },
            {
              "q": "A square pad has an area of 121 square meters. How many meters is it around the edge?",
              "answer": "44",
              "hint": "One side is the square root of 121, then four sides.",
              "skill": "Powers and roots"
            },
            {
              "q": "Oda goes 6 meters east and then 8 meters north. In a straight line, how far is that from the start, in meters?",
              "answer": "10",
              "hint": "The two legs make a right angle: 6² + 8² = 100.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "For what value of x do 10x + 25 and 4x + 55 come to the same number?",
              "answer": "5",
              "hint": "Set them equal, take 4x off both sides, then take 25 off.",
              "skill": "Equations"
            },
            {
              "q": "Two round tanks each have a radius of 5 meters and are 6 meters deep. Using 3.14 for pi, what is their total volume in cubic meters?",
              "answer": "942",
              "hint": "One tank is 3.14 × 5 × 5 × 6 = 471. Then double it.",
              "skill": "Area and perimeter"
            }
          ]
        }
      },
      "orders": {
        "lesson": {
          "title": "Two totals, keep one",
          "points": [
            "When two steps start from the same number, you end up holding two answers. Write both down, labeled.",
            "A later step says which one survives. The other is dropped, not added."
          ],
          "example": "Start at 20. Take 4 away: 16. Go back to 20 and take 6 away: 14. If the next step keeps the first, carry 16 on."
        },
        "skill": "Following directions",
        "steps": [
          "The crew shapes 12 bricks by hand and leaves them in the sun.",
          "Take away the 3 bricks that crumbled before they dried, and keep that number.",
          "Go back to the 12 and take away the 5 bricks that never went through the kiln, and keep that number as well.",
          "Oda checks the two numbers you wrote, the one from step 2 and the one from step 3, and keeps the step 2 one. Ignore the step 3 number.",
          "Add the 3 bricks the crew shaped after supper.",
          "Type how many good bricks the workshop has."
        ],
        "prompt": "Good bricks:",
        "answer": "12",
        "hint": "Both step 2 and step 3 start from the same 12 bricks. Step 4 names which of the two numbers goes on to step 5."
      }
    },
    {
      "id": "base-5",
      "title": "The Beacon",
      "recon": {
        "lesson": {
          "title": "Putting the base together",
          "points": [
            "The last blueprint connects the earlier ones. Watch for things you met before, like the kiln bricks and the walls.",
            "Some builder's words are explained in the same sentence. Read the words right after a new word.",
            "Why questions about people: think about what Oda wants the next crew to have."
          ],
          "example": "A story's last chapter has the team use the boat they built in chapter two. The ending makes sense only if you remember the start."
        },
        "title": "Blueprint: The Beacon",
        "passage": [
          "The fifth day is the shortest build and the one Oda cares about most. On the stone slab at the top of the tower, the one she set two days ago, the crew builds the beacon. It is a ring of kiln bricks a pace across, packed with dry wood, with a pot of oil beside it and a striker on a chain so it cannot be dropped. Unlit, it is a stack of wood on a roof. Lit, it can be seen from every ridge in the valley.",
          "A beacon on its own is a lamp. A beacon that can see another beacon is something better: a relay, which is a chain of signals where each one passes the message to the next. When the far tower lights, this one lights, and the one beyond it lights, and a warning crosses the whole valley in the time it takes to strike a spark five times. A rider on the fastest horse would take a day. Oda has counted six towers she can see from this slab on a clear night. Every one of them is a base someone built the way this one was built, walls first.",
          "The last rule is about the lighting. The beacon is never lit for practice, never lit for fun, and never lit by one person alone. It takes two: one to strike, one to watch the far towers and say when. Oda hands the striker to the newest member of the crew, every time, and says the same thing: you built the place it stands on. Now you decide what it is for."
        ],
        "questions": [
          {
            "q": "What is the beacon built on?",
            "choices": [
              "The gate",
              "The roof of the long workshop against the wall",
              "The stone slab at the top of the tower",
              "The ground"
            ],
            "answer": 2,
            "hint": "Second sentence of paragraph 1.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 2, what is a 'relay'?",
            "choices": [
              "The fastest horse in the whole valley, sent out carrying a warning to the next base",
              "The pot of oil that is kept beside the ring of kiln bricks on the slab",
              "A single beacon lit on its own, with no others in sight",
              "A chain of signals where each one passes the message to the next"
            ],
            "answer": 3,
            "hint": "The sentence that starts 'A beacon that can see another beacon'.",
            "skill": "Word meanings"
          },
          {
            "q": "How many people does it take to light the beacon?",
            "choices": [
              "Two",
              "One",
              "Six",
              "The whole crew"
            ],
            "answer": 0,
            "hint": "Paragraph 3, the sentence that starts 'It takes two'.",
            "skill": "Finding details"
          },
          {
            "q": "Why does Oda hand the striker to the newest crew member every time?",
            "choices": [
              "So the person who just built the base is the one trusted with deciding what it is for",
              "Because the striker is the easiest of the two jobs to learn",
              "Because the newest member of the crew has the steadiest hand with a striker",
              "Because the striker hangs on a chain and only the newest member of the crew may unhook it"
            ],
            "answer": 0,
            "hint": "The last two sentences of paragraph 3.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 2 mostly about?",
            "choices": [
              "How to pack dry wood",
              "How many bricks the ring needs",
              "How a chain of beacons carries a warning across the valley faster than a rider",
              "The six towers Oda can count from the slab and the people who built each one of them"
            ],
            "answer": 2,
            "hint": "Paragraph 2 compares beacons to a rider. Which answer covers the comparison?",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Beacon numbers",
          "points": [
            "Equal groups: 7 fires at 4 minutes each take 7 × 4 = 28 minutes.",
            "1,000 − 340: think 999 − 340 = 659, then add 1 to get 660.",
            "Perimeter of a 5 by 5 square: 5 + 5 + 5 + 5 = 20.",
            "Hundredths as decimals: 9/100 is 0.09 and 50/100 is 0.50."
          ],
          "example": "91 kilograms split equally among 7 fires: 91 ÷ 7 = 13 kilograms each."
        },
        "problems": [
          {
            "q": "A warning passes through 6 beacons, and each takes 3 minutes to light. How many minutes does the warning take to cross the valley?",
            "answer": "18",
            "hint": "6 × 3.",
            "skill": "Multiplying"
          },
          {
            "q": "The fuel stack holds 1,000 kilograms of wood. One night's fire burns 275. How many kilograms are left?",
            "answer": "725",
            "hint": "1,000 − 275. Think of 1,000 as 999 + 1.",
            "skill": "Adding and subtracting"
          },
          {
            "q": "The beacon platform is 3 meters by 3 meters. What is its perimeter in meters?",
            "answer": "12",
            "hint": "Add all four sides.",
            "skill": "Area and perimeter"
          },
          {
            "q": "The beacon's fuel stack has 100 bundles of wood, and 72 of them are dry. Write 72/100 as a decimal.",
            "answer": "0.72",
            "hint": "72 hundredths: two places after the point.",
            "skill": "Decimals"
          },
          {
            "q": "The beacon's 96 kilograms of kindling are split equally among 6 fires. How many kilograms does each fire get?",
            "answer": "16",
            "hint": "96 ÷ 6.",
            "skill": "Dividing"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "Two paragraphs and a 'so'",
            "points": [
              "The last question is built so that no single paragraph answers it. Plan on using two.",
              "State a fact from one paragraph, then a fact from another, then say 'so'. What comes after 'so' is the answer.",
              "If a choice needs something the blueprint never mentions, it is out, however sensible it sounds by itself."
            ],
            "example": "Paragraph one: the team practiced passing every day. Paragraph two: the other team never passed at all. So passing is why the first team won. Neither paragraph says that on its own."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea of the whole blueprint?",
              "choices": [
                "The beacon is a ring of kiln bricks packed with dry wood.",
                "Fire is the oldest way people have ever had of sending a message.",
                "The shortest build of the week matters most because it ties this base to every other one, and lighting it is a decision as much as a job.",
                "Oda lights the finished beacon herself on the night it is built, standing alone up on the tower platform while the crew watches from the wall below."
              ],
              "answer": 2,
              "hint": "A small build, a chain of six towers, and a rule about who may strike the spark. Find the choice that holds all three, and cross off the one the last paragraph denies.",
              "skill": "Central idea and evidence",
              "evidence": "The fifth day is the shortest build and the one Oda cares about most."
            },
            {
              "q": "Claim: a beacon is worth far more in a chain than it is on its own. Which sentence from the blueprint best supports that claim?",
              "choices": [
                "On the stone slab at the top of the tower, the one she set two days ago, the crew builds the beacon.",
                "Lit, it can be seen from every ridge in the valley.",
                "Unlit, it is a stack of wood on a roof.",
                "When the far tower lights, this one lights, and the one beyond it lights, and a warning crosses the whole valley in the time it takes to strike a spark five times."
              ],
              "answer": 3,
              "hint": "Counting the towers tells you a chain is possible, not what a chain does. Find the sentence that follows one warning all the way across the valley.",
              "skill": "Finding details",
              "evidence": "When the far tower lights, this one lights, and the one beyond it lights, and a warning crosses the whole valley in the time it takes to strike a spark five times."
            },
            {
              "q": "Why does the blueprint mention a rider on the fastest horse?",
              "choices": [
                "It gives a speed the reader already understands, so the relay's speed can be measured against something.",
                "It explains who is sent with the warning on nights when the weather is too poor for a beacon to be seen from the next ridge.",
                "It compares the six towers in the valley with one another.",
                "It gives the width of the valley in miles."
              ],
              "answer": 0,
              "hint": "Read the sentence just before it. A single short sentence dropped in after a long one is often there to give you something to compare with.",
              "skill": "Author's purpose and structure",
              "evidence": "A rider on the fastest horse would take a day."
            },
            {
              "q": "The blueprint says a warning crosses the valley 'in the time it takes to strike a spark five times'. What is that phrase telling you?",
              "choices": [
                "The whole valley learns of it in about as long as it takes to light five fires",
                "Five separate people are needed to send one warning",
                "The striker has to be used five times on each beacon",
                "The message takes five whole nights to travel from one end of the valley to the other, one tower each night"
              ],
              "answer": 0,
              "hint": "Ask what a single spark starts on a beacon in this paragraph. Then read the sentence about the horse and ask whether the writer wants this to sound slow or fast.",
              "skill": "Word meanings",
              "evidence": "When the far tower lights, this one lights, and the one beyond it lights, and a warning crosses the whole valley in the time it takes to strike a spark five times."
            },
            {
              "q": "Paragraphs 2 and 3 together explain why the beacon is never lit for practice. Why is it not?",
              "choices": [
                "The oil in the pot beside it and the dry wood packed inside it are far too costly to burn on anything but a real warning.",
                "The dry wood inside it takes a whole day to replace.",
                "Every other tower that can see it would light too, so a practice would send a real warning across six bases.",
                "One person alone cannot lift the striker off its chain."
              ],
              "answer": 2,
              "hint": "Paragraph two tells you what happens when one beacon lights. The last paragraph gives the rule but not the reason. Carry the middle paragraph's fact into the rule.",
              "skill": "Reading between the lines",
              "evidence": "The beacon is never lit for practice, never lit for fun, and never lit by one person alone."
            }
          ]
        }
      },
      "navByGrade": {
        "3": {
          "lesson": {
            "title": "Grade 3 numbers",
            "points": [
              "Multiplication facts: 4 × 9 means 4 groups of 9.",
              "Sharing equally is dividing.",
              "Adding three numbers: add two, then add the third.",
              "Fractions with the same bottom: add the tops."
            ],
            "example": "3 × 8 = 24, so 24 shared among 3 is 8 each."
          },
          "problems": [
            {
              "q": "Oda counts 6 towers with 7 bundles in each. How many bundles is that?",
              "answer": "42",
              "hint": "6 × 7.",
              "skill": "Multiplying"
            },
            {
              "q": "42 bundles are shared equally among 6 towers. How many bundles in each tower?",
              "answer": "7",
              "hint": "How many 6s make 42?",
              "skill": "Dividing"
            },
            {
              "q": "Oda counted 300 bundles of wood, then found 54 more, then 22 more. How many bundles of wood in all?",
              "answer": "376",
              "hint": "300 + 54 first. Then add 22.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "Oda stacked 5/8 of the woodpile before the break and 2/8 after. What fraction of the woodpile is stacked? (write a fraction)",
              "answer": "7/8",
              "hint": "Same bottom. Add the tops.",
              "skill": "Fractions"
            },
            {
              "q": "A tower platform is 5 squares wide and 3 squares long. How many squares is that?",
              "answer": "15",
              "hint": "5 rows of 3, so 5 × 3.",
              "skill": "Area and perimeter"
            }
          ]
        },
        "6": {
          "lesson": {
            "title": "Grade 6 numbers",
            "points": [
              "Adding decimals: line up the points, and write 2.5 as 2.50 if it helps. 1.25 + 2.5 + 0.75 = 4.5.",
              "Percent of a number: turn the percent into a fraction of 100.",
              "A ratio tells you how many of one thing for each group of the other.",
              "Order of operations: parentheses, then multiply and divide, then add and subtract."
            ],
            "example": "4 × (10 − 3) + 5: parentheses first, 7; then 4 × 7 = 28; then 28 + 5 = 33."
          },
          "problems": [
            {
              "q": "Oda logs 0.95 meters for the first wall section, 2.05 for the second and 1.25 for the third. How many meters is that in total?",
              "answer": "4.25",
              "hint": "Line the points up, writing a missing place as 0, then add all three.",
              "skill": "Decimals"
            },
            {
              "q": "Of 80 bundles of wood, 20% are set aside. How many is that?",
              "answer": "16",
              "hint": "20% of 80: 20% is 20/100.",
              "skill": "Ratios and percent"
            },
            {
              "q": "Towers and bundles of wood are kept in the ratio 3 to 5. If there are 6 towers, how many bundles of wood?",
              "answer": "10",
              "hint": "6 ÷ 3 = 2 groups. Each group has 5 bundles of wood.",
              "skill": "Ratios and percent"
            },
            {
              "q": "Oda works out 9 × (12 − 2) + 8. What is it?",
              "answer": "98",
              "hint": "Parentheses first, then multiply, then add.",
              "skill": "Order of operations"
            },
            {
              "q": "Solve for x: x + 148 = 750",
              "answer": "602",
              "hint": "Subtract 148 from both sides.",
              "skill": "Equations"
            }
          ]
        },
        "7": {
          "lesson": {
            "title": "Grade 7 numbers",
            "points": [
              "A unit rate is the total divided by how many: 21 meters for 6 sections is 21 ÷ 6 = 3.5 meters each.",
              "Percent change: find that percent of the starting number, then add it on or take it off.",
              "Below zero, going up adds and going down subtracts. Walk the number line one step at a time.",
              "A two-step equation: undo the adding first, then undo the multiplying."
            ],
            "example": "3x + 8 = 38, so 3x = 30, so x = 10."
          },
          "problems": [
            {
              "q": "12 wall sections needed 18 meters altogether. How many meters is that for one wall section?",
              "answer": "1.5",
              "hint": "A rate is the total shared out: 18 ÷ 12.",
              "skill": "Ratios and percent"
            },
            {
              "q": "Oda counted 80 bundles of wood on the first pass. On the second pass the number had risen by 20%. How many bundles of wood is that?",
              "answer": "96",
              "hint": "20% of 80 is 16. Then add it on.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The supply ledger opens at −4 bundles. Oda adds 16 bundles, then takes out 7 bundles. What does the ledger read now?",
              "answer": "5",
              "hint": "Start at −4, add 16 to get 12, then subtract 7.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: 5x + 6 = 41",
              "answer": "7",
              "hint": "Take 6 off both sides first, then divide by 5.",
              "skill": "Equations"
            },
            {
              "q": "On the plan, 1 cm stands for 8 meters. The wall measures 8 cm on the plan. How long is it really, in meters?",
              "answer": "64",
              "hint": "Every cm is 8 m, so 8 × 8.",
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
            "example": "Start at 20 and add 5 each hour: y = 5x + 20. After 4 hours, y = 5 × 4 + 20 = 40."
          },
          "problems": [
            {
              "q": "Oda starts with 12 bundles of wood and adds 8 more every hour. After 8 hours, how many bundles of wood are there?",
              "answer": "76",
              "hint": "This is the straight-line rule y = mx + b: 8 × 8 + 12.",
              "skill": "Linear relationships"
            },
            {
              "q": "Each row holds 8² bundles of wood. There are 6 rows. How many bundles of wood in all?",
              "answer": "384",
              "hint": "8² means 8 × 8 = 64. Then × 6.",
              "skill": "Powers and roots"
            },
            {
              "q": "Oda runs a cable from the top of a 9-meter post to a point 12 meters away on the ground. How long is the cable, in meters?",
              "answer": "15",
              "hint": "Right triangle: a² + b² = c². 9² + 12² = 81 + 144 = 225. The cable is the square root of that.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "Solve for x: 10x + 5 = 4x + 59",
              "answer": "9",
              "hint": "Take 4x off both sides to get 6x + 5 = 59, then take 5 off both sides and divide.",
              "skill": "Equations"
            },
            {
              "q": "Oda writes the total number of bundles of wood as 7 × 10^3. Written out in full, what number is that?",
              "answer": "7000",
              "hint": "10^3 is 1 with 3 zeros after it: 1,000. Then × 7.",
              "skill": "Powers and roots"
            }
          ]
        }
      },
      "orders": {
        "lesson": {
          "title": "Count, add, then halve",
          "points": [
            "Count letters on paper: B-E-A-C-O-N is six, R-E-L-A-Y is five.",
            "When a step says 'the report gives it', go back to the report and find the number before you add.",
            "Half of an odd number is not whole. Write the half as a decimal: half of 7 is 3.5."
          ],
          "example": "F-L-A-G is four, H-O-R-N is four: 4 + 4 = 8. Add 1 more flag to get 9. Half of 9 is 4.5."
        },
        "skill": "Following directions",
        "steps": [
          "Count the letters in the word BEACON.",
          "Count the letters in the word RELAY.",
          "Add those two counts.",
          "Add the number of towers Oda can see from the slab on a clear night. The report gives it.",
          "It takes two people to light a beacon, one to strike and one to watch, and they share the work evenly. Split your total in half.",
          "Type one person's share as a decimal."
        ],
        "prompt": "Your answer:",
        "answer": "8.5",
        "accept": [
          "8.50"
        ],
        "hint": "BEACON has six letters and RELAY has five. Half of an odd number is not a whole number, and step 6 says how to write it."
      }
    }
  ]
};
if (window.BASECAMP_MISSIONS && window.BASECAMP_MISSIONS.register) window.BASECAMP_MISSIONS.register(C);
else (window.BASECAMP_CAMPAIGNS_PENDING = window.BASECAMP_CAMPAIGNS_PENDING || []).push(C);
})();
