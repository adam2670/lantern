// ODYSSEY — campaign "theater". GENERATED, do not edit.
// Source of truth: content/missions-full.js. Rebuild with:  python3 tools/split-missions.py
// RULE: nothing in this file is about the person using it. Content only.
(function () {
var C = {
  "id": "theater",
  "ready": true,
  "kind": "shift",
  "readingLevel": {
    "fk": 5.5,
    "cl": 6.1
  },
  "grade": "5",
  "kindLabel": "Mystery",
  "form": "stagecat",
  "title": "The Old Theater",
  "subtitle": "A hundred-year-old playhouse, downtown",
  "pitch": "Five nights running the stage in a theater everyone says is haunted. Footsteps in the flies, a piano that plays itself, a seat that folds down on its own. Every one has an explanation, and finding it is the job.",
  "scene": "assets/scene-theater.jpg",
  "progress": {
    "unit": "shows",
    "total": 5
  },
  "dayNoun": "Show",
  "stageNoun": "Show",
  "finalNoun": "Opening night",
  "stages": [
    "Show 1",
    "Show 2",
    "Show 3",
    "Show 4",
    "Opening night"
  ],
  "reconNoun": "Prompt Book",
  "legs": {
    "recon": "Prompt book",
    "nav": "Backstage math",
    "orders": "Cue sheet",
    "debrief": "Intermission"
  },
  "fact": "Every theater leaves one bare bulb burning on the stage all night. It is called the ghost light. The real reason is so nobody walks off the edge of the stage in the dark. The other reason is the one everyone tells.",
  "finale": {
    "prompt": "Opening night, curtain call, house lights up. Which color gel goes in the last spotlight for the bow?",
    "options": [
      {
        "label": "Warm gold",
        "color": "#FFB454"
      },
      {
        "label": "Rose",
        "color": "#FF6BD6"
      },
      {
        "label": "Blue",
        "color": "#4FD1FF"
      },
      {
        "label": "White",
        "color": "#F4F8FF"
      }
    ],
    "done": "Drop it in. Then leave the ghost light on. That part is not a joke."
  },
  "patrols": [
    {
      "id": "theater-1",
      "title": "The Ghost Light",
      "recon": {
        "lesson": {
          "title": "Questions first, then the book",
          "points": [
            "Read the five questions before the book. Two want a detail, one wants a word, one wants a why, one wants what a paragraph is mostly about.",
            "When the book gives two reasons for something, the question may want the real one.",
            "The answer is always in the book. You never have to guess."
          ],
          "example": "Question: 'How wide is the stage?' Hunt for 'wide' and a number."
        },
        "title": "Prompt Book: One Bare Bulb",
        "passage": [
          "The theater opened in 1924 with nine hundred seats, a balcony, a pipe organ, and a stage sixty feet wide. It has been closed for eleven years. The new owners want it open by the end of the month. The stagehand's job is to get the stage working: the lights, the ropes that fly scenery in and out, the trapdoor, the curtain. Everyone who has worked here says the same thing on the first day: the building makes noises, and it has a ghost. The stagehand's first job is to decide whether to believe it.",
          "On every stage in the world, when the last person leaves at night, one bare bulb on a tall stand is left burning in the middle of the stage. It is called the ghost light. Stagehands will tell you it is left on for the ghost, so the ghost can perform after everyone has gone home and will not get angry. The real reason is written in the safety book. A stage is a raised platform with a drop at the front edge into the orchestra pit, and a person walking across it in total darkness can step off that edge. The bulb is there so nobody does.",
          "Tonight the stagehand walks the house, counting seats, and finds that the noises are real. A knock from above the stage, slow and regular. A creak from the balcony. A door somewhere that closes on its own. The prompt book, the stage manager's binder where every cue of every show was written down, is on the desk in the wings. The last entry is dated the night the theater closed. The stagehand opens it to a fresh page and writes the date and one line: noises, three, to be found."
        ],
        "questions": [
          {
            "q": "How many seats does the theater have?",
            "choices": [
              "Ninety",
              "Nine thousand seats",
              "Nine hundred",
              "Sixty"
            ],
            "answer": 2,
            "hint": "The first sentence of paragraph 1.",
            "skill": "Finding details"
          },
          {
            "q": "What is the real reason for the ghost light?",
            "choices": [
              "So the ghost can perform on the stage after everyone has gone home",
              "Because the safety book requires a light burning in the orchestra pit",
              "So nobody steps off the edge of the stage in the dark",
              "Because the new owners want the building open by the end of the month"
            ],
            "answer": 2,
            "hint": "Paragraph 2, the sentence that begins 'The real reason', and the one after it.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 3, what is the 'prompt book'?",
            "choices": [
              "The stage manager's binder where every cue of every show is written",
              "The list of every seat in the house, counted and checked before each show",
              "The safety book, where the real reason for the ghost light is written down",
              "A book of stories told about the theater's ghost"
            ],
            "answer": 0,
            "hint": "The sentence 'The prompt book, the stage manager's binder...'.",
            "skill": "Word meanings"
          },
          {
            "q": "Why does the stagehand write 'to be found' instead of 'ghost'?",
            "choices": [
              "Because the stagehand plans to fix the noises before the month is out",
              "Because the prompt book is meant for cues, not for ghosts",
              "Because the stagehand's job is to find what is really making the noises, not to believe the story",
              "Because there were three noises and one word could not cover them"
            ],
            "answer": 2,
            "hint": "The last sentence of paragraph 1, and the last sentence of paragraph 3.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 2 mostly about?",
            "choices": [
              "The orchestra pit",
              "The ghost light: the story people tell and the real reason",
              "How many seats there are",
              "The trapdoor"
            ],
            "answer": 1,
            "hint": "Paragraph 2 is entirely about the one bare bulb.",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "House math",
          "points": [
            "Seats in rows: rows × seats per row.",
            "Seats in the balcony: all the seats minus the main floor.",
            "Hundredths as decimals: 7/100 is 0.07 and 90/100 is 0.90.",
            "Same bottom: add the tops. 1/8 + 4/8 = 5/8."
          ],
          "example": "12 rows × 15 seats = 180 seats."
        },
        "problems": [
          {
            "q": "The main floor has 20 rows with 30 seats in each. How many seats is that?",
            "answer": "600",
            "hint": "20 × 30.",
            "skill": "Multiplying"
          },
          {
            "q": "The theater has 900 seats and the main floor has 600. How many seats are in the balcony?",
            "answer": "300",
            "hint": "900 − 600.",
            "skill": "Adding and subtracting"
          },
          {
            "q": "The light board sets each lamp in hundredths of full power. The ghost light is set to 35/100. Write that as a decimal.",
            "answer": "0.35",
            "hint": "35 hundredths: two places after the point.",
            "skill": "Decimals"
          },
          {
            "q": "The balcony has 300 seats in 10 equal rows. How many seats per row?",
            "answer": "30",
            "hint": "300 ÷ 10.",
            "skill": "Dividing"
          },
          {
            "q": "The stagehand counted 2/9 of the seats before the first knock and 4/9 after. What fraction of the seats is counted? (write a fraction)",
            "answer": "6/9",
            "accept": [
              "2/3"
            ],
            "hint": "Same bottom. Add the tops.",
            "skill": "Fractions"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "The idea runs through all of it",
            "points": [
              "Read to the end, then say in one sentence of your own what the whole report was about. Do that before you look at a single choice.",
              "The wrong answers are usually true. They cover one paragraph, or they are wider than anything the report says, or they repeat a story the report has already set aside.",
              "Four more moves follow: prove a claim with one sentence, say what a paragraph is for, work a word out from its sentence, and hold two paragraphs together."
            ],
            "example": "Three paragraphs about a locked room: who had the key, what the dust showed, how the window latch worked. 'The key hung on a hook' covers one paragraph. 'Locks can be picked' covers nothing. 'Nobody came in from outside' covers all three."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea of the whole report?",
              "choices": [
                "The ghost light is a bare bulb left burning in the middle of the stage all night.",
                "Old theaters are more likely to be haunted than new ones are.",
                "A building that people explain with a ghost has three noises in it, and the stagehand's job is to go and find out what they really are.",
                "The bulb is left on so the ghost can perform after everyone has gone home, and so that the ghost will not get angry with the people who work there."
              ],
              "answer": 2,
              "hint": "The job, the bulb, the three noises. One choice repeats a story the report then replaces with a plain reason, and one is a claim the report never makes at all.",
              "skill": "Central idea and evidence",
              "evidence": "The stagehand's first job is to decide whether to believe it."
            },
            {
              "q": "Claim: the ghost light is there to stop an accident, not to please anybody. Which sentence from the report best supports that claim?",
              "choices": [
                "Stagehands will tell you it is left on for the ghost, so the ghost can perform after everyone has gone home and will not get angry.",
                "On every stage in the world, when the last person leaves at night, one bare bulb on a tall stand is left burning in the middle of the stage.",
                "A stage is a raised platform with a drop at the front edge into the orchestra pit, and a person walking across it in total darkness can step off that edge.",
                "It is called the ghost light."
              ],
              "answer": 2,
              "hint": "One of these only gives the bulb its name. Find the sentence that names a danger the bulb is standing between people and.",
              "skill": "Finding details",
              "evidence": "A stage is a raised platform with a drop at the front edge into the orchestra pit, and a person walking across it in total darkness can step off that edge."
            },
            {
              "q": "Why does the report give the ghost's version of the bulb before it gives the safety book's version?",
              "choices": [
                "It lets the story stand for a moment and then replaces it with the plain reason, which is the move the whole report is built on.",
                "It proves the theater really does have a ghost in it, since a light is left burning on the stage for it every single night of the year.",
                "It explains how an orchestra pit is built into the front of a stage, and why there is a drop at that edge that a person could step off.",
                "It lists the jobs a stagehand has to do at the end of a night."
              ],
              "answer": 0,
              "hint": "Swap the two halves of the paragraph in your head and read it again. Something is lost. Ask what the order was buying.",
              "skill": "Author's purpose and structure",
              "evidence": "Stagehands will tell you it is left on for the ghost, so the ghost can perform after everyone has gone home and will not get angry."
            },
            {
              "q": "The last line in the book reads 'noises, three, to be found'. What do the words 'to be found' tell you about how the stagehand is treating them?",
              "choices": [
                "As three noises that have gone missing from the building.",
                "As three items that have to be reported to the new owners.",
                "As three things with causes waiting to be worked out, not three things to be frightened of.",
                "As three sounds nobody else in the building has ever heard."
              ],
              "answer": 2,
              "hint": "Those words are a plan, not a description. Ask what a person expects to happen next if they write 'to be found' instead of 'unexplained'.",
              "skill": "Word meanings",
              "evidence": "The stagehand opens it to a fresh page and writes the date and one line: noises, three, to be found."
            },
            {
              "q": "Paragraphs 1 and 3 together suggest what the stagehand has decided about the ghost. What is it?",
              "choices": [
                "The building is too dangerous to open by the end of the month.",
                "The noises are real and worth chasing down, and a ghost is not the explanation being looked for.",
                "The ghost is real, and the three noises are proof of it.",
                "The noises stop as soon as the ghost light is switched on."
              ],
              "answer": 1,
              "hint": "Paragraph one names the first job: decide whether to believe it. The last paragraph shows what actually got written in the book. Read the decision out of the writing.",
              "skill": "Reading between the lines",
              "evidence": "Tonight the stagehand walks the house, counting seats, and finds that the noises are real."
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
              "q": "The stagehand carries 4 seats on each of 6 trips. How many seats is that?",
              "answer": "24",
              "hint": "6 × 4.",
              "skill": "Multiplying"
            },
            {
              "q": "Every row takes 9 seats. The stagehand has 36 seats. How many rows can be filled?",
              "answer": "4",
              "hint": "How many 9s fit into 36?",
              "skill": "Dividing"
            },
            {
              "q": "The stagehand counted 377 ticket stubs in the morning and 477 in the evening. How many more in the evening?",
              "answer": "100",
              "hint": "477 − 377.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "Which is bigger, 5/6 or 3/6? (write a fraction)",
              "answer": "5/6",
              "hint": "Same bottom, so the bigger top wins.",
              "skill": "Fractions"
            },
            {
              "q": "A square frame is 5 feet on each side. How many feet is it all the way around?",
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
              "Decimal × decimal: multiply without the points, then count the decimal places in both numbers. 1.3 × 2.1: 13 × 21 = 273, two places, so 2.73.",
              "Percent of a number: turn the percent into a fraction of 100.",
              "A ratio tells you how many of one thing for each group of the other.",
              "Order of operations: parentheses, then multiply and divide, then add and subtract."
            ],
            "example": "3 × (12 − 5) + 8: parentheses first, 12 − 5 = 7; then 3 × 7 = 21; then add 8 to get 29."
          },
          "problems": [
            {
              "q": "A regular cue takes 3.2 seconds. A long one takes 1.4 times as long. How many seconds does the long one take?",
              "answer": "4.48",
              "hint": "Multiply 32 × 14 without the points, then put back 2 decimal places.",
              "skill": "Decimals"
            },
            {
              "q": "Out of every 100 rows, 25 are set aside. Out of 40 rows, how many is that?",
              "answer": "10",
              "hint": "40 is 0.4 hundreds, so 0.4 × 25.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The stagehand divides 72 minutes of work in the ratio 4 to 5. How many minutes is the larger share?",
              "answer": "40",
              "hint": "9 parts in all, so one part is 8 minutes.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The stagehand works out (9 − 2) × (6 + 3). What is it?",
              "answer": "63",
              "hint": "Each set of parentheses first, then multiply the two answers.",
              "skill": "Order of operations"
            },
            {
              "q": "Solve for x: 343 = x − 14",
              "answer": "357",
              "hint": "Add 14 to both sides.",
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
              "Below zero, going up adds and going down subtracts. Walk the number line one step at a time.",
              "A two-step equation: undo the taking away first, then undo the dividing by multiplying."
            ],
            "example": "x ÷ 8 − 13 = 3, so x ÷ 8 = 16, so x = 128."
          },
          "problems": [
            {
              "q": "The job needs 28 seconds in all, at 3.5 seconds for each cue. One cue is already done. How many cues are left?",
              "answer": "7",
              "hint": "28 ÷ 3.5 = 8 in all, then take the finished one off.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The rule says a count of rows may change by no more than 25%. Starting from 80, what is the highest count the rule allows?",
              "answer": "100",
              "hint": "25% of 80 is 20. Add it on.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The stage lift starts 4 feet above the stage floor and drops 2 feet on each of 5 cues. Where is it at the end, in feet? (below the floor is minus)",
              "answer": "-6",
              "accept": [
                "−6"
              ],
              "hint": "2 × 5 = 10 comes off 4.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: x ÷ 9 − 26 = 9",
              "answer": "315",
              "hint": "Add 26 to both sides, then multiply by 9.",
              "skill": "Equations"
            },
            {
              "q": "A drawing uses 1 inch for every 25 feet. How many inches are needed for 350 feet?",
              "answer": "14",
              "hint": "350 ÷ 25.",
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
            "example": "Through (0, 2) and (6, 14): y rises 12 while x runs 6, so the slope is 12 ÷ 6 = 2."
          },
          "problems": [
            {
              "q": "A line passes through (0, 20) and (5, 60). What is its slope?",
              "answer": "8",
              "hint": "Slope is the rise over the run: 40 ÷ 5.",
              "skill": "Linear relationships"
            },
            {
              "q": "One section of the theater has 7² seats. The stagehand counts two sections. How many seats is that?",
              "answer": "98",
              "hint": "7² is 49. Double it.",
              "skill": "Powers and roots"
            },
            {
              "q": "The stagehand goes 5 feet east and then 12 feet north. In a straight line, how far is that from the start, in feet?",
              "answer": "13",
              "hint": "The two legs make a right angle: 5² + 12² = 169.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "For what value of x do 3x + 5 and x + 19 come to the same number?",
              "answer": "7",
              "hint": "Set them equal, take x off both sides, then take 5 off.",
              "skill": "Equations"
            },
            {
              "q": "The stagehand writes 6 × 10^5, then counts ten times as many. Written out in full, what is the new number?",
              "answer": "6000000",
              "hint": "Ten times adds one to the power: 6 × 10^6.",
              "skill": "Powers and roots"
            }
          ]
        }
      },
      "orders": {
        "lesson": {
          "title": "Read all of it first",
          "points": [
            "Read every cue before you call the first.",
            "The last cue often changes everything."
          ],
          "example": "If cue 5 says 'type the first number you made', the second number never gets typed."
        },
        "skill": "Following directions",
        "steps": [
          "Write the number of seats in the house: 900.",
          "Divide by the width of the stage in feet: 60.",
          "Start a second number. Write the years the theater has been closed: 11.",
          "Multiply that by the noises written in the prompt book: 3.",
          "The prompt book keeps the number from step 2, not the one from step 4. Type your step 2 answer."
        ],
        "prompt": "Your answer:",
        "answer": "15",
        "hint": "Step 5 names which of the two numbers goes in the book, and it is not the one you worked out last."
      }
    },
    {
      "id": "theater-2",
      "title": "Footsteps in the Flies",
      "recon": {
        "lesson": {
          "title": "The explanation",
          "points": [
            "When the book explains a mystery, the explanation is a detail. Find the sentence where the stagehand figures it out.",
            "How a machine works: read the steps in order.",
            "A word about the stage is defined by what it does."
          ],
          "example": "'The knock was the arbor hitting the stop.' What made the knock? The arbor."
        },
        "title": "Prompt Book: Sixty Feet Up",
        "passage": [
          "Above the stage is a space as tall as the stage is wide, called the fly loft, and in it hang the ropes that lift scenery. Each piece of scenery hangs from a steel pipe. The pipe hangs from cables that run up to pulleys in the roof. From there the cables run down the back wall to a steel cage of weights. The weights are loaded until they balance the scenery exactly, so that one stagehand can raise a backdrop that weighs as much as a piano with one hand. The cage of weights is called the arbor. When a set is balanced, it floats.",
          "The knock from above the stage came every four minutes, slow and heavy. The stagehand took a lamp and the prompt book up to the fly gallery, a narrow walkway forty feet up. There the stagehand waited. At the fourth minute an arbor on the back wall moved: a few inches down, then a few inches up. The knock was its steel frame touching the stop at the bottom of its track. The set it balanced had been taken down eleven years ago and the weights had never been unloaded, so the arbor was heavier than the empty pipe it was tied to. That is why it sank, a little, every time the building's heating pipes expanded and let the rope slip.",
          "The fix took an hour: unload the weights, one iron brick at a time, until the pipe and the arbor balanced, and tie the rope off. The knock stopped. The stagehand wrote it in the book: noise one, found, arbor unbalanced, fixed. Two to go. Then, from the balcony, faint, the creak came again. On the stage below, in the ghost light, the piano played a single note."
        ],
        "questions": [
          {
            "q": "What is the arbor?",
            "choices": [
              "The steel pipe that a piece of scenery hangs from above the stage",
              "The steel cage of weights that balances the scenery",
              "The narrow walkway forty feet up where the stagehand waited with a lamp",
              "The cables that run up to the pulleys in the roof and down the wall"
            ],
            "answer": 1,
            "hint": "Paragraph 1, the sentence 'The cage of weights is called the arbor.'",
            "skill": "Finding details"
          },
          {
            "q": "How often did the knock come?",
            "choices": [
              "Every minute",
              "Every four minutes",
              "Every hour",
              "Once a night"
            ],
            "answer": 1,
            "hint": "The first sentence of paragraph 2.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 1, what is the 'fly loft'?",
            "choices": [
              "The narrow walkway that runs forty feet above the stage floor",
              "The tall space above the stage where scenery is lifted",
              "The balcony",
              "The steel pipe that a backdrop hangs from"
            ],
            "answer": 1,
            "hint": "The first sentence of paragraph 1.",
            "skill": "Word meanings"
          },
          {
            "q": "Why did the arbor sink a little every few minutes?",
            "choices": [
              "Because the scenery it once balanced was taken down eleven years ago and the weights came out with it",
              "Because the cables had stretched over eleven years",
              "Because it was heavier than the empty pipe, and the heating pipes expanding let the rope slip",
              "Because the pulley was oiled"
            ],
            "answer": 2,
            "hint": "The last two sentences of paragraph 2.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 1 mostly about?",
            "choices": [
              "The night the stagehand waited on the fly gallery for the knock",
              "How the fly system lifts scenery with balanced weights",
              "Why the heating pipes expand at night",
              "How the crew unloaded the weights one iron brick at a time to fix it"
            ],
            "answer": 1,
            "hint": "Paragraph 1 explains the ropes, pipes, pulleys and weights.",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Fly math",
          "points": [
            "Balance: weights must equal the scenery's weight.",
            "Different bottoms: make them the same first. 1/2 + 1/4 = 2/4 + 1/4 = 3/4.",
            "Times in an hour: 60 ÷ the minutes between. Every 5 minutes is 12 times an hour.",
            "Two-step: bricks to remove, then minutes to unload all of them."
          ],
          "example": "A 200-pound backdrop with 20-pound bricks needs 200 ÷ 20 = 10 bricks."
        },
        "problems": [
          {
            "q": "A backdrop weighs 400 pounds and each iron brick weighs 25 pounds. How many bricks balance it?",
            "answer": "16",
            "hint": "400 ÷ 25.",
            "skill": "Dividing"
          },
          {
            "q": "The knock came every 4 minutes. How many knocks in an hour?",
            "answer": "15",
            "hint": "60 ÷ 4.",
            "skill": "Dividing"
          },
          {
            "q": "The arbor held 16 bricks and the empty pipe needs only 4 to balance. How many bricks had to come out?",
            "answer": "12",
            "hint": "16 − 4.",
            "skill": "Adding and subtracting"
          },
          {
            "q": "Each brick takes 5 minutes to unload safely. How many minutes to unload 12 bricks?",
            "answer": "60",
            "hint": "12 × 5.",
            "skill": "Multiplying"
          },
          {
            "q": "The stagehand spent 1/3 of the hour in the fly gallery and 1/4 of it on the stage. How much of the hour is that? (write a fraction)",
            "answer": "7/12",
            "hint": "Make the bottoms the same: 1/3 is 4/12 and 1/4 is 3/12. Then add the tops.",
            "skill": "Fractions"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "Which sentence does the proving",
            "points": [
              "You are hunting for proof, not for matching words. A sentence can share half the claim's vocabulary and prove nothing.",
              "Read the claim, then read your pick straight after it. If a gap is still open, it is the wrong sentence.",
              "All four choices are real sentences from the report. True is where they all start, so true cannot be what decides it."
            ],
            "example": "Claim: the shop closed years ago. 'The sign is painted by hand' is true and proves nothing. 'The last delivery slip on the counter is dated 2011' proves it and ends the argument."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea that develops across the whole report?",
              "choices": [
                "The steel cage of weights that balances a piece of scenery is called the arbor, and it is loaded until it matches the weight hanging on the pipe exactly.",
                "A knock that sounded like something walking above the stage was a cage of weights left loaded for eleven years, and an hour's work ended it.",
                "Old buildings ought to be checked over by engineers before anyone reopens them to the public, because nobody knows what the years have done to them.",
                "The set the arbor balanced was still hanging on its pipe above the stage, which is why the weights on the back wall had been left loaded all this time."
              ],
              "answer": 1,
              "hint": "How the system works, what the knock turned out to be, what fixed it. One choice is a definition, and one says the opposite of a line in the middle paragraph.",
              "skill": "Central idea and evidence",
              "evidence": "The stagehand wrote it in the book: noise one, found, arbor unbalanced, fixed."
            },
            {
              "q": "Claim: the knock happened because the arbor and the pipe no longer balanced each other. Which sentence from the report best supports that claim?",
              "choices": [
                "At the fourth minute an arbor on the back wall moved: a few inches down, then a few inches up.",
                "The set it balanced had been taken down eleven years ago and the weights had never been unloaded, so the arbor was heavier than the empty pipe it was tied to.",
                "The knock from above the stage came every four minutes, slow and heavy.",
                "The cage of weights is called the arbor."
              ],
              "answer": 1,
              "hint": "One of these describes the knock, one shows the arbor moving, and one only gives it a name. None of those says why it started. Find the sentence that puts a weight on each side and says which side was heavier.",
              "skill": "Finding details",
              "evidence": "The set it balanced had been taken down eleven years ago and the weights had never been unloaded, so the arbor was heavier than the empty pipe it was tied to."
            },
            {
              "q": "Why does the report explain the counterweight system before it goes looking for the knock?",
              "choices": [
                "To show how much a painted backdrop weighs compared with a piano, which is the whole point of the first paragraph.",
                "To make sure an arbor moving a few inches in the next paragraph means something to the reader.",
                "To warn the reader that the fly gallery is dangerous to climb.",
                "To set this theater's stage against the stage of a modern one."
              ],
              "answer": 1,
              "hint": "Delete the first paragraph in your head and read the second. What can you no longer follow? That is the job the first one was doing.",
              "skill": "Author's purpose and structure",
              "evidence": "The weights are loaded until they balance the scenery exactly, so that one stagehand can raise a backdrop that weighs as much as a piano with one hand."
            },
            {
              "q": "The report says that when a set is balanced, 'it floats'. What does floats mean as it is used here?",
              "choices": [
                "It rests on the surface of water without sinking down into it",
                "It drifts slowly across the stage on its own",
                "It hangs so evenly that almost no effort will move it",
                "It is held up from below by moving air"
              ],
              "answer": 2,
              "hint": "Nothing here is in water. Earlier in the same paragraph, the report tells you what one person can do with one hand. Fit the word to that.",
              "skill": "Word meanings",
              "evidence": "The weights are loaded until they balance the scenery exactly, so that one stagehand can raise a backdrop that weighs as much as a piano with one hand."
            },
            {
              "q": "Paragraphs 1 and 3 together explain why simply unloading the weights was the whole repair. Why was that enough?",
              "choices": [
                "The iron bricks were the thing that had been knocking against the wall, and taking them out of the cage took the knocking away.",
                "The system only works when the weights match whatever hangs on the pipe, and the pipe is now empty.",
                "The rope had to be replaced before the pipe could be used again.",
                "The heating pipes stop expanding once the weights have come out, so the rope can no longer slip in its pulley."
              ],
              "answer": 1,
              "hint": "Paragraph one tells you what the weights are supposed to match. The last paragraph tells you what the stagehand took out and what stopped. Neither one alone explains why that worked.",
              "skill": "Reading between the lines",
              "evidence": "The fix took an hour: unload the weights, one iron brick at a time, until the pipe and the arbor balanced, and tie the rope off."
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
              "Fractions with the same bottom: add the tops."
            ],
            "example": "4 × 3 = 12, so 12 shared into 4 equal groups is 3 each."
          },
          "problems": [
            {
              "q": "The stagehand counts 6 line sets with 8 sandbags in each. How many sandbags is that?",
              "answer": "48",
              "hint": "6 × 8.",
              "skill": "Multiplying"
            },
            {
              "q": "48 sandbags are shared equally among 6 line sets. How many sandbags in each line set?",
              "answer": "8",
              "hint": "How many 6s make 48?",
              "skill": "Dividing"
            },
            {
              "q": "The stagehand counted 134 pounds of sandbags, then found 84 more pounds, then 11 more. How many pounds in all?",
              "answer": "229",
              "hint": "134 + 84 first. Then add 11.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "The stagehand finished 2/4 of the day's work before the break and 1/4 after. What fraction is done? (write a fraction)",
              "answer": "3/4",
              "hint": "Same bottom. Add the tops.",
              "skill": "Fractions"
            },
            {
              "q": "There were 700 pounds of sand at the start. 337 pounds have been used. How many pounds are left?",
              "answer": "363",
              "hint": "700 − 337.",
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
              "q": "The stagehand has 6 2/3 yards of velvet. Each seat cushion takes 2/3 of a yard. How many cushions can the stagehand cover?",
              "answer": "10",
              "hint": "Make 6 2/3 an improper fraction, 20/3. Then multiply by the flip of 2/3: 20/3 × 3/2.",
              "skill": "Fractions"
            },
            {
              "q": "Of 40 pounds, 75% are set aside. How many is that?",
              "answer": "30",
              "hint": "75% of 40: 75% is 75/100.",
              "skill": "Ratios and percent"
            },
            {
              "q": "Ropes and sandbags are kept in the ratio 3 to 4. If there are 12 ropes, how many sandbags?",
              "answer": "16",
              "hint": "12 ÷ 3 = 4 groups. Each group has 4 sandbags.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The stagehand works out 6 × (11 − 2) + 7. What is it?",
              "answer": "61",
              "hint": "Parentheses first, then multiply, then add.",
              "skill": "Order of operations"
            },
            {
              "q": "Solve for x: x + 261 = 750",
              "answer": "489",
              "hint": "Subtract 261 from both sides.",
              "skill": "Equations"
            }
          ]
        },
        "7": {
          "lesson": {
            "title": "Grade 7 numbers",
            "points": [
              "A unit rate is the total shared out: 21 hours for 6 jobs is 21 ÷ 6 = 3.5 hours a job.",
              "Percent change: find that percent of the starting number, then add it on or take it off.",
              "Multiplying or dividing with one minus sign gives a minus answer: 3 × (−5) = −15, and −15 ÷ 3 = −5.",
              "A two-step equation: undo the adding first, then undo the multiplying."
            ],
            "example": "6x + 5 = 59, so 6x = 54, so x = 9."
          },
          "problems": [
            {
              "q": "24 cues needed 54 seconds altogether. How many seconds is that for one cue?",
              "answer": "2.25",
              "hint": "A rate is the total shared out: 54 ÷ 24.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The stagehand counted 160 pounds on the first pass. On the second pass the number had risen by 50%. How many pounds is that?",
              "answer": "240",
              "hint": "50% of 160 is 80. Then add it on.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The boiler's water tank drops 12 liters every hour for 5 hours. What is the total change? (Write a drop as a negative number.)",
              "answer": "-60",
              "accept": [
                "−60"
              ],
              "hint": "5 hours of −12 each: 5 × (−12). One minus sign, so the answer is negative.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: 3x + 28 = 34",
              "answer": "2",
              "hint": "Take 28 off both sides first, then divide by 3.",
              "skill": "Equations"
            },
            {
              "q": "A round pan is 10 inches across. Using 3.14 for pi, how many inches is it around the edge?",
              "answer": "31.4",
              "hint": "Around the edge = 3.14 × the distance across. 3.14 × 10.",
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
              "q": "The stagehand starts with 12 pounds and adds 4 more every hour. After 4 hours, how many pounds are there?",
              "answer": "28",
              "hint": "This is the straight-line rule y = mx + b: 4 × 4 + 12.",
              "skill": "Linear relationships"
            },
            {
              "q": "A square pad has an area of 36 square feet. How long is one side, in feet?",
              "answer": "6",
              "hint": "A square's area is side × side. What number times itself makes 36?",
              "skill": "Powers and roots"
            },
            {
              "q": "The stagehand runs a cable from the top of a 7-yard post to a point 24 yards away on the ground. How long is the cable, in yards?",
              "answer": "25",
              "hint": "Right triangle: a² + b² = c². 7² + 24² = 49 + 576 = 625. The cable is the square root of that.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "Solve for x: 9x + 4 = 5x + 28",
              "answer": "6",
              "hint": "Take 5x off both sides to get 4x + 4 = 28, then take 4 off both sides and divide.",
              "skill": "Equations"
            },
            {
              "q": "A round tank has a radius of 5 feet and is 2 feet deep. Using 3.14 for pi, what is its volume in cubic feet? (volume = pi × radius × radius × depth)",
              "answer": "157",
              "hint": "3.14 × 5 × 5 = 78.5, then × 2.",
              "skill": "Area and perimeter"
            }
          ]
        }
      },
      "orders": {
        "lesson": {
          "title": "Ignore means go back",
          "points": [
            "When a step says to ignore an earlier one, go back to the total you had before it and carry on from there.",
            "Do the arithmetic in order."
          ],
          "example": "'Start with 20. Take off 5. Ignore that, and multiply 20 by 3.' The answer is 60, not 45."
        },
        "skill": "Following directions",
        "steps": [
          "Write the number of iron bricks loaded in the arbor: 16.",
          "Take off the bricks the empty pipe needs to balance: 4.",
          "Multiply by the pounds in one brick: 25.",
          "Ignore step 2. Nobody had unloaded a single brick in eleven years, so use all 16 bricks and multiply those by 25.",
          "Turn those pounds into hundreds of pounds by dividing by 100.",
          "Type what you are left with."
        ],
        "prompt": "Your answer:",
        "answer": "4",
        "hint": "Step 4 puts the four bricks back on. Multiply the full arbor by the pounds in a brick before you divide."
      }
    },
    {
      "id": "theater-3",
      "title": "The Piano",
      "recon": {
        "lesson": {
          "title": "Cause hiding in plain sight",
          "points": [
            "The explanation for a spooky thing is usually ordinary. Look for the ordinary thing the book names.",
            "Numbers about the piano are details.",
            "'How did the stagehand know' wants the clue in the book."
          ],
          "example": "'The dog barked whenever the mail truck came.' What made it bark? The mail truck."
        },
        "title": "Prompt Book: One Note, Every Night",
        "passage": [
          "The piano stands at the side of the stage, a grand, black, with its lid closed and eighty-eight keys under a strip of felt. It played one note last night, low, a single time, at 10:15, and the night before at 10:12. The stagehand has the times in the book. A piano makes sound when a key is pressed. A felt hammer inside flies up and hits a string, and the string shakes. For a note to play with the lid closed and nobody on the bench, something inside has to move a hammer.",
          "The stagehand opens the lid and waits with the lamp. At 10:14 the building's boiler kicks on, the way it does every night when the temperature drops, and warm air comes up through the old floor grate directly under the piano. Wood swells when it warms. One key near the bottom of the keyboard has a cracked wooden lever, and when the warm air reaches it the lever swells, shifts, and flicks the hammer up against the string. One low note. Then the wood settles and the piano is quiet until tomorrow.",
          "The fix is a piece of tape and a phone call to a piano tuner, and the note stops. The stagehand writes it in the book: noise two, found, cracked key and the boiler, fixed. Then, walking back through the dark house to the lobby, the stagehand hears the creak from the balcony again. This time, looking up, the stagehand sees a seat in the front row of the balcony fold down by itself, slowly, as if someone had just sat in it."
        ],
        "questions": [
          {
            "q": "How many keys does the piano have?",
            "choices": [
              "Eighty",
              "Ninety",
              "Eighty-eight",
              "Sixty"
            ],
            "answer": 2,
            "hint": "The first sentence of paragraph 1.",
            "skill": "Finding details"
          },
          {
            "q": "What time did the boiler kick on?",
            "choices": [
              "10:14",
              "10:12",
              "10:15",
              "Midnight"
            ],
            "answer": 0,
            "hint": "The second sentence of paragraph 2.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 1, what is the 'hammer' inside the piano?",
            "choices": [
              "A tool for fixing the lid",
              "A key",
              "A felt-covered part that flies up and hits a string to make a note",
              "The wooden lever under the key that swells when the warm air reaches it"
            ],
            "answer": 2,
            "hint": "The sentences about how a piano makes sound, with the 'felt hammer'.",
            "skill": "Word meanings"
          },
          {
            "q": "Why did the note play at nearly the same time every night?",
            "choices": [
              "Because the warm air from the floor grate reaches the piano at the same time every night and slowly loosens the felt strip over all the keys",
              "Because the stagehand wrote the times in the prompt book on both nights and the piano has played at the written time ever since the theater closed",
              "Because the boiler comes on at about the same time each night when the temperature drops, and the warm air makes the cracked key swell",
              "Because the lid was open"
            ],
            "answer": 2,
            "hint": "Paragraph 2, the second and fourth sentences together.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 2 mostly about?",
            "choices": [
              "How the stagehand found the real cause of the note",
              "The balcony seat",
              "The piano tuner",
              "The color of the piano"
            ],
            "answer": 0,
            "hint": "Paragraph 2 is the waiting, the boiler, and the explanation.",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Piano math",
          "points": [
            "Minutes between two clock times: count.",
            "Subtracting decimals: line up the points. 5.5 − 1.75 is 5.50 − 1.75 = 3.75.",
            "Strings: most keys have 3, so keys × 3 is roughly the count.",
            "Dollars an hour: the total cost ÷ the hours."
          ],
          "example": "9:48 to 9:55 is 7 minutes."
        },
        "problems": [
          {
            "q": "The note played at 10:12 one night and 10:15 the next. How many minutes later was the second?",
            "answer": "3",
            "hint": "From 12 to 15.",
            "skill": "Adding and subtracting"
          },
          {
            "q": "The piano's longest string is 78.5 inches and its shortest is 2.25 inches. How much longer is the longest string? (write a decimal)",
            "answer": "76.25",
            "hint": "Line up the points: 78.50 − 2.25.",
            "skill": "Decimals"
          },
          {
            "q": "Most keys strike 3 strings. If 80 keys have 3 strings each, how many strings is that?",
            "answer": "240",
            "hint": "80 × 3.",
            "skill": "Multiplying"
          },
          {
            "q": "The piano tuner charges $120 and takes 2 hours. How many dollars an hour is that?",
            "answer": "60",
            "accept": [
              "$60"
            ],
            "hint": "120 ÷ 2.",
            "skill": "Money and decimals"
          },
          {
            "q": "The boiler runs 1/4 of the night before midnight and 2/4 after. What fraction of the night does it run? (write a fraction)",
            "answer": "3/4",
            "hint": "Same bottom. Add the tops.",
            "skill": "Fractions"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "Why that paragraph, right there",
            "points": [
              "A paragraph is doing a job: setting a scene, giving a cause, comparing two things, walking through an order, or naming a problem and its answer.",
              "A single sentence can have a job too. A short line at the end of one paragraph can work as a hinge into the next.",
              "Take it out and see what breaks. Whatever you can no longer follow is what it was there for."
            ],
            "example": "A report about a break-in stops to explain how the lock works. That is not a lesson in locks. It is there so that 'the door was still locked from the inside' means something two paragraphs later."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea of the whole report?",
              "choices": [
                "A piano makes sound when a key is pressed and a felt hammer hits a string.",
                "An old piano should be tuned at least once a year.",
                "A note that seemed to play itself came from one cracked key, warm air and a boiler that starts up every night as the building cools.",
                "The note played because somebody was sitting at the bench in the dark."
              ],
              "answer": 2,
              "hint": "The times in the book, the boiler, the cracked lever. One choice explains how any piano works, and one is the possibility the first paragraph rules out.",
              "skill": "Central idea and evidence",
              "evidence": "The stagehand writes it in the book: noise two, found, cracked key and the boiler, fixed."
            },
            {
              "q": "Claim: the note is set off by something in the building that happens on a schedule. Which sentence from the report best supports that claim?",
              "choices": [
                "At 10:14 the building's boiler kicks on, the way it does every night when the temperature drops, and warm air comes up through the old floor grate directly under the piano.",
                "This time, looking up, the stagehand sees a seat in the front row of the balcony fold down by itself, slowly, as if someone had just sat in it.",
                "Wood swells when it warms.",
                "For a note to play with the lid closed and nobody on the bench, something inside has to move a hammer."
              ],
              "answer": 0,
              "hint": "A schedule needs a time and an 'every night'. Only one of these sentences carries both.",
              "skill": "Finding details",
              "evidence": "At 10:14 the building's boiler kicks on, the way it does every night when the temperature drops, and warm air comes up through the old floor grate directly under the piano."
            },
            {
              "q": "What job does the last sentence of the first paragraph do?",
              "choices": [
                "It explains how a felt hammer is fitted to the end of a key and what makes the hammer fly up when the key is pressed down.",
                "It shows that the stagehand has given up on finding a cause.",
                "It turns a strange event into a question with a shape: something inside the piano has to be moving a hammer.",
                "It lists the times at which the note was heard."
              ],
              "answer": 2,
              "hint": "Read the first sentence of the next paragraph straight after it. The two fit together like a question and the start of an answer.",
              "skill": "Author's purpose and structure",
              "evidence": "For a note to play with the lid closed and nobody on the bench, something inside has to move a hammer."
            },
            {
              "q": "The report says the boiler 'kicks on' at 10:14. What does kicks on mean as it is used here?",
              "choices": [
                "Is switched on by somebody in the building",
                "Bangs against the wall as it heats up",
                "Starts up suddenly, by itself",
                "Shuts itself down"
              ],
              "answer": 2,
              "hint": "Nothing is kicking anything. The rest of the sentence tells you what sets the boiler going and how often it happens. Fit a plain word to that.",
              "skill": "Word meanings",
              "evidence": "At 10:14 the building's boiler kicks on, the way it does every night when the temperature drops, and warm air comes up through the old floor grate directly under the piano."
            },
            {
              "q": "Paragraphs 1 and 2 together explain why it is always the same single low note. Why is it never a different one?",
              "choices": [
                "Only one key has a cracked lever, and that key sits near the bottom of the keyboard.",
                "The strip of felt covers every key except one.",
                "The warm air only reaches the strings at one end of the piano.",
                "The lid is closed, so only the lowest string can be heard through it."
              ],
              "answer": 0,
              "hint": "Paragraph one tells you the note is low and always the same. Paragraph two tells you how many keys are damaged and where that one sits. Put the two facts together.",
              "skill": "Reading between the lines",
              "evidence": "One key near the bottom of the keyboard has a cracked wooden lever, and when the warm air reaches it the lever swells, shifts, and flicks the hammer up against the string."
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
              "A whole is all its parts, like 3/3. If 1/3 is done, 2/3 is still to do."
            ],
            "example": "2 × 7 = 14, so 14 shared into 2 equal groups is 7 each."
          },
          "problems": [
            {
              "q": "The stagehand counted 4 keys yesterday and three times as many today. How many keys today?",
              "answer": "12",
              "hint": "Three times 4: 4 + 4 + 4.",
              "skill": "Multiplying"
            },
            {
              "q": "The stagehand packs 28 loose piano keys into boxes of 4. How many boxes is that?",
              "answer": "7",
              "hint": "How many 4s make 28?",
              "skill": "Dividing"
            },
            {
              "q": "The stagehand starts with 438 strings and uses 96. How many are left?",
              "answer": "342",
              "hint": "438 − 96.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "1/4 of the day's work was done yesterday. What fraction is still to do? (write a fraction)",
              "answer": "3/4",
              "hint": "The whole job is 4/4. Take 1/4 off it.",
              "skill": "Fractions"
            },
            {
              "q": "A square key mat is 9 squares on each side. How many squares is that?",
              "answer": "81",
              "hint": "9 rows of 9.",
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
              "q": "The stagehand has 18.9 seconds. Each cue takes 1.35 seconds. How many cues is that enough for?",
              "answer": "14",
              "hint": "Move both points 2 places to the right: 1890 ÷ 135.",
              "skill": "Decimals"
            },
            {
              "q": "20 of the 40 strings are set aside. What percent is that? (write just the number)",
              "answer": "50",
              "accept": [
                "50%"
              ],
              "hint": "20 out of 40, then out of 100.",
              "skill": "Ratios and percent"
            },
            {
              "q": "For every 2 keys there are 5 strings. There are 45 strings. How many keys?",
              "answer": "18",
              "hint": "45 ÷ 5 = 9 groups. Each group has 2 keys.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The stagehand works out 18 + 5 × 12. What is it?",
              "answer": "78",
              "hint": "Multiply before you add.",
              "skill": "Order of operations"
            },
            {
              "q": "Solve for x: 900 − x = 224",
              "answer": "676",
              "hint": "x is what is left when 224 is taken off 900.",
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
              "Below zero, going up adds and going down subtracts. Walk the number line one step at a time.",
              "A two-step equation: get the x part on its own first, then undo the multiplying."
            ],
            "example": "65 − 3x = 17, so 3x = 65 − 17 = 48, so x = 16."
          },
          "problems": [
            {
              "q": "One cue needs 2.5 seconds. How many seconds do 8 cues need?",
              "answer": "20",
              "hint": "8 × 2.5.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The stagehand counted 120 strings on the first pass and 180 on the second. By what percent did the count change? (write just the number)",
              "answer": "50",
              "accept": [
                "50%"
              ],
              "hint": "The change is 60. 60 out of 120, then out of 100.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The needle on the piano tuner's meter reads −14. How many steps up bring it back to zero?",
              "answer": "14",
              "hint": "From −14 up to 0.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: 37 − 2x = 15",
              "answer": "11",
              "hint": "Move 2x to the right and 15 to the left: 2x = 22.",
              "skill": "Equations"
            },
            {
              "q": "On the plan, 1 inch stands for 2 feet. The stage is really 12 feet long. How many inches is it on the plan?",
              "answer": "6",
              "hint": "12 ÷ 2.",
              "skill": "Ratios and percent"
            }
          ]
        },
        "8": {
          "lesson": {
            "title": "Grade 8 numbers",
            "points": [
              "A straight-line rule is y = mx + b: b is where you start, m is the change each step. If it goes down each step, take m away each time.",
              "A small 3 means three of the number multiplied: 2³ = 2 × 2 × 2 = 8.",
              "Pythagoras: in a right triangle a² + b² = c², and c is always the longest side.",
              "With x on both sides, move all the x's to one side first, then all the plain numbers to the other."
            ],
            "example": "Start with 35 and use 2 an hour: after 9 hours, 35 − 2 × 9 = 17 are left."
          },
          "problems": [
            {
              "q": "The piano tuner has 79 strings to tune and tunes 8 every hour. How many are left after 8 hours?",
              "answer": "15",
              "hint": "8 × 8 = 64 tuned, taken off 79.",
              "skill": "Linear relationships"
            },
            {
              "q": "A cube is 9 small cubes along every edge. How many small cubes make it up?",
              "answer": "729",
              "hint": "9³ means 9 × 9 × 9.",
              "skill": "Powers and roots"
            },
            {
              "q": "A 13-foot ladder runs from the top of a post to a point 12 feet away on the ground. How tall is the post, in feet?",
              "answer": "5",
              "hint": "a² = c² − b² = 169 − 144 = 25. Then take the square root.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "Solve for x: 3x = x + 12",
              "answer": "6",
              "hint": "Take x off both sides: 2x = 12. Then divide by 2.",
              "skill": "Equations"
            },
            {
              "q": "The theater sold 20,000 tickets last year. Written as 2 × 10 to a power, what is the power?",
              "answer": "4",
              "hint": "Count the zeros after 2.",
              "skill": "Powers and roots"
            }
          ]
        }
      },
      "orders": {
        "lesson": {
          "title": "When it will not come out even",
          "points": [
            "Do the arithmetic in order and write each result down.",
            "If the last step says to type a decimal, write the leftover half as .5, not as a remainder."
          ],
          "example": "15 divided by 2 is 7.5, not 7 R1."
        },
        "skill": "Following directions",
        "steps": [
          "Write the number of black keys on the piano: 36.",
          "Add the minute of the note on the first night — the book says 10:12, so 12.",
          "Take off the number of notes the piano plays each night: 1.",
          "Divide by the number of nights the stagehand heard it: 2.",
          "It will not come out even. Type it as a decimal, not as a whole number with a remainder."
        ],
        "prompt": "Your answer:",
        "answer": "23.5",
        "accept": [
          "23.50"
        ],
        "hint": "Halving an odd number leaves a half behind. Step 5 says how that half has to be written."
      }
    },
    {
      "id": "theater-4",
      "title": "The Seat in the Balcony",
      "recon": {
        "lesson": {
          "title": "Testing an idea",
          "points": [
            "When the book says the stagehand tested something, the test and its result are both details.",
            "A word about the seat is defined by how it works.",
            "'Why' questions: the reason is the mechanism the book describes."
          ],
          "example": "'The cup rattled when the train went by.' What made it rattle? The shaking from the train."
        },
        "title": "Prompt Book: Seat A-7",
        "passage": [
          "A theater seat folds. The part you sit on is hinged, with a spring that holds it up against the back when nobody is in it. It swings down when a person sits and swings back up when they stand. It is a simple machine, and it is a hundred years old. The spring in seat A-7 in the front row of the balcony is tired. The stagehand climbs to the balcony with the lamp, sits in A-7, stands up, and watches it swing up and stop halfway, held by a spring that has almost nothing left.",
          "A tired spring explains a seat that hangs. It does not explain a seat that folds down by itself. The stagehand thinks about what happens at 10:15 every night, and goes downstairs, and stands on the stage under the balcony, and stamps once, hard. Above, in the dark, a creak: the balcony floor is wood on iron beams, and the boiler pipes run under it. When the pipes bang as they warm, the whole front row shivers. The stagehand stamps again. A-7 creaks, tips, and folds slowly down, exactly as if someone had sat in it.",
          "Three noises, three explanations, all found in three nights with a lamp and a notebook, and not one of them was a ghost. The stagehand writes the last one in the book: noise three, found, tired spring and pipe vibration, seat to be replaced. Then adds a line under it, because the book will be read by whoever runs this stage next: the building talks. It is all pipes and springs and wood. Listen, and it will tell you what is wrong with it."
        ],
        "questions": [
          {
            "q": "What holds a theater seat up when nobody is in it?",
            "choices": [
              "A spring",
              "Glue",
              "A hinge with a pin through it",
              "A weight in the seat back"
            ],
            "answer": 0,
            "hint": "The second sentence of paragraph 1.",
            "skill": "Finding details"
          },
          {
            "q": "What did the stagehand do to test the idea?",
            "choices": [
              "Waited in the balcony until the boiler came on at a quarter past ten",
              "Stood on the stage under the balcony and stamped, hard",
              "Turned off the boiler and waited to see whether the seat still folded",
              "Called the piano tuner back and asked about the pipes under the floor"
            ],
            "answer": 1,
            "hint": "Paragraph 2, the sentence with 'stamps once'.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 1, what does 'hinged' mean?",
            "choices": [
              "Sprung so that it snaps up on its own",
              "Bolted down flat so that it cannot move at all",
              "Padded with cloth so it does not squeak",
              "Attached so it can swing on a pin"
            ],
            "answer": 3,
            "hint": "The seat 'swings down' and 'swings back up'; a hinge lets it swing.",
            "skill": "Word meanings"
          },
          {
            "q": "Why did the seat fold down at 10:15 every night?",
            "choices": [
              "Because the spring in seat A-7 has almost nothing left, and a hundred-year-old seat in the front row of a balcony will fold down on its own sooner or later",
              "Because the boiler pipes bang as they warm, the balcony floor shivers, and the tired spring cannot hold the seat up through the shaking",
              "Because the boiler comes on at 10:15 every night, and the warm air that comes up through the floor grate makes the wooden seat swell and drop",
              "Because the stagehand stamped"
            ],
            "answer": 1,
            "hint": "Paragraph 2, the sentences about the pipes and the front row.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 3 mostly about?",
            "choices": [
              "That every noise had an ordinary cause, and the advice the stagehand leaves in the book",
              "How the balcony floor is built of wood on iron beams with the boiler pipes running underneath it",
              "The stagehand stamping on the stage below and watching seat A-7 creak, tip and fold down slowly",
              "How a theater seat is built and why the spring in A-7 is tired"
            ],
            "answer": 0,
            "hint": "The first sentence of paragraph 3 sums up all three noises; the rest is the advice.",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Balcony math",
          "points": [
            "Seats in the front row: count them.",
            "Springs to replace: seats × 1.",
            "Cost: springs × dollars each.",
            "Two-step: seconds for all the seats, then ÷ 60 for minutes."
          ],
          "example": "20 seats × $5 a spring = $100."
        },
        "problems": [
          {
            "q": "The balcony front row has 30 seats and every spring is as old as A-7's. A new spring costs $8. How many dollars to replace all 30?",
            "answer": "240",
            "accept": [
              "$240"
            ],
            "hint": "30 × 8.",
            "skill": "Money and decimals"
          },
          {
            "q": "The balcony has 10 rows of 30 seats. The stagehand tests every seat in the first 3 rows. How many seats is that?",
            "answer": "90",
            "hint": "3 × 30.",
            "skill": "Multiplying"
          },
          {
            "q": "Testing a seat takes 20 seconds. How many minutes to test 90 seats?",
            "answer": "30",
            "hint": "90 × 20 = 1,800 seconds. Then 1,800 ÷ 60.",
            "skill": "Multi-step problems"
          },
          {
            "q": "The seat A-7 is the 7th seat in row A, the front row. Rows are lettered A, B, C. What number row is C?",
            "answer": "3",
            "hint": "A is 1, B is 2, C is 3.",
            "skill": "Adding and subtracting"
          },
          {
            "q": "The balcony floor is 60 feet wide and 25 feet deep. What is its area in square feet?",
            "answer": "1500",
            "accept": [
              "1,500"
            ],
            "hint": "60 × 25.",
            "skill": "Area and perimeter"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "When a word is doing a picture",
            "points": [
              "Cover the word with a finger and read the sentence with a hole in it. What belongs in the hole?",
              "Some words are painting a picture rather than giving a fact. A building that 'talks' has no voice. Ask what the picture is standing in for.",
              "Slot each choice into the sentence. Three of them will make the report say something it never said."
            ],
            "example": "'The kettle complained all morning.' Nothing complained. The sentence is telling you it whistled and rattled and would not stop, and you worked that out with no dictionary at all."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea that develops across the whole report?",
              "choices": [
                "A seat that folded down by itself turned out to be a worn spring and shaking pipes, and with it every noise in the building has a plain cause.",
                "The spring in seat A-7 has almost nothing left in it.",
                "A building a hundred years old is not safe for an audience until every spring, pipe and wooden beam in it has been pulled out and replaced with a new one.",
                "A tired spring on its own explains a seat folding down by itself, which is why the stagehand only had to sit in A-7 and watch what the worn spring did."
              ],
              "answer": 0,
              "hint": "The seat, the stamp on the stage, the line written for the next person. One of these is exactly what the second paragraph says is not true.",
              "skill": "Central idea and evidence",
              "evidence": "Three noises, three explanations, all found in three nights with a lamp and a notebook, and not one of them was a ghost."
            },
            {
              "q": "Claim: a worn spring on its own was not the answer. Which sentence from the report best supports that claim?",
              "choices": [
                "The spring in seat A-7 in the front row of the balcony is tired.",
                "It does not explain a seat that folds down by itself.",
                "The stagehand climbs to the balcony with the lamp, sits in A-7, stands up, and watches it swing up and stop halfway, held by a spring that has almost nothing left.",
                "The stagehand thinks about what happens at 10:15 every night, and goes downstairs, and stands on the stage under the balcony, and stamps once, hard."
              ],
              "answer": 1,
              "hint": "The claim says something is missing from an explanation. Look for the sentence that says the same thing in the report's own words.",
              "skill": "Finding details",
              "evidence": "It does not explain a seat that folds down by itself."
            },
            {
              "q": "The second paragraph opens with 'A tired spring explains a seat that hangs. It does not explain a seat that folds down by itself.' What job do those two sentences do?",
              "choices": [
                "They prove the seat must have been moved by a person, since nothing else in an empty building can fold a seat down.",
                "They explain how the hinge and the spring inside a theater seat are fitted together and how the two of them work.",
                "They compare seat A-7 with the seats down on the ground floor, where the springs are newer and no pipes run underneath.",
                "They show that half an answer is not an answer, and send the paragraph looking for the missing half."
              ],
              "answer": 3,
              "hint": "Look at what the stagehand does in the very next sentence. Those two lines are the reason for it.",
              "skill": "Author's purpose and structure",
              "evidence": "It does not explain a seat that folds down by itself."
            },
            {
              "q": "The last paragraph says 'the building talks'. What does that mean here?",
              "choices": [
                "Voices can be heard in the empty theater at night.",
                "The noises a building makes are signs of what is wrong with it, for anyone willing to read them.",
                "The stagehand talks aloud while working alone in the dark, and the empty building throws the words back as noises.",
                "The prompt book carries messages left in it by the stagehands who worked in the building before this one."
              ],
              "answer": 1,
              "hint": "Read the two lines that come after it. They tell you what the building is made of and what listening to it gets you. That is the whole meaning of the word.",
              "skill": "Word meanings",
              "evidence": "Then adds a line under it, because the book will be read by whoever runs this stage next: the building talks."
            },
            {
              "q": "Paragraphs 1 and 2 together explain why A-7 folds down and the seats beside it do not. Why that one seat?",
              "choices": [
                "The pipes shake the whole front row, but only A-7's spring is worn out enough to let a seat drop.",
                "A-7 is the only seat in the balcony with a hinge in it, so it is the only one in that row that is able to fold at all.",
                "A-7 sits directly above the boiler in the basement, so it shakes harder than any other seat in the row.",
                "A-7 was left folded down on the night the theater closed."
              ],
              "answer": 0,
              "hint": "One paragraph tells you what is different about this one seat. The other tells you what happens to the whole row at once. It takes both to explain why only one moves.",
              "skill": "Reading between the lines",
              "evidence": "the balcony floor is wood on iron beams, and the boiler pipes run under it. When the pipes bang as they warm, the whole front row shivers."
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
              "q": "The stagehand lays the seats out in 2 rows of 5. How many seats is that?",
              "answer": "10",
              "hint": "2 × 5.",
              "skill": "Multiplying"
            },
            {
              "q": "25 seats are set out in 5 equal rows. How many seats are in each row?",
              "answer": "5",
              "hint": "25 split into 5 equal parts.",
              "skill": "Dividing"
            },
            {
              "q": "The log shows 225 springs, then 92 more are added and 27 are taken off. What does the log show now?",
              "answer": "290",
              "hint": "Add 225 and 92 first, then take 27 off.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "Add: 1/6 + 2/6 (write a fraction)",
              "answer": "3/6",
              "hint": "Same bottom. 1 + 2 on top.",
              "skill": "Fractions"
            },
            {
              "q": "The plan calls for 600 springs. 210 are done and 27 more are under way. How many are still untouched?",
              "answer": "363",
              "hint": "Take 210 off 600, then take 27 off that.",
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
              "q": "A can of gold paint is 2/3 full. Each balcony rail takes 2/9 of a can. How many rails can the stagehand paint?",
              "answer": "3",
              "hint": "Flip the second fraction and multiply: 2/3 × 9/2. Then simplify.",
              "skill": "Fractions"
            },
            {
              "q": "10% of the springs counted is 20. How many were counted in all?",
              "answer": "200",
              "hint": "20 is 10 hundredths of the whole: 20 ÷ 10 × 100.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The stagehand counts 16 seats and 24 springs. In its simplest form, what is the ratio of seats to springs? (write it like 2:3)",
              "answer": "2:3",
              "accept": [
                "2 to 3"
              ],
              "hint": "Divide both by 8.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The stagehand works out (9 + 2) × 12. What is it?",
              "answer": "132",
              "hint": "Parentheses first, then multiply.",
              "skill": "Order of operations"
            },
            {
              "q": "Solve for x: 2x = 370",
              "answer": "185",
              "hint": "Divide both sides by 2.",
              "skill": "Equations"
            }
          ]
        },
        "7": {
          "lesson": {
            "title": "Grade 7 numbers",
            "points": [
              "How many fit: the time you have ÷ the time each one takes. 11 hours at 2.75 hours each is 11 ÷ 2.75 = 4.",
              "Working backward: if a count fell by a quarter, the new count is 75% of the old one, so divide by 0.75 to get back to the start.",
              "Multiplying or dividing with one minus sign gives a minus answer: 3 × (−5) = −15, and −15 ÷ 3 = −5.",
              "With parentheses, undo the outside first: divide both sides, then take off the number inside."
            ],
            "example": "4(x + 5) = 36, so x + 5 = 9, so x = 4."
          },
          "problems": [
            {
              "q": "The stagehand has 6 seconds to spend and each cue takes 0.5. How many cues is that enough for?",
              "answer": "12",
              "hint": "6 ÷ 0.5.",
              "skill": "Ratios and percent"
            },
            {
              "q": "A count of springs fell by 50% to 120. What was it before?",
              "answer": "240",
              "hint": "120 is 50% of the old count.",
              "skill": "Ratios and percent"
            },
            {
              "q": "Over 7 hours the boiler's water tank dropped 112 liters in all, the same amount each hour. What was the change each hour? (Write a drop as a negative number.)",
              "answer": "-16",
              "accept": [
                "−16"
              ],
              "hint": "Share −112 into 7 equal parts: −112 ÷ 7. One minus sign, so the answer is negative.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: (x + 24) × 8 = 256",
              "answer": "8",
              "hint": "Divide both sides by 8 first, then take 24 off.",
              "skill": "Equations"
            },
            {
              "q": "A round pan has a radius of 20 inches. Using 3.14 for pi, what is its area in square inches?",
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
              "Collect the x's first: 10x − 7x is 3x. Then undo the plain number."
            ],
            "example": "y = 4x + 3 when x = 5: 4 × 5 + 3 = 23."
          },
          "problems": [
            {
              "q": "The count of springs follows the rule y = 6x + 10, where x is the hour. What is y when x = 5?",
              "answer": "40",
              "hint": "Put 5 in for x: 6 × 5 + 10.",
              "skill": "Linear relationships"
            },
            {
              "q": "A cube has a volume of 1,331 cubic feet. How long is one edge, in feet?",
              "answer": "11",
              "hint": "What number times itself twice over makes 1,331?",
              "skill": "Powers and roots"
            },
            {
              "q": "A 13-foot ladder reaches the top of a 5-foot post. How far is the foot of the ladder from the base, in feet?",
              "answer": "12",
              "hint": "b² = c² − a² = 169 − 25 = 144. Then take the square root.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "Solve for x: 8x + 19 − 4x = 39",
              "answer": "5",
              "hint": "Collect the x's first: 4x + 19 = 39.",
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
          "title": "Letters as numbers",
          "points": [
            "Some steps turn a letter into a number: A is 1, B is 2, C is 3.",
            "Check the last step's 'unless' before you type."
          ],
          "example": "Row D, counting A as 1, is row 4."
        },
        "skill": "Following directions",
        "steps": [
          "The prompt book lists three noises: the knock, the note and the creak. Write how many that is.",
          "Multiply by the number of the seat in the balcony: 7.",
          "Add the row number, counting A as 1, so B is 2.",
          "Take away the number of nights it took to find all three: 3.",
          "Write that number down and type it, unless one of the three noises turned out to be a ghost, in which case type GHOST."
        ],
        "prompt": "Your answer:",
        "answer": "19",
        "hint": "Steps 1 to 4 are plain arithmetic. Then read the last paragraph of the log and decide whether step 5's rule applies."
      }
    },
    {
      "id": "theater-5",
      "title": "Opening Night",
      "recon": {
        "lesson": {
          "title": "The whole week, in order",
          "points": [
            "The last page looks back over the week. Questions will ask for counts, a word and a reason.",
            "Counts of cues and tickets are details.",
            "The main idea of the closing paragraph is what the writer wants you to keep."
          ],
          "example": "'The band played twelve songs to two hundred people.' How many songs? Twelve. Do not mix up the two numbers."
        },
        "title": "Prompt Book: Places",
        "passage": [
          "Opening night. Nine hundred seats and eight hundred and seventy tickets sold, which the box office says is the best in the building's history. The stagehand is in the wings with the prompt book open to a page of cues: forty-one of them, every light change, every curtain, every piece of scenery that flies in. Each one is numbered, and each one has the word that triggers it. The stage manager's job is to call them, one at a time, into a headset, and the whole show hangs on getting them in order.",
          "The week is in the book behind tonight's page. Show one: the ghost light and three noises. Show two: the arbor, unbalanced for eleven years, and the knock that went away when the weights came out. Show three: the piano and the cracked key and the boiler. Show four: seat A-7, a tired spring, and pipes that shake a balcony. Everything the building did, it did for a reason, and every reason is written down for the next person.",
          "The house lights go down. Cue one, the stagehand says, and the ghost light goes off for the first time in eleven years, and the stage goes black. Then cue two, and it fills with gold. Two hours and forty-one cues later the curtain comes down and the house stands up. Afterward, when the last person has gone, the stagehand walks to the middle of the empty stage, switches on the bare bulb, and leaves it burning. Not for a ghost. So that nobody, ever, walks off the edge in the dark. Same reason as always."
        ],
        "questions": [
          {
            "q": "How many tickets were sold for opening night?",
            "choices": [
              "Eight hundred and seventy",
              "Nine hundred, every seat in the building",
              "Forty-one, one for every cue in the show",
              "Eleven, one for each year it was closed"
            ],
            "answer": 0,
            "hint": "The second sentence of paragraph 1.",
            "skill": "Finding details"
          },
          {
            "q": "How many cues are in the show?",
            "choices": [
              "Nine",
              "Forty-one",
              "Eighty-eight, one for each key",
              "Nine hundred, one for each seat"
            ],
            "answer": 1,
            "hint": "Paragraph 1, the sentence with 'a page of cues'.",
            "skill": "Finding details"
          },
          {
            "q": "In paragraph 1, what is a 'cue'?",
            "choices": [
              "A pool stick",
              "A numbered signal for a light, curtain or scenery change, called at a set word",
              "The headset the stage manager talks into during the show",
              "The signal that the audience gives the stage manager by clapping at the end of a scene"
            ],
            "answer": 1,
            "hint": "The sentence describing the page of cues.",
            "skill": "Word meanings"
          },
          {
            "q": "Why does the stagehand leave the ghost light on at the end?",
            "choices": [
              "For the ghost",
              "Because the prompt book lists it as a cue",
              "So nobody walks off the edge of the stage in the dark",
              "Because the theater has left it burning every night for eleven years"
            ],
            "answer": 2,
            "hint": "The last three sentences of paragraph 3.",
            "skill": "Reading between the lines"
          },
          {
            "q": "What is paragraph 2 mostly about?",
            "choices": [
              "The tickets sold and the best night in its history",
              "The forty-one cues and how the stage manager calls them",
              "When the ghost light goes off and the stage fills with gold",
              "A look back at the four shows and what each noise turned out to be"
            ],
            "answer": 3,
            "hint": "Paragraph 2 lists show one through show four.",
            "skill": "Main idea"
          }
        ]
      },
      "nav": {
        "lesson": {
          "title": "Opening night math",
          "points": [
            "Volume of a box: length × width × height. 6 × 2 × 2 = 24 cubic feet.",
            "Cues an hour: cues ÷ hours.",
            "Ticket money: tickets × price.",
            "Round down when the question says so: 15 and a half becomes 15."
          ],
          "example": "300 tickets at $10 is 300 × 10 = $3,000."
        },
        "problems": [
          {
            "q": "The props are stored in a trunk 4 feet long, 3 feet wide and 3 feet tall. How many cubic feet does the trunk hold?",
            "answer": "36",
            "hint": "Length × width × height: 4 × 3 first, then times 3.",
            "skill": "Volume"
          },
          {
            "q": "Tickets cost $12 each. How many dollars did 870 tickets bring in?",
            "answer": "10440",
            "accept": [
              "10,440",
              "$10,440",
              "$10440"
            ],
            "hint": "870 × 12: 870 × 10 = 8,700, 870 × 2 = 1,740.",
            "skill": "Money and decimals"
          },
          {
            "q": "The show has 41 cues over 2 hours. About how many cues an hour is that? (round down)",
            "answer": "20",
            "hint": "41 ÷ 2 is 20 and a half. Round down.",
            "skill": "Dividing"
          },
          {
            "q": "The ghost light was off for 2 hours tonight after being on for 11 years. How many days is 11 years, using 365 days a year?",
            "answer": "4015",
            "accept": [
              "4,015"
            ],
            "hint": "11 × 365: 10 × 365 = 3,650, plus 365.",
            "skill": "Multiplying"
          },
          {
            "q": "About 1/2 of the 41 cues are light changes. Rounding down, how many light cues is that?",
            "answer": "20",
            "hint": "41 ÷ 2, rounded down.",
            "skill": "Fractions"
          }
        ]
      },
      "reconByGrade": {
        "7": {
          "lesson": {
            "title": "One fact here, one fact there",
            "points": [
              "The last question is never answered in one place. Plan on one fact from one paragraph and one from another.",
              "Say the two facts out loud, then say 'so'. Whatever follows 'so' is usually sitting there in the choices.",
              "A choice that needs something the report never mentions is out, however sensible it sounds on its own."
            ],
            "example": "Paragraph one: the gate is padlocked at nine. Paragraph three: the delivery comes at ten and is always waiting outside in the morning. So the driver has no key. Neither line says it alone."
          },
          "questions": [
            {
              "q": "Which sentence best states the central idea of the whole report?",
              "choices": [
                "The show can run because every strange thing the building did was explained and written down, and the bulb goes back on for the plain reason it always burned.",
                "Eight hundred and seventy of the nine hundred seats were sold for opening night, which the box office says is the best in the building's whole history since it opened in 1924.",
                "Every theater in the country should keep a prompt book with all of its cues written down in it, so that whoever comes next can run the show without being told a thing.",
                "The ghost light was switched off for good on opening night, and the empty stage was left dark after the last person had gone home for the first time in eleven years."
              ],
              "answer": 0,
              "hint": "The cues, the week behind tonight's page, the bulb at the end. One of these is a number from the first line, and one is undone by the last paragraph.",
              "skill": "Central idea and evidence",
              "evidence": "Everything the building did, it did for a reason, and every reason is written down for the next person."
            },
            {
              "q": "Claim: the week's work was written up for somebody else's benefit, not the stagehand's. Which sentence from the report best supports that claim?",
              "choices": [
                "The stagehand is in the wings with the prompt book open to a page of cues: forty-one of them, every light change, every curtain, every piece of scenery that flies in.",
                "Everything the building did, it did for a reason, and every reason is written down for the next person.",
                "The stage manager's job is to call them, one at a time, into a headset, and the whole show hangs on getting them in order.",
                "The week is in the book behind tonight's page."
              ],
              "answer": 1,
              "hint": "The claim is about who the writing is for. Only one of these sentences points at a future reader.",
              "skill": "Finding details",
              "evidence": "Everything the building did, it did for a reason, and every reason is written down for the next person."
            },
            {
              "q": "Why is the second paragraph written as a short list of four 'shows'?",
              "choices": [
                "It gives the order in which four different plays will be performed.",
                "It gathers the whole week into one place, so a run of ordinary answers stands right next to tonight's forty-one cues.",
                "It explains how a stage manager calls a cue into a headset.",
                "It lists the repairs that are still waiting to be done in the building before the new owners can call the whole job finished."
              ],
              "answer": 1,
              "hint": "None of those four lines is new to you. Ask why a writer would repeat things the reader already knows, and where that paragraph has been placed.",
              "skill": "Author's purpose and structure",
              "evidence": "The week is in the book behind tonight's page."
            },
            {
              "q": "The report ends: 'Not for a ghost. So that nobody, ever, walks off the edge in the dark. Same reason as always.' What does 'Same reason as always' mean here?",
              "choices": [
                "The stagehand has always been uneasy about the dark.",
                "The theater has kept to the same routine every single night since the evening it reopened.",
                "The bulb has always been about safety, whatever people say about ghosts.",
                "The reason for the bulb has finally been changed to a new one."
              ],
              "answer": 2,
              "hint": "The word 'always' is pointing at something older than this week. Ask which of the two explanations for the bulb has been the true one the whole time.",
              "skill": "Word meanings",
              "evidence": "So that nobody, ever, walks off the edge in the dark."
            },
            {
              "q": "Paragraphs 2 and 3 together explain why the stagehand switches the bare bulb back on after the audience has gone. Why?",
              "choices": [
                "The ghost has to be given its turn on the stage once the audience leaves.",
                "The bulb has to stay on so the cleaning crew can see the seats.",
                "The bulb warms the stage so that the old boards do not crack.",
                "The week showed that every strange thing here has a plain cause, and the plain cause of the bulb is a drop at the front edge of the stage."
              ],
              "answer": 3,
              "hint": "One paragraph is a list of ordinary answers. The other has the stagehand doing an ordinary thing and saying who it is not for. Hold the two together.",
              "skill": "Reading between the lines",
              "evidence": "Not for a ghost."
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
              "q": "Every act needs 5 cues, and there are 5 acts. How many cues is that?",
              "answer": "25",
              "hint": "5 groups of 5, so 5 × 5.",
              "skill": "Multiplying"
            },
            {
              "q": "The stagehand splits 50 cues in half. How many cues is one half?",
              "answer": "25",
              "hint": "Half of 50.",
              "skill": "Dividing"
            },
            {
              "q": "The stagehand needs 600 lights and has 387. How many more are needed?",
              "answer": "213",
              "hint": "600 − 387.",
              "skill": "Adding and subtracting"
            },
            {
              "q": "The day's work is cut into 6 equal parts and the stagehand has finished 5 of them. What fraction is done? (write a fraction)",
              "answer": "5/6",
              "hint": "5 parts out of 6.",
              "skill": "Fractions"
            },
            {
              "q": "A floor is 5 squares wide and 5 squares long. The stagehand has covered 5 squares. How many squares are left to cover?",
              "answer": "20",
              "hint": "5 × 5 squares in all, then take 5 off.",
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
            "example": "2 × (15 − 7) + 6: parentheses first, 15 − 7 = 8; then 2 × 8 = 16; then add 6 to get 22."
          },
          "problems": [
            {
              "q": "The plan allows 38.5 seconds. The stagehand uses 7.85 seconds on the first cue and 8.8 on the second. How many seconds are left?",
              "answer": "21.85",
              "hint": "Add the two amounts used first, then take that from 38.5. Line up the points.",
              "skill": "Decimals"
            },
            {
              "q": "Of 60 lights, 75% are struck off the list. How many are left on it?",
              "answer": "15",
              "hint": "75% of 60 is 45. Take that off 60.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The stagehand shares 8 tickets between two teams in the ratio 1 to 3. How many does the smaller share get?",
              "answer": "2",
              "hint": "1 + 3 = 4 parts. 8 ÷ 4 = 2 for one part.",
              "skill": "Ratios and percent"
            },
            {
              "q": "The stagehand works out 5 × 9 − 4 × 3. What is it?",
              "answer": "33",
              "hint": "Do both multiplications first, then subtract.",
              "skill": "Order of operations"
            },
            {
              "q": "Solve for x: x + 256 + 42 = 750",
              "answer": "452",
              "hint": "Add 256 and 42 first, then take that off 750.",
              "skill": "Equations"
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
            "example": "3(x + 7) = 33, so x + 7 = 11, so x = 4."
          },
          "problems": [
            {
              "q": "16 cues took 20 seconds. At the same rate, how many seconds would 28 cues take?",
              "answer": "35",
              "hint": "One cue takes 20 ÷ 16 = 1.25. Then × 28.",
              "skill": "Ratios and percent"
            },
            {
              "q": "20% of the 320 lights were added. How many lights was that?",
              "answer": "64",
              "hint": "20% of 320: 20/100 × 320.",
              "skill": "Ratios and percent"
            },
            {
              "q": "One ledger reads −5 cues and another reads −15 cues. How many cues apart are they?",
              "answer": "10",
              "hint": "From −15 up to −5.",
              "skill": "Negative numbers"
            },
            {
              "q": "Solve for x: 5(x + 30) = 210",
              "answer": "12",
              "hint": "Divide both sides by 5 to get x + 30 = 42.",
              "skill": "Equations"
            },
            {
              "q": "On the plan, 8 inches stand for 32 feet. How many feet does 1 inch stand for?",
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
              "A list that adds the same amount each step follows a straight-line rule. The 1st number is the start, so the 10th number is 9 steps on.",
              "Parentheses first, then the power: (2 × 5)² is 10² = 100.",
              "Pythagoras: in a right triangle a² + b² = c², and c is always the longest side.",
              "Collect the x's first: 6x − 2x is 4x, and an x on its own means 1x."
            ],
            "example": "3, 10, 17, … adds 7 each step. The 5th number is 4 steps on: 3 + 4 × 7 = 31."
          },
          "problems": [
            {
              "q": "The count of lights goes 8, 15, 22, 29, and on. What is the 12th number in the list?",
              "answer": "85",
              "hint": "It starts at 8 and adds 7 each step. The number you want is 11 steps on from 8.",
              "skill": "Linear relationships"
            },
            {
              "q": "What is (6 × 3)²?",
              "answer": "324",
              "hint": "6 × 3 = 18 first, then square it.",
              "skill": "Powers and roots"
            },
            {
              "q": "A right triangle has short sides of 8 and 15 feet. How long is its longest side, in feet?",
              "answer": "17",
              "hint": "8² + 15² = 289. The longest side is the square root of that.",
              "skill": "Pythagorean theorem"
            },
            {
              "q": "Solve for x: 3x − x = 14",
              "answer": "7",
              "hint": "x is the same as 1x, so 3 − 1 = 2, so 2x = 14.",
              "skill": "Equations"
            },
            {
              "q": "Which is bigger, 8 × 10^3 or 7 × 10^4? Write the bigger one out in full.",
              "answer": "70000",
              "hint": "7 × 10^4 is ten times 7 × 10^3, and 8 is not ten times 7.",
              "skill": "Powers and roots"
            }
          ]
        }
      },
      "orders": {
        "lesson": {
          "title": "The last cue wins",
          "points": [
            "Read every cue before you call the first.",
            "If the last cue asks for a word, a number is wrong."
          ],
          "example": "'Type the name of the theater, in capital letters' means a word, not the number you worked out."
        },
        "skill": "Following directions",
        "steps": [
          "Write the number of cues: 41.",
          "Subtract the number of noises found this week: 3.",
          "Divide by 2.",
          "Add the tickets sold, counted in hundreds and rounded down: 8.",
          "Ignore steps 1 to 4. Type the name of the one bare bulb left burning on the stage, two words, in capital letters."
        ],
        "prompt": "Your answer:",
        "answer": "GHOST LIGHT",
        "accept": [
          "ghost light",
          "Ghost light",
          "GHOSTLIGHT",
          "ghostlight",
          "the ghost light",
          "THE GHOST LIGHT",
          "ghost light.",
          "ghost-light",
          "GHOST-LIGHT"
        ],
        "hint": "Step 5 throws away the arithmetic. The bulb is the one that is left burning on an empty stage."
      }
    }
  ]
};
if (window.BASECAMP_MISSIONS && window.BASECAMP_MISSIONS.register) window.BASECAMP_MISSIONS.register(C);
else (window.BASECAMP_CAMPAIGNS_PENDING = window.BASECAMP_CAMPAIGNS_PENDING || []).push(C);
})();
