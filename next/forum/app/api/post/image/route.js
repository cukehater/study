import aws from 'aws-sdk'
import { NextResponse } from 'next/server'
export async function GET(req) {
  const fileName = req.nextUrl.searchParams.get('file')

  aws.config.update({
    accessKeyId: process.env.S3_ACCESS_KEY,
    secretAccessKey: process.env.S3_SECRET_KEY,
    region: 'ap-northeast-2',
    signatureVersion: 'v4'
  })

  const s3 = new aws.S3()
  const url = await s3.createPresignedPost({
    Bucket: process.env.S3_BUCKET_NAME,
    Fields: { key: fileName },
    Expires: 60, // seconds
    Conditions: [
      ['content-length-range', 0, 1048576] // 파일용량 1MB 까지 제한
    ]
  })

  return NextResponse.json({ message: 'Success', url }, { status: 200 })
}
