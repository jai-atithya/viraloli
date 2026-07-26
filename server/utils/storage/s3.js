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

const saveIntroVideoS3 = async (
    buffer,
    unitNumber,
    fileName,
    contentType
) => {
    const key = `units/U${unitNumber}/${fileName}`;

    await s3.send(
        new PutObjectCommand({
            Bucket: BUCKET,
            Key: key,
            Body: buffer,
            ContentType: contentType,
        })
    );

    return key;
};

const deleteIntroVideoS3 = async (unitNumber) => {
    const prefix = `units/U${unitNumber}/`;

    const { Contents } = await s3.send(
        new ListObjectsV2Command({
            Bucket: BUCKET,
            Prefix: prefix,
        })
    );

    const introObjects = (Contents || []).filter((obj) => {
        const name = obj.Key.split("/").pop();
        return (
            name.startsWith("introTamil.") ||
            name.startsWith("introEnglish.")
        );
    });

    if (introObjects.length === 0) {
        throw Object.assign(
            new Error(`Unit ${unitNumber} intro videos not found`),
            {
                statusCode: 404,
            }
        );
    }

    await s3.send(
        new DeleteObjectsCommand({
            Bucket: BUCKET,
            Delete: {
                Objects: introObjects.map((obj) => ({
                    Key: obj.Key,
                })),
            },
        })
    );
};

module.exports = {
    saveUnitImage: saveUnitImageS3,
    deleteUnitFolder: deleteUnitFolderS3,
    saveIntroVideo: saveIntroVideoS3,
    deleteIntroVideo: deleteIntroVideoS3
};