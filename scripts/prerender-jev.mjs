import { readFile, writeFile, mkdir } from 'node:fs/promises';
import { createServer } from 'vite';
import React from 'react';
import { renderToString } from 'react-dom/server';

// Publish a readable article and social metadata even without JavaScript.
const route = '/jev-style-evals/bfcl-v1';
const canonical = `https://www.pritishyuvraj.com${route}`;
const title = 'Tool Selection with Jev-Style Decision Models: A BFCL V1 Pilot Study | Pritish Yuvraj';
const description = 'A short-context evaluation of seven decision systems on 250 BFCL V1-derived cases, toward long-context single-prefill tool selection for on-device assistants.';
const image = `${canonical}/benchmark-card.png`;
const report = JSON.parse(await readFile(`public${route}/report.json`, 'utf8'));
const server = await createServer({ server: { middlewareMode: true }, appType: 'custom' });
try {
  const { default: Article } = await server.ssrLoadModule('/src/JevRoutingStudy.tsx');
  const body = renderToString(React.createElement(Article, { initialReport: report }));
  const metadata = `
    <meta name="description" content="${description}" />
    <link rel="canonical" href="${canonical}" />
    <meta property="og:type" content="article" />
    <meta property="og:title" content="${title}" />
    <meta property="og:description" content="${description}" />
    <meta property="og:url" content="${canonical}" />
    <meta property="og:image" content="${image}" />
    <meta property="og:image:width" content="1600" />
    <meta property="og:image:height" content="1000" />
    <meta property="og:image:alt" content="Routing accuracy and recorded median latency for seven systems on 250 BFCL-derived cases" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${title}" />
    <meta name="twitter:description" content="${description}" />
    <meta name="twitter:image" content="${image}" />
    <script type="application/ld+json">${JSON.stringify({ '@context': 'https://schema.org', '@type': 'BlogPosting', headline: title.split(' | ')[0], description, url: canonical, image, datePublished: '2026-09-28', author: { '@type': 'Person', name: 'Pritish Yuvraj', url: 'https://www.pritishyuvraj.com' } })}</script>`;
  const template = await readFile('dist/index.html', 'utf8');
  const html = template.replace(/<title>.*?<\/title>/, `<title>${title}</title>`).replace('</head>', `${metadata}\n  </head>`).replace('<div id="root"></div>', `<div id="root">${body}</div>`);
  if (!html.includes('1,750 predictions') || !html.includes('og:image')) throw new Error('Article prerender validation failed');
  await mkdir(`dist${route}`, { recursive: true });
  await writeFile(`dist${route}/index.html`, html);
  console.log(`Prerendered ${route}: ${Buffer.byteLength(html)} bytes`);
} finally {
  await server.close();
}
