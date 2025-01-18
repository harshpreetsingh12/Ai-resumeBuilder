import { GoogleGenerativeAI } from "@google/generative-ai";


export async function generateSummay(input:string) { //pass on the basic details to genereate summary
    try {
      const genAi = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GEMINI_API_KEY || "");
      const model = genAi.getGenerativeModel({ model: "gemini-1.5-flash" });
  
      const prompt = `
      Based on the following input, create a concise, professional resume summary in 400-500 characters. The summary should be tailored to highlight the individual's key skills, achievements, and professional experience. Ensure the tone is formal and engaging. Avoid generic phrases and keep it relevant to the provided information.

      Input: "${input}"
      
      Example output:
      - For a teacher: "Dedicated educator with 5+ years of experience in curriculum development and classroom instruction. Skilled in fostering an inclusive learning environment and leveraging innovative teaching strategies to improve student outcomes."
      - For a marketing professional: "Results-driven marketing specialist with a proven track record of developing successful campaigns that boost brand visibility and revenue. Proficient in digital marketing, market research, and analytics."
      - For a project manager: "Experienced project manager with 7+ years of expertise in leading cross-functional teams to deliver complex projects on time and within budget. Skilled in Agile methodologies, stakeholder communication, and risk management."

      Generate summary:
    `;
  
      try {
        const result = await model.generateContent(prompt);
        const finalOutput = result.response.text();
        return finalOutput;
      } catch (parseError) {
        console.error("Error parsing JSON response:", parseError);
        return [];
      }
    } catch (error) {
      console.error("Error generating summary :", error);
      throw new Error("Failed to generate summary");
    }
  }
  