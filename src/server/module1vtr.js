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
const answer = "\n# End\n[React code ]\n";

readline.question(
  "# Convertion from React front end framework to Vue front end frame work\n[ Vue code ]\n",
  async (quest) => {
    question = quest;

    await apiRequest();

    // readline.close();
  }
);
