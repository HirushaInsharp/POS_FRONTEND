// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  console.log("api_handle_mf");
  res.status(200).json({ name: "John Doe" });
}
