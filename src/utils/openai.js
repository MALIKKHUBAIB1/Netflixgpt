import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: "",
  dangerouslyAllowBrowser: true, // This is the default and can be omitted
});
export default openai;
