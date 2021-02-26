// pages/api/login.js
import {Magic} from '@magic-sdk/admin'
import Iron from '@hapi/iron'
import CookieService from '@/lib/cookie'


let magic = new Magic(process.env.MAGIC_SECRET_KEY)

export default async (req, res) => {
  if (req.method !== 'POST') return res.status(405).end()

  // exchange the DID from Magic for some user data
  // TODO

  const did = magic.utils.parseAuthorizationHeader(req.headers.authorization)
  const user = await new Magic(process.env.MAGIC_SECRET_KEY).users.getMetadataByToken(did)

  // Author a couple of cookies to persist a users session
  // TODO
  const token = await Iron.seal(user, process.env.ENCRYPTION_SECRET, Iron.defaults)
  CookieService.setTokenCookie(res, token)

  
  res.end()
}