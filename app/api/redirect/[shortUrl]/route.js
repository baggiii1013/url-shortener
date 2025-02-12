import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

export const dynamic = 'force-dynamic';

export async function GET(request, { params }) {
  const { shortUrl } = params;

  try {
    const client = await clientPromise;
    const db = client.db("bitlinks");
    const collection = db.collection("url");

    const doc = await collection.findOne({ shortUrl: shortUrl });

    if (doc) {
      console.log('Found document:', doc);
      let url = doc.url.startsWith('http') ? doc.url : `https://${doc.url}`;
      url = encodeURI(url);
      console.log(url);
      return NextResponse.json({ url }); // Return the URL as JSON
    } else {
      console.log('No matching document found for shortUrl:', shortUrl);
      return NextResponse.json({ url: process.env.NEXT_PUBLIC_HOST || "/" }); // Return default URL
    }
  } catch (error) {
    console.error('Error occurred:', error);
    return NextResponse.json({ url: process.env.NEXT_PUBLIC_HOST || "/" }); // Return default URL
  }
}