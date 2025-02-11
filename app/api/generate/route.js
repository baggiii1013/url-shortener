import clientPromise from "@/lib/mongodb";

export async function POST(req) {
  const body = await req.json();
  const client = await clientPromise;
  const db = client.db("bitlinks");
  const collection = db.collection("url");

  const doc = await collection.findOne({ shortUrl :body.shortUrl});
  //ensuring only one shortUrl exits for every url only then inserting in the database
  if (doc) {
    return Response.json({
      success: "false",
      error: "true",
      message: "ShortUrl already exits",
    });
  } else {
    //inserting the url and the shorturl in the database
    const result = await collection.insertOne({
      url: body.url,
      shortUrl: body.shortUrl,
    });
  }

  return Response.json({
    success: "true",
    error: "false",
    message: "Url generated successfully",
  });
}
