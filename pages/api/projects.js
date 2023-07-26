import path from "path";
import { promises as fs } from "fs";

const handler = async (req, res) => {
  //Find the absolute path of the json directory
  const jsonDirectory = path.join(process.cwd(), "pages/api");
  //Read the json data file data.json
  const fileContents = await fs.readFile(
    jsonDirectory + "/projects.json",
    "utf8"
  );

  //Return the content of the data file in json format
  res.status(200).json(JSON.parse(fileContents));
};

export default handler;