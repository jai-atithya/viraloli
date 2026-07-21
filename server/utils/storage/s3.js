const {
    S3Client,
    PutObjectCommand,
    ListObjectsV2Command,
    DeleteObjectsCommand,
} = require("@aws-sdk/client-s3");

const s3 = new S3Client({
    region: process.env.AWS_REGION,
});

const BUCKET = process.env.AWS_BUCKET_NAME;

const saveUnitImageS3 = async (buffer, unitNumber, fileName) => {
    const key = `units/U${unitNumber}/${fileName}`;

    await s3.send(
        new PutObjectCommand({
            Bucket: BUCKET,
            Key: key,
            Body: buffer,
            ContentType: "image/webp",
        })
    );

    return key;
};

const deleteUnitFolderS3 = async (unitNumber) => {
    const prefix = `units/U${unitNumber}/`;

    const { Contents } = await s3.send(
        new ListObjectsV2Command({
            Bucket: BUCKET,
            Prefix: prefix,
        })
    );

    if (!Contents || Contents.length === 0) {
        throw Object.assign(
            new Error(`Unit ${unitNumber} images not found`),
            {
                statusCode: 404,
            }
        );
    }

    await s3.send(
        new DeleteObjectsCommand({
            Bucket: BUCKET,
            Delete: {
                Objects: Contents.map((obj) => ({
                    Key: obj.Key,
                })),
            },
        })
    );
};

module.exports = {
    saveUnitImage: saveUnitImageS3,
    deleteUnitFolder: deleteUnitFolderS3,
};