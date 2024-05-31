import fs from "fs/promises";

const deleteFileHelper = async (filename) => {
  const filePath = `./uploads/${filename}`;
  await fs.unlink(filePath);
};

export default deleteFileHelper;
