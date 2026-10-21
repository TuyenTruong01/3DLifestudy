# 3D LIFE platform

One deployment repository containing four independent Vite frontends. The applications are copied from the original demos; they are not merged into one React application.

## Applications

| Path | Application |
| --- | --- |
| `/` | 3D LIFE website |
| `/studio/room/` | Bố trí Nội thất 3D |
| `/studio/furniture/` | Thiết kế Nội thất 3D |
| `/lab/equipment/` | Khám phá Thiết bị 3D |

## Local setup

Install all workspace dependencies once from the repository root:

```bash
npm install
```

Build one Vercel-ready output folder:

```bash
npm run build
```

The generated `dist/` is served by Vercel according to `vercel.json`.

## GitHub and Vercel

1. Create an empty GitHub repository, then initialize this directory with `git init`, commit, and push it.
2. Import that repository in Vercel.
3. Use the repository root as the Vercel Root Directory. Vercel reads `vercel.json`, runs `npm run build`, and deploys `dist/`.
4. Attach the desired domain in Vercel. All four paths then share that domain.
