// ODYSSEY — campaign "dartops". GENERATED, do not edit.
// Source of truth: content/missions-full.js. Rebuild with:  python3 tools/split-missions.py
// RULE: nothing in this file is about the person using it. Content only.
(function () {
var C = {
  "id": "dartops",
  "kind": "shift",
  "readingLevel": {
    "fk": 4.7,
    "cl": 5.9
  },
  "grade": "5",
  "kindLabel": "Ops",
  "form": "fox",
  "title": "Dart Ops",
  "subtitle": "Foam-dart tactics, backyard arena, dusk",
  "pitch": "Five missions of foam-dart tactics. Scout the arena, count your darts, follow the game rules to the letter.",
  "scene": "assets/scene-dartops.jpg",
  "progress": {
    "unit": "missions",
    "total": 5
  },
  "dayNoun": "Mission",
  "stageNoun": "Mission",
  "finalNoun": "Mission complete",
  "stages": [
    "Scout",
    "Supply run",
    "Hold the line",
    "Flank",
    "Capture the flag"
  ],
  "reconNoun": "Intel Brief",
  "legs": {
    "recon": "Intel",
    "nav": "Dart count",
    "orders": "Game rules",
    "debrief": "After-action"
  },
  "fact": "Foam darts. Real teamwork. The game rules are not suggestions.",
  "finale": {
    "prompt": "Flag captured. Pick your team's color.",
    "options": [
      {
        "label": "Orange",
        "color": "#FF8C3A"
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
        "label": "Purple",
        "color": "#B57BFF"
      }
    ],
    "done": "Mission complete. Darts recovered. Same arena tomorrow."
  },
  "patrols": [
    {
      "id": "dart-1",
      "title": "Scout",
      "recon": {
        "lesson": {
          "title": "Reading an intel brief",
          "points": [
            "Read the five questions first. Two details, one word, one why, one 'mostly about'.",
            "Tactics words are often explained right in the brief, after words like 'which is'. Find that sentence.",
            "'Why does the scout' questions: the brief shows what the scout is for."
          ],
          "example": "Made-up example: 'The lifeguard sits up high. From there she can see the whole pool.' The why sits in the sentence right after the fact."
        },
        "title": "Intel Brief: Scout",
        "passage": [
          "A backyard at dusk has been turned into an arena with plywood, tires and string lights. Two teams of four. Foam darts only, safety goggles always, and the rule everyone knows before anyone picks up a blaster: no shots at faces. A tagged player walks to the fence with both hands up and waits for the next round. Those rules are not the boring part. They are what lets the game go hard without anyone going home crying.",
          "Before the first round, one player from each team goes out alone with no darts. That is the scout. The scout's job is not to tag anyone; it is to walk the arena and come back with a map in their head. The map starts with where the cover is, which is anything solid enough to hide behind and stop a dart, like the striped barricades, the tire stacks, and the fort. The scout notes which cover has two ways out and which is a dead end, and where the gaps are that a player would have to sprint across in the open.",
          "The scout goes without darts on purpose. A player with a blaster is tempted to fire, and a player who fires gives away exactly where they are and what they were looking at. A scout who only looks comes back invisible and knowing. Your team will plan the whole round on what the scout saw. So tonight, walk it. Count the barricades. Find the gaps. Do not fire, even when you could. Especially when you could."
        ],
        "questions": [
          {
            "q": "What does a tagged player do?",
            "choices": [
              "Walks to the fence with both hands up and waits for the next round",
              "Keeps playing",
              "Waits where they were tagged until the round is over",
              "Takes off their goggles and sits out the rest of the night"
            ],
            "answer": 0,
            "hint": "Paragraph 1, the sentence with 'tagged player'.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 2, what is 'cover'?",
            "choices": [
              "The safety goggles that every player has to wear",
              "The string lights that have been hung up over the whole backyard",
              "A gap that a player has to sprint across",
              "Anything solid enough to hide behind and stop a dart"
            ],
            "answer": 3,
            "hint": "The sentence with 'which is anything solid'.",
            "skill": "Word meanings"
          },
          {
            "q": "What does the scout carry?",
            "choices": [
              "A blaster and a full magazine",
              "A dart or two",
              "Nothing; no darts",
              "A folded map"
            ],
            "answer": 2,
            "hint": "First sentence of paragraph 2 and first sentence of paragraph 3.",
            "skill": "Finding details"
          },
          {
            "q": "Why does the scout go out without darts?",
            "choices": [
              "The rules do not let a scout fire before the first round begins",
              "So the scout is not tempted to fire and give away their position; a scout who only looks comes back unseen",
              "A scout with a blaster would be too slow to walk the whole arena",
              "A player carrying darts has to walk more slowly, and the scout has only a few minutes before the first round begins"
            ],
            "answer": 1,
            "hint": "Paragraph 3, the first three sentences.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 2 mostly about?",
            "choices": [
              "The scout's job: mapping the cover, the exits and the gaps",
              "How many players are on each of the two teams in the backyard at dusk",
              "The plywood, the tires and the string lights that make the arena",
              "How to hold a blaster steady when firing from cover"
            ],
            "answer": 0,
            "hint": "Paragraph 2 is entirely about what the scout looks for.",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Counting the arena",
          "points": [
            "Factors: the numbers that divide evenly. 12 splits into teams of 2, 3, 4 or 6, with nobody left out.",
            "Perimeter: add all four sides. A yard 25 by 15 is 25 + 15 + 25 + 15.",
            "Sharing: 35 shared among 7 is 35 ÷ 7.",
            "Same bottom: 1/8 + 4/8 = 5/8."
          ],
          "example": "6 crates here and 5 over there is 6 + 5 = 11 crates. Each holds 3 flags: 11 × 3 = 33 flags."
        },
        "problems": [
          {
            "q": "The scout wants to split the 24 players into equal teams, with at least 2 players on each team and at least 2 teams. How many different team sizes could the scout pick?",
            "answer": "6",
            "hint": "List the numbers that divide 24 evenly. Leave out 1 and 24.",
            "skill": "Multiplying"
          },
          {
            "q": "The arena is 30 feet long and 20 feet wide. What is its perimeter in feet?",
            "answer": "100",
            "hint": "30 + 20 + 30 + 20.",
            "skill": "Area and perimeter"
          },
          {
            "q": "There are 48 darts shared equally among the 8 players. How many darts does each player start with?",
            "answer": "6",
            "hint": "48 ÷ 8.",
            "skill": "Dividing"
          },
          {
            "q": "The scout mapped 2/6 of the arena before dark and 3/6 more with a flashlight. How much is mapped? (write a fraction)",
            "answer": "5/6",
            "hint": "Same bottom. Add the tops.",
            "skill": "Fractions"
          },
          {
            "q": "The scout counts 12 barricades inside the arena and 9 more behind the fence. Each one hides 2 players. How many players can hide?",
            "answer": "42",
            "hint": "12 + 9 = 21 barricades first. Then 21 × 2.",
            "skill": "Multi-step problems"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "One line for the whole brief",
            "points": [
              "The central idea covers every paragraph. Give each one a four-word label, then find the choice that all three labels serve.",
              "The wrong answers are usually true. They cover one paragraph, or they are a saying about games in general that the brief never makes.",
              "Then four other moves: prove a claim with one line, name what a paragraph is for, work a word out from its sentence, and put two paragraphs together."
            ],
            "example": "Three paragraphs about a relay race: the rules for the handover, what the first runner does, why the last leg is chosen last. 'The baton must be passed inside the box' covers one paragraph. 'Running is good exercise' covers none of it. 'A relay is won in the handovers, not the sprints' covers all three."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea of the whole brief?",
              "choices": [
                "Before a single dart is fired, the round is decided by one player who walks the arena and comes back knowing it.",
                "A tagged player walks to the fence with both hands up and waits there for the next round to start.",
                "Preparation is what wins any game worth playing, whether it is played with darts or with a ball.",
                "The scout's job is to tag as many of the other team as possible."
              ],
              "answer": 0,
              "hint": "The rules that let the game go hard, the walk around the arena, and the reason for going empty-handed. Ask what all three are serving, and cross off the one the second paragraph denies.",
              "skill": "Central idea and evidence",
              "evidence": "Your team will plan the whole round on what the scout saw."
            },
            {
              "q": "Claim: carrying a blaster would cost the scout the very thing they were sent out for. Which sentence from the brief best supports that claim?",
              "choices": [
                "The map starts with where the cover is, which is anything solid enough to hide behind and stop a dart, like the striped barricades, the tire stacks, and the fort.",
                "Before the first round, one player from each team goes out alone with no darts.",
                "Do not fire, even when you could.",
                "A player with a blaster is tempted to fire, and a player who fires gives away exactly where they are and what they were looking at."
              ],
              "answer": 3,
              "hint": "Saying it is done on purpose is not saying what the purpose is. Find the sentence that follows one shot all the way to what it costs.",
              "skill": "Finding details",
              "evidence": "A player with a blaster is tempted to fire, and a player who fires gives away exactly where they are and what they were looking at."
            },
            {
              "q": "Why does the brief open with the safety rules before it says anything about the scout?",
              "choices": [
                "It lists the equipment each of the two teams needs.",
                "It compares this backyard arena with a larger one.",
                "It settles what the rules are for, so the missions that follow can be played hard without anyone worrying about them again.",
                "It explains how the barricades were built out of plywood and tires, and where the string lights were hung around the edge of the yard."
              ],
              "answer": 2,
              "hint": "Read the two short sentences that close the first paragraph. A writer who calls something the boring part and then argues with themselves is doing a job.",
              "skill": "Author's purpose and structure",
              "evidence": "They are what lets the game go hard without anyone going home crying."
            },
            {
              "q": "The brief says the scout comes back 'with a map in their head'. What is that phrase telling you?",
              "choices": [
                "A sketch of the arena drawn on paper and handed to the team when the scout gets back",
                "A remembered picture of the arena, rather than anything drawn on paper",
                "A count of how many players the other team has",
                "A route the scout marks on the ground for the team to follow"
              ],
              "answer": 1,
              "hint": "Nobody is carrying paper. Ask what the words in their head are ruling out, and check it against the list of things the scout is told to notice.",
              "skill": "Word meanings",
              "evidence": "The scout's job is not to tag anyone; it is to walk the arena and come back with a map in their head."
            },
            {
              "q": "Paragraphs 2 and 3 together explain the last line of the brief, which says not to fire even when you could. Why not?",
              "choices": [
                "A shot from a good position tells the other team where the good positions are, and finding those was the whole errand.",
                "A shot fired without goggles on would end the round for everyone.",
                "The scout is not carrying enough darts for one shot to matter, so the tag would be wasted even if it landed on the far side of the arena.",
                "Firing would use up the darts the scout is carrying, which are the same ones the supply run is meant to fetch from the crate."
              ],
              "answer": 0,
              "hint": "Paragraph two says what the scout is sent to find. Paragraph three says what firing gives away. Put the two lists side by side and see how much they overlap.",
              "skill": "Reading between the lines",
              "evidence": "A scout who only looks comes back invisible and knowing."
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
              "Add, then take away, in order: 300 + 50 − 20 is 350, then 330.",
              "Fractions with the same bottom: add the tops."
            ],
            "example": "Around the edge: a mat 5 feet by 3 feet is 5 + 5 + 3 + 3 = 16 feet."
          },
          "problems": [
            {
              "q": "The scout lays the barricades out in 2 rows of 6. How many barricades is that?",
              "answer": "12",
              "hint": "2 × 6.",
              "skill": "Multiplying"
            },
            {
              "q": "42 barricades are set out in 7 equal rows. How many barricades are in each row?",
              "answer": "6",
              "hint": "42 split into 7 equal parts.",
              "skill": "Dividing"
            },
            {
              "q": "The log shows 455 darts, then 129 more are added and 80 are taken off. What does the log show now?",
              "answer": "504",
              "hint": "Add 455 and 129 first, then take 80 off.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "Add: 2/4 + 1/4 (write a fraction)",
              "answer": "3/4",
              "hint": "Same bottom. 2 + 1 on top.",
              "skill": "Fractions"
            },
            {
              "q": "A row mat is 7 feet wide and 6 feet long. How many feet is it all the way around the edge?",
              "answer": "26",
              "hint": "Two sides of 7 and two sides of 6: 7 + 7 + 6 + 6.",
              "skill": "Area and perimeter"
            }
          ]
        },
        "6": {
          "lesson": {
            "title": "Grade 6 numbers",
            "points": [
              "Multiplying a decimal by a whole number: multiply as if there were no point, then put the point back. 6 × 1.15: 6 × 115 = 690, so 6.90, which is 6.9.",
              "Percent to whole: if 10% is 7, the whole is 10 times as big, 70.",
              "To simplify a ratio, divide both sides by the same number: 12:18 is 2:3.",
              "Order of operations: parentheses, then multiply and divide, then add and subtract."
            ],
            "example": "(5 + 3) × 7: parentheses first make 8, then 8 × 7 = 56."
          },
          "problems": [
            {
              "q": "Each barricade takes 1.65 feet of plywood. How many feet for 9 barricades?",
              "answer": "14.85",
              "hint": "Split it: 9 × 1 plus 9 × 0.65.",
              "skill": "Decimals"
            },
            {
              "q": "25% of the barricades counted is 15. How many were counted in all?",
              "answer": "60",
              "hint": "15 is 25 hundredths of the whole: 15 ÷ 25 × 100.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The scout counts 24 rows and 30 barricades. In its simplest form, what is the ratio of rows to barricades? (write it like 2:3)",
              "answer": "4:5",
              "accept": [
                "4 to 5"
              ],
              "hint": "Divide both by 6.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The scout works out (9 + 4) × 6. What is it?",
              "answer": "78",
              "hint": "Parentheses first, then multiply.",
              "skill": "Order of operations"
            },
            {
              "q": "One winter night it was −12 degrees at midnight and rose 5 degrees by dawn. What does the thermometer read at dawn?",
              "answer": "-7",
              "accept": [
                "−7"
              ],
              "hint": "Start at −12 and count 5 steps up.",
              "skill": "Negative numbers"
            }
          ]
        },
        "7": {
          "lesson": {
            "title": "Grade 7 numbers",
            "points": [
              "How many fit: total ÷ size of one. 9 ÷ 1.5 = 6.",
              "Undoing a rise: after a 10% rise the new number is 110% of the old, so 55 ÷ 1.1 = 50.",
              "Below zero, going up adds and going down subtracts. Walk the number line one step at a time.",
              "With parentheses, like 3(x + 2) = 21, undo the outside first: divide by 3, then take 2 off. x = 5."
            ],
            "example": "A model at 1 to 50: 3 inches on the model is 3 × 50 = 150 inches for real."
          },
          "problems": [
            {
              "q": "The scout has 25 feet of line to cover and each barricade covers 1.25 feet. How many barricades does that take?",
              "answer": "20",
              "hint": "25 ÷ 1.25.",
              "skill": "Ratios and percent"
            },
            {
              "q": "A count of barricades rose by 20% to 144. What was it before?",
              "answer": "120",
              "hint": "144 is 120% of the old count.",
              "skill": "Ratios and percent"
            },
            {
              "q": "One winter evening it was 9 degrees, then it fell 23 degrees. What does the thermometer read?",
              "answer": "-14",
              "accept": [
                "−14"
              ],
              "hint": "Fall 9 to reach 0, then keep falling: the rest of the 23 degrees takes it below zero.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: (x + 4) × 5 = 65",
              "answer": "9",
              "hint": "Divide both sides by 5 first, then take 4 off.",
              "skill": "Equations"
            },
            {
              "q": "A model of the arena is built at 1 to 25. The arena on the model is 10 inches across. How many inches across is the real arena?",
              "answer": "250",
              "hint": "Every inch on the model is 25 inches for real.",
              "skill": "Ratios and percent"
            }
          ]
        },
        "8": {
          "lesson": {
            "title": "Grade 8 numbers",
            "points": [
              "A straight-line rule is y = mx + b: b is where you start, m is what you add each step.",
              "A square root undoes squaring: 9² = 81, so the square root of 81 is 9.",
              "Pythagoras: in a right triangle a² + b² = c², and c is always the longest side.",
              "With x on both sides, move all the x's to one side first, then all the plain numbers to the other."
            ],
            "example": "Powers of ten: 6 × 10^7 ÷ 10^3. Subtract the powers, 7 − 3 = 4, so 6 × 10^4."
          },
          "problems": [
            {
              "q": "The count of darts fired follows the rule y = 7x + 24, where x is the hour. What is y when x = 5?",
              "answer": "59",
              "hint": "Put 5 in for x: 7 × 5 + 24.",
              "skill": "Linear relationships"
            },
            {
              "q": "What is 7² + 4²?",
              "answer": "65",
              "hint": "7 × 7 = 49 and 4 × 4 = 16. Add them.",
              "skill": "Powers and roots"
            },
            {
              "q": "A 10-foot rope reaches the top of a 6-foot pole. How far is the foot of the rope from the base, in feet?",
              "answer": "8",
              "hint": "b² = c² − a² = 100 − 36 = 64. Then take the square root.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "Solve for x: 8x + 14 − 3x = 34",
              "answer": "4",
              "hint": "Collect the x's first: 5x + 14 = 34.",
              "skill": "Equations"
            },
            {
              "q": "What is 4 × 10^5 ÷ 10^4?",
              "answer": "40",
              "hint": "Dividing subtracts the powers: 10^5 ÷ 10^4 = 10^1. So 4 × 10.",
              "skill": "Powers and roots"
            }
          ]
        }
      },
      "orders": {
        "lesson": {
          "title": "Game rules",
          "points": [
            "Do the steps in order and write the running number.",
            "A rule that says 'if more than' can only be checked after the count. Read to the end first."
          ],
          "example": "If the last step says spell the answer out, 35 becomes THIRTY-FIVE."
        },
        "skill": "Following directions",
        "steps": [
          "Count the striped barricades on your side of the arena: 4.",
          "Add the tire stacks on your side: 2.",
          "The fort counts as cover as well, so add 1 more.",
          "Multiply your total by the 4 players on your team.",
          "The scout calls the count back across a noisy yard, so spell it out: type the number as a word in capital letters, with a dash if it needs one. (16 would be SIXTEEN.)"
        ],
        "prompt": "Your answer:",
        "answer": "TWENTY-EIGHT",
        "accept": [
          "twenty-eight",
          "Twenty-eight",
          "twenty eight",
          "TWENTY EIGHT",
          "twenty-eight."
        ],
        "hint": "Three kinds of cover go into the total before you multiply. Step 5 decides how that number gets written down."
      }
    },
    {
      "id": "dart-2",
      "title": "Supply Run",
      "recon": {
        "lesson": {
          "title": "The last dart",
          "points": [
            "'Reload' is defined in the brief. Find the sentence.",
            "'Why never fire your last dart' questions: the brief tells you what an empty blaster means.",
            "Count the sentences on each idea for the main-idea question."
          ],
          "example": "Made-up example: 'Carry a spare key. A kid with no key waits on the steps.' The why is in what happens without it."
        },
        "title": "Intel Brief: Supply Run",
        "passage": [
          "Every dart you fire ends up on the grass, and grass at dusk eats orange foam. So the second mission is the supply run: one player from each side crosses to the middle of the arena, where a crate of fresh darts sits in the open. That player brings back as many as they can carry while the other team tries to tag them. It is the most dangerous job on the field and the one everybody wants, because the team that runs out of darts first loses, every time, no matter how good they are.",
          "Here is why darts matter more than aim. A blaster holds a magazine, and when the magazine is empty you have to reload, which means to stop, pull the empty magazine out, push a full one in, and get ready to fire again. Reloading takes about five seconds, and for those five seconds you cannot fire back. Five seconds in the open is how you get tagged. So good players count their darts as they go, and they reload behind cover, before the magazine is empty, never after.",
          "There is one more rule, and it is the one that wins games. Never fire your last dart. A player with one dart left is still dangerous; the other team has to stay behind cover because of it. A player with no darts is just a target, and everyone can tell, because an empty blaster makes a different sound. Keep the last one. Let them think you have more. Then go get more."
        ],
        "questions": [
          {
            "q": "Where is the crate of fresh darts?",
            "choices": [
              "Behind the fort, out of sight of the other team",
              "In the middle of the arena, in the open",
              "Beside the fence, behind the striped barricades",
              "On top of the fort, where the whole team can reach it"
            ],
            "answer": 1,
            "hint": "Paragraph 1, the sentence about the supply run.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 2, what does 'reload' mean?",
            "choices": [
              "To fire faster than the other team can get back behind cover, so they stay pinned",
              "To stop, swap the empty magazine for a full one, and get ready to fire again",
              "To run out to the crate and carry fresh darts back",
              "To put your safety goggles back on before stepping out"
            ],
            "answer": 1,
            "hint": "The sentence with 'which means to stop'.",
            "skill": "Word meanings"
          },
          {
            "q": "About how long does reloading take?",
            "choices": [
              "A second",
              "A minute",
              "No time",
              "Five seconds"
            ],
            "answer": 3,
            "hint": "Paragraph 2, the sentence that starts 'Reloading takes'.",
            "skill": "Finding details"
          },
          {
            "q": "Why should you never fire your last dart?",
            "choices": [
              "Because a player with one dart is still a threat that keeps the other team behind cover, but a player with none is just a target",
              "Because the other team counts your shots and knows when your magazine is empty",
              "Because a magazine has to be swapped behind cover instead of out in the open",
              "Because an empty blaster makes a different sound, and a player who has just fired their last dart has about five seconds before the other team hears it and moves in"
            ],
            "answer": 0,
            "hint": "Paragraph 3, the sentences about one dart and no darts.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 2 mostly about?",
            "choices": [
              "Why running out matters: reloading leaves you helpless for five seconds, so count and reload behind cover",
              "How the grass at dusk swallows every orange foam dart that is fired, which is the reason the supply run exists",
              "The supply run to the crate in the middle, and why the team that runs out of darts first loses every single time",
              "How a magazine is pulled out and pushed back in, and why an empty blaster makes a different sound from a full one"
            ],
            "answer": 0,
            "hint": "Paragraph 2 is about magazines, reloading and counting.",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Magazines and darts",
          "points": [
            "Darts per magazine times magazines: 8 × 5.",
            "Darts fired minus darts recovered: 50 − 27.",
            "Putting together: 18 brought back plus 7 kept is 18 + 7 = 25.",
            "Same bottom: 3/10 + 4/10 = 7/10."
          ],
          "example": "Sharing: 45 darts in 5 bags is 45 ÷ 5 = 9 in each bag."
        },
        "problems": [
          {
            "q": "A magazine holds 12 darts. You carry 3 full magazines. How many darts is that?",
            "answer": "36",
            "hint": "12 × 3.",
            "skill": "Multiplying"
          },
          {
            "q": "Your team fired 36 darts in the first round and picked 21 of them back up. How many are still lost in the grass?",
            "answer": "15",
            "hint": "36 − 21.",
            "skill": "Adding and subtracting"
          },
          {
            "q": "The supply run brings back 15 fresh darts. You had kept 6 in your blaster. How many darts do you have now?",
            "answer": "21",
            "hint": "15 + 6.",
            "skill": "Multi-step problems"
          },
          {
            "q": "Your magazine was 5/12 full. You load 4/12 more from the crate. How full is it? (write a fraction)",
            "answer": "9/12",
            "hint": "Same bottom. Add the tops. 9/12 or 3/4 both count.",
            "accept": [
              "3/4"
            ],
            "skill": "Fractions"
          },
          {
            "q": "The supply crate holds 84 darts, shared equally among 7 magazines. How many darts go in each magazine?",
            "answer": "12",
            "hint": "84 ÷ 7.",
            "skill": "Dividing"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "Show me the proof",
            "points": [
              "A supporting sentence has to settle the claim on its own. Read the claim, read your pick, and ask whether anyone could still argue.",
              "All four choices are real sentences from the brief, so being true earns nothing. Only proving counts.",
              "Watch for the sentence that shares a word with the claim and proves none of it. That is the trap almost every time."
            ],
            "example": "Claim: the crate is in the worst place on the field. 'The crate holds fresh darts' is true and proves nothing. 'It sits in the middle of the arena, in the open' is proof."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea that develops across the whole brief?",
              "choices": [
                "Reloading a blaster takes about five seconds, and for those five seconds standing out in the open you cannot fire back at anybody at all.",
                "How many darts you have, not how well you shoot, is what decides the game, so every rule here is about never being caught empty.",
                "Speed is the most important thing in any sport, and a player who moves faster than everybody else will win a round whatever else happens.",
                "The team with the best shot wins whatever their supplies are like, because aim settles a round long before either team runs out of darts."
              ],
              "answer": 1,
              "hint": "The run to the crate, the five seconds of a reload, and the rule about the last dart. Ask what all three are about, and cross off the choice the brief argues against directly.",
              "skill": "Central idea and evidence",
              "evidence": "Here is why darts matter more than aim."
            },
            {
              "q": "Claim: good players deal with an empty magazine before it is actually empty. Which sentence from the brief best supports that claim?",
              "choices": [
                "A blaster holds a magazine, and when the magazine is empty you have to reload, which means to stop, pull the empty magazine out, push a full one in, and get ready to fire again.",
                "So good players count their darts as they go, and they reload behind cover, before the magazine is empty, never after.",
                "Reloading takes about five seconds, and for those five seconds you cannot fire back.",
                "Five seconds in the open is how you get tagged."
              ],
              "answer": 1,
              "hint": "Two of these explain why a reload is risky. The claim is about when it happens. Find the sentence that tells you the timing, not the risk.",
              "skill": "Finding details",
              "evidence": "So good players count their darts as they go, and they reload behind cover, before the magazine is empty, never after."
            },
            {
              "q": "The second paragraph opens: 'Here is why darts matter more than aim.' What job does that sentence do?",
              "choices": [
                "It repeats the point of the first paragraph in different words, adding nothing the reader has not heard.",
                "It compares two different kinds of blaster, one that holds a magazine and one that does not.",
                "It gives the first step of the supply run, the crossing to the crate in the middle of the arena.",
                "It promises an explanation, and the rest of the paragraph delivers it as a chain of causes ending in a tagged player."
              ],
              "answer": 3,
              "hint": "Read the sentences that follow it and see how each one is caused by the one before. A sentence that opens a chain has a different job from one inside it.",
              "skill": "Author's purpose and structure",
              "evidence": "Here is why darts matter more than aim."
            },
            {
              "q": "The brief says 'grass at dusk eats orange foam'. What is that phrase telling you?",
              "choices": [
                "A dart dropped in the grass is almost impossible to find in the fading light",
                "The grass damages any foam dart that lands in it, so the darts have to be replaced",
                "Darts left out overnight are taken away by animals",
                "Dusk is a bad time of day to aim a blaster"
              ],
              "answer": 0,
              "hint": "Grass does not eat. Two words in the phrase are doing the work: at dusk. Ask what those two words change about looking for something small.",
              "skill": "Word meanings",
              "evidence": "Every dart you fire ends up on the grass, and grass at dusk eats orange foam."
            },
            {
              "q": "Paragraphs 1 and 3 together explain why keeping one dart is worth more than firing it. Why is it?",
              "choices": [
                "Running out is how teams lose, and a player who might still fire keeps the other team behind cover without spending anything.",
                "Reloading takes about five seconds, and a player who is caught out in the open for those five seconds is the one who ends up getting tagged.",
                "The sound an empty blaster makes frightens the other team off, so a player who has just fired the last dart is the safest one on the field.",
                "The round is scored by counting the darts each team has left when the timer stops, so a player who keeps the last one adds to that count."
              ],
              "answer": 0,
              "hint": "Paragraph one says what losing looks like. Paragraph three says what one dart does to the other team. Put the cost of running out next to the value of one dart kept back.",
              "skill": "Reading between the lines",
              "evidence": "A player with one dart left is still dangerous; the other team has to stay behind cover because of it."
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
              "Taking away from a round number: 500 − 236 = 264. Check by adding back.",
              "A fraction names parts of a whole: 2 parts done out of 5 equal parts is 2/5."
            ],
            "example": "Half of 86: split it into 80 and 6. The halves are 40 and 3, so 43."
          },
          "problems": [
            {
              "q": "Every magazine needs 9 darts, and there are 8 magazines. How many darts is that?",
              "answer": "72",
              "hint": "8 groups of 9, so 8 × 9.",
              "skill": "Multiplying"
            },
            {
              "q": "The runner splits 72 darts in half. How many darts is one half?",
              "answer": "36",
              "hint": "Half of 72.",
              "skill": "Dividing"
            },
            {
              "q": "The runner needs 600 darts and has 344. How many more are needed?",
              "answer": "256",
              "hint": "600 − 344.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "The day's work is cut into 4 equal parts and the runner has finished 3 of them. What fraction is done? (write a fraction)",
              "answer": "3/4",
              "hint": "3 parts out of 4.",
              "skill": "Fractions"
            },
            {
              "q": "The runner counts 344 darts, then 16 more. How many is that?",
              "answer": "360",
              "hint": "344 + 16.",
              "skill": "Adding and subtracting"
            }
          ]
        },
        "6": {
          "lesson": {
            "title": "Grade 6 numbers",
            "points": [
              "Dividing by a fraction: 3 ÷ 1/5 asks how many fifths fit in 3. Each whole holds 5, so 3 × 5 = 15.",
              "Percent of a number: turn the percent into a fraction of 100.",
              "A ratio tells you how many of one thing for each group of the other.",
              "Order of operations: parentheses, then multiply and divide, then add and subtract."
            ],
            "example": "6 + 4 × 5 − 2: multiply first, 4 × 5 = 20, then 6 + 20 − 2 = 24."
          },
          "problems": [
            {
              "q": "The scout has 9 feet of tape to mark the field. Each marker takes 1/3 of a foot. How many markers can the scout make?",
              "answer": "27",
              "hint": "Dividing by 1/3 is the same as multiplying by 3: 9 × 3.",
              "skill": "Fractions"
            },
            {
              "q": "Of 200 darts, 10% are struck off the list. How many are left on it?",
              "answer": "180",
              "hint": "10% of 200 is 20. Take that off 200.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The runner shares 16 crates between two teams in the ratio 1 to 3. How many does the smaller share get?",
              "answer": "4",
              "hint": "1 + 3 = 4 parts. 16 ÷ 4 = 4 for one part.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The runner works out 8 × 8 − 4 × 2. What is it?",
              "answer": "56",
              "hint": "Do both multiplications first, then subtract.",
              "skill": "Order of operations"
            },
            {
              "q": "Solve for x: x + 142 + 22 = 900",
              "answer": "736",
              "hint": "Add 142 and 22 first, then take that off 900.",
              "skill": "Equations"
            }
          ]
        },
        "7": {
          "lesson": {
            "title": "Grade 7 numbers",
            "points": [
              "A unit rate is the total divided by how many: 21 ÷ 6 = 3.5 for one.",
              "Percent change: find that percent of the starting number, then add it on or take it off.",
              "Multiplying or dividing with one minus sign gives a minus answer: 3 × (−5) = −15, and −15 ÷ 3 = −5.",
              "With parentheses, like 3(x + 5) = 27, undo the outside first: divide by 3, then take 5 off. x = 4."
            ],
            "example": "Around a square: a tile 9 inches on a side is 9 × 4 = 36 inches."
          },
          "problems": [
            {
              "q": "12 barricades covered 30 feet of the line. At the same rate, how many feet would 24 barricades cover?",
              "answer": "60",
              "hint": "One barricade covers 30 ÷ 12 = 2.5 feet. Then × 24.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The team had 240 darts, then added 10% more. How many darts were added?",
              "answer": "24",
              "hint": "10% of 240: 10/100 × 240.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The thermometer falls 4 degrees every hour for 4 hours. What is the total change? (Write a fall as a negative number.)",
              "answer": "-16",
              "accept": [
                "−16"
              ],
              "hint": "4 hours of −4 each: 4 × (−4). One minus sign, so the answer is negative.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: 4(x + 4) = 28",
              "answer": "3",
              "hint": "Divide both sides by 4 to get x + 4 = 7.",
              "skill": "Equations"
            },
            {
              "q": "A round frame has a radius of 5 inches. Using 3.14 for pi, what is its area in square inches?",
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
              "A square root undoes squaring. If a square has area 49, its side is 7.",
              "Pythagoras: in a right triangle a² + b² = c², and c is always the longest side.",
              "With x on both sides, move all the x's to one side first, then all the plain numbers to the other."
            ],
            "example": "A list goes 2, 6, 10, 14: it adds 4 each step, so the 9th number is 2 + 8 × 4 = 34."
          },
          "problems": [
            {
              "q": "The count of darts goes 15, 22, 29, 36, and on. What is the 11th number in the list?",
              "answer": "85",
              "hint": "It starts at 15 and adds 7 each step. The number you want is 10 steps on from 15.",
              "skill": "Linear relationships"
            },
            {
              "q": "What is 8² − 8?",
              "answer": "56",
              "hint": "8 × 8 = 64, then take 8 off.",
              "skill": "Powers and roots"
            },
            {
              "q": "A right triangle has short sides of 5 and 12 feet. How long is its longest side, in feet?",
              "answer": "13",
              "hint": "5² + 12² = 169. The longest side is the square root of that.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "Solve for x: 7x − 3x = 28",
              "answer": "7",
              "hint": "7 − 3 = 4, so 4x = 28.",
              "skill": "Equations"
            },
            {
              "q": "A round tank is 4 feet across and 5 feet deep. Using 3.14 for pi, what is its volume in cubic feet? (The radius is half the distance across.)",
              "answer": "62.8",
              "hint": "The radius is 4 ÷ 2 = 2. Volume = 3.14 × radius × radius × depth: 3.14 × 2 × 2 × 5.",
              "skill": "Area and perimeter"
            }
          ]
        }
      },
      "orders": {
        "lesson": {
          "title": "Keep the last one",
          "points": [
            "Subtract the darts fired, then check the rule about the last dart before doing anything else.",
            "Do every step as written, then check the last step: it may ask whether an earlier step broke a rule."
          ],
          "example": "8 darts, fire 3, then 5 more, and you are at 0. If the last step asks whether the rule was broken, the answer is yes."
        },
        "skill": "Following directions",
        "steps": [
          "You cross to the crate carrying 6 darts.",
          "Fire 3 darts on the way out.",
          "Fire 2 more from behind the crate.",
          "Fire 1 more on the sprint back.",
          "Count the darts left in your blaster.",
          "Type that count, unless step 4 broke the rule about never firing your last dart, in which case type EMPTY instead."
        ],
        "prompt": "Your answer:",
        "answer": "EMPTY",
        "accept": [
          "empty",
          "Empty",
          "empty."
        ],
        "hint": "Take each burst off the 6 you started with, one step at a time. Step 6 asks whether that shot in step 4 was allowed."
      }
    },
    {
      "id": "dart-3",
      "title": "Hold the Line",
      "recon": {
        "lesson": {
          "title": "Why the line holds",
          "points": [
            "'Objective' is defined in the brief. Find the sentence.",
            "'Why not chase' questions: the brief shows what happens to the cover you leave.",
            "Main idea: what would you title the paragraph?"
          ],
          "example": "Made-up example: 'The quarry, which is the animal being hunted, ran into the woods.' The meaning comes right after 'which is'."
        },
        "title": "Intel Brief: Hold the Line",
        "passage": [
          "Mission three is defense. Your team has the fort, the fence behind it, and a line of three barricades in front. Your objective is the one thing the mission is about and the thing you win or lose by. Here it is simple: nobody from the other team touches the fort before the timer runs out. Four minutes. They will come at you the whole time. You do not have to tag anyone. You have to still be there.",
          "The line is three players behind three barricades, each covering the gap to the next. When one player is reloading, the players on either side cover their gap. That is the whole trick, and it only works if everyone stays. The most common way a line breaks is not the other team; it is one defender who sees an easy tag, chases it ten feet into the open, and leaves a hole. The other team is waiting for exactly that. They will show you an easy tag on purpose.",
          "So the rule for the line is the hardest rule in the game for someone who is good at this: do not chase. Let them come to you. Fire only from behind cover, count your darts, and when your magazine is down to one, say reloading out loud so your neighbors close the gap. A line that holds for four minutes does not have to be brave. It has to be patient. Patient wins mission three every single time."
        ],
        "questions": [
          {
            "q": "How long does the line have to hold?",
            "choices": [
              "A minute",
              "One hour",
              "Four minutes",
              "All game"
            ],
            "answer": 2,
            "hint": "Paragraph 1, the short sentence about the timer.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 1, what is the 'objective'?",
            "choices": [
              "The fort that your team is defending, with the fence standing right behind it",
              "The one thing the mission is about, the thing you win or lose by",
              "One of the three barricades standing in the line in front of the fort",
              "The timer that counts the four minutes down to zero"
            ],
            "answer": 1,
            "hint": "The sentence with 'the one thing the mission is about'.",
            "skill": "Word meanings"
          },
          {
            "q": "What should a defender say out loud when their magazine is down to one?",
            "choices": [
              "I am out of darts",
              "Reloading",
              "Hold the line",
              "Nothing at all"
            ],
            "answer": 1,
            "hint": "Paragraph 3, the sentence about neighbors.",
            "skill": "Finding details"
          },
          {
            "q": "Why does the brief say the other team will show you an easy tag on purpose?",
            "choices": [
              "To use up the line's darts before the timer runs out",
              "To tempt a defender to chase it and leave a hole in the line",
              "To show the defenders that the attacking team still has plenty of darts left",
              "To end the round early instead of waiting out the whole four minutes"
            ],
            "answer": 1,
            "hint": "Paragraph 2, the last three sentences.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 2 mostly about?",
            "choices": [
              "How many barricades there are in the line, and how many players stand behind them",
              "The four-minute timer, and how the mission is won by still being there when it runs out",
              "How the line works by covering gaps, and how it breaks when someone chases",
              "How to call out reloading so that the players on either side will close your gap"
            ],
            "answer": 2,
            "hint": "Paragraph 2 explains the trick and the most common failure.",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Four minutes of darts",
          "points": [
            "Hundredths as decimals: 5/100 is 0.05 and 30/100 is 0.30.",
            "Darts per minute times minutes: 6 × 2 = 12, then add the darts kept.",
            "Perimeter of the fort: 10 + 8 + 10 + 8.",
            "Same bottom: 5/6 − 2/6 = 3/6."
          ],
          "example": "Money: 3 packs at $2.25 is 2.25 + 2.25 + 2.25 = $6.75."
        },
        "problems": [
          {
            "q": "The team hit 63 of its 100 shots. Write 63/100 as a decimal.",
            "answer": "0.63",
            "hint": "63 hundredths: two places after the point.",
            "skill": "Decimals"
          },
          {
            "q": "Each defender fires about 5 darts a minute for 4 minutes, and keeps 1 dart at the end. How many darts does one defender need for the mission?",
            "answer": "21",
            "hint": "5 × 4 first. Then add 1.",
            "skill": "Multi-step problems"
          },
          {
            "q": "The fort is a square, 9 feet on each side. How many feet of tape go all the way around it?",
            "answer": "36",
            "hint": "Four sides of 9 feet: 9 × 4.",
            "skill": "Area and perimeter"
          },
          {
            "q": "The line's darts were 7/8 of a full crate at the start. The mission used 4/8 of the crate. How much is left? (write a fraction)",
            "answer": "3/8",
            "hint": "Same bottom. Subtract the tops.",
            "skill": "Fractions"
          },
          {
            "q": "A pack of darts costs $4.50. Your team buys 4 packs to hold the line. How much is that? (write it like 18.00)",
            "answer": "18",
            "hint": "4.50 × 4. Double it, then double it again.",
            "accept": [
              "$18",
              "18.00",
              "$18.00"
            ],
            "skill": "Money and decimals"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "How the paragraph is built",
            "points": [
              "Paragraphs come in shapes: a cause and its effects, two cases compared, steps in order, or a problem followed by what is done about it.",
              "Find the shape by deleting the paragraph in your head. What would you no longer know? That missing thing is its job.",
              "Naming the job is not retelling the paragraph. A choice that only repeats the content has named nothing."
            ],
            "example": "A brief about a fire drill spends one paragraph on the year the alarm was ignored. Its job is not to tell a story. It is to make the rule in the next paragraph feel earned."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea of the whole brief?",
              "choices": [
                "The mission runs for four minutes on the timer, and the other team comes at the line the whole time.",
                "Patience is worth having in everything a person does, on a field of foam darts or anywhere else.",
                "Defense is won by staying put, and the other team's best trick is the temptation to leave your own barricade.",
                "You win this mission by tagging as many attackers as you can before the four minutes run out."
              ],
              "answer": 2,
              "hint": "The objective, the way a line breaks, and the rule about chasing. Ask what all three come down to, and cross off the choice the first paragraph denies outright.",
              "skill": "Central idea and evidence",
              "evidence": "You do not have to tag anyone."
            },
            {
              "q": "Claim: the other team sets up a defender's mistake deliberately. Which sentence from the brief best supports that claim?",
              "choices": [
                "The most common way a line breaks is not the other team; it is one defender who sees an easy tag, chases it ten feet into the open, and leaves a hole.",
                "They will show you an easy tag on purpose.",
                "So the rule for the line is the hardest rule in the game for someone who is good at this: do not chase.",
                "They will come at you the whole time."
              ],
              "answer": 1,
              "hint": "One sentence tells you what the defender does wrong. The claim is about who arranged it. Find the sentence that names an intention.",
              "skill": "Finding details",
              "evidence": "They will show you an easy tag on purpose."
            },
            {
              "q": "What job does the second paragraph do in this brief?",
              "choices": [
                "It lists the equipment each of the three defenders needs before the timer starts, from a full magazine to a barricade wide enough to hide behind.",
                "It shows how the line holds and then, in the same breath, the single way it fails, so the rule in the last paragraph arrives already earned.",
                "It compares defending the fort with attacking one, and shows why holding a line for four minutes is easier work than crossing the yard to break it.",
                "It describes the fort, the fence standing behind it, and the line of three barricades set out in front, so the reader can picture the ground being defended."
              ],
              "answer": 1,
              "hint": "The paragraph starts with something working and ends with it broken. Ask what a paragraph is doing when it spends its last half on one particular way of failing.",
              "skill": "Author's purpose and structure",
              "evidence": "The most common way a line breaks is not the other team; it is one defender who sees an easy tag, chases it ten feet into the open, and leaves a hole."
            },
            {
              "q": "The brief says a defender who chases 'leaves a hole'. What does hole mean as it is used here?",
              "choices": [
                "A gap in the row of barricades where one of them has been knocked over",
                "A stretch of the line that nobody is covering anymore",
                "A dip in the ground behind the barricades that a player can lie down in to stay out of sight",
                "A magazine with no darts left inside it"
              ],
              "answer": 1,
              "hint": "Nothing has been dug. Read the sentence before it, about each player covering the gap to the next, and ask what goes missing when one of them walks away.",
              "skill": "Word meanings",
              "evidence": "The most common way a line breaks is not the other team; it is one defender who sees an easy tag, chases it ten feet into the open, and leaves a hole."
            },
            {
              "q": "Paragraphs 2 and 3 together explain why a defender says the word reloading out loud. Why do they?",
              "choices": [
                "It warns the other team that the line is about to open fire, so they keep their heads down behind cover instead of rushing the fort.",
                "It counts down the four minutes on the timer for the whole team at once, so that every defender knows how much of the mission is left.",
                "The line only works while every gap is covered, and the players on either side cannot cover a gap they do not know about.",
                "It tells the other team which of the three barricades is standing empty, so they know which gap in the line to sprint across next."
              ],
              "answer": 2,
              "hint": "Paragraph two says what the neighbors do when somebody reloads. Paragraph three tells you to announce it. Ask what the neighbors would need in order to act.",
              "skill": "Reading between the lines",
              "evidence": "When one player is reloading, the players on either side cover their gap."
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
              "Taking away: 350 − 128. Take 100, then 20, then 8. That leaves 222.",
              "Fractions with the same bottom: the bigger top is the bigger fraction. 4/5 is more than 2/5."
            ],
            "example": "Around a square 5 feet on each side: 5 + 5 + 5 + 5 = 20 feet."
          },
          "problems": [
            {
              "q": "The line carries 3 darts on each of 3 trips. How many darts is that?",
              "answer": "9",
              "hint": "3 × 3.",
              "skill": "Multiplying"
            },
            {
              "q": "Every defender takes 6 darts. The line has 18 darts. How many defenders get 6 darts each?",
              "answer": "3",
              "hint": "How many 6s fit into 18?",
              "skill": "Dividing"
            },
            {
              "q": "The line counted 179 darts in the morning and 280 in the evening. How many more in the evening?",
              "answer": "101",
              "hint": "280 − 179.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "Which is bigger, 6/8 or 7/8? (write a fraction)",
              "answer": "7/8",
              "hint": "Same bottom, so the bigger top wins.",
              "skill": "Fractions"
            },
            {
              "q": "A square frame is 2 feet on each side. How many feet is it all the way around?",
              "answer": "8",
              "hint": "Four sides of 2.",
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
              "A ratio tells you how many of one thing for each group of the other.",
              "Order of operations: parentheses, then multiply and divide, then add and subtract."
            ],
            "example": "(7 − 3) × (2 + 5): each set of parentheses first, then 4 × 7 = 28."
          },
          "problems": [
            {
              "q": "4 barricades took 6.6 feet altogether, and each took the same. How many feet did each one take?",
              "answer": "1.65",
              "hint": "6.6 ÷ 4. Divide as with whole numbers and keep the point in place.",
              "skill": "Decimals"
            },
            {
              "q": "Out of every 100 darts, 25 are set aside. Out of 160 darts, how many is that?",
              "answer": "40",
              "hint": "160 is 1.6 hundreds, so 1.6 × 25.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The line divides 48 minutes of work in the ratio 3 to 5. How many minutes is the larger share?",
              "answer": "30",
              "hint": "8 parts in all, so one part is 6 minutes.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The line works out (6 − 2) × (9 + 15). What is it?",
              "answer": "96",
              "hint": "Each set of parentheses first, then multiply the two answers.",
              "skill": "Order of operations"
            },
            {
              "q": "Solve for x: 219 = x − 38",
              "answer": "257",
              "hint": "Add 38 to both sides.",
              "skill": "Equations"
            }
          ]
        },
        "7": {
          "lesson": {
            "title": "Grade 7 numbers",
            "points": [
              "How many fit: total ÷ size of one. 10 ÷ 2.5 = 4.",
              "Percent change: find that percent of the starting number, then add it on or take it off.",
              "Below zero, going up adds and going down subtracts. Walk the number line one step at a time.",
              "A two-step equation: undo the adding first, then undo the multiplying."
            ],
            "example": "x ÷ 3 + 5 = 11, so x ÷ 3 = 6, so x = 18."
          },
          "problems": [
            {
              "q": "The line is 36 feet long, and each barricade covers 1.5 feet. One barricade is already in place. How many barricades are left to place?",
              "answer": "23",
              "hint": "36 ÷ 1.5 = 24 in all, then take the one already in place off.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The rule says a count of darts may change by no more than 20%. Starting from 80, what is the highest count the rule allows?",
              "answer": "96",
              "hint": "20% of 80 is 16. Add it on.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The team's score starts at 6 points and falls 4 points in each of 2 rounds. What is the score at the end?",
              "answer": "-2",
              "accept": [
                "−2"
              ],
              "hint": "4 × 2 comes off 6.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: x ÷ 8 − 24 = 12",
              "answer": "288",
              "hint": "Add 24 to both sides, then multiply by 8.",
              "skill": "Equations"
            },
            {
              "q": "A drawing uses 1 inch for every 25 feet. How many inches are needed for 400 feet?",
              "answer": "16",
              "hint": "400 ÷ 25.",
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
            "example": "Slope: through (0, 1) and (5, 21), the rise is 20 over a run of 5, so the slope is 4."
          },
          "problems": [
            {
              "q": "A line passes through (0, 5) and (7, 26). What is its slope?",
              "answer": "3",
              "hint": "Slope is the rise over the run: 21 ÷ 7.",
              "skill": "Linear relationships"
            },
            {
              "q": "The team has 8² darts and doubles that. How many darts is that?",
              "answer": "128",
              "hint": "8² is 64. Double it.",
              "skill": "Powers and roots"
            },
            {
              "q": "The team runs 6 feet east and then 8 feet north. In a straight line, how far is that from the start, in feet?",
              "answer": "10",
              "hint": "The two legs make a right angle: 6² + 8² = 100.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "For what value of x do 5x + 23 and 2x + 32 come to the same number?",
              "answer": "3",
              "hint": "Set them equal, take 2x off both sides, then take 23 off.",
              "skill": "Equations"
            },
            {
              "q": "The team writes 2 × 10^4, then counts ten times as many. Written out in full, what is the new number?",
              "answer": "200000",
              "hint": "Ten times adds one to the power: 2 × 10^5.",
              "skill": "Powers and roots"
            }
          ]
        }
      },
      "orders": {
        "lesson": {
          "title": "Do not chase",
          "points": [
            "Some orders build two numbers. Write both down and label them: step 2, step 3.",
            "The rule can tell you NOT to do something. That is still following the rule."
          ],
          "example": "Step 2 makes 15 and step 3 makes 40. If the rule says use step 2, type 15 and drop the 40."
        },
        "skill": "Following directions",
        "steps": [
          "Your line is 3 players behind 3 barricades, and the timer runs 4 minutes.",
          "Work out the patient plan: multiply the 3 defenders by the 4 minutes on the timer.",
          "Work out the chase plan: multiply the 10 feet of open ground in front of you by the 3 barricades.",
          "The rule for the line is do not chase. Use your number from step 2, not the one from step 3.",
          "Type the number you kept."
        ],
        "prompt": "Your answer:",
        "answer": "12",
        "hint": "You end up holding two numbers. Step 4 says which plan the line is running, so read it before you pick one."
      }
    },
    {
      "id": "dart-4",
      "title": "Flank",
      "recon": {
        "lesson": {
          "title": "Going around",
          "points": [
            "'Flank' is defined in the brief. Find the sentence.",
            "'Why go wide' questions: the brief tells you what a narrow flank runs into.",
            "Count the sentences on each idea for the main-idea question."
          ],
          "example": "A flank that hugs the middle is just a frontal attack that took longer."
        },
        "title": "Intel Brief: Flank",
        "passage": [
          "Mission four is attack, and attacking a line head-on is how you lose your whole team in thirty seconds. Three defenders behind three barricades can cover every gap in front of them. What they cannot cover is beside them. So the plan is to flank, which means to go around the side of the other team and come at them from a direction they are not facing. Two players hold their attention from the front. Two go wide.",
          "Wide is the important word. The scout's map from mission one shows a path along the far fence, behind the oak tree and the tire stacks, that comes out beside the end of their line. It is long. It takes a full minute at a crouch. Every new player wants to cut the corner and go straight for the end barricade, and every one of them gets tagged, because the end defender is looking exactly there. The path along the fence is slow because it is the one they cannot see.",
          "The two players in front have a job that looks easy and is not: keep firing, keep moving between cover, keep the line looking at you, and do not get tagged for one whole minute. If the front pair goes quiet, the defenders start looking around, and the flank walks into a line that has turned to face it. So the front pair counts to sixty in their heads and stays loud on the field. The flank arrives beside the line. The line has nowhere to face. That is the mission."
        ],
        "questions": [
          {
            "q": "How many players go wide on the flank?",
            "choices": [
              "One",
              "Three",
              "Four",
              "Two"
            ],
            "answer": 3,
            "hint": "The last two sentences of paragraph 1.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 1, what does 'flank' mean?",
            "choices": [
              "To attack head-on",
              "To go around the side of the other team and come at them from a direction they are not facing",
              "To keep firing from the front so that the line of defenders never stops looking straight ahead at you",
              "To take the shortest path to the end barricade so that you reach the side of the line before it can turn"
            ],
            "answer": 1,
            "hint": "The sentence with 'which means to go around'.",
            "skill": "Word meanings"
          },
          {
            "q": "About how long does the path along the fence take?",
            "choices": [
              "A full minute at a crouch",
              "Ten seconds",
              "Five minutes",
              "Around thirty seconds at a run"
            ],
            "answer": 0,
            "hint": "Paragraph 2, the sentence that starts 'It takes'.",
            "skill": "Finding details"
          },
          {
            "q": "Why does cutting the corner get new players tagged?",
            "choices": [
              "The corner is out in the open, where there is nothing solid to hide behind",
              "The end defender is looking exactly at the corner, while the long fence path is the one route they cannot see",
              "The corner path is longer than it looks, so the flank gets there after the front pair has already run out of darts",
              "The path along the fence takes a full minute at a crouch, so anybody who cuts the corner arrives before the front pair is ready"
            ],
            "answer": 1,
            "hint": "Paragraph 2, the last two sentences.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 3 mostly about?",
            "choices": [
              "Counting all the way up to sixty, and why the front pair does that in their own heads",
              "The front pair's job: keeping the line's attention so the flank can arrive unseen",
              "The oak tree and the tire stacks that stand along the far fence on the long wide path",
              "How to keep moving at a crouch along the far fence for a full minute without being seen"
            ],
            "answer": 1,
            "hint": "Paragraph 3 is entirely about the front pair and why they stay loud.",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "The long way around",
          "points": [
            "A path along 3 sides: 25 + 40 + 25 = 90.",
            "Two players doing the same thing: 7 each is 7 × 2 = 14.",
            "Two steps: 3 players with 10 each is 30, minus the 8 fired is 22.",
            "Same bottom: 2/5 + 2/5 = 4/5."
          ],
          "example": "Area is length × width: a mat 7 feet by 5 feet is 7 × 5 = 35 square feet."
        },
        "problems": [
          {
            "q": "The fence path runs 30 feet along one side, 20 feet along the back, and 30 feet along the far side. How long is the path in feet?",
            "answer": "80",
            "hint": "30 + 20 + 30.",
            "skill": "Adding and subtracting"
          },
          {
            "q": "The front pair fires 6 darts a minute each. How many darts do the two of them fire in a minute?",
            "answer": "12",
            "hint": "6 × 2.",
            "skill": "Multiplying"
          },
          {
            "q": "The two flankers carry 12 darts each and fire 9 in total when they arrive. How many darts do they have left between them?",
            "answer": "15",
            "hint": "12 × 2 = 24. Then 24 − 9.",
            "skill": "Multi-step problems"
          },
          {
            "q": "The flank covered 1/4 of the fence path in the first twenty seconds and 2/4 in the next thirty. How much of the path is done? (write a fraction)",
            "answer": "3/4",
            "hint": "Same bottom. Add the tops.",
            "skill": "Fractions"
          },
          {
            "q": "The flankers' corner of the arena is 12 feet long and 9 feet wide. What is its area in square feet?",
            "answer": "108",
            "hint": "Area is length × width: 12 × 9.",
            "skill": "Area and perimeter"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "The word as it is used here",
            "points": [
              "A word is doing one job in one sentence. Work out that job, not the entry it would get in a dictionary.",
              "Some phrases are painting a picture rather than stating a plain fact. Say what the picture shows in ordinary words.",
              "Put your pick back into the sentence. If the sentence now says something the brief never said, it is the wrong pick."
            ],
            "example": "'The cafeteria was a zoo at lunch.' No animals were there. Zoo here means loud, crowded and hard to control."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea that develops across the whole brief?",
              "choices": [
                "The path along the far fence takes a full minute at a crouch.",
                "Attacking is always more difficult than defending is.",
                "Three defenders behind three barricades can cover every direction at once, including the ground out to the side at either end of the line they hold.",
                "A flank only works if it goes wide enough to stay unseen and the front pair holds the line's attention for the whole time it takes."
              ],
              "answer": 3,
              "hint": "The two who go wide, the slow path, and the two who stay noisy at the front. Ask what all three are parts of, and cross off the choice the first paragraph denies.",
              "skill": "Central idea and evidence",
              "evidence": "Wide is the important word."
            },
            {
              "q": "Claim: the long way around is chosen for what the defenders cannot see, not for anything it saves. Which sentence from the brief best supports that claim?",
              "choices": [
                "The scout's map from mission one shows a path along the far fence, behind the oak tree and the tire stacks, that comes out beside the end of their line.",
                "The path along the fence is slow because it is the one they cannot see.",
                "Three defenders behind three barricades can cover every gap in front of them.",
                "It takes a full minute at a crouch."
              ],
              "answer": 1,
              "hint": "Saying where the path runs or how long it takes is not giving a reason for choosing it. Find the sentence that admits the cost and gives the reason in the same line.",
              "skill": "Finding details",
              "evidence": "The path along the fence is slow because it is the one they cannot see."
            },
            {
              "q": "Why does the brief say the front pair have a job that 'looks easy and is not'?",
              "choices": [
                "It corrects the reader's assumption first, and then lists four things the pair has to do at the same time.",
                "It explains why two players work better than three.",
                "It compares the front pair with the scout from mission one.",
                "It gives the order in which the flanking pair moves, along the far fence, behind the oak tree and past the tire stacks."
              ],
              "answer": 0,
              "hint": "Somebody is being argued with in that sentence. Ask who, and then look at what comes after the colon to see how the argument is settled.",
              "skill": "Author's purpose and structure",
              "evidence": "The two players in front have a job that looks easy and is not: keep firing, keep moving between cover, keep the line looking at you, and do not get tagged for one whole minute."
            },
            {
              "q": "The brief says every new player wants to 'cut the corner'. What does that phrase mean as it is used here?",
              "choices": [
                "Slip through a gap where the far fence turns the corner of the yard",
                "Take the short way instead of going all the way around",
                "Move around the outside of the tire stacks and the oak tree on the way to the end of the line",
                "Wait at the corner until the defender looks away"
              ],
              "answer": 1,
              "hint": "Compare it with the path described two sentences earlier, the one that is long and takes a minute. Cutting the corner has to be the opposite of that.",
              "skill": "Word meanings",
              "evidence": "Every new player wants to cut the corner and go straight for the end barricade, and every one of them gets tagged, because the end defender is looking exactly there."
            },
            {
              "q": "Paragraphs 1 and 3 together explain why the front pair has to stay noisy for exactly as long as the walk takes. Why do they?",
              "choices": [
                "The front pair has to use up the other team's darts first, so that the whole line is busy reloading at the moment the flanking players arrive.",
                "A line can cover what is in front of it but not what is beside it, so it has to be kept facing forward until the flank is level with it.",
                "The noise from the front pair is the signal that tells the flanking players when to stand up and run the last few feet to the end barricade of the line.",
                "The line will leave its barricades and chase the front pair right across the yard, so the fort is standing empty by the time the flank arrives."
              ],
              "answer": 1,
              "hint": "Paragraph one says what a line can and cannot cover. The last paragraph says what happens if the front pair goes quiet. Put the weakness next to the timing.",
              "skill": "Reading between the lines",
              "evidence": "If the front pair goes quiet, the defenders start looking around, and the flank walks into a line that has turned to face it."
            }
          ]
        }
      },
      "navByGrade": {
        "3": {
          "lesson": {
            "title": "Grade 3 numbers",
            "points": [
              "Multiplication facts: 6 × 4 means 6 groups of 4.",
              "Sharing equally is dividing.",
              "Adding three numbers: add two, then add the third.",
              "Fractions with the same bottom: add the tops."
            ],
            "example": "Taking away from a round number: 500 − 264. 500 − 200 = 300, then 300 − 64 = 236."
          },
          "problems": [
            {
              "q": "The flank counts 8 players with 5 darts in each. How many darts is that?",
              "answer": "40",
              "hint": "8 × 5.",
              "skill": "Multiplying"
            },
            {
              "q": "40 darts are shared equally among 8 players. How many darts does each player get?",
              "answer": "5",
              "hint": "How many 8s make 40?",
              "skill": "Dividing"
            },
            {
              "q": "The flank counted 273 darts, then found 142 more, then 80 more. How many darts in all?",
              "answer": "495",
              "hint": "273 + 142 first. Then add 80.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "The flank finished 6/8 of the day's work before the break and 1/8 after. What fraction is done? (write a fraction)",
              "answer": "7/8",
              "hint": "Same bottom. Add the tops.",
              "skill": "Fractions"
            },
            {
              "q": "There were 800 darts at the start. 633 have been used. How many are left?",
              "answer": "167",
              "hint": "800 − 633.",
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
              "A ratio tells you how many of one thing for each group of the other.",
              "Order of operations: parentheses, then multiply and divide, then add and subtract."
            ],
            "example": "4 × (9 − 2) + 6: parentheses first, 7. Then 4 × 7 = 28, then add 6 to get 34."
          },
          "problems": [
            {
              "q": "1/2 of a bucket of darts is split equally among 3 players. What fraction of the bucket does each player get? (write a fraction)",
              "answer": "1/6",
              "hint": "Sharing among 3 is the same as multiplying by 1/3: 1/2 × 1/3.",
              "skill": "Fractions"
            },
            {
              "q": "Of 40 darts, 20% are set aside. How many is that?",
              "answer": "8",
              "hint": "20% of 40: 20% is 20/100.",
              "skill": "Ratios and percent"
            },
            {
              "q": "Players and darts are kept in the ratio 2 to 5. If there are 10 players, how many darts?",
              "answer": "25",
              "hint": "10 ÷ 2 = 5 groups. Each group has 5 darts.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The flank works out 6 × (10 − 1) + 12. What is it?",
              "answer": "66",
              "hint": "Parentheses first, then multiply, then add.",
              "skill": "Order of operations"
            },
            {
              "q": "On a winter day it was −13 degrees at dawn. By noon it was 9 degrees. By how many degrees did it rise?",
              "answer": "22",
              "hint": "From −13 up to 0 is 13, then 9 more.",
              "skill": "Negative numbers"
            }
          ]
        },
        "7": {
          "lesson": {
            "title": "Grade 7 numbers",
            "points": [
              "A unit rate is the total divided by how many: 45 ÷ 6 = 7.5 for one.",
              "Percent change: find that percent of the starting number, then add it on or take it off.",
              "Multiplying or dividing with one minus sign gives a minus answer: 3 × (−5) = −15, and −15 ÷ 3 = −5.",
              "A two-step equation: undo the adding first, then undo the multiplying."
            ],
            "example": "3x + 7 = 31, so 3x = 24, so x = 8."
          },
          "problems": [
            {
              "q": "20 barricades covered 70 feet of the line altogether. How many feet does one barricade cover?",
              "answer": "3.5",
              "hint": "A rate is the total shared out: 70 ÷ 20.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The flank counted 120 darts on the first pass. On the second pass the number had fallen by 10%. How many darts is that?",
              "answer": "108",
              "hint": "10% of 120 is 12. Then take it off.",
              "skill": "Ratios and percent"
            },
            {
              "q": "Over 4 hours the thermometer fell 20 degrees in all, the same amount each hour. What was the change each hour? (Write a fall as a negative number.)",
              "answer": "-5",
              "accept": [
                "−5"
              ],
              "hint": "Share −20 into 4 equal parts: −20 ÷ 4. One minus sign, so the answer is negative.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: 6x + 4 = 58",
              "answer": "9",
              "hint": "Take 4 off both sides first, then divide by 6.",
              "skill": "Equations"
            },
            {
              "q": "A round dial is 20 inches across. Using 3.14 for pi, how many inches is it around the edge?",
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
            "example": "Start at 3 and add 4 each hour: after 6 hours, y = 4 × 6 + 3 = 27."
          },
          "problems": [
            {
              "q": "The flank starts with 5 darts and adds 7 more every hour. After 5 hours, how many darts are there?",
              "answer": "40",
              "hint": "This is the straight-line rule y = mx + b: 7 × 5 + 5.",
              "skill": "Linear relationships"
            },
            {
              "q": "A square pad has an area of 16 square feet. How long is one side, in feet?",
              "answer": "4",
              "hint": "A square's area is side × side. What number times itself makes 16?",
              "skill": "Powers and roots"
            },
            {
              "q": "The flank runs a rope from the top of a 9-foot pole to a point 12 feet away on the ground. How long is the rope, in feet?",
              "answer": "15",
              "hint": "Right triangle: a² + b² = c². 9² + 12² = 81 + 144 = 225. The rope is the square root of that.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "Solve for x: 9x + 13 = 3x + 61",
              "answer": "8",
              "hint": "Take 3x off both sides to get 6x + 13 = 61, then take 13 off both sides and divide.",
              "skill": "Equations"
            },
            {
              "q": "A round tank has a radius of 10 feet and is 2 feet deep. Using 3.14 for pi, what is its volume in cubic feet? (volume = pi × radius × radius × depth)",
              "answer": "628",
              "hint": "3.14 × 10 × 10 = 314, then × 2.",
              "skill": "Area and perimeter"
            }
          ]
        }
      },
      "orders": {
        "lesson": {
          "title": "Ignore the shortcut",
          "points": [
            "A step that offers a shortcut can be canceled by a rule later on. Read to the end.",
            "Count only the feet you actually walk."
          ],
          "example": "If the rule says take the fence path, the corner shortcut is ignored no matter how short it is."
        },
        "skill": "Following directions",
        "steps": [
          "Walk 30 feet along the near fence.",
          "Walk 20 feet along the back fence.",
          "The corner shortcut would save you the next 30 feet. Add only 10 feet for the shortcut.",
          "Game rules: the flank takes the full fence path. Ignore step 3 and walk the full 30 feet along the far fence instead.",
          "Type the total feet you walked."
        ],
        "prompt": "Feet walked:",
        "answer": "80",
        "hint": "Step 4 cancels the shortcut in step 3. Add up the three fence walks it leaves you with."
      }
    },
    {
      "id": "dart-5",
      "title": "Capture the Flag",
      "recon": {
        "lesson": {
          "title": "Everything at once",
          "points": [
            "'Trap' is defined in the brief. Find the sentence.",
            "The last mission uses all four earlier ones. Match each part of the plan back: scout, supply, line, flank.",
            "The final why is about the team: why the flag carrier never fires."
          ],
          "example": "A scout who mapped the arena, a line that holds, and a flank that goes wide are the same three things you did all week."
        },
        "title": "Intel Brief: Capture the Flag",
        "passage": [
          "The last mission is the one every round has been practice for. Each team has a flag on its fort. To win, one player has to take the other team's flag and carry it all the way back to their own fort without being tagged. If the carrier is tagged, the flag drops where they stood and either team can pick it up. Ten minutes on the timer. Both teams attacking and defending at once, which is why it is the hardest thing on the field and the most fun.",
          "The plan uses everything. The scout's map picks the route. The supply run happens first, so nobody goes in on an empty magazine. Two players hold the line at your fort, patient, not chasing. Two go on the flank, wide, along the fence, and one of them is the carrier. And there is a new piece: a trap, which is a surprise tag from a hiding place on a route the other team is likely to use. Their carrier will come back along the shortest path with your flag. You put one of your two defenders behind the tire stack on that path, quiet, waiting, with a full magazine.",
          "The carrier has one rule that overrides the rest: the carrier never fires. Both hands on the flag, head down, follow the fence, and let the rest of the team do the tagging. A carrier who stops to shoot is a carrier standing still in the open with a bright flag, and that is how flags get dropped. Get the flag. Get home. That is the whole game, and it is the whole week: read the ground, count your darts, hold when it is hard, go the long way, and when it is your turn to carry, carry."
        ],
        "questions": [
          {
            "q": "What happens to the flag if the carrier is tagged?",
            "choices": [
              "The round ends and both teams start again",
              "It drops where they stood and either team can pick it up",
              "It goes back to the fort it was taken from",
              "The carrier keeps it and runs on home"
            ],
            "answer": 1,
            "hint": "Paragraph 1, the sentence that starts 'If the carrier'.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 2, what is a 'trap'?",
            "choices": [
              "A surprise tag from a hiding place on a route the other team is likely to use",
              "A quiet route home that the other team is not watching",
              "A run out to the crate for a full magazine before going in",
              "The shortest path home that the other team's carrier takes"
            ],
            "answer": 0,
            "hint": "The sentence with 'which is a surprise tag'.",
            "skill": "Word meanings"
          },
          {
            "q": "Where does the brief put the trap?",
            "choices": [
              "Up on top of your own fort, beside your own flag",
              "Behind the tire stack on the other carrier's shortest path home",
              "At the crate in the middle of the arena, where both teams come for darts",
              "By the oak tree on the wide path along the far fence"
            ],
            "answer": 1,
            "hint": "The last sentence of paragraph 2.",
            "skill": "Finding details"
          },
          {
            "q": "Why does the carrier never fire?",
            "choices": [
              "Carriers are not allowed to carry a blaster at all, so there is nothing in their hands to fire on the way back home",
              "Firing would empty the magazine that the carrier is going to need for the last stretch of the run back to the fort",
              "The flag counts as dropped the moment a carrier lets go of it with one hand, so firing hands it to the other team",
              "A carrier who stops to shoot is standing still in the open with a bright flag, which is how flags get dropped"
            ],
            "answer": 3,
            "hint": "Paragraph 3, the sentence that starts 'A carrier who stops'.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 2 mostly about?",
            "choices": [
              "How long the timer runs",
              "The tire stack where one player waits with a full magazine",
              "How a carrier takes the flag back without being tagged",
              "The plan: how every mission's tactic fits together, plus the trap"
            ],
            "answer": 3,
            "hint": "Paragraph 2 lists scout, supply, line, flank and trap. Which answer covers all of it?",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Final count",
          "points": [
            "Minutes to seconds: 7 minutes is 7 × 60 = 420.",
            "Leftovers: 50 darts among 6 players is 8 each with 2 left over, because 8 × 6 = 48.",
            "Taking from 1,000: 1,000 − 268 is 999 − 268 + 1 = 732.",
            "Same bottom: 3/8 + 5/8 = 8/8, one whole."
          ],
          "example": "Packing: 312 cards in packs of 4 is 312 ÷ 4 = 78 packs."
        },
        "problems": [
          {
            "q": "The final mission runs 10 minutes. How many seconds is that?",
            "answer": "600",
            "hint": "10 × 60.",
            "skill": "Multiplying"
          },
          {
            "q": "The arena store shares 100 darts equally among the 8 players, as many as possible each. How many darts are left over?",
            "answer": "4",
            "hint": "8 × 12 = 96. How many are left after 96?",
            "skill": "Dividing"
          },
          {
            "q": "The arena bought 1,000 darts this season and 375 are lost in the grass. How many are left?",
            "answer": "625",
            "hint": "1,000 − 375. Think of 1,000 as 999 + 1.",
            "skill": "Adding and subtracting"
          },
          {
            "q": "The carrier ran 4/10 of the way home before the trap was sprung and 6/10 after. What fraction of the way home did the carrier run? (write a fraction)",
            "answer": "10/10",
            "hint": "Same bottom. Add the tops. 10/10 or 1 both count.",
            "accept": [
              "1"
            ],
            "skill": "Fractions"
          },
          {
            "q": "The arena store has 625 darts left. They are packed into boxes of 5. How many boxes is that?",
            "answer": "125",
            "hint": "625 ÷ 5.",
            "skill": "Dividing"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "Two paragraphs held together",
            "points": [
              "The last question is built so that no single paragraph answers it. Plan on using two.",
              "Say a fact from one paragraph, then a fact from another, then say 'so'. What comes after 'so' is the answer.",
              "If a choice needs something the brief never mentions, it is out, however sensible it sounds by itself."
            ],
            "example": "Paragraph one: the bus leaves at 7:40. Paragraph two: the walk to the stop takes ten minutes. So you have to be out the door by 7:30. Neither paragraph says that alone."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea of the whole brief?",
              "choices": [
                "A trap is a surprise tag from a hiding place on a route the other team is likely to use on the way home.",
                "The last mission puts every earlier lesson to work at once, and the one carrying the flag has a single job: get home, not fight.",
                "Winning is the only thing that makes a game worth playing, however well a team has learned the earlier missions.",
                "The carrier should fire at anybody who comes close to the flag, since nobody else on the team is near enough to help."
              ],
              "answer": 1,
              "hint": "The rules, the plan built out of four earlier missions, and the carrier's one rule. Find the choice that holds all three, and cross off the one the last paragraph denies.",
              "skill": "Central idea and evidence",
              "evidence": "The plan uses everything."
            },
            {
              "q": "Claim: a carrier who is tagged does not lose the flag for good. Which sentence from the brief best supports that claim?",
              "choices": [
                "If the carrier is tagged, the flag drops where they stood and either team can pick it up.",
                "Each team has a flag on its fort.",
                "Their carrier will come back along the shortest path with your flag.",
                "The carrier has one rule that overrides the rest: the carrier never fires."
              ],
              "answer": 0,
              "hint": "Saying what winning takes is not saying what happens after a mistake. Find the sentence that says where the flag ends up and who may touch it next.",
              "skill": "Finding details",
              "evidence": "If the carrier is tagged, the flag drops where they stood and either team can pick it up."
            },
            {
              "q": "Why does the second paragraph run back through the scout, the supply run, the line and the flank before it introduces the trap?",
              "choices": [
                "It warns the reader that the earlier missions will not help in the last one.",
                "It shows that only one piece is new, and that the rest of the plan was already built over the earlier missions.",
                "It explains why ten minutes on the timer is long enough for a game in which both teams are attacking and defending at once.",
                "It compares the two teams' forts with each other."
              ],
              "answer": 1,
              "hint": "Count how many sentences are about things you already know and how many are about something new. The balance tells you what the paragraph is for.",
              "skill": "Author's purpose and structure",
              "evidence": "The plan uses everything."
            },
            {
              "q": "The brief says the carrier has one rule that 'overrides the rest'. What does overrides mean as it is used here?",
              "choices": [
                "Is said out loud more often by the team than any of the other rules on the list",
                "Was added to the list of rules later than all the others, once the rest had been written down",
                "Can be set aside by the carrier at any point where the run home starts to go wrong",
                "Comes first whenever it and another rule pull in different directions"
              ],
              "answer": 3,
              "hint": "The word has ride in it, which is the trap. Read what the rule actually is and ask what has to happen to every other instruction while the flag is in your hands.",
              "skill": "Word meanings",
              "evidence": "The carrier has one rule that overrides the rest: the carrier never fires."
            },
            {
              "q": "Paragraphs 1 and 3 together explain why a carrier who stops to shoot is likely to lose the flag. Why is that?",
              "choices": [
                "A carrier who fires runs out of darts before reaching the fort.",
                "The flag cannot be held in one hand and fired past at the same time.",
                "Firing gives the other team time to reach your own fort instead.",
                "A tagged carrier drops the flag where they stand, and standing still in the open is the surest way to be tagged."
              ],
              "answer": 3,
              "hint": "Paragraph one tells you what happens to the flag the moment its carrier is tagged. The last paragraph tells you what stopping looks like from across the field. Join those two.",
              "skill": "Reading between the lines",
              "evidence": "A carrier who stops to shoot is a carrier standing still in the open with a bright flag, and that is how flags get dropped."
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
              "Taking away with regrouping: 352 − 168. Borrow when the top digit is smaller. 184.",
              "Same-bottom fractions: the whole is 8/8, so 8/8 − 3/8 = 5/8."
            ],
            "example": "A mat 4 squares on each side is 4 rows of 4, or 16 squares."
          },
          "problems": [
            {
              "q": "The team counted 3 darts yesterday and three times as many today. How many darts today?",
              "answer": "9",
              "hint": "Three times 3: 3 + 3 + 3.",
              "skill": "Multiplying"
            },
            {
              "q": "The team gives out 15 darts, 3 to each player. How many players get darts?",
              "answer": "5",
              "hint": "How many 3s make 15?",
              "skill": "Dividing"
            },
            {
              "q": "The team starts with 244 darts and uses 147. How many are left?",
              "answer": "97",
              "hint": "244 − 147.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "2/6 of the day's work was done yesterday. What fraction is still to do? (write a fraction)",
              "answer": "4/6",
              "hint": "The whole job is 6/6. Take 2/6 off it.",
              "skill": "Fractions"
            },
            {
              "q": "A square dart mat is 6 squares on each side. How many squares is that?",
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
              "Adding decimals: line up the points, and write 2.5 as 2.50 if it helps. 1.25 + 2.5 + 0.75 = 4.5.",
              "Percent of a number: turn the percent into a fraction of 100.",
              "A ratio tells you how many of one thing for each group of the other.",
              "Order of operations: parentheses, then multiply and divide, then add and subtract."
            ],
            "example": "4 + 2 × 7: multiply first, 2 × 7 = 14, then 4 + 14 = 18."
          },
          "problems": [
            {
              "q": "The scout logs 3.15 feet for the first barricade, 2.6 for the second and 1.8 for the third. How many feet is that in total?",
              "answer": "7.55",
              "hint": "Line the points up, writing a missing place as 0, then add all three.",
              "skill": "Decimals"
            },
            {
              "q": "45 of the 60 darts are set aside. What percent is that? (write just the number)",
              "answer": "75",
              "accept": [
                "75%"
              ],
              "hint": "45 out of 60, then out of 100.",
              "skill": "Ratios and percent"
            },
            {
              "q": "For every 3 players there are 5 darts. There are 25 darts. How many players?",
              "answer": "15",
              "hint": "25 ÷ 5 = 5 groups. Each group has 3 players.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The team works out 3 + 5 × 6. What is it?",
              "answer": "33",
              "hint": "Multiply before you add.",
              "skill": "Order of operations"
            },
            {
              "q": "Solve for x: 600 − x = 312",
              "answer": "288",
              "hint": "x is what is left when 312 is taken off 600.",
              "skill": "Equations"
            }
          ]
        },
        "7": {
          "lesson": {
            "title": "Grade 7 numbers",
            "points": [
              "Rate times how many: if one covers 2.5 feet, 6 cover 6 × 2.5 = 15 feet.",
              "Percent change: the change ÷ the starting number, times 100. From 50 to 60 is 10 ÷ 50, which is 20%.",
              "Below zero, going up adds and going down subtracts. Walk the number line one step at a time.",
              "A two-step equation: undo the adding first, then undo the multiplying."
            ],
            "example": "5x + 6 = 41, so 5x = 35, so x = 7."
          },
          "problems": [
            {
              "q": "One barricade covers 1.25 feet of the line. How many feet do 8 barricades cover?",
              "answer": "10",
              "hint": "8 × 1.25.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The team counted 160 darts on the first pass and 200 on the second. By what percent did the count change? (write just the number)",
              "answer": "25",
              "accept": [
                "25%"
              ],
              "hint": "The change is 40. 40 out of 160, then out of 100.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The team's score is −13 points. How many points must it gain to get back to zero?",
              "answer": "13",
              "hint": "From −13 up to 0.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: 38 − 7x = 10",
              "answer": "4",
              "hint": "Move 7x to the right and 10 to the left: 7x = 28.",
              "skill": "Equations"
            },
            {
              "q": "On the plan, 1 inch stands for 4 feet. The fence is really 12 feet long. How many inches is it on the plan?",
              "answer": "3",
              "hint": "12 ÷ 4.",
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
            "example": "Start with 50 and use 4 each hour: after 6 hours, 50 − 4 × 6 = 26 are left."
          },
          "problems": [
            {
              "q": "The team starts with 47 darts and uses 5 every hour. How many are left after 7 hours?",
              "answer": "12",
              "hint": "5 × 7 = 35 used, taken off 47.",
              "skill": "Linear relationships"
            },
            {
              "q": "A cube is 9 small cubes along every edge. How many small cubes make it up?",
              "answer": "729",
              "hint": "9³ means 9 × 9 × 9.",
              "skill": "Powers and roots"
            },
            {
              "q": "A 17-foot cable runs from the top of a post to a point 15 feet away on the ground. How tall is the post, in feet?",
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
              "q": "The league has fired 60,000 darts this season. Written as 6 × 10 to a power, what is the power?",
              "answer": "4",
              "hint": "Count the zeros after 6.",
              "skill": "Powers and roots"
            }
          ]
        }
      },
      "orders": {
        "lesson": {
          "title": "The carrier's rule",
          "points": [
            "A step can say 'redo step 3 a different way'. Go back to the number you had before step 3 and do the new step there.",
            "A rule that overrides means one step wins over all the others. Find it before you add anything."
          ],
          "example": "10 plus 3 is 13. If the next step says go back to 10 and multiply by 3 instead, the answer is 30, not 13."
        },
        "skill": "Following directions",
        "steps": [
          "You are the carrier. The timer starts at 10 minutes. Write down 10.",
          "Add the 2 players holding the line at your fort.",
          "Add the 2 players going wide on the flank.",
          "Redo step 3 a different way: go back to your total from step 2 and multiply it by those 2 flankers instead of adding them.",
          "Type the number you end on."
        ],
        "prompt": "Your answer:",
        "answer": "24",
        "hint": "Step 4 sends you back to the total you were holding at the end of step 2. The two flankers multiply there; they do not add."
      }
    }
  ]
};
if (window.BASECAMP_MISSIONS && window.BASECAMP_MISSIONS.register) window.BASECAMP_MISSIONS.register(C);
else (window.BASECAMP_CAMPAIGNS_PENDING = window.BASECAMP_CAMPAIGNS_PENDING || []).push(C);
})();
