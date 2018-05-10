'use strict';
import AWS from "aws-sdk";

const s3 = new AWS.S3();

let storeToS3 = async (bucketName, ipfsHash, ipfsObject) => {

  return new Promise(function(resolve, reject) {

    const params = {
      ACL: 'public-read-write',
      Bucket: bucketName,
      Key: ipfsHash,
      Body: JSON.stringify(ipfsObject)
    };

    s3.putObject(params, function(error, data) {

      if (error) {
        console.log(error);
        return reject(error);
      }

      return resolve(data);
    });
  });
};

export default storeToS3;