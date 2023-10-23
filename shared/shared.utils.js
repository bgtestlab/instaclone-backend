import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";

// AWS.config.update({
//     credentials: {
//       accessKeyId: process.env.AWS_KEY,
//       secretAccessKey: process.env.AWS_SECRET,
//     },
//   });

const client = new S3Client({
  region: "ap-northeast-2",
  credentials: {
    accessKeyId: process.env.AWS_KEY,
    secretAccessKey: process.env.AWS_SECRET,
  },
});

export const uploadPhoto = async (file, userId) => {
  const { filename, createReadStream } = await file;
  const readStream = createReadStream();
  const objectName = `${userId}-${Date.now()}-${filename}`;

  const command = new PutObjectCommand({
    Bucket: "instaclone-uploads-nomad",
    Key: objectName,
    Body: readStream,
    //ACL: "public-read",
  });

  try {
    const response = await client.send(command);
    console.log(response);
  } catch (err) {
    console.error(err);
  }

  return response;

  //   const { Location } = await new AWS.S3()
  //     .upload({
  //       Bucket: "instaclone-uploads",
  //       Key: objectName,
  //       ACL: "public-read",
  //       Body: readStream,
  //     })
  //     .promise();
  //   return Location;
};
