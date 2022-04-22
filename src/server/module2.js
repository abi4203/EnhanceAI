const got = require("got");

const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

let question;

const apiRequest = async () => {
  const url = "https://api.openai.com/v1/engines/davinci-codex/completions";
  const prompt = `${question}${answer}`;
  const params = {
    prompt: prompt,
    temperature: 0.5,

    max_tokens: 500,
    frequency_penalty: 0,
    presence_penalty: 0.6,
    stop: "",
  };
  const headers = {
    Authorization: `Bearer ${process.env.OPENAI_SECRET_KEY}`,
  };

  try {
    const response = await got
      .post(url, { json: params, headers: headers })
      .json();
    output = `${prompt}${response.choices[0].text}`;
    console.log(output.split("# End")[1]);
  } catch (err) {
    console.log(err);
  }
};

// The new question asked by the user.
const answer = "\n\"\"\"\nHere's what the above code snippet is doing:\n1.\n";

readline.question(
  "#enter the code here :\n",
  async (quest) => {
    question = quest;

    await apiRequest();

    // readline.close();
  }
);
