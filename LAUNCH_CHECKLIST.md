# Fenix — Launch Checklist

Everything left to do to get the site live on your own domain, in order.

---

## 1. Enquiry form (Web3Forms)

- [ ] Go to **web3forms.com** → **Create Access Key** → enter the inbox that should receive enquiries. No account needed.
- [ ] Copy the access key from the email they send you.
- [ ] In the project root, copy `.env.example` to `.env.local` and fill it in:
      ```
      VITE_WEB3FORMS_ACCESS_KEY=your-key-here
      ```
- [ ] Restart `npm run dev`, then submit the Contact form once.
- [ ] Check your inbox **and spam folder**. Mark the first email as "Not spam".

## 2. Check the compressed video

- [ ] Open the IRIS Analysis page locally and watch the video. It was re-encoded from 28 MB to 12.8 MB to fit Cloudflare's 25 MiB per-file limit. The original is in git history if needed.

## 3. Push the code to GitHub

- [ ] Commit and push the pending changes to `main` (form integration, compressed video and images, `worker/`, `wrangler.jsonc`, `package.json`, `.env.example`, `.gitignore`). Cloudflare deploys from GitHub, so this must happen before step 6.

## 4. Prepare GoDaddy

Open the domain in GoDaddy: **My Products → Domains → your domain**.

- [ ] Open the **DNS** tab and **screenshot every record**, especially MX, TXT and CNAME (these keep your email working).
- [ ] If **DNSSEC** is on, **turn it off**. You can turn it back on in Cloudflare later.
- [ ] Note: anything GoDaddy currently shows on this domain (Website Builder, forwarding) will stop once you switch. That's expected.

## 5. Move DNS to Cloudflare (free)

- [ ] Sign up at **dash.cloudflare.com** → **Add a domain** → enter your domain without `www` → choose the **Free** plan.
- [ ] Compare the records Cloudflare imported against your GoDaddy screenshot. Add anything missing, especially email records.
- [ ] Copy the **two Cloudflare nameservers** it gives you.
- [ ] In GoDaddy: **DNS → Nameservers → Change Nameservers → "I'll use my own nameservers"**.
- [ ] Remove the `domaincontrol.com` entries, paste the two Cloudflare nameservers, and save.
- [ ] In Cloudflare, click **Check nameservers**. Wait for the "Active" email (usually under an hour, up to 24–48 h).

## 6. Deploy the site on Cloudflare

- [ ] **Workers & Pages → Create → Import a repository** → connect GitHub → choose `PremVispute/Fenix`.
- [ ] Build command: `npm run build`
- [ ] Deploy command: `npx wrangler deploy` (usually pre-filled)
- [ ] Add `VITE_WEB3FORMS_ACCESS_KEY` under **Settings → Build → Variables and secrets**. It must be a **build** variable, not a runtime one, or the live form will fail.
- [ ] Deploy. After this, every push to `main` redeploys automatically.

## 7. Connect your domain

- [ ] In the project: **Settings → Domains & Routes → Add custom domain**.
- [ ] Add `yourdomain.com` **and** `www.yourdomain.com`. SSL is issued automatically within a few minutes. Both are needed: the worker redirects `www` to the plain domain, but only if `www` is connected.

## 8. Test the live site

- [ ] `yourdomain.com` loads over `https://`, and `www.yourdomain.com` redirects to it.
- [ ] Open a deep link directly, e.g. `yourdomain.com/contact`. It should load the page, not a 404.
- [ ] Submit the enquiry form and confirm the email arrives.
- [ ] Play the IRIS video.
- [ ] Send a test email to your domain address to confirm email still works.

---

## Later / optional

- [x] **Redirect `www` → plain domain.** Done in code (`worker/index.ts`). It works once `www` is added as a custom domain in step 7.
- [ ] **Turn on hCaptcha if spam starts coming in.** The code is ready and switched off. To turn it on:
      1. In the Web3Forms dashboard, enable **hCaptcha** as the spam protection option.
      2. In Cloudflare, add a build variable `VITE_HCAPTCHA` = `true` (next to the access key), then redeploy.
      Do both, or neither. With the dashboard on and the variable missing, every enquiry is rejected.
- [x] **Compress the large images.** Photos went from 53 MB to 8.7 MB (max 2000 px). The logos went from 2.2 MB to 0.5 MB and the favicon from 1.7 MB to 0.13 MB. The originals are in git history.
- [ ] **Move the domain registration to Cloudflare Registrar** once 60+ days have passed since you bought or last transferred it. Renewals are at wholesale cost (about $10–11/year for a `.com`, vs about $22+ at GoDaddy), and the transfer adds a year, so no paid time is lost.
