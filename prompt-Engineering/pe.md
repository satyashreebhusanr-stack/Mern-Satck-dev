What is prompt engineering:-
 
- prompt engineering is the practice of design and refining the instruction(called prompts) given to an ai model to get better ,more accurate& moreuse full output.


What is LLM:-

- LLM stands for large language model
- it is an Ai model trained on massive amount of text data to->


1. understand language
2. predict the next word in a sentence
3. Generate meaning full responce


ex.google keyboard

Role of LLM prompt engineering:-

- prompt engineering -> how you talk 
- LLM -> who you are talking to

- LLM's helps us to ->

1. Read our prompt
2. Interperet our intent
3. GENERATE a good responce based on our prompt.


Module  1-> Introduction to LLM & prompting basics

descriminative AI ->


- Descriminative AI is a Ai technique that helps us to classify data
- ex.

1. Email- spam & not spam
2. Face ID(face recognition)
3. Netflix Recomandation etc..

Generative AI ->

- in Generative AI, it not only the classify data but it generate the new data through AI.
- ex.


1. chatgpt(textgeneration)
2. midjourney(image generation)
3. Github Copilot(code generation)etc..


Evoluation of ->RNN,LSTM & transformer

1. RNN (Recurrent neural Network)

- An RNN is atype of Neural Network to process of sequencial data like ...
 - tecxt
 - speech
 - time series etc.
- it process the data step by step.
- it remember prib=vious information using hidden state in RNN 

previous inf. -> RNN ->new Inf.

ex. sentence -> "i love AI"
RNN reads it -i->then "love" -> then "AI"
(Like keeping memory  of previous word)

The dis-advantages are ->

i. it can't remember a long sentence because of short memory.
ii. struggle with reading long sentence.

2. LSTM:-

- it stands for Long Short-term Memory.
- it is an improved version of RNN

How LSTM works ->

- LSTM uses some gates to control informaton.
  - forgot gate -> removes the useless data
  - input gate -> adds new data/info.
  - output gate->decides what the output

- basically it acts like a "smart memory system".

Advantages ->

- it solve RNN's memory problem.
- work well for 
 - language translation
 - speech recognition
 - time-series prediction

3. transformer ->

transformer is a modern Ai architecture that power LLM's(like chatgpt).

How it works->

- it uses self atrention mechanism.
 (it allows to understand context, relation between words in asequence)
- looks at all the words at once , not step by step.


ex."the animal didn't cross the road because it was tired"

- in this ex,the transformer understand "it" refers to animal using attentioin mechanism.

Advantages ->
1. handle long context verry well.
2. Faster (processing is very first)
3. give more accurate o/p than RNN/LSTM.

feature           RNN           LSTM           transformer
data processing   sequential    sequential      parallel
memory            short         long            very long
speed             slow          slow             fast
performance       basic         better          best


Prompt Enginering ->

- by the transformer we can do the prompt engineering in abetter way.

1. long context : transformer helps to memories  the long context given in the prompt.(it works on parallel data proccesing)
2. contextual understanding if we can put some word in defferent form  the transformer a;so understand that word properly.
 ex. Bank(river bank.financial bank)
- AI don't read our words ,it read tokens 
- we can't take 1 token as a 1 word, although "unbelievable " word can segrigate to different token.


ex.


- woeds: "playing"-> play + ing
- words: transformation -> trans + form + ation

- AI didn't understand word directly so we can segrigate different token to form prefix(re-,un-) & sufix(-ing,-ation,-ed) so that  AI can recreat some words by recognize it properly.

Token ->
 AI Tools                             approx token limit

 chatgpt                             ~128,000 to ~256,000 token
                                        (depending on version)

 gemini                             ~1,000,000 to ~2,000,000 tokens

 claude                             ~200,000 tokens(standard)
                                     upto~1,000,000 token(enterprize)
                                     
perplexitty                          ~128,000 to ~200,000 tokens


Context window of different LLMS :-


1.chatgpt -> excelent for long discussiion,essays,emails,sunnarization within it's ~128 - ~256k tokens.

2. Gemini -> Processing multiple books, large size docs at once ,large codebase analysis in one snapshot, complex project takes across long charts  etc..

3. Claude -> it ideal for large document reasoning/ scanning with more safely.

4. perplexity AI -> uses in various backend model.


Structure prompting -> 
1. Role( person role)
2. Context
3. task(what action we perform)
4. Constraints( negative constreints)
5. Output

We can take some scenario for prompting ->
 use case - 1 : Writing & vontent creation

 Simple prompt -> Write a cold email for google internship.

 Engineering prompt -> "act as a carrier coach. Write a personalized cold email to arecuiter at google for a data science internship . Mention my proficiency in python & sql.keep the tone profesional but eager & limit it to 150 words"


 use case 2 : coding & tchnical task

 simple prompt -> fix this code( some code)

 E. prompt -> "act as a senior python developer . review the following code for a log-in logics, identify potential security vulnaraabilities and logical erros. provide the correct code with comments explannig each fix "


Module 2 -> Core prompting technique ->

1. Zero shot promting: "direct order"

- in this prompting we didn't give any example to AI but we provide a samll instruction and we think that by the help of pre-trained knwledge,AI eill provide the answers.

prompt -> calssify the sentiment of this review : "the battery life of this laptop amazing but the screen is a bit dull"

output -> mixed/neutral

2. Few shot prompting : "the pattern maker"

- We have faced some prob;em on Zero shot promting because sometimes it failed but in few shot prompting ,we have to give 3,4 example to understand the prompt then it gives a good responce.


ex. give the customer feedback in json format.
input/prompt ->
example 1 : i love the piza! -> {sentiment : "positive","lable": 1}
example 2 : the deliverry was late -> {"sentiment": "negative","lable":0 }
example 3: the food was okay ->{"sentiment":"neutral","lable":0.5}

3.chain of thought(COT) : "the logical thinker"

- this is the most imp. technique to solve complex problem.if we can put any thing in AI and we give prompt "think step by step " but AI will look in full sentence and create the logic then the output. so it's create a little " hallucination"/confution.

- use case -> 
- prompt -> "a farmer has 15 sheep. All but * die. How much are left? let's think step by step"

1.total sheep -15
2.all but 8 diemeans only 8 are left rest sheep are die.
3.so only 8 sheeps are present.
- answer is 8.

4. Instruction prompting: framework

- in this prompting  we can put step by step instruction so that it will give the required output

- person (role) ; "act as a senior python dev"
- constraints(limit): "don't yuse external libraries. keep code ub=nder 20 lines"
- specific instruction: " explain the code like i am 5 years olc"

use casse -> writting professional email

prompt-> "act as a polite HR manager . write a rejection email for a candidate who cleared interview but we can't hire due to buget cuts. mention that we will keep their cv fo future.constraints-> keep it simple & emphatic ,don't mention the exact budget amount."



module 3 - advanced prompt engineering frameworks ->
  1. ReAct FRame work(reason+Action)

  - react means reason + actiing.
  - before some timw AI only think or AI only give the result but now in React frame wprk on the bais of a loop.like it will think first then give the result then think again wheather it's right or wrong then again give the result.

  Use case -> researching a market trnd using AI with browsing capabilities( like chatgpt with search or perplexity)

  prompt -> "Solve the following task using a thought -action -observation loop. Task:analyze the current stock performance of NVIDA compared to its competitors in the last 7 days Instruction:1. start with a thought (what do we need to find ?)2.perform an action (search for the specific data)3.provide an observation(summerize what we find.)4.repeat until you can provide afinal recomndation for a short-trm investor"


2. Three of Thoughts(TOT)

- "three of thoughts" is more efficient than "chain of thoughts", we can say TOT is a big brother of COT.
- in COT AI can think for only line but in "TOT" it can cegrigate  one line into diferent branches /nodes like as a tree then think it separately.

use case ->in TOT AI give thestartegies are suppose will tajwe A,B&c in these 3 branches of aline suppose we find B will work better then c/A then they cancle c?A only take B as the resultant.

prompt ->" imagine three different experts ar brainstroming a solution to this problem: how can a small local bakery increase it's  sales by 50% in3 months with a budget of only $500?"











