// Odyssey help — three tiers of explaining, keyed to the skill, not the question.
// Tier 1 NUDGE: one line, no method. Tier 2 METHOD: the steps, named. Tier 3 WORKED: one problem solved slowly.
// The child controls the escalation ("Still stuck?"). Asking for help is never penalized. Written in the companion's voice.
window.BASECAMP_HELP = {
  version: 1,
  skills: {
    "Finding details": {
      nudge: "The answer is written in the report. Find the key word from the question and read that sentence again.",
      method: { title: "Hunt, don't wander", points: [
        "Pick the most unusual word in the question. That is your key word.",
        "Scan the report for that word. Do not read every line, just look for it.",
        "When you find it, read the whole sentence it is in, and the one after.",
        "Match what it says to the choices. The right choice says the same thing in different words." ],
        example: "Question: 'How many days did the crew wait?' Key word: 'wait'. Scan for it. 'They waited three days for the storm to pass.' Answer: three days." },
      worked: { title: "One question, slowly", intro: "Report: 'Ravens can live to be over twenty years old in the wild. They eat almost anything, from berries to leftover pizza. A raven's call is deeper than a crow's.' Question: 'What is one thing ravens eat?'", steps: [
        "The key word is 'eat'. I do not need the whole report, I need the sentence with 'eat' in it.",
        "Scanning. Line 2: 'They eat almost anything, from berries to leftover pizza.' Found it.",
        "The sentence gives two examples: berries, and leftover pizza. Either one answers the question.",
        "Now the choices. 'Fish' is not in the report. 'Berries' is. That is the answer, and I can point to the line that proves it." ] }
    },
    "Word meanings": {
      nudge: "Cover the word and read the sentence around it. What word would fit in that hole?",
      method: { title: "Use the sentence as a clue", points: [
        "Read the sentence the word is in, plus the sentence before and after.",
        "Ask: what is happening here? The word has to fit that.",
        "Try each choice in the sentence. Only one keeps the sentence making sense.",
        "Look for a part you know. 'Un-' means not. '-less' means without. 'Re-' means again." ],
        example: "'The trail was so steep the ranger had to scramble up on hands and feet.' Scramble must mean a kind of climbing, because that is what hands and feet on a steep trail do." },
      worked: { title: "One word, slowly", intro: "Sentence: 'The lantern was feeble, so the keeper could barely see the steps.' What does 'feeble' mean?", steps: [
        "I cover the word. 'The lantern was ___, so the keeper could barely see.'",
        "Barely see. So the lantern is not doing its job. The word must mean weak or dim.",
        "Try the choices. 'Bright'? A bright lantern would let him see. No. 'Weak'? A weak lantern means barely seeing. Yes.",
        "The sentence told me. The word 'so' connects the lantern to the problem, and the problem is not enough light." ] }
    },
    "Reading between the lines": {
      nudge: "The report does not say it straight out. Ask: what would have to be true for this to happen?",
      method: { title: "Clue plus what you know", points: [
        "Find the clue in the report. A detail that hints at something without saying it.",
        "Add what you already know about the world.",
        "Clue + what you know = the answer. That is all reading between the lines is.",
        "Check it: could you explain to someone why the report makes you think that?" ],
        example: "'Sitka fluffed up her feathers and tucked her beak under her wing.' It never says cold. But birds fluff up to keep warm. Clue plus what I know: it was cold." },
      worked: { title: "One inference, slowly", intro: "Report: 'By the third night the crew stopped joking. They ate in silence and checked the rope twice before every climb.' Question: How did the crew feel by the third night?", steps: [
        "Nothing says 'scared' or 'tired'. I need clues. Clue 1: they stopped joking. Clue 2: silence. Clue 3: checking the rope twice.",
        "What I know: people joke when relaxed and go quiet when worried. Checking equipment twice means you are being careful because something could go wrong.",
        "Clues plus what I know: the crew was worried, or nervous. Not 'excited', not 'bored'.",
        "Proof: I can point to three lines that show it. That is how you know it is not a guess." ] }
    },
    "Main idea": {
      nudge: "What is the whole report about, in one sentence? Not one detail, the big thing they all point to.",
      method: { title: "Find what every paragraph points at", points: [
        "Read the first and last sentence of the report. The main idea usually lives in one of them.",
        "Ask: what do all the details have in common? The main idea is the umbrella over them.",
        "A detail is one fact. A main idea is what the facts add up to.",
        "Test a choice: if it only covers one paragraph, it is a detail, not the main idea." ],
        example: "A report tells you glaciers move, glaciers carve valleys, and glaciers leave lakes. The main idea is not 'glaciers leave lakes'. It is 'glaciers shape the land'." },
      worked: { title: "One main idea, slowly", intro: "Report: 'Puffins fly fast but land badly. They dig burrows instead of building nests. They can hold a dozen fish crosswise in their beak.' What is the main idea?", steps: [
        "Three facts: fast flyers, burrow diggers, fish holders. Each one is a detail.",
        "What do they have in common? They are all surprising things a puffin can do.",
        "Choice 'Puffins hold fish in their beak' covers only line 3. That is a detail.",
        "Choice 'Puffins are unusual birds in several ways' covers all three lines. That is the umbrella. That is the main idea." ] }
    },
    "Central idea and evidence": {
      nudge: "The central idea is not sitting in one sentence. It is the thing all the paragraphs are building together. Ask what the writer keeps coming back to.",
      method: { title: "Name each paragraph, then name the whole", points: [
        "Give each paragraph a label of about four words. What is this one about?",
        "Put the labels side by side. What do all of them serve? That is the central idea.",
        "Too narrow is the most common wrong answer: it covers one label and ignores the others. Too broad covers things the report never mentions.",
        "Then find your evidence. One sentence you could point to. If you cannot point at a line, you have a feeling, not an idea." ],
        example: "Labels for three paragraphs: 'the harbor freezes in November', 'the ferry stops running', 'supplies come by plane instead'. Each one alone is a detail. Together they are about how the freeze changes the way the town gets its supplies. That is the central idea." },
      worked: { title: "One central idea, slowly", intro: "Report, three paragraphs. (1) 'A firehose weighs almost nothing empty and eighty pounds full.' (2) 'Crews train to drag a charged line up stairs, because a hose that stops moving is a hose nobody is using.' (3) 'The drill is timed, and the time that counts is the time from the truck to the water hitting the fire.' Question: what is the central idea?", steps: [
        "Label them. One: an empty hose is light, a full one is heavy. Two: crews train to move a heavy line. Three: the drill is timed truck to water.",
        "Now hold the three labels together. Weight, training, timing. What are they all in service of? Getting water on the fire fast even though the hose is heavy.",
        "Test the choices against that. 'A firehose weighs eighty pounds full' is true, and it is label one only. Too narrow, so it is a detail, not the idea.",
        "'Firefighting is dangerous work' is bigger than the report and the report never says it. Too broad. The idea that covers all three is the one about moving a heavy hose fast, and I can point to paragraph three to prove the speed part." ] }
    },
    "Author's purpose and structure": {
      nudge: "Do not ask what the paragraph says. Ask what job it is doing, and what would be missing if it were deleted.",
      method: { title: "Ask what job the paragraph does", points: [
        "Every paragraph is in the report on purpose. Common jobs: set the scene, give an example, explain a cause, compare two things, or lay out a problem and what was done about it.",
        "Read it, then finish this sentence: if this paragraph were gone, the reader would not know ___. That blank is its job.",
        "Watch the shape words. 'Because' and 'so' mean cause and effect. 'But', 'while' and 'instead' mean comparison. 'First, then, by morning' means sequence. 'The trouble was' means a problem is coming.",
        "A choice that only repeats what the paragraph says is describing it, not naming its job. Cross that one off first." ],
        example: "A paragraph about one plane that flew into ash and lost its engines comes right after a paragraph explaining that ash is sharp rock. Its job is not to tell a plane story. Its job is to show what that sharpness does in the real world, which is why the writer put it second." },
      worked: { title: "One paragraph, slowly", intro: "Paragraph two of a report reads: 'The wall held. It had been built after the last flood for exactly this, and the crews had been warned two days early, so they moved the tanks in time.' Question: why did the author include this paragraph?", steps: [
        "First, what would be missing without it? Without it I would know a flood came, but not that anything worked. So its job is about the result.",
        "Now the shape words. 'Because', 'for exactly this', 'so they moved the tanks in time'. Those are cause and effect words. The warning caused the move, the wall caused the hold.",
        "So the job is: show that the warning did what it was built to do. That is the author making a point, not just adding a fact.",
        "Check the choices. 'To describe a wall' repeats the paragraph and names no job. 'To explain how floods form' is not in the paragraph at all. The one that says the author is showing the warning paid off is the job the paragraph is doing." ] }
    },
    "Following directions": {
      nudge: "Read every step before you do anything. Count them. Then look at the last one again.",
      method: { title: "Read all of it first", points: [
        "Read every step before doing step 1. Every single one.",
        "Count the steps. The last one often changes everything that came before.",
        "Look for words that flip the job: 'ignore', 'instead', 'only', 'unless', 'except'.",
        "Then do exactly what it says, in order, nothing extra." ],
        example: "Step 4 says 'ignore steps 1 to 3 and just write your callsign'. If you did step 1 first, you did work you did not need to. Reading first saved you." },
      worked: { title: "One set of orders, slowly", intro: "Steps: 1. Add 20 and 30. 2. Double it. 3. Subtract 10. 4. If your answer is above 50, write 'HIGH' instead of the number.", steps: [
        "I read all four before touching anything. Step 4 has 'instead'. That is a flip word. I keep it in mind.",
        "Step 1: 20 + 30 = 50. Step 2: double, 100. Step 3: 100 − 10 = 90.",
        "Step 4: is 90 above 50? Yes. So I write 'HIGH', not 90.",
        "If I had skipped reading step 4, I would have written 90 and been wrong with the right arithmetic. Reading first is the whole trick." ] }
    },
    "Adding and subtracting": {
      nudge: "Line the numbers up on the right. Ones under ones, tens under tens.",
      method: { title: "Line it up, carry and borrow", points: [
        "Write the numbers one above the other, right edges lined up.",
        "Add or subtract one column at a time, starting on the right.",
        "Adding: if a column makes 10 or more, write the ones digit and carry the 1 to the next column.",
        "Subtracting: if the top digit is smaller, borrow 1 from the next column to the left. It becomes 10 in your column.",
        "Across zeros: borrow from the first non-zero digit to the left, and every zero in between becomes 9." ],
        example: "503 − 247. The 3 cannot lose 7. Borrow from the 5: it becomes 4, the 0 becomes 9, the 3 becomes 13. Now 13 − 7 = 6, 9 − 4 = 5, 4 − 2 = 2. Answer 256." },
      worked: { title: "One subtraction, slowly", intro: "A rope is 400 feet long. The crew uses 168 feet. How much is left?", steps: [
        "Left means subtract: 400 − 168. I line them up, 400 on top.",
        "Ones column: 0 − 8. Cannot. I need to borrow, but the tens digit is 0 too. Go left to the 4.",
        "The 4 becomes 3. The tens 0 becomes 9. The ones 0 becomes 10. Now the top row reads 3, 9, 10.",
        "Ones: 10 − 8 = 2. Tens: 9 − 6 = 3. Hundreds: 3 − 1 = 2. Answer: 232 feet.",
        "Check by adding back: 232 + 168 = 400. It works." ] }
    },
    "Multiplying": {
      nudge: "Split one number into easy pieces. Tens first, then ones, then add the pieces.",
      method: { title: "Break it apart", points: [
        "Split the harder number into tens and ones. 24 becomes 20 and 4.",
        "Multiply each piece by the other number.",
        "Add the pieces together.",
        "Times 10 just adds a zero. Times 5 is half of times 10. Use those shortcuts." ],
        example: "24 × 15. 24 × 10 = 240. 24 × 5 = 120 (half of 240). 240 + 120 = 360." },
      worked: { title: "One multiplication, slowly", intro: "Each crate holds 36 darts. There are 14 crates. How many darts?", steps: [
        "14 crates of 36 means 36 × 14. I split the 14 into 10 and 4.",
        "36 × 10 = 360. Just add a zero.",
        "36 × 4. Split again if I want: 30 × 4 = 120, 6 × 4 = 24, so 144.",
        "Add the pieces: 360 + 144 = 504 darts.",
        "Does it make sense? 36 × 14 is a bit more than 36 × 10 = 360 and less than 40 × 15 = 600. 504 is in between. Good." ] }
    },
    "Dividing": {
      nudge: "Dividing is sharing equally. Ask: how many groups of the small number fit inside the big one?",
      method: { title: "Share equally", points: [
        "Division asks: how many times does the small number fit into the big one?",
        "Use multiplication you know. For 96 ÷ 8, think '8 times what is 96?'",
        "Big numbers: peel off easy chunks. 8 × 10 = 80, that leaves 16, and 8 × 2 = 16. So 10 + 2 = 12.",
        "Whatever is left over that will not share is the remainder." ],
        example: "132 ÷ 6. 6 × 20 = 120. Left: 12. 6 × 2 = 12. So 20 + 2 = 22." },
      worked: { title: "One division, slowly", intro: "The crew has 156 feet of rope to cut into 12-foot pieces. How many pieces?", steps: [
        "How many 12s fit in 156? That is 156 ÷ 12.",
        "Peel off an easy chunk. 12 × 10 = 120. That leaves 156 − 120 = 36.",
        "How many 12s in 36? 12 × 3 = 36. Exactly.",
        "Add the chunks: 10 + 3 = 13 pieces, nothing left over.",
        "Check: 13 × 12 = 130 + 26 = 156. It works." ] }
    },
    "Fractions": {
      nudge: "Same bottom number? Add or subtract only the tops. The bottom stays.",
      method: { title: "Bottoms and tops", points: [
        "The bottom number says how many equal pieces. The top says how many you have.",
        "Same bottom: add or subtract the tops, keep the bottom. 3/8 + 2/8 = 5/8.",
        "Different bottoms: change them to the same bottom first. 1/2 + 1/3 = 3/6 + 2/6 = 5/6.",
        "Fraction of a number: divide by the bottom, multiply by the top. 3/4 of 20 is 20 ÷ 4 = 5, then 5 × 3 = 15.",
        "A fraction equals 1 when top and bottom match. 8/8 is one whole." ],
        example: "A pack is 5/8 full. You add 2/8 more. 5/8 + 2/8 = 7/8. One more eighth would fill it." },
      worked: { title: "One fraction problem, slowly", intro: "A water tank holds 24 gallons. It is 3/4 full. How many gallons are in it?", steps: [
        "3/4 of 24. The bottom is 4, so first I split 24 into 4 equal pieces: 24 ÷ 4 = 6. Each quarter is 6 gallons.",
        "The top is 3, so I have 3 of those pieces: 6 × 3 = 18.",
        "18 gallons in the tank. The empty quarter is the other 6, and 18 + 6 = 24. It works.",
        "Same trick every time: divide by the bottom, multiply by the top." ] }
    },
    "Multi-step problems": {
      nudge: "Do not solve it all at once. What is the first thing you can work out?",
      method: { title: "One step at a time", points: [
        "Read the whole problem. Underline the question at the end.",
        "Ask: what do I need to know to answer that? Usually one number is missing.",
        "Find that missing number first. That is step 1.",
        "Now answer the real question with it. That is step 2.",
        "Write each step's answer down so you do not lose it." ],
        example: "3 crates of 20 darts, and you fire 14. How many left? Step 1: 3 × 20 = 60 darts. Step 2: 60 − 14 = 46 left." },
      worked: { title: "One two-step problem, slowly", intro: "A team of 4 each carries 15 pounds. They eat 12 pounds of food. How much weight is left?", steps: [
        "The question: weight left. To know that I need the total first, and I do not have it yet.",
        "Step 1, the total: 4 people × 15 pounds = 60 pounds.",
        "Step 2, the real question: 60 − 12 = 48 pounds left.",
        "Two small problems, not one big one. Write down 60 before you move on, or you will forget it." ] }
    },
    "Area and perimeter": {
      nudge: "Perimeter is the walk around the edge. Area is the floor inside. Which one is the question asking for?",
      method: { title: "Around the edge, or the floor inside", points: [
        "Perimeter is the distance around. Add all the sides. For a rectangle: 2 × (length + width).",
        "Area is the space inside. For a rectangle: length × width. Answer in square units.",
        "Draw it. A quick sketch with the numbers on the sides stops most mistakes.",
        "Fence, rope, border, edge: perimeter. Floor, carpet, paint, cover: area." ],
        example: "A platform 8 feet by 5 feet. Perimeter: 8 + 5 + 8 + 5 = 26 feet of railing. Area: 8 × 5 = 40 square feet of boards." },
      worked: { title: "One area problem, slowly", intro: "A tent floor is 12 feet long and 9 feet wide. How many square feet of ground does it cover?", steps: [
        "'Cover' and 'square feet' both say area, the floor inside.",
        "Area of a rectangle is length × width: 12 × 9.",
        "12 × 9: 10 × 9 = 90, plus 2 × 9 = 18, so 108.",
        "108 square feet. If the question had asked for rope around the edge, it would be 12 + 9 + 12 + 9 = 42 feet. Different question, different answer." ] }
    },
    "Money and decimals": {
      nudge: "Line up the decimal points, then add or subtract like whole numbers.",
      method: { title: "Line up the points", points: [
        "Write the amounts one above the other with the decimal points in a line.",
        "Fill empty spots with zeros. $5 is $5.00.",
        "Add or subtract as usual. Put the decimal point straight down in the answer.",
        "Change: what you paid minus what it cost." ],
        example: "$20.00 − $13.45. Line up the points. 20.00 − 13.45 = 6.55. Change is $6.55." },
      worked: { title: "One money problem, slowly", intro: "You buy a lantern for $12.75 and batteries for $4.50. You pay with a $20 bill. What is your change?", steps: [
        "Two steps. First the total, then the change.",
        "Total: 12.75 + 4.50. Points lined up. 75 + 50 cents = 125 cents, that is $1.25, so 12 + 4 + 1 = 17 and 25 cents: $17.25.",
        "Change: 20.00 − 17.25. Points lined up. 20.00 − 17.25 = 2.75.",
        "$2.75 change. Check: 17.25 + 2.75 = 20.00. It works." ] }
    },
    "Decimals": {
      nudge: "A decimal is just a fraction of ten or a hundred. 0.5 is half. 0.25 is a quarter.",
      method: { title: "Tenths and hundredths", points: [
        "The first place after the point is tenths, the second is hundredths. 0.3 is 3/10. 0.35 is 35/100.",
        "Adding and subtracting: line up the decimal points, fill gaps with zeros, work as usual.",
        "Multiplying by 10 moves the point one place right. Dividing by 10 moves it one place left.",
        "Comparing: give both numbers the same number of places. 0.5 versus 0.45 is 0.50 versus 0.45, so 0.5 is bigger." ],
        example: "3.6 + 1.85. Write 3.60 + 1.85. 60 + 85 hundredths = 145, so 5.45." },
      worked: { title: "One decimal problem, slowly", intro: "A trail is 4.2 miles. You have walked 1.75 miles. How far is left?", steps: [
        "Left means subtract: 4.2 − 1.75.",
        "Give both two places: 4.20 − 1.75. Points lined up.",
        "Hundredths: 0 − 5, borrow. Tenths: the 2 becomes 1, the 0 becomes 10. 10 − 5 = 5. Tenths: 1 − 7, borrow again. The 4 becomes 3, the 1 becomes 11. 11 − 7 = 4. Ones: 3 − 1 = 2.",
        "2.45 miles left. Check: 1.75 + 2.45 = 4.20. It works." ] }
    },
    "Ratios and percent": {
      nudge: "Percent means out of 100. 25% is a quarter. 50% is half. Find 10% first, it is the easy one.",
      method: { title: "Out of a hundred", points: [
        "Percent means per hundred. 30% is 30 out of every 100.",
        "10% of anything: divide by 10. 10% of 80 is 8.",
        "Build other percents from 10%. 30% is three 10%s. 5% is half of 10%.",
        "A ratio like 2:3 means for every 2 of one thing there are 3 of the other. Add the parts (5) to find the size of one share." ],
        example: "40% of 60 darts. 10% is 6. 40% is four of those: 24 darts." },
      worked: { title: "One percent problem, slowly", intro: "A crew of 40 rangers. 35% of them are on night watch. How many is that?", steps: [
        "35% of 40. I start with 10%: 40 ÷ 10 = 4.",
        "30% is three 10%s: 4 × 3 = 12.",
        "5% is half of 10%: half of 4 is 2.",
        "30% + 5% = 35%, so 12 + 2 = 14 rangers on night watch.",
        "Sense check: 35% is a bit more than a third, and a third of 40 is about 13. 14 fits." ] }
    },
    "Order of operations": {
      nudge: "Brackets first. Then multiply and divide. Add and subtract last.",
      method: { title: "The order", points: [
        "Do what is inside brackets first.",
        "Then multiplication and division, left to right.",
        "Then addition and subtraction, left to right.",
        "Write the new, shorter line after each step. Never do two steps in your head at once." ],
        example: "4 + 3 × 5. Multiply first: 3 × 5 = 15. Then 4 + 15 = 19. Not 35." },
      worked: { title: "One expression, slowly", intro: "Work out 20 − (2 + 4) × 3.", steps: [
        "Brackets first: 2 + 4 = 6. New line: 20 − 6 × 3.",
        "Multiply before subtract: 6 × 3 = 18. New line: 20 − 18.",
        "Subtract: 20 − 18 = 2.",
        "If I had gone left to right I would get 14 × 3 = 42 or 20 − 6 = 14 first. The order is the whole point. The answer is 2." ] }
    },
    "Negative numbers": {
      nudge: "Picture a thermometer or an elevator. Below zero is negative. Moving up adds, moving down subtracts.",
      method: { title: "Below zero", points: [
        "Draw a number line with 0 in the middle. Negatives go left, positives go right.",
        "Adding moves right. Subtracting moves left. Count the jumps.",
        "From −3, go up 5: −3, −2, −1, 0, 1, 2. You land on 2.",
        "Temperature dropping is subtracting. Rising is adding. Depth below sea level is negative." ],
        example: "It is −6 degrees at dawn. It rises 10 degrees by noon. −6 + 10 = 4 degrees." },
      worked: { title: "One negative-number problem, slowly", intro: "A diver is at −15 feet. She goes down 8 more feet, then up 20. Where is she?", steps: [
        "Start at −15. Down 8 means subtract: −15 − 8. Going further from zero on the negative side: −23.",
        "Up 20 means add: −23 + 20. On the number line I move right 20 jumps from −23.",
        "−23 + 20 = −3. Still below the surface, by 3 feet.",
        "Check with the thermometer picture: 23 below, warm up by 20, you are 3 below. It works." ] }
    },
    "Equations": {
      nudge: "The letter is a hidden number. Ask: what number makes both sides equal?",
      method: { title: "Find the hidden number", points: [
        "The letter stands for a number you do not know yet.",
        "Whatever you do to one side, do to the other. Keep it balanced like a scale.",
        "Undo things in reverse. If the letter has +7, subtract 7 from both sides. If it is × 3, divide both sides by 3.",
        "Check by putting your answer back in. Both sides should match." ],
        example: "n + 7 = 19. Subtract 7 from both sides: n = 12. Check: 12 + 7 = 19. Yes." },
      worked: { title: "One equation, slowly", intro: "Solve 3x + 4 = 25.", steps: [
        "x is the hidden number. It has been multiplied by 3, then 4 was added. I undo those in reverse.",
        "Undo the + 4: subtract 4 from both sides. 3x = 21.",
        "Undo the × 3: divide both sides by 3. x = 7.",
        "Check: 3 × 7 = 21, plus 4 = 25. Both sides match. x = 7." ] }
    },
    "Volume": {
      nudge: "Volume is how much fits inside a box. Length times width times height.",
      method: { title: "Filling a box", points: [
        "Volume is the space inside a 3-D shape, measured in cubes.",
        "For a box: length × width × height. Answer in cubic units.",
        "Do it in two steps: find the floor area first (length × width), then multiply by the height.",
        "Sketch the box and label the three edges before you multiply." ],
        example: "A crate 4 by 3 by 2 feet. Floor: 4 × 3 = 12. Times height: 12 × 2 = 24 cubic feet." },
      worked: { title: "One volume problem, slowly", intro: "A water tank is 5 feet long, 2 feet wide and 3 feet tall. How many cubic feet does it hold?", steps: [
        "Three edges: 5, 2 and 3. Volume is all three multiplied.",
        "Floor first: 5 × 2 = 10 square feet.",
        "Now stack it 3 high: 10 × 3 = 30.",
        "30 cubic feet. Picture 30 one-foot cubes packed in. That is the tank." ] }
    },
    "Statistics": {
      nudge: "Mean is the fair share: add them all, divide by how many. Median is the middle one when they are in order.",
      method: { title: "Mean, median, range", points: [
        "Mean (average): add every number, then divide by how many numbers there are.",
        "Median: put the numbers in order and take the middle one. With an even count, average the two middle ones.",
        "Mode: the number that appears most often.",
        "Range: biggest minus smallest." ],
        example: "Scores 4, 8, 6. Mean: 18 ÷ 3 = 6. Median: in order 4, 6, 8, the middle is 6. Range: 8 − 4 = 4." },
      worked: { title: "One average, slowly", intro: "Five climbs took 20, 25, 30, 35 and 40 minutes. What was the mean time?", steps: [
        "Mean means add them all, then share equally among the five.",
        "20 + 25 = 45. 45 + 30 = 75. 75 + 35 = 110. 110 + 40 = 150.",
        "150 ÷ 5 = 30.",
        "Mean time: 30 minutes. It is also the median here, the middle one in order. That is not always true, but it is here." ] }
    },
    "Linear relationships": {
      nudge: "Find two things: what you start with, and how much is added each time. Then multiply and add.",
      method: { title: "Start, then step", points: [
        "Look for the starting amount. That is the number you have before anything happens.",
        "Look for the step: how much is added (or taken away) each hour, each day, each time.",
        "Multiply the step by how many times it happens, then add the start.",
        "Written short, that is y = mx + b. m is the step, x is how many times, b is the start, y is the answer." ],
        example: "Start with 10 and add 4 every hour. After 6 hours: 4 × 6 = 24, plus the 10 you started with = 34." },
      worked: { title: "One straight-line rule, slowly", intro: "A crew starts with 15 crates and loads 7 more every hour. How many crates after 8 hours?", steps: [
        "Start: 15 crates. That is b, the number before the clock starts.",
        "Step: 7 crates an hour. That is m, what gets added each time.",
        "Times: 8 hours. That is x. So 7 × 8 = 56 crates loaded.",
        "Add the start: 56 + 15 = 71 crates. y = mx + b, filled in: 7 × 8 + 15 = 71." ] }
    },
    "Powers and roots": {
      nudge: "A little 2 means times itself. A square root asks the other way round: what number times itself makes this?",
      method: { title: "Squaring and unsquaring", points: [
        "5² means 5 × 5 = 25. The little 2 is not 'times 2', it is 'used twice'.",
        "10³ means 10 × 10 × 10 = 1,000. A power of 10 is just 1 with that many zeros after it.",
        "A square root undoes a square. The square root of 25 is 5, because 5 × 5 = 25.",
        "To unsquare, hunt through the ones you know: 1, 4, 9, 16, 25, 36, 49, 64, 81, 100. Learn that row and most of these are instant." ],
        example: "A square pad has an area of 64 square meters. 8 × 8 = 64, so each side is 8 meters." },
      worked: { title: "One power, slowly", intro: "A log says the count is 6 × 10⁴. Written out in full, what number is that?", steps: [
        "Two parts: a 6, and 10⁴. Deal with the power first.",
        "10⁴ means four tens multiplied: 10 × 10 × 10 × 10. That is 1 with four zeros: 10,000.",
        "Now the 6: 6 × 10,000 = 60,000.",
        "60,000. The quick check: the little number is how many zeros follow the 1, and then you multiply." ] }
    },
    "Pythagorean theorem": {
      nudge: "Right angle in the picture? Square the two short sides, add them, then take the square root.",
      method: { title: "a² + b² = c²", points: [
        "It only works when the triangle has a square corner, a right angle.",
        "c is the slanted side, always the longest one. a and b are the two that meet at the corner.",
        "Square a, square b, add them. That total is c².",
        "Take the square root of that total to get c itself. Do not stop at c² — that is the most common slip." ],
        example: "Sides 3 and 4. 3² = 9, 4² = 16, 9 + 16 = 25. The square root of 25 is 5, so the slanted side is 5." },
      worked: { title: "One triangle, slowly", intro: "A rope runs from the top of a 5-meter mast to a point 12 meters away on the ground. How long is the rope?", steps: [
        "Draw it. The mast goes straight up, the ground goes straight out, so they meet at a right angle. The rope is the slant, so the rope is c.",
        "Square the two short sides: 5² = 25 and 12² = 144.",
        "Add them: 25 + 144 = 169. That is c², not the answer yet.",
        "Square root of 169: 13 × 13 = 169, so c = 13. The rope is 13 meters." ] }
    }
  }
};
