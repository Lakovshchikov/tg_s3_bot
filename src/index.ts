// import express, { type Express, type Request, type Response } from 'express';
import 'dotenv/config';
import { Telegraf } from 'telegraf';
import { message } from 'telegraf/filters';

// const app: Express = express();
// const port = process.env.PORT;
export const bot = new Telegraf(process.env.TG_TOKEN);

bot.command('testCommand', (ctx) => ctx.reply('Hello'));

bot.on(message('sticker'), (ctx) => ctx.reply('👍'));
bot.hears('hi', (ctx) => ctx.reply('Hey there'));

// app.use(await bot.createWebhook({ domain: process.env.WEBHOOK_DOMAIN }));

// app.get('/healthcheck', (req: Request, res: Response) => {
//   res.send('Express + TypeScript Server');
// });

// app.listen(port, () => {
//   console.log(`[server]: Server is running at http://localhost:${port}`);
// });
