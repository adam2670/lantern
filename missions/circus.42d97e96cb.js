// ODYSSEY — campaign "circus". GENERATED, do not edit.
// Source of truth: content/missions-full.js. Rebuild with:  python3 tools/split-missions.py
// RULE: nothing in this file is about the person using it. Content only.
(function () {
var C = {
  "id": "circus",
  "kind": "shift",
  "readingLevel": {
    "fk": 6.4,
    "cl": 6.2
  },
  "grade": "5",
  "kindLabel": "Show",
  "form": "showbot",
  "title": "The Glitch Circus",
  "subtitle": "A digital big top that is not rendering correctly",
  "pitch": "Five shows in a circus made of code. Riddles, logic, and a ringmaster who keeps losing pixels. Fix the show from the inside.",
  "scene": "assets/scene-circus.jpg",
  "progress": {
    "unit": "acts",
    "total": 5
  },
  "dayNoun": "Show",
  "stageNoun": "Act",
  "finalNoun": "Grand finale",
  "stages": [
    "Opening act",
    "Juggler",
    "Tightrope",
    "Hall of mirrors",
    "Finale"
  ],
  "reconNoun": "Program",
  "legs": {
    "recon": "Program",
    "nav": "Ticket booth",
    "orders": "Cue sheet",
    "debrief": "Curtain call"
  },
  "fact": "Everything in this circus runs on rules. When the rules glitch, so does the show.",
  "finale": {
    "prompt": "Grand finale. The show runs clean. Pick the spotlight.",
    "options": [
      {
        "label": "Cyan",
        "color": "#4FD1FF"
      },
      {
        "label": "Magenta",
        "color": "#FF4FD1"
      },
      {
        "label": "Amber",
        "color": "#FFB454"
      },
      {
        "label": "Green",
        "color": "#4FD18B"
      }
    ],
    "done": "Lights up. Take a bow. You fixed the show."
  },
  "patrols": [
    {
      "id": "circus-1",
      "title": "Opening Act",
      "recon": {
        "lesson": {
          "title": "Reading a program",
          "points": [
            "Read the five questions first. Two details, one word, one why, one 'mostly about'.",
            "Code words are often explained right where they appear, after 'which means' or 'which is'. Find that sentence.",
            "'Which rule broke' questions: match what you see to what the rule says. Whatever is different points to the broken part."
          ],
          "example": "A clock shows all the right numbers but runs an hour late every day. The rule for numbers is fine; the rule for timing is broken."
        },
        "title": "Program: Opening Act",
        "passage": [
          "Welcome to the Glitch Circus, says the program, and then the word Circus flickers and briefly reads Circsu. That is the first thing you should know about this place: it is made of code, and the code is tired. The ringmaster is Pippa Voltz, a tall figure in a coat of light who has run the show for what she calls a very long time, and tonight she needs a helper who can read. That is you. Every act in this circus runs on a rule, and lately the rules have been breaking.",
          "Here is how the circus works. Nothing here is painted or built. Everything is drawn fresh, dozens of times a second, by rules that say what goes where. The program calls this rendering, which means the way the circus draws itself from its rules, over and over, so fast that it looks solid. When a rule is right, you see a tent. When a rule is wrong, you see the seams: a stripe in the wrong place, an edge that tears into little squares, a curtain with a rectangle missing where the code behind it shows through.",
          "Tonight the tent is wrong. The big top's rule says: red stripe, then white stripe, then red, then white, all the way around. What you can see from the ring is white, then red, then white. Same colors, same count, wrong order. Pippa says it has been like this for a week and the audience thinks it is on purpose. It is not. Somewhere in the rule that draws the tent, two words have swapped places, and until they are swapped back the circus will keep drawing it wrong, faithfully, dozens of times a second."
        ],
        "questions": [
          {
            "q": "Who is the ringmaster of the Glitch Circus?",
            "choices": [
              "Pippa Voltz",
              "Bumble",
              "Lumen",
              "Marlo"
            ],
            "answer": 0,
            "hint": "Paragraph 1, the sentence with 'ringmaster'.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 2, what does 'rendering' mean?",
            "choices": [
              "Painting the stripes of the big top on by hand before the show opens",
              "The way the circus draws itself from its rules, over and over",
              "Selling tickets before each act begins",
              "Turning off the lights when a rule breaks"
            ],
            "answer": 1,
            "hint": "The sentence with 'which means'.",
            "skill": "Word meanings"
          },
          {
            "q": "What does the tent's rule say the stripe order should be?",
            "choices": [
              "White, red, white, red, white",
              "Red, red, white",
              "Blue and white",
              "Red, white, red, white"
            ],
            "answer": 3,
            "hint": "Paragraph 3, the sentence that starts 'The big top's rule says'.",
            "skill": "Finding details"
          },
          {
            "q": "Based on what you see and what the rule says, what kind of mistake is in the tent's rule?",
            "choices": [
              "The right colors in the wrong order, because two words in the rule swapped places",
              "The wrong colors",
              "One stripe too many, so the pattern does not close up all the way around",
              "The rule is drawing the tent fewer times a second than it should"
            ],
            "answer": 0,
            "hint": "Paragraph 3: same colors, same count. What is different?",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 2 mostly about?",
            "choices": [
              "How the circus draws itself from rules, and what it looks like when a rule is wrong",
              "How tired the code is",
              "Pippa Voltz, her coat of light, and how long she has run the show",
              "The three things that have gone wrong in the tent this week and what Pippa plans to do about each"
            ],
            "answer": 0,
            "hint": "Paragraph 2 explains rendering and then describes the seams.",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Seats and stripes",
          "points": [
            "Seats in rows: rows times seats per row. 14 rows of 13 is 14 × 13.",
            "Half of something: divide by 2. Half of 38 flags is 38 ÷ 2 = 19.",
            "Tickets at $7, three of them: 7 × 3 = $21.",
            "Hundredths as decimals: 8/100 is 0.08 and 40/100 is 0.40, or 0.4."
          ],
          "example": "14 × 13 = 14 × 10 + 14 × 3 = 140 + 42 = 182 seats."
        },
        "problems": [
          {
            "q": "The big top has 12 rows of seats with 15 seats in each row. How many seats are there?",
            "answer": "180",
            "hint": "12 × 10 plus 12 × 5.",
            "skill": "Multiplying"
          },
          {
            "q": "The tent has 24 stripes, and half of them are red. How many red stripes?",
            "answer": "12",
            "hint": "24 ÷ 2.",
            "skill": "Dividing"
          },
          {
            "q": "Tickets cost $6 each. A family buys 4. How much do they pay?",
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
            "q": "The big top has 100 spotlights and 65 of them are glitching. Write 65/100 as a decimal.",
            "answer": "0.65",
            "hint": "65 hundredths: two places after the point.",
            "skill": "Decimals"
          },
          {
            "q": "The stage in front of the seats is 12 meters long and 5 meters wide. What is its area in square meters?",
            "answer": "60",
            "hint": "Area is length × width: 12 × 5.",
            "skill": "Area and perimeter"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "Say the whole thing in one line",
            "points": [
              "The central idea covers every paragraph. Give each one a four-word label, then find the choice that serves all three labels at once.",
              "The wrong answers here are usually true. They are one paragraph's worth, or a big statement the program never actually makes.",
              "Four other moves follow: prove a claim with one line, say what a paragraph is for, work a phrase out from its sentence, and hold two paragraphs together."
            ],
            "example": "Three paragraphs about a vending machine: what it holds, how the coin slot reads a coin, why it keeps refusing one particular coin. 'It holds forty items' covers one paragraph. 'Machines are frustrating' covers none of it. 'A machine that reads coins by weight will always refuse the light one' covers all three."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea of the whole program page?",
              "choices": [
                "The circus is drawn from rules, so a wrong rule gets drawn perfectly, over and over, until somebody reads it and puts it right.",
                "The stripes on the big top are showing white before red.",
                "Computers are far better than people at repeating the same job.",
                "The circus is painted and built by hand, so a fault has to be repaired with a brush."
              ],
              "answer": 0,
              "hint": "Paragraph one says the code is tired, paragraph two says how the drawing works, paragraph three shows one broken rule. Find the choice that needs all three, and cross off the one the page denies.",
              "skill": "Central idea and evidence",
              "evidence": "Somewhere in the rule that draws the tent, two words have swapped places, and until they are swapped back the circus will keep drawing it wrong, faithfully, dozens of times a second."
            },
            {
              "q": "Claim: the fault in the tent is in the order of the rule, not in what the rule contains. Which sentence from the program best supports that claim?",
              "choices": [
                "The program calls this rendering, which means the way the circus draws itself from its rules, over and over, so fast that it looks solid.",
                "Same colors, same count, wrong order.",
                "Tonight the tent is wrong.",
                "Nothing here is painted or built."
              ],
              "answer": 1,
              "hint": "Saying the tent is wrong does not say what kind of wrong. The claim has two halves, what is unchanged and what is not. Find the sentence carrying both.",
              "skill": "Finding details",
              "evidence": "Same colors, same count, wrong order."
            },
            {
              "q": "Why does the program explain rendering in the second paragraph before it describes the tent in the third?",
              "choices": [
                "To list the acts that will appear later in the show.",
                "To explain who the ringmaster is, how long she has been running the show, and why she needs a helper who can read tonight.",
                "To compare this circus with an ordinary one on a field.",
                "So that a stripe in the wrong place reads as a wrong rule rather than as bad paint."
              ],
              "answer": 3,
              "hint": "Ask what the third paragraph needs you to believe before it starts. Take the second paragraph away in your head and see what the broken tent would look like then.",
              "skill": "Author's purpose and structure",
              "evidence": "Everything is drawn fresh, dozens of times a second, by rules that say what goes where."
            },
            {
              "q": "The program says 'it is made of code, and the code is tired'. What is that phrase telling you?",
              "choices": [
                "The code has been running a very long time and has started making mistakes",
                "The code runs more slowly toward the end of the night",
                "The code has to be switched off so that it can rest",
                "The code was written by somebody who was tired at the time"
              ],
              "answer": 0,
              "hint": "Code does not get sleepy. Ask what a tired person starts doing that a fresh one does not, then look at what the rest of the page says the circus has started doing.",
              "skill": "Word meanings",
              "evidence": "That is the first thing you should know about this place: it is made of code, and the code is tired."
            },
            {
              "q": "Paragraphs 2 and 3 together explain why the tent will not put itself right overnight. Why will it not?",
              "choices": [
                "The circus redraws itself from the rule dozens of times a second, so a wrong rule is repeated exactly rather than worn away.",
                "The tent is painted rather than drawn, and a coat of paint has to dry before anyone can go over it and put the stripes back in order.",
                "Pippa has decided to leave it wrong because the audience likes it.",
                "The rule will correct itself once the code has had time to rest."
              ],
              "answer": 0,
              "hint": "Paragraph two tells you how often the circus is drawn. Paragraph three tells you what the rule now says. Put the frequency together with the fault.",
              "skill": "Reading between the lines",
              "evidence": "until they are swapped back the circus will keep drawing it wrong, faithfully, dozens of times a second"
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
              "Taking away: line up hundreds, tens and ones. 476 − 235 = 241.",
              "Fractions with the same bottom: the bigger top is the bigger fraction. 3/4 is more than 1/4."
            ],
            "example": "4 groups of 7 is 7 + 7 + 7 + 7 = 28, so 4 × 7 = 28."
          },
          "problems": [
            {
              "q": "Pippa carries 3 seats on each of 2 trips. How many seats is that?",
              "answer": "6",
              "hint": "2 × 3.",
              "skill": "Multiplying"
            },
            {
              "q": "Every row takes 5 seats. Pippa has 15 seats. How many rows can be filled?",
              "answer": "3",
              "hint": "How many 5s fit into 15?",
              "skill": "Dividing"
            },
            {
              "q": "Pippa counted 159 stripes in the morning and 288 in the evening. How many more in the evening?",
              "answer": "129",
              "hint": "288 − 159.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "Which is bigger, 2/6 or 5/6? (write a fraction)",
              "answer": "5/6",
              "hint": "Same bottom, so the bigger top wins.",
              "skill": "Fractions"
            },
            {
              "q": "A square frame is 8 meters on each side. How many meters is it all the way around?",
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
              "Multiplying a decimal by a whole number: multiply as if there were no point, then put the point back. 6 × 1.15: 6 × 115 = 690, so 6.90, which is 6.9.",
              "Percent of a number: turn the percent into a fraction of 100.",
              "A ratio tells you how many of one thing for each group of the other.",
              "Order of operations: parentheses, then multiply and divide, then add and subtract."
            ],
            "example": "(6 + 2) × (8 − 3): parentheses first, so 8 × 5 = 40."
          },
          "problems": [
            {
              "q": "Each cue takes 3.25 seconds. How many seconds for 9 cues?",
              "answer": "29.25",
              "hint": "Split it: 9 × 3 plus 9 × 0.25.",
              "skill": "Decimals"
            },
            {
              "q": "Out of every 100 stripes, 50 are set aside. Out of 60 stripes, how many is that?",
              "answer": "30",
              "hint": "60 is 0.6 hundreds, so 0.6 × 50.",
              "skill": "Ratios and percent"
            },
            {
              "q": "Pippa divides 16 minutes of work in the ratio 1 to 3. How many minutes is the larger share?",
              "answer": "12",
              "hint": "4 parts in all, so one part is 4 minutes.",
              "skill": "Ratios and percent"
            },
            {
              "q": "Pippa works out (7 − 2) × (9 + 11). What is it?",
              "answer": "100",
              "hint": "Each set of parentheses first, then multiply the two answers.",
              "skill": "Order of operations"
            },
            {
              "q": "Solve for x: 355 = x − 19",
              "answer": "374",
              "hint": "Add 19 to both sides.",
              "skill": "Equations"
            }
          ]
        },
        "7": {
          "lesson": {
            "title": "Grade 7 numbers",
            "points": [
              "A unit rate is the total divided by how many: 9 seconds for 6 cues is 9 ÷ 6 = 1.5 each.",
              "Percent change: find that percent of the starting number, then add it on or take it off.",
              "Below zero, going up adds and going down subtracts. Walk the number line one step at a time.",
              "A two-step equation: undo the adding first, then undo the multiplying."
            ],
            "example": "x ÷ 3 − 4 = 6, so x ÷ 3 = 10, so x = 30."
          },
          "problems": [
            {
              "q": "The job needs 20 seconds in all, at 2.5 seconds for each cue. One cue is already done. How many cues are left?",
              "answer": "7",
              "hint": "20 ÷ 2.5 = 8 in all, then take the finished one off.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The rule says a count of stripes may change by no more than 25%. Starting from 60, what is the highest count the rule allows?",
              "answer": "75",
              "hint": "25% of 60 is 15. Add it on.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The box office has 24 seats left. It sells 15 seats a day for 5 days, overselling the show. What does the seat count read at the end?",
              "answer": "-51",
              "accept": [
                "−51"
              ],
              "hint": "15 × 5 comes off 24.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: x ÷ 2 − 29 = 7",
              "answer": "72",
              "hint": "Add 29 to both sides, then multiply by 2.",
              "skill": "Equations"
            },
            {
              "q": "A drawing uses 1 inch for every 5 feet. How many inches are needed for 100 feet?",
              "answer": "20",
              "hint": "100 ÷ 5.",
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
            "example": "A line through (0, 3) and (2, 13) rises 10 over a run of 2, so its slope is 5."
          },
          "problems": [
            {
              "q": "A line passes through (0, 24) and (4, 52). What is its slope?",
              "answer": "7",
              "hint": "Slope is the rise over the run: 28 ÷ 4.",
              "skill": "Linear relationships"
            },
            {
              "q": "The tent has two panels, each with 6² stripes. How many stripes is that?",
              "answer": "72",
              "hint": "6² is 36. Double it.",
              "skill": "Powers and roots"
            },
            {
              "q": "Pippa goes 9 feet east and then 12 feet north. In a straight line, how far is that from the start, in feet?",
              "answer": "15",
              "hint": "The two legs make a right angle: 9² + 12² = 225.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "For what value of x do 9x + 4 and 5x + 20 come to the same number?",
              "answer": "4",
              "hint": "Set them equal, take 5x off both sides, then take 4 off.",
              "skill": "Equations"
            },
            {
              "q": "Pippa writes down 8 × 10^4. Then she finds the number ten times as big. Written out in full, what is the new number?",
              "answer": "800000",
              "hint": "Ten times adds one to the power: 8 × 10^5.",
              "skill": "Powers and roots"
            }
          ]
        }
      },
      "orders": {
        "lesson": {
          "title": "A cue sheet",
          "points": [
            "A cue is an instruction that fires at a moment. Cues run in order, and some only fire if the one before them did.",
            "Read the whole sheet before firing cue 1."
          ],
          "example": "If cue 3 says 'only if cue 2 fired', and cue 2 was skipped, cue 3 is skipped too."
        },
        "skill": "Following directions",
        "steps": [
          "Cue 1: the lights come up. Count 1 cue fired.",
          "Cue 2: swap the words RED and WHITE in the tent's rule. Count 1 more cue fired.",
          "Cue 3: redraw the tent 10 times, once for each week the stripes were wrong. Count 10 more.",
          "Cancel step 3. Pippa says the tent has been wrong for one week, not ten, so the tent is redrawn once. Count 1 instead of 10.",
          "Add 10 for the applause.",
          "Type the number for the cue sheet."
        ],
        "prompt": "Your answer:",
        "answer": "13",
        "hint": "Step 4 replaces the big count in step 3 with a much smaller one. Add the applause only after the cues are counted."
      }
    },
    {
      "id": "circus-2",
      "title": "The Juggler",
      "recon": {
        "lesson": {
          "title": "Loops",
          "points": [
            "'Loop' is defined in the program. Find the sentence.",
            "When something never happens, ask which step the rule skips or never gets to.",
            "Count the sentences on each idea for the main-idea question."
          ],
          "example": "A washing machine that keeps spinning and never drains: look for the step it never gets to."
        },
        "title": "Program: The Juggler",
        "passage": [
          "The second act is the juggler, a round little figure named Bumble with six arms and a bowler hat, who juggles nine glowing balls in a fountain that rises and falls in perfect time. The rule that runs Bumble's act is a loop, which is a set of instructions that repeats: throw a ball up, let it fall, catch it, throw again, for as long as the act lasts. Every loop needs two things, the program says. It needs the steps to repeat, and it needs a line that says when to stop.",
          "Tonight the balls go up and do not come down. Nine glowing balls hang at the top of the tent, spinning gently, while Bumble stands underneath with six empty hands, throwing nothing over and over. That is because the loop is still running the throw step and never reaching the fall step. From the seats it looks like magic. From the ring it looks like a juggler who has been throwing invisible balls for an hour with a fixed smile, and Pippa says he cannot stop until the loop lets him.",
          "The audience does not know anything is wrong, which is the strange thing about this circus. When a rule breaks here, the show does not crash. It keeps going, faithfully, doing the wrong thing beautifully. Pippa has a theory that the line telling the balls to fall has been pushed below the line that says when to stop. So the loop reaches the stopping line, sees that the act is not over, and goes back to the throw before it ever gets to the fall. A one-line mistake. She needs somebody who reads carefully enough to find it."
        ],
        "questions": [
          {
            "q": "How many balls does Bumble juggle?",
            "choices": [
              "Three at a time",
              "Six, one for each arm",
              "Nine",
              "Twelve or more"
            ],
            "answer": 2,
            "hint": "First sentence of paragraph 1.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 1, what is a 'loop'?",
            "choices": [
              "A set of instructions that repeats",
              "One of Bumble's glowing balls",
              "The fountain shape the balls make as they rise",
              "A single instruction that runs once and stops"
            ],
            "answer": 0,
            "hint": "The sentence with 'which is a set of instructions'.",
            "skill": "Word meanings"
          },
          {
            "q": "What two things does every loop need, according to the program?",
            "choices": [
              "Steps that repeat and a line that says when to stop",
              "A juggler with six arms and a fountain of nine glowing balls",
              "A throw step and a catch step",
              "Lights and music, and an audience that does not notice anything"
            ],
            "answer": 0,
            "hint": "The last two sentences of paragraph 1.",
            "skill": "Finding details"
          },
          {
            "q": "Why do the balls never come down?",
            "choices": [
              "They are too light",
              "Bumble has only six arms and cannot catch nine balls at once",
              "The loop keeps running the throw step and never reaches the fall step",
              "The line that says when to stop was deleted, so the act can never finish at all"
            ],
            "answer": 2,
            "hint": "Paragraph 2, the sentence that starts 'That is because the loop'.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 3 mostly about?",
            "choices": [
              "How the nine balls came to hang at the top of the tent",
              "How a broken rule here keeps running beautifully, and Pippa's theory about the misplaced line",
              "The fixed smile Bumble wears while he throws nothing",
              "The way the loop throws each ball up, lets it fall, and catches it again"
            ],
            "answer": 1,
            "hint": "Paragraph 3 explains why nothing crashes, then gives the theory.",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Throws and catches",
          "points": [
            "Seven balls thrown 4 times each: 7 × 4 = 28.",
            "Sharing 35 pins among 5 boxes: 35 ÷ 5 = 7.",
            "A fraction times a whole number: 5 × 2/3 is five 2/3s, which is 10/3.",
            "Two-step: throws per minute times minutes, then add the finale throws."
          ],
          "example": "16 throws a minute for 4 minutes is 16 × 4 = 64. Add 10 finale throws to make 74."
        },
        "problems": [
          {
            "q": "Bumble throws each of his 9 balls 8 times during the act. How many throws is that?",
            "answer": "72",
            "hint": "9 × 8.",
            "skill": "Multiplying"
          },
          {
            "q": "Backstage there are 54 practice balls shared equally among Bumble's 6 arms. How many balls per arm?",
            "answer": "9",
            "hint": "54 ÷ 6.",
            "skill": "Dividing"
          },
          {
            "q": "Bumble juggles for 3/4 of a minute in each of his 8 practice runs. How many minutes is that in all?",
            "answer": "6",
            "hint": "Eight 3/4s is 24/4. How many wholes is that?",
            "skill": "Fractions"
          },
          {
            "q": "Bumble makes 20 throws a minute for 3 minutes, then 12 more throws in the finale. How many throws in all?",
            "answer": "72",
            "hint": "20 × 3 first. Then add 12.",
            "skill": "Multi-step problems"
          },
          {
            "q": "Bumble made 72 throws in the act and dropped 15 of them. How many did he catch?",
            "answer": "57",
            "hint": "72 − 15.",
            "skill": "Adding and subtracting"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "Point at the proof",
            "points": [
              "A supporting sentence has to settle the claim on its own. Say the claim, read your pick, and ask whether anyone could still argue with you.",
              "Every choice is a real sentence from the page, so true is not the test. Proof is the test.",
              "Watch for the sentence that shares a word with the claim and proves none of it. That is the trap almost every time."
            ],
            "example": "Claim: the act has been running too long. 'Bumble wears a bowler hat' is true and proves nothing. 'He has been throwing for an hour without a catch' is proof."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea that develops across the whole program page?",
              "choices": [
                "Bumble has six arms and a bowler hat, and he juggles nine glowing balls in a fountain that rises and falls in perfect time for as long as the act lasts.",
                "Machines always fail at the worst possible moment, and anybody who works with them for long enough learns to expect a breakdown on the busiest night of the year.",
                "A loop with its lines in the wrong order does not stop the show; it keeps the show running beautifully in the wrong shape until somebody reads it.",
                "When a rule breaks in this circus, the whole show stops at once, and the audience sits in the dark until somebody in the ring has found the broken line."
              ],
              "answer": 2,
              "hint": "The loop, the frozen act, and the audience that notices nothing. Ask what all three have in common. One of these choices says the exact opposite of the last paragraph.",
              "skill": "Central idea and evidence",
              "evidence": "When a rule breaks here, the show does not crash."
            },
            {
              "q": "Claim: the trouble is not that a step is missing but that the loop never reaches it. Which sentence from the program best supports that claim?",
              "choices": [
                "That is because the loop is still running the throw step and never reaching the fall step.",
                "The rule that runs Bumble's act is a loop, which is a set of instructions that repeats: throw a ball up, let it fall, catch it, throw again, for as long as the act lasts.",
                "Tonight the balls go up and do not come down.",
                "From the ring it looks like a juggler who has been throwing invisible balls for an hour with a fixed smile, and Pippa says he cannot stop until the loop lets him."
              ],
              "answer": 0,
              "hint": "Describing what the audience sees is not explaining it. The claim turns on the words never reaching. Find the sentence that uses that idea about a step.",
              "skill": "Finding details",
              "evidence": "That is because the loop is still running the throw step and never reaching the fall step."
            },
            {
              "q": "Why does the first paragraph explain what every loop needs before the act goes wrong?",
              "choices": [
                "It hands you the two parts of a loop, so that when the failure is described you can see which part is out of place.",
                "It introduces the juggler to an audience that has not met him, with his six arms, his bowler hat and his fountain of nine glowing balls.",
                "It compares the juggling act with the tightrope act.",
                "It lists the acts in the order they will perform tonight, so a reader can tell how far into the show the juggler comes."
              ],
              "answer": 0,
              "hint": "Delete the last two sentences of the first paragraph in your head. Could you still follow Pippa's theory at the end? That is what those sentences are for.",
              "skill": "Author's purpose and structure",
              "evidence": "It needs the steps to repeat, and it needs a line that says when to stop."
            },
            {
              "q": "The program says the circus keeps going, 'doing the wrong thing beautifully'. What is that phrase telling you?",
              "choices": [
                "The mistakes turn out to be prettier to watch than the act was ever meant to be, so nobody wants them put right",
                "The performers enjoy the glitches more than they enjoy the acts",
                "The mistake is performed as smoothly as everything else, so nothing looks broken from outside",
                "The audience is told about each mistake and forgives it"
              ],
              "answer": 2,
              "hint": "Two words are fighting each other in that phrase. Keep both. Then read the sentence just before it about what the audience knows.",
              "skill": "Word meanings",
              "evidence": "The audience does not know anything is wrong, which is the strange thing about this circus."
            },
            {
              "q": "Paragraphs 1 and 3 together explain why Bumble cannot just stop on his own. Why can he not?",
              "choices": [
                "The balls are hanging too high for even six arms to reach.",
                "The loop runs him, and it sends him back to the throw before he reaches the fall.",
                "Pippa has told him to keep going until the audience leaves.",
                "The line that says when to stop has been deleted from the rule."
              ],
              "answer": 1,
              "hint": "Paragraph one tells you what a loop is and what runs the act. The last paragraph gives Pippa's theory about the order of the lines. Follow the loop around once with both facts in hand.",
              "skill": "Reading between the lines",
              "evidence": "because the loop is still running the throw step and never reaching the fall step"
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
              "Adding three numbers: add two, then add the third.",
              "Fractions with the same bottom: add the tops."
            ],
            "example": "4 groups of 8 is 8 + 8 + 8 + 8 = 32, so 4 × 8 = 32."
          },
          "problems": [
            {
              "q": "Bumble counts 3 arms with 9 balls in each. How many balls is that?",
              "answer": "27",
              "hint": "3 × 9.",
              "skill": "Multiplying"
            },
            {
              "q": "27 balls are shared equally among 3 arms. How many balls does each arm hold?",
              "answer": "9",
              "hint": "How many 3s make 27?",
              "skill": "Dividing"
            },
            {
              "q": "Bumble counted 417 juggling balls, then found 57 more, then 52 more. How many juggling balls in all?",
              "answer": "526",
              "hint": "417 + 57 first. Then add 52.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "Bumble finished 2/4 of the day's work before the break and 1/4 after. What fraction is done? (write a fraction)",
              "answer": "3/4",
              "hint": "Same bottom. Add the tops.",
              "skill": "Fractions"
            },
            {
              "q": "There were 700 juggling balls at the start. 439 have been used. How many are left?",
              "answer": "261",
              "hint": "700 − 439.",
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
            "example": "5 × (11 − 4) + 6: parentheses first, 5 × 7 = 35, then 35 + 6 = 41."
          },
          "problems": [
            {
              "q": "Pippa has 4 yards of bright ribbon. Each juggling club gets 1/6 of a yard. How many clubs can Pippa wrap?",
              "answer": "24",
              "hint": "Dividing by 1/6 is the same as multiplying by 6: 4 × 6.",
              "skill": "Fractions"
            },
            {
              "q": "Of 60 juggling balls, 50% are set aside. How many is that?",
              "answer": "30",
              "hint": "50% of 60: 50% is 50/100.",
              "skill": "Ratios and percent"
            },
            {
              "q": "Arms and juggling balls are kept in the ratio 1 to 3. If there are 6 arms, how many juggling balls?",
              "answer": "18",
              "hint": "6 ÷ 1 = 6 groups. Each group has 3 juggling balls.",
              "skill": "Ratios and percent"
            },
            {
              "q": "Bumble works out 8 × (8 − 2) + 4. What is it?",
              "answer": "52",
              "hint": "Parentheses first, then multiply, then add.",
              "skill": "Order of operations"
            },
            {
              "q": "Solve for x: x + 232 = 1,000",
              "answer": "768",
              "hint": "Subtract 232 from both sides.",
              "skill": "Equations"
            }
          ]
        },
        "7": {
          "lesson": {
            "title": "Grade 7 numbers",
            "points": [
              "A unit rate is the total divided by how many: 6 seconds for 24 cues is 6 ÷ 24 = 0.25 each.",
              "Percent change: find that percent of the starting number, then add it on or take it off.",
              "Multiplying or dividing with one minus sign gives a minus answer: 3 × (−5) = −15, and −15 ÷ 3 = −5.",
              "A two-step equation: undo the adding first, then undo the multiplying."
            ],
            "example": "6x + 14 = 50, so 6x = 36, so x = 6."
          },
          "problems": [
            {
              "q": "20 cues needed 15 seconds altogether. How many seconds is that for one cue?",
              "answer": "0.75",
              "hint": "A rate is the total shared out: 15 ÷ 20.",
              "skill": "Ratios and percent"
            },
            {
              "q": "Bumble counted 160 juggling balls on the first pass. On the second pass the number had fallen by 20%. How many juggling balls is that?",
              "answer": "128",
              "hint": "20% of 160 is 32. Then take it off.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The gauge drops 9 every hour for 4 hours. What is the total change? (Write a drop as a negative number.)",
              "answer": "-36",
              "accept": [
                "−36"
              ],
              "hint": "4 hours of −9 each: 4 × (−9). One minus sign, so the answer is negative.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: 7x + 23 = 79",
              "answer": "8",
              "hint": "Take 23 off both sides first, then divide by 7.",
              "skill": "Equations"
            },
            {
              "q": "A round pan is 5 inches across. Using 3.14 for pi, how many inches is it around the edge?",
              "answer": "15.7",
              "hint": "Around the edge = 3.14 × the distance across. 3.14 × 5.",
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
            "example": "Start at 11 and add 3 each hour: after 7 hours, y = 3 × 7 + 11 = 32."
          },
          "problems": [
            {
              "q": "Bumble starts with 24 juggling balls and adds 8 more every hour. After 6 hours, how many juggling balls are there?",
              "answer": "72",
              "hint": "This is the straight-line rule y = mx + b: 8 × 6 + 24.",
              "skill": "Linear relationships"
            },
            {
              "q": "A square pad has an area of 16 square feet. How long is one side, in feet?",
              "answer": "4",
              "hint": "A square's area is side × side. What number times itself makes 16?",
              "skill": "Powers and roots"
            },
            {
              "q": "Bumble runs a ladder from the top of an 8-foot post to a point 15 feet away on the ground. How long is the ladder, in feet?",
              "answer": "17",
              "hint": "Right triangle: a² + b² = c². 8² + 15² = 64 + 225 = 289. The ladder is the square root of that.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "Solve for x: 6x + 5 = 3x + 29",
              "answer": "8",
              "hint": "Take 3x off both sides to get 3x + 5 = 29, then take 5 off both sides and divide.",
              "skill": "Equations"
            },
            {
              "q": "A round tank has a radius of 10 feet and is 4 feet deep. Using 3.14 for pi, what is its volume in cubic feet? (volume = pi × radius × radius × depth)",
              "answer": "1256",
              "hint": "3.14 × 10 × 10 = 314, then × 4.",
              "skill": "Area and perimeter"
            }
          ]
        }
      },
      "orders": {
        "lesson": {
          "title": "Put the stop line last",
          "points": [
            "The order of lines in a loop matters. Read the whole cue sheet before deciding which line to move.",
            "Count the balls that come down only after the fall line runs."
          ],
          "example": "Throw, fall, catch, then check whether to stop. The stop check has to come after the fall."
        },
        "skill": "Following directions",
        "steps": [
          "Cue 1: Bumble throws 9 balls up.",
          "Cue 2: the stop line sends the loop back to cue 1, and not one ball falls.",
          "Move the fall line above the stop line. Now every run of cue 1 ends with all 9 balls caught.",
          "Run cue 1 three more times and multiply 9 by 3 to count the catches.",
          "Do not use the 3 runs in step 4. Run cue 1 once for each of Bumble's six arms and count the catches again.",
          "Type how many balls were caught after the fix."
        ],
        "prompt": "Balls caught after the fix:",
        "answer": "54",
        "hint": "Bumble has six arms. Step 5 sends you back to step 4 and changes how many times cue 1 runs."
      }
    },
    {
      "id": "circus-3",
      "title": "The Tightrope",
      "recon": {
        "lesson": {
          "title": "Patterns",
          "points": [
            "'Pattern' is defined in the program. Find the sentence.",
            "When a rope is drawn in pieces, the question is what the pattern of pieces is. Read the numbers in order.",
            "'What should the walker do' questions: use the pattern, not a guess."
          ],
          "example": "Clap, clap, stomp, clap, clap, stomp: the 9th beat is a stomp, because every third beat is."
        },
        "title": "Program: The Tightrope",
        "passage": [
          "The third act is Lumen, the tightrope walker, a thin bright figure who crosses the big top on a wire forty feet up with a parasol and no net. The rule that draws her wire is simple: draw a segment, draw the next segment, keep going until the far platform. Tonight the rule is dropping every other segment. The wire is there, then it is not, then it is there again: a pattern, which is anything that repeats in a way you can predict. This one goes drawn, missing, drawn, missing, all the way across.",
          "Lumen cannot step on a missing segment. There is nothing there; her foot would go through. But she can step on a drawn one, and because the pattern is steady she can tell exactly where the next drawn segment will be: two steps ahead, every time. The program says a broken pattern is a problem, but a steady broken pattern is only a puzzle. She counts the segments as she goes. One drawn, skip, three drawn, skip, five drawn, skip. She reaches the far platform stepping only on the odd-numbered segments, and the audience thinks it is the best act of the night.",
          "Pippa says the rule broke when someone changed the line that says next segment to the line that says next next segment. Fix that and the wire draws whole again. But she also says something worth writing down: some glitches are dangerous and some are only strange, and the difference is whether you can predict them. A wire missing every second segment is strange and safe, if you count. A wire missing random segments would be dangerous, because counting would not help. Learn to tell them apart before you touch the rule."
        ],
        "questions": [
          {
            "q": "How high up is Lumen's wire?",
            "choices": [
              "A foot",
              "A mile",
              "Four hundred feet",
              "Forty feet"
            ],
            "answer": 3,
            "hint": "First sentence of paragraph 1.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 1, what is a 'pattern'?",
            "choices": [
              "The parasol Lumen carries across the wire",
              "A segment of the wire that the rule has failed to draw",
              "A wire strung forty feet up",
              "Anything that repeats in a way you can predict"
            ],
            "answer": 3,
            "hint": "The sentence with 'which is anything that repeats'.",
            "skill": "Word meanings"
          },
          {
            "q": "Which segments does Lumen step on to reach the far platform?",
            "choices": [
              "The even-numbered ones only",
              "All of them",
              "The odd-numbered ones",
              "Every third one"
            ],
            "answer": 2,
            "hint": "Paragraph 2, the sentence about the far platform.",
            "skill": "Finding details"
          },
          {
            "q": "Why does Pippa say a wire missing every second segment is safe but a wire missing random segments is dangerous?",
            "choices": [
              "The segments that go missing at random are heavier than the ones still drawn",
              "Every second segment of the wire is stronger than the ones on either side of it",
              "A random pattern would take longer to fix than a steady one, and Lumen cannot wait",
              "A steady pattern can be predicted and counted, and a random one cannot"
            ],
            "answer": 3,
            "hint": "Paragraph 3, the sentences about predicting.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 2 mostly about?",
            "choices": [
              "How thin and bright Lumen looks crossing the wire with her parasol",
              "How the audience watches and decides it is the best act of the night",
              "The far platform",
              "How Lumen uses the steady pattern to cross safely by counting"
            ],
            "answer": 3,
            "hint": "Paragraph 2 is about counting and stepping on the right segments.",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Segments and steps",
          "points": [
            "A 30-segment wire with every second one missing has 30 ÷ 2 = 15 drawn.",
            "Perimeter of a 12 by 12 square: add all four sides, 12 + 12 + 12 + 12 = 48.",
            "Same bottom: 1/7 + 4/7 = 5/7.",
            "Money: a $6 ticket, paying with $10, is 10 − 6 = $4 change."
          ],
          "example": "16 steps 4 times is 16 × 4 = 64, then 5 more steps makes 69."
        },
        "problems": [
          {
            "q": "The wire has 40 segments and every second one is missing. How many segments are drawn?",
            "answer": "20",
            "hint": "40 ÷ 2.",
            "skill": "Dividing"
          },
          {
            "q": "The practice mat beside the ring is a square 20 meters on each side. What is its perimeter in meters?",
            "answer": "80",
            "hint": "20 + 20 + 20 + 20.",
            "skill": "Area and perimeter"
          },
          {
            "q": "Lumen crossed 2/6 of the wire before the lights flickered and 3/6 more after. How much has she crossed? (write a fraction)",
            "answer": "5/6",
            "hint": "Same bottom. Add the tops.",
            "skill": "Fractions"
          },
          {
            "q": "A ringside ticket costs $9. You pay with a $20 bill. How much change do you get?",
            "answer": "11",
            "hint": "20 − 9.",
            "accept": [
              "$11",
              "11.00",
              "$11.00"
            ],
            "skill": "Money and decimals"
          },
          {
            "q": "Lumen takes 24 steps to cross the wire and crosses it 3 times, then takes 8 more steps to the ladder. How many steps is that?",
            "answer": "80",
            "hint": "24 × 3 first. Then add 8.",
            "skill": "Multi-step problems"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "The job of a paragraph",
            "points": [
              "Every paragraph is doing a job: setting up a rule, showing what went wrong, comparing two cases, or turning one night into a lesson.",
              "Find the job by deleting the paragraph in your head. What would you no longer know? That is the job.",
              "Naming the job is not retelling the paragraph. A choice that only repeats what happened has named nothing."
            ],
            "example": "A page about a broken clock ends with a paragraph on which broken clocks are worth keeping. Its job is not to describe a clock. It is to turn one repair into a test you can use on the next one."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea of the whole program page?",
              "choices": [
                "Lumen crosses the big top on a wire forty feet up, with a parasol in her hand and no net at all under her while she walks.",
                "Practice is what makes any performer safe in the end.",
                "A wire missing segments at random would be just as safe as this one.",
                "A broken rule you can predict is a puzzle rather than a danger, and predicting it is exactly what gets Lumen across."
              ],
              "answer": 3,
              "hint": "The broken rule, the counting, and the closing warning. Ask what all three are about. One choice covers only the first sentence and one is denied outright at the end.",
              "skill": "Central idea and evidence",
              "evidence": "The program says a broken pattern is a problem, but a steady broken pattern is only a puzzle."
            },
            {
              "q": "Claim: Lumen can cross because the fault repeats in a way she can rely on. Which sentence from the program best supports that claim?",
              "choices": [
                "The wire is there, then it is not, then it is there again: a pattern, which is anything that repeats in a way you can predict.",
                "Lumen cannot step on a missing segment.",
                "There is nothing there; her foot would go through.",
                "But she can step on a drawn one, and because the pattern is steady she can tell exactly where the next drawn segment will be: two steps ahead, every time."
              ],
              "answer": 3,
              "hint": "Counting is what she does; relying on the pattern is why counting works. Find the sentence that gives the reason and not just the action.",
              "skill": "Finding details",
              "evidence": "But she can step on a drawn one, and because the pattern is steady she can tell exactly where the next drawn segment will be: two steps ahead, every time."
            },
            {
              "q": "What job does the last paragraph do on this page?",
              "choices": [
                "It explains how the wire is drawn, one segment after the next, from the near platform all the way across to the far one.",
                "It describes what the audience saw during the act.",
                "It turns tonight's single glitch into a test you can use on any glitch: ask whether you can predict it.",
                "It lists the segments Lumen stepped on as she crossed."
              ],
              "answer": 2,
              "hint": "The paragraph gives the fix in one sentence and then keeps going. Ask what the rest of it is for, when the problem has already been solved.",
              "skill": "Author's purpose and structure",
              "evidence": "But she also says something worth writing down: some glitches are dangerous and some are only strange, and the difference is whether you can predict them."
            },
            {
              "q": "The program calls this glitch 'only strange' rather than dangerous. What does only strange mean as it is used here?",
              "choices": [
                "It is too small a fault for anybody in the circus to notice while the act is running",
                "It happens with no pattern to it at all, so nobody can tell when the next gap comes",
                "It is a glitch that will sort itself out on its own if the show is left alone for long enough",
                "It is not what anyone meant, but it repeats, so it can be worked around"
              ],
              "answer": 3,
              "hint": "The sentence right after gives you the same idea in other words, with the word safe in it. Use that one to pin this one down.",
              "skill": "Word meanings",
              "evidence": "A wire missing every second segment is strange and safe, if you count."
            },
            {
              "q": "Paragraphs 1 and 2 together explain why Lumen ends up stepping only on the odd-numbered segments. Why does she?",
              "choices": [
                "She prefers odd numbers because they are easier to keep count of.",
                "The even-numbered segments are drawn too narrow for her to get a whole foot onto, so she has to step past them to the wider ones each time.",
                "The parasol only balances her on every second step across, so she has to put her weight down on one segment and then skip the next one.",
                "The rule drops every other segment, so the ones still drawn are the odd ones, and those are the only places her foot can land."
              ],
              "answer": 3,
              "hint": "Paragraph one tells you which segments the rule is dropping. Paragraph two tells you what happens to a foot on a missing one. Put the two facts together and count.",
              "skill": "Reading between the lines",
              "evidence": "The wire is there, then it is not, then it is there again: a pattern, which is anything that repeats in a way you can predict. This one goes drawn, missing, drawn, missing, all the way across"
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
              "Taking away: line up hundreds, tens and ones. 457 − 132 = 325.",
              "Fractions: a whole cut into 6 parts is 6/6. Take 2/6 away and 4/6 is left."
            ],
            "example": "6 groups of 4 is 4 + 4 + 4 + 4 + 4 + 4 = 24, so 6 × 4 = 24."
          },
          "problems": [
            {
              "q": "Lumen counted 7 segments yesterday and three times as many today. How many segments today?",
              "answer": "21",
              "hint": "Three times 7: 7 + 7 + 7.",
              "skill": "Multiplying"
            },
            {
              "q": "Lumen joins 49 segments into wires of 7 segments each. How many wires is that?",
              "answer": "7",
              "hint": "How many 7s make 49?",
              "skill": "Dividing"
            },
            {
              "q": "Lumen starts with 283 segments and uses 83. How many are left?",
              "answer": "200",
              "hint": "283 − 83.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "1/8 of the day's work was done yesterday. What fraction is still to do? (write a fraction)",
              "answer": "7/8",
              "hint": "The whole job is 8/8. Take 1/8 off it.",
              "skill": "Fractions"
            },
            {
              "q": "A square wire mat is 7 squares on each side. How many squares is that?",
              "answer": "49",
              "hint": "7 rows of 7.",
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
            "example": "4 + 6 × 9: multiply first, 6 × 9 = 54, then 4 + 54 = 58."
          },
          "problems": [
            {
              "q": "8 cues took 10.8 seconds altogether, and each took the same. How many seconds did each one take?",
              "answer": "1.35",
              "hint": "10.8 ÷ 8. Divide as with whole numbers and keep the point in place.",
              "skill": "Decimals"
            },
            {
              "q": "20 of the 80 segments are set aside. What percent is that? (write just the number)",
              "answer": "25",
              "accept": [
                "25%"
              ],
              "hint": "20 out of 80, then out of 100.",
              "skill": "Ratios and percent"
            },
            {
              "q": "For every 1 wire there are 3 segments. There are 15 segments. How many wires?",
              "answer": "5",
              "hint": "15 ÷ 3 = 5 groups. Each group has 1 wire.",
              "skill": "Ratios and percent"
            },
            {
              "q": "Lumen works out 7 + 5 × 8. What is it?",
              "answer": "47",
              "hint": "Multiply before you add.",
              "skill": "Order of operations"
            },
            {
              "q": "Solve for x: 600 − x = 369",
              "answer": "231",
              "hint": "x is what is left when 369 is taken off 600.",
              "skill": "Equations"
            }
          ]
        },
        "7": {
          "lesson": {
            "title": "Grade 7 numbers",
            "points": [
              "A unit rate is the total divided by how many: 12 seconds for 8 cues is 12 ÷ 8 = 1.5 each.",
              "Percent change: find that percent of the starting number, then add it on or take it off.",
              "Below zero, going up adds and going down subtracts. Walk the number line one step at a time.",
              "A two-step equation: undo the adding first, then undo the multiplying."
            ],
            "example": "3x + 16 = 37, so 3x = 21, so x = 7."
          },
          "problems": [
            {
              "q": "One cue needs 2.25 seconds. How many seconds do 24 cues need?",
              "answer": "54",
              "hint": "24 × 2.25.",
              "skill": "Ratios and percent"
            },
            {
              "q": "Lumen counted 320 segments on the first pass and 400 on the second. By what percent did the count change? (write just the number)",
              "answer": "25",
              "accept": [
                "25%"
              ],
              "hint": "The change is 80. 80 out of 320, then out of 100.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The ledger reads −4 segments. How many segments must be added to bring it back to zero?",
              "answer": "4",
              "hint": "From −4 up to 0.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: 43 − 5x = 18",
              "answer": "5",
              "hint": "Move 5x to the right and 18 to the left: 5x = 25.",
              "skill": "Equations"
            },
            {
              "q": "On the plan, 1 inch stands for 2 feet. The wire is really 18 feet long. How many inches is it on the plan?",
              "answer": "9",
              "hint": "18 ÷ 2.",
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
            "example": "Start at 50 and take away 4 each hour: after 7 hours, y = 50 − 4 × 7 = 22."
          },
          "problems": [
            {
              "q": "Lumen starts with 28 segments and uses 3 every hour. How many are left after 6 hours?",
              "answer": "10",
              "hint": "3 × 6 = 18 used, taken off 28.",
              "skill": "Linear relationships"
            },
            {
              "q": "A cube is 8 small cubes along every edge. How many small cubes make it up?",
              "answer": "512",
              "hint": "8³ means 8 × 8 × 8.",
              "skill": "Powers and roots"
            },
            {
              "q": "A 5-foot cable runs from the top of a post to a point 4 feet away on the ground. How tall is the post, in feet?",
              "answer": "3",
              "hint": "a² = c² − b² = 25 − 16 = 9. Then take the square root.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "Solve for x: 9x = 3x + 54",
              "answer": "9",
              "hint": "Take 3x off both sides: 6x = 54. Then divide by 6.",
              "skill": "Equations"
            },
            {
              "q": "Lumen counts 2,000 segments. Written as 2 × 10 to a power, what is the power?",
              "answer": "3",
              "hint": "Count the zeros after 2.",
              "skill": "Powers and roots"
            }
          ]
        }
      },
      "orders": {
        "lesson": {
          "title": "Continue the pattern",
          "points": [
            "Write the pattern out on paper and keep going. Do not guess the end; count to it.",
            "Odd numbers: 1, 3, 5, 7..."
          ],
          "example": "Drawn segments are 1, 3, 5, 7. The tenth drawn segment is 19."
        },
        "skill": "Following directions",
        "steps": [
          "The drawn segments on Lumen's wire are the odd-numbered ones: 1, 3, 5, and so on.",
          "Write out the first six drawn segments in order.",
          "Add the first of those six to the last of them.",
          "Add the number of segments you wrote out in step 2.",
          "Lumen crosses in sets of four segments, so divide your total by 4.",
          "That lands between two whole numbers. Type it rounded down."
        ],
        "prompt": "Your answer:",
        "answer": "4",
        "hint": "The drawn segments are the odd numbers. Step 6 tells you what to do when the division lands between two whole numbers."
      }
    },
    {
      "id": "circus-4",
      "title": "Hall of Mirrors",
      "recon": {
        "lesson": {
          "title": "Copies",
          "points": [
            "'Duplicate' is defined in the program. Find the sentence.",
            "To tell a copy from an original, use the one detail the program says a copy always gets wrong.",
            "'Why does the rule make copies' questions: what was the rule meant to copy?"
          ],
          "example": "A sprinkler meant for the garden keeps soaking the sidewalk. Ask what it was set to water, and how it decides."
        },
        "title": "Program: Hall of Mirrors",
        "passage": [
          "The fourth act is not on a stage. It is a corridor off the ring called the Hall of Mirrors, where a rule takes whatever is in front of it and draws it again on the wall. What it draws is a duplicate, which is an exact copy made by the code, down to the last button. On a good night it copies the walls into a corridor that seems to go on forever. On a bad night the rule copies the wrong things. Tonight it has copied a section of the bleachers, seats and all, and pasted it three feet to the left of where it started. So there are now two of the same row, and the people in it are not sure which one they are sitting in.",
          "Duplicates are easy to make and hard to spot, but the program gives you the one trick that always works. The code that makes a copy can copy shape and color and light, but it cannot make a new number for a copy the way the circus does for a real thing. Every real thing in the circus has a number. A copy has the same number as its original. So if you see two things with the same number, one of them is a duplicate, and the one that was there first is the real one.",
          "Pippa thinks the rule was supposed to copy only things that hold still, like walls and seats, and it has started copying anything that stops moving for more than a second. That is why the audience is in danger of being duplicated every time they sit down. She says the fix is one word in the rule: change anything to walls. But she wants you to check the numbers on the two rows first, so that when the duplicate is deleted, the people are sitting in the row that stays."
        ],
        "questions": [
          {
            "q": "What has the rule copied tonight?",
            "choices": [
              "The ringmaster and her coat of light",
              "The red and white stripes of the big top",
              "The nine glowing balls hanging above",
              "A section of the bleachers"
            ],
            "answer": 3,
            "hint": "Paragraph 1, the sentence that starts 'Tonight it has copied'.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 1, what is a 'duplicate'?",
            "choices": [
              "A mirror on the wall",
              "The number on a real thing",
              "An exact copy made by the code",
              "A corridor off the ring"
            ],
            "answer": 2,
            "hint": "The sentence with 'which is an exact copy'.",
            "skill": "Word meanings"
          },
          {
            "q": "What is the one thing a copy never has?",
            "choices": [
              "A number of its own, separate from the original's",
              "The light and the color the code paints onto the original",
              "Its shape",
              "The place it stands, which is always three feet to the left"
            ],
            "answer": 0,
            "hint": "Paragraph 2, the sentence that starts 'The code that makes a copy'.",
            "skill": "Finding details"
          },
          {
            "q": "Why has the rule started copying people?",
            "choices": [
              "It was meant to copy things that hold still, and people who sit down hold still",
              "It copies anything that walks past it in the corridor",
              "Pippa changed the word walls to anything in the rule",
              "The number the code writes on people wears off when they sit"
            ],
            "answer": 0,
            "hint": "Paragraph 3, the first two sentences.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 2 mostly about?",
            "choices": [
              "How a hundred copies of yourself can make the audience laugh",
              "The trick for telling a duplicate from the real thing",
              "How the code copies a coat right down to the very last button",
              "Why a whole row of the bleachers ended up three feet to the left"
            ],
            "answer": 1,
            "hint": "Paragraph 2 is entirely about the number trick.",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Rows and copies",
          "points": [
            "Three rows of 11 seats: 3 × 11 = 33, then take away one copied row: 33 − 11 = 22.",
            "1,000 things minus 360 copies: 1,000 − 360 = 640.",
            "Sharing 65 lamps along 5 walls: 65 ÷ 5 = 13.",
            "Common multiples: count by both numbers. 2, 4, 6 and 3, 6: they meet at 6."
          ],
          "example": "7 × 14 = 7 × 10 + 7 × 4 = 70 + 28 = 98."
        },
        "problems": [
          {
            "q": "The circus has 1,000 numbered things. Tonight 250 of them turned out to be copies. How many real things are there?",
            "answer": "750",
            "hint": "1,000 − 250. Think of 1,000 as 999 + 1.",
            "skill": "Adding and subtracting"
          },
          {
            "q": "The Hall of Mirrors has 96 mirrors spread equally along 8 walls. How many mirrors per wall?",
            "answer": "12",
            "hint": "96 ÷ 8.",
            "skill": "Dividing"
          },
          {
            "q": "The duplicated row and the real row have 15 seats each. Pippa deletes the duplicate. How many of those 30 seats are left?",
            "answer": "15",
            "hint": "15 × 2 = 30 seats before. Take away one row of 15.",
            "skill": "Multi-step problems"
          },
          {
            "q": "One mirror flashes every 3 seconds and another flashes every 5 seconds. They just flashed together. How many seconds until they flash together again?",
            "answer": "15",
            "hint": "Count by 3s and by 5s. Which number is on both lists first?",
            "skill": "Multiplying"
          },
          {
            "q": "Each of the 8 walls in the Hall of Mirrors shows 16 reflections. How many reflections is that in all?",
            "answer": "128",
            "hint": "8 × 10 plus 8 × 6.",
            "skill": "Multiplying"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "Words doing picture work",
            "points": [
              "A word is doing one job in one sentence. Work out that job, not the entry it would get in a dictionary.",
              "Some phrases are painting a picture instead of stating a fact. Ask what the picture shows, then say it plainly.",
              "Put your pick back into the sentence. If the sentence now claims something the page never claimed, it is the wrong pick."
            ],
            "example": "'The corridor went on for a hundred of you.' Nobody has been counted. The phrase is telling you how many copies were standing there and how long the walk felt."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea that develops across the whole program page?",
              "choices": [
                "Tonight the Hall of Mirrors has copied a section of the bleachers, seats and all, and pasted it three feet to the left of where the row started.",
                "Mirrors always show things exactly as they really are, which is why a corridor lined with them is the safest place in the circus to stand tonight.",
                "A duplicate can be spotted because it looks a little different from the original, since the code copies the shape but never quite gets the color right.",
                "A copy can match everything you can see, so telling the real thing from the copy needs something the code was never able to make."
              ],
              "answer": 3,
              "hint": "What the rule does, the one trick that always works, and the fix Pippa wants checked first. Find the choice that holds all three, and cross off the one the page directly denies.",
              "skill": "Central idea and evidence",
              "evidence": "Duplicates are easy to make and hard to spot, but the program gives you the one trick that always works."
            },
            {
              "q": "Claim: however exact a duplicate looks, there is one thing the code cannot do for it. Which sentence from the program best supports that claim?",
              "choices": [
                "On a bad night the rule copies the wrong things.",
                "Duplicates are easy to make and hard to spot, but the program gives you the one trick that always works.",
                "The code that makes a copy can copy shape and color and light, but it cannot make a new number for a copy the way the circus does for a real thing.",
                "That is why the audience is in danger of being duplicated every time they sit down."
              ],
              "answer": 2,
              "hint": "Promising a trick is not the same as showing the gap the trick uses. Find the sentence that lists what the code can copy and then names what it cannot.",
              "skill": "Finding details",
              "evidence": "The code that makes a copy can copy shape and color and light, but it cannot make a new number for a copy the way the circus does for a real thing."
            },
            {
              "q": "Why does the program explain the numbers before Pippa asks you to check the two rows?",
              "choices": [
                "The check she asks for is meaningless until you know what a number can tell you and what it cannot.",
                "It explains how the Hall of Mirrors was first built.",
                "It compares the copying in the Hall of Mirrors with the missing segments in the tightrope walker's wire down the corridor.",
                "It lists everything the rule is allowed to copy, from the walls and the seats to the last button on a coat."
              ],
              "answer": 0,
              "hint": "Read the last sentence of the page and ask what you would need to know already to carry it out. The second paragraph is there to supply exactly that.",
              "skill": "Author's purpose and structure",
              "evidence": "But she wants you to check the numbers on the two rows first, so that when the duplicate is deleted, the people are sitting in the row that stays."
            },
            {
              "q": "The program says a duplicate is an exact copy 'down to the last button'. What is that phrase telling you?",
              "choices": [
                "The copy matches the original in even the smallest thing you could look at",
                "The copy is missing one small part that the original has",
                "The copy is built out of buttons and light rather than cloth",
                "The copy takes only a moment for the code to make"
              ],
              "answer": 0,
              "hint": "No actual buttons are being counted. Ask why a writer would pick the smallest thing on a coat to end that sentence with.",
              "skill": "Word meanings",
              "evidence": "What it draws is a duplicate, which is an exact copy made by the code, down to the last button"
            },
            {
              "q": "Paragraphs 1 and 3 together explain why the audience is in more danger tonight than on an ordinary bad night. Why are they?",
              "choices": [
                "The rule has started copying anything that moves quickly across the corridor, and an audience walking past is moving the whole time.",
                "The rule was meant for things that stay put, and it now counts a person who has sat down as one of those.",
                "The bleachers were built too close to the mirrored wall this year, so the rule now reaches a row it never used to reach.",
                "There are more people in the audience than the corridor was meant to hold, and the rule copies whatever is crowded against the wall."
              ],
              "answer": 1,
              "hint": "Paragraph one shows you what got copied tonight and who was in it. The last paragraph tells you what the rule now treats as fair game. Put the two together.",
              "skill": "Reading between the lines",
              "evidence": "Pippa thinks the rule was supposed to copy only things that hold still, like walls and seats, and it has started copying anything that stops moving for more than a second."
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
            "example": "4 groups of 9 is 9 + 9 + 9 + 9 = 36, so 4 × 9 = 36."
          },
          "problems": [
            {
              "q": "Pippa lays the mirrors out in 5 rows of 6. How many mirrors is that?",
              "answer": "30",
              "hint": "5 × 6.",
              "skill": "Multiplying"
            },
            {
              "q": "42 mirrors are set out in 7 equal rows. How many mirrors are in each row?",
              "answer": "6",
              "hint": "42 split into 7 equal parts.",
              "skill": "Dividing"
            },
            {
              "q": "The log shows 368 mirrors, then 42 more are added and 11 are taken off. What does the log show now?",
              "answer": "399",
              "hint": "Add 368 and 42 first, then take 11 off.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "Add: 5/8 + 2/8 (write a fraction)",
              "answer": "7/8",
              "hint": "Same bottom. 5 + 2 on top.",
              "skill": "Fractions"
            },
            {
              "q": "The plan calls for 700 mirrors. 110 are done and 11 more are under way. How many are still untouched?",
              "answer": "579",
              "hint": "Take 110 off 700, then take 11 off that.",
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
            "example": "(4 + 3) × 8: parentheses first, so 7 × 8 = 56."
          },
          "problems": [
            {
              "q": "Pippa has 1/2 of a bottle of glass cleaner, shared equally over 4 mirrors. What fraction of the bottle goes on each mirror? (write a fraction)",
              "answer": "1/8",
              "hint": "Sharing among 4 is the same as multiplying by 1/4: 1/2 × 1/4.",
              "skill": "Fractions"
            },
            {
              "q": "25% of the mirrors counted is 20. How many were counted in all?",
              "answer": "80",
              "hint": "20 is 25 hundredths of the whole: 20 ÷ 25 × 100.",
              "skill": "Ratios and percent"
            },
            {
              "q": "Pippa counts 24 walls and 30 mirrors. In its simplest form, what is the ratio of walls to mirrors? (write it like 2:3)",
              "answer": "4:5",
              "accept": [
                "4 to 5"
              ],
              "hint": "Divide both by 6.",
              "skill": "Ratios and percent"
            },
            {
              "q": "Pippa works out (9 + 5) × 10. What is it?",
              "answer": "140",
              "hint": "Parentheses first, then multiply.",
              "skill": "Order of operations"
            },
            {
              "q": "Solve for x: 3x = 1,119",
              "answer": "373",
              "hint": "Divide both sides by 3.",
              "skill": "Equations"
            }
          ]
        },
        "7": {
          "lesson": {
            "title": "Grade 7 numbers",
            "points": [
              "A unit rate is the total divided by how many: 10 seconds for 4 cues is 10 ÷ 4 = 2.5 each.",
              "Percent change: find that percent of the starting number, then add it on or take it off.",
              "Multiplying or dividing with one minus sign gives a minus answer: 3 × (−5) = −15, and −15 ÷ 3 = −5.",
              "A two-step equation: undo the last thing done to x first. With parentheses, divide first, then take away."
            ],
            "example": "(x + 5) × 4 = 44, so x + 5 = 11, so x = 6."
          },
          "problems": [
            {
              "q": "Pippa has 6 seconds to spend, and each cue takes 0.75 seconds. How many cues is that enough for?",
              "answer": "8",
              "hint": "6 ÷ 0.75.",
              "skill": "Ratios and percent"
            },
            {
              "q": "A count of mirrors rose by 25% to 250. What was it before?",
              "answer": "200",
              "hint": "250 is 125% of the old count.",
              "skill": "Ratios and percent"
            },
            {
              "q": "Over 7 hours the gauge dropped 63 in all, the same amount each hour. What was the change each hour? (Write a drop as a negative number.)",
              "answer": "-9",
              "accept": [
                "−9"
              ],
              "hint": "Share −63 into 7 equal parts: −63 ÷ 7. One minus sign, so the answer is negative.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: (x + 8) × 2 = 34",
              "answer": "9",
              "hint": "Divide both sides by 2 first, then take 8 off.",
              "skill": "Equations"
            },
            {
              "q": "A round pan has a radius of 10 inches. Using 3.14 for pi, what is its area in square inches?",
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
            "example": "For y = 7x + 3, when x = 4, y = 7 × 4 + 3 = 31."
          },
          "problems": [
            {
              "q": "The count of mirrors follows the rule y = 9x + 10, where x is the hour. What is y when x = 6?",
              "answer": "64",
              "hint": "Put 6 in for x: 9 × 6 + 10.",
              "skill": "Linear relationships"
            },
            {
              "q": "A cube has a volume of 216 cubic feet. How long is one edge, in feet?",
              "answer": "6",
              "hint": "What number × itself × itself makes 216?",
              "skill": "Powers and roots"
            },
            {
              "q": "A 17-foot ladder reaches the top of an 8-foot post. How far is the foot of the ladder from the base, in feet?",
              "answer": "15",
              "hint": "b² = c² − a² = 289 − 64 = 225. Then take the square root.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "Solve for x: 6x + 23 − x = 48",
              "answer": "5",
              "hint": "Collect the x's first: 5x + 23 = 48.",
              "skill": "Equations"
            },
            {
              "q": "A box tank has a square floor of 10² square feet and is 2 feet deep. What is its volume in cubic feet?",
              "answer": "200",
              "hint": "10² = 100 square feet of floor. Then × 2 for the depth.",
              "skill": "Area and perimeter"
            }
          ]
        }
      },
      "orders": {
        "lesson": {
          "title": "Same number, one real",
          "points": [
            "Write the numbers down and look for a repeat. The repeated number is the duplicate.",
            "Then do exactly what the sheet says with the number that is left."
          ],
          "example": "Rows numbered 7, 12, 7, 20: the 7 that appears twice is the copy. Remove one 7 and the rest are real."
        },
        "skill": "Following directions",
        "steps": [
          "The four rows in front of you carry the numbers 7, 12, 7 and 20.",
          "Add all four numbers together and keep that total.",
          "One number appears twice, so one of those rows is a copy. Add the numbers again, counting the repeated one only once, and keep that total too.",
          "Pippa reads back your two totals, the step 2 one and the step 3 one. Take the step 3 total; the step 2 total counted the copy.",
          "Add the 3 feet the copied row was pasted to the left.",
          "Type the sum."
        ],
        "prompt": "Your answer:",
        "answer": "42",
        "hint": "Two rows share a number, so one of them is the copy. Step 4 names which of your two totals goes on to step 5."
      }
    },
    {
      "id": "circus-5",
      "title": "Grand Finale",
      "recon": {
        "lesson": {
          "title": "The show, fixed",
          "points": [
            "'Cue' is defined in the program. Find the sentence.",
            "The finale ties the four acts together. Match each fix back to its act.",
            "The final why is about Pippa: what did she want the helper to learn, beyond fixing the show?"
          ],
          "example": "A big sister could open the jar for you in a second, but she shows you how to twist it. Ask why she would bother."
        },
        "title": "Program: Grand Finale",
        "passage": [
          "Night five, and every act runs. The tent draws red then white. Bumble's balls fall and are caught. Lumen's wire is whole, though she says she prefers it with gaps now that she knows how to count. The Hall of Mirrors copies walls and only walls. Pippa stands in the ring with her coat of light turned all the way up, and she calls the finale. That is the last act, the one where every performer comes out at once and the whole show has to run in time. It runs on a cue sheet: a list of cues, and a cue is a signal that tells one part of the show exactly when to start.",
          "The cue sheet is long, and it is the one thing in this circus she never lets anyone touch but the helper. Cue one, lights. Cue two, music. Cue three, the tent stripes chase around the ring. Cue four, Bumble. Cue five, Lumen. Cue six, the mirrors turn to face the audience and, for once, copy nothing. Cue seven, the spotlight, in the color the helper chooses. If one cue fires early, the whole finale drifts. If one fires late, a performer stands in the dark. In time is the only way.",
          "Before the lights go up, Pippa says the thing she has been waiting all week to say. She could have fixed every rule herself. She has been running this circus for a very long time and she knows every line of it. She asked you instead, and asked you to read each rule before touching it. That is because a helper who reads the rule understands the show, and a helper who understands the show can fix the next glitch without her. There will be a next glitch. There always is. Cue seven is yours. Pick the color."
        ],
        "questions": [
          {
            "q": "What is cue six in the finale?",
            "choices": [
              "The lights come up over the ring at the very start of the act",
              "The music begins and carries the whole of the finale along",
              "The mirrors turn to face the audience and copy nothing",
              "The spotlight comes on, in whichever color the helper chooses"
            ],
            "answer": 2,
            "hint": "Paragraph 2, the sentence that starts 'Cue six'.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 1, what is a 'cue'?",
            "choices": [
              "One of the nine glowing balls that Bumble throws during his own act",
              "A signal that tells one part of the show exactly when to start",
              "One of the rows of seats the mirrors copied",
              "The long list that all of the signals in the finale are written on"
            ],
            "answer": 1,
            "hint": "The last sentence of paragraph 1.",
            "skill": "Word meanings"
          },
          {
            "q": "What happens if one cue fires early?",
            "choices": [
              "Nothing at all happens to the show",
              "The whole finale drifts",
              "The tent stripes stop chasing around",
              "The audience gets up and leaves early"
            ],
            "answer": 1,
            "hint": "Paragraph 2, near the end.",
            "skill": "Finding details"
          },
          {
            "q": "Why did Pippa ask the helper to read each rule before fixing it, when she could have fixed them herself?",
            "choices": [
              "Because the helper is the only one allowed to touch the cue sheet",
              "She does not know every line of the circus code herself, even after all this time running it",
              "So the helper would understand the show well enough to fix the next glitch without her",
              "She has run the circus for a very long time and wanted somebody else to take a turn at the ring"
            ],
            "answer": 2,
            "hint": "Paragraph 3, the sentence that starts 'She asked you instead' and the one after it.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 2 mostly about?",
            "choices": [
              "Pippa's coat",
              "The cue sheet: the seven cues and why they must run in time",
              "Lumen's wire",
              "How long Pippa has run the circus and how well she knows every line"
            ],
            "answer": 1,
            "hint": "Paragraph 2 lists the cues and ends with the rule about timing.",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Finale numbers",
          "points": [
            "Eight cues at 25 seconds each: 25 × 8 = 200.",
            "Tickets: 140 seats at $5 is 140 × 5 = 100 × 5 + 40 × 5 = 700.",
            "Counting props: add them in any order. 8 + 2 + 5 + 1 = 16.",
            "Same bottom: 2/5 + 3/5 = 5/5, one whole."
          ],
          "example": "140 chairs cleared by 4 crew, the same number each: 140 ÷ 4 = 35."
        },
        "problems": [
          {
            "q": "Each of the 7 cues takes 30 seconds. How many seconds is the whole finale?",
            "answer": "210",
            "hint": "30 × 7.",
            "skill": "Multiplying"
          },
          {
            "q": "All 180 seats sold at $6 each. How much did the circus take at the ticket booth?",
            "answer": "1080",
            "hint": "180 × 6. Try 100 × 6 plus 80 × 6.",
            "accept": [
              "$1080",
              "1,080",
              "$1,080",
              "1080.00"
            ],
            "skill": "Money and decimals"
          },
          {
            "q": "In the finale Bumble juggles 9 balls, Lumen walks with 1 parasol, and there are 6 mirrors and 1 spotlight on stage. How many props is that?",
            "answer": "17",
            "hint": "9 + 1 + 6 + 1.",
            "skill": "Adding and subtracting"
          },
          {
            "q": "The show ran 3/7 of its cues before the spotlight and 4/7 with it. What fraction of the cues ran? (write a fraction)",
            "answer": "7/7",
            "hint": "Same bottom. Add the tops. 7/7 or 1 both count.",
            "accept": [
              "1"
            ],
            "skill": "Fractions"
          },
          {
            "q": "After the finale, 6 crew clear all 180 seats, the same number each. How many seats does each of them clear?",
            "answer": "30",
            "hint": "180 ÷ 6.",
            "skill": "Dividing"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "One fact from each",
            "points": [
              "The last question is built so that no single paragraph answers it. Plan on using two.",
              "Say a fact from one paragraph, then a fact from another, then say 'so'. What comes after 'so' is your answer.",
              "If a choice needs something the page never mentions, it is out, however reasonable it sounds by itself."
            ],
            "example": "Paragraph one: the bakery opens at six. Paragraph two: the bread takes two hours to bake. So the baker must start by four. Neither paragraph says that on its own."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea of the whole program page?",
              "choices": [
                "Cue seven is the spotlight, in whatever color the helper picks, and it is the last cue on a sheet that runs all the way from the lights to the mirrors.",
                "Every circus needs somebody in charge of the ring, and a show with nobody standing in the middle of it calling out the cues would fall apart in a night.",
                "The week's real work was not fixing four rules but learning to read them, which is why the finale and the next glitch belong to the helper.",
                "The ringmaster went around in the end and fixed all four of the rules herself, because she has run this circus a long time and knows every line of it."
              ],
              "answer": 2,
              "hint": "Four acts running, a cue sheet handed over, and a reason given in the last paragraph. Find the choice that holds all three, and cross off the one the page says did not happen.",
              "skill": "Central idea and evidence",
              "evidence": "She asked you instead, and asked you to read each rule before touching it. That is because a helper who reads the rule understands the show, and a helper who understands the show can fix the next glitch without her"
            },
            {
              "q": "Claim: the finale depends on timing more than on any one performer. Which sentence from the program best supports that claim?",
              "choices": [
                "The cue sheet is long, and it is the one thing in this circus she never lets anyone touch but the helper.",
                "If one cue fires early, the whole finale drifts.",
                "Cue six, the mirrors turn to face the audience and, for once, copy nothing.",
                "Cue five, Lumen."
              ],
              "answer": 1,
              "hint": "Listing a cue is not saying what happens when it goes wrong. Find the sentence where one small slip spreads to the whole act.",
              "skill": "Finding details",
              "evidence": "If one cue fires early, the whole finale drifts."
            },
            {
              "q": "Why does the page open by listing the four acts that now run correctly?",
              "choices": [
                "It explains how each of the four rules was originally written, line by line, in the weeks before any of them ever broke.",
                "It closes off the four earlier nights, so the finale reads as the thing the whole week was building toward.",
                "It warns that all four of the acts are likely to break again before the finale is over, so the helper should keep watching them.",
                "It compares the finale with the opening act of the show, and says which of the two the audience is likely to remember."
              ],
              "answer": 1,
              "hint": "Nothing in that opening is new information about tonight. Ask what a writer is doing when a paragraph reports that old problems are gone.",
              "skill": "Author's purpose and structure",
              "evidence": "Night five, and every act runs."
            },
            {
              "q": "The page says that if one cue fires early, 'the whole finale drifts'. What does drifts mean as it is used here?",
              "choices": [
                "Floats gently upward toward the roof of the tent above",
                "Stops dead in the middle and cannot be started again",
                "Slides gradually out of time from that point on",
                "Moves slowly sideways across the ring"
              ],
              "answer": 2,
              "hint": "The two sentences after it are about being early, being late, and being in time. Whatever drifts means here, it has to belong to that list.",
              "skill": "Word meanings",
              "evidence": "If one cue fires early, the whole finale drifts. If one fires late, a performer stands in the dark. In time is the only way."
            },
            {
              "q": "Paragraphs 2 and 3 together explain why Pippa hands the cue sheet to a helper instead of running it herself. Why does she?",
              "choices": [
                "She has never learned the order of the cues on the sheet herself, so she needs somebody else who can read it out to her.",
                "She is training somebody who can hold the show together on a night when she is not the one holding the sheet.",
                "The cue sheet can only be read by somebody new to the circus.",
                "She is busy choosing the color of the last spotlight."
              ],
              "answer": 1,
              "hint": "Paragraph two says the sheet is the one thing only the helper may touch. The last paragraph says why she asked a helper at all. Put the privilege next to the reason.",
              "skill": "Reading between the lines",
              "evidence": "She could have fixed every rule herself."
            }
          ]
        }
      },
      "navByGrade": {
        "3": {
          "lesson": {
            "title": "Grade 3 numbers",
            "points": [
              "Multiplication facts: 6 × 9 means 6 groups of 9.",
              "Sharing equally is dividing.",
              "Taking away: line up hundreds, tens and ones. 800 − 365 = 435.",
              "A fraction counts equal parts: 4 parts done out of 6 is 4/6."
            ],
            "example": "6 groups of 9 is 9 + 9 + 9 + 9 + 9 + 9 = 54, so 6 × 9 = 54."
          },
          "problems": [
            {
              "q": "Every act needs 7 cues, and there are 5 acts. How many cues is that?",
              "answer": "35",
              "hint": "5 groups of 7, so 5 × 7.",
              "skill": "Multiplying"
            },
            {
              "q": "Pippa splits 70 cues in half. How many cues is one half?",
              "answer": "35",
              "hint": "Half of 70.",
              "skill": "Dividing"
            },
            {
              "q": "Pippa needs to sell 900 tickets and has sold 549. How many more tickets does she need to sell?",
              "answer": "351",
              "hint": "900 − 549.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "The day's work is cut into 8 equal parts and Pippa has finished 3 of them. What fraction is done? (write a fraction)",
              "answer": "3/8",
              "hint": "3 parts out of 8.",
              "skill": "Fractions"
            },
            {
              "q": "A floor is 3 squares wide and 2 squares long. Pippa has covered 3 squares. How many squares are left to cover?",
              "answer": "3",
              "hint": "3 × 2 squares in all, then take 3 off.",
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
            "example": "13 × 5 − 11 × 5: multiply first, so 65 − 55 = 10."
          },
          "problems": [
            {
              "q": "Pippa logs 0.75 seconds for the first cue, 0.95 for the second and 1.35 for the third. How many seconds is that in total?",
              "answer": "3.05",
              "hint": "Line the points up, writing a missing place as 0, then add all three.",
              "skill": "Decimals"
            },
            {
              "q": "Of 80 performers, 25% are crossed off the list. How many are left on it?",
              "answer": "60",
              "hint": "25% of 80 is 20. Take that off 80.",
              "skill": "Ratios and percent"
            },
            {
              "q": "Pippa shares 14 spotlights between two teams in the ratio 3 to 4. How many does the smaller share get?",
              "answer": "6",
              "hint": "3 + 4 = 7 parts. 14 ÷ 7 = 2 for one part.",
              "skill": "Ratios and percent"
            },
            {
              "q": "Pippa works out 9 × 8 − 1 × 3. What is it?",
              "answer": "69",
              "hint": "Do both multiplications first, then subtract.",
              "skill": "Order of operations"
            },
            {
              "q": "Solve for x: x + 432 + 53 = 600",
              "answer": "115",
              "hint": "Add 432 and 53 first, then take that off 600.",
              "skill": "Equations"
            }
          ]
        },
        "7": {
          "lesson": {
            "title": "Grade 7 numbers",
            "points": [
              "A unit rate is the total divided by how many: 18 seconds for 12 cues is 18 ÷ 12 = 1.5 each.",
              "Percent change: find that percent of the starting number, then add it on or take it off.",
              "Below zero, going up adds and going down subtracts. Walk the number line one step at a time.",
              "A two-step equation: undo the last thing done to x first. With parentheses, divide first, then take away."
            ],
            "example": "3(x + 5) = 33, so x + 5 = 11, so x = 6."
          },
          "problems": [
            {
              "q": "16 cues took 20 seconds. At the same rate, how many seconds would 24 cues take?",
              "answer": "30",
              "hint": "One cue takes 20 ÷ 16 = 1.25. Then × 24.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The show had 160 performers, then 10% more were added. How many performers were added?",
              "answer": "16",
              "hint": "10% of 160: 10/100 × 160.",
              "skill": "Ratios and percent"
            },
            {
              "q": "One ledger reads −16 cues and another reads −20 cues. How many cues apart are they?",
              "answer": "4",
              "hint": "From −20 up to −16.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: 4(x + 22) = 120",
              "answer": "8",
              "hint": "Divide both sides by 4 to get x + 22 = 30.",
              "skill": "Equations"
            },
            {
              "q": "On the plan, 8 inches stands for 32 feet. How many feet does 1 inch stand for?",
              "answer": "4",
              "hint": "32 ÷ 8.",
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
              "Collect like terms first: 9x − 6x is 3x. With x on both sides, move the x's to one side."
            ],
            "example": "5 × 10^3 is 5 with three zeros, 5,000. That beats 9 × 10^2, which is only 900."
          },
          "problems": [
            {
              "q": "The count of performers goes 10, 18, 26, 34, and on. What is the 7th number in the list?",
              "answer": "58",
              "hint": "It starts at 10 and adds 8 each step. The number you want is 6 steps on from 10.",
              "skill": "Linear relationships"
            },
            {
              "q": "What is (7 × 4)²?",
              "answer": "784",
              "hint": "7 × 4 = 28 first, then square it.",
              "skill": "Powers and roots"
            },
            {
              "q": "A right triangle has short sides of 5 and 12 feet. How long is its longest side, in feet?",
              "answer": "13",
              "hint": "5² + 12² = 169. The longest side is the square root of that.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "Solve for x: 4x − 2x = 12",
              "answer": "6",
              "hint": "4 − 2 = 2, so 2x = 12.",
              "skill": "Equations"
            },
            {
              "q": "Which is bigger, 2 × 10^5 or 3 × 10^4? Write the bigger one out in full.",
              "answer": "200000",
              "hint": "2 × 10^5 is ten times 2 × 10^4, and 3 is not ten times 2.",
              "skill": "Powers and roots"
            }
          ]
        }
      },
      "orders": {
        "lesson": {
          "title": "In time",
          "points": [
            "A cue that fires only if the one before it fired is a chain. If one link skips, everything after it skips too.",
            "Count only the cues that actually fired."
          ],
          "example": "If cue 3 is skipped, cues 4 and 5, which depend on it, do not fire either."
        },
        "skill": "Following directions",
        "steps": [
          "Cue 1 fires: lights. Count it.",
          "Cue 2 fires: music. Count it.",
          "Cue 3 fires only if the music is playing. It is, so count it.",
          "Cue 4 fires only if cue 3 fired. Count it if it did.",
          "In tonight's rehearsal cue 5 is skipped: Lumen is practicing a bow instead. Do not count it.",
          "Cues 6 and 7 fire only if cue 5 fired. Count them only if it did.",
          "Type how many cues fired."
        ],
        "prompt": "Cues fired:",
        "answer": "4",
        "hint": "Cue 5 is skipped in tonight's rehearsal, and step 6 says cues 6 and 7 fire only if cue 5 did. Count what is left."
      }
    }
  ]
};
if (window.BASECAMP_MISSIONS && window.BASECAMP_MISSIONS.register) window.BASECAMP_MISSIONS.register(C);
else (window.BASECAMP_CAMPAIGNS_PENDING = window.BASECAMP_CAMPAIGNS_PENDING || []).push(C);
})();
