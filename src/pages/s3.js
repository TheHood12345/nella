import { S3Client,PutObjectCommand } from "@aws-sdk/client-s3";

const s3 = new S3Client({
    region: "eu-west-1",
    credentials: {
        accessKeyId: "AKIASZPIVUO5LETSUJWI",
        secretAccessKey: "code"
    },
})

export {s3}